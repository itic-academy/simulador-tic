const apply = require('./aplicar-lote.cjs');

const records = [
  [2436, [96], ['III-7'], ['complejidad ciclomática', 'McCabe', 'caminos linealmente independientes', 'grafo de flujo de control'], [
    { url: 'https://nvlpubs.nist.gov/nistpubs/ir/2020/NIST.IR.8289.pdf', referencia: 'NIST IR 8289, tabla de medidas de producto software: define complejidad ciclomática V(G) como número de caminos linealmente independientes del grafo de flujo de control; incluye las formas e−n+2p y d+1.' },
    { url: 'https://doi.org/10.1109/TSE.1976.233837', referencia: 'T. J. McCabe, “A Complexity Measure”, IEEE Transactions on Software Engineering, 1976, DOI 10.1109/TSE.1976.233837; introduce la métrica basada en el grafo de flujo y su número ciclomático.' }
  ], '', 'La definición se comprueba en NIST IR 8289 y en el artículo original de McCabe. Se precisa que el conteo se refiere a caminos linealmente independientes de un grafo de flujo de control, no al número de todos los recorridos posibles, que pueden ser ilimitados por la presencia de bucles. La métrica también se relaciona con pruebas de caminos básicos, sin afirmar que enumera todas las rutas ejecutables.', 'corregida'],
  [2437, [96], ['III-7'], ['BDD', 'Cucumber', 'Gherkin', 'especificaciones ejecutables', 'pruebas de aceptación'], [
    { url: 'https://cucumber.io/docs/', referencia: 'Documentación oficial de Cucumber, Introduction: Cucumber es una herramienta que soporta BDD, lee especificaciones ejecutables en texto y valida el software; estas deben seguir la sintaxis Gherkin y conectarse a la implementación mediante step definitions.' },
    { url: 'https://cucumber.io/docs/gherkin/reference/', referencia: 'Referencia oficial de Gherkin: sintaxis estructurada de las especificaciones ejecutables (Feature, Scenario y pasos como Given/When/Then).' }
  ], '', 'Se corrige el error tipográfico «Herkin» por Gherkin y se separan los papeles: Gherkin es la sintaxis de las especificaciones; Cucumber las interpreta y ejecuta/valida escenarios al asociar los pasos con step definitions. La herramienta soporta BDD, pero no inventa automáticamente pruebas a partir de lenguaje natural sin escenarios e implementaciones de pasos.', 'corregida'],
  [2438, [95], ['III-2'], ['puntos de función', 'IFPUG', 'tamaño funcional', 'estimación de esfuerzo', 'coste'], [
    { url: 'https://www.iso.org/standard/51717.html', referencia: 'ISO/IEC 20926:2009, ficha vigente confirmada en 2024: especifica definiciones y reglas para el método IFPUG de medida del tamaño funcional.' },
    { url: 'https://ifpug.org/ifpug-standards/fpa', referencia: 'IFPUG, Function Point Analysis: los puntos función miden tamaño lógico según la funcionalidad solicitada y proporcionada al usuario; constituyen una base para estimar costes y calendario.' }
  ], '', 'Se mantiene la idea de tamaño/coste probable, pero se corrige la imprecisión de presentar los puntos de función como una medida indirecta del coste. IFPUG e ISO/IEC 20926 los definen como una unidad de tamaño funcional basada en requisitos funcionales; por sí solos no miden esfuerzo, coste, calidad ni errores. El tamaño puede alimentar modelos de estimación si se combina con productividad histórica y otros supuestos.', 'corregida'],
  [2439, [96], ['III-7'], ['ISO/IEC/IEEE 29119', 'gestión de pruebas', 'planificación', 'seguimiento y control', 'finalización', 'ejecución'], [
    { url: 'https://www.iso.org/standard/79428.html', referencia: 'ISO/IEC/IEEE 29119-2:2021, ficha oficial ISO: especifica procesos de prueba en niveles organizativo, gestión de pruebas y pruebas dinámicas.' },
    { url: 'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec-ieee%3A29119%3A-1%3Aed-2%3Av1%3Aen', referencia: 'ISO/IEC/IEEE 29119-1:2022, conceptos generales, definiciones 3.109–3.113: gestión incluye planificación, programación, estimación, seguimiento, informes, control y finalización; enumera procesos de estrategia/planificación, seguimiento/control y finalización. La ejecución corresponde al proceso dinámico de prueba.' }
  ], '', 'Se conserva «Ejecución» como respuesta ajena a los procesos de gestión, delimitando la terminología según la edición publicada vigente. La parte 1 define la gestión y sus procesos (estrategia/planificación, seguimiento y control, finalización); la parte 2:2021 especifica procesos de gestión y procesos dinámicos de prueba. Se corrige la redacción del original y se cita la edición 2021 actual, no la retirada de 2013.', 'corregida'],
  [2440, [95], ['III-2'], ['COCOMO 81', 'estimación paramétrica', 'esfuerzo', 'calendario', 'coste de desarrollo'], [
    { url: 'https://boehmcsse.org/tools/cocomo81/', referencia: 'Boehm Center for Systems and Software Engineering, COCOMO 81: el modelo Basic, Intermediate y Detailed estima coste, esfuerzo y calendario para planificar una actividad de desarrollo de software; referencia el libro original de Barry Boehm, Software Engineering Economics (1981).' },
    { url: 'https://www.nasa.gov/wp-content/uploads/2018/01/handbook_for_software_cost_estimation.pdf', referencia: 'NASA, Handbook for Software Cost Estimation: presenta distribuciones de esfuerzo/calendario por fases y remite a Boehm (1981), mostrando que no se reduce a construcción e integración/pruebas.' }
  ], '', 'El reactivo original mezclaba afirmaciones sobre exclusiones de alcance (formación, conversiones y planificación de instalación) sin precisar la variante de COCOMO ni el contexto de estimación, lo que hacía discutible juzgarlas como reglas universales. Se conserva la trazabilidad y se reemplaza por una pregunta sobre COCOMO 81, cuya ficha de los autores del modelo identifica expresamente sus salidas: coste, esfuerzo y calendario de desarrollo; el coste depende de aplicar una tarifa laboral al esfuerzo.', 'corregida']
];

