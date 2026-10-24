const apply = require('./aplicar-lote.cjs');

const records = [
  [1516, [23, 103], ['III-13'], ['EFQM', 'calidad organizativa', 'excelencia', 'fundación EFQM'], [
    {url: 'https://efqm.org/our-history/', referencia: 'EFQM, Our History: el 15-09-1988 catorce dirigentes empresariales europeos, junto con Jacques Delors, firmaron la carta de intención para crear una fundación europea; la fundación se constituyó en octubre de 1989 con 67 empresas.'}
  ], null, 'La opción original reducía el hecho fundacional a una iniciativa conjunta de la Comisión Europea y catorce compañías. La fuente de EFQM precisa que fueron catorce dirigentes empresariales europeos quienes se reunieron con Jacques Delors y firmaron una carta de intención; la fundación se constituyó al año siguiente con 67 compañías. Se reformulan pregunta y opción para distinguir el impulso de 1988 de la constitución de 1989.', 'corregida'],
  [1517, [38], ['II-11'], ['ISACA', 'auditoría informática', 'gobierno de TI', 'aseguramiento'], [
    {url: 'https://www.isaca.org/about-us', referencia: 'ISACA, About Us: asociación profesional y organización de aprendizaje global que sirve a profesionales de auditoría y aseguramiento de TI, seguridad, gobernanza, riesgo, cumplimiento y privacidad, entre otros campos.'},
    {url: 'https://www.isaca.org/resources/it-audit', referencia: 'ISACA, IT Audit Resources: ITAF establece normas y orientación para las funciones, responsabilidades y prácticas de profesionales de auditoría y aseguramiento de TI.'}
  ], null, 'Se precisa la definición: ISACA es una asociación profesional y organización de aprendizaje global que presta recursos, credenciales, marcos y estándares en auditoría y aseguramiento de TI, además de otros ámbitos de confianza digital. No es en sí un estándar de auditoría ni una norma ISO.', 'corregida'],
  [1518, [106], [], ['ITIL 4', 'cadena de valor del servicio', 'actividad Plan', 'visión organizativa'], [
    {url: 'https://www.globalknowledge.com/en-gb/-/media/global-knowledge/documents/customer-documents/itil-foundation/itil-foundation-sample-paper1-question-book-en.pdf', referencia: 'AXELOS, ITIL 4 Foundation Official Sample Paper 1, pregunta 21: identifica Plan como la actividad que asegura que las personas entiendan la visión de la organización; el PDF conserva aviso de copyright de AXELOS.'},
    {url: 'https://www.peoplecert.org/ITIL-4', referencia: 'PeopleCert, ITIL Qualification Scheme: referencia actual del esquema y materiales; desde 2026 presenta ITIL (Version 5), por lo que esta pregunta se limita expresamente al marco ITIL 4.'}
  ], null, 'La respuesta C es Plan: dentro de ITIL 4, esta actividad procura una comprensión compartida de la visión, el estado actual y la dirección de mejora. La respuesta B confunde Plan con Engage, que facilita la comprensión de necesidades de las partes interesadas. Se conserva ITIL 4 explícitamente como alcance histórico del reactivo, dado que PeopleCert ya presenta ITIL (Version 5).', 'historica'],
  [1519, [108, 110], ['IV-7'], ['ISO/IEC 11801', 'Clase F', 'cableado estructurado', 'frecuencia'], [
    {url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.76-200805-I%21%21PDF-E&lang=e&type=items', referencia: 'ITU-T Recommendation L.76 (05/2008), sección 8.1.2: clasificación de cableado balanceado conforme a ISO/IEC 11801; Clase F especificada hasta 600 MHz. Se refiere a la clase tradicional, distinta de FA.'},
    {url: 'https://www.iso.org/standard/66182.html', referencia: 'ISO, ficha de ISO/IEC 11801-1:2017, norma internacional publicada que establece requisitos generales de cableado genérico y tiene una modificación publicada.'}
  ], null, 'La respuesta es 600 MHz para la Clase F de cableado balanceado de cobre. Se distingue de la Clase FA, cuyo límite tradicional es 1 000 MHz. La referencia de frecuencias de la clase procede de la clasificación de ISO/IEC 11801 reproducida en la recomendación ITU-T L.76; la ficha ISO identifica la serie normativa vigente.', 'vigente'],
  [1520, [108], ['IV-7'], ['atenuación', 'decibelios', 'medios guiados', 'cable coaxial'], [
    {url: 'https://www.cisco.com/c/en/us/support/docs/optical/synchronous-digital-hierarchy-sdh/29000-db-29000.html', referencia: 'Cisco, Introduction to Optical Fibers, dB, Attenuation and Measurements: atenuación de potencia en dB = 10 log10(Pentrada/Psalida); incluye la definición y ejemplos de cocientes de potencia.'}
  ], null, 'Para pérdidas se usa A = 10 log10(Pentrada/Psalida). Con 1 mW a la entrada y 0,1 mW a la salida, A = 10 log10(10) = 10 dB. Como la longitud es 1 m, la atenuación lineal indicada es 10 dB/m.', 'vigente']
];

const edits = {
  1516: {texto: '¿Qué hecho dio origen a la iniciativa que condujo a la creación de EFQM?', opciones: [
    'La constitución de una asociación por las organizaciones europeas de normalización. ',
    'Un acuerdo de ANSI e IEEE para establecer una norma internacional.',
    'La reunión de catorce dirigentes empresariales europeos con Jacques Delors y la firma de una carta de intención en 1988.',
    'La creación de EFQM por ISO como comité técnico.'
  ], respuesta_correcta: 2},
  1517: {texto: '¿Qué es ISACA?', opciones: [
    'Una asociación profesional y organización de aprendizaje global que ofrece recursos, credenciales y marcos en auditoría y aseguramiento de TI, seguridad y gobernanza, entre otros ámbitos.',
    'La agencia estatal española de evaluación de políticas públicas y de la calidad de los servicios.',
    'Un estándar internacional único para realizar auditorías informáticas.',
    'Otro nombre por el que se conoce la norma ISO 17799.'
  ], respuesta_correcta: 0},
  1518: {texto: 'Según la cadena de valor del servicio de ITIL 4, ¿qué actividad se asegura de que las personas entiendan la visión de la organización?', respuesta_correcta: 2},
  1519: {texto: 'En la clasificación tradicional de cableado balanceado de ISO/IEC 11801, ¿hasta qué frecuencia se especifica la Clase F?', respuesta_correcta: 0},
  1520: {texto: 'Un cable coaxial de 1 m recibe 1 mW y entrega 0,1 mW. ¿Qué atenuación media presenta?', respuesta_correcta: 0}
};

apply({numero: '240', fecha: '2026-10-25', records, edits});
