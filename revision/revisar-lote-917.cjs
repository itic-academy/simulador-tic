const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metrica = 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3';
const metricaTech = 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf';
const metricaAsi = 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const metricaDsi = 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf';
const kanbanGuide = 'https://kanban.university/kanban-guide/';
const toyotaTps = 'https://global.toyota/en/company/vision-and-philosophy/production-system/';
const ieee80211d = 'https://standards.ieee.org/ieee/802.11d/1169/';
const nistIds = 'https://csrc.nist.gov/glossary/term/intrusion_detection_system';
const academyAgile = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academyWireless = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academySecurity = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const sources = {
  4906: [
    { url: metricaTech, referencia: 'PAe / MÉTRICA v3, Técnicas y Prácticas, introducción, pp. 2–3: distingue técnicas (heurísticas y procedimientos apoyados en estándares, notaciones y criterios de calidad) de prácticas (medios para objetivos sin criterios o reglas rígidas preestablecidas).' },
    { url: metrica, referencia: 'Portal oficial PAe, MÉTRICA v3: identifica la publicación ministerial y enlaza el documento oficial de Técnicas y Prácticas.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología de planificación y desarrollo de sistemas de información MÉTRICA.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.2: metodologías de desarrollo y técnicas/prácticas de gestión y planificación.' }
  ],
  4907: [
    { url: kanbanGuide, referencia: 'Kanban University, Official Guide to the Kanban Method: sitúa las raíces del método en Lean Manufacturing y describe el método aplicado a trabajo de conocimiento, flujo, sistema pull, límites WIP y mejora evolutiva; no atribuye Lean a Suzuki.' },
    { url: toyotaTps, referencia: 'Toyota Motor Corporation, Toyota Production System: documenta Just-in-Time como uno de los dos pilares del TPS y explica producir lo necesario cuando y en la cantidad necesaria.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, temas 37 y 88: metodologías Lean, ágiles y Kanban.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.2: metodologías de desarrollo y técnicas/prácticas de gestión y planificación.' }
  ],
  4908: [
    { url: ieee80211d, referencia: 'IEEE Standards Association, IEEE 802.11d-2001: el propósito normativo es permitir la operación WLAN conforme a requisitos de dominios regulatorios adicionales; el roaming entre dominios se describe expresamente como beneficio secundario.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 114: estándar IEEE 802.11 y redes inalámbricas.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema IV.11: redes inalámbricas, protocolos, seguridad y normativa reguladora.' }
  ],
  4909: [
    { url: nistIds, referencia: 'NIST CSRC Glossary, Intrusion Detection System: define IDS como software que automatiza la detección y como servicio que monitoriza y analiza eventos para hallar intentos de acceso no autorizado y generar alertas. La detección no implica por sí sola bloqueo preventivo.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 125: seguridad en redes, ataques y herramientas para prevención/detección de intrusiones.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.13: herramientas de ciberseguridad y gestión de incidentes; y IV.12: seguridad en redes y control de accesos.' }
  ],
  4910: [
    { url: metricaAsi, referencia: 'PAe / MÉTRICA v3, ASI 6.4: especifica necesidades de migración y carga inicial y obtiene una primera especificación del plan, que se completa en DSI; el índice identifica explícitamente la tarea.' },
    { url: metricaDsi, referencia: 'PAe / MÉTRICA v3, DSI 9: diseña el entorno, los procedimientos y los componentes de migración y carga inicial, y completa su planificación; DSI 9.1 cita como entrada el plan de ASI 6.4 o, en orientación a objetos, DSI 4.7.' },
    { url: metrica, referencia: 'Portal oficial PAe, MÉTRICA v3: metodología oficial que reúne los procesos ASI y DSI citados.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.2: metodologías de desarrollo; correspondencia curricular con la tarea DSI de MÉTRICA, sin extender la clasificación a instalación o mantenimiento.' }
  ]
};

