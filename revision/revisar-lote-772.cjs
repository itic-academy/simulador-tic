const apply=require('./aplicar-lote.cjs');
const academyNetworks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ftp='https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ftp-verbose_1';
const x25='https://www.itu.int/rec/T-REC-X.25/en';
const iso7776='https://www.iso.org/standard/22172.html';
const ospf='https://www.rfc-editor.org/rfc/rfc2328.html';
const rmon='https://www.rfc-editor.org/rfc/rfc2819.html';
const snmp='https://www.rfc-editor.org/rfc/rfc3411.html';
const x700='https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.700-199209-I%21%21PDF-E&lang=e';
const x700status='https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.700';
const records=[
 [4181,['109'],['IV-13'],['FTP','cliente FTP','verbose','respuestas del servidor'],[
  {url:ftp,referencia:'Microsoft Learn, comando interactivo ftp verbose: activa/desactiva el modo detallado y, cuando está activo, muestra todas las respuestas a comandos FTP; la documentación actual incluye Windows 11 y Windows Server 2025.'},
  {url:academyNetworks,referencia:'ITIC Academy, bloque 42 «Redes», versión 2026.1, §9.6 (Internet y servicios), donde se estudia FTP en la capa de aplicación; la conducta concreta del cliente se contrasta con documentación del fabricante.'}
 ],'En el cliente FTP interactivo de Windows, `verbose` conmuta el modo detallado; activado, presenta todas las respuestas del servidor a los comandos. `dir` lista contenido remoto, `pwd` muestra el directorio remoto y `lcd` cambia el directorio local. `verbose` es un comando del cliente, no uno de los comandos FTP enviados al servidor.', 'Se delimita expresamente al cliente FTP interactivo de Windows para no confundir los comandos locales del programa con los comandos de protocolo definidos por FTP.', 'corregida'],
 [4182,['108','111'],['II-8','IV-10'],['LAPB','HDLC','X.25','capa de enlace','control de enlace'],[
  {url:x25,referencia:'ITU-T X.25 (10/1996), §2: especifica LAPB en el acceso DTE/DCE; el catálogo oficial muestra esta edición en vigor. §2.2 especifica la estructura de trama y §2.3/2.4 los procedimientos LAPB.'},
  {url:iso7776,referencia:'ISO/IEC 7776:1995, norma internacional confirmada y vigente: define la aplicación de estándares HDLC y los procedimientos de enlace DTE para LAPB/X.25; verifica compatibilidad con HDLC.'},
  {url:academyNetworks,referencia:'ITIC Academy, bloque 42 «Redes», versión 2026.1, §§1.2 y 7.1: modelos/capas, protocolos de enlace y tecnologías WAN heredadas; contextualiza X.25/LAPB.'}
 ],'LAPB es un procedimiento de capa de enlace de datos (capa 2) del acceso X.25. Sigue los principios y la estructura de tramas de HDLC y opera en modo balanceado; no es de aplicación ni de red y no implementa sin más todo el conjunto de procedimientos/opciones HDLC. ITU-T X.25 (1996) e ISO/IEC 7776:1995 continúan catalogadas en vigor.', 'Se conserva como correcta la afirmación sobre el formato/compatibilidad de tramas HDLC y se explica por qué no equivale a usar todos los comandos o procedimientos HDLC.', 'vigente'],
 [4183,['108'],['IV-10'],['encaminamiento','OSPF','estado de enlace','LSA','RIP','vector distancia'],[
  {url:ospf,referencia:'IETF RFC 2328, §§3.4, 13 y 16: OSPF intercambia y difunde link-state advertisements (LSA), mantiene una base de datos de estado de enlace y calcula rutas con SPF; no envía a cada router la tabla de encaminamiento completa ante cualquier cambio.'},
  {url:academyNetworks,referencia:'ITIC Academy, bloque 42 «Redes», versión 2026.1, §6.2 (vector distancia/estado de enlace) y §6.1 (encaminamiento); encaje con temas oficiales A1-108/A2-IV-10.'}
 ],'OSPF es de estado de enlace: los routers originan LSA, las difunden dentro del ámbito correspondiente, sincronizan la base de datos de estado de enlace y calculan rutas mediante SPF. No envían su tabla de encaminamiento completa a todos los routers cada vez que cambia una entrada. RIP, en cambio, es un protocolo de vector distancia que intercambia información de rutas con vecinos. La velocidad de convergencia y la propensión a bucles dependen de topología, temporizadores y mecanismos, por lo que no se convierten aquí en una regla absoluta.', 'Se convierte en una pregunta directa sobre OSPF y se reemplaza el enunciado erróneo (que confundía flooding de LSA con anuncios de tablas completas) por distractores inequívocos.', 'corregida'],
 [4184,['118'],['IV-9'],['RMON','SNMP','sonda','agente','monitorización de red'],[
  {url:rmon,referencia:'IETF RFC 2819, §2: define la MIB RMON como interfaz entre un agente RMON y una aplicación de gestión; denomina a los monitores remotos sondas y describe su comunicación con la estación de gestión.'},
  {url:snmp,referencia:'IETF RFC 3411, §1.2: define entidades agente/gestor SNMP y el protocolo de gestión que intercambia información entre ellas.'},
  {url:academyNetworks,referencia:'ITIC Academy, bloque 42 «Redes», versión 2026.1, §5.3 (SNMP) y §5.2 (monitorización); correspondencia A1-118/A2-IV-9.'}
 ],'Una sonda RMON suele ser el dispositivo que aloja el agente RMON; no son necesariamente dos componentes separados que intercambian mensajes entre sí. Reformulado sin esa confusión, la estación/aplicación de gestión consulta y configura los objetos de la sonda mediante SNMP (incluidas las notificaciones que admita el agente).', 'La redacción original confundía la sonda/monitor con el agente que implementa la MIB. Se pregunta ahora por la interfaz real estación de gestión–agente RMON, cuyo protocolo es SNMP.', 'corregida'],
 [4185,['118'],['IV-9'],['ISO/IEC 7498-4','ITU-T X.700','FCAPS','gestión de red','áreas funcionales'],[
  {url:x700,referencia:'ITU-T X.700 (09/1992), §5.5: enumera las cinco áreas funcionales de gestión OSI: fallos, contabilidad, configuración, calidad de funcionamiento/rendimiento y seguridad.'},
  {url:x700status,referencia:'Catálogo oficial ITU-T: X.700 (09/1992) figura en vigor y como idéntica a ISO/IEC 7498-4:1989.'},
  {url:academyNetworks,referencia:'ITIC Academy, bloque 42 «Redes», versión 2026.1, §5 (administración, monitorización y gestión SNMP): encaje curricular con gestión de redes A1-118/A2-IV-9; la lista taxonómica se verifica directamente en X.700.'}
 ],'ITU-T X.700 e ISO/IEC 7498-4 agrupan la gestión OSI en cinco áreas: gestión de fallos, de contabilidad, de configuración, de calidad de funcionamiento (rendimiento) y de seguridad. La Recomendación X.700 consta como vigente en el catálogo ITU-T; “gestión de la demanda” y “monitorización” no sustituyen nombres de esas áreas.', 'Se conserva la opción que enumera las cinco áreas funcionales normalizadas y se amplía el comentario con la equivalencia terminológica performance/calidad de funcionamiento.', 'vigente']
];
const edits={
 4181:{texto:'En el cliente FTP interactivo de Windows, ¿qué comando muestra las respuestas del servidor a los comandos FTP?',opciones:['dir','pwd','verbose','lcd'],respuesta_correcta:2},
 4183:{texto:'¿Qué afirmación sobre OSPF es incorrecta?',opciones:['Cada router OSPF envía su tabla de encaminamiento completa a todos los routers cada vez que cambia una ruta.','OSPF difunde anuncios de estado de enlace (LSA) dentro del ámbito correspondiente.','Los routers OSPF mantienen una base de datos de estado de enlace y calculan rutas mediante SPF.','OSPF es un protocolo de estado de enlace; RIP es un ejemplo de protocolo de vector distancia.'],respuesta_correcta:0},
 4184:{texto:'¿Qué protocolo de gestión utiliza una estación para consultar y configurar los objetos RMON de una sonda que implementa un agente RMON?',opciones:['SNMP','LAPB','CMIP','Data Streams'],respuesta_correcta:0}
};
apply({numero:'772',fecha:'2026-11-09',records,edits});
