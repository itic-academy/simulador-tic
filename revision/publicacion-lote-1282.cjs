const fs=require('node:fs'),path=require('node:path');
const file=path.join(__dirname,'README.md');let text=fs.readFileSync(file,'utf8');
const summary='Último lote secuencial: 1282 (IDs 6731–6735). Acumulado: 6730 preguntas examinadas individualmente; 6612 verificadas (1288 vigentes, 4836 corregidas y 488 históricas); 118 pendientes documentadas (46 de fuente y 72 de ambigüedad); 5393 sin revisar individualmente.';
if(!text.includes(summary))throw Error('El resumen del lote 1282 no coincide.');
const proof='**Publicación verificada:** el commit de datos `f1e189c` (`'+process.env.DATA_SHA+'`) aparece incluido con estado **Success** en [Deploy GitHub Pages, workflow run 43655493815](https://github.com/itic-academy/simulador-tic/actions/runs/43655493815). Se verificaron con HTTP 200 y cabeceras de no caché `revision/`, `revision/cambios-lote-1282.json`, `revision/inventario.json` y `preguntas_preparatic.json`. El registro servido contiene los IDs 6731–6735, todos corregidos; el banco publicado refleja las cinco claves y clasificaciones; el inventario confirma 12.123 preguntas, 6.730 examinadas, 6.612 verificadas, 118 pendientes, 5.393 sin revisar individualmente y cero errores estructurales.';
if(!text.includes('Publicación pendiente de verificación.'))throw Error('No se encuentra el marcador de publicación pendiente.');
text=text.replace('Publicación pendiente de verificación.',proof);
text=text.replace(summary,summary+'\n\n'+proof);
fs.writeFileSync(file,text);console.log('README actualizado con las comprobaciones públicas de Pages para el lote 1282.');
