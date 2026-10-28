const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2106, [78], ['I-10'], ['Facturae', 'XAdES', 'XML', 'firma electrónica'],
    [
      { url: 'https://www.facturae.gob.es/formato', referencia: 'Portal oficial Facturae: las facturas para el sector público en el formato Facturae 3.2.x se firman en XML conforme a la política XAdES.' },
      { url: 'https://www.boe.es/eli/es/o/2007/10/05/pre2971', referencia: 'Orden PRE/2971/2007, art. 4 y anexo: para el formato Facturae, el formato de firma se ajusta a XAdES conforme a ETSI TS 101 903.' }
    ],
    'Portal oficial Facturae; Orden PRE/2971/2007, art. 4 y anexo',
    'Se confirma XAdES como respuesta. Facturae es un formato XML; la Orden PRE/2971/2007 y el portal oficial vinculan la firma de Facturae con XML Advanced Electronic Signatures (XAdES). No es un fichero PDF/A ni un formato no estructurado.',
    'vigente'
  ],
  [
    2107, [78], ['I-10'], ['Ley 25/2013', 'factura electrónica', 'exención hasta 5000 euros', 'firma avanzada'],
    [
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-13722', referencia: 'Ley 25/2013, texto consolidado, arts. 4 y 5: todos los proveedores pueden emitir y remitir factura-e; entidades enumeradas están obligadas; la exclusión reglamentaria puede alcanzar facturas de hasta 5.000 euros; las facturas tienen formato estructurado y firma avanzada, admitiéndose también sello avanzado en los términos legales.' },
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Texto consolidado ELI de Ley 25/2013, disposiciones sobre uso, formato y firma de facturas electrónicas del sector público.' }
    ],
    'Ley 25/2013, arts. 4 y 5, texto consolidado',
    'Se conserva el sentido de la clave, pero se sustituye la pregunta de afirmación falsa por una pregunta directa sobre el umbral legal. La Ley 25/2013 permite excluir reglamentariamente de la obligación las facturas de importe hasta 5.000 euros, no 3.000. El enunciado también evita presentar la firma avanzada como la única modalidad, ya que el artículo 5 contempla el sello electrónico avanzado bajo sus requisitos.',
    'corregida'
  ],
  [
    2108, [78], [], ['SET', 'Secure Electronic Transaction', 'confidencialidad', 'integridad', 'autenticación', 'histórico'],
    [
      { url: 'https://www.rfc-editor.org/rfc/rfc2828.html', referencia: 'IETF RFC 2828, definición de SET: protocolo de Visa y MasterCard para confidencialidad de la información de transacción, integridad de pago y autenticación de participantes.' },
      { url: 'https://citeseerx.ist.psu.edu/document?doi=0bff042534505546731830e3a58843e01ba65c86&repid=rep1&type=pdf', referencia: 'SET Secure Electronic Transaction Specification, Book 2: Programmer’s Guide, 31-05-1997, sección Services: confidencialidad, autenticación, integridad y linkage; advierte que SET no proporciona no repudio por sí mismo.' }
    ],
    'IETF RFC 2828; SET 1.0 Specification, Book 2, sección Services',
    'La pregunta se acota al protocolo SET 1.0, una especificación histórica de pago con tarjeta en Internet, y a sus garantías principales: autenticación de participantes, confidencialidad de la información de pago e integridad de mensajes/transacciones. No se atribuye disponibilidad como servicio de seguridad ni no repudio automático: la especificación advierte que este último depende de reglas y políticas adicionales.',
    'historica'
  ],
  [
    2109, [78], ['I-10'], ['Facturae', 'XAdES', 'XMLDSig', 'enveloped-signature', 'política de firma'],
    [
      { url: 'https://www.facturae.gob.es/formato/politicas-firma-electronica', referencia: 'Portal oficial Facturae: publica las políticas de firma de Facturae versiones 3.1 y 3.0.' },
      { url: 'https://www.facturae.gob.es/politica_de_firma_formato_facturae/politica_de_firma_formato_facturae_v3_1.pdf', referencia: 'Política de firma Facturae v3.1, apartado 1.3: la referencia a la factura incluye la transformación XMLDSig http://www.w3.org/2000/09/xmldsig#enveloped-signature; la firma es XAdES-EPES.' }
    ],
    'Política de firma Facturae v3.1, apartado 1.3; portal oficial de políticas',
    'Se mantiene la respuesta, delimitando el alcance: en la política Facturae v3.1, la referencia al XML de la factura aplica la transformación XMLDSig enveloped-signature y la firma incorpora propiedades XAdES-EPES. No se presenta “enveloped” como recomendación general para cualquier documento XML.',
    'vigente'
  ],
  [
    2110, [78], [], ['Apple Pay', 'billetera digital', 'método de pago', 'pasarela', 'comercio electrónico'],
    [
      { url: 'https://developer.apple.com/apple-pay/payment-platforms/', referencia: 'Apple Developer: Apple Pay se integra en apps/web mediante plataformas de comercio y proveedores de servicios de pago; enumera a los gateways/PSP que lo integran.' },
      { url: 'https://pagosonline.redsys.es/desarrolladores-inicio/documentacion-tipos-de-integracion/modulos-pago/', referencia: 'Redsys, documentación para desarrolladores: describe su Pasarela Unificada como integración del TPV Virtual en el comercio.' },
      { url: 'https://developer.paypal.com/api/nvp-soap/payflow/payflow-gateway/', referencia: 'PayPal Developer, Payflow Gateway: producto de pasarela con APIs para procesar pagos, autorizaciones y capturas.' },
      { url: 'https://stripe.com/resources/more/payment-gateways-101', referencia: 'Stripe, explicación de pasarelas de pago y función de intermediación en transacciones en línea; Stripe ofrece servicios de gateway.' }
    ],
    'Apple Developer, Apple Pay Payment Platforms; documentación de Redsys, PayPal Payflow y Stripe',
    'Se reformula porque el término genérico “servicio de pago” puede abarcar carteras, PSP y pasarelas. Apple Pay es una cartera/método de pago que se habilita a través de una plataforma o proveedor de pagos; la documentación de Apple distingue sus proveedores de pasarela/PSP integradores. Redsys, PayPal Payflow Gateway y Stripe documentan productos de pasarela o procesamiento para comercios.',
    'corregida'
  ]
];

