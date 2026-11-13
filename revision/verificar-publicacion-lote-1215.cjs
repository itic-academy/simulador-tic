const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='## Lote 1215 — 13 de noviembre de 2026';
const sha=cp.execFileSync('git',['rev-parse','3e87a24'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `3e87a24` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43478369895](https://github.com/itic-academy/simulador-tic/actions/runs/43478369895). GitHub Pages devolvió HTTP 200 sin caché para README, `cambios-lote-1215.json` e `inventario.json`; el registro publicado contiene los IDs 6396–6400, todos corregidos. El inventario confirma 6.395 examinadas, 6.280 verificadas (1.243 vigentes, 4.580 corregidas y 458 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.728 sin revisar individualmente.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró la sección del lote 1215');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1215 registrada.');
