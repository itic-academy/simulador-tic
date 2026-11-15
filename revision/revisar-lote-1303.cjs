const aplicar = require('./aplicar-lote.cjs');

const edits = {
  6836: {
    texto: '¿Qué iniciativa de código abierto impulsa estándares y soluciones interoperables para desarrollar aplicaciones en ámbitos como las ciudades y la industria inteligentes?',
    opciones: ['LoRa, tecnología de comunicación de largo alcance.', 'NGSI-LD, API y modelo para información de contexto.', 'Sigfox, tecnología de conectividad IoT de baja potencia.', 'FIWARE, ecosistema abierto de estándares y componentes para soluciones inteligentes.']
  },
  6837: {
    texto: '¿En qué ámbito se emplea principalmente el protocolo X10 (o X.10)?',
    opciones: ['Telefonía móvil.', 'Sistemas de radar.', 'Automatización domótica, incluida la comunicación de control sobre la instalación eléctrica.', 'Ninguno de los anteriores.']
  },
  6838: {
    texto: '¿Cuál de estas denominaciones corresponde a una capa del modelo de plataforma de ciudad inteligente de UNE 178104?',
    opciones: ['Adquisición/interconexión.', 'Seguridad como capa independiente.', 'Transmisión como capa independiente.', 'Datos como capa independiente.']
  },
  6839: {
    texto: 'En el Plan Nacional de Territorios Inteligentes, ¿en qué grupo de acciones se encuadra la aplicación de IoT a los servicios de los territorios inteligentes?',
    opciones: ['Acciones territoriales.', 'Acciones complementarias.', 'Acciones de soporte.', 'Acciones de gestión.']
  },
  6840: {
    texto: '¿Qué fabricante ofrece la familia ESP32 de SoC, módulos y placas para desarrollo IoT, con variantes de bajo coste y funciones de bajo consumo?',
    opciones: ['Arduino.', 'Adafruit.', 'Espressif Systems.', 'Raspberry Pi.']
  }
};

