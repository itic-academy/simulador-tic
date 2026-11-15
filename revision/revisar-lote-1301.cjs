const aplicar=require('./aplicar-lote.cjs');
const edits={
  6826:{texto:'¿Qué describe mejor el Internet de las cosas (IoT)?',opciones:['Una red móvil que solo usa tecnología 5G.','Una red de televisión distribuida exclusivamente sobre IP.','Una infraestructura que interconecta objetos físicos y virtuales mediante tecnologías interoperables de información y comunicación.','Una red dedicada únicamente a interconectar operadores de telecomunicaciones.']},
  6827:{texto:'¿Qué protocolo de mensajería es un estándar OASIS, funciona habitualmente sobre TCP/IP y está diseñado para comunicaciones ligeras en escenarios M2M e IoT con recursos o ancho de banda limitados?',opciones:['DDS, estándar de middleware de datos de OMG.','MQTT, protocolo de mensajería publish/subscribe.','CoAP, protocolo web restringido de IETF.','STOMP, protocolo simple de mensajería de texto.']},
  6828:{texto:'Señale la afirmación INCORRECTA sobre Thread:',opciones:['Está optimizada para redes de baja potencia y puede ofrecer baja latencia.','Su capa radioeléctrica es IEEE 802.11ah (Wi-Fi HaLow) y opera en bandas sub-GHz.','Se basa en IEEE 802.15.4.','Usa IPv6 sobre 6LoWPAN.']},
  6829:{texto:'En el Plan de Recuperación, Transformación y Resiliencia (PRTR) de España, ¿qué componente se denomina «Política Industrial España 2030»?',opciones:['Componente 12.','El Plan Nacional de Algoritmos e Industria Verdes (PNAIV).','Componente 13, «Impulso a la pyme».','Ninguno: el PRTR no contempla la política industrial.']},
  6830:{texto:'¿Qué patrones de comunicación pueden utilizarse para intercambiar mensajes en sistemas IoT?',opciones:['Publicador/suscriptor.','Comunicación directa entre dispositivos.','Cliente/servidor.','Todos los anteriores, según el protocolo y la arquitectura elegidos.']}
};
const records=[
[6826,[117],['IV-13'],['Internet de las cosas','IoT','ITU-T Y.4000','objetos físicos y virtuales','interoperabilidad'],[
 {url:'https://www.itu.int/rec/T-REC-Y.4000',referencia:'ITU-T Y.4000/Y.2060, Overview of the Internet of things (recomendación en vigor): infraestructura global que interconecta objetos físicos y virtuales mediante TIC interoperables.'},
 {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-Y.4113-201609-I%21%21PDF-E&lang=e&type=items',referencia:'ITU-T Y.4113: reproduce la definición de IoT de Y.4000 y describe dispositivos y conectividad local IoT.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema 117: transformación digital, ciudades inteligentes e Internet de las Cosas.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema IV.13: Internet e Internet de las Cosas.'}
],edits[6826],'Se conserva la clave C y se reemplaza la definición coloquial por una formulación fiel a ITU-T Y.4000: IoT interconecta cosas físicas y virtuales mediante TIC interoperables. Se normaliza «IoT» en lugar de «IOT». A1-117/A2-IV.13.', 'vigente'],
[6827,[117],['IV-13'],['MQTT','OASIS','TCP/IP','publish/subscribe','M2M','IoT'],[
 {url:'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html',referencia:'OASIS Standard MQTT Version 5.0: protocolo de mensajería publish/subscribe; TCP/IP es un transporte apto y el estándar lo orienta también a entornos restringidos M2M/IoT.'},
 {url:'https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=mqtt',referencia:'OASIS MQTT Technical Committee: publica MQTT Version 5.0 como OASIS Standard.'},
 {url:'https://www.rfc-editor.org/rfc/rfc7252.html',referencia:'IETF RFC 7252: CoAP es un protocolo web especializado en nodos y redes restringidos, pero no es el estándar de mensajería OASIS descrito en el enunciado.'},
 {url:'https://www.omg.org/dds/',referencia:'OMG DDS: estándar de middleware publish/subscribe de OMG, no OASIS.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema 117: Internet de las Cosas.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema IV.13: Internet e IoT.'}
],edits[6827],'Se mantiene B. OASIS define MQTT como protocolo ligero de mensajería publish/subscribe para M2M e IoT; la especificación permite TCP/IP. CoAP es de IETF y DDS de OMG, por lo que la autoría del estándar distingue la respuesta.', 'vigente'],
[6828,[114,117],['IV-11','IV-13'],['Thread','IEEE 802.15.4','6LoWPAN','IPv6','Wi-Fi HaLow','IEEE 802.11ah','redes inalámbricas IoT'],[
 {url:'https://www.threadgroup.org/Portals/0/documents/resources/Thread_Technical_Overview.pdf',referencia:'Thread Group, Technical Overview: Thread está optimizada para bajo consumo, usa IEEE 802.15.4 en PHY/MAC, IPv6/6LoWPAN y admite baja latencia.'},
 {url:'https://www.threadgroup.org/Portals/0/documents/support/6LoWPANUsage_632_2.pdf',referencia:'Thread Group, 6LoWPAN Usage: describe la pila Thread con IEEE 802.15.4, IPv6 y 6LoWPAN.'},
 {url:'https://standards.ieee.org/ieee/802.11ah/4960/',referencia:'IEEE 802.11ah: define operación WLAN exenta de licencia por debajo de 1 GHz; es el estándar asociado a Wi-Fi HaLow, no la base radioeléctrica de Thread.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, temas 114 (redes inalámbricas) y 117 (IoT).'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, temas IV.11 (redes inalámbricas) y IV.13 (IoT).'}
],edits[6828],'Se mantiene B, pero se hace comprobable: la afirmación falsa asigna a Thread IEEE 802.11ah/Wi-Fi HaLow y bandas sub-GHz. Thread usa IEEE 802.15.4, IPv6/6LoWPAN y está optimizada para bajo consumo; HaLow pertenece a la familia WLAN 802.11ah.', 'corregida'],
[6829,[5,14],[],['PRTR','Plan de Recuperación','componente 12','Política Industrial España 2030','componente 13','Impulso a la pyme'],[
 {url:'https://planderecuperacion.gob.es/politicas-y-componentes/componente-12-politica-industrial-espana-2030',referencia:'Portal oficial PRTR, Componente 12: Política Industrial España 2030; incluye reformas e inversiones para industria y su transformación digital.'},
 {url:'https://planderecuperacion.gob.es/politicas-y-componentes/componente-13-impulso-a-la-pyme',referencia:'Portal oficial PRTR, Componente 13: Impulso a la pyme, distinto del componente industrial 12.'},
 {url:'https://planderecuperacion.gob.es/politicas-y-componentes',referencia:'Portal oficial: índice de políticas y componentes del PRTR; enumera separadamente C12 Política Industrial España 2030 y C13 Impulso a la pyme.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, temas 5 y 14: marco europeo y español de recuperación y el impacto de las TIC en economía/mercado de trabajo; correspondencia temática general, no mención literal al C12.'}
],edits[6829],'Se conserva A. La denominación oficial «Política Industrial España 2030» corresponde al componente 12 del PRTR; el componente 13 es «Impulso a la pyme». Se eliminan como distractores planes que no son componentes PRTR. A1-5/A1-14 por el marco de recuperación y política económica; no se fuerza un epígrafe A2 específico.', 'vigente'],
[6830,[117],['IV-13'],['IoT','publicador/suscriptor','cliente/servidor','comunicación directa','arquitectura de comunicación'],[
 {url:'https://www.itu.int/rec/T-REC-Y.4000',referencia:'ITU-T Y.4000/Y.2060: marco general de interconexión de objetos y modelo de referencia de IoT.'},
 {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-Y.4113-201609-I%21%21PDF-E&lang=e&type=items',referencia:'ITU-T Y.4113: describe comunicación directa entre dispositivos a través de redes locales IoT.'},
 {url:'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html',referencia:'OASIS MQTT 5.0: mensajería publish/subscribe.'},
 {url:'https://www.rfc-editor.org/rfc/rfc7252.html',referencia:'IETF RFC 7252: CoAP usa interacción cliente/servidor para dispositivos y redes restringidos.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema 117: Internet de las Cosas.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema IV.13: Internet e IoT.'}
],edits[6830],'Se conserva D. Las tres opciones describen patrones existentes: MQTT ejemplifica publish/subscribe; CoAP, cliente/servidor; y redes IoT admiten comunicación directa local entre dispositivos. Se aclara que la elección depende del protocolo y la arquitectura, no que cada protocolo soporte todos los patrones.', 'vigente']
];
aplicar({numero:'1301',fecha:'2026-11-15',records});
