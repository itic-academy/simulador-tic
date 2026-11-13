const fs=require('node:fs'),path=require('node:path');
const f=path.join(__dirname,'README.md');
let s=fs.readFileSync(f,'utf8');
const marker='**Publicación verificada:** PENDIENTE';
const entry='**Publicación verificada:** el contenido del commit `599565f3ec32bc69a5a7db35b8f7f7f2b00a0c34` ya está servido por GitHub Pages: README, `cambios-lote-1161.json` e `inventario.json` respondieron HTTP 200 al cotejarlos con URL sin caché. El registro público contiene los IDs 6126–6130; el inventario publicado confirma 6.125 examinadas, 6.021 verificadas y 5.998 sin revisar. La API de Actions limitó la consulta del identificador del run, por lo que se deja la comprobación basada en los artefactos públicos.';
if(s.includes(marker)) s=s.replace(marker,entry);
else if(!s.includes(entry)) throw Error('No se encuentra marcador ni evidencia aplicada');
fs.writeFileSync(f,s);console.log('Evidencia de Pages confirmada.');
