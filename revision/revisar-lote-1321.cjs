const aplicar = require('./aplicar-lote.cjs');
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const agencia = 'https://www.boe.es/buscar/act.php?id=BOE-A-2026-2553';
const constitucionAgencia = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10246';
const organizacion = 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-3796&p=20260612';
const incompatibilidades = 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-151&p=20240608';
const rgpd = 'https://eur-lex.europa.eu/legal-content/ES/ALL/?uri=CELEX:32016R0679';
const cetic = 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-22935';
const edits = {
  6926: {
    texto: '¿A qué ministerio está adscrita actualmente la Agencia Estatal de Evaluación de Políticas Públicas?',
    opciones: ['Al Ministerio de Economía, Comercio y Empresa.', 'Al Ministerio de Política Territorial y Memoria Democrática.', 'Al Ministerio de Hacienda.', 'Al Ministerio para la Transformación Digital y de la Función Pública.'],
    respuesta_correcta: 0
  },
  6927: {
    texto: 'Según la estructura orgánica vigente del Ministerio para la Transformación Digital y de la Función Pública, ¿a qué órgano corresponde la gobernanza y gestión, en el ámbito de la AGE, del Sistema de Información Administrativa de los procedimientos?',
    opciones: ['A la Secretaría General de Administración Digital.', 'A la Dirección General de Gobernanza Pública.', 'A la Dirección General de Función Pública.', 'A la Dirección General de Procedimientos Administrativos.'],
    respuesta_correcta: 1
  },
  6928: {
    texto: 'Conforme a la regla general de la Ley 53/1984, de incompatibilidades del personal al servicio de las Administraciones Públicas, señale la afirmación correcta:',
    opciones: [
      'La pertenencia al sector público impide en todo caso cualquier actividad pública o privada, sin excepciones.',
      'Como regla general se desempeña un solo puesto público; una segunda actividad pública requiere autorización previa y expresa de compatibilidad, y el ejercicio de actividades privadas está sujeto a los límites y, cuando proceda, al reconocimiento previo de compatibilidad establecidos por la ley.',
      'Una segunda actividad pública es admisible sin autorización si no interfiere materialmente con el primer puesto.',
      'Toda actividad privada es incompatible de modo absoluto, mientras que una segunda actividad pública solo requiere comunicación posterior.'
    ],
    respuesta_correcta: 1
  }
};
const records = [
  [6926, [6], [], ['Agencia Estatal de Evaluación de Políticas Públicas', 'sector público institucional', 'adscripción ministerial', 'Real Decreto 65/2026'], [
    {url: agencia, referencia: 'Real Decreto 65/2026, Estatuto de la Agencia Estatal de Evaluación de Políticas Públicas: adscripción al Ministerio de Economía, Comercio y Empresa, a través de la Secretaría de Estado de Economía y Apoyo a la Empresa; el Estatuto prevé la constitución efectiva del Consejo Rector.'},
    {url: constitucionAgencia, referencia: 'Resolución BOE-A-2026-10246: el Consejo Rector celebró su sesión constitutiva el 24 de abril de 2026 y nombró a la Directora de la Agencia; confirma su funcionamiento efectivo en 2026.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 6: organización territorial de la AGE y sector público institucional, organismos y entidades públicas estatales.'}
  ], edits[6926], 'Corregida. La pregunta original se refería al Instituto para la Evaluación de Políticas Públicas y ofrecía una adscripción ministerial histórica. El Real Decreto 65/2026 suprime ese Instituto cuando se constituye efectivamente la nueva Agencia y la adscribe al Ministerio de Economía, Comercio y Empresa. El Consejo Rector se constituyó el 24/04/2026, por lo que en la fecha de revisión la respuesta vigente es la opción A. No debe confundirse esta Agencia de Evaluación con la Agencia Estatal de Administración Digital (AEAD).', 'corregida'],
  [6927, [30], ['I-9'], ['Sistema de Información Administrativa', 'SIA', 'Dirección General de Gobernanza Pública', 'Real Decreto 210/2024', 'Administración digital'], [
    {url: organizacion, referencia: 'Real Decreto 210/2024, art. 11.1.c, texto consolidado vigente: asigna a la Dirección General de Gobernanza Pública la gobernanza y gestión en la AGE del Sistema de Información Administrativa de los procedimientos.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 30: modelos de gobernanza TIC y organización e instrumentos operativos de las TIC en la AGE.'},
    {url: a2, referencia: 'Programa oficial A2 GSI 2025, tema I.9: instrumentos para el acceso electrónico y gestión electrónica de procedimientos administrativos.'}
  ], edits[6927], 'Vigente B. La competencia sigue atribuida a la Dirección General de Gobernanza Pública: el artículo 11.1.c del Real Decreto 210/2024 consolidado incluye literalmente la gobernanza y gestión en la AGE del SIA. La SGAD participa en la gestión técnica de sistemas y servicios digitales, pero no es el órgano al que se atribuye esta competencia de gobernanza. Se concreta en el enunciado el ámbito estatal para distinguirlo de las funciones técnicas.', 'vigente'],
  [6928, [24], ['I-8'], ['empleo público', 'Ley 53/1984', 'incompatibilidades', 'compatibilidad previa', 'actividad pública y privada'], [
    {url: incompatibilidades, referencia: 'Ley 53/1984, arts. 1–4 y 11–14: principio general de dedicación a un solo puesto público, compatibilidad previa y expresa para un segundo puesto o actividad pública, y régimen de límites y reconocimiento de compatibilidad para actividades privadas; la ley contempla excepciones tasadas.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 24: empleo público y Ley de Incompatibilidades del personal al servicio de las Administraciones Públicas.'},
    {url: a2, referencia: 'Programa oficial A2 GSI 2025, tema I.8: régimen jurídico del sector público y texto refundido del Estatuto Básico del Empleado Público.'}
  ], edits[6928], 'Corregida B. Se precisa la regla general y se evita afirmar que existe una prohibición absoluta de toda actividad pública o privada. El artículo 1 establece el principio de un solo puesto público, con excepciones legales; los artículos 3 y 4 exigen reconocimiento previo y expreso de compatibilidad para los supuestos de segundo puesto público, y los artículos 11–14 regulan actividades privadas, sus límites y el reconocimiento de compatibilidad. No basta la ausencia de interferencia ni una comunicación posterior.', 'corregida'],
  [6929, [27], ['I-7'], ['protección de datos', 'RGPD', 'artículo 6', 'bases de licitud', 'tratamiento de datos personales'], [
    {url: rgpd, referencia: 'Reglamento (UE) 2016/679, art. 6.1: enumera seis bases de licitud: consentimiento, contrato o medidas precontractuales, obligación legal, intereses vitales, misión de interés público/ejercicio de poderes públicos e intereses legítimos cuando proceda. La oferta genérica de servicios con calidad y eficiencia no es una base autónoma.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 27: régimen del Reglamento (UE) 2016/679, principios, obligaciones y derechos.'},
    {url: a2, referencia: 'Programa oficial A2 GSI 2025, tema I.7: protección de datos, principios, derechos, responsables y encargados del tratamiento.'}
  ], {}, 'Vigente D. El artículo 6.1 RGPD contiene una lista de seis bases jurídicas. La opción D no reproduce ninguna de ellas y no puede convertirse en una base independiente por invocar calidad o eficiencia. Si una Administración trata datos para una tarea pública, la base aplicable puede ser la misión de interés público o el ejercicio de poderes públicos, con los requisitos del artículo 6.3 y la norma que atribuye la competencia; no basta el genérico ofrecimiento de servicios.', 'vigente'],
  [6930, [30], ['I-10'], ['CETIC', 'Comisión de Estrategia TIC', 'cooperación interadministrativa', 'Real Decreto 1125/2024', 'Administración digital'], [
    {url: cetic, referencia: 'Real Decreto 1125/2024, art. 3.3.h: mantiene entre las funciones de la Comisión de Estrategia TIC impulsar la colaboración y cooperación con las comunidades autónomas y entidades locales para servicios interadministrativos integrados y compartición de infraestructuras y servicios comunes.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 30: gobernanza TIC y transformación digital de la AGE.'},
    {url: a2, referencia: 'Programa oficial A2 GSI 2025, tema I.10: órganos e instrumentos de cooperación interadministrativa en Administración electrónica e infraestructuras y servicios comunes.'}
  ], {}, 'Vigente A. La función de cooperación con las comunidades autónomas y entidades locales continúa atribuida a la CETIC en el artículo 3.3.h del Real Decreto 1125/2024, que sustituyó el marco organizativo anterior. Se conserva la opción correcta y se actualiza el fundamento normativo para no depender del derogado Real Decreto 806/2014.', 'vigente']
];
aplicar({numero: '1321', fecha: '2026-11-15', records, edits});
