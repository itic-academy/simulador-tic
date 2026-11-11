const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metricPsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf';
const metricAsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const metricTechniques = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ada7d91fa-d6bd-467c-be32-a72e27c603b3/METRICA_V3_Tecnicas.pdf';
const iso26514 = 'https://www.iso.org/standard/77451.html';
const mysqlFk = 'https://dev.mysql.com/doc/workbench/en/wb-basic-foreign-key.html';
const rup = 'https://public.dhe.ibm.com/software/rational/web/whitepapers/2003/rup_bestpractices.pdf';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy93 = 'https://docs.google.com/document/d/1ihmfO0PXn1lenLrjgS3SmP0xg01CLnS0/edit?usp=drivesdk';

const sources = {
  4801: [
    { url: metricTechniques, referencia: 'PAe, MÉTRICA v3, Técnicas: define la técnica Factores Críticos de Éxito y su finalidad de apoyo a la planificación de actividades/recursos y priorización; la aplicación en PSI 1 se comprueba además en el manual oficial de Planificación.' },
    { url: metricPsi, referencia: 'PAe, MÉTRICA v3, Planificación de Sistemas de Información: PSI 1 identifica y recoge FCE como parte del alcance/objetivos del PSI; su tabla de técnicas sitúa FCE en PSI 1.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 95: metodología MÉTRICA para planificación y desarrollo de sistemas de información.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodología MÉTRICA.' }
  ],
  4802: [
    { url: iso26514, referencia: 'ISO/IEC/IEEE 26514:2022, edición vigente: requisitos para estructura, contenido y formato de la información para usuarios de software; cubre el proceso de diseño/desarrollo a lo largo del ciclo de vida.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 50: organismos de normalización y estándares.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.6: estándares de documentación, manuales de usuario y técnicos.' }
  ],
  4803: [
    { url: mysqlFk, referencia: 'MySQL Workbench Manual, relación no identificadora 1:N: la clave ajena se crea en la tabla del lado «muchos» y referencia la clave del lado «uno».' },
    { url: 'https://learn.microsoft.com/en-us/ef/core/modeling/relationships/foreign-and-principal-keys', referencia: 'Microsoft EF Core: las relaciones uno-a-muchos se representan mediante una clave ajena en el extremo dependiente que referencia la clave principal/alternativa del principal.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 89: modelo entidad-relación y modelado de dominio.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.4: modelado de datos, diseño relacional y diseño lógico/físico.' }
  ],
  4804: [
    { url: metricAsi, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información: el análisis comprende estudio de procesos, determinación de necesidades y especificación/catálogo de requisitos antes del diseño del sistema.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: metodologías de desarrollo de sistemas.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.1: modelos y fases del ciclo de vida de los sistemas.' }
  ],
  4805: [
    { url: rup, referencia: 'IBM Rational, RUP Best Practices: proceso organizado en las fases Inception, Elaboration, Construction y Transition; cada fase se desarrolla iterativamente.' },
    { url: 'https://www.ibm.com/docs/en/rational-clearquest/10.0.9?topic=settings-project-planning', referencia: 'Documentación de IBM: RUP define las cuatro fases y permite una o más iteraciones por fase.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: metodologías de desarrollo de sistemas.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.9: proceso unificado de software y análisis/diseño orientado a objetos.' }
  ]
};

const records = [
  [4801, ['95'], ['III-2'], ['MÉTRICA v3', 'PSI', 'factores críticos de éxito', 'planificación', 'prioridades'], sources[4801], null,
    'Respuesta A. En MÉTRICA v3, los factores críticos de éxito apoyan la planificación de actividades y recursos y la asignación de prioridades. En el proceso PSI se identifican durante el inicio del Plan de Sistemas de Información y se consideran en su definición y planificación. Se corrige la errata «fas».', 'corregida'],
  [4802, ['50'], ['III-6'], ['ISO/IEC/IEEE 26514:2022', 'documentación de usuario', 'documentación del software', 'normas'], sources[4802], null,
    'Respuesta A. La referencia vigente es ISO/IEC/IEEE 26514:2022, que establece requisitos para la estructura, el contenido y el formato de la información para usuarios de software, y cubre su diseño y desarrollo a lo largo del ciclo de vida. El enunciado original y la opción omitían IEEE y el año/edición vigente.', 'corregida'],
  [4803, ['89'], ['III-4'], ['modelo relacional', 'relación 1:N', 'clave primaria', 'clave ajena', 'lado muchos'], sources[4803], null,
    'Respuesta D. Al transformar una relación binaria 1:N entre entidades con identificadores propios, la clave del lado 1 se incorpora como clave ajena en la tabla del lado N. No se convierte por sí sola en la clave primaria de la tabla N; los casos de entidades débiles o relaciones identificadoras requieren reglas adicionales. El original admitía más de una lectura correcta entre dependencia y asociación.', 'corregida'],
  [4804, ['88'], ['III-1'], ['ciclo de vida', 'modelo en cascada', 'análisis', 'requisitos'], sources[4804], null,
    'Respuesta B. En la secuencia clásica del modelo en cascada, la fase de análisis estudia el problema y las necesidades del usuario y documenta los requisitos antes del diseño. Se sustituye la explicación larga y circular del original por una formulación que distingue análisis de planificación, diseño e implementación.', 'corregida'],
  [4805, ['88'], ['III-9'], ['RUP', 'Proceso Unificado', 'ciclo de vida', 'fases', 'iterativo'], sources[4805], null,
    'Respuesta A. RUP es el proceso organizado en cuatro fases: inicio, elaboración, construcción y transición; dentro de ellas el trabajo se planifica iterativamente. XP también es un método ágil y puede aplicarse a desarrollo orientado a objetos, por lo que el enunciado genérico original no hacía única la opción RUP.', 'corregida']
];

const edits = {
  4801: { opciones: [
    'Ayudar a planificar las actividades y los recursos de una organización, facilitando la asignación de prioridades.',
    'Identificar directamente todos los requisitos funcionales que debe implementar un sistema de información.',
    'Determinar el impacto de una petición de cambio en un sistema ya implantado.',
    'Verificar las interfaces entre subsistemas durante las pruebas de integración.'
  ] },
  4802: { texto: '¿Qué norma vigente establece requisitos para diseñar y desarrollar la información destinada a usuarios de productos software?', opciones: [
    'ISO/IEC/IEEE 26514:2022.',
    'ISO/IEC 9295.',
    'ISO/IEC 27002.',
    'ISO/IEC 25101.'
  ], respuesta_correcta: 0 },
  4803: { texto: 'Al transformar en tablas una relación binaria 1:N entre dos entidades con identificadores propios, ¿dónde se incorpora normalmente la clave ajena que representa la relación?', opciones: [
    'En la tabla del lado 1, apuntando a la clave primaria del lado N.',
    'En una tabla intermedia obligatoria para toda relación 1:N.',
    'En ambas tablas, sustituyendo sus respectivas claves primarias.',
    'En la tabla del lado N, referenciando la clave primaria de la tabla del lado 1.'
  ], respuesta_correcta: 3 },
  4804: { texto: 'En el modelo clásico en cascada, ¿qué fase estudia el problema del usuario y documenta las necesidades y requisitos del sistema antes de su diseño?', opciones: [
    'Planificación.', 'Análisis de requisitos.', 'Diseño.', 'Codificación e integración.'
  ], respuesta_correcta: 1 },
  4805: { texto: '¿Qué proceso unificado se organiza en las fases de inicio, elaboración, construcción y transición, con desarrollo iterativo dentro de ellas?', opciones: [
    'Rational Unified Process (RUP).',
    'Extreme Programming (XP).',
    'Método estructurado de DeMarco.',
    'Método de diseño estructurado de Warnier-Orr.'
  ], respuesta_correcta: 0 }
};

aplicar({ numero: '896', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(repo, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-896.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4801: { bloque: 'Tema 093 — metodología MÉTRICA', detalle: 'incluye FCE entre las técnicas y prácticas de planificación; el detalle de su objetivo se fundamenta en los manuales PAe/MÉTRICA.', url: academy93 },
  4802: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'el temario trata documentación y manuales de usuario/técnicos dentro del ciclo de vida; no cita expresamente ISO/IEC/IEEE 26514:2022.', url: academy38 },
  4803: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'incluye modelado estructurado de datos/entidad-relación; no reproduce la regla de propagación 1:N, contrastada con la documentación técnica de MySQL Workbench.', url: academy38 },
  4804: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'incluye el modelo en cascada y la secuencia de fases; la definición de requisitos/análisis se coteja además con MÉTRICA v3.', url: academy38 },
  4805: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'sección 4.5, cuadro comparativo de Scrum, Kanban, RUP y modelos clásicos.', url: academy38 }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const a = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} El material de academia sirve para ubicar el contenido, no sustituye la fuente técnica primaria.`;
  q.revision.observaciones += ` Cotejo curricular: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo de ubicación/alcance curricular; no se usa como autoridad técnica primaria.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(repo, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y registro de lote 896 preparados.');
