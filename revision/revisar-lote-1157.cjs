require('./aplicar-lote.cjs')({
 numero:'1157',fecha:'2026-11-13',
 records:[
  [6106,[119],['IV-2'],['arquitectura tres capas','capa de datos','persistencia'],[
   {url:'https://learn.microsoft.com/en-us/windows/win32/cossdk/using-a-three-tier-architecture-model',referencia:'Microsoft Learn: la capa de datos interactúa con datos persistentes; la capa intermedia aloja lógica de negocio y la de presentación interfaz de usuario.'},
   {url:'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/',referencia:'Azure Architecture Center: arquitectura N-tier separa presentación, lógica de negocio y acceso a datos; el nivel de datos almacena y administra datos.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 119: arquitectura de Intranet/Extranet y modelo de capas con servidores de aplicación y datos.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.2: administración de bases de datos y almacenamiento.'}
  ],null,'Se conserva la respuesta C precisando que se pregunta por la capa que interactúa con el almacenamiento persistente. En arquitecturas de tres capas, el nivel de aplicación puede contener componentes de acceso y lógica que solicitan datos; eso no cambia que la capa de datos gestiona la persistencia.','vigente'],
  [6107,[119],['IV-8'],['intranet','extranet','red privada','red corporativa'],[
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 119: concepto, estructura y características de redes Intranet y Extranet.'},
   {url:'https://learn.microsoft.com/en-us/sharepoint/introduction',referencia:'Microsoft Learn, introducción a SharePoint: las organizaciones usan intranets como sitios internos para compartir información y recursos; un portal puede incluir aplicaciones, por lo que la lista original no tenía una exclusión inequívoca.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.8: arquitectura de Internet y principales servicios; referencia relacionada para redes y servicios corporativos.'}
  ],null,'Se reemplaza el enunciado “qué elemento no forma parte de una Intranet”: nóminas, tablón, búsqueda documental y procesador de textos pueden ofrecerse en un portal interno, así que no había respuesta excluyente. La pregunta corregida evalúa el concepto de intranet y tiene una sola respuesta.','corregida'],
  [6108,[122],['IV-3'],['correo electrónico','fax por Internet','UIT-T T.37','RFC 3192','pasarela'],[
   {url:'https://www.itu.int/rec/T-REC-T.37/en',referencia:'UIT-T T.37 (06/98), estado In force: define la transferencia de fax por Internet mediante correo electrónico y almacenamiento y reenvío.'},
   {url:'https://www.itu.int/rec/dologin_pub.asp?id=T-REC-T.37-199806-I%21%21PDF-E&lang=e&type=items',referencia:'UIT-T T.37, texto de la recomendación: contempla equipos de pasarela que reciben correo electrónico y lo reenvían a fax G3/G4.'},
   {url:'https://www.rfc-editor.org/rfc/rfc3192.html',referencia:'RFC 3192: normaliza el formato de dirección FAX dentro del transporte de correo de Internet y describe el servicio de fax sobre correo electrónico.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 122: correo electrónico y servicios de mensajería.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.3: administración de servidores de correo y sus protocolos.'}
  ],null,'Se corrige la afirmación absoluta de que el correo no permite enviar fax: UIT-T T.37 especifica fax por Internet con almacenamiento y reenvío, normalmente mediante una pasarela. No es una capacidad intrínseca del protocolo SMTP aislado.','corregida'],
  [6109,[122],['IV-3'],['correo electrónico','IMAP4rev2','SMTP','POP','RFC 9051','RFC 5321'],[
   {url:'https://www.rfc-editor.org/rfc/rfc9051.html',referencia:'RFC 9051 (IMAP4rev2): permite al cliente acceder y manipular mensajes almacenados en el servidor y aclara que la publicación/envío corresponde a un protocolo de envío, como RFC 6409.'},
   {url:'https://www.rfc-editor.org/rfc/rfc5321.html',referencia:'RFC 5321: especificación de SMTP para transporte y entrega de correo electrónico.'},
   {url:'https://www.rfc-editor.org/rfc/rfc6409.html',referencia:'RFC 6409: protocolo SMTP Message Submission para que el cliente remita mensajes al sistema de correo.'},
   {url:'https://www.rfc-editor.org/rfc/rfc2045.html',referencia:'RFC 2045: MIME amplía el formato de los cuerpos de mensaje y permite representar contenido no ASCII mediante tipos y codificaciones.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 122: correo electrónico y mensajería.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.3: protocolos de servidores de correo.'}
  ],null,'Se reemplaza la pregunta negativa con una formulación positiva y vigente: IMAP permite acceder y gestionar mensajes en el servidor; SMTP se emplea para transportar o remitir correo. MIME trata el formato y contenido de los mensajes. POP también es un protocolo de acceso, pero no es una opción en la pregunta corregida.','corregida'],
  [6110,[80],['IV-5'],['LDAPv3','RFC 4511','TCP/IP','DAP','X.500'],[
   {url:'https://www.rfc-editor.org/rfc/rfc4511.html',referencia:'RFC 4511 (LDAPv3), §5.2: define el mapeo de LDAP sobre TCP; §3.1 explica que las operaciones principales se relacionan con una parte del servicio abstracto X.500, sin ser el protocolo DAP.'},
   {url:'https://www.rfc-editor.org/rfc/rfc4510.html',referencia:'RFC 4510, hoja de ruta LDAP: identifica RFC 4511 como protocolo LDAPv3 de la serie.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria GSI A1 2025, anexo I, tema 80: protocolos de directorio basados en LDAP y X.500.'},
   {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.5: seguridad lógica, identidad y mecanismos de autenticación; relación curricular general con servicios de directorio.'}
  ],null,'Se precisa la opción C: LDAPv3 no requiere que el cliente implemente el protocolo DAP completo de X.500. La pregunta no debe sugerir que LDAP sea ajeno a X.500: su modelo/operaciones derivan del servicio de directorio X.500, pero LDAP es un protocolo distinto y está especificado para operar sobre TCP/IP.','corregida']
 ],
 edits:{
  6106:{texto:'En una arquitectura lógica de tres capas, ¿qué capa interactúa con los datos persistentes, normalmente almacenados en una base de datos?',opciones:['Presentación.','Aplicación o lógica de negocio.','Datos.','Ninguna: la persistencia corresponde a la capa de presentación.'],respuesta_correcta:2},
  6107:{texto:'¿Qué describe una Intranet en una organización?',opciones:['Una red pública sin control de acceso.','Una red privada que utiliza tecnologías de Internet para ofrecer recursos internos.','Una red pública de intercambio entre organizaciones.','Un protocolo de transferencia de archivos.'],respuesta_correcta:1},
  6108:{texto:'¿Qué componente permite entregar a un fax tradicional un documento enviado desde el correo electrónico?',opciones:['El servidor SMTP, por sí solo y sin adaptación.','Una pasarela de correo a fax que convierte y reenvía el documento.','El protocolo IMAP del buzón del destinatario.','La codificación MIME, sin ningún servicio de fax.'],respuesta_correcta:1},
  6109:{texto:'¿Qué protocolo permite a un cliente acceder y gestionar mensajes almacenados en un servidor de correo?',opciones:['IMAP.','SMTP.','MIME.','DNS.'],respuesta_correcta:0},
  6110:{texto:'Respecto a LDAPv3, ¿cuál es correcta?',opciones:['No puede transportarse sobre TCP/IP.','Es un protocolo propietario.','El cliente no necesita implementar el protocolo DAP completo de X.500 para usar LDAP.','LDAP exige siempre un servidor que ejecute el protocolo DAP de X.500.'],respuesta_correcta:2}
 }
});
