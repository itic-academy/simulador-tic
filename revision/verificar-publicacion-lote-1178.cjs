const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `a163705`';
const sha=cp.execFileSync('git',['rev-parse','a1d04d8'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `a1d04d8` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43417446868](https://github.com/itic-academy/simulador-tic/actions/runs/43417446868). El README, `cambios-lote-1178.json` e `inventario.json` respondieron HTTP 200; el contenido servido confirma IDs 6211–6215, 6.210 examinadas, 6.100 verificadas y 5.913 aún sin revisar.';
if(s.includes(entry)){console.log('La evidencia del despliegue ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1178 registrada.');
