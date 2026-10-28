const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-380.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  identity: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma' },
  bigdata: { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34, Business Intelligence y Big Data' },
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29, Bases de datos, SQL y modelado' }
};
const map = {
  2216: { topics: ['A1-80'], docs: ['identity'], detail: 'A1-80 comprende certificados digitales, claves y firma electrónica. El bloque 36 contextualiza certificados y PKI; la autoridad concreta se verifica en el portal oficial DNIe.' },
  2217: { topics: ['A1-70', 'A2-III-15'], docs: ['bigdata'], detail: 'A1-70/A2-III-15 incluyen minería de datos, Big Data y analítica. El bloque 34 proporciona el contexto académico; las V clásicas se contrastan con IBM.' },
  2218: { topics: ['A1-65', 'A1-67', 'A2-III-10', 'A2-III-12'], docs: ['systems'], detail: 'A1-65/A2-III-12 cubren desarrollo web y tecnologías de interfaz; A1-67/A2-III-10, Java y Jakarta EE. El bloque 30 aporta el encuadre de Java/web; se comprueba por separado la función actual de Faces y AJAX.' },
  2219: { topics: ['A1-64', 'A2-II-5', 'A2-III-4'], docs: ['databases'], detail: 'A1-64/A2-II-5 y A2-III-4 recogen SGBD, transacciones y concurrencia. El bloque 29 aporta contexto de bases de datos; las propiedades se contrastan con documentación primaria de SGBD.' },
  2220: { topics: ['A1-58', 'A2-II-6'], docs: ['systems'], detail: 'A1-58/A2-II-6 cubren arquitectura distribuida, cliente-servidor e interoperabilidad. El bloque 30 ofrece contexto de tecnologías de sistemas; cada mecanismo se verifica con su especificación o documentación técnica.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las ${calls}. La academia se usa para encuadre curricular; las respuestas se sustentan en fuentes técnicas primarias.`;
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
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2216–2220.');
