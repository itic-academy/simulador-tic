const apply = require('./aplicar-lote.cjs');

const s = {
  jelinski: {
    url: 'https://doi.org/10.1016/B978-0-12-266950-7.50028-1',
    referencia: 'Z. Jelinski y P. B. Moranda, “Software Reliability Research” (1972), en Statistical Computer Performance Evaluation, pp. 465–484, DOI 10.1016/B978-0-12-266950-7.50028-1: trabajo original del modelo de crecimiento de fiabilidad basado en tiempos entre fallos y fallos residuales.'
  },
  cocomo: {
    url: 'https://boehmcsse.org/tools/cocomo-ii/',
    referencia: 'Boehm Center for Systems and Software Engineering, USC, COCOMO II: tres submodelos Application Composition, Early Design y Post-Architecture para estimar coste/esfuerzo/calendario en diferentes etapas.'
  },
  cocomoManual: {
    url: 'https://info.usherbrooke.ca/llavoie/enseignement/References/CocomoII_Model_Manual.pdf',
    referencia: 'USC Center for Software Engineering, COCOMO II Model Definition Manual v2.1 (1995–2000), copia del manual técnico original: Application Composition emplea Object Points (pantallas, informes y componentes 3GL), no líneas de código como métrica de tamaño inicial.'
  },
  jenkins: {
    url: 'https://www.jenkins.io/doc/',
    referencia: 'Jenkins User Documentation, “What is Jenkins?”: lo define como servidor de automatización extensible que automatiza construcción, pruebas, entrega y despliegue; puede utilizarse como servidor de integración continua.'
  },
  mccabe: {
    url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir5459.pdf',
    referencia: 'NIST IR 5459, Quality Characteristics and Metrics for Reusable Software, apartado Calculation of Cyclomatic Complexity: V(G)=E−N+2P para un grafo de control; también indica que la complejidad ciclomática equivale al número de regiones del grafo.'
  },
  mccall: {
    url: 'https://apps.dtic.mil/sti/pdfs/ADA049014.pdf',
    referencia: 'McCall, Richards y Walters, Factors in Software Quality, RADC-TR-77-369, vol. I (1977), informe original: define Correctness como el grado en que el programa satisface especificaciones y objetivos de misión del usuario.'
  }
};

const records = [
  [2601, [98], ['III-13'], ['Jelinski-Moranda', 'fiabilidad del software', 'modelo de crecimiento de fiabilidad', 'tiempo entre fallos'], [s.jelinski], '', 'Se sustituye “métricas” por la denominación correcta: Jelinski–Moranda es un modelo de crecimiento de la fiabilidad del software. El modelo se basa en tiempos entre fallos y en un número inicial finito de fallos que se van detectando/eliminando bajo supuestos idealizados. No es una métrica de productividad, complejidad ni un modelo de factores de calidad.', 'corregida'],
  [2602, [99], ['II-15'], ['COCOMO II', 'estimación de esfuerzo', 'Application Composition', 'Object Points', 'Early Design', 'Post-Architecture'], [s.cocomo, s.cocomoManual], '', 'Se elimina la ambigüedad cronológica del original: el proyecto COCOMO II comenzó en 1994 y el modelo operativo COCOMO II.1997 es una versión. Sus tres submodelos son Application Composition, Early Design y Post-Architecture. Application Composition estima con Object Points, no con líneas de código; por ello esa es la afirmación incorrecta.', 'corregida'],
  [2603, [96, 102], ['IV-4'], ['integración continua', 'Jenkins', 'servidor de automatización', 'CI/CD'], [s.jenkins], '', 'Se precisa que se pregunta por un servidor de automatización utilizable para integración continua. Jenkins es un servidor de automatización extensible que permite automatizar construcción, pruebas y entrega; Eclipse es un IDE, Subversion es control de versiones y PHP un lenguaje.', 'corregida'],
  [2604, [98], ['III-13'], ['McCabe', 'complejidad ciclomática', 'grafo de flujo de control', 'regiones'], [s.mccabe], '', 'Se concreta que se trata del grafo de flujo de control de un módulo. La complejidad ciclomática puede calcularse como E−N+2P y equivale al número de regiones del grafo; no es simplemente el número de aristas ni de nodos desconectados. La opción de regiones queda como respuesta.', 'corregida'],
  [2605, [98], ['III-13'], ['McCall', 'correctness', 'corrección', 'modelo histórico de calidad'], [s.mccall], '', 'Se identifica el factor Correctness del modelo histórico de McCall: grado en que el programa satisface sus especificaciones y cumple los objetivos de misión del usuario. Se mantiene la respuesta “Corrección” y se contextualiza el nombre como terminología de un modelo histórico.', 'historica']
];

const edits = {
  2601: {texto: '¿A qué aspecto de la ingeniería del software pertenece el modelo de crecimiento de fiabilidad de Jelinski–Moranda?', respuesta_correcta: 1},
  2602: {
    texto: 'Sobre COCOMO II, señale la afirmación INCORRECTA:',
    opciones: [
      'El proyecto se inició para adaptar la estimación de costes y esfuerzo a prácticas de desarrollo posteriores a COCOMO 81.',
      'Incluye los submodelos Application Composition, Early Design y Post-Architecture.',
      'Application Composition utiliza líneas de código como medida inicial de tamaño del prototipo.',
      'Application Composition estima con Object Points, mientras que Early Design y Post-Architecture utilizan otros datos de tamaño y detalle del proyecto.'
    ],
    respuesta_correcta: 2
  },
  2603: {
    texto: '¿Cuál de estas herramientas es un servidor de automatización que puede utilizarse para integración continua?',
    respuesta_correcta: 3
  },
  2604: {
    texto: 'En un grafo de flujo de control de un módulo, ¿a qué equivale la complejidad ciclomática de McCabe?',
    opciones: [
      'Al número de aristas, sin tener en cuenta nodos ni componentes.',
      'Al número de regiones del grafo.',
      'Al número de nodos desconectados del grafo.',
      'No tiene relación con grafos de flujo de control.'
    ],
    respuesta_correcta: 1
  },
  2605: {
    texto: 'En el modelo histórico de calidad de McCall, ¿qué factor expresa el grado en que un programa satisface sus especificaciones y cumple los objetivos de misión del usuario?',
    respuesta_correcta: 0
  }
};

apply({ numero: '458', fecha: '2026-10-28', records, edits });
