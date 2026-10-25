const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-247.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  sistemas: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'},
  datos: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1'},
  hardware: {url: 'https://docs.google.com/document/d/1i7gM8fFljlK2jLDlCxr_h0titV5bPo5U/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  firma: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'}
};
const mapping = {
  1551: {docs: ['sistemas'], detail: 'fundamentos de procesos, concurrencia y sincronización; corresponde a sistemas operativos y algoritmos concurrentes', topics: ['A1-59', 'A2-II-2', 'A2-III-5']},
  1552: {docs: ['datos'], detail: 'modelado de dominio y entidad-relación, dominios de valores y modelo relacional', topics: ['A1-63', 'A1-64', 'A1-89', 'A2-II-5', 'A2-III-4']},
  1553: {docs: ['hardware'], detail: 'arquitectura y procesamiento de instrucciones en procesadores; encaje en sistemas de altas prestaciones y tecnologías actuales de computadores', topics: ['A1-52', 'A2-II-1']},
  1554: {docs: ['datos'], detail: 'sentencias SQL, subconsultas, comparaciones por filas y modelado relacional', topics: ['A1-64', 'A2-II-5', 'A2-III-4']},
  1555: {docs: ['firma'], detail: 'protocolos de directorio LDAP/X.500, identificación digital y estándares de la serie X.500', topics: ['A1-80', 'A2-I-6']}
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of row.topics) assert.ok(topics.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => {
    const doc = docs[key];
    return {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia cotejada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`};
  });
  const curricula = row.docs.map(key => docs[key].label).join(' y ');
  const note = `Cotejo curricular: ${curricula}; ${row.detail}. La correspondencia con los temas oficiales ${row.topics.join(', ')} se contrastó con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje curricular; la fuente técnica o normativa primaria de la ficha fundamenta la revisión.`;
  question.clasificacion.bloque_academia = `${curricula}; ${row.detail}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales A1/A2 añadido para 1551–1555.');
