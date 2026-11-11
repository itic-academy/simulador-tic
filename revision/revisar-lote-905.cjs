const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const metricTechniques = 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf';
const dfds = 'https://www.ibm.com/think/topics/data-flow-diagram';

const sources = {
  4846: [
    { url: 'https://www.iiba.org/business-analysis-certifications/ecba/ecba-competencies/', referencia: 'IIBA, ECBA Competencies, Elicitation and Collaboration: active listening and discovery help understand real stakeholder issues/needs; conceptual thinking connects pieces and avoids losing overall context.' },
    { url: 'https://www.iso.org/standard/72089.html', referencia: 'ISO/IEC/IEEE 29148:2018, requirements engineering: requirements work begins with stakeholder needs and the system context, not merely technical design preferences.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 88 y 90: análisis funcional y dinámico de sistemas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: determinación de requisitos y análisis.' }
  ],
  4847: [
    { url: 'https://www.mercurial-scm.org/about', referencia: 'Mercurial project, official About page: source control management and distributed version history.' },
    { url: 'https://git-scm.com/docs/user-manual', referencia: 'Git official manual: Git is a distributed revision control system.' },
    { url: 'https://subversion.apache.org/', referencia: 'Apache Subversion official project: centralized version control system.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 100/102: migración de aplicaciones, gestión de configuración, versiones y entornos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: gestión de configuración y control de cambios/versiones.' }
  ],
  4848: [
    { url: 'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html', referencia: 'AWS Prescriptive Guidance: enumera expresamente sus 7 Rs de migración cloud (retire, retain, rehost, relocate, repurchase, replatform, refactor/re-architect); reprompting no pertenece a esta taxonomía.' },
    { url: 'https://aws.amazon.com/what-is/application-migration/', referencia: 'AWS, Application Migration: describe estrategias de rehost, replatform, refactor, repurchase, retire y retain.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 100: migración de aplicaciones y obsolescencia técnica.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.1: computación en nube y sus capacidades.' }
  ],
  4849: [
    { url: dfds, referencia: 'IBM, DFD: modelo de procesos/flujo de datos, diferenciado de los diagramas UML de clases.' },
    { url: metricTechniques, referencia: 'MÉTRICA v3, Técnicas: incluye técnica DFD y notaciones/modelos estructurados; el enunciado se acota a análisis clásico DeMarco/Yourdon para distinguirlo del modelo UML de clases.' },
    { url: 'https://www.omg.org/spec/UML/2.5.1/PDF', referencia: 'OMG UML 2.5.1: el diagrama de clases representa clases, atributos, operaciones y relaciones del modelo orientado a objetos; no es un producto DFD del análisis estructurado clásico.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 90: modelado de procesos y análisis dinámico.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: análisis y determinación de requisitos.' }
  ],
  4850: [
    { url: 'https://www.ruby-lang.org/en/about/', referencia: 'Ruby official website: Ruby is a programming language.' },
    { url: 'https://git-scm.com/docs/user-manual', referencia: 'Git official manual: distributed revision control.' },
    { url: 'https://subversion.apache.org/', referencia: 'Apache Subversion official project: version control.' },
    { url: 'https://learn.microsoft.com/en-us/visualstudio/version-control/visual-studio-version-control?view=vs-2022', referencia: 'Microsoft documentation on version-control tools and Visual SourceSafe migration/history; SourceSafe is an older version-control product.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 102: configuración, cambios y versiones.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: gestión de configuración y control de versiones.' }
  ]
};

