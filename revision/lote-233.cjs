const apply = require('./aplicar-lote.cjs');

const records = [
  [1481, [64], ['II-5'], ['SQL', 'transacciones', 'aislamiento', 'lectura sucia', 'Read Uncommitted'], [
    {url: 'https://www.postgresql.org/docs/current/transaction-iso.html', referencia: 'PostgreSQL 18, Transaction Isolation, tabla 13.1: según el mínimo del estándar SQL, una lectura sucia está permitida en Read Uncommitted y prohibida en los otros tres niveles; PostgreSQL implementa Read Uncommitted como Read Committed.'}
  ], null, 'La lectura sucia es leer datos escritos por otra transacción que todavía no ha confirmado. En la matriz de fenómenos mínimos del estándar SQL puede ocurrir en READ UNCOMMITTED; los gestores pueden ofrecer garantías más estrictas. Por ejemplo, PostgreSQL equipara internamente READ UNCOMMITTED con READ COMMITTED, por lo que no permite lecturas sucias. Cotejo curricular con ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026); temas A1-64/A2-II-5.', 'vigente'],
  [1482, [65, 109], ['II-6', 'IV-13'], ['WebDAV', 'HTTP', 'autoría web distribuida', 'gestión de recursos', 'RFC 4918'], [
    {url: 'https://www.rfc-editor.org/rfc/rfc4918', referencia: 'IETF RFC 4918, HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV), resumen e introducción: extensión de HTTP para autoría web remota, propiedades, colecciones, bloqueo y operaciones de espacio de nombres.'}
  ], null, 'El enunciado original atribuía a WebDAV una transferencia segura de ficheros, lo que no define el protocolo. RFC 4918 lo especifica como extensiones de HTTP para autoría web distribuida y gestión remota de recursos (propiedades, colecciones, bloqueos y operaciones como MOVE/COPY). WebDAV no proporciona por sí solo cifrado del transporte: la protección de confidencialidad puede aportarse mediante HTTPS/TLS. Se reformula para preguntar por su función protocolaria. Cotejo curricular con ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026), desarrollo web y servicios/protocolos; y bloque 48 Seguridad en redes y en el nivel de aplicación, actualización 2026, A1-125/126 y A2-C10/D12. Correspondencia oficial A1-65/A1-109/A2-II-6/A2-IV-13.', 'corregida'],
  [1483, [66], ['II-3'], ['Microsoft .NET', 'Dapper', 'Dapr', 'Entity Framework', 'Qt', 'C++', 'QML'], [
    {url: 'https://github.com/DapperLib/Dapper', referencia: 'Repositorio oficial DapperLib: Dapper se describe como un object mapper sencillo para .NET.'},
    {url: 'https://docs.dapr.io/developing-applications/sdks/dotnet/', referencia: 'Dapr Docs, .NET SDK: ofrece paquetes para desarrollar clientes, servidores y actores virtuales .NET.'},
    {url: 'https://learn.microsoft.com/en-us/ef/', referencia: 'Microsoft Learn, Entity Framework documentation hub: ORM para construir capas de acceso a datos con .NET.'},
    {url: 'https://doc.qt.io/qt-6/', referencia: 'Qt 6 Documentation: framework de desarrollo de aplicaciones e interfaces para escritorio, sistemas embebidos y móviles; documenta módulos C++ y QML/JavaScript.'}
  ], null, 'La frase original «no es compatible con Microsoft .NET» era demasiado absoluta: un framework puede integrarse mediante bindings o interoperabilidad de terceros. Se sustituye por una comparación de categorías más precisa. Dapper es un mapper .NET, Dapr dispone de SDK .NET y Entity Framework es un ORM .NET; Qt es principalmente un framework multiplataforma de aplicaciones e interfaces basado en C++ y QML, no una librería de acceso a datos/SDK .NET. Eso no niega que existan integraciones de terceros. Cotejo curricular con ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026), temas A1-66 y A2-D11; la clasificación oficial de lenguajes/plataformas se corresponde también con A2-II-3.', 'corregida'],
  [1484, [62, 67], ['II-2', 'II-3'], ['Java ME', 'J2ME', 'MIDlet', 'MIDP', 'CLDC', 'telefonía móvil', 'tecnología histórica'], [
    {url: 'https://docs.oracle.com/javame/mobile.html', referencia: 'Oracle Java ME & Java Card Documentation: MIDP, combinado con CLDC, constituye el entorno Java ME para dispositivos de información móviles; la documentación se mantiene como archivo tecnológico.'},
    {url: 'https://docs.oracle.com/javame/config/cldc/ref-impl/midp1.0/jsr037/javax/microedition/midlet/MIDlet.html', referencia: 'Oracle MIDP API, clase javax.microedition.midlet.MIDlet: un MIDlet es una aplicación del perfil MIDP cuyo ciclo de vida gestiona el software de administración de aplicaciones.'}
  ], null, 'La opción marcada describe correctamente el uso histórico del término: un MIDlet es una aplicación Java escrita para el perfil MIDP de Java ME, normalmente sobre CLDC en dispositivos con recursos limitados. Se conserva como pregunta histórica porque J2ME/MIDP fue una plataforma de aplicaciones móviles característica de teléfonos y PDA anteriores al predominio de los sistemas actuales; no se presenta como el modelo habitual de desarrollo móvil contemporáneo. Cotejo curricular con ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026), Java (A1-67/A2-D10), y bloque 47 Aplicaciones Móviles y Sistemas Operativos, versión 2026.1 (30-09-2026), sistemas móviles (A1-62).', 'historica'],
  [1485, [65, 67], ['II-3'], ['Java', 'JavaScript', 'ECMAScript', 'ECMA-262', 'JLS', 'Nashorn'], [
    {url: 'https://tc39.es/ecma262/', referencia: 'ECMA-262, ECMAScript Language Specification, especificación normativa del lenguaje ECMAScript, base de los lenguajes JavaScript actuales.'},
    {url: 'https://docs.oracle.com/javase/specs/jls/se8/html/index.html', referencia: 'Oracle, Java Language Specification, Java SE 8 Edition: especificación del lenguaje Java para Java SE 8.'},
    {url: 'https://bugs.openjdk.org/browse/JDK-8241749', referencia: 'OpenJDK JDK-8241749, Remove the Nashorn JavaScript Engine: Nashorn se incorporó al JDK a partir del JDK 8 y se eliminó en el JDK 15.'}
  ], null, 'El original pedía seleccionar una afirmación «falsa», pero acumulaba varias ambigüedades: JDK 8 sí incorporó Nashorn; describir JavaScript como exclusivamente interpretado y Java como exclusivamente compilado ignora la compilación/JIT de los motores modernos; y ambos lenguajes tienen especificaciones. Se reemplaza por una pregunta positiva y única: ECMA-262 especifica ECMAScript, base de JavaScript; la JLS especifica Java. Como contexto histórico, Nashorn estuvo incluido desde JDK 8 y fue eliminado en JDK 15. Cotejo curricular con ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026), §2.4 JavaScript/ECMAScript y lenguajes Java; temas A1-65/A1-67/A2-T3.', 'corregida']
];

