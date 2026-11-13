const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const start=text.indexOf('## Lote 1244 —');assert.ok(start>=0,'No se encuentra el lote 1244');
const end=text.indexOf('## Lote 1243 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
const before=text.slice(0,start);let section=text.slice(start,end);const after=text.slice(end);
const proof='Publicación verificada: commit de datos `23d3a22` (`23d3a222fe28f4e3ed155baf8651cfeb659e5f8e`); [workflow Deploy GitHub Pages 43524301512](https://github.com/itic-academy/simulador-tic/actions/runs/43524301512) completado con estado **Success** e incluye ese commit. README, `cambios-lote-1244.json` e `inventario.json` respondieron HTTP 200 sin caché. El registro publicado contiene los IDs 6541–6545 con estados histórica, histórica, corregida, corregida y vigente. Inventario público: 6.540 examinadas, 6.426 verificadas (1.269 vigentes, 4.692 corregidas y 465 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.583 sin revisar.';
if(section.includes('Pendiente verificar la publicación del lote.'))section=section.replace('Pendiente verificar la publicación del lote.',proof);
else assert.ok(section.includes('43524301512'),'El lote no está pendiente ni consta como verificado');
text=before+section+after;fs.writeFileSync(file,text);console.log('README: publicación del lote 1244 verificada y documentada.');
