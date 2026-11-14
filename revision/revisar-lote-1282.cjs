const apply = require('./aplicar-lote.cjs');

const src = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';

apply({
  numero: '1282', fecha: '2026-11-15',
  records: [
    [6731, [67, 80], [], ['Java', 'JNDI', 'LDAP', 'servicios de directorio'], [
      src('https://docs.oracle.com/en/java/javase/27/docs/api/', 'Oracle Java SE 27 API Specification: el módulo java.naming define la API JNDI (Java Naming and Directory Interface).'),
      src('https://docs.oracle.com/javase/jndi/tutorial/basics/directory/index.html', 'Oracle JNDI Tutorial, Directory Operations: la API JNDI permite leer y modificar atributos y buscar en directorios; los ejemplos usan el proveedor de servicio LDAP.'),
      src(a1, 'BOE-A-2025-25938, convocatoria Cuerpo Superior TIC, anexo I, temas 67 (Java) y 80 (protocolos de directorio LDAP y X.500).'),
      src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30, §4.5: sitúa JNDI entre servicios Java de nombres/directorio y distingue JMS como mensajería; cotejo curricular.'),
      src('https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', 'ITIC Academy, bloque 36: contexto de directorios LDAP/X.500; cotejo curricular.')
    ], {texto: '¿Qué API de Java proporciona servicios de nombres y directorio y, mediante un proveedor LDAP, permite acceder a un directorio compatible como Active Directory?', opciones: [
      'Java Message Service (JMS)',
      'Java Naming and Directory Interface (JNDI)',
      'Remote Method Invocation (RMI)',
      'JavaBeans Activation Framework (JAF)'
    ], respuesta_correcta: 1}, 'Se conserva B. JNDI es la API Java de nombres y directorio; el acceso a un servidor LDAP se realiza con un proveedor de servicio compatible. No se afirma que JNDI sea el protocolo LDAP ni que la API sea exclusiva de Active Directory. Se corrige además el nombre del distractor JavaBeans Activation Framework, cuya sigla es JAF (JMF corresponde a otra tecnología).', 'corregida'],

    [6732, [79], ['IV-12'], ['RSA', 'criptografía asimétrica', 'cifrado de clave pública', 'generación de claves'], [
      src('https://www.rfc-editor.org/rfc/rfc8017.html', 'IETF RFC 8017, PKCS #1 v2.2: especifica las operaciones de cifrado RSA con clave pública y descifrado con clave privada, y el esquema de generación/par de claves RSA.'),
      src(a1, 'BOE-A-2025-25938, convocatoria Cuerpo Superior TIC, anexo I, tema 79: algoritmos de cifrado simétricos y asimétricos.'),
      src(a2, 'BOE-A-2025-26262, convocatoria Cuerpo de Gestión de Sistemas e Informática, anexo IX, tema IV.12: técnicas criptográficas y protocolos seguros.'),
      src('https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', 'ITIC Academy, bloque 36, §3.1 sobre RSA y criptografía de clave pública: cotejo curricular, contrastado con RFC 8017.')
    ], {texto: 'En el ciclo básico de cifrado RSA de clave pública, ¿qué conjunto de operaciones comprende la preparación y el uso del par de claves para cifrar y descifrar?', opciones: [
      'Solo cifrado y descifrado; no se necesita generar un par de claves.',
      'La factorización de un supuesto «problema externo» como fase del protocolo.',
      'Generación del par de claves, cifrado con la clave pública y descifrado con la clave privada.',
      'La resolución de un supuesto «problema de Sócrates-Arquímedes».'
    ], respuesta_correcta: 2}, 'Se conserva C y se elimina la generalización original sobre «todo criptosistema de clave pública». La pregunta delimita RSA y su flujo de uso a alto nivel: generación del par, cifrado mediante la operación/clave pública y descifrado mediante la privada. RFC 8017 especifica los esquemas de cifrado y las operaciones RSA; no se sugiere que todos los criptosistemas asimétricos sean esquemas de cifrado ni que la generación de claves sea una operación del mensaje.', 'corregida'],

    [6733, [], ['II-2'], ['Windows', 'kernel', 'planificación', 'despacho de hilos'], [
      src('https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/k', 'Microsoft Learn, Windows Debugger Glossary, entrada kernel: el kernel realiza la planificación y el despacho de hilos; distingue sus funciones de las del Executive, HAL y controladores.'),
      src('https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/introduction-to-thread-objects', 'Microsoft Learn, Introduction to Thread Objects: los hilos son objetos dispatcher del kernel y el kernel los despacha para ejecución.'),
      src(a2, 'BOE-A-2025-26262, convocatoria Cuerpo de Gestión de Sistemas e Informática, anexo IX, tema II.2: sistemas operativos, incluidos Windows, Linux y Unix.'),
      src('https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', 'ITIC Academy, bloque 27 «Sistemas Operativos», explicación del dispatcher y el cambio de contexto: cotejo curricular; la identificación específica del componente Windows se comprueba con Microsoft Learn.')
    ], {texto: 'En la arquitectura de Windows, ¿qué componente de modo kernel realiza la planificación y el despacho (dispatching) de los hilos?', opciones: [
      'El Executive, responsable de los servicios de alto nivel del sistema.',
      'El kernel de Windows.',
      'La Hardware Abstraction Layer (HAL).',
      'Los controladores de dispositivo (drivers).'
    ], respuesta_correcta: 1}, 'Se mantiene B. Microsoft diferencia las responsabilidades: el kernel realiza funciones de bajo nivel, incluida la planificación y el despacho de hilos; el Executive gestiona servicios base de mayor nivel, la HAL abstrae el hardware y los controladores atienden dispositivos. Se sustituye «microkernel», denominación ambigua y no apropiada para identificar el componente en la terminología actual de Microsoft.', 'corregida'],

    [6734, [64], ['III-4'], ['bases de datos', 'álgebra relacional', 'división relacional', 'cuantificación universal'], [
      src('https://db.dobo.sk/wp-content/uploads/2015/11/Codd_1972_Relational_Completeness.pdf', 'E. F. Codd, «Relational Completeness of Data Base Sublanguages», IBM Research Report RJ 987 (1972): define y estudia el álgebra relacional; fuente primaria para el marco algebraico.'),
      src(a1, 'BOE-A-2025-25938, convocatoria Cuerpo Superior TIC, anexo I, tema 64: modelo relacional y SQL.'),
      src(a2, 'BOE-A-2025-26262, convocatoria Cuerpo de Gestión de Sistemas e Informática, anexo IX, tema III.4: modelo lógico relacional y diseño de bases de datos.'),
      src('https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', 'ITIC Academy, bloque 29, bases de datos, apartado de álgebra relacional: cotejo curricular de la operación de división.')
    ], {texto: 'Sean A(X,Y) = {(a,x), (a,y), (a,z), (b,y), (b,z), (c,x), (c,y)} y B(Y) = {x,z}. ¿Cuál es A ÷ B, es decir, los valores de X que en A están relacionados con todos los valores de Y de B?', opciones: [
      '{a}.',
      '{a,b,c}.',
      '{b,c}.',
      '{a,c}.'
    ], respuesta_correcta: 0}, 'Se corrige la representación ambigua «ax» como pares ordenados y se define la semántica de división. Solo a aparece en A emparejado tanto con x como con z, que son todos los valores de B; por ello A ÷ B = {a}.', 'corregida'],

    [6735, [68], ['III-12'], ['PHP', 'sintaxis', 'etiqueta estándar', 'desarrollo web'], [
      src('https://www.php.net/manual/es/language.basic-syntax.phptags.php', 'Manual oficial de PHP, Etiquetas PHP: identifica <?php y ?> como delimitadores normales; recomienda las etiquetas normales y <?= para compatibilidad, frente a <?, que depende de short_open_tag.'),
      src(a1, 'BOE-A-2025-25938, convocatoria Cuerpo Superior TIC, anexo I, tema 68: entorno de desarrollo PHP.'),
      src(a2, 'BOE-A-2025-26262, convocatoria Cuerpo de Gestión de Sistemas e Informática, anexo IX, tema III.12: desarrollo web front-end y en servidor.'),
      src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30, contenidos de PHP y desarrollo web: cotejo curricular.')
    ], {texto: '¿Cuál es la etiqueta estándar de apertura para delimitar código PHP en un documento?', opciones: [
      '<php',
      '<?php',
      '<@',
      '<!'
    ], respuesta_correcta: 1}, 'Se conserva B y se acota el enunciado a la etiqueta estándar. El manual de PHP reconoce <?php como apertura normal; también existe <?= para salida abreviada, mientras que la forma corta <? depende de configuración y no se recomienda por compatibilidad. No se afirma que <?php sea la única forma de abrir cualquier bloque PHP.', 'corregida']
  ]
});
