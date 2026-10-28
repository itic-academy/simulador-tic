const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2191, [70], ['III-5'], ['reconocimiento del habla', 'ASR', 'locutor', 'vocabulario', 'gramática'],
    [
      { url: 'https://doi.org/10.6028/jres.090.026', referencia: 'NIST Journal of Research, Performance Assessment of Automatic Speech Recognizers: distingue factores del hablante, del vocabulario/tarea, de la forma del habla y del entorno; las restricciones sintácticas influyen en el desempeño.' },
      { url: 'https://learn.microsoft.com/en-us/dynamics365/contact-center/implement/transparency-note', referencia: 'Microsoft Learn, Transparency note for constrained speech recognition: la gramática limita las palabras/secuencias que el reconocedor acepta, y el vocabulario cubierto afecta a la precisión.' }
    ],
    'NIST Journal of Research, evaluación del reconocimiento automático del habla; Microsoft Learn, reconocimiento con gramáticas',
    'La opción correcta es «todos los anteriores»: la dependencia o variación del locutor, el tamaño del vocabulario y la gramática del dominio afectan a la dificultad o al rendimiento del reconocimiento automático del habla. El enunciado usa «factores de complejidad» en el sentido didáctico de factores que condicionan la tarea; no los presenta como una taxonomía universal cerrada.',
    'vigente'
  ],
  [
    2192, [81], ['II-2', 'IV-12'], ['tarjetas inteligentes', 'RFID', 'ISO/IEC 14443', 'ISO/IEC 15693', 'tarjeta de proximidad'],
    [
      { url: 'https://www.iso.org/standard/73596.html', referencia: 'ISO/IEC 14443-1:2018: identifica el estándar de tarjetas/objetos contactless de proximidad; edición publicada vigente.' },
      { url: 'https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-98.pdf', referencia: 'NIST SP 800-98, §3: contrasta el alcance aproximado ISO/IEC 14443 (7–15 cm) con ISO/IEC 15693, objetos de vecindad (hasta 1 m).' },
      { url: 'https://www.iso.org/standard/70837.html', referencia: 'ISO/IEC 15693-1:2018: define las características físicas de objetos contactless de vecindad (vicinity).' }
    ],
    'ISO/IEC 14443-1:2018, NIST SP 800-98 e ISO/IEC 15693-1:2018',
    'Se reformula para distinguir categorías normalizadas y evitar presentar 10 cm como un límite físico absoluto de cualquier tarjeta RFID: las tarjetas ISO/IEC 14443 son de proximidad y su alcance nominal es de unos 10 cm (NIST informa un rango aproximado de 7–15 cm); ISO/IEC 15693 corresponde a objetos de vecindad, con alcance aproximado de hasta 1 m. La respuesta distingue el primero de esos dos perfiles.',
    'corregida'
  ],
  [
    2193, [126], ['III-12'], ['WS-I', 'servicios web', 'perfiles de interoperabilidad', 'SOAP', 'WS-ReliableMessaging'],
    [
      { url: 'https://ws-i.org/', referencia: 'WS-I Deliverables: el catálogo institucional enumera Basic Profile, Basic Security Profile y Reliable Secure Profile; no contiene un perfil denominado Extended Reliable Profile.' },
      { url: 'https://ws-i.org/Profiles/BasicSecurityProfile-1.1.html', referencia: 'WS-I Basic Security Profile 1.1, material final: confirma la denominación oficial Basic Security Profile.' },
      { url: 'https://www.ws-i.org/Profiles/ReliableSecureProfile-1.0.html', referencia: 'WS-I Reliable Secure Profile 1.0: confirma ese nombre exacto y su alcance de mensajería fiable y segura.' }
    ],
    'Catálogo de entregables de WS-I y especificaciones Basic Security Profile 1.1 / Reliable Secure Profile 1.0',
    'Se concreta que se pregunta por denominaciones oficiales del catálogo de perfiles WS-I. «Basic Security Profile», «Reliable Secure Profile» y «Basic Profile» están publicados; el catálogo de WS-I no incluye «Extended Reliable Profile». No debe confundirse un perfil WS-I con la especificación WS-ReliableMessaging, que es una especificación subyacente y no un perfil con ese nombre.',
    'corregida'
  ],
  [
    2194, [70], ['III-5'], ['inteligencia artificial', 'búsqueda heurística', 'deducción automática', 'representación del conocimiento', 'planificación'],
    [
      { url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir83-2799.pdf', referencia: 'NBS/NISTIR, An Overview of Artificial Intelligence and Robotics, parte A: describe la búsqueda heurística, la representación del conocimiento y la lógica/deducción como componentes tempranos de IA; en la historia de 1956–1970 recoge búsqueda heurística y lógica computacional.' }
    ],
    'National Bureau of Standards / NIST, An Overview of Artificial Intelligence and Robotics (NBSIR 83-2687)',
    'La opción sobre los primeros trabajos centrados, entre otros enfoques, en búsqueda heurística y deducción automática es la única correcta. El informe histórico del NBS/NIST describe programas tempranos de búsqueda y planificación, lógica computacional/resolución y representación del conocimiento; planificación robótica, representación del conocimiento y heurística pertenecen a IA, no a una exclusión de sus ámbitos.',
    'vigente'
  ],
  [
    2195, [55], ['II-1'], ['nube privada', 'nube pública', 'nube híbrida', 'ONTSI', 'La Sociedad en Red 2020'],
    [
      { url: 'https://www.ontsi.es/sites/ontsi/files/2020-11/InformeAnualLaSociedadEnRed2019Ed2020.pdf', referencia: 'ONTSI, Informe anual La Sociedad en Red 2019, edición 2020: informa que el 44 % de las Administraciones públicas encuestadas utilizaba nube privada, frente al 28,9 % pública y 15,8 % híbrida.' },
      { url: 'https://www.ontsi.es/en/node/15296', referencia: 'Ficha oficial del ONTSI de la edición 2020: identifica el informe como análisis de la sociedad de la información durante 2019.' }
    ],
    'ONTSI, La Sociedad en Red 2019, edición 2020',
    'Se conserva la respuesta histórica «nube privada», pero se fecha el dato y se retira la expresión «último informe» para no sugerir que describe la situación actual. La edición 2020, basada en datos de 2019, reportó nube privada para el 44 % de las Administraciones públicas, por encima de pública (28,9 %) e híbrida (15,8 %).',
    'historica'
  ]
];

