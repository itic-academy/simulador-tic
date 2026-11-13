const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const file = path.join(__dirname, 'README.md');
let text = fs.readFileSync(file, 'utf8');
const start = text.indexOf('## Lote 1239 —');
assert.ok(start >= 0, 'No se encuentra el lote 1239');
const end = text.indexOf('## Lote 1238 —', start);
assert.ok(end > start, 'No se encuentra el límite del lote anterior');
const before = text.slice(0, start);
const section = text.slice(start, end);
const after = text.slice(end);
assert.ok(section.includes('Pendiente verificar la publicación del lote.'), 'El lote no está pendiente de verificación');

const proof = 'Publicación verificada: commit de datos 4c82ab1 (4c82ab16dbbf1ac9e064d2d6205f0a474c252a45); [workflow Deploy GitHub Pages 43517895518](https://github.com/itic-academy/simulador-tic/actions/runs/43517895518) completado con estado Success e incluye ese commit. README, cambios-lote-1239.json e inventario.json respondieron HTTP 200 sin caché. El registro público contiene los IDs 6516–6520 con estados corregida, corregida, corregida, corregida y vigente. El inventario público confirma 6515 examinadas, 6401 verificadas (1264 vigentes, 4676 corregidas y 461 históricas), 114 pendientes (45 de fuente y 69 de ambigüedad) y 5608 sin revisar individualmente.';
text = before + section.replace('Pendiente verificar la publicación del lote.', proof) + after;
fs.writeFileSync(file, text);
console.log('README: publicación del lote 1239 verificada y documentada.');
