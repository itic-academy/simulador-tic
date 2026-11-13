const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const rfc8200='https://www.rfc-editor.org/rfc/rfc8200.html',rfc4291='https://www.rfc-editor.org/rfc/rfc4291.html',rfc4862='https://www.rfc-editor.org/rfc/rfc4862.html';
const ieee11i='https://standards.ieee.org/ieee/802.11/11852/';
const x200='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I%21%21PDF-E&lang=e&type=items';
const x212='https://www.itu.int/rec/T-REC-X.212/en';
const rtp='https://www.rfc-editor.org/rfc/rfc3550.html',g114='https://www.itu.int/rec/T-REC-G.114/en';
const rfc1213='https://www.rfc-editor.org/rfc/rfc1213.html',rfc1156='https://www.rfc-editor.org/rfc/rfc1156.html';
apply({numero:'1215',fecha:'2026-11-13',records:[
 [6396,['115'],['II-8'],['IPv6','cabecera básica','cabeceras de extensión','128 bits','autoconfiguración'],[
  src(rfc8200,'RFC 8200, §3 y figura 4: la cabecera IPv6 básica tiene longitud fija de 40 octetos; la información opcional se lleva en cabeceras de extensión separadas, §4.'),
  src(rfc4291,'RFC 4291, §2: tamaño de dirección IPv6 de 128 bits.'),src(rfc4862,'RFC 4862, §§1 y 5: procedimientos de autoconfiguración sin estado; su uso depende de las condiciones y configuración de red.'),
  src('https://www.rfc-editor.org/rfc/rfc4301.html','RFC 4301, arquitectura de seguridad IP: IPsec se especifica como arquitectura/protocolos separados; no significa que todo paquete IPv6 vaya cifrado o que toda red lo use.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 115: redes IP y funcionalidades específicas de IPv6.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II-8: modelo TCP/IP y OSI, direccionamiento y encaminamiento.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo curricular de IPv6/encaminamiento; se contrasta el contenido técnico con RFC del IETF.')
 ],null,'Se conserva la respuesta A y se precisa el enunciado: el encabezado IPv6 básico tiene longitud fija de 40 octetos; los encabezados de extensión, cuando se incluyen, van aparte. Las direcciones tienen 128 bits. IPv6 permite autoconfiguración bajo las condiciones del protocolo, no que todos los hosts siempre se autoconfiguren; IPsec existe para IP pero no implica cifrado automático ni uso obligatorio en cada comunicación. La opción A reescrita elimina la ambigüedad de llamar “intrínseca” a la seguridad IPsec.','corregida'],
 [6397,['114','125'],['IV-11','IV-12'],['IEEE 802.11i','seguridad WLAN','TKIP','CCMP','enmienda histórica'],[
  src(ieee11i,'IEEE SA, historial/enmiendas de 802.11: 802.11i-2004, Amendment 6, definió mecanismos de seguridad WLAN, incluidos TKIP, CCMP, asociaciones de seguridad y los handshakes de cuatro vías y de clave de grupo.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 114: IEEE 802.11, autenticación y seguridad inalámbrica; tema 125: seguridad en redes.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV-11: redes inalámbricas y seguridad; tema IV-12: seguridad en redes.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo curricular de WLAN y seguridad; la identificación histórica se valida en IEEE SA.')
 ],null,'La respuesta D es correcta en sentido histórico. Se acota la pregunta a la enmienda de 2004 y a los mecanismos que introdujo; 802.11i se integró después en revisiones consolidadas del estándar 802.11, por lo que no se presenta como una norma independiente actual que haya que implementar hoy.','corregida'],
 [6398,['111'],['II-8'],['OSI','nivel de enlace','servicio sin conexión','voz en tiempo real','retardo'],[
  src(x200,'ITU-T X.200/ISO/IEC 7498-1, §7.6: la capa de enlace contempla modalidades con conexión y sin conexión; las funciones de recuperación/flujo enumeradas para el servicio con conexión no se aplican de igual forma al modo sin conexión.'),
  src(x212,'ITU-T X.212 (11/95), definición del servicio de enlace: distingue transmisión en modo con conexión y sin conexión; la calidad de servicio incluye parámetros como retardo y fiabilidad.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 111: capas, interfaces y servicios del modelo OSI.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema II-8: modelo OSI, capas, interfaces y protocolos.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo curricular del modelo OSI; la definición de servicios se comprueba en ITU-T X.200/X.212.')
 ],null,'La selección B se mantiene, pero el enunciado ahora explicita el criterio que faltaba: tráfico de voz interactiva en tiempo real, donde se prioriza evitar la espera de retransmisiones del enlace. El servicio sin conexión y sin acuse evita ese mecanismo/establecimiento en el servicio de enlace. No se afirma que sea universalmente el único diseño posible: X.200 contempla varios modos y QoS según aplicación.','corregida'],
 [6399,['116'],['IV-14'],['VoIP','calidad de voz','retardo','jitter','precio del servicio'],[
  src(g114,'ITU-T G.114, vigente: estudia el efecto del retardo unidireccional en conversación y ofrece orientación específica para VoIP; la calidad percibida depende de condiciones y no queda garantizada por usar IP.'),
  src(rtp,'RFC 3550, §§6.4.1 y 6.4.2: RTCP informa pérdida y estima jitter de llegada de paquetes RTP; son métricas relevantes para el transporte de medios en tiempo real.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 116: NGN/IMS, VoIP y comunicaciones unificadas.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV-14: NGN/IMS, VoIP y comunicaciones unificadas.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo curricular de servicios convergentes; calidad y retardo se contrastan con ITU-T/RFC.')
 ],null,'Se conserva la opción D (“las dos afirmaciones son falsas”) al formularlas como garantías universales. VoIP puede alcanzar una calidad comparable si la implementación y la red cumplen objetivos de calidad, pero no la garantiza por sí sola; los precios de llamadas dependen del proveedor, plan, acceso y destino, no de una regla técnica de IP. G.114 y RTCP/RTP fundamentan que retardo, variación y pérdida importan.','corregida'],
 [6400,['118'],['IV-9'],['MIB-II','RFC 1213','MIB-I','SNMP'],[
  src(rfc1213,'RFC 1213, título e introducción: define MIB-II y declara que este documento sustituye RFC 1156, que definía MIB-I.'),
  src(rfc1156,'RFC 1156: especificación anterior MIB-I; la referencia histórica permite distinguir MIB-I de su sucesora.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 118: administración de redes LAN y gestión SNMP.'),src(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV-9: administración de redes y gestión SNMP.'),
  src(academy,'ITIC Academy, Bloque 42 Redes, edición 2026: cotejo curricular de gestión de red; la definición se contrasta con RFC 1213.')
 ],null,'Se sustituye la formulación imprecisa por una pregunta documental: MIB-II es la MIB que define RFC 1213 y que sustituye la MIB-I de RFC 1156. Así, RFC 1213 es la respuesta única; “MIB-II” nombra la especificación, no el número del documento.','corregida']
],edits:{
 6396:{texto:'¿Cuál de estas afirmaciones sobre la cabecera IPv6 básica es correcta?',opciones:['Tiene longitud fija de 40 octetos, sin contar las cabeceras de extensión.','Las direcciones IPv6 tienen 64 bits.','El paquete IPv6 no contiene direcciones de origen y destino.','Todo paquete IPv6 debe incluir una cabecera de extensión.'],respuesta_correcta:0},
 6397:{texto:'¿Qué enmienda de IEEE 802.11 (2004) definió mecanismos de seguridad WLAN como TKIP/CCMP y el handshake de cuatro vías?',opciones:['IEEE 802.11g-2003.','IEEE 802.11ax-2021.','IEEE 802.11e-2005.','IEEE 802.11i-2004.'],respuesta_correcta:3},
 6398:{texto:'Para transportar voz interactiva en tiempo real y evitar esperas de retransmisión en el nivel de enlace, ¿qué tipo de servicio es el más adecuado?',opciones:['Con acuse de recibo y orientado a conexión.','Sin acuse de recibo y sin conexión.','Con acuse de recibo y sin conexión.','Ninguna: el nivel de enlace no ofrece servicios sin conexión.'],respuesta_correcta:1},
 6399:{texto:'Sobre voz sobre IP (VoIP), ¿qué afirmación puede garantizarse en todos los servicios y redes?',opciones:['Siempre ofrece la misma calidad que la telefonía convencional.','Las llamadas internacionales siempre cuestan lo mismo que una llamada local.','Las dos afirmaciones anteriores son siempre ciertas.','Ninguna de las afirmaciones anteriores es una garantía universal.'],respuesta_correcta:3},
 6400:{texto:'¿Qué documento define MIB-II y sustituye la especificación MIB-I de RFC 1156?',opciones:['RFC 1156.','RFC 1212.','RFC 1213.','RFC 1902.'],respuesta_correcta:2}
}});
