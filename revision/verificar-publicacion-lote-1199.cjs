const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `c8dce46`';
const sha=cp.execFileSync('git',['rev-parse','697443f'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `697443f` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43450520514](https://github.com/itic-academy/simulador-tic/actions/runs/43450520514). README, `cambios-lote-1199.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6316–6320 y el inventario confirma 6.315 examinadas, 6.205 verificadas (1.225 vigentes, 4.528 corregidas y 452 históricas), 110 pendientes y 5.808 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró evidencia previa');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1199 registrada.');
