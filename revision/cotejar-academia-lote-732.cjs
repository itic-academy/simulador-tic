const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-732.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const docs = {
  quality: { url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', name: 'ITIC Academy, bloque «Calidad y mantenimiento», versión 2026.1 (23/09/2026)' },
  construction: { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', name: 'ITIC Academy, bloque «Análisis, diseño y construcción de sistemas de información», versión 2026.1 (18/09/2026)' }
};
const mapping = {
  3981: { a1: ['88'], a2: ['III-6'], docs: ['construction'], detail: 'El bloque 38 sitúa las herramientas CASE y la ingeniería inversa dentro de construcción del sistema; la edición académica las trata como soporte de ingeniería directa e inversa. El uso específico de VIA/CENTER en reingeniería COBOL se contrasta con documentación contemporánea del producto.' },
  3982: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 aborda mantenimiento/calidad; el temario no es la fuente de la definición del anglicismo «code smell», que se atribuye a Fowler y se cita por separado.' },
  3983: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39, §8, actualiza la referencia de mantenimiento a ISO/IEC/IEEE 14764:2022. El esquema de 2006 de esta pregunta se conserva solo como antecedente histórico, claramente separado de la edición actual.' },
  3984: { a1: ['99', '101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 cubre mantenimiento, planificación y gestión, pero no presenta ACT/TCA como fórmula universal. La definición y el alcance histórico se contrastan con el artículo de Ahn et al. sobre el modelo de Boehm.' },
  3985: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 incluye mantenimiento predictivo, que se actualiza en la edición 2026.1. La elección entre clasificación, regresión y clustering procede de la taxonomía de investigación en minería de datos para mantenimiento predictivo, no de una lista cerrada dictada por la academia.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${m.docs.map(d => docs[d].name).join('; ')}; ${m.detail} Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular documentado: la correspondencia temática no sustituye las referencias técnicas primarias de la revisión.';
  q.revision.observaciones += ` ${q.clasificacion.bloque_academia}`;
  q.comentarios = q.revision.observaciones;
  for (const d of m.docs.map(x => docs[x])) if (!q.revision.fuentes.some(f => f.url === d.url)) q.revision.fuentes.push({ url: d.url, referencia: `${d.name}; cotejo curricular del alcance citado.` });
  for (const f of [
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y clasificación oficial aplicado a IDs 3981–3985.');
