const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `72218fd`';
const sha=cp.execFileSync('git',['rev-parse','d9c9631'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `d9c9631` (`'+sha+'`) se refleja en GitHub Pages: README, `cambios-lote-1185.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6246–6250 y el inventario confirma 12.123 preguntas, 6.245 examinadas, 6.135 verificadas, 110 pendientes y 5.878 sin revisar. La consulta de estado del workflow `43427422372` quedó limitada por el rate limit anónimo de GitHub; se confirma la publicación mediante los tres artefactos servidos.';
if(s.includes(entry)){console.log('La evidencia de publicación ya está registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia de publicación anterior');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Evidencia de publicación del lote 1185 registrada.');
