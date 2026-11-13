const apply = require('./aplicar-lote.cjs');
const academy42='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy43='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academy26='https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academy46='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
apply({
 numero:'1190',fecha:'2026-11-13',
 records:[
  [6271,['109'],['IV-13'],['DNS','UDP','TCP','RFC 7766'],[
   {url:'https://www.rfc-editor.org/rfc/rfc1035.html',referencia:'RFC 1035, especificación DNS: define su transporte sobre UDP y TCP.'},
   {url:'https://www.rfc-editor.org/rfc/rfc7766.html',referencia:'RFC 7766, actualizado operativamente por RFC 9210: todos los resolvedores, servidores autoritativos y recursivos deben soportar transporte DNS sobre UDP y TCP; DNS suele usar UDP, pero TCP es requerido para la interoperabilidad.'},
   {url:'https://www.rfc-editor.org/rfc/rfc1350.html',referencia:'RFC 1350: TFTP utiliza UDP.'},
   {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 109: Internet y servicios básicos.'},
   {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.13: arquitectura y servicios de Internet.'}
  ],null,'Se confirma DNS. Se actualiza el fundamento: DNS soporta UDP y TCP; RFC 7766 hizo TCP un requisito para implementaciones completas, no solo una alternativa excepcional. TFTP utiliza UDP y FTP utiliza TCP.','corregida'],
  [6272,['115'],['II-8'],['IPv4','0.0.0.0','dirección no especificada','DHCP'],[
   {url:'https://www.rfc-editor.org/rfc/rfc1122.html',referencia:'RFC 1122 §3.2.1.3: 0.0.0.0 identifica “este host en esta red” y puede usarse como dirección de origen durante la inicialización mientras el host aprende su propia dirección.'},
   {url:'https://www.rfc-editor.org/rfc/rfc2131.html',referencia:'RFC 2131 §4.1: antes de obtener dirección, los mensajes DHCP de cliente llevan dirección IP de origen 0.0.0.0.'},
   {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 115: arquitectura IP y direccionamiento IPv4.'},
   {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema II.8: modelo TCP/IP, protocolos y direccionamiento.'}
  ],null,'Se mantiene la opción C pero se limita al uso de 0.0.0.0 como origen no especificado durante la inicialización/configuración (por ejemplo, DHCP). No es una dirección de difusión ni una dirección de loopback; el enunciado original era demasiado general.','corregida'],
  [6273,['113'],['IV-10'],['IEEE 802.17','RPR','clases de servicio','legado'],[
   {url:'https://standards.ieee.org/ieee/802.17/3155/',referencia:'IEEE SA, IEEE 802.17-2004: describe el método RPR; la página indica que fue sustituido por IEEE 802.17-2011 y que este último fue retirado de estado activo.'},
   {url:'https://ieee802.org/17/email/pdf00069.pdf',referencia:'Borrador de trabajo IPoRPR del grupo IEEE 802.17, §§1.2.3 y 1.2.3.1–1.2.3.3: A ofrece CIR/retardo bajo, B CIR y límites de retardo/jitter para tráfico contratado y C es best-effort.'},
   {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 113: tecnologías de redes de transporte y agregación.'},
   {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.10: redes de área extensa.'}
  ],null,'Reactivo histórico sobre RPR: solo es correcta B, acotada al componente contratado de clase B, con límites de latencia y jitter; el exceso puede ser best-effort. La clase A se orienta a retardo/jitter bajos y la C es best-effort. Se clasifica como histórica porque IEEE retiró del estado activo la revisión 802.17-2011; se conserva el contenido por su presencia en el banco, no como tecnología vigente.','historica'],
  [6274,['119'],['IV-6'],['balanceo de carga','AWS Application Load Balancer','round robin','least outstanding requests'],[
   {url:'https://docs.aws.amazon.com/elasticloadbalancing/latest/application/edit-target-group-attributes.html',referencia:'Documentación oficial vigente de AWS Application Load Balancer: los algoritmos configurables son round robin, least outstanding requests y weighted random.'},
   {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 119: arquitectura por capas, servidores de aplicaciones y granjas de servidores.'},
   {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.6: alta disponibilidad y balanceo de carga.'}
  ],null,'La lista original no indicaba fabricante ni plataforma y los algoritmos dependen del producto: “least time” existe en determinadas ediciones de NGINX. Se fija el contexto en AWS Application Load Balancer; en su documentación actual los tres algoritmos son round robin, least outstanding requests y weighted random, por lo que “least weighted time” no está disponible en ese producto.','corregida'],
  [6275,['123'],['IV-15'],['HSDPA','UMTS','14,4 Mbit/s','histórica'],[
   {url:'https://www.3gpp.org/ftp/pcg/pcg_15/docs/pdf/PCG15_22.pdf',referencia:'Documento informativo de 3GPP sobre HSDPA: da como pico teórico por usuario 14,4 Mbit/s para HSDPA.'},
   {url:'https://portal.3gpp.org/Specifications.aspx?q=1&number=25.306',referencia:'Portal oficial 3GPP, TS 25.306: especificación de capacidades de acceso radio de UE, incluidas categorías HS-DSCH/HSDPA.'},
   {url:a1,referencia:'Convocatoria GSI A1 2025, anexo I, tema 123: generaciones de tecnologías móviles.'},
   {url:a2,referencia:'Convocatoria GSI A2 2025, anexo IX, tema IV.15: sistemas de comunicaciones móviles y sus generaciones.'}
  ],null,'Respuesta 14,4 Mbit/s para el pico teórico HSDPA clásico de un portador, valor de referencia divulgado por 3GPP. Se precisa que no es una cota general de evoluciones HSPA+ posteriores o combinaciones multicarrier. Tecnología heredada; se conserva la pregunta en su contexto histórico.','historica']
 ],
 edits:{
  6271:{texto:'¿Qué protocolo de resolución de nombres debe soportar tanto consultas UDP como TCP según los requisitos actuales de DNS?',opciones:['FTP.','TFTP.','DNS.','Ninguno de los anteriores.'],respuesta_correcta:2},
  6272:{texto:'Durante la configuración inicial de IPv4, antes de obtener una dirección asignada, ¿qué dirección puede usar el host como dirección IP de origen?',opciones:['La dirección de difusión limitada 255.255.255.255.','La dirección de difusión dirigida de la subred.','0.0.0.0, como dirección de origen no especificada.','127.0.0.1, la dirección de loopback.'],respuesta_correcta:2},
  6273:{texto:'En las clases de servicio del estándar IEEE 802.17 RPR, ¿qué afirmación es correcta?',opciones:['La clase A es best-effort y no ofrece límites de retardo.', 'La clase B proporciona garantías y límites de retardo/jitter para el tráfico contratado; el exceso puede cursarse como best-effort.', 'La clase C garantiza tráfico de baja latencia y bajo jitter.', 'Todas las afirmaciones anteriores son correctas.'],respuesta_correcta:1},
  6274:{texto:'En AWS Application Load Balancer, ¿cuál NO es uno de los algoritmos de distribución de solicitudes documentados actualmente?',opciones:['Round robin.','Least outstanding requests.','Weighted random.','Least weighted time.'],respuesta_correcta:3},
  6275:{texto:'Para HSDPA UMTS clásico de un portador, ¿cuál es el pico teórico de velocidad descendente de referencia divulgado por 3GPP?',opciones:['2,5 Mbit/s.','14,4 Mbit/s.','3,5 Mbit/s.','1 Mbit/s.'],respuesta_correcta:1}
 }
});
