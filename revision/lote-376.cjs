const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2196, [70], ['III-15'], ['minería de datos', 'data mining', 'patrones', 'predicción', 'detección de fraude'],
    [
      { url: 'https://files.gao.gov/reports/GAO-26-107799/index.html', referencia: 'U.S. GAO-26-107799, CMS’s Use of Data Analytics to Identify and Prevent Fraud: documenta analítica predictiva para detectar patrones anómalos y modelos que encuentran indicios de fraude.' },
      { url: 'https://antifraud-knowledge-centre.ec.europa.eu/useful-tools/what-arachne_en', referencia: 'Comisión Europea, Arachne+: herramienta corporativa de minería de datos y puntuación de riesgo para detectar y prevenir fraude, conflictos de intereses e irregularidades.' }
    ],
    'U.S. Government Accountability Office, GAO-26-107799; Comisión Europea, herramienta Arachne+',
    'Las tres primeras opciones describen aplicaciones posibles: análisis predictivo, descubrimiento de patrones/anomalías y detección de indicios de fraude. Por tanto «todas las anteriores» es correcta. La minería de datos puede contribuir a una predicción, aunque no garantiza por sí sola que el valor futuro se determine con certeza.',
    'vigente'
  ],
  [
    2197, [67], ['III-10'], ['Java', 'recolector de basura', 'garbage collection', 'memoria heap', 'alcanzabilidad'],
    [
      { url: 'https://docs.oracle.com/en/java/javase/24/gctuning/garbage-collector-implementation.html', referencia: 'Oracle Java SE 24 GC Tuning Guide: un objeto es basura cuando ya no puede alcanzarse desde referencias vivas y su memoria puede reutilizarse por la máquina virtual.' },
      { url: 'https://docs.oracle.com/en/java/javase/24/docs/api/java.base/java/lang/ref/package-summary.html', referencia: 'Oracle Java SE 24 API, java.lang.ref: define alcanzabilidad e inelegibilidad para reclamación de objetos.' }
    ],
    'Oracle Java SE 24, Garbage Collector Tuning Guide y API java.lang.ref',
    'Se corrige la formulación «limpiar/eliminar objetos no usados o referenciados», que confunde no uso con alcanzabilidad. El GC recupera memoria de objetos que ya no son alcanzables; su elegibilidad no obliga a una recolección inmediata ni equivale a depurar el programa o a una función de JDBC.',
    'corregida'
  ],
  [
    2198, [64], ['II-5'], ['SQL', 'vista', 'view', 'consulta almacenada', 'tabla virtual'],
    [
      { url: 'https://www.postgresql.org/docs/current/sql-createview.html', referencia: 'PostgreSQL 18, CREATE VIEW: una vista ordinaria define una consulta y no se materializa físicamente; esta consulta se ejecuta cuando se referencia la vista.' },
      { url: 'https://learn.microsoft.com/en-us/sql/relational-databases/views/views?view=sql-server-ver17', referencia: 'Microsoft Learn, Views: define la vista como tabla virtual cuyo contenido se determina mediante una consulta; distingue las vistas indexadas/materializadas.' }
    ],
    'Documentación oficial PostgreSQL CREATE VIEW y Microsoft SQL Server Views',
    'Se especifica «vista ordinaria, no materializada»: una vista se define mediante una consulta y se consulta con forma tabular, pero no es por ello una tabla temporal ni un índice. La precisión evita confundir vistas ordinarias con vistas materializadas/indexadas, que algunos SGBD almacenan físicamente.',
    'corregida'
  ],
  [
    2199, [85], ['IV-12'], ['criptoactivos', 'manipulación de mercado', 'spoofing', 'órdenes canceladas', 'criptoeconomía'],
    [
      { url: 'https://www.cftc.gov/LawRegulation/FederalRegister/FinalRules/2013-12365.html', referencia: 'CFTC, interpretación de la prohibición de spoofing: incluye presentar órdenes con intención de cancelarlas antes de ejecución y crear una apariencia falsa de profundidad o movimientos artificiales de precios.' },
      { url: 'https://www.sec.gov/files/litigation/complaints/2022/comp-pr2022-175.pdf', referencia: 'SEC, expediente judicial sobre manipulación de un criptoactivo: documenta órdenes de compra y venta colocadas y canceladas para alterar artificialmente volumen y precio del token.' }
    ],
    'CFTC, regla final contra spoofing; SEC, expediente de manipulación del criptoactivo Hydro',
    'La clave original «wash traders» era incorrecta para la práctica descrita. En el spoofing se introducen órdenes no genuinas para aparentar oferta/demanda y se cancelan antes de su ejecución para influir en el mercado; wash trading simula operaciones/volumen mediante compras y ventas que no reflejan una transferencia económica genuina. Se corrige la clave a «Spoofing» y se explicita la intención de cancelar.',
    'corregida'
  ],
  [
    2200, [65], ['II-9', 'III-12'], ['AJAX', 'JavaScript', 'XMLHttpRequest', 'JSON', 'desarrollo web'],
    [
      { url: 'https://www.michaeljordan.nl/ajax.pdf', referencia: 'Jesse James Garrett, Ajax: A New Approach to Web Applications (2005): presenta Ajax explícitamente como combinación de varias tecnologías preexistentes (XHTML/CSS, DOM, XMLHttpRequest y JavaScript).' },
      { url: 'https://developer.mozilla.org/en-US/docs/Glossary/AJAX', referencia: 'MDN, Ajax: describe la técnica de solicitudes HTTP asíncronas y actualización parcial; el formato actual puede ser JSON y el término ya no exige XML.' },
      { url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests', referencia: 'MDN, Making network requests with JavaScript: explica que la técnica fue llamada AJAX por el uso temprano de XML, aunque hoy es frecuente JSON y la página puede actualizarse sin recarga completa.' }
    ],
    'Jesse James Garrett, ensayo original sobre Ajax; MDN, documentación actual de Ajax y solicitudes web',
    'La afirmación elegida es correcta: AJAX no es una plataforma exclusiva de JEE ni una tecnología única, sino un enfoque que combina tecnologías web. El acrónimo contiene «XML», pero no exige transferir siempre XML: en la práctica se usa también JSON u otros formatos; permite actualizar partes de la página sin recargarla por completo.',
    'vigente'
  ]
];

const edits = {
  2197: {
    texto: 'En Java, ¿qué función cumple el recolector de basura (garbage collector)?',
    opciones: [
      'Recupera memoria ocupada por objetos que ya no son alcanzables desde referencias vivas; cuándo se recolectan depende de la JVM.',
      'Depura el código fuente y localiza errores de ejecución, como un debugger.',
      'Gestiona la conexión con tablas de bases de datos como parte de JDBC.'
    ],
    respuesta_correcta: 0
  },
  2198: {
    texto: 'En un SGBD relacional, ¿qué define una vista ordinaria no materializada?',
    opciones: [
      'Una función agregada que calcula el promedio de una columna.',
      'Una tabla temporal almacenada para mejorar el rendimiento.',
      'Un objeto definido por una consulta que se presenta como una tabla; sus filas se obtienen al consultar la vista.',
      'Un índice que organiza físicamente las filas de una tabla.'
    ],
    respuesta_correcta: 2
  },
  2199: {
    texto: '¿Qué práctica de manipulación de mercado consiste en introducir órdenes no genuinas para aparentar presión compradora o vendedora, con intención de cancelarlas antes de su ejecución y aprovechar el efecto en el precio de un criptoactivo?',
    opcion: [1, 'Wash trading'],
    respuesta_correcta: 2
  }
};

aplicar({ numero: '376', fecha: '2026-10-28', records, edits });
