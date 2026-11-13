const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `356294f`';
const sha=cp.execFileSync('git',['rev-parse','47f3a5b'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `47f3a5b` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43433763023](https://github.com/itic-academy/simulador-tic/actions/runs/43433763023). Tras el despliegue, README, `cambios-lote-1189.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6266–6270 y el inventario confirma 6.265 examinadas, 6.155 verificadas, 110 pendientes y 5.858 sin revisar.';
if(s.includes(entry)){console.log('Evidencia de publicación ya registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró evidencia anterior del lote 1188');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1189 registrada.');
