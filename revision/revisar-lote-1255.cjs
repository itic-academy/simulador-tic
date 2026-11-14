const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({ url, referencia });
const academy = (detail) => src(
  'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
  `ITIC Academy, bloque 42 «Redes», edición 2026.1: ${detail}; guía de temario, no autoridad técnica.`
);
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';

apply({ numero: '1255', fecha: '2026-11-14', records: [
  [6596, ['110', '111', '118'], ['IV-8'], ['redes LAN', 'switch', 'router', 'hub', 'repetidor', 'OSI'], [
    src('https://www.rfc-editor.org/rfc/rfc7387.html', 'RFC 7387 §2.1: la conmutación Ethernet aprende direcciones MAC y reenvía según la dirección destino; se inundan, entre otros casos, destinos unicast desconocidos, multicast y broadcast, no toda trama conocida.'),
    src('https://www.rfc-editor.org/rfc/rfc1812.html', 'RFC 1812 §2.2.3 y §5: un router IP reenvía datagramas entre interfaces y redes usando información de capa de red (IP).'),
    src('https://standards.ieee.org/ieee/802.3bz/6003/', 'IEEE 802.3: la especificación Ethernet incluye repetidores para topologías de medio compartido; el repetidor opera sobre la señal física y no filtra por direcciones MAC/IP.'),
    src(a1, 'Convocatoria GSI A1 2025, temas 110 (cableado/interconexión), 111 (OSI) y 118 (LAN y dispositivos).'),
    src(a2, 'Convocatoria GSI A2 2025, tema IV.8: redes locales, técnicas de transmisión y dispositivos de interconexión.'),
    academy('el programa cubre redes LAN, Ethernet y dispositivos de interconexión; el PDF se usa solo como cotejo curricular.')
  ], {
    texto: '¿Qué afirmación describe correctamente un repetidor Ethernet?',
    opciones: [
      'Un switch reenvía necesariamente cada trama recibida por todos sus puertos, aunque conozca la MAC de destino.',
      'Un router IP opera, por definición, en la capa de transporte del modelo OSI.',
      'Un hub proporciona a cada nodo un ancho de banda dedicado e independiente de los demás.',
      'Un repetidor regenera o retransmite señales en la capa física; no filtra tramas por direcciones y mantiene los segmentos conectados dentro del mismo dominio de acceso compartido.'
    ]
  }, 'Se conserva D. La formulación original atribuía al repetidor un aumento necesario de colisiones y congestión, algo dependiente de la topología y carga y técnicamente impreciso. El repetidor extiende/regenera el medio físico; no separa dominios de acceso como lo hace un puente o switch. El switch aprende MAC y normalmente dirige la trama al puerto asociado, inundando solo en situaciones como destino desconocido o broadcast.', 'corregida'],

  [6597, ['111'], ['II-8'], ['TCP/IP', 'UDP', 'transporte', 'datagramas', 'QUIC'], [
    src('https://www.rfc-editor.org/rfc/rfc8095.html', 'RFC 8095 §3.3: UDP es un protocolo de transporte sin conexión, con datagramas independientes y sin establecimiento de conexión.'),
    src('https://www.rfc-editor.org/rfc/rfc768.html', 'RFC 768: define UDP como servicio de datagramas orientado a transacciones, sin garantía de entrega ni protección frente a duplicados.'),
    src('https://www.rfc-editor.org/rfc/rfc9293.html', 'RFC 9293 §2.2: TCP es un protocolo de transporte orientado a conexión.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 111: modelo OSI, capas y protocolos.'),
    src(a2, 'Convocatoria GSI A2 2025, tema II.8: modelos TCP/IP y OSI, capas y protocolos.'),
    academy('el bloque aborda modelos de red, TCP/IP y protocolos de transporte dentro del temario de redes.')
  ], {
    texto: 'En la capa de transporte de TCP/IP, ¿cuál de estos protocolos ofrece un servicio de datagramas sin conexión?',
    opciones: ['HTTP.', 'UDP.', 'FTP.', 'TCP.']
  }, 'Se mantiene B. UDP es un protocolo de transporte sin conexión que transmite datagramas sin establecer previamente una conexión y sin garantizar entrega u orden. TCP sí es orientado a conexión. HTTP y FTP son protocolos de aplicación, aunque HTTP/3 utiliza QUIC sobre UDP: eso no convierte a HTTP en un protocolo de transporte.', 'corregida'],

  [6598, ['108', '112'], ['IV-7'], ['fibra óptica', 'cobre', 'atenuación', 'interferencias electromagnéticas', 'diafonía'], [
    src('https://www.itu.int/rec/T-REC-G.652-202408-I/en', 'Recomendación ITU-T G.652 (08/2024), vigente: define características geométricas, mecánicas y de transmisión de fibra monomodo; especifica atenuación por longitud de onda y su uso para enlaces ópticos.'),
    src('https://www.itu.int/epublications/publication/itu-t-g-suppl-39-2025-03-optical-system-design-and-engineering-considerations/en', 'Suplemento ITU-T G Suppl. 39 (03/2025): consideraciones de diseño de sistemas ópticos y características de transmisión de fibra.'),
    src(a1, 'Convocatoria GSI A1 2025, temas 108 (medios de transmisión) y 112 (tecnologías de acceso por fibra).'),
    src(a2, 'Convocatoria GSI A2 2025, tema IV.7: medios guiados, parámetros significativos y cableado.'),
    academy('el programa incluye fibra óptica, medios de transmisión guiados, redes de acceso y parámetros de redes.')
  ], {
    texto: 'Frente al cableado eléctrico de cobre, ¿qué conjunto describe ventajas habituales de la fibra óptica en enlaces de alta capacidad y, especialmente, de larga distancia?',
    opciones: [
      'Puede ofrecer gran capacidad y baja atenuación por kilómetro en los sistemas adecuados; no conduce corriente, es inmune a interferencias electromagnéticas y no presenta diafonía eléctrica, y el cable suele ser ligero y compacto.',
      'Tiene necesariamente menor ancho de banda que el cobre, es sensible a interferencias electromagnéticas y requiere repetidores a distancias más cortas.',
      'Transmite siempre más lentamente que el cobre y presenta mayor atenuación, aunque su cable sea más ligero.',
      'Es inmune al ruido electromagnético, pero conduce corriente entre equipos y presenta diafonía eléctrica mayor que el cobre.'
    ]
  }, 'Se mantiene A, con alcance delimitado. La fibra ofrece inmunidad a interferencia electromagnética y no sufre diafonía eléctrica; según tipo de fibra, longitud de onda, componentes y diseño, permite gran capacidad y baja atenuación en enlaces largos. Se retira la afirmación universal de que cualquier fibra tenga menor atenuación que todo cable de cobre: la atenuación es una propiedad del medio y del sistema concreto.', 'corregida'],

  [6599, ['19'], [], ['Oficinas de Transformación Digital', 'Red.es', 'pymes', 'autónomos', 'programa histórico'], [
    src('https://www.boe.es/eli/es/res/2017/11/06/(3)', 'Resolución de 6-11-2017, BOE-A-2017-13355, bases del programa Red.es: define la OTD como centro que sensibiliza y presta apoyo a autónomos y PYMES para incorporar TIC y optimizar su funcionamiento.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 19: impacto de las TIC en la economía y mercado de trabajo; correspondencia curricular amplia, no referencia literal al programa.'),
    src(a2, 'El programa de GSI A2 2025 no contiene un tema específico sobre el antiguo programa OTD; se deja sin asignación para no forzar el encaje.')
  ], {
    texto: 'Según las bases de 2017 del programa de Red.es «Oficinas de Transformación Digital», ¿a quién se dirigían sus servicios de sensibilización y apoyo?',
    opciones: ['A las Administraciones públicas.', 'A las PYMES y las personas trabajadoras autónomas.', 'A la ciudadanía en general.', 'A los inversores.']
  }, 'Se mantiene B como dato histórico del programa regulado en 2017: sus destinatarios eran las PYMES y las personas autónomas, a quienes las OTD ayudaban en la incorporación de las TIC. La pregunta se fecha y atribuye a sus bases para no presentarlo como un programa necesariamente vigente. El temario A1 ofrece solo una correspondencia general con el impacto económico de las TIC; no se fuerza clasificación A2 ni se ha localizado cobertura específica del programa en el temario de academia.', 'historica'],

  [6600, ['118'], ['IV-8'], ['CSMA', '1-persistente', 'p-persistente', 'no persistente', 'métodos de acceso'], [
    src('https://www.lk.cs.ucla.edu/data/files/Kleinrock/Packet%20Switching%20in%20Radio%20Channels%20Part.pdf', 'Kleinrock y Tobagi, «Packet Switching in Radio Channels: Part I—Carrier Sense Multiple-Access Modes and Their Throughput-Delay Characteristics», IEEE Transactions on Communications, 1975: análisis original y diagramas de los modos 1-persistente, p-persistente y no persistente.'),
    src('https://standards.ieee.org/ieee/802.3bz/6003/', 'IEEE 802.3 especifica el acceso CSMA/CD Ethernet en medios compartidos half-duplex; fuente normativa sobre el método Ethernet relacionado.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 118: LAN y métodos de acceso al medio.'),
    src(a2, 'Convocatoria GSI A2 2025, tema IV.8: redes locales y métodos de acceso.'),
    academy('el bloque cubre LAN, Ethernet, medios y métodos de acceso al medio, incluido CSMA.')
  ], {
    texto: 'En CSMA 1-persistente, ¿qué hace una estación que encuentra ocupado el canal y después detecta que queda libre?',
    opciones: [
      'Espera un tiempo aleatorio sin seguir escuchando el canal y luego vuelve a sondearlo; esa conducta caracteriza el modo no persistente.',
      'En un medio ranurado, cuando el canal está libre transmite con probabilidad p y, con probabilidad 1−p, difiere la decisión a la siguiente ranura; es la regla p-persistente.',
      'Sigue escuchando el canal ocupado y transmite inmediatamente cuando detecta que queda libre; si varias estaciones esperan, pueden colisionar al intentar transmitir a la vez.'
    ],
    respuesta_correcta: 2
  }, 'Se mantiene C. La versión anterior describía de forma casi idéntica la persistencia 1 y p y confundía la regla de espera aleatoria con 1-persistente. En 1-persistente la estación sigue sensando el canal ocupado y transmite de inmediato cuando queda libre; el modo no persistente espera un intervalo aleatorio antes de volver a sondear, mientras que p-persistente usa la probabilidad p en un canal ranurado.', 'corregida']
]});
