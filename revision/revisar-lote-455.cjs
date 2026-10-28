const apply = require('./aplicar-lote.cjs');

const s = {
  square: {
    url: 'https://www.iso.org/standard/64764.html',
    referencia: 'ISO/IEC 25000:2014, Guide to SQuaRE, confirmada por ISO en 2026: ofrece una visión general de la serie Systems and software Quality Requirements and Evaluation, sus modelos de referencia y relaciones entre documentos.'
  },
  squareFamily: {
    url: 'https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/iso-25000-square-series.html',
    referencia: 'ISO/IEC JTC 1/SC 7, serie SQuaRE: organiza los estándares en gestión, modelos de calidad, medición, requisitos y evaluación; las divisiones 2503n y 2504n tratan específicamente especificación de requisitos y evaluación de calidad.'
  },
  iso25010: {
    url: 'https://www.iso.org/standard/78176.html',
    referencia: 'ISO/IEC 25010:2023, Product quality model: edición publicada vigente con nueve características; su resumen oficial indica que el modelo sirve para especificar y evaluar calidad a lo largo del ciclo de vida y establecer medidas para esas actividades.'
  },
  halstead: {
    url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-234.pdf',
    referencia: 'NIST SP 500-234, Software Verification and Validation: registra métricas de Halstead derivadas de recuentos de operadores/operandos y métricas aplicables durante el desarrollo; no las define como mediciones directas de fiabilidad.'
  },
  mccabe: {
    url: 'https://doi.org/10.1109/TSE.1976.233837',
    referencia: 'Thomas J. McCabe, “A Complexity Measure”, IEEE Transactions on Software Engineering SE-2(4), 1976: define una medida grafo-teórica de complejidad del flujo de control, basada en caminos básicos e independientes, para gestionar y controlar complejidad.'
  },
  ifpug: {
    url: 'https://ifpug.org/ifpug-standards/fpa',
    referencia: 'IFPUG Function Point Analysis: los puntos de función miden tamaño funcional desde la perspectiva del usuario, independientemente de lenguaje y plataforma; pueden servir de base para estimar coste/calendario y calcular indicadores al relacionarlos con esfuerzo.'
  },
  ifpugHistory: {
    url: 'https://ifpug.org/about-us',
    referencia: 'IFPUG, historia de FPA: atribuye a Allan Albrecht el desarrollo del análisis de puntos de función a finales de los años setenta; la organización conserva y desarrolla el método IFPUG.'
  },
  cocomo: {
    url: 'https://boehmcsse.org/tools/cocomo81/',
    referencia: 'Boehm Center for Systems and Software Engineering, COCOMO 81: identifica el modelo constructivo algorítmico de estimación de esfuerzo/coste y sus variantes Básica, Intermedia y Detallada.'
  },
  iso24765: {
    url: 'https://www.iso.org/standard/71952.html',
    referencia: 'ISO/IEC/IEEE 24765:2017, Systems and software engineering — Vocabulary, edición confirmada y vigente en 2026: vocabulario común para ingeniería de sistemas y software.'
  },
  interop: {
    url: 'https://cdn.standards.iteh.ai/samples/78176/13ff8ea97048443f99318920757df124/ISO-IEC-25010-2023.pdf',
    referencia: 'ISO/IEC 25010:2023, §3.3.2 (muestra del estándar): define interoperability como capacidad de un producto para intercambiar información con otros productos y usar mutuamente la información intercambiada; es subcaracterística de compatibility en el modelo 2023.'
  }
};

