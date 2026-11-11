const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const cobit3 = 'https://pdfcoffee.com/cobit-3rd-edition-control-objectives-released-by-the-cobit-steering-committee-and-the-it-governance-institute-tm-pdf-free.html';
const cobitCurrent = 'https://www.isaca.org/resources/cobit';
const devops = 'https://cloud.google.com/discover/platform-engineering-vs-devops';
const dora = 'https://dora.dev/capabilities/deployment-automation/';
const metric = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const dfdRules = 'https://www.ibm.com/think/topics/data-flow-diagram';
const cmmi = 'https://insights.sei.cmu.edu/documents/853/2010_005_001_15287.pdf';
const iso = 'https://www.iso.org/standard/9000?browse=tc';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy39 = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academy41 = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';

const sources = {
  4806: [
    { url: cobit3, referencia: 'COBIT: Control Objectives for Information and Related Technology, 3.ª ed., ISACF/ITGI, 2000, marco y recursos TIC; copia consultable de la publicación original protegida por copyright. Distingue la taxonomía de esa edición del marco actual.' },
    { url: cobitCurrent, referencia: 'ISACA, página oficial del marco COBIT actual: COBIT 2019 es el marco vigente; no se debe atribuir sin fecha a las ediciones actuales la lista de recursos de la 3.ª edición.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 106: bases conceptuales de COBIT y gestión de servicios TIC.' }
  ],
  4807: [
    { url: devops, referencia: 'Google Cloud, definición vigente consultada: DevOps es un movimiento cultural y técnico que une desarrollo y operaciones, con colaboración, responsabilidad compartida y automatización.' },
    { url: dora, referencia: 'DORA, capacidad de automatización de despliegues: desarrollo y operaciones colaboran para crear, mantener y evolucionar conjuntamente la automatización.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 97: modelos de integración continua.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.6: integración continua y Dev-Ops.' }
  ],
  4808: [
    { url: dfdRules, referencia: 'IBM, reglas de DFD: los procesos tienen como mínimo un flujo de entrada y uno de salida; un proceso sin entrada/salida causa los errores denominados milagro/pozo negro. La pregunta se limita a esta regla general.' },
    { url: metric, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información: en análisis estructurado los DFD se usan para modelar procesos; ASI 7.1 describe el modelo de procesos y los procesos primitivos.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 90: modelado de procesos y análisis dinámico.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: estrategias de determinación de requerimientos y análisis.' }
  ],
  4809: [
    { url: cmmi, referencia: 'SEI/Carnegie Mellon, CMMI for Development v1.3, tabla 3.2: en la representación escalonada ML4 incluye Organizational Process Performance (OPP) y Quantitative Project Management (QPM); RD, IPM y OPD están asignadas a ML3.' },
    { url: 'https://cmmiinstitute.com/learning/appraisals/levels', referencia: 'CMMI Institute, niveles actuales: confirma la nomenclatura “Quantitatively Managed” para ML4; la pregunta se fecha expresamente en CMMI-DEV v1.3 por su lista de áreas de proceso.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 98: modelos, métricas y evaluación de la calidad del software.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.13: modelos y métricas de calidad del software.' }
  ],
  4810: [
    { url: iso, referencia: 'ISO 9000:2026, edición vigente publicada en mayo de 2026, §3.1.1: define “organization” como persona o grupo con funciones propias, responsabilidades, autoridades y relaciones para alcanzar objetivos.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 50: normas y organismos de normalización.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.13: normas y estándares de calidad.' }
  ]
};

const records = [
  [4806, ['106'], [], ['COBIT', 'COBIT 3.ª edición', 'recursos TIC', 'tecnología'], sources[4806], null,
    'Respuesta C. En COBIT 3.ª edición (2000), los cinco recursos TIC enumerados eran personas, sistemas de aplicación, tecnología, instalaciones y datos. La pregunta original decía simplemente COBIT y podía hacer pasar por vigente una taxonomía histórica: se fecha explícitamente la edición. COBIT 2019 es el marco actual de ISACA y organiza su contenido mediante componentes del sistema de gobierno.', 'historica'],
  [4807, ['97'], ['III-6'], ['DevOps', 'colaboración', 'automatización', 'integración continua'], sources[4807], null,
    'Respuesta D. DevOps es un movimiento cultural y técnico y un conjunto de prácticas que acercan desarrollo y operaciones mediante colaboración, responsabilidad compartida y automatización durante la entrega y operación del software. No es una herramienta de gestión de proyectos ni una secuencia de dos fases con equipos aislados.', 'corregida'],
  [4808, ['90'], ['III-3'], ['DFD', 'procesos', 'flujos de datos', 'consistencia'], sources[4808], null,
    'Respuesta B. En la regla general del análisis estructurado, cada proceso debe recibir al menos un flujo de datos y producir al menos uno. La ausencia de entrada se denomina proceso milagro y la ausencia de salida, pozo negro. La pregunta se concreta en esta regla para evitar mezclarla con convenciones de notación o excepciones particulares.', 'corregida'],
  [4809, ['98'], ['III-13'], ['CMMI-DEV v1.3', 'nivel de madurez 4', 'OPP', 'QPM', 'histórico'], sources[4809], null,
    'Respuesta D. En CMMI-DEV v1.3, la representación escalonada asigna al nivel 4 tanto Organizational Process Performance (OPP) como Quantitative Project Management (QPM); Requirements Development, Integrated Project Management y Organizational Process Definition están en el nivel 3. Se conserva OPP como la única opción correcta y se identifica la versión: las áreas de proceso y su organización dependen de la edición/modelo.', 'historica'],
  [4810, ['50'], ['III-13'], ['ISO 9000:2026', 'organización', 'vocabulario de calidad'], sources[4810], null,
    'Respuesta C. ISO 9000:2026, §3.1.1, denomina organización a la persona o grupo de personas con funciones propias, responsabilidades, autoridades y relaciones para alcanzar sus objetivos. Se cita la edición vigente a la fecha de revisión, publicada en mayo de 2026; no debe confundirse este término de vocabulario de gestión de la calidad con los roles de consumidor/proveedor del servicio de ITIL.', 'corregida']
];

const edits = {
  4806: { texto: 'Según COBIT, 3.ª edición (2000), ¿cuál de los siguientes elementos formaba parte de las cinco categorías de recursos TIC?', opciones: [
    'La calidad.', 'La planificación.', 'La tecnología.', 'Los estándares.'
  ] },
  4807: { texto: '¿Cómo se caracteriza DevOps en las prácticas actuales de desarrollo y operación de software?', opciones: [
    'Como un ciclo de vida con dos fases secuenciales y equipos que dejan de colaborar al terminar el desarrollo.',
    'Como una herramienta de gestión de proyectos ágiles.',
    'Como una metodología en la que equipos aislados compiten para lograr un desarrollo más eficiente.',
    'Como un movimiento cultural y técnico y un conjunto de prácticas que integra desarrollo y operaciones mediante colaboración y automatización.'
  ], respuesta_correcta: 3 },
  4808: { texto: 'En la regla general del análisis estructurado para un DFD, ¿qué requisito de consistencia debe cumplir cada proceso?', opciones: [
    'Puede carecer simultáneamente de flujos de entrada y de salida si se etiqueta con un nombre.',
    'Debe recibir al menos un flujo de datos y producir al menos un flujo de datos.',
    'Puede generar datos de salida sin entrada si el proceso se denomina primitivo.',
    'Los flujos de datos pueden conectar directamente dos entidades externas sin pasar por un proceso.'
  ], respuesta_correcta: 1 },
  4809: { texto: 'En CMMI-DEV v1.3, ¿cuál de estas áreas de proceso está asignada al nivel de madurez 4, «Gestionado cuantitativamente»?', opciones: [
    'Desarrollo de requisitos (RD).',
    'Gestión de proyecto integrada (IPM).',
    'Definición de proceso organizativo (OPD).',
    'Rendimiento de proceso organizativo (OPP).'
  ] },
  4810: { texto: 'Según ISO 9000:2026, §3.1.1, ¿a qué término corresponde la definición «persona o grupo de personas con funciones propias, responsabilidades, autoridades y relaciones para alcanzar sus objetivos»?', opciones: [
    'Consumidor del servicio.', 'Suministrador del servicio.', 'Organización.', 'Proveedor del servicio.'
  ] }
};

aplicar({ numero: '897', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(repo, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-897.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4806: { bloque: 'bloque 41 — ITIL y COBIT', detalle: 'ubica COBIT como marco de gobierno/gestión TIC; el material no enseña como vigente la lista histórica de cinco recursos de la 3.ª edición.', url: academy41 },
  4807: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'apartado D6 sobre DevOps e integración; el material sitúa el concepto, mientras DORA/Google sustentan la caracterización actual.', url: academy38 },
  4808: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'sección 5.1 dedicada a diagramas de flujo de datos; la regla concreta se contrasta con la fuente técnica citada.', url: academy38 },
  4809: { bloque: 'bloque 39 — calidad y mantenimiento', detalle: 'incluye modelos de madurez y CMMI; el mapeo concreto de áreas a niveles se verifica en el modelo SEI CMMI-DEV v1.3.', url: academy39 },
  4810: { bloque: 'bloque 39 — calidad y mantenimiento', detalle: 'ubica vocabulario y sistemas/modelos de gestión de calidad; no se atribuye al material de academia la edición ISO 9000:2026 ni su definición literal.', url: academy39 }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const a = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} La academia ubica el contenido; las fuentes primarias/técnicas fundamentan la respuesta.`;
  q.revision.observaciones += ` Cotejo curricular: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo de ubicación y alcance curricular; no se emplea como autoridad técnica primaria.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(repo, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y registro del lote 897 preparados.');
