const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const file = path.join(__dirname, 'README.md');
let text = fs.readFileSync(file, 'utf8');
const marker = '## Lote 1248 —';
assert.ok(text.includes(marker), 'Falta lote 1248');
const note = `## Corrección técnica de los lotes 1247–1248 — 14 de noviembre de 2026

Al cotejar los artefactos públicos con las reformulaciones descritas, se detectó que el helper histórico no aplicaba los objetos de edición pasados en cada tupla del lote. Se conservaron intactos los originales y se aplicaron las reformulaciones al banco y a las instantáneas «actualizada» de los registros para los IDs 6556–6559 y 6561–6563, 6565. El helper se corrigió para aceptar tanto ediciones por fila como el mapa explícito. Se verificaron de nuevo el inventario y la integridad; los conteos de estados no cambian porque esas preguntas ya figuraban como revisadas, aunque su contenido no había recibido las modificaciones descritas. La evidencia de la corrección se documentará tras el nuevo despliegue.

`;
if (!text.includes('## Corrección técnica de los lotes 1247–1248')) {
  const at = text.indexOf(marker);
  text = text.slice(0, at) + note + text.slice(at);
}
fs.writeFileSync(file, text);
console.log('README: incidencia de aplicación y corrección de ediciones documentadas.');
