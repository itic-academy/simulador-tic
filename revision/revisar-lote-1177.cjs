require('./aplicar-lote.cjs')({
 numero:'1177',fecha:'2026-11-13',
 records:[
  [6206,[65],['III-12'],['servicios web','Web Service Protocol Stack','SOAP','WSDL','UDDI'],[
   {url:'https://www.w3.org/TR/ws-arch/',referencia:'W3C Web Services Architecture: representa la pila de tecnologías y separa transporte, intercambio de mensajes, descripción (WSDL) y descubrimiento (por ejemplo, UDDI).'},
   {url:'https://www.w3.org/TR/soap12-part1/',referencia:'W3C SOAP 1.2 Part 1: estándar de mensajería para servicios web.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0: lenguaje para describir servicios web.'},
   {url:'https://www.oasis-open.org/specs/',referencia:'OASIS Specifications: catálogo oficial de especificaciones UDDI para registro y descubrimiento de servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: tecnologías web e interconexión con sistemas y servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web, estándares y protocolos asociados.'}
  ],null,'La respuesta A identifica la pila de protocolos/tecnologías de servicios web (Web Service Protocol Stack). SOAP y UDDI son componentes/estándares de esa pila, no el nombre de todo el conjunto. En el modelo W3C las capas y tecnologías concretas son una organización arquitectónica, no un requisito de que toda implementación use cada elemento.','vigente'],
  [6207,[65],['III-12'],['WSDL','XML','UDDI','SOAP','WS-BPEL','orquestación'],[
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0 Recommendation: WSDL significa Web Services Description Language y es un lenguaje XML para describir servicios, interfaces, bindings y endpoints.'},
   {url:'https://www.w3.org/TR/ws-arch/',referencia:'W3C Web Services Architecture: diferencia descripción del servicio (WSDL), mensajería (SOAP) y registro/descubrimiento (por ejemplo, UDDI).'},
   {url:'https://docs.oasis-open.org/wsbpel/2.0/OS/wsbpel-v2.0-OS.html',referencia:'OASIS WS-BPEL 2.0: lenguaje de procesos de negocio para orquestar interacciones con servicios web; no es WSDL.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura web e interconexión con servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web, estándares, protocolos e interoperabilidad.'}
  ],null,'Se corrige el error tipográfico «WDSL» del original a WSDL. La opción A es correcta: el contrato/documento WSDL es XML y describe el servicio; la opción B describe mensajes de intercambio, C confunde WSDL con un registro UDDI y D con un lenguaje de orquestación como WS-BPEL.','corregida'],
  [6208,[65],['III-12'],['servicios web','SOAP','UDDI','HTTP','ext4','sistemas de archivos'],[
   {url:'https://www.w3.org/TR/soap12-part1/',referencia:'W3C SOAP 1.2 Part 1: especificación del marco de mensajería SOAP.'},
   {url:'https://www.oasis-open.org/specs/',referencia:'OASIS Specifications: catálogo de la familia UDDI para registros y descubrimiento de servicios web.'},
   {url:'https://www.rfc-editor.org/rfc/rfc9110.html',referencia:'IETF RFC 9110, HTTP Semantics: especificación vigente de la semántica HTTP utilizada como protocolo de transporte/interacción web.'},
   {url:'https://www.kernel.org/doc/html/latest/filesystems/ext4/overview.html',referencia:'Linux kernel documentation, ext4: sistema de archivos de Linux, no estándar de servicios web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: tecnologías e interconexión web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: protocolos y estándares de servicios web.'}
  ],null,'La clave C se conserva, pero el acrónimo «XFSS» del original no delimitaba qué estándar se quería evaluar. Se reemplaza por ext4, un sistema de archivos de Linux, para que la respuesta no dependa de afirmar la inexistencia de un acrónimo ambiguo. SOAP, UDDI y HTTP sí se asocian a mensajería, descubrimiento y transporte/interacción web, respectivamente.','corregida'],
  [6209,[58],['II-16'],['workflow','WfMC','motor de workflow','interoperabilidad','monitorización','asignación de tareas'],[
   {url:'https://wfmc.org/wp-content/uploads/2022/09/tc003v11.pdf',referencia:'WfMC Workflow Reference Model: distingue funciones internas del servicio de ejecución de workflow y áreas de interfaz, incluida por separado la interoperabilidad entre motores (Interface 4).'},
   {url:'https://wfmc.org/wp-content/uploads/2022/09/TC-1011_term_glossary_v3.pdf',referencia:'WfMC Glossary: el modelo define cinco áreas, entre ellas interacción con clientes, aplicaciones invocadas, interoperabilidad entre sistemas workflow y administración/monitorización.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: procesamiento cooperativo y arquitectura SOA.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.16: sistemas de gestión de flujos de trabajo.'}
  ],null,'Se concreta «función básica» como función propia de un motor/servicio de ejecución de workflow. Monitorización, control, definición/gestión de procedimientos y asignación de tareas/roles son funciones internas habituales; la interoperabilidad entre motores distintos es una capacidad de integración expuesta por el Interface 4 de WfMC. La respuesta C queda inequívoca.','corregida'],
  [6210,[58],['II-6'],['SOA','ESB','Enterprise Service Bus','integración','middleware'],[
   {url:'https://www.ibm.com/docs/en/bpms/8.0.x?topic=manager-connecting-services-through-enterprise-service-bus',referencia:'IBM Documentation: define y describe el Enterprise Service Bus como infraestructura de mediación e integración de servicios.'},
   {url:'https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.pdf',referencia:'OASIS SOA Reference Model: arquitectura orientada a servicios, consumidores/proveedores y composición de soluciones.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: arquitectura SOA.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: arquitecturas de servicios web e interoperabilidad.'}
  ],null,'La opción C es la expansión correcta de ESB: Enterprise Service Bus, infraestructura de integración y mediación en soluciones SOA. Se mantiene la pregunta.','vigente']
 ],
 edits:{
 6207:{texto:'¿Cuál afirmación sobre WSDL (Web Services Description Language) es cierta?',opciones:['Es un documento XML que describe un servicio web.','Es el mensaje XML que intercambian cliente y servidor en cada petición y respuesta.','Es un registro de OASIS para publicar y localizar servicios web.','Es un lenguaje de orquestación de procesos de servicios web.']},
 6208:{texto:'¿Cuál de los siguientes elementos no es un protocolo o estándar asociado a los servicios web?',opciones:['SOAP, para mensajería de servicios web.','UDDI, para registro y descubrimiento de servicios.','ext4, un sistema de archivos de Linux.','HTTP, para la interacción y transporte web.'],opcion:[2,'ext4, un sistema de archivos de Linux.']},
 6209:{texto:'Si «función básica» se refiere a las funciones propias de un motor de ejecución de workflow, ¿cuál corresponde principalmente a interoperabilidad entre sistemas workflow distintos y no a una función interna de un solo motor?',opciones:['Monitorización y control del estado de las instancias.','Gestión/ejecución de procedimientos y actividades.','Interoperabilidad entre motores de workflow diferentes.','Autorizaciones, roles y asignación de responsabilidades/tareas.']}
 }
});
