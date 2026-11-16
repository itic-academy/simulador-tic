const apply = require('./aplicar-lote.cjs');

const records = [
  [7486, [], ['III-5'], ['complejidad algorítmica', 'notación asintótica', 'N log N', 'exponencial', 'cuadrática'], [
    { url: 'https://ocw.mit.edu/courses/6-046j-introduction-to-algorithms-sma-5503-fall-2005/4d7515b05934929969bfa586e76adb15_lec1.pdf', referencia: 'MIT OpenCourseWare, 6.046J Introduction to Algorithms, Lecture 1: la notación asintótica compara el crecimiento del coste con el tamaño de entrada; para tamaños suficientemente grandes, una función Θ(n log n) crece más lentamente que Θ(n²) y que 2ⁿ. Las constantes y casos pequeños afectan tiempos reales.' },
    { url: 'https://web.mit.edu/16.070/www/lecture/big_o.pdf', referencia: 'MIT, Big O notation: formaliza el orden de crecimiento de costes en función del tamaño de entrada y la diferencia entre coste exacto y cota asintótica.' }
  ], {
    texto: 'Suponiendo costes constantes comparables y un tamaño de entrada suficientemente grande, ¿qué algoritmo tiene mejor orden de crecimiento temporal entre T₁(n)=n·log₁₀(n), T₂(n)=2ⁿ y T₃(n)=n(n−1)/2?',
    opciones: ['Alfa (n·log₁₀ n).', 'Beta (2ⁿ).', 'Gamma (n(n−1)/2).', 'No se puede determinar el orden asintótico.'], respuesta_correcta: 0
  }, 'Corregida A. El ítem original no indicaba que se comparaba el crecimiento asintótico ni precisaba el tamaño de la entrada; la eficiencia en tiempo real también depende de constantes, máquina e implementación. Para n grande, n·log₁₀ n pertenece a Θ(n log n), frente a Θ(n²) para Gamma y crecimiento exponencial 2ⁿ para Beta; la base fija del logaritmo solo cambia una constante.', 'corregida'],

  [7487, [93], ['II-3', 'III-9'], ['programación orientada a objetos', 'abstracción', 'encapsulación', 'herencia', 'polimorfismo'], [
    { url: 'https://www.oracle.com/java/technologies/object-oriented.html', referencia: 'Oracle, The Java Language Environment: expone abstracción, encapsulación, modularidad y polimorfismo como conceptos centrales de la orientación a objetos y explica la reutilización mediante herencia.' },
    { url: 'https://www.oracle.com/topics/technologies/newtojava/javaterminology-glossary.html', referencia: 'Oracle Java Technology Terminology: enumera como conceptos primarios de OOP abstracción, encapsulación, polimorfismo y herencia.' }
  ], {
    texto: '¿Qué conjunto reúne los cuatro conceptos comúnmente considerados fundamentales en la programación orientada a objetos?',
    opciones: [
      'Modularidad, ocultación de información y reutilización, sin abstracción ni herencia.',
      'Abstracción, encapsulación, herencia y polimorfismo.',
      'Anidamiento, parametrización, compilación y modularidad.',
      'Ninguna de las anteriores.'
    ], respuesta_correcta: 1
  }, 'Corregida B. La opción A original también describía propiedades vinculadas a OOP (modularidad, ocultación y reutilización), así que el ítem admitía más de una respuesta razonable. Se pregunta ahora por el conjunto de cuatro conceptos fundamentales y se distingue de esos beneficios/características generales.', 'corregida'],

  [7488, [44], ['III-14'], ['Ley de Hick-Hyman', 'Ley de Fitts', 'tiempo de decisión', 'alternativas', 'interfaz'], [
    { url: 'https://people.engr.tamu.edu/pcr/courses/csce431/winter20/UniversalPrinciplesOfDesign.pdf', referencia: 'Lidwell, Holden y Butler, Universal Principles of Design: formula la Ley de Hick como aumento del tiempo de elección al crecer el número de alternativas igualmente probables; referencia los trabajos experimentales de Hick (1952) y Hyman (1953).' },
    { url: 'https://www.yorku.ca/mack/hhci2018.html', referencia: 'York University, Human-Computer Interaction: distingue Hick-Hyman (tiempo de elección) de Fitts (tiempo de apuntado según distancia y tamaño del objetivo), ambos aplicables al diseño de interfaces.' }
  ], {
    texto: 'Según la ley de Hick-Hyman, en una tarea de elección el tiempo de decisión tiende a aumentar aproximadamente con…',
    opciones: [
      'La distancia al objetivo y la relación entre esa distancia y su anchura, según la ley de Fitts.',
      'El logaritmo del número de alternativas disponibles, bajo las condiciones del modelo.',
      'El tamaño del botón únicamente, sin relación con la tarea de elección.',
      'Ninguna relación con el número o la incertidumbre de las alternativas.'
    ], respuesta_correcta: 1
  }, 'Corregida B. Hick-Hyman modela el tiempo de elección en función de la información/número de alternativas; la relación entre tiempo de apuntado, distancia y tamaño del objetivo corresponde a Fitts. La pregunta original mezclaba en el mismo enunciado ambas leyes y mencionaba «alcanzar a pulsar», haciendo plausible la alternativa Fitts.', 'corregida'],

  [7489, [94], ['III-3'], ['prototipado', 'prototipo evolutivo', 'funcionalidad parcial', 'requisitos'], [
    { url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nbsspecialpublication500-148.pdf', referencia: 'NIST Special Publication 500-148, Application Software Prototyping and Fourth Generation Languages: describe el prototipado evolutivo como técnica cuyo prototipo se refina y transforma progresivamente en el sistema final; prototipos pueden simular funcionalidad para aclarar requisitos.' },
    { url: 'https://www.sei.cmu.edu/blog/prototyping-for-developing-big-data-systems/', referencia: 'Software Engineering Institute, Carnegie Mellon University: distingue prototipos desechables de prototipos evolutivos, donde componentes funcionales se refinan incrementalmente hacia el producto.' }
  ], {
    texto: '¿Qué propiedad caracteriza específicamente a un prototipo evolutivo de software?',
    opciones: [
      'Es exclusivamente una descripción documental que nunca se modifica.',
      'Debe implementar desde el primer momento toda la funcionalidad final, completa y lista para producción.',
      'Es una implementación funcional inicial, quizá parcial, que se revisa y amplía iterativamente hasta evolucionar hacia el sistema final.',
      'Es un modelo de interfaz que se descarta necesariamente antes del desarrollo.'
    ], respuesta_correcta: 2
  }, 'Corregida C. Las afirmaciones originales podían ser ciertas para distintos usos de prototipos (mockups de interfaz, simulaciones o implementaciones parciales), por lo que «todas» era defendible. Se delimita la pregunta al prototipo evolutivo: funcionalidad inicial parcial que se refina hasta formar parte del producto final, a diferencia del desechable.', 'corregida'],

  [7490, [98], ['III-13'], ['calidad del software', 'aseguramiento de calidad', 'evaluación', 'conformidad', 'confianza'], [
    { url: 'https://www.iso.org/standard/78176.html', referencia: 'ISO/IEC 25010:2023, modelo de calidad de producto: establece un modelo para especificar requisitos y evaluar la calidad del producto durante su ciclo de vida por desarrolladores, adquirentes, aseguramiento/control de calidad y evaluadores.' },
    { url: 'https://www.iteh.eu/catalog/standards/iso/65ce2d16-a3ae-4cae-8454-e883b2cbe09e/iso-iec-90003-2014', referencia: 'ISO/IEC 90003, directrices para aplicar ISO 9001 al software: el aseguramiento de la calidad proporciona confianza de que se cumplirán requisitos de calidad; se basa en actividades planificadas, evaluación y mejora, no en garantía absoluta de ausencia de defectos en cualquier contexto.' },
    { url: 'https://www.dote.osd.mil/Portals/97/docs/TEMPGuide/IEEE_EIA_12207.2_1997.pdf', referencia: 'IEEE/EIA 12207.2, guía de implementación de procesos de ciclo de vida: el objetivo de QA es asegurar conformidad de productos y procesos con requisitos y planes establecidos; no establece garantía absoluta de que el software siempre funcionará.' }
  ], {
    texto: '¿Qué afirmación es demasiado absoluta para describir el aseguramiento de la calidad del software?',
    opciones: [
      'Proporcionar confianza, basada en evaluación, de que se satisfacen requisitos de calidad definidos.',
      'Garantizar que el software estará libre de defectos y funcionará en cualquier condición, entorno y uso.',
      'Evaluar tanto productos de software como procesos de desarrollo frente a requisitos y planes establecidos.',
      'Ayudar, mediante procesos y mediciones definidos, a obtener resultados más consistentes y previsibles.'
    ], respuesta_correcta: 1
  }, 'Corregida B. La clave original marcaba «hacer los resultados del proceso más predecibles» como aquello para lo que no vale la calidad, lo que no resulta defendible en general: la gestión de calidad busca procesos consistentes. Se redefine el ítem como una afirmación excesiva: QA ofrece confianza evaluable y conformidad con requisitos, pero no garantiza que el software carezca de todo defecto o funcione en cualquier circunstancia.', 'corregida']
];

apply({ numero: '1437', fecha: '2026-11-16', records });
