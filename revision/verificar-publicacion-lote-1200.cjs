const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `697443f`';
const sha=cp.execFileSync('git',['rev-parse','d5fd75e'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `d5fd75e` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43451983536](https://github.com/itic-academy/simulador-tic/actions/runs/43451983536). README, `cambios-lote-1200.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6321–6325 y el inventario confirma 6.320 examinadas, 6.210 verificadas (1.227 vigentes, 4.531 corregidas y 452 históricas), 110 pendientes y 5.803 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1200 registrada.');
