const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-258.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  soa: {url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026 V2 (26-09-2026)'},
  security: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, versión 2026.1 (30-09-2026)'},
  data: {url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1606: {docs: ['hardware'], detail: 'el bloque aborda almacenamiento, discos y configuraciones RAID, en relación con el almacenamiento de grandes sistemas (A1-56) y arquitecturas/administración del almacenamiento (A2-IV-5)', topics: ['A1-56', 'A2-IV-5']},
  1607: {docs: ['soa'], detail: 'el bloque de arquitectura SOA y sistemas distribuidos orienta los servicios web, interoperabilidad, SOAP, WSDL y UDDI (A1-58 y A2-II-6)', topics: ['A1-58', 'A2-II-6']},
  1608: {docs: ['security'], detail: 'el bloque de seguridad aborda evaluación de riesgos, herramientas y auditoría; PingCastle es una herramienta concreta para evaluar Active Directory (A1-47 y A2-II-11)', topics: ['A1-47', 'A2-II-11']},
  1609: {docs: ['data'], detail: 'el bloque de estructuras y ciencia de datos orienta la clasificación en el programa A2, que incluye expresamente tipos abstractos y estructuras de datos (A2-III-5); no se fuerza una correspondencia A1 específica', topics: ['A2-III-5']},
  1610: {docs: ['hardware'], detail: 'el bloque trata almacenamiento y tratamiento de información multimedia (A1-56), además de arquitecturas y memoria de sistemas (A2-II-1) y almacenamiento (A2-IV-5)', topics: ['A1-56', 'A2-II-1', 'A2-IV-5']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial contrastada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia orienta la clasificación; las fuentes técnicas primarias determinan las respuestas.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1606–1610.');
