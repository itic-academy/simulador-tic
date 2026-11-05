const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-730.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const topics = {
  3971: { a1: ['101'], a2: ['III-8'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026.1: sitúa el concepto en mantenimiento/evolución de sistemas; se contrasta la clasificación específica con MÉTRICA v3.' },
  3972: { a1: ['101'], a2: ['III-8'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026.1: mantenimiento de sistemas; la definición concreta de mantenimiento evolutivo se coteja con MÉTRICA v3.' },
  3973: { a1: ['98'], a2: ['III-13'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026.1: calidad, fiabilidad y evaluación de producto; la definición de disponibilidad se contrasta con ISO/IEC 25010:2023.' },
  3974: { a1: ['101'], a2: ['III-8'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», edición 2026.1: ciclo de vida y mantenimiento; la taxonomía vigente citada se contrasta con ISO/IEC/IEEE 14764:2022.' },
  3975: { a1: ['102'], a2: ['IV-4'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», apartado de gestión de configuración/control de versiones, edición 2026.1; VSS se identifica como ejemplo histórico y se verifica con documentación de Microsoft.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = topics[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${m.detail} Correspondencia contrastada con las convocatorias oficiales A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'La academia sirve de cotejo del temario, no de prueba de la respuesta; las definiciones y el estado de vigencia se contrastan con las fuentes primarias enlazadas.';
  q.revision.observaciones += ` ${q.clasificacion.bloque_academia}`;
  q.comentarios = q.revision.observaciones;
  for (const f of [
    { url: m.url, referencia: m.detail },
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y programas A1/A2 aplicado a IDs 3971–3975.');
