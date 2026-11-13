const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const file = path.join(__dirname, 'README.md');
let text = fs.readFileSync(file, 'utf8');
const start = text.indexOf('## Lote 1247 —');
assert.ok(start >= 0, 'No se encuentra el lote 1247');
const end = text.indexOf('## Lote 1246 —', start);
assert.ok(end > start, 'No se encuentra el límite del lote anterior');
let section = text.slice(start, end);
const proof = 'Publicación verificada: commit de datos `a39b608` (`a39b608d2100a01bd4e6765b87433e3ab010173a`); [workflow Deploy GitHub Pages 43528503632](https://github.com/itic-academy/simulador-tic/actions/runs/43528503632) finalizado con estado **Success** e incluye ese commit. README, `cambios-lote-1247.json` e `inventario.json` respondieron HTTP 200 sin caché. El registro público contiene los IDs 6556–6560 con estados corregida, corregida, histórica, corregida y vigente. Inventario público: 6.555 examinadas, 6.441 verificadas (1.276 vigentes, 4.699 corregidas y 466 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.568 sin revisar; errores estructurales: 0.';
if (section.includes('Pendiente verificar la publicación del lote.')) {
  section = section.replace('Pendiente verificar la publicación del lote.', proof);
} else {
  assert.ok(section.includes('43528503632'), 'El lote no consta como verificado');
}
text = text.slice(0, start) + section + text.slice(end);
fs.writeFileSync(file, text);
console.log('README: publicación del lote 1247 documentada.');
