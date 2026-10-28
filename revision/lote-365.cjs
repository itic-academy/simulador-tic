const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2141, [80, 81], ['I-9', 'IV-12'], ['X.509 v3', 'RFC 5280', 'extensiones no críticas', 'PKI'],
    [
      { url: 'https://www.rfc-editor.org/rfc/rfc5280.html', referencia: 'RFC 5280, §4.2: las aplicaciones deben rechazar el certificado si no reconocen una extensión crítica; una extensión no crítica puede ignorarse si no se reconoce, pero debe procesarse si se reconoce. El mismo apartado permite extensiones privadas y prohíbe duplicar una misma extensión en el certificado.' }
    ],
    'RFC 5280, §4.2, perfil X.509 para la PKI de Internet',
    'La pregunta original tenía más de una opción defendible: RFC 5280 permite ignorar extensiones no críticas desconocidas, prohíbe incluir más de una instancia de una misma extensión y permite extensiones privadas. Se sustituye por un caso concreto con respuesta inequívoca y se conserva expresamente la condición «no reconoce»; si la extensión no crítica sí se reconoce, el perfil exige procesarla.',
    'corregida'
  ],
  [
    2142, [65], ['II-6', 'III-12'], ['SOAP', 'SOAP 1.1', 'servicios web', 'W3C'],
    [
      { url: 'https://www.w3.org/TR/soap11/', referencia: 'W3C Note Simple Object Access Protocol (SOAP) 1.1, título y especificación de 8 de mayo de 2000.' },
      { url: 'https://www.w3.org/TR/soap12/', referencia: 'W3C SOAP 1.2, §1: indica que en versiones anteriores SOAP era un acrónimo, pero que ya no lo es en SOAP 1.2.' }
    ],
    'W3C SOAP 1.1 y 1.2; el acrónimo solo se atribuye a la especificación histórica 1.1',
    'Se limita el enunciado a SOAP 1.1, cuyo título W3C desarrolla como Simple Object Access Protocol. No se presenta esa expansión como significado vigente del nombre SOAP en general: la especificación SOAP 1.2 dice expresamente que ya no es un acrónimo.',
    'historica'
  ],
  [
    2143, [69], ['II-14'], ['Apache OpenOffice', 'software libre', 'ofimática', 'Writer', 'Base', 'Math'],
    [
      { url: 'https://www.openoffice.org/product/index.html', referencia: 'Sitio oficial de Apache OpenOffice, descripción del producto y lista de aplicaciones: Writer, Calc, Impress, Draw, Base y Math.' }
    ],
    'Descripción oficial de productos de Apache OpenOffice',
    'Se actualiza el nombre legado OpenOffice.org a Apache OpenOffice 4.1.17, versión que el propio sitio oficial identifica como publicada, y se conserva «todas las anteriores»: Base, Writer y Math figuran entre las aplicaciones de la suite. La pregunta deja de depender del antiguo nombre del proyecto.',
    'corregida'
  ],
  [
    2144, [54], ['II-1'], ['AGP', 'Accelerated Graphics Port', 'hardware gráfico', 'chipset', 'interfaz punto a punto'],
    [
      { url: 'https://download.intel.com/design/chipsets/designex/29865202.pdf', referencia: 'Intel 845E Chipset Platform Design Guide, §1.4.1.3: describe AGP como interconexión de alto rendimiento para gráficos 3D y emplea una topología punto a punto para la interfaz AGP del chipset.' },
      { url: 'https://www.dcs.ed.ac.uk/home/ecole/agp/agp10.pdf', referencia: 'Intel A.G.P. Interface Specification, revisión 1.0, figura 1-1 y §1: muestra la conexión AGP entre el acelerador gráfico y el chipset; el procesador se conecta al chipset por el sistema, no a través de una interfaz AGP directa.' }
    ],
    'Especificación de interfaz AGP de Intel y guía de diseño Intel 845E',
    'El enunciado atribuye a AGP una conexión directa con el procesador, omitiendo el chipset y pudiendo dar una idea equivocada de la topología. Se sustituye por la finalidad estructural documentada: una conexión dedicada/punto a punto entre el dispositivo gráfico y el chipset. AGP es una interfaz histórica, ya reemplazada en equipos actuales por otras interconexiones.',
    'historica'
  ],
  [
    2145, [79], ['IV-12'], ['hash criptográfico', 'IDEA', 'RIPEMD-128', 'SHA-1', 'resistencia a preimagen'],
    [
      { url: 'https://eprint.iacr.org/2012/264.pdf', referencia: 'IACR ePrint 2012/264, sección 2: IDEA se describe como cifrador de bloque con clave; RIPEMD-128 produce un resultado de 128 bits y RIPEMD-160 uno de 160 bits.' },
      { url: 'https://csrc.nist.gov/files/pubs/fips/180-4/final/docs/fips180-4.pdf', referencia: 'NIST FIPS PUB 180-4, Secure Hash Standard, SHA-1: define un resumen de mensaje de 160 bits. NIST indica que SHA-1 está obsoleto para varios usos criptográficos y en transición de retirada; aquí solo se verifica su longitud histórica.' },
      { url: 'https://csrc.nist.gov/projects/hash-functions', referencia: 'NIST CSRC, Hash Functions: explica que los algoritmos hash mapean mensajes de longitud arbitraria a resúmenes de longitud fija y recoge los niveles de seguridad de SHA-1.' }
    ],
    'IACR ePrint sobre IDEA/RIPEMD y NIST FIPS 180-4 sobre SHA-1',
    'El original tiene dos errores conceptuales: los resúmenes hash no son claves, por lo que RIPEMD-128 y SHA-1 no «usan claves» de 128/160 bits; además la clave seleccionada no queda justificada como única falsa. Se reformula en torno a propiedades verificables: IDEA es un cifrador simétrico, RIPEMD-128 genera un resumen de 128 bits, SHA-1 genera uno de 160 bits y la resistencia a preimagen es una propiedad de diseño de un hash criptográfico. Se advierte que SHA-1 está obsoleto para usos criptográficos modernos; sus 160 bits describen el tamaño del resumen, no un nivel de seguridad actual.',
    'corregida'
  ]
];

