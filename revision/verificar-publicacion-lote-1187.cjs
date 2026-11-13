const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const marker='**Publicación verificada:** el commit de datos `0a562bb`';
const sha=cp.execFileSync('git',['rev-parse','eafcdde'],{encoding:'utf8'}).trim();
const entry='**Publicación verificada:** el commit de datos `eafcdde` (`'+sha+'`) ya se sirve desde GitHub Pages: README, `cambios-lote-1187.json` e `inventario.json` respondieron HTTP 200; el registro publicado contiene los IDs 6256–6260 y el inventario confirma 6.255 examinadas, 6.145 verificadas, 110 pendientes y 5.868 sin revisar. En la consulta del workflow `43430511216` todavía constaba `in_progress`, por lo que esta verificación se basa en el contenido servido directamente, sin atribuirle un resultado final al workflow.';
if(s.includes(entry)){console.log('Evidencia ya registrada.');process.exit(0);}
if(!s.includes(marker))throw Error('No se encontró el bloque del lote 1186');
s=s.replace(marker,entry+'\n\n'+marker);fs.writeFileSync(file,s);console.log('Verificación directa de Pages registrada.');
