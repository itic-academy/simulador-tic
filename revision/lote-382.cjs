const aplicar = require('./aplicar-lote.cjs');

const records = [
  [2226, [65], ['III-12'], ['ASP.NET MVC', 'controller', 'controlador', 'convención de nombres'], [
    { url: 'https://learn.microsoft.com/en-us/previous-versions/aspnet/dd410269(v=vs.100)', referencia: 'Microsoft Learn, Controllers and Action Methods in ASP.NET MVC Applications: establece la convención de que las clases controller terminan en el sufijo Controller.' }
  ], 'Microsoft Learn, Controllers and Action Methods in ASP.NET MVC Applications', 'Se confirma ServiciosController. En ASP.NET MVC clásico, el nombre de la clase controladora debe terminar en Controller; no basta con estar ubicada en la carpeta Controllers. La pregunta se interpreta para la convención de ASP.NET MVC indicada, no como regla universal de todos los frameworks MVC.', 'vigente'],
  [2227, [70], ['III-5'], ['procesamiento del habla', 'reconocimiento de voz', 'nivel fonético', 'teléfono', 'unidad sonora'], [
    { url: 'https://speechprocessingbook.aalto.fi/introduction/linguistic-structure-of-speech/', referencia: 'Aalto University, Introduction to Speech Processing, Linguistic structure of speech: identifica los teléfonos como unidades elementales del habla; el nivel fonético identifica los sonidos del habla a partir de claves acústicas.' },
    { url: 'https://gredos.usal.es/bitstream/handle/10366/122192/LibroMaster_2013_FINAL.pdf?sequence=1', referencia: 'Universidad de Salamanca, trabajo académico sobre reconocimiento del habla: distingue nivel acústico (características físicas) y nivel fonético (objetos sonoros elementales), que es la terminología exacta del reactivo.' }
  ], 'Aalto University, Introduction to Speech Processing; Universidad de Salamanca, niveles de procesamiento del habla', 'Se confirma el nivel fonético: identifica las unidades sonoras elementales (teléfonos) a partir de la señal; el nivel acústico describe propiedades físicas de la señal, mientras prosodia trata rasgos suprasegmentales como tono y entonación.', 'vigente'],
  [2228, [67], ['II-3'], ['Java', 'JNI', 'Java Native Interface', 'interoperabilidad nativa'], [
    { url: 'https://docs.oracle.com/en/java/javase/25/docs/specs/jni/intro.html', referencia: 'Oracle, Java Native Interface Specification, Introduction: desarrolla expresamente JNI como Java Native Interface y describe la interoperabilidad de Java con código nativo.' }
  ], 'Oracle, Java Native Interface Specification, capítulo 1', 'Se corrige la opción para que responda literalmente al significado de la sigla: JNI significa Java Native Interface. La interfaz permite interoperar entre código Java ejecutado en la JVM y bibliotecas o aplicaciones nativas; “interfaz para llamar métodos nativos” describe su función, pero no expande la sigla.', 'corregida'],
  [2229, [71], ['II-4', 'III-15'], ['modelo dimensional', 'esquema estrella', 'copo de nieve', 'constelación de hechos', 'data warehouse'], [
    { url: 'https://www.ibm.com/think/topics/data-warehouse', referencia: 'IBM, What Is a Data Warehouse?: enumera estrella, copo de nieve y galaxia/constelación de hechos como esquemas comunes de modelos dimensionales para sistemas OLAP.' },
    { url: 'https://learn.microsoft.com/en-us/power-bi/guidance/star-schema', referencia: 'Microsoft Learn, Understand star schema: documenta el esquema estrella como enfoque de modelado dimensional y describe dimensiones normalizadas en copo de nieve.' }
  ], 'IBM, What Is a Data Warehouse?; Microsoft Learn, Understand star schema', 'Se confirma “Todos son modelos dimensionales”: estrella y copo de nieve son esquemas dimensionales; la constelación de hechos (galaxy/fact constellation) coordina varias tablas de hechos, a menudo con dimensiones conformadas.', 'vigente'],
  [2230, [77], ['III-12'], ['Chrome', 'Java applets', 'NPAPI', 'plugins web', 'historia de navegadores'], [
    { url: 'https://www.chromium.org/developers/npapi-deprecation/', referencia: 'Chromium, NPAPI deprecation: documenta que Chrome 42 deshabilitó NPAPI por defecto y Chrome 45 retiró permanentemente el soporte en septiembre de 2015.' },
    { url: 'https://blog.chromium.org/2014/11/the-final-countdown-for-npapi.html', referencia: 'Chromium Blog, The Final Countdown for NPAPI: anuncia el calendario de retirada y cita Java entre los plugins NPAPI.' }
  ], 'Chromium, NPAPI deprecation guide y blog del proyecto', 'Se conserva NPAPI como respuesta, pero se actualiza el enunciado como hecho histórico: Chrome 45 retiró definitivamente en septiembre de 2015 el soporte NPAPI del que dependían los applets Java. No se presenta como cambio reciente ni como una incompatibilidad genérica de las versiones actuales.', 'historica']
];

const edits = {
  2228: { opciones: ['Java Native Interface.', 'Java Network Integration.', 'Java Naming Interface.', 'Java Native Invocation.'], respuesta_correcta: 0 },
  2230: { texto: '¿Qué interfaz de plugins retiró definitivamente Google Chrome 45 en septiembre de 2015, impidiendo desde entonces ejecutar los applets de Java que dependían de ella?', respuesta_correcta: 3 }
};

aplicar({ numero: '382', fecha: '2026-10-28', records, edits });
