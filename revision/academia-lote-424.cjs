const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-424.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  analysis: {
    url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1 (18/09/2026), cubre A1-88/92 y A2-III-3/9; desarrolla componentes, despliegue UML, requisitos y procesos de análisis.'
  },
  metric: {
    url: 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 15 «Metodologías ágiles, Lean y modelos de ciclo de vida», versión 2026.2 (02/10/2026), incluye MÉTRICA v3, gestión del proceso y desarrollo de sistemas; encuadra A1-95/A2-III-2.'
  }
};
const map = {
  2431: { doc: 'analysis', topics: ['A1-92'], a2: ['A2-III-9'], detail: 'UML estructural, módulos de software y diagramas de componentes frente a la asignación de artefactos a nodos del diagrama de despliegue.' },
  2432: { doc: 'analysis', topics: ['A1-88'], a2: ['A2-III-3'], detail: 'Obtención y especificación de requisitos mediante sesiones con usuarios y técnicas participativas en MÉTRICA v3 ASI 2.' },
  2433: { doc: 'metric', topics: ['A1-95'], a2: ['A2-III-2'], detail: 'MÉTRICA v3, procesos de Construcción (CSI) e Implantación y Aceptación (IAS), actividades y tareas.' },
  2434: { doc: 'metric', topics: ['A1-95'], a2: ['A2-III-2'], detail: 'Interfaz GPI/GPS de MÉTRICA v3: estimación, planificación, seguimiento y extrapolación.' },
  2435: { doc: 'metric', topics: ['A1-95'], a2: ['A2-III-2'], detail: 'Estimación de esfuerzo por análisis de puntos función y planificación detallada de actividades en MÉTRICA v3.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2431,2432,2433,2434,2435') throw new Error('El lote 424 no coincide con los IDs esperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error(`Falta revisión para ${c.id}`);
  if (![...m.topics, ...m.a2].every(topic => valid.has(topic))) throw new Error(`Tema no oficial para ${c.id}`);
  q.clasificacion.A1 = m.topics;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia se usa para encuadre curricular; la respuesta se justifica con la fuente oficial MÉTRICA v3 u OMG UML citada en la revisión.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 424 completado.');
