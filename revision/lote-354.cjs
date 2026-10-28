const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2086, [78], ['I-9'], ['FACe', 'DIR3', 'órgano gestor', 'oficina contable', 'unidad tramitadora'],
    [
      { url: 'https://administracionelectronica.gob.es/ctt/resources/Soluciones/334/Descargas/FACe-Manual-Proveedores.pdf', referencia: 'PAe/CTT, Manual de proveedores de FACe, apartado Directorio DIR3: identifica los campos Oficina Contable, Órgano Gestor y Unidad Tramitadora; el portal los muestra con codificación DIR3.' },
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, arts. 5 y 9: las facturas B2G deben tener formato estructurado/firma aplicable e identificar los órganos administrativos destinatarios.' }
    ],
    'Manual oficial de FACe y Ley 25/2013',
    'Se sustituye la afirmación no demostrada de que los tres códigos pueden ser iguales por una pregunta precisa sobre los datos de enrutamiento exigidos en FACe. El manual oficial identifica los tres campos DIR3 (Oficina Contable, Órgano Gestor y Unidad Tramitadora); la normativa exige que se identifiquen los órganos administrativos destinatarios. Se elimina la afirmación de que siempre haya que solicitar el código a la entidad o que los códigos deban ser necesariamente distintos.',
    'corregida'
  ],
  [
    2087, [78], ['I-9'], ['UBL', 'OASIS', 'XML', 'documentos de negocio', 'factura electrónica'],
    { url: 'https://docs.oasis-open.org/ubl/UBL-2.4.html', referencia: 'OASIS, Universal Business Language Version 2.4, estándar vigente publicado el 20-06-2024: la especificación define esquemas XML para múltiples documentos de negocio, incluidos Invoice, Order y Despatch Advice; emplea tipos y conceptos basados en UN/CEFACT CCTS.' },
    'OASIS, Universal Business Language (UBL) 2.4',
    'Se conserva como núcleo la distinción correcta: UBL no es una biblioteca XML dedicada únicamente a facturas, sino una biblioteca de documentos de negocio. Se actualizan los distractores para que haya una sola afirmación incorrecta y no dependan de la relación histórica, imprecisa, entre NESUBL y PEPPOL. UBL 2.4 se identifica como estándar OASIS de 2024.',
    'corregida'
  ],
  [
    2088, [78], ['I-9'], ['SET', 'Secure Electronic Transaction', 'tarjeta de pago', 'privacidad', 'histórica'],
    [
      { url: 'https://www.maithean.com/docs/set_bk1.pdf', referencia: 'Visa International y MasterCard International, SET Secure Electronic Transaction Specification, Book 1: Business Description, versión 1.0, 31-05-1997, especialmente § 2.1 y § 3.2: el diseño separa la información del pedido para el comercio de las instrucciones de pago confidenciales destinadas al adquirente/pasarela.' },
      { url: 'https://www.rfc-editor.org/rfc/rfc2828.html', referencia: 'IETF RFC 2828, Internet Security Glossary, entrada SET: define SET como protocolo desarrollado conjuntamente por MasterCard International y Visa International; la norma se anunció el 01-02-1996.' }
    ],
    'Especificación histórica SET 1.0 (Visa/MasterCard) e IETF RFC 2828',
    'Se mantiene como pregunta histórica sobre SET 1.0, no como recomendación de un mecanismo de pago actual. La especificación de 1997 asigna al comercio la información del pedido y cifra las instrucciones de pago para la pasarela/adquirente; por tanto, el comercio no accede a los datos de pago protegidos. SET fue desarrollado conjuntamente por Visa y MasterCard y anunciado en 1996, no en 1990 ni mediante acuerdo bilateral Visa-IBM. El protocolo también contempla autorización/captura y reversión, por lo que se eliminan esos distractores inexactos.',
    'historica'
  ],
  [
    2089, [78], ['I-9'], ['Facturae', 'XAdES', 'XML', 'firma electrónica', 'B2G'],
    [
      { url: 'https://www.facturae.gob.es/formato', referencia: 'Portal oficial Facturae: formato estructurado de factura electrónica basado en XML para las Administraciones Públicas.' },
      { url: 'https://www.facturae.gob.es/content/dam/facturae/formato/polticasfirma/a%29-versi%C3%B3n-3-1/Politica_Firma_formato_facturae_v3_1.pdf', referencia: 'Política oficial de firma de Facturae v3.1: define perfiles de firma avanzada XAdES-EPES y XAdES-XL y la sintaxis/reglas para firmar el documento XML Facturae.' },
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, art. 5: regula el formato estructurado y firma/sello para facturas electrónicas remitidas a Administraciones Públicas.' }
    ],
    'Portal y política de firma Facturae; Ley 25/2013, art. 5',
    'Se conserva como opción incorrecta que Facturae no admita XAdES, pero se concreta la formulación: la política de firma de Facturae define perfiles XAdES para el documento XML. Esto no debe interpretarse como que cualquier factura electrónica, en todo contexto, tenga siempre que utilizar el mismo perfil de firma.',
    'corregida'
  ],
  [
    2090, [78], ['I-9'], ['factura electrónica', 'conservación', 'Real Decreto 1619/2012', 'autenticidad', 'integridad'],
    { url: 'https://www.boe.es/eli/es/rd/2012/11/30/1619/con', referencia: 'Real Decreto 1619/2012, texto consolidado con última actualización publicada el 31-03-2026, arts. 19–21: deben conservarse las facturas recibidas y las copias o matrices de las expedidas; la conservación puede ser electrónica si garantiza autenticidad, integridad, legibilidad y acceso.' },
    'Real Decreto 1619/2012, arts. 19–21, texto consolidado vigente',
    'Se reescribe el enunciado alrededor de la obligación legal de conservación para evitar afirmaciones generales o desactualizables sobre la pasarela gallega, la firma y sus efectos. El artículo 19 obliga a conservar facturas recibidas y copias o matrices de las expedidas; los artículos 20 y 21 permiten la conservación electrónica bajo requisitos de autenticidad, integridad, legibilidad y acceso. Por tanto, es incorrecto afirmar que no hay obligación de conservar copia de la factura electrónica expedida.',
    'corregida'
  ]
];

