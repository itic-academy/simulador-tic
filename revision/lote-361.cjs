const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2121, [78], [], ['Urbinet', '3-D Secure', 'UCAF', 'SET', 'pendiente de fuente primaria'],
    '', '',
    'No se valida la clave «Urbinet»: la búsqueda en catálogos y documentación primaria consultada no permitió identificar un estándar o producto de pago con ese nombre. La existencia de SET, EMV 3-D Secure y UCAF sí está documentada, pero la ausencia de resultados no prueba que la denominación nunca se haya usado. Se conserva el original y queda pendiente de fuente primaria; no se cuenta como verificada.',
    'pendiente_fuente'
  ],
  [
    2122, [78], ['I-9'], ['LSSI', 'Ley 34/2002', 'artículo 21', 'correo comercial', 'consentimiento', 'relación contractual previa'],
    [
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758', referencia: 'Ley 34/2002, texto consolidado, art. 21: prohíbe comunicaciones promocionales electrónicas no solicitadas ni expresamente autorizadas; exceptúa relación contractual previa, datos obtenidos lícitamente y productos/servicios propios similares, con oposición sencilla y gratuita.' },
      { url: 'https://www.boe.es/eli/es/lo/2018/12/05/3/con', referencia: 'Ley Orgánica 3/2018, marco de protección de datos; no sustituye las condiciones específicas del art. 21 LSSI para correo promocional.' }
    ],
    'Ley 34/2002, art. 21, texto consolidado; Ley Orgánica 3/2018 como marco complementario',
    'La opción elegida en el original es incompleta porque omite la excepción de clientes previos. Se reescribe para recoger la regla general de solicitud/autorización y la excepción de relación contractual previa para productos propios similares, condicionada a obtención lícita del contacto y a ofrecer oposición fácil y gratuita. La LOPDGDD no es una autorización general para enviar publicidad.',
    'corregida'
  ],
  [
    2123, [78], [], ['pasarela de pagos', 'pasarela de pago', 'software', 'intermediación', 'procesador'],
    [
      { url: 'https://www.upu.int/UPU/media/upu/publications/Final-November-update-UPU-E-Commerce-Guide_2020_EN.pdf', referencia: 'Unión Postal Universal, E-Commerce Guide, apartado de payment gateways: describe la pasarela como middleware entre tienda en línea y procesador, que recibe la solicitud de pago y la transmite; no como dispositivo hardware que necesariamente se instala en el servidor.' },
      { url: 'https://administracionelectronica.gob.es/ctt/pagos', referencia: 'PAe/CTT, Pasarela de pagos ePago: servicio centralizado integrable por servicios web; no requiere instalar hardware/software específico en la infraestructura del organismo.' }
    ],
    'UPU E-Commerce Guide, payment gateways; PAe/CTT, Pasarela ePago',
    'Se mantiene la idea de que la pasarela no es un dispositivo físico obligatorio instalado en el servidor web, pero se evita la falsa dicotomía hardware/software: gateways pueden ofrecerse como servicio alojado, biblioteca o componente según arquitectura. Se explicita la función de intermediación entre comercio y procesador.',
    'corregida'
  ],
  [
    2124, [78], [], ['SET', 'PayPal', 'EMV 3-D Secure', 'EMV Secure Remote Commerce', 'protocolo', 'servicio de pago'],
    [
      { url: 'https://www.rfc-editor.org/rfc/rfc2828.html', referencia: 'IETF RFC 2828: SET (Secure Electronic Transaction) es un protocolo abierto desarrollado por Mastercard y Visa para transacciones de pago con tarjeta.' },
      { url: 'https://www.emvco.com/emv-technologies/3-d-secure/', referencia: 'EMVCo: EMV 3-D Secure es un protocolo de autenticación de consumidores para pagos e-commerce con tarjeta.' },
      { url: 'https://www.emvco.com/emv-technologies/secure-remote-commerce/', referencia: 'EMVCo: Secure Remote Commerce es una especificación común para soluciones de pago de comercio electrónico Click to Pay.' },
      { url: 'https://www.paypal.com/us/business/accept-payments', referencia: 'PayPal describe sus productos como soluciones/proveedor para que comercios acepten pagos en línea; es un servicio de pago, no el nombre de un protocolo de seguridad de tarjeta.' }
    ],
    'IETF RFC 2828; especificaciones EMVCo 3DS y SRC; oferta oficial PayPal para comercios',
    'Se reemplaza «Mastercard True Payment Protocol», cuyo nombre no se logra corroborar en fuentes primarias, y se precisa la categoría preguntada. SET, EMV 3-D Secure y EMV SRC son protocolos/especificaciones de comercio con tarjeta (SET es histórico); PayPal es una solución/servicio para que el comercio acepte pagos, no un protocolo de seguridad. La respuesta pasa a PayPal.',
    'corregida'
  ],
  [
    2125, [78], ['I-10'], ['Ley 25/2013', 'artículo 4', 'factura electrónica B2G', 'empresario individual', 'UTE'],
    [
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, art. 4: entre las categorías obligadas en relaciones con el sector público enumera sociedades anónimas y limitadas, personas jurídicas y entidades sin personalidad que carezcan de nacionalidad española, UTE y otras entidades; no enumera al empresario individual por esa sola condición. Puede existir obligación por otras reglas o circunstancias.' }
    ],
    'Ley 25/2013, art. 4, texto consolidado',
    'Se completa el enunciado truncado y se acota al listado de categorías obligadas del art. 4 en factura electrónica B2G. La opción «empresario individual» es la que no aparece por esa sola condición; no significa que cualquier empresario individual esté exento de emitir facturas electrónicas si otra norma o supuesto le resulta aplicable.',
    'corregida'
  ]
];