const edits = {
  2192: {
    texto: 'Según la clasificación de tarjetas inteligentes sin contacto por alcance, ¿qué descripción corresponde a una tarjeta de proximidad ISO/IEC 14443?',
    opciones: [
      'Alcance nominal de unos 10 cm; NIST recoge aproximadamente 7–15 cm para esta tecnología.',
      'Alcance de hasta 1 m, característico de los objetos de vecindad ISO/IEC 15693.',
      'Requiere contacto físico y contactos eléctricos con el dispositivo de interfaz.',
      'Todas las tarjetas inteligentes sin contacto pertenecen a la categoría de proximidad.'
    ],
    respuesta_correcta: 0
  },
  2193: {
    texto: 'En el catálogo oficial de perfiles de interoperabilidad de WS-I, ¿qué denominación no corresponde a un perfil publicado?',
    opciones: ['Basic Security Profile', 'Reliable Secure Profile', 'Extended Reliable Profile', 'Basic Profile'],
    respuesta_correcta: 2
  },
  2195: {
    texto: 'Según la edición de 2020 del informe anual «La Sociedad en Red» del ONTSI, referida a datos de 2019, ¿qué modalidad de nube presentaba el mayor porcentaje de uso entre las Administraciones públicas?',
    respuesta_correcta: 1
  }
};

aplicar({ numero: '375', fecha: '2026-10-28', records, edits });
