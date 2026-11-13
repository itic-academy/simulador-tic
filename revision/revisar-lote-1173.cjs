require('./aplicar-lote.cjs')({
 numero:'1173',fecha:'2026-11-13',
 records:[
  [6186,[65],['III-12'],['SOAP','MTOM','XOP','mensajería binaria'],[
   {url:'https://www.w3.org/TR/soap12-mtom/',referencia:'W3C SOAP Message Transmission Optimization Mechanism (MTOM): define una función de optimización de la transmisión/serialización SOAP, en especial para contenido binario base64, con serialización XOP/MIME.'},
   {url:'https://www.w3.org/TR/ws-arch/',referencia:'W3C Web Services Architecture: distingue tecnologías y roles; SOAP es mensajería, WSDL describe servicios, y no impone una implementación concreta.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0: lenguaje/modelo de descripción de servicios web e interfaces.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura y tecnologías web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web, estándares y protocolos.'}
  ],null,'Se reescribe el reactivo para que pregunte específicamente por MTOM: la versión original tenía varias respuestas verdaderas (SOAP/XML, definición de servicio web y MTOM), por lo que no era de respuesta única. La clave D se conserva con una descripción más precisa: MTOM optimiza la transmisión de contenido binario en mensajes SOAP mediante mecanismos como XOP/MIME.','corregida'],
  [6187,[58],['II-6'],['arquitectura de tres capas','presentación','lógica de negocio','datos'],[
   {url:'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/n-tier',referencia:'Microsoft Azure Architecture Center, N-tier architecture style: separa responsabilidades de presentación, lógica de aplicación y almacenamiento/datos en capas lógicas.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: arquitecturas cliente-servidor y procesamiento cooperativo.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: arquitecturas multicapa, tipología y componentes.'}
  ],null,'La opción C es correcta: las tres capas lógicas suelen describirse como presentación, lógica de aplicación/negocio y datos (incluido el almacenamiento). Se conserva la pregunta, aclarando en la explicación que los nombres varían entre modelos y que capa lógica no significa necesariamente máquina física separada.','vigente'],
  [6188,[58],['II-16'],['XPDL','WfMC','workflow','intercambio de procesos'],[
   {url:'https://wfmc.org/xpdl/',referencia:'Workflow Management Coalition, XPDL: formato XML para intercambiar definiciones de procesos, incluidas propiedades de elementos gráficos; XPDL no es en sí mismo una notación gráfica.'},
   {url:'https://wfmc.org/wp-content/uploads/2022/09/tc003v11.pdf',referencia:'WfMC Workflow Reference Model TC00-1003: documentación de la coalición y del ecosistema de especificaciones de workflow.'},
   {url:'https://www.omg.org/spec/BPMN/2.0/About-BPMN',referencia:'Object Management Group, BPMN 2.0: especificación de notación gráfica para modelado de procesos de negocio, distinta del formato de intercambio XPDL.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: procesamiento cooperativo y SOA; conceptos de workflow e integración.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.16: sistemas de gestión de flujos de trabajo.'}
  ],null,'Se conserva D como incorrecta. XPDL es un formato de intercambio XML asociado a WfMC que puede portar información gráfica/coordenadas; no es una notación gráfica de modelado (esa función corresponde, por ejemplo, a BPMN) ni fue creado por OASIS. Se corrige el contraste entre formato, notación y organismo.','corregida'],
  [6189,[58],['II-16'],['WfMC','workflow','organismos de normalización','SOA'],[
   {url:'https://wfmc.org/',referencia:'Workflow Management Coalition (WfMC), sitio institucional: coalición del sector centrada en estándares e interoperabilidad de workflow; no es una coalición Microsoft-IBM.'},
   {url:'https://www.omg.org/about/',referencia:'Object Management Group: organismo internacional de estandarización y consorcio abierto que publica especificaciones como BPMN.'},
   {url:'https://www.oasis-open.org/about-oasis/',referencia:'OASIS: consorcio de estándares abiertos para tecnologías, incluidos servicios web y SOA.'},
   {url:'https://www.w3.org/standards/',referencia:'W3C Standards: consorcio que desarrolla estándares/Recomendaciones web, incluidos SOAP y WSDL.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: arquitectura SOA y procesamiento cooperativo.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.16: workflow y flujos de trabajo.'}
  ],null,'El original mezclaba organismos de normalización SOA, una iniciativa BPMI integrada posteriormente en OMG y una denominación falsa de WfMC. Se sustituye por un reactivo identificable: la opción D es la que inventa una «Microsoft-IBM Workflow Management Coalition». WfMC existe como coalición independiente de workflow; se conserva su nombre pero no se le atribuye una organización inexistente.','corregida'],
  [6190,[65],['III-12'],['SOAP','XML','mensajería','servicios web'],[
   {url:'https://www.w3.org/TR/soap12-part1/',referencia:'W3C SOAP 1.2 Part 1: especifica un marco extensible de mensajería para intercambiar información estructurada en un entorno distribuido mediante tecnologías XML.'},
   {url:'https://www.w3.org/TR/ws-arch/',referencia:'W3C Web Services Architecture: caracteriza SOAP como una tecnología de mensajería web y lo distingue de RPC/CORBA y de las descripciones WSDL.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura web y protocolos.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: SOAP y protocolos de servicios web.'}
  ],null,'La opción B es correcta, con una definición precisa: SOAP 1.2 es un marco/protocolo de mensajería para intercambiar información estructurada basada en XML. No sustituye a RPC ni reemplaza protocolos o middleware de CORBA; puede soportar patrones de intercambio de mensajes distintos.','corregida']
 ],
 edits:{
 6186:{texto:'¿Qué mecanismo del W3C optimiza el envío de contenido binario en mensajes SOAP?',opciones:['BPMN, una notación gráfica para modelar procesos de negocio.','UDDI, un registro para publicar y descubrir servicios web.','WSDL, un lenguaje para describir interfaces y bindings de servicios.','MTOM, un mecanismo de optimización de transmisión SOAP que puede empaquetar datos binarios mediante XOP/MIME.']},
 6188:{texto:'¿Cuál afirmación sobre XPDL es INCORRECTA?',opciones:['Es un formato XML estandarizado para intercambiar definiciones de procesos de workflow.','Puede transportar información de disposición gráfica, como coordenadas de elementos.','Es un formato asociado a la Workflow Management Coalition (WfMC).','Es la notación gráfica de modelado de procesos de negocio, función que corresponde a BPMN.']},
 6189:{texto:'¿Cuál opción contiene una denominación incorrecta de un organismo o consorcio relacionado con estándares de servicios web, SOA o workflow?',opciones:['Business Process Management Initiative (BPMI), iniciativa relacionada con estándares de gestión de procesos.','Object Management Group (OMG), organismo que publica especificaciones como BPMN.','OASIS, consorcio que publica estándares de servicios web/SOA.','Microsoft-IBM Workflow Management Coalition, supuesta coalición que habría creado los estándares de workflow.']},
 6190:{texto:'¿Cuál describe correctamente SOAP 1.2?',opciones:['Es un protocolo XML específico para invocar sistemas RMI.','Es un marco de mensajería que define cómo intercambiar información estructurada basada en XML en entornos distribuidos.','Sustituye al protocolo RPC de CORBA en sistemas distribuidos.','Es un registro de directorio para publicar y localizar servicios web.']}
 }
});
