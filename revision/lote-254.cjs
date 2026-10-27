const apply = require('./aplicar-lote.cjs');

const records = [
  [1586, [83], [], ['escáner', 'escáner plano', 'alimentación de hojas', 'escáner de tambor', 'digitalización'], [
    {url: 'https://www.usgs.gov/programs/national-geological-and-geophysical-data-preservation-program/digital-scanning-hardware', referencia: 'U.S. Geological Survey, Digital Scanning Hardware: documenta escáneres planos, alimentadores de hojas y escáneres especializados de tambor para distintos materiales.'},
    {url: 'https://www.oclc.org/research/publications/library/visguides/visguide2.html', referencia: 'OCLC, A Framework for Image Quality and Usability: identifica flatbed, sheet-fed y drum entre los tipos de dispositivos de captura digital.'}
  ], {texto: '¿Cuáles de las siguientes son categorías de escáner?', opciones: [
    'Plano.',
    'De alimentación de hojas (trayectoria).',
    'De tambor.',
    'Todas las anteriores.'
  ], respuesta_correcta: 3}, 'Las tres categorías citadas existen: escáneres planos, de alimentación de hojas y de tambor. Se aclara “de trayectoria” como alimentación de hojas, expresión más transparente para el tipo sheet-fed. La respuesta sigue siendo “todas las anteriores”.', 'corregida'],
  [1587, [60], ['II-2'], ['Debian', 'Ubuntu', 'Linux', 'lastb', 'btmp', 'intentos fallidos de autenticación'], [
    {url: 'https://man7.org/linux/man-pages/man1/last.1.html', referencia: 'Linux man-pages, `last(1)`: `lastb` muestra, por defecto, el registro `/var/log/btmp`, que contiene intentos de inicio de sesión fallidos.'}
  ], null, '`lastb` es la opción correcta: presenta los intentos fallidos registrados en `/var/log/btmp`. El archivo puede no existir o requerir privilegios de lectura según la configuración del sistema; la pregunta trata de la herramienta que consulta ese registro.', 'vigente'],
  [1588, [60], ['II-2', 'IV-1'], ['Linux', 'mount', 'ISO 9660', 'CD-ROM', 'sistemas de archivos', 'punto de montaje'], [
    {url: 'https://man7.org/linux/man-pages/man8/mount.8.html', referencia: 'Linux man-pages, `mount(8)`: forma estándar `mount -t tipo dispositivo directorio`; describe tipo de sistema de archivos, dispositivo origen y punto de montaje.'},
    {url: 'https://www.kernel.org/doc/html/latest/admin-guide/devices.html', referencia: 'Linux Kernel documentation, Linux allocated devices: los dispositivos ópticos SCSI se exponen como `/dev/sr*`; `/dev/cdrom` puede ser un enlace simbólico local al dispositivo correspondiente.'}
  ], {texto: 'En un sistema Linux actual con una unidad óptica expuesta como `/dev/sr0` y un punto de montaje ya creado en `/mnt/cdrom`, ¿qué comando monta un CD-ROM ISO 9660?', opciones: [
    '`setup -t device/cdrom/cab1 /mnt/cdrom`',
    '`install -t iso9660 /dev/sr0 /mnt/cdrom`',
    '`mount -t iso9660 /dev/sr0 /mnt/cdrom`',
    '`grep -t iso9660 /dev/sr0 /mnt/cdrom`'
  ], respuesta_correcta: 2}, 'La opción 3 usa la sintaxis `mount -t tipo dispositivo directorio` y especifica ISO 9660, el dispositivo óptico `/dev/sr0` y el punto de montaje. La pregunta se actualiza desde `/dev/hdb`, nombre propio de la antigua pila IDE; se presupone que el punto existe y que el usuario dispone de los privilegios necesarios.', 'corregida'],
  [1589, [67], ['II-3', 'III-10'], ['Java', 'Java Virtual Machine', 'JVM', 'bytecode', 'portabilidad', 'implementación dependiente de plataforma'], [
    {url: 'https://docs.oracle.com/en/java/javase/26/docs/specs/jvms/', referencia: 'Oracle, The Java Virtual Machine Specification, Java SE 26, §§1.2 y 2: distingue la máquina abstracta y el formato de clase independientes de hardware/SO de una implementación concreta; permite emulación, compilación a CPU, microcódigo o silicio.'}
  ], {texto: '¿Cuál de las siguientes afirmaciones es INCORRECTA sobre la máquina virtual de Java (JVM)?', opciones: [
    'Una implementación concreta de la JVM es independiente del sistema operativo y del procesador anfitriones: el mismo binario puede ejecutarse sin adaptación en cualquier plataforma.',
    'El formato de clase define instrucciones en un formato independiente del hardware y del sistema operativo; cada plataforma necesita una implementación compatible de la JVM.',
    'La especificación describe una máquina abstracta y no impone una técnica única de implementación.',
    'La JVM puede emularse por software o implementarse mediante compilación a una CPU, microcódigo o directamente en silicio.'
  ], respuesta_correcta: 0}, 'La afirmación incorrecta es la opción 1. La especificación de la JVM y el formato de clase son independientes de la plataforma, pero una implementación concreta se adapta al hardware y al sistema anfitrión. La JVM es abstracta y puede emularse, compilarse a instrucciones nativas, implementarse en microcódigo o en silicio; por ello se conserva como verdadera la posibilidad de una implementación hardware.', 'corregida'],
  [1590, [59, 60], ['II-2', 'IV-1'], ['Linux', 'Unix', 'memoria virtual', 'espacio de direcciones', 'swap', 'paginación'], [
    {url: 'https://docs.kernel.org/6.2/admin-guide/cgroup-v1/memory.html', referencia: 'Linux Kernel documentation, Memory Resource Controller, “Kernel Memory Extension”: distingue memoria de kernel y de usuario; la memoria del kernel no se intercambia a swap.'},
    {url: 'https://man7.org/linux/man-pages/man2/mmap.2.html', referencia: 'Linux man-pages, `mmap(2)`: describe mapeos privados y compartidos de regiones de memoria en el espacio virtual de procesos.'},
    {url: 'https://docs.kernel.org/admin-guide/mm/', referencia: 'Linux Kernel documentation, Memory Management: describe memoria virtual, paginación bajo demanda, mapeo de archivos a espacios de procesos y gestión separada de memoria de kernel y de usuario.'}
  ], {texto: 'En Linux, señale la afirmación INCORRECTA sobre memoria virtual:', opciones: [
    'Los procesos pueden mapear regiones de memoria como privadas o compartidas.',
    'Las páginas anónimas de espacio de usuario pueden trasladarse a swap cuando procede.',
    'El código del kernel y sus asignaciones internas se intercambian a la partición swap igual que las páginas anónimas de los procesos.',
    'El kernel administra memoria virtual y paginación bajo demanda.'
  ], respuesta_correcta: 2}, 'La opción 3 es incorrecta: la memoria del kernel no se intercambia a swap como las páginas de espacio de usuario. Los procesos pueden crear mapeos privados o compartidos; la memoria anónima de usuario puede paginarse a swap, y Linux implementa memoria virtual y paginación bajo demanda. Se delimita a Linux para evitar generalizaciones imprecisas sobre todos los sistemas Unix.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '254', fecha: '2026-10-27', records, edits});
