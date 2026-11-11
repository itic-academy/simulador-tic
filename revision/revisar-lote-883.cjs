const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyMetric = 'https://docs.google.com/document/d/1ihmfO0PXn1lenLrjgS3SmP0xg01CLnS0/edit?usp=drivesdk';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academyData = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';

const fuentes = {
  4736: [
    { url: 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Participantes.pdf', referencia: 'MÉTRICA v3, documento oficial Participantes, sección Perfil Analista: incluye al Equipo de Arquitectura, junto con Analista, Administrador de Bases de Datos, Equipo de Formación, Implantación, Operación, Seguridad, Soporte Técnico, Equipo de Proyecto y Grupo de Aseguramiento de la Calidad. Especialistas en Comunicaciones pertenecen al perfil Consultor y Usuarios expertos al Directivo.' },
    { url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3', referencia: 'Portal oficial PAe de MÉTRICA v3, que publica los documentos de la metodología, incluido Participantes.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA de planificación y desarrollo de sistemas de información.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, temas III.2 (proceso de desarrollo/metodologías) y III.3 (determinación de requisitos).' }
  ],
  4737: [
    { url: 'https://www.omg.org/spec/BPMN/2.0.2/PDF/', referencia: 'OMG BPMN 2.0.2, apartado 9.3: Pool representa gráficamente un Participant y actúa como “swimlane” y contenedor gráfico que particiona actividades frente a otros Pools. Lane es una subpartición dentro del Pool y organiza/categoriza actividades.' },
    { url: 'https://www.omg.org/spec/BPMN/', referencia: 'Catálogo formal OMG de BPMN: registra la versión 2.0.2 como especificación formal.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 90: análisis dinámico, modelado de procesos y BPMN.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.1: ciclo de vida y fases de los sistemas; ubicación curricular del modelado de procesos.' }
  ],
  4738: [
    { url: 'https://www.iso.org/standard/22749.html', referencia: 'Catálogo ISO de ISO/IEC 9126-1:2001: identifica su título y registra la edición como retirada en 2012; la norma es histórica.' },
    { url: 'https://standards.iteh.ai/catalog/standards/iso/d4ab62c2-7a1f-4586-b33d-25bcf8cf19c1/iso-iec-9126-1-2001', referencia: 'Vista del texto de ISO/IEC 9126-1:2001, cláusula 6: el modelo de calidad interna y externa contiene seis características: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad. El modelo de calidad en uso se trata por separado.' },
    { url: 'https://www.iso.org/standard/78176.html', referencia: 'ISO/IEC 25010:2023, edición actual del modelo de calidad de producto: nueve características; se cita para dejar claro que el reactivo se refiere a la edición histórica 9126 y no al modelo vigente.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 98: métricas y evaluación de la calidad del software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.13: calidad del software, modelos, métricas, normas y estándares.' }
  ],
  4739: [
    { url: 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Seguridad.pdf', referencia: 'MÉTRICA v3, interfaz oficial de Seguridad: incluye EVS-SEG 2, Selección del Equipo de Seguridad, dentro del proceso EVS (Estudio de Viabilidad del Sistema).' },
    { url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3', referencia: 'Portal oficial PAe: presenta EVS como proceso de Estudio de Viabilidad del Sistema y publica por separado la interfaz de Seguridad de MÉTRICA v3.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.' }
  ],
  4740: [
    { url: 'https://support.microsoft.com/en-us/visio/create-a-diagram-with-chen-s-database-notation', referencia: 'Microsoft Support, notación ER de Chen: define weak entity como entidad que no se identifica de forma única por sus atributos y cuya existencia depende de una entidad propietaria; el identificador combina la clave de owner y la clave parcial.' },
    { url: 'https://www.ibm.com/think/topics/entity-relationship-diagram', referencia: 'IBM, diagramas entidad-relación: una entidad débil existe como consecuencia de otra entidad y presenta dependencia de existencia.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 89: modelado de dominio y modelo entidad-relación.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.4: modelado de datos y diseño de bases de datos.' }
  ]
};

const registros = [
  [4736, ['95'], ['III-2', 'III-3'], ['MÉTRICA v3', 'participantes', 'perfil analista', 'equipo de arquitectura'], fuentes[4736], null,
    'Respuesta B. El documento Participantes de MÉTRICA v3 incluye al Equipo de Arquitectura entre los participantes agrupados en el perfil Analista. El Especialista en Comunicaciones pertenece al perfil Consultor y los Usuarios expertos al Directivo. La categoría se fija según la lista oficial de perfiles, no por la función aparente del equipo.', 'vigente'],
  [4737, ['90'], ['III-1'], ['BPMN', 'pool', 'participant', 'lane', 'modelado de procesos'], fuentes[4737], null,
    'Respuesta C, con el criterio de BPMN 2.0.2: el Pool representa un participante y es el contenedor gráfico que separa sus actividades de las de otros Pools. Un Lane es una subpartición dentro de un Pool que organiza o categoriza actividades; la reformulación precisa la diferencia.', 'corregida'],
  [4738, ['98'], ['III-13'], ['ISO/IEC 9126-1:2001', 'calidad del software', 'seis características', 'norma retirada', 'calidad interna y externa'], fuentes[4738], null,
    'Respuesta reformulada e histórica. ISO/IEC 9126-1:2001 define seis características en el modelo de calidad interna y externa: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad. El modelo de calidad en uso es otro modelo, no una división que convierta aquellas seis características en “diez factores”. ISO registra 9126-1 como retirada; el modelo actual de calidad de producto es ISO/IEC 25010:2023.', 'historica'],
  [4739, ['95'], ['III-2'], ['MÉTRICA v3', 'seguridad', 'EVS-SEG 2', 'equipo de seguridad', 'estudio de viabilidad'], fuentes[4739], null,
    'Respuesta B. En MÉTRICA v3, la actividad EVS-SEG 2 “Selección del Equipo de Seguridad” pertenece al proceso EVS, Estudio de Viabilidad del Sistema. La sigla del identificador de la actividad ya corresponde a ese proceso, pero se consulta el documento oficial de la interfaz de Seguridad para confirmar la adscripción.', 'vigente'],
  [4740, ['89'], ['III-4'], ['modelo entidad-relación', 'entidad débil', 'entidad propietaria', 'dependencia de existencia', 'clave parcial'], fuentes[4740], null,
    'Respuesta C. Una entidad débil no puede identificarse de forma única solo con sus propios atributos y depende de una entidad propietaria para existir o identificarse. Habitualmente su identificador incorpora la clave del propietario y una clave parcial; se evita el término no normalizado “entidad floja”.', 'corregida']
];

const ediciones = {
  4736: { texto: 'Según el documento Participantes de MÉTRICA v3, ¿cuál de estos participantes está agrupado en el perfil Analista?', opciones: ['Especialista en Comunicaciones.', 'Equipo de Arquitectura.', 'Consultor Informático.', 'Usuarios expertos.'], respuesta_correcta: 1 },
  4737: { texto: 'Según BPMN 2.0.2, ¿qué elemento representa gráficamente a un participante y actúa como contenedor de sus actividades frente a otros participantes?', opciones: ['Artefacto.', 'Lane o calle.', 'Pool o piscina.', 'Evento.'], respuesta_correcta: 2 },
  4738: { texto: 'En el modelo histórico de calidad interna y externa de ISO/IEC 9126-1:2001, ¿cuántas características principales se definen?', opciones: ['Seis: funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.', 'Diez, repartidas entre calidad interna, externa y calidad en uso.', 'Ocho, incluyendo la experiencia del usuario y la compatibilidad.', 'Nueve, como en ISO/IEC 25010:2023.'], respuesta_correcta: 0 },
  4739: { texto: 'En MÉTRICA v3, ¿a qué proceso principal pertenece la actividad de seguridad EVS-SEG 2, “Selección del Equipo de Seguridad”?', opciones: ['Análisis del Sistema de Información (ASI).', 'Estudio de Viabilidad del Sistema (EVS).', 'Diseño del Sistema de Información (DSI).', 'Planificación de Sistemas de Información (PSI).'], respuesta_correcta: 1 },
  4740: { texto: 'En el modelo entidad-relación, ¿cómo se denomina la entidad que depende de una entidad propietaria para existir o identificarse?', opciones: ['Entidad regular.', 'Entidad asociativa.', 'Entidad débil.', 'Entidad externa.'], respuesta_correcta: 2 }
};

aplicar({ numero: '883', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-883.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4736: { bloque: 'Tema 093 — MÉTRICA v3', detalle: 'el material 2026.1 recoge expresamente la metodología y sus participantes; la lista del perfil se contrasta con el documento ministerial oficial.', url: academyMetric },
  4737: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'incluye BPMN en el tema oficial A1-90 y modelado de procesos; la semántica de Pool/Lane se comprueba en OMG BPMN.', url: academySystems },
  4738: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo curricular del modelo de calidad y estándares; los recuentos históricos se contrastan con el texto ISO 9126 y su estado oficial.', url: academyQuality },
  4739: { bloque: 'Tema 093 — MÉTRICA v3', detalle: 'el material Academy enumera EVS-SEG 2 bajo Estudio de Viabilidad del Sistema; la clasificación se coteja además con el manual oficial PAe.', url: academyMetric },
  4740: { bloque: 'Bloque 29 — bases de datos y modelo E/R', detalle: 'el material 2026.1 explica entidad débil y dependencia del propietario; la definición se contrasta con la documentación de modelado ER.', url: academyData }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy y el temario oficial ubican el contenido; no sustituyen la fuente técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: se cotejó el texto y su encaje con los temas A1/A2; no se usa como autoridad técnica de la respuesta.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 883 preparados.');
