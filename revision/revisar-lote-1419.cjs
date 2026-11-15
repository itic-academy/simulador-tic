const apply = require('./aplicar-lote.cjs');

const tempest = [
  {
    url: 'https://csrc.nist.gov/glossary/term/TEMPEST',
    referencia: 'NIST CSRC Glossary, TEMPEST (con definición atribuida a CNSSI 4009-2022): investigación, estudio y control de emanaciones comprometedoras involuntarias de equipos de telecomunicaciones y sistemas automatizados de información.'
  },
  {
    url: 'https://csrc.nist.gov/glossary/term/compromising_emanations',
    referencia: 'NIST CSRC Glossary, compromising emanations (CNSSI 4009-2022): señales no intencionadas que, interceptadas y analizadas, revelarían información procesada o transmitida por equipos de información.'
  },
  {
    url: 'https://csrc.nist.gov/glossary/term/suppression_measure',
    referencia: 'NIST CSRC Glossary, suppression measure (CNSSI 4009-2022): acción, procedimiento, modificación o dispositivo que reduce el nivel o inhibe la generación de emanaciones comprometedoras.'
  },
  {
    url: 'https://www.ncsc.gov.uk/information/tempest-and-electromagnetic-security',
    referencia: 'NCSC del Reino Unido, TEMPEST and Electromagnetic Security, revisado el 15/05/2025: las señales involuntarias pueden revelar datos sensibles y las contramedidas apropiadas se determinan por el riesgo; no todas las técnicas son obligatorias ni intercambiables en cualquier instalación.'
  }
];
const records = [
  [7396, [125], ['IV-12'], ['TEMPEST', 'EMSEC', 'emanaciones comprometedoras', 'ruido de enmascaramiento', 'zona controlada'], tempest, {
    texto: 'En protección frente a emanaciones comprometedoras, ¿qué afirmación sobre las medidas de mitigación es correcta?',
    opciones: [
      'El control TEMPEST estudia y limita estas emanaciones; puede incluir medidas técnicas, físicas y operativas.',
      'El ruido de enmascaramiento puede dificultar la recuperación de la señal, si se diseña y valida para el riesgo y el entorno.',
      'Una zona controlada puede aumentar la separación y limitar el acceso de posibles receptores a las señales.',
      'Todas las anteriores describen medidas o enfoques que pueden emplearse, según la evaluación de riesgo.'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. El original mezclaba una disciplina/programa (TEMPEST) con técnicas concretas y no acotaba el contexto. Se precisa que el ruido de enmascaramiento y la zona controlada son opciones posibles, no controles universales: la selección y eficacia dependen de la evaluación de riesgo, diseño y validación. NIST define TEMPEST como estudio y control de emanaciones y una medida de supresión como acción o dispositivo que las reduce; NCSC exige ajustar las contramedidas al riesgo.', 'corregida'],
  [7397, [125], ['IV-12'], ['TEMPEST', 'EMSEC', 'compromising emanations', 'fuga electromagnética'], [
    {
      url: 'https://csrc.nist.gov/glossary/term/compromising_emanations',
      referencia: 'NIST CSRC Glossary, compromising emanations (CNSSI 4009-2022): señales involuntarias que, si son interceptadas y analizadas, revelan información transmitida, recibida, manejada o procesada por equipos de telecomunicaciones o sistemas de información.'
    },
    {
      url: 'https://csrc.nist.gov/glossary/term/TEMPEST',
      referencia: 'NIST CSRC Glossary, TEMPEST: denomina la investigación, estudio y control de esas emanaciones; no es el nombre técnico de la señal filtrada.'
    }
  ], {
    texto: '¿Cómo se denominan las señales involuntarias que, interceptadas y analizadas, pueden revelar información procesada por un sistema?',
    opciones: ['Emanaciones comprometedoras (compromising emanations).', 'TEMPEST.', 'CARMEN.', 'SCADA.'],
    respuesta_correcta: 0
  }, 'Corregida A. El concepto definido es «emanaciones comprometedoras». TEMPEST denomina la investigación, estudio y control de estas emanaciones, por lo que el enunciado original confundía el fenómeno con el ámbito de protección.', 'corregida'],
  [7398, [59], ['III-5'], ['sistemas de numeración', 'base 12', 'hexadecimal', 'conversión posicional'], 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', 'BOE-A-2025-25938, temario oficial del Cuerpo Superior TIC, tema A1-59; se usa solo para justificar la ubicación curricular de fundamentos de sistemas. La respuesta numérica se comprueba directamente: 6×12²+11×12+7=1003.', {
    texto: '¿En qué base, entre las opciones, el numeral 6B7 representa el número decimal 1003? (En las bases indicadas, B representa el dígito once.)',
    opciones: ['Base 13.', 'Base 7.', 'Base 11.', 'Base 12.'],
    respuesta_correcta: 3
  }, 'Vigente D. En base 12, 6B7 = 6×12² + 11×12 + 7 = 864 + 132 + 7 = 1003. En base 7 el dígito B no es válido; en base 11 tampoco, porque sus dígitos van de 0 a A (10). En base 13 el valor es 1164. La formulación declara la convención de B y evita que las opciones con dígitos inválidos se interpreten como valores.', 'vigente'],
  [7399, [116], ['IV-14'], ['VoIP', 'H.323', 'SIP', 'gatekeeper', 'router'], [{
    url: 'https://www.itu.int/rec/T-REC-H.323/en',
    referencia: 'ITU-T H.323, Packet-based multimedia communications systems: define una arquitectura de comunicaciones multimedia por paquetes con terminales, gateways, gatekeepers y unidades de control multipunto. Gatekeeper es opcional; routers pueden transportar el tráfico IP.'
  }, {
    url: 'https://www.rfc-editor.org/rfc/rfc3261.html',
    referencia: 'IETF RFC 3261, SIP: Session Initiation Protocol: especifica SIP como protocolo de señalización para iniciar, modificar y terminar sesiones; SIP es una alternativa de señalización distinta de H.323, no un componente de este último.'
  }], {
    texto: 'En una instalación de VoIP basada en H.323, ¿cuál de estos términos identifica un protocolo de señalización alternativo y no un componente propio de la arquitectura H.323?',
    opciones: ['Gatekeeper.', 'SIP.', 'Router IP.', 'Todos son componentes o elementos de la instalación H.323.'],
    respuesta_correcta: 1
  }, 'Corregida B. El enunciado original preguntaba qué elemento no es propio de VoIP en general, aunque gatekeeper (H.323), SIP y routers pueden aparecer en distintas arquitecturas, por lo que «todos» era defendible. Se acota a H.323: el gatekeeper es un componente opcional y un router puede transportar el tráfico; SIP es otro protocolo de señalización, no un componente de H.323.', 'corregida'],
  [7400, [111], ['II-8'], ['OSI', 'especificación de protocolo', 'PDU', 'primitivas de servicio', 'procedimientos'], [{
    url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.225-199511-I%21%21PDF-E&lang=e&type=items',
    referencia: 'ITU-T X.225 (1995) / ISO/IEC 8327-1:1996, §1: especifica procedimientos, estructura y codificación de las unidades de datos del protocolo (PDU) y define interacciones mediante primitivas de servicio con las entidades pares y los proveedores/usuarios de servicio.'
  }, {
    url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.236-199504-I%21%21PDF-E&lang=e&type=items',
    referencia: 'ITU-T X.236 (1995) / ISO/IEC 9576-1:1995, §1: ejemplifica especificación de procedimientos, PDU, primitivas de servicio y tablas de estado; la especificación es independiente de detalles de implementación como sistema operativo o lenguaje.'
  }], {
    texto: '¿Qué describe una especificación de protocolo OSI, como mínimo, para definir la comunicación entre entidades pares?',
    opciones: [
      'Solo el formato de las PDU, sin indicar qué significan ni cómo se intercambian.',
      'Las PDU y su codificación, los procedimientos de intercambio y las interacciones con los servicios/primitivas de las capas adyacentes.',
      'El código interno completo, el sistema operativo y el lenguaje de programación obligatorios para cada implementación.',
      'Únicamente el medio físico y los conectores que debe utilizar cada equipo.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. El original daba a entender que una descripción genérica de un protocolo exige siempre ASN.1 y una forma concreta de especificación. Los estándares OSI definen, según el protocolo, procedimientos entre entidades, estructura/codificación de PDU y las interacciones mediante primitivas de servicio; no prescriben necesariamente el código, el sistema operativo o el lenguaje de implementación.', 'corregida']
];

apply({ numero: '1419', fecha: '2026-11-15', records });
