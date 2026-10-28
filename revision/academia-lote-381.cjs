const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-381.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29, Bases de datos, SQL y modelado' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27, Sistemas operativos' }
};
const map = {
  2221: { topics: ['A1-66', 'A2-III-11'], docs: ['systems'], detail: 'A1-66/A2-III-11 incluyen plataforma .NET. El bloque 30 aporta contexto curricular; la composición exacta de Framework se contrasta con Microsoft Learn.' },
  2222: { topics: ['A1-63', 'A2-II-5'], docs: ['databases'], detail: 'A1-63/A2-II-5 incluyen SGBD y arquitectura de bases de datos. El bloque 29 contextualiza el modelo de datos; los niveles se verifican con la arquitectura ANSI/SPARC publicada por NBS.' },
  2223: { topics: ['A1-77', 'A2-II-9', 'A2-III-12'], docs: ['systems'], detail: 'A1-77/A2-II-9/III-12 incluyen XML, lenguajes de marcado y tecnologías web. El bloque 30 aporta marco de tecnologías web; el alcance de namespaces se comprueba con W3C.' },
  2224: { topics: ['A1-64', 'A2-II-5', 'A2-III-4'], docs: ['databases'], detail: 'A1-64/A2-II-5/A2-III-4 abarcan SGBD relacionales, diseño y normalización. El bloque 29 aporta contexto; la definición de 1FN se verifica con IBM.' },
  2225: { topics: ['A1-59', 'A2-II-2'], docs: ['os'], detail: 'A1-59/A2-II-2 recogen fundamentos y administración de sistemas operativos. El bloque 27 proporciona encuadre de sistemas; se contrasta la definición con materiales universitarios.' }
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
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2221–2225.');
