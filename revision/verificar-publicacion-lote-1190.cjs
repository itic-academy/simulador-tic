const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `47f3a5b`';
const sha=cp.execFileSync('git',['rev-parse','6af8d36'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `6af8d36` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43435016295](https://github.com/itic-academy/simulador-tic/actions/runs/43435016295). Tras el despliegue, README, `cambios-lote-1190.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6271–6275 y el inventario confirma 6.270 examinadas, 6.160 verificadas, 110 pendientes y 5.853 sin revisar.';
if(s.includes(entry)){console.log('Evidencia de publicación ya registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró evidencia anterior del lote 1189');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1190 registrada.');
