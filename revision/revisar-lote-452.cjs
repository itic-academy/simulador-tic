const apply = require('./aplicar-lote.cjs');

const s = {
  mpls: {
    url: 'https://www.rfc-editor.org/rfc/rfc3031.html',
    referencia: 'IETF RFC 3031, MPLS Architecture, §§3.27, 4.1 and 4.2: LSPs can use hop-by-hop routing or explicit routing; label switching is the forwarding operation. A claim that every LSP must be statically configured as an explicit path is false.'
  },
  ipvpn: {
    url: 'https://www.rfc-editor.org/rfc/rfc4364.html',
    referencia: 'IETF RFC 4364, BGP/MPLS IP Virtual Private Networks: defines a service-provider architecture using an IP backbone and MPLS labels to provide IP VPNs.'
  },
  vpls: {
    url: 'https://www.rfc-editor.org/rfc/rfc4761.html',
    referencia: 'IETF RFC 4761, Virtual Private LAN Service (VPLS) Using BGP for Auto-Discovery and Signaling: specifies a Layer 2 VPN service over a packet-switched network using MPLS pseudowires.'
  },
  pdp: {
    url: 'https://mitpress.mit.edu/9780262680530/parallel-distributed-processing-volume-1/',
    referencia: 'Rumelhart, McClelland and PDP Research Group, Parallel Distributed Processing, MIT Press: the connectionist account represents knowledge in distributed patterns/weights across interconnected units, contrasting with explicit symbolic structures.'
  },
  backprop: {
    url: 'https://doi.org/10.1038/323533a0',
    referencia: 'Rumelhart, Hinton and Williams, “Learning representations by back-propagating errors”, Nature 323 (1986): describes backpropagation adjusting connection weights in networks of neuron-like units to reduce output error.'
  },
  cocomo: {
    url: 'https://boehmcsse.org/tools/cocomo81/',
    referencia: 'Boehm Center for Systems and Software Engineering, COCOMO 81: identifies the original Basic, Intermediate and Detailed forms and refers to Barry Boehm, Software Engineering Economics (1981) as the full primary reference. In COCOMO 81 the intermediate model adds cost drivers and detailed COCOMO applies them by lifecycle phase; “cost driver” is the conventional term, not “Cost Driven Attribute”.'
  },
  boehmBook: {
    url: 'https://books.google.com/books?id=VphQAAAAMAAJ',
    referencia: 'Barry W. Boehm, Software Engineering Economics, Prentice Hall (1981), original COCOMO reference; its contents include the intermediate model and separate detailed-model cost-driver chapters.'
  },
  halstead: {
    url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-234.pdf',
    referencia: 'NIST SP 500-234 (1996), appendix A.1.4 Code Metrics: Halstead software-science measures use four primitive counts—distinct operators, distinct operands, total operator occurrences and total operand occurrences—and derive length and other measures from them.'
  },
  cmm: {
    url: 'https://insights.sei.cmu.edu/documents/1093/1993_005_001_16214.pdf',
    referencia: 'Software Engineering Institute, CMU/SEI-93-TR-25, Capability Maturity Model Version 1.1: the five maturity levels are Initial, Repeatable, Defined, Managed and Optimizing. This is the historical software CMM; it should not be conflated with later CMMI level terminology.'
  }
};

