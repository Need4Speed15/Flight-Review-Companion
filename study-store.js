/* Browser-local study records. Shared with the optional sync endpoint as plain JSON. */
(function (root, factory) {
  const api = factory(root);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FlightStudyStore = api;
})(typeof window === 'object' ? window : globalThis, function (root) {
  'use strict';
  const STORAGE_KEY = 'flight-review-records-v1';
  const DAY = 86400000;
  const KNOWN_INTERVALS = [1, 3, 7, 14, 30];
  const MAX_RECORD_BYTES = 128 * 1024;
  const validKey = key => typeof key === 'string' && /^(?:session|preferences|(?:bookmark|flag|learning|mix):[A-Za-z0-9_-]{1,100})$/.test(key);
  const clone = value => JSON.parse(JSON.stringify(value));
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const compare = (a, b) => !b ? 1 : a.updatedAt !== b.updatedAt ? a.updatedAt - b.updatedAt : a.opId === b.opId ? 0 : a.opId > b.opId ? 1 : -1;
  const finiteCount = value => Number.isSafeInteger(value) && value >= 0 ? value : 0;
  const localDay = value => { const date = new Date(value); return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`; };
  function jsonBytes(json) {
    let bytes = 0;
    for (const character of json) {
      const code = character.codePointAt(0);
      bytes += code <= 0x7f ? 1 : code <= 0x7ff ? 2 : code <= 0xffff ? 3 : 4;
    }
    return bytes;
  }
  function stableJSON(value) {
    const sorted = item => Array.isArray(item) ? item.map(sorted) : object(item) ? Object.fromEntries(Object.keys(item).sort().map(key => [key, sorted(item[key])])) : item;
    return JSON.stringify(sorted(value));
  }

  function safeRecord(key, record, now) {
    if (!validKey(key) || !object(record) || !Object.hasOwn(record, 'value') ||
        !Number.isSafeInteger(record.updatedAt) || record.updatedAt < 0 || record.updatedAt > now + 5 * 60 * 1000 ||
        typeof record.opId !== 'string' || record.opId.length < 1 || record.opId.length > 160 || !/^[-.:A-Za-z0-9_]+$/.test(record.opId)) return null;
    try {
      const json = JSON.stringify(record.value);
      if (typeof json !== 'string' || jsonBytes(json) > MAX_RECORD_BYTES) return null;
      if (/^(bookmark|flag):/.test(key) ? ![true, false, null].includes(record.value) : record.value !== null && !object(record.value)) return null;
      return { value: JSON.parse(json), updatedAt: record.updatedAt, opId: record.opId };
    } catch (_) { return null; }
  }

  function computeReview(previous, rating, now = Date.now()) {
    if (rating !== 'known' && rating !== 'again') throw new TypeError('Use known or again for a recall rating.');
    const prior = object(previous) ? previous : {};
    const sameDayKnown = rating === 'known' && prior.lastRating === 'known' && Number.isFinite(prior.lastReviewedAt) && localDay(prior.lastReviewedAt) === localDay(now);
    const knownStreak = rating === 'known' ? Math.max(1, Math.min(finiteCount(prior.knownStreak) + (sameDayKnown ? 0 : 1), 1000)) : 0;
    const intervalDays = rating === 'known' ? KNOWN_INTERVALS[Math.min(knownStreak - 1, KNOWN_INTERVALS.length - 1)] : 0;
    const history = (Array.isArray(prior.history) ? prior.history : [])
      .filter(event => object(event) && Number.isSafeInteger(event.at) && ['known', 'again'].includes(event.rating))
      .slice(-19);
    history.push({ at: now, rating });
    return {
      reviews: finiteCount(prior.reviews) + 1,
      knownCount: finiteCount(prior.knownCount) + (rating === 'known' ? 1 : 0),
      againCount: finiteCount(prior.againCount) + (rating === 'again' ? 1 : 0),
      knownStreak, lastRating: rating, lastReviewedAt: now,
      dueAt: sameDayKnown && Number.isFinite(prior.dueAt) && prior.dueAt > now ? prior.dueAt : now + (rating === 'known' ? intervalDays * DAY : 10 * 60 * 1000),
      intervalDays, history
    };
  }

  function summarize(records, cards, now = Date.now()) {
    const result = { total: 0, reviewed: 0, unseen: 0, due: 0, known: 0, again: 0, dueIds: [], unseenIds: [], categories: {} };
    const seen = new Set();
    for (const item of cards || []) {
      const id = typeof item === 'string' ? item : item?.id;
      if (typeof id !== 'string' || seen.has(id)) continue;
      seen.add(id);
      const category = typeof item === 'object' && typeof item.category === 'string' ? item.category : 'all';
      const counts = result.categories[category] || (result.categories[category] = { total: 0, reviewed: 0, unseen: 0, due: 0, known: 0, again: 0 });
      result.total++; counts.total++;
      const learning = records[`learning:${id}`]?.value;
      if (!object(learning) || !finiteCount(learning.reviews)) {
        result.unseen++; counts.unseen++; result.unseenIds.push(id); continue;
      }
      result.reviewed++; counts.reviewed++;
      if (learning.lastRating === 'known') { result.known++; counts.known++; }
      if (learning.lastRating === 'again') { result.again++; counts.again++; }
      if (Number.isFinite(learning.dueAt) && learning.dueAt <= now) {
        result.due++; counts.due++; result.dueIds.push(id);
      }
    }
    result.dueIds.sort((a, b) => records[`learning:${a}`].value.dueAt - records[`learning:${b}`].value.dueAt || a.localeCompare(b));
    return result;
  }

  function create(options = {}) {
    let storage = null;
    try { storage = Object.hasOwn(options, 'storage') ? options.storage : root.localStorage; } catch (_) { /* Memory mode remains usable. */ }
    const eventTarget = Object.hasOwn(options, 'eventTarget') ? options.eventTarget : root;
    const key = options.key || STORAGE_KEY;
    const now = options.now || Date.now;
    const randomId = () => root.crypto?.randomUUID?.() || `${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
    const clientId = options.id || randomId();
    const listeners = new Set();
    let records = Object.create(null), sequence = 0, destroyed = false, writing = false;
    let lastError = null;

    function reportError(error) {
      lastError = error;
      if (typeof options.onError === 'function') options.onError(error);
    }
    function read() {
      if (!storage) return Object.create(null);
      try {
        const parsed = JSON.parse(storage.getItem(key) || 'null');
        return parsed?.version === 1 && object(parsed.records) ? parsed.records : Object.create(null);
      } catch (error) { reportError(error); return Object.create(null); }
    }
    function mergeInto(incoming) {
      const changed = [];
      if (!object(incoming)) return changed;
      for (const [recordKey, record] of Object.entries(incoming)) {
        const clean = safeRecord(recordKey, record, now());
        if (clean && compare(clean, records[recordKey]) > 0) { records[recordKey] = clean; changed.push(recordKey); }
      }
      return changed;
    }
    function notify(keys, source) {
      if (!keys.length || destroyed) return;
      for (const callback of [...listeners]) {
        try { callback({ keys: [...new Set(keys)], source }); }
        catch (error) { if (typeof options.onListenerError === 'function') options.onListenerError(error); }
      }
    }
    function refresh(emit = false) {
      const changed = mergeInto(read());
      if (emit) notify(changed, 'storage');
      return changed;
    }
    function snapshot() {
      return Object.fromEntries(Object.keys(records).sort().map(recordKey => [recordKey, records[recordKey]]));
    }
    function persist(refreshedKeys = []) {
      if (!storage) { reportError(new Error('Browser storage is unavailable.')); return false; }
      try {
        writing = true;
        // Merge immediately before writing; unrelated changes in another tab are retained.
        refreshedKeys.push(...refresh());
        const value = JSON.stringify({ version: 1, records: snapshot() });
        if (storage.getItem(key) !== value) storage.setItem(key, value);
        lastError = null;
        return true;
      } catch (error) { reportError(error); return false; }
      finally { writing = false; }
    }
    function version(recordKey) { refresh(true); return records[recordKey]?.opId || null; }
    function get(recordKey, fallback = null) {
      refresh(true);
      return Object.hasOwn(records, recordKey) ? clone(records[recordKey].value) : fallback;
    }
    function mutate(recordKey, producer, mutationOptions = {}) {
      if (destroyed) throw new Error('This study store has been closed.');
      if (!validKey(recordKey)) throw new TypeError('Invalid study record key.');
      const refreshed = refresh();
      const current = records[recordKey];
      if (Object.hasOwn(mutationOptions, 'expectedVersion') && mutationOptions.expectedVersion !== (current?.opId || null)) {
        notify(refreshed, 'storage');
        return { ok: false, conflict: true, version: current?.opId || null, current: current ? clone(current.value) : null };
      }
      const value = producer(current ? clone(current.value) : null);
      let json;
      try { json = JSON.stringify(value); } catch (_) { throw new TypeError('Study records must contain JSON data.'); }
      if (typeof json !== 'string' || jsonBytes(json) > MAX_RECORD_BYTES) throw new TypeError('Study record is missing or too large.');
      if (current && stableJSON(current.value) === stableJSON(JSON.parse(json))) {
        notify(refreshed, 'storage');
        return { ok: true, unchanged: true, persisted: !lastError, version: current.opId, value: clone(current.value) };
      }
      const updatedAt = Math.max(now(), current ? current.updatedAt + 1 : 0);
      const opId = `${clientId}:${++sequence}:${randomId()}`;
      const clean = safeRecord(recordKey, { value: JSON.parse(json), updatedAt, opId }, now());
      if (!clean) throw new TypeError('Invalid study record.');
      records[recordKey] = clean;
      const persisted = persist(refreshed);
      notify(refreshed.filter(changedKey => changedKey !== recordKey), 'storage');
      notify([recordKey], 'local');
      const winner = records[recordKey];
      if (winner.opId !== opId) return { ok: false, conflict: true, version: winner.opId, current: clone(winner.value) };
      return { ok: true, persisted, version: opId, value: clone(value) };
    }
    function set(recordKey, value, mutationOptions) { return mutate(recordKey, () => value, mutationOptions); }
    function update(recordKey, producer, mutationOptions) {
      if (typeof producer !== 'function') throw new TypeError('An update function is required.');
      return mutate(recordKey, producer, mutationOptions);
    }
    function setMany(values, mutationOptions = {}) {
      if (destroyed) throw new Error('This study store has been closed.');
      if (!object(values)) throw new TypeError('A record-value object is required.');
      const refreshed = refresh();
      const prepared = [], versions = Object.create(null);
      for (const [recordKey, value] of Object.entries(values)) {
        if (!validKey(recordKey)) throw new TypeError('Invalid study record key.');
        const current = records[recordKey];
        if (object(mutationOptions.expectedVersions) && Object.hasOwn(mutationOptions.expectedVersions, recordKey) && mutationOptions.expectedVersions[recordKey] !== (current?.opId || null)) {
          notify(refreshed, 'storage');
          return { ok: false, conflict: true, key: recordKey, version: current?.opId || null, current: current ? clone(current.value) : null };
        }
        let json;
        try { json = JSON.stringify(value); } catch (_) { throw new TypeError('Study records must contain JSON data.'); }
        if (typeof json !== 'string' || jsonBytes(json) > MAX_RECORD_BYTES) throw new TypeError('Study record is missing or too large.');
        if (current && stableJSON(current.value) === stableJSON(JSON.parse(json))) { versions[recordKey] = current.opId; continue; }
        const opId = `${clientId}:${++sequence}:${randomId()}`;
        const clean = safeRecord(recordKey, { value: JSON.parse(json), updatedAt: Math.max(now(), current ? current.updatedAt + 1 : 0), opId }, now());
        if (!clean) throw new TypeError('Invalid study record.');
        prepared.push([recordKey, clean]); versions[recordKey] = opId;
      }
      // Validate the complete batch before mutating; save once and emit one local event.
      for (const [recordKey, clean] of prepared) records[recordKey] = clean;
      const persisted = prepared.length ? persist(refreshed) : !lastError;
      const keys = prepared.map(([recordKey]) => recordKey);
      notify(refreshed.filter(recordKey => !keys.includes(recordKey)), 'storage');
      notify(keys, 'local');
      return { ok: true, unchanged: keys.length === 0, persisted, keys, versions: { ...versions } };
    }
    function mergeRecords(incoming) {
      if (destroyed) throw new Error('This study store has been closed.');
      const fresh = refresh();
      const changed = mergeInto(incoming);
      const persisted = changed.length ? persist(fresh) : !lastError;
      notify([...fresh, ...changed], 'remote');
      return { changed: [...new Set([...fresh, ...changed])], persisted };
    }
    function onStorage(event) {
      if (destroyed || writing || event.storageArea && storage && event.storageArea !== storage || event.key !== key && event.key !== null) return;
      if (event.newValue === null && !storage?.getItem(key)) {
        const changed = Object.keys(records); records = Object.create(null); notify(changed, 'storage'); return;
      }
      let incoming = null;
      try { const parsed = JSON.parse(event.newValue || 'null'); incoming = parsed?.version === 1 ? parsed.records : null; } catch (_) { /* Ignore malformed events. */ }
      const changed = mergeInto(incoming);
      changed.push(...refresh());
      // A late event may contain a concurrent record absent from the persisted snapshot.
      // Merge and write only when the canonical snapshot differs, so events converge.
      persist(changed);
      notify(changed, 'storage');
    }
    refresh();
    eventTarget?.addEventListener?.('storage', onStorage);
    return {
      storageKey: key, get, set, setMany, update, version,
      subscribe(callback) { if (typeof callback !== 'function') throw new TypeError('A listener is required.'); listeners.add(callback); return () => listeners.delete(callback); },
      exportRecords() { refresh(true); return clone(snapshot()); },
      mergeRecords,
      review(cardId, rating) { return update(`learning:${cardId}`, previous => computeReview(previous, rating, now())); },
      learningStats(cards, at = now()) { refresh(true); return summarize(records, cards, at); },
      getError() { return lastError; },
      destroy() { destroyed = true; eventTarget?.removeEventListener?.('storage', onStorage); listeners.clear(); }
    };
  }
  return { create, computeReview, summarize, STORAGE_KEY, KNOWN_INTERVALS: [...KNOWN_INTERVALS] };
});
