const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-356.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  commerce: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Comercio electrónico y factura electrónica, versión 2026.2 (16-09-2026)' }
};
const map = {
  2096: { topics: ['A1-78'], detail: 'El Tema 78 incluye comercio electrónico, mecanismos de pago y gestión del negocio; el carácter descentralizado de Bitcoin se verifica con su documento fundacional, no con el apunte de academia.' },
  2097: { topics: ['A1-78', 'A2-I-10'], detail: 'El Tema 78 incluye factura electrónica y el programa A2-I-10 recoge infraestructuras/servicios comunes para Administración electrónica; la opción Facturae se funda en la Ley 25/2013 y el portal oficial.' },
  2098: { topics: ['A1-78', 'A2-I-10'], detail: 'El Tema 78 incluye factura electrónica y el programa A2-I-10, los servicios comunes de Administración electrónica; se distingue la plataforma FACe del portal de proveedores renovado en febrero de 2026.' },
  2099: { topics: ['A1-78', 'A2-I-10'], detail: 'El Tema 78 cubre factura electrónica B2G y A2-I-10 la cooperación/infraestructura común entre AAPP; la adhesión de CCAA y entidades locales al punto estatal se verifica en la Ley 25/2013.' },
  2100: { topics: ['A1-78', 'A2-I-10'], detail: 'El Tema 78 incluye pasarelas de pago y mecanismos de pago; A2-I-10 comprende servicios comunes de eAdministración. La respuesta se limita al sistema NRC actualmente regulado, distinguiéndolo de su criptografía histórica.' }
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
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; §§3–4 y 7–8 para mecanismo de pago, factura electrónica y FACe; cotejo curricular, no fuente normativa.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy, temas oficiales A1/A2 y convocatorias actualizado para IDs 2096–2100.');
