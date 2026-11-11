const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const efqm = 'https://efqm.org/the-efqm-model/';
const iso9004 = 'https://www.iso.org/standard/70397.html';
const unity = 'https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/may/patterns-and-practices-simplifying-patterns-and-practices';
const dotnetDi = 'https://learn.microsoft.com/dotnet/core/extensions/dependency-injection/';
const openup = 'https://archive.eclipse.org/epf/downloads/OpenUP/published/openup_published_1.5.1.5_20121212/openup/publish.openup.base/guidances/supportingmaterials/minimal_complete_extensible_6D757693.html';
const metrica = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf';
const scrum = 'https://scrumguides.org/scrum-guide.html';
const academy15 = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy39 = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';

const sources = {
  4786: [
    { url: efqm, referencia: 'EFQM, modelo vigente: estructura articulada en Direction, Execution y Results, con preguntas guía sobre por qué existe la organización, cómo ejecuta su propósito y qué resultados alcanza y pretende alcanzar.' },
    { url: iso9004, referencia: 'ISO 9004:2018, ficha oficial: proporciona directrices para mejorar la capacidad de una organización de lograr el éxito sostenido; no es una norma de requisitos para certificar un sistema de gestión de calidad.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 103: calidad en servicios de información, modelo EFQM y guía ISO 9004.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.13: calidad del software y su medida, modelos, métricas, normas y estándares.' }
  ],
  4787: [
    { url: unity, referencia: 'Microsoft patterns & practices, archivo MSDN: Object Builder es la base de Unity, contenedor ligero de inyección de dependencias que admite inyección por constructor, propiedades y llamadas a métodos; Unity se ofreció como Unity Application Block.' },
    { url: dotnetDi, referencia: 'Microsoft Learn, documentación actual de .NET: .NET admite el patrón de inyección de dependencias mediante un contenedor de servicios; la pregunta se fecha como referencia histórica a Unity Application Block.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software y patrones.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos, proceso unificado y patrones de diseño.' }
  ],
  4788: [
    { url: openup, referencia: 'Eclipse Process Framework, documentación archivada de OpenUP: lo define expresamente como un proceso ágil y ligero, con buenas prácticas de desarrollo de software.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: metodologías de desarrollo de sistemas y metodologías ágiles.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: proceso unificado de software y patrones; OpenUP es una variante ligera y ágil de la familia Unified Process.' }
  ],
  4789: [
    { url: metrica, referencia: 'PAe, MÉTRICA v3, Planificación de Sistemas de Información, actividad PSI 5: estudio de los sistemas actuales afectados por el plan, con el alcance y profundidad adecuados a los objetivos definidos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA para planificación y desarrollo de sistemas de información.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.' }
  ],
  4790: [
    { url: scrum, referencia: 'Scrum Guide 2020, texto oficial de sus creadores: define Scrum como un marco ligero para generar valor mediante soluciones adaptativas y describe su enfoque iterativo e incremental.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 88: metodologías ágiles, con Scrum y Kanban citados expresamente.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: metodologías de desarrollo y planificación del proceso.' }
  ]
};

const records = [
  [4786, ['103'], ['III-13'], ['EFQM', 'modelo EFQM', 'ISO 9004', 'calidad', 'éxito sostenido'], sources[4786], null,
    'Respuesta A. El modelo EFQM vigente se organiza en Direction, Execution y Results. Results no se limita a beneficios económicos: el modelo contempla resultados relevantes para las partes interesadas y la sostenibilidad. ISO 9004:2018 ofrece directrices para el éxito sostenido y no fija requisitos de certificación. Se elimina la mezcla del original entre un reparto de puntuación de una edición antigua de EFQM y la versión ISO 9004:2000.', 'corregida'],
  [4787, ['93'], ['III-9'], ['.NET', 'Unity Application Block', 'IoC', 'inyección de dependencias', 'Microsoft patterns & practices'], sources[4787], null,
    'Respuesta A. Unity Application Block fue el contenedor de inversión de control e inyección de dependencias de Microsoft patterns & practices. El enunciado se acota a ese componente histórico: .NET actual documenta su propio contenedor de servicios y el patrón de inyección de dependencias, por lo que Unity no debe presentarse como la única alternativa vigente.', 'historica'],
  [4788, ['88'], ['III-2', 'III-9'], ['OpenUP', 'proceso ágil', 'Eclipse Process Framework', 'proceso unificado'], sources[4788], null,
    'Respuesta B. La documentación de Eclipse califica OpenUP como proceso ágil y ligero. La pregunta se concreta en el proceso de Eclipse para que no dependa de una clasificación genérica discutible: RAD puede describir enfoques rápidos con rasgos ágiles, mientras que OpenUP es una variante explícitamente ágil de Unified Process.', 'corregida'],
  [4789, ['95'], ['III-2'], ['MÉTRICA v3', 'PSI', 'PSI 5', 'sistemas de información actuales', 'planificación'], sources[4789], null,
    'Respuesta A. En MÉTRICA v3 la actividad PSI 5 estudia los sistemas de información actuales afectados por el Plan de Sistemas de Información. La respuesta es correcta; se incorpora la identificación PSI 5 para distinguir esta actividad de la identificación de requisitos y de actividades de definición del sistema.', 'corregida'],
  [4790, ['88'], ['III-2'], ['Scrum', 'metodologías ágiles', 'marco de trabajo', 'iterativo', 'incremental'], sources[4790], null,
    'Respuesta B. Scrum se encuadra en los enfoques ágiles; la Guía Scrum lo define con mayor precisión como un marco ligero, iterativo e incremental. Se conserva la clave y se evita llamar a Scrum una metodología prescriptiva completa.', 'vigente']
];