const academy = {
  4906: [academyAgile, 'ITIC Academy 2026, bloque de Metodologías Ágiles y Ciclo de Vida: el material incluye Kanban y MÉTRICA v3 dentro de los conocimientos de metodología; se coteja como cobertura curricular, no como fuente de la definición oficial.'],
  4907: [academyAgile, 'ITIC Academy 2026, bloque de Metodologías Ágiles y Ciclo de Vida, apartados Kanban y Lean: cubre Kanban aplicado a gestión del flujo y Lean; el cotejo curricular no reemplaza la guía de Kanban University ni la documentación de Toyota.'],
  4908: [academyWireless, 'ITIC Academy 2026, bloque de Redes Inalámbricas: incluye el estándar IEEE 802.11 y normativa reguladora; el cotejo de temario no sustituye la definición de IEEE.'],
  4909: [academySecurity, 'ITIC Academy 2026, bloque de Seguridad en Redes y Aplicación, apartado 7 «Detección y respuesta: IDS/IPS, SIEM, SOC y herramientas»: distingue IDS (analiza y alerta) de IPS (puede bloquear/prevenir); se usa solo como cotejo de cobertura.'],
  4910: [academySystems, 'ITIC Academy 2026, bloque de Análisis, Diseño y Construcción de Sistemas de Información: cotejo de cobertura de los procesos de análisis y diseño; la tarea y su secuencia se verifican directamente en los PDF oficiales de MÉTRICA v3.']
};

const records = [
  [4906, ['95'], ['III-2'], ['MÉTRICA v3', 'técnicas', 'prácticas', 'heurísticas', 'estándares'], sources[4906], null,
    'Respuesta B. MÉTRICA v3 denomina técnica al conjunto de heurísticas y procedimientos apoyados en estándares, notaciones específicas y criterios de calidad para obtener el producto. Las prácticas sirven para alcanzar objetivos específicos con rapidez, seguridad y precisión sin exigir criterios o reglas rígidas preestablecidas. Se ajustan las opciones al texto oficial para evitar la formulación vaga «no precisan cumplir criterios establecidos».', 'corregida'],
  [4907, ['37', '88'], ['III-2'], ['Kanban', 'Lean', 'Just-in-Time', 'flujo', 'WIP', 'metodologías ágiles'], sources[4907], null,
    'Respuesta A, falsa. El Kanban Method para trabajo de conocimiento tiene raíces en Lean Manufacturing; sus principios incluyen visualizar y gestionar el flujo, limitar el trabajo en curso y mejorar evolutivamente. El Just-in-Time forma parte del Toyota Production System. La opción errónea mezcla esa historia con la afirmación falsa de que Suzuki creó Lean. Las demás describen el método Kanban con precisión y sin convertir «rapidez» o «calidad» en una regla absoluta.', 'corregida'],
  [4908, ['114'], ['IV-11'], ['IEEE 802.11', '802.11d', 'dominios regulatorios', 'WLAN', 'roaming'], sources[4908], null,
    'Respuesta A. IEEE 802.11d-2001 especifica extensiones para que las WLAN operen de forma conforme en dominios regulatorios adicionales, transmitiendo los parámetros radioeléctricos aplicables. IEEE indica que el roaming entre dominios es un beneficio secundario del mecanismo, no su objeto principal; por eso se rectifica la clave original D.', 'corregida'],
  [4909, ['125'], ['II-13', 'IV-12'], ['IDS', 'detección de intrusiones', 'monitorización', 'alertas', 'IDS/IPS'], sources[4909], null,
    'Respuesta B. Un IDS monitoriza y analiza eventos de red o del sistema para detectar indicios de actividad sospechosa o accesos no autorizados y alertar. La capacidad de bloquear o prevenir no forma parte necesariamente de un IDS; es la distinción práctica frente a funciones IPS/IDPS. La clave original es correcta y el enunciado se concreta para separar el IDS del señuelo (honeypot) descrito en otra opción.', 'corregida'],
  [4910, ['95'], ['III-2'], ['MÉTRICA v3', 'ASI 6.4', 'DSI 4.7', 'DSI 9', 'migración de datos', 'carga inicial'], sources[4910], null,
    'Respuesta D. MÉTRICA v3 sitúa la primera especificación de necesidades de migración y carga inicial en ASI 6.4; en orientación a objetos, el plan equivalente se referencia como DSI 4.7. A continuación, DSI 9 diseña el entorno, los procedimientos y los componentes y completa la planificación. La pregunta se precisa para no confundir la identificación/especificación inicial con el diseño posterior.', 'corregida']
];

