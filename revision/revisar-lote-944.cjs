const aplicar = require('./aplicar-lote.cjs');

const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy03 = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academy17 = 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const academy28 = 'https://drive.google.com/file/d/11qGK4GbJ0QV81HEyboRAy5AZorijJmhs/view?usp=drivesdk';
const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const clave = 'https://www.boe.es/buscar/act.php?id=BOE-A-2014-10264';
const lexicographic = 'https://link.springer.com/chapter/10.1007/978-3-319-44234-1_9';
const nistOpen = 'https://www.govinfo.gov/content/pkg/GOVPUB-C13-2f95ce0ee0fc090a1d337ac24494b600/pdf/GOVPUB-C13-2f95ce0ee0fc090a1d337ac24494b600.pdf';
const nistOpenPage = 'https://www.nist.gov/publications/open-system-environment-ose';
const voip = 'https://www.itu.int/epublications/publication/itu-t-sec-manual-2024-09-security-in-telecommunications-and-information-technology-8th-edition';
const owaspFuzz = 'https://mas.owasp.org/MASTG/0x04h-Testing-Code-Quality/';
const owaspFuzzing = 'https://community.owasp.org/Fuzzing';

const records = [
  [5041, ['49'], ['I-9'], ['Cl@ve', 'Orden PRE/1838/2014', 'identificación y autenticación', 'firma electrónica'], [
    ref(clave, 'BOE, Orden PRE/1838/2014, de 8 de octubre: publica el Acuerdo del Consejo de Ministros que aprueba Cl@ve como plataforma común estatal para identificación, autenticación y firma con claves concertadas.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 49: infraestructuras/servicios comunes de interoperabilidad, incluido Cl@ve.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema I.9: instrumentos de acceso electrónico, identificación y autenticación.'),
    ref(academy03, 'ITIC Academy, bloque 03 «Actuación administrativa y administración digital», versión 2026.2 (01/10/2026): procedimiento e instrumentos de Administración digital; encuadre curricular.')
  ], null, 'Respuesta C: Orden PRE/1838/2014, de 8 de octubre, que publica el acuerdo por el que se aprueba Cl@ve. La Ley 39/2015 contiene el marco general, pero no es la disposición que aprobó originalmente esta plataforma; la Orden EHA/1049/2008 regula otra materia y PyScripter no aplica.', 'vigente'],
  [5042, ['40'], ['II-15'], ['método lexicográfico', 'decisión multicriterio', 'criterios ordenados por importancia'], [
    ref(lexicographic, 'Springer, capítulo «Performance Criteria»: en el enfoque lexicográfico se ordenan los objetivos/criterios por prioridad y se selecciona primero la alternativa mejor respecto del objetivo de mayor prioridad, aplicando después el siguiente criterio a los empates.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 40: estudio de alternativas, viabilidad y toma de decisiones.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad.'),
    ref(academy17, 'ITIC Academy, bloque 17 «Adquisición de sistemas, alternativas y rentabilidad», versión 2026.2 (02/10/2026): evaluación multicriterio de alternativas; encuadre curricular.')
  ], null, 'Respuesta B, método lexicográfico. Los criterios se ordenan por importancia y la comparación empieza por el de mayor prioridad; solo si persiste un empate se pasa al siguiente. No es la agregación por ponderación lineal (C) ni un método de superación PROMETHEE/ELECTRE.', 'vigente'],
  [5043, ['111'], ['II-8'], ['sistemas abiertos', 'estándares abiertos', 'portabilidad', 'protección de inversiones'], [
    ref(nistOpen, 'NIST SP 500-187, Application Portability Profile, pp. 1–2: el entorno abierto se apoya en especificaciones públicas/no propietarias para interoperabilidad y portabilidad de aplicaciones; la documentación expone como objetivos proteger inversiones en software de aplicación y reducir dependencia de proveedor.'),
    ref(nistOpenPage, 'NIST, Open System Environment: perfil para interoperabilidad y portabilidad de aplicaciones entre plataformas heterogéneas.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 111: modelo OSI de interconexión de sistemas abiertos.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema II.8: modelos TCP/IP y OSI, arquitectura e interoperabilidad.'),
    ref(academy28, 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25/09/2026): componentes e interoperabilidad; encuadre curricular, sin tratar “sistema abierto” como sinónimo de código abierto.')
  ], null, 'Se corrige el alcance demasiado absoluto de la opción original. Respuesta B: una ventaja atribuible a estándares/arquitecturas abiertas es proteger la inversión en software de aplicación al favorecer portabilidad e interoperabilidad. No se afirma que garanticen toda conversión entre sistemas ni que todo hardware instalado quede automáticamente protegido. «Abierto» alude a interfaces/especificaciones interoperables, no necesariamente a software de código abierto.', 'corregida'],
  [5044, ['108'], ['IV-8'], ['VoIP', 'voz sobre IP', 'telefonía IP', 'protocolos IP'], [
    ref(voip, 'ITU-T Security Manual 2024, §12.1: VoIP/IP telephony presta servicios de voz tradicionalmente ofrecidos por la red telefónica conmutada mediante una red que usa el protocolo IP.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 108: redes de telecomunicaciones y protocolos.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema IV.8: redes locales, protocolos y técnicas de transmisión.'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», actualización 2026: redes, protocolos y transmisión; encuadre curricular.')
  ], null, 'Respuesta C. VoIP (Voice over Internet Protocol) permite transportar comunicaciones de voz mediante redes que usan el protocolo IP; no es exclusiva de operadores, videoconferencia ni teléfonos satelitales. Se corrigen las erratas del enunciado y la acentuación de la opción correcta.', 'corregida'],
  [5045, ['126'], ['III-12'], ['fuzzing', 'caja negra', 'entradas malformadas', 'seguridad de aplicaciones'], [
    ref(owaspFuzz, 'OWASP Mobile Application Security Testing Guide, sección de calidad de código: caracteriza el fuzzing por inyección automatizada de datos malformados y lo identifica como técnica de prueba black-box.'),
    ref(owaspFuzzing, 'OWASP Foundation, Fuzzing: describe la generación automática de entradas inesperadas, malformadas o parcialmente malformadas para buscar errores, vulnerabilidades y comportamientos inesperados.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, tema 126: seguridad en el nivel de aplicación y protección de servicios web.'),
    ref(a2, 'Convocatoria oficial A2 GSI 2025, tema III.12: aplicaciones web y seguridad.'),
    ref(academy48, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30/09/2026): pruebas y vulnerabilidades de aplicaciones; encuadre curricular.')
  ], null, 'Se acota la clasificación de OWASP para que dependa explícitamente de la observabilidad: sin acceso al código ni instrumentación interna, el fuzzing que envía entradas malformadas se realiza como prueba de caja negra; respuesta B. Existen fuzzers con instrumentación o guía de cobertura que pueden operar como caja gris/blanca, por lo que la mera aleatoriedad no determina por sí sola la categoría.', 'corregida']
];

const edits = {
  5043: {
    texto: '¿Qué ventaja de los sistemas basados en estándares abiertos puede obtener el usuario?',
    opcion: [1, 'Proteger la inversión en software de aplicación al favorecer su portabilidad entre entornos.']
  },
  5044: { texto: '¿Cuál de las siguientes afirmaciones es correcta sobre VoIP?' },
  5045: { texto: 'Si se prueban las entradas de una aplicación mediante fuzzing, sin acceso al código ni instrumentación interna, ¿qué tipo de prueba se está realizando?' }
};

aplicar({ numero: '944', fecha: '2026-11-11', records, edits });
