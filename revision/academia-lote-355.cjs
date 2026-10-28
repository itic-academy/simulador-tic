const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-355.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  commerce: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Tema 78 Comercio electrónico y factura electrónica, versión 2026.2' }
};
const map = {
  2091: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 incluye factura electrónica y mecanismos de garantía de su autenticidad e integridad; el alcance de medios de prueba se contrasta con el Reglamento de facturación consolidado a 2026.' },
  2092: { topics: ['A1-78', 'A2-I-9'], detail: 'La digitalización certificada y su homologación se vinculan con factura y archivo electrónicos; el requisito territorial del desarrollador se funda en la Orden EHA/962/2007 y en la resolución AEAT que la desarrolla.' },
  2093: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 abarca el Reglamento de obligaciones de facturación; la fecha de entrada en vigor y la clasificación de facturas se contrastan directamente con el BOE.' },
  2094: { topics: ['A1-78', 'A2-I-9'], detail: 'La firma XAdES de Facturae se encuadra en los contenidos de factura electrónica y confianza digital del Tema 78; se limita el enunciado al formato estructurado B2G Facturae.' },
  2095: { topics: ['A1-78', 'A2-I-9'], detail: 'PCI DSS se coteja con los mecanismos de pago y seguridad del comercio electrónico del Tema 78; se describe el alcance publicado por PCI SSC, no una obligación legal universal idéntica para todo sujeto.' }
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
  const calls = 'Convocatorias oficiales A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262, cotejadas con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el temario oficial y las convocatorias ${calls}. El material académico sirve para alcance curricular, no como autoridad de respuesta.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; cotejo de epígrafe y cobertura temática, no fuente normativa.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy, temario oficial y convocatorias actualizado para IDs 2091–2095.');
