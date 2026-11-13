const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const f=path.join(__dirname,'README.md');let s=fs.readFileSync(f,'utf8');
const marker='**Publicación verificada:** el commit de datos `8e227f9`';
const sha=cp.execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
const entry=`**Publicación verificada:** el commit de datos \`ef038ae\` (documentado en \`${sha}\`) está servido por GitHub Pages; README, \`cambios-lote-1164.json\` e \`inventario.json\` respondieron HTTP 200. El registro contiene los IDs 6141–6145 y el inventario confirma 6.140 examinadas, 6.033 verificadas, 107 pendientes y 5.983 sin revisar. La interfaz de Actions muestra que Deploy GitHub Pages run 427 terminó correctamente.`;
if(s.includes(entry)){console.log('La evidencia ya estaba registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia previa para insertar la nueva');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(f,s);console.log('Evidencia de Pages del lote 1164 registrada.');
