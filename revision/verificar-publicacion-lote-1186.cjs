const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `d9c9631`';
const sha=cp.execFileSync('git',['rev-parse','0a562bb'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `0a562bb` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43429409314](https://github.com/itic-academy/simulador-tic/actions/runs/43429409314). Tras el despliegue, README, `cambios-lote-1186.json` e `inventario.json` respondieron HTTP 200. El registro publicado contiene los IDs 6251–6255 y el inventario confirma 6.250 examinadas, 6.140 verificadas, 110 pendientes y 5.873 sin revisar.';
if(s.includes(entry)){console.log('La evidencia de publicación ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró el bloque de evidencia de 1185');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1186 registrada.');
