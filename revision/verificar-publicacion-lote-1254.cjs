const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let readme=fs.readFileSync(file,'utf8');
const start=readme.indexOf('## Lote 1254 —');assert.ok(start>=0,'No se encuentra el lote 1254');
const end=readme.indexOf('## Lote 1253 —',start);assert.ok(end>start,'No se encuentra el límite del lote anterior');
let section=readme.slice(start,end);
const proof='Publicación verificada: commit de datos `a4a8333` (`a4a8333b1d47941733dff19227f78982a1212bfb`); [workflow Deploy GitHub Pages 43626635183](https://github.com/itic-academy/simulador-tic/actions/runs/43626635183) finalizado con estado **Success** e incluye ese commit. GitHub Pages respondió HTTP 200 sin caché para `revision/README.md`, `revision/cambios-lote-1254.json`, `revision/inventario.json` y `preguntas_preparatic.json`. Se cotejaron banco y registro para 6591–6595: estados corregida, vigente, corregida, corregida e histórica; las claves publicadas son A, A, A, B y C y coinciden con los registros. El inventario público confirma 6.590 examinadas; 6.475 verificadas (1.278 vigentes, 4.725 corregidas y 472 históricas); 115 pendientes (45 de fuente y 70 de ambigüedad); 5.533 sin revisar individualmente; errores estructurales: 0.';
if(section.includes('Publicación pendiente de verificación.')) section=section.replace('Publicación pendiente de verificación.',proof);
else assert.ok(section.includes('43626635183'),'La publicación del lote 1254 no consta verificada');
readme=readme.slice(0,start)+section+readme.slice(end);fs.writeFileSync(file,readme);console.log('README: publicación del lote 1254 documentada.');
