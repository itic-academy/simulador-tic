const apply=require('./aplicar-lote.cjs');
const fips='https://www.govinfo.gov/content/pkg/GOVPUB-C13-34d692548be2e76a4af31ba0cf22c936/pdf/GOVPUB-C13-34d692548be2e76a4af31ba0cf22c936.pdf';
const iso='https://committee.iso.org/standard/16661.html?browse=ics';
const count='https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/COUNT.html';
const aggregates='https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/Aggregate-Functions.html';
const triggers='https://docs.oracle.com/en/database/oracle/oracle-database/26/tdddg/triggers.html';
const dmlTriggers='https://docs.oracle.com/en/database/oracle/oracle-database/26/lnpls/dml-triggers.html';
const codd='https://doi.org/10.1145/362384.362685';
const revoke='https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/REVOKE.html';
const grant='https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/GRANT.html';
apply({numero:'746',fecha:'2026-11-05',records:[
 [4051,['64'],['II-5'],['SQL','SQL interactivo','SQL embebido','lenguaje de módulos'],[
  {url:fips,referencia:'NIST/FIPS 127, basado en ANSI X3.135-1986: especifica DDL/DML y capacidades de procesamiento directo, lenguaje de módulos y facilidades de SQL embebido en lenguajes anfitriones.'},
  {url:iso,referencia:'ISO, ISO 9075:1987, edición histórica de SQL; catálogo registra su retirada en 1989.'}
 ],'', 'Se corrige la traducción impropia «relacionalmente/paralelamente». Las formas históricas de interacción documentadas incluyen SQL directo/interactivo, SQL embebido en un lenguaje anfitrión y módulos SQL; ejecutar sentencias “relacionalmente” o en paralelo no es una modalidad de interfaz. El enunciado se refiere explícitamente a la taxonomía histórica y no la presenta como descripción exhaustiva de todas las interfaces actuales.', 'corregida'],
 [4052,['64'],['II-5'],['SQL','COUNT','función agregada','NULL','GROUP BY'],[
  {url:count,referencia:'Oracle AI Database 26 SQL Language Reference, COUNT: COUNT(expr) cuenta filas en las que la expresión no es NULL; COUNT(*) cuenta todas las filas, incluidos duplicados y valores NULL.'},
  {url:aggregates,referencia:'Oracle AI Database 26, Aggregate Functions: se pueden aplicar agregados sobre todas las filas sin GROUP BY; GROUP BY forma grupos cuando se desea.'}
 ],'', 'COUNT no exige el asterisco ni GROUP BY. Se distingue COUNT(*) —todas las filas— de COUNT(expr) —filas donde expr no es NULL— y COUNT(DISTINCT expr) —valores no nulos distintos—. La cláusula GROUP BY solo es necesaria para calcular resultados por grupos; sin ella, un agregado opera sobre el conjunto consultado.', 'corregida'],
 [4053,['63','64'],['II-5','IV-2'],['SGBD','trigger','disparador','evento','DML','DDL'],[
  {url:triggers,referencia:'Oracle AI Database 26, About Triggers: unidad PL/SQL almacenada que se ejecuta automáticamente al producirse un evento especificado; este puede asociarse a tabla, vista, esquema o base de datos e incluir DML, DDL y eventos de base de datos.'},
  {url:dmlTriggers,referencia:'Oracle AI Database 26, DML Triggers: eventos INSERT, UPDATE y DELETE, y puntos BEFORE/AFTER de sentencia o fila; también INSTEAD OF sobre vistas.'}
 ],'', 'La definición original solo contemplaba operaciones DML sobre tablas y el intento de realizarlas. Se generaliza con alcance Oracle: un trigger habilitado se dispara automáticamente ante un evento especificado, que puede ser DML, DDL o de base de datos; los disparadores DML pueden asociarse también a vistas y tener distintos puntos de ejecución. No es un puntero, log ni organización física de filas.', 'corregida'],
 [4054,['64'],['III-4'],['modelo relacional','Codd','teoría de conjuntos','lógica de predicados','integridad'],[
  {url:codd,referencia:'E. F. Codd, A Relational Model of Data for Large Shared Data Banks (1970), artículo fundacional del modelo relacional; emplea relaciones y fundamenta operaciones y derivabilidad relacional.'}
 ],'', 'Se confirma la opción basada en teoría de conjuntos y lógica de predicados. El modelo relacional fue propuesto por Edgar F. Codd, no por Peter Chen (cuyo trabajo clásico es el modelo entidad-relación); el esquema relacional admite restricciones de integridad que expresan propiedades semánticas.', 'vigente'],
 [4055,['64'],['II-5'],['SQL','REVOKE','privilegios','control de acceso','seguridad de base de datos'],[
  {url:revoke,referencia:'Oracle AI Database 26 SQL Language Reference, REVOKE: elimina privilegios de sistema, de objeto o roles concedidos a usuarios/roles/program units.'},
  {url:grant,referencia:'Oracle AI Database 26 SQL Language Reference, GRANT: concede privilegios o roles; se consulta junto con REVOKE para expresar de modo inequívoco la operación inversa.'}
 ],'', 'Se mantiene REVOKE como respuesta funcional, pero se elimina la clasificación universal del comando como DCL: las taxonomías SQL varían; por ejemplo, la documentación Oracle agrupa GRANT y REVOKE bajo sus tipos de sentencias DDL. El nuevo enunciado pregunta por el efecto inequívoco y acotado a Oracle: retirar privilegios o roles concedidos.', 'corregida']
],edits:{
 4051:{texto:'Según los modos de procesamiento descritos en la especificación histórica de SQL (ANSI X3.135-1986 / ISO 9075:1987), ¿cuál NO es una modalidad de interacción con SQL?',opciones:['SQL interactivo o directo.','SQL embebido en un programa escrito en un lenguaje anfitrión.','Lenguaje de módulos SQL.','Ejecución “relacional” mediante invocación paralela de sentencias SQL.'],respuesta_correcta:3},
 4052:{texto:'En Oracle SQL, ¿qué cuenta COUNT(expresión)?',opciones:['Siempre cuenta todas las filas, incluso aquellas en que expresión vale NULL.','Cuenta las filas en las que expresión no es NULL; con DISTINCT cuenta solo los valores no nulos distintos.','Cuenta únicamente después de WHERE y no puede aparecer en SELECT.','Solo puede usarse si la consulta contiene GROUP BY.'],respuesta_correcta:1},
 4053:{texto:'En Oracle Database, ¿qué es un trigger (disparador)?',opciones:['Una unidad almacenada que, si está habilitada, se ejecuta automáticamente al producirse un evento especificado, como DML, DDL o un evento de base de datos.', 'Un puntero interno a las filas que acelera el acceso a una tabla.', 'Un archivo de auditoría que registra toda operación realizada sobre la base.', 'Un método de distribución física de filas que paraleliza su acceso.'],respuesta_correcta:0},
 4055:{texto:'En Oracle Database, ¿qué sentencia retira privilegios o roles que se habían concedido a usuarios, roles o unidades de programa?',opciones:['REVOKE.','CREATE.','DELETE.','SELECT.'],respuesta_correcta:0}
}});
