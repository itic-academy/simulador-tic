const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const start=text.indexOf('## Lote 1240 —');assert.ok(start>=0,'No se encuentra el lote 1240');
const end=text.indexOf('## Lote 1239 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
const before=text.slice(0,start),section=text.slice(start,end),after=text.slice(end);
assert.ok(section.includes('Pendiente verificar la publicación del lote.'),'El lote no está pendiente de verificación');
const proof='Publicación verificada: commit de datos 3ccc1c1 (3ccc1c1addd055e550d26e3d670de93a634bf1ff); [workflow Deploy GitHub Pages 43519322392](https://github.com/itic-academy/simulador-tic/actions/runs/43519322392) completado con estado Success e incluye ese commit. README, cambios-lote-1240.json e inventario.json respondieron HTTP 200 sin caché. El registro público contiene los IDs 6521–6525, todos con estado corregida. El inventario público confirma 6520 examinadas, 6406 verificadas (1264 vigentes, 4681 corregidas y 461 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5603 sin revisar individualmente.';
text=before+section.replace('Pendiente verificar la publicación del lote.',proof)+after;
fs.writeFileSync(file,text);console.log('README: publicación del lote 1240 verificada y documentada.');
