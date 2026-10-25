const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-248.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  firma: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'},
  ia: {url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, versión 2026.1 (31-08-2026)'},
  datos: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1'},
  tecnologia: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (26-09-2026)'}
};
const mapping = {
  1556: {docs: ['firma'], detail: 'firma electrónica avanzada, requisitos del artículo 26 eIDAS y certificados; el bloque académico incluye marco europeo y nacional', topics: ['A1-80', 'A1-81', 'A2-I-6']},
  1557: {docs: ['ia'], detail: 'visión artificial, OCR y clasificación estadística de vectores; el material académico trata OCR como aplicación de visión artificial', topics: ['A1-70', 'A2-III-5']},
  1558: {docs: ['datos'], detail: 'propiedades ACID, atomicidad de transacciones y semántica COMMIT/ROLLBACK', topics: ['A1-63', 'A1-64', 'A2-II-5', 'A2-III-4']},
  1559: {docs: ['tecnologia'], detail: 'blockchain, Ethereum y smart contracts, incluidos en el bloque académico de tecnologías de sistemas; el programa oficial A1 lo recoge expresamente en A1-85. No se atribuye una correspondencia A2 directa que el temario no contiene', topics: ['A1-85']},
  1560: {docs: ['firma'], detail: 'certificados X.509 y PKI; el temario académico cubre los campos del certificado y el programa oficial incluye certificados digitales en identidad y firma', topics: ['A1-80', 'A2-I-6']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  for (const topic of row.topics) assert.ok(official.has(topic), `Cotejo oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial cotejada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail} Correspondencia con ${row.topics.join(', ') || 'ningún tema A2/A1 específico adicional'} verificada en revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje curricular; las fuentes técnicas o normativas primarias de la ficha sustentan la respuesta.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1556–1560.');
