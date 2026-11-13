require('./aplicar-lote.cjs')({
 numero:'1176',fecha:'2026-11-13',
 records:[
  [6201,[58],['II-16'],['WfMC','Workflow Reference Model','WAPI','interfaces 1-5'],[
   {url:'https://wfmc.org/wp-content/uploads/2022/09/tc003v11.pdf',referencia:'WfMC TC00-1003, Workflow Reference Model: Interface 1 process-definition interchange; Interface 2 workflow client applications; Interface 3 invoked applications; Interface 4 interoperability; Interface 5 administration and monitoring.'},
   {url:'https://wfmc.org/wp-content/uploads/2022/09/TC-1011_term_glossary_v3.pdf',referencia:'WfMC Glossary: describe los cinco interfaces del modelo y sus funciones.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: arquitectura SOA y procesamiento cooperativo.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.16: sistemas de gestión de flujos de trabajo.'}
  ],null,'El reactivo original mezclaba varias asociaciones incorrectas: Interface 1 es intercambio de definiciones, Interface 4 interoperabilidad, WAPI agrupa llamadas para las cinco áreas de interfaz e Interface 5 corresponde a administración/monitorización. Por tanto, había más de una afirmación falsa. Se reformula como asociación correcta y D es la única verdadera.','corregida'],
  [6202,[58],['II-6'],['SOA','ESB','mediación','enrutamiento','transformación','conversión de protocolos'],[
   {url:'https://www.ibm.com/docs/en/bpms/8.0.x?topic=manager-connecting-services-through-enterprise-service-bus',referencia:'IBM Documentation: el ESB media entre solicitantes y proveedores, enruta mensajes, convierte protocolos y transforma formatos.'},
   {url:'https://www.ibm.com/docs/en/bpms/8.5.6?topic=functions-building-mediation-flows',referencia:'IBM Documentation: los flujos de mediación ESB interceptan y modifican mensajes entre servicios consumidores y proveedores.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: procesamiento cooperativo, cliente-servidor y SOA.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: interoperabilidad y arquitecturas de servicios web.'}
  ],null,'La opción D es correcta. Se sustituye la expresión vaga «desde una perspectiva de red WAN» por la función concreta: infraestructura bus de integración SOA que intermedia y enruta servicios y puede adaptar formatos/protocolos. «Motor de integración» puede ser una denominación genérica y no identifica ese patrón con igual precisión.','corregida'],
  [6203,[58],['II-6'],['sistemas distribuidos','cliente-servidor','peer-to-peer','proxy','caché','patrones arquitectónicos'],[
   {url:'https://www.ibm.com/docs/en/txseries/10.1.0?topic=concepts-what-is-distributed-computing',referencia:'IBM Documentation: sistemas distribuidos y modelo cliente-servidor; describe componentes en equipos distintos que cooperan como sistema.'},
   {url:'https://www.ibm.com/docs/en/txseries/10.1.0?topic=dtp-distributed-processes',referencia:'IBM Documentation: distingue procesamiento client/server y peer-to-peer como modelos de interacción entre procesos distribuidos.'},
   {url:'https://www.rfc-editor.org/rfc/rfc9111.html',referencia:'IETF RFC 9111, HTTP Caching: define cachés privadas/compartidas y comportamiento de caché intermedia/proxy en HTTP.'},
   {url:'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles',referencia:'Microsoft Azure Architecture Center: catálogo de estilos de arquitectura usados en aplicaciones distribuidas, incluido n-tier.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: procesamiento cooperativo y arquitectura cliente-servidor.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: tipología de arquitecturas cliente-servidor y multicapas.'}
  ],null,'La respuesta D se mantiene como síntesis de patrones habituales, pero el original presentaba como taxonomía uniforme categorías de distinto nivel. Se reformula como conjunto de patrones encontrados en diseños distribuidos: cliente-servidor, peer-to-peer y proxy/caché (este último suele ser un intermediario o patrón dentro de otras arquitecturas, no una arquitectura raíz equivalente).','corregida'],
  [6204,[58],['II-6'],['SOA','bajo acoplamiento','interoperabilidad','reutilización','contratos de servicio'],[
   {url:'https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.pdf',referencia:'OASIS SOA Reference Model: SOA organiza soluciones para promover reutilización, crecimiento e interoperabilidad mediante servicios.'},
   {url:'https://wiki-static.oasis-open.org/soa-rm/Architectural_Principles',referencia:'OASIS SOA Reference Architecture principles: colección débilmente acoplada de servicios de red bien definidos e interoperables; favorece reutilización.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: procesamiento cooperativo, cliente-servidor y SOA.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: ventajas e inconvenientes de arquitectura de servicios web.'}
  ],null,'La opción B es la que NO representa un beneficio: SOA busca servicios interoperables y débilmente acoplados, no aplicaciones fuertemente acopladas. La colaboración entre organizaciones y la sustitución de implementaciones pueden facilitarse si se mantienen contratos compatibles; se añade expresamente esta condición para no prometer cambios sin impacto en cualquier escenario.','corregida'],
  [6205,[58],['II-6'],['arquitectura cliente-servidor','tres capas','presentación','lógica de negocio','datos'],[
   {url:'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier',referencia:'Microsoft Azure Architecture Center: la arquitectura de tres capas suele separar presentación, lógica de negocio/aplicación y acceso a datos.'},
   {url:'https://www.ibm.com/docs/en/txseries/10.1.0?topic=concepts-what-is-distributed-computing',referencia:'IBM Documentation: arquitectura cliente-servidor por tiers y separación entre funciones de presentación, aplicación y datos.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: arquitectura cliente-servidor y procesamiento cooperativo.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: arquitectura multicapas, componentes y tipología.'}
  ],null,'La opción D es correcta: presentación, lógica de negocio/aplicación y datos (incluido acceso/almacenamiento). Son capas lógicas de responsabilidad; no implican necesariamente tres servidores o tiers físicos separados. Se conserva el reactivo.','vigente']
 ],
 edits:{
 6201:{texto:'Según el Modelo de Referencia de Workflow de la WfMC, ¿qué asociación entre interfaz y función es correcta?',opciones:['La Interfaz 1 se ocupa de la administración y monitorización del flujo de trabajo.','La Interfaz 2 permite invocar las aplicaciones externas ejecutadas por una actividad.','La Interfaz 4 intercambia definiciones de procesos entre herramientas de modelado.','La Interfaz 5 proporciona funciones de administración y monitorización del flujo de trabajo.']},
 6202:{texto:'¿Qué infraestructura bus de integración SOA intermedia entre consumidores y proveedores de servicios y puede enrutar mensajes, transformar formatos y adaptar protocolos?',opciones:['Una cola de mensajes, que almacena y entrega mensajes de forma asíncrona.','Un cliente de servicios, que invoca directamente al proveedor.','Una arquitectura cliente-servidor, que organiza consumidores y proveedores.','Un Enterprise Service Bus (ESB), que media la integración entre servicios.']},
 6203:{texto:'¿Qué conjunto reúne patrones habituales que pueden utilizarse en el diseño de sistemas distribuidos?',opciones:['Cliente-servidor.','Proxy o caché intermedia.','Peer-to-peer (P2P).','Todos los anteriores: cliente-servidor, proxy/caché y P2P.']},
 6204:{opcion:[3,'Poder reemplazar una implementación de servicio de la capa de aplicación sin alterar el proceso de negocio, siempre que se conserve el contrato compatible.']}
 }
});
