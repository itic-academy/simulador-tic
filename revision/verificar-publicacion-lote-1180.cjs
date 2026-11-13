const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `7b0ba27`';
const sha=cp.execFileSync('git',['rev-parse','c03da2b'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `c03da2b` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43419989550](https://github.com/itic-academy/simulador-tic/actions/runs/43419989550). El README, `cambios-lote-1180.json` e `inventario.json` respondieron HTTP 200; el contenido servido confirma IDs 6221–6225, 6.220 examinadas, 6.110 verificadas y 5.903 aún sin revisar.';
if(s.includes(entry)){console.log('La evidencia del despliegue ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1180 registrada.');
