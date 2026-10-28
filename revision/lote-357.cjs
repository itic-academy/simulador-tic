const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2101, [78], ['I-10'], ['Facturae', 'AEAT-CCI', 'factura electrónica', 'Administración pública'],
    [
      { url: 'https://sms.carm.es/sms/facturae/info.xhtml', referencia: 'Servicio de factura electrónica de la Comunidad Autónoma de la Región de Murcia: identifica Facturae como denominación actual del formato XML usado por la AEAT y AEAT-CCI como denominación anterior.' },
      { url: 'https://www.boe.es/eli/es/o/2007/10/05/pre2971', referencia: 'Orden PRE/2971/2007, norma de establecimiento del formato Facturae para facturación electrónica dirigida a la AGE; contexto histórico y normativo del formato.' }
    ],
    'Servicio oficial de facturae CARM; Orden PRE/2971/2007',
    'Se reemplaza la pregunta negativa y el distractor no acreditado «FacturaDTD». La clave histórica AEAT-CCI se pregunta de forma positiva y con contexto: el servicio de factura electrónica de la CARM indica que el formato XML de la AEAT se conoce actualmente como Facturae y anteriormente como AEAT-CCI. No se generaliza afirmando que exista un único formato de factura electrónica.',
    'corregida'
  ],
  [
    2102, [78], [], ['XMT', 'MPEG-4', 'comercio electrónico', 'intercambio de documentos'],
    [
      { url: 'https://www.loc.gov/preservation/digital/formats/fdd/fdd000156.shtml', referencia: 'Library of Congress, descripción de XMT según ISO/IEC 14496-11: sintaxis textual XML para describir escenas y contenido multimedia MPEG-4, no un estándar de documentos comerciales.' },
      { url: 'https://docs.oasis-open.org/ubl/UBL-2.3.html', referencia: 'OASIS, Universal Business Language 2.3: biblioteca de documentos empresariales para transacciones, como facturas y pedidos.' },
      { url: 'https://unece.org/trade/uncefact/unedifact', referencia: 'UN/CEFACT, UN/EDIFACT: directorio de mensajes normalizados para intercambio electrónico de datos de administración, comercio y transporte.' }
    ],
    'Library of Congress, XMT / ISO 14496-11; OASIS UBL 2.3; UN/CEFACT UN/EDIFACT',
    'Se mantiene XMT como clave, pero se acota la comparación. XMT es la sintaxis textual XML para descripción de escenas multimedia MPEG-4 (ISO/IEC 14496-11), mientras EDIFACT y UBL son estándares de intercambio/documentos de negocio y ebXML es una familia de especificaciones de negocio electrónico. Así se evita la vaguedad de llamar a todos simplemente «estándares de intercambio de datos».',
    'corregida'
  ],
  [
    2103, [78], ['I-10'], ['NRC', 'Número de Referencia Completo', 'AEAT', 'pasarela de pagos'],
    [
      { url: 'https://sede.agenciatributaria.gob.es/Sede/ayuda/consultas-informaticas/pago-impuestos-deudas-tasas-ayuda-tecnica/que-nrc.html', referencia: 'AEAT: define NRC como Número de Referencia Completo y describe su función de identificador del ingreso tributario.' },
      { url: 'https://administracionelectronica.gob.es/ctt/pagos', referencia: 'PAe/CTT, ficha del servicio común de pasarela de pagos en producción: el servicio ePago permite consultar pagos y verificar el NRC.' }
    ],
    'AEAT, qué es el NRC; PAe/CTT, Pasarela de pagos en producción',
    'Se confirma la respuesta «Número de Referencia Completo». La AEAT da esa denominación al identificador del ingreso y la ficha actual de ePago/PAe incluye su consulta y verificación dentro del servicio de pasarela.',
    'vigente'
  ],
  [
    2104, [78], ['I-10'], ['ePago', 'pasarela de pagos', 'certificado de servidor', 'AEAT', 'servicio común'],
    [
      { url: 'https://administracionelectronica.gob.es/ctt/pagos', referencia: 'PAe/CTT, ficha actual en producción del servicio común: requiere certificado de servidor de persona física, jurídica o componente emitido por autoridad homologada por AEAT; el organismo no instala infraestructura/software específico; ePago es centralizado.' }
    ],
    'PAe/CTT, Pasarela de pagos, ficha del servicio en producción y apartado Requisitos',
    'Se confirma A con precisión: la ficha vigente solicita al organismo usuario un certificado de servidor, que puede ser de persona física, jurídica o componente, emitido por una autoridad homologada por la AEAT. No es un certificado de sede electrónica. La integración ePago es centralizada y no exige instalar software/hardware específico ni disponer de una pasarela propia.',
    'vigente'
  ],
  [
    2105, [78], ['I-10'], ['Facturae', '3.2', '3.2.1', '3.2.2', 'Ley 25/2013', 'factura B2G'],
    [
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, disposición adicional segunda: identifica Facturae 3.2 y firma XAdES como formato de referencia mientras no se apruebe la orden prevista en el artículo 5.' },
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2017-9982', referencia: 'Resolución conjunta publicada por Resolución de 24-08-2017; aprueba Facturae 3.2.2, plenamente aceptable como versión corregida de 3.2, y entra en vigor en las relaciones con proveedores el 25-02-2018.' },
      { url: 'https://www.facturae.gob.es/formato/ultima-version', referencia: 'Portal oficial Facturae: 3.2.2 es la última versión, aunque también pueden usarse las versiones 3.2.1 y 3.2.' }
    ],
    'Ley 25/2013, DA 2.ª; BOE-A-2017-9982; portal oficial Facturae, últimas versiones',
    'Se conserva la opción 3: la disposición adicional segunda de la Ley 25/2013 fija Facturae 3.2 como referencia original y la resolución de 25-07-2017 aprobó 3.2.2, indicando que es plenamente aceptable; el portal oficial señala que pueden usarse asimismo 3.2.1 y 3.2. Se reescribe el enunciado para no presentar la lista como el mandato literal de la Ley 25/2013 ni confundir la fecha de la resolución conjunta (25 de julio) con su publicación posterior en BOE.',
    'corregida'
  ]
];

const edits = {
  2101: {
    texto: '¿Qué denominación anterior tuvo el formato XML de factura electrónica difundido por la AEAT y que actualmente se conoce como Facturae?',
    opciones: ['UBL', 'EDI', 'FacturaDTD', 'AEAT-CCI'],
    respuesta_correcta: 3
  },
  2102: {
    texto: '¿Cuál de estos formatos se refiere a la descripción textual de escenas multimedia MPEG-4 y no a documentos estructurados de comercio electrónico?',
    opciones: ['EDIFACT', 'ebXML', 'XMT', 'UBL'],
    respuesta_correcta: 2
  },
  2105: {
    texto: 'La Ley 25/2013 identificó Facturae 3.2 como formato de referencia para facturas remitidas a las Administraciones Públicas. ¿Qué versiones Facturae indica el portal oficial que pueden utilizarse, incluida la actualización 3.2.2 aprobada por la resolución conjunta de 25 de julio de 2017?',
    opciones: [
      'e-Factura, versión 2.3',
      'Facturae 3.2 y cualquier versión posterior, sin atender a las publicadas oficialmente.',
      'Facturae 3.2, 3.2.1 y 3.2.2.',
      'ebXML 2.0, hasta que se aprobara la ley de transposición de la Directiva 2006/123/CE.'
    ],
    respuesta_correcta: 2
  }
};

aplicar({ numero: '357', fecha: '2026-10-28', records, edits });