const records = [
  [4846, ['88', '90'], ['III-3'], ['análisis', 'requisitos', 'escucha activa', 'visión de conjunto', 'stakeholders'], sources[4846], null,
    'Respuesta C. Se sustituye “la característica más importante” —jerarquía subjetiva— por una situación concreta: conservar la visión global mientras se analizan detalles. La capacidad de entender problemas del entorno usuario también es importante, pero corresponde a descubrimiento/escucha de necesidades; no es sinónimo de pensamiento conceptual o sistémico.', 'corregida'],
  [4847, ['100', '102'], ['IV-4'], ['control de versiones', 'Mercurial', 'Git', 'Subversion', 'SVN'], sources[4847], null,
    'Respuesta A. Mercurial, Git y Apache Subversion son sistemas de control de versiones; GIMP es edición de imágenes; Redmine/Planner/OpenProj son herramientas de gestión de proyectos, no el conjunto solicitado. Se conserva la opción correcta y se explicita que Apache Subversion también se conoce como SVN.', 'corregida'],
  [4848, ['100'], ['II-1'], ['migración a la nube', 'AWS 7 Rs', 'rehost', 'refactor', 'replatform'], sources[4848], null,
    'Respuesta B. La taxonomía de migración a AWS Cloud documentada por AWS enumera siete estrategias: retire, retain, rehost, relocate, repurchase, replatform y refactor/re-architect. “Reprompting” no es una estrategia de esa clasificación. Se especifica AWS porque otras organizaciones pueden emplear taxonomías diferentes y no existe un único catálogo universal para toda migración de aplicaciones.', 'corregida'],
  [4849, ['90'], ['III-3'], ['análisis estructurado', 'DeMarco', 'Yourdon', 'DFD', 'UML', 'modelo de procesos'], sources[4849], null,
    'Respuesta D. En la pregunta reformulada, un diagrama de clases UML pertenece al modelado orientado a objetos, mientras que el análisis estructurado clásico usa artefactos como DFD y especificaciones de procesos. El original mezclaba “DFP/diagrama de flujos de procesos” sin definirlo, por lo que su clasificación no era inequívoca.', 'corregida'],
  [4850, ['100', '102'], ['IV-4'], ['control de versiones', 'Ruby', 'Git', 'Subversion', 'SourceSafe'], sources[4850], null,
    'Respuesta C. Ruby es un lenguaje de programación. Git, Subversion y Visual SourceSafe son/eran herramientas de control de versiones; SourceSafe es un producto histórico, no un sistema actual recomendado, pero sí pertenece a la categoría. La pregunta se plantea como clasificación de tipos y no como recomendación de herramientas vigentes.', 'corregida']
];

const edits = {
  4846: { texto: 'Al analizar un sistema complejo, ¿qué habilidad permite al analista no perder el objetivo global mientras examina detalles de procesos y requisitos?', opciones: [
    'Comprender únicamente conceptos matemáticos abstractos, sin relacionarlos con el dominio.',
    'Recoger los problemas del usuario sin conectar unos con otros ni priorizarlos.',
    'Mantener una visión de conjunto y relacionar los elementos del sistema sin perderse en los detalles.',
    'Elegir de antemano una combinación de hardware y software sin analizar las necesidades.'
  ], respuesta_correcta: 2 },
  4847: { texto: '¿Qué opción contiene únicamente herramientas de control de versiones de software?', opciones: [
    'Mercurial, Git y Apache Subversion (SVN).',
    'GIMP, Mercurial y Git.',
    'Redmine, Planner y OpenProj.',
    'Cassandra, Git y Redis.'
  ], respuesta_correcta: 0 },
  4848: { texto: 'Según la clasificación de las 7 Rs de AWS para migrar aplicaciones a AWS Cloud, ¿cuál de las siguientes NO es una estrategia de migración?', opciones: [
    'Rehost.',
    'Reprompting.',
    'Replatform.',
    'Retire.'
  ], respuesta_correcta: 1 },
  4849: { texto: 'En el análisis estructurado clásico de DeMarco/Yourdon, ¿cuál de estos artefactos NO pertenece al modelado estructurado de procesos y datos?', opciones: [
    'Diagrama de transición de estados.',
    'Diagrama de flujo de datos (DFD).',
    'Diccionario de datos.',
    'Diagrama de clases UML.'
  ], respuesta_correcta: 3 },
  4850: { texto: '¿Qué opción nombra un lenguaje de programación y no una herramienta de control de versiones?', opciones: [
    'Apache Subversion (SVN).',
    'Git.',
    'Ruby.',
    'Microsoft Visual SourceSafe.'
  ], respuesta_correcta: 2 }
};

aplicar({ numero: '905', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-905.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = {
    4846: 'bloque 38 — análisis, diseño y construcción; análisis de requisitos, necesidades de usuarios y visión integral del sistema.',
    4847: 'bloque 38 — análisis, diseño y construcción; apartado 17, fuentes y control de versiones (Git/SVN como referencia).',
    4848: 'bloque 38 — análisis, diseño y construcción; modernización y ciclo de vida tratados de forma general. La taxonomía AWS 7 Rs no aparece por nombre en el bloque.',
    4849: 'bloque 38 — análisis, diseño y construcción; apartado 5, análisis estructurado, DFD y técnicas de modelado.',
    4850: 'bloque 38 — análisis, diseño y construcción; apartado 17, configuración/fuentes/versiones. Ruby se compara por clasificación técnica, no por cobertura específica de academia.'
  }[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${detail} Cotejo curricular, no autoridad técnica.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} La academia sirve de mapa de contenidos, no de fuente técnica primaria.`;
  q.revision.observaciones += ` Cotejo curricular: ${detail} La academia sirve de mapa de contenidos, no de fuente técnica primaria.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy38, referencia: `ITIC Academy 2026.1, ${detail} Cotejo de cobertura curricular.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 905.');
