// Rebuild the expansion from reviewed content files without changing legacy IDs.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = f => JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8'));
const marker = '\n// BEGIN REVIEWED EXPANSION 2026-10-29';
const file = path.join(root, 'cards.js');
const base = fs.readFileSync(file, 'utf8').split(marker)[0].trimEnd();
const ctx = {window: {}};
vm.runInNewContext(base, ctx);
const legacy = ctx.window.FLIGHT_REVIEW_CARDS;
const additions = fs.readdirSync(__dirname).filter(f => /^expansion-.*\.json$/.test(f)).sort().flatMap(read);
const revisions = fs.readdirSync(__dirname).filter(f => /^revisions-.*\.json$/.test(f)).sort().flatMap(read);
const categories = [...ctx.window.FLIGHT_REVIEW_CATEGORIES, ...read('new-categories.json')];
assert.equal(new Set(categories.map(c => c.id)).size, categories.length, 'Category IDs');
const cards = [...legacy.map(c => ({...c})), ...additions];
for (const change of revisions) {
 const card = cards.find(c => c.id === change.id);
 assert(card, `Unknown revision ID ${change.id}`);
 Object.assign(card, change);
}
const normalize = text => text.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g, '');
const ids = new Set(), questions = new Map();
for (const card of cards) {
 assert(!ids.has(card.id), `Duplicate ID ${card.id}`); ids.add(card.id);
 assert(categories.some(c => c.id === card.category), `Category ${card.id}`);
 for (const key of ['question','answer','source','sourceUrl']) assert(typeof card[key] === 'string' && card[key].trim(), `${card.id}: ${key}`);
 assert.equal(new URL(card.sourceUrl).protocol, 'https:', `Source URL ${card.id}`);
 assert(!/\b(TODO|TBD|placeholder)\b/.test(card.question + card.answer), `Unfinished ${card.id}`);
 const key = normalize(card.question);
 assert(!questions.has(key), `Duplicate question ${card.id}/${questions.get(key)}`);
 questions.set(key, card.id);
}
const counts = Object.fromEntries(categories.map(c => [c.id, cards.filter(x => x.category === c.id).length]));
const targets = read('targets.json');
const missing = Object.fromEntries(Object.entries(targets).filter(([k,n]) => counts[k] !== n).map(([k,n]) => [k,{actual:counts[k],target:n}]));
const stop = new Set('what does must that with when should pilot aircraft flight which have from before after about during their there they would could under'.split(' '));
const words = s => new Set(s.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w => w.length > 3 && !stop.has(w)));
const sets = cards.map(c => words(c.question)), similar = [];
for(let i=0;i<cards.length;i++) for(let j=i+1;j<cards.length;j++) {
 const a=sets[i], b=sets[j]; if(a.size < 3 || b.size < 3) continue;
 const n=[...a].filter(w=>b.has(w)).length, score=n/new Set([...a,...b]).size;
 if(score>=.53) similar.push({score:Number(score.toFixed(2)),ids:[cards[i].id,cards[j].id],questions:[cards[i].question,cards[j].question]});
}
fs.writeFileSync(path.join(__dirname,'similarity-review.json'),JSON.stringify(similar.sort((a,b)=>b.score-a.score),null,2)+'\n');
const summary = {date:'2026-10-29',total:cards.length,categories:categories.length,added:additions.length,revised:revisions.length,counts,missing,similarityCandidates:similar.length};
console.log(JSON.stringify(summary,null,2));
if(process.argv.includes('--audit-draft')) process.exit(0);
assert.equal(Object.keys(missing).length,0,'Unmet category targets');
assert.equal(cards.length,2235); assert.equal(additions.length,1320);
const sourceGroups = [
 ['14 CFR Part 135','https://www.ecfr.gov/current/title-14/chapter-I/subchapter-G/part-135'],
 ['FAA Aviation Weather Handbook 28B','https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf'],
 ['FAA Dangerous Goods: Air Carriers','https://www.faa.gov/hazmat/air_carriers'],
 ['49 CFR Hazardous Materials Regulations','https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C'],
 ['ICAO North Atlantic Documents','https://www.icao.int/EURNAT/Pages/EUR-and-NAT-Document.aspx'],
 ['NASA ASRS Ramp Safety Concerns','https://asrs.arc.nasa.gov/publications/callback/cb_538.html']
].filter(([,url])=>!ctx.window.FLIGHT_REVIEW_SOURCES.some(s=>s.url===url)).map(([title,url])=>({title,url,note:'Expansion reference. Each card cites its specific rule, chapter, or operating topic; aircraft and operator authorizations control.'}));
const js = `${base}${marker}\nwindow.FLIGHT_REVIEW_CATEGORIES.push(...${JSON.stringify(read('new-categories.json'),null,2)});\nwindow.FLIGHT_REVIEW_SOURCES.push(...${JSON.stringify(sourceGroups,null,2)});\n`+
 `for (const change of ${JSON.stringify(revisions,null,2)}) Object.assign(window.FLIGHT_REVIEW_CARDS.find(c => c.id === change.id), change);\n`+
 `window.FLIGHT_REVIEW_CARDS.push(...${JSON.stringify(additions,null,2)});\n`;
fs.writeFileSync(file,js);
fs.copyFileSync(file,path.join(root,'dist/cards.js'));
fs.writeFileSync(path.join(__dirname,'qa-summary.json'),JSON.stringify(summary,null,2)+'\n');