const edits = {
  2086: {
    texto: 'Para dirigir una factura electrónica a través de FACe, ¿qué datos de enrutamiento debe identificar el proveedor en el directorio DIR3?',
    opciones: [
      'Los códigos de Órgano Gestor y Oficina Contable; la Unidad Tramitadora no se indica en la factura.',
      'Los códigos DIR3 de Oficina Contable, Órgano Gestor y Unidad Tramitadora.',
      'Únicamente el código DIR3 de la oficina de registro general de la Administración.'
    ],
    respuesta_correcta: 1
  },
  2087: {
    texto: 'Sobre UBL (Universal Business Language), señale la afirmación INCORRECTA:',
    opciones: [
      'Es un estándar de OASIS para el intercambio de documentos de negocio mediante XML.',
      'Es una biblioteca de esquemas XML dedicada exclusivamente a representar facturas.',
      'Incluye esquemas para documentos como Order, Invoice y Despatch Advice.',
      'Sus tipos de datos y componentes reutilizables se relacionan con la especificación CCTS de UN/CEFACT.'
    ],
    respuesta_correcta: 1
  },
  2088: {
    texto: 'Según la especificación histórica SET 1.0 (1997), ¿qué objetivo de privacidad perseguía la separación de los mensajes de pedido y de pago?',
    opciones: [
      'Que el comercio recibiera el número completo de tarjeta, pero el adquirente desconociera la operación autorizada.',
      'Que el comercio recibiera la información del pedido sin acceder a las instrucciones de pago protegidas, que se destinaban a la pasarela/adquirente.',
      'Que el banco adquirente recibiera el detalle comercial completo, pero el comercio no conociera los productos pedidos.'
    ],
    respuesta_correcta: 1
  },
  2089: {
    texto: 'Señale la afirmación INCORRECTA sobre Facturae y su política de firma:',
    opciones: [
      'Facturae es un formato estructurado basado en XML.',
      'Se utiliza para facturas electrónicas dirigidas a las Administraciones Públicas conforme al régimen de la Ley 25/2013.',
      'Su política de firma define perfiles XAdES para firmar el documento XML de factura.',
      'Facturae no permite emplear XAdES para la firma electrónica.'
    ],
    respuesta_correcta: 3
  },
  2090: {
    texto: 'Conforme a los artículos 19 a 21 del Real Decreto 1619/2012, señale la afirmación INCORRECTA sobre la conservación de facturas:',
    opciones: [
      'El obligado debe conservar las facturas recibidas y las copias o matrices de las facturas expedidas.',
      'No existe obligación de conservar copia o matriz de una factura expedida por el hecho de que sea electrónica.',
      'La conservación electrónica puede utilizarse si se respetan las condiciones exigidas para los documentos conservados.',
      'La conservación electrónica debe asegurar legibilidad y, cuando proceda, los datos y mecanismos de verificación asociados.'
    ],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '354', fecha: '2026-10-28', records, edits });
