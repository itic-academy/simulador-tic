const apply = require('./aplicar-lote.cjs');

const records = [
  [7461, [48], ['I-9'], ['ENS', 'Declaración de Aplicabilidad', 'RD 311/2022', 'medidas de seguridad'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191', referencia: 'Real Decreto 311/2022, texto consolidado del BOE, art. 28.1–2: las medidas seleccionadas considerando activos, categoría del sistema y decisiones de gestión de riesgos se formalizan en la Declaración de Aplicabilidad, firmada por el responsable de seguridad.' },
    { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, bloque 48 «Seguridad de Redes y Aplicación», versión 2026: incluye el ENS y su marco vigente. La denominación documental exacta se verifica en el art. 28 del RD 311/2022.' }
  ], {}, 'Vigente B. El artículo 28 del ENS regula la elección de medidas mínimas según los activos, la categoría y el riesgo y dispone que la relación seleccionada figure en la Declaración de Aplicabilidad. No debe confundirse con la política de seguridad ni con un informe de auditoría.', 'vigente'],

  [7462, [49], ['I-10'], ['servicios comunes AGE', 'verificación de identidad', 'pasarela de pagos', 'FACe'], [
    { url: 'https://administracionelectronica.gob.es/ctt/dgpvdi', referencia: 'PAe-CTT, Servicio de Verificación de Datos de Identidad: servicio estatal de verificación que consulta coincidencia de identidad; el catálogo identifica como organismos responsables al ministerio competente y a la Agencia Estatal de Administración Digital.' },
    { url: 'https://administracionelectronica.gob.es/ctt/pagos', referencia: 'PAe-CTT, Pasarela de pagos: solución en producción, de ámbito estatal y clasificada como infraestructura o servicio común; facilita el pago telemático de tasas en organismos AGE.' },
    { url: 'https://administracionelectronica.gob.es/ctt/face', referencia: 'PAe-CTT, FACe: Punto General de Entrada de Facturas Electrónicas de la AGE, en producción y clasificado como infraestructura o servicio común; centraliza la recepción de facturas para organismos dados de alta.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-22935', referencia: 'Real Decreto 1125/2024, marco vigente de gobernanza, infraestructuras comunes y servicios compartidos de Administración Digital de la AGE.' },
    { url: 'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Tema 49 «Servicios Comunes A1 A2 O10», edición 2026: servicios e infraestructuras comunes de administración electrónica; correspondencia A1-49/A2-I-10. La ficha de cada servicio se comprueba en el catálogo oficial PAe-CTT.' }
  ], {
    texto: '¿Cuál de las siguientes afirmaciones describe correctamente los servicios comunes de la Administración General del Estado?',
    opciones: [
      'La verificación de datos de identidad es un servicio común disponible para las Administraciones.',
      'La Pasarela de Pagos es una infraestructura o servicio común de ámbito estatal para el pago telemático de tasas.',
      'FACe es una infraestructura o servicio común para la entrada de facturas electrónicas de la AGE.',
      'Todas las anteriores.'
    ], respuesta_correcta: 3
  }, 'Corregida D. La redacción negativa del original daba lugar a una respuesta autorreferencial y no distinguía qué servicios eran comunes. PAe-CTT confirma que la verificación de identidad, la Pasarela de Pagos y FACe son servicios de la AGE; las fichas de pagos y FACe los clasifican expresamente como infraestructura o servicio común. Se transforma en una pregunta positiva, verificable y sin ambigüedad.', 'corregida'],

  [7463, [109], ['IV-13'], ['Internet', 'IAB', 'RFC 2850', 'arquitectura de protocolos'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc2850.html', referencia: 'IETF RFC 2850, Charter of the Internet Architecture Board (IAB), §2.1: asigna al IAB la supervisión arquitectónica de los protocolos y procedimientos usados por Internet; no le atribuye definir por sí solo toda la arquitectura o todos los estándares.' },
    { url: 'https://www.iab.org/role/evaluating-new-work-proposals/', referencia: 'Internet Architecture Board, responsabilidades al evaluar nuevas propuestas: confirma el papel de supervisión arquitectónica del IAB conforme a RFC 2850 y el examen de coherencia arquitectónica de propuestas de trabajo del IETF.' },
    { url: 'https://www.iab.org/about/', referencia: 'IAB, About: describe la orientación técnica de largo plazo del organismo y aclara que no parte de un plano maestro que defina por completo la arquitectura de Internet.' },
    { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, bloque 42 «Redes», para arquitectura, protocolos y organismos de Internet; A1-109/A2-IV-13. La competencia precisa del IAB se contrasta en la RFC 2850.' }
  ], {
    texto: 'Según la RFC 2850, ¿qué organismo tiene responsabilidad de supervisión arquitectónica sobre los protocolos y procedimientos usados por Internet?',
    opciones: ['IETF.', 'ICANN.', 'IAB.', 'IRTF.'], respuesta_correcta: 2
  }, 'Corregida C. El original afirmaba que una entidad define «toda» la arquitectura de Internet, una simplificación excesiva. La RFC 2850 atribuye al IAB supervisión arquitectónica de protocolos y procedimientos; la ingeniería y estandarización de protocolos se desarrolla en el IETF, mientras ICANN coordina identificadores y la IRTF se centra en investigación.', 'corregida'],

  [7464, [50], ['III-13'], ['normalización', 'UNE', 'EN', 'ISO', 'nomenclatura de normas'], [
    { url: 'https://industria.gob.es/es-es/Servicios/calidad/Paginas/legislacion-basica.aspx?Faq=Normalizaci%C3%B3n', referencia: 'Ministerio de Industria y Turismo, Legislación básica sobre normalización: explica la codificación de normas adoptadas a nivel nacional, europeo e internacional; UNE designa la adopción española, EN la europea e ISO la internacional.' },
    { url: 'https://www.une.org/normalizacion_documentos/UNE-Documento-Posicion-Horizonte-Europa.pdf', referencia: 'UNE, Asociación Española de Normalización: se identifica como el organismo nacional de normalización de España y como miembro español de los organismos europeos e internacionales.' },
    { url: 'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Tema 50 «Organismos de normalización», edición 2026, vinculado a A1-50 y los epígrafes A2 de calidad, normalización y estándares. El significado actual de los prefijos se contrasta con el Ministerio de Industria y UNE.' }
  ], {
    texto: 'En la designación de una norma UNE-EN ISO, ¿qué indica el prefijo UNE?',
    opciones: [
      'Que la norma se ha adoptado como norma española.',
      'Que se trata de una norma de la Unión Europea no adoptada en España.',
      'Que el documento se ha publicado exclusivamente por ISO, sin adopción nacional o europea.',
      'Que la norma es una disposición reglamentaria obligatoria.'
    ], respuesta_correcta: 0
  }, 'Corregida A. Se sustituye la pregunta sobre la supuesta expansión literal de «UNE» por una lectura precisa de la nomenclatura: el prefijo identifica la adopción al catálogo español; EN señala la adopción europea e ISO la norma internacional de base. La normalización no convierte por sí sola la norma técnica en reglamento obligatorio.', 'corregida'],

  [7465, [50], ['III-13'], ['UNE', 'AENOR', 'normalización', 'certificación', 'RD 2200/1995'], [
    { url: 'https://www.aenor.com/es/conocenos/historia', referencia: 'AENOR, historia institucional: en 2017 se separaron las actividades de normalización en la Asociación Española de Normalización, UNE, y las de AENOR como entidad mercantil. La descripción histórica de AENOR como asociación privada sin ánimo de lucro no es una caracterización vigente de la entidad mercantil AENOR.' },
    { url: 'https://industria.gob.es/es-es/Servicios/calidad/Paginas/legislacion-basica.aspx?Faq=Normalizaci%C3%B3n', referencia: 'Ministerio de Industria y Turismo: identifica actualmente a la Asociación Española de Normalización, UNE, como organismo español de normalización y representante nacional en los foros europeos e internacionales.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1996-2468', referencia: 'Real Decreto 2200/1995, Reglamento de la Infraestructura para la Calidad y la Seguridad Industrial, texto consolidado: el artículo 8 regula organismos de normalización y reconocimiento por la Administración. El antiguo distractor citaba erróneamente «RD 200/1995» y atribuía a AENOR funciones que cambiaron tras la separación de 2017.' },
    { url: 'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk', referencia: 'Cotejo curricular ITIC Academy, Tema 50 «Organismos de normalización», edición 2026, para organismos nacionales e internacionales, normalización, pruebas de conformidad y certificación; correspondencia A1-50/A2-III-13.' }
  ], {
    texto: 'Tras la separación de actividades realizada en 2017, ¿qué afirmación distingue correctamente las funciones actuales de UNE y AENOR en España?',
    opciones: [
      'AENOR es una entidad pública empresarial dependiente de la Secretaría de Estado de Telecomunicaciones.',
      'UNE es la asociación reconocida como organismo nacional de normalización; AENOR es una entidad mercantil que presta servicios de evaluación de la conformidad, entre ellos certificación.',
      'AENOR y UNE son organismos públicos que dependen orgánicamente del Ministerio de Industria.',
      'El Real Decreto 200/1995 reconoció a AENOR como organismo único de normalización y certificación hasta la actualidad.'
    ], respuesta_correcta: 1
  }, 'Corregida B. El original mezclaba el carácter histórico de la asociación AENOR anterior a 2017 con la organización actual y citaba erróneamente el RD 200/1995. La normalización nacional corresponde hoy a UNE; AENOR opera como entidad mercantil de evaluación de la conformidad. El RD aplicable citado es el 2200/1995 y su régimen de reconocimiento no justifica atribuir a AENOR en exclusiva ambas funciones hoy.', 'corregida']
];

apply({ numero: '1432', fecha: '2026-11-16', records });
