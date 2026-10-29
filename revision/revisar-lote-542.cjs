const apply=require('./aplicar-lote.cjs');
const gprs='https://www.etsi.org/deliver/etsi_ts/123000_123099/123060/16.00.00_60/ts_123060v160000p.pdf';
const charge='https://www.etsi.org/deliver/etsi_ts/122100_122199/122115/08.03.00_60/ts_122115v080300p.pdf';
const bia='https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf';
const x200='https://www.itu.int/rec/T-REC-X.200/en';
const x25='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.25-199610-I%21%21PDF-E&lang=e&type=items';
const vpls='https://www.rfc-editor.org/rfc/rfc4762.html';
const vplsFramework='https://www.rfc-editor.org/rfc/rfc4664.html';
const records=[
 [3026,[123],['IV-15'],['GPRS','conmutación de paquetes','PDP context','GGSN','tarificación'],[
  {url:gprs,referencia:'3GPP TS 23.060 (ETSI TS 123 060), §§1 y 4: GPRS se define como servicio portador de paquetes; su dominio de paquetes ofrece interworking con redes IP y la especificación contempla facturación flexible por cantidad de datos, QoS y duración.'},
  {url:charge,referencia:'3GPP TS 22.115 (ETSI TS 122 115), §5.2.5 y tabla de mecanismos: admite facturación por volumen de datos; la duración puede registrarse y existen distintos mecanismos, así que la tarifa concreta no es universal.'}
 ],'','Se corrige la errata «GRPS» y se hace inequívoca la opción falsa: GPRS es un servicio de conmutación de paquetes, usa activación de contexto de datos y permite interconexión IP; no exige establecer una llamada de circuitos para cada envío. Tampoco es correcto afirmar que solo puede facturarse por tiempo: las especificaciones contemplan volumen y duración, entre otras opciones, y la tarifa la define el operador.','corregida'],
 [3027,[128],[],['análisis de impacto en el negocio','BIA','continuidad','contingencia','recuperación'],[
  {url:bia,referencia:'NIST SP 800-34 Rev. 1, cap. 3 y fig. 3-1: el proceso de planificación de contingencia define primero la política y realiza después el BIA como segundo paso, antes de controles preventivos, estrategias de contingencia y redacción del plan.'}
 ],'','Se concreta la pregunta al proceso de NIST SP 800-34: el BIA se realiza pronto, después de establecer la política de planificación y antes de elegir estrategias de continuidad/recuperación. No es una actividad final ni prescindible. El programa vigente A1 incluye expresamente continuidad y planes de contingencia en A1-128; no se asigna un epígrafe A2 específico porque el anexo A2 actual no incluye continuidad/BIA como materia propia.','corregida'],
 [3028,[111],['II-8'],['OSI','encaminamiento','capa de red','capa 3'],[
  {url:x200,referencia:'ITU-T X.200 (07/1994), §7.5.4.1.2: incluye routing and relaying entre las funciones de la capa de red; §7.5.4.2 describe selección de ruta entre direcciones de red.'}
 ],'','El encaminamiento corresponde a la capa de red (capa 3) del modelo OSI: esta determina la ruta entre direcciones de red y posibilita el relay entre subredes. La capa de enlace entrega tramas en el enlace local; transporte presta servicio extremo a extremo a entidades de transporte.','corregida'],
 [3029,[108,111,120],['II-8','IV-10'],['X.25','DTE','DCE','capa física','LAPB','capa de paquetes'],[
  {url:x25,referencia:'ITU-T X.25 (10/1996), vigente: especifica la interfaz DTE-DCE para acceso dedicado a una red pública de datos con modo paquete y declara que describe las capas física, de enlace de datos y de paquetes del modelo OSI.'},
  {url:'https://www.itu.int/itudoc/itu-d/question/studygr2/q16-2-2.pdf',referencia:'UIT-D, Handbook on new technologies and new services, apartado 2.4.4: identifica X.25 capa 1 física, capa 2 LAPB y capa 3 de paquetes.'}
 ],'','Se precisa que X.25 normaliza la interfaz entre DTE y DCE para acceso a redes públicas de datos en modo paquete y que, en el modelo OSI, describe capa física, enlace y paquetes (esta última asociada a la capa de red). LAPB corresponde al enlace; no son capas de sesión, presentación o transporte.','corregida'],
 [3030,[113],['IV-10'],['VPLS','H-VPLS','U-PE','N-PE','pseudowire','MPLS'],[
  {url:vpls,referencia:'IETF RFC 4762, §§4 y 10: en VPLS básico las PEs se conectan en malla de pseudowires; la sección 10 introduce conectividad jerárquica hub-and-spoke para reducir señalización y replicación al escalar.'},
  {url:vplsFramework,referencia:'IETF RFC 4664, §2.3.1: define U-PE (User-facing PE) como el equipo más próximo al usuario y N-PE (Network-facing PE) como el más próximo al núcleo; las funciones de PE pueden distribuirse entre dispositivos.'}
 ],'','Se hace única la afirmación falsa mediante las definiciones normativas: en una arquitectura jerárquica U-PE es el PE del lado del usuario/acceso y N-PE el del lado del núcleo; no al revés. La VPLS básica emplea malla de pseudowires entre PEs, mientras H-VPLS introduce jerarquía y enlaces spoke para reducir el coste de esa malla.','corregida']
];
apply({numero:'542',fecha:'2026-10-29',records,edits:{
 3026:{texto:'¿Cuál de las siguientes afirmaciones es incorrecta sobre GPRS?',opciones:['GPRS es un servicio móvil de conmutación de paquetes.','GPRS puede interconectarse con redes de datos IP.','Cada envío de datos requiere establecer una llamada de circuitos y la facturación solo puede basarse en la duración de esa llamada.','La interfaz radio de GPRS permite transportar paquetes de datos.'],respuesta_correcta:2},
 3027:{texto:'Según el proceso de planificación de contingencia de NIST SP 800-34, ¿cuándo se realiza el análisis de impacto en el negocio (BIA)?',opciones:['No forma parte de la planificación de contingencia.','En una fase temprana, tras establecer la política y antes de definir estrategias de contingencia.','Al final, después de redactar y probar el plan.','No es necesario si ya existe un plan de recuperación.'],respuesta_correcta:1},
 3028:{texto:'En el modelo OSI, ¿a qué capa corresponden principalmente las funciones de encaminamiento entre redes?',opciones:['Capa de enlace de datos.','Capa de red.','Capa de transporte.','Capa de sesión.'],respuesta_correcta:1},
 3029:{texto:'¿Qué capas de protocolos describe la Recomendación UIT-T X.25 para la interfaz DTE-DCE en modo paquete?',opciones:['Física, enlace de datos y paquetes (correspondientes a las capas OSI 1, 2 y 3).','Física, enlace de datos y sesión.','Transporte, sesión y presentación.','Física, transporte y presentación.'],respuesta_correcta:0},
 3030:{texto:'En la terminología de las arquitecturas jerárquicas VPLS, señale la afirmación FALSA.',opciones:['En VPLS básico, las Provider Edge (PE) se interconectan mediante una malla de pseudowires.','H-VPLS introduce conectividad jerárquica hub-and-spoke para mejorar la escalabilidad.','U-PE (User-facing PE) se sitúa hacia el núcleo y N-PE (Network-facing PE) hacia el usuario.','La arquitectura puede distribuir las funciones de PE entre equipos distintos, con un equipo del lado del usuario y otro del lado del núcleo.'],respuesta_correcta:2}
}});
