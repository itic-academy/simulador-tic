const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2111, [78], [], ['SEND', 'BME', 'renta fija', 'deuda del Estado', 'mercado secundario'],
    [
      { url: 'https://www.bolsasymercados.es/es/bme-exchange/negociar/plataformas/send.html', referencia: 'BME Exchange, ficha actual de SEND: plataforma electrónica para negociar deuda pública y privada; los particulares pueden comprar y vender Letras, Bonos, Obligaciones y STRIPS del Tesoro en mercado secundario.' },
      { url: 'https://www.bolsasymercados.es/es/bme-exchange/negociar/plataformas/send/compra-venta-deuda-estado.html', referencia: 'BME Exchange, negociación de deuda del Estado mediante SEND y Cuentas Directas.' }
    ],
    'BME Exchange, SEND y compra/venta de deuda del Estado',
    'Se confirma SEND como respuesta, pero se reescribe para precisar que es la plataforma de negociación electrónica secundaria de renta fija en la que se compran y venden valores del Tesoro. No se afirma que sea el servicio de subasta/compra primaria del Tesoro ni que permita «contratar todos» los valores sin matices.',
    'vigente'
  ],
  [
    2112, [78], ['I-10'], ['Ley 56/2007', 'factura electrónica', 'contratación pública', 'sector público estatal'],
    [
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-22440', referencia: 'Ley 56/2007, texto consolidado, art. 1.1: dispone que la facturación electrónica en contratación con el sector público estatal será obligatoria en los términos de la legislación de contratación pública y su desarrollo.' },
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013: desarrolló posteriormente el régimen de factura electrónica y el registro contable en el sector público, incluidas las entidades obligadas y el formato.' }
    ],
    'Ley 56/2007, art. 1.1, texto consolidado; Ley 25/2013, régimen posterior del sector público',
    'Se conserva la respuesta Ley 56/2007, pero se delimita: su artículo 1.1 enuncia la obligatoriedad de la facturación electrónica en la contratación con el sector público estatal, sujeta a la ley de contratación pública y su desarrollo. La Ley 25/2013 articuló después el régimen actual de uso, sujetos obligados y registro contable; no se confunden ambos hitos.',
    'vigente'
  ],
  [
    2113, [78], [], ['UN/EDIFACT', 'REQOTE', 'ORDERS', 'ORDRSP', 'HL7', 'SIU'],
    [
      { url: 'https://service.unece.org/trade/untdid/d16b/trmd/reqote_c.htm', referencia: 'UN/EDIFACT D.16B, especificación oficial del mensaje REQOTE (Request for quote), usado en EDI entre socios comerciales.' },
      { url: 'https://service.unece.org/trade/untdid/d19b/trmd/trmdi1.htm', referencia: 'UN/EDIFACT D.19B, directorio oficial de tipos de mensaje: incluye REQOTE, ORDERS y ORDRSP entre mensajes estándar de Naciones Unidas.' },
      { url: 'https://www.hl7.eu/HL7v2x/v27/std27/ch10.html', referencia: 'HL7 v2.7, capítulo 10.4: SIU significa Schedule Information Unsolicited y es un mensaje HL7 de agenda/citas; no es un tipo de mensaje UN/EDIFACT.' }
    ],
    'UN/CEFACT UNTDID D.16B/D.19B; HL7 v2.7, capítulo 10.4',
    'La expresión genérica «mensaje EDI» es ambigua: EDI describe el intercambio electrónico y puede incluir mensajes HL7. Se reescribe como pregunta sobre tipos de mensaje UN/EDIFACT. REQOTE, ORDERS y ORDRSP aparecen en el directorio UN/EDIFACT; SIU es el mensaje HL7 Schedule Information Unsolicited, por lo que es la única opción ajena a UN/EDIFACT.',
    'corregida'
  ],
  [
    2114, [78], ['I-10'], ['Ley 25/2013', 'Ley 9/2017', 'factura electrónica', 'sector público', 'contratación'],
    [
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, norma específica sobre factura electrónica y creación del registro contable de facturas en el sector público.' },
      { url: 'https://www.boe.es/eli/es/o/2007/04/10/eha962', referencia: 'Orden EHA/962/2007: desarrolla aspectos de facturación telemática y conservación electrónica de facturas.' },
      { url: 'https://www.boe.es/eli/es/o/2007/10/05/pre2971', referencia: 'Orden PRE/2971/2007: formato y firma de facturas electrónicas destinadas a la AGE y organismos vinculados.' },
      { url: 'https://www.boe.es/eli/es/l/2017/11/08/9/con', referencia: 'Ley 9/2017, texto consolidado actualizado a 09-04-2026, contiene reglas de contratación pública relacionadas con la presentación y pago de facturas, incluida la normativa de factura electrónica.' }
    ],
    'Ley 25/2013; órdenes EHA/962/2007 y PRE/2971/2007; Ley 9/2017 consolidada',
    'Se elimina la pregunta «cuál no regula», que no tiene una respuesta inequívoca: también la Ley 9/2017 de contratos contiene reglas sobre pago y presentación de facturas conforme a la normativa de factura electrónica. La nueva pregunta pide identificar la norma cuyo objeto específico es impulsar la factura electrónica y crear el registro contable de facturas del sector público: Ley 25/2013.',
    'corregida'
  ],
  [
    2115, [78], ['I-10'], ['FACe', 'portal de proveedores', 'proveedores.face.gob.es', 'factura electrónica'],
    [
      { url: 'https://proveedores.face.gob.es/inicio', referencia: 'Portal oficial actual de proveedores FACe para presentar y consultar facturas electrónicas.' },
      { url: 'https://face.gob.es/es/login', referencia: 'Portal FACe histórico: avisa que desde 27-02-2026 allí solo se consultan facturas remitidas hasta esa fecha y dirige las consultas actuales al Portal de Proveedores.' },
      { url: 'https://listas-ctt.administracionelectronica.gob.es/pipermail/face-soporte/2025-November/000203.html', referencia: 'Aviso de soporte FACe para integradores: el portal proveedor vigente es proveedores.face.gob.es/inicio y el portal legacy queda en consulta.' }
    ],
    'Portal oficial FACe Proveedores y aviso oficial de migración del portal legacy',
    'La URL face.gob.es sigue existiendo, pero el portal antiguo quedó en modo histórico y ya no es la dirección correcta para la presentación/consulta corriente de facturas. Se actualiza la respuesta a https://proveedores.face.gob.es/inicio y se explicita el contexto temporal del cambio.',
    'corregida'
  ]
];

