const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `f021444`';
const sha=cp.execFileSync('git',['rev-parse','0fe910f'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `0fe910f` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43412044716](https://github.com/itic-academy/simulador-tic/actions/runs/43412044716). El README, `cambios-lote-1174.json` e `inventario.json` respondieron HTTP 200; el contenido publicado confirma IDs 6191–6195, 6.190 examinadas, 6.080 verificadas y 5.933 aún sin revisar.';
if(s.includes(entry)){console.log('La evidencia del despliegue ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1174 registrada.');
