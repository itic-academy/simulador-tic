const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8')), log = JSON.parse(fs.readFileSync(path.join(__dirname, 'cambios-lote-1457.json'), 'utf8'));
const security = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', hardware = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', pm = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const docs = {
  7586: [{ url: security, title: 'ITIC Academy, bloque 48: Seguridad en redes y nivel de aplicación, edición 2026', detail: 'Cotejo con A1-125/A2-II-13: herramientas de ciberseguridad y detección/respuesta ante incidentes; las capacidades específicas EDR se verifican en documentación CISA.' }],
  7587: [{ url: security, title: 'ITIC Academy, bloque 48: Seguridad en redes y nivel de aplicación, edición 2026', detail: 'Cotejo con A1-125/126 y A2-II-13: ataques de red y de aplicación y herramientas de protección; la mitigación HTTP flood se precisa con la guía CISA.' }],
  7588: [{ url: security, title: 'ITIC Academy, bloque 48: Seguridad en redes y nivel de aplicación, edición 2026', detail: 'Cotejo con A1-125/A2-II-13 sobre prevención y respuesta a incidentes de seguridad.' }, { url: hardware, title: 'ITIC Academy, bloque 26: Hardware, CPD, almacenamiento y virtualización, edición 2026', detail: 'Cotejo con A1-56/A2-IV-3, sistemas de almacenamiento y copias de seguridad; se contrasta offline y recuperabilidad con la guía CISA.' }],
  7589: [{ url: pm, title: 'ITIC Academy, bloque 15: Metodologías de desarrollo y gestión de proyectos, edición 2026', detail: 'Cotejo con A1-35/36 y A2-III-2, planificación y técnicas predictivas de proyectos; la definición de las tres estimaciones de duración PERT se comprueba en PMI.' }],
  7590: [{ url: pm, title: 'ITIC Academy, bloque 15: Metodologías de desarrollo y gestión de proyectos, edición 2026', detail: 'Cotejo con A1-35/36 y A2-III-2, técnicas de planificación Gantt y PERT; la descripción gráfica se contrasta con PMI.' }]
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
fs.writeFileSync(path.join(__dirname, 'cambios-lote-1457.json'), JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo académico y convocatorias añadido: cinco registros.');
