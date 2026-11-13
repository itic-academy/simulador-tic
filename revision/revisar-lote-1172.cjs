require('./aplicar-lote.cjs')({
 numero:'1172',fecha:'2026-11-13',
 records:[
  [6181,[65],['III-12'],['servicios web','interoperabilidad','heterogeneidad'],[
   {url:'https://www.w3.org/TR/ws-arch/',referencia:'W3C Web Services Architecture: establece que los servicios web ofrecen un medio estándar de interoperar entre aplicaciones de distintas plataformas y marcos de trabajo.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura web y servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web e interoperabilidad.'}
  ],null,'La opción A es correcta: la interoperabilidad entre aplicaciones heterogéneas es un objetivo central de la arquitectura de servicios web. Persistencia, balanceo y clústeres pueden ser decisiones de infraestructura, no el objetivo definitorio de los servicios web.','vigente'],
  [6182,[65],['III-12'],['WSDL','UDDI','SOAP','publicación','descubrimiento'],[
   {url:'https://www.w3.org/TR/ws-arch/',referencia:'W3C Web Services Architecture: distingue descripciones de servicios y agencias de descubrimiento; la arquitectura no exige que todo servicio se publique en una agencia/registro.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0: lenguaje/modelo para describir servicios web, interfaces y bindings.'},
   {url:'https://www.w3.org/TR/soap12-part1/',referencia:'W3C SOAP 1.2 Part 1: marco de mensajería usado por servicios SOAP; no es requisito universal de todo servicio web.'},
   {url:'https://www.oasis-open.org/committees/uddi-spec/faq.php',referencia:'OASIS UDDI TC FAQ: UDDI especifica registros para publicación y descubrimiento; es una tecnología disponible, no un requisito universal de invocación.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura web y servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: estándares de servicios web.'}
  ],null,'Se conserva la respuesta B como falsa, pero el enunciado se limita expresamente al modelo clásico SOAP/WSDL. UDDI permite publicar y descubrir servicios, pero no es obligatorio que cada servicio se publique en un registro UDDI para poder consumirse. SOAP tampoco se presenta como requisito de todos los servicios web en general.','corregida'],
  [6183,[65],['III-12'],['SOAP','MTOM','XOP','datos binarios','adjuntos'],[
   {url:'https://www.w3.org/TR/soap12-mtom/',referencia:'W3C SOAP Message Transmission Optimization Mechanism (MTOM): mecanismo de optimización de transmisión para contenido binario base64 en mensajes SOAP, serializable con XOP/MIME como partes binarias.'},
   {url:'https://www.w3.org/TR/soap12-part0/',referencia:'W3C SOAP 1.2 Primer, §5.3: explica que MTOM/XOP permite transportar valores binarios fuera de la representación XML textual y reconstruir el infoset.'},
   {url:'https://www.w3.org/TR/2005/REC-xop10-20050125/',referencia:'W3C XML-binary Optimized Packaging (XOP): empaquetado optimizado de datos binarios junto con XML.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: estándares y tecnologías web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: SOAP, estándares y protocolos de servicios web.'}
  ],null,'La respuesta C (MTOM) es correcta: optimiza la transmisión de contenido binario base64 en mensajes SOAP mediante una serialización XOP/MIME, manteniendo la semántica del infoset XML. Se cambia la formulación para hablar de contenido binario grande y no sugerir que MTOM es un mecanismo genérico de transferencia de archivos independiente de SOAP.','corregida'],
  [6184,[58],['II-6'],['cliente-servidor','roles','procesos','co-localización'],[
   {url:'https://docs.oracle.com/cd/E19620-01/805-4041/6j3r8iu2c/index.html',referencia:'Oracle, The Client-Server Model: define cliente y servidor como procesos/roles y señala que los procesos servidor pueden ejecutarse en la misma máquina o en varias; un sistema puede ser cliente y servidor para servicios distintos.'},
   {url:'https://learn.microsoft.com/en-us/windows/win32/termserv/client-server-application-guidelines',referencia:'Microsoft Learn, Client/Server application guidelines: documenta conexiones de múltiples clientes desde un mismo ordenador a un servidor; la topología no determina una máquina exclusiva por rol.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: procesamiento cooperativo y arquitectura cliente-servidor.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: tipología de arquitecturas cliente-servidor y componentes.'}
  ],null,'Se conserva la clave A, pero se reformula para evitar juzgar “mucho tráfico” de servidor a cliente, algo dependiente de la aplicación. Cliente y servidor son roles/procesos: no tienen que residir en máquinas físicas distintas; Oracle documenta que servicios y procesos pueden ejecutarse en una o varias máquinas.','corregida'],
  [6185,[65],['III-12'],['UDDI','OASIS','W3C','estándares de servicios web'],[
   {url:'https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=uddi-spec',referencia:'OASIS UDDI Specification TC: UDDI es trabajo de OASIS orientado a especificar registros y descubrimiento de servicios web.'},
   {url:'https://www.w3.org/TR/soap12/',referencia:'W3C SOAP 1.2: Recomendación W3C para mensajería de servicios web.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0: Recomendación W3C que define el lenguaje/modelo de descripción de servicios web.'},
   {url:'https://www.w3.org/TR/xml/',referencia:'W3C XML 1.0: Recomendación W3C; se distingue del conjunto específico de tecnologías de servicios web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: estándares y arquitectura web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: estándares de servicios web.'}
  ],null,'La respuesta A (UDDI) es correcta: UDDI fue normalizado en OASIS; SOAP 1.2, WSDL 2.0 y XML 1.0 son Recomendaciones W3C. Se aclara el criterio del enunciado, separando los estándares específicos de servicios web del lenguaje XML general.','vigente']
 ],
 edits:{
 6182:{texto:'En el modelo clásico de servicios web basado en SOAP/WSDL, ¿qué afirmación es falsa?',opciones:['Un servicio SOAP puede describirse mediante WSDL.','Para invocar un servicio, este debe haberse publicado necesariamente en un registro UDDI.','El consumidor y el proveedor pueden estar implementados con tecnologías distintas.','SOAP define un marco de mensajería para intercambiar mensajes estructurados.']},
 6183:{texto:'¿Qué mecanismo W3C optimiza el envío de contenido binario, como datos de gran tamaño, dentro de mensajes SOAP?',opciones:['REST-WS','Atom','MTOM','WS-Security']},
 6184:{texto:'En la arquitectura cliente-servidor, ¿qué afirmación es falsa?',opciones:['Cliente y servidor deben ejecutarse obligatoriamente en máquinas físicas distintas.','Un servidor puede atender solicitudes de muchos clientes.','Cliente y servidor son roles que pueden desempeñar procesos de software.','Un mismo ordenador puede ejecutar procesos cliente y servidor para servicios distintos.']},
 6185:{texto:'¿Cuál de estos estándares de registro de servicios web fue desarrollado en OASIS y no es una Recomendación del W3C?',opciones:['UDDI','SOAP 1.2','WSDL 2.0','XML 1.0']}
 }
});
