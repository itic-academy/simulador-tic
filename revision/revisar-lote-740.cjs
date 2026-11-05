const apply = require('./aplicar-lote.cjs');
const oracleDml = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/DELETE.html';
const oracleSqlRef = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/sql-language-reference.pdf';
const odbc = 'https://learn.microsoft.com/en-us/sql/odbc/reference/what-is-odbc?view=sql-server-ver17';
const oleDb = 'https://learn.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/ole-db-providers';
const oraclePlsql = 'https://www.oracle.com/a/tech/docs/why-use-plsql-whitepaper-10.pdf';
const oraclePlsqlDocs = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/lnpls/overview.html';
const chenDoi = 'https://doi.org/10.1145/320434.320440';
const chenPaper = 'https://openlib.org/home/krichel/courses/lis512/readings/chen76theentity-relationship.pdf';
const gnuFree = 'https://www.gnu.org/philosophy/free-sw.en.html';
const gnuSelling = 'https://www.gnu.org/philosophy/selling.en.html';
const procurement = 'https://www.gov.uk/guidance/be-open-and-use-open-source';
const euPolicy = 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52026DC0288';
const dbCourse = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const libreCourse = 'https://drive.google.com/file/d/18qm2iCLcxLReK_TkqQWIm26S38HXEDYr/view?usp=drivesdk';
apply({
  numero: '740', fecha: '2026-11-05',
  records: [
    [4021, ['64'], ['II-5'], ['SQL', 'DML', 'DELETE', 'manipulación de datos'], [
      { url: oracleDml, referencia: 'Oracle AI Database 26 SQL Language Reference, sentencia DELETE: eliminación de filas; sentencia clasificada como DML.' },
      { url: oracleSqlRef, referencia: 'Oracle AI Database 26 SQL Language Reference, capítulo “Types of SQL Statements”: enumera DELETE entre las sentencias DML.' }
    ], '', 'La clave DELETE es correcta: Oracle AI Database 26 clasifica expresamente DELETE como sentencia del lenguaje de manipulación de datos (DML), mientras CREATE, ALTER y DROP aparecen como sentencias DDL. Se mantiene una redacción general sobre la clasificación SQL, que no depende de la plataforma.', 'vigente'],
    [4022, ['64'], ['II-5'], ['SGBD', 'DBMS', 'interfaces de acceso a bases de datos', 'ODBC', 'OLE DB'], [
      { url: odbc, referencia: 'Microsoft Learn, What Is ODBC?: ODBC es una especificación/API para acceder a datos mediante drivers independientes del DBMS.' },
      { url: oleDb, referencia: 'Microsoft Learn, OLE DB providers: OLE DB define un conjunto de interfaces COM para acceso uniforme a fuentes diversas.' }
    ], '', 'La clave pretendida sigue siendo la tercera opción, pero el original decía «DMBS», errata de DBMS, y confundía «estándar de interfaz» con herramienta o producto. Se pregunta ahora qué término designa el propio sistema gestor y no una API de acceso: SGBD/DBMS. ODBC y OLE DB son interfaces/APIs; RDO fue una API histórica de acceso remoto de Microsoft. La corrección evita tener que decidir si RDO es un estándar abierto o una interfaz propietaria. El bloque académico 29 estudia las capas actuales de acceso (ODBC/JDBC/ADO.NET/ORM) y se enlaza como contexto curricular.', 'corregida'],
    [4023, ['64'], ['II-5'], ['SQL', 'lenguaje declarativo', 'lenguajes de consulta', 'PL/SQL'], [
      { url: oraclePlsql, referencia: 'Oracle, Why Use PL/SQL?: una sentencia SQL expresa el efecto deseado sin describir cómo lograrlo; por eso SQL se clasifica como declarativo.' },
      { url: oraclePlsqlDocs, referencia: 'Oracle AI Database 26 PL/SQL Language Reference: PL/SQL se identifica expresamente como extensión procedural de SQL.' }
    ], '', 'La respuesta declarativo es correcta para SQL: la sentencia expresa la operación o el resultado deseado y el gestor determina cómo ejecutarla. Se acota la pregunta porque PL/SQL, T-SQL y otras extensiones añaden construcciones procedimentales; no deben confundirse con la naturaleza declarativa de una sentencia SQL ordinaria.', 'corregida'],
    [4024, ['89'], ['III-4'], ['modelo entidad-relación', 'entidad débil', 'dependencia de existencia', 'clave parcial'], [
      { url: chenDoi, referencia: 'Peter P. Chen, “The Entity-Relationship Model—Toward a Unified View of Data”, ACM Transactions on Database Systems 1(1), 1976, DOI 10.1145/320434.320440.' },
      { url: chenPaper, referencia: 'Artículo original de Chen, §§2.2 y 3.2, figura 9: DEPENDENT se identifica mediante el nombre y la clave primaria de EMPLOYEE; su existencia depende de la entidad propietaria.' }
    ], '', 'La clave «entidad débil» se hace válida al precisar el criterio conceptual: FAMILIAR no puede identificarse con atributos propios; su clave parcial se combina con la clave de EMPLEADO y su existencia depende del empleado propietario. Chen usa precisamente el ejemplo EMPLOYEE–DEPENDENT y define la clave de la entidad débil con la clave del propietario. Una regla de borrado en cascada, por sí sola, no convierte necesariamente una entidad en débil; es una decisión de integridad/implementación.', 'corregida'],
    [4025, ['69'], ['II-14'], ['software libre', 'software propietario', 'licencias', 'precio', 'coste total de propiedad'], [
      { url: gnuFree, referencia: 'GNU/Free Software Foundation, What is Free Software?: libertad se refiere a derechos de uso, estudio, modificación y redistribución, no al precio; se puede obtener gratis o pagar por copias.' },
      { url: gnuSelling, referencia: 'GNU/Free Software Foundation, Selling Free Software: las copias de software libre pueden distribuirse a cualquier precio, incluso gratis.' },
      { url: procurement, referencia: 'GOV.UK, Be open and use open source: evaluar costes iniciales, migración, salida, transición, soporte y operación; el código abierto no implica coste total cero.' },
      { url: euPolicy, referencia: 'Comisión Europea, COM(2026) 288 final: en contratación comparar coste total de propiedad, con costes de cambio y dependencia del proveedor.' }
    ], '', 'Se mantiene la alternativa «no hay una respuesta general», pero se distinguen libertad de licencia y precio. La FSF documenta que una copia de software libre puede ser gratis o venderse por cualquier precio; un programa propietario también puede distribuirse sin precio inicial. Además, el coste de adquisición no equivale al coste total: migración, salida, soporte, formación, integración y operación pueden cambiar la comparación entre soluciones. El material académico del bloque 69 (Tema 069) desarrolla software libre, propietario y licencias; es un documento antiguo de Drive, por lo que las conclusiones económicas se contrastan además con las guías públicas actuales.', 'corregida']
  ],
  edits: {
    4021: { texto: '¿Cuál de estas sentencias SQL pertenece al lenguaje de manipulación de datos (DML)?', opciones: ['CREATE.', 'ALTER.', 'DELETE.', 'DROP.'], respuesta_correcta: 2 },
    4022: { texto: '¿Cuál de estos términos designa un sistema gestor de bases de datos (SGBD/DBMS), y no una API o interfaz de acceso a datos?', opciones: ['ODBC (Open Database Connectivity).', 'RDO (Remote Data Objects).', 'SGBD (Sistema de Gestión de Bases de Datos).', 'OLE DB (Object Linking and Embedding, Database).'], respuesta_correcta: 2 },
    4023: { texto: 'En una sentencia SQL ordinaria, ¿cómo se especifica principalmente la consulta?', opciones: ['De forma procedimental, detallando paso a paso el algoritmo de acceso.', 'De forma declarativa, indicando qué datos u operación se desean sin fijar el plan físico.', 'Como una definición de clases y objetos.', 'Mediante una secuencia de eventos de interfaz.'], respuesta_correcta: 1 },
    4024: { texto: 'En un modelo entidad-relación, FAMILIAR depende de EMPLEADO para existir y no tiene una clave propia que lo identifique: se identifica mediante una clave parcial junto con la clave de EMPLEADO. ¿Cómo se clasifica FAMILIAR?', opciones: ['Como entidad fuerte, identificable de forma independiente.', 'Como atributo multivaluado de EMPLEADO necesariamente.', 'Como entidad débil, identificada mediante su entidad propietaria.', 'Como relación ternaria.'], respuesta_correcta: 2 },
    4025: { texto: 'Al comparar el coste de adquisición del software libre (libre en el sentido de sus libertades) y el software propietario, ¿qué afirmación general es correcta?', opciones: ['El software libre siempre tiene menor coste total.', 'El software propietario siempre tiene mayor precio de licencia.', 'Ambos tipos necesariamente tienen el mismo precio.', 'No puede establecerse una regla universal: el precio y el coste total dependen del producto, licencia, soporte, integración, migración y operación.'], respuesta_correcta: 3 }
  }
});
