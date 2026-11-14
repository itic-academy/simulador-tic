const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let readme=fs.readFileSync(file,'utf8');
const start=readme.indexOf('## Lote 1253 —');assert.ok(start>=0,'No se encuentra el lote 1253');
const end=readme.indexOf('## Lote 1252 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
let section=readme.slice(start,end);
const proof='Publicación verificada: commit de datos `43d419c` (`43d419c8df71dc31326ed13886ae22b42bbc163a`); [workflow Deploy GitHub Pages 43625573393](https://github.com/itic-academy/simulador-tic/actions/runs/43625573393) finalizado con estado **Success** e incluye ese commit. GitHub Pages respondió HTTP 200 sin caché para `revision/README.md`, `revision/cambios-lote-1253.json`, `revision/inventario.json` y `preguntas_preparatic.json`. El banco y registro públicos contienen 6586–6590, todos corregidos, con claves 1, 3, 2, 3 y 2. El inventario público confirma 6.585 examinadas; 6.470 verificadas (1.277 vigentes, 4.722 corregidas y 471 históricas); 115 pendientes (45 de fuente y 70 de ambigüedad); 5.538 sin revisar individualmente; errores estructurales: 0.';
if(section.includes('Pendiente verificar la publicación del lote.')) section=section.replace('Pendiente verificar la publicación del lote.',proof);
else assert.ok(section.includes('43625573393'),'El lote no consta como verificado');
readme=readme.slice(0,start)+section+readme.slice(end);fs.writeFileSync(file,readme);console.log('README: publicación del lote 1253 documentada.');
