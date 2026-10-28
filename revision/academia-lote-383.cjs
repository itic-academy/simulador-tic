const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-383.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1' },
  security: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29, Bases de datos, SQL y modelado, versión 2026.1' }
};
const map = {
  2231: { topics: ['A1-65', 'A1-77', 'A2-III-12'], docs: ['systems'], detail: 'A1-65 recoge scripts de cliente y aplicaciones web; A1-77, tecnologías web y compatibilidad; A2-III-12, aplicaciones y tecnologías de desarrollo web. El bloque 30 contextualiza AJAX y desarrollo cliente-servidor.' },
  2232: { topics: ['A1-66', 'A2-III-11'], docs: ['systems'], detail: 'A1-66/A2-III-11 incluyen plataforma y entorno .NET. El bloque 30 cubre Microsoft .NET y desarrollo web; WPF y ASP.NET se verifican con documentación vigente de Microsoft.' },
  2233: { topics: ['A1-79', 'A2-IV-12'], docs: ['security'], detail: 'A1-79/A2-IV-12 incluyen cifrado y técnicas criptográficas. El bloque 36 desarrolla RSA, cifrado simétrico y asimétrico; la clasificación concreta se verifica por separado con NIST y literatura técnica.' },
  2234: { topics: ['A1-79', 'A1-80', 'A2-I-6', 'A2-IV-12'], docs: ['security'], detail: 'A1-79/80 y A2-I-6/IV-12 cubren criptografía, identidad, certificados y firma electrónica. El bloque 36 distingue firma de cifrado y explica la vinculación de claves a identidades; el detalle técnico y jurídico se contrasta con NIST/eIDAS.' },
  2235: { topics: ['A1-64', 'A2-III-4'], docs: ['databases'], detail: 'A1-64/A2-III-4 incluyen modelo relacional, diseño de bases de datos y normalización. El bloque 29 define superclave como conjunto identificador no necesariamente mínimo y distingue clave candidata mínima.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las ${calls}. La academia se usa para encuadre curricular; la respuesta se fundamenta en las fuentes técnicas primarias citadas.`;
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
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2231–2235.');
