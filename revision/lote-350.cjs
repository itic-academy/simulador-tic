const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2066, [65, 67], ['III-10'], ['Java', 'Jakarta Servlet', 'HTTP', 'servlets'],
    { url: 'https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.pdf', referencia: 'Jakarta Servlet Specification 6.1, § 2.1: HttpServlet handlers include doGet, doPost, doPut, doDelete, doHead, doOptions and doTrace; there is no doPush callback.' },
    'Jakarta Servlet Specification 6.1, § 2.1',
    'La API HttpServlet no define doPush como manejador de un método HTTP estándar. La pregunta se restringe expresamente a los métodos definidos por Servlet; HTTP/2 server push no convierte doPush en un callback de HttpServlet.',
    'corregida'
  ],
  [
    2067, [88], ['III-2'], ['metodologías ágiles', 'Extreme Programming', 'XP', 'programación por parejas'],
    { url: 'https://agilealliance.org/glossary/xp/', referencia: 'Agile Alliance, XP glossary: Pair Programming es una práctica de XP; describe el desarrollo de producción por dos personas en una estación de trabajo.' },
    'Agile Alliance, XP glossary, práctica Pair Programming',
    'La programación por parejas (pair programming) es una práctica explícita de Extreme Programming. La fuente también explica el trabajo conjunto, la revisión continua y la colaboración del equipo; el resto de opciones contradice principios/prácticas de XP.',
    'corregida'
  ],
  [
    2068, [67, 77], ['II-9', 'III-10'], ['Java', 'XML', 'JAXB', 'Jakarta XML Binding', 'marshalling', 'unmarshalling'],
    [
      { url: 'https://jakarta.ee/specifications/xml-binding/4.0/jakarta-xml-binding-spec-4.0.pdf', referencia: 'Jakarta XML Binding 4.0 Specification: binding entre esquemas XML y clases Java; define marshalling del árbol Java a XML y unmarshalling de XML a objetos Java.' },
      { url: 'https://jakarta.ee/specifications/xml-binding/4.0/apidocs/jakarta.xml.bind/jakarta/xml/bind/jaxb', referencia: 'Jakarta XML Binding API Javadoc: JAXB proporciona los métodos de conveniencia marshal/unmarshal para convertir entre árboles de objetos Java y XML.' }
    ], 'Jakarta XML Binding 4.0 Specification y API Javadoc',
    'La opción JAXB es correcta, pero la denominación y el paquete evolucionaron: el estándar actual es Jakarta XML Binding (paquete jakarta.xml.bind), sucesor de javax.xml.bind. Se actualiza el enunciado y la respuesta para que no parezca una API incluida hoy en cualquier JDK ni se confunda con JAXP o WSDL.',
    'corregida'
  ],
  [
    2069, [47, 48], ['II-13'], ['ciberseguridad', 'Directiva NIS', 'Directiva 2016/1148', 'histórica'],
    [
      { url: 'https://eur-lex.europa.eu/legal-content/es/TXT/?uri=CELEX%3A32016L1148', referencia: 'Directiva (UE) 2016/1148 (NIS), en particular arts. 14 y 16: medidas de seguridad y notificación para operadores de servicios esenciales y proveedores de servicios digitales dentro de su ámbito.' },
      { url: 'https://www.boe.es/eli/es/rdl/2018/09/07/12/con', referencia: 'Real Decreto-ley 12/2018, de seguridad de las redes y sistemas de información: transposición española de la Directiva 2016/1148.' },
      { url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32022L2555', referencia: 'Directiva (UE) 2022/2555 (NIS2), art. 44: deroga la Directiva 2016/1148 con efectos de 18-10-2024.' }
    ], 'Directiva (UE) 2016/1148; RDL 12/2018; Directiva (UE) 2022/2555, art. 44',
    'La Directiva NIS original establecía requisitos de seguridad y notificación para operadores de servicios esenciales y proveedores de ciertos servicios digitales. No era una «Directiva NIST» y España la transpuso mediante Real Decreto-ley 12/2018. Como la Directiva 2016/1148 fue derogada con efectos de 18-10-2024 por NIS2, el ítem se conserva solo como conocimiento histórico y se identifica explícitamente esa derogación.',
    'historica'
  ],
  [
    2070, [30], [], ['Administración digital', 'SGAD', 'organización AGE', 'histórica'],
    [
      { url: 'https://www.boe.es/buscar/pdf/2020/BOE-A-2020-2739-consolidado.pdf', referencia: 'Real Decreto 403/2020, de 25 de febrero, estructura del Ministerio de Asuntos Económicos y Transformación Digital; art. 9 regulaba la SGAD dentro de ese departamento.' },
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-22929', referencia: 'Real Decreto 1118/2024, disposición adicional primera: al constituirse efectivamente la Agencia Estatal de Administración Digital se suprime la Secretaría General de Administración Digital.' }
    ], 'Real Decreto 403/2020, art. 9; Real Decreto 1118/2024, DA 1.ª',
    'La clave 3 corresponde al organigrama histórico del Real Decreto 403/2020: la SGAD estaba en el Ministerio de Asuntos Económicos y Transformación Digital. Se fecha el supuesto y se advierte que la SGAD fue suprimida al constituirse la AEAD en 2025; por tanto, la pregunta no describe un órgano ni una adscripción actuales.',
    'historica'
  ]
];

const edits = {
  2066: {
    texto: 'Según la API Jakarta Servlet 6.1, ¿cuál NO es uno de los métodos de HttpServlet que atienden los métodos HTTP estándar?',
    opciones: [
      'doGet(), para peticiones GET.',
      'doPush(), para peticiones HTTP PUSH.',
      'doPost(), para peticiones POST.',
      'doPut(), para peticiones PUT.'
    ],
    respuesta_correcta: 1
  },
  2067: {
    texto: '¿Cuál de las siguientes es una práctica propia de Extreme Programming (XP)?',
    opciones: [
      'Suponer que los requisitos no cambian durante el proyecto.',
      'Programación por parejas (pair programming).',
      'Prohibir la refactorización del código.',
      'Excluir al cliente de la colaboración con el equipo de desarrollo.'
    ],
    respuesta_correcta: 1
  },
  2068: {
    texto: '¿Qué API Java se utiliza para vincular XML con clases Java, serializando objetos a XML y reconstruyéndolos a partir de XML?',
    opcion: [2, 'Jakarta XML Binding (JAXB; antes Java Architecture for XML Binding).']
  },
  2069: {
    texto: 'Según la histórica Directiva (UE) 2016/1148 (NIS), ¿qué medida se exigía a las entidades comprendidas en su ámbito?',
    opciones: [
      'Aplicar exclusivamente los controles definidos por NIST, sin normas de la Unión Europea.',
      'No notificar incidentes si el servicio dependía de redes externas.',
      'Adoptar medidas de seguridad y notificar incidentes con arreglo a la Directiva.',
      'Someter a todos los fabricantes de software a una certificación europea obligatoria.'
    ],
    respuesta_correcta: 2
  },
  2070: {
    texto: 'Conforme a la estructura orgánica establecida por el Real Decreto 403/2020, ¿a qué ministerio pertenecía entonces la Secretaría General de Administración Digital (SGAD)?',
    opcion: [2, 'Ministerio de Asuntos Económicos y Transformación Digital.']
  }
};

aplicar({ numero: '350', fecha: '2026-10-28', records, edits });
