const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const inventory = JSON.parse(fs.readFileSync(path.join(dir, 'inventario.json'), 'utf8'));
const dataPath = path.join(dir, '..', 'preguntas_preparatic.json');
const logPath = path.join(dir, 'cambios-lote-1245.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  6546: 'Cotejo con ITIC Academy, bloque 01, Constitución y organización territorial, edición 2026: cubre A1-3 y la Constitución; se asigna A2-I.1 solo como encaje constitucional general. El requisito se verifica en el artículo 147.3 CE.',
  6547: 'Cotejo con ITIC Academy, bloque 02, Unión Europea, edición 2026: cubre A1-5 y las instituciones europeas. El temario oficial A2 no incluye un epígrafe específico de instituciones de la UE; no se fuerza esa clasificación.',
  6548: 'Cotejo con ITIC Academy, bloque 04, revisión de actos y responsabilidad patrimonial, edición 2026: cubre A1-9 y el recurso contencioso-administrativo. El plazo se contrasta con la LJCA, incluido el apartado 2 del artículo 67.',
  6549: 'Cotejo con ITIC Academy, bloque 05, contratación, presupuestos y compra TIC, edición 2026: encaja en A1-11 y contratación centralizada. La competencia se contrasta con el artículo 229.5 LCSP.',
  6550: 'Cotejo con ITIC Academy, bloque 05, contratación, presupuestos y compra TIC, edición 2026: incluye la LCSP en A1-11; el contenido de invalidez se verifica directamente con el artículo 38.'
};
for (const [key, note] of Object.entries(notes)) {
  const id = Number(key);
  const q = data.preguntas.find(x => x.id === id);
  const entry = log.cambios.find(x => x.id === id);
  assert.ok(q && entry, `Falta la pregunta ${id}`);
  q.clasificacion.bloque_academia = note;
  q.clasificacion.nota = note;
  entry.actualizada.clasificacion.bloque_academia = note;
  entry.actualizada.clasificacion.nota = note;
  entry.actualizada.revision.fuentes = structuredClone(q.revision.fuentes);
  entry.actualizada.revision.observaciones = q.revision.observaciones;
}
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');

const readmePath = path.join(dir, 'README.md');
let readme = fs.readFileSync(readmePath, 'utf8');
const fmt = n => n.toLocaleString('es-ES');
const examined = inventory.total - inventory.estados.sin_revisar;
const verified = inventory.estados.vigente + inventory.estados.corregida + inventory.estados.historica;
const pending = inventory.estados.pendiente_fuente + inventory.estados.pendiente_ambiguedad;
readme = readme.replace(/Último lote secuencial:.*?sin revisar individualmente\./,
  `Último lote secuencial: 1245 (IDs 6546–6550). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inventory.estados.vigente)} vigentes, ${fmt(inventory.estados.corregida)} corregidas y ${fmt(inventory.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inventory.estados.pendiente_fuente)} de fuente y ${fmt(inventory.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inventory.estados.sin_revisar)} sin revisar individualmente.`);
const section = `## Lote 1245 — 14 de noviembre de 2026

Revisadas individualmente las preguntas 6546–6550 con fuentes primarias vigentes. Se confirmó la aprobación parlamentaria orgánica como requisito universal de reforma estatutaria; se precisó que los Cuestores del Parlamento Europeo participan en la Mesa con carácter consultivo; se aclaró el plazo general de sentencia contencioso-administrativa y su excepción legal; y se verificaron tanto el órgano estatal de contratación centralizada como las causas de invalidez contractual. Se conservaron los originales, se clasificó según el temario oficial A1/A2 y se cotejaron los materiales de ITIC Academy en Drive.

- **6546 — reforma de Estatutos de Autonomía:** respuesta C. El artículo 147.3 CE exige siempre aprobación de las Cortes Generales mediante ley orgánica y remite al procedimiento establecido en cada Estatuto. El referéndum no es requisito universal. A1-3/A2-I.1 (encaje constitucional general); Academy, bloque 01.
- **6547 — Mesa del Parlamento Europeo:** respuesta corregida A: Presidente, catorce Vicepresidentes y cinco Cuestores, estos con participación consultiva. Se reescribió el reactivo porque la versión original no indicaba cuántos Cuestores ni distinguía su condición consultiva. A1-5; no se fuerza equivalencia A2; Academy, bloque 02.
- **6548 — plazo para sentencia contencioso-administrativa:** respuesta B, diez días como regla del artículo 67.1 LJCA. Se acotó el enunciado y se explica la posibilidad del apartado 2 de fijar motivadamente una fecha posterior concreta. A1-9; Academy, bloque 04.
- **6549 — contratación centralizada estatal:** respuesta C, Junta de Contratación Centralizada, según el artículo 229.5 LCSP. Se evita confundirla con la Dirección General a la que se adscribe o con denominaciones ministeriales. A1-11; Academy, bloque 05.
- **6550 — invalidez de contratos públicos:** respuesta B, causas reconocidas por el Derecho civil, artículo 38.a LCSP. Se distinguen las causas administrativas de actos preparatorios/adjudicación y la ilegalidad del clausulado. A1-11; Academy, bloque 05.

Fuentes primarias: [Constitución Española consolidada, art. 147.3](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229); [Reglamento interno del Parlamento Europeo, regla 24](https://www.europarl.europa.eu/rules/rules20240716/Rules20240716_EN.pdf) y [órganos políticos del Parlamento Europeo](https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/political-bodies); [Ley 29/1998, LJCA, art. 67](https://www.boe.es/buscar/act.php?id=BOE-A-1998-16718); [Ley 9/2017, LCSP, arts. 38 y 229](https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902). Convocatorias: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). Cotejo curricular Drive: [bloque 01, Constitución](https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk), [bloque 02, Unión Europea](https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk), [bloque 04, revisión de actos](https://drive.google.com/file/d/1U6EEziJeYQVc2YuAzidHpR4x_MBjZhV-/view?usp=drivesdk) y [bloque 05, contratación](https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk). La academia acredita encaje curricular, no sustituye la Constitución, la legislación o el reglamento parlamentario.

Inventario local: ${fmt(examined)} examinadas; ${fmt(verified)} verificadas (${fmt(inventory.estados.vigente)} vigentes, ${fmt(inventory.estados.corregida)} corregidas y ${fmt(inventory.estados.historica)} históricas); ${fmt(pending)} pendientes (${fmt(inventory.estados.pendiente_fuente)} de fuente y ${fmt(inventory.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inventory.estados.sin_revisar)} sin revisar; errores estructurales ${inventory.errores_estructurales.length}. Ejecutados inventario.cjs, verificar.cjs y git diff --check. Las restantes ${fmt(inventory.estados.sin_revisar)} preguntas continúan idénticas al original. Pendiente verificar la publicación del lote.

`;
assert.ok(readme.includes('## Lote 1244 —'), 'Falta el lote anterior');
assert.ok(!readme.includes('## Lote 1245 —'), 'El lote 1245 ya está en README');
const at = readme.indexOf('## Lote 1244 —');
readme = readme.slice(0, at) + section + readme.slice(at);
fs.writeFileSync(readmePath, readme);
console.log(`README actualizado: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes y ${inventory.estados.sin_revisar} sin revisar.`);
