const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ahp = 'https://doi.org/10.1016/0377-2217(90)90057-I';
const iso22301 = 'https://www.iso.org/standard/75106.html';
const iso22313 = 'https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/07/51/75107.html';
const seiCmm = 'https://www.sei.cmu.edu/library/capability-maturity-model-for-software-version-11/';
const seiHistory = 'https://www.sei.cmu.edu/history-of-innovation/transforming-software-quality-assessment/';
const itilV3 = 'https://www.hci-itil.com/ITIL_v3/books/3_service_transition/service_transition_ch4_3.html';
const peoplecert = 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-practitioner-service-configuration-management-3800';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const academyDecision = 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const academyContinuity = 'https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academyItil = 'https://docs.google.com/document/d/1jjSrUwj9WHzDegEtoHih6L_o3srhlL8I/edit?usp=drivesdk';
const academyConstitution = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const refs = items => items.map(([url, referencia]) => ({ url, referencia }));

const records = [
  [4946, ['40', '41'], ['II-15'], ['AHP', 'Saaty', 'decisión multicriterio', 'estudio de alternativas'], refs([
    [ahp, 'Saaty, T. L., “How to make a decision: The analytic hierarchy process”, European Journal of Operational Research 48(1), 1990: presenta AHP como enfoque de decisión multicriterio que organiza factores en una estructura jerárquica.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 40 y 41: estudio de alternativas, viabilidad, toma de decisión y técnicas de decisión en sistemas.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad.'],
    [academyDecision, 'ITIC Academy 2026, bloque 17 «Adquisición de sistemas y rentabilidad de inversiones», sección 3: decisión multicriterio y métodos de ordenación; incluye Saaty/AHP. Cotejo curricular.']
  ]), null,
  'Respuesta B. El proceso analítico jerárquico (AHP), desarrollado por Thomas L. Saaty, estructura criterios y alternativas en una jerarquía y permite derivar prioridades mediante comparaciones por pares; es un método de decisión multicriterio.', 'vigente'],
  [4947, ['128'], ['IV-6'], ['continuidad de negocio', 'BCMS', 'ISO 22301', 'fase organización', 'ambigüedad'], refs([
    [iso22301, 'ISO 22301:2019, Security and resilience — Business continuity management systems — Requirements: define requisitos para establecer, operar, mantener y mejorar un BCMS; no presenta una fase normativa denominada “organización” con ese listado cerrado.'],
    [iso22313, 'ISO 22313:2020, guidance for applying ISO 22301, confirmada como vigente en 2025: proporciona recomendaciones de aplicación del BCMS; las secuencias de implantación de guías no son una fase única prescrita por el título de la pregunta.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 128: continuidad del negocio y planes de continuidad/contingencia.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema IV.6: alta disponibilidad y recuperación ante desastres.'],
    [academyContinuity, 'ITIC Academy 2026, bloque 16 «Auditoría informática»: cotejo curricular de continuidad, RTO/MTD y planes; el material no identifica una metodología concreta que defina la supuesta “fase de organización”.']
  ]), null,
  'Pendiente de ambigüedad. El enunciado no identifica la metodología, guía o versión que divide un sistema de gestión de continuidad del negocio en una “fase de organización”. ISO 22301 define requisitos del BCMS y mejora continua, pero no establece esa fase nominal ni un catálogo cerrado de actividades. La clave heredada no se valida: hay que precisar la fuente/metodología antes de decidir si organizar la mejora continua queda fuera mientras reuniones, inventario de aplicaciones y análisis de riesgos pertenecen a esa fase.', 'pendiente_ambiguedad'],
  [4948, ['98'], ['III-13'], ['CMM', 'SW-CMM', 'madurez de procesos', 'calidad del software', 'CMMI'], refs([
    [seiCmm, 'Carnegie Mellon Software Engineering Institute, Capability Maturity Model for Software (Version 1.1): describe el SW-CMM como marco de madurez y mejora de procesos de software, con prácticas para orientar la mejora.'],
    [seiHistory, 'CMU SEI, Transforming Software Quality Assessment: documenta el SW-CMM clásico y que CMMI evolucionó a partir de él; permite distinguir la pregunta histórica sobre CMM de los modelos actuales.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 98: métricas y evaluación de calidad del software e implantación de la función de calidad.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema III.13: calidad del software, modelos, métricas, normas y estándares.'],
    [academyQuality, 'ITIC Academy 2026, bloque 39 «Calidad y mantenimiento»: modelos, métricas y calidad de procesos/productos de software; cotejo curricular, no sustituto de la documentación SEI.']
  ]), null,
  'Respuesta D. Se delimita la pregunta al SW-CMM clásico del SEI: un modelo de madurez con prácticas que orientan la evaluación y mejora de los procesos de desarrollo y mantenimiento de software. Es una referencia histórica; CMMI evolucionó a partir del SW-CMM, por lo que no debe presentarse CMM y CMMI como el mismo modelo vigente.', 'historica'],
  [4949, ['106'], ['IV-4'], ['ITIL v3', 'SACM', 'gestión de configuración', 'activos de servicio', 'modelo lógico'], refs([
    [itilV3, 'ITIL v3 Service Transition, §4.3, Service Asset and Configuration Management (texto de la publicación de la biblioteca ITIL): el modelo de configuración representa servicios, activos e infraestructura mediante relaciones entre elementos de configuración.'],
    [peoplecert, 'PeopleCert, ITIL 4 Practitioner: Service Configuration Management: práctica actual orientada a conservar información precisa y fiable sobre elementos de configuración y sus relaciones. Se cita para distinguir la práctica actual de la pregunta histórica ITIL v3.'],
    [a1, 'Convocatoria A1 GSI 2025, tema 106: gestión de servicios e infraestructuras TIC y bases conceptuales de ITIL.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, tema IV.4: gestión de configuración, cambios, versiones y servicios.'],
    [academyItil, 'ITIC Academy 2026, bloque 105 «ITIL y COBIT»: gestión de servicios, gestión de la configuración y relaciones entre elementos; cotejo curricular.']
  ]), null,
  'Respuesta B. En ITIL v3, Service Asset and Configuration Management mantiene información de configuración y un modelo lógico que representa servicios, activos, infraestructura y relaciones entre sus componentes. El enunciado conserva explícitamente la versión v3, distinta de la práctica Service Configuration Management de ITIL 4.', 'historica'],
  [4950, ['1', '2'], ['I-1', 'I-2'], ['Constitución Española', 'artículo 53', 'recurso de amparo', 'Tribunal Constitucional', 'derechos fundamentales'], refs([
    [ce, 'Constitución Española, texto consolidado en BOE, artículo 53.2: la tutela de los derechos del artículo 14 y de la sección primera puede recabarse ante tribunales ordinarios y, en su caso, mediante recurso de amparo ante el Tribunal Constitucional.'],
    [a1, 'Convocatoria A1 GSI 2025, temas 1 y 2: garantías de derechos fundamentales y atribuciones del Tribunal Constitucional.'],
    [a2, 'Convocatoria A2 GSI AGE 2025, temas I.1 e I.2: derechos y garantías constitucionales y atribuciones del Tribunal Constitucional.'],
    [academyConstitution, 'ITIC Academy 2026, bloque 01 «Constitución, organización del Estado y AGE»: derechos y garantías y Tribunal Constitucional; cotejo curricular del artículo 53.2.']
  ]), null,
  'Respuesta B. El artículo 53.2 CE prevé que cualquier ciudadano recabe la tutela de los derechos allí indicados ante los tribunales ordinarios por un procedimiento preferente y sumario y, en su caso, mediante recurso de amparo ante el Tribunal Constitucional. Se corrige la puntuación defectuosa del enunciado.', 'corregida']
];

