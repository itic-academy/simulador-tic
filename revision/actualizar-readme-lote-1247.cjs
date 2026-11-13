const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const inventory = JSON.parse(fs.readFileSync(path.join(dir, 'inventario.json'), 'utf8'));
const dataPath = path.join(dir, '..', 'preguntas_preparatic.json');
const logPath = path.join(dir, 'cambios-lote-1247.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  6556: 'Cotejo con ITIC Academy, bloque 02, Unión Europea, y bloque 49, regulación de telecomunicaciones, edición 2026: encaje A1-5/A1-123/A1-129 y A2-IV.15; la fecha de comienzo y las salvaguardas se verifican en Comisión Europea y Reglamento (UE) 2022/612.',
  6557: 'Cotejo con ITIC Academy, bloque 03, actuación administrativa y administración digital, edición 2026: sociedad de la información y normativa digital, A1-22/A2-I.6; el texto vigente del art. 17 LSSI se comprueba en BOE y se tiene en cuenta la aplicación paralela del DSA.',
  6558: 'Cotejo con ITIC Academy, bloque 03, actuación administrativa y administración digital, edición 2026: interoperabilidad y administración electrónica, temas A1-45/46/49 y A2-I.9/I.10; el reactivo se etiqueta como histórico porque ISA² concluyó en 2020.',
  6559: 'Cotejo con ITIC Academy, bloque 03, actuación administrativa y administración digital, edición 2026: régimen de la sociedad de la información, temas A1-22/A2-I.6; se contrasta la obligación concreta con el artículo 10 LSSI.',
  6560: 'Cotejo con ITIC Academy, bloque 07, dirección pública y empleo, edición 2026: derechos colectivos y EBEP, temas A1-24/A2-I.8; la distinción entre derechos individuales y colectivos se comprueba con los arts. 14 y 15 EBEP.'
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
  `Último lote secuencial: 1247 (IDs 6556–6560). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inventory.estados.vigente)} vigentes, ${fmt(inventory.estados.corregida)} corregidas y ${fmt(inventory.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inventory.estados.pendiente_fuente)} de fuente y ${fmt(inventory.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inventory.estados.sin_revisar)} sin revisar individualmente.`);
const section = `## Lote 1247 — 14 de noviembre de 2026

Revisadas individualmente las preguntas 6556–6560. Se corrigió la fecha y el alcance de la regla europea de roaming; se precisó el ámbito de la exención de enlaces de la LSSI, incluido el restablecimiento del artículo 17 en 2025 y su contexto DSA; se fechó ISA² como programa terminado; se normalizó la información obligatoria del artículo 10 LSSI; y se confirmó la huelga como derecho colectivo según el EBEP. Se preservaron los originales, se cotejaron las convocatorias oficiales A1/A2 y los bloques pertinentes de ITIC Academy en Drive.

- **6556 — roaming en la UE:** respuesta corregida A. El «roam like at home» empezó el 15 de junio de 2017 (no el 15 de julio); el régimen vigente mantiene tarifas nacionales para llamadas, SMS y datos, con política de uso razonable y salvaguardas. A1-5/123/129 y A2-IV.15; Academy, bloques 02/49.
- **6557 — responsabilidad por enlaces:** respuesta C según art. 17 LSSI: falta de conocimiento efectivo o diligencia para retirar/inutilizar el enlace cuando se conoce la ilicitud. El artículo se restableció tras derogarse parlamentariamente el RDL 9/2024 en enero de 2025. Se distingue el supuesto nacional de enlaces de las reglas actuales del DSA para servicios de alojamiento. A1-22/A2-I.6; Academy, bloque 03.
- **6558 — ISA²:** respuesta falsa D; el programa 2016–2020 pretendía facilitar, no eliminar, interacciones electrónicas transfronterizas. Se marca histórica y se diferencia del Interoperable Europe Act vigente (Reglamento 2024/903). A1-45/46/49 y A2-I.9/I.10; Academy, bloque 03.
- **6559 — información de prestadores LSSI:** respuesta D. El artículo 10 requiere identificación/contacto, NIF, ciertos datos registrales y precios claros cuando proceda; no un número de registro del dominio. Se corrigieron erratas de transcripción. A1-22/A2-I.6; Academy, bloque 03.
- **6560 — derechos colectivos del EBEP:** respuesta A, ejercicio de huelga con garantía de servicios esenciales (art. 15.c). Las otras opciones se sitúan entre derechos individuales del artículo 14. A1-24/A2-I.8; Academy, bloque 07.

Fuentes primarias: [Reglamento (UE) 2022/612 sobre roaming](https://eur-lex.europa.eu/eli/reg/2022/612/oj), [Comisión Europea, preguntas sobre llamadas y roaming](https://digital-strategy.ec.europa.eu/en/faqs/calling-and-texting-other-eu-countries-questions-answers) y [historia del roaming](https://digital-strategy.ec.europa.eu/en/policies/roaming-history); [Ley 34/2002, LSSI, arts. 10 y 17](https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758) y [Reglamento (UE) 2022/2065, DSA](https://eur-lex.europa.eu/eli/reg/2022/2065/oj); [Decisión (UE) 2015/2240, ISA²](https://eur-lex.europa.eu/eli/dec/2015/2240/oj) y [Reglamento (UE) 2024/903, Interoperable Europe Act](https://eur-lex.europa.eu/eli/reg/2024/903/oj); [Real Decreto Legislativo 5/2015, EBEP, arts. 14–15](https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719). Convocatorias: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). Cotejo curricular Drive: [bloque 02, Unión Europea](https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk), [bloque 03, actuación administrativa y administración digital](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk), [bloque 49, telecomunicaciones](https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk) y [bloque 07, empleo público](https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk). La academia sirve para encaje curricular y no sustituye la normativa primaria citada.

Inventario local: ${fmt(examined)} examinadas; ${fmt(verified)} verificadas (${fmt(inventory.estados.vigente)} vigentes, ${fmt(inventory.estados.corregida)} corregidas y ${fmt(inventory.estados.historica)} históricas); ${fmt(pending)} pendientes (${fmt(inventory.estados.pendiente_fuente)} de fuente y ${fmt(inventory.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inventory.estados.sin_revisar)} sin revisar; errores estructurales ${inventory.errores_estructurales.length}. Ejecutados inventario.cjs, verificar.cjs y git diff --check. Las restantes ${fmt(inventory.estados.sin_revisar)} preguntas continúan idénticas al original. Pendiente verificar la publicación del lote.

`;
assert.ok(readme.includes('## Lote 1246 —'), 'Falta el lote anterior');
assert.ok(!readme.includes('## Lote 1247 —'), 'El lote 1247 ya está en README');
const at = readme.indexOf('## Lote 1246 —');
readme = readme.slice(0, at) + section + readme.slice(at);
fs.writeFileSync(readmePath, readme);
console.log(`README actualizado: ${examined} examinadas, ${verified} verificadas, ${pending} pendientes y ${inventory.estados.sin_revisar} sin revisar.`);
