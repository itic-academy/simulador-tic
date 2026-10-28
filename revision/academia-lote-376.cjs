const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-376.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado, edición 2026' },
  analytics: { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, temario 2026' }
};
const map = {
  2196: { topics: ['A1-70', 'A2-III-15'], docs: ['analytics'], detail: 'A1-70 encuadra técnicas de aprendizaje y análisis dentro de IA; A2-III-15 trata expresamente minería de datos, OLAP y Big Data. El bloque 34 aporta el contexto de BI y Big Data; la utilidad de predicción y detección de patrones/fraude se comprueba en fuentes gubernamentales.' },
  2197: { topics: ['A1-67', 'A2-III-10'], docs: ['systems'], detail: 'A1-67 y A2-III-10 recogen el entorno Java y la arquitectura Java/Jakarta EE. El bloque 30 proporciona el marco de Java; el papel exacto del GC se valida con la documentación oficial de Oracle.' },
  2198: { topics: ['A1-64', 'A2-II-5'], docs: ['databases'], detail: 'A1-64 y A2-II-5 recogen el modelo relacional y el lenguaje SQL. El bloque 29 proporciona el contexto de bases de datos/SQL; la distinción entre vistas ordinarias y materializadas se valida en la documentación primaria de los SGBD.' },
  2199: { topics: ['A1-85', 'A2-IV-12'], docs: ['systems'], detail: 'A1-85 cubre blockchain y activos digitales; A2-IV-12, seguridad y técnicas de prevención de ataques. El bloque 30 contextualiza blockchain/criptoactivos, pero no se usa como autoridad para definir spoofing; la conducta se contrasta con fuentes de reguladores CFTC/SEC.' },
  2200: { topics: ['A1-65', 'A2-II-9', 'A2-III-12'], docs: ['systems'], detail: 'A1-65 recoge arquitectura de desarrollo web y scripts de cliente; A2-II-9, lenguajes de marca y scripts; A2-III-12, aplicaciones y tecnologías web. El bloque 30 ofrece el encuadre de desarrollo web; la definición histórica y uso actual se comprueban en la fuente del autor de Ajax y documentación técnica.' }
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
  const calls = 'convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejadas con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las ${calls}. La academia se utiliza para encuadre curricular; la respuesta se sustenta en las fuentes técnicas o institucionales citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo curricular. Material usado para encuadre, no como autoridad técnica ni fuente de definición normativa.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2196–2200.');
