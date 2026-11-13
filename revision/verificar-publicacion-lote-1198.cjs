const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `caf2b2c`';
const sha=cp.execFileSync('git',['rev-parse','c8dce46'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `c8dce46` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43448689274](https://github.com/itic-academy/simulador-tic/actions/runs/43448689274). README, `cambios-lote-1198.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6311–6315 y el inventario confirma 6.310 examinadas, 6.200 verificadas (1.222 vigentes, 4.526 corregidas y 452 históricas), 110 pendientes y 5.813 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1198 registrada.');
