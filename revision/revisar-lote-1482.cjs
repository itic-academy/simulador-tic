const apply = require('./aplicar-lote.cjs');
const rdAepd = 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-9175';
const lgp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-21614';
const directive = 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32000L0031';
const grants = 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977&p=20261003&tn=0';
const iso9004 = 'https://www.iso.org/standard/70397.html';
const iso9000 = 'https://www.iso.org/standard/88465.html';
const principles = 'https://www.iso.org/quality-management/principles';

const records = [
  [7711, [27], ['I-7'], ['AEPD', 'Presidencia', 'memoria anual', 'cuentas anuales', 'autoridades autonómicas'], [
    { url: rdAepd, referencia: 'RD 389/2021, arts. 10 y 13: la Memoria de la AEPD es anual; la Presidencia tiene, entre otras, las funciones de solicitar y facilitar información a las autoridades autonómicas, formular y aprobar las cuentas anuales y dictar resoluciones y directrices. La LO 3/2018, art. 48.1, atribuye a la Presidencia la dirección y representación de la Agencia y la emisión de resoluciones, circulares y directrices.' }
  ], {
    texto: 'Según el Estatuto de la Agencia Española de Protección de Datos, ¿cuál NO es una función de su Presidencia?',
    opciones: [
      'Aprobar una Memoria trimestral de la Agencia.',
      'Solicitar y facilitar a las autoridades autonómicas de protección de datos la información necesaria para sus funciones.',
      'Formular y aprobar las cuentas anuales de la entidad.',
      'Dictar las resoluciones y directrices que requiera el ejercicio de las funciones de la Agencia.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. La norma vigente denomina al órgano unipersonal «Presidencia», no «Dirección». El Estatuto establece una Memoria anual (art. 10), no trimestral, mientras que las otras opciones reflejan funciones presidenciales de los artículos 13 y 46 del RD 389/2021.', 'corregida'],
  [7712, [12], [], ['Ley 47/2003', 'Ley General Presupuestaria', 'Hacienda Pública estatal', 'obligaciones', 'Título I', 'Sección 4.ª'], [
    { url: lgp, referencia: 'Ley 47/2003, General Presupuestaria, estructura y artículos 20–22: el Título I contiene el régimen de la Hacienda Pública estatal; en su capítulo II, sección 4.ª («Obligaciones de la Hacienda Pública estatal»), se regulan las fuentes, exigibilidad y extinción de estas obligaciones.' }
  ], {
    texto: '¿En qué parte de la Ley 47/2003, General Presupuestaria, se regula específicamente el régimen de las obligaciones de la Hacienda Pública estatal?',
    opciones: ['Título II, capítulo I, sección 1.ª.', 'Título I, capítulo II, sección 3.ª.', 'Título I, capítulo I, sección 4.ª.', 'Título I, capítulo II, sección 4.ª.'],
    respuesta_correcta: 3
  }, 'Vigente D. La sección 4.ª del capítulo II del título I se titula «Obligaciones de la Hacienda Pública estatal» y comprende los artículos 20 a 22: fuentes, exigibilidad y extinción. Se moderniza la gramática del enunciado sin cambiar la respuesta.', 'vigente'],
  [7713, [22], ['I-6'], ['Directiva 2000/31/CE', 'servicios de la sociedad de la información', 'radiodifusión', 'televisión', 'radio', 'petición individual'], [
    { url: directive, referencia: 'Directiva 2000/31/CE, considerando 18: la radiodifusión televisiva y radiofónica no constituye servicio de la sociedad de la información porque no se presta a petición individual; la venta en línea, la transmisión de información y las comunicaciones comerciales electrónicas sí pueden serlo cuando reúnen los requisitos de la definición.' }
  ], {
    texto: 'Según el considerando 18 de la Directiva 2000/31/CE, ¿cuál de estas actividades no es un servicio de la sociedad de la información porque no se presta a petición individual?',
    opciones: ['La radiodifusión de televisión o de radio.', 'La transmisión de información a través de una red de comunicaciones.', 'La venta de mercancías por vía electrónica.', 'El envío de comunicaciones comerciales por correo electrónico.'],
    respuesta_correcta: 0
  }, 'Corregida A. Se precisa que la exclusión deriva de que la radiodifusión lineal no se presta a petición individual. La directiva contempla como servicios de la sociedad de la información, cuando constituyen actividad económica y satisfacen su definición, la transmisión de información, la venta en línea y las comunicaciones comerciales por correo electrónico.', 'corregida'],
  [7714, [13], [], ['Ley 38/2003', 'subvenciones públicas', 'sanciones no pecuniarias', 'infracciones graves', 'infracciones muy graves'], [
    { url: grants, referencia: 'Ley 38/2003, General de Subvenciones, artículo 59.3: las sanciones no pecuniarias pueden imponerse en caso de infracciones graves o muy graves; incluyen, entre otras, la pérdida temporal de la posibilidad de obtener subvenciones o ayudas y la prohibición de contratar con las Administraciones.' }
  ], {
    texto: 'Conforme al artículo 59.3 de la Ley 38/2003, General de Subvenciones, ¿en qué casos se podrán imponer sanciones no pecuniarias?',
    opciones: ['En caso de infracciones leves o graves.', 'En caso de infracciones graves o muy graves.', 'Únicamente en caso de infracciones muy graves.', 'Las sanciones en esta materia siempre son pecuniarias.'],
    respuesta_correcta: 1
  }, 'Vigente B. El artículo 59.3 permite sanciones no pecuniarias en caso de infracciones graves o muy graves, como la pérdida temporal del derecho a obtener subvenciones o la prohibición de contratar. No se aplican a las infracciones leves.', 'vigente'],
  [7715, [103], [], ['ISO 9000:2026', 'ISO 9004:2018', 'principios de gestión de la calidad', 'enfoque al cliente', 'liderazgo', 'compromiso de las personas'], [
    { url: iso9004, referencia: 'ISO 9004:2018, ficha oficial vigente: ofrece orientación para el éxito sostenido de una organización y es coherente con los principios de gestión de la calidad de ISO 9000.' },
    { url: iso9000, referencia: 'ISO 9000:2026, ficha oficial publicada: edición vigente de fundamentos y vocabulario de gestión de calidad; conserva los siete principios, con terminología actualizada.' },
    { url: principles, referencia: 'ISO, principios oficiales de gestión de la calidad: enfoque al cliente, liderazgo y compromiso/participación de las personas son principios; la respuesta también cubre otros principios reconocidos.' }
  ], {
    texto: 'ISO 9004:2018 es coherente con los principios de gestión de la calidad de ISO 9000. ¿Qué afirmación es correcta?',
    opciones: ['El enfoque al cliente es uno de esos principios.', 'El liderazgo es uno de esos principios.', 'El compromiso y participación de las personas es uno de esos principios.', 'Todas las respuestas anteriores son correctas.'],
    respuesta_correcta: 3
  }, 'Corregida D. ISO 9004:2018 continúa vigente y su ficha indica que es coherente con los principios de ISO 9000. La edición ISO 9000:2026 mantiene el enfoque al cliente, liderazgo y compromiso de las personas entre los siete principios; se actualizó la terminología y se evitó atribuir a ISO 9004 un listado que la norma vincula a ISO 9000.', 'corregida']
];

apply({ numero: '1482', fecha: '2026-11-16', records });
