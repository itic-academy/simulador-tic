const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-245.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  firma: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'},
  datos: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1'},
  dotnet: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026 (incluye Jakarta EE y .NET)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026)'},
  sistemas: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'}
};
const mapping = {
  1541: {doc: 'firma', detail: 'temas de identificación, certificados X.509, directorios X.500/LDAP y firma electrónica', topics: ['A1-80', 'A2-I-6']},
  1542: {doc: 'datos', detail: 'modelado dimensional, datamarts y distinción entre tablas de hechos y dimensiones', topics: ['A1-63', 'A1-64', 'A2-II-5', 'A2-III-4']},
  1543: {doc: 'dotnet', detail: 'entorno Microsoft .NET y distinción entre plataforma de desarrollo y servicios de alojamiento cloud', topics: ['A1-66', 'A2-III-11']},
  1544: {doc: 'datos', detail: 'modelo relacional, claves candidatas/únicas y restricciones de integridad referencial', topics: ['A1-64', 'A2-II-5', 'A2-III-4']},
  1545: {doc: 'hardware', detail: 'virtualización de servidores e hipervisores; bloque 27 aporta el marco de sistemas operativos anfitrión/huésped', topics: ['A1-57', 'A1-132', 'A2-IV-1', 'A2-IV-6']}
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of row.topics) assert.ok(topics.has(topic), `Tema oficial inexistente: ${topic}`);
  const doc = docs[row.doc];
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia cotejada con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262.`};
  const note = `Cotejo curricular: ${doc.label}; ${row.detail}. La correspondencia con los temas oficiales ${row.topics.join(', ')} se contrastó con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. El material de academia orienta el encaje curricular; la verificación de respuesta se apoya en las fuentes primarias de la ficha.`;
  question.clasificacion.bloque_academia = `${doc.label}; ${row.detail}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales A1/A2 añadido para 1541–1545.');
