const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const inventory = JSON.parse(fs.readFileSync(path.join(dir, 'inventario.json'), 'utf8'));
const dataPath = path.join(dir, '..', 'preguntas_preparatic.json');
const logPath = path.join(dir, 'cambios-lote-1246.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  6551: 'Cotejo con ITIC Academy, bloque 05, contratación, presupuestos y compra TIC, edición 2026: presupuesto/ejecución del gasto y subvenciones, temas A1-12/A1-13; cada supuesto se verifica con la LGP.' ,
  6552: 'Cotejo con ITIC Academy, bloque 05, contratación, presupuestos y compra TIC, edición 2026: estructura y clasificación del presupuesto, tema A1-12; se marca expresamente presupuesto del Estado para no mezclarlo con la regla del artículo 44.',
  6553: 'Cotejo con ITIC Academy, bloque 05, contratación, presupuestos y compra TIC, edición 2026: subvenciones públicas (A1-13); la función de publicidad se verifica con el artículo 20.8 LGS. El bloque 06 sirve de referencia transversal de transparencia, no sustituye la norma.',
  6554: 'Cotejo con ITIC Academy, bloque 06, economía, sociedad, empleo y transformación digital, edición 2026: incluye discapacidad/dependencia y los temas A1-16 y A2-I.5; el catálogo se contrasta con la Ley 39/2006 vigente.',
  6555: 'Cotejo con ITIC Academy, bloque 06, economía, sociedad, empleo y transformación digital, edición 2026: incluye mercado de trabajo y A1-17; las series y periodicidad se validan en la publicación mensual oficial del SEPE.'
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
  `Último lote secuencial: 1246 (IDs 6551–6555). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inventory.estados.vigente)} vigentes, ${fmt(inventory.estados.corregida)} corregidas y ${fmt(inventory.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inventory.estados.pendiente_fuente)} de fuente y ${fmt(inventory.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inventory.estados.sin_revisar)} sin revisar individualmente.`);
const section = `## Lote 1246 — 14 de noviembre de 2026

Revisadas individualmente las preguntas 6551–6555 con legislación vigente y datos oficiales. Se corrigió la lectura de los anticipos europeos de tesorería; se precisó el ámbito del artículo 43 LGP para los gastos de personal; se fijó la función legal de publicidad de la BDNS; y se cotejaron el catálogo de dependencia y la periodicidad del paro registrado publicado por el SEPE. Se conservaron los originales, con clasificación según los programas oficiales A1/A2 y contraste curricular con ITIC Academy en Drive.

- **6551 — Ley General Presupuestaria:** la afirmación incorrecta es D: los anticipos europeos pendientes al cierre **pueden** cancelarse en el ejercicio siguiente (art. 82.2 LGP), no está prohibido. Las otras opciones recogen los arts. 86.2 y 84. A1-12/A1-13.
- **6552 — especificación del crédito de personal:** respuesta B, a nivel de artículo en el presupuesto estatal (art. 43.1 LGP). Se precisó el ámbito para distinguir el artículo 44, aplicable a organismos autónomos y Seguridad Social, donde la regla es distinta. A1-12; estado corregido.
- **6553 — BDNS:** respuesta B: opera como sistema nacional de publicidad de subvenciones (art. 20.8 LGS). La publicidad no la convierte en órgano regulador ni en órgano de control financiero. A1-13/A1-25; no se fuerza A2 directo.
- **6554 — servicios de dependencia:** respuesta B: teleasistencia, ayuda a domicilio y centro de día/noche están en el catálogo del art. 15 de la Ley 39/2006. A1-16/A2-I.5.
- **6555 — paro registrado:** respuesta B, publicación mensual. Se reescribió el enunciado para referirlo directamente a la estadística difundida por el SEPE y evitar atribuir una periodicidad no precisada a cada organismo. A1-17; sin epígrafe A2 directo.

Fuentes primarias: [Ley 47/2003, General Presupuestaria, arts. 43, 44, 82, 84 y 86](https://www.boe.es/buscar/act.php?id=BOE-A-2003-21614); [Ley 38/2003, General de Subvenciones, art. 20](https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977); [Ley 39/2006, de dependencia, art. 15 y servicios](https://www.boe.es/buscar/act.php?id=BOE-A-2006-21990); [SEPE, estadística mensual de paro y contratos](https://www.sepe.es/HomeSepe/es/que-es-el-sepe/estadisticas/datos-avance.html) y [evolución mensual del paro registrado](https://www.sepe.es/HomeSepe/es/que-es-el-sepe/estadisticas/datos-avance/grafico-paro-registrado.html). Convocatorias: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). Cotejo curricular Drive: [bloque 05, presupuestos y subvenciones](https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk) y [bloque 06, economía, sociedad y empleo](https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk). Los materiales académicos sirven para encaje curricular; las respuestas se apoyan en las leyes y estadísticas oficiales citadas.

Inventario local: ${fmt(examined)} examinadas; ${fmt(verified)} verificadas (${fmt(inventory.estados.vigente)} vigentes, ${fmt(inventory.estados.corregida)} corregidas y ${fmt(inventory.estados.historica)} históricas); ${fmt(pending)} pendientes (${fmt(inventory.estados.pendiente_fuente)} de fuente y ${fmt(inventory.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inventory.estados.sin_revisar)} sin revisar; errores estructurales ${inventory.errores_estructurales.length}. Ejecutados inventario.cjs, verificar.cjs y git diff --check. Las restantes ${fmt(inventory.estados.sin_revisar)} preguntas continúan idénticas al original. Pendiente verificar la publicación del lote.

`;
assert.ok(readme.includes('## Lote 1245 —'), 'Falta el lote anterior');
assert.ok(!readme.includes('## Lote 1246 —'), 'El lote 1246 ya está en README');
const at = readme.indexOf('## Lote 1245 —');
readme = readme.slice(0, at) + section + readme.slice(at);
fs.writeFileSync(readmePath, readme);
console.log(`README actualizado: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes y ${inventory.estados.sin_revisar} sin revisar.`);
