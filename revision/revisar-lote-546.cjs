const apply = require('./aplicar-lote.cjs');

const itu = 'https://www.itu.int/pub/R-REP-M.2412-2017';
const webrtc = 'https://www.w3.org/TR/2021/REC-webrtc-20210126/';
const webrtcWg = 'https://www.w3.org/groups/wg/webrtc/';
const rfc8825 = 'https://www.rfc-editor.org/rfc/rfc8825.html';
const boe = 'https://www.boe.es/eli/es/res/2011/07/19/(7)';
const rfc1195 = 'https://www.rfc-editor.org/rfc/rfc1195.html';
const cisco10g = 'https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/data_sheet_c78-455693.html';

const records = [
  [3046, [123], ['IV-15'], ['IMT-2020', '5G', 'eMBB', 'URLLC', 'mMTC'], [
    {url: itu, referencia: 'ITU-R Report M.2412-0 (11/2017), vigente: enumera los tres escenarios de uso para IMT-2020 como eMBB, mMTC y URLLC; véase §8 y tabla 4.'}
  ], '', 'Los tres escenarios de uso IMT-2020 recogidos por la ITU-R son eMBB (banda ancha móvil mejorada), mMTC (comunicaciones masivas tipo máquina) y URLLC (comunicaciones ultrafiables y de baja latencia). «eMLLC» no es uno de ellos y parece una mezcla errónea de acrónimos. Se corrige además la capitalización de URLLC en las opciones. Cotejo curricular: ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles», apartado de 5G; correspondencia oficial directa A1-123/A2-IV-15.', 'corregida'],
  [3047, [133], ['II-16'], ['colaboración síncrona', 'WebRTC', 'W3C', 'IETF', 'videoconferencia'], [
    {url: webrtc, referencia: 'W3C Recommendation WebRTC 1.0 (26/01/2021): define APIs ECMAScript para enviar y recibir medios y datos de aplicación entre navegadores/dispositivos con protocolos en tiempo real.'},
    {url: rfc8825, referencia: 'IETF RFC 8825, §2.2: distingue la especificación JavaScript API de W3C de la especificación de protocolos desarrollada en IETF.'},
    {url: webrtcWg, referencia: 'W3C WebRTC Working Group: su misión es definir APIs cliente para comunicaciones en tiempo real en navegadores, incluidos audio, vídeo y funciones auxiliares como compartir pantalla.'}
  ], '', 'El enunciado original generalizaba sobre todos los sistemas síncronos y afirmaba que su estándar lo define W3C, sin delimitar qué componente. Se sustituye por un caso preciso: WebRTC. La recomendación W3C define la API JavaScript; la suite de protocolos de comunicaciones WebRTC se especifica en IETF. No se infiere que toda colaboración síncrona use WebRTC ni que la API determine todas las funciones de las plataformas. Cotejo curricular: ITIC Academy, Bloque 50 «Videoconferencia, SSO y trabajo colaborativo» (2026.1), herramientas colaborativas; correspondencia A1-133/A2-II-16.', 'corregida'],
  [3048, [120], ['IV-10'], ['Red SARA', 'Área de Conexión', 'DMZ', 'NTI', 'DNS', 'SMTP', 'POP3', 'Proxy'], [
    {url: boe, referencia: 'Resolución de 19/07/2011, BOE-A-2011-13173, NTI de requisitos de conexión, apartado III.1.3: el texto enumera como servicios telemáticos básicos DNS, SMTP, NTP, Proxy y Proxy inverso; POP3 no aparece en esa enumeración.'}
  ], '', 'La pregunta se delimita expresamente a la lista enumerada en el apartado III.1.3 de la NTI aprobada por Resolución de 19 de julio de 2011: DNS, SMTP, NTP, Proxy y Proxy inverso. POP3 no forma parte de esa lista. Esto no significa que una configuración concreta no pueda ofrecer POP3 como servicio adicional; la propia norma contempla equipos adicionales bajo condiciones del Centro de Soporte. Correspondencia oficial directa A1-120 (Red SARA) e indirecta A2-IV-10 (redes de área extensa e interconexión; el tema A2 no cita SARA de forma específica). No se afirma aquí que la lista describa todas las configuraciones desplegadas actualmente.', 'corregida'],
  [3049, [108], ['II-8', 'IV-10'], ['encaminamiento', 'estado del enlace', 'IS-IS', 'SPF', 'Dijkstra'], [
    {url: rfc1195, referencia: 'IETF RFC 1195, §§1.1 y 1.3: describe Integrated IS-IS como protocolo dinámico de encaminamiento basado en el algoritmo SPF de Dijkstra, que difunde y procesa información de estado de enlace.'}
  ], '', 'IS-IS es un protocolo de encaminamiento de estado del enlace y calcula rutas mediante SPF (Dijkstra). IGRP y RIP son protocolos de vector distancia; BGP es un protocolo de encaminamiento interdominio de vector de camino. Se formula la pregunta como identificación de protocolo para evitar confundir protocolo y algoritmo SPF. Cotejo curricular: ITIC Academy, Bloques 42 «Redes» y 43 «Protocolos» (2026.1), protocolos de encaminamiento; correspondencia oficial A1-108/A2-II-8 y A2-IV-10.', 'corregida'],
  [3050, [110, 118], ['IV-7', 'IV-8'], ['Ethernet', '10GBASE-ER', 'fibra monomodo', '1550 nm', 'tercera ventana'], [
    {url: cisco10g, referencia: 'Cisco, ficha oficial de módulos SFP+ 10G: caracteriza 10GBASE-ER como óptica 1550 nm para fibra monomodo (SMF), con alcance típico de hasta 40 km; tabla de características ópticas.'}
  ], '', '10GBASE-ER emplea fibra monomodo y una longitud de onda en torno a 1550 nm, llamada tradicionalmente tercera ventana. La ficha de Cisco documenta 1550 nm (rango de transmisión 1530–1565 nm) y SMF. No usa par de cobre ni fibra multimodo. Se precisa que estas características corresponden al interfaz óptico 10GBASE-ER, no a cualquier red Ethernet de 10 Gbit/s. Cotejo curricular: ITIC Academy, Bloque 42 «Redes» (2026.1), fibra y Ethernet; correspondencias A1-110/A1-118 y A2-IV-7/IV-8.', 'corregida']
];

