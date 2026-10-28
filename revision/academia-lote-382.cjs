const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-382.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1' },
  ai: { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32, Inteligencia Artificial y Ciencia de Datos, versión 2026.1' },
  bi: { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34, Business Intelligence y Big Data, versión 2026.1' }
};
const map = {
  2226: { topics: ['A1-65', 'A2-III-12'], docs: ['systems'], detail: 'A1-65/A2-III-12 abarcan desarrollo web en servidor y frameworks; el bloque 30 contextualiza ASP.NET y el patrón controlador. El sufijo concreto se verifica con documentación de Microsoft para ASP.NET MVC.' },
  2227: { topics: ['A1-70', 'A2-III-5'], docs: ['ai'], detail: 'A1-70 incluye NLP y tecnologías de inteligencia artificial; A2-III-5, fundamentos de IA y áreas de aplicación. El bloque 32 contiene NLP y reconocimiento de voz; la distinción fonética/acústica se verifica con fuentes universitarias.' },
  2228: { topics: ['A1-67', 'A2-II-3'], docs: ['systems'], detail: 'A1-67 incluye el entorno Java y A2-II-3 las características técnicas de lenguajes y paradigmas de programación. El bloque 30 ofrece encuadre Java; la expansión exacta de JNI se comprueba en Oracle.' },
  2229: { topics: ['A1-71', 'A2-II-4', 'A2-III-15'], docs: ['bi'], detail: 'A1-71 recoge ciencia de datos; A2-II-4, almacenes de datos y OLAP; A2-III-15, minería de datos y OLAP. El bloque 34 estudia el modelado dimensional y distingue estrella, copo de nieve y constelación de hechos.' },
  2230: { topics: ['A1-77', 'A2-III-12'], docs: ['systems'], detail: 'A1-77/A2-III-12 cubren navegadores, tecnologías web y compatibilidad. El bloque 30 contextualiza navegadores y tecnologías de cliente; la fecha y el mecanismo histórico se verifican en el archivo oficial de Chromium.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las ${calls}. La academia se usa para encuadre curricular; la respuesta se apoya en las fuentes técnicas primarias citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo curricular, no fuente de autoridad técnica ni normativa.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2226–2230.');
