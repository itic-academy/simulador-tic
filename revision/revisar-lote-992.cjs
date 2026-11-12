const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const metrica = 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3';
const quality = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A6838aec9-835a-4562-bdc3-87a96fd9c743/METRICA_V3_Aseguramiento_de_la_Calidad.pdf';
const config = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A1f321d6d-fb6a-46ed-a369-617c0080c51d/METRICA_V3_Gestion_de_Configuracion.pdf';
const nasa = 'https://ntrs.nasa.gov/api/citations/19900012224/downloads/19900012224.pdf';
const cmsOpenText = 'https://developer.opentext.com/ce/products/web';
const cmsLicense = 'https://www.opentext.com/about/legal/software-licensing';
const opencms = 'https://www.opencms.org/en/overview/what-is-opencms/';
const drupal = 'https://www.drupal.org/about/licensing';
const alfresco = 'https://github.com/Alfresco/alfresco-community-repo';
const itilPractice = 'https://www.peoplecert.org/help-and-support/FAQ';
const itilVersion = 'https://www.peoplecert.org/help-and-support/faq-itil';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyMetrica = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyItil = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academyCms = 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const academyMetrics = 'https://drive.google.com/file/d/1w_ZhQ3f2MMvQDg3oAp45DRkZUJzdCmxB/view?usp=drivesdk';

