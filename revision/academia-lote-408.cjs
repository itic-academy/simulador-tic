const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-408.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  mobility: { url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', label: 'ITIC Academy, bloque 46 «Redes inalámbricas y movilidad», versión 2026: incluye gestión MDM/EMM/UEM y seguridad de dispositivos.' },
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», edición 2026: medios y cableado, medios de transmisión, fibra óptica y redes de telecomunicaciones.' },
  structure: { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', label: 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», edición 2026.1: modelado de procesos y análisis dinámico (A1-90).' },
  web: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 de tecnologías web y sistemas de información: encuadre general de infraestructura y tecnologías de aplicaciones web.' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 «Sistemas operativos», versión 2026.1: Linux y administración de sistemas operativos.' },
  db: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 «Bases de datos y SQL», versión 2026.1: sistemas de gestión de bases de datos y MySQL como contexto de la pila web.' }
};
const mapping = {
  2356: { topics: ['A1-54', 'A1-124', 'A2-IV-15'], docs: ['mobility'], detail: 'La pregunta trata de gestión y seguridad de aplicaciones/dispositivos móviles: A1-54/A1-124 y el epígrafe específico A2-IV-15 (MDM/EMM/UEM).' },
  2357: { topics: ['A1-108', 'A1-110', 'A1-118', 'A2-IV-7'], docs: ['networks'], detail: 'Medios de transmisión y cableado de redes: A1-108/110/118 y A2-IV-7.' },
  2358: { topics: ['A1-90', 'A2-III-2'], docs: ['structure'], detail: 'Se encuadra en modelado de procesos/análisis dinámico (A1-90) y en metodologías de desarrollo (A2-III-2), sin atribuir al programa A2 el nombre de la notación de Métrica.' },
  2359: { topics: ['A1-108'], docs: ['networks'], detail: 'Se clasifica solo como contexto histórico general de telecomunicaciones (A1-108); no se fuerza un tema A2 específico ni se afirma que el programa incluya la historia de la UIT.' },
  2360: { topics: ['A1-60', 'A1-69', 'A2-II-2', 'A2-III-12'], docs: ['os', 'db', 'web'], detail: 'La pila se sitúa en sistemas Linux, software abierto y aplicaciones web. No se localizó en Drive un tema unitario dedicado a LAMP; se cotejaron por separado los materiales de sistemas operativos, bases de datos y tecnologías web.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = ['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c => c.id), [2356, 2357, 2358, 2359, 2360]);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id), m = mapping[change.id];
  assert.ok(q?.revision && m, `Falta pregunta o cotejo ${change.id}`);
  assert.ok(m.topics.every(x => official.has(x)), `Tema oficial inexistente: ${change.id}`);
  q.clasificacion.A1 = m.topics.filter(x => x.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(x => x.startsWith('A2-'));
  const curriculum = `${m.docs.map(k => docs[k].label).join(' ')} ${m.detail}`;
  const links = m.docs.map(k => docs[k].url).join('; ');
  const note = `Cotejo curricular: ${curriculum} Documentos Drive: ${links}. Correspondencia comprobada en revision/temario-oficial.json y los anexos de las convocatorias A1 y A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). Academy sirve como encuadre curricular; las respuestas se basan en las referencias técnicas primarias.`;
  q.clasificacion.bloque_academia = `${links} — ${curriculum}`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 408 completado.');
