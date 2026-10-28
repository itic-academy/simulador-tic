const apply = require('./aplicar-lote.cjs');

const records = [
  [2416, [67], ['II-3'], ['JNI', 'Java', 'C', 'C++', 'Invocation API'], [
    { url: 'https://docs.oracle.com/en/java/javase/26/docs/specs/jni/intro.html', referencia: 'Oracle, JNI Specification 26, Introduction: JNI permite al código Java ejecutado en una JVM interoperar con aplicaciones y bibliotecas de otros lenguajes; su Invocation API permite a una aplicación nativa incorporar la JVM.' }
  ], '', 'Se mantienen dos afirmaciones complementarias como correctas: JNI permite que el código Java llame a bibliotecas/código nativo y la Invocation API permite que aplicaciones nativas creen o incorporen una JVM y usen código Java. JNI no garantiza portabilidad universal de las bibliotecas nativas; Oracle recomienda considerar la Foreign Function & Memory API en usos nuevos adecuados, sin que ello invalide la definición de JNI.', 'corregida'],
  [2417, [67], ['II-3'], ['Java Web Start', 'JNLP', 'JDK 11', 'despliegue de aplicaciones Java'], [
    { url: 'https://docs.oracle.com/javase/8/docs/technotes/guides/javaws/developersguide/running.html', referencia: 'Oracle Java SE 8 Tutorials, Running a Java Web Start Application: Java Web Start ejecuta aplicaciones descritas mediante ficheros JNLP.' },
    { url: 'https://www.oracle.com/java/technologies/jnlp.html', referencia: 'Oracle, JNLP Support: Java Network Launch Protocol; el despliegue de Java Web Start emplea descriptores JNLP.' },
    { url: 'https://docs.oracle.com/en/java/javase/26/migrate/removed-tools-and-components.html', referencia: 'Oracle JDK Migration Guide 26, Removed Tools and Components: las tecnologías Java Web Start y javaws se retiraron del JDK en la versión 11.' }
  ], '', 'El reactivo se fija en la antigua distribución Java Web Start de Oracle. El protocolo de lanzamiento se denomina JNLP (Java Network Launch Protocol), no «JMLP»; esa es la afirmación falsa. Java Web Start permitía descargar y ejecutar aplicaciones de escritorio a partir de descriptores JNLP y fue retirada del JDK Oracle en JDK 11. Se conserva como contenido histórico, sin presentarlo como tecnología vigente del JDK.', 'historica'],
  [2418, [77], ['III-12'], ['PHP', 'PDO', 'PHP Data Objects', 'acceso a bases de datos'], [
    { url: 'https://www.php.net/manual/en/intro.pdo.php', referencia: 'PHP Manual, PDO Introduction: la extensión PHP Data Objects ofrece una interfaz ligera y consistente para acceder a bases de datos desde PHP.' },
    { url: 'https://www.php.net/pdo', referencia: 'PHP Manual, PDO: interfaz de acceso a bases de datos; requiere el controlador PDO específico de cada gestor.' }
  ], '', 'PDO significa PHP Data Objects. Es una extensión/interfaz consistente de acceso a bases de datos en PHP y usa controladores específicos. No es una suite general de desarrollo, un acelerador de ejecución ni el sistema de clases y objetos de PHP.', 'corregida'],
  [2419, [69], ['II-14'], ['GPL', 'GNU', 'software libre', 'copyleft', 'BSD original'], [
    { url: 'https://www.gnu.org/licenses/gpl-faq.en.html#OrigBSD', referencia: 'Free Software Foundation, GNU GPL FAQ: la cláusula publicitaria de la licencia BSD original es incompatible con GPLv2 por imponer una restricción adicional; la BSD revisada elimina esa cláusula.' },
    { url: 'https://www.gnu.org/licenses/gpl-faq.en.html#GPLCommercially', referencia: 'Free Software Foundation, GNU GPL FAQ: se pueden vender copias de una obra modificada, respetando la GPL y las obligaciones aplicables.' },
    { url: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html', referencia: 'GNU GPL versión 2, secciones 1 y 2: permite cobrar por la transferencia de copias y regula la distribución de trabajos basados en el programa.' }
  ], '', 'Se delimita la respuesta al caso de distribución de una obra derivada y a GPLv2: la licencia permite vender copias, pero la redistribución del trabajo derivado debe respetar la licencia y sus obligaciones. La afirmación falsa es que la cláusula publicitaria de la BSD original sea compatible con GPLv2; la FSF explica que esa condición adicional la hace incompatible. No se generaliza el copyleft a programas meramente agregados o independientes.', 'corregida'],
  [2420, [73], ['III-6'], ['SCORM', 'ADL', 'e-learning', 'paquete de contenidos', 'imsmanifest.xml'], [
    { url: 'https://www.adlnet.gov/assets/uploads/SCORM_Users_Guide_for_Programmers.pdf', referencia: 'ADL, SCORM Best Practices Guide for Programmers, Content Packages / Manifest File: el manifiesto imsmanifest.xml organiza el paquete; suele generarlo una herramienta de autoría, aunque puede elaborarse manualmente con un editor XML.' },
    { url: 'https://www.adlnet.gov/assets/uploads/SCORM_2004_4ED_v1_1_TR_20090814.pdf', referencia: 'ADL, SCORM 2004 4th Edition Conformance Requirements: SCORM especifica requisitos de conformidad para LMS, paquetes y objetos de contenido interoperables, no exige una marca de herramienta de autoría.' }
  ], '', 'Se sustituye la afirmación absoluta sobre «cualquier editor», que era ambigua: ADL dice que el manifiesto suele generarse con una herramienta de autoría, pero también puede escribirse manualmente con un editor XML. La pregunta pasa a evaluar una falsedad inequívoca: SCORM no impone una herramienta propietaria concreta. El paquete organiza recursos de aprendizaje web mediante imsmanifest.xml y requisitos de conformidad.', 'corregida']
];

const edits = {
  2416: {
    texto: 'Respecto a Java Native Interface (JNI), señale la afirmación correcta:',
    opciones: [
      'Usar JNI conserva siempre la portabilidad universal, aunque la biblioteca nativa dependa del sistema operativo.',
      'Permite que el código Java de una JVM interopere con bibliotecas y aplicaciones nativas escritas en otros lenguajes.',
      'Mediante la Invocation API, una aplicación nativa puede incorporar una JVM y utilizar código Java.',
      'Las afirmaciones B y C son correctas.'
    ], respuesta_correcta: 3
  },
  2417: {
    texto: 'Sobre Java Web Start de Oracle, indique la afirmación FALSA:',
    opciones: [
      'Permitía descargar y ejecutar aplicaciones Java de escritorio descritas mediante un fichero de lanzamiento.',
      'El descriptor de lanzamiento usado por Java Web Start se denomina JNLP (Java Network Launch Protocol).',
      'El protocolo de lanzamiento de sus aplicaciones se denomina JMLP (Java Main Launch Protocol).',
      'Oracle retiró Java Web Start del JDK a partir de JDK 11.'
    ], respuesta_correcta: 2
  },
  2418: {
    texto: '¿Qué significa PDO en PHP y cuál es su función?',
    opciones: [
      'PHP Data Objects: una interfaz ligera y consistente para acceder a bases de datos mediante controladores.',
      'PHP Development Optimizer: un compilador que acelera automáticamente cualquier script.',
      'PHP Design Objects: el sistema de herencia y clases del lenguaje PHP.',
      'PHP Deployment Organizer: un repositorio de herramientas para publicar aplicaciones web.'
    ], respuesta_correcta: 0
  },
  2419: {
    texto: 'Sobre la GPLv2, señale la afirmación FALSA acerca de la distribución de software:',
    opciones: [
      'La GPL permite vender copias del programa, siempre que se respeten sus condiciones.',
      'La cláusula publicitaria de la licencia BSD original es compatible con GPLv2 porque no añade restricciones.',
      'Si se distribuye una obra derivada del programa, se deben respetar las condiciones de GPLv2 aplicables a esa obra.',
      'La FSF considera incompatible con GPLv2 la cláusula publicitaria de la BSD original; la BSD revisada la suprimió.'
    ], respuesta_correcta: 1
  },
  2420: {
    texto: 'Indique la afirmación INCORRECTA sobre la conformidad de un paquete de contenidos SCORM:',
    opciones: [
      'Un paquete SCORM incluye una organización de recursos que permite su entrega en un LMS compatible.',
      'El fichero imsmanifest.xml describe y organiza el paquete de contenidos.',
      'El manifiesto suele generarse con una herramienta de autoría, aunque también puede crearse manualmente con un editor XML.',
      'SCORM exige que todo contenido se elabore con una aplicación propietaria de un fabricante determinado.'
    ], respuesta_correcta: 3
  }
};

apply({ numero: '421', fecha: '2026-10-28', records, edits });
