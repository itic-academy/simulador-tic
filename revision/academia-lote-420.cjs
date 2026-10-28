const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-420.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  architecture: {
    url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',
    label: 'ITIC Academy, bloque «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25/09/2026): desarrolla procesamiento distribuido, middleware y cliente-servidor; conserva CORBA como ejemplo histórico de arquitectura distribuida basada en objetos/componentes.'
  },
  database: {
    url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026): cubre A1 temas 63–64 y A2 T5/D4/C2, incluidas transacciones, concurrencia, modelo relacional, dominios, restricciones y subprogramas almacenados.'
  }
};
const map = {
  2411: { doc: 'architecture', topics: ['A1-58', 'A2-II-6'], detail: 'Middleware e invocación dinámica en arquitectura distribuida; se marca el ejemplo CORBA como histórico.' },
  2412: { doc: 'database', topics: ['A1-63', 'A2-II-5', 'A2-III-4'], detail: 'Propiedades ACID y separación conceptual respecto de la concurrencia y sus mecanismos de control.' },
  2413: { doc: 'database', topics: ['A1-63'], detail: 'Modelos y estructuras de organización de bases de datos jerárquicas.' },
  2414: { doc: 'database', topics: ['A1-63', 'A2-IV-2'], detail: 'Subprogramas PL/SQL almacenados y administración de objetos de base de datos.' },
  2415: { doc: 'database', topics: ['A1-64', 'A2-II-5'], detail: 'Fundamentos del modelo relacional: atributos, dominios y restricciones de valores.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2411,2412,2413,2414,2415') throw new Error('El lote 420 no coincide con los IDs esperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error(`Falta revisión para ${c.id}`);
  if (!m.topics.every(topic => valid.has(topic))) throw new Error(`Tema no oficial para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(topic => topic.startsWith('A2-'));
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia contrastada con revision/temario-oficial.json y los anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). El material de academia encuadra el temario; la respuesta se justifica con documentación técnica primaria.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 420 completado.');
