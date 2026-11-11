const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy39 = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academy41 = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const metricAnalysis = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const metricQuality = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A6838aec9-835a-4562-bdc3-87a96fd9c743/METRICA_V3_Aseguramiento_de_la_Calidad.pdf';

const sources = {
  4831: [
    { url: metricAnalysis, referencia: 'MÉTRICA v3, ASI 1.1: obtiene un modelo conceptual de datos identificando entidades y relaciones del sistema de información; se limita el caso a una sola empresa como contexto fijo.' },
    { url: 'https://www.irs.gov/irm/part2/irm_02-005-013', referencia: 'IRS, técnicas de diseño de bases de datos: el modelo entidad-relación describe datos como entidades, atributos y relaciones y evita representar dos veces la misma información.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 89: modelado de dominio y modelo entidad-relación.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.4: modelado de datos y diseño de bases de datos.' }
  ],
  4832: [
    { url: 'https://www.peoplecert.org/-/media/peoplecert/images/landing-pages/devops-launch-indian/peoplecert-devops-leadership.pdf', referencia: 'PeopleCert, glosario ITIL: define incidente como interrupción no planificada del servicio o reducción de su calidad; se acota expresamente la pregunta a ITIL 4.' },
    { url: 'https://www.axelos.com/certifications/itil-service-management/itil-practices-manager/itil-4-specialist-monitor-support-and-fulfil/itil-4-practitioner-incident-management/', referencia: 'PeopleCert/AXELOS, práctica de gestión de incidentes ITIL 4: objetivo de minimizar impacto negativo restaurando la operación normal del servicio con rapidez.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 106: gestión de servicios e incidencias, bases conceptuales de ITIL.' }
  ],
  4833: [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ad601853c-e255-4ade-a9f8-af1357e3a151/METRICA_V3_Participantes.pdf', referencia: 'MÉTRICA v3, Participantes, “Perfil Jefe de Proyecto”: enumera Jefe de Proyecto, responsables de Implantación, Mantenimiento, Operación, Sistemas, Seguridad y Calidad.' },
    { url: metricQuality, referencia: 'MÉTRICA v3, Aseguramiento de la Calidad: describe la participación del Grupo de Aseguramiento de la Calidad y el apoyo del Responsable de Calidad dentro de la interfaz CAL.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 95: metodología MÉTRICA y sus perfiles/participantes.' }
  ],
  4834: [
    { url: metricQuality, referencia: 'MÉTRICA v3, Aseguramiento de la Calidad, EVS-CAL 2.1: la necesidad del plan se determina para cada alternativa teniendo en cuenta el análisis de riesgos, el enfoque del plan de trabajo y las propiedades de calidad. EVS-CAL 2.3 valora su coste mediante análisis coste/beneficio para determinar viabilidad económica.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, temas 95 (MÉTRICA) y 98 (calidad/modelos de proceso, según el programa publicado).' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.13: calidad del software y modelos, métricas, normas y estándares.' }
  ],
  4835: [
    { url: metricAnalysis, referencia: 'MÉTRICA v3, Análisis del Sistema de Información: en ASI 8.3 el prototipado apoya la especificación de formatos de pantalla; ASI 8.4 contempla prototipo de interfaz interactiva. La introducción señala que estas técnicas facilitan que el usuario se familiarice y colabore en el perfeccionamiento del sistema.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 95: metodología MÉTRICA v3.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: estrategias de determinación de requisitos, incluidos los prototipos.' }
  ]
};

const records = [
  [4831, ['89'], ['III-4'], ['modelo entidad-relación', 'entidades', 'departamentos', 'empleados', 'proyectos'], sources[4831], null,
    'Respuesta C. Interpretando una sola empresa como ámbito fijo del sistema, las entidades que el enunciado pide mantener como conjuntos de registros son Empleados, Departamentos y Proyectos. “Empresa” es el contexto común, no una entidad variable que el caso solicite distinguir; las colaboraciones se representan como relaciones entre empleados y proyectos. Se explicita este supuesto porque un sistema multicompañía sí podría modelar Empresa como entidad.', 'corregida'],
  [4832, ['106'], [], ['ITIL 4', 'incidente', 'interrupción no planificada', 'calidad del servicio'], sources[4832], null,
    'Respuesta B. En ITIL 4, un incidente es una interrupción no planificada de un servicio o una reducción de su calidad. Un problema es una causa —o causa potencial— de uno o más incidentes; cambio es la adición, modificación o eliminación que puede afectar a servicios. Se incluye versión para fijar el vocabulario de referencia.', 'corregida'],
  [4833, ['95'], [], ['MÉTRICA v3', 'perfil jefe de proyecto', 'responsable de calidad', 'aseguramiento de calidad'], sources[4833], null,
    'Respuesta A. MÉTRICA v3 agrupa al Responsable de Calidad en el perfil Jefe de Proyecto, junto al propio jefe y a los responsables de implantación, mantenimiento, operación, sistemas y seguridad. El perfil clasifica participantes; no significa que el Responsable de Calidad sustituya al jefe de proyecto.', 'corregida'],
  [4834, ['95', '98'], ['III-13'], ['MÉTRICA v3', 'plan de aseguramiento de calidad', 'análisis de riesgos', 'coste-beneficio'], sources[4834], null,
    'Respuesta D. No existe una regla universal basada solo en tamaño, petición del cliente o comparación simplificada entre dos costes. En MÉTRICA v3, durante EVS-CAL se valora para cada alternativa la necesidad e intensidad del aseguramiento atendiendo al estudio, las propiedades de calidad, los riesgos y el enfoque del plan de trabajo; después se estima el coste del plan y se incorpora al análisis de viabilidad coste/beneficio.', 'corregida'],
  [4835, ['95'], ['III-3'], ['MÉTRICA v3', 'prototipos', 'interfaz de usuario', 'elicitación de requisitos', 'usuarios'], sources[4835], null,
    'Respuesta D. En el análisis, MÉTRICA v3 utiliza técnicas interactivas como prototipos para que los usuarios se familiaricen con el sistema y colaboren en su construcción y perfeccionamiento. ASI 8 contempla prototipado para especificar formatos de pantalla y comportamiento interactivo. Un prototipo no tiene por qué implementar todas las funciones del sistema final ni definir su objetivo después de empezar a construirlo.', 'corregida']
];

const edits = {
  4831: { texto: 'En el modelo conceptual de datos de una aplicación para una única empresa, se deben registrar empleados, departamentos y proyectos en los que colaboran los empleados. ¿Qué conjuntos de entidades son necesarios para representar esos datos?', opciones: [
    'Empleados, departamentos y empresa; los proyectos se guardan como atributo del empleado.',
    'Empresa, proyectos, empleados y departamentos; la empresa se registra como entidad aunque sea el ámbito fijo del sistema.',
    'Empleados, proyectos y departamentos; las colaboraciones se representan mediante relaciones entre entidades.',
    'Solo empleados y departamentos; un proyecto no puede modelarse como entidad.'
  ], respuesta_correcta: 2 },
  4832: { texto: 'Según ITIL 4, ¿qué se entiende por incidente?', opciones: [
    'Un problema analizado, pero todavía no resuelto.',
    'Una interrupción no planificada de un servicio o una reducción de la calidad de un servicio.',
    'Una causa, o causa potencial, de uno o más incidentes.',
    'La adición, modificación o eliminación de algo que puede afectar directa o indirectamente a los servicios.'
  ], respuesta_correcta: 1 },
  4833: { texto: '¿En qué perfil de participantes de MÉTRICA v3 se incluye al Responsable de Calidad?', opciones: [
    'Perfil Jefe de Proyecto.',
    'Perfil Consultor.',
    'Perfil Analista.',
    'Perfil Programador/Desarrollador.'
  ], respuesta_correcta: 0 },
  4834: { texto: 'Según MÉTRICA v3, ¿cómo se determina durante el Estudio de Viabilidad la necesidad de un plan específico de aseguramiento de calidad?', opciones: [
    'Se exige únicamente en proyectos de gran envergadura.',
    'Se establece solo cuando el cliente lo solicita expresamente.',
    'Se implanta siempre con la misma intensidad, sin atender a riesgos ni alternativas.',
    'Se estudian las alternativas y sus propiedades de calidad, riesgos y plan de trabajo; la intensidad se decide en función de ese análisis y el coste del plan se incorpora a la valoración de viabilidad.'
  ], respuesta_correcta: 3 },
  4835: { texto: 'Según MÉTRICA v3, ¿para qué se emplean técnicas interactivas como los prototipos durante el análisis del sistema?', opciones: [
    'Para entregar desde el inicio una réplica completa y funcional del sistema final.',
    'Para sustituir la participación de los usuarios en la especificación de requisitos.',
    'Para decidir el propósito del prototipo una vez finalizada su construcción.',
    'Para que los usuarios se familiaricen con el sistema y colaboren en la definición y el perfeccionamiento de sus interfaces.'
  ], respuesta_correcta: 3 }
};

aplicar({ numero: '902', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-902.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4831: ['bloque 38 — análisis, diseño y construcción; apartado de modelo de datos/MÉTRICA, entidades y relaciones.', academy38],
  4832: ['bloque 41 — ITIL y COBIT; gestión de servicios e incidencias.', academy41],
  4833: ['bloque 39 — calidad y mantenimiento; MÉTRICA v3 y perfiles para aseguramiento de calidad.', academy39],
  4834: ['bloque 39 — calidad y mantenimiento; aseguramiento de calidad, análisis de riesgos y planes de calidad.', academy39],
  4835: ['bloque 38 — análisis, diseño y construcción; MÉTRICA, requisitos, prototipado e interfaces.', academy38]
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [detail, url] = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${detail} El cotejo ubica el contenido, no sustituye fuentes técnicas.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} La academia se emplea como mapa curricular, no como autoridad técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ${detail} La academia se emplea como mapa curricular, no como autoridad técnica.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy 2026.1, ${detail} Cotejo de cobertura curricular; no se usa para validar la respuesta.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido a las preguntas del lote 902.');
