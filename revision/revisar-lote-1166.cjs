require('./aplicar-lote.cjs')({
 numero:'1166',fecha:'2026-11-13',
 records:[
  [6151,[118],['IV-8'],['TIA/EIA-568-B','90 m','100 m','cableado horizontal','histórica','pendiente de fuente'],[
   {url:'https://tiaonline.org/standard/tia-568/',referencia:'TIA, familia vigente de normas TIA-568. Confirma que la serie actual es sucesora de la antigua denominación TIA/EIA-568-B, pero no permite certificar el texto exacto de la edición B.'},
   {url:'https://tiaonline.org/standard-committee/tr-42-i-telecommunications-cabling-systems/',referencia:'Comité TIA TR-42.1 y documentos de la serie 568; la fuente oficial consultada no expone el texto íntegro de la cláusula histórica preguntada.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 118: redes LAN y cableado.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: redes locales, medios y normativa.'}
  ],null,'La clave heredada B coincide con el límite clásico de 90 m de enlace horizontal y 100 m de canal con cordones, pero la pregunta atribuye el dato a TIA/EIA-568-B, una edición histórica cuyo texto primario íntegro no se ha podido cotejar en una fuente oficial accesible. TIA publica actualmente la familia sucesora 568. Por la exigencia de evidencia primaria, no se certifica todavía la clave ni se presenta la edición B como norma vigente; se conserva el reactivo y la respuesta original pendiente de fuente.','pendiente_fuente'],
  [6152,[58],['II-7'],['microservicios','arquitectura distribuida','procesos independientes','servicios web'],[
   {url:'https://martinfowler.com/articles/microservices.html',referencia:'James Lewis y Martin Fowler, “Microservices” (2014): describe este estilo como aplicación formada por servicios pequeños, cada uno en su proceso y comunicados mediante mecanismos ligeros.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: procesamiento cooperativo, cliente-servidor y SOA; contexto arquitectónico relacionado.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.7: modelo de desarrollo basado en contenedores y microservicios.'}
  ],null,'Microservicios es la respuesta correcta. La formulación corresponde a la descripción de Lewis y Fowler de 2014; se parafrasea en el enunciado y se coteja su encaje explícito con A2-II.7.','vigente'],
  [6153,[58],['II-6'],['OASIS','estándares abiertos','servicios web'],[
   {url:'https://docs.oasis-open.org/plcs/dexlib/cs01/data/terminology/sys/o.htm',referencia:'Glosario publicado en docs.oasis-open.org: desarrolla OASIS como Organization for the Advancement of Structured Information Standards.'},
   {url:'https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=ubl-lsc',referencia:'Página oficial de comité OASIS que expande el nombre de la organización y describe su actividad de normalización.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 58: SOA y arquitecturas de servicios.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.6: interoperabilidad y arquitectura de servicios web.'}
  ],null,'La expansión oficial es Organization for the Advancement of Structured Information Standards, opción C. Se conserva el nombre propio inglés y no se confunde con un supuesto organismo de integración de servicios.','vigente'],
  [6154,[65],['III-12'],['SOAP','WSDL','mensajería web','W3C','corregida'],[
   {url:'https://www.w3.org/TR/soap12/',referencia:'W3C Recommendation SOAP 1.2 Part 1: define el marco de mensajería SOAP, su sobre y los patrones de intercambio; no es la descripción de interfaz WSDL.'},
   {url:'https://www.w3.org/TR/wsdl/',referencia:'W3C Recommendation WSDL 2.0: describe interfaces, operaciones y mensajes que un servicio envía o recibe; distingue la descripción de servicio del protocolo de mensajería.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 65: arquitectura de desarrollo web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema III.12: servicios web, estándares, protocolos e interoperabilidad.'}
  ],null,'Se corrige la clave de WSDL a SOAP y se precisa el enunciado: SOAP define el formato/marco de los mensajes y sus patrones de intercambio; WSDL describe la interfaz del servicio y puede declarar bindings. UDDI es un registro de descubrimiento y WS-Security añade mecanismos de seguridad. SOAP es una especificación/protocolo de mensajería XML, no un lenguaje de descripción de interfaz.','corregida'],
  [6155,[58,65],['II-6','III-12'],['WS-I','Basic Profile','Basic Security Profile','Reliable Secure Profile','perfiles de interoperabilidad'],[
   {url:'https://ws-i.org/',referencia:'Sitio oficial WS-I: enumera Basic Profile 1.2/2.0 y Reliable Secure Profile 1.0 entre sus entregables.'},
   {url:'https://www.ws-i.org/Profiles/BasicSecurityProfile-1.0.html',referencia:'Especificación oficial WS-I Basic Security Profile 1.0.'},
   {url:'https://www.oasis-open.org/standards/',referencia:'Archivo oficial OASIS: lista Basic Profile, Basic Security Profile y Reliable Secure Profile como entregables de WS-I/WS-BRSP.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, temas 58 y 65: SOA y arquitectura web.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, temas II.6 y III.12: arquitectura de servicios web y estándares/protocolos.'}
  ],null,'La opción D reúne tres perfiles que sí aparecen en los entregables oficiales: Basic Profile, Basic Security Profile y Reliable Secure Profile. Se ajusta el enunciado para preguntar por una combinación válida, no por un inventario exhaustivo de todos los perfiles WS-I; «Basic Infrastructure Profile» no figura en las fuentes oficiales consultadas.','corregida']
 ],
 edits:{
 6152:{texto:'¿Qué estilo de arquitectura organiza una aplicación en servicios pequeños, cada uno ejecutado en su propio proceso y comunicados mediante mecanismos ligeros? ',opciones:['Arquitectura de microservicios','Arquitectura orientada a negocio','Arquitectura en tres capas','Arquitectura multicapa']},
 6153:{texto:'¿Cuál es el desarrollo oficial de las siglas OASIS, organización que publica estándares usados en servicios web?',opciones:['Organization for the Advancement of Structured Information Services','Organization for the Advancement of Service Integration Standards','Organization for the Advancement of Structured Information Standards','Organization for the Application of Structured Information Standards']},
 6154:{texto:'En la mensajería de servicios web basada en XML, ¿qué especificación define el formato del mensaje y el marco para su intercambio?',opciones:['WSDL','SOAP','UDDI','WS-Security'],respuesta_correcta:1},
 6155:{texto:'¿Qué opción contiene tres perfiles publicados por WS-I? La lista no pretende ser exhaustiva.',opciones:['Basic Profile, Basic Infrastructure Profile, Basic Security Profile y Reliable Secure Profile','Basic Profile, Basic Infrastructure Profile y Reliable Secure Profile','Basic Infrastructure Profile, Basic Security Profile y Reliable Secure Profile','Basic Profile, Basic Security Profile y Reliable Secure Profile'],respuesta_correcta:3}
 }
});