apply({numero: '546', fecha: '2026-10-29', records, edits: {
  3046: {texto: 'Según el Informe ITU-R M.2412 para los escenarios de uso de IMT-2020, ¿cuál de estos acrónimos NO corresponde a uno de los tres escenarios definidos?', opciones: ['eMBB (banda ancha móvil mejorada).', 'eMLLC (acrónimo propuesto en esta opción).', 'URLLC (comunicaciones ultrafiables y de baja latencia).', 'mMTC (comunicaciones masivas tipo máquina).'], respuesta_correcta: 1},
  3047: {texto: 'En WebRTC, ¿qué afirmación distingue correctamente el papel de W3C y del IETF?', opciones: ['W3C define las APIs JavaScript de comunicación en tiempo real para navegadores, mientras que el IETF especifica los protocolos de la suite WebRTC.', 'W3C define todos los protocolos de transporte de WebRTC y el IETF solo la interfaz visual.', 'WebRTC exige que toda comunicación de audio y vídeo se distribuya mediante multicast.', 'La recomendación WebRTC impone que todas las herramientas de colaboración síncrona funcionen dentro de un navegador.'], respuesta_correcta: 0},
  3048: {texto: 'Según el apartado III.1.3 de la NTI de requisitos de conexión a la red SARA aprobada por Resolución de 19 de julio de 2011, ¿qué servicio NO figura en la enumeración de servicios telemáticos básicos del Área de Conexión?', opciones: ['SMTP.', 'POP3.', 'DNS.', 'Proxy.'], respuesta_correcta: 1},
  3049: {texto: '¿Cuál de los siguientes protocolos de encaminamiento calcula rutas a partir de información de estado del enlace mediante SPF?', opciones: ['IS-IS.', 'IGRP.', 'BGP.', 'RIP.'], respuesta_correcta: 0},
  3050: {texto: '¿Qué medio y banda óptica caracterizan al interfaz Ethernet 10GBASE-ER?', opciones: ['Par de cobre.', 'Fibra óptica multimodo en torno a 850 nm (primera ventana).', 'Fibra óptica monomodo en torno a 1550 nm (tercera ventana).', 'Fibra óptica multimodo en torno a 1310 nm (segunda ventana).'], respuesta_correcta: 2}
}});
