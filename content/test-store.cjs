'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const testModule = { exports: {} };
vm.runInThisContext(`(function(module){${fs.readFileSync(path.join(__dirname, '../study-store.js'), 'utf8')}\n})`, { filename: 'study-store.js' })(testModule);
const Store = testModule.exports;

class MemoryStorage {
  constructor() { this.values = new Map(); this.writes = 0; }
  getItem(key) { return this.values.get(key) ?? null; }
  setItem(key, value) { this.values.set(key, String(value)); this.writes++; }
}
class Events {
  constructor() { this.handlers = new Set(); }
  addEventListener(type, fn) { if (type === 'storage') this.handlers.add(fn); }
  removeEventListener(type, fn) { this.handlers.delete(fn); }
  emit(event) { for (const fn of this.handlers) fn(event); }
}

let clock = 1793275200000;
const storage = new MemoryStorage(), eventsA = new Events(), eventsB = new Events();
const a = Store.create({ storage, eventTarget: eventsA, id: 'a', now: () => clock });
const b = Store.create({ storage, eventTarget: eventsB, id: 'b', now: () => clock });
let signals = [];
a.subscribe(change => signals.push(change));

// Old tabs cannot save a stale session over an explicitly newer session.
assert.equal(a.version('session'), null);
const initial = a.set('session', { ids: ['A'], index: 0 }, { expectedVersion: null });
const staleVersion = b.version('session');
clock++;
const next = a.set('session', { ids: ['B', 'C'], index: 1 }, { expectedVersion: initial.version });
assert(next.ok);
const stale = b.set('session', { ids: [], index: 0 }, { expectedVersion: staleVersion });
assert.equal(stale.ok, false);
assert.equal(stale.conflict, true);
assert.deepEqual(a.get('session').ids, ['B', 'C']);

// No unload hook or write is performed by readers / closing a store.
let writes = storage.writes;
b.get('session'); b.version('session'); b.exportRecords();
assert.equal(storage.writes, writes);
const temporary = Store.create({ storage, eventTarget: new Events(), now: () => clock });
temporary.destroy();
assert.equal(storage.writes, writes);

// Different cards/tombstones survive updates from different tabs.
a.set('bookmark:A', true); b.set('bookmark:B', true); a.set('bookmark:A', false);
assert.equal(b.get('bookmark:A'), false);
assert.equal(a.get('bookmark:B'), true);
assert.equal(a.exportRecords()['bookmark:A'].value, false);
// A read before the browser delivers its storage event must still update subscribers.
const notificationsBeforeRead = signals.length;
b.set('bookmark:read-first', true);
assert.equal(a.get('bookmark:read-first'), true);
assert.equal(signals.length, notificationsBeforeRead + 1);
assert.deepEqual(signals.at(-1), { keys: ['bookmark:read-first'], source: 'storage' });
eventsA.emit({ key: Store.STORAGE_KEY, newValue: storage.getItem(Store.STORAGE_KEY), storageArea: storage });
assert.equal(signals.length, notificationsBeforeRead + 1, 'Delayed events do not duplicate read notifications');
a.set('mix:same', { name: 'IFR', counts: { ifr: 2, weather: 3 } });
writes = storage.writes;
const unchanged = a.set('mix:same', { counts: { weather: 3, ifr: 2 }, name: 'IFR' });
assert.equal(unchanged.unchanged, true);
assert.equal(storage.writes, writes, 'Equivalent values do not cause subscription/write loops');
const beforeBatchSignals = signals.length;
writes = storage.writes;
const batchValues = Object.fromEntries(Array.from({ length: 100 }, (_, index) => [`flag:bulk-${index}`, true]));
const batch = a.setMany(batchValues);
assert.equal(batch.ok, true);
assert.equal(batch.keys.length, 100);
assert.equal(storage.writes - writes, 1, 'Bulk marking saves one snapshot');
assert.equal(signals.length - beforeBatchSignals, 1, 'Bulk marking emits one refresh event');
writes = storage.writes;
assert.throws(() => a.setMany({ 'flag:valid': true, 'invalid key': true }), /Invalid/);
assert.equal(a.get('flag:valid'), null, 'Invalid batch must not partially mutate');
assert.equal(storage.writes, writes);
const failedBatch = a.setMany({ 'flag:valid': true, session: { ids: [] } }, { expectedVersions: { session: 'stale' } });
assert.equal(failedBatch.conflict, true);
assert.equal(a.get('flag:valid'), null);

// Simulate concurrent writes based on the same snapshot, then delayed storage events.
const shared = new MemoryStorage();
const ea = new Events(), eb = new Events();
const ca = Store.create({ storage: shared, eventTarget: ea, id: 'ca', now: () => clock });
const cb = Store.create({ storage: shared, eventTarget: eb, id: 'cb', now: () => clock });
ca.set('flag:A', true);
const snapshotA = shared.getItem(Store.STORAGE_KEY);
shared.values.clear(); // Simulated interleaving: B read the pre-A snapshot.
cb.set('flag:B', true);
const snapshotB = shared.getItem(Store.STORAGE_KEY);
ea.emit({ key: Store.STORAGE_KEY, newValue: snapshotB, storageArea: shared });
eb.emit({ key: Store.STORAGE_KEY, newValue: snapshotA, storageArea: shared });
assert.equal(ca.get('flag:A'), true); assert.equal(ca.get('flag:B'), true);
assert.equal(cb.get('flag:A'), true); assert.equal(cb.get('flag:B'), true);
writes = shared.writes;
ea.emit({ key: Store.STORAGE_KEY, newValue: shared.getItem(Store.STORAGE_KEY), storageArea: shared });
eb.emit({ key: Store.STORAGE_KEY, newValue: shared.getItem(Store.STORAGE_KEY), storageArea: shared });
assert.equal(shared.writes, writes, 'Converged events do not trigger a write loop');

