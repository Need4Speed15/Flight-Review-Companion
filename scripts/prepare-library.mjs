import { copyFileSync, cpSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
mkdirSync(path.join(root, 'public'), {recursive: true});
for (const file of ['cards.js','source-enhancements.js','study-store.js','script.js','styles.css','favicon.svg']) {
  if (!existsSync(path.join(root,file))) throw new Error(`Missing library asset: ${file}`);
  copyFileSync(path.join(root,file), path.join(root,'public',file));
}
if (existsSync(path.join(root,'assets'))) cpSync(path.join(root,'assets'),path.join(root,'public','assets'),{recursive:true});
console.log('Prepared standalone study assets for the hosted app.');
