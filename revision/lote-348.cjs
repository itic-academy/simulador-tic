const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2056, [47, 48], ['II-13'], ['ciberseguridad', 'malware', 'ransomware', 'WannaCry', 'histórica'],
    [
      { url: 'https://www.cisa.gov/sites/default/files/FactSheets/NCCIC%20ICS_FactSheet_WannaCry_Ransomware_S508C.pdf', referencia: 'CISA/NCCIC, WannaCry/WanaCrypt0r ransomware fact sheet: identifica ransomware con componente de gusano, explotación de SMBv1, cifrado y propagación a otros equipos.' },
      { url: 'https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010', referencia: 'Microsoft Security Bulletin MS17-010: vulnerabilidades de ejecución remota en SMBv1 que explotó WannaCry.' }
    ], 'CISA/NCCIC WannaCry fact sheet; Microsoft MS17-010',
    'La respuesta es ransomware, pero la descripción original omitía un matiz relevante: WannaCry fue ransomware con componente de gusano, explotó vulnerabilidades de SMBv1 asociadas a MS17-010, cifró archivos y se propagó. El enunciado queda delimitado al brote histórico de 2017; no se presenta el incidente como actual.',
    'historica'
  ],
  [
    2057, [41], ['II-1'], ['arquitectura de computadores', 'hardware', 'ALU'],
    { url: 'https://www.intel.com/content/www/us/en/docs/programmable/683632/25-1/arithmetic-logic-unit-30893.html', referencia: 'Intel, Nios V Processor Reference Manual, apartado Arithmetic Logic Unit: operaciones aritméticas, relacionales/lógicas y de desplazamiento sobre datos.' },
    'Intel Nios V Processor Reference Manual, § 2.2.2',
    'La opción original decía que la ALU realiza operaciones matemáticas, afirmación incompleta pero no falsa. Se concreta la función para incluir las operaciones aritméticas y lógicas que ejecuta sobre datos; la opción de respuesta se modifica para evitar que una opción genérica induzca a confundirla con la unidad de control.',
    'corregida'
  ],
  [
    2058, [31, 46], ['I-9'], ['interoperabilidad', 'NTI', 'reutilización de información pública'],
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-2380', referencia: 'Resolución de 19-2-2013, BOE-A-2013-2380, NTI de Reutilización de recursos de información, apartado II (ámbito): cualquier órgano de una Administración pública o entidad de Derecho Público vinculada o dependiente, dentro del art. 3 del RD 4/2010.' },
    'NTI de Reutilización de recursos de información, apartado II',
    'La opción correcta es la 4: reproduce el ámbito del apartado II de la NTI aprobada por Resolución de 19-2-2013. No se limita a la AGE ni a AGE y comunidades autónomas. Se mantiene el enunciado y la clave original, respaldados por el texto oficial.',
    'vigente'
  ],
  [
    2059, [65, 77], ['III-12'], ['edición digital', 'WYSIWYG', 'editores web'],
    [
      { url: 'https://support.google.com/consumersurveys/answer/6172726?hl=en', referencia: 'Google Help, WYSIWYG editor: editor HTML que permite editar en una vista simplificada, sin código, semejante a la disposición real de la página.' },
      { url: 'https://csrc.nist.gov/glossary/term/wysiwyg', referencia: 'NIST CSRC Glossary, WYSIWYG: expansión del acrónimo «what you see is what you get».' }
    ], 'Google Help, WYSIWYG editor; NIST CSRC Glossary',
    'La pregunta original vinculaba WYSIWYG solo con la impresión, aunque el concepto significa que la presentación durante la edición se aproxima al resultado final. Se reformula para el contexto de edición visual de documentos o páginas web y se expresa la finalidad sin limitarla a la impresión en papel.',
    'corregida'
  ],
  [
    2060, [11], [], ['contratación pública', 'LCSP', 'PCAP', 'PPT', 'contratos TIC'],
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902', referencia: 'Ley 9/2017, LCSP, arts. 122 y 124–125: el PCAP incluye criterios de solvencia y adjudicación y pactos/condiciones contractuales; el PPT contiene prescripciones que rigen la prestación y definen sus calidades y requisitos técnicos.' },
    'Ley 9/2017, de Contratos del Sector Público, arts. 122 y 124–125',
    'La pregunta original era ambigua: duración y criterios de adjudicación son materias administrativas, mientras que la referencia al modelo de funciones informáticas podría describir una especificación técnica dependiendo de su contenido. Se sustituye por una pregunta explícita sobre qué debe describir el PPT para un sistema TIC y se reformulan las opciones: el requisito técnico del sistema pertenece a las prescripciones del PPT; los criterios de adjudicación y las condiciones contractuales se recogen en el PCAP.',
    'corregida'
  ]
];

const edits = {
  2056: {
    texto: 'El brote mundial de WannaCry de mayo de 2017 cifraba archivos y se propagaba explotando sistemas Windows vulnerables a través de SMBv1. ¿Cómo se clasifica principalmente este programa malicioso?',
    opcion: [1, 'Ransomware con componente de gusano.']
  },
  2057: {
    texto: '¿Qué función realiza la unidad aritmético-lógica (ALU) de un procesador?',
    opcion: [2, 'Ejecuta operaciones aritméticas y lógicas sobre datos.']
  },
  2059: {
    texto: 'En un editor WYSIWYG de documentos o páginas web, ¿qué describe mejor este concepto?',
    opcion: [1, 'La vista durante la edición se parece al resultado final publicado o impreso.']
  },
  2060: {
    texto: 'Al preparar un contrato de un sistema TIC, ¿qué contenido corresponde describir en el pliego de prescripciones técnicas particulares (PPT), conforme a la LCSP?',
    opciones: [
      'Los criterios de solvencia y de adjudicación del contrato.',
      'Los pactos que definen los derechos y obligaciones de las partes.',
      'Las características, calidades y requisitos técnicos que debe cumplir el sistema contratado.',
      'La previsión de cesión del contrato.'
    ],
    respuesta_correcta: 2
  }
};

aplicar({ numero: '348', fecha: '2026-10-28', records, edits });
