const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const metricAnalysis = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const dfds = 'https://www.ibm.com/think/topics/data-flow-diagram';
const nasaEstimate = 'https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604443/SWE-015%2B-%2BCost%2BEstimation';
const nasaCocomo = 'https://strs.grc.nasa.gov/repository/forms/cocomo-calculation/';
const boehm = 'https://ntrs.nasa.gov/citations/19920013466';

const sources = {
  4836: [
    { url: 'https://lucene.apache.org/core/index.html', referencia: 'Apache Lucene Core: biblioteca de búsqueda de texto completo con indexación escalable.' },
    { url: 'https://solr.apache.org/guide/solr/latest/', referencia: 'Apache Solr Reference Guide, documentación oficial: plataforma de búsqueda basada en Lucene que ofrece indexación y búsqueda escalables.' },
    { url: 'https://xapian.org/', referencia: 'Proyecto Xapian: biblioteca de motor de búsqueda con funciones de indexación y búsqueda.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 105: recuperación de información y sistemas de búsqueda.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema II.16: sistemas y servicios de gestión de contenidos y búsqueda de información.' }
  ],
  4837: [
    { url: dfds, referencia: 'IBM, componentes de un DFD: entidades externas, procesos, almacenes de datos y flujos; “función” no se usa aquí como categoría normalizada independiente.' },
    { url: metricAnalysis, referencia: 'MÉTRICA v3, Análisis del Sistema de Información: modelado de procesos/DFD, sus flujos y almacenes.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 90: análisis y modelado de procesos.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: requisitos y modelado funcional.' }
  ],
  4838: [
    { url: nasaEstimate, referencia: 'NASA SWE-015, Cost Estimation: identifica, entre otros, el cálculo bottom-up mediante desglose de trabajo y la estimación basada en modelos paramétricos/empíricos como familias de técnicas distintas; las estimaciones por analogía sirven de contraste.' },
    { url: 'https://ntrs.nasa.gov/citations/19850022834', referencia: 'NASA NTRS, handbook de estimación de costes de software: define métodos model-based como relaciones matemáticas/paramétricas obtenidas de datos de proyectos previos y distingue el desglose por trabajo.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 99: estimación de tamaño, esfuerzo y coste de proyectos software.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.2: planificación y gestión de proyectos de desarrollo.' }
  ],
  4839: [
    { url: nasaCocomo, referencia: 'NASA, calculadora COCOMO: Embedded mode se define por restricciones estrictas de hardware, software y operación; Organic corresponde a proyectos relativamente sencillos y requisitos menos rígidos; Semi-detached es intermedio.' },
    { url: boehm, referencia: 'NASA NTRS, COSTMODL: The Automated Software Cost Model; documento sobre COCOMO y sus modos de desarrollo (organic, semi-detached y embedded).' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 99: estimación del tamaño, esfuerzo y coste de software.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.2: planificación y gestión de proyectos.' }
  ],
  4840: [
    { url: dfds, referencia: 'IBM, diagramas DFD: sus flujos son rutas gráficas entre entidades externas, procesos y almacenes; las notaciones habituales los muestran como líneas dirigidas/flechas y se etiquetan con los datos transportados.' },
    { url: metricAnalysis, referencia: 'MÉTRICA v3, Análisis del Sistema de Información: los DFD representan flujos de datos del modelo de procesos.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 90: análisis y modelado de procesos.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: análisis de requisitos y modelado funcional.' }
  ]
};

const records = [
  [4836, ['105'], ['II-16'], ['Lucene', 'Solr', 'Xapian', 'recuperación de información', 'indexación'], sources[4836], null,
    'Respuesta D. Lucene es una biblioteca de búsqueda e indexación de texto; Solr es una plataforma/servidor de búsqueda basado en Lucene; y Xapian es una biblioteca de motor de búsqueda que ofrece indexación y recuperación. Se sustituyó la negación poco natural por una afirmación verificable y se conservó la opción “todos”.', 'corregida'],
  [4837, ['90'], ['III-3'], ['DFD', 'flujo de datos', 'entidades externas', 'procesos', 'almacenes'], sources[4837], null,
    'Respuesta C. Los cuatro componentes básicos de un DFD son entidades externas, procesos, almacenes de datos y flujos de datos. “Función” puede usarse coloquialmente para describir lo que hace un proceso, por lo que el original no permitía descartarla sin precisar el vocabulario; se cambia por “clase UML”, que no es uno de los cuatro componentes DFD.', 'corregida'],
  [4838, ['99'], ['III-2'], ['estimación de software', 'descomposición', 'bottom-up', 'modelos empíricos', 'esfuerzo'], sources[4838], null,
    'Respuesta A. El desglose del trabajo y estimación bottom-up es una familia de técnicas de descomposición; los modelos paramétricos/empíricos, calibrados con datos de proyectos anteriores, son otra. LOC y puntos de función son principalmente medidas de tamaño que pueden alimentar estimaciones, no dos familias generales de métodos de estimación del esfuerzo. Se precisó el nivel de clasificación para evitar mezclar métricas de tamaño y métodos.', 'corregida'],
  [4839, ['99'], ['III-2'], ['COCOMO 81', 'modo embedded', 'modo orgánico', 'modo semidetached', 'estimación de esfuerzo'], sources[4839], null,
    'Respuesta B. En los modos de COCOMO 81, Embedded es el adecuado cuando el producto debe operar bajo restricciones estrechamente acopladas de hardware, software y operación. El tamaño de 300 K instrucciones no decide por sí solo el modo; la rigidez de las restricciones es el rasgo que orienta la respuesta. “Modo avanzado” es una variante/nivel del modelo, no un cuarto modo de desarrollo.', 'corregida'],
  [4840, ['90'], ['III-3'], ['DFD', 'flujo de datos', 'flechas', 'dirección', 'MÉTRICA v3'], sources[4840], null,
    'Respuesta A. En las notaciones convencionales de DFD, el flujo se representa con una línea dirigida (habitualmente flecha), se etiqueta con el dato transportado y puede conectar una entidad externa, un proceso o un almacén, respetando las reglas de la notación. Se reemplazó la clave original, que era incorrecta: la opción “tiene siempre flechas” era la única verdadera de la lista.', 'corregida']
];

const edits = {
  4836: { texto: '¿Cuál afirmación describe correctamente a Lucene, Solr y Xapian?', opciones: [
    'Los tres son sistemas gestores de bases de datos relacionales.',
    'Ninguno permite indexar o buscar texto.',
    'Solr solo sirve para corregir la ortografía y no ofrece búsquedas.',
    'Los tres ofrecen capacidades de indexación y búsqueda de texto, aunque tienen arquitecturas distintas.'
  ], respuesta_correcta: 3 },
  4837: { texto: '¿Cuál de los siguientes NO es uno de los cuatro componentes básicos de un diagrama de flujo de datos (DFD)?', opciones: [
    'Entidad externa.',
    'Proceso.',
    'Clase UML.',
    'Almacén de datos.'
  ], respuesta_correcta: 2 },
  4838: { texto: 'En una clasificación general de métodos para estimar el esfuerzo de un proyecto software, ¿qué pareja contiene dos familias distintas de técnicas de estimación?', opciones: [
    'Estimación por descomposición del trabajo (bottom-up) y estimación basada en modelos empíricos/paramétricos.',
    'Líneas de código y puntos de función, considerados ambos métodos completos de estimación del esfuerzo.',
    'Planificación temporal y seguimiento del cronograma, como dos métodos de estimación del tamaño del software.',
    'Puntos de función y planificación de recursos, como dos modelos paramétricos de esfuerzo.'
  ], respuesta_correcta: 0 },
  4839: { texto: 'En COCOMO 81, un proyecto debe desarrollarse bajo restricciones muy estrictas e interdependientes de hardware, software y operación. ¿Qué modo de desarrollo corresponde a esas características?', opciones: [
    'Modo orgánico.',
    'Modo embedded (empotrado).',
    'Modo semidetached (semilibre).',
    'Modo avanzado.'
  ], respuesta_correcta: 1 },
  4840: { texto: 'En las notaciones convencionales de un diagrama de flujo de datos (DFD), ¿cómo se representa un flujo de datos?', opciones: [
    'Como una línea dirigida, normalmente una flecha etiquetada con los datos que transporta.',
    'Como una línea sin dirección ni etiqueta.',
    'Solo como una conexión entre dos procesos; nunca conecta almacenes o entidades externas.',
    'No se representa gráficamente: se describe únicamente en el diccionario de datos.'
  ], respuesta_correcta: 0 }
};

aplicar({ numero: '903', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-903.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4836: ['bloque 50 — gestión documental, contenidos y trabajo colaborativo; sistemas y recuperación de información. El cotejo curricular es temático.', academy38],
  4837: ['bloque 38 — análisis, diseño y construcción; apartado 5.1, DFD y modelado de procesos.', academy38],
  4838: ['bloque 38 — análisis, diseño y construcción; apartado 4.3 sobre estimación en Scrum (Planning Poker y estimación relativa). No trata LOC/puntos de función ni desarrolla métodos COCOMO; la academia solo sirve como mapa parcial.', academy38],
  4839: ['bloque 38 — análisis, diseño y construcción; contenidos de ciclo de vida/planificación y esfuerzo. No aparece COCOMO por nombre en el material cotejado; se declara la cobertura como contextual, no directa.', academy38],
  4840: ['bloque 38 — análisis, diseño y construcción; apartado 5.1, DFD, flujos y reglas de representación.', academy38]
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [detail, url] = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${detail} El cotejo ubica la cobertura y no valida la respuesta técnica.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} La academia se emplea como mapa curricular, no como autoridad técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ${detail} La academia se emplea como mapa curricular, no como autoridad técnica.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy 2026.1, ${detail} Cotejo de cobertura curricular; no se usa para validar la respuesta técnica.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 903.');
