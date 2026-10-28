const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2126, [78], ['I-10'], ['Facturae', 'XAdES', 'XML', 'firma electrónica'],
    [
      { url: 'https://www.facturae.gob.es/formato', referencia: 'Portal oficial Facturae: las facturas B2G en el formato estructurado Facturae 3.2.x se firman con XAdES.' },
      { url: 'https://www.facturae.gob.es/formato/politicas-firma-electronica', referencia: 'Portal oficial, políticas de firma Facturae 3.1 y 3.0.' },
      { url: 'https://www.facturae.gob.es/content/dam/facturae/formato/polticasfirma/a%29-versi%C3%B3n-3-1/Politica_Firma_formato_facturae_v3_1.pdf', referencia: 'Política de firma Facturae v3.1: define la sintaxis y reglas de firma del documento XML basadas en XAdES.' }
    ],
    'Facturae, formato oficial y política de firma v3.1',
    'Se confirma XAdES para facturas Facturae de la familia 3.2.x. La afirmación se limita al formato Facturae estructurado, no a cualquier factura electrónica que pueda transmitirse como PDF, UBL u otra sintaxis.',
    'vigente'
  ],
  [
    2127, [78], ['I-10'], ['Ley 25/2013', 'artículo 12.3', 'auditoría anual de sistemas', 'IGAE', 'registro contable de facturas'],
    [
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, art. 12.3: las Intervenciones Generales u órganos equivalentes realizan una auditoría anual de sistemas; para AGE corresponde a la Intervención General de la Administración del Estado.' },
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-13722', referencia: 'Texto consolidado BOE, art. 12: acceso de la IGAE y auditoría anual para comprobar el funcionamiento de los registros contables de facturas y que no queden facturas retenidas en las fases del proceso.' }
    ],
    'Ley 25/2013, art. 12.3, texto consolidado',
    'Se confirma IGAE para el ámbito de la AGE. El artículo 12.3 atribuye las auditorías anuales a las Intervenciones Generales de cada Administración y a órganos equivalentes en el nivel autonómico/local; por ello se distingue la AGE de los ámbitos territorialmente equivalentes.',
    'vigente'
  ],
  [
    2128, [78], ['I-10'], ['Ley 25/2013', 'artículos 5 y 6', 'formato estructurado', 'punto general de entrada', 'registro contable'],
    [
      { url: 'https://www.boe.es/eli/es/l/2013/12/27/25/con', referencia: 'Ley 25/2013, arts. 5.1, 6.1, 6.5 y 6.6: formato estructurado/firma, adhesión de entidades locales y servicio de puesta a disposición/remisión a oficinas contables; las tres afirmaciones de la pregunta están en el texto legal.' },
      { url: 'https://eur-lex.europa.eu/eli/reg/2014/910/oj', referencia: 'Reglamento (UE) 910/2014 (eIDAS), marco europeo de identificación electrónica y servicios de confianza; la terminología europea vigente usa certificados cualificados, que debe armonizarse al aplicar el texto nacional histórico.' }
    ],
    'Ley 25/2013, arts. 5–6, en relación con Reglamento (UE) 910/2014',
    'Se confirma «todas las anteriores» según el tenor literal de los arts. 5 y 6. En particular, la ley conserva la expresión histórica «certificado reconocido»; para aplicación actual debe leerse coordinada con eIDAS y su terminología de certificados cualificados. No se convierte una literalidad legislativa de examen en una afirmación de que cualquier formato o certificado sirve.',
    'vigente'
  ],
  [
    2129, [78], [], ['LSSI', 'Ley 34/2002', 'artículo 5', 'notarios', 'registradores', 'funciones públicas'],
    [
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758', referencia: 'Ley 34/2002, art. 5.1.a: los servicios de notarios y registradores de la propiedad y mercantiles en ejercicio de funciones públicas se rigen por su normativa específica; los arts. 2–3, en cambio, incluyen otros prestadores/servicios en las condiciones territoriales indicadas.' }
    ],
    'Ley 34/2002, art. 5.1.a y arts. 2–3, texto consolidado',
    'Se precisa que no se excluye toda actividad profesional de notarios/registradores: el art. 5.1.a remite a normativa específica solo los servicios prestados en ejercicio de sus funciones públicas. La opción de propiedad intelectual de un prestador UE/EEE no es una exclusión; el art. 3 prevé expresamente la aplicación de la LSSI a esa materia si el destinatario está en España.',
    'corregida'
  ],
  [
    2130, [78], ['I-9'], ['LSSI', 'Ley 34/2002', 'artículo 21.1', 'correo promocional', 'autorización expresa', 'relación contractual previa'],
    [
      { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758', referencia: 'Ley 34/2002, art. 21.1 y 21.2: sin relación contractual previa, el envío promocional electrónico exige que se haya solicitado o autorizado expresamente; el supuesto de cliente previo se regula como excepción separada en el apartado 2.' }
    ],
    'Ley 34/2002, art. 21.1–2, texto consolidado',
    'Se confirma la autorización previa expresa/solicitud para el supuesto concreto sin relación contractual previa. El artículo 21.2 contiene una excepción limitada para clientes previos; al excluirla expresamente el enunciado, no son válidas la oposición tácita ni la prohibición absoluta.',
    'vigente'
  ]
];

const edits = {
  2129: {
    texto: 'Según el artículo 5.1 de la Ley 34/2002, ¿qué servicios de la sociedad de la información se rigen por su normativa específica cuando se prestan en ejercicio de funciones públicas?',
    opciones: [
      'Los servicios de notarios y registradores de la propiedad y mercantiles en el ejercicio de sus funciones públicas.',
      'Todos los servicios de prestadores establecidos en España.',
      'Los servicios que prestadores de otro Estado ofrezcan mediante establecimiento permanente en España.',
      'Los servicios de prestadores UE/EEE que afecten a propiedad intelectual cuando el destinatario esté en España.'
    ],
    respuesta_correcta: 0
  }
};

aplicar({ numero: '362', fecha: '2026-10-28', records, edits });