const records = [
  [2571, [115], ['IV-10'], ['MPLS', 'LSP', 'explicit route', 'hop-by-hop', 'VPN', 'VPLS'], [s.mpls, s.ipvpn, s.vpls], '', 'El original mezclaba afirmaciones absolutas y una comparación de velocidad dependiente del hardware. Se reemplaza por una proposición inequívocamente falsa: MPLS no exige que todo LSP sea una ruta explícita estática. RFC 3031 distingue LSP hop-by-hop y explícitamente encaminados; RFC 4364 y RFC 4761 sustentan los ejemplos de VPN de nivel 3 y VPLS de nivel 2. A1-115/A2-IV-10.', 'corregida'],
  [2572, [70], ['III-5'], ['redes neuronales', 'conexionismo', 'representación simbólica', 'pesos', 'retropropagación'], [s.pdp, s.backprop], '', 'Se acota a redes conexionistas clásicas: no codifican el conocimiento exclusivamente como reglas/símbolos explícitos independientes de la red; los patrones distribuidos en las unidades y conexiones ponderadas representan lo aprendido. Se evitan generalizaciones sobre modelos híbridos. El trabajo original de retropropagación confirma el ajuste de pesos. A1-70/A2-III-5.', 'corregida'],
  [2573, [99], ['II-15'], ['COCOMO 81', 'cost drivers', 'cost driver attributes', 'intermediate', 'detailed', 'estimación de esfuerzo'], [s.cocomo, s.boehmBook], '', 'Se nombra COCOMO 81 y se sustituye la sigla no estándar «CDA (Cost Driven Attributes)» por el término cost drivers. El básico estima principalmente desde tamaño y modo; el intermedio introduce cost drivers y el detallado incorpora su efecto por fases. “Avanzado” puede usarse como otra denominación de Detailed, pero se elimina esa ambigüedad. A1-99/A2-II-15.', 'corregida'],
  [2574, [98], ['III-13'], ['Halstead', 'métricas de software', 'operadores', 'operandos', 'vocabulario', 'longitud'], [s.halstead], '', 'El número de operandos distintos es solo una de las cuatro primitivas; el enunciado original no delimitaba qué aspecto de la técnica preguntaba. Ahora se pregunta por los recuentos base: operadores y operandos distintos y sus ocurrencias totales. NIST SP 500-234 documenta los cuatro y deriva longitud N = N1 + N2 y vocabulario n = n1 + n2. A1-98/A2-III-13.', 'corregida'],
  [2575, [96], ['III-13'], ['Capability Maturity Model', 'CMM for Software', 'niveles de madurez', 'SEI', 'Repeatable'], [s.cmm], '', 'Se corrige la expansión errónea «Capacity Mature Model» y se restringe la pregunta al SEI CMM for Software v1.1, para distinguirlo de CMMI. Sus cinco niveles son Initial, Repeatable, Defined, Managed y Optimizing; “Ideal” no es uno de ellos. A1-96/A2-III-13.', 'corregida']
];

const edits = {
  2571: {
    texto: 'Sobre MPLS, sus LSP y servicios VPN, indique la afirmación FALSA:',
    opciones: [
      'Un LSP puede seguir una ruta encaminada salto a salto o una ruta explícita.',
      'En cada salto MPLS, el encaminador de etiquetas usa la etiqueta recibida para seleccionar una acción de reenvío.',
      'MPLS puede transportar VPN IP de nivel 3 y servicios VPLS de nivel 2.',
      'Todo LSP MPLS debe ser una ruta explícita estática configurada íntegramente antes de enviar tráfico.'
    ],
    respuesta_correcta: 3
  },
  2572: {
    texto: 'En las redes neuronales conexionistas clásicas, señale la afirmación FALSA:',
    opciones: [
      'El conocimiento se representa exclusivamente mediante símbolos y reglas explícitos, independientes de las conexiones ponderadas de la red.',
      'Las unidades de procesamiento se interconectan y los pesos influyen en la propagación de señales.',
      'Un algoritmo de aprendizaje puede ajustar los pesos para reducir el error entre salidas obtenidas y deseadas.',
      'La retropropagación es un procedimiento conocido para entrenar redes neuronales.'
    ],
    respuesta_correcta: 0
  },
  2573: {
    texto: 'En el modelo clásico COCOMO 81, ¿qué variantes incorporan atributos de coste (cost drivers) para ajustar la estimación de esfuerzo?',
    opciones: [
      'Solo el modelo Básico.',
      'Solo el modelo Intermedio.',
      'Solo el modelo Detallado (también llamado avanzado).',
      'Los modelos Intermedio y Detallado.'
    ],
    respuesta_correcta: 3
  },
  2574: {
    texto: '¿Qué recuentos fundamentales sirven de base a las métricas de Halstead?',
    opciones: [
      'Operadores distintos, operandos distintos y número total de apariciones de cada uno.',
      'Solo el número total de operandos.',
      'Tiempo de ejecución y consumo máximo de memoria.',
      'Número de usuarios, transacciones y defectos detectados en producción.'
    ],
    respuesta_correcta: 0
  },
  2575: {
    texto: 'En el Capability Maturity Model for Software (SEI CMM) versión 1.1, ¿cuál de estos NO es uno de sus cinco niveles de madurez?',
    opciones: ['Initial.', 'Repeatable.', 'Defined.', 'Ideal.'],
    respuesta_correcta: 3
  }
};

apply({ numero: '452', fecha: '2026-10-28', records, edits });
