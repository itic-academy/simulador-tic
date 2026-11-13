const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='## Lote 1216 — 13 de noviembre de 2026';
const sha=cp.execFileSync('git',['rev-parse','49b8110'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `49b8110` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43480016952](https://github.com/itic-academy/simulador-tic/actions/runs/43480016952). GitHub Pages devolvió HTTP 200 sin caché para README, `cambios-lote-1216.json` e `inventario.json`; el registro publicado contiene los IDs 6401–6405 con estados corregida, vigente, corregida, corregida y corregida. El inventario confirma 6.400 examinadas, 6.284 verificadas (1.244 vigentes, 4.584 corregidas y 458 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.723 sin revisar individualmente.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró la sección del lote 1216');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1216 registrada.');
