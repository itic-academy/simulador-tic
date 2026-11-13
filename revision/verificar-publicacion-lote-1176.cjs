const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `46f40c9`';
const sha=cp.execFileSync('git',['rev-parse','c58adb8'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `c58adb8` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43414596767](https://github.com/itic-academy/simulador-tic/actions/runs/43414596767). El README, `cambios-lote-1176.json` e `inventario.json` respondieron HTTP 200; el contenido publicado confirma IDs 6201–6205, 6.200 examinadas, 6.090 verificadas y 5.923 aún sin revisar.';
if(s.includes(entry)){console.log('La evidencia del despliegue ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1176 registrada.');
