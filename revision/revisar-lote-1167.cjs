require('./aplicar-lote.cjs')({
 numero:'1167',fecha:'2026-11-13',
 records:[
  [6156,[65],['III-12'],['REST','HTTP','POST','idempotencia'],[
   {url:'https://www.rfc-editor.org/rfc/rfc9110.html',referencia:'RFC 9110 §9.2.2: PUT, DELETE y métodos seguros son idempotentes; POST no figura como método necesariamente idempotente y su efecto depende de la semántica del recurso.'},
   {url:'https://datatracker.ietf.org/doc/html/rfc9110/',referencia:'RFC 9110, registro del IETF: el servidor puede definir efectos de POST específicos del recurso y el cliente no debe tratarlo automáticamente como idempotente.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura de desarrollo web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: aplicaciones web, protocolos e interoperabilidad.'}
  ],null,'La opción C, POST, es la respuesta: la idempotencia no está garantizada por el método. RFC 9110 califica PUT, DELETE y los métodos seguros (como GET) como idempotentes; POST procesa la representación según la semántica particular del recurso y puede crear efectos adicionales en cada solicitud. Se evita afirmar que todo POST sea siempre no idempotente: una aplicación puede diseñarlo idempotente, pero no es una propiedad garantizada por la convención.','vigente'],
  [6157,[58],['II-6','III-12'],['WSRP','Web Services for Remote Portlets','OASIS','portlets remotos','portal'],[
   {url:'https://docs.oasis-open.org/wsrp/v2/wsrp-2.0-spec-os-01.html',referencia:'OASIS Web Services for Remote Portlets Specification v2.0: define Producer y Consumer, interfaces y portlets remotos para integrar y presentar contenido interactivo en aplicaciones/portales.'},
   {url:'https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=wsrp',referencia:'Comité oficial OASIS WSRP: identifica WSRP 2.0 como especificación aprobada como estándar OASIS en abril de 2008.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: arquitecturas SOA y procesamiento cooperativo.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.6 y III.12: arquitectura de servicios web, aplicaciones y protocolos.'}
  ],null,'La expansión es Web Services for Remote Portlets. El estándar permite que un portal consumidor integre portlets ofrecidos por un productor remoto y agregue su marcado para presentarlo al usuario. Se sustituye la definición confusa heredada por el propósito recogido en OASIS; no se equipara WSRP con el nombre genérico “servicio web”.','corregida'],
  [6158,[58,80],['II-6'],['middleware','X.500','RPC','ORB','servicio de directorio'],[
   {url:'https://www.itu.int/rec/T-REC-X.500-201910-I',referencia:'Recomendación ITU-T X.500 (10/2019): el título y objeto de la recomendación son el Directorio, sus conceptos, modelos y servicios; no es una plataforma middleware de invocación/comunicación.'},
   {url:'https://www.itu.int/ITU-T/recommendations/rec.aspx?id=14031',referencia:'Registro ITU-T: X.500/ISO/IEC 9594-1 introduce el Directory y la Directory Information Base (DIB), y resume sus servicios.'},
   {url:'https://www.omg.org/spec/CORBA/3.4',referencia:'OMG CORBA 3.4: especificación de arquitectura de objetos distribuidos y Object Request Broker (ORB).'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, temas 58 y 80: arquitectura distribuida/middleware y directorios X.500.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: sistemas distribuidos, interoperabilidad y arquitectura cliente-servidor.'}
  ],null,'Se corrige el error tipográfico «X-500» a X.500 y se acota el criterio: X.500 es la serie de recomendaciones de directorio ITU-T/ISO, mientras RPC y ORB son mecanismos/arquitecturas de middleware distribuido; la opción descriptiva se sustituye por middleware orientado a mensajes. La respuesta continúa siendo B.','corregida'],
  [6159,[58,65],['II-6','III-12'],['servicios web','SOAP','WSDL','WS-I','UDDI'],[
   {url:'https://www.w3.org/TR/soap12/',referencia:'W3C SOAP 1.2 Part 1: define un marco XML de mensajería para intercambiar mensajes entre nodos SOAP.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0: describe interfaces, operaciones y mensajes de servicios; permite bindings a formatos/protocolos y no es una especificación basada exclusivamente en HTTP.'},
   {url:'https://ws-i.org/',referencia:'WS-I se presenta como organización/misión de interoperabilidad y publica perfiles; no es en sí un protocolo de intercambio.'},
   {url:'https://www.oasis-open.org/standards/',referencia:'Archivo OASIS: UDDI es un estándar de registro para descripción y descubrimiento de servicios web, no cifrado de información.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, temas 58 y 65: SOA y arquitectura web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.6 y III.12: arquitectura de servicios web, protocolos e interoperabilidad.'}
  ],null,'La respuesta B es correcta: SOAP proporciona un marco de mensajería para intercambio de información en sistemas distribuidos. Se reescriben las opciones para distinguirlo de WSDL (descripción de interfaces y bindings), WS-I (organización y perfiles de interoperabilidad) y UDDI (registro/descubrimiento de servicios). La clave heredada se conserva.','corregida'],
  [6160,[58],['II-6'],['paso de mensajes','send-receive','rendezvous','comunicación síncrona','MPI'],[
   {url:'https://www.mpi-forum.org/docs/mpi-4.1/mpi41-report/node74.htm',referencia:'MPI 4.1 §4.7.3: la finalización de un envío en modo síncrono indica que se inició una recepción coincidente.'},
   {url:'https://www.mpi-forum.org/docs/mpi-4.1/mpi41-report/node73.htm',referencia:'MPI 4.1 §4.7.2: define las operaciones de envío síncrono y sus semánticas de inicio/completado.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: procesamiento cooperativo y arquitectura distribuida.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: sistemas distribuidos, comunicación e interoperabilidad.'}
  ],null,'Se acota el reactivo a un modelo de paso de mensajes por rendezvous: si el envío bloqueante no finaliza hasta que se inicia la recepción coincidente, la comunicación es síncrona (A). Sin especificar el modo, send/receive no implica por sí solo sincronía: en bibliotecas como MPI existen modos estándar, síncrono, buffered y ready, además de operaciones no bloqueantes. La reformulación evita generalizar la semántica de una primitiva a todos los sistemas.','corregida']
 ],
 edits:{
 6156:{texto:'Según la semántica de los métodos HTTP utilizada por una API REST, ¿qué método no garantiza por sí mismo que repetir una petición tenga el mismo efecto que ejecutarla una sola vez?',opciones:['DELETE','PUT','POST','GET']},
 6157:{texto:'¿Qué especificación OASIS permite que un portal consumidor integre y presente portlets interactivos ofrecidos por un productor remoto?',opciones:['Web Services for Remote Process (WSRP)','Web Services for Remote Portlets (WSRP)','Web Services for Resource Planning (WSRP)','Web Services for Redirect Processing (WSRP)']},
 6158:{texto:'¿Cuál de las siguientes es una recomendación para servicios de directorio y no una tecnología de middleware distribuido para invocar o comunicar componentes?',opciones:['RPC (Remote Procedure Call)','ITU-T X.500','ORB (Object Request Broker)','Middleware orientado a mensajes'],respuesta_correcta:1},
 6159:{texto:'¿Cuál afirmación describe correctamente una especificación o estándar de servicios web?',opciones:['WSDL solo puede describir servicios cuyo protocolo de comunicación sea HTTP.','SOAP define un marco XML de mensajería para intercambiar mensajes entre nodos de servicios web.','WS-I es un protocolo que transporta mensajes entre aplicaciones web.','UDDI cifra la información intercambiada entre servicios web.']},
 6160:{texto:'En un modelo de paso de mensajes por rendezvous, si el envío bloqueante solo termina cuando se inicia una recepción coincidente, ¿cómo se clasifica el intercambio?',opciones:['Síncrono','Asíncrono','Llamada remota a un procedimiento del servidor','Instanciación de un objeto del servidor']}
 }
});
