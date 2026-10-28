const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-370.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas operativos, versión 2026' },
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1' }
};
const map = {
  2166: { topics: ['A1-61', 'A2-II-2'], docs: ['os'], detail: 'A1-61 y A2-II-2 tratan sistemas operativos y memoria virtual; el bloque 27 de academia aborda sistemas Microsoft. Las consecuencias del paging se contrastan con documentación Microsoft Learn.' },
  2167: { topics: ['A1-67', 'A2-II-3'], docs: ['systems'], detail: 'A1-67 comprende el entorno Java y A2-II-3 las características y lenguajes de programación. El bloque 30 contextualiza Java y su entorno; seguridad y ciclo histórico de Java Web Start se verifican con documentación Oracle.' },
  2168: { topics: ['A1-64', 'A2-II-5', 'A2-III-4'], docs: ['databases'], detail: 'A1-64 cubre el modelo relacional; A2-II-5 incluye SGBD relacionales y A2-III-4 problemas de concurrencia. El bloque 29 trata aislamiento y consistencia de transacciones; la definición de lectura fantasma se contrasta con PostgreSQL.' },
  2169: { topics: ['A1-61', 'A2-II-2'], docs: ['os'], detail: 'A1-61 y A2-II-2 abarcan fundamentos y administración de sistemas operativos. El bloque 27 trata memoria virtual y sistemas Microsoft; la función del administrador de memoria se comprueba con Microsoft Learn.' },
  2170: { topics: ['A1-63', 'A1-66', 'A2-II-5', 'A2-III-11'], docs: ['databases', 'systems'], detail: 'A1-63/A2-II-5 cubren los SGBD y el acceso a datos; A1-66/A2-III-11, la plataforma .NET. Los bloques 29 y 30 encuadran bases de datos y tecnologías .NET; la descripción exacta de ADO.NET se verifica con Microsoft Learn.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los materiales de academia indicados y con los programas oficiales de las convocatorias ${calls}. El material de academia aporta contexto curricular; la respuesta se apoya en las fuentes técnicas primarias citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo curricular. Material de academia utilizado para encuadre, no como autoridad técnica.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 vigente consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI vigente consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2166–2170.');
