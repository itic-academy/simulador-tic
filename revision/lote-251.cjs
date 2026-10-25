const apply = require('./aplicar-lote.cjs');

const records = [
  [1571, [75], ['III-15'], ['Databricks', 'lakehouse', 'Apache Spark', 'Big Data', 'analítica', 'inteligencia artificial'], [
    {url: 'https://www.databricks.com/product/platform', referencia: 'Databricks Data + AI Platform: la página oficial describe un entorno colaborativo unificado de datos, analítica e IA construido sobre Apache Spark.'},
    {url: 'https://www.databricks.com/product/spark', referencia: 'Databricks, Spark on Databricks: presenta su plataforma lakehouse como entorno para cargas Apache Spark.'}
  ], {texto: 'Según la oferta actual de Databricks, ¿qué plataforma integra analítica de grandes volúmenes e inteligencia artificial en un entorno colaborativo construido sobre Apache Spark?', opciones: [
    'Databricks Data + AI Platform, basada en arquitectura lakehouse.',
    'Data Lake Lakehouse Platform.',
    'Data Mart Lakehouse Platform.',
    'Data Warehouse Lakehouse Platform.'
  ], respuesta_correcta: 0}, 'La respuesta es Databricks Data + AI Platform, que integra ingeniería y analítica de datos e IA en un entorno compartido basado en Apache Spark. Se actualiza el nombre del producto de la clave original —Databricks Lakehouse Platform— para reflejar la denominación vigente, conservando la referencia a lakehouse como arquitectura. La opción de marca se apoya en la documentación del proveedor y no en una especificación neutral.', 'corregida'],
  [1572, [66, 69], ['II-14', 'III-11'], ['.NET', '.NET Runtime', 'MIT', 'software de código abierto', 'licencias', 'distribuciones'], [
    {url: 'https://github.com/dotnet/runtime/blob/main/LICENSE.TXT', referencia: 'Repositorio oficial dotnet/runtime, LICENSE.TXT: el código de este repositorio se distribuye bajo licencia MIT.'},
    {url: 'https://github.com/dotnet/core/blob/main/license-information.md', referencia: 'Repositorio oficial dotnet/core, License Information: el código fuente de .NET usa MIT, pero los productos distribuidos pueden incluir componentes con términos distintos; en Windows se aplica la .NET Library License a ciertas distribuciones.'}
  ], {texto: '¿Qué licencia declara el código fuente del repositorio oficial dotnet/runtime? La pregunta se refiere al código fuente, no a todos los componentes de cada distribución binaria de .NET.', opciones: [
    'Propietaria.',
    'Comercial y sin acceso al código fuente.',
    'MIT, una licencia de código abierto permisiva.',
    'Una única licencia mixta aplicable por igual a todo código y distribución de .NET.'
  ], respuesta_correcta: 2}, 'La respuesta es MIT para el código fuente del repositorio dotnet/runtime. Se precisa el objeto de la pregunta porque «.NET» abarca código, productos y distribuciones que pueden incluir componentes con términos diferentes; por tanto, la afirmación original general sobre la licencia de todo el framework era demasiado amplia.', 'corregida'],
  [1573, [64], ['II-5'], ['modelo relacional', 'SQL', 'clave primaria', 'clave foránea', 'integridad referencial', 'dominio', 'NULL'], [
    {url: 'https://www.postgresql.org/docs/current/ddl-constraints.html', referencia: 'PostgreSQL 18, §5.5.4–5.5.5: una clave primaria, incluso compuesta, exige unicidad y NOT NULL en sus columnas; una clave foránea es una restricción explícita que exige correspondencia, y sus columnas pueden admitir NULL si no se declara NOT NULL.'}
  ], {texto: 'En el modelo relacional, que dos atributos tengan el mismo dominio no establece por sí solo una relación entre ellos. ¿Qué afirmación es FALSA?', opciones: [
    'Cada columna que forma parte de una clave primaria, simple o compuesta, debe tener un valor no nulo.',
    'Si un atributo tiene el mismo dominio que la clave primaria de otra relación, sus valores deben coincidir con los de esa clave aunque no se haya declarado una clave foránea.',
    'Una clave primaria compuesta garantiza la unicidad de la combinación de sus columnas, pero no necesariamente la unicidad de cada columna por separado.',
    'Una columna que participa en una clave foránea puede admitir NULL si no forma parte de una restricción que lo prohíba.'
  ], respuesta_correcta: 1}, 'La afirmación falsa es la opción 1: compartir dominio solo significa que los valores pertenecen a un mismo conjunto de valores posibles; la integridad referencial requiere una restricción de clave foránea explícita. La clave primaria (también si es compuesta) exige valores únicos y no nulos en sus columnas. Una clave foránea que no integra una clave primaria puede admitir NULL si no se añade NOT NULL; en tal caso no se exige correspondencia para el valor nulo según las reglas de referencia habituales. Se reemplaza la pregunta original, que infería una relación de clave foránea sin declararla y no definía si A era parte de una PK o una FK.', 'corregida'],
  [1574, [67], ['III-10'], ['Java', 'JVM', 'memoria', 'heap', 'objetos', 'arrays', 'garbage collector'], [
    {url: 'https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5.3', referencia: 'Especificación de la JVM, §2.5.3: el heap es compartido por los hilos de la JVM y es el área de ejecución de la que se asigna memoria para todas las instancias de clases y arrays; su almacenamiento se recupera mediante gestión automática.'}
  ], {texto: 'En la máquina virtual de Java (JVM), ¿qué área de ejecución compartida es aquella desde la que se asigna memoria para las instancias de clases y los arrays?', opciones: [
    'La pila de cada hilo (Java Virtual Machine Stack).',
    'El heap.',
    'El área de métodos.',
    'El registro de contador de programa (PC).' 
  ], respuesta_correcta: 1}, 'La respuesta es heap. La especificación define esta área como compartida por los hilos de la JVM y como origen de asignación para las instancias de clases y los arrays; la pila es propia de cada hilo y el área de métodos contiene estructuras asociadas a las clases. Se sustituye «almacenamiento de todos los objetos» por la formulación normativa precisa de asignación, que evita sugerir que la JVM impone una representación física concreta.', 'corregida'],
  [1575, [80, 81], ['I-6'], ['PKI', 'autoridad de certificación', 'CA', 'certificado digital', 'clave pública', 'identidad', 'eIDAS'], [
    {url: 'https://datatracker.ietf.org/doc/html/rfc4949#section-3', referencia: 'IETF RFC 4949, Internet Security Glossary, entrada Certification Authority (CA): entidad que emite certificados digitales, especialmente X.509, y avala el vínculo entre los datos que contiene el certificado.'},
    {url: 'https://www.rfc-editor.org/rfc/rfc5280.html', referencia: 'IETF RFC 5280, Internet X.509 PKI Certificate and CRL Profile: perfil de certificados de clave pública X.509 emitidos y firmados por una autoridad certificadora; la confianza depende de la cadena y las políticas aplicables.'}
  ], {texto: 'En una infraestructura de clave pública (PKI), ¿qué función caracteriza a una autoridad de certificación (AC o CA)?', opciones: [
    'Es una entidad que emite certificados digitales y avala, según una política de certificación, el vínculo entre los datos del sujeto y la clave pública incluida en el certificado.',
    'Es necesariamente un órgano judicial que resuelve disputas sobre identidad.',
    'Es una empresa que proporciona seguridad a todos los certificados y, en la actualidad, sólo puede ser Microsoft.',
    'Es un órgano administrativo que dicta con carácter general las normas de certificación digital de la Unión Europea.'
  ], respuesta_correcta: 0}, 'La opción 0 define una autoridad de certificación: emite certificados y avala el vínculo entre el sujeto y la clave pública conforme a una política. No es necesariamente una empresa concreta ni un regulador que dicte normas. La formulación evita decir que la CA custodia o certifica la clave privada del usuario; el certificado X.509 contiene la clave pública.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '251', fecha: '2026-10-25', records, edits});
