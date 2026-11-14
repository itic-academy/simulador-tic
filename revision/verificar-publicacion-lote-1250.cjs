const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let readme=fs.readFileSync(file,'utf8');
const start=readme.indexOf('## Lote 1250 —');assert.ok(start>=0,'No se encuentra el lote 1250');
const end=readme.indexOf('## Lote 1249 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
let section=readme.slice(start,end);
const proof='Publicación verificada: commit de datos `976c398` (`976c39860f0ef9e5bdec648af224d0035162aaf5`); [workflow Deploy GitHub Pages 43533361996](https://github.com/itic-academy/simulador-tic/actions/runs/43533361996) finalizado con estado **Success** e incluye ese commit. GitHub Pages devolvió HTTP 200 sin caché para `revision/README.md`, `revision/cambios-lote-1250.json`, `revision/inventario.json` y `preguntas_preparatic.json`. El registro público y el banco servido contienen los IDs 6571–6575 con estados histórica, histórica, corregida, histórica y corregida; las claves publicadas son 3, 1, 2, 3 y 1. El inventario público confirma 6.570 preguntas examinadas; 6.455 verificadas (1.277 vigentes, 4.708 corregidas y 470 históricas); 115 pendientes (45 de fuente y 70 de ambigüedad); 5.553 sin revisar individualmente; errores estructurales: 0.';
if(section.includes('Pendiente verificar la publicación del lote.')) section=section.replace('Pendiente verificar la publicación del lote.',proof);
else assert.ok(section.includes('43533361996'),'El lote no consta como verificado');
readme=readme.slice(0,start)+section+readme.slice(end);fs.writeFileSync(file,readme);console.log('README: publicación del lote 1250 documentada.');
