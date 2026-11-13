const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const f=path.join(__dirname,'README.md');let s=fs.readFileSync(f,'utf8');
const marker='**Publicación verificada:** el commit de datos `ef038ae`';
const sha=cp.execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
const entry=`**Publicación verificada:** el commit de datos \`9e688fc\` (documentado en \`${sha}\`) está servido por GitHub Pages: README, \`cambios-lote-1165.json\` e \`inventario.json\` respondieron HTTP 200. El registro contiene los IDs 6146–6150 y el inventario confirma 6.145 examinadas, 6.036 verificadas, 109 pendientes y 5.978 sin revisar. El workflow público de Deploy GitHub Pages para ese commit consta como completado correctamente.`;
if(s.includes(entry)){console.log('La evidencia ya estaba registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró la evidencia previa para insertar la nueva');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(f,s);console.log('Evidencia de Pages del lote 1165 registrada.');
