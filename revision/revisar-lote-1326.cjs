const aplicar=require('./aplicar-lote.cjs');
const bitlocker='https://learn.microsoft.com/en-us/windows/win32/vss/working-with-file-system-and-security-features';
const android='https://source.android.com/docs/core/architecture/hal';
const sql='https://www.postgresql.org/docs/current/ddl-constraints.html';
const ecma='https://ecma-international.org/publications-and-standards/standards/ecma-262/';
const mdn='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction';
const sax='https://docs.oracle.com/en/java/javase/26/docs/api/java.xml/org/xml/sax/XMLReader.html';
const stax='https://docs.oracle.com/javase/tutorial/jaxp/stax/api.html';
const jndi='https://docs.oracle.com/en/java/javase/26/docs/api/java.naming/javax/naming/package-summary.html';
const jdbc='https://docs.oracle.com/en/java/javase/26/docs/api/java.sql/java/sql/package-summary.html';
const jaxb='https://jakarta.ee/specifications/xml-binding/4.0/';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const edits={
  6951:{texto:'Históricamente, ¿en qué versión de Windows apareció por primera vez BitLocker Drive Encryption, y en qué ediciones de esa versión estaba disponible?',opciones:['Windows Vista Enterprise y Ultimate.','Windows 98.','Windows 2000.','Windows Server 2012.'],respuesta_correcta:0},
  6954:{texto:'Sobre JavaScript y ECMAScript, seleccione la afirmación INCORRECTA:',opciones:['JavaScript es un lenguaje dinámicamente tipado y orientado a objetos, con herencia basada en prototipos.','La ejecución de JavaScript exige que el código fuente se compile previamente a código máquina nativo; los motores no pueden interpretarlo ni compilarlo en tiempo de ejecución.','JavaScript puede utilizarse con un modelo de programación dirigido por eventos.','ECMAScript es la especificación estandarizada del lenguaje en la que se basa JavaScript.'],respuesta_correcta:1},
  6955:{texto:'Sobre estas APIs de Java para directorios, bases de datos y XML, seleccione la afirmación INCORRECTA:',opciones:['JNDI ofrece acceso uniforme a servicios de nombres y directorio mediante proveedores, por ejemplo LDAP y DNS.','JDBC proporciona interfaces para que programas Java accedan a bases de datos relacionales y otros orígenes compatibles.','SAX y StAX son ambas APIs bidireccionales que permiten leer y escribir documentos XML.','JAXB (actualmente Jakarta XML Binding fuera del JDK) permite enlazar clases Java con representaciones XML.'],respuesta_correcta:2}
};
const records=[
 [6951,[54,62],['II-2'],['Windows','BitLocker','cifrado de volumen','Windows Vista','ediciones Enterprise y Ultimate'],[
  {url:bitlocker,referencia:'Microsoft Learn, documentación de BitLocker: identifica la función como nueva en Windows Vista Enterprise, Windows Vista Ultimate y Windows Server 2008.'},
  {url:'https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/',referencia:'Microsoft Learn, descripción actual: BitLocker sigue siendo una función de cifrado de volúmenes, con disponibilidad actual según edición/licencia; Vista ya no está soportado.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, temas 54 y 62: dispositivos personales, Windows y sistemas operativos.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema II.2: fundamentos y características de sistemas operativos Windows y otros.'}
 ],undefined,'Histórica A, con precisión incorporada. BitLocker apareció en Windows Vista Enterprise y Ultimate (también en Windows Server 2008); no se ofrecía en todas las ediciones de Vista y esta versión ya no tiene soporte. Se pregunta por el dato histórico de primera aparición, no por la disponibilidad actual.','historica'],
 [6952,[62],['II-2'],['Android','HAL','Hardware Abstraction Layer','abstracción de hardware','drivers'],[
  {url:android,referencia:'Android Open Source Project, HAL overview: la HAL ofrece una interfaz estándar a los fabricantes para implementar funciones específicas de hardware de bajo nivel sin modificar el código de capas superiores.'},
  {url:'https://source.android.com/docs/core/architecture',referencia:'Android Open Source Project, arquitectura: HAL permite que Android sea independiente de las implementaciones de controladores de bajo nivel.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 62: Android y otros sistemas operativos.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema II.2: sistemas operativos y sistemas operativos para móviles.'}
 ],undefined,'Vigente C. HAL significa Hardware Abstraction Layer. En Android define interfaces estándar para separar el framework de las implementaciones específicas de hardware/driver; AIDL es hoy el lenguaje de interfaz preferente para HAL modernas, no una denominación alternativa de la capa.','vigente'],
 [6953,[64],['II-5','III-4'],['modelo relacional','clave candidata','clave primaria','clave foránea','integridad referencial','SQL'],[
  {url:sql,referencia:'PostgreSQL, restricciones SQL vigentes: una tabla puede declarar varias claves foráneas; la clave primaria exige valores únicos y no nulos. Es documentación de implementación usada para ilustrar las restricciones relacionales estándar.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 64: modelo relacional y SQL.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, temas II.5 y III.4: SGBD relacionales, modelo lógico, claves y diseño de bases de datos.'}
 ],undefined,'Vigente C. Una relación puede tener varias claves foráneas, por ejemplo una tabla de detalle que referencie tanto pedido como producto. El nombre de la columna referenciante no tiene que coincidir con la clave destino; puede haber varias claves candidatas, y los atributos de una clave primaria no admiten NULL.','vigente'],
 [6954,[65],['III-12'],['JavaScript','ECMAScript','tipado dinámico','prototipos','compilación JIT','programación dirigida por eventos'],[
  {url:ecma,referencia:'Ecma International, ECMA-262 edición 2026: especificación normativa actual del lenguaje ECMAScript, originado en tecnologías entre las que JavaScript es la más conocida.'},
  {url:mdn,referencia:'MDN, guía de JavaScript: caracteriza JavaScript como dinámicamente tipado, orientado a objetos con herencia por prototipos y estandarizado como ECMAScript.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, tema 65: desarrollo web, front-end y scripts de cliente.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, tema III.12: aplicaciones web y tecnologías de programación.'}
 ],undefined,'Corregida B. «No necesita compilación» sería una simplificación engañosa: los motores pueden interpretar, compilar/JIT u optimizar. Lo falso es que la especificación exija compilación previa a código máquina y prohíba otras estrategias de ejecución. Se precisan además el tipado dinámico, la herencia prototípica y el carácter normativo de ECMAScript.','corregida'],
 [6955,[65,67,77],['III-10','III-12'],['Java','JNDI','JDBC','SAX','StAX','JAXB','Jakarta XML Binding','XML'],[
  {url:jndi,referencia:'Java SE 26 API, javax.naming: JNDI ofrece funcionalidad de nombres y directorio y soporta proveedores para diversos servicios.'},
  {url:jdbc,referencia:'Java SE 26 API, java.sql: JDBC contiene interfaces y clases para acceso y procesamiento de datos tabulares, normalmente mediante controladores de bases de datos.'},
  {url:sax,referencia:'Java SE 26 API, org.xml.sax.XMLReader: interfaz de SAX para leer documentos XML mediante callbacks; no proporciona una API general de escritura equivalente.'},
  {url:stax,referencia:'Oracle Java Tutorials, StAX: a diferencia de SAX, StAX es bidireccional y permite tanto lectura como escritura XML.'},
  {url:jaxb,referencia:'Jakarta XML Binding 4.0: mapea clases Java y documentos XML; la tecnología sucesora continúa JAXB fuera de las distribuciones JDK actuales.'},
  {url:a1,referencia:'Programa oficial A1 GSI 2025, temas 65, 67 y 77: tecnologías web, entorno Java y XML.'},
  {url:a2,referencia:'Programa oficial A2 GSI 2025, temas III.10 y III.12: Java/Jakarta EE y aplicaciones web/XML.'}
 ],undefined,'Corregida C. StAX sí ofrece lectura y escritura (XMLStreamReader/Writer); SAX expone un modelo de análisis de lectura por eventos. Por tanto, no son ambas bidireccionales. Se actualizó JAXB a su nombre actual Jakarta XML Binding y se mantiene la relación conceptual de binding Java/XML.','corregida']
];
aplicar({numero:'1326',fecha:'2026-11-15',records,edits});
