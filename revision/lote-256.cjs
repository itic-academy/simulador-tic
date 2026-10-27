const apply = require('./aplicar-lote.cjs');

const records = [
  [1596, [74], [], ['SIG', 'georreferenciación', 'coordenadas', 'puntos de control', 'proyección'], [
    {url: 'https://www.usgs.gov/faqs/what-does-georeferenced-mean?qt-news_science_products=0', referencia: 'U.S. Geological Survey, What does “georeferenced” mean?: relaciona el sistema de coordenadas interno de un mapa o imagen digital con un sistema terrestre de coordenadas geográficas; los puntos de control son una técnica para establecer o mejorar esa relación, no la definición completa.'}
  ], {texto: 'En un sistema de información geográfica, ¿qué significa georreferenciar una imagen o capa que aún no está vinculada a un sistema terrestre de coordenadas?', opciones: [
    'Determinar y asignar una referencia espacial que permita situar sus puntos en un sistema de coordenadas conocido; pueden utilizarse puntos de control para calcular la transformación.',
    'Extraer automáticamente coordenadas reales del archivo aunque no contenga referencia espacial ni datos de control.',
    'Asignar puntos de control sin calcular ni guardar una transformación o referencia espacial.',
    'Convertir todas las coordenadas del conjunto a latitud y longitud, con independencia del sistema de referencia elegido.'
  ], respuesta_correcta: 0}, 'Georreferenciar vincula las coordenadas de la imagen o capa con un sistema terrestre conocido. Los puntos de control pueden usarse para calcular la transformación, pero asignar puntos por sí solo no completa el proceso; tampoco se limita a convertir todo a latitud/longitud.', 'corregida'],
  [1597, [56], ['IV-5'], ['copias de seguridad', 'backup completo', 'backup diferencial', 'backup incremental', 'restauración', 'recuperación'], [
    {url: 'https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/backup-overview-sql-server?view=sql-server-ver16', referencia: 'Microsoft Learn, Backup overview (SQL Server): un backup completo contiene los datos respaldados; los diferenciales dependen de una base completa y los incrementales/log requieren una secuencia según el producto y la estrategia.'},
    {url: 'https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/complete-database-restores-full-recovery-model?view=sql-server-ver17', referencia: 'Microsoft Learn, Complete Database Restores: para recuperar se restaura el backup completo y después, cuando existan, los diferenciales y los logs en secuencia; cada dependencia adicional añade pasos de restauración.'}
  ], {texto: 'Si se mantiene una sola copia de seguridad autocontenida para recuperar el conjunto completo de datos, ¿qué tipo suele permitir una restauración más directa, sin depender de copias incrementales o diferenciales posteriores?', opciones: [
    'Completa.',
    'Diferencial, que requiere primero restaurar su copia completa de base.',
    'Incremental, que requiere restaurar la copia base y los incrementos necesarios en orden.',
    'El tipo no influye: toda restauración requiere exactamente la misma cadena de copias.'
  ], respuesta_correcta: 0}, 'Una copia completa contiene el conjunto respaldado y, en el escenario expresado, basta con localizar y restaurar esa copia. Las estrategias diferencial e incremental pueden reducir almacenamiento o tiempo de copia, pero la recuperación depende también de restaurar su copia base y, para incrementales, los incrementos necesarios. Los detalles concretos dependen del producto y de la política.', 'corregida'],
  [1598, [56], ['IV-5'], ['RAID', 'RAID 0', 'RAID 1', 'RAID 3', 'RAID 5', 'capacidad útil', 'redundancia'], [
    {url: 'https://docs.oracle.com/en/operating-systems/oracle-linux/10/stordev/stordev-SoftwareRAIDLevels.html', referencia: 'Oracle Linux 10, Software RAID Levels: RAID-1 escribe datos idénticos en cada unidad espejo y su redundancia hace que la solución consuma más capacidad que RAID-5; RAID-5 distribuye paridad y tiene menor coste de capacidad que el espejo.'},
    {url: 'https://www.ibm.com/support/pages/raid-level-descriptions-servers', referencia: 'IBM Support, RAID level descriptions: RAID 1 duplica datos en discos espejo y requiere el doble de espacio (100 % de sobrecoste de capacidad); RAID 0 no tiene redundancia.'},
    {url: 'https://www.ibm.com/docs/en/power8/8286-41A?topic=da-disk-array-capacities', referencia: 'IBM, Disk array capacities: capacidad útil de RAID 5 = número de discos menos uno por capacidad de disco; el espejo usa la mitad de la capacidad bruta.'}
  ], {texto: 'Suponiendo discos de igual capacidad y comparando la capacidad bruta necesaria para obtener la misma capacidad útil, ¿cuál de estos niveles RAID tiene mayor sobrecoste de almacenamiento por redundancia?', opciones: [
    'RAID 5, que reserva aproximadamente la capacidad de un disco para paridad distribuida.',
    'RAID 3, que emplea paridad dedicada y no duplica íntegramente todos los datos.',
    'RAID 1, que mantiene una copia espejo de los datos y puede requerir aproximadamente el doble de capacidad bruta que la útil.',
    'RAID 0, que distribuye los datos sin redundancia.'
  ], respuesta_correcta: 2}, 'RAID 1 incurre en el mayor sobrecoste entre las opciones porque duplica los datos en el espejo: en el caso habitual de dos discos, la capacidad útil equivale aproximadamente a la mitad de la bruta. RAID 5 y RAID 3 añaden paridad (con organización distinta) y RAID 0 no añade redundancia. Se fija la comparación a igual capacidad útil para evitar ambigüedad por número y tamaño de discos.', 'corregida'],
  [1599, [63, 64], ['II-5', 'III-4'], ['bases de datos', 'SQL', 'vistas', 'privilegios', 'control de acceso', 'filas', 'columnas'], [
    {url: 'https://www.postgresql.org/docs/18/sql-createview.html', referencia: 'PostgreSQL 18, CREATE VIEW: una vista define el resultado de una consulta; los privilegios de la vista pueden habilitar acceso restringido a las relaciones base.'},
    {url: 'https://www.postgresql.org/docs/18/rules-privileges.html', referencia: 'PostgreSQL 18, Rules and Privileges: una vista puede limitar las columnas seleccionadas y, mediante condiciones y configuración de seguridad apropiadas, las filas accesibles; la protección depende de la definición y privilegios, no de que toda vista restrinja por sí misma el acceso.'}
  ], {texto: 'En una base de datos relacional, ¿qué uso puede darse a una vista correctamente definida y acompañada de los privilegios adecuados?', opciones: [
    'Sustituir el esquema conceptual y definir automáticamente la estructura física de todas las tablas.',
    'Exponer solo ciertas columnas y/o filas de las tablas subyacentes a usuarios que reciben acceso a la vista, sin concederles necesariamente acceso directo a toda la tabla.',
    'Crear automáticamente un objeto materializado cada vez que se repite una consulta en una sesión.',
    'Restringir la creación de vistas exclusivamente al propietario del esquema en todos los SGBD.'
  ], respuesta_correcta: 1}, 'Una vista es una relación derivada de una consulta. En sistemas como PostgreSQL puede concederse acceso a la vista y omitirse el acceso directo a la tabla, y su definición puede exponer un subconjunto de columnas o filas. Esto no convierte a todas las vistas en una frontera segura automática: deben configurarse correctamente los privilegios y, cuando proceda, las opciones de seguridad o políticas RLS.', 'corregida'],
  [1600, [56], [], ['MPEG-2', 'ISO/IEC 13818-2', 'vídeo', 'imagen I', 'imagen P', 'imagen B', 'compresión temporal'], [
    {url: 'https://www.iso.org/standard/61152.html', referencia: 'ISO, ISO/IEC 13818-2:2013, Information technology — Generic coding of moving pictures and associated audio information — Part 2: Video: norma vigente que especifica la representación codificada y decodificación del vídeo MPEG-2; edición publicada y confirmada en 2019.'},
    {url: 'https://www.mpeg.org/standards/MPEG-2/', referencia: 'Moving Picture Experts Group, MPEG-2: identifica ISO/IEC 13818-2 como la parte de vídeo de MPEG-2.'}
  ], {texto: '¿Qué conjunto recoge los tres tipos principales de imágenes codificadas definidos en la compresión de vídeo MPEG-2?', opciones: [
    'Imágenes I (intra), P (predictivas) y B (predictivas bidireccionales).',
    'Imágenes I, P y R (de referencia aleatoria).',
    'Imágenes P, B y D (de profundidad).',
    'Imágenes I, B y S (de segmentación).'
  ], respuesta_correcta: 0}, 'MPEG-2 utiliza imágenes I codificadas intra, P predichas respecto de imágenes de referencia anteriores y B con predicción bidireccional. El enunciado original preguntaba cuál no pertenecía al estándar, pero solo ofrecía I, P y B, que sí pertenecen; por ello no había respuesta correcta y se sustituye por una pregunta positiva con una única combinación válida.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '256', fecha: '2026-10-27', records, edits});
