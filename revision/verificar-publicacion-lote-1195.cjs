const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `6dc857d`';
const sha=cp.execFileSync('git',['rev-parse','e8d260a'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `e8d260a` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43443085704](https://github.com/itic-academy/simulador-tic/actions/runs/43443085704). README, `cambios-lote-1195.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6296–6300 y el inventario confirma 6.295 examinadas, 6.185 verificadas (1.222 vigentes, 4.513 corregidas y 450 históricas), 110 pendientes y 5.828 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró la evidencia anterior del lote 1194');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1195 registrada.');
