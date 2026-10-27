const apply = require('./aplicar-lote.cjs');

const records = [
  [1591, [60], ['II-2'], ['Linux', 'Windows', 'Wine', 'compatibilidad', 'POSIX'], [
    {url: 'https://www.winehq.org/about', referencia: 'WineHQ, About Wine: Wine es una capa de compatibilidad que permite ejecutar aplicaciones Windows en sistemas POSIX como Linux; traduce llamadas a la API de Windows y no es un emulador ni garantiza compatibilidad universal.'}
  ], {texto: '¿Cómo puede ejecutarse en Linux cierto software desarrollado para Microsoft Windows cuando es compatible con la solución utilizada?', opciones: [
    'Nunca: los programas Windows no pueden ejecutarse en ningún caso en Linux.',
    'De forma nativa, porque Linux es binariamente compatible con Microsoft Windows.',
    'Mediante software de compatibilidad, por ejemplo Wine; la compatibilidad depende de la aplicación.',
    'Mediante el protocolo SMB, que convierte programas Windows en ejecutables Linux.'
  ], respuesta_correcta: 2}, 'Wine es una capa de compatibilidad para ejecutar determinadas aplicaciones Windows en Linux y otros sistemas POSIX. No hace a Linux binariamente compatible con Windows, SMB es un protocolo para compartir recursos y Wine no asegura que toda aplicación funcione.', 'corregida'],
  [1592, [67], ['II-3', 'III-10'], ['Java', 'JVM', 'bytecode', 'multihilo', 'seguridad', 'antivirus', 'validación de entradas'], [
    {url: 'https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/', referencia: 'Oracle, Java Virtual Machine Specification, Java SE 26: define la máquina virtual, el formato de clase y la ejecución del bytecode; la ejecución requiere una implementación compatible de la JVM.'},
    {url: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/', referencia: 'Oracle, The Java Tutorials, Concurrency: Java permite ejecutar varias tareas mediante hilos y proporciona las APIs de concurrencia correspondientes.'},
    {url: 'https://www.oracle.com/java/technologies/javase/seccodeguide.html', referencia: 'Oracle, Secure Coding Guidelines for Java SE, versión 11.0 (junio de 2025): los mecanismos de seguridad ayudan, pero no garantizan ausencia de vulnerabilidades; se requieren validación y prácticas de codificación segura. También reconoce gestión automática de memoria y comprobaciones de límites de arrays.'}
  ], {texto: 'En el modelo habitual de ejecución de Java sobre la JVM, señale la afirmación FALSA:', opciones: [
    'El bytecode Java puede ejecutarse en plataformas que dispongan de una implementación compatible de la JVM.',
    'Java permite programación multihilo y ofrece APIs de concurrencia.',
    'El entorno de ejecución incorpora un antivirus que garantiza que las aplicaciones Java no contienen malware ni pueden alterar código.',
    'Java administra memoria automáticamente y comprueba los límites de los arrays.'
  ], respuesta_correcta: 2}, 'La opción 3 es falsa: la JVM y la plataforma Java incorporan mecanismos de seguridad y comprobaciones, pero no son un antivirus ni garantizan que una aplicación carezca de malware o vulnerabilidades. Las opciones restantes describen el modelo habitual de JVM, la concurrencia Java y comprobaciones de memoria.', 'corregida'],
  [1593, [67], ['III-10', 'III-12'], ['JAXP', 'StAX', 'SAX', 'XML', 'pull parsing', 'push parsing', 'eventos'], [
    {url: 'https://docs.oracle.com/javase/tutorial/jaxp/stax/why.html', referencia: 'Oracle, Java API for XML Processing (JAXP), Why StAX?: especifica que StAX es pull y bidireccional (lectura y escritura), mientras SAX es push y de solo lectura.'},
    {url: 'https://docs.oracle.com/javase/tutorial/jaxp/stax/using.html', referencia: 'Oracle, Java API for XML Processing (JAXP), Using StAX: documenta las APIs de cursor/iterador y el procesamiento iterativo de eventos XML.'},
    {url: 'https://docs.oracle.com/en/java/javase/26/docs/api/java.xml/module-summary.html', referencia: 'Oracle, Java SE 26 API, módulo `java.xml`: documenta las APIs Java para procesamiento XML, incluidas JAXP, SAX, StAX, DOM y transformación.'}
  ], {texto: 'Sobre JAXP y StAX en Java, señale la afirmación errónea:', opciones: [
    'StAX utiliza un modelo push, mientras que SAX utiliza un modelo pull.',
    'JAXP agrupa APIs Java para analizar, generar, validar y transformar documentos XML.',
    'StAX permite tanto leer como escribir documentos XML.',
    'StAX ofrece APIs de cursor e iterador para procesar un flujo XML avanzando por eventos.'
  ], respuesta_correcta: 0}, 'La afirmación errónea es la opción 1: invierte los modelos. StAX es pull (el cliente solicita el siguiente evento) y puede leer y escribir; SAX es push (el analizador llama a los manejadores) y es de lectura. Se explicita que JAXP es el conjunto de APIs XML de Java y se evita describir todo su procesamiento como una sola API.', 'corregida'],
  [1594, [75], ['II-4', 'III-15'], ['minería de datos', 'Web Mining', 'Text Mining', 'minería web', 'minería de texto', 'Big Data'], [
    {url: 'https://dmr.cs.umn.edu/Papers/P1997_5.pdf', referencia: 'Cooley, Mobasher y Srivastava, Web Mining: Information and Pattern Discovery on the World Wide Web: presenta Web Mining como aplicación de técnicas de minería de datos a información de la Web y expone categorías de contenido y uso.'},
    {url: 'https://aclanthology.org/P99-1001/', referencia: 'Marti A. Hearst, Untangling Text Data Mining, Proceedings of ACL 1999, DOI 10.3115/1034678.1034679: analiza la minería de datos aplicada a grandes colecciones de texto y la distingue de la recuperación de información.'}
  ], {texto: 'Si se clasifican las aplicaciones de minería de datos por el tipo de fuente analizada, ¿qué pareja designa, respectivamente, la minería aplicada a información de la Web y la aplicada a colecciones de texto?', opciones: [
    'Web Mining y Text Mining.',
    'Web Mining y Data Warehousing.',
    'Text Mining y procesamiento analítico en línea (OLAP).',
    'Process Mining y Text Mining.'
  ], respuesta_correcta: 0}, 'La pareja es Web Mining y Text Mining. Se reformula la pregunta porque “extensiones de Data Mining” no tiene una taxonomía universal y “Hypertext Mining” puede aparecer como parte o denominación relacionada con la minería web; la pregunta ahora especifica las fuentes de datos y evita esa ambigüedad.', 'corregida'],
  [1595, [65, 67], ['III-10', 'III-12'], ['AngularJS', 'framework JavaScript', 'aplicaciones web', 'fin de soporte', 'tecnología histórica'], [
    {url: 'https://github.com/angular/angular.js', referencia: 'Proyecto oficial angular/angular.js: identifica AngularJS como framework JavaScript del lado cliente; el propio proyecto indica que el soporte oficial terminó en enero de 2022.'},
    {url: 'https://docs.angularjs.org/guide/migration', referencia: 'Documentación oficial de AngularJS, Migrating from Previous Versions: confirma el fin del soporte oficial de AngularJS en enero de 2022.'}
  ], {texto: 'Como dato histórico sobre AngularJS 1.x, señale la afirmación correcta:', opciones: [
    'Fue un framework JavaScript de código abierto para aplicaciones web del lado cliente; su soporte oficial terminó en enero de 2022.',
    'PrimeFaces es una extensión de AngularJS que integra componentes de RichFaces.',
    'Spring es incompatible con Hibernate y no puede utilizarse con aplicaciones Java web.',
    'AngularJS sigue recibiendo soporte oficial y actualizaciones de seguridad.'
  ], respuesta_correcta: 0}, 'La primera afirmación es histórica y correcta: AngularJS fue un framework JavaScript de código abierto para aplicaciones web de cliente. El proyecto terminó su soporte oficial en enero de 2022, por lo que no debe presentarse como una opción actualmente mantenida. La pregunta se acota a ese hecho histórico y evita la afirmación imprecisa de que siguiera estrictamente el patrón MVC.', 'historica']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '255', fecha: '2026-10-27', records, edits});
