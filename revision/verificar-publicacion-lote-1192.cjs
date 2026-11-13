const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `9623cd0`';
const sha=cp.execFileSync('git',['rev-parse','14cbfdd'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `14cbfdd` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43437957754](https://github.com/itic-academy/simulador-tic/actions/runs/43437957754). README, `cambios-lote-1192.json` e `inventario.json` respondieron HTTP 200; el registro contiene los IDs 6281–6285 y el inventario confirma 6.280 examinadas, 6.170 verificadas, 110 pendientes y 5.843 sin revisar.';
if(s.includes(entry)){console.log('La evidencia ya está registrada.');process.exit(0);}
assert.ok(s.includes(marker),'No se encontró la evidencia anterior del lote 1191');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1192 registrada.');