// Equal timestamp ties converge deterministically, old sync records cannot resurrect flags.
a.mergeRecords({ 'flag:Z': { value: true, updatedAt: clock, opId: 'z' } });
a.mergeRecords({ 'flag:Z': { value: false, updatedAt: clock, opId: 'zz' } });
a.mergeRecords({ 'flag:Z': { value: true, updatedAt: clock - 1, opId: 'zzz' } });
assert.equal(a.get('flag:Z'), false);
const remote = a.exportRecords(); b.mergeRecords(remote);
assert.deepEqual(b.exportRecords(), remote);

// Every reviewed card has an independent, durable schedule.
const known = a.review('A', 'known');
assert.equal(known.value.reviews, 1);
assert.equal(known.value.intervalDays, 1);
assert.equal(known.value.dueAt, clock + 86400000);
const sameDay = a.review('A', 'known');
assert.equal(sameDay.value.intervalDays, 1);
assert.equal(sameDay.value.dueAt, known.value.dueAt);
clock += 86400000;
assert.deepEqual(a.learningStats([{ id: 'A', category: 'ifr' }, { id: 'B', category: 'ifr' }]).dueIds, ['A']);
a.review('A', 'known');
assert.equal(a.get('learning:A').intervalDays, 3);
a.review('B', 'again');
assert.equal(a.get('learning:B').dueAt, clock + 600000);
a.set('session', { ids: ['Z'], index: 0 });
assert.equal(a.get('learning:A').reviews, 3, 'New session never resets long-term learning');
clock += 600001;
const stats = a.learningStats([{ id: 'A', category: 'ifr' }, { id: 'B', category: 'ifr' }, { id: 'C', category: 'weather' }]);
assert.equal(stats.total, 3); assert.equal(stats.reviewed, 2); assert.equal(stats.unseen, 1);
assert.deepEqual(stats.dueIds, ['B']); assert.equal(stats.categories.ifr.again, 1);
assert.equal(stats.categories.weather.unseen, 1);
for (let index = 0; index < 25; index++) { clock += 86400000; a.review('A', 'known'); }
assert.equal(a.get('learning:A').history.length, 20);
assert.equal(a.get('learning:A').reviews, 28);
assert.equal(a.get('learning:A').intervalDays, 30);
a.review('A', 'again');
assert.equal(a.get('learning:A').knownStreak, 0);

// Untrusted backup/sync records must be bounded JSON, and exports cannot mutate internal state.
const exportCopy = a.exportRecords(); exportCopy['learning:A'].value.reviews = -100;
assert.equal(a.get('learning:A').reviews, 29);
a.mergeRecords({ 'flag:future': { value: true, updatedAt: clock + 99999999, opId: 'future' }, 'flag:bad': { value: true, updatedAt: NaN, opId: 'bad' } });
assert.equal(a.get('flag:future'), null); assert.equal(a.get('flag:bad'), null);
assert.throws(() => a.set('bad key', true), /Invalid/);
assert.throws(() => a.set('unsupported', true), /Invalid/);
assert.throws(() => a.set('mix:bad.key', { name: 'Bad' }), /Invalid/);
assert.throws(() => a.set('flag:bad-shape', { flagged: true }), /Invalid/);
assert.throws(() => a.set('session', ['A']), /Invalid/);
assert.throws(() => a.set('mix:oversized', { name: '\u2600'.repeat(50000) }), /too large/, 'Limits count UTF-8 bytes, matching the sync server');
a.mergeRecords({ 'learning:bad.key': { value: {}, updatedAt: clock, opId: 'valid' }, 'mix:bad-op': { value: {}, updatedAt: clock, opId: 'invalid operation id' } });
assert.equal(a.get('learning:bad.key'), null); assert.equal(a.get('mix:bad-op'), null);
assert.throws(() => a.set('flag:A', undefined), /missing/);
assert.throws(() => a.review('A', 'excellent'), /known or again/);

// Missing/quota-limited storage leaves usable in-memory state and reports persistence failure.
let errorCount = 0;
const broken = Store.create({ storage: { getItem() { return null; }, setItem() { throw new Error('quota'); } }, eventTarget: null, now: () => clock, onError() { errorCount++; } });
const failedPersistence = broken.set('bookmark:A', true);
assert.equal(failedPersistence.ok, true); assert.equal(failedPersistence.persisted, false);
assert.equal(broken.get('bookmark:A'), true); assert(errorCount > 0);
assert(signals.some(event => event.source === 'local'));
a.destroy(); b.destroy(); ca.destroy(); cb.destroy(); broken.destroy();
console.log('PASS: stale-session protection, cross-tab convergence, tombstones, sync conflict resolution, durable review schedules, per-category stats, malformed records, quota errors, and no unload writes.');
