const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),ctx={window:{}};
vm.createContext(ctx);
const run=file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
run('cards.js');run('source-enhancements.js');
const before=JSON.stringify(ctx.window.FLIGHT_REVIEW_CARDS),oldIds=ctx.window.FLIGHT_REVIEW_CARDS.map(c=>c.id);
run('aircraft-cards.js');
const {FLIGHT_REVIEW_CARDS:cards,FLIGHT_REVIEW_CATEGORIES:categories}=ctx.window;
assert.equal(JSON.stringify(cards.slice(0,oldIds.length)),before,'Existing cards must remain intact');
assert.equal(cards.length,2650);assert.equal(categories.length,29);
const aircraft=categories.filter(c=>c.aircraft);assert.equal(aircraft.length,5);
assert.deepEqual(Array.from(aircraft,c=>c.id).sort(),['cessna-150m','cessna-172s','ctls','king-air-200','piper-archer-ii']);
const expected={'cessna-172s':90,'cessna-150m':75,'piper-archer-ii':90,'king-air-200':150};
const normalized=s=>s.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g,'');
assert.equal(new Set(cards.map(c=>c.id)).size,cards.length);
assert.equal(new Set(cards.map(c=>normalized(c.question))).size,cards.length);
for(const [id,n] of Object.entries(expected)){
 const category=categories.find(c=>c.id===id);assert(category.aircraft.model&&category.aircraft.edition&&category.aircraft.scope);
 const deck=cards.filter(c=>c.category===id);assert.equal(deck.length,n);
 for(const c of deck){assert(c.question.length>20&&c.answer.length>35);assert(!/PLACEHOLDER|TODO/.test(c.question+c.answer));assert.equal(new URL(c.sourceUrl).protocol,'https:');assert(/\.pdf#page=\d+$/.test(c.sourceUrl));assert.equal(c.sourceMetadata.reviewedAt,'2026-11-03');assert(c.sourceMetadata.edition);}
}
const stable=JSON.stringify({cards,categories});run('aircraft-cards.js');assert.equal(JSON.stringify({cards,categories}),stable,'Overlay must be idempotent');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('id="aircraftCategoryGrid"'));assert(html.indexOf('src="aircraft-cards.js"')>html.indexOf('src="source-enhancements.js"'));assert(html.indexOf('src="aircraft-cards.js"')<html.indexOf('src="script.js"'));
console.log('PASS: 405 handbook cards across four new decks, five model-specific categories, preserved base cards, unique questions/IDs, page citations and repeat-load safety.');
