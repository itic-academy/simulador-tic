const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let readme=fs.readFileSync(file,'utf8');
const start=readme.indexOf('## Lote 1251 —');assert.ok(start>=0,'No se encuentra el lote 1251');
const end=readme.indexOf('## Lote 1250 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
let section=readme.slice(start,end);
const proof='Publicación verificada: commit de datos `dee2e66` (`dee2e667273f7d14746b07c70dd25225f9374e67`); [workflow Deploy GitHub Pages 43534404181](https://github.com/itic-academy/simulador-tic/actions/runs/43534404181) finalizado con estado **Success** e incluye ese commit. GitHub Pages respondió HTTP 200 sin caché para `revision/README.md`, `revision/cambios-lote-1251.json`, `revision/inventario.json` y `preguntas_preparatic.json`. El banco y registro públicos contienen 6576–6580 con estados corregida, corregida, corregida, corregida e histórica, y claves 2, 2, 1, 1 y 0. El inventario público confirma 6.575 examinadas; 6.460 verificadas (1.277 vigentes, 4.712 corregidas y 471 históricas); 115 pendientes (45 de fuente y 70 de ambigüedad); 5.548 sin revisar individualmente; errores estructurales: 0.';
if(section.includes('Pendiente verificar la publicación del lote.')) section=section.replace('Pendiente verificar la publicación del lote.',proof);
else assert.ok(section.includes('43534404181'),'El lote no consta como verificado');
readme=readme.slice(0,start)+section+readme.slice(end);fs.writeFileSync(file,readme);console.log('README: publicación del lote 1251 documentada.');
