const apply = require('./aplicar-lote.cjs');

const records = [
  [7471, [65], ['II-9'], ['AJAX', 'JavaScript', 'XMLHttpRequest', 'Fetch', 'HTTP asíncrono'], [
    { url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API', referencia: 'MDN, XMLHttpRequest API: solicitudes HTTP programáticas desde JavaScript permiten actualizar partes de una página; la técnica se conoce como AJAX. Fetch es una alternativa moderna. AJAX no exige Flash ni que la respuesta sea XML.' },
    { url: 'https://developer.mozilla.org/en-US/docs/Glossary/AJAX', referencia: 'MDN, AJAX: nombre de la técnica de intercambio asíncrono con el servidor; XML era frecuente en su origen, pero no es requisito y pueden intercambiarse otros formatos.' }
  ], {
    texto: '¿Qué afirmación describe correctamente un requisito de la técnica AJAX en una aplicación web?',
    opciones: [
      'Requiere que el servidor envíe los datos en formato XML.',
      'Requiere Adobe Flash para ejecutar las solicitudes asíncronas.',
      'Usa JavaScript para realizar intercambios HTTP asíncronos y puede actualizar parte de la página.',
      'Implica que el servidor envíe datos espontáneamente al cliente sin una solicitud HTTP iniciada por este.'
    ], respuesta_correcta: 2
  }, 'Corregida C. El enunciado original pedía la afirmación incorrecta pero varias alternativas podían inducir a error: AJAX no exige Flash ni XML, y AJAX por sí solo no proporciona un canal de servidor a cliente tipo push. Se formula ahora una afirmación positiva: JavaScript coordina intercambios asíncronos, tradicionalmente con XMLHttpRequest y hoy también con Fetch, permitiendo actualizar una parte de la interfaz.', 'corregida'],

  [7472, [62], ['II-2'], ['Wine', 'Linux', 'compatibilidad', 'API de Windows'], [
    { url: 'https://www.winehq.org/about', referencia: 'WineHQ, About Wine: Wine es una capa de compatibilidad de código abierto que ejecuta aplicaciones Windows en sistemas POSIX; traduce llamadas de API de Windows y no simula el sistema como una máquina virtual o emulador. La compatibilidad depende de la aplicación.' }
  ], {
    texto: '¿Qué describe correctamente Wine (Wine Is Not an Emulator)?',
    opciones: [
      'Un emulador completo de hardware Windows que garantiza ejecutar cualquier aplicación.',
      'Una capa de compatibilidad de código abierto que implementa partes de la API de Windows y puede ejecutar muchas aplicaciones Windows en Linux y otros sistemas POSIX.',
      'Un gestor de ventanas de Linux que aplica una apariencia visual de Windows.',
      'Una distribución Linux que contiene el código fuente de Windows.'
    ], respuesta_correcta: 1
  }, 'Corregida B. Wine no es un emulador ni un gestor de ventanas: es una capa de compatibilidad que implementa interfaces de Windows sobre sistemas tipo Unix. No se garantiza que funcione toda aplicación; el soporte depende de las API y del programa.', 'corregida'],

  [7473, [75], ['II-4', 'III-15'], ['BI', 'OLAP', 'OLTP', 'DNS', 'analítica'], [
    { url: 'https://www.ibm.com/think/topics/data-warehouse', referencia: 'IBM, What is a data warehouse?: distingue OLAP para analizar datos ya capturados y OLTP para registrar y actualizar transacciones operacionales; enumera OLAP como tecnología de análisis multidimensional usada en BI.' },
    { url: 'https://www.ibm.com/think/topics/olap', referencia: 'IBM, What is OLAP?: describe ROLAP, MOLAP y HOLAP como enfoques de análisis multidimensional y contrasta analítica OLAP con procesamiento transaccional OLTP.' }
  ], {
    texto: '¿Qué par reúne tecnologías que no son, por sí mismas, herramientas de análisis de Business Intelligence?',
    opciones: [
      'Almacén de datos y análisis OLAP.',
      'Cuadros de mando y minería de datos.',
      'Procesamiento transaccional OLTP y servicio de nombres DNS.',
      'Análisis OLAP y visualización mediante cuadros de mando.'
    ], respuesta_correcta: 2
  }, 'Corregida C. El original mezclaba una tecnología operacional y un servicio de red bajo la categoría «no forma parte» sin distinguir si se hablaba de componentes analíticos, fuentes de datos o arquitectura empresarial. Se limita la pregunta a herramientas/tecnologías analíticas de BI: OLTP procesa transacciones de operación (aunque sus datos puedan alimentar un almacén analítico) y DNS resuelve nombres de dominio, no realiza análisis BI.', 'corregida'],

  [7474, [75], ['II-4', 'III-15'], ['OLAP', 'MOLAP', 'ROLAP', 'HOLAP', 'VOLAP'], [
    { url: 'https://www.ibm.com/think/topics/data-warehouse', referencia: 'IBM, What is a data warehouse?: denomina MOLAP, ROLAP y HOLAP los tres tipos/enfoques comunes de OLAP en almacenes de datos. La pregunta se restringe expresamente a esta clasificación habitual.' },
    { url: 'https://www.ibm.com/think/topics/olap', referencia: 'IBM, What is OLAP?: explica las arquitecturas MOLAP, ROLAP y HOLAP. «VOLAP» también se usa en literatura especializada para Visual OLAP, por lo que no es correcto afirmar sin contexto que no exista ningún uso de ese nombre.' },
    { url: 'https://webdocs.cs.ualberta.ca/~zaiane/postscript/dawak01.pdf', referencia: 'A. Ammoura y O. R. Zaïane, Towards a Novel OLAP Interface for Distributed Data Warehouses: emplea VOLAP-tree en el sentido especializado Visual OLAP. Se documenta para explicar por qué el ítem original, sin acotar la taxonomía, era ambiguo.' }
  ], {
    texto: 'En la clasificación de los tres enfoques comunes de OLAP descrita por IBM para almacenes de datos, ¿cuál de estos términos no pertenece a esa terna?',
    opciones: ['HOLAP (Hybrid OLAP).', 'VOLAP (término usado en literatura especializada para Visual OLAP).', 'MOLAP (Multidimensional OLAP).', 'ROLAP (Relational OLAP).'], respuesta_correcta: 1
  }, 'Corregida B. La clasificación habitual recogida por IBM comprende MOLAP, ROLAP y HOLAP. El enunciado original afirmaba universalmente que VOLAP no era un tipo, pero existe en literatura especializada como Visual OLAP (por ejemplo, VOLAP-tree); por ello se acota ahora la respuesta a la terna común descrita por IBM y se deja constancia de esa acepción especializada.', 'corregida'],

  [7475, [77], ['II-9'], ['XML', 'Xerces', 'Apache', 'XSLT', 'DTD'], [
    { url: 'https://xerces.apache.org/', referencia: 'Apache Xerces Project: Xerces2 Java es un procesador escrito en Java para analizar, validar, serializar y manipular XML.' },
    { url: 'https://www.w3.org/TR/2000/REC-xml-20001006', referencia: 'W3C, XML 1.0, §5.1: un procesador no validador no está obligado a validar contra el DTD; su comportamiento depende de las declaraciones que lea y puede no leer DTD externos. Por tanto, no se puede decir que siempre necesite el DTD asociado.' },
    { url: 'https://www.w3.org/TR/xslt-30/', referencia: 'W3C, XSL Transformations (XSLT) 3.0: especificación de un lenguaje para transformar documentos XML en otros documentos/formatos; no es un esquema de validación usado en lugar del DTD.' }
  ], {
    texto: '¿Cuál de las siguientes afirmaciones sobre herramientas y tecnologías XML es correcta?',
    opciones: [
      'Apache Cocoon es el nombre de un parser XML escrito en Java.',
      'Todo parser XML no validador necesita obligatoriamente el DTD externo asociado al documento.',
      'Apache Xerces2 Java es un procesador escrito en Java que analiza y puede validar documentos XML.',
      'XSLT es un lenguaje de esquema que sustituye a DTD para validar XML.'
    ], respuesta_correcta: 2
  }, 'Corregida C. Apache Xerces2 Java es un procesador XML escrito en Java, con capacidades de análisis y validación. La pregunta original también contenía una afirmación categórica incorrecta sobre parsers no validadores y DTD externos: XML 1.0 no les exige procesar el DTD externo completo. XSLT transforma documentos; no es un lenguaje de esquema.', 'corregida']
];

apply({ numero: '1434', fecha: '2026-11-16', records });
