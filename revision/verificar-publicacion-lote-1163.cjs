const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const f=path.join(__dirname,'README.md');let s=fs.readFileSync(f,'utf8');
const marker='**Publicación verificada:** el commit de datos `d5a307b1dfacb2d247ce74697da47d5cbf9f90c1`';
const sha=cp.execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
const entry=`**Publicación verificada:** el commit de datos \`8e227f9\` (documentado en \`${sha}\`) ya está servido por GitHub Pages: README, \`cambios-lote-1163.json\` e \`inventario.json\` respondieron HTTP 200 con consultas sin caché. El registro contiene los IDs 6136–6140 y el inventario confirma 6.135 preguntas examinadas, 6.029 verificadas, 106 pendientes y 5.988 sin revisar.`;
if(s.includes(entry)){console.log('La evidencia de publicación ya estaba registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia anterior que debe conservarse como historial');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(f,s);console.log('Evidencia de publicación del lote 1163 registrada.');
