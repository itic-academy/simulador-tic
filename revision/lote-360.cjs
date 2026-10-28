const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2116, [78], [], ['coste por lead', 'CPL', 'captación de contactos', 'marketing de afiliación'],
    [
      { url: 'https://www.iab.com/wp-content/uploads/2016/11/IAB-Affiliate-Marketing-Handbook_2016.pdf', referencia: 'IAB Australia, Affiliate Marketing Handbook, glosario: CPL (cost per lead) es la comisión por obtener un lead, por ejemplo cuando la persona completa un formulario de consulta.' },
      { url: 'https://www.iab.com/wp-content/uploads/2016/04/Glossary-Formatted.pdf', referencia: 'Interactive Advertising Bureau, glosario: un lead supone que el visitante facilita información suficiente en el sitio del anunciante para utilizarlo como contacto potencial de ventas.' }
    ],
    'IAB, Affiliate Marketing Handbook y glosario de publicidad digital',
    'Se confirma coste por lead: el objetivo descrito es captar datos de potenciales clientes para incorporarlos a una relación propia. El coste por acción es una categoría más amplia; CPL es el modelo específico vinculado a la obtención de un contacto/lead, no a impresiones ni clics. La clasificación describe el modelo, no garantiza por sí sola el consentimiento para comunicaciones comerciales.',
    'vigente'
  ],
  [
    2117, [78], ['I-10'], ['pasarela de pagos AEAT', 'ePago', 'certificado de servidor', 'SCSP'],
    [
      { url: 'https://administracionelectronica.gob.es/ctt/pagos', referencia: 'PAe/CTT, ficha vigente de Pasarela de pagos: el servicio ePago centralizado se integra por servicios web; para autorización de uso se requiere certificado de servidor de persona física, jurídica o componente homologado por AEAT y comunicar serie/clave pública.' }
    ],
    'PAe/CTT, ficha de la Pasarela de pagos (ePago), requisitos',
    'Se confirma la opción del certificado de servidor de persona física, jurídica o componente aceptado por AEAT. La ficha vigente indica que el servicio centralizado funciona mediante servicios web y no requiere que el organismo despliegue infraestructura específica; el certificado de sede no es el requisito indicado.',
    'vigente'
  ],
  [
    2118, [78], [], ['SSL', 'TLS', '3-D Secure', 'SET', 'UCAF', 'seguridad del transporte'],
    [
      { url: 'https://www.rfc-editor.org/rfc/rfc8446.html', referencia: 'IETF RFC 8446, TLS 1.3: protocolo de seguridad de propósito general para proteger comunicaciones en transporte; no es un protocolo de mensajes de pago con tarjeta.' },
      { url: 'https://www.rfc-editor.org/rfc/rfc7568.html', referencia: 'IETF RFC 7568: SSL 3.0 está obsoleto y no debe negociarse; en sistemas actuales debe usarse una versión segura de TLS.' },
      { url: 'https://www.emvco.com/emv-technologies/3d-secure/', referencia: 'EMVCo, 3-D Secure: protocolo para autenticar al consumidor en pagos de comercio electrónico con tarjeta.' },
      { url: 'https://www.rfc-editor.org/rfc/rfc2828.html', referencia: 'IETF RFC 2828, glosario: SET es una especificación para transacciones de pago electrónico con tarjetas.' }
    ],
    'IETF RFC 8446 y RFC 7568; EMVCo 3-D Secure; IETF RFC 2828 (SET)',
    'Se precisa el contraste: SSL fue un protocolo de seguridad de la capa de transporte de propósito general, no diseñado específicamente para mensajes de transacción de tarjeta. La denominación SSL está obsoleta (SSL 3.0 no debe usarse); en despliegues actuales se emplea TLS. SET, 3-D Secure y UCAF se relacionan con pagos con tarjeta. Se evita sugerir que SSL sea hoy una opción segura.',
    'corregida'
  ],
  [
    2119, [78], [], ['PCI DSS', 'SAQ', 'ROC', 'QSA', 'acquirer', 'marcas de pago'],
    [
      { url: 'https://www.pcisecuritystandards.org/faqs/1473/', referencia: 'PCI SSC FAQ 1473: las entidades que aceptan la evidencia de cumplimiento, normalmente marcas de pago y adquirentes, determinan el método de validación y reporte aplicable (ROC o SAQ).' },
      { url: 'https://www.pcisecuritystandards.org/faqs/1133/', referencia: 'PCI SSC FAQ 1133: la elegibilidad y el tipo de SAQ dependen del escenario; el comercio consulta a la entidad que aceptará el informe, normalmente adquirente o marcas de pago.' },
      { url: 'https://www.pcisecuritystandards.org/assessors_and_solutions/qualified_security_assessors/', referencia: 'PCI SSC, programa QSA: los QSA son asesores independientes cualificados por PCI SSC para realizar evaluaciones PCI DSS; no se exige siempre un QSA a toda entidad.' }
    ],
    'PCI Security Standards Council, FAQs 1473 y 1133 y programa QSA',
    'Se elimina el umbral universal de 80.000 transacciones y la falsa libertad de elegir el método. Las marcas de pago/adquirentes que aceptan la evidencia determinan el método de validación y reporte (por ejemplo ROC o SAQ) y la elegibilidad del comercio; el tipo de SAQ depende del entorno y sus criterios. Un QSA no es obligatorio para todo caso.',
    'corregida'
  ],
  [
    2120, [78], ['I-10'], ['FACe', 'Resolución 10 octubre 2014', 'condiciones técnicas normalizadas', 'punto general de entrada'],
    [
      { url: 'https://www.boe.es/eli/es/res/2014/10/10/(5)/con', referencia: 'Resolución de 10-10-2014 de la Secretaría de Estado de Administraciones Públicas y de la Secretaría de Estado de Presupuestos y Gastos: establece condiciones técnicas normalizadas del punto general de entrada de factura electrónica.' },
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2014-10660', referencia: 'BOE-A-2014-10660, texto y ficha de publicación: resolución publicada en BOE el 21-10-2014, entrada en vigor el 22-10-2014 y firmada por ambas Secretarías de Estado.' }
    ],
    'Resolución de 10 de octubre de 2014, BOE-A-2014-10660',
    'Se corrige el año erróneo del enunciado: la resolución es de octubre de 2014, no de 2004. La clave conjunta (Secretaría de Estado de Administraciones Públicas y Secretaría de Estado de Presupuestos y Gastos) es correcta. Se distingue fecha de resolución (10-10-2014) de publicación (21-10-2014).',
    'corregida'
  ]
];