const edits = {
  2111: {
    texto: '¿Qué plataforma electrónica de BME permite negociar en el mercado secundario valores de deuda del Estado como Letras, Bonos y Obligaciones del Tesoro?',
    opciones: ['Sistema Electrónico de Negociación de Deuda (SEND)', 'Facturae', 'COMPRAe', 'Servicio de compra y venta primaria del Tesoro'],
    respuesta_correcta: 0
  },
  2112: {
    texto: '¿Qué ley dispone expresamente que la facturación electrónica en la contratación con el sector público estatal será obligatoria, en los términos de la legislación de contratación pública y su desarrollo?',
    opciones: [
      'Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico',
      'Ley 56/2007, de 28 de diciembre, de medidas de impulso de la sociedad de la información',
      'Ley 59/2003, de 19 de diciembre, de firma electrónica',
      'Ley 39/2015, de 1 de octubre, del procedimiento administrativo común de las Administraciones Públicas'
    ],
    respuesta_correcta: 1
  },
  2113: {
    texto: '¿Cuál de los siguientes no es un tipo de mensaje estándar UN/EDIFACT?',
    opciones: ['REQOTE', 'SIU', 'ORDERS', 'ORDRSP'],
    respuesta_correcta: 1
  },
  2114: {
    texto: '¿Qué ley tiene por objeto específico impulsar la factura electrónica y crear el registro contable de facturas en el sector público?',
    opciones: ['Orden EHA/962/2007', 'Orden PRE/2971/2007', 'Ley 25/2013', 'Ley 9/2017'],
    respuesta_correcta: 2
  },
  2115: {
    texto: 'Desde el cambio al nuevo portal de proveedores de FACe, ¿qué URL deben usar los proveedores para presentar y consultar facturas electrónicas actuales?',
    opciones: ['https://facturae.gob.es/', 'https://face.gob.es/es/login', 'https://proveedores.face.gob.es/inicio'],
    respuesta_correcta: 2
  }
};

aplicar({ numero: '359', fecha: '2026-10-28', records, edits });
