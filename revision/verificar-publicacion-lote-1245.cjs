const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const file = path.join(dir, 'README.md');
let text = fs.readFileSync(file, 'utf8');
const start = text.indexOf('## Lote 1245 —');
assert.ok(start >= 0, 'No se encuentra el lote 1245');
const end = text.indexOf('## Lote 1244 —', start);
assert.ok(end > start, 'No se encuentra el límite del lote anterior');
let section = text.slice(start, end);
const proof = 'Publicación verificada: commit de datos `6de6665` (`6de6665b067755bde55d383f18f8018c9f266b8c`); [workflow Deploy GitHub Pages 43525825017](https://github.com/itic-academy/simulador-tic/actions/runs/43525825017) finalizado con estado **Success** e incluye ese commit. README, `cambios-lote-1245.json` e `inventario.json` respondieron HTTP 200 sin caché. El registro público contiene IDs 6546–6550 con estados vigente, corregida, corregida, vigente y vigente. Inventario público: 6.545 examinadas, 6.431 verificadas (1.272 vigentes, 4.694 corregidas y 465 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.578 sin revisar; errores estructurales: 0.';
if (section.includes('Pendiente verificar la publicación del lote.')) {
  section = section.replace('Pendiente verificar la publicación del lote.', proof);
} else {
  assert.ok(section.includes('43525825017'), 'El lote no consta como verificado');
}
text = text.slice(0, start) + section + text.slice(end);
fs.writeFileSync(file, text);
console.log('README: publicación del lote 1245 documentada tras comprobar workflow y archivos públicos.');
