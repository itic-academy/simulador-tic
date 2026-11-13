const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const start=text.indexOf('## Lote 1238 —');assert.ok(start>=0,'No se encuentra el lote 1238');
const end=text.indexOf('## Lote 1237 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
const before=text.slice(0,start),section=text.slice(start,end),after=text.slice(end);
assert.ok(section.includes('Pendiente verificar la publicación del lote.'),'El lote no está pendiente de verificación');
const proof='Publicación verificada: commit de datos ab7f4df (ab7f4df7e6a91282642dab4ca57c5dde7419ec37); [workflow Deploy GitHub Pages 43516374354](https://github.com/itic-academy/simulador-tic/actions/runs/43516374354) completado con estado Success e incluye ese commit. README, cambios-lote-1238.json e inventario.json respondieron HTTP 200 sin caché. El registro público contiene los IDs 6511–6515 con estados corregida, corregida, corregida, vigente y corregida. El inventario público confirma 6510 examinadas, 6396 verificadas (1263 vigentes, 4672 corregidas y 461 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5613 sin revisar individualmente.';
text=before+section.replace('Pendiente verificar la publicación del lote.',proof)+after;
fs.writeFileSync(file,text);console.log('README: publicación del lote 1238 verificada y documentada.');
