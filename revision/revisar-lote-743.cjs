const apply = require('./aplicar-lote.cjs');
const odbc = 'https://learn.microsoft.com/en-us/sql/odbc/reference/';
const codd1970 = 'https://web.eecs.umich.edu/~michjc/eecs584/Papers/codd_1970.pdf';
const codd1971 = 'https://apollo.inf.upol.cz/~urbanec/teaching/2021/data2/files/codd2.pdf';
const coddDoi = 'https://doi.org/10.1145/1734714.1734716';
const graphText = 'https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf';
const dblink = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/CREATE-DATABASE-LINK.html';
const distributed = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/admin/managing-a-distributed-database.html';
const dbCourse = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const aiCourse = 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk';
apply({
  numero: '743', fecha: '2026-11-05',
  records: [
    [4036, ['64'], ['II-5'], ['ODBC', 'interoperabilidad', 'API', 'drivers'], [
      { url: odbc, referencia: 'Microsoft Learn ODBC API Reference, ODBC Overview: ODBC es una API ampliamente aceptada para acceso a bases de datos, basada en CLI, con SQL como lenguaje de acceso y drivers específicos por gestor.' },
      { url: 'https://learn.microsoft.com/en-us/sql/odbc/microsoft-open-database-connectivity-odbc', referencia: 'Microsoft Open Database Connectivity: interfaz C para que aplicaciones accedan a datos en distintos DBMS.' }
    ], '', 'Se delimita ODBC como API CLI común para que una aplicación acceda a distintos SGBD por medio de drivers y use SQL. No se presenta como “acceso universal” a cualquier clase de datos —esa descripción se asocia a Universal Data Access/OLE DB— ni como una interfaz exclusiva de C++.', 'corregida'],
    [4037, ['64'], ['III-4'], ['modelo relacional', 'normalización', '3FN', 'dependencias funcionales'], [
      { url: codd1971, referencia: 'E. F. Codd, Further Normalization of the Data Base Relational Model (IBM RJ909, 1971), §3.3: 3FN exige 2FN y dependencia no transitiva de atributos no primos respecto de cada clave candidata.' },
      { url: coddDoi, referencia: 'E. F. Codd, Normalized Data Base Structure: A Brief Tutorial, SIGFIDET 1971, DOI 10.1145/1734714.1734716.' }
    ], '', 'El criterio del original de 3FN es esencialmente el correcto, pero restringía la definición a la clave primaria. Codd formula la condición respecto de cada clave candidata; además, la definición completa exige que la relación ya esté en 2FN. Se corrige de forma concordante con la revisión individual del ítem 4028.', 'corregida'],
    [4038, [], ['III-5'], ['grafos', 'grado de vértice', 'grafo regular', 'K4'], [
      { url: graphText, referencia: 'Reinhard Diestel, Graph Theory, §1.2, Degree and Neighbourhood: un grafo es k-regular si todos sus vértices tienen grado k; grado 3 se denomina cúbico.' },
      { url: aiCourse, referencia: 'ITIC Academy, bloque 32 «Inteligencia artificial y ciencia de datos», versión 2026.1, apartados A2-D5 y §2.10: grafos, vértices y aristas.' }
    ], '', 'Se asume explícitamente un grafo simple no dirigido: cada arista es un par no ordenado, sin lazos ni aristas repetidas. En la última opción, el conjunto de seis pares contiene todas las aristas posibles de K4; cada uno de sus cuatro vértices incide en tres aristas, por lo que es 3-regular. En la tercera opción los grados son 3, 3, 2 y 2. En el programa oficial revisado no hay epígrafe A1 específico de estructuras/grafos; la clasificación directa corresponde al A2-III-5.', 'corregida'],
    [4039, ['63', '64'], ['II-5', 'IV-2'], ['Oracle', 'database link', 'base de datos distribuida', 'acceso remoto'], [
      { url: dblink, referencia: 'Oracle AI Database 26 SQL Language Reference, CREATE DATABASE LINK: objeto de esquema que permite acceder a objetos de otra base de datos.' },
      { url: distributed, referencia: 'Oracle AI Database 26 Database Administrator’s Guide, Managing a Distributed Database: el enlace permite acceder a una base remota mediante una sesión en la base remota.' }
    ], '', 'La opción correcta es el acceso a objetos/datos de una base de datos remota. Un database link de Oracle es un objeto de esquema que se utiliza en sentencias SQL para referir objetos remotos, por ejemplo tabla@dblink; no es un enlace web ni un mecanismo específico para invocar objetos Java locales.', 'corregida'],
    [4040, ['64'], ['III-4'], ['modelo relacional', 'relación', 'grado', 'dominio', 'atributo'], [
      { url: codd1970, referencia: 'E. F. Codd, A Relational Model of Data for Large Shared Data Banks, Communications of the ACM 13(6), 1970, §1.3: una relación sobre n dominios tiene grado n; tuplas son filas y su orden es inmaterial.' },
      { url: codd1971, referencia: 'Codd, Further Normalization (1971), apéndice A1: relación como subconjunto de un producto cartesiano de dominios y atributo no primo como colección con nombre/rol.' }
    ], '', 'El original tenía dos alternativas verdaderas: el grado de la relación es n para una relación sobre n dominios, y cada atributo corresponde a un dominio. Se convierte en una pregunta unívoca sobre el grado: lo determina el número de dominios/atributos del encabezado, no la cardinalidad de tuplas, su orden ni los valores actualmente almacenados.', 'corregida']
  ],
  edits: {
    4036: { texto: '¿Qué describe correctamente ODBC (Open Database Connectivity)?', opciones: ['Una API basada en CLI que permite a aplicaciones acceder a distintos SGBD mediante drivers y utilizar SQL.', 'Una capa de objetos construida exclusivamente sobre OLE DB.', 'Una interfaz exclusiva para programas C++ que no usa drivers.', 'Un mecanismo universal para consultar cualquier tipo de dato, aunque no exista un driver.'], respuesta_correcta: 0 },
    4037: { texto: 'Una relación está en tercera forma normal (3FN) cuando, además de cumplir 2FN:', opciones: ['Cada atributo no primo depende no transitivamente de cada clave candidata.', 'Todos los atributos no primos dependen de la clave primaria, sin considerar las restantes claves candidatas.', 'Cada intersección de fila y columna contiene un único valor.', 'No hay grupos repetitivos, aunque puedan existir dependencias transitivas entre atributos no primos.'], respuesta_correcta: 0 },
    4038: { texto: 'Considérese un grafo simple no dirigido G=(V,A), donde cada arista es un par no ordenado de vértices distintos. ¿Qué conjunto describe un grafo regular de grado 3?', opciones: ['V={1,2,3}, A={{1,2},{2,3}}.', 'V={1,2,3}, A={{1,2},{2,3},{3,1}}.', 'V={1,2,3,4}, A={{1,2},{2,4},{3,1},{1,4},{2,3}}.', 'V={1,2,3,4}, A={{1,2},{3,4},{3,1},{2,3},{1,4},{2,4}}.'], respuesta_correcta: 3 },
    4039: { texto: 'En Oracle Database, ¿para qué sirve principalmente un DATABASE LINK?', opciones: ['Para enlazar clases Java locales que invoca PL/SQL.', 'Para integrar hipervínculos web dentro de columnas.', 'Para referenciar y acceder a objetos de una base de datos remota desde la base local.', 'Para sustituir la definición de claves foráneas.'], respuesta_correcta: 2 },
    4040: { texto: 'En el modelo relacional, ¿qué determina el grado de una relación?', opciones: ['El número de dominios, expresados como atributos, sobre los que se define.', 'El número de tuplas que contiene en un instante.', 'El orden en que se muestran las filas.', 'El número total de valores actualmente almacenados en sus tuplas.'], respuesta_correcta: 0 }
  }
});
