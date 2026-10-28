const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-423.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  agile: {
    url: 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 15 «Metodologías ágiles, Lean y modelos de ciclo de vida», versión 2026.2 (02/10/2026), encuadra A1-37/88 y A2-III-2; incluye escalado ágil y metodologías de desarrollo.'
  },
  object: {
    url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026), encuadra A1-89 con modelado de dominio y modelos de clases; el bloque de análisis y diseño incluye OO/UML.'
  },
  soa: {
    url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25/09/2026), cubre A1-58 y A2-T6; el contenido dedica apartados a servicios web, procesos de negocio y SOA.'
  },
  requirements: {
    url: 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 15 «Metodologías ágiles, Lean y modelos de ciclo de vida», versión 2026.2 (02/10/2026), incorpora requisitos, prototipado y modelos de desarrollo; corresponde al encuadre A1-94/A2-III-3.'
  },
  data: {
    url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026), cubre A1-95 mediante MÉTRICA v3 y A2-III-4 mediante modelado de datos, diseño lógico y físico.'
  }
};
const map = {
  2426: { doc: 'agile', topics: ['A1-37'], a2: ['A2-III-2'], detail: 'SAFe/ART y alineación de varios equipos con una misión compartida.' },
  2427: { doc: 'object', topics: ['A1-89'], a2: ['A2-III-9'], detail: 'Identificación de conceptos/clases del dominio y análisis orientado a objetos.' },
  2428: { doc: 'soa', topics: ['A1-58'], a2: ['A2-II-6'], detail: 'Orquestación de procesos de negocio mediante servicios web; se limita el encuadre a la arquitectura SOA y los estándares de servicios web.' },
  2429: { doc: 'requirements', topics: ['A1-94'], a2: ['A2-III-3'], detail: 'Prototipos como técnica de exploración/validación de requisitos, no como etapa obligatoria para todo sistema.' },
  2430: { doc: 'data', topics: ['A1-95'], a2: ['A2-III-4'], detail: 'MÉTRICA v3, ASI 6 (modelo lógico) y modelado/diseño lógico de datos.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2426,2427,2428,2429,2430') throw new Error('El lote 423 no coincide con los IDs esperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error(`Falta revisión para ${c.id}`);
  if (![...m.topics, ...m.a2].every(topic => valid.has(topic))) throw new Error(`Tema no oficial para ${c.id}`);
  q.clasificacion.A1 = m.topics;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia se usa para encuadre curricular; la respuesta se justifica con las fuentes técnicas citadas en la revisión.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 423 completado.');
