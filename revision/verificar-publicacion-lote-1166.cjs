const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `9e688fc`';
const sha=cp.execFileSync('git',['rev-parse','db478f1'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `db478f1` (documentado en `'+sha+'`) desplegó correctamente [GitHub Pages, workflow run 43402199068](https://github.com/itic-academy/simulador-tic/actions/runs/43402199068). README, `cambios-lote-1166.json` e `inventario.json` respondieron HTTP 200 y su contenido confirma los IDs 6151–6155, 6.150 examinadas, 6.040 verificadas, 110 pendientes y 5.973 sin revisar.';
if(s.includes(entry)){console.log('La evidencia del despliegue ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la última evidencia para insertar');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1166 registrada.');
