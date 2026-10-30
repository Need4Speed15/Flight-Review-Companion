// Regression checks for the actual app's session/backup functions using an isolated UI stub.
// No browser profile or user storage is read or written.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const script = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');
const extractFunctions = names => names.map(name => {
  const start = script.search(new RegExp(`  (?:async )?function ${name}\\(`));
  assert(start >= 0, `Missing ${name}`);
  const tail = script.slice(start + 2);
  const next = tail.search(/\n  (?:async )?function /);
  return next === -1 ? tail : tail.slice(0, next);
}).join('\n');
const functions = extractFunctions(['applyPreferences','applySession','beginSession','importBackup','confirmBackupImport']);
const sandbox = {Set,Map,Number,Array,Error,SyntaxError,JSON};
vm.createContext(sandbox);
vm.runInContext(`
  const cards = [{id:'A',category:'one'},{id:'B',category:'one'}];
  const byId = new Map(cards.map(c=>[c.id,c]));
  const categories = [{id:'one'}];
  const SUBTOPICS = [{id:'all'},{id:'ifr-approaches'}];
  const inputs = [{dataset:{category:'one'},value:'0',max:'2'}];
  const checks = [{value:'one',checked:false}];
  const nodes = new Map();
  const $ = id => { if(!nodes.has(id)) nodes.set(id,{hidden:true,checked:false,textContent:'',showModal(){this.open=true;}}); return nodes.get(id); };
  const document = {querySelectorAll: s=>s === '.custom-count-input' ? inputs : checks};
  const state = {selected:new Set(),bookmarks:new Set(['A']),flags:new Set(),session:[cards[0]],index:0,mode:'selected',viewed:new Set(),known:new Set(),again:new Set(),completed:false,flipped:false};
  let pendingSession=null,pendingBackup=null,view='study',saves=0,applyingRemote=false;
  const importedRecords = {};
  const store = {mergeRecords(records){Object.assign(importedRecords,records);return {changed:Object.keys(records),persisted:true};}};
  function showView(v){view=v;}
  function renderCard(){}
  function saveBookmarks(){} function saveFlags(){} function saveProgress(){saves++;}
  function updateSelection(){} function updateCustomSelection(){}
  function renderSavedMixes(){} function refreshLearning(){}
  ${functions}
  function inputFor(value){return {target:{value:'fixture.json',files:[{size:100,text:async()=>value}]}};}
`,sandbox);
const run = s=>vm.runInContext(s,sandbox);
(async()=>{
  run(`beginSession([cards[1]],'custom')`);
  assert.equal(run(`state.session[0].id`),'A');
  assert.equal(run(`$('newSessionDialog').open`),true);
  run(`beginSession(pendingSession.session,pendingSession.mode,true)`);
  assert.equal(run(`state.session[0].id`),'B');
  const before=run(`JSON.stringify({session:state.session,bookmarks:[...state.bookmarks],flags:[...state.flags],saves})`);
  await run(`importBackup(inputFor('not json'))`);
  assert.match(run(`$('backupStatus').textContent`),/not valid JSON/);
  assert.equal(run(`JSON.stringify({session:state.session,bookmarks:[...state.bookmarks],flags:[...state.flags],saves})`),before);
  await run(`importBackup(inputFor(JSON.stringify({app:'wrong',version:1,bookmarks:[],flags:[]})))`);
  assert.equal(run('pendingBackup'),null);
  await run(`importBackup(inputFor(JSON.stringify({app:'flight-review-companion',version:1,bookmarks:['B','B','unknown'],flags:['A'],session:{ids:['A','unknown','A'],index:9,known:['A'],again:['A'],viewed:[],mode:'invalid'},preferences:{selected:['one','unknown'],custom:{one:99}}})))`);
  assert.equal(run(`state.bookmarks.size`),1,'Preview must not mutate data');
  assert.equal(run(`$('restoreBackupSession').checked`),false);
  run('confirmBackupImport()');
  assert.equal(run('state.bookmarks.size'),2);
  assert.equal(run('state.flags.has("A")'),true);
  assert.equal(run('state.session[0].id'),'B','Default import preserves current session');
  assert.equal(run('view'),'topics','No stale study card after import');
  await run(`importBackup(inputFor(JSON.stringify({app:'flight-review-companion',version:1,bookmarks:[],flags:[],session:{ids:['A','unknown','A'],index:9,known:['A'],again:['A'],mode:'invalid'},preferences:{selected:['one','unknown'],custom:{one:99}}})))`);
  run(`$('restoreBackupSession').checked=true; confirmBackupImport()`);
  assert.equal(run('state.session.length'),1);
  assert.equal(run('state.session[0].id'),'A');
  assert.equal(run('state.index'),0);
  assert.equal(run('state.mode'),'selected');
  assert.equal(run('state.again.size'),0);
  assert.equal(run('state.viewed.has("A")'),true);
  assert.equal(run('state.selected.size'),1);
  assert.equal(run('inputs[0].value'),'2');
  assert.equal(run(`$('studyOrder').value`),'shuffle');
  assert.equal(run(`$('studyLimit').value`),'20');
  assert.equal(run(`$('studySubtopic').value`),'all');
  await run(`importBackup(inputFor(JSON.stringify({app:'flight-review-companion',version:1,bookmarks:[],flags:[],records:{'learning:A':{value:{reviews:3},updatedAt:1,opId:'r1'},'mix:one':{value:{name:'IFR'},updatedAt:1,opId:'r2'},session:{value:{ids:['B']},updatedAt:1,opId:'r3'},'bookmark:B':{value:false,updatedAt:1,opId:'r4'}}})))`);
  run('confirmBackupImport()');
  assert.equal(run(`Object.keys(importedRecords).sort().join(',')`),'learning:A,mix:one','Record import must not bypass the explicit session/mark merge choices');
  assert.equal(run('applyingRemote'),false);
  for (const mode of ['due','weak','new']) {
    run(`applySession({ids:['B'],index:0,mode:${JSON.stringify(mode)},viewed:['B'],known:['B'],flipped:true})`);
    assert.equal(run('state.mode'),mode);
  }
  assert.equal(run('applySession({broken:true})'),false);
  assert.equal(run('state.session[0].id'),'B','Malformed data must not replace the current session');
  run('applySession({ids:[],index:99,viewed:["B"],known:["B"],again:["B"],flipped:true})');
  assert.equal(run('state.session.length'),0,'An explicitly cleared session must remove the old session');
  assert.equal(run('state.index'),0);
  assert.equal(run('state.viewed.size+state.known.size+state.again.size'),0);
  assert.equal(run('state.flipped'),false);
  run('applySession({ids:["A"],known:["A"],flipped:true})');
  run('applySession(null)');
  assert.equal(run('state.session.length'),0,'A remote null tombstone clears the session');
  run('applySession({ids:["A"]})');
  run('applySession({ids:["removed-card"]})');
  assert.equal(run('state.session.length'),0,'A session containing only removed cards cannot retain an unrelated old session');
  await run(`importBackup({target:{files:[{size:11000000}],value:'big.json'}})`);
  assert.match(run(`$('backupStatus').textContent`),/smaller than \d+ MB/);
  assert.equal(run('pendingBackup'),null,'Invalid file must clear a previous preview');
  await testProfiles();
  console.log('PASS: session replacement guard; malformed, unsupported and oversized backups; preview isolation; merge-only import; explicit restore; learning/mix import isolation; due modes; stale IDs; empty sessions and tombstones.');
})().catch(e=>{console.error(e);process.exitCode=1;});

