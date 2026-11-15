const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const cisco='https://www.cisco.com/c/en/us/td/docs/routers/ios-xe/lan-wan/lan-wan/m_lsw-span-tree-prot.html';
const x500='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.500-201610-S%21%21PDF-E&lang=e&type=items';
const x400='https://www.itu.int/rec/t-rec-x.400/en';
const rfc3411='https://www.rfc-editor.org/rfc/rfc3411.html';
const rfc3411info='https://www.rfc-editor.org/info/rfc3411/';
const rfc959='https://www.rfc-editor.org/rfc/rfc959.html';
const rfc1415='https://datatracker.ietf.org/doc/rfc1415/';
const x711='https://www.itu.int/rec/T-REC-X.711-199710-I/en';
const iso='https://www.iso.org/standard/20269.html';
const ieeeA='https://standards.ieee.org/ieee/802.11/7028/';
const ieee='https://standards.ieee.org/standard/802_11-2020.html';
const rfc1878='https://www.rfc-editor.org/rfc/rfc1878.html';
const edits={
6901:{texto:'¿Qué unidades de datos de protocolo intercambia STP entre puentes/conmutadores para elegir la topología sin bucles de una LAN?',opciones:['BPDUs (Bridge Protocol Data Units).','SPDUs (Spanning Protocol Data Units).','TPDUs (Tree Protocol Data Units).','SPDUs (Switch Protocol Data Units).'],respuesta_correcta:0},
6902:{texto:'Atendiendo a la función general de cada protocolo (directorio, mensajería, transferencia de ficheros o gestión de red), ¿qué pareja NO asocia protocolos OSI y TCP/IP de función equivalente?',opciones:['X.500 (directorio) – SNMP (gestión de red).','X.400 (mensajería) – SMTP (correo electrónico).','FTAM (transferencia y gestión de ficheros) – FTP (transferencia de ficheros).','CMIP (gestión de red OSI) – SNMP (gestión de red TCP/IP).'],respuesta_correcta:0},
6903:{texto:'¿Cuántas capas define el modelo básico de referencia OSI de ISO/IEC 7498-1?',opciones:['4.','6.','7.','5.'],respuesta_correcta:2},
6904:{texto:'Como dato de la enmienda histórica IEEE 802.11a-1999, ¿en qué banda de frecuencia se especificó su capa física de alta velocidad?',opciones:['En la banda de 5 GHz.','En la banda de 2,4 GHz, igual que 802.11b.','En la banda de 2,4 GHz, igual que 802.11g.','La enmienda 802.11a introdujo QoS; la banda no quedó definida.'],respuesta_correcta:0},
6905:{texto:'Dos interfaces IPv4 tienen las direcciones 172.16.17.30 y 172.16.28.15 y ambas usan la máscara 255.255.240.0 (/20). ¿Qué se concluye al comparar sus prefijos de red?',opciones:['Pertenecen a la misma subred: 172.16.16.0/20.','No pertenecen a la misma subred.','Depende de la dirección de la puerta de enlace.','Depende de la configuración del switch.'],respuesta_correcta:0}
};
const records=[
[6901,[118],['IV-8'],['STP','BPDU','IEEE 802.1D','LAN','prevención de bucles'],[
{url:cisco,referencia:'Cisco IOS XE, Spanning Tree Protocol: define el intercambio de Configuration BPDUs entre puentes para comunicar información y calcular la topología de spanning tree.'},
{url:'https://standards.ieee.org/ieee/802.1D/4568/',referencia:'IEEE 802.1D, MAC Bridges: estándar de puenteado asociado a STP; la guía de implementación Cisco precisa el nombre BPDU y su uso operativo.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 118: redes LAN, protocolos, dispositivos e interconexión.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.8: redes locales, protocolos y dispositivos de interconexión.'}
],edits[6901],'Corregida A. Se sustituye «paquetes» por «unidades de datos de protocolo» y se pregunta por la PDU específica. STP intercambia Bridge Protocol Data Units (BPDUs) entre bridges para anunciar información y calcular una topología sin bucles.', 'corregida'],
[6902,[111,118],['IV-7','IV-8'],['OSI','TCP/IP','X.500','X.400','FTAM','FTP','CMIP','SNMP','correspondencia funcional'],[
{url:x500,referencia:'ITU-T X.500 (10/2016), apartados de protocolos de directorio: define DAP/DSP/DISP/DOP para el intercambio de operaciones y datos de directorio.'},
{url:rfc3411,referencia:'IETF RFC 3411, §§1.2 y 2: SNMP es una arquitectura/protocolo de gestión para monitorizar y controlar elementos gestionados, no un protocolo de directorio.'},
{url:x400,referencia:'ITU-T X.400, sistema y servicio de tratamiento de mensajes: especifica el ámbito de mensajería electrónica que se compara funcionalmente con SMTP.'},
{url:rfc959,referencia:'IETF RFC 959: especificación del protocolo TCP/IP de transferencia de ficheros FTP.'},
{url:rfc1415,referencia:'IETF RFC 1415, FTP-FTAM Gateway: describe las correspondencias funcionales entre los stacks OSI/TCP-IP y el enlace FTP–FTAM.'},
{url:x711,referencia:'ITU-T X.711 / ISO/IEC 9596-1: define CMIP como protocolo OSI para intercambiar información de gestión.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 111 (OSI, protocolos) y 118 (gestión SNMP y redes locales).'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, temas IV.7 (TCP/IP y OSI) e IV.8 (redes locales e interconexión).'}
],edits[6902],'Corregida A. La redacción anterior admitía más de una asociación discutible: además de X.500–SNMP, FTAM–HTTP tampoco es una correspondencia funcional precisa. Se explicita el criterio y se cambia esa opción por CMIP–SNMP, haciendo única la pareja incorrecta. X.500 trata directorios y SNMP gestión de red; X.400/SMTP se asocian a mensajería, FTAM/FTP a transferencia de ficheros y CMIP/SNMP a gestión.', 'corregida'],
[6903,[111],['IV-7'],['modelo OSI','ISO/IEC 7498-1','siete capas','arquitectura de redes'],[
{url:iso,referencia:'ISO/IEC 7498-1, Basic Reference Model: la norma del modelo básico OSI organiza la comunicación en siete capas.'},
{url:'https://www.itu.int/rec/T-REC-X.200/en',referencia:'ITU-T X.200, equivalente internacional del modelo básico de referencia OSI de siete capas.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 111: arquitectura, capas, protocolos y direccionamiento OSI.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.7: modelo TCP/IP y modelo de referencia OSI.'}
],edits[6903],'Se conserva C (7). Se añade la identificación ISO/IEC 7498-1 para delimitar «modelo básico de referencia» y diferenciarlo de la arquitectura TCP/IP, que suele presentarse con cuatro capas.', 'vigente'],
[6904,[114],['IV-11'],['IEEE 802.11a','5 GHz','Wi-Fi','bandas radioeléctricas','enmienda histórica'],[
{url:ieeeA,referencia:'IEEE Standards Association, ficha 802.11a-1999: identifica la enmienda como High Speed Physical Layer in the 5 GHz band y declara su operación en esa banda.'},
{url:ieee,referencia:'IEEE 802.11-2020: consolidación moderna de la familia WLAN; la pregunta se ciñe explícitamente a la enmienda histórica 802.11a-1999.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 114: estándar IEEE 802.11 y características funcionales/técnicas.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.11: redes inalámbricas, protocolos y características funcionales/técnicas.'}
],edits[6904],'Se mantiene A, pero se acota a la enmienda histórica 802.11a-1999: su PHY de alta velocidad fue especificada para 5 GHz. No se presenta 802.11a como una generación actual ni se confunde QoS (802.11e) con la banda.', 'historica'],
[6905,[115,118],['IV-7','IV-8'],['IPv4','subredes','máscara /20','prefijo de red','direccionamiento IP'],[
{url:rfc1878,referencia:'IETF RFC 1878, tabla 1-1: 255.255.240.0 corresponde al prefijo /20 y el bloque del tercer octeto cubre 16–31.'},
{url:'https://www.rfc-editor.org/rfc/rfc4632.html',referencia:'IETF RFC 4632, CIDR: representa redes mediante prefijos y longitud de prefijo.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 115: redes IP, arquitectura y direccionamiento IPv4/IPv6.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, temas IV.7 (protocolos TCP/IP) e IV.8 (redes locales).'}
],edits[6905],'Corregida A. La máscara 255.255.240.0 equivale a /20; en el tercer octeto las redes avanzan en bloques de 16. Tanto 17 como 28 caen en el intervalo 16–31, así que ambas direcciones tienen la dirección de red 172.16.16.0/20. La puerta de enlace y el switch no cambian el cálculo del prefijo IPv4.', 'corregida']
];
aplicar({numero:'1316',fecha:'2026-11-15',records,edits});
