const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `c03da2b`';
const sha=cp.execFileSync('git',['rev-parse','6724b97'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `6724b97` (`'+sha+'`) completó correctamente [Deploy GitHub Pages, workflow run 43421215192](https://github.com/itic-academy/simulador-tic/actions/runs/43421215192). El README, `cambios-lote-1181.json` e `inventario.json` respondieron HTTP 200; el contenido servido confirma IDs 6226–6230, 6.225 examinadas, 6.115 verificadas y 5.898 aún sin revisar.';
if(s.includes(entry)){console.log('La evidencia del despliegue ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1181 registrada.');
