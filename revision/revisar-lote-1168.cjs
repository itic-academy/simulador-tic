require('./aplicar-lote.cjs')({
 numero:'1168',fecha:'2026-11-13',
 records:[
  [6161,[58],['II-6'],['middleware','integración de aplicaciones heterogéneas','comunicación distribuida'],[
   {url:'https://www.ibm.com/think/topics/middleware',referencia:'IBM: middleware habilita comunicación/conectividad entre aplicaciones o componentes de una red distribuida y actúa como software de integración.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: arquitecturas SOA, sistemas distribuidos y middleware.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: sistemas distribuidos, integración e interoperabilidad.'}
  ],null,'La respuesta C es middleware: capa de software que facilita comunicación e integración entre aplicaciones/componentes que pueden ser heterogéneos. Se reemplaza la expresión imprecisa “compartir recursos de proceso de datos” por una definición contrastable y se conserva la opción correcta.','corregida'],
  [6162,[65],['III-12'],['REST','HTTP','GET','consulta de recursos'],[
   {url:'https://www.rfc-editor.org/rfc/rfc9110.html',referencia:'RFC 9110 §9.3.1: GET solicita la transferencia de una representación actual del recurso; es el mecanismo primario de recuperación de información en HTTP.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura de desarrollo web y servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: aplicaciones web, servicios y protocolos HTTP.'}
  ],null,'La opción A, GET, es la respuesta en el uso común de una API REST para recuperar una representación de un recurso. Se precisa que esta convención HTTP no obliga a que toda consulta de una aplicación tenga que usar GET; RFC 9110 define la semántica de recuperación del método.','vigente'],
  [6163,[58,65],['II-6','III-12'],['Apache Axis2','Sandesha2','WS-ReliableMessaging','mensajería fiable'],[
   {url:'https://axis.apache.org/axis2/java/sandesha/',referencia:'Documentación oficial Apache Sandesha2: el módulo Axis2 implementa WS-ReliableMessaging y añade mensajería fiable a servicios web.'},
   {url:'https://axis.apache.org/axis2/java/sandesha/userGuide.html',referencia:'Guía oficial Apache: instala Sandesha2 como módulo de Axis2 y documenta su implementación de WS-RM; la documentación publicada corresponde a versiones antiguas y no acredita mantenimiento actual.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, temas 58 y 65: arquitecturas distribuidas y de servicios web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.6 y III.12: servicios distribuidos y protocolos de servicios web.'}
  ],null,'La respuesta C, Apache Sandesha2, es correcta para la integración histórica con Axis2: Apache lo documenta como módulo que implementa WS-ReliableMessaging. Se acota el reactivo a versiones documentadas del producto, ya que la propia documentación consultada es antigua (última publicación indicada en 2013) y no prueba mantenimiento ni soporte actuales. Se conserva el valor histórico sin presentarlo como recomendación vigente.','historica'],
  [6164,[65],['III-12'],['REST','JAX-RS','Jakarta REST','Jersey','métodos HTTP'],[
   {url:'https://jakarta.ee/specifications/restful-ws/4.0/jakarta-restful-ws-spec-4.0.html',referencia:'Especificación final Jakarta REST 4.0: define la API para servicios REST y los designadores HTTP @GET, @POST, @PUT, @DELETE, @PATCH, @HEAD y @OPTIONS; permite designadores personalizados.'},
   {url:'https://eclipse-ee4j.github.io/jersey/',referencia:'Proyecto oficial Eclipse Jersey: framework REST que implementa JAX-RS/Jakarta REST; publica línea Jersey 4.0 para Jakarta EE 11.'},
   {url:'https://www.rfc-editor.org/rfc/rfc9110.html',referencia:'RFC 9110, semántica HTTP: define métodos GET, POST, PUT y DELETE, entre otros; la interfaz REST uniforme no queda reducida a tres operaciones CRUD.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web y protocolos.'}
  ],null,'La respuesta D es la incorrecta. La API Java antes denominada JAX-RS (hoy Jakarta REST) soporta servicios del estilo REST y Jersey es una implementación; los recursos no se limitan a tres operaciones CREATE/UPDATE/DELETE: la especificación define designadores para GET, POST, PUT, DELETE, PATCH, HEAD y OPTIONS, entre otros extensibles. Se reescribe D para que el error evaluado sea inequívoco.','corregida'],
  [6165,[65],['III-12'],['SOAP','XML','WSDL','servicios web'],[
   {url:'https://www.w3.org/TR/soap12/',referencia:'W3C SOAP 1.2 Recommendation: define un marco de mensajería de información estructurada mediante tecnologías XML, independiente del protocolo subyacente.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C WSDL 2.0 Recommendation: formato XML y modelo para describir servicios web, interfaces, operaciones y bindings.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura web y servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web, descripción y protocolos.'}
  ],null,'La opción C es correcta: SOAP intercambia mensajes estructurados mediante XML y WSDL describe las interfaces, operaciones y bindings disponibles. Se conserva la clave; se evita sugerir que JSON y JSDL describan la interfaz de un servicio SOAP. SOAP puede ligarse a más de un protocolo, no exclusivamente HTTP.','vigente']
 ],
 edits:{
 6161:{texto:'¿Qué tipo de software facilita la comunicación y la integración entre aplicaciones o componentes heterogéneos de una red distribuida?',opciones:['Firmware','Interfaz de usuario','Middleware','Everyware']},
 6162:{texto:'En una API que expone recursos conforme al estilo REST, ¿qué método HTTP se utiliza habitualmente para solicitar la representación de un recurso?',opciones:['GET','POST','PUT','PATCH']},
 6163:{texto:'En las versiones de Apache Axis2 documentadas junto con Sandesha2, ¿qué módulo implementa WS-ReliableMessaging (WS-RM)?',opciones:['Apache Rampart','Apache Kandula','Apache Sandesha2','Apache StAX']},
 6164:{texto:'Señale la afirmación INCORRECTA sobre servicios web REST y la API Java JAX-RS/Jakarta REST:',opciones:['JAX-RS, hoy Jakarta REST, define una API Java para servicios web del estilo REST.','Eclipse Jersey es una implementación de JAX-RS/Jakarta REST.','Las API REST suelen acceder a recursos mediante métodos HTTP como GET y POST.','Un recurso REST solo puede atender tres operaciones: CREATE, UPDATE y DELETE.']},
 6165:{texto:'¿Qué afirmación describe correctamente la tecnología de servicios web SOAP?',opciones:['SOAP es obsoleto y no puede utilizarse en sistemas actuales; debe sustituirse siempre por REST.','SOAP utiliza mensajes JSON y JSDL describe las operaciones del servicio.','SOAP define mensajes basados en XML y WSDL puede describir las interfaces y operaciones del servicio.']}
 }
});
