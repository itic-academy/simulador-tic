const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `c342f82`';
const sha=cp.execFileSync('git',['rev-parse','d569853'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `d569853` (`'+sha+')` completó correctamente [Deploy GitHub Pages, workflow run 43473986840](https://github.com/itic-academy/simulador-tic/actions/runs/43473986840). GitHub Pages devolvió HTTP 200 sin caché para README, `cambios-lote-1212.json` e `inventario.json`; el registro contiene los cinco IDs 6381–6385 con estados corregida, vigente, corregida, corregida y corregida. El inventario publicado confirma 6.380 examinadas, 6.266 verificadas (1.241 vigentes, 4.567 corregidas y 458 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.743 sin revisar individualmente.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa para insertar el nuevo registro');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1212 registrada.');
