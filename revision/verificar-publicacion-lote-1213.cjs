const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `d569853`';
const sha=cp.execFileSync('git',['rev-parse','ef30387'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `ef30387` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43475040249](https://github.com/itic-academy/simulador-tic/actions/runs/43475040249). GitHub Pages devolvió HTTP 200 sin caché para README, `cambios-lote-1213.json` e `inventario.json`; el registro contiene los cinco IDs 6386–6390 con estados corregida, vigente, corregida, corregida y corregida. El inventario publicado confirma 6.385 examinadas, 6.271 verificadas (1.242 vigentes, 4.571 corregidas y 458 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.738 sin revisar individualmente.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa para insertar el nuevo registro');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1213 registrada.');