const edits = {
  2141: {
    texto: 'Según RFC 5280, ¿qué puede hacer una aplicación al encontrar en un certificado X.509 una extensión no crítica que no reconoce?',
    opciones: [
      'Debe rechazar siempre el certificado, igual que ante cualquier extensión crítica desconocida.',
      'Debe procesarla como si fuera crítica.',
      'Puede ignorarla; si la reconoce, el perfil exige procesarla.',
      'La entidad certificadora debe retirar obligatoriamente todas las extensiones no críticas.'
    ],
    respuesta_correcta: 2
  },
  2142: {
    texto: 'En la especificación histórica W3C SOAP 1.1, ¿qué expansión recibían originalmente las siglas SOAP?',
    respuesta_correcta: 3
  },
  2143: {
    texto: '¿Qué aplicaciones forman parte de Apache OpenOffice 4.1.17?',
    respuesta_correcta: 0
  },
  2144: {
    texto: '¿Qué describe correctamente la topología de la interfaz AGP clásica?',
    opciones: [
      'Una conexión dedicada punto a punto entre el dispositivo gráfico y el chipset.',
      'Una interfaz directa entre la tarjeta gráfica y el disco duro.',
      'Un mecanismo para aislar el vídeo de la arquitectura ISA.',
      'Un bus que separa el audio y el vídeo del procesador.'
    ],
    respuesta_correcta: 0
  },
  2145: {
    texto: '¿Cuál de las siguientes afirmaciones sobre algoritmos criptográficos es falsa?',
    opciones: [
      'IDEA es un algoritmo de cifrado asimétrico.',
      'RIPEMD-128 produce un resumen de 128 bits.',
      'SHA-1 produce un resumen de 160 bits.',
      'Una función hash criptográfica se diseña para ofrecer resistencia unidireccional, incluida la resistencia a preimagen.'
    ],
    respuesta_correcta: 0
  }
};

aplicar({ numero: '365', fecha: '2026-10-28', records, edits });