const edits = {
  4946: {
    texto: 'El proceso analítico jerárquico (AHP) desarrollado por Saaty es un método de:',
    opciones: [
      'Evaluación de la accesibilidad web.',
      'Decisión multicriterio mediante jerarquías y comparaciones por pares.',
      'Comunicación interna en una organización.',
      'Envío de datos a un centro de respaldo.'
    ],
    respuesta_correcta: 1
  },
  4948: {
    texto: '¿Qué describe el Capability Maturity Model for Software (SW-CMM) clásico del Software Engineering Institute?',
    opciones: [
      'Un método de diseño de componentes para optimizar el uso de recursos de los ordenadores.',
      'Una metodología de desarrollo basada en metalenguajes.',
      'Un modelo organizativo para diseñar macroensambladores cruzados.',
      'Un modelo de madurez con prácticas para evaluar y mejorar los procesos de desarrollo y mantenimiento de software.'
    ],
    respuesta_correcta: 3
  },
  4949: {
    texto: 'En el proceso Service Asset and Configuration Management (SACM) de ITIL v3, ¿qué objetivo describe el modelo de configuración?',
    opciones: [
      'Llevar únicamente la contabilidad de los activos financieros.',
      'Representar lógicamente servicios, activos e infraestructura y las relaciones entre sus elementos de configuración.',
      'Construir modelos comerciales para justificar la implantación de ITIL.',
      'Desplegar ITIL en toda la organización.'
    ],
    respuesta_correcta: 1
  },
  4950: {
    texto: 'Según el artículo 53.2 de la Constitución Española, el recurso de amparo para la tutela de los derechos allí indicados se presenta ante:',
    opciones: [
      'El Tribunal Supremo.',
      'El Tribunal Constitucional.',
      'El Consejo General del Poder Judicial.',
      'Cualquier juzgado o tribunal.'
    ],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '925', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-925.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyById = {
  4946: [academyDecision, 'ITIC Academy 2026, bloque 17 «Adquisición de sistemas y rentabilidad de inversiones», sección 3: decisión multicriterio; incluye Saaty/AHP. Cotejo curricular.'],
  4947: [academyContinuity, 'ITIC Academy 2026, bloque 16 «Auditoría informática»: continuidad, RTO/MTD y planes; el cotejo no identifica la metodología de la fase citada, por eso el reactivo permanece pendiente.'],
  4948: [academyQuality, 'ITIC Academy 2026, bloque 39 «Calidad y mantenimiento»: modelos, métricas y calidad del software; cotejo curricular separado de la documentación SEI.'],
  4949: [academyItil, 'ITIC Academy 2026, bloque 105 «ITIL y COBIT»: gestión de servicios y configuración; cotejo curricular, distinguiendo ITIL v3 de ITIL 4.'],
  4950: [academyConstitution, 'ITIC Academy 2026, bloque 01: derechos fundamentales, sus garantías y Tribunal Constitucional; cotejo curricular del artículo 53.2.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academyById[change.id];
  q.clasificacion.bloque_academia = `${detail} Se cita como cotejo curricular, no como fuente primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La explicación, el alcance de la revisión y las fuentes constan en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 925.');
