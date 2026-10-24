const apply = require('./aplicar-lote.cjs');

const records = [
  [1391, [80], ['I-6'], ['Ley 6/2020', 'servicios electrónicos de confianza', 'prestador no cualificado', 'verificación previa'],
    [{ url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046', referencia: 'Ley 6/2020, texto consolidado, art. 12: el prestador no cualificado no necesita verificación administrativa previa para comenzar; debe comunicar el inicio en el plazo legal.' }], null,
    'Se mantiene la opción correcta, pero se sustituye «autorización previa» por el término legal exacto: no se exige verificación administrativa previa del cumplimiento de requisitos. Esto no elimina la obligación de comunicar el inicio de actividad dentro de los tres meses siguientes. Cotejo temático con ITIC Academy, bloque 36, temas 79–81, versión 2026, identidad, firma y servicios de confianza. Correspondencia: A1-80 y A2-I-6.', 'corregida'],
  [1392, [85], [], ['blockchain', 'DLT', 'libro distribuido', 'nodos', 'consenso'],
    [{ url: 'https://eur-lex.europa.eu/eli/reg/2022/858/oj', referencia: 'Reglamento (UE) 2022/858, art. 2.1–2.4: define DLT, libro distribuido, mecanismo de consenso y nodo DLT; el libro compartido sincroniza registros entre nodos mediante consenso.' }], null,
    'Se conserva la opción C como clave, sustituyendo una definición amplia y algo circular de blockchain por la definición normativa de libro distribuido: repositorio de información con transacciones compartido y sincronizado entre nodos DLT mediante consenso. El Reglamento no define blockchain como una única arquitectura ni el ENS regula específicamente su uso. Cotejo temático con ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1, tema A1-85. Correspondencia: A1-85.', 'corregida'],
  [1393, [88], ['III-3'], ['historias de usuario', 'Mike Cohn', 'requisitos', 'metodologías ágiles'],
    [{ url: 'https://www.mountaingoatsoftware.com/agile/user-stories', referencia: 'Mountain Goat Software, guía de historias de usuario de Mike Cohn: formato «As a <role>, I want <goal> so that <benefit>».' }, { url: 'https://www.mountaingoatsoftware.com/uploads/presentations/Writing-Effective-User-Stories-Agile-Requirements-Software-Development-Best-Practices-2005.pdf', referencia: 'Mike Cohn, presentación original de 2005 sobre historias de usuario: ejemplos y estructura centrada en rol, capacidad y valor.' }], null,
    'La respuesta D corresponde al patrón de rol, objetivo y beneficio. Se reformula la pregunta para preguntar por el formato que Cohn recoge, sin atribuirle la invención del patrón ni presentarlo como estructura obligatoria para toda historia. Cotejo con ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, análisis funcional e historias de usuario. Correspondencia: A1-88 y A2-III-3.', 'corregida'],
  [1394, [88], [], ['Kanban', 'lead time', 'customer lead time', 'cycle time', 'WIP'],
    [{ url: 'https://kanban.university/kanban-guide/', referencia: 'Kanban University, The Official Guide to The Kanban Method: lead time del sistema desde el punto de compromiso hasta la finalización; columnas adaptadas al flujo existente y contexto.' }, { url: 'https://kanban.university/glossary/', referencia: 'Kanban University, glosario: customer lead time va desde la solicitud del cliente hasta la entrega; limitar WIP es una práctica general. El glosario distingue puntos de inicio del lead time y no fija un número de columnas.' }], null,
    'La clave C es la falsa: Kanban no establece un número máximo universal de columnas; estas visualizan las actividades reales del flujo. Se precisa A como customer lead time (solicitud a entrega), y D explicita que cycle time se usa aquí para el intervalo definido por el enunciado —desde que comienza el trabajo hasta que termina—, ya que el término no tiene una definición uniforme en todas las fuentes. Cotejo con ITIC Academy, bloque 38, versión 2026.1, tema A1-88 sobre metodologías ágiles, Scrum y Kanban. Correspondencia: A1-88.', 'corregida'],
  [1395, [88], ['III-3'], ['DFD', 'diagrama de flujo de datos', 'almacén de datos', 'entidad externa', 'proceso'],
    [{ url: 'https://www.cs.uct.ac.za/mit_notes/software/htmls/ch06s05.html', referencia: 'University of Cape Town, Software Engineering, capítulo sobre elementos de DFD: los flujos conectan con procesos; almacenes no se conectan directamente entre sí ni con entidades externas.' }, { url: 'https://vlabs.iitkgp.ac.in/sevl/Exp8/theory.html', referencia: 'IIT Kharagpur Virtual Labs, modelado DFD: flujos entre almacenes o entre entidad externa y almacén requieren procesos; describe el nivel 0 como diagrama de contexto.' }], null,
    'Se reemplaza la opción B, que mezclaba una afirmación verdadera con otra falsa. Un almacén no crea ni transforma datos, pero la afirmación falsa inequívoca es que pueda conectarse directamente a otro almacén o a una entidad externa: en la notación DFD esos flujos pasan por un proceso. Se mantiene la clave B. Cotejo con ITIC Academy, bloque 38, versión 2026.1, análisis funcional y modelado de procesos. Correspondencia: A1-88 y A2-III-3.', 'corregida']
];

apply({ numero: '215', fecha: '2026-10-24', records, edits: {
  1391: { texto: 'Según el artículo 12 de la Ley 6/2020, para iniciar su actividad, un prestador no cualificado de servicios electrónicos de confianza:', opciones: [
    'No necesita verificación administrativa previa del cumplimiento de requisitos, aunque debe comunicar el inicio de actividad en el plazo legal.',
    'Necesita autorización previa del organismo europeo de supervisión.',
    'Necesita autorización previa de la Secretaría de Estado de Digitalización e Inteligencia Artificial.',
    'Necesita autorización previa del ministerio competente.'
  ], respuesta_correcta: 0 },
  1392: { texto: '¿Cuál describe con mayor precisión un libro distribuido (DLT), tecnología en la que se basan muchas implementaciones de blockchain?', opciones: [
    'Un sistema de registro centralizado que solo permite validar transacciones desde un servidor único.',
    'Una base de datos cuya seguridad depende de mantener secreto el código de su implementación.',
    'Un repositorio de información con registros de transacciones compartido y sincronizado entre nodos DLT mediante un mecanismo de consenso.',
    'Un protocolo de cifrado que sustituye a las firmas electrónicas y a los controles de acceso.'
  ], respuesta_correcta: 2 },
  1393: { texto: '¿Cuál es el formato de historia de usuario de rol, objetivo y beneficio que recoge Mike Cohn?', respuesta_correcta: 3 },
  1394: { texto: 'Señala la afirmación incorrecta sobre el método Kanban:', opciones: [
    'El tiempo de entrega al cliente (customer lead time) puede medirse desde que se recibe su solicitud hasta que se le entrega el resultado.',
    'Kanban incluye limitar el trabajo en curso (WIP) como una de sus prácticas generales.',
    'El método fija un número máximo universal de columnas para todos los tableros Kanban.',
    'En este enunciado, el tiempo de ciclo se mide desde que comienza el trabajo de un elemento hasta que queda terminado.'
  ], respuesta_correcta: 2 },
  1395: { texto: '¿Cuál de las siguientes afirmaciones es falsa sobre los diagramas de flujo de datos (DFD)?', opciones: [
    'Los flujos hacia un almacén representan datos que se incorporan, modifican o eliminan mediante un proceso.',
    'Un flujo de datos puede conectar directamente un almacén con otro almacén o con una entidad externa, sin pasar por un proceso.',
    'Un proceso puede transformar un flujo de datos de entrada en varios flujos de salida.',
    'En la notación utilizada en esta pregunta, el nivel 0 o diagrama de contexto representa el sistema completo y sus relaciones con el entorno.'
  ], respuesta_correcta: 1 }
}});
