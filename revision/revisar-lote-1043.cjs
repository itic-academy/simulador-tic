const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const lcsp = 'https://www.boe.es/eli/es/l/2017/11/08/9/con';
const eni = 'https://www.boe.es/eli/es/rd/2010/01/08/4/con';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive = {
  contracts: 'https://drive.google.com/file/d/14iahY0cgkiV8RESN81b8pHdD4K3UbSOj/view?usp=drivesdk',
  investment: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',
  software: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',
  interoperability: 'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk'
};

const records = [
  [5536, [11], [], ['Ley 9/2017', 'LCSP', 'artículo 16.3.b', 'contratos de suministro', 'software a medida', 'contratos de servicios'], [
    { url: lcsp, referencia: 'Ley 9/2017, texto consolidado del BOE, arts. 16.3.b y 17: los equipos/sistemas de telecomunicación o tratamiento de información, sus dispositivos y programas son suministros, salvo programas desarrollados a medida, que son servicios; el art. 17 incluye servicios sucesivos a precio unitario.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 11: contratos de las Administraciones Públicas, LCSP y tipos de contratos.' },
    { url: a2, referencia: 'El programa A2 GSI 2025 no incluye un tema específico de contratación pública; no se fuerza una etiqueta A2.' },
    { url: drive.contracts, referencia: 'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: clasificación de contratos TIC conforme a la LCSP; el documento señala que no tiene equivalente A2.' }
  ], 'El artículo 16.3.b LCSP incluye como suministro los equipos y sistemas de telecomunicaciones o tratamiento de información, sus dispositivos y programas y la cesión de su uso; exceptúa los programas desarrollados a medida, que son servicios. Se actualiza el enunciado para preguntar directamente por esa regla. También se corrigen distractores: el art. 17 sí incluye servicios sucesivos a precio unitario y la concesión de obras exige transferencia de riesgo operacional al concesionario.', 'corregida'],
  [5537, [42], ['II-15'], ['pay-back', 'plazo de recuperación', 'método estático', 'valor temporal del dinero', 'inversión'], [
    { url: 'https://www.nibusinessinfo.co.uk/content/payback-period', referencia: 'NI Business Info, Payback period: el método mide el tiempo hasta recuperar la inversión inicial y, en su forma simple, no tiene en cuenta el valor temporal del dinero.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 42: rentabilidad de inversiones en proyectos de tecnologías de la información.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad.' },
    { url: drive.investment, referencia: 'ITIC Academy 2026, bloque 17 Adquisición de Sistemas y Rentabilidad de Inversiones: VAN, TIR y pay-back.' }
  ], 'El pay-back simple o no descontado es un método estático: favorece proyectos que recuperan antes el desembolso inicial, pero no descuenta los flujos para reflejar el valor temporal del dinero ni considera los flujos posteriores a la recuperación. Por ello A es correcta y las opciones que lo califican como dinámico o con descuento son incorrectas.', 'corregida'],
  [5538, [43], ['II-14'], ['dongle', 'llave hardware', 'licencia de software', 'protección del software', 'control de uso'], [
    { url: 'https://www.nxp.com/design/design-center/software/development-software/codewarrior-development-tools/codewarrior-legacy/usb-dongle:USB-LICENSE-DONGLE?fsrch=1&pageNum=1&sr=1', referencia: 'NXP, USB License Dongle: llave física USB que proporciona una identificación para licenciar el uso de CodeWarrior y habilita el uso de la licencia en el equipo donde se conecta.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 43: protección jurídica de programas de ordenador y medios de comprobación de legalidad y control del software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.14: protección jurídica del software y tecnologías de protección de derechos digitales.' },
    { url: drive.software, referencia: 'ITIC Academy 2026, bloque 18 Protección Jurídica, Licencias y Control del Software: medidas de control y protección técnica de licencias.' }
  ], 'Un dongle o llave hardware es un dispositivo físico que actúa como elemento de control de licencia: el software comprueba su presencia o licencia para habilitar el uso. No es un acuerdo de nivel de servicio, un informe de análisis ni una clave introducida como texto; la respuesta es D.', 'corregida'],
  [5539, [45], ['I-9'], ['Esquema Nacional de Interoperabilidad', 'Real Decreto 4/2010', 'artículo 16.3', 'EUPL', 'reutilización de aplicaciones'], [
    { url: eni, referencia: 'Real Decreto 4/2010, texto consolidado del BOE, art. 16.3: para aplicaciones y otros objetos declarados de fuentes abiertas, las Administraciones procurarán aplicar la Licencia Pública de la Unión Europea, sin perjuicio de otras licencias que garanticen los mismos derechos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 45: Esquema Nacional de Interoperabilidad y dimensiones de interoperabilidad.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.9: Esquema Nacional de Interoperabilidad y normativa de reutilización.' },
    { url: drive.interoperability, referencia: 'ITIC Academy 2026, bloque 20 Interoperabilidad de Sistemas: ENI, reutilización y licenciamiento; A1-45/46 y A2-I.9.' }
  ], 'La opción B (EUPL) es la licencia cuya aplicación procura el artículo 16.3 del RD 4/2010 para aplicaciones de fuentes abiertas en el ámbito público. No se impone como licencia única: también se permiten otras licencias que garanticen los derechos de reutilización definidos por el precepto. Se corrige la errata «ASF-AL» de la opción Apache.', 'corregida'],
  [5540, [45], ['I-9'], ['Esquema Nacional de Interoperabilidad', 'Real Decreto 4/2010', 'definición de interoperabilidad', 'compartir datos', 'intercambio de información'], [
    { url: eni, referencia: 'Real Decreto 4/2010, texto consolidado del BOE, definición de «Interoperabilidad» en el anexo: capacidad de los sistemas de información y de sus procedimientos de compartir datos y posibilitar el intercambio de información y conocimiento.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 45: ENI y dimensiones organizativa, semántica y técnica de la interoperabilidad.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.9: Esquema Nacional de Interoperabilidad.' },
    { url: drive.interoperability, referencia: 'ITIC Academy 2026, bloque 20 Interoperabilidad de Sistemas: definición, dimensiones y ENI; A1-45/46 y A2-I.9.' }
  ], 'La definición normativa comprende sistemas de información y los procedimientos a los que dan soporte; permite compartir datos e intercambiar información y conocimiento. Se elimina la errata «ente» y se explicita que interoperabilidad no equivale a conceder acceso indiscriminado a datos personales ni a limitarse a conectar sistemas operativos. La respuesta A es la única correcta.', 'corregida']
];

