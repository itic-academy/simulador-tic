const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1481.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));

const protection = 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk';
const admin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const gov = 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk';
const procurement = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const docs = {
  7706: [{ url: protection, title: 'ITIC Academy, bloque 8 Protección de datos, versión 2026.3', detail: 'El bloque incluye LOPDGDD, bloqueo, derechos, responsable y encargado, con correspondencia expresa A1-27 y A2-I-7; sirve de cotejo temático y la obligación se verifica directamente en el BOE.' }],
  7707: [{ url: admin, title: 'ITIC Academy, bloque 3 Actuación administrativa, versión 2026', detail: 'Cotejo curricular con procedimiento administrativo, copias auténticas y relación electrónica, alineado con A1-8 y A2-I-8; se verificó el mandato concreto en el artículo 27.1 LPAC.' }],
  7708: [{ url: gov, title: 'ITIC Academy, bloque 10 Gobernanza TIC y Administración Digital, versión 2026', detail: 'Cotejo curricular general con el epígrafe oficial de sociedad de la información (A1-22/A2-I-6). La respuesta y las excepciones vigentes de LSSICE se comprobaron en el texto consolidado del BOE.' }],
  7709: [{ url: procurement, title: 'ITIC Academy, bloque 5 Contratación, Presupuestos y Compra TIC, versión 2026', detail: 'Cotejo curricular con contratación pública y prescripciones técnicas (A1-11). El programa A2 consultado no contiene un epígrafe específico de LCSP; ello no implica una exclusión absoluta del contenido.' }],
  7710: [{ url: procurement, title: 'ITIC Academy, bloque 5 Contratación, Presupuestos y Compra TIC, versión 2026', detail: 'Cotejo curricular con división en lotes, solvencia y adjudicación (A1-11). El programa A2 consultado no contiene un epígrafe específico de LCSP; ello no implica una exclusión absoluta del contenido.' }]
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';

assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  assert.ok(q?.revision, `Falta revisión ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  assert.ok(docs[c.id]?.length, `Falta cotejo académico ${c.id}`);
  const prior = q.revision.observaciones.split(' Cotejo curricular:')[0];
  const comments = q.comentarios.split(' Cotejo curricular:')[0];
  const notes = [];
  q.revision.fuentes = q.revision.fuentes.filter(x => !x.referencia.startsWith('Cotejo curricular:') && !x.referencia.startsWith('Convocatoria oficial A1 BOE-') && !x.referencia.startsWith('Convocatoria oficial A2 BOE-'));
  for (const d of docs[c.id]) {
    const note = `${d.title}. ${d.detail}`;
    notes.push(note);
    q.revision.fuentes.push({ url: d.url, referencia: `Cotejo curricular: ${note}` });
  }
  q.revision.fuentes.push(
    { url: a1, referencia: `Convocatoria oficial A1 BOE-A-2025-25938; epígrafes: ${q.clasificacion.A1.join(', ') || 'sin tema A1 específico'}.` },
    { url: a2, referencia: `Convocatoria oficial A2 BOE-A-2025-26262; epígrafes: ${q.clasificacion.A2.join(', ') || 'sin tema A2 específico'}.` }
  );
  q.revision.observaciones = [prior, ...notes].filter(Boolean).join(' Cotejo curricular: ');
  q.comentarios = `${comments} Cotejo curricular: ${notes.join(' ')}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular con ITIC Academy y programas oficiales A1/A2 añadido a 5 preguntas.');
