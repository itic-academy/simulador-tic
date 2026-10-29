const apply=require('./aplicar-lote.cjs');
const lustre='https://wiki.lustre.org/Understanding_Lustre_Internals';
const lustreArch='https://wiki.lustre.org/Lustre_Architecture_for_Admins';
const oracleOs='https://docs.oracle.com/cd/E19957-01/805-4368/6j450e608/index.html';
const intel='https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-software-developer-vol-3a-part-1-manual.pdf';
const ibmShells='https://www.ibm.com/docs/en/aix/7.3.0?topic=concepts-available-shells';
const apple='https://www.apple.com/newsroom/2000/01/05Apple-Unveils-Mac-OS-X/';
const records=[
 [2946,[56,60],['II-1','II-2'],['Lustre','sistemas de archivos distribuidos','almacenamiento paralelo','HPC'],[
  {url:lustre,referencia:'Lustre Wiki, Understanding Lustre Internals: componentes MDS/MDT, OSS/OST y MGS/MGT; el modelo de Lustre no incluye DSS.'},
  {url:lustreArch,referencia:'Lustre Wiki, Architecture for Admins: clasifica servidores de metadatos (MDS), datos (OSS), configuración (MGS), clientes y targets.'}
 ],'','Se conserva la clave DSS: la documentación de Lustre identifica MDS, MDT, OSS, OST y MGS/MGT, pero no «DSS (Distributed Storage Server)». Se reescribe «no está relacionado» como ausencia en la arquitectura Lustre, ya que DSS puede usarse como sigla genérica en otros contextos. Cotejo curricular: ITIC Academy, Bloque 26 sobre almacenamiento paralelo y distribuido, y Bloque 27 Sistemas Operativos, contenidos UNIX/Linux. A1-56/A1-60; A2-II-1/A2-II-2.','vigente'],
 [2947,[59],['II-2'],['sistemas operativos','multiusuario','monotarea','multitarea'],[
  {url:oracleOs,referencia:'Oracle Sun Global Glossary: multiuser system es usado por dos o más personas dentro de un período, normalmente de forma serial; multitasking distingue la ejecución concurrente de tareas.'},
  {url:'https://learn.microsoft.com/en-us/windows/desktop/procthread/multitasking',referencia:'Microsoft Learn, Multitasking: la multitarea divide el tiempo de CPU entre procesos/hilos; el sistema suspende una tarea y ejecuta otra.'}
 ],'','Se aclara la ambigüedad terminológica del original: «multiusuario» no significa necesariamente sesiones activas simultáneas; puede referirse a usuarios distintos durante un periodo y normalmente de forma serial. Si sólo se ejecuta una tarea cada vez, ambos rasgos pueden coexistir bajo esa definición. Si se exigieran usuarios concurrentes con tareas activas, el sistema tendría que conmutar entre tareas y sería multitarea. Se sustituye la opción antigua que mezclaba usuarios simultáneos con monotarea. Cotejo curricular: ITIC Academy, Bloque 27, fundamentos y clasificación de sistemas operativos; A1-59/A2-II-2.','corregida'],
 [2948,[59],['II-2'],['memoria virtual','paginación','segmentación','traducción de direcciones'],[
  {url:intel,referencia:'Intel 64 and IA-32 SDM, vol. 3A, §§3.2, 3.3, 4.12–4.13: segmentación traduce direcciones lógicas a lineales; paginación traduce lineales a físicas y ambos mecanismos pueden combinarse.'}
 ],'','Se delimita al modelo protegido clásico de gestión de memoria. En dicho modelo, la segmentación puede traducir la dirección lógica a lineal y la paginación la lineal a física; ambas pueden intervenir. Se añade la salvedad de que en x86-64 el uso práctico de la segmentación es muy reducido y la paginación es central, por lo que no se generaliza el modelo clásico a todas las arquitecturas actuales. Cotejo curricular: ITIC Academy, Bloque 27, §§3.3–3.6 sobre paginación, segmentación y traducción paso a paso; A1-59/A2-II-2.','corregida'],
 [2949,[60],['II-2'],['UNIX','shell','Bourne shell','C shell','Korn shell'],[
  {url:ibmShells,referencia:'IBM AIX 7.3, Available shells: lista Bourne, C, Korn, POSIX, restricted y otras shells suministradas; «Xenix Shell» no figura como familia de shell.'},
  {url:'https://docs.oracle.com/cd/E19683-01/806-7612/customize-4/index.html',referencia:'Oracle Solaris Advanced User’s Guide: identifica Bourne, C y Korn como shells disponibles, además de bash, tcsh y zsh.'}
 ],'','Se reemplaza «tipo estándar» por «familia clásica de shells» para evitar presentar una lista cerrada o universal. Bourne, C y Korn son familias documentadas en sistemas UNIX; XENIX fue un sistema operativo UNIX derivado, no el nombre de una familia estándar de shell. Cotejo curricular: ITIC Academy, Bloque 27, §6.9 POSIX y shell; A1-60/A2-II-2.','corregida'],
 [2950,[62],['II-2'],['Mac OS X','Aqua','interfaz gráfica','Apple'],[
  {url:apple,referencia:'Apple Newsroom, presentación de Mac OS X (05-01-2000): anuncia que el sistema incorpora una nueva interfaz llamada Aqua.'},
  {url:'https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/OSX_Technology_Overview/CocoaApplicationLayer/CocoaApplicationLayer.html',referencia:'Apple Developer Archive: Aqua es la apariencia y comportamiento globales de OS X; Cocoa es una capa/framework de aplicaciones.'}
 ],'','Se confirma «Aqua» como nombre de la interfaz/experiencia visual de las primeras versiones de Mac OS X; Cocoa y Carbon son tecnologías/frameworks de desarrollo, y Platinum pertenece a generaciones anteriores de la interfaz clásica Mac. Se etiqueta histórica porque el reactivo pregunta por el nombre y producto de una generación concreta, no por la interfaz vigente de macOS en 2026. Cotejo curricular: ITIC Academy, Bloque 27, A1-62 «OS X» y panorama de otros sistemas operativos; A2-II-2.','historica']
];
apply({numero:'526',fecha:'2026-10-29',records,edits:{
 2946:{texto:'¿Qué sigla NO identifica un componente de la arquitectura documentada del sistema de archivos Lustre?',respuesta_correcta:0},
 2947:{texto:'Si «multiusuario» significa que varias personas pueden utilizar el sistema dentro de un período, normalmente en sesiones seriales, y «monotarea» que sólo se ejecuta una tarea cada vez, ¿pueden coexistir ambas propiedades?',opciones:['No; permitir varias cuentas obliga a ejecutar varias tareas simultáneamente.','Sí; distintos usuarios pueden utilizarlo en momentos sucesivos y el sistema ejecutar una sola tarea cada vez.','Sí, pero sólo cuando hay exactamente dos usuarios alternándose.','Sólo si un sistema de identidades actúa como semáforo de tareas.'],respuesta_correcta:1},
 2948:{texto:'En el modelo clásico de direcciones de x86 protegido, ¿qué mecanismos pueden formar parte de la traducción de una dirección lógica hasta una dirección física?',opciones:['La paginación.','La segmentación.','La segmentación y la paginación.','Ninguno de los anteriores.'],respuesta_correcta:2},
 2949:{texto:'¿Cuál de estas opciones NO es el nombre de una familia clásica de shell documentada en sistemas UNIX?',opciones:['Bourne shell.','C shell.','Xenix shell.','Korn shell.'],respuesta_correcta:2},
 2950:{texto:'Apple presentó la primera versión de Mac OS X con una interfaz llamada:',respuesta_correcta:3}
}});
