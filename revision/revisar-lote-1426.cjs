const apply = require('./aplicar-lote.cjs');

const records = [
  [7431, [122], ['IV-13'], ['IRC', 'Internet Relay Chat', 'mensajería instantánea', 'conferencias de texto'], [
    { url: 'https://www.rfc-editor.org/rfc/rfc1459.html', referencia: 'IETF RFC 1459, §§1 y 3: define IRC (Internet Relay Chat) como sistema de teleconferencia para conferencias de texto, con arquitectura cliente-servidor y canales; describe el protocolo histórico que dio nombre a IRC.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc2810.html', referencia: 'IETF RFC 2810, IRC: Architecture: actualiza y formaliza la arquitectura IRC, distinguiendo servidores, clientes y canales.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc2812.html', referencia: 'IETF RFC 2812, IRC: Client Protocol: especifica el protocolo cliente-servidor IRC que actualiza RFC 1459.' }
  ], {
    texto: '¿Qué protocolo basado en servidores y canales se diseñó para conferencias de texto en Internet y se convirtió en un sistema clásico de chat?',
    opciones: ['SIP.', 'Skype.', 'OSCAR.', 'IRC (Internet Relay Chat).'],
    respuesta_correcta: 3
  }, 'Corregida D. «Los primeros chats» era una afirmación histórica imprecisa: los sistemas de conversación anteriores incluían BBS y servicios locales. Se pregunta ahora por el protocolo de conferencias de texto de Internet identificado por RFC 1459 y actualizado por RFC 2810/2812. OSCAR es un protocolo de mensajería de AOL; Skype es una aplicación posterior y SIP señaliza sesiones multimedia.', 'corregida'],
  [7432, [108, 130], ['IV-16'], ['ITU-T H.323', 'videoconferencia', 'redes basadas en paquetes', 'multimedia'], [
    { url: 'https://www.itu.int/rec/T-REC-H.323-202203-I/en', referencia: 'ITU-T H.323 (03/2022), actualmente en vigor: sistemas de comunicaciones multimedia basados en redes de paquetes (PBN), que pueden no ofrecer QoS garantizada; terminales H.323 admiten audio y, opcionalmente, vídeo y datos.' },
    { url: 'https://www.itu.int/rec/T-REC-H.320/en', referencia: 'ITU-T H.320: sistemas y equipos de videotelefonía de banda estrecha en RDSI; sirve para distinguir la familia de sistemas H.320 de H.323 sobre redes de paquetes.' },
    { url: 'https://www.itu.int/rec/T-REC-H.324/en', referencia: 'ITU-T H.324: terminales multimedia de baja velocidad binaria para la red telefónica general conmutada y conexiones inalámbricas; no es la recomendación general H.323 para redes de paquetes.' }
  ], {
    texto: '¿Qué recomendación UIT-T especifica sistemas de comunicaciones multimedia sobre redes basadas en paquetes, que pueden no ofrecer calidad de servicio garantizada?',
    opciones: ['H.323.', 'H.320, para sistemas de banda estrecha en RDSI.', 'H.324, para terminales multimedia de baja velocidad sobre la red telefónica conmutada.', 'G.711, códec de audio de banda telefónica.'],
    respuesta_correcta: 0
  }, 'Corregida A. ITU-T H.323 (03/2022) sigue en vigor y define sistemas multimedia en redes basadas en paquetes, incluida la posibilidad de que no garanticen QoS. Se sustituyen referencias de distractores poco claras y se distingue H.323 de H.320/H.324 y del códec de audio G.711.', 'corregida'],
  [7433, [111], ['II-8'], ['modelo OSI', 'capa de sesión', 'control de diálogo', 'sincronización'], [
    { url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I%21%21PDF-E&lang=e&type=items', referencia: 'ITU-T X.200 / ISO/IEC 7498-1:1994, §7.3.2: la capa de sesión organiza y sincroniza el diálogo entre entidades de presentación y gestiona el intercambio de datos; §7.3.1.4 describe los puntos de sincronización.' }
  ], {
    texto: 'Según el modelo de referencia OSI de ITU-T X.200, ¿qué función corresponde a la capa de sesión?',
    opciones: [
      'Organizar y sincronizar el diálogo entre entidades de presentación y gestionar su intercambio ordenado de datos.',
      'Elegir rutas y encaminar paquetes entre redes.',
      'Representar los datos con una sintaxis común y transformar su formato.',
      'Detectar errores de transmisión en tramas y controlar el acceso al medio.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. La idea del original era correcta, pero «mantener un registro de la parte que está hablando» simplifica en exceso el control de diálogo. X.200 define como propósito organizar y sincronizar el diálogo y gestionar el intercambio de datos; ofrece puntos de sincronización y resincronización.', 'corregida'],
  [7434, [76, 77], ['II-9'], ['OWL 1', 'OWL Lite', 'OWL DL', 'OWL Full', 'ontologías'], [
    { url: 'https://www.w3.org/TR/owl-guide/', referencia: 'W3C OWL Web Ontology Language Guide (2004), §1.1: OWL 1 ofrece tres sublenguajes de expresividad creciente: OWL Lite, OWL DL y OWL Full.' },
    { url: 'https://www.w3.org/TR/owl-ref/', referencia: 'W3C OWL Web Ontology Language Reference (2004): referencia normativa de los sublenguajes Lite, DL y Full de OWL 1.' },
    { url: 'https://www.w3.org/TR/owl2-overview/', referencia: 'W3C OWL 2 Web Ontology Language Document Overview (Second Edition): OWL 2 define los perfiles EL, QL y RL. Se explicita OWL 1 en el enunciado para no confundir las dos clasificaciones.' }
  ], {
    texto: 'En OWL 1 (la clasificación del W3C de 2004), ¿cuál de estos nombres NO corresponde a uno de sus tres sublenguajes de expresividad creciente?',
    opciones: ['OWL Lite.', 'OWL DL.', 'OWL Extension.', 'OWL Full.'],
    respuesta_correcta: 2
  }, 'Corregida C. La respuesta original es válida para OWL 1: los nombres son Lite, DL y Full. El enunciado no indicaba versión y podía confundirse con OWL 2, cuyos tres perfiles son EL, QL y RL; se acota la pregunta a OWL 1 y se explica la diferencia. No existe un sublenguaje oficial denominado OWL Extension.', 'corregida'],
  [7435, [116, 130], ['IV-14', 'IV-16'], ['MOS', 'Mean Opinion Score', 'calidad de voz', 'VoIP'], [
    { url: 'https://www.itu.int/rec/T-REC-P.800.1/en', referencia: 'ITU-T P.800.1 (07/2016), en vigor: terminología de MOS y sus variantes para expresar calidad de audio, vídeo y audiovisual, indicando si el valor procede de pruebas subjetivas o de modelos objetivos.' },
    { url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-P.800-199608-I%21%21PDF-E&lang=e&type=items', referencia: 'ITU-T P.800, métodos de determinación subjetiva: define escalas de opinión y la media de sus puntuaciones (Mean Opinion Score) para evaluar calidad percibida de voz.' },
    { url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-P.800.2-201305-S%21%21PDF-E&lang=e&type=items', referencia: 'ITU-T P.800.2: interpretación y reporte de MOS; precisa que se calcula como media de las opiniones recogidas para el caso de uso y que modelos objetivos también pueden predecirlo.' }
  ], {
    texto: 'En la evaluación de la calidad de voz, ¿qué representa el MOS (Mean Opinion Score)?',
    opciones: [
      'La media de puntuaciones de opinión sobre la calidad percibida; suele obtenerse en pruebas subjetivas y también puede estimarse con modelos objetivos.',
      'Una medida directa del porcentaje de paquetes perdidos, independiente de la percepción del usuario.',
      'Un indicador de latencia calculado únicamente por el códec, sin pruebas ni modelo perceptual.',
      'Una técnica de estimación del esfuerzo de desarrollo definida por Métrica 3.'
    ],
    respuesta_correcta: 0
  }, 'Corregida A. La definición del original era demasiado restrictiva al presentar MOS solo como medida subjetiva. ITU-T P.800 define la puntuación media de opiniones subjetivas; P.800.1/P.800.2 distinguen variantes de MOS asociadas a pruebas subjetivas y a modelos objetivos que predicen puntuaciones perceptuales.', 'corregida']
];

apply({ numero: '1426', fecha: '2026-11-16', records });
