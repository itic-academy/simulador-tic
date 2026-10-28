const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2076, [78], ['I-9'], ['factura electrónica', 'Ley 25/2013', 'Administración pública', '15 de enero de 2015'],
    { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, art. 4 y disposición final octava: la obligación prevista para las entidades proveedoras incluidas en el art. 4 produce efectos desde el 15 de enero de 2015.' },
    'Ley 25/2013, arts. 4 y disposición final octava',
    'La fecha de entrada en vigor del art. 4 es el 15-01-2015. Se acota el enunciado a las entidades proveedoras que la propia ley obliga a utilizar factura electrónica ante las Administraciones Públicas; no todas las empresas quedaron obligadas indistintamente. Se sustituyen los meses en inglés y se expresa la fecha sin ambigüedad.',
    'corregida'
  ],
  [
    2077, [78], ['I-9'], ['facturación', 'Real Decreto 1619/2012', 'obligaciones de facturación'],
    { url: 'https://www.boe.es/eli/es/rd/2012/11/30/1619/con', referencia: 'BOE, texto consolidado vigente del Real Decreto 1619/2012, de 30 de noviembre, por el que se aprueba el Reglamento por el que se regulan las obligaciones de facturación; el texto incorpora modificaciones vigentes en 2026.' },
    'Real Decreto 1619/2012, de 30 de noviembre; BOE-A-2012-14696',
    'Se confirma la opción C: el Real Decreto 1619/2012 aprueba el Reglamento de obligaciones de facturación y sigue siendo la norma reglamentaria central en esta materia. Sus reformas posteriores, incluida la de 2026 sobre factura electrónica B2B obligatoria, no alteran la identificación de la norma ni su título.',
    'vigente'
  ],
  [
    2078, [78], ['I-9'], ['factura electrónica', 'integridad', 'autenticidad de origen', 'pista de auditoría', 'Real Decreto 1619/2012'],
    { url: 'https://www.boe.es/eli/es/rd/2012/11/30/1619/con', referencia: 'BOE, Real Decreto 1619/2012, texto consolidado vigente a 2026, arts. 8 y 10: integridad y autenticidad pueden acreditarse por los medios admitidos; los controles de gestión habituales deben producir una pista de auditoría fiable. Para factura B2B obligatoria hay además reglas específicas de los arts. 8 bis y 10.' },
    'Real Decreto 1619/2012, arts. 8, 8 bis y 10, redacción vigente',
    'La opción múltiple original quedó desactualizada y no era exhaustiva: mencionaba términos antiguos de certificados reconocidos y omitía los controles ordinarios, la pista de auditoría fiable y los cambios de 2026. Se pregunta por la regla general vigente del art. 8.3: autenticidad e integridad pueden probarse por cualquier medio admisible; los controles de gestión han de enlazar fiablemente la factura con la entrega o servicio. La factura electrónica B2B obligatoria sigue además el régimen especial añadido en 2026.',
    'corregida'
  ],
  [
    2079, [78], ['I-9'], ['Ley 25/2013', 'presentación de facturas', 'plazo', 'registro administrativo', 'Administraciones Públicas'],
    { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, art. 3: el proveedor presenta ante registro administrativo la factura por bienes entregados o servicios prestados a una Administración Pública en treinta días desde la entrega efectiva o la prestación.' },
    'Ley 25/2013, artículo 3',
    'El ítem original tenía más de una afirmación correcta (ámbito, obligación de factura electrónica desde 2015 y puntos de entrada), por lo que no ofrecía clave única. Se sustituye por una pregunta sobre el plazo literal del art. 3: treinta días desde la entrega efectiva de mercancías o la prestación del servicio; no veinte días.',
    'corregida'
  ],
  [
    2080, [22], [], ['Directiva 2000/31/CE', 'comercio electrónico', 'servicios de la sociedad de la información', 'Unión Europea'],
    { url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:02000L0031-20240217', referencia: 'EUR-Lex, Directiva 2000/31/CE consolidada a 17-02-2024: título oficial y situación vigente con modificaciones. El Reglamento (UE) 2022/2065, art. 89, eliminó sus arts. 12–15, sin derogar la Directiva completa.' },
    'Directiva 2000/31/CE, de 8 de junio de 2000; Reglamento (UE) 2022/2065, artículo 89',
    'La opción B reproduce la directiva y su título oficial. La Directiva 2000/31/CE sigue vigente, aunque modificada: el Reglamento de Servicios Digitales derogó sus artículos 12 a 15. Se conserva la clave y se aclara que no debe citarse como norma íntegra sin modificaciones.',
    'vigente'
  ]
];

const edits = {
  2076: {
    texto: 'La obligación del artículo 4 de la Ley 25/2013 de usar factura electrónica ante las Administraciones Públicas para los proveedores incluidos en ese artículo comenzó a aplicarse el:',
    opciones: ['15 de enero de 2015.', '1 de enero de 2016.', '1 de diciembre de 2016.', '15 de diciembre de 2015.'],
    respuesta_correcta: 0
  },
  2078: {
    texto: 'Según la regla general del artículo 8.3 del Reglamento de obligaciones de facturación vigente, ¿cómo pueden acreditarse la autenticidad de origen y la integridad de una factura?',
    opciones: [
      'Únicamente con firma electrónica avanzada basada en un certificado reconocido.',
      'Basta con que la factura muestre el nombre del remitente, aunque no pueda enlazarse con la operación.',
      'Por cualquier medio de prueba admisible en Derecho; los controles de gestión habituales deben generar una pista de auditoría fiable que conecte factura y operación.',
      'La integridad solo es exigible para facturas electrónicas, no para las expedidas en papel.'
    ],
    respuesta_correcta: 2
  },
  2079: {
    texto: 'Según el artículo 3 de la Ley 25/2013, ¿en qué plazo debe el proveedor presentar en un registro administrativo la factura por bienes entregados o servicios prestados a una Administración Pública?',
    opciones: [
      'En treinta días desde la entrega efectiva de los bienes o la prestación del servicio.',
      'En veinte días desde la entrega efectiva de los bienes o la prestación del servicio.',
      'En quince días desde la fecha de emisión de la factura.',
      'En diez días desde la aprobación de la factura por el órgano gestor.'
    ],
    respuesta_correcta: 0
  }
};

aplicar({ numero: '352', fecha: '2026-10-28', records, edits });
