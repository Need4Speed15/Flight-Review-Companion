import {copyFileSync,cpSync,existsSync,mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';

const root=process.cwd(),out=path.join(root,'dist','pages');
const files=['cards.js','source-enhancements.js','aircraft-cards.js','study-store.js','script.js','styles.css','favicon.svg'];
mkdirSync(out,{recursive:true});
let html=readFileSync(path.join(root,'index.html'),'utf8');
html=html.replace('<script src="cards.js">','<script>window.FLIGHT_REVIEW_HOSTING={mode:"static"};</script>\n  <script src="cards.js">');
if(!html.includes('window.FLIGHT_REVIEW_HOSTING'))throw Error('Could not insert static hosting configuration.');
html=html.replace('Study locally or enable optional account sync. Backups remain available.','Study progress saves in this browser. Use a study backup to transfer it to another device.');
html=html.replace(/<p>Study data saves in this browser\. Optional account sync[\s\S]*?<\/p>/,'<p>Your session, recall history, bookmarks, flags, and saved mixes stay in this browser. No account is needed to study. Clearing browser data can erase progress; export a backup for safekeeping or to move it to another device. This GitHub Pages edition has no account sync. Source links lead to external websites.</p>');
html=html.replace(/<p>Use “Suggest a correction”[\s\S]*?<\/p>/,'<p>“Suggest correction on GitHub” opens a new public issue with the card and source already filled in. A GitHub account is required to submit an issue. Include no private medical or flight information. Private review flags stay in your browser and notify nobody.</p>');
html=html.replace('Progress saves in this browser. Optional account sync is available through Sync & backup.','Progress saves in this browser. Export a backup for safekeeping or to transfer it to another device.');
// A stable content hash prevents a new HTML release from reusing stale library/UI assets.
for(const file of files){
 const version=createHash('sha256').update(readFileSync(path.join(root,file))).digest('hex').slice(0,12);
 html=html.replaceAll('"'+file+'"','"'+file+'?v='+version+'"');
}
writeFileSync(path.join(out,'index.html'),html);
for(const file of files){
 if(!existsSync(path.join(root,file)))throw Error('Missing public asset: '+file);
 copyFileSync(path.join(root,file),path.join(out,file));
}
cpSync(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});
writeFileSync(path.join(out,'.nojekyll'),'');
console.log('GitHub Pages study edition built at dist/pages.');
