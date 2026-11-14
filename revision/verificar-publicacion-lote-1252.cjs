const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let readme=fs.readFileSync(file,'utf8');
const start=readme.indexOf('## Lote 1252 —');assert.ok(start>=0,'No se encuentra el lote 1252');
const end=readme.indexOf('## Lote 1251 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
let section=readme.slice(start,end);
const proof='Publicación verificada: commit de datos `1a294f3` (`1a294f3ca79a555c743559a6ec92b5dbec761ad9`); [workflow Deploy GitHub Pages 43624649605](https://github.com/itic-academy/simulador-tic/actions/runs/43624649605) finalizado con estado **Success** e incluye ese commit. GitHub Pages respondió HTTP 200 sin caché para `revision/README.md`, `revision/cambios-lote-1252.json`, `revision/inventario.json` y `preguntas_preparatic.json`. El banco y registro públicos contienen 6581–6585, todos corregidos, con claves 3, 0, 1, 0 y 0. El inventario público confirma 6.580 examinadas; 6.465 verificadas (1.277 vigentes, 4.717 corregidas y 471 históricas); 115 pendientes (45 de fuente y 70 de ambigüedad); 5.543 sin revisar individualmente; errores estructurales: 0.';
if(section.includes('Pendiente verificar la publicación del lote.')) section=section.replace('Pendiente verificar la publicación del lote.',proof);
else assert.ok(section.includes('43624649605'),'El lote no consta como verificado');
readme=readme.slice(0,start)+section+readme.slice(end);fs.writeFileSync(file,readme);console.log('README: publicación del lote 1252 documentada.');