const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const records = [
  [6836, [117], ['IV-13'], ['FIWARE','NGSI-LD','estándares abiertos','ciudades inteligentes','industria inteligente','IoT'], [
    {url:'https://www.fiware.org/about-us/',referencia:'FIWARE Foundation presenta FIWARE como iniciativa/ecosistema de código abierto que impulsa estándares abiertos e implementaciones para soluciones inteligentes en ciudades, industria, energía y otros sectores.'},
    {url:'https://www.fiware.org/about-us/smart-cities/',referencia:'FIWARE Smart Cities: explica el uso de estándares y modelos de información comunes en aplicaciones urbanas; recoge la selección de FIWARE por la Comisión Europea como bloque CEF en 2018.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria estatal A1 GSI de 2025, anexo I, tema 117: ciudades inteligentes, transformación digital e IoT.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria estatal A2 GSI de 2025, anexo, tema IV.13: Internet e IoT.'}
  ], edits[6836], 'Se conserva D (FIWARE). Se elimina la afirmación amplia y potencialmente temporal de que está «soportada por la UE» y se pregunta por lo que las fuentes actuales describen: ecosistema abierto de estándares y componentes para soluciones inteligentes. NGSI-LD es una especificación/API de contexto dentro del ecosistema, no el nombre del ecosistema. A1-117/A2-IV.13.', 'corregida'],
  [6837, [117], ['IV-13'], ['X10','X.10','domótica','automatización del hogar','IoT'], [
    {url:'https://www.x10.com/pages/allaboutx10',referencia:'Información del fabricante/marca X10: describe X10 como tecnología de automatización del hogar basada en emisores y receptores de control; confirma su ámbito domótico.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria estatal A1 GSI de 2025, anexo I, tema 117: transformación digital, ciudades inteligentes e IoT.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria estatal A2 GSI de 2025, anexo, tema IV.13: Internet e IoT.'}
  ], edits[6837], 'Se mantiene C. X10 es un sistema/protocolo de control usado en automatización del hogar (domótica); la opción se precisa para evitar confundirlo con tecnologías celulares o de radar. A1-117/A2-IV.13.', 'corregida'],
  [6838, [117], ['IV-13'], ['UNE 178104','plataformas de ciudad inteligente','adquisición/interconexión','capas'], [
    {url:'https://plantl.digital.gob.es/planes-actuaciones/Bibliotecaciudadesinteligentes/Material%20complementario/interoperabilidad_parte_2_metodologia_y_analisis.pdf',referencia:'Documento técnico del portal público de ciudades inteligentes: recoge el modelo de capas UNE 178104, incluida adquisición/interconexión, conocimiento, interoperabilidad, servicios inteligentes y soporte.'},
    {url:'https://tienda.aenor.com/es/p/norma-une-178104-2017-n0059471',referencia:'Ficha oficial AENOR de UNE 178104:2017, requisitos de interoperabilidad para una plataforma de ciudad inteligente.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria estatal A1 GSI de 2025, anexo I, tema 117: ciudades inteligentes e IoT.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria estatal A2 GSI de 2025, anexo, tema IV.13: Internet e IoT.'}
  ], edits[6838], 'Se mantiene A. El modelo nombra la capa de adquisición/interconexión. Seguridad es una función transversal/de soporte y «transmisión» y «datos» no son aquí las denominaciones de capa presentadas como distractores. Se vincula la respuesta a documentación pública de aplicación y a la ficha AENOR de la norma.', 'corregida'],
  [6839, [117], ['IV-13'], ['Plan Nacional de Territorios Inteligentes','PNTI','IoT','acciones complementarias','servicios inteligentes'], [
    {url:'https://avance.digital.gob.es/programas-avance-digital/agenda-digital/DescargasAgendaDigital/Planes%20espec%C3%ADficos/Plan-ADpE-11_Plan-Nacional-Territorios-Inteligentes.pdf',referencia:'Plan Nacional de Territorios Inteligentes, esquema de acciones: incluye «IoT en los servicios (privacidad y seguridad) para Territorios Inteligentes» entre las acciones complementarias.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria estatal A1 GSI de 2025, anexo I, tema 117: ciudades inteligentes e IoT.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria estatal A2 GSI de 2025, anexo, tema IV.13: Internet e IoT.'}
  ], edits[6839], 'Se mantiene B. El Plan agrupa «IoT en los servicios (privacidad y seguridad) para Territorios Inteligentes» bajo acciones complementarias. Se corrigen el artículo y la formulación para identificar expresamente el PNTI y evitar ambigüedad.', 'corregida'],
  [6840, [117], ['IV-13'], ['Espressif Systems','ESP32','módulos IoT','bajo coste','bajo consumo'], [
    {url:'https://www.espressif.com/en/products/socs/esp32-c2',referencia:'Espressif describe ESP32-C2 como SoC Wi-Fi/Bluetooth de bajo coste orientado a IoT; la hoja de datos del fabricante especifica también modos de bajo consumo.'},
    {url:'https://docs.espressif.com/projects/esp-idf/en/stable/esp32c2/api-guides/low-power-mode/index.html',referencia:'Guía oficial ESP-IDF para ESP32-C2: describe modos de bajo consumo, configuración y escenarios de uso.'},
    {url:'https://www.espressif.com/en/products/devkits',referencia:'Catálogo oficial de placas de desarrollo de Espressif para sus SoC y módulos, incluidas variantes para dispositivos IoT y aplicaciones de bajo consumo.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria estatal A1 GSI de 2025, anexo I, tema 117: transformación digital e IoT.'},
    {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria estatal A2 GSI de 2025, anexo, tema IV.13: Internet e IoT.'}
  ], edits[6840], 'Se mantiene C (Espressif Systems), pero se concreta la pregunta en la familia ESP32 y se sustituye la afirmación vaga sobre «flexibilidad basada en módulos» por características documentadas por el fabricante: SoC/módulos/placas para IoT y variantes de bajo coste y bajo consumo. No se presenta el bajo consumo como atributo idéntico de todos los modelos.', 'corregida']
];

aplicar({numero:'1303',fecha:'2026-11-15',records});
