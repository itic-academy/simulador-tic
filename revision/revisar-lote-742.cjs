const apply = require('./aplicar-lote.cjs');
const oracleIntegrity = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/adfns/data-integrity.html';
const oracleConstraint = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/constraint.html';
const oracleDdl = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/tdddg/data-definition-language-ddl-statements.html';
const oracleSqlTypes = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/Types-of-SQL-Statements.html';
const algebra = 'https://courses.cs.duke.edu/spring17/compsci316/lectures/02-relational.pdf';
const codd = 'https://doi.org/10.1145/362384.362685';
const oracleMview = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-MATERIALIZED-VIEW.html';
const oracleRefresh = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/admin/read-only-materialized-view-concepts.html';
const postgresMview = 'https://www.postgresql.org/docs/current/rules-materializedviews.html';
const dbDrive = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
apply({
  numero: '742', fecha: '2026-11-05',
  records: [
    [4031, ['64'], ['II-5'], ['modelo relacional', 'integridad referencial', 'FOREIGN KEY', 'restricciones'], [
      { url: oracleIntegrity, referencia: 'Oracle AI Database 26 Database Development Guide, Enforcing Referential Integrity with FOREIGN KEY Constraints: la FOREIGN KEY impone la correspondencia entre las claves de las tablas hija y padre.' },
      { url: oracleConstraint, referencia: 'Oracle AI Database 26 SQL Language Reference, Foreign Key Constraints: identifica expresamente la restricción FOREIGN KEY como restricción de integridad referencial.' }
    ], '', 'Se pregunta por la restricción declarada en la tabla hija. FOREIGN KEY referencia una clave PRIMARY KEY o UNIQUE de la tabla padre y el SGBD comprueba la integridad referencial al ejecutar las operaciones afectadas. La clave primaria identifica filas de una relación; no es la declaración que expresa la referencia desde la tabla hija.', 'corregida'],
    [4032, ['64'], ['II-5'], ['SQL', 'DDL', 'definición de datos'], [
      { url: oracleDdl, referencia: 'Oracle AI Database 26 Get Started with Database Development, About DDL Statements: DDL significa Data Definition Language y crea, cambia y elimina objetos del esquema.' },
      { url: oracleSqlTypes, referencia: 'Oracle AI Database 26 SQL Language Reference, Types of SQL Statements: clasifica las sentencias SQL de definición de datos (DDL).' }
    ], '', 'DDL significa Data Definition Language (lenguaje de definición de datos). CREATE, ALTER y DROP son ejemplos habituales de sentencias que crean, modifican o eliminan objetos del esquema. El término inglés se traduce por definición, no dimensión ni longitud.', 'corregida'],
    [4033, ['64'], ['II-5'], ['álgebra relacional', 'operadores derivados', 'intersección'], [
      { url: algebra, referencia: 'Duke University, Relational Algebra, diapositiva “Derived operator: intersection”: la intersección se deriva de diferencia como R − (R − S), para esquemas compatibles.' },
      { url: codd, referencia: 'E. F. Codd, A Relational Model of Data for Large Shared Data Banks, Communications of the ACM 13(6), 1970, DOI 10.1145/362384.362685; fundamento del modelo y álgebra relacional.' }
    ], '', 'En el álgebra relacional clásica, intersección no es un operador primitivo necesario: para relaciones unión-compatibles se deriva mediante R ∩ S = R − (R − S). Unión, proyección y selección pertenecen al conjunto usual de operadores primitivos del modelo relacional clásico.', 'corregida'],
    [4034, ['63', '64'], ['II-5'], ['SGBD', 'SQL', 'DDL', 'DML', 'esquema'], [
      { url: oracleDdl, referencia: 'Oracle AI Database 26 Get Started with Database Development, About DDL Statements: DDL crea, cambia y elimina objetos de esquema.' },
      { url: oracleSqlTypes, referencia: 'Oracle AI Database 26 SQL Language Reference, Types of SQL Statements: clasifica DDL y DML como grupos de sentencias SQL.' }
    ], '', 'La pregunta original mezclaba una diferencia válida con los esquemas conceptual/externo de ANSI/SPARC, que no describen con precisión la división general moderna entre DDL y DML. Se reformula según el uso SQL: DDL define o modifica objetos/estructura del esquema; DML consulta o cambia los datos almacenados. Se evita atribuir de forma exclusiva toda vista externa al DDL o al DML.', 'corregida'],
    [4035, ['64', '75'], ['II-4', 'II-5'], ['SGBD', 'SQL', 'vista materializada', 'almacén de datos', 'refresco'], [
      { url: oracleMview, referencia: 'Oracle AI Database 26 SQL Language Reference, CREATE MATERIALIZED VIEW: al crear la vista se ejecuta la subconsulta y se almacenan sus resultados.' },
      { url: oracleRefresh, referencia: 'Oracle AI Database 26 Data Warehousing Guide, materialized view refresh: describe refresco completo, rápido y forzado para mantener la vista coherente con sus tablas maestras.' },
      { url: postgresMview, referencia: 'PostgreSQL documentation, Materialized Views: almacena físicamente el resultado de una consulta y se actualiza con REFRESH MATERIALIZED VIEW.' }
    ], '', 'Una vista materializada conserva en el SGBD el resultado precalculado de una consulta, en forma de objeto con datos almacenados; no es solo la definición de una vista ordinaria. El contenido puede quedar desactualizado y requiere una política de refresco, cuya estrategia depende del gestor. Se elimina “tabla caché”, expresión no uniforme que confundía almacenamiento persistente con caché temporal.', 'corregida']
  ],
  edits: {
    4031: { texto: 'En una relación entre tabla hija y tabla padre, ¿qué restricción declarada en la tabla hija hace cumplir la integridad referencial?', opciones: ['PRIMARY KEY.', 'FOREIGN KEY.', 'CANDIDATE KEY.', 'SUPERKEY.'], respuesta_correcta: 1 },
    4032: { texto: '¿Qué significan las siglas inglesas DDL en el contexto de SQL?', opciones: ['Data Dimension Language.', 'Data Definition Language.', 'Data Dimension Length.', 'Defined Data Length.'], respuesta_correcta: 1 },
    4033: { texto: 'En el álgebra relacional clásica, suponiendo relaciones unión-compatibles, ¿cuál de estos operadores se deriva de otros operadores básicos?', opciones: ['Intersección, expresable mediante diferencia.', 'Unión.', 'Proyección.', 'Selección.'], respuesta_correcta: 0 },
    4034: { texto: 'En SQL, ¿cuál es la diferencia general entre DDL y DML?', opciones: ['DDL solo se ejecuta con precompilador y DML solo con compilador extendido.', 'DDL define o modifica objetos del esquema; DML consulta o modifica los datos almacenados.', 'DDL se limita siempre al esquema conceptual y DML define exclusivamente vistas externas.', 'DDL y DML son nombres de productos ligados a sistemas operativos concretos.'], respuesta_correcta: 1 },
    4035: { texto: '¿Qué caracteriza a una vista materializada en un SGBD?', opciones: ['Almacena físicamente el resultado precalculado de una consulta y requiere una política de actualización o refresco.', 'Guarda solo la definición de la consulta y vuelve a ejecutarla siempre al consultarse, como una vista ordinaria.', 'Es el resultado de ejecutar un procedimiento almacenado, con independencia de que se guarde.', 'Es un conjunto de acciones que se dispara mediante un trigger.'], respuesta_correcta: 0 }
  }
});
