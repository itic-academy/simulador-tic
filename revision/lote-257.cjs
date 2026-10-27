const apply = require('./aplicar-lote.cjs');

const records = [
  [1601, [58], ['II-6'], ['DCOM', 'COM', 'interoperabilidad', 'QueryInterface', 'interfaces', 'herencia'], [
    {url: 'https://learn.microsoft.com/en-us/windows/win32/com/com-dcom-and-type-libraries', referencia: 'Microsoft Learn, COM, DCOM, and Type Libraries: describe la comunicación por RPC, acceso a objetos en el mismo o distintos procesos/equipos, exposición de múltiples interfaces y uso de bibliotecas de tipos para conocer interfaces.'},
    {url: 'https://learn.microsoft.com/en-us/windows/win32/com/iunknown-and-interface-inheritance', referencia: 'Microsoft Learn, IUnknown and Interface Inheritance: las interfaces COM heredan de una interfaz base y emplean herencia simple, no herencia múltiple.'},
    {url: 'https://learn.microsoft.com/en-us/windows/win32/api/unknwn/nf-unknwn-iunknown-queryinterface%28refiid_void%29', referencia: 'Microsoft Learn, IUnknown::QueryInterface: permite solicitar por IID una interfaz que el objeto implemente; el conjunto de interfaces de una instancia debe permanecer estático.'}
  ], {texto: 'Sobre COM/DCOM, señale la afirmación FALSA:', opciones: [
    'Las interfaces COM/DCOM describen el contrato externo de los objetos y permiten comunicarse dentro del mismo proceso o a través de procesos y equipos.',
    '`QueryInterface` permite solicitar en ejecución una interfaz por su identificador; el conjunto que implementa una instancia es estable.',
    'La herencia de interfaces COM permite que una interfaz derive simultáneamente de varias interfaces base (herencia múltiple).',
    'Un objeto COM/DCOM puede exponer varias interfaces.'
  ], respuesta_correcta: 2}, 'La afirmación falsa es la opción 3: la herencia de interfaces COM es simple, no múltiple. Esto no impide que un objeto implemente y exponga varias interfaces independientes. Se matiza “descubrimiento dinámico”: `QueryInterface` consulta interfaces en ejecución, pero el conjunto de interfaces de una instancia no debe cambiar.', 'corregida'],
  [1602, [65, 67], ['III-10', 'III-12'], ['Java', 'JavaServer Faces', 'Jakarta Faces', 'MVC', 'capa de presentación', 'aplicaciones web'], [
    {url: 'https://jakarta.ee/specifications/faces/4.1/', referencia: 'Eclipse Foundation, Jakarta Faces 4.1, especificación de Jakarta EE 11: define un framework MVC para interfaces de usuario web, con componentes, gestión de estado, eventos y validación.'},
    {url: 'https://jakarta.ee/specifications/faces/4.1/jakarta-faces-4.1.pdf', referencia: 'Jakarta Faces 4.1 Specification: describe el modelo de componentes de interfaz y el ciclo de vida de una aplicación web Java.'}
  ], {texto: '¿Cuál describe correctamente JavaServer Faces (JSF), hoy denominado Jakarta Faces?', opciones: [
    'Es una tecnología obsoleta sustituida por Spring, que no puede integrarse con otros frameworks Java.',
    'Es la API Java para ejecutar transacciones distribuidas entre gestores de bases de datos.',
    'Fue una novedad incorporada por Java 2 y ya no forma parte de Jakarta EE.',
    'Es un framework MVC basado en componentes para construir interfaces de usuario de aplicaciones web Java.'
  ], respuesta_correcta: 3}, 'Jakarta Faces, evolución de JavaServer Faces, sigue siendo una especificación de Jakarta EE; la versión 4.1 forma parte de Jakarta EE 11. Es un framework MVC basado en componentes para interfaces web, no una API de transacciones distribuidas ni una tecnología sustituida por Spring.', 'corregida'],
  [1603, [63], ['IV-2'], ['BASIS', 'SGBD', 'sesiones', 'usuarios conectados', 'administración'], null, null, 'La respuesta original se conserva sin validar. No se ha localizado una fuente primaria identificable del producto BASIS que confirme la orden propietaria `sh/s k=1`; otras opciones parecen pertenecer a Oracle/PostgreSQL y no pueden atribuirse a BASIS. Pendiente localizar el manual exacto (producto, versión y sintaxis) antes de certificar una clave.', 'pendiente_fuente'],
  [1604, [52], ['II-1'], ['procesador', 'pipeline', 'ARM9', 'fetch', 'decode', 'execute', 'memory', 'writeback'], [
    {url: 'https://support.arm.com/documentation/ddi0222/b/introduction/about-the-arm9ej-s-with-jazelle-technology/the-instruction-pipelines', referencia: 'Arm, ARM9EJ-S Technical Reference Manual, Instruction pipelines: enumera las etapas del pipeline ARM en estado ARM: Fetch, Decode, Execute, Memory y Writeback; en Jazelle existe una etapa de decodificación adicional.'}
  ], {texto: 'En el pipeline ARM9 en estado ARM descrito en su manual técnico, ¿cuál es el orden de las cinco etapas?', opciones: [
    'Decodificación, búsqueda de instrucción, ejecución, memoria y escritura de resultados.',
    'Búsqueda de instrucción, ejecución, decodificación, memoria y escritura de resultados.',
    'Búsqueda de instrucción (Fetch), decodificación (Decode), ejecución (Execute), acceso a memoria (Memory) y escritura de resultados (Writeback).',
    'Búsqueda de instrucción, decodificación, escritura de resultados, ejecución y acceso a memoria.'
  ], respuesta_correcta: 2}, 'El manual del núcleo ARM9EJ-S especifica las cinco etapas en estado ARM: Fetch, Decode, Execute, Memory y Writeback. Se delimita la pregunta a una arquitectura y modo concretos, porque el número y los nombres de etapas de un procesador no son universales y “prefetch” puede ser una operación interna, no una etapa común a todas las CPU.', 'corregida'],
  [1605, [54], ['II-1'], ['historia de la informática', 'ratón', 'Douglas Engelbart', 'SRI', 'Xerox PARC', 'periféricos de entrada'], [
    {url: 'https://www.darpa.mil/node/2099', referencia: 'DARPA, First Computer Mouse (24-04-1964): atribuye a Douglas Engelbart, de SRI, la invención del ratón de ordenador en el marco de un experimento financiado por ARPA.'},
    {url: 'https://dougengelbart.org/content/view/162/', referencia: 'Doug Engelbart Institute, The Mouse: documenta el prototipo construido en SRI en 1964 y aclara el mito de que el ratón se inventó en Xerox PARC, donde llegó posteriormente.'}
  ], {texto: '¿En qué institución se desarrolló el primer prototipo de ratón de ordenador asociado a Douglas Engelbart?', opciones: [
    'LaCie.',
    'Toshiba.',
    'Xerox PARC.',
    'Stanford Research Institute (SRI).'
  ], respuesta_correcta: 3}, 'El prototipo fue desarrollado en el Stanford Research Institute (SRI) por el equipo de Douglas Engelbart en 1964; no fue una invención de Apple ni de Xerox PARC. Se corrige “qué empresa”, porque SRI es una institución de investigación, no una compañía fabricante de periféricos.', 'corregida']
];

const edits = Object.fromEntries(records.filter(row => row[5]).map(([id,,,,,edit]) => [id, edit]));
apply({numero: '257', fecha: '2026-10-27', records, edits});