const edits = {
  2107: {
    texto: '¿Hasta qué importe pueden las Administraciones Públicas excluir reglamentariamente una factura de la obligación de facturación electrónica prevista en el artículo 4 de la Ley 25/2013?',
    opciones: ['Hasta 1.000 euros', 'Hasta 3.000 euros', 'Hasta 5.000 euros', 'La Ley no permite ninguna exclusión por importe.'],
    respuesta_correcta: 2
  },
  2108: {
    texto: 'En el protocolo histórico SET 1.0 para pagos con tarjeta por Internet, ¿qué conjunto recoge sus principales servicios de seguridad?',
    opciones: [
      'Disponibilidad, confidencialidad e integridad, sin autenticación de participantes.',
      'Autenticación de participantes, confidencialidad de la información de pago e integridad de mensajes y transacciones.',
      'No repudio automático, disponibilidad y anonimato del titular.',
      'Autenticación e integridad, pero sin confidencialidad de la información financiera.'
    ],
    respuesta_correcta: 1
  },
  2109: {
    texto: 'En la política de firma Facturae v3.1, ¿qué transformación XMLDSig se aplica a la referencia que cubre el documento de factura XML?',
    opciones: ['XMLDSig enveloped-signature', 'XMLDSig enveloping', 'PAdES-LTV', 'PAdES-EPES'],
    respuesta_correcta: 0
  },
  2110: {
    texto: '¿Cuál de estas opciones es una cartera/método de pago que el comercio integra a través de sus plataformas o proveedores de pago, en lugar de ser por sí misma una pasarela de pago para el comercio?',
    opciones: ['Redsys', 'Apple Pay', 'Stripe', 'PayPal Payflow Gateway'],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '358', fecha: '2026-10-28', records, edits });
