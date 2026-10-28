const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2081, [78], ['I-9'], ['factura electrónica', 'sector público', '5.000 euros', 'Ley 25/2013'],
    { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, art. 4.1: las Administraciones pueden excluir reglamentariamente del uso obligatorio las facturas de importe de hasta 5.000 euros y determinados servicios en el exterior.' },
    'Ley 25/2013, artículo 4.1, texto vigente',
    'Se delimita al régimen de factura electrónica ante el sector público de la Ley 25/2013 y se corrige «inferior a 5.000» por el tenor legal «hasta 5.000 euros», que incluye dicho importe. La exclusión no opera automáticamente: la Administración puede establecerla reglamentariamente.',
    'corregida'
  ],
  [
    2082, [78], ['I-9'], ['Facturae', 'formato estructurado', 'Administración Pública', 'factura electrónica'],
    [
      { url: 'https://www.facturae.gob.es/formato', referencia: 'Portal oficial Facturae: las facturas remitidas a las Administraciones Públicas bajo Ley 25/2013 deben ajustarse al formato estructurado Facturae 3.2.x.' },
      { url: 'https://www.facturae.gob.es/formato/ultima-version', referencia: 'Portal oficial Facturae: publica los esquemas 3.2, 3.2.1 y 3.2.2; 3.2.2 continúa identificada como versión más reciente.' }
    ],
    'Portal oficial Facturae, formato y últimas versiones',
    'Se acota «formato oficial» al envío de facturas a Administraciones Públicas conforme al régimen B2G de la Ley 25/2013, para distinguirlo de los formatos del sistema B2B implantado en 2026. Facturae es el formato estructurado español; el portal oficial mantiene publicadas las versiones 3.2, 3.2.1 y 3.2.2.',
    'corregida'
  ],
  [
    2083, [78], ['I-9'], ['Facturae', 'extensiones', 'línea de factura', 'factura', 'lote'],
    [
      { url: 'https://www.facturae.gob.es/formato/extensiones-formato', referencia: 'Portal oficial Facturae, Extensiones formato: Facturae permite extensiones a nivel de línea, de factura y de lote. Advierte que la admisión en PGEFe depende de aprobación de uso conforme al artículo 2 de la Ley 25/2013.' },
      { url: 'https://bci.inap.es/alfresco_file/c019bac9-940a-48b0-a100-aa7bd6dab719', referencia: 'INAP, cuestionario y plantilla de respuestas del primer ejercicio: la versión completa original de la pregunta incluía como opción correcta que Facturae permite extensiones a nivel de línea, factura o lote; el banco había omitido esa opción.' }
    ],
    'Portal oficial Facturae, Extensiones Formato',
    'El registro importado omitía la opción correcta que aparecía en el cuestionario original de INAP y marcaba como correcta una afirmación incorrecta sobre un supuesto software AEAT PDF417. Se reconstruye una pregunta actual con una única respuesta: Facturae admite extensiones estructuradas a nivel de línea, factura o lote, aunque en puntos de entrada públicos solo se admiten las extensiones aprobadas conforme a su normativa. Se sustituyen distractores anacrónicos por afirmaciones actuales verificables sobre FACe y el certificado.',
    'corregida'
  ],
  [
    2084, [78], ['I-9'], ['Facturae', 'versión 3.2.2', 'resolución 2017', 'formato estructurado'],
    [
      { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2017-9982', referencia: 'Resolución de 24 de agosto de 2017, publicada en el BOE de 25-08-2017: publica la versión 3.2.2 del formato Facturae.' },
      { url: 'https://www.facturae.gob.es/formato/ultima-version', referencia: 'Portal oficial Facturae, consulta actual: 3.2.2 continúa como versión más reciente, con posibilidad de uso de las anteriores 3.2 y 3.2.1.' }
    ],
    'Resolución BOE-A-2017-9982; portal oficial Facturae',
    'Se precisa el hito temporal: la resolución publicada el 25 de agosto de 2017 aprobó la versión Facturae 3.2.2, pero su entrada en uso por FACe fue posterior (25 de febrero de 2018). La consulta del portal oficial confirma que 3.2.2 sigue siendo la última versión, aunque convive con versiones anteriores aceptadas.',
    'corregida'
  ],
  [
    2085, [78], ['I-9'], ['FACe', 'punto general de entrada', 'adhesión', 'Comunidades Autónomas', 'Entidades Locales'],
    { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, art. 6 y disposición adicional quinta: CCAA y entidades locales disponen de PGEFe; pueden adherirse al estatal y la no adhesión se justifica en términos de eficiencia. La justificación se realiza antes de cualquier inversión para crear o adaptar un punto propio.' },
    'Ley 25/2013, artículo 6 y disposición adicional quinta',
    'Se confirma la opción D en su ámbito literal: CCAA y entidades locales pueden adherirse al punto estatal; si no lo hacen, han de justificar la decisión en términos de eficiencia antes de realizar inversiones para establecer o adaptar su propio punto. No existe obligación general de utilizar FACe en todos los casos.',
    'vigente'
  ]
];

const edits = {
  2081: {
    texto: 'Conforme al artículo 4.1 de la Ley 25/2013, en el régimen de factura electrónica ante el sector público, ¿qué exclusión pueden acordar reglamentariamente las Administraciones Públicas?',
    opciones: [
      'Excluir el uso obligatorio de las facturas cuyo importe sea de hasta 5.000 euros, además de determinados servicios en el exterior mientras no puedan cumplir los requisitos de presentación.',
      'Excluir automáticamente todas las facturas de importe inferior a 5.000 euros, sin necesidad de disposición reglamentaria.',
      'Excluir todas las facturas de sociedades anónimas, sin límite de importe.',
      'Excluir las facturas de agrupaciones de interés económico europeas, que no están incluidas entre los sujetos obligados.'
    ],
    respuesta_correcta: 0
  },
  2082: {
    texto: 'En el régimen de la Ley 25/2013 para remitir facturas estructuradas a las Administraciones Públicas, ¿qué formato español oficial se utiliza?',
    opciones: ['GS2-XML.', 'UBL.', 'Facturae.', 'ebXML.'],
    respuesta_correcta: 2
  },
  2083: {
    texto: 'Sobre el formato Facturae y su presentación en FACe, señale la afirmación correcta:',
    opciones: [
      'Facturae no admite extensiones estructuradas en el esquema.',
      'Facturae permite extensiones a nivel de línea, de factura o de lote; para su admisión en puntos generales de entrada públicos deben respetarse las reglas de aprobación aplicables.',
      'FACe solo permite remitir facturas mediante servicios web, sin portal para proveedores.',
      'La factura debe firmarse necesariamente con un certificado del propio obligado tributario, sin posibilidad de representación o sello.'
    ],
    respuesta_correcta: 1
  },
  2084: {
    texto: '¿Qué versión del formato electrónico Facturae publicó la resolución conjunta publicada en el BOE el 25 de agosto de 2017?',
    opciones: ['Facturae 3.1.1.', 'Facturae 3.2.3.', 'Facturae 3.2.1.', 'Facturae 3.2.2.'],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '353', fecha: '2026-10-28', records, edits });
