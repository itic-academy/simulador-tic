const apply = require('./aplicar-lote.cjs');

const records = [
  [1491, [74], [], ['GIS', 'SIG', 'hardware', 'software', 'datos geográficos', 'personas', 'procedimientos'], [
    {url: 'https://www.esri.com/about/newsroom/insider/fifth-part-of-gi', referencia: 'Esri, Enabling the Fifth Part of a Successful GIS: los cinco componentes esenciales son hardware, software, datos, métodos/procedimientos y personas.'}
  ], null, 'Un SIG/GIS se apoya en hardware, software, datos geográficos, personas y métodos o procedimientos. Se ajustan los distractores para diferenciar los componentes del sistema de conceptos o productos de datos (como capas temáticas) y de operaciones concretas (como proyección o georreferenciación). Esri sirve como fuente explicativa de los componentes; la correspondencia curricular oficial es A1-74, sistemas de información geográfica.', 'corregida'],
  [1492, [65], ['II-9'], ['RDF', 'W3C', 'web semántica', 'recursos', 'triples'], [
    {url: 'https://www.w3.org/TR/rdf11-concepts/', referencia: 'W3C, RDF 1.1 Concepts and Abstract Syntax: RDF es un marco para expresar información sobre recursos; el modelo representa afirmaciones como triples sujeto-predicado-objeto.'},
    {url: 'https://www.w3.org/TR/rdf-primer/', referencia: 'W3C, RDF 1.1 Primer: presenta RDF como framework para expresar información sobre recursos y permitir su procesamiento e intercambio.'}
  ], null, 'RDF significa Resource Description Framework: es un marco y modelo de datos del W3C para expresar información sobre recursos, normalmente mediante triples sujeto-predicado-objeto. La respuesta original que lo llamaba simplemente «lenguaje para definir datos» era imprecisa, así que se reformula la pregunta. Encaje oficial: A1-65 (arquitectura y desarrollo web) y A2-II-9 (lenguajes de marca y sus derivaciones); se usa RDF como estándar/modelo, no como lenguaje de marcado HTML/XML.', 'corregida'],
  [1493, [65], ['II-9'], ['motores de renderizado', 'WebKit', 'Blink', 'Presto', 'GNU Hurd'], [
    {url: 'https://www.webkit.org/about/', referencia: 'WebKit project, About WebKit: motor de navegador de código abierto.'},
    {url: 'https://www.chromium.org/blink/', referencia: 'Chromium Project, Blink (Rendering Engine): Blink es el motor de renderizado usado por Chromium.'},
    {url: 'https://help.opera.com/en/operas-archived-history/', referencia: 'Opera Help, Archived version history 1–12: identifica Presto como motor de renderizado de las versiones históricas de Opera 12.'},
    {url: 'https://www.gnu.org/software/hurd/kernel.html', referencia: 'GNU Project, GNU Hurd/kernel: Hurd es parte del sistema/kernel GNU, no un motor de renderizado web.'}
  ], null, 'La opción que no es un motor de renderizado es GNU Hurd: es el kernel/sistema de servidores del proyecto GNU. WebKit y Blink son motores de navegador; Presto también lo fue históricamente (por ejemplo, en Opera 12). Se conserva la clave, pero se marca el contexto como histórico porque Presto ya no es el motor de las versiones actuales de Opera; la pregunta no debe leerse como si las cuatro opciones describieran tecnologías actuales.', 'historica'],
  [1494, [65], ['II-9', 'III-12'], ['HTML', 'HTML5', 'WAI-ARIA', 'elementos semánticos', 'canvas', 'SVG', 'accesibilidad'], [
    {url: 'https://html.spec.whatwg.org/multipage/indices.html#elements-3', referencia: 'WHATWG HTML Living Standard, índice de elementos HTML: define los nombres de elementos estándar; no existe un elemento HTML <aria>.'},
    {url: 'https://www.w3.org/TR/html-aria/', referencia: 'W3C, ARIA in HTML: ARIA aporta roles y atributos aria-* para accesibilidad; no crea una etiqueta <aria>.'}
  ], null, 'La opción inválida es «crear etiquetas <aria>»: ARIA añade atributos aria-* y roles a elementos HTML, pero no define un elemento <aria>. La formulación anterior mezclaba una lista informal de novedades históricas de HTML5 con una falsa etiqueta; se transforma en una comprobación objetiva de conformidad HTML. Los temas oficiales son A1-65 y A2-II-9, con A2-III-12 por desarrollo de aplicaciones web.', 'corregida'],
  [1495, [65], ['II-9', 'III-12'], ['HTML', 'iframe', 'documento incrustado', 'contexto navegable'], [
    {url: 'https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element', referencia: 'WHATWG HTML Living Standard, The iframe element: representa un contenido navegable y su atributo src señala la página/documento que contiene.'}
  ], null, 'El elemento <iframe> incorpora en la página un contexto navegable cuyo contenido es otro documento, normalmente indicado por src (o mediante srcdoc). No extrae selectivamente fragmentos del HTML de otra página ni se define para generar PDF. Se reescribe la opción correcta para describir el comportamiento especificado por WHATWG.', 'corregida']
];

const edits = {
  1491: {
    texto: '¿Qué conjunto enumera los cinco componentes habituales de un sistema de información geográfica (GIS/SIG)?',
    opciones: [
      'Hardware, software, datos geográficos, personas y métodos o procedimientos.',
      'Hardware, software, datos geográficos, capas temáticas y georreferenciación.',
      'Proyección, georreferenciación, programas, datos espaciales y equipo científico.',
      'Hardware, software, información geográfica, equipo humano y capas temáticas.'
    ],
    respuesta_correcta: 0
  },
  1492: {
    texto: '¿Qué describe mejor Resource Description Framework (RDF), definido por el W3C?',
    opciones: [
      'Un marco para expresar información sobre recursos mediante un modelo de datos basado en triples.',
      'Un estándar que especifica la presentación visual de páginas web accesibles.',
      'Un protocolo de transporte para transferir archivos entre servidores web.',
      'Un formato binario propietario para almacenar bases de datos relacionales.'
    ],
    respuesta_correcta: 0
  },
  1494: {
    texto: '¿Cuál de estos nombres no corresponde a un elemento definido por el estándar HTML?',
    opciones: [
      'article',
      'canvas',
      'video',
      'aria'
    ],
    respuesta_correcta: 3
  },
  1495: {
    texto: '¿Qué describe correctamente el elemento HTML <iframe>?',
    opciones: [
      'Extrae un fragmento del HTML de una página remota y lo muestra de forma selectiva en la página actual.',
      'Genera un documento PDF a partir de la página que lo contiene.',
      'Crea un contexto navegable cuyo contenido es otro documento, normalmente indicado mediante src o srcdoc.',
      'Es una etiqueta obsoleta que solo sirve para abrir ventanas emergentes.'
    ],
    respuesta_correcta: 2
  }
};

apply({numero: '235', fecha: '2026-10-25', records, edits});
