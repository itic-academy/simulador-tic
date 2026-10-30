const aplicar = require('./aplicar-lote.cjs');

const records = [
  [3461, [64], ['II-5', 'III-4'], ['bases de datos relacionales', 'relaciones', 'claves', 'consultas', 'independencia lógica y física'], [
    {url: 'https://web.eecs.umich.edu/~michjc/eecs584/Papers/codd_1970.pdf', referencia: 'Codd, E. F., “A Relational Model of Data for Large Shared Data Banks”, Communications of the ACM 13(6), 1970: el modelo relacional expresa las relaciones entre datos lógicamente y separa el modelo de usuario de las representaciones almacenadas.'},
    {url: 'https://www.postgresql.org/docs/current/queries-table-expressions.html', referencia: 'PostgreSQL 18 Documentation, Table Expressions/JOIN: las consultas pueden formar tablas derivadas combinando relaciones mediante condiciones de unión.'}
  ], 'Las bases relacionales representan los datos en relaciones y permiten expresar interrelaciones lógicas mediante claves y consultas de unión. La aplicación consulta el modelo lógico sin tener que conocer la ubicación o estructura física concreta; el gestor traduce las consultas a operaciones de almacenamiento.', 'Se reescribe la opción correcta para evitar la falsa dicotomía entre relaciones lógicas y mecanismos físicos. Se sustituyen distractores absolutos: los índices pueden permitir acceso directo y las uniones no exigen que filas relacionadas estén físicamente contiguas.', 'corregida'],
  [3462, [80], ['I-6'], ['eIDAS', 'firma electrónica avanzada', 'artículo 26', 'QSCD', 'firma cualificada'], [
    {url: 'https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18', referencia: 'Reglamento (UE) 910/2014 consolidado a 18-10-2024, art. 26: cuatro requisitos de firma avanzada; el uso de dispositivo cualificado de creación de firma no es uno de ellos.'},
    {url: 'https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18', referencia: 'Reglamento (UE) 910/2014 consolidado, arts. 3.12, 29 y anexo II: la firma cualificada es una firma avanzada creada mediante dispositivo cualificado y basada en certificado cualificado; esos elementos adicionales no se exigen a toda firma avanzada.'}
  ], 'El artículo 26 eIDAS exige que la firma avanzada esté vinculada unívocamente al firmante, permita identificarlo, se cree con datos que pueda usar bajo su control exclusivo con alto nivel de confianza y quede vinculada a los datos de modo que los cambios posteriores sean detectables. Un dispositivo cualificado de creación de firma es requisito de la firma cualificada, no de toda firma avanzada.', 'Se mantiene como respuesta la opción del dispositivo avanzado/cualificado de creación: no figura entre los cuatro criterios del artículo 26. Se especifica el artículo y se distingue la firma avanzada de la cualificada para evitar confundir sus requisitos.', 'corregida'],
  [3463, [54], ['II-1'], ['periféricos', 'entrada', 'salida', 'almacenamiento auxiliar', 'hardware'], [
    {url: 'https://www.e-thaksalawa.moe.gov.lk/moodle/pluginfile.php/179403/mod_resource/content/1/Text%20Book.pdf', referencia: 'Ministerio de Educación de Sri Lanka, Information and Communication, apartado de dispositivos periféricos: clasificación introductoria en entrada, salida y almacenamiento; una pantalla táctil puede cumplir funciones de entrada y salida.'}
  ], 'En una clasificación funcional introductoria se distinguen periféricos de entrada, de salida y de almacenamiento auxiliar. No es una taxonomía exhaustiva ni mutuamente excluyente: un periférico compuesto puede cumplir más de una función y también existen dispositivos de comunicación.', 'Se acota el alcance como clasificación funcional básica. Se conserva “todas las anteriores” como clave, pero se evita presentarla como clasificación exhaustiva de cualquier periférico.', 'corregida'],
  [3464, [68], ['III-12'], ['PHP', '$_COOKIE', 'superglobal', 'cookies HTTP', 'array asociativo'], [
    {url: 'https://www.php.net/manual/en/reserved.variables.cookies.php', referencia: 'PHP Manual, $_COOKIE: superglobal que contiene un array asociativo de variables pasadas al script actual mediante cookies HTTP.'},
    {url: 'https://www.php.net/manual/en/reserved.variables.php', referencia: 'PHP Manual, Predefined Variables: $_COOKIE es una de las variables superglobales predefinidas de PHP; la documentación diferencia $_COOKIE de $_GET y $_POST.'}
  ], '$_COOKIE es una variable superglobal de PHP que contiene un array asociativo con las variables recibidas por el script actual mediante cookies HTTP. No define ni envía cookies: para enviar una cookie se utiliza setcookie(), y el navegador la devolverá en una petición posterior conforme a sus atributos y políticas.', 'Se precisa que $_COOKIE representa valores recibidos en la petición actual y no es una instrucción para crear cookies. Se corrige “palabra” y se modifica el distractor escalar para que no resulte parcialmente verdadero frente a la definición de array.', 'corregida'],
  [3465, [64], ['II-5', 'III-4'], ['modelo relacional', 'dominio', 'atributo', 'conjunto de valores atómicos'], [
    {url: 'https://web.eecs.umich.edu/~michjc/eecs584/Papers/codd_1970.pdf', referencia: 'Codd, E. F., “A Relational Model of Data for Large Shared Data Banks”, Communications of the ACM 13(6), 1970: cada atributo se define sobre dominios; los valores de una tupla pertenecen al dominio correspondiente.'},
    {url: 'https://www.postgresql.org/docs/current/ddl-basics.html', referencia: 'PostgreSQL 18 Documentation, Table Basics: el tipo de datos de cada columna restringe el conjunto de valores que se le pueden asignar; se cita como analogía práctica y no como identidad completa entre tipos SQL y dominios del modelo relacional.'}
  ], 'En el modelo relacional, un dominio es el conjunto de valores permitidos para un atributo; en el modelo clásico, sus valores son atómicos. Cada valor de una tupla para ese atributo debe pertenecer a su dominio. No debe confundirse sin matices el dominio teórico con la instrucción CREATE DOMAIN de un SGBD concreto.', 'Se conserva la opción que define el dominio como conjunto de valores de atributos, pero se afina para hablar de valores permitidos/atómicos y se elimina la formulación ambigua de “valores reales”. Se aclara la diferencia entre modelo relacional y tipos definidos por SQL.', 'corregida']
];

