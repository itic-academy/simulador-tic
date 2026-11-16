const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8')), log = JSON.parse(fs.readFileSync(path.join(__dirname, 'cambios-lote-1454.json'), 'utf8'));
const quality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', systems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', itil = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const docs = {
  7571: [{ url: systems, title: 'ITIC Academy, bloque 38: Análisis, diseño y construcción de sistemas de información, edición 2026', detail: 'El bloque cubre A1-96 (pruebas y herramientas de calidad) y A2-D7 (pruebas); SonarQube se coteja además con su documentación oficial como herramienta de análisis estático y revisión automática de código.' }],
  7572: [{ url: quality, title: 'ITIC Academy, bloque 39: Calidad y mantenimiento, edición 2026', detail: 'El bloque trata A1-103 y A2-D13, normas y modelos de calidad, e incluye expresamente la edición ISO 9001:2026 recién publicada. La edición vigente se acredita con ISO.' }],
  7573: [{ url: itil, title: 'ITIC Academy, bloque 41: ITIL y COBIT, edición 2026', detail: 'El bloque cubre A1-106 y A2-C2, incluyendo habilitación del cambio y control de cambios; desarrolla el modelo de cambios estándar de ITIL 4 y diferencia el marco ITIL (Version 5) publicado en 2026.' }],
  7574: [{ url: itil, title: 'ITIC Academy, bloque 41: ITIL y COBIT, edición 2026', detail: 'El bloque cubre A1-106 y explica COBIT 2019 como marco de gobierno y gestión de la información y tecnología empresarial. No se atribuye un tema A2 específico porque ese programa no incluye un epígrafe expreso de COBIT.' }],
  7575: [{ url: itil, title: 'ITIC Academy, bloque 41: ITIL y COBIT, edición 2026', detail: 'El bloque cubre A1-106 y describe las cuatro dimensiones de gestión de servicios de ITIL 4, al tiempo que distingue la transición a ITIL (Version 5). El temario A2 no incluye un epígrafe específico sobre las cuatro dimensiones.' }]
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id))), a1url = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', a2url = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id); assert.ok(q?.revision, `Falta revisión de ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  assert.ok(docs[c.id]?.length, `Falta cotejo Academy ${c.id}`);
  const prior = q.revision.observaciones.split(' Cotejo curricular:')[0], comments = q.comentarios.split(' Cotejo curricular:')[0];
  q.revision.fuentes = q.revision.fuentes.filter(f => !f.referencia.startsWith('Cotejo curricular:') && !f.referencia.startsWith('Convocatoria oficial Cuerpo Superior TIC, A1,') && !f.referencia.startsWith('Convocatoria oficial Cuerpo de Gestión de Sistemas e Informática, A2,'));
  const notes = [];
  for (const d of docs[c.id]) { const n = `Cotejo curricular: ${d.title}. ${d.detail}`; notes.push(n); q.revision.fuentes.push({ url: d.url, referencia: n }); }
  q.revision.fuentes.push({ url: a1url, referencia: `Convocatoria oficial A1, BOE-A-2025-25938; temas: ${q.clasificacion.A1.join(', ') || 'sin tema A1 específico'}.` }, { url: a2url, referencia: `Convocatoria oficial A2, BOE-A-2025-26262; temas: ${q.clasificacion.A2.join(', ') || 'sin epígrafe A2 específico'}.` });
  q.revision.observaciones = [prior, ...notes].filter(Boolean).join(' Cotejo curricular: ');
  q.comentarios = `${comments} Cotejo curricular: ${notes.map(n => n.replace(/^Cotejo curricular: /, '')).join(' ')}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, 'cambios-lote-1454.json'), JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo académico y convocatorias añadido: cinco registros.');
