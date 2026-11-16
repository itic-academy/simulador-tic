const apply = require('./aplicar-lote.cjs');

const wifi = 'https://csrc.nist.gov/pubs/sp/800/153/final';
const cisaWifi = 'https://www.cisa.gov/sites/default/files/publications/20-02019b%20-%20Telework_Essentials-08272020-508v2.pdf';
const spiral = 'https://doi.org/10.1109/2.59';
const crypto = 'https://csrc.nist.gov/glossary/term/cryptanalysis';
const pgCatalog = 'https://www.postgresql.org/docs/current/catalogs.html';
const oracleDictionary = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/data-dictionary-and-dynamic-performance-views.html';
const erChen = 'https://doi.org/10.1145/320434.320440';
const oracleEr = 'https://docs.oracle.com/en/database/oracle/sql-developer-data-modeler/19.2/dmdug/data-modeler-concepts-usage.html';

const records = [
  [7716, [114], ['IV-11'], ['IEEE 802.11', 'WLAN', 'Wi-Fi', 'WPA3', 'cifrado'], [
    { url: wifi, referencia: 'NIST SP 800-153, Guidelines for Securing WLANs: las medidas de seguridad deben cubrir la configuración de los puntos de acceso, clientes y demás componentes durante todo el ciclo de vida.' },
    { url: cisaWifi, referencia: 'CISA, Telework Essentials: recomienda configurar la red inalámbrica con cifrado WPA2 o WPA3 como mínimo y deshabilitar protocolos heredados inseguros como WEP y WPA.' }
  ], {
    texto: '¿Cuál de estas medidas protege de forma directa la confidencialidad del tráfico de una WLAN frente a terceros que no disponen de las credenciales? ',
    opciones: [
      'Usar cifrado robusto en la red, como WPA3, o WPA2-AES cuando haya que mantener compatibilidad.',
      'Ocultar la difusión del SSID.',
      'Reducir la potencia de transmisión al valor mínimo posible, con independencia de la cobertura necesaria.',
      'Fijar siempre el canal 7 en la banda de 2,4 GHz.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. Se distingue la protección criptográfica de medidas que no sustituyen la autenticación y el cifrado. Para instalaciones actuales se prefiere WPA3; WPA2 con AES puede ser necesario por compatibilidad. Ocultar el SSID o elegir un canal no protege el contenido del tráfico.', 'corregida'],
  [7717, [86], ['III-1'], ['ciclo de vida', 'modelo espiral', 'gestión de riesgos', 'prototipos'], [
    { url: spiral, referencia: 'B. W. Boehm, “A Spiral Model of Software Development and Enhancement”, IEEE Computer 21(5), 1988, DOI 10.1109/2.59: presenta el modelo espiral como un enfoque evolutivo dirigido por riesgos; el registro bibliográfico del artículo identifica además el prototipado como materia tratada.' }
  ], {
    texto: '¿Qué afirmación describe mejor el modelo de ciclo de vida en espiral?',
    opciones: [
      'Es iterativo y está orientado a la gestión de riesgos; puede emplear prototipos para reducir incertidumbres.',
      'No se orienta a riesgos, aunque puede emplear prototipos.',
      'Se orienta a riesgos, pero excluye el uso de prototipos.',
      'Ni se orienta a riesgos ni permite incorporar prototipos.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. La característica definitoria del modelo de Boehm es el desarrollo evolutivo guiado por análisis y resolución de riesgos. Los prototipos pueden usarse para explorar alternativas o reducir incertidumbre, aunque no son una obligación de todas las iteraciones.', 'corregida'],
  [7718, [79], ['IV-12'], ['criptografía', 'criptoanálisis', 'análisis criptográfico'], [
    { url: crypto, referencia: 'NIST CSRC Glossary, “cryptanalysis”: estudio de técnicas para intentar derrotar mecanismos criptográficos y operaciones para vencer la protección sin conocimiento inicial de la clave; el glosario remite a NIST SP 800-57.' }
  ], {
    texto: '¿Cómo se denomina la disciplina que estudia técnicas para analizar o intentar romper una protección criptográfica sin conocer inicialmente la clave?',
    opciones: [
      'Criptoanálisis o análisis criptográfico.',
      'Ingeniería social.',
      'Fuerza bruta.',
      'Criptografía.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. El criptoanálisis estudia los métodos para evaluar o derrotar sistemas criptográficos; la fuerza bruta es una técnica concreta de ataque, la ingeniería social manipula personas y la criptografía diseña y analiza mecanismos de protección.', 'corregida'],
  [7719, [63], ['II-5'], ['SGBD', 'SGBDR', 'catálogo', 'diccionario de datos', 'metadatos', 'INFORMATION_SCHEMA'], [
    { url: pgCatalog, referencia: 'Documentación oficial de PostgreSQL 18, capítulo System Catalogs: los catálogos del sistema guardan metadatos de esquema, incluidas tablas y columnas, además de información interna del gestor.' },
    { url: oracleDictionary, referencia: 'Oracle Database 26ai Concepts, Data Dictionary: el diccionario de datos contiene metadatos administrativos sobre la base y sus objetos; el nombre y la implementación concreta varían entre productos.' }
  ], {
    texto: 'En un sistema gestor de bases de datos relacionales, ¿qué describe correctamente el catálogo o diccionario de datos?',
    opciones: [
      'Es opcional: el gestor puede operar sin mantener metadatos sobre sus objetos.',
      'Siempre se almacena exclusivamente en ficheros planos externos al gestor.',
      'Es un conjunto de metadatos sobre la estructura y características de los datos y objetos gestionados.',
      'Todos los productos lo denominan `information_system`.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. El catálogo/diccionario reúne metadatos —por ejemplo, tablas, columnas, tipos y otros objetos— que el SGBD utiliza para describir y gestionar la base. El almacenamiento y los nombres son dependientes del producto; `INFORMATION_SCHEMA` es un esquema normalizado por SQL, no `information_system` ni un nombre universal para los catálogos internos.', 'corregida'],
  [7720, [89], ['III-4'], ['modelo entidad-relación', 'grado', 'cardinalidad', 'participación', 'mínimo', 'máximo'], [
    { url: erChen, referencia: 'Peter P. Chen, “The Entity-Relationship Model—Toward a Unified View of Data”, ACM Transactions on Database Systems 1(1), 1976, DOI 10.1145/320434.320440: artículo fundacional del modelo E/R como modelo semántico de datos.' },
    { url: oracleEr, referencia: 'Oracle SQL Developer Data Modeler, Concepts and Usage: define las relaciones entre entidades y utiliza cardinalidades para expresar cuántas ocurrencias pueden asociarse; la notación mínimo/máximo explicita participación y límites.' }
  ], {
    texto: 'En un modelo entidad-relación con restricciones de cardinalidad mínima y máxima, ¿qué expresa esa cardinalidad para una entidad participante?',
    opciones: [
      'El número de tipos de entidad que participan en la relación; ese número es el grado.',
      'El máximo de ocurrencias de una entidad que participan; ese valor es el grado de la relación.',
      'El mínimo y el máximo de ocurrencias de la otra entidad con las que puede relacionarse una ocurrencia de esta entidad.',
      'El número de atributos que identifican de manera única a una entidad.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. La pregunta original confundía grado y cardinalidad: el grado de una relación es el número de tipos de entidad participantes; una restricción mínima/máxima expresa, en cada extremo, cuántas ocurrencias de la entidad relacionada pueden asociarse a una ocurrencia dada. La terminología de cardinalidad puede variar entre notaciones, por lo que se explicita aquí el par mínimo/máximo.', 'corregida']
];

apply({ numero: '1483', fecha: '2026-11-16', records });
