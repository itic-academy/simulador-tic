const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-354.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  commerce: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Tema 78 Comercio electrónico y factura electrónica, versión 2026.2' }
};
const map = {
  2086: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 comprende factura electrónica en relaciones B2G; la identificación de los tres roles DIR3 se coteja con el manual de FACe y la Ley 25/2013.' },
  2087: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 cubre comercio electrónico y formatos de intercambio; la naturaleza general de UBL como biblioteca de documentos XML de negocio se contrasta con el estándar OASIS UBL 2.4.' },
  2088: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 incluye mecanismos de pago en comercio electrónico; SET se clasifica como antecedente histórico y su funcionamiento se verifica contra la especificación original Visa/MasterCard, no como método de pago actual.' },
  2089: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 comprende formatos y firma de factura electrónica; la sintaxis XML y los perfiles XAdES se cotejan con el portal y la política de firma oficiales de Facturae.' },
  2090: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 incluye facturación electrónica en el sector público; la obligación de conservación y sus requisitos se comprueban en los arts. 19–21 del Reglamento de facturación.' }
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
console.log('Cotejo curricular ITIC Academy, temario oficial y convocatorias actualizado para IDs 2086–2090.');
