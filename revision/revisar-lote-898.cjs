const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const boehm = 'https://www.cse.msu.edu/~cse435/Homework/HW3/boehm.pdf';
const nasaSpiral = 'https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019%2B-%2BSoftware%2BLife%2BCycle';
const nasaJad = 'https://ntrs.nasa.gov/api/citations/19980227761/downloads/19980227761.pdf?attachment=true';
const irsJad = 'https://www.irs.gov/irm/part2/irm_02-005-011';
const hkJad = 'https://www.digitalpolicy.gov.hk/tc/our_work/digital_infrastructure/methodology/system_development/past_documents/rad/doc/g47a_pub.pdf';
const metrica = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const ibmUseCases = 'https://www.ibm.com/docs/en/dma?topic=diagrams-use-cases';
const nasaRequirements = 'https://swehb.nasa.gov/pages/viewpage.action?pageId=112656468';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const sources = {
  4811: [
    { url: boehm, referencia: 'B. W. Boehm, “A Spiral Model of Software Development and Enhancement”, IEEE Computer, 1988. El artículo caracteriza el modelo waterfall como refinamiento del modelo por etapas y describe ciclos de realimentación acotados entre etapas sucesivas; no respalda la afirmación absoluta de que carezca de realimentación. Copia consultable del artículo original.' },
    { url: nasaSpiral, referencia: 'NASA Software Engineering Handbook, SWE-019, ciclo de vida de software: referencia técnica de modelos de ciclo de vida y del modelo espiral.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: metodologías de desarrollo de sistemas.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.1: modelos de ciclo de vida.' }
  ],
  4812: [
    { url: nasaJad, referencia: 'NASA Technical Reports Server, NASA-GB-001-96, Software Measurement Guidebook: recomienda talleres JAD facilitados cuando los requisitos detallados no están suficientemente definidos o entendidos, para que el cliente los refine con los participantes.' },
    { url: irsJad, referencia: 'Internal Revenue Service, manual oficial de análisis de sistemas: JAD es una técnica de investigación de hechos orientada al usuario para obtener requisitos del sistema.' },
    { url: hkJad, referencia: 'Digital Policy Office, Gobierno de Hong Kong, introducción a RAD: describe las sesiones JAD como talleres facilitados con usuarios y partes interesadas; no como entrevistas individuales puestas en común después.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: análisis funcional y obtención de requisitos.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: estrategias de determinación de requerimientos y entrevistas.' }
  ],
  4813: [
    { url: nasaSpiral, referencia: 'NASA Software Engineering Handbook, SWE-019: el ciclo espiral presenta cuatro actividades recurrentes: determinar objetivos/planificación, analizar y resolver riesgos, ingeniería/desarrollo y evaluación del cliente para planificar la siguiente vuelta.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: metodologías de desarrollo de sistemas.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.1: modelos de ciclo de vida.' }
  ],
  4814: [
    { url: metrica, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información, ASI 2 y ASI 2.1–2.4: la definición, análisis y validación de requisitos se basa en la información del usuario; los participantes indicados incluyen usuarios expertos y analistas. El analista interviene en el análisis y formalización junto con usuarios, no sustituye al usuario como origen de las necesidades.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: análisis funcional y requisitos.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: determinación y especificación de requisitos.' }
  ],
  4815: [
    { url: ibmUseCases, referencia: 'IBM, documentación de diagramas de casos de uso: describen funciones del sistema orientadas a objetivos de usuarios y ayudan a determinar requisitos y qué debe hacer el sistema.' },
    { url: nasaRequirements, referencia: 'NASA Systems Engineering Handbook, Requirements Engineering: las técnicas de casos de uso describen interacciones/escenarios y apoyan la identificación y análisis de requisitos funcionales; las restricciones no funcionales se especifican complementariamente.' },
    { url: metrica, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información: modelado de requisitos y análisis del sistema con participación de usuarios.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: análisis funcional, casos de uso e historias de usuario.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: determinación y especificación de requisitos; tema III.9: orientación a objetos y UML.' }
  ]
};

const records = [
  [4811, ['88'], ['III-1'], ['ciclo de vida', 'cascada', 'modelo por etapas', 'realimentación'], sources[4811], null,
    'Respuesta A. La relación histórica se debe leer con precisión: Boehm describió el modelo waterfall como un refinamiento del modelo por etapas y señaló realimentación entre etapas sucesivas, aunque acotada. Por ello no es correcta la afirmación absoluta de que no admite realimentación; tampoco debe equipararse sin matices a un modelo iterativo. Se fecha y concreta el enunciado para evitar convertir una simplificación didáctica en una regla universal.', 'corregida'],
  [4812, ['88'], ['III-3'], ['JAD', 'obtención de requisitos', 'taller facilitado', 'usuarios'], sources[4812], null,
    'Respuesta A. JAD (Joint Application Development) es una técnica de elicitación/obtención de requisitos basada en sesiones de trabajo facilitadas en las que usuarios, responsables y equipo técnico colaboran. No significa excluir a usuarios, alargar entrevistas individuales ni entrevistar por separado para reunir luego opiniones: el taller conjunto busca precisamente hacer explícitos y contrastar los requisitos con participación directa.', 'corregida'],
  [4813, ['88'], ['III-1'], ['modelo espiral', 'ciclo de vida', 'riesgos', 'evaluación'], sources[4813], null,
    'Respuesta A. En la formulación estándar consultada en el manual de ingeniería de software de NASA, cada vuelta del modelo espiral recorre planificación/objetivos, análisis de riesgos, ingeniería y evaluación del cliente. Las denominaciones pueden variar ligeramente entre exposiciones del modelo, por lo que se identifica la formulación y no se confunden estas actividades con las fases de RUP ni con una secuencia de construcción e integración.', 'corregida'],
  [4814, ['88'], ['III-3'], ['MÉTRICA v3', 'requisitos', 'analista', 'usuarios expertos'], sources[4814], null,
    'Respuesta C, con precisión sobre los roles. En MÉTRICA v3, las actividades ASI 2 de definición, análisis y validación se realizan a partir de información proporcionada por usuarios; en sus tareas participan usuarios expertos y analistas. El analista analiza y formaliza los requisitos junto con ellos, pero no es el origen exclusivo de las necesidades ni las define unilateralmente. Se acota la pregunta al perfil técnico que interviene en ese análisis y formalización.', 'corregida'],
  [4815, ['88'], ['III-3', 'III-9'], ['casos de uso', 'UML', 'requisitos funcionales', 'requisitos no funcionales'], sources[4815], null,
    'Respuesta C. El modelo de casos de uso representa servicios o comportamientos funcionales del sistema desde la perspectiva de actores y sus objetivos, por lo que ayuda a identificar y estructurar requisitos funcionales. Las restricciones no funcionales pueden documentarse como requisitos suplementarios asociados a casos de uso, pero no constituyen el foco principal del modelo. Un diagrama de casos de uso es un diagrama UML; el modelo no es en sí mismo una técnica limitada a requisitos no funcionales.', 'corregida']
];

const edits = {
  4811: { texto: 'Según la caracterización histórica de Boehm (1988), ¿qué relación guarda el modelo waterfall con el modelo por etapas?', opciones: [
    'Es un refinamiento del modelo por etapas; admite realimentación acotada entre etapas sucesivas.',
    'Es equivalente al modelo iterativo en el que cada ciclo entrega una versión completa del producto.',
    'Prohíbe toda realimentación entre etapas.',
    'Es una variante del modelo espiral que comienza por el análisis de riesgos.'
  ], respuesta_correcta: 0 },
  4812: { texto: '¿Cuál es el propósito y la dinámica característicos de la técnica JAD (Joint Application Development) en el análisis de sistemas?', opciones: [
    'Obtener y consensuar requisitos mediante talleres facilitados con participación conjunta de usuarios y equipo técnico.',
    'Reducir la participación de usuarios y clientes para que los ingenieros de requisitos definan unilateralmente las necesidades.',
    'Sustituir el análisis de requisitos por entrevistas individuales cuya puesta en común se realiza al final del proyecto.',
    'Evitar que las partes interesadas contrasten sus opiniones durante la definición del sistema.'
  ], respuesta_correcta: 0 },
  4813: { texto: 'En la formulación estándar del modelo de ciclo de vida en espiral descrita en el manual SWE-019 de NASA, ¿qué actividades se repiten en cada vuelta?', opciones: [
    'Planificación, análisis de riesgos, ingeniería y evaluación.',
    'Planificación, diseño, codificación e integración, sin una actividad de evaluación.',
    'Construcción y transición, como únicas fases del ciclo.',
    'Adaptación, composición y reemplazo.'
  ], respuesta_correcta: 0 },
  4814: { texto: 'Según MÉTRICA v3, en las tareas de análisis y especificación de requisitos de ASI 2, ¿qué perfil técnico participa junto con los usuarios expertos?', opciones: [
    'El jefe de proyecto, como fuente única de las necesidades del sistema.',
    'El consultor, que sustituye la participación de los usuarios.',
    'El analista, que analiza y formaliza los requisitos con la participación de los usuarios expertos.',
    'El programador, que define por sí solo los requisitos antes de consultar a los usuarios.'
  ], respuesta_correcta: 2 },
  4815: { texto: '¿Cuál es el objetivo principal del modelado de casos de uso al analizar los requisitos de un sistema?', opciones: [
    'Describir únicamente atributos de calidad como rendimiento y disponibilidad.',
    'Representar la estructura física de la base de datos y sus claves.',
    'Identificar y estructurar funciones del sistema desde la perspectiva de los actores y sus objetivos.',
    'Representar exclusivamente la secuencia temporal interna de mensajes entre objetos.'
  ], respuesta_correcta: 2 }
};

aplicar({ numero: '898', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-898.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4811: 'bloque 38 — análisis, diseño y construcción: modelos de ciclo de vida y cascada.',
  4812: 'bloque 38 — análisis, diseño y construcción: técnicas de análisis y obtención de requisitos.',
  4813: 'bloque 38 — análisis, diseño y construcción: modelo espiral y ciclos de vida.',
  4814: 'bloque 38 — análisis, diseño y construcción: MÉTRICA v3, análisis y especificación de requisitos.',
  4815: 'bloque 38 — análisis, diseño y construcción: análisis funcional, requisitos y casos de uso.'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detalle = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${detalle} Esta correspondencia ubica curricularmente la materia; no valida la respuesta técnica.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detalle} La academia ubica el contenido; las fuentes primarias fundamentan la respuesta.`;
  q.revision.observaciones += ` Cotejo curricular: ${detalle} La academia se usa como referencia de cobertura, no como autoridad técnica.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy38, referencia: `ITIC Academy 2026.1, ${detalle} Cotejo de ubicación curricular, no de validez técnica.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido a las cinco preguntas del lote 898.');