async function testProfiles() {
  const memory = new Map();
  const localStorage = {getItem:key=>memory.get(key)??null,setItem:(key,value)=>memory.set(key,String(value)),removeItem:key=>memory.delete(key)};
  const context = {localStorage,clearTimeout(){},setTimeout(){return 1;}};
  context.window = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(__dirname,'../study-store.js'),'utf8'),context);
  vm.runInContext(`
    const cards=[{id:'A',category:'one'},{id:'B',category:'one'}],categories=[{id:'one'}],byId=new Map(cards.map(c=>[c.id,c]));
    const SUBTOPICS=[{id:'all'}],inputs=[{dataset:{category:'one'},value:'0',max:'2'}],checks=[{value:'one'}];
    const nodes=new Map(),$=id=>{if(!nodes.has(id))nodes.set(id,{hidden:true,checked:false,text:'',options:[],get textContent(){return this.text;},set textContent(value){this.text=String(value);this.options=[];},append(item){this.options.push(item);}});return nodes.get(id);};
    function Option(text,value){this.text=String(text);this.value=String(value);}
    const document={querySelectorAll:selector=>selector==='.custom-count-input'?inputs:checks};
    const views={study:$('studyView'),inspect:$('inspectView'),flags:$('flagsView')};
    const state={selected:new Set(),bookmarks:new Set(),flags:new Set(),session:[],index:0,mode:'selected',viewed:new Set(),known:new Set(),again:new Set(),completed:false,flipped:false};
    let store=FlightStudyStore.create({storage:null}),profileReady=false,activeProfile=null,syncGeneration=0,sessionVersion=null,applyingRemote=false;
    let previousBookmarks=new Set(),previousFlags=new Set(),syncTimer=null,syncAgain=false,syncBusy=false,identity=null;
    let pendingSession=null,pendingBackup=null,flagUndo=null,scheduled=0,apiRequests=[],apiHandler=null,view='topics',lastAnnouncement='';
    const progressKey='flight-review-progress-v2';
    function updateSelection(){} function updateCustomSelection(){} function refreshResume(){} function refreshLearning(){} function routeToHash(){}
    function showView(name){view=name;Object.keys(views).forEach(key=>{views[key].hidden=key!==name;});}
    function announce(message){lastAnnouncement=message;} function renderCard(){} function setFlipped(value){state.flipped=value;} function renderInspect(){} function renderFlags(){}
    function scheduleSync(){scheduled++;}
    function api(path,options={}){apiRequests.push({path,options});return apiHandler(path,options);}
    ${extractFunctions(['sessionData','preferenceData','saveProgress','applyPreferences','applySession','restoreProgress','migrateLegacy','activateProfile','loadBookmarks','loadFlags','readSavedMarks','onStoreChange','syncEnabled','updateSyncButtons','syncNow','validMix','renderSavedMixes','loadMix'])}
  `,context);
  const check=source=>vm.runInContext(source,context);
  localStorage.setItem('flight-review-bookmarks-v1',JSON.stringify(['A','B']));
  localStorage.setItem('flight-review-removal-flags-v1',JSON.stringify(['B']));
  localStorage.setItem('flight-review-progress-v2',JSON.stringify({version:2,preferences:{selected:['one']},session:{ids:['B'],mode:'due'}}));
  check(`const legacy=FlightStudyStore.create();legacy.set('preferences',{selected:['one']});legacy.set('bookmark:B',false);legacy.destroy();activateProfile(null)`);
  assert.equal(check(`state.bookmarks.has('A')`),true,'Partial legacy migration retains bookmarks even with preferences already migrated');
  assert.equal(check(`state.bookmarks.has('B')`),false,'Migration cannot resurrect a removed bookmark');
  assert.equal(check(`state.flags.has('B')`),true);
  assert.equal(check(`state.session[0].id`),'B');
  assert.equal(localStorage.getItem('flight-review-legacy-owner'),null,'Anonymous use must not claim legacy data');
  check(`store.review('A','known');activateProfile('account-A')`);
  assert.equal(check(`store.get('learning:A').reviews`),1,'The first signed-in account keeps local study history');
  assert.equal(check(`state.bookmarks.has('A')`),true);
  assert.equal(localStorage.getItem('flight-review-legacy-owner'),'account-A');
  check(`store.set('session',{ids:['A']});const accountAStore=store;activateProfile('account-B')`);
  assert.equal(check('state.session.length'),0,'Switching accounts clears the previous active session');
  assert.equal(check('state.bookmarks.size+state.flags.size'),0,'Account B must not inherit account A marks');
  assert.equal(check(`store.get('learning:A')`),null,'Account B must not inherit account A practice history');
  assert.throws(()=>check(`accountAStore.set('bookmark:B',true)`),/closed/,'The old store cannot accept a delayed write');
  check(`store.set('bookmark:B',true);store.set('session',{ids:['B']});activateProfile('account-A')`);
  assert.equal(check(`state.session[0].id`),'A');
  assert.equal(check(`state.bookmarks.has('A')`),true);
  assert.equal(check(`state.bookmarks.has('B')`),false);
  check(`activateProfile('account-B')`);
  assert.equal(check(`state.session[0].id`),'B');
  assert.equal(check(`state.bookmarks.has('B')`),true);

  // Use the actual save/subscribe integration, not just the underlying store's CAS test.
  check(`activateProfile('account-A');applySession({ids:['A']});sessionVersion=store.version('session');applyPreferences({order:'shuffle'});const otherTab=FlightStudyStore.create({key:store.storageKey});otherTab.set('session',{ids:['B'],mode:'due'});otherTab.set('preferences',{order:'ordered',limit:'10',selected:['one']});saveProgress();`);
  assert.equal(check(`state.session[0].id`),'B');
  assert.equal(check(`$('studyOrder').value`),'ordered','A session conflict reloads newer preferences');
  assert.equal(check(`store.get('preferences').order`),'ordered','Conflict fallback cannot overwrite newer preferences');
  assert.equal(check('view'),'topics');
  assert.match(check('lastAnnouncement'),/newer session/);
  check(`showView('study');store.mergeRecords({session:{value:null,updatedAt:Date.now()+100,opId:'remote-clear'}})`);
  assert.equal(check('state.session.length'),0,'Remote clear reaches the active study UI');
  assert.equal(check('view'),'topics','Remote clear must leave the empty study screen');
  assert.equal(check(`sessionVersion===store.version('session')`),true);
  check('otherTab.destroy()');
  check(`store.setMany({'mix:bad-name':{name:{toString:null,valueOf:null},counts:{one:1}},'mix:bad-counts':{name:'Invalid',counts:{one:{toString:null,valueOf:null}}},'mix:good':{name:'Valid mix',counts:{one:20}}});renderSavedMixes()`);
  assert.equal(check(`$('savedMix').options.map(o=>o.value).join(',')`),',mix:good','Malformed imported mix names and quantities are not rendered');
  check(`$('savedMix').value='mix:bad-counts';loadMix()`);
  check(`$('savedMix').value='mix:good';loadMix()`);
  assert.equal(check('inputs[0].value'),'2','Valid imported quantities are capped at available cards');

  // Disable or switch accounts while a request is in flight: no merge and no upload follow.
  check(`activateProfile('account-A');identity={authenticated:true,user:{id:'account-A'}};localStorage.setItem('flight-review-cloud-enabled','account-A');apiHandler=()=>new Promise(resolve=>{globalThis.reply=resolve;});apiRequests=[];`);
  let pending=check('syncNow()');
  assert.equal(check(`apiRequests[0].options.headers['X-Study-User']`),'account-A');
  check(`localStorage.removeItem('flight-review-cloud-enabled');syncGeneration++;reply({userId:'account-A',records:{'bookmark:disabled':{value:true,updatedAt:1,opId:'disabled'}}})`);
  await pending;
  assert.equal(check(`store.get('bookmark:disabled')`),null);
  assert.equal(check('apiRequests.length'),1,'Disabling sync stops uploads after the outstanding read');
  check(`localStorage.setItem('flight-review-cloud-enabled','account-A');apiRequests=[]`);
  pending=check('syncNow()');
  check(`identity={authenticated:true,user:{id:'account-B'}};activateProfile('account-B');reply({userId:'account-A',records:{'bookmark:foreign':{value:true,updatedAt:1,opId:'foreign'}}})`);
  await pending;
  assert.equal(check(`store.get('bookmark:foreign')`),null,'An old account response cannot enter the new account store');
  assert.equal(check('apiRequests.length'),1);
  check(`identity={authenticated:true,user:{id:'account-A'}};activateProfile('account-A');apiRequests=[];apiHandler=async()=>({userId:'account-B',records:{}})`);
  await check('syncNow()');
  assert.match(check(`$('syncStatus').textContent`),/account changed/);
  assert.equal(check('apiRequests.length'),1,'A mismatched account response cannot trigger uploads');
  check(`apiRequests=[];apiHandler=async()=>({userId:'account-A',records:{}})`);
  await check('syncNow()');
  assert(check('apiRequests.length')>=2);
  assert.equal(check(`apiRequests.every(r=>r.options.headers['X-Study-User']==='account-A')`),true,'Every read and upload is bound to the captured account');
  console.log('PASS: partial legacy migration, removal tombstones, first-account claim, A/B profile isolation, old-store closure, session-conflict UI fallback, remote session clearing, malformed mix filtering, disabled/in-flight sync cancellation, and server identity binding.');
}
