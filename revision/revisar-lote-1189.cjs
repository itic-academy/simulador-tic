const apply = require('./aplicar-lote.cjs');

const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy43 = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academy46 = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';

apply({
  numero: '1189',
  fecha: '2026-11-13',
  records: [
    [6266, ['111'], ['II-8'], ['API sockets', 'POSIX', 'AF_INET', 'AF_UNIX'], [
      {url: 'https://www.rfc-editor.org/rfc/rfc3493.html', referencia: 'RFC 3493, resumen: la interfaz sockets es la API de facto para TCP/IP, originalmente desarrollada en UNIX y después implantada en otros sistemas.'},
      {url: 'https://posix.opengroup.org/docs/PX1.html', referencia: 'The Open Group, declaración de conformidad POSIX: se requieren los dominios AF_INET (SOCK_STREAM y SOCK_DGRAM) y AF_UNIX (SOCK_STREAM), por lo que sockets no es exclusivo de TCP/IP.'},
      {url: a1, referencia: 'Convocatoria GSI A1 2025, anexo I, tema 111: arquitecturas, interfaces y protocolos.'},
      {url: a2, referencia: 'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelos TCP/IP y OSI, capas, interfaces y protocolos.'}
    ], null, 'Se reformula el enunciado porque las opciones originales mezclaban alcance del protocolo, familia de sistema y una afirmación histórica discutible. POSIX contempla tanto AF_INET como AF_UNIX y la API sockets se usa fuera de UNIX. La opción D expresa correctamente el carácter común de la interfaz y su soporte de distintos dominios y tipos.', 'corregida'],
    [6267, ['118'], ['IV-9'], ['SNMP', 'UDP', 'TCP', 'RFC 3417'], [
      {url: 'https://www.rfc-editor.org/rfc/rfc3417.html', referencia: 'RFC 3417, secciones 1 y 3: el mapeo sobre UDP/IPv4 es el preferido y obligatorio de implementar para sistemas IPv4.'},
      {url: 'https://www.rfc-editor.org/rfc/rfc3430.html', referencia: 'RFC 3430: existe también un mapeo opcional de SNMP sobre TCP; por eso se acota la pregunta al mapeo preferido de RFC 3417.'},
      {url: 'https://www.rfc-editor.org/rfc/rfc6120.html', referencia: 'RFC 6120, sección 3: esta especificación vincula XMPP a TCP.'},
      {url: 'https://www.rfc-editor.org/rfc/rfc5321.html', referencia: 'RFC 5321: SMTP transmite mediante conexiones TCP.'},
      {url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-I.150-199303-S%21%21PDF-E&lang=e&type=items', referencia: 'ITU-T I.150: ATM se define como técnica orientada a conexión, con identificadores de conexión.'},
      {url: a1, referencia: 'Convocatoria GSI A1 2025, anexo I, tema 118: administración de LAN y gestión SNMP.'},
      {url: a2, referencia: 'Convocatoria GSI A2 2025, anexo IX, tema IV.9: gestión SNMP.'}
    ], null, 'Se conserva SNMP como respuesta, pero se precisa que se pregunta por su mapeo preferido sobre IPv4 según RFC 3417: UDP. No se afirma que SNMP solo pueda transportarse por UDP, pues RFC 3430 define un mapeo opcional sobre TCP. XMPP en la vinculación definida por RFC 6120 usa TCP; SMTP también usa TCP, y ATM es orientado a conexión.', 'corregida'],
    [6268, ['113'], ['IV-10'], ['ATM', 'AAL', 'SAR', 'PDH', 'SDH'], [
      {url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-I.363.1-199608-I%21%21PDF-E&lang=e&type=items', referencia: 'ITU-T I.363.1, sección 2.4: SAR es una subcapa de la capa de adaptación ATM; segmenta las unidades de datos para su transporte y las reensambla al recibirlas.'},
      {url: 'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-G.804-200406-I%21%21PDF-E&lang=s&type=items', referencia: 'ITU-T G.804: especifica el transporte de celdas ATM sobre jerarquía PDH y señala SDH como base de transporte de celdas ATM.'},
      {url: a1, referencia: 'Convocatoria GSI A1 2025, anexo I, tema 113: redes de agregación ATM.'},
      {url: a2, referencia: 'Convocatoria GSI A2 2025, anexo IX, tema IV.10: tecnologías de redes de área extensa.'}
    ], null, 'La respuesta D se mantiene, pero se reescribe el enunciado: “nivel de acceso” no identifica una capa ATM suficientemente precisa. SAR pertenece a la subcapa de adaptación AAL, mientras PDH y SDH son jerarquías de transmisión capaces de transportar celdas ATM y ATM es la técnica de transferencia.', 'corregida'],
    [6269, ['114'], ['IV-11'], ['IEEE 802.11k', 'medición de recursos radioeléctricos', 'WLAN'], [
      {url: 'https://standards.ieee.org/ieee/802.11k/3951/', referencia: 'IEEE SA, IEEE 802.11k-2008: la enmienda añade mecanismos de medición de recursos radioeléctricos (Radio Resource Measurement) para WLAN.'},
      {url: a1, referencia: 'Convocatoria GSI A1 2025, anexo I, tema 114: estándar IEEE 802.11 y características funcionales.'},
      {url: a2, referencia: 'Convocatoria GSI A2 2025, anexo IX, tema IV.11: redes inalámbricas y protocolos.'}
    ], null, 'Se corrige la opción correcta y se actualiza la explicación: 802.11k trata de medición de recursos radioeléctricos (Radio Resource Measurement), no de cifrado/autenticación ni de la generación de mayor caudal asociada a 802.11n. El texto antiguo “intercambio de información de capacidad” era impreciso.', 'corregida'],
    [6270, ['114'], ['IV-11'], ['IEEE 802.11', 'IBSS', 'modo ad hoc', 'comunicación entre pares'], [
      {url: 'https://grouper.ieee.org/groups/802/11/main.html', referencia: 'IEEE 802.11 WG, descripción de arquitectura: en configuración independiente las estaciones se comunican directamente y no se requiere infraestructura; es el modo ad hoc/IBSS.'},
      {url: a1, referencia: 'Convocatoria GSI A1 2025, anexo I, tema 114: modos de operación IEEE 802.11.'},
      {url: a2, referencia: 'Convocatoria GSI A2 2025, anexo IX, tema IV.11: modos de operación de redes inalámbricas.'}
    ], null, 'Se especifica IBSS/ad hoc: las estaciones intercambian tramas directamente, sin punto de acceso ni sistema de distribución. No se limita el modo a exactamente dos dispositivos; dos son el mínimo para comunicación entre pares.', 'corregida']
  ],
  edits: {
    6266: {texto: 'Sobre la API de sockets, señale la afirmación correcta:', opciones: ['Es exclusiva de TCP y no admite sockets de datagramas.', 'Solo puede usarse en sistemas UNIX.', 'En POSIX solo admite la familia de direcciones AF_INET.', 'Es una interfaz de programación que admite distintos dominios y tipos de socket, como AF_INET/SOCK_STREAM y AF_UNIX.'], respuesta_correcta: 3},
    6267: {texto: '¿Cuál de estas opciones identifica el protocolo cuyo mapeo de transporte preferido sobre IPv4 es UDP según RFC 3417?', opciones: ['SNMP.', 'XMPP.', 'ATM.', 'SMTP.'], respuesta_correcta: 0},
    6268: {texto: '¿Cuál de estas opciones es una subcapa funcional de la adaptación ATM (AAL), y no una técnica o jerarquía de transmisión relacionada con ATM?', opciones: ['PDH.', 'SDH.', 'ATM.', 'SAR (segmentación y reensamblado).'], respuesta_correcta: 3},
    6269: {texto: 'La enmienda IEEE 802.11k introdujo principalmente mecanismos para:', opciones: ['Añadir calidad de servicio (QoS) a las WLAN.', 'Definir autenticación y cifrado para WLAN.', 'Aumentar el caudal máximo de las WLAN hasta al menos 100 Mbit/s.', 'Medir y comunicar parámetros de recursos radioeléctricos en WLAN.'], respuesta_correcta: 3},
    6270: {texto: 'En IEEE 802.11, el modo independiente (IBSS o ad hoc) se caracteriza por:', opciones: ['La comunicación de estaciones a través de uno o varios puntos de acceso.', 'La asociación de cada cliente a un punto de acceso.', 'La comunicación directa entre estaciones, sin punto de acceso.'], respuesta_correcta: 2}
  }
});
