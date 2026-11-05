const apply=require('./aplicar-lote.cjs');
const outer='https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/SELECT.html';
const algebra='https://www.doc.ic.ac.uk/~pjm/db/lectures/relational-algebra-lecture.pdf';
const sqlxml='https://www.iso.org/standard/35341.html';
const sqlxmlcurrent='https://www.iso.org/standard/76587.html';
const indexed='https://learn.microsoft.com/en-us/sql/relational-databases/views/create-indexed-views?view=sql-server-ver16';
const codd='https://apollo.inf.upol.cz/~urbanec/teaching/2021/data2/files/codd2.pdf';
const commit='https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/transactions.html';
apply({numero:'747',fecha:'2026-11-05',records:[
 [4056,['64'],['II-5'],['álgebra relacional','compatibilidad de unión','outer join','natural join','intersección'],[
  {url:outer,referencia:'Oracle AI Database 26, SELECT/outer_join_clause: FULL OUTER JOIN devuelve los emparejamientos y preserva filas no emparejadas de ambos lados, completando con NULL.'},
  {url:algebra,referencia:'Imperial College London, Relational Algebra: compatibilidad de unión y formulación clásica de cinco operadores primitivos; otros operadores son derivables.'}
 ],'', 'Se acota la afirmación correcta a FULL OUTER JOIN: devuelve las coincidencias y conserva también las filas sin correspondencia de ambos operandos, extendiéndolas con NULL. UNION exige relaciones unión-compatibles; el grado del natural join resta atributos comunes; la intersección no pertenece a la formulación clásica de cinco operadores primitivos y se deriva.', 'corregida'],
 [4057,['64'],['II-5'],['SQL/XML','XML','ISO 9075-14:2003','publicación XML'],[
  {url:sqlxml,referencia:'ISO/IEC 9075-14:2003, SQL/XML: primera edición de la parte XML; define importar/almacenar y manipular XML en SQL, y publicar datos SQL y XML en forma XML. ISO la registra como retirada y sustituida por ediciones posteriores.'},
  {url:sqlxmlcurrent,referencia:'ISO/IEC 9075-14:2023, edición publicada actualmente para SQL/XML; se enlaza para distinguir la primera versión de la norma vigente.'}
 ],'', 'Se corrige la clave de SQL-2006 a SQL:2003. ISO/IEC 9075-14:2003 fue la primera edición SQL/XML e incorporó explícitamente formas de importar, almacenar y manipular XML en una base SQL, además de publicar datos relacionales/XML en XML. Esa edición está retirada; la respuesta identifica el primer estándar, no la edición vigente, que es 2023.', 'corregida'],
 [4058,['64'],['II-5'],['vistas materializadas','SQL Server','indexed views','índice clustered'],[
  {url:indexed,referencia:'Microsoft Learn, Create Indexed Views: crear un índice clustered único materializa y almacena el resultado de la vista; al quitarlo se elimina el conjunto almacenado y vuelve a tratarse como vista estándar.'}
 ],'', 'El término “alternativas en otros SGBD” no tiene una respuesta única: distintos productos ofrecen vistas materializadas, vistas indexadas u otros mecanismos, con semánticas y refresco diferentes. Se restringe al producto Microsoft SQL Server, donde las indexed views almacenan su resultado mediante un índice clustered; no se afirma equivalencia funcional universal con Oracle.', 'corregida'],
 [4059,['64'],['III-4'],['dependencia funcional','modelo relacional','atributos','normalización'],[
  {url:codd,referencia:'Codd, Further Normalization of the Data Base Relational Model (1971), definiciones y tratamiento de dependencias funcionales; X→Y significa que el valor de Y queda determinado unívocamente por X en la relación.'}
 ],'', 'Se cambia “en todo instante” por una condición sobre las instancias legales del esquema: para cualesquiera tuplas t1 y t2, si coinciden en X, deben coincidir en Y. Se escribe X→Y; por tanto, Y depende funcionalmente de X, no al revés. Una coincidencia accidental en una única fotografía de datos no basta para establecer la dependencia del esquema.', 'corregida'],
 [4060,['64'],['II-5'],['SQL','transacción','COMMIT','control de transacciones'],[
  {url:commit,referencia:'Oracle AI Database 26 Concepts, Transactions: COMMIT termina la transacción y hace permanentes sus cambios; ROLLBACK termina deshaciendo los cambios.'}
 ],'', 'La opción COMMIT finaliza la transacción confirmando y haciendo permanentes sus cambios. Se reformula para distinguirla de ROLLBACK, que también puede terminar una transacción, pero deshace el trabajo no confirmado.', 'corregida']
],edits:{
 4056:{texto:'¿Qué afirmación es correcta sobre estas operaciones relacionales?',opciones:['La unión R ∪ S está definida aunque R y S no sean unión-compatibles.','FULL OUTER JOIN conserva las filas emparejadas y también las no emparejadas de ambos operandos, completando con NULL los atributos ausentes.','El grado de R NATURAL JOIN S siempre es grado(R) + grado(S), aunque existan atributos comunes.','En la formulación clásica de cinco operadores primitivos, la intersección es uno de ellos.'],respuesta_correcta:1},
 4057:{texto:'¿Qué edición de la norma SQL introdujo por primera vez la parte SQL/XML con soporte para almacenar/manipular XML y publicar datos SQL en forma XML?',opciones:['SQL:1999.','SQL:2003.','SQL:2006.','SQL:2008.'],respuesta_correcta:1},
 4058:{texto:'En Microsoft SQL Server, ¿cómo se denomina la característica que puede almacenar el resultado de una vista mediante un índice clustered y permitir su reutilización como vista indexada?',opciones:['Vista indexada (indexed view).','Vista normalizada.','Vista física, nombre normativo común a todos los SGBD.','No existe una característica de almacenamiento de resultados de vistas en SQL Server.'],respuesta_correcta:0},
 4059:{texto:'Para un esquema relacional, si toda pareja de tuplas de cualquier instancia legal que coincide en X también coincide en Y, ¿qué dependencia funcional se cumple?',opciones:['Y → X: X determina funcionalmente a Y.','X → Y: Y depende funcionalmente de X.','La relación necesariamente está desnormalizada.','La relación necesariamente incumple 2FN.'],respuesta_correcta:1},
 4060:{texto:'En Oracle SQL, ¿qué sentencia confirma los cambios de la transacción actual y los hace permanentes?',opciones:['SELECT.','END.','COMMIT.','CLOSE.'],respuesta_correcta:2}
}});
