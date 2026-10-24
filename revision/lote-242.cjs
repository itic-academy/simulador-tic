const apply = require('./aplicar-lote.cjs');

const records = [
  [1526, [114], ['IV-11'], ['Bluetooth LE', 'BLE', '2,4 GHz', 'ISM'], 'https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Core-62/out/en/low-energy-controller/radio-physical-layer-specification.html', 'Bluetooth Core Specification 6.2, Vol. 6, Part A, §§1–2: BLE opera en la banda ISM de 2,4 GHz (2400–2483,5 MHz); define 40 canales RF con centros de 2402 a 2480 MHz.', 'Bluetooth LE funciona en la banda ISM no licenciada de 2,4 GHz. La especificación fija el intervalo de 2400 a 2483,5 MHz; no debe confundirse con NFC (13,56 MHz) ni con algunas bandas WLAN de 5 GHz.', 'vigente'],
  [1527, [114], ['IV-11'], ['IEEE 802.11', '802.11a', '802.11b', '802.11g', '2,4 GHz'], 'https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/', 'IEEE Standards Association, Wi-Fi Timeline: 802.11b opera en 2,4 GHz; 802.11a en 5 GHz; 802.11g en la banda 2,4 GHz.', 'Tanto 802.11b como 802.11g operan en 2,4 GHz, mientras que 802.11a se diseñó para 5 GHz. Se precisa el enunciado para que la respuesta sea la combinación B y C y no parezca que solo existe un estándar WLAN en esa banda.', 'corregida'],
  [1528, [108, 115], ['II-8'], ['IPv4', 'IP', 'servicio no orientado a conexión', 'encaminamiento', 'best effort'], [
    {url: 'https://www.rfc-editor.org/rfc/rfc791.html', referencia: 'RFC 791, Internet Protocol, §§1.4 y 2.2: IP trata los datagramas como entidades independientes y ofrece un servicio no fiable; el encaminamiento se decide al reenviar cada datagrama.'},
    {url: 'https://www.rfc-editor.org/rfc/rfc6250.html', referencia: 'RFC 6250, §2 y §3.1.7–3.1.8: el servicio IP es no orientado a conexión y best effort, sin garantía de entrega, orden o ausencia de duplicados; documenta que el primer paquete puede seguir una ruta distinta y que el balanceo por paquete puede producir reordenación.'}
  ], null, 'Se evita la expresión ambigua «funcionamiento de TCP/IP» y la afirmación de integridad del segmento, que corresponde a protocolos de transporte y no al servicio IP. La afirmación falsa es que los datagramas con el mismo origen y destino deban conservar una única ruta: RFC 6250 documenta cambios de ruta y reordenación. IP es no orientado a conexión y best effort, y no garantiza entrega ni orden.', 'corregida'],
  [1529, [110, 118], ['IV-8'], ['switch Ethernet', 'trama unicast desconocida', 'tabla MAC', 'inundación', 'VLAN'], 'https://www.cisco.com/c/en/us/support/docs/lan-switching/ethernet/12006-chapter22.html', 'Cisco, Troubleshoot LAN Switching Environments, reglas básicas de reenvío: si la MAC destino no figura en la CAM, el switch inunda la trama por los demás puertos de la misma VLAN, salvo el de entrada.', 'La respuesta es la inundación de la trama unicast desconocida por los puertos de reenvío de la VLAN de entrada, excepto el puerto por el que llegó. Se especifican VLAN y puerto de ingreso: no se envía una consulta ARP para averiguar una MAC destino de la trama recibida.', 'corregida'],
  [1530, [110, 118], ['IV-8'], ['puente', 'bridge', 'capa de enlace', 'nivel 2', 'LAN'], 'https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1923.html', 'Cisco, Troubleshooting LAN Switching Environments, apartado “Bridges and Switches”: un switch básico opera en capa 2 y aplica el algoritmo de puente transparente; lógicamente actúa como un puente.', 'El puente (bridge) interconecta segmentos LAN y reenvía tramas en la capa 2. Se formula en términos de segmentos y direcciones MAC para distinguirlo del router, que encamina paquetes de capa 3; un switch Ethernet moderno implementa funcionalidad de puente transparente.', 'corregida']
];

const edits = {
  1527: {texto: 'Entre los estándares IEEE 802.11 ofrecidos, ¿cuáles operan en la banda de 2,4 GHz?', respuesta_correcta: 3},
  1528: {texto: 'Sobre el servicio de IPv4, señale la afirmación falsa:', opciones: [
    'IPv4 ofrece un servicio no orientado a conexión y no mantiene una conexión extremo a extremo entre origen y destino.',
    'Todos los datagramas con el mismo origen y destino, una vez elegida una ruta, deben seguir necesariamente ese mismo camino.',
    'IPv4 no garantiza una capacidad mínima, un retardo máximo ni una variación acotada del retardo.',
    'IPv4 no garantiza la entrega ni el orden de llegada de los datagramas.'
  ], respuesta_correcta: 1},
  1529: {texto: 'En un switch Ethernet, si la dirección MAC de destino de una trama unicast no está en la tabla de reenvío, ¿qué hace normalmente el switch?', opciones: [
    'La envía por todos los puertos de todas las VLAN.',
    'Emite una solicitud ARP para averiguar la dirección MAC de destino.',
    'La inunda por los puertos de reenvío de la VLAN de entrada, excepto el puerto por el que se recibió.',
    'La descarta siempre.'
  ], respuesta_correcta: 2},
  1530: {texto: '¿Cómo se denomina el dispositivo de capa 2 que interconecta segmentos de una LAN y reenvía tramas según direcciones MAC?', respuesta_correcta: 1}
};

apply({numero: '242', fecha: '2026-10-25', records, edits});
