const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2096, [78], ['I-9'], ['Bitcoin', 'dinero digital', 'descentralización', 'prueba de trabajo'],
    [
      { url: 'https://bitcoin.org/bitcoin.pdf', referencia: 'Satoshi Nakamoto, Bitcoin: A Peer-to-Peer Electronic Cash System, secciones 1, 4 y 11: red entre pares sin tercero de confianza, prueba de trabajo y prevención del doble gasto.' },
      { url: 'https://bitcoin.org/en/faq', referencia: 'Bitcoin.org, FAQ: Bitcoin es una red descentralizada sin autoridad central que controle o emita la moneda.' }
    ],
    'Bitcoin white paper, secciones 1, 4 y 11; FAQ oficial del proyecto',
    'Se corrige la respuesta y se sustituye el distractor inventado “Bitcoin Agreement”, junto con una afirmación absoluta de imposibilidad criptográfica. El protocolo Bitcoin es una red entre pares sin control de gobiernos adheridos a un acuerdo; la prueba de trabajo ordena transacciones y hace costosa la alteración de la cadena, pero no debe resumirse como imposibilidad matemática de cualquier fraude o duplicación.',
    'corregida'
  ],
  [
    2097, [78], ['I-9'], ['factura electrónica', 'Facturae', 'Ley 25/2013', 'factura a Administraciones públicas'],
    [
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, disposición adicional segunda: establece Facturae 3.2 y XAdES para las facturas electrónicas remitidas a las Administraciones Públicas, en tanto no se apruebe la orden ministerial prevista en el art. 5.' },
      { url: 'https://www.facturae.gob.es/formato', referencia: 'Portal oficial Facturae: formato estructurado utilizado en el régimen de facturación al sector público.' }
    ],
    'Ley 25/2013, arts. 5 y disposición adicional segunda; portal oficial Facturae',
    'Se limita la pregunta al régimen español de factura electrónica remitida a las Administraciones Públicas conforme a la Ley 25/2013. Su disposición adicional segunda identifica Facturae 3.2; la cuestión no pregunta por todos los formatos estructurados aceptables en otros regímenes o canales europeos.',
    'corregida'
  ],
  [
    2098, [78], ['I-9'], ['FACe', 'punto general de entrada de facturas', 'portal de proveedores'],
    [
      { url: 'https://administracionelectronica.gob.es/ctt/face', referencia: 'PAe/CTT, ficha oficial de FACe: nombre abreviado FACe y descripción como Punto General de Entrada de Facturas Electrónicas de la AGE, disponible en producción y utilizable por otras AAPP adheridas.' },
      { url: 'https://arta.face.gob.es/', referencia: 'Aviso oficial del portal: desde el 27-02-2026 este sitio ofrece consulta histórica; la remisión y consulta actual de facturas se realiza en el nuevo portal FACe Proveedores.' },
      { url: 'https://proveedores.face.gob.es/inicio', referencia: 'Portal actual de proveedores de FACe, indicado por el propio servicio oficial.' }
    ],
    'Ley 25/2013 y ficha oficial PAe/CTT de FACe; aviso del portal actual de proveedores',
    'Se conserva FACe como nombre de la plataforma/punto de entrada de la AGE, pero se precisa que la pregunta pide el nombre del sistema, no una URL ni la interfaz web antigua. Desde el 27-02-2026, el portal antiguo queda para consulta histórica y el portal de proveedores actual es proveedores.face.gob.es.',
    'corregida'
  ],
  [
    2099, [78], ['I-9'], ['FACe', 'Administraciones públicas', 'adhesión', 'Ley 25/2013'],
    [
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, art. 6 y disposición adicional quinta: CCAA y entidades locales pueden adherirse al punto estatal; la ficha PAe/CTT de FACe lo identifica como servicio disponible para cualquier Administración Pública.' },
      { url: 'https://administracionelectronica.gob.es/ctt/face', referencia: 'PAe/CTT, ficha oficial de FACe: destinatarios “cualquier Administración Pública”; recepción para AGE y otras administraciones adheridas.' }
    ],
    'Ley 25/2013, art. 6 y disposición adicional quinta; ficha PAe/CTT de FACe',
    'La opción correcta es que FACe puede ser utilizado por otras Administraciones Públicas adheridas. El artículo 6 de la Ley 25/2013 prevé adhesión voluntaria de comunidades autónomas y entidades locales al punto estatal; no convierte FACe en un servicio exclusivo de la AGE.',
    'vigente'
  ],
  [
    2100, [78], ['I-9'], ['NRC', 'Número de Referencia Completo', 'AEAT', 'Orden EHA/2027/2007', 'seguridad criptográfica'],
    [
      { url: 'https://www.boe.es/eli/es/o/2007/06/28/eha2027/con', referencia: 'Orden EHA/2027/2007, texto consolidado actualizado a 22-12-2025, art. 4 y anexo VII bis: NRC de 22 posiciones alfanuméricas; AEAT lo genera y registra; la seguridad del sistema actual se basa en confianza, claves asimétricas y certificados electrónicos.' },
      { url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/consultas-informaticas/pago-impuestos-deudas-tasas-ayuda-tecnica/que-nrc.html', referencia: 'AEAT, información vigente sobre el NRC: Número de Referencia Completo, código de 22 caracteres alfanuméricos que identifica el ingreso tributario.' },
      { url: 'https://administracionelectronica.gob.es/ctt/pagos/infoadicional', referencia: 'PAe/CTT, Pasarela de pagos: el componente permite pagos de tasas, consultas y verificación de NRC; si el pago se completa, se recibe el NRC o identificador electrónico.' }
    ],
    'Orden EHA/2027/2007, art. 4 y anexo VII bis, texto consolidado vigente; AEAT y PAe/CTT',
    'El original mezclaba un producto imprecisamente denominado “pasarela PISTA” con una descripción criptográfica histórica. La Orden EHA/2027/2007 consolidada establece que el NRC vigente lo genera y registra la AEAT y que el sistema actual se basa en claves asimétricas y certificados electrónicos; DES/MAC corresponde al esquema previo, no debe presentarse como seguridad actual. Se conserva el concepto preguntando inequívocamente por la regla vigente.',
    'corregida'
  ]
];

