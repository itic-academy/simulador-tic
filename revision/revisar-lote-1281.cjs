const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy={
 tech:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
 security:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
 bi:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
 lms:'https://drive.google.com/file/d/0Bw-rS_kOHzMKR0VlVEdLYXBXb3c/view?usp=drivesdk&resourcekey=0-vy5LZYEZcMlCCwmBXxbVqg',
 test79:'https://drive.google.com/file/d/0Bw-rS_kOHzMKNm1pbklZUXRiX2c/view?usp=drivesdk&resourcekey=0-2xHJD8hCrzCs1jjJmK5b_w'
};
apply({numero:'1281',fecha:'2026-11-15',records:[
 [6726,[65],['III-12'],['WebDAV','HTTP','Windows WebDAV Redirector','recursos remotos'],[
  src('https://www.rfc-editor.org/rfc/rfc4918.html','IETF RFC 4918, WebDAV: extensión HTTP para operaciones de autoría web remota, propiedades y colecciones de recursos, bloqueo, copia/movimiento y espacio de nombres.'),
  src('https://learn.microsoft.com/en-us/iis/publish/using-webdav/using-the-webdav-redirector','Microsoft Learn, Using the WebDAV Redirector: permite publicar en sitios WebDAV y asignar una letra de unidad a un sitio web para acceder a sus recursos.'),
  src(a1,'BOE-A-2025-25938, convocatoria A1 GSI, anexo I, tema 65: arquitectura de desarrollo web, servidor e interconexión con servicios.'),
  src(a2,'BOE-A-2025-26262, convocatoria A2 GSI, anexo IX, tema III.12: aplicaciones y servicios web.'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», edición 2026.1: incluye arquitectura web, protocolos y desarrollo de servicios web; cotejo curricular, con RFC/Microsoft Learn como fuentes de la función concreta de WebDAV.')
 ],{texto:'En Windows, ¿para qué se utiliza principalmente el redireccionador WebDAV al conectarse a un servidor compatible?',opciones:[
  'Para recuperar automáticamente el sistema operativo tras un fallo.',
  'Para sincronizar copias de un espacio de nombres DFS.',
  'Para acceder a recursos web remotos y administrarlos, por ejemplo asignando el sitio a una unidad de red.',
  'Para cifrar el sistema de archivos local.'
 ],respuesta_correcta:2},'Se mantiene C y se concreta el contexto Windows: el redireccionador WebDAV permite acceder a recursos de un sitio WebDAV y puede asignarlo como unidad de red. El protocolo WebDAV amplía HTTP para operaciones de autoría y gestión de recursos; no es una herramienta de recuperación del sistema, replicación DFS ni cifrado de disco.','corregida'],

 [6727,[65],['III-12'],['LMS','WebCT','licencia propietaria','software histórico','e-learning'],[
  src('https://www.cs.ubc.ca/murray-goldberg-developed-webct','University of British Columbia, historia de WebCT: el equipo creó una empresa para vender y prestar soporte al producto; WebCT fue vendido a un competidor en 2006.'),
  src('https://s3-us-west-2.amazonaws.com/production.tcf.org/assets/OPM_contracts/UniversityofAlabama_Blackboard.pdf','Contrato de licencia de WebCT archivado por University of Alabama: reserva los derechos de propiedad intelectual al proveedor y limita la redistribución y sublicencia; evidencia histórica de licencia propietaria.'),
  src('https://www.cs.ubc.ca/wccce/program97/murray/murray.html','Murray W. Goldberg y Sasan Salari, University of British Columbia, “An Update on WebCT”: describe las funciones de creación de cursos web de WebCT.'),
  src('https://www.cdl.ucf.edu/about/cdl/lms-migration/','University of Central Florida, migración de LMS: documenta que WebCT Vista fue discontinuado por Blackboard al final de 2012.'),
  src('https://docs.moodle.org/404/en/Moodle','MoodleDocs oficial: Moodle se distribuye como software de código abierto bajo GNU GPL.'),
  src('https://chamilo.org/en/download/','Chamilo oficial, descargas: Chamilo LMS se distribuye como software libre bajo GNU/GPLv3+.'),
  src('https://openedx.org/trademark-licensing-details/','Open edX, política oficial de licencias: núcleo de la plataforma AGPLv3 y otros repositorios pueden usar Apache 2.0.'),
  src(academy.test79,'ITIC Academy/Drive, «Test 79»: el material de ejercicios incluye una pregunta de concepto sobre LMS, útil como cotejo del contexto formativo, no como evidencia de licencias actuales.'),
  src(academy.lms,'ITIC Academy/Drive, «XVII_Plataformas_teleformacion.pdf», informe histórico de la Universitat de València: compara plataformas de e-learning, incluye WebCT, su licencia anual y dependencia comercial. Es material histórico, no referencia sobre la oferta actual.'),
  src(a1,'BOE-A-2025-25938, convocatoria A1 GSI, anexo I, tema 65: arquitectura de desarrollo web y servicios.'),
  src(a2,'BOE-A-2025-26262, convocatoria A2 GSI, anexo IX, tema III.12: aplicaciones web y servicios asociados.')
 ],{texto:'En el periodo en que se comercializaba como LMS independiente, ¿cuál de estas plataformas se distribuía bajo licencia propietaria y dejó de mantenerse como línea de producto tras su adquisición por Blackboard?',opciones:[
  'Moodle',
  'WebCT (incluida su línea Vista)',
  'Chamilo',
  'Open edX'
 ],respuesta_correcta:1},'Se conserva B y se marca el reactivo como histórico: WebCT fue un LMS comercial con licencia propietaria; UBC documenta su venta en 2006, y UCF registra la discontinuación de WebCT Vista por Blackboard al final de 2012. Las opciones actuales se contrastan con sus fuentes oficiales de licencia: Moodle y Chamilo usan GPL; el núcleo de Open edX usa AGPLv3. No se presenta WebCT como producto vigente ni se generaliza el fin de soporte más allá de la línea Vista documentada.','historica'],

 [6728,[67],[],['Java','JNI','métodos nativos','interoperabilidad','Java SE'],[
  src('https://docs.oracle.com/en/java/javase/27/docs/specs/jni/intro.html','Oracle Java Native Interface Specification, Java SE 27: JNI permite que el código Java de una JVM interopere con aplicaciones y bibliotecas nativas, por ejemplo escritas en C, C++ o ensamblador.'),
  src('https://docs.oracle.com/en/java/javase/27/docs/specs/index.html','Oracle, especificaciones Java SE/JDK 27: índice oficial de las especificaciones de la interfaz JNI.'),
  src(a1,'BOE-A-2025-25938, convocatoria A1 GSI, anexo I, tema 67: entorno de desarrollo Java.'),
  src(academy.tech,'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», edición 2026.1, apartado 4 sobre Java SE, JVM y herramientas: cotejo curricular. El uso y alcance de JNI se valida en la especificación Oracle.')
 ],{texto:'¿Qué interfaz de programación de Java permite declarar métodos nativos e interoperar con bibliotecas escritas en otros lenguajes?',opciones:[
  'JNI (Java Native Interface).',
  'JNDI (Java Naming and Directory Interface).',
  'JNLI (Java Native Language Interface).',
  'JRMI (Java Remote Method Invocation).'
 ],respuesta_correcta:0},'Se mantiene A y se explica el alcance: JNI permite que código Java invoque métodos nativos e interactúe con aplicaciones/bibliotecas en otros lenguajes. La documentación Oracle actual advierte que la Foreign Function & Memory API moderna puede sustituir muchos usos y recomienda preferirla cuando resulte aplicable; eso no convierte JNI en una respuesta incorrecta a la pregunta sobre la interfaz de métodos nativos.','corregida'],

 [6729,[79],['IV-12'],['Diffie-Hellman','acuerdo de claves','criptografía de clave pública','canal no confiable'],[
  src('https://cr.yp.to/bib/1976/diffie.pdf','Whitfield Diffie y Martin E. Hellman, “New Directions in Cryptography”, IEEE Transactions on Information Theory 22(6), 1976: propone sistemas de distribución de clave pública para que dos usuarios acuerden una clave común mediante intercambio de mensajes.'),
  src('https://doi.org/10.1109/TIT.1976.1055638','DOI oficial IEEE del artículo de Diffie y Hellman, publicado en IEEE Transactions on Information Theory, vol. 22, n.º 6 (1976).'),
  src(a1,'BOE-A-2025-25938, convocatoria A1 GSI, anexo I, tema 79: cifrado y algoritmos criptográficos.'),
  src(a2,'BOE-A-2025-26262, convocatoria A2 GSI, anexo IX, tema IV.12: seguridad de redes, técnicas criptográficas y protocolos seguros.'),
  src(academy.security,'ITIC Academy, bloque 36 «Seguridad, Criptografía, Identificación y Firma», edición 2026, §3.2 «Diffie–Hellman, ECDH y cifrado híbrido»: lo caracteriza como acuerdo de claves, no como algoritmo de cifrado; se coteja con el artículo original.')
 ],{texto:'¿Qué mecanismo de criptografía de clave pública proponen Diffie y Hellman en su trabajo de 1976 para que dos partes puedan establecer una clave común?',opciones:[
  'Un algoritmo de cifrado de mensajes que sustituye a todos los cifrados simétricos.',
  'Un mecanismo de distribución/acuerdo de claves mediante el que dos partes obtienen un secreto común.',
  'Una infraestructura de clave pública (PKI) completa para emitir y validar certificados.',
  'Una función resumen criptográfica.'
 ],respuesta_correcta:1},'Se mantiene B y se acota la atribución al artículo de 1976: Diffie y Hellman describen una solución de distribución/acuerdo de claves, no un cifrador simétrico, una PKI completa ni una función hash. El mecanismo por sí solo no autentica a los participantes; sin autenticación puede sufrir un ataque de intermediario. La expresión se refiere al trabajo publicado por ambos y evita atribuirles en exclusiva todo el desarrollo histórico de la criptografía de clave pública.','corregida'],

 [6730,[75],['II-4','III-4'],['data warehouse','modelado dimensional','esquema snowflake','normalización','tablas de dimensión'],[
  src('https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-dimension-tables','Microsoft Learn, modelado dimensional en Warehouse: una dimensión snowflake normaliza los datos dimensionales y los distribuye entre varias tablas relacionadas.'),
  src('https://learn.microsoft.com/en-us/power-bi/guidance/star-schema','Microsoft Learn, esquema estrella y modelado dimensional: compara dimensiones normalizadas de copo de nieve con dimensiones desnormalizadas y aclara la relación de dimensiones con tablas de hechos.'),
  src(a1,'BOE-A-2025-25938, convocatoria A1 GSI, anexo I, tema 75: tecnologías de explotación de datos y data warehouse.'),
  src(a2,'BOE-A-2025-26262, convocatoria A2 GSI, anexo IX, tema II.4: inteligencia de negocios y almacenes de datos; tema III.4: modelado, diseño y normalización de bases de datos.'),
  src(academy.bi,'ITIC Academy, bloque 34 «Business Intelligence y Big Data 2026», §2 sobre data warehouse, hechos, dimensiones y modelado dimensional: explica que el copo normaliza dimensiones en tablas relacionadas, a diferencia de la estrella con dimensiones desnormalizadas. Se usa como cotejo curricular y Microsoft Learn como referencia técnica.')
 ],{texto:'En el modelado dimensional tradicional de un almacén de datos, ¿qué caracteriza a una dimensión de copo de nieve frente a una dimensión desnormalizada de estrella?',opciones:[
  'Mantiene deliberadamente más duplicación de atributos en una única tabla de dimensión.',
  'Elimina la tabla de hechos central del modelo dimensional.',
  'Impide relacionar las dimensiones con tablas de hechos.',
  'Normaliza los datos de dimensión y los reparte entre varias tablas relacionadas.'
 ],respuesta_correcta:3},'Se mantiene D y se evita la afirmación imprecisa de que en un esquema snowflake no existe una tabla de hechos central. La propiedad que distingue la dimensión snowflake es que normaliza la información dimensional y la almacena en varias tablas relacionadas; el diseño dimensional sigue pudiendo relacionarlas con hechos. La reducción de redundancia puede ser una consecuencia, pero no se presenta como garantía de ahorro de almacenamiento o mejora de rendimiento en todos los casos.','corregida']
]});
