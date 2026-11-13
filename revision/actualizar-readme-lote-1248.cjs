const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const inventory = JSON.parse(fs.readFileSync(path.join(dir, 'inventario.json'), 'utf8'));
const data = JSON.parse(fs.readFileSync(path.join(dir, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(dir, 'cambios-lote-1248.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  6561: 'Cotejo con ITIC Academy, bloque 08 Protección de Datos, edición 2026: RGPD/LOPDGDD, autoridades y códigos de conducta, A1-27/A2-I.7; se delimita quién aprueba según el art. 38.3 LOPDGDD.',
  6562: 'Cotejo con ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, edición 2026: organización territorial y Administración local, A1-3; se asocia además al régimen administrativo A1-8/A2-I.8. La regla de cesión se acredita con el art. 16.3 LBRL.',
  6563: 'Cotejo con ITIC Academy, bloque 11 RISP, Datos Abiertos y Transparencia, edición 2026: Ley 37/2007 y responsabilidad de los reutilizadores, A1-31/A2-I.9; se contrasta el art. 11.7 en BOE.',
  6564: 'Cotejo con ITIC Academy, bloque 12 Estrategias y Herramientas del Directivo Público TIC, edición 2026: DAFO y planificación estratégica, A1-33/35/87 y A2-II.15; se contrasta la matriz SWOT con la referencia del JRC de la Comisión Europea.',
  6565: 'Cotejo con ITIC Academy, bloque 15 Metodologías Ágiles y Ciclo de Vida, edición 2026: incluye A1-37 (Lean y metodologías ágiles); A2-III.2 para planificación del desarrollo. La distinción se matiza con Lean Enterprise Institute y Agile Alliance.'
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
fs.writeFileSync(path.join(dir, '..', 'preguntas_preparatic.json'), JSON.stringify(data, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');

const readmePath = path.join(dir, 'README.md');
let readme = fs.readFileSync(readmePath, 'utf8');
const fmt = n => n.toLocaleString('es-ES');
const examined = inventory.total - inventory.estados.sin_revisar;
const verified = inventory.estados.vigente + inventory.estados.corregida + inventory.estados.historica;
const pending = inventory.estados.pendiente_fuente + inventory.estados.pendiente_ambiguedad;
readme = readme.replace(/Último lote secuencial:.*?sin revisar individualmente\./,
  `Último lote secuencial: 1248 (IDs 6561–6565). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inventory.estados.vigente)} vigentes, ${fmt(inventory.estados.corregida)} corregidas y ${fmt(inventory.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inventory.estados.pendiente_fuente)} de fuente y ${fmt(inventory.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inventory.estados.sin_revisar)} sin revisar individualmente.`);
const section = `## Lote 1248 — 14 de noviembre de 2026

Revisadas individualmente las preguntas 6561–6565. Se precisó la competencia para aprobar códigos de conducta de protección de datos; se delimitó la cesión de datos obligatorios del Padrón; se contrastó la responsabilidad exclusiva del reutilizador frente a terceros; se confirmó qué variables componen DAFO; y se reformuló una pregunta Lean para distinguir una gráfica de seguimiento ágil sin hacer una exclusión absoluta en equipos híbridos. Se preservaron los originales, se cotejaron los programas oficiales A1/A2 y los materiales de ITIC Academy en Drive.

- **6561 — códigos de conducta:** respuesta A tras precisar el art. 38.3 LOPDGDD: aprueba la AEPD o, según competencia, la autoridad autonómica de protección de datos. A1-27/A2-I.7; Academy, bloque 08.
- **6562 — cesión del Padrón:** respuesta D conforme al art. 16.3 LBRL: sin consentimiento solo si los datos son necesarios para competencias propias y residencia/domicilio son relevantes; los datos voluntarios no se ceden. A1-3/8 y A2-I.8; Academy, bloque 01.
- **6563 — reutilización de datos:** respuesta A conforme al art. 11.7 de la Ley 37/2007: quienes reutilizan responden en exclusiva frente a terceros por los daños derivados de la reutilización, bajo su responsabilidad y riesgo. A1-31/A2-I.9; Academy, bloque 11.
- **6564 — análisis DAFO:** se confirma A. Las cuatro dimensiones son debilidades, amenazas, fortalezas y oportunidades; «directrices» no es una de ellas. A1-33/35/87 y A2-II.15; Academy, bloque 12.
- **6565 — prácticas Lean y seguimiento ágil:** respuesta C, con la pregunta acotada: el burndown chart sigue el trabajo pendiente frente al tiempo en contextos ágiles/Scrum; Kaizen, Value Stream Mapping y 5S son prácticas Lean. Se evita afirmar que ambos enfoques no puedan coexistir. A1-37/A2-III.2; Academy, bloque 15.

Fuentes primarias y técnicas: [LO 3/2018, art. 38](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673) y [Reglamento (UE) 2016/679, art. 40](https://eur-lex.europa.eu/eli/reg/2016/679/oj); [Ley 7/1985, art. 16.3](https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392) y [criterio publicado en BOE sobre cesiones padronales](https://www.boe.es/boe/dias/2023/09/18/pdfs/BOE-A-2023-19648.pdf); [Ley 37/2007, art. 11.7–8](https://www.boe.es/buscar/act.php?id=BOE-A-2007-19814); [JRC de la Comisión Europea, matriz SWOT](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC125110/jrc125110_ce_perspectives_for_eu_textiles_tr_10.06.2021_final.pdf); [Lean Enterprise Institute: Kaizen](https://www.lean.org/lexicon-terms/kaizen/), [Value Stream Mapping](https://www.lean.org/lexicon-terms/value-stream-mapping/) y [5S](https://www.lean.org/lexicon-terms/five-s/); [Agile Alliance, burndown chart](https://agilealliance.org/glossary/burndown-chart/). Convocatorias: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). Cotejo curricular Drive: [bloque 08, protección de datos](https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk), [bloque 01, Constitución y organización del Estado](https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk), [bloque 11, RISP, datos abiertos y transparencia](https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk), [bloque 12, estrategias y planificación](https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk) y [bloque 15, metodologías ágiles](https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk). La academia orienta la adscripción al temario, no sustituye las fuentes normativas/técnicas.

Inventario local: ${fmt(examined)} examinadas; ${fmt(verified)} verificadas (${fmt(inventory.estados.vigente)} vigentes, ${fmt(inventory.estados.corregida)} corregidas y ${fmt(inventory.estados.historica)} históricas); ${fmt(pending)} pendientes (${fmt(inventory.estados.pendiente_fuente)} de fuente y ${fmt(inventory.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inventory.estados.sin_revisar)} sin revisar; errores estructurales ${inventory.errores_estructurales.length}. Ejecutados inventario.cjs, verificar.cjs y git diff --check. Las restantes ${fmt(inventory.estados.sin_revisar)} preguntas continúan idénticas al original. Pendiente verificar la publicación del lote.

`;
assert.ok(readme.includes('## Lote 1247 —'), 'Falta el lote anterior');
assert.ok(!readme.includes('## Lote 1248 —'), 'El lote 1248 ya está en README');
const at = readme.indexOf('## Lote 1247 —');
readme = readme.slice(0, at) + section + readme.slice(at);
fs.writeFileSync(readmePath, readme);
console.log(`README actualizado: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes y ${inventory.estados.sin_revisar} sin revisar.`);
