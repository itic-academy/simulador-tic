const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2201, [62, 64], ['II-2', 'II-5'], ['Android', 'SQLite', 'base de datos local', 'Room'], [
    { url: 'https://developer.android.com/training/data-storage/sqlite', referencia: 'Android Developers: SQLite está disponible para almacenar datos estructurados localmente en Android; para nuevas aplicaciones se recomienda Room como capa de abstracción.' },
    { url: 'https://developer.android.com/reference/androidx/room/package-summary', referencia: 'Android Developers, Room: biblioteca de persistencia que proporciona una capa de abstracción sobre SQLite.' }
  ], 'Android Developers, SQLite y Room', 'SQLite es el motor local relacional compatible que distingue la opción correcta de las alternativas propuestas. La documentación actual recomienda normalmente Room para acceder a SQLite desde aplicaciones Android; la pregunta se acota para distinguir el motor de la biblioteca de abstracción.', 'corregida'],
  [2202, [58, 65, 67], ['II-6', 'III-10'], ['Java RMI', 'CORBA', 'sistemas distribuidos', 'RMI-IIOP'], [
    { url: 'https://docs.oracle.com/en/java/javase/27/rmi/index.html', referencia: 'Oracle Java RMI API Guide: RMI crea aplicaciones distribuidas en Java y permite invocar métodos de objetos Java remotos.' },
    { url: 'https://www.omg.org/spec/CORBA/', referencia: 'Object Management Group, CORBA: arquitectura de objetos distribuidos e interoperabilidad entre implementaciones y lenguajes.' },
    { url: 'https://docs.oracle.com/javase/8/docs/technotes/guides/idl/', referencia: 'Oracle Java IDL: puente de interoperabilidad CORBA/IIOP para aplicaciones Java; matiza que la interoperabilidad depende de protocolos y mapeos específicos.' }
  ], 'Oracle Java RMI e IDL; Object Management Group, CORBA', 'Se mantiene la clave de RMI: Java RMI es la API de invocación remota de objetos Java. CORBA se diseñó para interoperar entre lenguajes; no debe afirmarse que RMI, sin más, conecte tecnologías distintas. RMI-IIOP fue una integración específica con CORBA/IIOP, no una propiedad general de toda implementación RMI.', 'vigente'],
  [2203, [60, 69], ['II-2'], ['KDE', 'Phonon', 'multimedia', 'Qt'], [
    { url: 'https://api.kde.org/legacy/phonon/html/index.html', referencia: 'KDE API Reference, Phonon: interfaz de estilo Qt para audio y vídeo; documentación del proyecto KDE.' },
    { url: 'https://api.kde.org/', referencia: 'KDE API Reference: presenta Phonon como biblioteca de abstracción multimedia basada en Qt.' }
  ], 'KDE API Reference, Phonon', 'Phonon es la respuesta correcta: la documentación de KDE lo identifica como su interfaz/biblioteca de abstracción multimedia basada en Qt. La formulación se refiere al framework multimedia KDE, no al escritorio Plasma ni a un reproductor concreto.', 'vigente'],
  [2204, [57], ['II-1'], ['JCL', 'z/OS', 'mainframe', 'columnas de registros'], [
    { url: 'https://www.ibm.com/docs/en/zos/3.1.0?topic=statements-jcl-statement-fields', referencia: 'IBM z/OS 3.1 JCL statement fields: JCL usa registros de hasta 80 columnas; operandos y comentarios tienen reglas de posición, y la continuación puede afectar a la columna 72.' },
    { url: 'https://www.ibm.com/docs/en/zos/3.1.0?topic=parameters-notation-used-show-syntax', referencia: 'IBM z/OS 3.1 notation: las palabras y caracteres en mayúsculas en la sintaxis indican cómo se codifican las palabras clave; los elementos en minúscula representan variables/sustituciones.' }
  ], 'IBM z/OS 3.1, JCL statement fields y notation used to show syntax', 'Pendiente de ambigüedad: la opción sobre comentarios «a partir de la columna 52» es falsa como regla general, pero la afirmación de que todas las sentencias han de escribirse en mayúsculas también generaliza la notación de palabras clave y no describe todos los datos/valores. La pregunta puede tener más de una opción errónea; se conserva clave y contenido originales sin marcarlos como verificados.', 'pendiente_ambiguedad'],
  [2205, [57], ['II-1'], ['computación de altas prestaciones', 'HPC', 'paralelismo', 'tiempo compartido'], [
    { url: 'https://www.top500.org/project/top500_description/', referencia: 'TOP500 describe la clasificación de sistemas de cómputo de alto rendimiento según rendimiento LINPACK; no define la compartición temporal como rasgo esencial.' },
    { url: 'https://www.top500.org/files/HPC_Advisory_Council.pdf', referencia: 'HPC Advisory Council, From Computational Science to Distributed Science: describe clústeres HPC como sistemas escalables que agregan nodos para ejecutar aplicaciones paralelas.' }
  ], 'TOP500 y HPC Advisory Council, documentación sobre sistemas HPC', 'Se confirma tiempo compartido como la opción que no define la capacidad de altas prestaciones: HPC se caracteriza por rendimiento y cómputo paralelo/escalable. El tiempo compartido es una política posible de asignación de recursos y puede coexistir en un sistema HPC, pero no es el rasgo que explica su alto rendimiento.', 'vigente']
];

const edits = {
  2201: { texto: 'Para una aplicación Android que necesita almacenar datos estructurados relacionales en el dispositivo, ¿qué motor de base de datos local de las opciones es compatible?', opciones: ['SQLite.', 'Oracle Pocket.', 'SQL Server Compact.', 'MySQL Micro Edition.'], respuesta_correcta: 0 },
  2205: { texto: '¿Cuál de las siguientes opciones es una política posible de reparto de CPU, pero no una propiedad que defina por sí misma la capacidad de cálculo de altas prestaciones (HPC)?', opciones: ['Arquitectura altamente paralela.', 'Gran capacidad de cómputo.', 'Tiempo compartido.', 'Elevado coste.'], respuesta_correcta: 2 }
};

aplicar({ numero: '377', fecha: '2026-10-28', records, edits });
