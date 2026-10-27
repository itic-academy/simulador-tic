const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-260.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  technology: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'},
  trust: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1 (17-09-2026)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1616: {docs: ['technology'], detail: 'el bloque de tecnologías y estándares de información orienta la interoperabilidad de formatos XML/documentales (A1-77); no se atribuye a la academia la certificación de la norma ISO', topics: ['A1-77']},
  1617: {docs: ['trust'], detail: 'el bloque cubre certificados, identificación y firma electrónica; la validez de copias en papel se fundamenta en el art. 27.3.c de la Ley 39/2015 (A1-80/A1-81/A2-I-6)', topics: ['A1-80', 'A1-81', 'A2-I-6']},
  1618: {docs: ['technology'], detail: 'el bloque ofrece contexto de desarrollo y lenguajes, pero no se usa como fuente para caracterizar C++; el encaje oficial más próximo es el epígrafe A2 sobre fundamentos de tipos y programación (A2-III-5), sin equivalencia A1 específica para C++', topics: ['A2-III-5']},
  1619: {docs: ['hardware'], detail: 'el bloque estudia almacenamiento, discos y RAID; el encaje oficial es A1-56/A2-IV-5', topics: ['A1-56', 'A2-IV-5']},
  1620: {docs: ['technology'], detail: 'el bloque aborda blockchain/DLT; A1-85 menciona expresamente algoritmos de consenso. PoH se distingue de Tower BFT con documentación primaria de Solana', topics: ['A1-85']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial contrastada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ') || 'sin epígrafe específico'} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia orienta la clasificación; no sustituye las fuentes primarias.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1616–1620.');
