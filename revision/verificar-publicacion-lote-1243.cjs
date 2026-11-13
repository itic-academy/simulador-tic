const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const start=text.indexOf('## Lote 1243 —');assert.ok(start>=0,'No se encuentra el lote 1243');
const end=text.indexOf('## Lote 1242 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
const before=text.slice(0,start);let section=text.slice(start,end);const after=text.slice(end);
const proof='Publicación verificada: commit de datos `8740f2e` (`8740f2ea7e38bd923277b67637a0e9c347eb3364`); [workflow Deploy GitHub Pages 43523013137](https://github.com/itic-academy/simulador-tic/actions/runs/43523013137) completado con estado **Success** e incluye ese commit. README, `cambios-lote-1243.json` e `inventario.json` respondieron HTTP 200 sin caché. El registro público contiene IDs 6536–6540 con estados corregida, corregida, corregida, corregida y vigente. Inventario público: 6.535 examinadas, 6.421 verificadas (1.268 vigentes, 4.690 corregidas y 463 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.588 sin revisar.';
if(section.includes('Pendiente verificar la publicación del lote.'))section=section.replace('Pendiente verificar la publicación del lote.',proof);
else assert.ok(section.includes('43523013137'),'El lote no está pendiente ni consta como verificado');
text=before+section+after;fs.writeFileSync(file,text);console.log('README: publicación del lote 1243 verificada y documentada.');
