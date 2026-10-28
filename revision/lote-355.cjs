const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2091, [78], ['I-9'], ['factura electrónica', 'autenticidad', 'integridad', 'pista de auditoría', 'Real Decreto 1619/2012'],
    [
      { url: 'https://www.boe.es/eli/es/rd/2012/11/30/1619/con', referencia: 'Real Decreto 1619/2012, texto consolidado, arts. 8 y 10: admite medios de prueba y controles de gestión con pista de auditoría fiable; contempla firma avanzada, EDI con salvaguardas y otros medios comunicados previamente y validados por AEAT.' },
      { url: 'https://www.boe.es/eli/es/rd/2026/03/25/238/con/20260331', referencia: 'Real Decreto 238/2026, que añadió los arts. 8 bis y 10.2 al Reglamento de facturación para el régimen B2B obligatorio; el enunciado se limita expresamente al régimen general.' }
    ],
    'Real Decreto 1619/2012, arts. 8 y 10; RD 238/2026 para delimitar el régimen B2B',
    'Se conserva la idea de que los medios legales alternativos no son acumulativos, pero se corrige el alcance. El artículo 8 permite cualquier medio de prueba admitido y cita controles de gestión con pista de auditoría fiable; el artículo 10.1 menciona, en particular, firma avanzada, EDI con garantías y otros medios comunicados de antemano y validados por AEAT. No es correcto reducirlo a “solo” esos tres ni confundir el régimen general con la regla especial B2B obligatoria incorporada en 2026.',
    'corregida'
  ],
  [
    2092, [78], ['I-9'], ['digitalización certificada', 'homologación', 'Orden EHA/962/2007', 'AEAT', 'Unión Europea'],
    [
      { url: 'https://www.boe.es/eli/es/o/2007/04/10/eha962', referencia: 'Orden EHA/962/2007, art. 7.3.g: puede solicitar la homologación cualquier entidad desarrolladora establecida en España o en otro Estado miembro de la Unión Europea.' },
      { url: 'https://www.boe.es/eli/es/res/2007/10/24/(1)', referencia: 'Resolución de la AEAT de 24-10-2007, procedimiento de homologación del software de digitalización certificado, apartado Octavo.' }
    ],
    'Orden EHA/962/2007, art. 7.3.g, y Resolución AEAT de 24-10-2007',
    'Se confirma la opción A, interpretando “empresa extranjera” en los términos precisos de la norma: la entidad desarrolladora debe estar establecida en España o en otro Estado miembro de la UE. No basta con estar establecida en cualquier tercer país. El artículo aplicable es el 7.3.g y el procedimiento se desarrolló mediante resolución de la AEAT de 24-10-2007.',
    'vigente'
  ],
  [
    2093, [78], ['I-9'], ['Real Decreto 1619/2012', 'entrada en vigor', 'factura simplificada', 'facturación'],
    { url: 'https://www.boe.es/eli/es/rd/2012/11/30/1619/con', referencia: 'Real Decreto 1619/2012, disposición final cuarta: entrada en vigor el 01-01-2013. El preámbulo y los arts. 4 y 7 regulan, respectivamente, facturas completas y simplificadas; el régimen de exenciones se recoge en el art. 3.' },
    'Real Decreto 1619/2012, disposición final cuarta y arts. 3, 4 y 7',
    'El banco marcaba incorrecta la fecha 01-01-2014, y esa fecha sí era falsa: el Reglamento entró en vigor el 01-01-2013. Se convierte en una pregunta directa sobre la fecha para evitar que distractores sobre exenciones tributarias, factura simplificada y sustitución de tiques varíen según el supuesto o la reforma normativa.',
    'corregida'
  ],
  [
    2094, [78], ['I-9'], ['Facturae', 'XAdES', 'firma electrónica', 'FACe', 'XML'],
    [
      { url: 'https://www.facturae.gob.es/formato', referencia: 'Portal oficial Facturae: las facturas B2G estructuradas Facturae 3.2.x se describen con firma electrónica XAdES.' },
      { url: 'https://www.facturae.gob.es/formato/politicas-firma-electronica', referencia: 'Portal de políticas oficiales de firma de Facturae, que publica los perfiles de firma del formato.' }
    ],
    'Portal oficial Facturae: formato 3.2.x y políticas de firma',
    'Se confirma la opción C en el contexto preguntado: el portal oficial describe Facturae 3.2.x para el canal B2G con firma XAdES. El enunciado queda acotado al formato Facturae remitido a Administraciones Públicas; XAdES no se presenta como firma universal obligatoria de toda factura electrónica en cualquier relación o régimen.',
    'vigente'
  ],
  [
    2095, [78], ['I-9'], ['PCI DSS', 'PCI SSC', 'datos de titulares de tarjeta', 'seguridad de pagos'],
    [
      { url: 'https://www.pcisecuritystandards.org/standards/pci-dss/', referencia: 'PCI Security Standards Council, PCI DSS: estándar base para entidades que almacenan, procesan o transmiten datos de titulares de tarjeta/datos de autenticación sensibles o que pueden afectar a la seguridad del entorno de datos.' },
      { url: 'https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/', referencia: 'FAQ oficial PCI SSC: alcance y responsabilidades cuando se externaliza el procesamiento; la externalización no elimina por sí sola las responsabilidades del comercio.' }
    ],
    'PCI Security Standards Council, PCI DSS y FAQ sobre alcance',
    'Se mantiene PCI DSS como respuesta, pero se evita calificarlo como norma legal universal cuya aplicación sea idéntica a toda empresa. El PCI SSC define su estándar para entidades que almacenan, procesan o transmiten datos de titulares/datos de autenticación sensibles y para entidades que puedan afectar a la seguridad del entorno de datos; la validación concreta depende de su función y del programa de las marcas/adquirentes.',
    'corregida'
  ]
];

const edits = {
  2091: {
    texto: 'Con carácter general, fuera de la regla especial para la factura electrónica B2B obligatoria, ¿cómo pueden garantizarse la autenticidad del origen y la integridad del contenido de una factura electrónica conforme a los artículos 8 y 10.1 del Real Decreto 1619/2012?',
    opciones: [
      'Únicamente mediante firma electrónica avanzada basada en certificado cualificado.',
      'Por cualquier medio de prueba admitido en Derecho; entre otros, mediante controles de gestión con una pista de auditoría fiable.',
      'Mediante cualquier EDI, aunque el acuerdo entre las partes no contemple mecanismos de garantía.',
      'Mediante medios alternativos comunicados a la AEAT después de su uso y sin validación previa.'
    ],
    respuesta_correcta: 1
  },
  2093: {
    texto: '¿En qué fecha entró en vigor el Real Decreto 1619/2012, que aprueba el Reglamento por el que se regulan las obligaciones de facturación?',
    opciones: ['1 de enero de 2014.', '1 de enero de 2013.', '1 de enero de 2015.', '1 de enero de 2016.'],
    respuesta_correcta: 1
  },
  2095: {
    texto: '¿Qué estándar del PCI Security Standards Council fija requisitos de seguridad para proteger datos de cuentas de pago en entidades que los almacenan, procesan o transmiten?',
    opciones: ['Amazon Pay.', 'PCI DSS.', 'Google Pay.', 'Alipay.'],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '355', fecha: '2026-10-28', records, edits });
