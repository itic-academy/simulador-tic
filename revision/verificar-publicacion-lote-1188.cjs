const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `eafcdde`';
const sha=cp.execFileSync('git',['rev-parse','356294f'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `356294f` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43431935535](https://github.com/itic-academy/simulador-tic/actions/runs/43431935535). Tras el despliegue, README, `cambios-lote-1188.json` e `inventario.json` respondieron HTTP 200; el registro contiene los IDs 6261–6265 y el inventario confirma 6.260 examinadas, 6.150 verificadas, 110 pendientes y 5.863 sin revisar.';
if(s.includes(entry)){console.log('Evidencia de publicación ya registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró evidencia anterior del lote 1187');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1188 registrada.');
