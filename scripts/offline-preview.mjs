import fs from 'node:fs/promises';
import { build } from 'esbuild';
import { pages } from '../src/data.js';
await fs.mkdir('offline-preview',{recursive:true});
await fs.cp('dist','offline-preview',{recursive:true});
await build({entryPoints:['src/main.jsx'],bundle:true,format:'iife',minify:true,outfile:'offline-preview/assets/preview.js',loader:{'.woff2':'file'},define:{'process.env.NODE_ENV':'"production"'},jsx:'automatic'});
for(const page of pages){const file='offline-preview/'+page.file;let html=await fs.readFile(file,'utf8');html=html.replace(/<script type="module"[^>]+src="[^"]+"[^>]*><\/script>/,'<script defer src="./assets/preview.js"></script>').replace(/<link rel="stylesheet"[^>]+href="[^"]+"[^>]*>/,'<link rel="stylesheet" href="./assets/preview.css">');await fs.writeFile(file,html);}
console.log('Built a browser-ready offline React preview.');
