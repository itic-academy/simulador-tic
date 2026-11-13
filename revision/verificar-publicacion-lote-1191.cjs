const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `6af8d36`';
const sha=cp.execFileSync('git',['rev-parse','9623cd0'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `9623cd0` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43436775600](https://github.com/itic-academy/simulador-tic/actions/runs/43436775600). README, `cambios-lote-1191.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6276–6280 y el inventario confirma 6.275 examinadas, 6.165 verificadas, 110 pendientes y 5.848 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró la evidencia anterior del lote 1190');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1191 registrada.');
