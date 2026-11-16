const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1485.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));

const docs = {
  7726: [{ url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', title: 'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas de información, versión 2026.1', detail: 'Cotejo con análisis, modelado entidad-relación y diseño de sistemas; la convención específica de entidad débil se contrasta con la guía oficial de Técnicas de MÉTRICA v3. Correspondencia oficial: A1-89/A1-95 y A2-III-4.' }],
  7727: [{ url: 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk', title: 'ITIC Academy, bloque 40 Gestión Documental, versión 2026.1', detail: 'Cotejo curricular con gestión documental, recuperación de información, CMS/DMS y búsqueda; el material cubre el contexto, aunque no localicé una explicación específica de hipertexto en SGBDD. Correspondencia oficial: A1-105 y A2-II-16.' }],
  7728: [{ url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1', detail: 'Cotejo con herramientas de ciencia de datos, analítica, BI y tecnologías de explotación; los detalles de licencias y versiones comerciales se verifican con los fabricantes. Correspondencia oficial: A1-71/A1-75 y A2-II-15.' }],
  7729: [{ url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1', detail: 'Cotejo curricular parcial con arquitecturas web, lenguajes, plataformas .NET/Java y compatibilidad con estándares; en los materiales consultados no se localizó una unidad específica ActiveX/COM, tecnología heredada. Correspondencia oficial: A1-65 y A2-II-9.' }],
  7730: [{ url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, versión 2026.1', detail: 'Cotejo con redes de telecomunicaciones, medios, conmutación y técnicas de transmisión; el funcionamiento específico de multiplexación estadística se contrasta con la fuente ITU-R. Correspondencia oficial: A1-108 y A2-IV-8.' }]
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
  q.clasificacion.nota = `Cotejo curricular completado: ${notes.join(' ')}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular con ITIC Academy y programas oficiales A1/A2 añadido a cinco preguntas.');
