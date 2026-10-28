const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-377.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29, Bases de datos, SQL y modelado' },
  hardware: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, tecnologías de sistemas y componentes' }
};
const map = {
  2201: { topics: ['A1-62', 'A1-64', 'A2-II-2', 'A2-II-5'], docs: ['systems', 'databases'], detail: 'A1-62/A2-II-2 cubren sistemas operativos y dispositivos móviles; A1-64/A2-II-5, SGBD relacionales y SQL. Los bloques 30 y 29 aportan el marco de sistemas móviles y bases de datos; la compatibilidad y recomendación de Room se comprueban en documentación de Android.' },
  2202: { topics: ['A1-58', 'A1-65', 'A1-67', 'A2-II-6', 'A2-III-10'], docs: ['systems'], detail: 'A1-58 y A2-II-6 recogen procesamiento distribuido, cliente-servidor e interoperabilidad; A1-67/A2-III-10, Java y su arquitectura. El bloque 30 aporta encuadre de tecnologías de sistemas, no autoridad sobre RMI/CORBA.' },
  2203: { topics: ['A1-60', 'A1-69', 'A2-II-2'], docs: ['systems'], detail: 'A1-60/A2-II-2 incluyen Linux y otros sistemas operativos; A1-69, software abierto. El bloque 30 ofrece el contexto de sistemas; la identificación de Phonon se apoya en la documentación primaria de KDE.' },
  2204: { topics: ['A1-57', 'A2-II-1'], docs: ['hardware'], detail: 'A1-57 y A2-II-1 incluyen sistemas grandes, mainframes, superordenadores y arquitecturas de altas prestaciones. El bloque 30 aporta el marco de sistemas, sin resolver la ambigüedad concreta del formato JCL.' },
  2205: { topics: ['A1-57', 'A2-II-1'], docs: ['hardware'], detail: 'A1-57/A2-II-1 tratan arquitecturas de altas prestaciones y escalables. El material de academia se utiliza para encuadre curricular; la distinción entre rendimiento/paralelismo y política de reparto se contrasta con fuentes HPC.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las ${calls}. La academia se utiliza para encuadre curricular; la respuesta se sustenta en las fuentes primarias citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo curricular. Material usado para encuadre, no como autoridad técnica ni fuente normativa.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2201–2205.');