const edits = {
  4906: {
    texto: 'Según MÉTRICA v3, ¿qué diferencia a una técnica de una práctica?',
    opciones: [
      'Las técnicas se apoyan en estándares, notaciones y criterios de calidad; las prácticas ayudan a alcanzar objetivos sin exigir reglas rígidas preestablecidas.',
      'Las prácticas deben cumplir estándares formales y notaciones con criterios de calidad; las técnicas no utilizan criterios.',
      'Las técnicas se basan solo en la experiencia personal y no utilizan procedimientos.',
      'Técnicas y prácticas son sinónimos y ambas son obligatorias en todos los proyectos.'
    ],
    respuesta_correcta: 0
  },
  4907: {
    texto: 'Sobre Kanban aplicado a la gestión de trabajo, señale la afirmación falsa:',
    opciones: [
      'Lean Manufacturing fue creado por Suzuki y de él procede el Kanban Method para el trabajo de conocimiento.',
      'El Kanban Method se inspira en Lean Manufacturing y gestiona el flujo de trabajo de conocimiento mediante visualización, sistema pull y límites al trabajo en curso.',
      'El equipo puede seleccionar el siguiente elemento de trabajo cuando existe capacidad, siguiendo la lógica pull y el contexto del servicio.',
      'El tablero visualiza el flujo; sus columnas representan las etapas o estados del workflow definido para ese servicio.'
    ],
    respuesta_correcta: 0
  },
  4908: {
    texto: '¿Cuál es el objeto principal de la enmienda IEEE 802.11d-2001 para redes WLAN?',
    opciones: [
      'Permitir la operación conforme a la normativa radioeléctrica de dominios regulatorios adicionales.',
      'Definir mejoras de calidad de servicio para tráfico multimedia (802.11e).',
      'Definir mecanismos de seguridad para las redes WLAN (802.11i).',
      'Definir mecanismos de transición rápida entre puntos de acceso (802.11r).'
    ],
    respuesta_correcta: 0
  },
  4909: {
    texto: '¿Qué función caracteriza a un sistema de detección de intrusiones (IDS)?',
    opciones: [
      'Simular sistemas vulnerables como señuelo para atraer intrusos (honeypot).',
      'Monitorizar y analizar eventos de red o del sistema para detectar actividad sospechosa o accesos no autorizados y generar alertas.',
      'Bloquear necesariamente todo evento sospechoso en línea, sin intervención ni configuración.',
      'Rastrear puertos con el fin de que un atacante enumere servicios.'
    ],
    respuesta_correcta: 1
  },
  4910: {
    texto: 'En MÉTRICA v3, ¿qué afirmación describe correctamente la especificación y el diseño de las necesidades de migración de datos y carga inicial?',
    opciones: [
      'ASI 6.4 especifica inicialmente las necesidades y el plan de migración/carga; en orientación a objetos, el plan se referencia como DSI 4.7.',
      'DSI 9 completa el diseño posterior del entorno, procedimientos y componentes de migración y carga inicial.',
      'DSI 9 parte del plan especificado antes en ASI 6.4 o, para orientación a objetos, DSI 4.7, y desarrolla su diseño.',
      'Todas las afirmaciones anteriores son correctas.'
    ],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '917', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-917.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material se cita como cotejo curricular, no como fuente técnica/normativa primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} Fuentes primarias y alcance están documentados en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 917.');
