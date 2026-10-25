const apply = require('./aplicar-lote.cjs');

const records = [
  [1561, [75], ['II-4', 'III-15'], ['almacén de datos', 'Data Warehouse', 'OLAP', 'jerarquía geográfica', 'drill-down'], [
    {url: 'https://docs.oracle.com/cd/B13789_01/olap.101/b10333/multimodel.htm', referencia: 'Oracle OLAP, modelo multidimensional, §2.1.4: las jerarquías permiten bajar a niveles inferiores (drill down) para identificar causas y subir (roll up) a niveles agregados.'},
    {url: 'https://docs.oracle.com/cd/A91034_01/DOC/olap.901/a86720/glossry.htm', referencia: 'Oracle OLAP glossary: drilling down expande la vista para incluir valores hijo asociados a valores padre; drilling up la contrae.'}
  ], {texto: 'En un almacén de datos de ventas, la dimensión geográfica muestra primero el total nacional y se quiere consultar el detalle por provincias. ¿Qué operación OLAP permite bajar a ese nivel más detallado de la jerarquía?', opciones: [
    'Drill-Down.',
    'Slice & Dice.',
    'Roll-Up.',
    'Drill-Through.'
  ], respuesta_correcta: 0}, 'Se mantiene Drill-Down. En una jerarquía geográfica, pasar del total nacional a sus provincias desciende a valores hijo y muestra mayor detalle. Roll-Up agrega en sentido inverso; Slice & Dice selecciona o combina subcubos/dimensiones y Drill-Through accede al detalle de origen. Se precisa que la consulta baja un nivel de jerarquía, sin confundir agregación con acceso al origen.', 'vigente'],
  [1562, [69, 73], ['II-14'], ['Moodle', 'LMS', 'GNU GPL', 'licencias', 'SCORM', 'roles'], [
    {url: 'https://docs.moodle.org/500/en/Introduction', referencia: 'MoodleDocs 5.0, About Moodle: Moodle es un LMS de código abierto distribuido bajo GNU General Public License; permite adaptación y extensión para proyectos comerciales y no comerciales conforme a la licencia.'},
    {url: 'https://moodledev.io/general/license', referencia: 'Moodle Developer Resources, License: el paquete Moodle se distribuye bajo GPL; la licencia de la plataforma no se atribuye a BSD.'},
    {url: 'https://docs.moodle.org/400/en/Activity', referencia: 'MoodleDocs, Activities: las actividades estándar incluyen Assignments, Glossary, Quiz y SCORM.'},
    {url: 'https://docs.moodle.org/500/en/roles', referencia: 'MoodleDocs, Managing roles: los administradores gestionan roles, capacidades y asignaciones de permisos.'}
  ], {texto: 'Indique cuál es la afirmación INCORRECTA respecto del software de e-learning Moodle:', opciones: [
    'Incluye actividades estándar como cuestionarios (Quiz), tareas (Assignments) y glosarios (Glossary).',
    'Permite incorporar paquetes de contenidos SCORM.',
    'Está escrito en PHP y el propio software Moodle se distribuye bajo una licencia BSD.',
    'Permite gestionar permisos mediante roles y capacidades asignables a usuarios.'
  ], respuesta_correcta: 2}, 'La opción 2 es incorrecta: Moodle se distribuye bajo GNU GPL, no bajo una licencia BSD. El uso comercial no transforma la GPL en BSD: Moodle puede utilizarse en proyectos comerciales conforme a sus condiciones de licencia. La documentación oficial confirma las actividades Quiz/Assignments/Glossary, la incorporación de SCORM y la gestión de roles/capacidades. Se mantiene la clave, pero se reemplaza la explicación equívoca sobre que una licencia permisiva permita su incorporación comercial sin condiciones.', 'corregida'],
  [1563, [63, 64], ['III-4'], ['SQL', 'READ COMMITTED', 'niveles de aislamiento', 'lectura sucia', 'lectura no repetible', 'lectura fantasma', 'concurrencia'], [
    {url: 'https://www.postgresql.org/docs/18/transaction-iso.html', referencia: 'PostgreSQL 18, §13.2: READ COMMITTED es un nivel de aislamiento; dirty read, nonrepeatable read y phantom read son fenómenos de concurrencia definidos por SQL.'},
    {url: 'https://www.postgresql.org/docs/18/sql-set-transaction.html', referencia: 'PostgreSQL 18, SET TRANSACTION: enumera READ COMMITTED, REPEATABLE READ y SERIALIZABLE como niveles de aislamiento; documenta READ UNCOMMITTED como nivel adicional del estándar.'}
  ], {texto: '¿Cuál de estas opciones es un nivel de aislamiento de transacciones y no uno de los fenómenos de lectura anómala descritos por el estándar SQL?', opciones: [
    'Lectura comprometida (READ COMMITTED).',
    'Lectura no repetible (nonrepeatable read).',
    'Lectura sucia (dirty read).',
    'Lectura fantasma (phantom read).'
  ], respuesta_correcta: 0}, 'La clave READ COMMITTED es correcta: es un nivel de aislamiento SQL. Lectura sucia, no repetible y fantasma son fenómenos de interacción entre transacciones, no niveles de aislamiento. Se explicita la distinción que faltaba en el enunciado original. En READ COMMITTED no se permiten lecturas sucias, aunque pueden darse lecturas no repetibles y fantasma según el estándar; PostgreSQL 18 documenta además su implementación concreta.', 'corregida'],
  [1564, [108, 114], ['IV-11'], ['GPS', 'GNSS', 'órbita terrestre media', 'MEO', '20.200 km', 'satélites'], [
    {url: 'https://www.gps.gov/space-segment', referencia: 'GPS.gov, Space Segment: los satélites GPS orbitan en órbita terrestre media (MEO) a una altitud aproximada de 20.200 km.'}
  ], {texto: '¿A qué altitud aproximada sobre la Tierra orbitan los satélites del sistema estadounidense GPS?', opciones: [
    '5.200 km.',
    '20.200 km.',
    '36.200 km.',
    '45.200 km.'
  ], respuesta_correcta: 1}, 'La respuesta es aproximadamente 20.200 km: GPS.gov sitúa la constelación en órbita terrestre media (MEO), con dos vueltas a la Tierra por día. Se precisa que el reactivo pregunta por el sistema GPS estadounidense, no por todos los sistemas GNSS ni por satélites geoestacionarios.', 'corregida'],
  [1565, [56], [], ['imagen ráster', 'GIF', 'PNG', 'JPEG', 'compresión sin pérdidas', 'compresión con pérdidas'], [
    {url: 'https://www.w3.org/TR/png-3/', referencia: 'W3C Recommendation, Portable Network Graphics (PNG) Specification Third Edition (24-06-2025), §§1–2: PNG se define como formato ráster comprimido sin pérdida.'},
    {url: 'https://pronom.nationalarchives.gov.uk/fmt/4', referencia: 'The National Archives, PRONOM fmt/4 (GIF89a): las imágenes GIF se almacenan con compresión LZW sin pérdida; GIF es indexado y admite hasta 256 colores.'},
    {url: 'https://www.itu.int/ITU-T/recommendations/rec.aspx?id=2633', referencia: 'ITU-T Recommendation T.81 (09/1992), vigente e idéntica a ISO/IEC 10918-1:1994: distingue procesos JPEG DCT con pérdida y proceso DPCM sin pérdida; para las imágenes JPEG comunes se utiliza habitualmente el modo DCT con pérdida.'},
    {url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types', referencia: 'MDN, Image file type and format guide: describe GIF como LZW sin pérdida y JPEG como el formato de compresión con pérdida más extendido para imágenes estáticas; advierte que la conversión a paleta GIF puede degradar imágenes a todo color.'}
  ], {texto: 'En los métodos de codificación habituales de imágenes estáticas, ¿qué afirmación es correcta?', opciones: [
    'GIF (con LZW) y PNG usan compresión sin pérdida; JPEG suele usar compresión con pérdida.',
    'GIF y JPEG usan compresión sin pérdida; PNG usa compresión con pérdida.',
    'JPEG y PNG usan compresión sin pérdida; GIF usa compresión con pérdida.',
    'Todas las anteriores son falsas.'
  ], respuesta_correcta: 0}, 'La opción 0 describe los métodos habituales: LZW de GIF y la compresión PNG son sin pérdida; JPEG suele emplear su codificación DCT con pérdida. Se califica como habitual para no presentar cada formato como una afirmación universal: el estándar JPEG también define un proceso lossless, y convertir una imagen de muchos colores a la paleta limitada de GIF puede perder información antes de aplicar LZW. La formulación conserva la respuesta didáctica y elimina esa generalización engañosa.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '249', fecha: '2026-10-25', records, edits});