const records = [
  [2586, [98], ['III-13'], ['SQuaRE', 'ISO/IEC 25000', 'requisitos de calidad', 'evaluación de calidad'], [s.square, s.squareFamily], '', 'La clave ISO/IEC 25000 es correcta. La serie SQuaRE integra gestión, modelos, medición, requisitos y evaluación de calidad de sistemas y software; las divisiones 2503n y 2504n se ocupan específicamente de requisitos y evaluación. La edición ISO/IEC 25000:2014 está confirmada por ISO en 2026. A1-98/A2-III-13.', 'vigente'],
  [2587, [98], ['III-13'], ['métricas de calidad', 'ciclo de vida', 'ISO/IEC 25010:2023', 'evaluación de software'], [s.iso25010], '', 'Se actualiza el reactivo para usar ISO/IEC 25010:2023 y evitar convertir la antigua división entre calidad interna/externa en una regla universal actual. El modelo vigente apoya especificación y evaluación de la calidad durante el ciclo de vida y la definición de medidas; por tanto, es falsa la afirmación de que las métricas solo pueden aplicarse en una etapa. A1-98/A2-III-13.', 'corregida'],
  [2588, [98, 99], ['III-13'], ['Halstead', 'McCabe', 'puntos de función', 'COCOMO', 'métricas'], [s.halstead, s.mccabe, s.ifpug, s.cocomo], '', 'Se elimina la ambigüedad de afirmar que el análisis de puntos de función es por sí mismo una métrica de productividad: FPA mide tamaño funcional, que puede usarse como numerador de productividad al relacionarlo con esfuerzo. El enunciado nuevo pregunta por una afirmación falsa inequívoca: Halstead deriva volumen, dificultad y esfuerzo de operadores/operandos; McCabe mide complejidad del flujo; COCOMO estima esfuerzo; Halstead no mide directamente fiabilidad. A1-98/A1-99/A2-III-13.', 'corregida'],
  [2589, [98, 99], ['III-13', 'II-15'], ['puntos de función', 'IFPUG', 'Allan Albrecht', 'tamaño funcional', 'independencia tecnológica'], [s.ifpug, s.ifpugHistory], '', 'Se precisa que la pregunta se refiere al método IFPUG. Este mide tamaño funcional independientemente de lenguaje/tecnología y fue desarrollado originalmente por Allan Albrecht a finales de los setenta; una afirmación genérica sobre otros métodos de puntos de función sería ambigua. La opción falsa es atribuir el método IFPUG a Tom DeMarco. A1-98/A1-99/A2-II-15/A2-III-13.', 'corregida'],
  [2590, [98], ['III-13'], ['interoperabilidad', 'compatibilidad', 'ISO/IEC 25010:2023', 'calidad del producto'], [s.iso25010, s.iso24765, s.interop], '', 'Se reemplaza “esfuerzo para conectar”, una descripción no normativa, por la característica definida en ISO/IEC 25010:2023: interoperabilidad, subcaracterística de compatibilidad, es la capacidad de intercambiar información con otros productos y utilizar mutuamente la información intercambiada. A1-98/A2-III-13.', 'corregida']
];

const edits = {
  2587: {
    texto: 'Según el modelo de calidad del producto ISO/IEC 25010:2023, indique la afirmación NO correcta sobre las métricas de calidad del software:',
    opciones: [
      'Pueden apoyar la especificación y evaluación de características de calidad del producto.',
      'Pueden utilizarse para definir medidas de calidad en actividades de distintos momentos del ciclo de vida.',
      'El modelo puede ayudar a establecer objetivos de prueba, criterios de aceptación y medidas de calidad.',
      'Solo pueden aplicarse durante una única etapa del ciclo de vida del software.'
    ],
    respuesta_correcta: 3
  },
  2588: {
    texto: 'En relación con las métricas y la evaluación de la calidad del software, ¿cuál de estas afirmaciones NO es cierta?',
    opciones: [
      'Las métricas de Halstead parten de recuentos de operadores y operandos y derivan, entre otras, medidas de volumen, dificultad y esfuerzo.',
      'La complejidad ciclomática de McCabe es una medida de fiabilidad basada en la frecuencia de fallos en producción.',
      'Function Point Analysis mide el tamaño funcional del software desde la perspectiva de la funcionalidad del usuario.',
      'COCOMO es un modelo algorítmico para estimar esfuerzo y coste de desarrollo.'
    ],
    respuesta_correcta: 1
  },
  2589: {
    texto: '¿Cuál de las siguientes afirmaciones NO es cierta sobre el método IFPUG de puntos de función?',
    opciones: [
      'Puede utilizarse para estimar el tamaño funcional del software que se va a desarrollar.',
      'Mide la funcionalidad desde la perspectiva del usuario, independientemente del lenguaje de programación.',
      'Cuantifica la funcionalidad observable del producto sin basarse en líneas de código de una tecnología concreta.',
      'El método IFPUG fue desarrollado originalmente por Tom DeMarco.'
    ],
    respuesta_correcta: 3
  },
  2590: {
    texto: 'Según ISO/IEC 25010:2023, ¿qué subcaracterística de compatibilidad expresa la capacidad de un producto para intercambiar información con otros productos y utilizar la información intercambiada?',
    opciones: ['Portabilidad.', 'Reusabilidad.', 'Interoperabilidad.', 'Mantenibilidad.'],
    respuesta_correcta: 2
  }
};

apply({ numero: '455', fecha: '2026-10-28', records, edits });
