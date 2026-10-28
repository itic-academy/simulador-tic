const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-425.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const official = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8'));
const valid = new Set(official.programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  quality: {
    url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», actualización 2026; encuadra las pruebas y métricas de calidad de software en A1-96 y los contenidos específicos de testing del programa A2.'
  },
  systems: {
    url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1; contexto de ciclo de vida, construcción y calidad de software.'
  },
  metrics: {
    url: 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 15 «Metodologías ágiles, Lean y modelos de ciclo de vida», versión 2026.2; contexto de planificación, gestión y estimación de proyectos.'
  }
};
const map = {
  2436: { doc: 'quality', topics: ['A1-96'], a2: ['A2-III-7'], detail: 'Métrica de complejidad estructural, grafo de flujo de control y caminos básicos de prueba.' },
  2437: { doc: 'quality', topics: ['A1-96'], a2: ['A2-III-7'], detail: 'BDD y herramienta de automatización de pruebas con especificaciones ejecutables Gherkin.' },
  2438: { doc: 'metrics', topics: ['A1-95'], a2: ['A2-III-2'], detail: 'Medición de tamaño funcional y uso de métricas para apoyar estimación de esfuerzo/coste.' },
  2439: { doc: 'quality', topics: ['A1-96'], a2: ['A2-III-7'], detail: 'Estándares y procesos de prueba de software; niveles de gestión frente a ejecución dinámica.' },
  2440: { doc: 'metrics', topics: ['A1-95'], a2: ['A2-III-2'], detail: 'Modelos de estimación paramétrica de esfuerzo, calendario y coste en planificación de proyectos software.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2436,2437,2438,2439,2440') throw new Error('IDs del lote 425 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta la revisión del reactivo ' + c.id);
  if (![...m.topics, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema oficial inexistente en ' + c.id);
  q.clasificacion.A1 = m.topics;
  q.clasificacion.A2 = m.a2;
  const note = 'Cotejo curricular: ' + d.label + ' ' + m.detail + ' Drive: ' + d.url + '. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (' + calls.join('; ') + '). Academy aporta encuadre curricular; cada afirmación técnica se apoya en la fuente primaria enumerada en revision.fuentes.';
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 425 completado.');