const edits = {
  1482: {
    texto: '¿Qué describe correctamente WebDAV?',
    respuesta_correcta: 0,
    opciones: [
      'Una extensión de HTTP para la autoría web distribuida y la gestión remota de recursos, como propiedades, colecciones y bloqueos.',
      'Un protocolo de replicación de controladores de dominio basado en llamadas a procedimientos remotos.',
      'Una interfaz ActiveX para distribuir aplicaciones en una red.',
      'Un mecanismo que aumenta la seguridad de los controladores de dominio mediante Kerberos.'
    ],
    opcion: [0, 'Una extensión de HTTP para la autoría web distribuida y la gestión remota de recursos, como propiedades, colecciones y bloqueos.']
  },
  1483: {
    texto: '¿Cuál es principalmente un framework multiplataforma para desarrollar aplicaciones e interfaces con C++/QML, en lugar de una librería de acceso a datos o un SDK de .NET?',
    opciones: ['Dapper.', 'Dapr.', 'Entity Framework.', 'Qt.']
  },
  1485: {
    texto: '¿Qué especificación define el lenguaje ECMAScript, base del lenguaje JavaScript?',
    opciones: ['Java Language Specification (JLS).', 'ECMA-262.', 'Java SE API Specification.', 'RFC 4918 (WebDAV).'],
    opcion: [1, 'ECMA-262.']
  }
};

apply({numero: '233', fecha: '2026-10-25', records, edits});
