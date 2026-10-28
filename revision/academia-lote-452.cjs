const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const log = JSON.parse(fs.readFileSync(path.join(__dirname, 'cambios-lote-452.json'), 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(program => program.temas.map(topic => topic.id)));
const docs = {
  networks: {
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 42 Redes, actualización 2026: temario A1 108 y 113 incluye redes de transporte/MPLS y Carrier Ethernet-VPLS.'
  },
  ai: {
    url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, edición 2026.1, actualizada el 19-10-2026: IA, aprendizaje automático, deep learning y redes neuronales.'
  },
  estimationArchive: {
    url: 'https://drive.google.com/file/d/0Bw-rS_kOHzMKcVNuN0N5ZHF0SVk/view?usp=drivesdk&resourcekey=0-UwaQ-BEEvdoG9bNtUAyDIw',
    label: 'ITIC Academy/Asociación Profesional, Tema 089 sobre estimación de recursos y esfuerzo, archivo histórico fechado en 2009: incluye COCOMO clásico y cita Software Engineering Economics (Boehm, 1981). Se registra como material histórico, no como versión curricular 2026.'
  },
  investment: {
    url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 17 Adquisición de Sistemas, Alternativas y Rentabilidad de las Inversiones, actualización octubre de 2026: viabilidad, inversión, presupuestación y control de costes; encuadre actual del área de costes, no fuente definitoria de COCOMO.'
  },
  quality: {
    url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 39 Calidad y Mantenimiento, edición 2026: incluye complejidad Halstead/McCabe y modelos actuales CMMI, ISO/IEC 330xx y TMMi. Se distingue expresamente el CMM histórico del CMMI.'
  }
};
const mapping = {
  2571: { docs: ['networks'], topics: ['A1-115', 'A2-IV-10'], detail: 'El material incluye MPLS y VPLS en redes de transporte; RFC/IETF se usa para precisar encaminamiento hop-by-hop/expreso y los servicios VPN.' },
  2572: { docs: ['ai'], topics: ['A1-70', 'A2-III-5'], detail: 'El bloque actual cubre fundamentos de IA y deep learning; los trabajos fundacionales de PDP y retropropagación respaldan la distinción simbólico/conexionista y el ajuste de pesos.' },
  2573: { docs: ['estimationArchive', 'investment'], topics: ['A1-99', 'A2-II-15'], detail: 'El archivo del tema 089 cubre COCOMO 81 en el epígrafe A1 de estimación de esfuerzo. El bloque actual 17 aporta contexto de viabilidad y control de costes; la regla de qué variantes incluyen drivers se funda en Boehm/BCSSE.' },
  2574: { docs: ['quality'], topics: ['A1-98', 'A2-III-13'], detail: 'El bloque 39 actual sitúa explícitamente Halstead y McCabe en complejidad y métricas de calidad; NIST documenta los recuentos base de Halstead.' },
  2575: { docs: ['quality'], topics: ['A1-96', 'A2-III-13'], detail: 'El bloque 39 cubre procesos y modelos de madurez de calidad modernos; la pregunta se limita al CMM for Software v1.1 del SEI y se verifica directamente en el informe SEI, sin atribuir sus niveles al CMMI actual.' }
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const question = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && question?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...question.clasificacion.A1, ...question.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  question.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  question.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}. ${row.detail} Correspondencia contrastada con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; ITIC Academy aporta contexto curricular, no sustituye fuentes técnicas primarias.`;
  question.clasificacion.bloque_academia = curriculum;
  question.clasificacion.nota = note;
  question.revision.observaciones = `${question.revision.observaciones} ${note}`.trim();
  question.comentarios = question.revision.observaciones;
  for (const key of row.docs) {
    const ref = { url: docs[key].url, referencia: `${docs[key].label} ${row.detail}` };
    if (!question.revision.fuentes.some(source => source.url === ref.url)) question.revision.fuentes.push(ref);
  }
  change.actualizada = structuredClone(question);
}

fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(path.join(__dirname, 'cambios-lote-452.json'), `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo de ITIC Academy, temario oficial y convocatorias añadido para 2571–2575.');