const edits = {
  2118: {
    texto: '¿Cuál de estas opciones designa un protocolo histórico de seguridad de transporte de propósito general, no un protocolo específico de autenticación o pago con tarjeta? (No debe confundirse SSL, obsoleto, con TLS actual.)',
    opciones: ['SET', 'SSL', '3-D Secure', 'SPA/UCAF'],
    respuesta_correcta: 1
  },
  2119: {
    texto: '¿Quién determina para un comercio el método de validación y reporte del cumplimiento de PCI DSS (por ejemplo, ROC o SAQ) y su elegibilidad para usar un SAQ?',
    opciones: [
      'Siempre un auditor QSA, con independencia del comercio y de las reglas del adquirente.',
      'El comercio, siempre a su elección y sin atender a su entorno de pago.',
      'La entidad que acepta la evidencia de cumplimiento, normalmente el adquirente o las marcas de pago, conforme al escenario y a sus reglas.',
      'El volumen anual inferior a 80.000 transacciones determina por sí solo que se use un SAQ.'
    ],
    respuesta_correcta: 2
  },
  2120: {
    texto: '¿Qué órganos aprobaron conjuntamente la Resolución de 10 de octubre de 2014 que estableció las condiciones técnicas normalizadas del Punto General de Entrada de Facturas Electrónicas?',
    opciones: [
      'La Secretaría de Estado de Administraciones Públicas y la Secretaría de Estado de Presupuestos y Gastos.',
      'La Secretaría de Estado de Hacienda y la Comisión Ministerial de Administración Digital.',
      'La Secretaría de Estado de Telecomunicaciones y para la Sociedad de la Información.',
      'La Secretaría General de Administración Digital.'
    ],
    respuesta_correcta: 0
  }
};

aplicar({ numero: '360', fecha: '2026-10-28', records, edits });
