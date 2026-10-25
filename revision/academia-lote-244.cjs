const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-244.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  firma: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'},
  redes: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 Redes, actualización 2026'},
  seguridad: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026'},
  gestion: {url: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk', label: 'ITIC Academy, bloque 9 Organización y Gestión de los Sistemas de Información, versión 2026.3 (01-10-2026)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1536: {doc: 'firma', detail: 'apartado de firmas XML/servicios de confianza: XML Signature contempla las modalidades enveloped, enveloping y detached', topics: ['A1-80', 'A2-I-6']},
  1537: {doc: 'seguridad', detail: 'seguridad perimetral, DMZ, control de accesos y seguridad de redes; el bloque 42 aporta el contexto de implantación de intranets/extranets', topics: ['A1-119', 'A1-125', 'A2-IV-12']},
  1538: {doc: 'gestion', detail: '§2.3 Colas, tráfico y continuidad: definición y distinción de RPO, RTO, MTD y ROL; bloque 26 incluye copia de seguridad, RTO/RPO y recuperación', topics: ['A1-128', 'A2-IV-6']},
  1539: {doc: 'gestion', detail: '§2.3 Colas, tráfico y continuidad: BIA, tolerancia a interrupción y MTD; bloque 26 trata recuperación, RTO/RPO y continuidad de centros/sistemas', topics: ['A1-128', 'A2-IV-6']},
  1540: {doc: 'hardware', detail: 'apartados de copias de seguridad, RTO/RPO, alta disponibilidad y recuperación ante desastres; bloque 9 §2.3 distingue RTO, RPO, MTD y ROL', topics: ['A1-53', 'A1-128', 'A2-IV-6']}
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of row.topics) assert.ok(topics.has(topic), `Tema oficial inexistente: ${topic}`);
  const doc = docs[row.doc];
  const source = {url: doc.url, referencia: `${doc.label}; ${row.detail}; correspondencia cotejada con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262.`};
  const note = `Cotejo curricular: ${doc.label}; ${row.detail}. La correspondencia con los temas oficiales ${row.topics.join(', ')} se contrastó con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. Para 1537 se consultó además el bloque 42 Redes, §10 (Intranet y Extranet). El material de academia se emplea para encaje curricular, no como evidencia normativa o criterio para declarar correcta la clave.`;
  question.clasificacion.bloque_academia = `${doc.label}; ${row.detail}.`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(source);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales A1/A2 añadido para 1536–1540.');