const edits = {
  2122: {
    texto: 'Según el artículo 21 de la Ley 34/2002, ¿cuándo pueden enviarse comunicaciones promocionales por correo electrónico a una persona?',
    opciones: [
      'Están permitidas en todos los casos si se identifica al remitente.',
      'Están permitidas mientras el destinatario no manifieste oposición.',
      'La normativa de protección de datos las permite sin atender a la LSSI.',
      'Si fueron solicitadas o autorizadas expresamente; también cabe la excepción legal de relación contractual previa para productos propios similares, con oposición sencilla y gratuita.'
    ],
    respuesta_correcta: 3
  },
  2123: {
    texto: 'Señale la afirmación falsa sobre una pasarela de pagos de comercio electrónico:',
    opciones: [
      'Puede intermediar entre la tienda y el procesador o adquirente para transmitir solicitudes y resultados de pago.',
      'Puede integrarse como servicio remoto, API o componente de software según la arquitectura elegida.',
      'Necesariamente es un dispositivo hardware que se instala en el servidor web de la tienda.',
      'Puede desacoplar el flujo de pago de parte de la lógica de la aplicación de comercio.'
    ],
    respuesta_correcta: 2
  },
  2124: {
    texto: '¿Cuál de estas opciones es un servicio/proveedor de pago para comercios y no una especificación o protocolo del ecosistema de pagos electrónicos con tarjeta?',
    opciones: ['SET (histórico)', 'PayPal', 'EMV 3-D Secure', 'EMV Secure Remote Commerce (SRC)'],
    respuesta_correcta: 1
  },
  2125: {
    texto: 'Según el artículo 4 de la Ley 25/2013, ¿cuál de estos tipos de proveedor no aparece, por esa sola condición, entre las categorías obligadas a usar factura electrónica al facturar a una Administración Pública?',
    opciones: ['Sociedad de responsabilidad limitada', 'Unión temporal de empresas', 'Empresario individual', 'Persona jurídica que carezca de nacionalidad española'],
    respuesta_correcta: 2
  }
};

aplicar({ numero: '361', fecha: '2026-10-28', records, edits });