const records = [
  [5281, ['95'], ['III-2'], ['MÉTRICA v3', 'ISO/IEC 12207', 'ISO/IEC 15504', 'ISO 9001', 'ISO/IEC 17799', 'estándares'], [
    ref(metrica, 'PAe/Agencia Estatal de Administración Digital, documentación oficial de MÉTRICA v3: organiza la metodología en procesos principales e interfaces de soporte.'),
    ref(quality, 'MÉTRICA v3, interfaz de Aseguramiento de la Calidad: recomienda UNE-EN-ISO 9001:2000 y 9000:2000 como referencias para planes de calidad cuando la organización no tiene estándares propios.'),
    ref('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A56967857-2b54-40a5-8c67-99104dfd9e23/2004-Criterios-de-seguridad-normalizacion-NIPO-326-04-044-9.pdf', 'Criterios oficiales de seguridad, normalización y conservación de aplicaciones: trata MÉTRICA v3 y su interfaz de seguridad como parte del desarrollo; distingue este marco de un estándar base del ciclo de vida.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 95: metodología de planificación y desarrollo de sistemas de información MÉTRICA.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías de desarrollo.'),
    ref(academyMetrica, 'ITIC Academy, bloque de Análisis, diseño y construcción de sistemas de información, edición 2026: cotejo del tratamiento de MÉTRICA v3.'),
    ref('https://drive.google.com/file/d/1hPYYrCoVBKhiEgMaqVBi5mpdUEm4_vV5/view?usp=drivesdk', 'ITIC Academy, Tema 093 — MÉTRICA v3: cotejo de estándares, estructura e interfaces con la metodología oficial.')
  ], null, 'La opción D es la respuesta prevista al preguntar por los estándares de referencia de la metodología: MÉTRICA v3 se articula sobre el ciclo de vida de ISO/IEC 12207 y la evaluación de procesos ISO/IEC 15504/SPICE; su interfaz de calidad recomienda ISO 9001:2000. ISO/IEC 17799 es un código de buenas prácticas de seguridad, materia tratada por la interfaz de seguridad, pero no el estándar de ciclo de vida/procesos que fundamenta la metodología. Se reescribe la pregunta para distinguir esas funciones y evitar sugerir que MÉTRICA carece de actividades de seguridad.', 'corregida'],
  [5282, ['95'], ['III-2'], ['MÉTRICA v3', 'interfaces', 'gestión de proyectos', 'seguridad', 'gestión de configuración', 'aseguramiento de calidad'], [
    ref(metrica, 'PAe/Agencia Estatal de Administración Digital, catálogo oficial de MÉTRICA v3: lista las interfaces de Aseguramiento de la Calidad, Seguridad, Gestión de Configuración y Gestión de Proyectos.'),
    ref(config, 'MÉTRICA v3, interfaz de Gestión de Configuración: describe esta interfaz de soporte a lo largo del desarrollo y mantenimiento.'),
    ref(quality, 'MÉTRICA v3, interfaz de Aseguramiento de la Calidad.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.2: metodologías de desarrollo.'),
    ref(academyMetrica, 'ITIC Academy, bloque de Análisis, diseño y construcción de sistemas de información, edición 2026: cotejo de procesos e interfaces MÉTRICA.')
  ], null, 'La opción C (Gestión del Cambio) no es el nombre de una interfaz de MÉTRICA v3. Las cuatro interfaces oficiales son Gestión de Proyectos, Seguridad, Gestión de la Configuración y Aseguramiento de la Calidad. La gestión/control del cambio puede aparecer en otras prácticas y procesos; la pregunta distingue el nombre formal de las interfaces.', 'corregida'],
  [5283, ['93', '98'], ['III-13'], ['fan-out', 'complejidad estructural', 'diseño modular', 'métricas de software'], [
    ref(nasa, 'NASA Technical Reports Server, Measuring Software Design Complexity: define fan-out como el número de llamadas que salen de un módulo y lo analiza como contribución a la complejidad estructural.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 93 y 98: técnicas de diseño y métricas/evaluación de calidad del software.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.13: calidad del software y su medida, modelos, métricas, normas y estándares.'),
    ref(academyMetrics, 'ITIC Academy, bloque de Análisis y Diseño, edición 2026: define fan-out por los módulos subordinados directamente controlados y advierte que un valor elevado incrementa la complejidad.'),
    ref(academyMetrica, 'ITIC Academy, bloque de Análisis, diseño y construcción de sistemas de información, edición 2026: métricas del diseño modular.')
  ], null, 'Fan-out es, estrictamente, el número de llamadas salientes o de módulos subordinados inmediatos de un módulo. No es por sí solo una medida completa de toda la complejidad del sistema; en métricas de diseño estructural se utiliza como indicador/contribuyente a la complejidad. Se hace explícita esta distinción en el enunciado y la opción correcta.', 'corregida'],
  [5284, ['104'], ['II-14', 'II-16'], ['CMS', 'software libre', 'OpenCms', 'OpenText Web CMS', 'Drupal', 'Alfresco Community Edition', 'licencias'], [
    ref(opencms, 'OpenCms, descripción oficial: CMS disponible como software libre bajo LGPL.'),
    ref(drupal, 'Drupal.org, información oficial de licencias: Drupal y los ficheros alojados en sus repositorios se publican bajo GPL-2.0-or-later.'),
    ref(alfresco, 'Repositorio oficial Alfresco/alfresco-community-repo: edición Community del repositorio de gestión de contenidos, licencia LGPL-3.0.'),
    ref(cmsOpenText, 'OpenText Developer: identifica Web CMS (antes TeamSite) como producto CMS de OpenText.'),
    ref(cmsLicense, 'OpenText, documentación oficial de licencias: productos software sujetos a EULA y modelos de licencia comerciales.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 104: gestión documental, gestión de contenidos y tecnologías CMS/DMS.'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas II.14 (software libre y propietario/licencias) y II.16 (sistemas de gestión de contenidos).'),
    ref(academyCms, 'ITIC Academy, bloque de Gestión Documental, edición 2026: cobertura de A1-104 y A2-II.16 y referencias diferenciadas a CMS y Alfresco Community.'),
    ref('https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', 'ITIC Academy, bloque de Videoconferencia, SSO y trabajo colaborativo, edición 2026: ejemplos de CMS y Alfresco Community.')
  ], null, 'La pregunta original mezclaba una marca/proveedor (“OpenText”) con nombres de productos y no especificaba ediciones: Alfresco tiene variantes Community y comerciales. Se hace la comparación por producto/edición. OpenCms (LGPL), Drupal core (GPL-2.0-or-later) y Alfresco Community (LGPL-3.0) son software libre; OpenText Web CMS/TeamSite se distribuye bajo licencia del proveedor, por lo que la opción B es la única propietaria de esta lista. La clasificación no debe extenderse a toda la cartera de cada proveedor.', 'corregida'],
  [5285, ['106'], [], ['ITIL', 'gestión de disponibilidad', 'ITIL v2', 'ITIL v3', 'Service Delivery', 'Service Design', 'pregunta histórica'], [
    ref('https://wiki.en.it-processmaps.com/index.php/Availability_Management_-_ITIL_V2', 'IT Process Maps, mapa de procesos ITIL v2: ubica Availability Management en Service Delivery.'),
    ref('https://itsmf.org.hk/eng/dl/ITILV3GCRG-P2%20v1_0-200905.pdf', 'itSMF Hong Kong, ITIL v3 Glossary Cross Reference Guide: identifica Availability Management como proceso de Service Design.'),
    ref(itilPractice, 'PeopleCert, catálogo de libros y guías oficiales: incluye ITIL 4 Availability Management como práctica, no como asignación a uno de los volúmenes del ciclo de vida v3.'),
    ref(itilVersion, 'PeopleCert, FAQ de ITIL: explica las transiciones entre versiones y mantiene la disponibilidad como práctica de gestión en ITIL 4; se cita para evitar extrapolar el esquema histórico a la edición actual.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 106: gestión de servicios TIC y bases conceptuales de ITIL.'),
    ref(academyItil, 'ITIC Academy, bloque ITIL y COBIT, edición 2026: revisa versiones actuales y reformula preguntas de ediciones v2/v3 como contenido histórico.'),
    ref(a2, 'Convocatoria A2 GSI 2025: no contiene un epígrafe específico de ITIL/gestión de servicios; no se fuerza una correspondencia A2.')
  ], null, 'La clave histórica es A: en ITIL v2 Availability Management se encuadraba en Service Delivery y en ITIL v3 (ciclo de vida 2007/2011) en Service Design. Se mantiene la pregunta solo como contenido histórico, con las versiones indicadas: no describe una estructura vigente. ITIL 4 conserva Availability Management como práctica, y el mapa de versiones posterior de PeopleCert tampoco la convierte en uno de esos volúmenes históricos.', 'historica']
];

const edits = {
  5281: {
    texto: 'En la descripción de MÉTRICA v3, ¿cuál de estas normas no es una referencia de base del ciclo de vida/procesos ni del aseguramiento de calidad mencionada por la metodología?',
    comentarios: 'La opción D es la respuesta prevista al preguntar por los estándares de referencia de la metodología: MÉTRICA v3 se articula sobre el ciclo de vida de ISO/IEC 12207 y la evaluación de procesos ISO/IEC 15504/SPICE; su interfaz de calidad recomienda ISO 9001:2000. ISO/IEC 17799 es un código de buenas prácticas de seguridad, materia tratada por la interfaz de seguridad, pero no el estándar de ciclo de vida/procesos que fundamenta la metodología. Se reescribe la pregunta para distinguir esas funciones y evitar sugerir que MÉTRICA carece de actividades de seguridad.'
  },
  5282: {
    texto: '¿Cuál de los siguientes nombres no corresponde a una de las cuatro interfaces de MÉTRICA v3?',
    comentarios: 'La opción C (Gestión del Cambio) no es el nombre de una interfaz de MÉTRICA v3. Las cuatro interfaces oficiales son Gestión de Proyectos, Seguridad, Gestión de la Configuración y Aseguramiento de la Calidad. La gestión/control del cambio puede aparecer en otras prácticas y procesos; la pregunta distingue el nombre formal de las interfaces.'
  },
  5283: {
    texto: 'En métricas de diseño modular, ¿qué indica principalmente el fan-out de un módulo?',
    opcion: [0, 'El número de llamadas salientes o módulos subordinados inmediatos; se utiliza como indicador de complejidad estructural.'],
    comentarios: 'Fan-out es, estrictamente, el número de llamadas salientes o de módulos subordinados inmediatos de un módulo. No es por sí solo una medida completa de toda la complejidad del sistema; en métricas de diseño estructural se utiliza como indicador/contribuyente a la complejidad. Se hace explícita esta distinción en el enunciado y la opción correcta.'
  },
  5284: {
    texto: '¿Cuál de estos productos CMS se distribuye bajo licencia propietaria/comercial del proveedor?',
    opciones: [
      'OpenCms, CMS de software libre bajo LGPL.',
      'OpenText Web CMS (TeamSite), producto CMS bajo licencia del proveedor.',
      'Drupal core, GPL-2.0-or-later.',
      'Alfresco Community Edition, LGPL-3.0.'
    ],
    comentarios: 'La pregunta original mezclaba una marca/proveedor (“OpenText”) con nombres de productos y no especificaba ediciones: Alfresco tiene variantes Community y comerciales. Se hace la comparación por producto/edición. OpenCms (LGPL), Drupal core (GPL-2.0-or-later) y Alfresco Community (LGPL-3.0) son software libre; OpenText Web CMS/TeamSite se distribuye bajo licencia del proveedor, por lo que la opción B es la única propietaria de esta lista. La clasificación no debe extenderse a toda la cartera de cada proveedor.'
  },
  5285: {
    texto: 'En el esquema histórico de ITIL v2 e ITIL v3 (ciclo de vida 2007/2011), ¿en qué libro o fase se situaba Availability Management, respectivamente?',
    opciones: [
      'Service Delivery (ITIL v2) y Service Design (ITIL v3).',
      'Service Support (ITIL v2) y Service Strategy (ITIL v3).',
      'Service Support (ITIL v2) y Service Transition (ITIL v3).',
      'Service Delivery (ITIL v2) y Service Strategy (ITIL v3).'
    ],
    comentarios: 'La clave histórica es A: en ITIL v2 Availability Management se encuadraba en Service Delivery y en ITIL v3 (ciclo de vida 2007/2011) en Service Design. Se mantiene la pregunta solo como contenido histórico, con las versiones indicadas: no describe una estructura vigente. ITIL 4 conserva Availability Management como práctica, y el mapa de versiones posterior de PeopleCert tampoco la convierte en uno de esos volúmenes históricos.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-992.json'))) {
  aplicar({ numero: '992', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-992.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5281: ['ITIC Academy, Tema 093 — MÉTRICA v3 (material y edición 2026 del bloque de Análisis, diseño y construcción): procesos principales, referencias y separación de interfaces.', 'Cotejo con A1-95/A2-III.2. ISO/IEC 17799 se distingue de la base de ciclo de vida/procesos y de la referencia de calidad ISO 9001.'],
  5282: ['ITIC Academy, Tema 093 — MÉTRICA v3 y bloque de Análisis, diseño y construcción, edición 2026: interfaces y procesos.', 'Cotejo con A1-95/A2-III.2. Seguridad, gestión de configuración, aseguramiento de calidad y gestión de proyectos sí son interfaces; gestión del cambio no es su denominación formal.'],
  5283: ['ITIC Academy, bloque de Análisis y Diseño, edición 2026: fan-out es el número de módulos directamente controlados y un fan-out excesivo aumenta complejidad.', 'Cotejo con A1-93/A1-98 y A2-III.13; se diferencia la definición contable del fan-out de su uso como indicador de complejidad.'],
  5284: ['ITIC Academy, bloque de Gestión Documental, edición 2026: mapea A1-104, A2-II.14 y A2-II.16; distingue software libre/propietario y CMS/DMS.', 'Cotejo adicional con el bloque de Videoconferencia, SSO y trabajo colaborativo de 2026: Alfresco Community figura como edición de código abierto. Los nombres se precisan por producto/edición.'],
  5285: ['ITIC Academy, bloque ITIL y COBIT, edición 2026: las versiones v2/v3 se conservan como historia y las preguntas se actualizan a prácticas ITIL 4/Version 5.', 'Cotejo con A1-106; no se asigna un tema A2 porque el programa vigente A2 no tiene epígrafe específico sobre ITIL o gestión de servicios TIC.']
};
const reason = 'Cotejo curricular individual con ITIC Academy en Drive y los programas oficiales A1/A2 de 2025.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later;
  change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8');
let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 992 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
