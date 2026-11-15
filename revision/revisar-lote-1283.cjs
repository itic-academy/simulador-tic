const apply = require('./aplicar-lote.cjs');

const src = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';

apply({
  numero: '1283', fecha: '2026-11-15',
  records: [
    [6736, [65], ['II-3', 'III-12'], ['Babel', 'JavaScript', 'compilador', 'transpilación', 'desarrollo web'], [
      src('https://babeljs.io/docs/', 'Documentación oficial de Babel: lo define como compilador de JavaScript y explica que transforma principalmente código ECMAScript 2015+ a JavaScript compatible con entornos actuales y antiguos.'),
      src(a1, 'BOE-A-2025-25938, anexo I, tema 65: arquitectura de desarrollo web, front-end y scripts de cliente.'),
      src(a2, 'BOE-A-2025-26262, anexo IX, temas II.3 (lenguajes y paradigmas actuales) y III.12 (aplicaciones y desarrollo web).'),
      src('https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30, temario A1-65 y A2-III.12 sobre aplicaciones web, front-end, scripts de cliente y lenguajes actuales: cotejo de ámbito. La búsqueda del material no localizó una mención expresa a Babel; la identificación concreta se apoya en la documentación oficial de Babel.')
    ], {texto: '¿Qué es Babel en el desarrollo web con JavaScript?', opciones: [
      'Una biblioteca CSS para definir estilos.',
      'Un compilador/transpilador que transforma código JavaScript, por ejemplo sintaxis ECMAScript reciente a una forma compatible con los entornos objetivo.',
      'Un framework de aplicaciones web equivalente a Angular.',
      'Un gestor de paquetes de JavaScript.'
    ], respuesta_correcta: 1}, 'Se conserva B y se precisa su función: Babel transforma sintaxis y código JavaScript según los entornos objetivo; no es una biblioteca CSS, un framework ni un gestor de paquetes. “Transpilador” es una descripción habitual de este uso, aunque la documentación del proyecto lo denomina compilador de JavaScript.', 'corregida'],

    [6737, [61], ['II-2'], ['Windows Server', 'Server Manager', 'roles', 'servicios de rol'], [
      src('https://learn.microsoft.com/en-us/windows/win32/wmisdk/server-feature-provider', 'Microsoft Learn, Server Feature Provider: define un rol de servidor como un grupo de componentes que proporciona funciones para un área específica.'),
      src('https://www.sos.wa.gov/_assets/library/libraries/projects/ita/moac_mta_98_365_windows_server_administration_fundamentals.pdf', 'Microsoft Official Academic Course, Windows Server Administration Fundamentals, sección Server Roles and Features: distingue un role service, que proporciona funcionalidad a un rol, del rol de servidor y de las características.'),
      src('https://learn.microsoft.com/en-us/windows-server/administration/server-manager/add-remove-roles-features', 'Microsoft Learn, Add or remove roles and features in Windows Server 2025/2022/2019/2016: mantiene la terminología diferenciada de roles, servicios de rol y características.'),
      src(a1, 'BOE-A-2025-25938, anexo I, tema 61: sistemas operativos Microsoft, fundamentos y administración.'),
      src(a2, 'BOE-A-2025-26262, anexo IX, tema II.2: fundamentos y administración de Windows, Linux y Unix.'),
      src('https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', 'ITIC Academy, bloque 27, temas A1-59–62 y A2-II.2, fundamentos y administración de sistemas operativos Windows y otros: cotejo del ámbito, sin afirmar que reproduzca literalmente esta definición de Server Manager.')
    ], {texto: 'En la terminología de Server Manager de Windows Server, ¿qué es un servicio de rol (role service)?', opciones: [
      'Un grupo de componentes que proporciona funciones de servidor para un área específica; eso define un rol de servidor.',
      'Un componente de software que proporciona funcionalidad específica a un rol.',
      'La función o las funciones asignadas a una máquina concreta, sin componentes instalables.',
      'Un conjunto de programas que permite al equipo cumplir una función para varios usuarios o equipos; esa es la descripción general de un rol de servidor.'
    ], respuesta_correcta: 1}, 'Se cambia D por B. El enunciado original preguntaba por un servicio de rol, pero la respuesta D describía un rol de servidor. Microsoft distingue ambas categorías: un rol agrupa componentes para un área funcional; un servicio de rol proporciona funcionalidad a ese rol. El reactivo queda anclado expresamente a la terminología de Server Manager.', 'corregida'],

    [6738, [73], [], ['INAP', 'Proyecto Compartir', 'CORA', 'e-learning', 'formación pública'], [
      src('https://www.inap.es/sites/portal/files/public/2025-03/MemoriaINAP2015.pdf', 'INAP, Memoria de actividades 2015, apartado «Proyecto Compartir»: iniciativa puesta en marcha en 2014 en el marco CORA, con repositorio de cursos y entorno colaborativo para intercambiar contenidos formativos en línea entre organismos.'),
      src('https://www.hacienda.gob.es/SGT/PortalVarios/El%20Ministerio/CALIDAD%20Y%20CARTAS%20DE%20SERVICIOS/Informe%20Calidad%202015%20%283%29%20DEFINITIVO%2029%20de%20Diciembre%202016.pdf', 'Ministerio de Hacienda y Administraciones Públicas, Informe de calidad 2015, apartado 2.4: destaca la coordinación entre promotores de formación en la AGE y la puesta a disposición de la plataforma Moodle en el proyecto Compartir.'),
      src('https://transparencia.gob.es/transparencia/dam/jcr%3A45c14a1f-37a5-4957-b21a-6783662c3e3e/CORA-medidas-subcomision-duplicidades-administrativas.pdf', 'Informe CORA, medida 1.04.007: documenta el proyecto «Compartir», impulsado desde el INAP e iniciado en 2012, para recopilar recursos docentes en línea y evitar duplicidades.'),
      src(a1, 'BOE-A-2025-25938, anexo I, tema 73: e-learning, conceptos, herramientas, implantación y normalización.'),
      src('https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', 'ITIC Academy, bloque 33, A1-73, e-learning, herramientas y sistemas de implantación: cotejo curricular. El documento de academia no identifica específicamente el Proyecto Compartir; la respuesta se contrasta con las fuentes históricas oficiales del INAP y CORA.')
    ], {texto: 'Según la documentación histórica del INAP y del informe CORA sobre formación pública en línea, ¿qué iniciativa se vinculó a la coordinación de promotores de formación de la AGE y al intercambio de contenidos docentes?', opciones: [
      'Comp@rte, el plan de cooperación interadministrativa del Plan MEJORA.',
      'Racionaliz@, un sistema de contratación centralizada de cursos.',
      'Proyecto «Compartir», impulsado desde el INAP para compartir recursos y plataformas de formación.',
      'Educ@, una plataforma general de identidad y firma electrónica.'
    ], respuesta_correcta: 2}, 'Se conserva C, pero se fija el marco documental histórico para evitar presentarlo como servicio o denominación necesariamente vigente. CORA identifica el Proyecto Compartir como una iniciativa del INAP iniciada en 2012; la memoria del INAP y el informe ministerial de 2015 describen el repositorio de cursos, el intercambio de contenidos, la coordinación de promotores y la plataforma Moodle. No debe confundirse con Comp@rte, denominación empleada en otras iniciativas de cooperación administrativa.', 'historica'],

    [6739, [], ['II-1'], ['RISC', 'arquitectura de computadores', 'conjunto reducido de instrucciones', 'control cableado'], [
      src('https://people.eecs.berkeley.edu/~sequin/X/CCD_RISC_VLSI/RISC1_Patterson_Sequin_1981.pdf', 'Patterson y Séquin, «RISC I: A Reduced Instruction Set VLSI Computer» (1981), Universidad de California, Berkeley: el diseño RISC I buscó instrucciones simples, ejecutables en un ciclo; los autores dicen que esa simplicidad hacía innecesario el control por microcódigo.'),
      src('https://www2.eecs.berkeley.edu/Pubs/TechRpts/1982/5449.html', 'UC Berkeley EECS, Technical Report UCB/CSD-82-106, «Design and Implementation of RISC I»: el conjunto reducido de instrucciones y modos de direccionamiento permite una sección de control pequeña y un ciclo de máquina corto.'),
      src(a2, 'BOE-A-2025-26262, anexo IX, tema II.1: tecnologías de computadores actuales, escalables y de altas prestaciones.'),
      src('https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', 'ITIC Academy, bloque 26, hardware y arquitecturas de computadores, A2-II.1: cotejo curricular de contexto; no se afirma que el documento incluya RISC como epígrafe específico.')
    ], {texto: 'En el diseño histórico de RISC I descrito por Patterson y Séquin, ¿qué consecuencia se atribuye a la sencillez de las instrucciones?', opciones: [
      'Un repertorio de instrucciones amplio facilita por sí solo la escritura del compilador.',
      'El modelo de ejecución basado en pila es superior en todos los diseños RISC.',
      'Las instrucciones complejas reducen necesariamente el tamaño de los programas sin coste de decodificación.',
      'La simplicidad del repertorio permite un control sencillo y hace innecesario depender de una unidad de control microprogramada en ese diseño.'
    ], respuesta_correcta: 3}, 'Se conserva D, pero se elimina la afirmación absoluta de que la microprogramación «no debe emplearse» en todo procesador RISC. La fuente primaria de Berkeley describe una decisión del diseño RISC I: su simplicidad hacía innecesario el control por microcódigo. La nueva formulación limita esa conclusión a ese diseño histórico y evita convertirla en una prohibición universal sobre implementaciones contemporáneas.', 'corregida'],

    [6740, [63], ['II-4', 'III-4'], ['OLTP', 'ACID', 'transacciones', 'aislamiento', 'atomicidad', 'durabilidad'], [
      src('https://learn.microsoft.com/en-us/windows/win32/cossdk/acid-properties', 'Microsoft Learn, ACID Properties: define atomicidad como todo-o-nada, aislamiento como comportamiento concurrente equivalente a ejecución aislada y durabilidad como persistencia de cambios confirmados incluso tras un fallo.'),
      src('https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-2017', 'Microsoft Learn, Transaction Locking and Row Versioning Guide, fundamentos de transacciones: describe las propiedades ACID y precisa que el aislamiento configurable equilibra concurrencia y garantías.'),
      src(a1, 'BOE-A-2025-25938, anexo I, tema 63: SGBD y modelo de referencia ANSI.'),
      src(a2, 'BOE-A-2025-26262, anexo IX, tema II.4 (OLTP/OLAP) y tema III.4 (modelo relacional, bases de datos y concurrencia).'),
      src('https://drive.google.com/file/d/10DHrDJ7834oPAD2JR8S0dh0Yext_0Gwp/view?usp=drivesdk', 'ITIC Academy, bloque 34, Business Intelligence 2026, apartado 3 sobre OLTP y OLAP: cotejo del tipo de carga; no se atribuye a este material la fuente normativa de ACID.'),
      src('https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', 'ITIC Academy, bloque 29, bases de datos 2026: cubre transacciones y concurrencia; cotejo curricular adicional, con definiciones contrastadas en Microsoft Learn.')
    ], {texto: 'En una transacción OLTP, ¿qué opción identifica correctamente las garantías ACID representadas por estas condiciones: no exponer estados intermedios no confirmados, deshacer los cambios de una transacción abortada y conservar los cambios confirmados tras un fallo?', opciones: [
      'Atomicidad: si la transacción aborta, se deshacen todas sus modificaciones.',
      'Aislamiento: las transacciones concurrentes se comportan como si estuvieran aisladas; el nivel concreto determina qué estados intermedios pueden observarse.',
      'Durabilidad: una vez confirmados, los cambios persisten incluso ante un fallo del equipo.',
      'Las tres condiciones describen, respectivamente, atomicidad, aislamiento y durabilidad, propiedades ACID de las transacciones.'
    ], respuesta_correcta: 3}, 'Se conserva D con una reformulación. La afirmación original sobre «recuperar rápidamente» mezclaba una meta de recuperación/continuidad con ACID y la frase de aislamiento era demasiado absoluta. El reactivo distingue atomicidad (rollback ante aborto), aislamiento (efecto de concurrencia sujeto al nivel de aislamiento) y durabilidad (persistencia tras commit). No pretende enumerar Consistencia, la cuarta propiedad ACID.', 'corregida']
  ]
});
