const apply=require('./aplicar-lote.cjs');
const ieee='https://standards.ieee.org/ieee/802.1D/3387/';
const ieee8021w='https://www.ieee802.org/1/pages/802.1w.html';
const itu='https://www.itu.int/epublications/en/publication/itu-t-g-suppl-47-2025-03-general-aspects-of-optical-fibres-and-cables';
const g652='https://www.itu.int/rec/T-REC-G.652-202408-I/en';
const pinterest='https://help.pinterest.com/en/guide/all-about-pinterest';
const rfc4291='https://www.rfc-editor.org/rfc/rfc4291.html';
const rfc5952='https://www.rfc-editor.org/rfc/rfc5952.html';
const rfc3416='https://www.rfc-editor.org/rfc/rfc3416.html';
const rfc1905='https://www.rfc-editor.org/rfc/rfc1905.html';
const records=[
 [3041,[118],['IV-8'],['STP','IEEE 802.1D','listening','learning','forwarding','puentes','LAN'],[
  {url:ieee,referencia:'IEEE Standards Association, IEEE 802.1D-2004: norma de puentes MAC; la ficha documenta la familia y su sustitución por 802.1Q. Se cita como contexto de la familia histórica 802.1D.'},
  {url:ieee8021w,referencia:'IEEE 802.1w, Rapid Reconfiguration of Spanning Tree: suplemento que define RSTP e indica que sus cambios fueron incorporados en 802.1D-2004; RSTP simplifica los estados clásicos.'},
  {url:'https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html',referencia:'Documentación técnica oficial de Cisco, «Understand Rapid Spanning Tree Protocol»: enumera los cinco estados de puerto del STP IEEE 802.1D clásico y explica su correspondencia con los tres estados RSTP.'}
 ],'','Se delimita explícitamente al STP clásico IEEE 802.1D: sus estados conocidos son disabled, blocking, listening, learning y forwarding. «Broadcasting» no es un estado de puerto. RSTP (802.1w, incorporado en estándares posteriores) combina disabled/blocking/listening en discarding; por ello el enunciado especifica el protocolo clásico para evitar mezclar máquinas de estados. Cotejo curricular: ITIC Academy, Bloque 42 «Redes» (2026.1), LAN, puentes y protocolos de nivel de enlace.','corregida'],
 [3042,[110],['IV-7'],['fibra óptica','atenuación','absorción','dispersión de Rayleigh','pérdidas por curvatura'],[
  {url:itu,referencia:'ITU-T G Supplement 47 (03/2025), §8.1 y apéndice I.1: vincula la atenuación espectral de fibras con dispersión Rayleigh, absorción UV/IR/OH y factores de fabricación, cableado e instalación.'},
  {url:g652,referencia:'ITU-T G.652 (08/2024), en vigor, §§6.6 y 7.1: especifica pérdidas por macrocurvatura y coeficientes de atenuación de cable de fibra monomodo.'}
 ],'','Se pregunta por mecanismos ordinarios de atenuación de una fibra: absorción del material, dispersión Rayleigh y pérdidas por curvatura/radiación son contribuciones reconocidas. «Difracción de Maxwell» no es el nombre de un mecanismo normalizado de pérdida en este contexto. Se evita decir que toda radiación es imposible: puede aparecer como fuga por curvaturas o defectos, pero no como «difracción de Maxwell». Cotejo curricular: ITIC Academy, Bloque 42 «Redes» (2026.1), medios de transmisión guiados, fibra óptica y parámetros.','corregida'],
 [3043,[133],['II-16'],['Pinterest','redes sociales','descubrimiento visual','Pins','tableros'],[
  {url:pinterest,referencia:'Pinterest Help, «All about Pinterest»: define Pinterest como motor de descubrimiento visual; describe Pins y su organización en tableros.'},
  {url:'https://newsroom.pinterest.com/company/',referencia:'Pinterest Newsroom, presentación corporativa vigente: describe la plataforma como búsqueda y descubrimiento visual y compras.'}
 ],'','Se conserva la respuesta de los tableros, pero se actualiza y precisa la definición: Pinterest es una plataforma/motor de descubrimiento visual donde se buscan y guardan Pins en tableros. Se eliminan cifras históricas y descripciones de TikTok, Instagram y otras redes. Cotejo curricular: ITIC Academy, Bloque 50 «Videoconferencia, SSO y trabajo colaborativo» (2026.1), herramientas colaborativas y redes sociales, apartado A1-133/A2-T16.','corregida'],
 [3044,[115],['II-8'],['IPv6','direcciones IP','RFC 4291','compresión de ceros','doble dos puntos'],[
  {url:rfc4291,referencia:'IETF RFC 4291, §2.2: la representación IPv6 permite comprimir una o más secuencias de grupos cero mediante «::», pero esa secuencia solo puede aparecer una vez en una dirección.'},
  {url:rfc5952,referencia:'IETF RFC 5952, §2.2: confirma la regla de que «::» aparece como máximo una vez en una dirección IPv6 textual.'}
 ],'','La cadena 8000::56FA::FE12 es inválida porque usa dos veces «::», lo que hace indeterminable qué grupos de ceros se omiten. Las otras tres representaciones son sintácticamente válidas; la última es un prefijo IPv6 con longitud /64, no una dirección de interfaz aislada, y se explicita esa distinción. El prefijo 3FFE es histórico, pero su sintaxis sigue siendo válida. Cotejo curricular: ITIC Academy, Bloque 43 «Protocolos» (2026.1), direccionamiento IPv6; Bloque 42 «Redes» (2026.1), arquitectura IP.','corregida'],
 [3045,[118],['IV-9'],['SNMP','traps','notificaciones asíncronas','agent','manager','SNMPv2'],[
  {url:rfc3416,referencia:'IETF RFC 3416, §4.2.6: SNMPv2-Trap-PDU notifica a una entidad SNMP remota de un evento/condición y no tiene confirmación asociada.'},
  {url:rfc1905,referencia:'IETF RFC 1905, §2.1: un SNMPv2 entity en rol agent envía trap notifications; la entidad en rol manager atiende traps o informs recibidos.'}
 ],'','Se mantiene como correcta la opción sobre traps: una trap es una notificación no confirmada (asíncrona) enviada por una entidad en rol agent a un receptor/manager. Se distingue de InformRequest, que sí espera respuesta. Se elimina la idea obsoleta de que SNMPv2 sea la versión más reciente; el enunciado se limita al comportamiento del PDU trap. Cotejo curricular: ITIC Academy, Bloque 42 «Redes» (2026.1), gestión SNMP de redes LAN, monitorización y control.','corregida']
];
apply({numero:'545',fecha:'2026-10-29',records,edits:{
 3041:{texto:'En el protocolo STP clásico IEEE 802.1D, ¿cuál de los siguientes NO es un estado de puerto?',opciones:['Listening.','Learning.','Forwarding.','Broadcasting.'],respuesta_correcta:3},
 3042:{texto:'¿Cuál NO es un mecanismo habitual de pérdida o atenuación en una fibra óptica?',opciones:['Absorción del material.','Dispersión de Rayleigh.','Pérdida por macrocurvatura y radiación de luz fuera del núcleo.','«Difracción de Maxwell» como categoría normalizada de atenuación de fibra.'],respuesta_correcta:3},
 3043:{texto:'¿Cuál describe correctamente Pinterest según la propia plataforma?',opciones:['Una red social española de vídeos creada en 2006.','Un servicio de vídeos cortos propiedad de ByteDance.','Una plataforma de descubrimiento visual en la que se exploran y guardan Pins en tableros.','Una aplicación de edición fotográfica cuyos efectos son su función principal.'],respuesta_correcta:2},
 3044:{texto:'Según la sintaxis de direcciones IPv6, ¿cuál de estas cadenas es inválida porque usa más de una vez la compresión «::»?',opciones:['FFED::BA98:3210:4562','3FFE:FFFF::8:800:20C4:0','8000::56FA::FE12','3FFE:FFFF:0:CD30::/64'],respuesta_correcta:2},
 3045:{texto:'En SNMP, ¿qué describe correctamente una Trap-PDU?',opciones:['Es una consulta síncrona que el manager envía a un agente y que siempre requiere respuesta.','Es un mensaje de configuración que solo existe en SNMPv2 y sustituye a SNMPv3.','Es una notificación de evento sin confirmación asociada, generada por una entidad en rol agent para un receptor/manager.','Es un protocolo de encaminamiento de capa de red.'],respuesta_correcta:2}
}});
