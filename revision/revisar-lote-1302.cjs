const aplicar=require('./aplicar-lote.cjs');
const edits={
  6831:{texto:'¿Cuál de estas opciones es un lenguaje de programación y no un sistema operativo para dispositivos IoT o sistemas embebidos?',opciones:['Arm Mbed OS.','Contiki-NG.','Go (Golang).','RIOT OS.']},
  6832:{texto:'¿Cómo se denomina la plataforma de inteligencia urbana de Telefónica para integrar información y apoyar la gestión de servicios de ciudades y territorios inteligentes?',opciones:['Thinking City.','Intelligent Operations Center (IOC), de IBM.','SmartBrain, de Cellnex.','Sofia2, de Indra.']},
  6833:{texto:'Según la descripción del CTN 178 publicada por UNE en 2021, ¿quién era presidente del comité?',opciones:['La Secretaría de Estado de Digitalización e Inteligencia Artificial.','Enrique Martínez Marín, presidente de SEGITTUR.','La Secretaría de UNE.','La Federación Española de Municipios y Provincias.']},
  6834:{texto:'¿Cuál de los siguientes protocolos abiertos y estandarizados por el IETF se utiliza para mensajería instantánea y presencia?',opciones:['OSCAR, utilizado históricamente por AIM/ICQ.','Skype, servicio y protocolo propietario.','XMPP (Extensible Messaging and Presence Protocol).','MiNet, protocolo de mensajería propietario.']},
  6835:{texto:'¿Qué describe mejor el proyecto Arduino?',opciones:['Un entorno de escritorio para programar aplicaciones Python sin hardware.','Una arquitectura de nube Big Data ofrecida como parte de Amazon Web Services.','Una plataforma abierta de hardware y software para prototipar electrónica y crear proyectos embebidos, incluidos usos IoT.']}
};
const records=[
[6831,[117],['IV-13'],['IoT','sistemas operativos embebidos','Mbed OS','Contiki-NG','RIOT OS','Go','lenguaje de programación'],[
 {url:'https://os.mbed.com/mbed-os/',referencia:'Arm Mbed OS se identifica como sistema operativo para IoT y microcontroladores; Arm anunció que alcanzó el fin de vida en julio de 2026 y dejó de mantenerlo, aunque su código sigue disponible.'},
 {url:'https://os.mbed.com/blog/entry/Important-Update-on-Mbed/',referencia:'Aviso oficial de Arm, actualizado el 30-08-2024: fin de vida de Mbed OS en julio de 2026; el código permanece disponible, sin mantenimiento ni soporte de Arm.'},
 {url:'https://docs.contiki-ng.org/en/master/',referencia:'Documentación de Contiki-NG: sistema operativo para dispositivos IoT con recursos restringidos.'},
 {url:'https://doc.riot-os.org/',referencia:'Documentación de RIOT: sistema operativo de microcontrolador diseñado para dispositivos IoT y embebidos.'},
 {url:'https://go.dev/doc/',referencia:'Documentación oficial de Go: Go es un lenguaje de programación, no un sistema operativo.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema 117: transformación digital e IoT.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema IV.13: Internet e IoT.'}
],edits[6831],'Se mantiene C y se precisa que Go/Golang es lenguaje, mientras Mbed OS (aunque finalizó su ciclo de vida en julio de 2026), Contiki-NG y RIOT son sistemas operativos para IoT/embebidos. La opción pregunta por la naturaleza del software, no por su mantenimiento actual. Se corrige la gramática del enunciado.', 'corregida'],
[6832,[117],['IV-13'],['Thinking City','Telefónica','ciudades inteligentes','territorios inteligentes','plataforma urbana'],[
 {url:'https://www.telefonica.com/en/communication-room/press-room/telefonica-oviedo-city-council-promote-smart-tourism-experience-city-camino-primitivo/',referencia:'Telefónica, 14-07-2026: describe Thinking City como su plataforma de inteligencia urbana, con interoperabilidad, analítica y gestión de datos para entornos urbanos y turísticos.'},
 {url:'https://www.telefonica.com/es/sala-comunicacion/prensa/telefonica-presenta-en-greencities-su-propuesta-de-valor-ante-la-nueva-realidad-post-covid/',referencia:'Telefónica: Thinking City es su plataforma para ciudades y territorios inteligentes, basada en FIWARE y alineada con UNE 178104.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema 117: transformación digital, ciudades inteligentes e IoT.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema IV.13: Internet e IoT.'}
],edits[6832],'Se confirma A con fuente directa y vigente de Telefónica: Thinking City es la plataforma de inteligencia urbana que integra información para apoyar servicios y gestión en ciudades y territorios inteligentes. Se explicitan los proveedores de las plataformas distractoras.', 'vigente'],
[6833,[117],['IV-13'],['CTN 178','UNE','ciudades inteligentes','normalización','SEGITTUR'],[
 {url:'https://revista.une.org/32/ctn-178-ciudades-inteligentes.html',referencia:'UNE Revista, nº 32 (2021), renovación del CTN 178: señala como presidente del comité a Enrique Martínez Marín, presidente de SEGITTUR, y a Tania Marcos (UNE) como secretaria; enumera siete subcomités.'},
 {url:'https://www.une.org/normalizacion_documentos/normas_ciudades_inteligentes.pdf',referencia:'AENOR/UNE, Las normas para las ciudades inteligentes, informe de situación de octubre de 2015: describe el comité de aquella fecha como presidido por SETSI; no por SEDIA.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema 117: ciudades inteligentes e IoT.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema IV.13: Internet e IoT.'}
],edits[6833],'Se corrige A→B y se fija explícitamente la fuente temporal (UNE, 2021): Enrique Martínez Marín presidía el CTN 178 y Tania Marcos (UNE) ejercía la secretaría. El material antiguo de 2015 nombraba a SETSI; sustituirlo sin fecha por SEDIA era anacrónico y podía confundirse con presidencias posteriores. Se acota la pregunta a un dato comprobable.', 'corregida'],
[6834,[116],['II-8'],['XMPP','mensajería instantánea','presencia','IETF','protocolos abiertos','OSCAR','Skype'],[
 {url:'https://datatracker.ietf.org/doc/html/rfc6120',referencia:'IETF RFC 6120, Standards Track: XMPP Core define el protocolo base para intercambio de datos estructurados, mensajería y presencia.'},
 {url:'https://datatracker.ietf.org/doc/html/rfc6121',referencia:'IETF RFC 6121, Standards Track: especifica el uso de XMPP para mensajería instantánea y presencia.'},
 {url:'https://xmpp.org/',referencia:'XMPP Standards Foundation: describe XMPP como estándar abierto de mensajería y presencia, con especificaciones publicadas.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema 116: servicios de comunicación, mensajería y comunicaciones unificadas.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema II.8: redes y protocolos de comunicación.'}
],edits[6834],'Se mantiene C. XMPP está especificado en estándares IETF para mensajería y presencia; se desambigua «abierto» como protocolo estandarizado y públicamente especificado, frente a productos/protocolos propietarios. A1-116/A2-II.8.', 'vigente'],
[6835,[117],['IV-13'],['Arduino','hardware abierto','software abierto','electrónica','microcontroladores','IoT'],[
 {url:'https://docs.arduino.cc/learn/starting-guide/whats-arduino/',referencia:'Documentación oficial Arduino: define Arduino como plataforma de electrónica de código abierto, basada en hardware y software; describe ambos como extensibles.'},
 {url:'https://www.arduino.cc/pro/platform-overview/',referencia:'Arduino Pro: plataforma abierta de hardware, firmware, software y servicios en la nube, con conectividad y herramientas para desarrollar aplicaciones IoT.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1 GSI 2025, tema 117: transformación digital e IoT.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI 2025, tema IV.13: Internet e IoT.'}
],edits[6835],'Se mantiene C, con alcance corregido: Arduino es una plataforma abierta de hardware y software para electrónica/prototipado; puede usarse en proyectos embebidos e IoT, pero no se define exclusivamente como una nube Big Data ni como entorno Python de escritorio. A1-117/A2-IV.13.', 'corregida']
];
aplicar({numero:'1302',fecha:'2026-11-15',records});
