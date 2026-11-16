const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1482.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));

const protection = 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk';
const budget = 'https://docs.google.com/document/d/1Q27FpqRtIq26eYviXIP88A52-YnEJhEG/edit?usp=drivesdk';
const gov = 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk';
const procurement = 'https://drive.google.com/file/d/1DIoyW3_RpCEq_MTlpiLeMAWlAnmc2EKm/view?usp=drivesdk';
const quality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const docs = {
  7711: [{ url: protection, title: 'ITIC Academy, bloque 8 Protección de datos, versión 2026.3', detail: 'El programa aborda autoridades de protección de datos (A1-27/A2-I-7); el reparto actual de funciones de la Presidencia y la Memoria anual se contrasta con el Estatuto vigente publicado en el BOE.' }],
  7712: [{ url: budget, title: 'ITIC Academy, Tema 012 Presupuestos, versión 3.2 (2026)', detail: 'El material desarrolla el Título I de la Ley General Presupuestaria y la Hacienda Pública estatal, que corresponden al epígrafe A1-12. El título y la sección se verifican en la ley consolidada del BOE.' }],
  7713: [{ url: gov, title: 'ITIC Academy, bloque 10 Gobernanza TIC y Administración Digital, versión 2026', detail: 'Cotejo curricular con sociedad de la información y normativa de administración digital (A1-22/A2-I-6); la razón concreta de la exclusión de la radiodifusión se verifica en el considerando 18 de la directiva EUR-Lex.' }],
  7714: [{ url: procurement, title: 'ITIC Academy, bloque 5 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.1', detail: 'El bloque cubre explícitamente el régimen jurídico de las subvenciones públicas (A1-13). La clasificación A2 no tiene epígrafe específico de subvenciones.' }],
  7715: [{ url: quality, title: 'ITIC Academy, bloque 39 Calidad y Mantenimiento, versión 2026', detail: 'El bloque incluye el epígrafe A1-103 sobre calidad en los servicios de información, Modelo EFQM y guía ISO 9004; el programa A2 consultado no contiene un epígrafe equivalente de calidad organizativa.' }]
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
  q.clasificacion.bloque_academia = docs[c.id].map(d => d.title.replace('ITIC Academy, ', '')).join(' + ');
  q.clasificacion.nota = `Cotejo curricular completado: ${notes.join(' ')}${q.clasificacion.A2.length ? '' : ' Sin tema A2 directo específico; no equivale a exclusión del contenido.'}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular con ITIC Academy y programas oficiales A1/A2 añadido a cinco preguntas.');
