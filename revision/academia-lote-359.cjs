const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-359.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  commerce: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Comercio electrónico y factura electrónica, versión 2026.2 (16-09-2026)' }
};
const map = {
  2111: { topics: ['A1-78'], detail: 'Tema 78: comercio electrónico y negociación electrónica de deuda; se delimita SEND como sistema de negociación en mercado secundario.' },
  2112: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: factura electrónica en contratación pública; A2-I-10: servicios comunes de administración electrónica y facturación pública.' },
  2113: { topics: ['A1-78'], detail: 'Tema 78: intercambio electrónico de datos en comercio; se distingue el catálogo de mensajes UN/EDIFACT de mensajes HL7.' },
  2114: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: factura electrónica; A2-I-10: registro contable y servicios comunes relacionados con la recepción de facturas.' },
  2115: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: factura electrónica; A2-I-10: punto general de entrada y portal común de proveedores.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  assert.ok(m.topics.every(t => official.has(t)), `Tema oficial inexistente para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(t => t.startsWith('A2-'));
  q.clasificacion.bloque_academia = `${docs.commerce.label}; ${m.detail}`;
  const calls = 'Programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los programas oficiales y las convocatorias ${calls}. La academia orienta el encaje curricular, no es autoridad para la respuesta.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: docs.commerce.url, referencia: `${docs.commerce.label}; bloque 35, §§3–4 y 7–8 sobre comercio y factura electrónica; cotejo curricular, no fuente normativa.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy, temas oficiales A1/A2 y convocatorias actualizado para IDs 2111–2115.');