const edits = {
  4786: { texto: '¿Cuál de las siguientes afirmaciones es correcta sobre el modelo EFQM vigente y la norma ISO 9004:2018?', opciones: [
    'El modelo EFQM se estructura en las dimensiones Direction, Execution y Results.',
    'En EFQM, Results evalúa exclusivamente los beneficios económicos de la organización.',
    'ISO 9004:2018 establece requisitos obligatorios para certificar un sistema de gestión de la calidad.',
    'EFQM organiza el modelo únicamente en procesos y políticas, sin considerar resultados.'
  ], respuesta_correcta: 0 },
  4787: { texto: 'En el ecosistema histórico de Microsoft patterns & practices para .NET, ¿qué componente se ofrecía como contenedor de inversión de control e inyección de dependencias?', opciones: [
    'Unity Application Block.', 'Logging Application Block.', 'Ajax Control Toolkit.', 'Cached XML Data Mapper.'
  ], respuesta_correcta: 0 },
  4788: { texto: '¿Qué proceso del Eclipse Process Framework se describe explícitamente como un proceso de desarrollo de software ágil y ligero?', opciones: [
    'RAD.', 'OpenUP.', 'SSADM.', 'Unified Process sin adaptar.'
  ], respuesta_correcta: 1 },
  4789: { texto: 'En MÉTRICA v3, dentro del proceso Planificación de Sistemas de Información (PSI), ¿qué actividad estudia los sistemas actuales afectados por el plan?', opciones: [
    'PSI 5: Estudio de los Sistemas de Información Actuales.',
    'EVS: Definición de Requisitos del Sistema.',
    'PSI 6: Diseño del Modelo de Sistemas de Información.',
    'CSI: Construcción del Sistema de Información.'
  ], respuesta_correcta: 0 },
  4790: { texto: '¿En qué enfoque de desarrollo se encuadra Scrum, definido por su guía oficial como un marco ligero, iterativo e incremental?', opciones: [
    'Metodologías de tiempo real.', 'Enfoques ágiles.', 'Metodologías orientadas a objetos.', 'Metodologías estructuradas orientadas a datos jerárquicos.'
  ], respuesta_correcta: 1 }
};

aplicar({ numero: '893', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(repo, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-893.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4786: { bloque: 'bloque 39 — calidad y mantenimiento', detalle: 'contenido de calidad de servicios, modelo EFQM y referencias ISO 9004; se coteja el epígrafe A1 103 y el bloque A2 de calidad.', url: academy39 },
  4787: { bloque: 'bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'apartados de diseño/patrones e inyección de dependencias; Unity se trata como componente histórico, no como recomendación actual.', url: academy38 },
  4788: { bloque: 'Tema 15 — metodologías ágiles y ciclo de vida', detalle: 'apartado de métodos y procesos de desarrollo; el programa oficial incluye metodologías de desarrollo y proceso unificado. El material Academy no menciona OpenUP nominalmente.', url: academy15 },
  4789: { bloque: 'bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de MÉTRICA v3 y planificación/desarrollo; la tarea PSI 5 se comprueba en la documentación oficial PAe.', url: academy38 },
  4790: { bloque: 'Tema 15 — metodologías ágiles y ciclo de vida', detalle: 'secciones 4–8 sobre Scrum; el documento refleja Scrum dentro de las metodologías ágiles y el temario oficial A1 lo cita expresamente.', url: academy15 }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const a = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} El material Academy ubica o contextualiza el contenido; las fuentes primarias/técnicas citadas fundamentan la respuesta.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo de ubicación curricular; no se usa como fuente técnica primaria.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(repo, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 893 preparados.');
