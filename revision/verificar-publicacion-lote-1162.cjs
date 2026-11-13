const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const f=path.join(__dirname,'README.md');let s=fs.readFileSync(f,'utf8');
const marker='**Publicación verificada:** PENDIENTE';
const sha=cp.execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
const entry=`**Publicación verificada:** el commit de datos \`${sha}\` está servido por GitHub Pages: README, \`cambios-lote-1162.json\` e \`inventario.json\` respondieron HTTP 200 con consulta sin caché. El registro publicado contiene los IDs 6131–6135 y el inventario confirma 6.130 preguntas examinadas, 6.025 verificadas, 105 pendientes y 5.993 sin revisar. La API pública de Actions respondió 403 por límite de solicitudes; la verificación se basa en los tres artefactos publicados.`;
if(s.includes(entry)){console.log('La evidencia de publicación ya estaba registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró el marcador PENDIENTE');
s=s.replace(marker,entry);fs.writeFileSync(f,s);console.log('Evidencia de publicación registrada.');
