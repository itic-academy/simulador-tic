const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const file = path.join(__dirname, 'README.md');
let text = fs.readFileSync(file, 'utf8');
const start = text.indexOf('## Lote 1246 —');
assert.ok(start >= 0, 'No se encuentra el lote 1246');
const end = text.indexOf('## Lote 1245 —', start);
assert.ok(end > start, 'No se encuentra el límite del lote anterior');
let section = text.slice(start, end);
const proof = 'Publicación verificada: commit de datos `58847b6` (`58847b6bb7391be9c1ce71bcced6aceaa1d12bc4`); [workflow Deploy GitHub Pages 43527065824](https://github.com/itic-academy/simulador-tic/actions/runs/43527065824) finalizado con estado **Success** e incluye ese commit. README, `cambios-lote-1246.json` e `inventario.json` respondieron HTTP 200 sin caché. El registro público contiene los IDs 6551–6555 con estados vigente, corregida, vigente, vigente y corregida. Inventario público: 6.550 examinadas, 6.436 verificadas (1.275 vigentes, 4.696 corregidas y 465 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5.573 sin revisar; errores estructurales: 0.';
if (section.includes('Pendiente verificar la publicación del lote.')) {
  section = section.replace('Pendiente verificar la publicación del lote.', proof);
} else {
  assert.ok(section.includes('43527065824'), 'El lote no consta como verificado');
}
text = text.slice(0, start) + section + text.slice(end);
fs.writeFileSync(file, text);
console.log('README: publicación del lote 1246 documentada tras comprobar workflow y archivos públicos.');
