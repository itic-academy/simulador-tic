const apply=require('./aplicar-lote.cjs');
const sql87='https://www.govinfo.gov/content/pkg/GOVPUB-C13-34d692548be2e76a4af31ba0cf22c936/pdf/GOVPUB-C13-34d692548be2e76a4af31ba0cf22c936.pdf';
const iso87='https://committee.iso.org/standard/16661.html?browse=ics';
const integrity='https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/database-concepts.pdf';
const anomalies='https://web.eecs.umich.edu/~michjc/eecs584/Papers/codd_1970.pdf';
const deadlocks='https://docs.oracle.com/en/database/oracle/oracle-database/26/admin/monitoring-the-database.html';
const algebra='https://www.doc.ic.ac.uk/~pjm/db/lectures/relational-algebra-lecture.pdf';
const codd1970='https://doi.org/10.1145/362384.362685';
const jdbc='https://docs.oracle.com/en/java/javase/25/docs/api/java.sql/module-summary.html';
apply({numero:'745',fecha:'2026-11-05',records:[
 [4046,['64'],['II-5'],['SQL','ISO 9075:1987','DDL','DML','consulta'],[
  {url:sql87,referencia:'NIST/FIPS 127 (adopta ANSI X3.135-1986): la especificación clasifica SQL-DDL y SQL-DML y enumera la consulta como operación SQL; fuente primaria normativa estadounidense contemporánea.'},
  {url:iso87,referencia:'ISO catalog, ISO 9075:1987, edición 1 publicada en junio de 1987 y retirada en abril de 1989; se cita como antecedente histórico, no estándar vigente.'}
 ],'', 'La clave histórica (consulta, definición y manipulación) se conserva, pero se formula respecto de ISO 9075:1987 y se aclara que la consulta forma parte de las capacidades de acceso/manipulación de datos del estándar, no un lenguaje separado obligatorio para todo SGBD. ISO registra esta edición como retirada y sustituida desde 1989; no se presenta como SQL actual.', 'historica'],
 [4047,['64'],['II-5'],['integridad referencial','FOREIGN KEY','restricción autorreferente'],[
  {url:integrity,referencia:'Oracle AI Database 26 Concepts, Self-Referential Integrity Constraints: una clave foránea puede hacer referencia a una clave padre de la misma tabla.'}
 ],'', 'El enunciado original daba por supuesto que la integridad referencial carece de sentido con una única tabla. Es falso: una clave foránea puede autorreferenciar una clave primaria o única de esa misma tabla (por ejemplo, EMPLEADO.manager_id → EMPLEADO.employee_id). Se reformula para preguntar por ese mecanismo y la respuesta es integridad referencial.', 'corregida'],
 [4048,['64'],['III-4'],['normalización','anomalías de modificación','inserción','actualización','eliminación','interbloqueo'],[
  {url:anomalies,referencia:'E. F. Codd, A Relational Model of Data for Large Shared Data Banks (1970): fundamenta la normalización y evita anomalías de inserción, actualización y borrado derivadas de redundancia.'},
  {url:deadlocks,referencia:'Oracle AI Database 26, Monitoring the Database: un deadlock surge de transacciones que esperan recursos/locks mantenidos entre sí y se resuelve mediante gestión de transacciones, no mediante normalización del esquema.'}
 ],'', 'Se sustituye “anomalía estructural”, expresión sin definición estable en este contexto, por interbloqueo (deadlock). La normalización reduce redundancia y anomalías de inserción, modificación y eliminación; un deadlock es un conflicto de concurrencia por bloqueos entre transacciones y no se elimina normalizando las tablas.', 'corregida'],
 [4049,['64'],['II-5'],['álgebra relacional','operadores primitivos','selección','proyección','unión','diferencia','producto cartesiano'],[
  {url:codd1970,referencia:'E. F. Codd, A Relational Model of Data for Large Shared Data Banks (1970), artículo original que fundamenta el modelo relacional y sus operaciones.'},
  {url:algebra,referencia:'Imperial College London, Relational Algebra lecture: presenta selección, proyección, producto cartesiano, unión y diferencia como los cinco operadores primitivos de la formulación clásica; otros operadores útiles se derivan de ellos.'}
 ],'', 'El original mezclaba afirmaciones generales y podía hacer depender la clave de cómo se entienda “fundamentales”. Se pregunta por la formulación clásica de cinco operadores primitivos: selección, proyección, unión, diferencia y producto cartesiano. Join e intersección son operaciones derivadas en esta formulación; algunas presentaciones añaden renombrado como operador primitivo, por lo que el alcance queda explícito.', 'corregida'],
 [4050,['64'],['II-5'],['Java','JDBC','API','SQL','acceso a bases de datos'],[
  {url:jdbc,referencia:'Oracle Java SE 25 API, módulo java.sql: API JDBC para acceso y procesamiento de datos en Java, incluidos servicios de conexión, ejecución SQL y lectura de resultados.'}
 ],'', 'Se mantiene la opción correcta y se expande el acrónimo: JDBC (Java Database Connectivity) es la API Java estándar para conectarse a fuentes de datos y ejecutar/procesar operaciones SQL mediante implementaciones o drivers JDBC; no es una interfaz C, ActiveX ni un planificador de procesos.', 'vigente']
],edits:{
 4046:{texto:'En la primera edición de SQL, ISO 9075:1987, ¿qué capacidades del lenguaje se contemplaban entre las siguientes?',opciones:['Solo consulta de datos.','Consulta y manipulación de datos, pero no definición de esquemas.','Consulta y definición de datos, pero no manipulación.','Consulta, definición y manipulación de datos.'],respuesta_correcta:3},
 4047:{texto:'En un esquema SQL compuesto por una única tabla, ¿qué restricción permite expresar que una fila haga referencia a otra fila de esa misma tabla mediante una clave foránea autorreferente?',opciones:['Restricción de dominio.','Restricción de clave.','Integridad de entidad.','Integridad referencial.'],respuesta_correcta:3},
 4048:{texto:'¿Cuál de estos problemas no es una anomalía de modificación que se mitiga mediante la normalización relacional?',opciones:['Anomalía de inserción por dependencias y redundancia.','Anomalía de eliminación por pérdida accidental de otros datos.','Interbloqueo entre transacciones que esperan bloqueos incompatibles.','Anomalía de actualización por duplicación de un mismo hecho.'],respuesta_correcta:2},
 4049:{texto:'En la formulación clásica del álgebra relacional con cinco operadores primitivos, ¿cuál es su conjunto?',opciones:['Selección, proyección, unión, diferencia y join natural.','Selección, proyección, join, intersección y renombrado.','Selección, agregación, ordenación, unión y diferencia.','Selección, proyección, unión, diferencia y producto cartesiano.'],respuesta_correcta:3},
 4050:{texto:'¿Qué describe JDBC (Java Database Connectivity)?',opciones:['Un modelo de objetos ActiveX.','Una CLI diseñada exclusivamente para programas C.','Un planificador de procesos de un monitor transaccional.','Una API Java para conectar con fuentes de datos y ejecutar/procesar SQL mediante drivers JDBC.'],respuesta_correcta:3}
}});