const edits = {
  2096: {
    texto: 'Según el diseño descrito en el documento fundacional y la información oficial de Bitcoin, señale la afirmación INCORRECTA:',
    opciones: [
      'Bitcoin funciona mediante una red entre pares sin una autoridad central que controle la emisión o valide unilateralmente todas las transacciones.',
      'La prueba de trabajo ayuda a ordenar los bloques y a hacer costosa la alteración del historial de transacciones.',
      'La moneda pertenece a los Estados que se hayan adherido a un acuerdo internacional llamado “Bitcoin Agreement”.',
      'Los nodos participantes comprueban las reglas del protocolo al validar bloques y transacciones.'
    ],
    respuesta_correcta: 2
  },
  2097: {
    texto: 'En el régimen español de facturación electrónica a las Administraciones Públicas de la Ley 25/2013, ¿qué formato estructurado identifica su disposición adicional segunda?',
    opciones: ['XBRL', 'ebXML', 'UBL', 'Facturae'],
    respuesta_correcta: 3
  },
  2098: {
    texto: '¿Cómo se denomina el Punto General de Entrada de Facturas Electrónicas de la Administración General del Estado (la remisión actual de proveedores se realiza en el portal FACe Proveedores)?',
    opciones: ['FACe', 'AGEFact', 'PortalFact', 'Factbook'],
    respuesta_correcta: 0
  },
  2100: {
    texto: 'Respecto del sistema vigente del Número de Referencia Completo (NRC) regulado por la Orden EHA/2027/2007, señale la afirmación FALSA:',
    opciones: [
      'Las siglas NRC significan Número de Referencia Completo.',
      'El código consta de 22 posiciones alfanuméricas.',
      'La AEAT genera y registra el NRC en sus sistemas, y la seguridad del sistema actual se apoya en claves asimétricas y certificados electrónicos.',
      'La seguridad vigente se basa en calcular el MAC mediante DES con una clave privada de la entidad colaboradora.'
    ],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '356', fecha: '2026-10-28', records, edits });
