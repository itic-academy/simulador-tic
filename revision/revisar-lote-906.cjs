const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const agilePrinciples = 'https://agilemanifesto.org/principles';
const scrumGuide = 'https://scrumguides.org/scrum-guide.html';
const pmiLifeCycles = 'https://www.pmi.org/learning/library/matching-software-development-life-cycles-project-environment-7961';
const metricDesign = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf';
const isoFsm = 'https://www.iso.org/standard/38931.html';
const ifpug = 'https://ifpug.org/ifpug-standards/fpa';

const sources = {
  4851: [
    { url: 'https://www.gov.uk/service-manual/agile-delivery/agile-methodologies', referencia: 'GOV.UK Service Manual, Agile methodologies: Scrum and Kanban are introduced as agile methods; Scrum uses fixed-length sprints.' },
    { url: 'https://agilealliance.org/glossary/xp/', referencia: 'Agile Alliance glossary: Extreme Programming (XP) is an agile software-development framework.' },
    { url: 'https://kanbanguides.org/the-kanban-guide/', referencia: 'The Kanban Guide, official minimal guide: defines Kanban and its practices.' },
    { url: scrumGuide, referencia: 'Scrum Guide, official source by the creators of Scrum: specifies the Sprint as a time-boxed event/container in the framework, distinct from Scrum itself.' },
    { url: agilePrinciples, referencia: 'Manifesto for Agile Software Development, official principles: agile methods share values/principles rather than a uniform set of tools.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: metodologías de desarrollo y metodologías ágiles, Scrum y Kanban.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión/planificación del desarrollo y metodologías.' }
  ],
  4852: [
    { url: agilePrinciples, referencia: 'Manifesto for Agile Software Development, official principles: the best architectures, requirements and designs emerge from self-organizing teams; work is built around motivated individuals.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: metodologías de desarrollo, incluidas las ágiles.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: metodologías de desarrollo.' }
  ],
  4853: [
    { url: pmiLifeCycles, referencia: 'PMI, Matching Software Development Life Cycles to Project Environment: predictive life cycles suit environments where scope, schedule and cost can be defined early and remain relatively stable; estimates are grounded in early planning and can be refined as information increases.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 35: dirección/gestión de proyectos TIC; tema 99: estimación de recursos y esfuerzo.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y proyectos.' }
  ],
  4854: [
    { url: metricDesign, referencia: 'MÉTRICA v3, Diseño del Sistema de Información: en la estructura modular se persigue mínimo acoplamiento y máxima cohesión.' },
    { url: 'https://developer.android.com/topic/modularization/patterns', referencia: 'Android Developers, Common modularization patterns: define coupling as inter-module dependency and cohesion as functional relatedness within a module; recommends low coupling/high cohesion as a general design guideline.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis/diseño orientado a objetos y patrones.' }
  ],
  4855: [
    { url: isoFsm, referencia: 'ISO/IEC 14143-1:2007, confirmed current in 2024: functional size measurement focuses on size in terms of functions required by users, independently of implementation.' },
    { url: ifpug, referencia: 'IFPUG Function Point Analysis: function points measure software size based on functionality requested by and provided to end users; size can support, but is distinct from, effort/cost estimation.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 98 (métricas/calidad) y 99 (estimación de recursos y esfuerzo).' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: planificación, desarrollo y estimación en proyectos.' }
  ]
};

const records = [
  [4851, ['88'], ['III-2'], ['metodologías ágiles', 'Scrum', 'Kanban', 'XP', 'sprint'], sources[4851], null,
    'Respuesta D. Scrum, Kanban y Extreme Programming (XP) son métodos/marcos de trabajo ágiles. Un sprint es un evento de duración fija utilizado por Scrum para producir un incremento; no es por sí mismo una metodología. Se evita incluir BDD como “metodología” sin matizar, porque se clasifica de formas diversas como práctica, enfoque o técnica.', 'corregida'],
  [4852, ['88'], ['III-2'], ['Manifiesto Ágil', 'principios ágiles', 'equipos autoorganizados'], sources[4852], null,
    'Respuesta C. El Manifiesto Ágil afirma que las mejores arquitecturas, requisitos y diseños emergen de equipos autoorganizados. Una estructura jerárquica top-down como requisito universal contradice ese principio. Las otras opciones reproducen principios explícitos del manifiesto.', 'corregida'],
  [4853, ['35', '99'], ['III-2'], ['ciclo de vida', 'predictivo', 'iterativo', 'incremental', 'estimación'], sources[4853], null,
    'Respuesta B. En un enfoque predictivo se planifican alcance, calendario y costes al principio hasta donde permite la información disponible; las estimaciones se refinan cuando progresa la definición, pero no es correcto afirmar que no se estiman temprano. El ciclo iterativo revisa estimaciones conforme aumenta el conocimiento; el incremental entrega funcionalidad por partes.', 'corregida'],
  [4854, ['93'], ['III-9'], ['diseño modular', 'acoplamiento', 'cohesión', 'mantenibilidad'], sources[4854], null,
    'Respuesta D. Como criterio general del diseño modular, se busca reducir las dependencias entre módulos (bajo acoplamiento) y mantener relacionadas sus responsabilidades internas (alta cohesión). No es una ley absoluta que sustituya decisiones de arquitectura, pero sí la recomendación clásica evaluada aquí.', 'corregida'],
  [4855, ['98', '99'], ['III-2'], ['puntos de función', 'medida funcional', 'tamaño del software', 'estimación'], sources[4855], null,
    'Respuesta A. Los puntos de función cuantifican tamaño funcional a partir de las funciones reconocibles por el usuario, con independencia de la tecnología de implementación. Ese tamaño puede servir de entrada a modelos de esfuerzo o coste; la técnica no mide directamente calidad, usabilidad ni seguridad, y el coste probable exige supuestos adicionales de productividad y contexto.', 'corregida']
];

const edits = {
  4851: { texto: '¿Cuál de los siguientes elementos NO es un método o marco de trabajo ágil, sino una unidad de tiempo/evento empleada dentro de Scrum?', opciones: [
    'Kanban.',
    'Extreme Programming (XP).',
    'Scrum.',
    'Sprint.'
  ], respuesta_correcta: 3 },
  4852: { texto: 'Según los principios del Manifiesto Ágil, señale la afirmación que NO es correcta:', opciones: [
    'La prioridad es satisfacer al cliente mediante la entrega temprana y continua de software valioso.',
    'Se aceptan cambios en los requisitos, incluso en etapas tardías, para aportar ventaja al cliente.',
    'Las mejores arquitecturas, requisitos y diseños deben imponerse siempre por una estructura jerárquica top-down.',
    'El software funcionando se entrega frecuentemente, con preferencia por intervalos cortos.'
  ], respuesta_correcta: 2 },
  4853: { texto: '¿Qué afirmación describe mejor un ciclo de vida predictivo de proyecto?', opciones: [
    'El alcance, el calendario y el coste se determinan y planifican en las fases tempranas, según la información disponible, y se refinan si esta cambia.',
    'No se realizan estimaciones de tiempo ni coste hasta concluir el proyecto.',
    'El alcance se mantiene deliberadamente abierto y se replanifica cada día sin una línea base.',
    'Cada incremento reemplaza la planificación del proyecto completo y elimina la necesidad de estimar.'
  ], respuesta_correcta: 0 },
  4854: { texto: 'En el diseño modular de software, ¿qué combinación se recomienda generalmente para facilitar comprensión y mantenimiento?', opciones: [
    'Mínimo acoplamiento y baja cohesión.',
    'Máximo acoplamiento y baja cohesión.',
    'Máximo acoplamiento y cohesión alta o media.',
    'Mínimo acoplamiento y alta cohesión.'
  ], respuesta_correcta: 3 },
  4855: { texto: '¿Qué mide principalmente el análisis de puntos de función (FPA)?', opciones: [
    'El tamaño funcional del software a partir de las funciones que proporciona al usuario.',
    'La calidad global de la aplicación y su tasa de defectos prevista.',
    'La facilidad de uso de la interfaz y la tasa prevista de errores de usuario.',
    'La seguridad de la aplicación y el riesgo de intrusión.'
  ], respuesta_correcta: 0 }
};

aplicar({ numero: '906', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-906.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4851: 'bloque 38, apartado 4, metodologías predictivas/iterativas/ágiles y Scrum/Kanban; diferencia métodos de un Sprint como evento/timebox.',
  4852: 'bloque 38, apartados 4.1–4.2, valores y principios ágiles, Manifiesto Ágil y autoorganización.',
  4853: 'bloque 38, apartados 1 y 4.5, ciclo de vida y comparación de modelos predictivos, iterativos e incrementales.',
  4854: 'bloque 38, apartado 5.4, cohesión y acoplamiento en diseño estructurado.',
  4855: 'el bloque 38 trata estimación relativa en Scrum, pero el cotejo del material no localizó la técnica de puntos de función por nombre; se documenta como laguna de cobertura literal y se verifica con IFPUG/ISO.'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${detail} Cotejo curricular, no autoridad técnica.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} Las afirmaciones técnicas se contrastan con las fuentes primarias citadas.`;
  q.revision.observaciones += ` Cotejo curricular: ${detail} El material de academia sirve como mapa del temario y no sustituye fuentes técnicas primarias.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy38, referencia: `ITIC Academy 2026.1, ${detail} Cotejo de cobertura del tema.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 906.');
