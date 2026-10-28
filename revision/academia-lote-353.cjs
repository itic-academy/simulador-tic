const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-353.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  commerce: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Tema 78 Comercio electrónico y factura electrónica, versión 2026.2' }
};
const map = {
  2081: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 incluye la factura electrónica y su régimen ante el sector público; la cuantía, sujetos y potestad de exclusión se comprueban en el art. 4.1 de Ley 25/2013.' },
  2082: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 cubre formatos de factura electrónica; la identificación de Facturae para el canal B2G se contrasta con el portal oficial de Facturae y Ley 25/2013.' },
  2083: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 desarrolla Facturae y facturación electrónica; las extensiones permitidas se contrastan con el portal oficial Facturae y las condiciones de aprobación de la Orden HAP/1074/2014.' },
  2084: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 abarca el formato y versiones de factura electrónica; la fecha de aprobación, publicación y aceptación se contrasta con BOE y los portales oficiales de Facturae y FACe.' },
  2085: { topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 trata factura electrónica en las Administraciones; la obligación de punto general y las reglas de adhesión se verifican en los arts. 6 y DA 5.ª de Ley 25/2013.' }
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
console.log('Cotejo del material académico, temario oficial y convocatorias actualizado para IDs 2081–2085.');
