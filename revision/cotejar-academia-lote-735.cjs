const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-735.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const docs = {
  quality: { url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', name: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1 (23/09/2026)' }
};
const mapping = {
  3996: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 incluye mantenimiento y tipologías, con actualización de ISO/IEC/IEEE 14764:2022. El cambio de entorno que exige adaptación se contrasta con la definición 3.1.1 de la norma.' },
  3997: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 conserva MÉTRICA v3 como material histórico de examen y a la vez indica que ISO/IEC/IEEE 14764:2022 es la referencia vigente; el enunciado identifica el método que determina la respuesta.' },
  3998: { a1: ['99', '101'], a2: ['III-8'], detail: 'El bloque 39 cubre planificación, esfuerzo/coste y mantenimiento. Los tres factores reformulados se atribuyen explícitamente al estudio citado, no a una regla universal ni a un ranking general.' },
  3999: { a1: ['98'], a2: ['III-13'], detail: 'El bloque 39 estudia la edición ISO/IEC 25010:2023 vigente, la calidad de producto y sus subcaracterísticas de mantenibilidad; la revisión evita llamar “métricas” a las categorías del modelo.' },
  4000: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 cubre tipos de mantenimiento y actualiza la referencia a ISO/IEC/IEEE 14764:2022; su definición de adaptativo corresponde al supuesto descrito.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${docs.quality.name}; ${m.detail} Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular temático documentado; la clave se contrasta con la fuente primaria normativa o empírica indicada para cada ítem.';
  q.revision.observaciones += ` ${q.clasificacion.bloque_academia}`;
  if (!q.revision.fuentes.some(f => f.url === docs.quality.url)) q.revision.fuentes.push({ url: docs.quality.url, referencia: `${docs.quality.name}; cotejo curricular del alcance citado.` });
  for (const f of [
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 3996–4000.');
