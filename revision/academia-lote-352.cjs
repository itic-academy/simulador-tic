const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-352.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  info: { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', label: 'ITIC Academy, bloque 03 Actuación administrativa y Administración digital, versión 2026' },
  commerce: { url: 'https://drive.google.com/file/d/1FPkzhljZaHbxADbo36QNm9U9gwGy7lIt/view?usp=drivesdk', label: 'ITIC Academy, bloque 35, Tema 78 Comercio electrónico y factura electrónica, versión 2026.2' }
};
const map = {
  2076: { doc: 'commerce', topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 cubre la factura electrónica; el ámbito y la fecha efectiva del deber de uso se determinan en Ley 25/2013, art. 4 y DF 8.ª.' },
  2077: { doc: 'commerce', topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 incluye facturación electrónica; la identificación y vigencia del reglamento se cotejan directamente con el BOE.' },
  2078: { doc: 'commerce', topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 trata factura electrónica y su marco; los medios actuales de autenticidad/integridad y sus cambios de 2026 se verifican en el Reglamento de facturación consolidado.' },
  2079: { doc: 'commerce', topics: ['A1-78', 'A2-I-9'], detail: 'El Tema 78 cubre factura electrónica en el sector público; el plazo legal exacto de registro se comprueba en Ley 25/2013, art. 3.' },
  2080: { doc: 'info', topics: ['A1-22'], detail: 'El bloque incluye legislación europea y española de sociedad de la información; la vigencia modificada de la Directiva se coteja en EUR-Lex.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  assert.ok(m.topics.every(t => official.has(t)), `Tema oficial inexistente para ${c.id}`);
  const d = docs[m.doc];
  q.clasificacion.A1 = m.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(t => t.startsWith('A2-'));
  q.clasificacion.bloque_academia = `${d.label}; ${m.detail}`;
  const calls = 'Convocatorias oficiales A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262, cotejadas con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el temario oficial y las convocatorias ${calls}. El material académico sirve para alcance curricular, no sustituye la fuente primaria.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; cotejo del epígrafe relevante y del alcance curricular, no fuente normativa.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 2076–2080.');