const edits = {
  3461: {
    texto: '¿Cuál afirmación describe correctamente el modelo de datos de una base de datos relacional?',
    opcion: [0, 'Permite representar relaciones lógicas entre datos mediante relaciones, claves y consultas, sin exigir que el usuario conozca su disposición física.'],
  },
  3462: {texto: 'Según el artículo 26 del Reglamento eIDAS vigente, ¿cuál de los siguientes elementos NO es un requisito de una firma electrónica avanzada?', opcion: [1, 'Haber sido creada utilizando un dispositivo cualificado de creación de firma electrónica.']},
  3463: {texto: 'En una clasificación funcional básica de los periféricos, ¿qué categorías generales se incluyen?', opcion: [0, 'De entrada.'], opcion: [1, 'De salida.'], opcion: [2, 'De almacenamiento auxiliar.']},
  3464: {texto: 'Según el manual de PHP, ¿qué contiene la variable superglobal $_COOKIE?', opcion: [0, 'Una variable escalar que contiene exclusivamente el valor de una única cookie.'], opcion: [1, 'Un array asociativo de variables recibidas por el script actual mediante cookies HTTP.'], opcion: [3, 'Es una palabra reservada para definir o enviar una cookie en PHP.']},
  3465: {texto: 'En el modelo relacional, ¿qué es el dominio de un atributo?', opcion: [1, 'El conjunto de valores permitidos —en el modelo clásico, atómicos— que puede tomar ese atributo.']}
};

// Aplicar todas las opciones editadas de 3463/3464 sin perder ningún cambio.
for (const id of [3463, 3464]) {
  const optionEdits = edits[id];
  delete optionEdits.opcion;
  optionEdits.opciones = id === 3463
    ? ['De entrada.', 'De salida.', 'De almacenamiento auxiliar.', 'Todas las anteriores.']
    : ['Una variable escalar que contiene exclusivamente el valor de una única cookie.', 'Un array asociativo de variables recibidas por el script actual mediante cookies HTTP.', 'Una variable donde se recoge el valor enviado por un formulario.', 'Es una palabra reservada para definir o enviar una cookie en PHP.'];
}

aplicar({numero: '629', fecha: '2026-10-30', records, edits});
