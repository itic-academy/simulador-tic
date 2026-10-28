const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2061, [88, 89], ['III-1', 'III-3'], ['análisis de sistemas', 'Yourdon', 'modelo esencial', 'modelo de implantación'],
    [
      { url: 'https://books.google.com/books?id=2eFQAAAAMAAJ', referencia: 'YOURDON, Inc., YOURDON Systems Method: Model-driven Systems Development, Yourdon Press, 1993. La obra identifica System Essential Model, Implementation Model, User Implementation Model y las herramientas DFD/entidad-relación.' },
      { url: 'https://research.thea.ie/bitstream/handle/20.500.12065/294/Clare_O_Grady_20130917134438.pdf?isAllowed=y&sequence=1', referencia: 'Estudio académico sobre metodologías de análisis estructurado, § 3.4.1.3: el modelo esencial de Yourdon consta de modelo ambiental y de comportamiento; describe las herramientas de análisis, incluidos DFD y diagramas E-R.' }
    ], 'Yourdon Systems Method (1993); estudio académico de metodología Yourdon',
    'Las tres afirmaciones pueden ser correctas si se delimitan los términos: Yourdon distingue el modelo esencial y el de implantación (con un modelo de implantación de usuario); el esencial comprende el modelo ambiental y el de comportamiento; para este último se usan, entre otras herramientas, DFD y diagramas E-R. Se corrige la errata y se hace explícito el marco «análisis estructurado de Yourdon».',
    'corregida'
  ],
  [
    2062, [65, 124], ['III-14'], ['interfaces', 'usabilidad', 'aplicaciones móviles', 'pull to refresh'],
    { url: 'https://developer.apple.com/design/human-interface-guidelines/progress-indicators#Refresh-content-controls', referencia: 'Apple Human Interface Guidelines, Refresh content controls: control de actualización que aparece al arrastrar hacia abajo el contenido que se quiere recargar.' },
    'Apple Human Interface Guidelines, Refresh content controls',
    'La respuesta Pull to refresh es una interacción reconocida de interfaz para solicitar la actualización del contenido. Se elimina la afirmación subjetiva «entre los más usados» y se pregunta por un gesto concreto, documentado en las guías de interfaz de Apple.',
    'corregida'
  ],
  [
    2063, [64], ['III-4'], ['bases de datos', 'normalización', 'redundancia', 'desnormalización'],
    [
      { url: 'https://learn.microsoft.com/en-gb/ef/core/performance/modeling-for-performance', referencia: 'Microsoft Learn, Modeling for Performance, sección Denormalization and caching: la desnormalización añade datos redundantes a un esquema para reducir uniones costosas y mejorar consultas; se plantea como compromiso pragmático.' },
      { url: 'https://www.postgresql.org/docs/18/indexam.html', referencia: 'PostgreSQL 18, Index Access Method Interface Definition: los índices secundarios están físicamente separados del archivo de tabla y se almacenan como relaciones físicas independientes.' }
    ], 'Microsoft Learn, Modeling for Performance; PostgreSQL 18, Index Access Method Interface',
    'La pregunta original tenía dos respuestas potencialmente falsas: prohibía toda redundancia lógica y afirmaba que nunca puede haber redundancia física. Se sustituye por una pregunta sobre el criterio de diseño: reducir la redundancia no justificada, admitiendo redundancia lógica controlada si está justificada y es gestionable. Las otras opciones expresan prohibiciones o afirmaciones absolutas refutadas por la documentación de desnormalización e índices.',
    'corregida'
  ],
  [
    2064, [108], ['II-8'], ['redes', 'OSI', 'PDU', 'nivel de red'],
    { url: 'https://ptgmedia.pearsoncmg.com/images/1578700930/samplechapter/1578700930_CH01.pdf', referencia: 'Cisco Press, Designing for Cisco Internetwork Solutions, cap. 1: la PDU de capa 3 es el paquete; capa 4, segmento; capa 2, trama.' },
    'Cisco Press, Designing for Cisco Internetwork Solutions, capítulo 1',
    'La PDU de la capa de red (capa 3 del modelo OSI) se denomina paquete. La opción 0 es correcta; SPDU y TPDU corresponden a otras capas/servicios y la trama es la PDU de enlace (capa 2).',
    'vigente'
  ],
  [
    2065, [89], ['III-4'], ['bases de datos', 'modelado conceptual', 'entidad-relación'],
    { url: 'https://www.ibm.com/think/topics/entity-relationship-diagram', referencia: 'IBM, What is an Entity Relationship Diagram?: los diagramas E-R son modelos conceptuales de alto nivel que representan entidades y relaciones para el diseño de bases de datos.' },
    'IBM, What is an Entity Relationship Diagram?',
    '«Diagrama de estructura» no identificaba una técnica concreta y podía abarcar diagramas estructurales usados en modelado conceptual. Se elimina la negación y se pregunta por un método inequívoco: el modelo entidad-relación es un modelo conceptual de datos reconocido.',
    'corregida'
  ]
];

const edits = {
  2061: {
    texto: 'En el método de análisis estructurado de Yourdon, ¿cuál describe correctamente sus modelos y herramientas?',
    opciones: [
      'Distingue el modelo esencial del modelo de implantación, que incluye un modelo de implantación de usuario.',
      'El modelo esencial se compone de un modelo ambiental y un modelo de comportamiento.',
      'El modelo de comportamiento puede describirse, entre otras herramientas, con diagramas de flujo de datos y diagramas entidad-relación.',
      'Todas las afirmaciones anteriores son correctas.'
    ],
    respuesta_correcta: 3
  },
  2062: {
    texto: 'En una interfaz móvil, ¿qué gesto permite solicitar directamente la recarga del contenido de una lista o vista?',
    opcion: [0, 'Pull to refresh: arrastrar el contenido hacia abajo para actualizarlo.']
  },
  2063: {
    texto: 'En el diseño de una base de datos, ¿qué afirmación describe correctamente el tratamiento de la redundancia?',
    opciones: [
      'Se reduce la redundancia lógica no justificada, aunque puede admitirse redundancia controlada cuando el diseño lo justifique.',
      'Toda redundancia, lógica o física, está prohibida en cualquier base de datos.',
      'La redundancia lógica es siempre deseable y no requiere controles de consistencia.',
      'Nunca puede existir redundancia física, por ejemplo en índices o copias almacenadas.'
    ],
    respuesta_correcta: 0
  },
  2065: {
    texto: '¿Cuál de las siguientes técnicas representa conceptualmente entidades de datos y las relaciones entre ellas para diseñar una base de datos?',
    opciones: [
      'Diagrama de Gantt.',
      'Modelo entidad-relación.',
      'Diagrama de despliegue de infraestructura.',
      'Diagrama de flujo de control del programa.'
    ],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '349', fecha: '2026-10-28', records, edits });