const edits = {
  2436: {
    texto: 'En la métrica de McCabe, ¿qué representa la complejidad ciclomática V(G) de un grafo de flujo de control de un programa?',
    opciones: [
      'El número de caminos linealmente independientes del grafo. No equivale al total de recorridos posibles si hay bucles.',
      'El tamaño funcional del software medido a partir de entradas, salidas y datos lógicos.',
      'La longitud del programa calculada a partir de operadores y operandos de Halstead.',
      'El número de nodos del grafo, con independencia de las aristas y componentes.'
    ], respuesta_correcta: 0
  },
  2437: {
    texto: '¿Qué herramienta BDD puede ejecutar especificaciones de comportamiento escritas con sintaxis Gherkin cuando sus pasos están asociados a step definitions?',
    opciones: [
      'Gherkin, que es el lenguaje de especificación pero no el ejecutor de los pasos.',
      'Cucumber.',
      'RabbitMQ, que es un sistema de mensajería.',
      'Trocla, que no es el ejecutor de especificaciones BDD descrito.'
    ], respuesta_correcta: 1
  },
  2438: {
    texto: 'En el método IFPUG, ¿qué mide directamente un conteo de puntos de función?',
    opciones: [
      'El esfuerzo de desarrollo en personas-mes, con independencia de la productividad.',
      'El tamaño funcional lógico del software a partir de la funcionalidad que solicita y recibe el usuario.',
      'El número de defectos y la calidad esperada del producto.',
      'El coste monetario total, incluidos formación, instalación y operación.'
    ], respuesta_correcta: 1
  },
  2439: {
    texto: 'En ISO/IEC/IEEE 29119, ¿cuál de estas actividades no es un proceso de gestión de pruebas, sino una actividad del proceso dinámico de prueba?',
    opciones: [
      'Estrategia y planificación de pruebas.',
      'Seguimiento y control de pruebas.',
      'Finalización de pruebas.',
      'Ejecución de pruebas.'
    ], respuesta_correcta: 3
  },
  2440: {
    texto: 'Según la descripción del modelo COCOMO 81 por el centro responsable de mantener su legado, ¿qué estima para planificar un nuevo desarrollo de software?',
    opciones: [
      'Coste, esfuerzo y calendario de desarrollo; el coste se obtiene aplicando una tarifa al esfuerzo estimado.',
      'Únicamente el número de defectos que se encontrarán después de la entrega.',
      'Solo el tamaño funcional medido en puntos de función, sin estimar esfuerzo ni calendario.',
      'La probabilidad de que una organización supere una auditoría de calidad.'
    ], respuesta_correcta: 0
  }
};

apply({ numero: '425', fecha: '2026-10-28', records, edits });
