const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-253.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  firma: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  tech: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  security: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, versión 2026.1 (30-09-2026)'},
  images: {url: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk', label: 'ITIC Academy, bloque 37 Imágenes, OCR, biometría y gestión de contenidos, versión 2026.1 (18-09-2026)'}
};
const mapping = {
  1581: {docs: ['firma'], detail: 'el bloque desarrolla el marco de identificación y firma electrónica y los servicios de confianza (A1-80/81); el texto consolidado del BOE determina las cuantías sancionadoras; A2-I-9 aporta el encaje de identificación y autenticación electrónica', topics: ['A1-80', 'A1-81', 'A2-I-9']},
  1582: {docs: ['hardware'], detail: 'el bloque cubre dispositivos y conectividad de periféricos y el tratamiento de información multimedia (A1-54/56); la especificación IEEE acredita qué era el bus 1394 y su estado histórico', topics: ['A1-54', 'A1-56']},
  1583: {docs: ['tech'], detail: 'el bloque cubre Java y la arquitectura Java EE/Jakarta EE y aplicaciones web (A1-67, A2-III-10/III-12); la especificación Servlet 6.1 y su API definen los elementos exactos', topics: ['A1-67', 'A2-III-10', 'A2-III-12']},
  1584: {docs: ['security'], detail: 'el bloque incluye técnicas criptográficas, protocolos seguros, IPsec y VPN (A1-125 y A2-IV-12); el RFC 7296 determina el intercambio DH de IKEv2', topics: ['A1-125', 'A2-IV-12']},
  1585: {docs: ['hardware', 'images'], detail: 'los bloques sitúan las interfaces de periféricos y los formatos de imagen/compresión en conectividad y tratamiento multimedia (A1-56); las especificaciones históricas y la Library of Congress fijan autoría, paleta, LZW y caducidad de patentes', topics: ['A1-56']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial contrastada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia orienta la clasificación; la evidencia técnica o normativa primaria sustenta la respuesta.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1581–1585.');
