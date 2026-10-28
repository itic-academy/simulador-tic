const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-358.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  commerce: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Comercio electrónico y factura electrónica, versión 2026.2 (16-09-2026)' }
};
const map = {
  2106: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: factura electrónica Facturae; A2-I-10: infraestructura común para su recepción por el sector público. Formato y perfil de firma contrastados con Facturae y la Orden PRE/2971/2007.' },
  2107: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: uso y umbral de exclusión de factura-e B2G; A2-I-10: servicios compartidos de Administración electrónica. Umbral y sujetos obligados se verifican en el texto consolidado de la Ley 25/2013.' },
  2108: { topics: ['A1-78'], detail: 'Tema 78 recoge mecanismos de pago y comercio electrónico; SET se conserva únicamente como protocolo histórico de pagos con tarjeta, contrastado con la especificación SET y el glosario IETF.' },
  2109: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: firma de factura electrónica; A2-I-10: intercambio interoperable de facturas electrónicas. La transformación se coteja con la política oficial Facturae v3.1.' },
  2110: { topics: ['A1-78'], detail: 'Tema 78: métodos de pago para comercio electrónico. Se distingue el método/cartera Apple Pay de una pasarela comercial, usando las guías oficiales de Apple, Redsys, Stripe y PayPal.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  assert.ok(m.topics.every(t => official.has(t)), `Tema oficial inexistente para ${c.id}`);
  const d = docs.commerce;
  q.clasificacion.A1 = m.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(t => t.startsWith('A2-'));
  q.clasificacion.bloque_academia = `${d.label}; ${m.detail}`;
  const calls = 'Programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los programas oficiales y las convocatorias ${calls}. La academia orienta el encaje curricular, no es autoridad para la respuesta.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; §§3–4 y 7–8 sobre factura electrónica, firma y mecanismos de pago; cotejo curricular, no fuente normativa.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy, temas oficiales A1/A2 y convocatorias actualizado para IDs 2106–2110.');
