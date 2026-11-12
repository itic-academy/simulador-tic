const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const dhcp='https://www.rfc-editor.org/rfc/rfc2131.html';
const icmp4='https://www.rfc-editor.org/rfc/rfc792.html';
const icmp6='https://www.rfc-editor.org/rfc/rfc4443.html';
const windows='https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/';
const ipv4='https://www.rfc-editor.org/rfc/rfc791.html';
const docsis='https://account.cablelabs.com/server/alfresco/cce8943e-b49b-4c24-bc83-107acd636001';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5651,[108],['II-8'],['DHCP','BOOTP','asignación dinámica','configuración TCP/IP'],[
  ref(dhcp,'RFC 2131, § 1 y § 2: DHCP deriva de BOOTP y lo amplía con asignación automática y concesiones de direcciones/parámetros; conserva interoperabilidad con clientes BOOTP.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes y protocolos.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelo TCP/IP y protocolos.')
 ],null,'Corregida, respuesta A (DHCP). RFC 2131 lo describe como extensión de BOOTP desde la perspectiva del cliente, con asignación dinámica/concesiones y compatibilidad con clientes BOOTP. Se añade esa precisión para que «versión extendida» no implique una nueva versión numerada de BOOTP.','corregida'],
 [5652,[108],['II-8'],['ICMPv4','ICMPv6','RFC 792','RFC 4443','protocolo de control IP'],[
  ref(icmp4,'RFC 792: especifica ICMP para IPv4.'),
  ref(icmp6,'RFC 4443: especifica ICMPv6 y declara obsoleto RFC 2463; conserva la referencia a RFC 792 para ICMPv4.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: protocolos de redes.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: arquitectura TCP/IP, capas y protocolos.')
 ],null,'Corregida, respuesta A. La referencia vigente de ICMPv6 es RFC 4443, que sustituyó RFC 2463; RFC 792 especifica ICMPv4. ICMP es un protocolo de control asociado a IP, no un protocolo de transporte; la resolución IP→MAC corresponde a ARP/NDP. Los campos comunes Type, Code y Checksum ocupan cuatro octetos tanto en ICMPv4 como en ICMPv6, aunque algunos mensajes añaden campos.','corregida'],
 [5653,[108],['II-8'],['Windows','netstat','ipconfig','nbtstat','tracert','diagnóstico de red'],[
  ref('https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/netstat','Microsoft Learn, netstat: conexiones activas, puertos en escucha, tabla de encaminamiento y estadísticas de protocolos.'),
  ref('https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig?view=windows-server-2019','Microsoft Learn, ipconfig: muestra configuración TCP/IP y permite renovar/liberar configuración DHCP, entre otras operaciones.'),
  ref('https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nbtstat','Microsoft Learn, nbtstat: estadísticas y estado de conexiones NetBIOS sobre TCP/IP.'),
  ref('https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert','Microsoft Learn, tracert: identifica saltos de la ruta hacia el destino; un salto sin respuesta aparece como timeout, por lo que no siempre se conocen todas las direcciones intermedias.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes, protocolos e interconexión.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: arquitectura TCP/IP y protocolos.')
 ],null,'Corregida, respuesta D (descripción errónea). netstat, ipconfig y nbtstat se describen conforme a sus funciones documentadas. Se precisa el error de tracert: muestra los saltos que responden a las sondas; si un router no responde, puede aparecer un asterisco/timeout y no se obtiene su IP. Por ello la opción que promete «todos» los routers, incluso los que no contestan, es falsa.','corregida'],
 [5654,[108],['II-8'],['IPv4','datagrama','longitud total','RFC 791','65 535 octetos'],[
  ref(ipv4,'RFC 791 § 3.1, campo Total Length: longitud total del datagrama IPv4 en octetos, incluyendo cabecera y datos; máximo 65.535 octetos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes y protocolo IP.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelo TCP/IP, direccionamiento y protocolos.')
 ],null,'Corregida, respuesta B. Se concreta IPv4: el campo Total Length de 16 bits limita el datagrama completo (cabecera más datos) a 65.535 octetos; suele expresarse de forma aproximada como 64 KiB. No se debe confundir 64 KB decimal con el máximo exacto. IPv6 tiene reglas distintas, incluidos jumbogramas opcionales.','corregida'],
 [5655,[108,121],['IV-7'],['DOCSIS','red de cable','módem de cable','acceso ascendente','solicitud y concesión','contienda'],[
  ref(docsis,'CableLabs, DOCSIS 3.0 MAC and Upper Layer Protocols Interface Specification, § 7: el cablemódem solicita capacidad ascendente; puede usar oportunidades de contienda para peticiones y el CMTS otorga/grant oportunidades de transmisión mediante MAP.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 108 (redes/acceso) y 121 (telecomunicaciones por cable/CATV).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.7: medios guiados y transmisión sobre cable.')
 ],null,'Corregida, respuesta C. En acceso ascendente DOCSIS el cablemódem solicita ancho de banda y el CMTS programa/concede oportunidades de transmisión; las solicitudes pueden enviarse en oportunidades de contienda. Se formula como mecanismo request/grant y contienda, en vez de mezclarlo con topologías físicas de la red.','corregida']
];
const edits={
 5651:{texto:'¿Qué protocolo amplía BOOTP para permitir, entre otras funciones, asignar automáticamente direcciones IP mediante concesiones (leases)?',opciones:['DHCP.','RARP.','RTSP.','DNS.'],respuesta_correcta:0},
 5652:{texto:'¿Qué afirmación actualizada sobre ICMP para IPv4 e IPv6 es cierta?',opciones:['ICMPv4 se especifica en RFC 792 e ICMPv6 en RFC 4443, que sustituyó RFC 2463.','ICMP es un protocolo de transporte porque sus mensajes se encapsulan en IP.','ICMP resuelve la dirección MAC correspondiente a una dirección IP.','La cabecera común de ICMPv4 mide 4 octetos y la de ICMPv6 8 octetos.'],respuesta_correcta:0},
 5653:{texto:'En Windows, identifique la descripción errónea de los comandos de diagnóstico de red:',opciones:['NETSTAT muestra conexiones TCP activas, puertos en escucha y estadísticas de protocolos.','IPCONFIG muestra la configuración TCP/IP y permite renovar o liberar parámetros DHCP.','NBTSTAT muestra estadísticas y estado de conexiones NetBIOS sobre TCP/IP.','TRACERT garantiza mostrar la dirección IP de todos los routers intermedios, incluso si alguno no responde a las sondas.'],respuesta_correcta:3},
 5654:{texto:'En IPv4, ¿cuál es la longitud total máxima de un datagrama, incluida su cabecera?',opciones:['131.072 octetos.','65.535 octetos.','32.768 octetos.','No existe un campo que limite su longitud.'],respuesta_correcta:1},
 5655:{texto:'En el acceso ascendente de una red DOCSIS, ¿qué mecanismos permiten solicitar dinámicamente ancho de banda y programar la transmisión de los cablemódems?',opciones:['Encaminamiento IP o transporte sobre ATM.','Asignación según nodo primario o nodo secundario.','Solicitudes de ancho de banda y concesiones de transmisión, con oportunidades de petición por contienda.','Topología física en estrella o árbol.'],respuesta_correcta:2}
};
aplicar({numero:'1066',fecha:'2026-11-12',records,edits});