const edits = {
  5536: {
    texto: 'Según el artículo 16.3.b de la Ley 9/2017, ¿cómo se califican los contratos de adquisición o arrendamiento de equipos y sistemas de telecomunicaciones o tratamiento de información, incluidos sus programas, con la excepción legal indicada?',
    opciones: [
      'Como contratos de suministro, excepto la adquisición de programas de ordenador desarrollados a medida, que se consideran contratos de servicios.',
      'Como contratos de servicios únicamente cuando se ejecuten sucesivamente y por precio unitario.',
      'Como contratos de servicios en todos los casos, incluidos los equipos, los dispositivos y los programas estándar.',
      'Como concesiones de obras, aunque no se transfiera al concesionario el riesgo operacional.'
    ],
    respuesta_correcta: 0
  },
  5537: {
    texto: 'El método simple de plazo de recuperación (pay-back no descontado) para analizar una inversión:',
    opciones: [
      'Favorece, entre proyectos comparables, el que recupera antes el desembolso inicial.',
      'Es dinámico porque descuenta todos los flujos de caja a valor presente.',
      'Tiene en cuenta el valor temporal del dinero aunque no se descuenten los flujos.',
      'Valora necesariamente todos los flujos de caja posteriores al momento de recuperación.'
    ],
    respuesta_correcta: 0
  },
  5538: {
    texto: '¿Cómo se denomina el dispositivo físico que funciona como llave de licencia y cuya presencia permite habilitar el uso de una aplicación protegida?',
    opciones: ['Un informe de análisis de uso autorizado.', 'Una clave de producto introducida como texto.', 'Un acuerdo de nivel de servicio (SLA).', 'Un dongle o llave hardware de control de licencia.'],
    respuesta_correcta: 3
  },
  5539: {
    texto: 'Según el artículo 16.3 del Real Decreto 4/2010 (ENI), ¿qué licencia se procurará aplicar a las aplicaciones declaradas de fuentes abiertas, sin perjuicio de otras que garanticen los mismos derechos?',
    opciones: ['Apache License 2.0.', 'European Union Public Licence (EUPL).', 'GNU Lesser General Public License (LGPL).', 'MIT License.'],
    respuesta_correcta: 1
  },
  5540: {
    texto: 'Según la definición de interoperabilidad del anexo del Real Decreto 4/2010 (ENI), ¿qué capacidad tienen los sistemas de información y los procedimientos a los que dan soporte?',
    respuesta_correcta: 0
  }
};

const log = path.join(__dirname, 'cambios-lote-1043.json');
const fs = require('node:fs');
if (!fs.existsSync(log)) aplicar({ numero: '1043', fecha: '2026-11-12', records, edits });

const bankFile = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
const changeLog = JSON.parse(fs.readFileSync(log, 'utf8'));
const academy = {
  5536: 'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: tipos de contratos TIC bajo la LCSP; A1-11, sin equivalente A2.',
  5537: 'ITIC Academy 2026, bloque 17 Adquisición de Sistemas y Rentabilidad de Inversiones: VAN, TIR, pay-back y evaluación de alternativas; A1-42 y A2-II.15.',
  5538: 'ITIC Academy 2026, bloque 18 Protección Jurídica, Licencias y Control del Software: medidas técnicas de control de licencias; A1-43 y A2-II.14.',
  5539: 'ITIC Academy 2026, bloque 20 Interoperabilidad de Sistemas: ENI, reutilización y licenciamiento; A1-45 y A2-I.9.',
  5540: 'ITIC Academy 2026, bloque 20 Interoperabilidad de Sistemas: definición y dimensiones del ENI; A1-45 y A2-I.9.'
};
for (const c of changeLog.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  q.clasificacion.bloque_academia = academy[c.id];
  q.clasificacion.nota = 'Clasificación cotejada con los programas oficiales A1/A2 de 2025 y con el temario ITIC Academy 2026; la academia se utiliza como mapa curricular, no como fuente normativa.';
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(log, JSON.stringify(changeLog, null, 2) + '\n');
