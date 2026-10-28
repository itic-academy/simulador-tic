const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-349.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  analysis: { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', label: 'ITIC Academy, Bloque 38 Análisis, diseño y construcción de sistemas de información, edición 2026' },
  mobile: { url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', label: 'ITIC Academy, Bloque 47 Aplicaciones móviles y sistemas operativos, versión 2026.1' },
  database: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, Bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1' },
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, Bloque 42 Redes, actualización 2026' }
};
const map = {
  2061: { doc: 'analysis', topics: ['A1-88', 'A1-89', 'A2-III-1', 'A2-III-3'], detail: 'El bloque incluye análisis funcional, metodologías, análisis de dominio y modelado de sistemas; se coteja el encaje sin sustituir la obra de Yourdon.' },
  2062: { doc: 'mobile', topics: ['A1-65', 'A1-124', 'A2-III-14'], detail: 'El bloque trata aplicaciones móviles y sus características; el gesto de actualización se contrasta directamente con Apple HIG.' },
  2063: { doc: 'database', topics: ['A1-64', 'A2-III-4'], detail: 'El bloque abarca modelo relacional, normalización y diseño de bases de datos; la justificación de desnormalización controlada se verificó en documentación de Microsoft.' },
  2064: { doc: 'networks', topics: ['A1-108', 'A2-II-8'], detail: 'El bloque aborda redes, encaminamiento e interconexión; la denominación de PDU por capa se cotejó en el material técnico Cisco.' },
  2065: { doc: 'database', topics: ['A1-89', 'A2-III-4'], detail: 'El bloque cubre modelado de dominio y modelo entidad-relación; IBM confirma expresamente que el diagrama E-R es un modelo conceptual de datos.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  const a1 = m.topics.filter(t => t.startsWith('A1-')), a2 = m.topics.filter(t => t.startsWith('A2-'));
  assert.deepEqual(q.clasificacion.A1, a1);
  assert.deepEqual(q.clasificacion.A2, a2);
  assert.ok(m.topics.every(t => official.has(t)));
  const d = docs[m.doc];
  const calls = 'Convocatorias oficiales A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262, cotejadas con revision/temario-oficial.json';
  q.clasificacion.bloque_academia = `${d.label}; ${m.detail}`;
  q.clasificacion.nota = `Correspondencia curricular comprobada con ${calls}. El material de academia se utiliza para el alcance temático; las respuestas se verifican con fuentes técnicas primarias. ${c.actualizada.revision.observaciones}`;
  q.revision.observaciones = q.clasificacion.nota;
  q.comentarios = q.clasificacion.nota;
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; cotejo del temario y epígrafes cubiertos.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia, temario oficial y convocatorias anotado para IDs 2061–2065.');
