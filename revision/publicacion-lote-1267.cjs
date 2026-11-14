const fs=require('node:fs');
const file='revision/README.md';
let s=fs.readFileSync(file,'utf8');
const marker='Estado parcial, no revisión completa del banco. Publicación desde main mediante GitHub Actions. Último lote secuencial: 1267 (IDs 6656–6660). Acumulado: 6655 preguntas examinadas individualmente; 6537 verificadas (1287 vigentes, 4772 corregidas y 478 históricas); 118 pendientes documentadas (46 de fuente y 72 de ambigüedad); 5468 sin revisar individualmente.';
if(!s.includes(marker))throw Error('No coincide estado del lote 1267.');
const note='\n\n**Publicación verificada:** commit de datos `e1b856e` (`e1b856e9014127a23fbff955596a140d6ebeffcc`), [Deploy GitHub Pages, workflow run 43640145101](https://github.com/itic-academy/simulador-tic/actions/runs/43640145101), finalizado con estado **Success** e incluyendo ese commit. GitHub Pages respondió HTTP 200 para `revision/README.md`, `revision/cambios-lote-1267.json` y `revision/inventario.json`; se comprobó en los contenidos servidos que el README anuncia el lote 1267, el registro incluye los IDs 6656–6660 y el inventario publicado confirma 6.655 examinadas, 6.537 verificadas (1.287 vigentes, 4.772 corregidas y 478 históricas), 118 pendientes (46 de fuente y 72 de ambigüedad) y 5.468 sin revisar individualmente.';
if(!s.includes('workflow run 43640145101'))s=s.replace(marker,marker+note);
fs.writeFileSync(file,s);
