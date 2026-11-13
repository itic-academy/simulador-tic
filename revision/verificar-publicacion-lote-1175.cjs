const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `0fe910f`';
const sha=cp.execFileSync('git',['rev-parse','46f40c9'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `46f40c9` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43413276929](https://github.com/itic-academy/simulador-tic/actions/runs/43413276929). El README, `cambios-lote-1175.json` e `inventario.json` respondieron HTTP 200; el contenido publicado confirma IDs 6196–6200, 6.195 examinadas, 6.085 verificadas y 5.928 aún sin revisar.';
if(s.includes(entry)){console.log('La evidencia del despliegue ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1175 registrada.');
