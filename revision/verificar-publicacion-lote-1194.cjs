const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `06e10dc`';
const sha=cp.execFileSync('git',['rev-parse','6dc857d'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `6dc857d` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43441752939](https://github.com/itic-academy/simulador-tic/actions/runs/43441752939). README, `cambios-lote-1194.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6291–6295 y el inventario confirma 6.290 examinadas, 6.180 verificadas (1.219 vigentes, 4.511 corregidas y 450 históricas), 110 pendientes y 5.833 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró la evidencia anterior del lote 1193');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1194 registrada.');
