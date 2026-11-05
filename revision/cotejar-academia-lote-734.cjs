const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-734.json');
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
  3991: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 recoge los tipos de mantenimiento; su material de MÉTRICA v3 distingue la adaptación al entorno de mejora funcional o perfectiva. La respuesta se limita al caso de una actualización para compatibilidad con el entorno.' },
  3992: { a1: ['99', '101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 cubre costes/planificación de mantenimiento. La parte empírica del coste total y la incertidumbre de estimación se contrasta con estudios de proyectos, no se atribuye a la academia como porcentaje universal.' },
  3993: { a1: ['88'], a2: ['III-6'], docs: ['construction'], detail: 'El bloque 38, §11.2, sitúa CASE en herramientas de construcción e ingeniería inversa. El ítem se ancla a una lista concreta de componentes de Coronel y Morris, porque no hay una composición universal de todo entorno CASE.' },
  3994: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 explica proceso y tipologías de mantenimiento; aceptación, viabilidad y pruebas de regresión se contrastan con las tareas oficiales de MÉTRICA v3 MSI.' },
  3995: { a1: ['101'], a2: ['III-8'], docs: ['quality'], detail: 'El bloque 39 cubre tipos de mantenimiento y actualiza su referencia a ISO/IEC/IEEE 14764:2022; el ejemplo de mejora de interfaz para evitar error humano procede de la vista de esa norma.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${m.docs.map(d => docs[d].name).join('; ')}; ${m.detail} Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular temático documentado; las referencias primarias de MÉTRICA, ISO, investigación empírica o bibliografía indicada fundamentan cada respuesta.';
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
console.log('Cotejo académico y clasificación oficial aplicado a IDs 3991–3995.');
