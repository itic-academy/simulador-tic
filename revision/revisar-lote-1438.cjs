const apply = require('./aplicar-lote.cjs');

const records = [
  [7491, [103], ['III-13'], ['EFQM 2013', 'REDER', 'subcriterio 9b', 'ponderación', 'evaluación'], [
    { url: 'https://digital.gob.es/content/dam/sgad/sefp/es/portalsefp/gobernanza-publica/calidad/Metodolog-as-y-Guias/EFQM_GUIA_DE_INTERPRETACION_EFQM_2013.pdf', referencia: 'AEVAL/BOE, Guía de Interpretación del Modelo EFQM de Excelencia 2013 para las Administraciones Públicas, apartado 7 y tabla de ponderaciones (pp. 49–51): cada subcriterio de resultados 9a y 9b recibe el 50 % del criterio 9; las valoraciones REDER se expresan en una escala 0–100.' },
    { url: 'https://efqm.org/the-efqm-model/', referencia: 'EFQM, The EFQM Model: referencia del modelo actual; el subcriterio 9b pertenece a una versión histórica, no al modelo vigente. La página de EFQM Transform describe explícitamente la edición 2025 mediante siete criterios.' },
    { url: 'https://efqm.org/transform/', referencia: 'EFQM, Model 2025 Expert Agent: indica que el modelo 2025 comprende siete criterios y 29 partes de criterio; confirma que la nomenclatura de nueve criterios/9b citada en la pregunta es histórica.' }
  ], {
    texto: 'En la guía española del Modelo EFQM de Excelencia 2013 para Administraciones Públicas, ¿cómo se pondera la puntuación REDER del subcriterio 9b dentro del criterio 9?',
    opciones: ['Se valora de 0 a 100 y se multiplica por 0,50.', 'Se valora de 0 a 100 y se multiplica por 0,25.', 'Se valora de 0 a 50 y se multiplica por 0,50.', 'Se valora de 0 a 50 y se multiplica por 0,25.'],
    respuesta_correcta: 0
  }, 'Corregida A. El enunciado original no databa el modelo y podía hacer pasar el subcriterio 9b por parte del marco EFQM actual. Se identifica la edición 2013 y se precisa que el cálculo solicitado es la ponderación dentro del criterio 9: el 50 % de la puntuación del criterio; la escala de evaluación REDER es 0–100. No debe extrapolarse esta estructura histórica a las versiones actuales.', 'corregida'],

  [7492, [96], ['III-13'], ['SW-CMM', 'madurez de procesos', 'niveles de madurez', 'histórico'], [
    { url: 'https://insights.sei.cmu.edu/documents/2023/2003_004_001_14156.pdf', referencia: 'Software Engineering Institute, CMU/SEI-2003-TR-004, A CMM-Based Process Improvement Approach: caracteriza los cinco niveles históricos de SW-CMM: Initial, Repeatable, Defined, Managed y Optimizing.' },
    { url: 'https://sei.cmu.edu/documents/1160/1996_005_001_16505.pdf', referencia: 'Software Engineering Institute, CMU/SEI-96-TR-023, Cleanroom Implementation of the CMM for Software, sección 2.1: define los cinco niveles de madurez del Capability Maturity Model for Software y su orden evolutivo.' }
  ], {
    texto: 'En el modelo histórico SW-CMM del Software Engineering Institute, ¿cuál es el orden de sus cinco niveles de madurez?',
    opciones: ['Inicial, repetible, definido, gestionado y optimizado.', 'Inicial, repetible, eficaz, eficiente y optimizado.', 'Inicial, definido, medido, adaptado y optimizado.', 'Inicial, repetible, comprometido, gestionado y optimizado.'],
    respuesta_correcta: 0
  }, 'Corregida A. Se acota a SW-CMM, modelo histórico del SEI, para no confundirlo con otros modelos CMM ni con las constelaciones y versiones posteriores de CMMI. Los niveles, en orden, son Initial, Repeatable, Defined, Managed y Optimizing; se ofrece la traducción española habitual.', 'corregida'],

  [7493, [103], ['III-13'], ['EFQM 2013', 'REDER', 'ISO 9004:2018', 'autoevaluación', 'certificación'], [
    { url: 'https://digital.gob.es/content/dam/sgad/sefp/es/portalsefp/gobernanza-publica/calidad/Metodolog-as-y-Guias/EFQM_GUIA_DE_INTERPRETACION_EFQM_2013.pdf', referencia: 'AEVAL/BOE, Guía de Interpretación EFQM 2013 para Administraciones Públicas: presenta REDER como lógica de evaluación y mejora; describe la cobertura de los nueve criterios del modelo histórico y sus resultados clave.' },
    { url: 'https://www.iso.org/standard/70397.html', referencia: 'ISO 9004:2018, ficha oficial: esta edición proporciona directrices para el éxito sostenido y una herramienta de autoevaluación; la ficha la identifica como vigente tras su revisión de 2023.' },
    { url: 'https://www.iso.org/files/live/sites/isoorg/files/store/en/PUB100208.pdf', referencia: 'ISO, Selection and use of the ISO 9000 family of standards, p. 6: ISO 9004 proporciona orientación y no está destinada a certificación ni a fines contractuales.' },
    { url: 'https://efqm.org/transform/', referencia: 'EFQM, Model 2025 Expert Agent: indica que el modelo 2025 se organiza en siete criterios y 29 partes de criterio; se usa para contextualizar la estructura 9a/9b como propia de la edición histórica 2013.' }
  ], {
    texto: 'Tomando como referencia la versión EFQM 2013 para Administraciones Públicas, señale la afirmación FALSA.',
    opciones: [
      'REDER evalúa Resultados, Enfoques, Despliegue, Evaluación y Revisión, mediante una lógica de evaluación y mejora relacionada con el ciclo PDCA, aunque no idéntica a él.',
      'El modelo recomienda obtener una certificación ISO 9004:2018 como requisito para completar su autoevaluación.',
      'El modelo de excelencia adopta una perspectiva global de la organización mediante criterios facilitadores y de resultados.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. El original afirmaba que EFQM recomienda autoevaluación y posterior certificación con ISO 9004:2018. ISO confirma que 9004:2018 es una guía con herramienta de autoevaluación y que no está destinada a certificación; por tanto, B es inequívocamente falsa. Se fecha explícitamente la versión EFQM: el modelo actual no conserva la estructura de nueve criterios/9b. A se formula como relación de lógica de mejora, no como equivalencia entre REDER y PDCA.', 'corregida'],

  [7494, [96, 98], ['III-3', 'III-13'], ['calidad del software', 'adecuación funcional', 'requisitos funcionales', 'satisfacción de usuarios'], [
    { url: 'https://www.iso.org/standard/78176.html', referencia: 'ISO/IEC 25010:2023, Product quality model: incluye la adecuación funcional como característica de calidad de producto y ofrece un modelo para especificar requisitos y evaluar productos software.' },
    { url: 'https://www.iso.org/standard/78177.html', referencia: 'ISO/IEC 25019:2023, Quality-in-use model: define características que influyen en stakeholders cuando los productos se utilizan en un contexto especificado; por ello, la insatisfacción no tiene una única causa universal.' }
  ], {
    texto: '¿Qué situación constituye directamente un defecto de adecuación funcional del software respecto de los requisitos acordados?',
    opciones: [
      'La infraestructura de hardware no cumple la capacidad prevista, aunque las funciones del software estén implementadas.',
      'El software omite una operación funcional solicitada y aceptada en los requisitos.',
      'El usuario necesita formación para adaptarse a un nuevo procedimiento de trabajo, sin que se haya detectado una función ausente.',
      'El software cumple las funciones especificadas y no se ha identificado una necesidad funcional incumplida.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. El enunciado original pedía una causa «principal» de insatisfacción, algo subjetivo, y mezclaba causas del producto con hardware y adaptación organizativa. Se restringe al defecto de adecuación funcional frente a requisitos acordados: omitir una operación requerida. Las otras opciones describen infraestructura, formación/cambio de trabajo o conformidad funcional.', 'corregida'],

  [7495, [109], ['IV-13'], ['IANA', 'ICANN', 'DNS', 'zona raíz', 'delegación de dominios'], [
    { url: 'https://www.iana.org/domains/root', referencia: 'IANA, Root Zone Management: describe las funciones operativas de asignar responsables de dominios de nivel superior, registrar los datos técnicos de delegación en la zona raíz y publicar el registro.' },
    { url: 'https://www.iana.org/help/gtld-delegation', referencia: 'IANA, Delegating a generic top-level domain: explica que el proceso de delegación incorpora los registros NS a la zona raíz DNS y que las solicitudes se tramitan mediante el sistema Root Zone Management.' },
    { url: 'https://www.iana.org/about/governance', referencia: 'IANA, Governance: las funciones de nombres IANA están encomendadas a Public Technical Identifiers (PTI), afiliada de ICANN, bajo el acuerdo de funciones de nombres ICANN–PTI; distingue la ejecución operativa de la gobernanza/políticas de ICANN.' }
  ], {
    texto: '¿Qué función operativa de Internet mantiene el registro de dominios de nivel superior y registra sus datos de delegación técnica en la zona raíz DNS, de acuerdo con las políticas aplicables?',
    opciones: ['IANA (funciones de nombres prestadas por PTI).', 'ICANN, como organismo que coordina la gobernanza y las políticas globales.', 'RIPE NCC, registro regional de recursos de Internet para Europa, Oriente Medio y partes de Asia Central.', 'IETF, organismo que desarrolla estándares técnicos de Internet.'],
    respuesta_correcta: 0
  }, 'Corregida A. La pregunta original mezclaba «ejecutar políticas globales» (asociado a la coordinación de ICANN) con la operación de la asignación y el sistema de nombres. Se delimita a la función observable de mantener el registro de TLD y registrar delegaciones en la raíz: esa función IANA la presta operativamente PTI, afiliada de ICANN. ICANN coordina gobernanza y políticas; RIPE NCC e IETF tienen funciones distintas.', 'corregida']
];

apply({ numero: '1438', fecha: '2026-11-16', records });
