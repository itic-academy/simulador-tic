const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy50 = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const academy41 = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academyConstitution = 'https://docs.google.com/document/d/1xBMfULSkmKGKsCPZLqmkEoU-eqJ9ymd4/edit?usp=drivesdk';
const haskell = 'https://www.haskell.org/onlinereport/intro.html';
const metricDfd = 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';

const sources = {
  4861: [
    { url: haskell, referencia: 'Haskell 98 Report, sección Introduction: define Haskell como lenguaje de programación de propósito general puramente funcional; se cita como definición fundacional del lenguaje y no como una versión vigente de su implementación.' },
    { url: 'https://www.haskell.org/', referencia: 'Sitio oficial Haskell: describe las funciones como puras, sin mutación de estado y con expresiones en lugar de instrucciones imperativas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.3: características técnicas de lenguajes y paradigmas actuales de programación.' }
  ],
  4862: [
    { url: metricDfd, referencia: 'MÉTRICA v3, técnica DFD: en la notación clásica, el almacén intercambia flujos con procesos; no se conecta directamente a otra entidad o almacén, y los flujos representan datos.' },
    { url: 'https://www.ibm.com/think/topics/data-flow-diagram', referencia: 'IBM, Data Flow Diagram: describe los elementos DFD (proceso, almacén, entidad externa y flujo) y la necesidad de que un proceso medie transformaciones/transferencias de datos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 90: modelado de procesos y análisis dinámico.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: estrategias de análisis y determinación de requisitos.' }
  ],
  4863: [
    { url: 'https://wordpress.org/about/license/', referencia: 'WordPress.org: el software WordPress se distribuye bajo GPLv2 o posterior.' },
    { url: 'https://www.drupal.org/about/licensing', referencia: 'Drupal.org: Drupal y sus contribuciones se publican bajo GPL v2 o posterior.' },
    { url: 'https://www.joomla.org/about-joomla/the-project.html', referencia: 'Joomla Project: el software Joomla se puede usar, copiar, modificar y distribuir bajo GNU GPL.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 104: tecnologías de gestión documental y de contenidos CMS/DMS.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.16: sistemas de gestión documental y de contenidos.' }
  ],
  4864: [
    { url: 'https://www.peoplecert.org/help-and-support/faq-itil', referencia: 'PeopleCert, propietario/organismo oficial del esquema: ITIL Version 5 presenta un marco integrado de guía para gestionar productos y servicios digitales y crear valor; no lo define como norma obligatoria ni como metodología exclusiva.' },
    { url: 'https://www.peoplecert.org/Frameworks-Professionals/ITIL-framework', referencia: 'PeopleCert, ITIL Framework: esquema y guía global de buenas prácticas; la página refleja la transición actual a ITIL Version 5.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: gestión de servicios e infraestructuras TIC y bases conceptuales de ITIL/COBIT.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: gestión/operación, rendimiento de infraestructuras y servicios; se indica correspondencia temática próxima, ya que el programa no menciona ITIL expresamente.' }
  ],
  4865: [
    { url: ce, referencia: 'Constitución Española vigente, artículo 144: las Cortes Generales, mediante ley orgánica y por motivos de interés nacional, pueden autorizar/acordar un Estatuto para territorios no integrados en la organización provincial.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 3: Constitución, Comunidades Autónomas y organización territorial.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.1: Constitución Española de 1978; el artículo 144 se clasifica en ese marco constitucional común.' }
  ]
};

const records = [
  [4861, [], ['II-3'], ['Haskell', 'paradigma funcional', 'declarativo', 'lenguajes de programación'], sources[4861], null,
    'Respuesta B. Haskell es un lenguaje puramente funcional, habitualmente situado en el paradigma declarativo; Modula-2, ALGOL y Ada se diseñaron principalmente en la tradición imperativa/procedimental. Se precisa “puramente funcional” para no presentar como categorías excluyentes todos los lenguajes actuales, muchos de los cuales son multiparadigma. No se asigna tema A1 porque el programa A1 vigente no contiene un tema general específico sobre paradigmas de lenguajes.', 'corregida'],
  [4862, ['90'], ['III-3'], ['DFD', 'MÉTRICA v3', 'almacén de datos', 'proceso', 'análisis estructurado'], sources[4862], null,
    'Respuesta C. En la notación clásica de DFD de MÉTRICA v3, un almacén se conecta mediante flujos a procesos; no se conecta directamente a otro almacén ni a una entidad externa. La regla se fija a esa notación para evitar generalizarla a cualquier representación informal de procesos.', 'corregida'],
  [4863, ['104'], ['II-16'], ['CMS', 'WordPress', 'Drupal', 'Joomla', 'GPL', 'código abierto'], sources[4863], null,
    'Respuesta D. WordPress, Drupal y Joomla son CMS web de código abierto cuyo software principal se distribuye bajo GNU GPL (las versiones concretas/licencias de extensiones y temas pueden variar). Se pregunta por el trío identificado y no se afirma que sea la única combinación posible de CMS abiertos; las opciones que mezclan productos empresariales o comerciales tienen distinta naturaleza y licenciamiento.', 'corregida'],
  [4864, ['106'], ['IV-4'], ['ITIL', 'gestión de servicios', 'buenas prácticas', 'ITIL Version 5'], sources[4864], null,
    'Respuesta A. ITIL es un marco de guía y buenas prácticas para la gestión de servicios TI/digitales, actualmente evolucionado a ITIL Version 5. No es una iniciativa de la Comisión Europea ni una metodología única obligatoria; su uso no está limitado por sector y puede adaptarse a organizaciones públicas. Se elimina la afirmación absoluta y desactualizable de “estándar mundial de facto”. A2-IV.4 es solo la correspondencia curricular más próxima sobre operación de servicios, no una mención explícita de ITIL en el temario A2 actual.', 'corregida'],
  [4865, ['3'], ['I-1'], ['Constitución Española', 'artículo 144', 'territorios no provinciales', 'ley orgánica'], sources[4865], null,
    'Respuesta C. El artículo 144.b de la Constitución dispone que las Cortes Generales, mediante ley orgánica y por motivos de interés nacional, podrán autorizar o acordar un Estatuto de autonomía para territorios que no estén integrados en la organización provincial. La mayoría absoluta de cada Cámara es una regla de aprobación de leyes orgánicas (art. 81.2), no la alternativa formulada aquí al requisito de rango.', 'corregida']
];

