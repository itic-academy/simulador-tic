const apply=require('./aplicar-lote.cjs');
const ieee80211='https://standards.ieee.org/ieee/802.11/10548/';
const rfc793='https://www.rfc-editor.org/rfc/rfc793.html';
const rfc9293='https://www.rfc-editor.org/rfc/rfc9293.html';
const rfc3411='https://www.rfc-editor.org/rfc/rfc3411.html';
const rfc2328='https://www.rfc-editor.org/rfc/rfc2328.html';
const rfc5709='https://www.rfc-editor.org/rfc/rfc5709.html';
const rfc8200='https://www.rfc-editor.org/rfc/rfc8200.html';
const records=[
 [2986,[114],['IV-11'],['IEEE 802.11','OSI','capa física','capa de enlace','MAC','PHY'],[
  {url:ieee80211,referencia:'IEEE Standards Association, IEEE 802.11-2024 (estándar activo): especifica para las WLAN las funciones de control de acceso al medio (MAC) y la capa física (PHY). En el modelo OSI se corresponden con enlace de datos y capa física.'}
 ],'','Se corrige el error tipográfico “cada” y se expresa con precisión la relación: la familia IEEE 802.11 especifica funciones MAC de enlace de datos y PHY física, correspondientes a las capas 2 y 1 del modelo OSI, respectivamente. No se afirma que IEEE defina las capas OSI en sí.','corregida'],
 [2987,[115],['II-8'],['TCP','RFC 793','RFC 9293','IETF','capa de transporte','obsolescencia'],[
  {url:rfc793,referencia:'IETF RFC 793 (1981): especificación histórica original del Transmission Control Protocol, publicada como estándar de Internet.'},
  {url:rfc9293,referencia:'IETF RFC 9293 (2022), Internet Standard STD 7: especificación normativa actual de TCP; declara que sustituye y obsoleta RFC 793 e incorpora sus cambios y clarificaciones posteriores.'}
 ],'','Se limita la pregunta al documento que publicó originalmente la especificación de TCP: RFC 793. Se añade la precisión temporal necesaria: hoy la especificación base vigente es RFC 9293, que reemplaza y declara obsoleta RFC 793. Así no se presenta la respuesta histórica como cita normativa actual.','corregida'],
 [2988,[118],['IV-9'],['SNMP','gestión de redes','monitorización','administración de dispositivos','TCP/IP'],[
  {url:rfc3411,referencia:'IETF RFC 3411, arquitectura del marco SNMP: identifica SNMP como protocolo de gestión que transporta información de gestión entre entidades y permite monitorizar y controlar dispositivos gestionados.'}
 ],'','Se concreta que se pregunta por el protocolo de gestión de red en la arquitectura TCP/IP. SNMP permite intercambiar información de gestión entre agentes/entidades administradas y sistemas gestores para monitorizar y controlar equipos. SMTP es correo, ICMP aporta funciones de control IP y “RCP” no es el protocolo de gestión planteado.','corregida'],
 [2989,[108,115],['IV-10'],['OSPFv2','encaminamiento interior','estado de enlace','SPF','coste igual','autenticación'],[
  {url:rfc2328,referencia:'IETF RFC 2328, especificación de OSPFv2: describe OSPF como protocolo IGP de estado de enlace, define rutas de coste igual múltiples (§16.8) y mecanismos de autenticación en los intercambios.'},
  {url:rfc5709,referencia:'IETF RFC 5709: extensión vigente de autenticación criptográfica HMAC-SHA para OSPFv2; complementa los mecanismos descritos por RFC 2328.'}
 ],'','Se sustituye “balanceo interno”, expresión imprecisa, por encaminamiento de coste igual a varios siguientes saltos (ECMP). OSPFv2 es un IGP de estado de enlace; RFC 2328 define rutas de coste igual y autenticación, y RFC 5709 añade autenticación criptográfica HMAC-SHA. No se afirma que el protocolo proporcione confidencialidad.','corregida'],
 [2990,[115],['II-8'],['IPv6','RFC 2460','RFC 8200','cabeceras de extensión','Fragment','Next Header','Hop Limit'],[
  {url:rfc8200,referencia:'IETF RFC 8200, especificación IPv6 vigente STD 86: declara obsoleta RFC 2460 y enumera las cabeceras de extensión; la cabecera Fragment es una de ellas, mientras Next Header es un campo de la cabecera IPv6 base.'}
 ],'','Se actualiza la referencia normativa de RFC 2460, obsoleta, a RFC 8200. La cabecera Fragment es una cabecera de extensión; Next Header es un campo que identifica la siguiente cabecera, mientras Hop Limit y Payload Length son campos de la cabecera IPv6 base. Se explicita la distinción para evitar confundir un campo con una cabecera.','corregida']
];
apply({numero:'534',fecha:'2026-10-29',records,edits:{
 2986:{texto:'La familia IEEE 802.11 especifica las subcapas MAC y PHY, que en el modelo OSI se corresponden, respectivamente, con las capas:',opciones:['De transporte y de sesión.','De red y de transporte.','De enlace de datos y física.','De aplicación y de presentación.'],respuesta_correcta:2},
 2987:{texto:'¿Qué RFC publicó originalmente la especificación de TCP? Téngase en cuenta que la especificación normativa vigente es RFC 9293.',opciones:['RFC 793.','RFC 739.','RFC 791.','RFC 719.'],respuesta_correcta:0},
 2988:{texto:'En la arquitectura de gestión de redes TCP/IP, ¿qué protocolo se utiliza para monitorizar y administrar dispositivos de red?',opciones:['RCP.','SNMP.','SMTP.','ICMP.'],respuesta_correcta:1},
 2989:{texto:'¿Cuál de estas descripciones caracteriza correctamente a OSPFv2?',opciones:['IGP de vector distancia que calcula rutas de coste igual y admite autenticación.','Protocolo de encaminamiento externo de estado de enlace que admite autenticación.','IGP de estado de enlace que no admite rutas de coste igual ni autenticación.','IGP de estado de enlace que admite rutas de coste igual y mecanismos de autenticación.'],respuesta_correcta:3},
 2990:{texto:'Según la especificación IPv6 vigente, RFC 8200, ¿cuál de estas opciones es una cabecera de extensión?',opciones:['El campo Next Header de la cabecera IPv6.','La cabecera Fragment.','El campo Hop Limit de la cabecera IPv6.','El campo Payload Length de la cabecera IPv6.'],respuesta_correcta:1}
}});
