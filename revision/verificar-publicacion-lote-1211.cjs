const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `245e7c9`';
const sha=cp.execFileSync('git',['rev-parse','c342f82'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `c342f82` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43473099222](https://github.com/itic-academy/simulador-tic/actions/runs/43473099222). GitHub Pages devolvió HTTP 200 sin caché para README, `cambios-lote-1211.json` e `inventario.json`; el registro servido contiene los IDs 6376–6380 y estados corregida, corregida, corregida, corregida y vigente. El inventario publicado confirma 6.375 examinadas, 6.261 verificadas (1.240 vigentes, 4.563 corregidas y 458 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.748 sin revisar individualmente.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa para insertar el nuevo registro');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1211 registrada.');
