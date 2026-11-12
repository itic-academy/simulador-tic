const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ieee11='https://standards.ieee.org/ieee/802.11/11852/';
const rfc1633='https://www.rfc-editor.org/rfc/rfc1633.html',rfc2205='https://www.rfc-editor.org/rfc/rfc2205.html',rfc2212='https://www.rfc-editor.org/rfc/rfc2212.html',rfc2208='https://www.rfc-editor.org/rfc/rfc2208.html';
const rfc791='https://www.rfc-editor.org/rfc/rfc791.html',rfc2474='https://www.rfc-editor.org/rfc/rfc2474.html',rfc3168='https://www.rfc-editor.org/rfc/rfc3168.html';
const rfc5853='https://www.rfc-editor.org/rfc/rfc5853.html',rfc7092='https://www.rfc-editor.org/rfc/rfc7092.html';
const siro='https://archive.nptel.ac.in/content/storage2/courses/105101008/585_Queuing/point2/point.html';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5716,[114],['IV-11'],['IEEE 802.11','WLAN','autenticación','asociación','distribución','demultiplexación'],[
  ref(ieee11,'IEEE 802.11-2024: estándar vigente para funciones MAC/PHY de WLAN; los servicios MAC incluyen autenticación, asociación y distribución. Demultiplexar protocolos superiores corresponde a LLC, no es uno de los servicios MAC enumerados.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 114: IEEE 802.11, acceso, asociación y autenticación de redes inalámbricas.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.11: protocolos, acceso, modos de operación y seguridad de redes inalámbricas.'),
 ],null,'Corregida, respuesta C. Entre las opciones, autenticación, distribución y asociación son servicios MAC de IEEE 802.11; demultiplexar protocolos de capa superior es una función de LLC y no uno de esos servicios WLAN. Se precisa que se pregunta por servicios del MAC 802.11. A1-114/A2-IV-11.','corregida'],
 [5717,[108,115],['IV-16'],['IntServ','Integrated Services','RSVP','Guaranteed Service','DiffServ','escalabilidad','QoS'],[
  ref(rfc1633,'RFC 1633: arquitectura Integrated Services (IntServ), con control/admisión y estado de recursos por flujo para proporcionar QoS.'),
  ref(rfc2205,'RFC 2205: RSVP señaliza solicitudes de reserva de recursos por flujo a lo largo de la ruta.'),
  ref(rfc2212,'RFC 2212: especificación del servicio IntServ Guaranteed Service, con cotas de retardo bajo las condiciones de tráfico especificadas.'),
  ref(rfc2208,'RFC 2208: analiza limitaciones de escalabilidad del estado/reservas RSVP por flujo.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 108 y 115: calidad de servicio de redes y redes IP.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.16: dimensionamiento y calidad de servicio en comunicaciones.'),
 ],null,'Corregida, respuesta A. IntServ se caracteriza por solicitar/admitir recursos y mantener estado de QoS por flujo, normalmente señalizado con RSVP; contempla Guaranteed Service y tiene limitaciones de escalabilidad. Priorizar agregados según marcas DSCP es característico de DiffServ. La priorización puede ser un mecanismo interno de implementación, por lo que se reescribe la opción para identificar inequívocamente la arquitectura DiffServ. A1-108/A1-115/A2-IV-16.','corregida'],
 [5718,[115],['II-8','IV-16'],['IPv4','IHL','ToS','DSCP','IP Precedence','DiffServ','cabecera IP'],[
  ref(rfc791,'RFC 791, §3.1: IHL es la longitud de la cabecera IPv4 en palabras de 32 bits; el octeto ToS se definió para indicar parámetros abstractos de calidad de servicio e incluye Precedence.'),
  ref(rfc2474,'RFC 2474: redefine el campo DS para IPv4/IPv6; los seis bits DSCP seleccionan el comportamiento por salto y los dos bits restantes se reservaron inicialmente.'),
  ref(rfc3168,'RFC 3168: reutiliza los dos bits de menor orden del DS field para ECN.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 115: redes IP, arquitectura y calidad de servicio.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, temas II.8 (TCP/IP/OSI) y IV.16 (calidad de servicio en comunicaciones).'),
 ],null,'Corregida, respuesta C. IHL significa Internet Header Length: expresa cuánto ocupa la cabecera IPv4, no una clase de servicio. DSCP pertenece al campo DS; ToS es la denominación histórica del octeto IPv4 y Precedence era su campo de precedencia, hoy legado. Se actualiza la pregunta para distinguir tratamientos QoS actuales e históricos del campo de longitud. A1-115/A2-II-8/A2-IV-16.','corregida'],
 [5719,[116],['IV-14'],['NGN','SBC','Session Border Controller','SIP','B2BUA','transcodificación','interconexión'],[
  ref(rfc5853,'RFC 5853: describe requisitos y funciones habituales en despliegues SBC en la frontera entre redes, incluida ocultación de topología, mediación de SIP y control del plano de medios.'),
  ref(rfc7092,'RFC 7092: ubica los SBC entre los tipos de B2BUA SIP y describe funciones de señalización y medios, como la transcodificación. Aclara que SBC es una categoría de mercado, no un tipo de equipo con funciones universales normadas.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 116: NGN/IMS, VoIP, ToIP y servicios convergentes.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.14: NGN/IMS, VoIP, ToIP y comunicaciones unificadas.'),
 ],null,'Corregida, respuesta B. Un SBC se instala habitualmente en la frontera de redes de voz/IP y puede realizar mediación e interoperabilidad SIP, políticas de seguridad, encaminamiento y manipulación/relay de medios, incluida transcodificación cuando está implementada. RFC 7092 advierte que SBC es una categoría de mercado: no todos los equipos ofrecen exactamente las mismas funciones. Se expande la sigla truncada y se evita sugerir un conjunto universal obligatorio. A1-116/A2-IV-14.','corregida'],
 [5720,[108],['IV-16'],['SIRO','Service In Random Order','disciplina de cola','orden aleatorio','teoría de colas'],[
  ref(siro,'IIT Bombay / NPTEL, Queueing Analysis: en SIRO (served in random order), se elige al azar el siguiente cliente, sin depender de su instante de llegada; cada cliente en espera tiene igual probabilidad de selección.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 108: redes de telecomunicaciones, conmutación y calidad de servicio.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema IV.16: dimensionamiento y calidad de servicio en comunicaciones.'),
 ],null,'Vigente, respuesta C. SIRO significa Service in Random Order: el siguiente elemento se escoge aleatoriamente de la cola, sin atender al orden de llegada. No es FIFO, LIFO ni prioridad por duración de servicio. El temario oficial da encaje general en QoS/dimensionamiento, pero no menciona literalmente SIRO; el cotejo docente no se usa como prueba de la definición. A1-108/A2-IV-16.','vigente'],
];
const edits={
 5716:{texto:'¿Cuál de las siguientes opciones NO es un servicio de la subcapa MAC definido por IEEE 802.11?',opciones:['Autenticación','Distribución','Demultiplexación de protocolos de capa superior','Asociación'],respuesta_correcta:2},
 5717:{texto:'¿Cuál de las siguientes afirmaciones sobre la arquitectura de Servicios Integrados (IntServ) es FALSA?',opciones:['Clasifica y prioriza agregados de tráfico mediante DSCP, sin reservas de recursos por flujo','Utiliza RSVP para señalizar reservas de recursos','Una limitación conocida es la escalabilidad de mantener estado por flujo','Puede proporcionar un servicio garantizado'],respuesta_correcta:0},
 5718:{texto:'En la cabecera IPv4, ¿qué campo NO expresa ni identifica una clase o tratamiento de calidad de servicio (QoS), actual o histórico?',opciones:['DSCP del campo DS','Octeto ToS IPv4 (denominación histórica del campo de servicio)','IHL (Internet Header Length)','Precedence IPv4 (campo histórico de precedencia)'],respuesta_correcta:2},
 5719:{texto:'En la frontera administrativa de redes NGN/SIP, ¿qué elemento suele proporcionar mediación de señalización, políticas de seguridad e interconexión del plano de medios?',opciones:['Servidor proxy SIP convencional','Session Border Controller (SBC)','Breakout Gateway Control Function (BGCF)','Cortafuegos de nueva generación'],respuesta_correcta:1},
 5720:{texto:'¿Cómo se selecciona el siguiente elemento atendido en una disciplina de cola SIRO (Service In Random Order)?',opciones:['Por orden de llegada: primero en entrar, primero en salir','Por orden inverso de llegada: último en entrar, primero en salir','Aleatoriamente entre los elementos en espera, sin depender del orden de llegada','Primero el elemento cuyo servicio previsto dura menos'],respuesta_correcta:2},
};
aplicar({numero:'1079',fecha:'2026-11-12',records,edits});
