const aplicar = require('./aplicar-lote.cjs');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const gao = 'https://www.gao.gov/assets/aimd-10.1.12.pdf';
const mdnProto = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain';
const mdnClasses = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes';
const ecma = 'https://tc39.es/ecma262/';
const crc = 'https://c2.com/doc/oopsla89/paper.html';
const structured = 'https://vtda.org/books/Computing/Programming/StructuredDesign_EdwardYourdonLarryConstantine.pdf';
const cohesion = 'https://www.cs.dartmouth.edu/~tjp/cs50/notes/notes17/survey.html';
const nasaLifeCycle = 'https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019%2B-%2BSoftware%2BLife%2BCycle';
const academyPlan = 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk';
const academyTech = 'https://drive.google.com/file/d/1LuUHoQr8oDmptteHIQ72VdCvJFsnu3LF/view?usp=drivesdk';
const academyDesign = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyLife = 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk';

const records = [
  [5346, ['87'], [], ['planificación de sistemas', 'plan de sistemas de información', 'objetivos TIC', 'alineación'], [
    ref(gao, 'U.S. GAO, The System Assessment Framework, ver. 1.1, segment 1.1 Strategic Planning: establece objetivos TIC para aclarar las necesidades de información y exige una estrategia/plan estratégico alineado con misión, metas y objetivos organizativos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 87: planificación estratégica de sistemas de información y de comunicaciones y plan de sistemas de información.'),
    ref(academyPlan, 'ITIC Academy, bloque 12 «Planificación estratégica de sistemas de información», edición 2026.2: objetivos, alineación, cartera y elaboración del plan; cotejo curricular.'),
  ], null, 'La respuesta C (ambas) es correcta en el sentido general. Se sustituye el término obsoleto «mecanización» por planificación y control de la incorporación, evolución y uso de SI, y se vinculan los objetivos/políticas con la misión organizativa. La referencia de A1 es directa; el programa A2 no contiene un tema específico de Plan de Sistemas, así que no se fuerza una etiqueta A2.', 'corregida'],
  [5347, ['65'], ['II-3'], ['JavaScript', 'prototipos', 'clases', 'herencia'], [
    ref(mdnProto, 'MDN Web Docs, Inheritance and the prototype chain: el modelo de herencia de JavaScript enlaza objetos mediante prototipos y los métodos de clase residen en la cadena de prototipos.'),
    ref(mdnClasses, 'MDN Web Docs, Classes: la sintaxis class existe, pero las clases JavaScript se construyen sobre prototipos; la distinción de la pregunta es el mecanismo subyacente, no la ausencia de sintaxis de clase.'),
    ref(ecma, 'ECMA-262, especificación del lenguaje: define [[Prototype]], cadenas de prototipos y class definitions.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 65: desarrollo web front-end, scripts de cliente y tecnologías web.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.3: características técnicas de lenguajes y paradigmas de programación.'),
    ref(academyTech, 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», edición 2026: orientación a objetos y tecnologías web; cotejo curricular.'),
  ], null, 'La respuesta A (JavaScript) es la pretendida. Se matiza el enunciado: JavaScript hoy ofrece sintaxis class, pero su modelo de herencia sigue basado en prototipos; Java, C++ y Eiffel usan modelos basados en clases. Así se evita afirmar erróneamente que JavaScript carece de clases en el lenguaje.', 'corregida'],
  [5348, ['88', '89'], ['III-9'], ['SA/SD', 'OMT', 'Unified Process', 'Booch', 'metodologías OO'], [
    ref(structured, 'Yourdon y Constantine, Structured Design: obra de referencia que presenta análisis y diseño estructurados, descomposición funcional, acoplamiento y cohesión; no es un método de análisis/diseño orientado a objetos.'),
    ref(crc, 'Beck y Cunningham, OOPSLA 1989, A Laboratory for Teaching Object-Oriented Thinking: describe CRC cards como herramienta/técnica para pensar y explorar colaboración entre objetos, no como una metodología completa.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 88–89: metodologías de desarrollo, modelos de clases y análisis del dominio.'),
    ref(a2, 'Convocatoria A2 GSI 2025, III.9: análisis y diseño orientado a objetos, proceso unificado, UML y patrones.'),
    ref(academyDesign, 'ITIC Academy, bloque 38 «Análisis, Diseño y Construcción de SI», versión 2026: metodologías OO, UML y métodos estructurados.'),
    ref('https://drive.google.com/file/d/1G11WsRpkh7MPpvxiCEVQmbLc8JzuWvJN/view?usp=drivesdk', 'ITIC Academy, bloque 15 «Metodologías ágiles y ciclo de vida», edición 2026: diferencia metodología, ciclo de vida y práctica; sitúa métodos OO y estructurados.'),
  ], null, 'La respuesta A (SA/SD, análisis y diseño estructurados) es la que no pertenece a los métodos OO. Se sustituye «tarjetas de clase» por «método de Booch»: CRC son una técnica de análisis/diseño OO y podrían ser otro distractor que no es metodología; OMT, Unified Process y Booch sí son referencias/metodologías orientadas a objetos. La corrección elimina la doble respuesta del original.', 'corregida'],
  [5349, ['88'], ['III-2'], ['diseño estructurado', 'acoplamiento común', 'acoplamiento por datos', 'cohesión funcional'], [
    ref(structured, 'Yourdon y Constantine, Structured Design: define principios de acoplamiento/cohesión en diseño modular; el acoplamiento por datos es más débil que el común, y la cohesión funcional reúne elementos que contribuyen a una sola función.'),
    ref(cohesion, 'Dartmouth College, Survey of Major Software Design Methodologies: presenta la jerarquía común→contenido de acoplamiento y la cohesión funcional como módulos que realizan una función específica.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 88: metodologías de desarrollo de sistemas, diseño y análisis.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.'),
    ref(academyDesign, 'ITIC Academy, bloque 38, §5.4 «Cohesión y acoplamiento»: continúa examinando conceptos clásicos de Constantine junto a enfoques actuales.'),
  ], null, 'La respuesta D es correcta: cohesión funcional significa que los elementos del módulo contribuyen a una única función. Se reescribe la opción C: el acoplamiento común comparte datos globales; acceder al interior de otro módulo sería acoplamiento por contenido. Así quedan distractores inequívocamente falsos: común no es mejor/menor que datos y la cohesión procedimental no supera a la secuencial.', 'corregida'],
  [5350, ['88', '94'], ['III-2'], ['ciclo de vida incremental', 'requisitos conocidos', 'prototipo evolutivo', 'prototipo rápido'], [
    ref(nasaLifeCycle, 'NASA Software Engineering Handbook SWE-019, Standard Incremental Life Cycle: requiere sistema completo diseñado temprano e interfaces de módulos definidas; funciona mejor cuando la mayoría de requisitos se conoce al inicio. Contrasta con el ciclo evolutivo, usado cuando faltan requisitos o cambian.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 88 y 94: metodologías de desarrollo y elaboración de prototipos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, III.2: modelos/metodologías de desarrollo y planificación del proceso.'),
    ref(academyLife, 'ITIC Academy, bloque 15 «Metodologías ágiles y ciclo de vida», versión 2026: diferencia prototipos, modelos de ciclo de vida e iteración/incrementalidad.'),
    ref(academyDesign, 'ITIC Academy, bloque 38, tema 94: elaboración de prototipos e interfaces de aplicaciones.'),
  ], null, 'La respuesta C (incremental) es correcta si la idea es que la mayor parte de requisitos se conoce al comienzo y la solución se entrega en incrementos. Se cambia «tipo de prototipo» por «modelo de ciclo de vida», porque la formulación mezclaba prototipado rápido/evolutivo con desarrollo incremental. El modelo evolutivo es apropiado cuando los requisitos iniciales no están claros o cambian.', 'corregida'],
];

const edits = {
  5346: { texto: 'En términos generales, ¿qué objetivos debe apoyar un plan de sistemas de información alineado con la estrategia de una organización?', opciones: [
    'Establecer políticas y objetivos de SI coherentes con la misión y las prioridades organizativas.',
    'Planificar y controlar eficazmente la incorporación, evolución y uso de los sistemas para atender las necesidades de información.',
    'Las dos anteriores respuestas son correctas.',
    'Ninguna de las anteriores respuestas es correcta.'
  ], comentarios: 'La respuesta C es correcta en términos generales. Un plan de SI traduce prioridades organizativas en objetivos y una ruta de actuación, incluyendo la planificación y control de los sistemas. Se sustituye «mecanización», término histórico y estrecho, por ciclo de incorporación y evolución de SI.' },
  5347: { texto: '¿Cuál de los siguientes lenguajes mantiene un modelo de herencia basado en prototipos, aunque también proporcione sintaxis `class`, frente a los modelos basados en clases de los demás?', comentarios: 'La respuesta A (JavaScript) es la pretendida. JavaScript incluye sintaxis class desde ES2015, pero esta se apoya en la cadena de prototipos. La pregunta contrasta el mecanismo de herencia subyacente, no la disponibilidad superficial de declaraciones de clase.' },
  5348: { texto: '¿Cuál de los siguientes es un método de análisis/diseño estructurado, no un método de desarrollo orientado a objetos?', opciones: ['Análisis y diseño estructurados (SA/SD).', 'Object Modeling Technique (OMT).', 'Proceso Unificado (UP/RUP).', 'Método de Booch.'], comentarios: 'La respuesta A es correcta. OMT, el Proceso Unificado y el método de Booch son enfoques orientados a objetos. Se reemplaza CRC por Booch porque las tarjetas CRC son una técnica de análisis/diseño OO, no una metodología completa; incluirlas junto con SA/SD hacía que el original tuviera dos opciones defendibles.' },
  5349: { opciones: [
    'El acoplamiento común es mejor (menor) que el acoplamiento por datos.',
    'La cohesión procedimental presenta mayor cohesión que la secuencial.',
    'El acoplamiento común aparece cuando dos módulos se comunican exclusivamente mediante parámetros de datos.',
    'La cohesión funcional implica que todos los elementos del módulo contribuyen al desarrollo de una única función.'
  ], comentarios: 'La respuesta D es correcta. El acoplamiento común comparte datos globales y es más fuerte que el acoplamiento por datos; el acoplamiento mediante parámetros de datos corresponde al tipo de datos, no al común. La cohesión funcional reúne actividades que colaboran en una función específica y ocupa el extremo alto de la escala clásica.' },
  5350: { texto: 'En un modelo de ciclo de vida del software, ¿qué enfoque suele ser adecuado cuando la mayoría de los requisitos se conoce al inicio y el diseño global puede definirse antes de construir entregas sucesivas?', opciones: ['Prototipado rápido desechable.', 'Ciclo de vida evolutivo.', 'Ciclo de vida incremental.', 'Cualquiera de los anteriores, sin atender al grado de conocimiento de requisitos.'], respuesta_correcta: 2, comentarios: 'La respuesta C (incremental) es correcta según la guía de ciclo de vida de NASA: se determinan las necesidades y requisitos generales y se realizan una serie de builds, definiendo tempranamente el diseño global y las interfaces. El ciclo evolutivo suele adaptarse mejor a requisitos inicialmente incompletos o cambiantes. Se separa el modelo de ciclo de vida de los tipos de prototipado rápido/evolutivo, mezclados en el enunciado original.' }
};

aplicar({ numero: '1005', fecha: '2026-11-12', records, edits });