const edits = {
  4861: { texto: '¿Cuál de los siguientes es un lenguaje de programación puramente funcional, convencionalmente asociado al paradigma declarativo?', opciones: [
    'Modula-2.',
    'Haskell.',
    'ALGOL.',
    'Ada.'
  ], respuesta_correcta: 1 },
  4862: { texto: 'Según la notación clásica de diagramas de flujo de datos (DFD) de MÉTRICA v3, ¿con qué tipo de elemento se conecta directamente un almacén de datos mediante un flujo?', opciones: [
    'Con otro almacén y con un proceso.',
    'Con una entidad externa y con un proceso.',
    'Únicamente con un proceso.',
    'Únicamente con otro almacén.'
  ], respuesta_correcta: 2 },
  4863: { texto: '¿Qué opción identifica el trío WordPress, Drupal y Joomla, cuyos proyectos principales publican sus CMS web bajo licencias GNU GPL?', opciones: [
    'WordPress, Oracle Portal y XCM (Xeridia Content Manager).',
    'Drupal, Liferay e iWeb.',
    'Joomla, OnBase y SharePoint.',
    'WordPress, Drupal y Joomla.'
  ], respuesta_correcta: 3 },
  4864: { texto: '¿Cuál de las siguientes afirmaciones describe correctamente ITIL?', opciones: [
    'Es un marco de guía y buenas prácticas para la gestión de servicios TI/digitales, aplicable a organizaciones de distintos sectores.',
    'Es una iniciativa de la Comisión Europea que prescribe una estructura organizativa única para los departamentos TIC.',
    'Es una metodología de desarrollo de software que no puede utilizarse en las Administraciones públicas.',
    'Es un estándar técnico obligatorio de la Unión Europea para certificar todo servicio informático.'
  ], respuesta_correcta: 0 },
  4865: { texto: 'Según el artículo 144.b de la Constitución Española, las Cortes Generales, por motivos de interés nacional, podrán autorizar o acordar un Estatuto de autonomía para territorios no integrados en la organización provincial. ¿Qué rango normativo exige el artículo?', opciones: [
    'Ley ordinaria.',
    'Ley de bases.',
    'Ley orgánica.',
    'Un acuerdo aprobado por mayoría absoluta de cada Cámara, sin ley.'
  ], respuesta_correcta: 2 }
};

aplicar({ numero: '908', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-908.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4861: [academy30, 'bloque 30, paradigmas de programación: presenta Haskell dentro de programación funcional y distingue funcional (como caso declarativo) de lenguajes imperativos. Cotejo directo del concepto, no autoridad lingüística.'],
  4862: [academy38, 'bloque 38, apartado de análisis estructurado/DFD y diseño modular. Cotejo directo de la notación de análisis.'],
  4863: [academy50, 'bloque 50, sección 6.2 CMS: cita WordPress, Drupal y Joomla como CMS PHP con licencia GPL, y distingue portales con funciones CMS, como Liferay Community Edition bajo LGPL.'],
  4864: [academy41, 'bloque 41, ITIL y COBIT, versión 2026.1: actualiza el contenido a ITIL Version 5 y lo encuadra como marco de buenas prácticas de gestión de servicios; la academia no es fuente normativa.'],
  4865: [academyConstitution, 'Tema 003 — Constitución (III): cubre la organización de las Comunidades Autónomas y cita expresamente el artículo 144 y el procedimiento especial; contraste de temario directo. El cotejo BOE determina la regla legal vigente.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1/2026.2, ${detail} El mapa académico no sustituye a la fuente primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} Verificación técnica/legal en las fuentes primarias adjuntas.`;
  q.revision.observaciones += ` Cotejo curricular ITIC Academy: ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail} Cotejo de cobertura del tema.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 908.');
