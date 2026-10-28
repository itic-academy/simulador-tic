const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-422.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  security: {
    url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 22 «Seguridad, ENS y Ciberseguridad», versión 2026.2, encuadra los controles de acceso, riesgos y seguridad lógica.'
  },
  ocr: {
    url: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 37 «Tratamiento de imágenes, OCR, biometría y gestión de contenidos», versión 2026.1 (18/09/2026), cubre expresamente A1-83/A1-84 y A2-II-16.'
  },
  blockchain: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1, encuadra blockchain y contratos inteligentes junto a tecnologías de sistemas de información.'
  },
  lifecycle: {
    url: 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 15 «Metodologías ágiles, Lean y modelos de ciclo de vida», versión 2026.2 (02/10/2026), cubre A1-86 y A2-D1/D2, con modelos en cascada, V, espiral y RUP.'
  },
  strategy: {
    url: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC. Planificación estratégica de sistemas de información», versión 2026.2 (02/10/2026), cubre los temas A1-32, A1-33 y A1-87.'
  }
};
const map = {
  2421: { doc: 'security', topics: ['A1-47', 'A2-IV-12'], detail: 'Seguridad lógica, políticas de control de acceso y autorización de sujetos sobre recursos.' },
  2422: { doc: 'ocr', topics: ['A1-84', 'A2-II-16'], detail: 'OCR/ICR y procesamiento documental; la clasificación A2-II-16 se limita al contexto de gestión documental y contenidos.' },
  2423: { doc: 'blockchain', topics: ['A1-85'], detail: 'Blockchain y contratos inteligentes, con referencia expresa en el programa A1; no se asigna un epígrafe A2 más amplio sin correspondencia específica.' },
  2424: { doc: 'lifecycle', topics: ['A1-86', 'A2-III-1', 'A2-III-2'], detail: 'Modelos del ciclo de vida y metodología, gestión y planificación del proceso de desarrollo.' },
  2425: { doc: 'strategy', topics: ['A1-35', 'A1-87'], detail: 'Planificación estratégica de la organización TIC y del sistema de información; no hay un tema A2 que mencione directamente este contenido.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2421,2422,2423,2424,2425') throw new Error('El lote 422 no coincide con los IDs esperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error(`Falta revisión para ${c.id}`);
  if (!m.topics.every(topic => valid.has(topic))) throw new Error(`Tema no oficial para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(topic => topic.startsWith('A2-'));
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia se usa para encuadre curricular; la respuesta se justifica con la fuente técnica citada en la revisión.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 422 completado.');
