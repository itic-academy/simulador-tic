const apply=require('./aplicar-lote.cjs');
const dotnet='https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures';
const x711='https://www.itu.int/ITU-T/recommendations/rec.aspx?rec=4311';
const x720='https://www.itu.int/rec/T-REC-X.720-199201-I/en';
const rfc1157='https://www.rfc-editor.org/rfc/rfc1157.html';
const rfc3411='https://www.rfc-editor.org/rfc/rfc3411.html';
const rfc3418='https://www.rfc-editor.org/rfc/rfc3418.html';
const rfc5321='https://www.rfc-editor.org/rfc/rfc5321.html';
const rfc5322='https://www.rfc-editor.org/rfc/rfc5322.html';
const dnsIana='https://www.iana.org/assignments/dns-parameters';
const rfc7208='https://www.rfc-editor.org/rfc/rfc7208.html';
const records=[
 [2996,[119],['II-6'],['granja de servidores','lógica de negocio','arquitectura multicapa','escalabilidad horizontal','servidores de aplicaciones'],[
  {url:dotnet,referencia:'Microsoft Learn, Common web application architectures: explica que una aplicación web puede escalar horizontalmente mediante múltiples instancias detrás de un balanceador, aunque la aplicación desplegada sea monolítica.'}
 ],'','Se elimina la afirmación excesiva de que .NET, Java EE o el software libre, por sí mismos, garantizan la distribución. Se pregunta por la posibilidad arquitectónica: puede desplegarse lógica de negocio en múltiples instancias de una capa de aplicación en una granja, normalmente con balanceo y atendiendo a estado/sesiones y datos compartidos. La tecnología concreta no es requisito único.','corregida'],
 [2997,[118],['IV-9'],['gestión de red','OSI','CMIP','SNMP','MIB','CMIS'],[
  {url:x711,referencia:'UIT-T X.711 (10/1997), estándar internacional de OSI: especifica CMIP para intercambiar información de gestión entre entidades OSI.'},
  {url:x720,referencia:'UIT-T X.720, recomendación vigente para el modelo de información de gestión OSI; junto con X.721/X.722 define la estructura y los objetos gestionados del marco OSI.'},
  {url:rfc3411,referencia:'IETF RFC 3411, arquitectura del marco de gestión SNMP para Internet; especifica sus entidades, aplicaciones y el protocolo para intercambiar información de gestión.'},
  {url:rfc3418,referencia:'IETF RFC 3418, MIB para SNMP: define los objetos de gestión del marco SNMP de Internet.'},
  {url:rfc1157,referencia:'IETF RFC 1157, especificación histórica de SNMPv1 y la MIB de Internet; se incluye para documentar el marco clásico, no como referencia actual principal.'}
 ],'','Se precisa que CMIP es el protocolo de gestión asociado al marco OSI/ISO, mientras SNMP pertenece al marco Internet/TCP-IP. Ambos marcos modelan información de gestión mediante bases MIB, aunque no comparten sin más las mismas definiciones, sintaxis o modelo de información. Se conserva “MIB” como concepto común, no como una única base interoperable.','corregida'],
 [2998,[109],['IV-13'],['DNS','registros de recursos','RR type','MX','SOA','PTR','AAAA','IANA'],[
  {url:dnsIana,referencia:'IANA, registro oficial DNS Parameters / DNS Resource Record (RR) TYPEs: enumera MX (15), SOA (6), PTR (12) y AAAA (28); no existe un tipo estándar denominado AAA.'}
 ],'','Se aclara que se pregunta por el nombre literal del tipo de registro DNS. MX, SOA y PTR constan en el registro de IANA; el tipo IPv6 se denomina AAAA, no “AAA”. No se confunde un nombre informal de producto ni un campo de datos con un tipo RR registrado.','corregida'],
 [2999,[109],['IV-13'],['SMTP','STD 10','RFC 5321','RFC 821','RFC 5322','formato de mensaje'],[
  {url:rfc5321,referencia:'IETF RFC 5321, §2 y referencias normativas: especifica el protocolo SMTP actual y remite a RFC 821 como STD 10; §2.1 describe la transferencia de correo entre clientes y servidores SMTP.'},
  {url:rfc5322,referencia:'IETF RFC 5322: especifica el formato de los mensajes de Internet; deriva históricamente de RFC 822, asociado a STD 11, y no es SMTP.'}
 ],'','Se corrigen las atribuciones mezcladas entre SMTP, formato del mensaje y DNS. SMTP es STD 10 (documento original RFC 821, actualizado por RFC 5321); RFC 5322 especifica el formato del mensaje, históricamente RFC 822/STD 11. La resolución DNS de MX se utiliza para localizar servidores de correo, pero no convierte DNS en la especificación SMTP.','corregida'],
 [3000,[109,125],['IV-13','IV-12'],['SPF','RFC 7208','ip4','CIDR','softfail','DNS','correo electrónico'],[
  {url:rfc7208,referencia:'IETF RFC 7208, SPF: define la sintaxis/evaluación de mecanismos ip4 y all, y precisa que el calificador ~ produce softfail; registros sintácticamente inválidos producen permerror antes de evaluar mecanismos.'}
 ],'','El registro original tiene sintaxis SPF inválida (entre otros, “:mx.jgpa.es” no es un mecanismo completo y “include:” carece de dominio), por lo que su resultado sería permerror y no permitiría deducir la respuesta propuesta. Se reemplaza por la política válida `v=spf1 ip4:192.168.16.0/21 ~all` y se pregunta por una IP que no coincide con ese prefijo: recibe softfail. Softfail indica que la política no la autoriza explícitamente, aunque no equivale a la directiva dura `-all`.','corregida']
];
apply({numero:'536',fecha:'2026-10-29',records,edits:{
 2996:{texto:'En una arquitectura multicapa, ¿puede desplegarse la lógica de negocio de una aplicación en varias instancias de una granja de servidores?',opciones:['Sí; la capa de aplicación puede escalar horizontalmente mediante varias instancias, con balanceo y una gestión coherente del estado y los datos.','No; la lógica de negocio debe ejecutarse en un único servidor.','Solo es posible si se usa .NET; Java y otros entornos no permiten este despliegue.','Solo es posible con software libre; las plataformas comerciales no admiten granjas.'],respuesta_correcta:0},
 2997:{texto:'Sobre los marcos y protocolos de gestión de red OSI e Internet, señale la afirmación falsa:',opciones:['CMIP es un protocolo de gestión asociado al marco OSI/ISO.','SNMP es un protocolo de gestión del marco Internet/TCP-IP.','Ambos marcos definen información de gestión mediante MIB de sus respectivos modelos.','SNMP es el protocolo de gestión normalizado por el marco OSI/ISO.'],respuesta_correcta:3},
 2998:{texto:'Según el registro de tipos de recursos DNS de IANA, ¿cuál de estos nombres no identifica un tipo de registro estándar?',opciones:['MX','SOA','PTR','AAA'],respuesta_correcta:3},
 2999:{texto:'¿Qué número STD identifica el protocolo SMTP? Considérese su especificación original RFC 821, actualizada por RFC 5321.',opciones:['STD 11, asociado históricamente a RFC 822 para el formato del mensaje.','STD 10, asociado originalmente a RFC 821 para SMTP.','STD 12, asociado a la especificación de DNS/MX.'],respuesta_correcta:1},
 3000:{texto:'Un dominio publica el registro SPF válido `v=spf1 ip4:192.168.16.0/21 ~all`. ¿Qué dirección IPv4 no coincide con el mecanismo ip4 y obtiene el resultado softfail por `~all`?',opciones:['192.168.22.0.','192.168.25.0.','192.168.20.254.','192.168.23.255.'],respuesta_correcta:1}
}});
