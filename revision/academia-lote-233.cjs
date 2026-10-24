const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-233.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  database: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
  systems: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  mobile: {url: 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk', label: 'ITIC Academy, bloque 47 Aplicaciones Móviles y Sistemas Operativos, versión 2026.1 (30-09-2026)'},
  security: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, actualización 2026'}
};
const mapping = {
  1481: {doc: 'database', detail: 'modelo relacional y SQL, aislamiento transaccional', topics: ['A1-64', 'A2-II-5']},
  1482: {doc: 'systems', detail: 'desarrollo web, HTTP, servicios y protocolos; la definición de WebDAV se sustenta en RFC 4918', topics: ['A1-65', 'A1-109', 'A2-II-6', 'A2-IV-13']},
  1483: {doc: 'systems', detail: 'entorno Microsoft .NET y tecnologías de desarrollo', topics: ['A1-66', 'A2-II-3']},
  1484: {doc: 'mobile', detail: 'sistemas móviles y sus plataformas; bloque 30, Java/Java ME como contexto de desarrollo histórico', topics: ['A1-62', 'A1-67', 'A2-II-2', 'A2-II-3']},
  1485: {doc: 'systems', detail: '§2.4 JavaScript/ECMAScript y lenguajes/plataformas Java', topics: ['A1-65', 'A1-67', 'A2-II-3']}
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const row = mapping[c.id];
  const doc = docs[row?.doc];
  if (!q?.revision || !doc || !row) throw new Error(`Falta revisión o mapeo académico ${c.id}`);
  const topicLabels = row.topics.join('/');
  const note = `${doc.label}, ${row.detail}; temas oficiales contrastados en temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2): ${topicLabels}. La academia se usa como encaje curricular y no sustituye la fuente técnica primaria.`;
  if (c.id === 1482) q.respuesta_correcta = 0;
  q.clasificacion.bloque_academia = `${doc.label}, ${row.detail}; correspondencia ${topicLabels}.`;
  q.clasificacion.nota = note;
  if (!q.revision.observaciones.includes(note)) q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(f => f.url === doc.url)) q.revision.fuentes.push({url: doc.url, referencia: `${doc.label}, ${row.detail}; correspondencia ${topicLabels}`});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy y temario oficial añadido a los IDs 1481–1485.');
