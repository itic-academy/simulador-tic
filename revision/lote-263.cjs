const apply = require('./aplicar-lote.cjs');
const records = [
  [1631, [58], ['II-6'], ['SOAP', 'mensajería', 'servicios web', 'XML'], [
    {url: 'https://www.w3.org/TR/soap12/', referencia: 'W3C Recommendation, SOAP Version 1.2 Part 1, Introduction y §1.5: protocolo/marco ligero de mensajería para intercambiar información estructurada; la nota indica expresamente que en SOAP 1.2 el nombre ya no es un acrónimo.'},
    {url: 'https://www.w3.org/TR/SOAP', referencia: 'W3C Note, SOAP 1.1: el título histórico desarrolla SOAP como Simple Object Access Protocol; se conserva como antecedente, no como expansión normativa del nombre en SOAP 1.2.'}
  ], {texto: '¿Cuál de estas afirmaciones sobre SOAP 1.2 es correcta?', opciones: [
    'Es un marco de mensajería para intercambiar información estructurada; su nombre ya no se considera un acrónimo.',
    'Es un protocolo de autorización de objetos Java y sustituye a HTTP.',
    'Es un formato binario de serialización específico de una base de datos.',
    'Es otra denominación de la arquitectura SOA y no define mensajes.'
  ]}, 'Se corrige el reactivo: preguntar la expansión de las siglas solo tiene una respuesta histórica (Simple Object Access Protocol, SOAP 1.1), pero W3C declara en la especificación SOAP 1.2 que el nombre ya no es un acrónimo. La formulación actualizada evalúa qué define el estándar y evita presentar su etimología histórica como definición vigente.', 'corregida'],
  [1632, [61], ['II-1'], ['memoria virtual', 'sustitución de páginas', 'FIFO', 'LRU', 'NRU', 'Round Robin'], [
    {url: 'https://ocw.uc3m.es/pluginfile.php/3453/mod_page/content/13/topic4_lesson10.pdf', referencia: 'Universidad Carlos III de Madrid, Operating Systems, tema de memoria virtual: enumera FIFO, NRU y LRU como algoritmos de sustitución de páginas.'},
    {url: 'https://web.stanford.edu/~ouster/cs111-spring23/lectures/scheduling/', referencia: 'Stanford CS111, Scheduling: define Round Robin como algoritmo de planificación de hilos/procesos por rebanadas de tiempo y cola de listos, no como política de sustitución de páginas.'}
  ], {texto: '¿Cuál de los siguientes es un algoritmo de planificación de CPU y no una política de sustitución de páginas?', opciones: [
    'FIFO, que puede seleccionar para expulsión la página residente más antigua.',
    'LRU, que selecciona una página según el tiempo transcurrido desde su último uso.',
    'NRU, que clasifica páginas mediante bits de referencia y modificación.',
    'Round Robin, que reparte la CPU en turnos temporales entre tareas listas.'
  ]}, 'Se conserva la clave Round Robin y se reformula el reactivo con descripciones breves para distinguir inequívocamente familias: FIFO, LRU y NRU son estrategias de reemplazo de páginas; Round Robin es planificación de CPU por turnos.', 'corregida'],
  [1633, [56], ['II-1'], ['IEEE 1394', 'FireWire', 'i.LINK', 'interfaces'], [
    {url: 'https://technav.ieee.org/topic/1394-interface/', referencia: 'IEEE Technology Navigator, 1394 Interface: identifica IEEE 1394 como estándar de bus serie de alta velocidad conocido comercialmente como FireWire (Apple) o i.LINK (Sony).'},
    {url: 'https://pro.sony/s3/cms-static-content/operation-manual/4260128061.pdf', referencia: 'Sony, manual profesional sobre i.LINK: identifica i.LINK como denominación de Sony para IEEE 1394 y explica que las tasas dependen de la variante/dispositivo conectado.'}
  ], {texto: '¿Qué afirmación identifica correctamente denominaciones comerciales de IEEE 1394?', opciones: [
    'FireWire es la denominación asociada a Apple e i.LINK la utilizada por Sony.',
    'FireWire es la denominación de Sony e i.LINK la de Apple.',
    'IEEE 1394 solo es el nombre de un conector USB y no designa un bus serie.',
    'FireWire e i.LINK son protocolos de software sin relación con IEEE 1394.'
  ]}, 'Se limita la pregunta a nombres comerciales documentados. Se elimina la comparación general con USB y las afirmaciones de velocidad compartida, que dependen de versión, topología y dispositivos y no permitían una respuesta universal.', 'corregida'],
  [1634, [65, 67], ['III-10'], ['JDBC', 'Java', 'controladores', 'protocolo nativo'], [
    {url: 'https://docs.oracle.com/en/database/oracle/oracle-database/26/jjdbc/introducing-JDBC.html', referencia: 'Oracle Database JDBC Developer’s Guide, §1.1: el controlador Type IV (Thin) es Java puro, implementa el protocolo de Oracle Net sobre sockets y conecta directamente con Oracle Database.'},
    {url: 'https://docs.oracle.com/en/database/oracle/oracle-database/26/jjdbc/introducing-JDBC.html', referencia: 'Oracle JDBC Developer’s Guide: contrasta el tipo II OCI, que requiere bibliotecas nativas específicas, con el Type IV/Thin.'}
  ], null, 'La clave Type 4 es correcta: es un controlador Java puro que habla directamente el protocolo del producto de base de datos. Se evita generalizar una implementación de fabricante a todos los drivers JDBC: JDBC define interfaces y cada proveedor implementa su controlador.', 'vigente'],
  [1635, [63, 64], ['IV-2'], ['modelo relacional', 'relaciones', 'tablas', 'tuplas', 'bases de datos'], [
    {url: 'https://doi.org/10.1145/362384.362685', referencia: 'E. F. Codd, “A Relational Model of Data for Large Shared Data Banks”, Communications of the ACM 13(6), 1970, pp. 377–387: formulación original del modelo relacional mediante relaciones y datos representados en ellas.'},
    {url: 'https://www.postgresql.org/docs/current/ddl-basics.html', referencia: 'PostgreSQL Documentation, Table Basics: presenta tablas como relaciones de filas (tuplas) y columnas (atributos); documentación del SGBD confirma el vocabulario tabular del modelo relacional.'}
  ], {texto: 'En el modelo relacional, ¿cómo se representa principalmente cada relación de datos en un SGBD convencional?', opciones: [
    'Como una tabla formada por filas (tuplas) y columnas (atributos).',
    'Como una secuencia de instrucciones de un lenguaje de programación.',
    'Como un árbol jerárquico obligatorio en el que cada registro tiene un único padre.',
    'Como un conjunto de páginas HTML independientes sin esquema de datos.'
  ]}, 'El original preguntaba por una característica genérica y ofrecía “independencia de relaciones entre tablas”, expresión no definida que no equivale a independencia de datos. Se sustituye por una pregunta concreta sobre la representación relacional; filas/tuplas y columnas/atributos evitan atribuir al modelo propiedades imprecisas.', 'corregida']
];
const edits = Object.fromEntries(records.filter(row => row[5]).map(row => [row[0], row[5]]));
apply({numero:'263', fecha:'2026-10-27', records, edits});
