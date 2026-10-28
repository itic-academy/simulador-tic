const apply = require('./aplicar-lote.cjs');

const records = [
  [2411, [58], ['II-6'], ['CORBA', 'DII', 'invocación dinámica', 'ORB'], 'https://www.omg.org/spec/CORBA/1.1/PDF', 'OMG CORBA 1.1, capítulo 6 (Dynamic Invocation Interface): el ORB DII permite crear e invocar dinámicamente solicitudes a objetos; no es un lenguaje, un protocolo ni el repositorio de interfaces. El reactivo se refiere a un concepto correcto pero de tecnología histórica.', 'La DII permite construir y efectuar en tiempo de ejecución una invocación CORBA a un objeto, en lugar de depender de un stub generado estáticamente. No es IDL (lenguaje), IIOP (protocolo) ni el Interface Repository (servicio de definiciones). Se elimina la asociación ambigua «entorno GNOME» y se pregunta por el significado de DII en CORBA. Se conserva como contenido histórico: la documentación curricular actual presenta CORBA como ejemplo histórico de arquitectura distribuida, no como tecnología predominante.', 'historica'],
  [2412, [63], ['II-5', 'III-4'], ['transacciones', 'ACID', 'concurrencia'], 'https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/transactions.html', 'Oracle Database Concepts, capítulo Transactions: enumera las propiedades ACID como atomicidad, consistencia, aislamiento y durabilidad. La concurrencia es una condición de ejecución que gestionan mecanismos de control, pero no es una de las cuatro siglas ACID.', 'Se acota la pregunta al acrónimo ACID: atomicidad, consistencia, aislamiento y durabilidad. La concurrencia puede afectar a las transacciones y requiere control de concurrencia, pero no forma parte de las cuatro propiedades nombradas por ACID.', 'corregida'],
  [2413, [63], [], ['modelo jerárquico', 'árbol', 'segmento hijo', 'base de datos'], 'https://www.ibm.com/docs/en/ims/15.5.0?topic=relationships-determining-mappings', 'IBM IMS 15.5, Determining mappings: en una estructura jerárquica, cada hijo se asocia con un solo padre; un padre puede tener uno o más hijos. La relación muchos-a-muchos no encaja en el árbol jerárquico sin mecanismos adicionales.', 'Se especifica el modelo jerárquico en árbol: un segmento hijo tiene como máximo un padre directo, aunque un padre puede tener varios hijos. Un nodo raíz no tiene padre. Se evita confundir el modelo con una estructura de red de relaciones muchos-a-muchos.', 'corregida'],
  [2414, [63], ['IV-2'], ['PL/SQL', 'procedimiento almacenado', 'Oracle', 'subprograma'], [
    { url: 'https://docs.oracle.com/en/database/oracle/oracle-database/26/lnpls/CREATE-PROCEDURE-statement.html', referencia: 'Oracle Database PL/SQL Language Reference 26, CREATE PROCEDURE: una sentencia CREATE PROCEDURE crea un procedimiento independiente almacenado en la base de datos.' },
    { url: 'https://docs.oracle.com/en/database/oracle/oracle-database/26/tdddg/stored-subprograms.html', referencia: 'Oracle Database Development Guide 26, About Stored Subprograms: un subprograma almacenado puede ser procedimiento o función; el procedimiento se utiliza normalmente para realizar una acción y la función para devolver un valor.' }
  ], '', 'Se concreta Oracle como ámbito y se pregunta por un procedimiento independiente PL/SQL, creado y almacenado para poder invocarse por su nombre. La expresión genérica «bloque PL/SQL almacenado» también podría abarcar funciones o subprogramas de paquete; por ello se aclara el tipo de objeto. Un bloque anónimo no es un procedimiento almacenado.', 'corregida'],
  [2415, [64], ['II-5'], ['modelo relacional', 'dominio', 'tipo de datos', 'restricciones'], [
    { url: 'https://www.london.ac.uk/sites/default/files/study-guides/database-systems.pdf', referencia: 'University of London, Database Systems, capítulo 3: un dominio es un conjunto con nombre de valores escalares del mismo tipo.' },
    { url: 'https://www.postgresql.org/docs/current/sql-createdomain.html', referencia: 'PostgreSQL 18, CREATE DOMAIN: define un dominio a partir de un tipo de datos con restricciones opcionales que limitan el conjunto de valores admitidos.' }
  ], '', 'En el modelo relacional, un dominio establece los valores atómicos permitidos para los atributos y puede especificarse a partir de un tipo y restricciones. No tiene que ser infinito y no es obligatorio enumerar todos sus valores; el enunciado se formula para que la opción intensional sea inequívoca.', 'corregida']
];

const edits = {
  2411: {
    texto: 'En CORBA, ¿qué permite la interfaz DII (Dynamic Invocation Interface)?',
    opciones: [
      'Definir interfaces de objetos mediante un lenguaje independiente de la implementación.',
      'Transportar mensajes CORBA entre ORB mediante el protocolo IIOP.',
      'Almacenar y administrar las definiciones IDL de las interfaces disponibles.',
      'Construir e invocar dinámicamente, en tiempo de ejecución, solicitudes dirigidas a objetos CORBA.'
    ], respuesta_correcta: 3
  },
  2412: {
    texto: '¿Cuál de los siguientes conceptos NO forma parte de las cuatro propiedades ACID de una transacción?',
    opciones: [
      'Concurrencia.',
      'Durabilidad.',
      'Aislamiento.',
      'Atomicidad.'
    ], respuesta_correcta: 0
  },
  2413: {
    texto: 'En un modelo jerárquico de datos organizado como árbol, ¿cuántos padres directos puede tener un registro hijo?',
    opciones: [
      'Ninguno: todos los registros son raíz.',
      'Como máximo uno.',
      'Cualquier número, según la topología de red.',
      'Exactamente dos.'
    ], respuesta_correcta: 1
  },
  2414: {
    texto: 'En Oracle, ¿cómo se denomina un subprograma PL/SQL independiente creado con CREATE PROCEDURE, almacenado en la base de datos e invocable por su nombre?',
    opciones: [
      'Procedimiento almacenado.',
      'Producto.',
      'Secuencia.',
      'Segmento.'
    ], respuesta_correcta: 0
  },
  2415: {
    texto: 'En el modelo relacional, ¿qué afirmación describe correctamente un dominio?',
    opciones: [
      'Es el conjunto de valores atómicos permitidos para un atributo; puede especificarse mediante un tipo y restricciones.',
      'Debe ser infinito y contener valores de tipos diferentes.',
      'Solo puede definirse enumerando todos sus valores, aunque el conjunto sea infinito.',
      'Es un conjunto de registros que contiene las claves de las relaciones.'
    ], respuesta_correcta: 0
  }
};

apply({ numero: '420', fecha: '2026-10-28', records, edits });
