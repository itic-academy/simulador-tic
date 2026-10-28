const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-399.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  protocols: { url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', label: 'ITIC Academy, bloque 43, Protocolos, versión 2026.1: A1-116 y A2-C12 (NGN/IMS, VoIP y comunicaciones unificadas)' },
  db: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29, Bases de datos, SQL y modelado de datos, versión 2026.1: A1-63/64 y A2-T5' },
  web: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, Tecnologías de Sistemas de la Información, versión 2026.1: HTML, lenguajes de marca, UX y accesibilidad' },
  risk: { url: 'https://drive.google.com/file/d/1XG92ItmeycvU5yzWzg2pm10gQ8fVrpJ8/view?usp=drivesdk', label: 'ITIC Academy, Tema 048, Análisis y gestión de riesgos: incluye MAGERIT v3 como marco de referencia' }
};
const mapping = {
  2311: { topics: ['A1-116', 'A2-IV-14'], docs: ['protocols'], detail: 'Correspondencia directa: los programas A1-116 y A2-IV-14 incluyen NGN/IMS y VoIP; el bloque 43 de Academy desarrolla esos protocolos y cita expresamente ambos epígrafes.' },
  2312: { topics: ['A1-64', 'A2-II-5'], docs: ['db'], detail: 'Correspondencia directa con SQL y gestores relacionales: A1-64/A2-II-5; el bloque 29 de Academy cubre SQL y bases relacionales.' },
  2313: { topics: ['A1-77', 'A2-II-9'], docs: ['web'], detail: 'HTML y semántica de listas aparecen en los epígrafes oficiales sobre HTML y lenguajes de marca A1-77/A2-II-9; el bloque 30 de Academy incluye HTML y tecnologías web.' },
  2314: { topics: ['A1-47', 'A2-II-10'], docs: ['risk'], detail: 'El tema 048 de Academy aborda MAGERIT y análisis de riesgos; A1-47/A2-II-10 contienen literalmente el análisis y gestión de riesgos. La definición y fórmula exactas se validan con los libros oficiales MAGERIT, no con el material académico.' },
  2315: { topics: ['A1-44', 'A2-III-14'], docs: ['web'], detail: 'La accesibilidad web corresponde a A1-44 y A2-III-14. El bloque 30 de Academy incluye el epígrafe Responsive, UX y accesibilidad; los cuatro principios se validan con la recomendación del W3C.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
assert.deepEqual(log.cambios.map(c => c.id), [2311, 2312, 2313, 2314, 2315]);
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const map = mapping[change.id];
  assert.ok(q?.revision && map, `Falta cotejo ${change.id}`);
  assert.ok(map.topics.every(t => official.has(t)), `Tema oficial inexistente ${change.id}`);
  q.clasificacion.A1 = map.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = map.topics.filter(t => t.startsWith('A2-'));
  const curriculum = `${map.docs.map(key => docs[key].label).join('; ')}. ${map.detail}`;
  const note = `Cotejo curricular: ${curriculum} Correspondencia contrastada con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). ITIC Academy se usa para encuadre curricular; la comprobación de contenido se apoya en las fuentes primarias.`;
  q.clasificacion.bloque_academia = curriculum;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
console.log('Cotejo Academy/temario oficial del lote 399 completado.');
