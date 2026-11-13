const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const start=text.indexOf('## Lote 1242 —');assert.ok(start>=0,'No se encuentra el lote 1242');
const end=text.indexOf('## Lote 1241 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
const before=text.slice(0,start);let section=text.slice(start,end);const after=text.slice(end);
const proof='Publicación verificada: commit de datos `ff5ed91` (`ff5ed91019860a1d4ea5cfed102281ab98dd2382`); [workflow Deploy GitHub Pages 43521639810](https://github.com/itic-academy/simulador-tic/actions/runs/43521639810) completado con estado **Success** e incluye ese commit. README, `cambios-lote-1242.json` e `inventario.json` respondieron HTTP 200 sin caché. El registro publicado recoge los IDs 6531–6535 con estados vigente, vigente, vigente, corregida y corregida. Inventario público: 6.530 examinadas, 6.416 verificadas (1.267 vigentes, 4.686 corregidas y 463 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.593 sin revisar.';
if(section.includes('Pendiente verificar la publicación del lote.'))section=section.replace('Pendiente verificar la publicación del lote.',proof);
else assert.ok(section.includes('43521639810'),'El lote no está pendiente ni consta como verificado');
text=before+section+after;fs.writeFileSync(file,text);console.log('README: publicación del lote 1242 verificada y documentada.');
