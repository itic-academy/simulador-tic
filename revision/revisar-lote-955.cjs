const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy47 = 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk';
const academy73 = 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk';

const records = [
  [5096, ['61'], ['II-2'], ['Windows', 'memoria virtual', 'VirtualAlloc', 'regiones', 'páginas'], [
    ref('https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-virtualalloc', 'Microsoft Learn, VirtualAlloc: reserva, confirma o cambia el estado de una región de páginas del espacio virtual del proceso; el tamaño se redondea a límites de página y puede especificarse en bytes.'),
    ref('https://learn.microsoft.com/en-us/windows/win32/memory/working-with-pages', 'Microsoft Learn, Working with Pages: VirtualQuery describe regiones de páginas contiguas con el mismo estado, asignación y protección; la granularidad de página depende del sistema.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 61: sistemas operativos Microsoft, fundamentos, administración, instalación y gestión.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.2: características técnicas y administración de sistemas operativos, incluidos Windows.'),
    ref(academy47, 'ITIC Academy, bloque 47, sistemas operativos y Windows: cotejo curricular general; no se atribuye al material la terminología específica de VirtualAlloc.')
  ], null, 'La expresión original «segmentos de memoria virtual» no es una descripción precisa del modelo de memoria virtual de Windows. Microsoft documenta espacios privados por proceso, asignaciones de regiones de páginas y tamaño redondeado a páginas, no segmentos uniformes de longitud fija. Se reescribe el reactivo sobre regiones reservadas por VirtualAlloc; las páginas tienen granularidad fija para el sistema, pero una región puede abarcar una cantidad variable de páginas. Respuesta A.', 'corregida'],
  [5097, ['65'], ['II-6', 'III-12'], ['WSDL', 'WSDL 1.1', 'servicios web', 'solicit-response', 'operaciones abstractas'], [
    ref('https://www.w3.org/TR/wsdl.html#_porttypes', 'W3C Note WSDL 1.1, §2.4.3: la operación solicit-response contiene primero output y luego input, con cero o más fault; el endpoint envía un mensaje y recibe la respuesta correlacionada.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 65: desarrollo web e interconexión con sistemas y servicios.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.6: arquitectura de servicios web; tema III.12: estándares, protocolos e interoperabilidad de servicios web.'),
    ref(academy30, 'ITIC Academy, bloque 30, tecnologías de sistemas de información: referencia curricular general a aplicaciones y servicios; no se localizó un tratamiento directo del patrón WSDL solicit-response.')
  ], null, 'El orden output→input, junto con faults opcionales, identifica en WSDL 1.1 el patrón solicit-response: el servicio inicia la comunicación enviando un mensaje y recibe una respuesta correlacionada. Se conserva la opción C. Se normaliza el fragmento y se explicita el patrón para que el ejercicio mida la gramática, sin errores tipográficos distractores.', 'corregida'],
  [5098, ['67'], ['III-10'], ['Java', 'portabilidad', 'JVM', 'JNI', 'independencia de plataforma'], [
    ref('https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html', 'Oracle Java Tutorials, The Java Technology: el entorno Java y la JVM aíslan la aplicación de la plataforma subyacente y permiten ejecutar la misma aplicación en distintas plataformas compatibles.'),
    ref('https://docs.oracle.com/en/java/javase/26/docs/specs/jni/intro.html', 'Oracle, JNI Specification, §1: el código nativo permite utilizar funciones dependientes de la plataforma; aplicaciones que usan JNI pueden requerir código o bibliotecas específicos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.10: arquitectura Java EE/Jakarta EE y características de funcionamiento.'),
    ref(academy30, 'ITIC Academy, bloque 30, tecnologías de sistemas de información: encaje general de plataformas de desarrollo; no se cita como fuente de la especificación JNI.')
  ], null, '«Write once, run anywhere» es un lema que resume la portabilidad buscada por Java cuando se ejecuta sobre una plataforma Java compatible; no constituye una garantía absoluta para cualquier programa y entorno. Por ejemplo, JNI puede introducir funciones o bibliotecas dependientes de la plataforma. El resto de opciones se acota para distinguir el diseño portable del carácter no universal del lema. Respuesta D.', 'corregida'],
  [5099, ['108'], ['IV-7'], ['satélites', 'GEO', 'órbita geoestacionaria', 'telecomunicaciones', 'medios no guiados'], [
    ref('https://science.nasa.gov/earth/earth-observatory/catalog-of-earth-satellite-orbits/', 'NASA Earth Observatory, Catalog of Earth Satellite Orbits: a unos 35.786 km sobre la superficie, el período orbital coincide con la rotación terrestre; para permanecer sobre un punto se requiere la órbita geostationary.'),
    ref('https://www.nasa.gov/missions/tdrs/tracking-and-data-relay-satellite-tdrs-generations-of-spacecraft/', 'NASA, Tracking and Data Relay Satellite: caracteriza GEO por su altitud aproximada de 35.786 km; la órbita geoestacionaria es geosíncrona y mantiene la posición relativa respecto al suelo.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 108: redes de telecomunicaciones, medios de transmisión e infraestructuras de acceso.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.7: medios de transmisión, incluidos los no guiados o inalámbricos.'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», versión 2026: contexto curricular de redes y transmisión; no se atribuye una cifra orbital concreta al material sin localizarla.')
  ], null, 'La altitud por sí sola no determina que una órbita sea geoestacionaria: también se requieren órbita circular, plano ecuatorial y período igual a la rotación terrestre. Se incorpora ese contexto y se usa la altitud nominal de 35.786 km (aprox. 36.000 km); así, la opción correcta es GEO/geoestacionaria. GEO no es sinónimo de cualquier órbita geosíncrona.', 'corregida'],
  [5100, ['73'], [], ['SCORM', 'ADL', 'e-learning', 'interoperabilidad', 'LMS'], [
    ref('https://www.adlnet.gov/assets/uploads/ChoosingAnLMS.pdf', 'Advanced Distributed Learning (ADL), Choosing an LMS: SCORM significa Sharable Content Object Reference Model y define la relación entre componentes, modelos de datos y protocolos para compartir contenidos entre sistemas conformes.'),
    ref('https://www.adlnet.gov/assets/uploads/SCORM2004-3rd_ImpactSummary.pdf', 'ADL, SCORM 2004 3rd Edition Impact Summary: desarrolla el nombre completo Sharable Content Object Reference Model y su naturaleza de modelo de referencia.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 73: e-learning, conceptos, herramientas, sistemas de implantación y normalización.'),
    ref(academy73, 'ITIC Academy, documento 33, temas 73–74 «E-Learning y GIS», versión 2026: cotejo curricular directo del tema e-learning; no sustituye la documentación de ADL.')
  ], null, 'SCORM significa Sharable Content Object Reference Model. Es un modelo de referencia de ADL que especifica convenciones técnicas para la interoperabilidad de contenidos formativos con sistemas de gestión del aprendizaje; ADL lo promueve, pero no es un organismo general de normalización. La opción D queda corregida para incluir nombre y alcance con precisión.', 'corregida'],
];

const edits = {
  5096: {
    texto: 'En Windows, ¿qué describe mejor una región de memoria virtual reservada mediante VirtualAlloc?',
    opciones: [
      'Un intervalo de direcciones virtuales del proceso que abarca páginas contiguas; su tamaño puede variar y se ajusta a la granularidad de página.',
      'Un conjunto de direcciones físicas contiguas al que acceden directamente todos los procesos.',
      'Una única página de tamaño variable definido por cada aplicación.',
      'Un segmento de longitud fija que el sistema comparte automáticamente entre procesos.'
    ],
    respuesta_correcta: 0,
    comentarios: 'VirtualAlloc reserva o confirma intervalos de direcciones del espacio virtual del proceso. El tamaño solicitado se ajusta a límites de página y la región puede contener un número variable de páginas.'
  },
  5097: {
    texto: 'En WSDL 1.1, ¿qué patrón de operación abstracta se define por un mensaje de salida seguido de uno de entrada y cero o más mensajes de fallo?',
    opciones: ['One-way', 'Request-response', 'Solicit-response', 'Notification'],
    comentarios: 'WSDL 1.1 §2.4.3 define el patrón solicit-response con output seguido de input y faults opcionales. El endpoint envía el mensaje inicial y recibe una respuesta correlacionada.'
  },
  5098: {
    texto: '¿Cuál de estas expresiones sobre Java debe entenderse como un lema de portabilidad, no como una garantía incondicional para cualquier programa y plataforma?',
    opciones: [
      'Una JVM compatible puede ejecutar bytecode Java conforme a la plataforma Java.',
      'La JVM y las bibliotecas de la plataforma abstraen parte de las diferencias de hardware y sistema operativo.',
      'El uso de interfaces nativas puede introducir dependencias específicas de una plataforma.',
      '«Write once, run anywhere».'
    ],
    comentarios: 'La portabilidad es una propiedad buscada por la plataforma Java en entornos compatibles, no una promesa absoluta. El código nativo/JNI puede depender de cada plataforma; «Write once, run anywhere» es un lema.'
  },
  5099: {
    texto: 'Un satélite describe una órbita circular ecuatorial de unos 35.786 km de altitud, con período igual a la rotación terrestre. ¿Qué tipo de órbita le permite permanecer sobre el mismo punto de la superficie?',
    opciones: [
      'GEO geoestacionaria.',
      'MEO (órbita terrestre media).',
      'Una órbita elíptica polar.',
      'Una órbita ecuatorial que avanza en sentido contrario a la rotación terrestre.'
    ],
    comentarios: 'La altitud nominal GEO es aproximadamente 35.786 km. Para ser geoestacionaria, además debe ser circular, ecuatorial y tener período igual a la rotación terrestre; así mantiene una posición aparente fija.'
  },
  5100: {
    texto: 'En e-learning, ¿qué significa SCORM y cuál es su finalidad principal?',
    opciones: [
      'Un comité de ISO que acredita individualmente a los tutores virtuales.',
      'Una versión de la guía administrativa AGR010 para impartir cursos a distancia.',
      'El organismo federal estadounidense que aprueba toda norma técnica de formación en línea.',
      'Sharable Content Object Reference Model: un modelo de referencia promovido por ADL para facilitar la interoperabilidad de contenidos de aprendizaje con LMS conformes.'
    ],
    comentarios: 'SCORM expande a Sharable Content Object Reference Model. ADL promueve el modelo, que especifica convenciones para interoperabilidad de contenidos y LMS; no convierte a ADL en organismo general de normalización.'
  }
};

aplicar({ numero: '955', fecha: '2026-11-11', records, edits });
