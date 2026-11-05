const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-736.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const docs = {
  quality: { url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', name: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1 (23/09/2026)' },
  construction: { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', name: 'ITIC Academy, bloque «Análisis, diseño y construcción de sistemas de información», versión 2026.1 (18/09/2026)' }
};
const mapping = {
  4001: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque cubre mantenimiento y el proceso MÉTRICA v3; la atribución exacta de roles se ha contrastado en la tabla oficial de participantes del MSI.' },
  4002: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'Pertenece al alcance curricular de mantenibilidad y mantenimiento del bloque. El cotejo no resuelve el ítem: su clave y alternativas quedan pendientes por ambigüedad y falta de una fuente primaria identificada.' },
  4003: { a1: ['88'], a2: ['III-3'], docs: ['construction'], detail: 'El bloque 38, «Ingeniería de requisitos», cubre estrategias de determinación de requerimientos y un proceso iterativo; la respuesta sobre Pressman se vincula al capítulo de Understanding Requirements.' },
  4004: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 desarrolla tipologías de mantenimiento y referencia la edición actual ISO/IEC/IEEE 14764:2022, compatible con la clasificación adaptativa del supuesto.' },
  4005: { a1: ['100', '101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 incluye sistemas legacy, obsolescencia técnica y mantenimiento; la generalización se reformuló con alcance expreso al informe oficial GAO citado.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${m.docs.map(d => docs[d].name).join('; ')}; ${m.detail} Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = q.revision.estado.startsWith('pendiente_')
    ? 'Cotejo curricular de alcance registrado; la evidencia consultada no basta para validar la respuesta, que permanece pendiente.'
    : 'Cotejo curricular temático documentado; las claves se contrastan con las fuentes primarias citadas.';
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
console.log('Cotejo académico y clasificación oficial aplicado a IDs 4001–4005.');
