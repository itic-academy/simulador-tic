const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-357.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  commerce: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Comercio electrónico y factura electrónica, versión 2026.2 (16-09-2026)' }
};
const map = {
  2101: { topics: ['A1-78', 'A2-I-10'], detail: 'El Tema 78 cubre comercio electrónico y factura electrónica; A2-I-10 permite ubicar el formato como parte de los servicios comunes de Administración electrónica. La denominación histórica AEAT-CCI se coteja con la ficha institucional de facturae CARM.' },
  2102: { topics: ['A1-78'], detail: 'XMT se clasifica en el Tema 78 por el contraste didáctico con formatos comerciales electrónicos; su identificación como sintaxis de escenas multimedia MPEG-4 se verifica con ISO/IEC 14496-11 y Library of Congress.' },
  2103: { topics: ['A1-78', 'A2-I-10'], detail: 'El Tema 78 comprende mecanismos de pago electrónico; A2-I-10 incluye las infraestructuras y servicios comunes de eAdministración. La expansión de NRC se verifica en AEAT y su uso en ePago en la ficha PAe/CTT.' },
  2104: { topics: ['A1-78', 'A2-I-10'], detail: 'El Tema 78 comprende pasarelas de pago y A2-I-10 recoge servicios comunes de eAdministración; los requisitos del certificado de servidor y la naturaleza centralizada de ePago se cotejan con la ficha en producción de PAe/CTT.' },
  2105: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78, factura electrónica B2G; A2-I-10, servicios compartidos entre Administraciones. El alcance de versiones aceptadas se verifica en BOE y portal oficial Facturae, no en el material de academia.' }
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
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; §§3–4 y 7–8 sobre factura electrónica y pagos; cotejo curricular, no fuente normativa.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy, temas oficiales A1/A2 y convocatorias actualizado para IDs 2101–2105.');
