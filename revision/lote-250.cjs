const apply = require('./aplicar-lote.cjs');

const records = [
  [1566, [75], ['II-4'], ['Business Intelligence', 'BI', 'análisis de datos', 'toma de decisiones', 'servidor de aplicaciones'], [
    {url: 'https://www.ibm.com/think/topics/business-intelligence', referencia: 'IBM, What is business intelligence?: BI recoge, gestiona y analiza datos organizativos para producir conocimiento e informar decisiones y operaciones; los almacenes de datos sirven de base a muchas plataformas BI.'}
  ], null, 'La opción que no define Business Intelligence es la 1: describe un servidor de aplicaciones que presta servicios a equipos cliente, no un conjunto de prácticas para analizar datos organizativos y mejorar decisiones. Las opciones 0, 2 y 3 sí expresan, con distinta amplitud, análisis y transformación de información para apoyar la toma de decisiones. La clave original se mantiene.', 'vigente'],
  [1567, [58], ['II-6'], ['SOA', 'gobernanza', 'políticas de servicios', 'conformidad', 'ciclo de vida'], [
    {url: 'https://docs.oasis-open.org/soa-rm/soa-ra/v1.0/soa-ra-pr-01.pdf', referencia: 'OASIS SOA Reference Architecture, §5.1.3: SOA governance organiza servicios para promover visibilidad, facilitar interacciones y hacer que éstas respeten políticas y contratos; requiere procesos, métricas y seguimiento. La especificación distingue gobernanza de la gestión operativa de recursos.'}
  ], {texto: 'En una arquitectura orientada a servicios (SOA), ¿qué ámbito transversal define las políticas y reglas de participación y comprueba la conformidad de los servicios con ellas?', opciones: [
    'Capa de control.',
    'Capa de servicios.',
    'Gobernanza SOA (SOA Governance).',
    'Bus de servicios empresariales (ESB).'
  ], respuesta_correcta: 2}, 'Se mantiene SOA Governance, pero se corrige el enunciado: la gobernanza define políticas, responsabilidades y reglas de conformidad; no es una capa de ejecución universalmente normalizada ni debe confundirse con la monitorización/gestión operativa del ESB. OASIS describe la gobernanza SOA como procesos, marcos y políticas para organizar servicios y las interacciones entre participantes.', 'corregida'],
  [1568, [64], ['II-5', 'III-4'], ['modelo relacional', 'normalización', '3FN', 'dependencias funcionales', 'atributo primo', 'clave candidata'], [
    {url: 'https://www.cs.rpi.edu/~sibel/csci4380/fall2018/course_notes/normalization.html', referencia: 'Rensselaer Polytechnic Institute, CSCI 4380, Normalization: definición de 3FN mediante dependencias funcionales; para cada X→Y, ésta debe ser trivial, tener superclave en el determinante o atributos primos en el dependiente.'},
    {url: 'https://cs.sun.ac.za/courses/cs334/assets/pdf/Chapter14.pdf', referencia: 'Stellenbosch University, Database Systems, capítulo 14: definición general de 3FN; todo determinante debe ser superclave o el atributo de la derecha debe ser primo.'}
  ], {texto: '¿Cuál es la definición formal de tercera forma normal (3FN) para una relación R respecto de sus dependencias funcionales?', opciones: [
    'Para toda dependencia funcional no trivial X→A, X es una superclave de R o A es un atributo primo, es decir, pertenece a alguna clave candidata.',
    'Para toda dependencia funcional no trivial X→A, X debe ser una clave candidata y A no puede pertenecer a ninguna clave candidata.',
    'Todos los atributos no clave deben ser mutuamente independientes y depender de forma completa de una única clave primaria.',
    'La relación está en 3FN si está en primera forma normal, sin requisitos adicionales sobre dependencias funcionales.'
  ], respuesta_correcta: 0}, 'La respuesta correcta es la opción 0: para cada dependencia funcional no trivial X→A, el determinante debe ser una superclave o el atributo dependiente debe ser primo (pertenecer a alguna clave candidata). La regla pedagógica de «2FN y sin dependencias transitivas de atributos no clave respecto de una clave» es una formulación simplificada; no sustituye la definición formal en esquemas con varias claves candidatas. Se reemplaza la opción original «ambos» porque sus dos paráfrasis no eran equivalentes en todos los casos: “mutuamente independientes” puede excluir relaciones válidas en 3FN.', 'corregida'],
  [1569, [59, 60, 62], ['II-2', 'IV-1'], ['sistemas de archivos', 'MFS', 'Macintosh File System', 'AdvFS', 'JFS2', 'XFS', 'límites históricos'], [
    {url: 'https://www.hpe.com/psnow/downloadDoc/Tru64%20UNIX%20Operating%20System%20V5.1A-c04154477.pdf?contentDisposition=attachment&deepLink=&form=false&hf=regular&id=c04154477.pdf&isFutureVersion=true&isLinearized=false&originalObjectName=c04154477.pdf&prelaunchSection=&preview=false&print=&r=&section=&softrollSection=&ver=1', referencia: 'HPE Tru64 UNIX V5.1A QuickSpecs, File Systems: AdvFS admite ficheros de hasta 16 TB menos 512 KiB.'},
    {url: 'https://www.ibm.com/docs/en/aix/7.3.0?topic=limitations-jfs2-size-limits', referencia: 'IBM AIX 7.3, JFS2 size limits: con lff=yes el tamaño máximo de fichero y sistema de archivos alcanza 4 PB; con lff=no el máximo de fichero es 16 TB.'},
    {url: 'https://www.kernel.org/pub/linux/utils/fs/xfs/docs/xfs_filesystem_structure.pdf', referencia: 'Documentación técnica del proyecto XFS en kernel.org, capítulo 8: límites teóricos de fichero y sistema de archivos de 8 EiB.'},
    {url: 'https://developer.apple.com/library/archive/documentation/mac/pdf/Files/Files_GL.pdf', referencia: 'Apple Developer Archive, Inside Macintosh: Files, glosario: define MFS como método antiguo y plano de organización de archivos; el límite histórico del volumen MFS se contrasta con la documentación de compatibilidad de MacWorks citada en la ficha.'},
    {url: 'https://mirrors.apple2.org.za/ftp.apple.asimov.net/documentation/hardware/storage/disks/XProFile_Operation.pdf', referencia: 'Manual XProFile Operation, apéndice F, compatibilidad con MacWorks XL: indica expresamente que el Macintosh File System (MFS) limita el volumen a 20 MB.'}
  ], {texto: 'Considerando sus límites históricos documentados, ¿qué sistema de archivos de la lista no podía direccionar volúmenes de 1 TB?', opciones: [
    'AdvFS de Tru64 UNIX V5.1A.',
    'MFS (Macintosh File System).',
    'JFS2 de AIX con soporte de archivos grandes.',
    'XFS de Linux.'
  ], respuesta_correcta: 1}, 'La clave es MFS: el sistema Macintosh original tenía un límite histórico de volumen de 20 MB. Las otras opciones sí superan 1 TB en las configuraciones/versiones citadas: AdvFS admite ficheros de hasta 16 TB; JFS2 llega a 16 TB o más según lff y versión; y XFS tiene límites de varios EiB. Se especifican las versiones y la configuración para no presentar límites de sistemas de archivos como cifras universales independientes del sistema operativo.', 'corregida'],
  [1570, [74], [], ['INSPIRE', 'Directiva 2007/2/CE', 'datos espaciales', 'artículo 4', 'artículo 12', 'artículo 13', 'LISIGE'], [
    {url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:02007L0002-20241126', referencia: 'Directiva 2007/2/CE INSPIRE, texto consolidado a 26-11-2024, art. 4.1: conjuntos espaciales electrónicos relativos a zonas bajo jurisdicción de un Estado y en poder de autoridades o terceros con acceso a la red conforme al art. 12; art. 13 regula excepciones/restricciones de acceso público.'}
  ], {texto: 'Según el artículo 4.1 de la Directiva INSPIRE 2007/2/CE, ¿qué condiciones deben cumplir los conjuntos de datos espaciales incluidos en su ámbito? 1) Estar en formato electrónico. 2) Obrar exclusivamente en poder de una autoridad pública. 3) Los datos de terceros se incluyen por el artículo 13. 4) También pueden obrar en poder de terceros a quienes se haya facilitado acceso a la red conforme al artículo 12. 5) Referirse a una zona sobre la que un Estado miembro tenga o ejerza jurisdicción.', opciones: [
    '1, 2 y 5.',
    '1, 3 y 5.',
    '1, 4 y 5.',
    'No son válidas ni la 1 ni la 5.'
  ], respuesta_correcta: 2}, 'La opción 2 es correcta: el artículo 4.1 exige formato electrónico y referencia a una zona bajo jurisdicción del Estado miembro; los conjuntos pueden estar en poder de autoridades públicas o de terceros cuyo acceso a la red se haya facilitado conforme al artículo 12. El artículo 13 trata de excepciones que permiten limitar el acceso público, no de la condición para incluir datos de terceros. Se corrigen errores gramaticales y se refiere la pregunta al ámbito de aplicación de los conjuntos espaciales, no al catálogo de metadatos.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '250', fecha: '2026-10-25', records, edits});
