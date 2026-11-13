const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `d9d3968`';
const sha=cp.execFileSync('git',['rev-parse','72218fd'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `72218fd` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43426326212](https://github.com/itic-academy/simulador-tic/actions/runs/43426326212). Tras el despliegue, README, `cambios-lote-1184.json` e `inventario.json` respondieron HTTP 200. El registro publicado contiene los IDs 6241–6245; el inventario confirma 12.123 preguntas, 6.240 examinadas, 6.130 verificadas, 110 pendientes y 5.883 aún sin revisar individualmente.';
if(s.includes(entry)){console.log('La evidencia de publicación ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1184 registrada.');
