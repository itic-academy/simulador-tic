const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const start=text.indexOf('## Lote 1237 —');assert.ok(start>=0,'No se encuentra el lote 1237');
const end=text.indexOf('## Lote 1236 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
const before=text.slice(0,start),section=text.slice(start,end),after=text.slice(end);
assert.ok(section.includes('Pendiente verificar la publicación del lote.'),'El lote no está pendiente de verificación');
const proof='Publicación verificada: commit de datos 65da891 (65da8916049df7e9b8293109b4a50f55c66542b4); [workflow Deploy GitHub Pages 43515053060](https://github.com/itic-academy/simulador-tic/actions/runs/43515053060) completado con estado Success e incluye ese commit. README, cambios-lote-1237.json e inventario.json respondieron HTTP 200 sin caché. El registro público contiene los IDs 6506–6510 con estados corregida, corregida, corregida, histórica e histórica. El inventario público confirma 6505 examinadas, 6391 verificadas (1262 vigentes, 4668 corregidas y 461 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5618 sin revisar individualmente.';
text=before+section.replace('Pendiente verificar la publicación del lote.',proof)+after;
fs.writeFileSync(file,text);console.log('README: publicación del lote 1237 verificada y documentada.');
