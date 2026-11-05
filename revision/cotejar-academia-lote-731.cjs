const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-731.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const docs = {
  q39: { url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', name: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1 (23/09/2026)' },
  q38: { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', name: 'ITIC Academy, bloque «Análisis, diseño y construcción de sistemas de información», versión 2026.1 (18/09/2026)' }
};
const mapping = {
  3976: { a1: ['101'], a2: ['III-8'], docs: ['q39'], detail: 'El bloque 39 incluye tipos de mantenimiento y, en sus preguntas de revisión, distingue mantenimiento preventivo (reducir la probabilidad de fallos futuros) de corregir fallos ya observados; la definición normativa se contrasta con ISO/IEC/IEEE 14764:2022.' },
  3977: { a1: ['89'], a2: ['III-4'], docs: ['q38'], detail: 'El bloque de análisis, diseño y construcción incluye el modelo de datos, el Modelo Entidad/Relación Extendido y su independencia de la tecnología física; el procedimiento concreto se verifica en MÉTRICA v3 ASI.' },
  3978: { a1: ['86', '101'], a2: ['III-1', 'III-8'], docs: ['q38', 'q39'], detail: 'Los bloques 38 y 39 sitúan la pregunta en evolución, estructura/complejidad y mantenimiento. El bloque 38 explica cómo fan-out excesivo aumenta complejidad y el 39 incluye métricas de complejidad; no atribuyen una definición literal de refactorización, que se verifica con Fowler.' },
  3979: { a1: ['99', '101'], a2: ['III-8'], docs: ['q39'], detail: 'El bloque 39 cubre mantenimiento y obsolescencia, pero la fórmula TCA × esfuerzo de desarrollo no figura como regla general en el contenido académico extraído. Se identifica como el modelo histórico ACT/TCA de Boehm y se contrasta con su fuente y la revisión académica de Ahn et al.' },
  3980: { a1: ['86', '101'], a2: ['III-1', 'III-8'], docs: ['q38', 'q39'], detail: 'Los bloques 38 (ciclo de vida/evolución) y 39 (mantenimiento) proporcionan el contexto curricular. El texto académico extraído no atribuye esta formulación a Lehman; se conserva esa atribución solo después de contrastarla con el informe de Lehman y colaboradores.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${m.docs.map(d => docs[d].name).join('; ')}; ${m.detail} Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular temático documentado; las afirmaciones técnicas se apoyan en las referencias normativas y técnicas primarias de cada pregunta, no en el temario académico.';
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
console.log('Cotejo académico y programas A1/A2 aplicado a IDs 3976–3980.');
