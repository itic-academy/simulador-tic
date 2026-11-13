require('./aplicar-lote.cjs')({
 numero:'1169',fecha:'2026-11-13',
 records:[
  [6166,[65],['III-12'],['servicios web','WSDL','SOAP','interoperabilidad'],[
   {url:'https://www.w3.org/TR/ws-gloss/',referencia:'W3C Web Services Glossary: define el servicio web como sistema software para interacción interoperable máquina a máquina en red; en el modelo clásico, interfaz WSDL y mensajes SOAP típicamente sobre HTTP.'},
   {url:'https://www.w3.org/TR/soap12/',referencia:'W3C SOAP 1.2 Recommendation: mensajes estructurados mediante XML y marco extensible vinculable a diversos protocolos subyacentes.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0 Recommendation: describe interfaces/operaciones y bindings de servicios; el protocolo no tiene por qué ser únicamente HTTP.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura y tecnologías de desarrollo web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web y protocolos.'}
  ],null,'La respuesta A se conserva y se reformula para el modelo clásico SOAP/WSDL: los servicios web permiten interacción interoperable máquina a máquina; las interfaces se describen con WSDL y los mensajes SOAP suelen viajar por HTTP, pero SOAP admite distintos protocolos subyacentes. Se evita presentar todos los servicios web como llamadas a procedimientos remotos o limitar el transporte a HTTP.','corregida'],
  [6167,[58],['II-6'],['SOA','composición','descubrimiento','reutilización','servicios'],[
   {url:'https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.html',referencia:'OASIS Reference Model for SOA v1.0, estándar: describe descubrimiento/visibilidad de servicios y la reutilización y composición de capacidades en soluciones.'},
   {url:'https://www.oasis-open.org/specs/',referencia:'Catálogo oficial OASIS: Reference Model for Service Oriented Architecture v1.0 aparece como estándar aprobado.'},
   {url:'https://www.ibm.com/docs/en/was/9.0.5?topic=services-service-oriented-architecture',referencia:'IBM WebSphere: entre los requisitos de SOA enumera interoperabilidad, descripción clara y mecanismos de recuperación/descubrimiento de servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: SOA y arquitecturas distribuidas.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: sistemas distribuidos, servicios e interoperabilidad.'}
  ],null,'La opción B reúne composición, descubrimiento y reutilización, propiedades habitualmente asociadas al diseño orientado a servicios. Se cambia “principios de SOA” por “principios habituales de diseño de servicios SOA”: el estándar OASIS de referencia explica composición/reutilización y visibilidad/descubrimiento, sin imponer una taxonomía única y cerrada de principios.','corregida'],
  [6168,[65],['III-12'],['SOAP','XML','protocolos de transporte','interoperabilidad'],[
   {url:'https://www.w3.org/TR/soap12/',referencia:'W3C SOAP 1.2, Recommendation: marco de mensajería definido con tecnologías XML, extensible y susceptible de vincularse a distintos protocolos subyacentes.'},
   {url:'https://www.w3.org/TR/soap12-part0/',referencia:'W3C SOAP 1.2 Primer: documenta el modelo de mensajes SOAP y la vinculación al protocolo de transporte.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: tecnologías de desarrollo web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web y protocolos de intercambio.'}
  ],null,'La respuesta A es correcta: SOAP es una especificación/protocolo de mensajería para intercambiar mensajes estructurados en entornos distribuidos, independiente del lenguaje de implementación. SOAP 1.2 define bindings a protocolos subyacentes y no requiere modificar siempre un firewall. Se retira el distractor humorístico sobre palomas, que impedía una evaluación técnica rigurosa.','corregida'],
  [6169,[65],['III-12'],['UDDI','registro','publicación','descubrimiento de servicios web'],[
   {url:'https://www.oasis-open.org/committees/uddi-spec/doc/spec/v3/uddi_v3.htm',referencia:'OASIS UDDI v3.0.2: define APIs y estructuras de datos para registros; su objetivo incluye publicar y descubrir proveedores, servicios web e interfaces técnicas.'},
   {url:'https://www.oasis-open.org/committees/uddi-spec/doc/tns.htm',referencia:'Comité/archivo oficial OASIS UDDI: especificaciones del estándar y documentos relacionados con el registro de servicios web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, temas 58 y 65: SOA, publicación/descubrimiento y servicios web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.6 y III.12: arquitectura de servicios y estándares web.'}
  ],null,'La opción B, UDDI, es la respuesta. La pregunta se corrige para llamarlo estándar de registro, no “protocolo”: UDDI especifica datos y APIs con los que un registro almacena, publica, consulta y descubre información de servicios y sus interfaces. SOAP intercambia mensajes y WSDL describe servicios.','corregida'],
  [6170,[58,65],['II-6','III-12'],['BPMN','BPEL','XPDL','WSDL','procesos de negocio'],[
   {url:'https://www.omg.org/spec/BPMN/2.0/About-BPMN',referencia:'OMG BPMN 2.0: notación estándar para modelar procesos de negocio.'},
   {url:'https://docs.oasis-open.org/wsbpel/2.0/wsbpel-v2.0.html',referencia:'OASIS WS-BPEL 2.0 Standard: lenguaje para describir y ejecutar procesos de negocio basados en servicios web.'},
   {url:'https://wfmc.org/xpdl/',referencia:'Workflow Management Coalition: XPDL es formato de intercambio de definiciones y diagramas de procesos, compatible con aspectos de BPMN.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0 Recommendation: lenguaje XML para describir interfaces, operaciones y bindings de servicios web; no es notación de modelado/ejecución de procesos de negocio.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, temas 58 y 65: arquitecturas SOA y servicios web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.6 y III.12: arquitectura de servicios y protocolos.'}
  ],null,'La opción D, WSDL, es la que no constituye por sí misma una notación/lenguaje de modelado o ejecución de procesos de negocio: describe interfaces, operaciones y bindings de servicios web. BPMN modela procesos, WS-BPEL los define para ejecución/orquestación y XPDL intercambia definiciones de flujo de trabajo/proceso. Se precisa “principalmente” para reconocer que WSDL puede participar en una composición, aunque su función no sea modelar el proceso.','vigente']
 ],
 edits:{
 6166:{texto:'En el modelo clásico de servicios web basado en SOAP y WSDL, ¿qué afirmación es correcta?',opciones:['Permiten interacción interoperable entre sistemas en red; las interfaces se describen con WSDL y los mensajes SOAP suelen transportarse por HTTP, aunque pueden usarse otros bindings.','Están dirigidos exclusivamente a usuarios humanos que acceden desde un navegador HTTP.','Son únicamente una propuesta teórica que nunca se ha implementado.','Ninguna de las anteriores.']},
 6167:{texto:'¿Qué conjunto recoge principios habituales de diseño de servicios en una arquitectura SOA?',opciones:['Composición, alto acoplamiento y madurez','Composición, descubrimiento y reutilización','Descubrimiento, baja cohesión y madurez','Alto acoplamiento, baja cohesión y composición']},
 6168:{texto:'Seleccione la afirmación correcta sobre SOAP:',opciones:['SOAP define un marco de mensajería para intercambiar mensajes estructurados en entornos distribuidos; es independiente del lenguaje y admite bindings a distintos protocolos.','Las aplicaciones deben estar escritas en el mismo lenguaje de programación.','SOAP 1.2 solo permite transportar mensajes mediante SMTP y no puede vincularse a HTTP.','La comunicación SOAP siempre obliga a modificar las reglas del firewall de los extremos.']},
 6169:{texto:'¿Qué estándar define un registro para publicar y descubrir información sobre servicios web y sus interfaces técnicas?',opciones:['SOAP','UDDI','WSDL','UDIT']},
 6170:{texto:'¿Cuál de los siguientes es principalmente un lenguaje para describir interfaces y bindings de servicios web, y no una notación/formato para modelar o ejecutar procesos de negocio?',opciones:['BPMN','BPEL','XPDL','WSDL']}
 }
});
