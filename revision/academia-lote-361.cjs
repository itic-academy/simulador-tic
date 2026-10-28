const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-361.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Comercio electrónico y factura electrónica, versión 2026.2 (16-09-2026)' };
const map = {
  2121: { topics: ['A1-78'], detail: 'Tema 78: tecnologías de pago electrónico; clasificación curricular asignada al área, manteniendo pendiente de fuente primaria la identificación de «Urbinet».' },
  2122: { topics: ['A1-78', 'A2-I-9'], detail: 'Tema 78: comunicaciones comerciales por medios electrónicos; A2-I-9: protección de datos, consentimiento y oposición en el tratamiento promocional.' },
  2123: { topics: ['A1-78'], detail: 'Tema 78: arquitectura de comercio electrónico, intermediación de pagos y separación de responsabilidades de aplicación.' },
  2124: { topics: ['A1-78'], detail: 'Tema 78: soluciones de pago por tarjeta, autenticación y protocolos/especificaciones de comercio electrónico.' },
  2125: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: factura electrónica B2G; A2-I-10: servicios comunes y punto de entrada de facturas electrónicas.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  assert.ok(m.topics.every(t => official.has(t)), `Tema oficial inexistente para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(t => t.startsWith('A2-'));
  q.clasificacion.bloque_academia = `${academy.label}; ${m.detail}`;
  const officialCalls = 'Programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los programas oficiales y las convocatorias ${officialCalls}. La academia orienta el alcance curricular, no acredita la exactitud jurídica o técnica.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy.url, referencia: `${academy.label}; bloque 35, §§3–4 y 7–8 sobre comercio electrónico, pagos y factura; referencia curricular, no normativa.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy, temas oficiales y convocatorias actualizado para IDs 2121–2125.');
