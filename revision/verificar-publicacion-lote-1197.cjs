const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `4b753c0`';
const sha=cp.execFileSync('git',['rev-parse','caf2b2c'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `caf2b2c` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43446496716](https://github.com/itic-academy/simulador-tic/actions/runs/43446496716). README, `cambios-lote-1197.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6306–6310 y el inventario confirma 6.305 examinadas, 6.195 verificadas (1.222 vigentes, 4.523 corregidas y 450 históricas), 110 pendientes y 5.818 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1197 registrada.');
