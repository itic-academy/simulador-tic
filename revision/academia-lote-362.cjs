const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-362.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Comercio electrónico y factura electrónica, versión 2026.2 (16-09-2026)' };
const map = {
  2126: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: firma y formatos de factura electrónica; A2-I-10: interoperabilidad y recepción de facturas en los servicios comunes del sector público.' },
  2127: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: factura electrónica B2G; A2-I-10: control y auditoría del registro contable de facturas como servicio administrativo común.' },
  2128: { topics: ['A1-78', 'A2-I-10'], detail: 'Tema 78: formato y firma de factura-e; A2-I-10: puntos generales de entrada e interoperabilidad entre Administración y proveedores.' },
  2129: { topics: ['A1-78'], detail: 'Tema 78: alcance jurídico de servicios y contratación en línea bajo la LSSI.' },
  2130: { topics: ['A1-78', 'A2-I-9'], detail: 'Tema 78: comunicaciones comerciales electrónicas; A2-I-9: consentimiento y oposición para tratamiento promocional de datos.' }
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
  const calls = 'Programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los programas oficiales y las convocatorias ${calls}. El temario de academia orienta el alcance, no reemplaza la normativa vigente.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy.url, referencia: `${academy.label}; bloque 35, §§3–4 y 7–8 sobre Facturae, firma y comercio electrónico; cotejo curricular, no fuente normativa.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy, temas oficiales y convocatorias actualizado para IDs 2126–2130.');
