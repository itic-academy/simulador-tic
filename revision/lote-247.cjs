const apply = require('./aplicar-lote.cjs');

const records = [
  [1551, [59], ['II-2', 'III-5'], ['algoritmo de Peterson', 'exclusión mutua', 'sección crítica', 'concurrencia'], [
    {url: 'https://doi.org/10.1016/0020-0190(81)90106-X', referencia: 'G. L. Peterson, “Myths about the mutual exclusion problem”, Information Processing Letters 12(3), 1981, pp. 115–116: presenta la solución de Peterson al problema de exclusión mutua para dos procesos.'},
    {url: 'https://doi.org/10.1145/357195.357199', referencia: 'G. L. Peterson, “A New Solution to Lamport’s Concurrent Programming Problem Using Small Shared Variables”, ACM TOPLAS 5(1), 1983: formula la solución de exclusión mutua y su extensión.'}
  ], null, 'La respuesta original es correcta: el algoritmo de Peterson ofrece una solución software al problema de exclusión mutua entre procesos concurrentes (en su formulación clásica para dos procesos), coordinando el acceso a la sección crítica mediante variables compartidas. No es un algoritmo de ordenación ni una política de reemplazo de páginas.', 'vigente'],
  [1552, [63, 64, 89], ['II-5', 'III-4'], ['modelo entidad-relación', 'dominio', 'atributo', 'conjunto de valores'], 'https://www.postgresql.org/docs/18/sql-createdomain.html', 'PostgreSQL 18, CREATE DOMAIN: un dominio es un tipo con restricciones opcionales sobre el conjunto de valores permitidos; el concepto del modelo ER expresa el conjunto de valores homogéneos que puede tomar un atributo.', 'La respuesta correcta es “Dominio” y se mantiene. En el modelo entidad-relación, el dominio especifica el conjunto de valores admisibles para un atributo; no es el atributo mismo, una entidad ni el diccionario que documenta el modelo. La definición se expresa como conjunto de valores posibles, sin restringirla a un tipo concreto de SGBD.', 'vigente'],
  [1553, [52], ['II-1'], ['arquitectura de computadores', 'pipelining', 'segmentación', 'solapamiento de instrucciones'], [
    {url: 'https://www.cs.cornell.edu/courses/cs3410/2026sp/notes/arch.html', referencia: 'Cornell University, CS 3410, Spring 2026, “CPU Architecture”: define el procesador segmentado como el solapamiento de ejecuciones de instrucciones, procesando simultáneamente etapas de instrucciones diferentes.'},
    {url: 'https://www.intel.com/content/dam/develop/external/us/en/documents-tps/253665-sdm-vol-11.pdf', referencia: 'Intel 64 and IA-32 Architectures Software Developer’s Manual, Volume 1: describe la canalización de instrucciones y la ejecución superescalar/dinámica de instrucciones.'}
  ], null, 'La clave Pipelining (segmentación o procesamiento en cauce) es correcta. La técnica divide el procesamiento de instrucciones en etapas y solapa en el tiempo etapas pertenecientes a instrucciones distintas; no significa que una única instrucción se ejecute completa varias veces a la vez ni que solo exista multiplexación de recursos.', 'corregida'],
  [1554, [64], ['II-5', 'III-4'], ['SQL', 'subconsulta', 'comparación por filas', 'IN', 'ITEM'], [
    {url: 'https://www.postgresql.org/docs/18/functions-subquery.html', referencia: 'PostgreSQL 18, §9.24: `row_constructor IN (subquery)` compara cada fila proyectada con la fila de la izquierda y exige igual número de columnas; la forma `=` frente a subconsulta requiere como máximo una fila.'},
    {url: 'https://www.postgresql.org/docs/18/functions-comparisons.html', referencia: 'PostgreSQL 18, §9.25.5: una comparación entre constructores de fila compara los campos correspondientes y requiere igual número de campos.'}
  ], null, 'La opción corregida con `IN` sobre la pareja `(prodid, qty)` y el filtro `ordid <> 605` devuelve las líneas de otras órdenes cuyo producto y cantidad coinciden con alguna línea de la orden 605, sin mostrar la propia orden 605. Se normaliza el error tipográfico `ordeid` a `ordid`, se usa el mismo nombre de tabla `ITEM` y se identifica expresamente la sintaxis de comparación por filas de PostgreSQL/SQL compatible. La igualdad escalar frente a una subconsulta no es adecuada si esta devuelve varias filas.', 'corregida'],
  [1555, [80], ['I-6'], ['X.500', 'X.501', 'LDAP', 'ASN.1', 'DSA', 'DUA', 'DMD'], [
    {url: 'https://www.itu.int/ITU-T/recommendations/rec.aspx?lang=en&rec=14032', referencia: 'ITU-T X.501 (10/2019), vigente, e ISO/IEC 9594-2: modelos del Directorio; §6.4 define la DMD como una organización que gestiona los componentes funcionales, con uno o más DSA/servidores LDAP y cero o más DUA/clientes LDAP.'},
    {url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.500-201910-I%21%21PDF-E&lang=e&type=items', referencia: 'ITU-T X.500 (10/2019), vigente: §9.2 describe la DMD como un conjunto gestionado por una organización de uno o más DSA y/o servidores LDAP y cero o más DUA y/o clientes LDAP.'},
    {url: 'https://www.rfc-editor.org/rfc/rfc4514.html', referencia: 'RFC 4514, §1: los DN se estructuran con ASN.1 en X.500; LDAP define para ellos una representación textual UTF-8.'},
    {url: 'https://www.rfc-editor.org/rfc/rfc4511.html', referencia: 'RFC 4511, §§4.6 y 4.8: LDAP define modificaciones de atributos y una operación Delete separada para solicitar la eliminación de una entrada.'}
  ], null, 'La pregunta se reescribe porque la opción sobre REMOVE/DAP confundía nombres y equivalencias: LDAP sí dispone de una operación `Delete` para eliminar entradas, aunque su protocolo no la denomina `REMOVE`; además, una DMD no exige que haya DUA. Según X.501 vigente, la DMD la gestiona una organización y comprende uno o más agentes/servidores de directorio y cero o más agentes/solicitantes cliente. La opción que impone un DUA y un esquema como componentes mínimos es la incorrecta. Se conserva el contenido original en el registro y se evita que el uso de la palabra “servicio” o una diferencia de nombre de operación produzca dos interpretaciones.', 'corregida']
];

const edits = {
  1553: {texto: '¿Cómo se denomina la técnica de arquitectura de procesadores que divide el procesamiento en etapas y permite solapar, en un mismo intervalo, etapas de instrucciones distintas?', opciones: ['Flujo de datos.', 'Multiplexación de recursos.', 'Clustering.', 'Pipelining o segmentación en cauce.'], respuesta_correcta: 3},
  1554: {texto: 'En una tabla `ITEM(ordid, prodid, qty)`, ¿qué consulta devuelve el identificador, producto y cantidad de las líneas de órdenes distintas de la 605 cuyo par `(prodid, qty)` coincide con alguna línea de la orden 605? Se asume sintaxis de comparación por filas compatible con PostgreSQL.', opciones: [
    'SELECT i.ordid, i.prodid, i.qty FROM ITEM i WHERE (i.prodid, i.qty) IN (SELECT prodid, qty FROM ITEM WHERE ordid = 605) AND i.ordid <> 605;',
    'SELECT i.ordid, i.prodid, i.qty FROM ITEM i WHERE (i.prodid, i.qty) IN (SELECT prodid, qty FROM ITEM WHERE ordid = 605);',
    'SELECT i.ordid, i.prodid, i.qty FROM ITEM i WHERE (i.prodid, i.qty) = (SELECT prodid, qty FROM ITEM WHERE ordid = 605) AND i.ordid <> 605;',
    'SELECT i.ordid, i.prodid, i.qty FROM ITEM i WHERE (i.prodid, i.qty) NOT IN (SELECT prodid, qty FROM ITEM WHERE ordid = 605) AND i.ordid <> 605;'
  ], respuesta_correcta: 0},
  1555: {texto: 'Según ITU-T X.501 y las especificaciones LDAP, señale la afirmación incorrecta sobre el Directorio y sus dominios de gestión:', opciones: [
    'Un Directorio Management Domain es gestionado por una única organización.',
    'Un Directory Management Domain puede comprender uno o más DSA y/o servidores LDAP, junto con cero o más DUA y/o clientes LDAP.',
    'LDAP define una operación Delete para solicitar la eliminación de una entrada; su nombre no es `REMOVE`.',
    'Todo Directory Management Domain debe contener obligatoriamente al menos un DUA y un esquema como componentes mínimos.'
  ], respuesta_correcta: 3}
};

apply({numero: '247', fecha: '2026-10-25', records, edits});
