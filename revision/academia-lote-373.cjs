const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-373.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1' },
  bi: { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence & Big Data, versión 2026.1' }
};
const map = {
  2181: { topics: ['A1-63', 'A2-II-4'], docs: ['bi', 'databases'], detail: 'A1-63/A2-II-4 cubren SGBD, almacenes de datos y OLTP/OLAP. Los bloques 29 y 34 encuadran bases de datos y analítica; la diferencia entre sistemas operacionales fuente y repositorios analíticos se comprueba en Microsoft Learn.' },
  2182: { topics: ['A1-72', 'A2-II-12'], docs: ['systems'], detail: 'A1-72/A2-II-12 tratan CRM, atención al cliente y canales. El bloque 30 proporciona el encuadre CRM; la delimitación de contabilidad ERP frente a capacidades comerciales CRM se verifica en documentación Microsoft, que también confirma que ciertos CRM gestionan facturas.' },
  2183: { topics: ['A1-63', 'A1-66', 'A2-II-5', 'A2-III-11'], docs: ['databases', 'systems'], detail: 'A1-63/A2-II-5 encuadran gestores/acceso a datos; A1-66/A2-III-11 la plataforma .NET. Los bloques 29 y 30 aportan contexto curricular; la composición concreta de ADO.NET se contrasta con Microsoft Learn.' },
  2184: { topics: ['A1-65', 'A2-II-9'], docs: ['systems'], detail: 'A1-65/A2-II-9 incluyen scripts y lenguajes de marca. El bloque 30 sirve de encuadre; la inclusión del motor JScript en Windows Script Host se comprueba con Microsoft Learn.' },
  2185: { topics: ['A1-65', 'A2-II-6'], docs: ['systems'], detail: 'A1-65/A2-II-6 encuadran arquitecturas de desarrollo web y cliente-servidor. El bloque 30 da contexto de sistemas de información. La fuente de academia disponible no permite validar la lista histórica de categorías; el registro conserva la pregunta como pendiente de ambigüedad.' }
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
  const calls = 'programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los materiales de academia indicados y con los programas oficiales de las convocatorias ${calls}. La academia se utiliza para encuadre curricular; la respuesta se apoya en las fuentes técnicas primarias citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo curricular. Material usado para encuadre, no como autoridad técnica o normativa.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2181–2185.');
