(() => {
  'use strict';
  const cards = Array.isArray(window.FLIGHT_REVIEW_CARDS) ? window.FLIGHT_REVIEW_CARDS : [];
  const categories = Array.isArray(window.FLIGHT_REVIEW_CATEGORIES) ? window.FLIGHT_REVIEW_CATEGORIES : [];
  const sources = Array.isArray(window.FLIGHT_REVIEW_SOURCES) ? window.FLIGHT_REVIEW_SOURCES : [];
  let store = window.FlightStudyStore.create({ storage: null });
  let profileReady = false, activeProfile = null, syncGeneration = 0;
  let sessionVersion = store.version('session');
  let applyingRemote = false;
  let previousBookmarks = new Set(), previousFlags = new Set();
  const byId = new Map(cards.map(card => [card.id, card]));
  const categoryById = new Map(categories.map(category => [category.id, category]));
  const searchText = new Map(cards.map(card => [card.id, `${card.id} ${card.question} ${card.answer} ${card.source} ${categoryById.get(card.category)?.name || ''}`.toLocaleLowerCase()]));
  const $ = id => document.getElementById(id);
  const views = { topics: $('topicsView'), custom: $('customView'), inspect: $('inspectView'), flags: $('flagsView'), study: $('studyView'), complete: $('completeView') };
  const state = { selected: new Set(), bookmarks: new Set(), flags: new Set(), session: [], index: 0, flipped: false, mode: 'selected', viewed: new Set(), known: new Set(), again: new Set(), completed: false };
  const progressKey = 'flight-review-progress-v2';
  let visibleInspectCards = [];
  let pendingSession = null;
  let pendingBackup = null;
  let searchTimer;
  let flagUndo = null;
  let identity = null, syncBusy = false, syncTimer = null, syncAgain = false;
  let reportCardId = null;
  let restoringInspect = false;
  let introState = $('introDetails').open;

  function writeSaved(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) { $('saveNotice').hidden = false; }
  }
  function sessionData() {
    return { ids: state.session.map(c => c.id), index: state.index, flipped: state.flipped, mode: state.mode, viewed: [...state.viewed], known: [...state.known], again: [...state.again], completed: state.completed };
  }
  function preferenceData() {
    const custom = {};
    document.querySelectorAll('.custom-count-input').forEach(input => {
      const n = Number(input.value);
      if (Number.isInteger(n) && n >= 0 && n <= Number(input.max)) custom[input.dataset.category] = n;
    });
    return { selected: [...state.selected], custom, order: $('studyOrder').value, limit: $('studyLimit').value, subtopic: $('studySubtopic').value, introOpen: $('introDetails').open }; 
  }
  function refreshResume() {
    $('resumeBanner').hidden = !state.session.length;
    $('resumeSummary').textContent = state.completed ? `Finished session · ${state.viewed.size} of ${state.session.length} answers revealed` : `Card ${state.index + 1} of ${state.session.length} · ${state.viewed.size} answers revealed`;
    $('resumeButton').textContent = state.completed ? 'View session results →' : 'Resume session →';
  }
  function saveProgress() {
    if (applyingRemote || !profileReady) return;
    const saved = store.set('session', sessionData(), {expectedVersion: sessionVersion});
    if (saved.ok) sessionVersion = saved.version;
    else if (saved.conflict) { applySession(saved.current); applyPreferences(store.get('preferences')); sessionVersion = saved.version; updateSelection(); updateCustomSelection(); refreshLearning(); showView('topics'); announce('A newer session was saved in another tab or device. It has been loaded here.'); return; }
    store.set('preferences', preferenceData());
    refreshLearning();
    refreshResume();
  }
  function applyPreferences(preferences) {
    if (!preferences || typeof preferences !== 'object') return;
    $('studyOrder').value = preferences.order === 'ordered' ? 'ordered' : 'shuffle';
    $('studyLimit').value = ['10','20','50','all'].includes(preferences.limit) ? preferences.limit : '20';
    $('studySubtopic').value = SUBTOPICS.some(t=>t.id===preferences.subtopic) ? preferences.subtopic : 'all';
    $('introDetails').open = preferences.introOpen !== false;
    introState = $('introDetails').open;
    state.selected = new Set((Array.isArray(preferences.selected) ? preferences.selected : []).filter(id => categories.some(c => c.id === id)));
    document.querySelectorAll('.category-card input').forEach(input => { input.checked = state.selected.has(input.value); });
    document.querySelectorAll('.custom-count-input').forEach(input => {
      const n = preferences.custom?.[input.dataset.category];
      input.value = Number.isInteger(n) && n >= 0 ? String(Math.min(n, Number(input.max))) : '0';
    });
  }
  function applySession(saved) {
    if (saved !== null && saved !== undefined && !Array.isArray(saved.ids)) return false;
    if (!saved || !saved.ids.some(id => byId.has(id))) {
      state.session = []; state.index = 0; state.flipped = false; state.mode = 'selected';
      state.viewed.clear(); state.known.clear(); state.again.clear(); state.completed = false;
      return false;
    }
    const originalIndex = Number.isInteger(saved.index) ? Math.max(0, saved.index) : 0;
    const intendedId = saved.ids[originalIndex];
    const ids = [...new Set(saved.ids.filter(id => typeof id === 'string' && byId.has(id)))];
    if (!ids.length) return false;
    state.session = ids.map(id => byId.get(id));
    const index = ids.indexOf(intendedId);
    state.index = index >= 0 ? index : Math.min(originalIndex, ids.length - 1);
    state.mode = ['selected', 'custom', 'bookmarks', 'review', 'due', 'weak', 'new'].includes(saved.mode) ? saved.mode : 'selected';
    const validSet = values => new Set((Array.isArray(values) ? values : []).filter(id => ids.includes(id)));
    state.viewed = validSet(saved.viewed);
    state.known = validSet(saved.known);
    state.again = validSet(saved.again);
    state.known.forEach(id => { state.viewed.add(id); state.again.delete(id); });
    state.again.forEach(id => state.viewed.add(id));
    state.flipped = saved.flipped === true;
    state.completed = saved.completed === true;
    return true;
  }
  function restoreProgress() {
    try {
      applyPreferences(store.get('preferences'));
      applySession(store.get('session'));
      sessionVersion=store.version('session');
      readSavedMarks();
    } catch (_) { /* Missing or damaged progress must not prevent studying. */ }
  }
  function migrateLegacy(target) {
    try {
      if (localStorage.getItem('flight-review-records-migrated') === '1') return;
      const old = JSON.parse(localStorage.getItem(progressKey) || 'null');
      const records = target.exportRecords(), values = {};
      if (old?.version === 2) {
        if (!records.preferences && old.preferences) values.preferences = old.preferences;
        if (!records.session && old.session) values.session = old.session;
      }
      loadBookmarks().forEach(id => { if (!records['bookmark:'+id]) values['bookmark:'+id] = true; });
      loadFlags().forEach(id => { if (!records['flag:'+id]) values['flag:'+id] = true; });
      target.setMany(values);
      if (!target.getError()) localStorage.setItem('flight-review-records-migrated', '1');
    } catch (_) { /* Keep original records if migration cannot finish. */ }
  }
  function activateProfile(userId) {
    const profile = userId || 'local';
    if (profileReady && activeProfile === profile) return;
    syncGeneration++; clearTimeout(syncTimer); syncAgain = false;
    store.destroy();
    const key = userId ? 'flight-review-account:'+userId : 'flight-review-local-v1';
    store = window.FlightStudyStore.create({key});
    try {
      const claim = localStorage.getItem('flight-review-legacy-owner');
      if (!claim) {
        const legacy = window.FlightStudyStore.create(); migrateLegacy(legacy);
        store.mergeRecords(legacy.exportRecords());
        legacy.destroy();
        if (userId) {
          const local = window.FlightStudyStore.create({key:'flight-review-local-v1'});
          store.mergeRecords(local.exportRecords()); local.destroy();
          if (!store.getError()) localStorage.setItem('flight-review-legacy-owner',userId);
        }
      }
    } catch (_) { $('saveNotice').hidden = false; }
    activeProfile = profile; profileReady = true; applyingRemote = true;
    applyPreferences({}); applySession(null); restoreProgress();
    pendingSession = null; pendingBackup = null; flagUndo = null; $('bulkUndo').hidden = true;
    updateSelection(); updateCustomSelection(); refreshResume(); refreshLearning(); renderSavedMixes();
    applyingRemote = false; store.subscribe(onStoreChange);
    $('main').inert = false; $('profileNotice').hidden = true; routeToHash();
  }
  function beginSession(session, mode, confirmed = false) {
    if (!confirmed && state.session.length && !state.completed) {
      pendingSession = { session, mode };
      $('newSessionSummary').textContent = `This will replace your saved ${state.session.length}-card session with a new ${session.length}-card session.`;
      $('newSessionDialog').showModal();
      return;
    }
    state.session = session; state.mode = mode; state.index = 0; state.flipped = false;
    state.viewed.clear(); state.known.clear(); state.again.clear(); state.completed = false;
    showView('study'); renderCard();
  }
  function resumeSession(updateHistory = true) {
    if (!state.session.length) return showView('topics', updateHistory);
    const flipped = state.flipped;
    state.completed = false;
    showView('study', updateHistory); renderCard(); setFlipped(flipped);
  }
  function routeToHash() {
    const route = location.hash.slice(1);
    if (route.startsWith('card/')) { let id; try { id=decodeURIComponent(route.slice(5)); } catch { showView('topics'); announce('That card link is not valid.'); return; } $('inspectScope').value='all'; $('inspectFilter').value='all'; $('inspectSubtopic').value='all'; $('inspectSearch').value=id; renderInspect(); showView('inspect',false); const details=$('inspectList').querySelector('details'); if(details) details.open=true; if(!byId.has(id)) announce('That card ID is not in this library.'); return; }
    const [name, query=''] = route.split('?');
    if (name==='inspect' && query) { const p=new URLSearchParams(query); $('inspectSearch').value=p.get('q')||''; $('inspectScope').value=p.get('scope')==='selected'?'selected':'all'; $('inspectFilter').value=['bookmarked','flagged'].includes(p.get('filter'))?p.get('filter'):'all'; $('inspectSubtopic').value=SUBTOPICS.some(t=>t.id===p.get('focus'))?p.get('focus'):'all'; }
    if (name === 'main') return;
    if (name === 'study' && state.session.length) return resumeSession(false);
    if (name === 'complete' && state.session.length) return completeSession(false);
    if (name === 'inspect') { if (!state.selected.size) $('inspectScope').value = 'all'; renderInspect(); return showView('inspect', false); }
    if (name === 'flags') { renderFlags(); return showView('flags', false); }
    if (name === 'custom') return showView('custom', false);
    showView('topics', false);
    if (location.hash !== '#topics') history.replaceState(null, '', '#topics');
  }

  function loadBookmarks() {
    try {
      const parsed = JSON.parse(localStorage.getItem('flight-review-bookmarks-v1') || '[]');
      if (!Array.isArray(parsed)) return new Set();
      return new Set(parsed.filter(id => typeof id === 'string' && byId.has(id)));
    } catch (_) { return new Set(); }
  }
  function saveBookmarks() {
    saveMarks('bookmark:',state.bookmarks,previousBookmarks); previousBookmarks = new Set(state.bookmarks);
  }
  function loadFlags() {
    try {
      const parsed = JSON.parse(localStorage.getItem('flight-review-removal-flags-v1') || '[]');
      if (!Array.isArray(parsed)) return new Set();
      return new Set(parsed.filter(id => typeof id === 'string' && byId.has(id)));
    } catch (_) { return new Set(); }
  }
  function saveFlags() {
    saveMarks('flag:',state.flags,previousFlags); previousFlags = new Set(state.flags);
  }
  function announce(message) { $('liveStatus').textContent = ''; requestAnimationFrame(() => { $('liveStatus').textContent = message; }); }
  function showView(name, updateHash = true) {
    Object.entries(views).forEach(([key, node]) => { node.hidden = key !== name; });
    if (updateHash && location.hash !== `#${name}`) history.pushState(null, '', `#${name}`);
    $('main').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
    refreshResume();
  }

  function renderCategories() {
    const grid = $('categoryGrid');
    [...categories].sort((a,b)=>GROUPS.indexOf(groupOf(a.id))-GROUPS.indexOf(groupOf(b.id))).forEach((category, index) => {
      const count = cards.filter(card => card.category === category.id).length;
      const label = document.createElement('label');
      label.className = 'category-card'; label.dataset.category=category.id; label.dataset.group=groupOf(category.id);
      const input = document.createElement('input');
      input.type = 'checkbox'; input.value = category.id; input.setAttribute('aria-label', `${category.name}, ${count} cards`);
      input.addEventListener('change', () => { input.checked ? state.selected.add(category.id) : state.selected.delete(category.id); updateSelection(); saveProgress(); });
      const number = document.createElement('span'); number.className = 'category-index'; number.textContent = String(index + 1).padStart(2, '0');
      const title = document.createElement('h3'); title.textContent = category.name;
      const description = document.createElement('p'); description.textContent = category.description;
      const meta = document.createElement('span'); meta.className = 'category-meta';
      const countNode = document.createElement('span'); countNode.textContent = `${count} cards`;
      const type = document.createElement('span'); type.textContent = category.id === 'ctls' ? 'Aircraft-specific' : category.supplemental ? 'Specialist' : 'Foundation'; if (category.supplemental || category.id === 'ctls') type.className = 'supplemental';
      const progress=document.createElement('span'); progress.className='category-progress'; progress.dataset.categoryProgress=category.id; label.append(progress);
      meta.append(countNode, type); label.append(input, number, title, description, meta); grid.append(label);
    });
  }
  function renderCustomCategories() {
    const list = $('customCategoryList');
    categories.forEach((category, index) => {
      const max = cards.filter(card => card.category === category.id).length;
      const row = document.createElement('div');
      row.className = 'custom-category-row';
      const label = document.createElement('label');
      label.htmlFor = `custom-count-${category.id}`;
      const number = document.createElement('span');
      number.className = 'custom-category-index';
      number.textContent = String(index + 1).padStart(2, '0');
      const name = document.createElement('span');
      name.className = 'custom-category-name';
      name.textContent = category.name;
      label.append(number, name);
      const available = document.createElement('span');
      available.className = 'custom-available';
      available.textContent = `${max} max`;
      const inputWrap = document.createElement('div');
      inputWrap.className = 'custom-count-wrap';
      const input = document.createElement('input');
      input.className = 'custom-count-input';
      input.id = `custom-count-${category.id}`;
      input.type = 'number';
      input.inputMode = 'numeric';
      input.min = '0';
      input.max = String(max);
      input.step = '1';
      input.value = '0';
      input.dataset.category = category.id;
      input.dataset.max = String(max);
      input.setAttribute('aria-label', `${category.name} questions, maximum ${max}`);
      input.addEventListener('input', () => { updateCustomSelection(); saveProgress(); });
      input.addEventListener('blur', () => { if (input.value.trim() === '' && !input.validity.badInput) input.value = '0'; updateCustomSelection(); });
      const suffix = document.createElement('span');
      suffix.textContent = 'cards';
      inputWrap.append(input, suffix);
      row.append(label, available, inputWrap);
      list.append(row);
    });
  }
  function readCustomSelection() {
    const counts = new Map();
    let total = 0;
    let valid = true;
    document.querySelectorAll('.custom-count-input').forEach(input => {
      const raw = input.value.trim();
      const value = raw === '' ? 0 : Number(raw);
      const max = Number(input.dataset.max);
      const inputValid = !input.validity.badInput && Number.isInteger(value) && value >= 0 && value <= max;
      input.setAttribute('aria-invalid', String(!inputValid));
      input.closest('.custom-category-row').classList.toggle('has-error', !inputValid);
      if (!inputValid) valid = false;
      else { counts.set(input.dataset.category, value); total += value; }
    });
    return { counts, total, valid };
  }
  function updateCustomSelection() {
    const selection = readCustomSelection();
    $('customTotal').textContent = `${selection.total} card${selection.total === 1 ? '' : 's'} selected`;
    $('startCustomButton').disabled = !selection.valid || selection.total === 0;
    $('startCustomButton').childNodes[0].nodeValue = `Study ${selection.total} card${selection.total === 1 ? '' : 's'} `;
    $('customError').hidden = selection.valid;
    return selection;
  }
  function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
  }
  function openCustomStudy() {
    updateCustomSelection();
    showView('custom');
    window.scrollTo(0, 0);
    announce('Custom Study. Choose how many questions you want from each category.');
  }
  function loadStarter(kind) {
    const mixes = {
      vfr: {'flight-review': 2, 'pilot-docs': 2, 'part-91': 4, airworthiness: 2, weather: 4, performance: 2, adm: 2, emergencies: 2},
      ifr: {ifr: 15, weather: 5, communications: 5},
      airline: {'part-121': 15, 'ground-ramp': 5, 'dangerous-goods': 5}
    };
    document.querySelectorAll('.custom-count-input').forEach(input => { input.value = String(mixes[kind][input.dataset.category] || 0); });
    saveProgress(); openCustomStudy();
    announce('Starter mix loaded. Adjust quantities or start your session.');
  }
  function startCustomSession(event) {
    event.preventDefault();
    const selection = updateCustomSelection();
    if (!selection.valid || selection.total === 0) {
      announce(selection.valid ? 'Choose at least one question.' : 'Correct the highlighted quantities before starting.');
      return;
    }
    const picked = [];
    selection.counts.forEach((count, categoryId) => {
      if (count > 0) picked.push(...shuffle(cards.filter(card => card.category === categoryId)).slice(0, count));
    });
    beginSession(shuffle(picked), 'custom');
  }
  function clearCustomSelection() {
    document.querySelectorAll('.custom-count-input').forEach(input => { input.value = '0'; });
    updateCustomSelection();
    saveProgress();
    announce('Custom Study quantities cleared.');
  }
  function updateSelection() {
    const selectedCards = selectedPool();
    document.body.classList.toggle('has-selection', selectedCards.length > 0);
    $('selectionSummary').textContent = state.selected.size ? `${state.selected.size} topic${state.selected.size === 1 ? '' : 's'} · ${selectedCards.length} cards` : 'No topics selected';
    $('inspectButton').disabled = selectedCards.length === 0;
    $('inspectButton').textContent = 'Inspect ' + selectedCards.length + ' cards';
    $('startButton').disabled = selectedCards.length === 0;
    $('startButton').childNodes[0].nodeValue = `Study ${sessionLimit(selectedCards.length)} cards `;
    $('bookmarkCount').textContent = String(state.bookmarks.size);
    $('bookmarksButton').disabled = state.bookmarks.size === 0;
    $('completeBookmarksButton').disabled = state.bookmarks.size === 0;
    $('flagCount').textContent = String(state.flags.size);
    $('flagsButton').disabled = state.flags.size === 0;
  }
  function setAll(checked) {
    state.selected.clear();
    document.querySelectorAll('.category-card input').forEach(input => { input.checked = checked; if (checked) state.selected.add(input.value); });
    updateSelection();
    saveProgress();
  }
  function renderInspectBookmarkState(button, card) {
    const bookmarked = state.bookmarks.has(card.id);
    button.setAttribute('aria-pressed', String(bookmarked));
    button.textContent = bookmarked ? '★ Bookmarked' : '☆ Bookmark';
    button.setAttribute('aria-label', (bookmarked ? 'Remove bookmark from ' : 'Bookmark ') + card.id);
  }
  function toggleInspectBookmark(card, button) {
    const wasBookmarked = state.bookmarks.has(card.id);
    if (wasBookmarked) state.bookmarks.delete(card.id); else state.bookmarks.add(card.id);
    saveBookmarks();
    updateSelection();
    renderInspectBookmarkState(button, card);
    if ($('inspectFilter').value === 'bookmarked') renderInspect();
    announce(wasBookmarked ? 'Bookmark removed from ' + card.id + '.' : card.id + ' bookmarked.');
  }
  function renderInspectFlagState(button, card) {
    const flagged = state.flags.has(card.id);
    button.setAttribute('aria-pressed', String(flagged));
    button.textContent = flagged ? '⚑ Flagged' : '⚐ Flag for review';
    button.setAttribute('aria-label', (flagged ? 'Remove review flag from ' : 'Flag for review ') + card.id);
  }
  function updateInspectFlagSummary(selectedCards = visibleInspectCards) {
    const flaggedVisible = selectedCards.filter(card => state.flags.has(card.id)).length;
    const allFlagged = selectedCards.length > 0 && flaggedVisible === selectedCards.length;
    $('inspectFlagSummary').textContent = `${flaggedVisible} of ${selectedCards.length} matching card${selectedCards.length === 1 ? '' : 's'} flagged`;
    $('flagVisibleButton').textContent = `${allFlagged ? 'Unflag' : 'Flag'} all ${selectedCards.length} matching cards`; 
    $('flagVisibleButton').disabled = selectedCards.length === 0;
  }
  function toggleInspectFlag(card, button) {
    const wasFlagged = state.flags.has(card.id);
    if (wasFlagged) state.flags.delete(card.id); else state.flags.add(card.id);
    saveFlags();
    updateSelection();
    renderInspectFlagState(button, card);
    button.closest('.inspect-question').classList.toggle('is-flagged', !wasFlagged);
    updateInspectFlagSummary();
    if ($('inspectFilter').value === 'flagged') renderInspect();
    announce(wasFlagged ? 'Review flag cleared from ' + card.id + '.' : card.id + ' flagged for review.');
  }
  function toggleVisibleFlags() {
    const selectedCards = visibleInspectCards;
    if (!selectedCards.length) return;
    const allFlagged = selectedCards.every(card => state.flags.has(card.id));
    flagUndo = selectedCards.map(card=>({id:card.id,flagged:state.flags.has(card.id)}));
    $('bulkUndo').hidden=false; $('bulkUndoText').textContent=`Changed flags on ${selectedCards.length} matching cards.`;
    selectedCards.forEach(card => { if (allFlagged) state.flags.delete(card.id); else state.flags.add(card.id); });
    saveFlags();
    updateSelection();
    renderInspect();
    announce(allFlagged ? `${selectedCards.length} visible review flags cleared.` : `${selectedCards.length} visible cards flagged for review.`);
  }
  function renderInspect() {
    clearTimeout(searchTimer);
    const focusSnapshot=captureListState($('inspectList'));
    const wholeLibrary = $('inspectScope').value === 'all';
    const selectedCards = (wholeLibrary ? cards : cards.filter(card => state.selected.has(card.category))).filter(card=>matchesSubtopic(card,$('inspectSubtopic').value));
    const terms = $('inspectSearch').value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const filter = $('inspectFilter').value;
    visibleInspectCards = selectedCards.filter(card => {
      if (filter === 'bookmarked' && !state.bookmarks.has(card.id) || filter === 'flagged' && !state.flags.has(card.id)) return false;
      return terms.every(term => searchText.get(card.id).includes(term));
    });
    const list = $('inspectList');
    list.textContent = '';
    $('inspectSummary').textContent = selectedCards.length + ' question' + (selectedCards.length === 1 ? '' : 's');
    $('inspectScopeLabel').textContent = wholeLibrary ? 'Whole library' : 'Selected topics';
    $('inspectResults').textContent = `${visibleInspectCards.length} of ${selectedCards.length} questions match`;
    $('inspectEmpty').hidden = visibleInspectCards.length > 0;

    categories.filter(category => wholeLibrary || state.selected.has(category.id)).forEach(category => {
      const categoryCards = visibleInspectCards.filter(card => card.category === category.id);
      if (!categoryCards.length) return;
      const group = document.createElement('section');
      group.className = 'inspect-group';
      group.setAttribute('aria-labelledby', 'inspect-' + category.id);

      const heading = document.createElement('div');
      heading.className = 'inspect-group-heading';
      const title = document.createElement('h3');
      title.id = 'inspect-' + category.id;
      title.textContent = category.name;
      const count = document.createElement('span');
      count.textContent = categoryCards.length + ' question' + (categoryCards.length === 1 ? '' : 's');
      heading.append(title, count);

      const questions = document.createElement('ol');
      questions.className = 'inspect-questions';
      categoryCards.forEach(card => {
        const item = document.createElement('li');
        item.className = 'inspect-question'; item.dataset.cardId=card.id;
        item.classList.toggle('is-flagged', state.flags.has(card.id));
        const copy = document.createElement('div');
        const meta = document.createElement('span');
        meta.className = 'inspect-card-id';
        meta.textContent = card.id;
        const question = document.createElement('p');
        question.textContent = card.question;
        copy.append(meta, question); appendPractice(copy,card);
        const details = document.createElement('details');
        const summary = document.createElement('summary'); summary.textContent = 'Answer & source';
        const answer = document.createElement('p'); answer.textContent = card.answer;
        const source = document.createElement(card.sourceUrl ? 'a' : 'span'); source.textContent = card.source;
        if (card.sourceUrl) { source.href = card.sourceUrl; source.target = '_blank'; source.rel = 'noopener noreferrer'; }
        details.append(summary, answer, source); appendSourceReview(details,card); copy.append(details);
        const actions = document.createElement('div');
        actions.className = 'inspect-card-actions';
        const bookmark = document.createElement('button');
        bookmark.className = 'inspect-bookmark';
        bookmark.type = 'button';
        renderInspectBookmarkState(bookmark, card);
        bookmark.addEventListener('click', () => toggleInspectBookmark(card, bookmark));
        const flag = document.createElement('button');
        flag.className = 'inspect-flag';
        flag.type = 'button';
        renderInspectFlagState(flag, card);
        flag.addEventListener('click', () => toggleInspectFlag(card, flag));
        actions.append(bookmark, flag, cardLinkButton(card), reportButton(card));
        item.append(copy, actions);
        questions.append(item);
      });

      group.append(heading, questions);
      list.append(group);
    });
    updateInspectFlagSummary(visibleInspectCards); restoreListState($('inspectList'),focusSnapshot,'inspectSearch');
    if(!restoringInspect && location.hash.startsWith('#inspect')) saveInspectRoute();
  }
  function startInspect() {
    $('inspectScope').value = 'selected';
    $('inspectFilter').value = 'all';
    $('inspectSubtopic').value = $('studySubtopic').value;
    $('inspectSearch').value = '';
    const selectedCards = selectedPool();
    if (!selectedCards.length) {
      showView('topics');
      announce('Select at least one topic to inspect.');
      return;
    }
    renderInspect();
    showView('inspect');
    saveInspectRoute();
    window.scrollTo(0, 0);
    announce('Inspecting ' + selectedCards.length + ' questions from ' + state.selected.size + ' selected topic' + (state.selected.size === 1 ? '' : 's') + '.');
  }
  function renderFlags() {
    const focusSnapshot=captureListState($('flagsList'));
    const flaggedCards = cards.filter(card => state.flags.has(card.id));
    const list = $('flagsList');
    list.textContent = '';
    $('flagsSummary').textContent = `${flaggedCards.length} card${flaggedCards.length === 1 ? '' : 's'} flagged`;
    $('flagsEmpty').hidden = flaggedCards.length > 0;
    $('copyFlagIdsButton').disabled = flaggedCards.length === 0;
    $('copyFlagReportButton').disabled = flaggedCards.length === 0;
    $('flagReportFallback').hidden = true;
    $('flagCopyStatus').textContent = '';
    $('clearFlagsButton').disabled = flaggedCards.length === 0;

    categories.forEach(category => {
      const categoryCards = flaggedCards.filter(card => card.category === category.id);
      if (!categoryCards.length) return;
      const group = document.createElement('section');
      group.className = 'inspect-group';
      group.setAttribute('aria-labelledby', 'flags-' + category.id);
      const heading = document.createElement('div');
      heading.className = 'inspect-group-heading';
      const title = document.createElement('h3');
      title.id = 'flags-' + category.id;
      title.textContent = category.name;
      const count = document.createElement('span');
      count.textContent = `${categoryCards.length} flagged`;
      heading.append(title, count);
      const questions = document.createElement('ol');
      questions.className = 'inspect-questions';
      categoryCards.forEach(card => {
        const item = document.createElement('li');
        item.className = 'inspect-question is-flagged'; item.dataset.cardId=card.id;
        const copy = document.createElement('div');
        const meta = document.createElement('span');
        meta.className = 'inspect-card-id';
        meta.textContent = card.id;
        const question = document.createElement('p');
        question.textContent = card.question;
        copy.append(meta, question);
        const details = document.createElement('details');
        const summary = document.createElement('summary'); summary.textContent = 'Answer & source';
        const answer = document.createElement('p'); answer.textContent = card.answer;
        const source = document.createElement('a'); source.textContent = card.source;
        source.href = card.sourceUrl; source.target = '_blank'; source.rel = 'noopener noreferrer';
        details.append(summary, answer, source); copy.append(details);
        const remove = document.createElement('button');
        remove.className = 'inspect-flag';
        remove.type = 'button';
        remove.setAttribute('aria-label', `Remove review flag from ${card.id}`);
        remove.textContent = '⚐ Remove flag';
        remove.addEventListener('click', () => {
          state.flags.delete(card.id);
          saveFlags();
          updateSelection();
          renderFlags();
          announce(`Review flag cleared from ${card.id}.`);
        });
        const actions=document.createElement('div'); actions.className='inspect-card-actions'; actions.append(remove,reportButton(card)); item.append(copy, actions);
        questions.append(item);
      });
      group.append(heading, questions);
      list.append(group);
    });
    restoreListState($('flagsList'),focusSnapshot,'flagsTitle');
  }
  function openFlags() {
    renderFlags();
    showView('flags');
    window.scrollTo(0, 0);
    announce(`${state.flags.size} card${state.flags.size === 1 ? '' : 's'} flagged for review.`);
  }
  async function copyFlagIds() {
    const ids = cards.filter(card => state.flags.has(card.id)).map(card => card.id);
    if (!ids.length) return;
    const text = ids.join(', ');
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch (_) {
      const fallback = document.createElement('textarea');
      fallback.value = text;
      fallback.setAttribute('readonly', '');
      fallback.className = 'clipboard-fallback';
      document.body.append(fallback);
      fallback.select();
      try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
      fallback.remove();
    }
    announce(copied ? `${ids.length} flagged card IDs copied.` : 'Copy was blocked. Select the card IDs shown and copy them manually.');
    $('copyFlagIdsButton').textContent = copied ? 'Copied!' : 'Copy flagged IDs';
    window.setTimeout(() => { $('copyFlagIdsButton').textContent = 'Copy flagged IDs'; }, 1600);
  }
  async function copyFlagReport() {
    const report = cards.filter(card => state.flags.has(card.id)).map(card => `${card.id} — ${categoryById.get(card.category).name}\nQuestion: ${card.question}\nAnswer: ${card.answer}\nSource: ${card.source}\n${card.sourceUrl}\nSuggested correction or reason for removal: \n`).join('\n');
    if (!report) return;
    try {
      await navigator.clipboard.writeText(report);
      $('flagCopyStatus').textContent = 'Report copied. Add your concern before sharing it. Nothing has been sent.';
    } catch (_) {
      $('flagReportFallback').hidden = false;
      $('flagReportText').value = report;
      $('flagReportText').focus(); $('flagReportText').select();
      $('flagCopyStatus').textContent = 'Automatic copying is unavailable. Copy the report below.';
    }
  }
  function clearFlags() {
    if (!state.flags.size || !window.confirm(`Clear all ${state.flags.size} review flags?`)) return;
    state.flags.clear();
    saveFlags();
    updateSelection();
    renderFlags();
    announce('All review flags cleared.');
  }
  function startSession(mode) {
    let session = mode === 'bookmarks' ? cards.filter(card => state.bookmarks.has(card.id) && matchesSubtopic(card,$('studySubtopic').value)) : selectedPool();
    if ($('studyOrder').value==='shuffle') session=shuffle(session); session=session.slice(0,sessionLimit(session.length));
    if (!session.length) { showView('topics'); updateSelection(); announce(mode === 'bookmarks' ? 'No bookmarked cards to study.' : 'Select at least one topic.'); return; }
    beginSession(session, mode);
  }
  function currentCard() { return state.session[state.index]; }
  function renderCard() {
    const card = currentCard();
    if (!card) { completeSession(); return; }
    const category = categories.find(item => item.id === card.category);
    $('frontCategory').textContent = category.name; $('backCategory').textContent = category.name;
    $('frontId').textContent = `Card ${card.id}`; $('backId').textContent = `Card ${card.id}`;
    $('questionText').textContent = card.question; $('answerText').textContent = card.answer;
    $('practiceFigure').hidden=!card.image; if(card.image){$('practiceImage').src=card.image; $('practiceImage').alt=card.imageAlt || ''; } else $('practiceImage').removeAttribute('src');
    $('sourceReview').textContent=sourceReviewText(card); $('shareStatus').textContent='';
    const sourceLine = $('sourceLine'); sourceLine.textContent = '';
    if (card.sourceUrl) { const link = document.createElement('a'); link.href = card.sourceUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = card.source; sourceLine.append('Source: ', link); }
    else { sourceLine.textContent = `Source: ${card.source}`; }
    $('positionLabel').textContent = `${state.index + 1} / ${state.session.length}`;
    $('aircraftNotice').hidden = card.category !== 'ctls';
    $('studySetLabel').textContent = ({bookmarks:'Bookmarked cards',custom:'Custom study',review:'Focused review',due:'Due for review',weak:'Difficult cards',new:'New cards'})[state.mode] || 'Selected topics';
    renderBookmarkState(card);
    renderFlagState(card);
    $('prevButton').disabled = state.index === 0;
    $('nextButton').disabled = false;
    $('nextButton').textContent = state.index === state.session.length - 1 ? 'Finish →' : 'Next →';
    setFlipped(false);
    announce(`Card ${state.index + 1} of ${state.session.length}, ${card.id}. ${category.name}.`);
  }
  function renderBookmarkState(card) {
    const bookmarked = state.bookmarks.has(card.id);
    $('bookmarkButton').setAttribute('aria-pressed', String(bookmarked));
    $('bookmarkButton').firstChild.textContent = bookmarked ? '★' : '☆';
    $('bookmarkButton').lastChild.textContent = bookmarked ? ' Bookmarked' : ' Bookmark';
  }
  function renderFlagState(card) {
    const flagged = state.flags.has(card.id);
    $('flagButton').setAttribute('aria-pressed', String(flagged));
    $('flagButton').firstChild.textContent = flagged ? '⚑' : '⚐';
    $('flagButton').lastChild.textContent = flagged ? ' Flagged' : ' Flag for review';
    $('flagButton').setAttribute('aria-label', (flagged ? 'Remove review flag from ' : 'Flag for review ') + card.id);
  }
  function setFlipped(flipped) {
    state.flipped = flipped;
    $('flashcard').classList.toggle('is-flipped', flipped);
    if (flipped && currentCard()) state.viewed.add(currentCard().id);
    document.querySelector('.card-front').hidden = flipped;
    document.querySelector('.card-back').hidden = !flipped;
    document.querySelector('.card-front').setAttribute('aria-hidden', String(flipped));
    document.querySelector('.card-back').setAttribute('aria-hidden', String(!flipped));
    $('flipButton').textContent = flipped ? 'Show question' : 'Reveal answer';
    $('knownButton').disabled = !flipped;
    $('againButton').disabled = !flipped;
    $('knownButton').setAttribute('aria-pressed', String(state.known.has(currentCard()?.id)));
    $('againButton').setAttribute('aria-pressed', String(state.again.has(currentCard()?.id)));
    $('reviewProgress').textContent = `${state.viewed.size} / ${state.session.length} answers revealed · ${state.known.size} known · ${state.again.size} to review`;
    saveProgress();
  }
  function flip() { const focusedReveal = document.activeElement === $('cardRevealButton'); setFlipped(!state.flipped); if (focusedReveal) $('flipButton').focus({preventScroll: true}); announce(state.flipped ? `Answer shown. ${currentCard().answer}` : `Question shown. ${currentCard().question}`); }
  function previous() { if (state.index > 0) { state.index -= 1; renderCard(); } }
  function next() { if (state.index >= state.session.length - 1) completeSession(); else { state.index += 1; renderCard(); } }
  function toggleBookmark() {
    const card = currentCard(); if (!card) return;
    const wasBookmarked = state.bookmarks.has(card.id);
    if (wasBookmarked) state.bookmarks.delete(card.id); else state.bookmarks.add(card.id);
    saveBookmarks(); updateSelection();
    if (state.mode === 'bookmarks' && wasBookmarked) {
      state.session.splice(state.index, 1);
      state.viewed.delete(card.id); state.known.delete(card.id); state.again.delete(card.id);
      if (!state.session.length) { state.index = 0; state.completed = true; saveProgress(); announce('Bookmark removed. No bookmarked cards remain.'); showView('topics'); return; }
      if (state.index >= state.session.length) state.index = state.session.length - 1;
      renderCard(); announce(`Bookmark removed. ${state.session.length} bookmarked cards remain.`); return;
    }
    renderBookmarkState(card);
    announce(wasBookmarked ? `Bookmark removed from ${card.id}.` : `${card.id} bookmarked.`);
  }
  function toggleFlag() {
    const card = currentCard(); if (!card) return;
    const wasFlagged = state.flags.has(card.id);
    if (wasFlagged) state.flags.delete(card.id); else state.flags.add(card.id);
    saveFlags();
    updateSelection();
    renderFlagState(card);
    announce(wasFlagged ? `Review flag cleared from ${card.id}.` : `${card.id} flagged for review.`);
  }
  function completeSession(updateHistory = true) {
    state.completed = true;
    showView('complete', updateHistory);
    const unseen = state.session.length - state.viewed.size;
    $('completeSummary').textContent = `${state.viewed.size} of ${state.session.length} answers revealed. ${state.known.size} marked known · ${state.again.size} marked review again · ${unseen} unrevealed.`;
    $('reviewAgainButton').disabled = state.again.size === 0;
    $('unseenButton').disabled = unseen === 0;
    updateSelection();
    saveProgress();
  }
  function rateCard(kind) {
    const card = currentCard(); if (!card || !state.flipped) return;
    const selected = kind === 'known' ? state.known : state.again;
    const other = kind === 'known' ? state.again : state.known;
    if (!selected.has(card.id)) { selected.add(card.id); other.delete(card.id); store.review(card.id,kind); }
    refreshLearning();
    setFlipped(true);
    announce(`${card.id}: ${state.known.has(card.id) ? 'marked known' : state.again.has(card.id) ? 'marked review again' : 'rating cleared'}.`);
  }
  function studySubset(kind) {
    const session = state.session.filter(card => kind === 'again' ? state.again.has(card.id) : !state.viewed.has(card.id));
    if (session.length) beginSession(session, 'review');
  }
  function exportBackup() {
    const backup = { records: store.exportRecords(), app: 'flight-review-companion', version: 1, exportedAt: new Date().toISOString(), bookmarks: [...state.bookmarks], flags: [...state.flags], session: sessionData(), preferences: preferenceData() };
    const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = `flight-review-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.append(link); link.click(); link.remove(); window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('backupStatus').textContent = 'Backup exported. Import this file on your other device; keep a copy somewhere you can find it.';
  }
  async function importBackup(event) {
    const file = event.target.files?.[0]; if (!file) return;
    pendingBackup = null; $('backupPreview').hidden = true;
    try {
      if (file.size > 10 * 1024 * 1024) throw new Error('Choose a study backup smaller than 10 MB.');
      const backup = JSON.parse(await file.text());
      if (backup?.app !== 'flight-review-companion' || backup.version !== 1 || !Array.isArray(backup.bookmarks) || !Array.isArray(backup.flags)) throw new Error('This file is not a supported study backup.');
      const validIds = ids => [...new Set((Array.isArray(ids) ? ids : []).filter(id => typeof id === 'string' && byId.has(id)))];
      pendingBackup = {records: backup.records, bookmarks: validIds(backup.bookmarks), flags: validIds(backup.flags), session: backup.session, preferences: backup.preferences};
      const sessionCount = validIds(backup.session?.ids).length;
      $('backupPreviewSummary').textContent = `Ready to merge ${pendingBackup.bookmarks.length} bookmarks and ${pendingBackup.flags.length} flags. ${sessionCount ? `This backup also has a ${sessionCount}-card session.` : 'No restorable session is included.'} Unknown card IDs are ignored.`;
      $('restoreBackupSession').checked = false;
      $('restoreBackupSession').disabled = sessionCount === 0;
      $('backupPreview').hidden = false;
      $('backupStatus').textContent = 'Review the backup, then choose Import backup. Your saved data has not changed.';
    } catch (error) { $('backupStatus').textContent = error instanceof SyntaxError ? 'That file is not valid JSON. Your saved study data was not changed.' : error.message; }
    event.target.value = '';
  }
  function confirmBackupImport() {
    if (!pendingBackup) return;
    pendingBackup.bookmarks.forEach(id => state.bookmarks.add(id));
    pendingBackup.flags.forEach(id => state.flags.add(id));
    let restored = false;
    if ($('restoreBackupSession').checked) { applyPreferences(pendingBackup.preferences); restored = applySession(pendingBackup.session); }
    if(pendingBackup.records && typeof pendingBackup.records==='object') { const extra=Object.fromEntries(Object.entries(pendingBackup.records).filter(([key])=>/^(learning:|mix:)/.test(key))); applyingRemote=true; store.mergeRecords(extra); applyingRemote=false; }
    pendingBackup = null; $('backupPreview').hidden = true;
    renderSavedMixes(); refreshLearning();
    saveBookmarks(); saveFlags(); saveProgress(); updateSelection(); updateCustomSelection();
    showView('topics');
    $('backupStatus').textContent = `Imported. ${state.bookmarks.size} bookmarks and ${state.flags.size} flags saved. ${restored ? 'Saved session restored; open it from Topics.' : 'Your current session and selections were kept.'}`;
  }
  function renderSources() {
    const list = $('sourcesList');
    sources.forEach(source => {
      const item = document.createElement('div'); item.className = 'source-item';
      const title = source.url ? document.createElement('a') : document.createElement('strong');
      title.textContent = source.title;
      if (source.url) { title.href = source.url; title.target = '_blank'; title.rel = 'noopener noreferrer'; }
      const note = document.createElement('span'); note.textContent = source.note;
      item.append(title, note); list.append(item);
    });
  }

  const GROUPS=['foundation','ifr','professional','aircraft','practice'];
  const SUBTOPICS=[{id:'all',name:'All subtopics'},
    {id:'ifr-approaches',name:'IFR · approaches',category:'ifr',pattern:/approach|DA\b|MDA\b|minimums|minima|glideslope|localizer|LPV|LNAV/i},
    {id:'ifr-departures',name:'IFR · departures',category:'ifr',pattern:/departure|\bSID\b|\bODP\b|climb gradient|void time/i},
    {id:'ifr-enroute',name:'IFR · en route & holding',category:'ifr',pattern:/holding|hold |en route|MEA\b|MOCA|airway|lost comm|clearance/i},
    {id:'ifr-currency',name:'IFR · currency & equipment',category:'ifr',pattern:/currency|recent experience|IPC\b|inspection|equipment|VOR check/i},
    {id:'wx-reports',name:'Weather · reports & forecasts',category:'weather',pattern:/METAR|TAF\b|PIREP|forecast|SIGMET|AIRMET|report/i},
    {id:'wx-hazards',name:'Weather · hazards',category:'weather',pattern:/icing|turbulence|thunderstorm|wind shear|microburst|fog|front|hazard/i}];
  function groupOf(id) { return id==='ctls'?'aircraft':id==='practical-scenarios'?'practice':id==='ifr'?'ifr':['part-121','part-135','international-oceanic','turboprop','ground-ramp','dangerous-goods'].includes(id)?'professional':'foundation'; }
  function matchesSubtopic(card,id) { const t=SUBTOPICS.find(t=>t.id===id); return !t || id==='all' || card.category===t.category && t.pattern.test(card.question+' '+card.answer); }
  function selectedPool() { return cards.filter(c=>state.selected.has(c.category)&&matchesSubtopic(c,$('studySubtopic').value)); }
  function sessionLimit(total) { return $('studyLimit').value==='all'?total:Math.min(total,Number($('studyLimit').value)||20); }
  function saveMarks(prefix,next,previous) { const values={}; for(const id of new Set([...previous,...next])) if(next.has(id)!==previous.has(id)) values[prefix+id]=next.has(id); store.setMany(values); }
  function readSavedMarks() { const r=store.exportRecords(); state.bookmarks=new Set(Object.keys(r).filter(k=>k.startsWith('bookmark:')&&r[k].value===true&&byId.has(k.slice(9))).map(k=>k.slice(9))); state.flags=new Set(Object.keys(r).filter(k=>k.startsWith('flag:')&&r[k].value===true&&byId.has(k.slice(5))).map(k=>k.slice(5))); previousBookmarks=new Set(state.bookmarks); previousFlags=new Set(state.flags); }
  function refreshLearning() {
    const stats=store.learningStats(cards);
    $('learningStats').textContent=`${stats.reviewed.toLocaleString()} practiced · ${stats.due.toLocaleString()} due · ${stats.unseen.toLocaleString()} new`;
    $('dueButton').disabled=stats.due===0; $('dueButton').textContent=`Review ${Math.min(stats.due,20)} due cards`;
    $('weakButton').disabled=stats.again===0; $('newCardsButton').disabled=stats.unseen===0;
    document.querySelectorAll('[data-category-progress]').forEach(n=>{ const c=stats.categories[n.dataset.categoryProgress]; n.textContent=c?`${c.reviewed} / ${c.total} practiced · ${c.due} due`:''; });
    if(store.getError()) $('saveNotice').hidden=false;
  }
  function startLearning(kind) {
    const stats=store.learningStats(cards), records=store.exportRecords();
    const ids=kind==='due'?stats.dueIds:kind==='new'?stats.unseenIds:cards.filter(c=>records['learning:'+c.id]?.value?.lastRating==='again').map(c=>c.id);
    let pool=ids.map(id=>byId.get(id)).filter(Boolean);
    if(kind==='due') pool.sort((a,b)=>(records['learning:'+a.id]?.value?.dueAt||0)-(records['learning:'+b.id]?.value?.dueAt||0)); else pool=shuffle(pool);
    if(pool.length) beginSession(pool.slice(0,20),kind);
  }
  function filterTopics() {
    const group=$('topicGroup').value,q=$('topicSearch').value.toLowerCase().trim(); let shown=0;
    document.querySelectorAll('.category-card').forEach(el=>{ const cat=categoryById.get(el.dataset.category); el.hidden=!(group==='all'||el.dataset.group===group)||!(`${cat.name} ${cat.description}`.toLowerCase().includes(q)); if(!el.hidden)shown++; });
    $('topicFilterStatus').textContent=`${shown} of ${categories.length} topics shown`;
  }
  function renderSavedMixes() {
    const current=$('savedMix').value; $('savedMix').textContent=''; const empty=new Option('Choose a mix',''); $('savedMix').append(empty);
    for(const [key,record] of Object.entries(store.exportRecords())) if(key.startsWith('mix:')&&validMix(record.value)) $('savedMix').append(new Option(record.value.name,key));
    if([...$('savedMix').options].some(o=>o.value===current))$('savedMix').value=current;
  }
  function saveMix() { const sel=readCustomSelection(),name=$('mixName').value.trim(); if(!name||!sel.valid||!sel.total){$('mixStatus').textContent='Give your mix a name and choose valid quantities.';return;} const key='mix:'+crypto.randomUUID(); store.set(key,{name,counts:Object.fromEntries(sel.counts)}); renderSavedMixes(); $('savedMix').value=key; $('mixStatus').textContent='Mix saved. You can load it for another session.'; }
  function validMix(mix) { return !!mix && typeof mix.name==='string' && mix.name.trim().length>0 && mix.name.length<=80 && mix.counts && typeof mix.counts==='object' && !Array.isArray(mix.counts) && Object.values(mix.counts).every(n=>Number.isSafeInteger(n)&&n>=0); }
  function loadMix() { const mix=store.get($('savedMix').value); if(!validMix(mix))return; document.querySelectorAll('.custom-count-input').forEach(i=>{i.value=String(Math.min(Number(i.max),mix.counts[i.dataset.category]||0));}); $('mixName').value=mix.name; updateCustomSelection(); saveProgress(); $('mixStatus').textContent='Mix loaded. Quantities are limited to the cards currently available.'; }
  function sourceReviewText(card) { const m=card.sourceMetadata; if(!m)return 'Verification date not recorded; check the current source.'; return [m.edition,m.reviewedAt?`Content checked ${m.reviewedAt}`:'Verification date not recorded',m.verificationStatus].filter(Boolean).join(' · '); }
  function appendSourceReview(node,card) { const p=document.createElement('p');p.className='source-review';p.textContent=sourceReviewText(card);node.append(p); }
  function appendPractice(node,card) { if(!card.image)return; const figure=document.createElement('figure');figure.className='practice-figure';const img=document.createElement('img');img.src=card.image;img.alt=card.imageAlt||'';img.loading='lazy';const cap=document.createElement('figcaption');cap.textContent='Illustrative training example. Not for operational use.';figure.append(img,cap);node.append(figure); }
  function cardUrl(card) { const u=new URL(location.href);u.hash='card/'+encodeURIComponent(card.id);return u.href; }
  function cardLinkButton(card) {const link=document.createElement('a');link.className='card-link';link.href='#card/'+encodeURIComponent(card.id);link.textContent='Open card link';link.setAttribute('aria-label','Open '+card.id+' link');return link;}
  function reportButton(card) { const b=document.createElement('button');b.type='button';b.className='text-button';b.textContent='Suggest a correction';b.setAttribute('aria-label','Suggest a correction for '+card.id);b.addEventListener('click',()=>openReport(card));return b; }
  function captureListState(list) {const active=document.activeElement, row=active?.closest('[data-card-id]');return {id:list.contains(active)?row?.dataset.cardId:null,label:active?.getAttribute('aria-label'),index:row?[...list.querySelectorAll('[data-card-id]')].indexOf(row):0,open:[...list.querySelectorAll('details[open]')].map(d=>d.closest('[data-card-id]')?.dataset.cardId)};}
  function restoreListState(list,snapshot,fallbackId) { const rows=[...list.querySelectorAll('[data-card-id]')]; for(const row of rows) if(snapshot.open.includes(row.dataset.cardId)){const d=row.querySelector('details');if(d)d.open=true;} if(!snapshot.id)return;const row=rows.find(r=>r.dataset.cardId===snapshot.id)||rows[Math.min(snapshot.index,rows.length-1)];const button=row?([...row.querySelectorAll('button,a')].find(b=>b.getAttribute('aria-label')===snapshot.label)||row.querySelector('button,a')):$(fallbackId);if(button){if(!button.matches('button,a,input,select'))button.tabIndex=-1;button.focus({preventScroll:true});} }
  function saveInspectRoute() {const p=new URLSearchParams({scope:$('inspectScope').value,filter:$('inspectFilter').value,focus:$('inspectSubtopic').value});if($('inspectSearch').value)p.set('q',$('inspectSearch').value);history.replaceState(null,'','#inspect?'+p.toString());}
  function onStoreChange(event) {
    if(event.source==='local'){ refreshLearning(); scheduleSync(); return; }
    if(applyingRemote)return;
    applyingRemote=true;
    readSavedMarks();
    if(event.keys.includes('preferences'))applyPreferences(store.get('preferences'));
    if(event.keys.includes('session')){applySession(store.get('session'));sessionVersion=store.version('session');if(!views.study.hidden){if(state.session.length){const flipped=state.flipped;renderCard();setFlipped(flipped);}else showView('topics');announce('Study session updated from another tab or device.');}}
    updateSelection();updateCustomSelection();refreshResume();refreshLearning();renderSavedMixes();
    if(!views.inspect.hidden)renderInspect();if(!views.flags.hidden)renderFlags();
    applyingRemote=false;
    if(event.source==='storage')scheduleSync();
  }
  function syncEnabled() { try{return !!identity?.user?.id&&activeProfile===identity.user.id&&localStorage.getItem('flight-review-cloud-enabled')===identity.user.id;}catch{return false;} }
  async function api(path,options={}) { const r=await fetch(path,{credentials:'same-origin',...options,headers:{'Content-Type':'application/json',...(options.headers||{})}});let data;try{data=await r.json();}catch{throw Error('Cloud services are available on the hosted website. Local study and backups still work.');}if(!r.ok)throw Error(data.error||`Request failed (${r.status}).`);return data; }
  async function loadIdentity() {
    try {
      if(location.protocol==='file:') throw Error('Cloud services require the hosted website.');
      identity=await api('/api/identity');
      activateProfile(identity.authenticated ? identity.user.id : null);
      $('syncIdentity').textContent=identity.authenticated?`Signed in as ${identity.user?.displayName||'your account'}`:'Sign in to enable private account sync.';
      $('syncSignIn').hidden=!!identity.authenticated; $('inboxButton').hidden=!identity.isOwner;
      $('syncStatus').textContent=syncEnabled()?'Sync is enabled on this device.':'Sync is off. Your study data stays on this device.';
      if(syncEnabled()) await syncNow();
    } catch(error) {
      identity=null; activateProfile(null); $('syncIdentity').textContent='Local study mode';
      $('syncStatus').textContent=error.message+' Account progress stays separate and will be available after reconnecting.';
      $('inboxButton').hidden=true;
    }
    updateSyncButtons();
  }
  function updateSyncButtons(){const enabled=syncEnabled();$('syncNowButton').disabled=!enabled||syncBusy;$('disableSyncButton').disabled=!enabled;$('enableSyncButton').disabled=enabled||!identity?.authenticated;}
  function scheduleSync(){if(!syncEnabled())return;if(syncBusy){syncAgain=true;return;}clearTimeout(syncTimer);syncTimer=setTimeout(syncNow,1200);}
  async function syncNow() {
    if(!syncEnabled()||syncBusy)return;
    const account=identity.user.id, target=store, generation=syncGeneration;
    const current=()=>syncEnabled()&&identity.user.id===account&&store===target&&generation===syncGeneration;
    const headers={'X-Study-User':account};
    const merge=result=>{if(!current())return false;if(result.userId!==account)throw Error('Your signed-in account changed. Reopen Sync & backup to reconnect.');target.mergeRecords(result.records||{});return true;};
    syncBusy=true; updateSyncButtons(); $('syncStatus').textContent='Syncing your study data…';
    try {
      if(!merge(await api('/api/sync',{headers})))return;
      const entries=Object.entries(target.exportRecords());
      for(let i=0;i<entries.length;i+=250) {
        if(!current())return;
        if(!merge(await api('/api/sync',{method:'POST',headers,body:JSON.stringify({records:Object.fromEntries(entries.slice(i,i+250))})})))return;
      }
      if(current())$('syncStatus').textContent='Synced '+new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})+'. Your latest progress is saved to your account.';
    } catch(error) { if(current())$('syncStatus').textContent='Sync paused: '+error.message+' Local progress is still available.'; }
    finally { syncBusy=false;updateSyncButtons();if(syncAgain){syncAgain=false;scheduleSync();} }
  }
  function openReport(card){reportCardId=card.id;$('reportCardSummary').textContent=card.id+' — '+card.question;$('reportConcern').value='';$('reportStatus').textContent='';$('reportSignIn').hidden=!!identity?.authenticated;$('submitReportButton').disabled=!identity?.authenticated;$('reportDialog').showModal();}
  async function sendReport(event){event.preventDefault();if(!identity?.authenticated||!reportCardId)return;$('submitReportButton').disabled=true;try{const result=await api('/api/reports',{method:'POST',body:JSON.stringify({cardId:reportCardId,concern:$('reportConcern').value.trim()})});$('reportStatus').textContent='Report received. Reference: '+result.id+'. Thank you for helping improve this card.';$('reportConcern').value='';}catch(error){$('reportStatus').textContent=error.message;$('submitReportButton').disabled=false;}}
  async function openInbox(){
    const dialog=$('inboxDialog'), list=$('inboxList'), status=$('inboxStatus');
    const generation=(openInbox.generation||0)+1, ownerId=identity?.user?.id;
    openInbox.generation=generation;
    const current=()=>openInbox.generation===generation&&dialog.open&&identity?.user?.id===ownerId;
    if(!dialog.open)dialog.showModal();
    list.textContent='';
    const reports=new Map();
    let nextBefore=null, loaded=false, loading=false;
    const more=document.createElement('button');
    more.type='button';more.className='secondary-button';more.textContent='Load more';more.hidden=true;
    list.append(more);
    const describe=()=>{
      const count=reports.size, open=[...reports.values()].filter(report=>report.status!=='resolved').length;
      status.textContent=count?`${count} report${count===1?'':'s'} loaded · ${open} open · ${count-open} resolved${nextBefore!==null?' · More reports available.':'.'}`:'No correction reports yet.';
    };
    const addReport=report=>{
      if(reports.has(report.id))return;
      reports.set(report.id,report);
      const article=document.createElement('article');article.className='inbox-report';
      const link=document.createElement('a');link.href='#card/'+encodeURIComponent(report.cardId);link.textContent=report.cardId;
      link.addEventListener('click',()=>dialog.close());
      const concern=document.createElement('p');concern.textContent=report.concern;
      const meta=document.createElement('p');meta.className='help-copy';
      const action=document.createElement('button');action.type='button';action.className='quiet-button';
      const feedback=document.createElement('p');feedback.className='help-copy';feedback.setAttribute('role','status');
      const renderStatus=()=>{
        const resolved=report.status==='resolved';
        meta.textContent=`${resolved?'Resolved':'Open'} · ${new Date(report.createdAt).toLocaleString()}`;
        action.textContent=resolved?'Reopen':'Resolve';
        action.setAttribute('aria-label',`${resolved?'Reopen':'Resolve'} report for ${report.cardId}`);
      };
      action.addEventListener('click',async()=>{
        if(!current()||action.disabled)return;
        const requestedStatus=report.status==='resolved'?'open':'resolved';
        action.disabled=true;action.textContent='Saving…';feedback.textContent='';
        try{
          const result=await api('/api/reports',{method:'PATCH',body:JSON.stringify({id:report.id,status:requestedStatus})});
          if(!current())return;
          report.status=result.status;renderStatus();describe();
          feedback.textContent=requestedStatus==='resolved'?'Report marked resolved.':'Report reopened.';
        }catch(error){
          if(!current())return;
          renderStatus();action.textContent=requestedStatus==='resolved'?'Retry resolve':'Retry reopen';
          feedback.textContent='Status was not changed. '+error.message;
        }finally{if(current())action.disabled=false;}
      });
      renderStatus();article.append(link,concern,meta,action,feedback);list.insertBefore(article,more);
    };
    async function loadPage(){
      if(loading||!current()||(loaded&&nextBefore===null))return;
      loading=true;more.disabled=true;more.hidden=false;more.textContent='Loading…';
      status.textContent=loaded?'Loading more reports…':'Loading reports…';
      list.setAttribute('aria-busy','true');
      try{
        const data=await api('/api/reports'+(loaded?'?before='+encodeURIComponent(nextBefore):''));
        if(!current())return;
        for(const report of data.reports)addReport(report);
        nextBefore=data.nextBefore??null;loaded=true;
        more.textContent='Load more';more.hidden=nextBefore===null;describe();
      }catch(error){
        if(!current())return;
        status.textContent=(loaded?'The reports already loaded are still available. ':'')+'Could not load reports. '+error.message;
        more.textContent=loaded?'Retry loading more':'Retry loading reports';more.hidden=false;
      }finally{
        loading=false;
        if(current()){more.disabled=false;list.removeAttribute('aria-busy');}
      }
    }
    more.addEventListener('click',loadPage);
    await loadPage();
  }
  function installEnhancements(){
    document.querySelectorAll('.subtopic-select').forEach(select=>{SUBTOPICS.slice(1).forEach(t=>select.append(new Option(t.name,t.id)));});
    $('topicGroup').addEventListener('change',filterTopics);$('topicSearch').addEventListener('input',filterTopics);
    ['studyOrder','studyLimit','studySubtopic'].forEach(id=>$(id).addEventListener('change',()=>{updateSelection();saveProgress();}));
    $('introDetails').addEventListener('toggle',()=>{const changed=$('introDetails').open!==introState;introState=$('introDetails').open;if(changed&&profileReady&&!applyingRemote)store.set('preferences',preferenceData());});
    $('dueButton').addEventListener('click',()=>startLearning('due'));$('weakButton').addEventListener('click',()=>startLearning('weak'));$('newCardsButton').addEventListener('click',()=>startLearning('new'));
    $('saveMixButton').addEventListener('click',saveMix);$('loadMixButton').addEventListener('click',loadMix);$('deleteMixButton').addEventListener('click',()=>{const key=$('savedMix').value;if(key){store.set(key,null);renderSavedMixes();$('mixStatus').textContent='Saved mix removed.';}});
    $('inspectSubtopic').addEventListener('change',renderInspect);
    $('undoFlagsButton').addEventListener('click',()=>{if(!flagUndo)return;for(const item of flagUndo)item.flagged?state.flags.add(item.id):state.flags.delete(item.id);saveFlags();flagUndo=null;$('bulkUndo').hidden=true;updateSelection();renderInspect();$('flagVisibleButton').focus();announce('Bulk flag changes undone.');});
    $('shareCardButton').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(cardUrl(currentCard()));$('shareStatus').textContent='Card link copied.';}catch{$('shareStatus').textContent=cardUrl(currentCard());}});
    $('reportCardButton').addEventListener('click',()=>openReport(currentCard()));$('closeReportButton').addEventListener('click',()=>$('reportDialog').close());$('reportForm').addEventListener('submit',sendReport);
    $('syncButton').addEventListener('click',()=>{$('syncDialog').showModal();loadIdentity();});$('closeSyncButton').addEventListener('click',()=>$('syncDialog').close());$('syncBackupButton').addEventListener('click',()=>{$('syncDialog').close();$('backupDialog').showModal();});
    $('enableSyncButton').addEventListener('click',()=>{if(!identity?.authenticated)return;try{localStorage.setItem('flight-review-cloud-enabled',identity.user.id);syncNow();}catch{$('syncStatus').textContent='Browser storage is unavailable. Sync cannot be enabled here.';}});
    $('disableSyncButton').addEventListener('click',()=>{localStorage.removeItem('flight-review-cloud-enabled');syncGeneration++;syncAgain=false;clearTimeout(syncTimer);$('syncStatus').textContent='Sync is off on this device. Your existing cloud copy is kept.';updateSyncButtons();});$('syncNowButton').addEventListener('click',syncNow);window.addEventListener('online',()=>loadIdentity());
    $('inboxButton').addEventListener('click',openInbox);$('closeInboxButton').addEventListener('click',()=>$('inboxDialog').close());
  }

  $('selectAllButton').addEventListener('click', () => setAll(true));
  $('starterVfr').addEventListener('click', () => loadStarter('vfr'));
  $('starterIfr').addEventListener('click', () => loadStarter('ifr'));
  $('starterAirline').addEventListener('click', () => loadStarter('airline'));
  $('librarySearchForm').addEventListener('submit', event => { event.preventDefault(); $('inspectScope').value = 'all'; $('inspectFilter').value = 'all'; $('inspectSubtopic').value='all'; $('inspectSearch').value = $('librarySearch').value; renderInspect(); showView('inspect'); saveInspectRoute(); });
  $('inspectScope').addEventListener('change', renderInspect);
  $('inspectFilter').addEventListener('change', renderInspect);
  $('clearButton').addEventListener('click', () => setAll(false));
  $('customStudyButton').addEventListener('click', openCustomStudy);
  $('customStudyForm').addEventListener('submit', startCustomSession);
  $('clearCustomButton').addEventListener('click', clearCustomSelection);
  $('inspectButton').addEventListener('click', startInspect);
  $('flagVisibleButton').addEventListener('click', toggleVisibleFlags);
  $('startButton').addEventListener('click', () => startSession('selected'));
  $('bookmarksButton').addEventListener('click', () => startSession('bookmarks'));
  $('flagsButton').addEventListener('click', openFlags);
  $('copyFlagIdsButton').addEventListener('click', copyFlagIds);
  $('copyFlagReportButton').addEventListener('click', copyFlagReport);
  $('clearFlagsButton').addEventListener('click', clearFlags);
  $('completeBookmarksButton').addEventListener('click', () => startSession('bookmarks'));
  $('backButton').addEventListener('click', () => showView('topics'));
  $('customBackButton').addEventListener('click', () => showView('topics'));
  $('inspectBackButton').addEventListener('click', () => showView('topics'));
  $('flagsBackButton').addEventListener('click', () => showView('topics'));
  $('homeButton').addEventListener('click', () => showView('topics'));
  $('chooseTopicsButton').addEventListener('click', () => showView('topics'));
  $('restartButton').addEventListener('click', () => beginSession($('studyOrder').value==='shuffle'?shuffle(state.session):[...state.session], state.mode));
  $('resumeButton').addEventListener('click', () => state.completed ? completeSession() : resumeSession());
  $('knownButton').addEventListener('click', () => rateCard('known'));
  $('againButton').addEventListener('click', () => rateCard('again'));
  $('reviewAgainButton').addEventListener('click', () => studySubset('again'));
  $('unseenButton').addEventListener('click', () => studySubset('unseen'));
  $('inspectSearch').addEventListener('input', () => { clearTimeout(searchTimer); searchTimer = setTimeout(renderInspect, 150); });
  $('clearSearchButton').addEventListener('click', () => { $('inspectSearch').value = ''; renderInspect(); $('inspectSearch').focus(); });
  $('backupButton').addEventListener('click', () => $('backupDialog').showModal());
  $('closeBackupButton').addEventListener('click', () => $('backupDialog').close());
  $('exportBackupButton').addEventListener('click', exportBackup);
  $('importBackupInput').addEventListener('change', importBackup);
  $('confirmBackupImport').addEventListener('click', confirmBackupImport);
  $('cancelBackupImport').addEventListener('click', () => { pendingBackup = null; $('backupPreview').hidden = true; $('backupStatus').textContent = 'Import canceled. Your saved data was not changed.'; });
  $('confirmNewSession').addEventListener('click', () => { const nextSession = pendingSession; pendingSession = null; $('newSessionDialog').close(); if (nextSession) beginSession(nextSession.session, nextSession.mode, true); });
  $('cancelNewSession').addEventListener('click', () => { pendingSession = null; $('newSessionDialog').close(); });
  $('newSessionDialog').addEventListener('cancel', () => { pendingSession = null; });
  $('backupBeforeNewSession').addEventListener('click', exportBackup);
  $('cardRevealButton').addEventListener('click', flip);
  $('flashcard').addEventListener('click', event => { if (!event.target.closest('a,button,summary,input')) flip(); }); $('flipButton').addEventListener('click', flip);
  $('prevButton').addEventListener('click', previous); $('nextButton').addEventListener('click', next); $('bookmarkButton').addEventListener('click', toggleBookmark); $('flagButton').addEventListener('click', toggleFlag);
  $('sourcesButton').addEventListener('click', () => $('sourcesDialog').showModal());
  $('closeSourcesButton').addEventListener('click', () => $('sourcesDialog').close());
  $('sourcesDialog').addEventListener('click', event => { if (event.target === $('sourcesDialog')) $('sourcesDialog').close(); });
  document.addEventListener('keydown', event => {
    if (views.study.hidden || document.querySelector('dialog[open]') || /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) || document.activeElement.isContentEditable || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === ' ' || event.key === 'Enter') { if (document.activeElement.closest('button,a,summary')) return; event.preventDefault(); flip(); }
    else if (event.key === 'ArrowLeft') { event.preventDefault(); previous(); } else if (event.key === 'ArrowRight') { event.preventDefault(); next(); } else if (event.key.toLowerCase() === 'b') toggleBookmark(); else if (event.key.toLowerCase() === 'f') toggleFlag();
  });
  window.addEventListener('hashchange', routeToHash);
  // Persist explicit changes only; stale tabs must never write on unload.

  installEnhancements();
  $('librarySummary').textContent = `${cards.length.toLocaleString()} cards · ${categories.length} topics`;
  renderCategories(); renderCustomCategories(); renderSources(); updateSelection(); updateCustomSelection(); refreshResume(); refreshLearning(); renderSavedMixes(); filterTopics();
  $('main').inert=true; loadIdentity();
})();
