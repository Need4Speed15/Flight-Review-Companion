const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),out=path.join(root,'dist','pages');
const html=fs.readFileSync(path.join(out,'index.html'),'utf8');
assert(html.includes('window.FLIGHT_REVIEW_HOSTING={mode:"static"}'));
assert(html.indexOf('window.FLIGHT_REVIEW_HOSTING')<html.indexOf('src="script.js"'));
assert(html.includes('This GitHub Pages edition has no account sync.'));
assert(!fs.existsSync(path.join(out,'.openai')));
assert(!fs.existsSync(path.join(out,'server')));
for(const [,asset] of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
 if(/^(https?:|mailto:|\/signin)/.test(asset))continue;
 assert(!asset.startsWith('/'),'Public assets must work under the repository subpath.');
 assert(fs.existsSync(path.join(out,asset.split('?')[0])),'Missing public asset '+asset);
}
const source=fs.readFileSync(path.join(root,'script.js'),'utf8');
function extract(name){const start=source.search(new RegExp('  (?:async )?function '+name+'\\('));assert(start>=0);const tail=source.slice(start+2),end=tail.search(/\n  (?:async )?function /);return end<0?tail:tail.slice(0,end);}
const nodes=new Map(),context={URL,staticHosting:true,identity:{user:{id:'old-account'}},activated:null,$:id=>{if(!nodes.has(id))nodes.set(id,{});return nodes.get(id);},activateProfile:id=>context.activated=id,api:()=>{throw Error('Static study must not call cloud APIs.');}};
vm.createContext(context);vm.runInContext(extract('loadIdentity')+'\n'+extract('correctionUrl'),context);
(async()=>{
 await vm.runInContext('loadIdentity()',context);
 assert.equal(context.activated,null);assert.equal(context.identity,null);
 assert.equal(nodes.get('syncButton').hidden,true);assert.equal(nodes.get('inboxButton').hidden,true);
 const link=new URL(vm.runInContext('correctionUrl({id:"PRACTICE-006",question:"A&B?",sourceUrl:"https://www.faa.gov/"})',context));
 assert.equal(link.origin,'https://github.com');assert.equal(link.searchParams.get('title'),'Card correction: PRACTICE-006');assert(link.searchParams.get('body').includes('A&B?'));
 const content={window:{}};vm.createContext(content);
 for(const file of ['cards.js','source-enhancements.js'])vm.runInContext(fs.readFileSync(path.join(out,file),'utf8'),content);
 assert.equal(content.window.FLIGHT_REVIEW_CARDS.length,2245);
 assert.equal(content.window.FLIGHT_REVIEW_CATEGORIES.length,25);
 console.log('PASS: static mode avoids cloud APIs, local profile activation, public correction links, subpath-safe assets, and 2,245 cards across 25 categories.');
})().catch(error=>{console.error(error);process.exit(1);});
