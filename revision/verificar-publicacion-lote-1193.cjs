const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `14cbfdd`';
const sha=cp.execFileSync('git',['rev-parse','06e10dc'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `06e10dc` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43439481050](https://github.com/itic-academy/simulador-tic/actions/runs/43439481050). README, `cambios-lote-1193.json` e `inventario.json` respondieron HTTP 200; el registro contiene los IDs 6286–6290 y el inventario confirma 6.285 examinadas, 6.175 verificadas, 110 pendientes y 5.838 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró la evidencia anterior del lote 1192');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1193 registrada.');
