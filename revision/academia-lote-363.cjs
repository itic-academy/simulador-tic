const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-363.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  'hardware': { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1' },
  'gis': { url: 'https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view?usp=drivesdk', label: 'ITIC Academy, bloque 33 E-learning y sistemas de información geográfica, versión 2026.1' },
  'web': { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  'soa': { url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026.1' },
  'data': { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 Inteligencia artificial y ciencia de datos, versión 2026' },
  'bi': { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1' }
};
const map = {
  2131: { topics: ['A1-54', 'A2-II-1'], docs: ['hardware'], detail: 'A1-54 incluye los dispositivos personales de PC; A2-II-1 sitúa las tecnologías de ordenadores desde dispositivos móviles hasta superordenadores. El material de hardware permite el encuadre en equipos personales, sin ser la fuente lingüística de «modding».' },
  2132: { topics: ['A1-74'], docs: ['gis'], detail: 'A1-74 trata los sistemas de información geográfica y su funcionalidad; el bloque académico de e-learning y GIS incluye la parte SIG. No se añade un tema A2 de GIS no presente en el programa.' },
  2133: { topics: ['A1-65', 'A1-77', 'A2-II-9', 'A2-III-12'], docs: ['web'], detail: 'A1-65 y A1-77 abarcan arquitectura web, scripts y HTML; A2-II-9 incluye HTML y lenguajes de script y A2-III-12 las aplicaciones web y su desarrollo. El almacenamiento del navegador es una API web, no una norma de almacenamiento del HTML por sí solo.' },
  2134: { topics: ['A1-58', 'A2-II-6', 'A2-II-7'], docs: ['soa'], detail: 'A1-58 incorpora SOA; A2-II-6 incluye interoperabilidad y servicios web, y A2-II-7 contenedores y microservicios como tecnologías relacionadas. El bloque de academia 28 trata explícitamente SOA y sus principios de bajo acoplamiento, reutilización, autonomía, interoperabilidad y contratos de servicio.' },
  2135: { topics: ['A1-70', 'A1-71', 'A2-III-15'], docs: ['data', 'bi'], detail: 'A1-70 cubre aprendizaje automático; A1-71 ciencia de datos; A2-III-15 incluye expresamente minería de datos y algoritmos. Los bloques de academia 32 y 34 abordan ciencia de datos/ML y BI/Big Data, respectivamente.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  assert.ok(m.topics.every(t => official.has(t)), `Tema oficial inexistente para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(t => t.startsWith('A2-'));
  q.clasificacion.bloque_academia = m.docs.map(k => `${academy[k].label}; ${m.detail}`).join(' | ');
  const calls = 'Programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el temario académico indicado y los programas oficiales y convocatorias ${calls}. La academia orienta el alcance curricular; las respuestas técnicas se sustentan en estándares y documentación primaria.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; correspondencia curricular del tema. Material de academia utilizado para encuadre, no como autoridad normativa ni técnica.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 vigente consultada; anexo de programa, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI vigente consultada; anexo de programa, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2131–2135.');
