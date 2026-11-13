const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `bbdad12`';
const sha=cp.execFileSync('git',['rev-parse','d9d3968'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `d9d3968` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43424210276](https://github.com/itic-academy/simulador-tic/actions/runs/43424210276). El README, `cambios-lote-1183.json` e `inventario.json` respondieron HTTP 200. Los artefactos publicados confirman IDs 6236–6240, 6.235 examinadas, 6.125 verificadas y 5.888 aún sin revisar.';
if(s.includes(entry)){console.log('La evidencia de publicación ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1183 registrada.');
