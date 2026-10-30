const apply=require('./aplicar-lote.cjs');
const records=[
 [3266,[96],['III-7'],['pruebas de carga','pruebas de rendimiento','Apache JMeter','LoadRunner','The Grinder','Apache Turbine'],[
  {url:'https://jmeter.apache.org/',referencia:'Apache JMeter official project: load testing and performance measurement tool for web applications and services.'},
  {url:'https://www.opentext.com/products/professional-performance-engineering',referencia:'OpenText Professional Performance Engineering (LoadRunner Professional): product page identifies the LoadRunner product line as performance-testing software.'},
  {url:'https://grinder.sourceforge.net/index.html',referencia:'The Grinder official project: Java load-testing framework for distributed testing.'},
  {url:'https://turbine.apache.org/',referencia:'Apache Turbine official project: servlet-based Java web application framework, not a load-testing tool.'}
 ],'Apache JMeter; OpenText LoadRunner Professional; The Grinder; Apache Turbine project documentation','JMeter, LoadRunner y Grinder son productos/marcos de pruebas de carga o rendimiento. Apache Turbine se describe como framework de aplicaciones web Java basado en servlets, no como generador de carga. Se aclara la denominación de las herramientas y se conserva la clave Turbine (índice 3). A1-96; A2-III-7.','corregida'],
 [3267,[95,101],['III-8'],['MÉTRICA v3','mantenimiento correctivo','mantenimiento evolutivo','mantenimiento adaptativo','mantenimiento perfectivo'],[
  {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf',referencia:'Portal de Administración Electrónica, MÉTRICA v3, Mantenimiento de Sistemas de Información: el alcance descrito incluye mantenimiento correctivo y evolutivo; adaptativo y perfectivo se excluyen por requerir actividades/perfiles diferentes.'}
 ],'MÉTRICA v3, Mantenimiento de Sistemas de Información, alcance del proceso','La opción original sobre el ámbito del mantenimiento correctivo y evolutivo (índice 2) también expresaba una respuesta cierta, igual que la opción 3, por lo que el ítem tenía dos claves defendibles. Se reemplaza el distractor del índice 2 por una afirmación falsa y distinta: MÉTRICA deja fuera el correctivo pero incluye el evolutivo. La clave 3 se conserva. A1-95/A1-101; A2-III-8.','corregida'],
 [3268,[100,102],['IV-4'],['Git','control de versiones distribuido','git pull','git fetch','integración de cambios'],[
  {url:'https://git-scm.com/docs/git-pull',referencia:'Git SCM, git-pull documentation: first fetches remote changes and then integrates the selected upstream into the current branch; integration may be merge or rebase according to options/configuration.'}
 ],'Git SCM, git-pull documentation (versión actual consultada)','La formulación original trataba «pull» de forma genérica y confundía obtener, sustituir e integrar. Se concreta al comando Git `pull`: primero ejecuta `fetch` y después integra los cambios del upstream en la rama actual; la estrategia concreta depende de las opciones y configuración (merge, fast-forward o rebase). La opción correcta reformulada es el índice 1. `git fetch` por sí solo no realiza esa integración. A1-100/A1-102; A2-IV-4.','corregida'],
 [3269,[65],['III-12'],['Java Portlet Specification','JSR 168','JSR 286','JSR 362','Portlet 3.0'],[
  {url:'https://jcp.org/aboutJava/communityprocess/final/jsr362/index.html',referencia:'Java Community Process, final release page for JSR 362: Portlet Specification 3.0.'},
  {url:'https://jcp.org/en/jsr/detail?id=362',referencia:'JCP JSR 362 detail: final status and explicit description as an update to JSR 286 Portlet Specification 2.0.'},
  {url:'https://jcp.org/en/jsr/detail?id=283',referencia:'JCP JSR 283 is Content Repository for Java Technology API Version 2.0, not a Portlet Specification.'}
 ],'JCP, JSR 362 final release and JSR detail pages','La pregunta original señalaba JSR 286, pero existe una especificación posterior: JSR 362, Portlet 3.0. Además, JSR 283 es Content Repository for Java, no una especificación de portlets. Se reemplazan las opciones por los identificadores y versiones inequívocos y se actualiza la clave al índice 3 (JSR 362). A1-65; A2-III-12.','corregida'],
 [3270,[108,115],['II-8','IV-10'],['protocolos de encaminamiento','OSPF','RIP','IS-IS','SMTP'],[
  {url:'https://www.rfc-editor.org/rfc/rfc2328.html',referencia:'IETF RFC 2328: OSPF Version 2, un protocolo IGP de encaminamiento IP.'},
  {url:'https://www.rfc-editor.org/rfc/rfc2453.html',referencia:'IETF RFC 2453: RIP Version 2, protocolo de información de encaminamiento.'},
  {url:'https://www.rfc-editor.org/rfc/rfc1195.html',referencia:'IETF RFC 1195: uso de IS-IS como protocolo de encaminamiento integrado para TCP/IP e ISO.'},
  {url:'https://www.rfc-editor.org/rfc/rfc5321.html',referencia:'IETF RFC 5321: SMTP (Simple Mail Transfer Protocol), protocolo de transferencia de correo, no de encaminamiento IP.'}
 ],'IETF RFC 2328, 2453, 1195 y 5321','OSPF, RIP e IS-IS son protocolos de encaminamiento. La opción original «ORP» no era un distractor robusto: esas siglas se utilizan en literatura para propuestas especializadas de encaminamiento. Se sustituye por SMTP, cuyo cometido normalizado es transferir correo, y se mantiene como respuesta correcta el índice 2. A1-108/A1-115; A2-II-8/A2-IV-10.','corregida']
];
apply({numero:'590',fecha:'2026-10-30',records,edits:{
 3266:{texto:'¿Cuál de las siguientes herramientas NO se emplea para realizar pruebas de carga o rendimiento?',opciones:['Apache JMeter','OpenText LoadRunner Professional','The Grinder','Apache Turbine'],respuesta_correcta:3},
 3267:{opcion:[2,'El mantenimiento correctivo queda fuera del ámbito de MÉTRICA v3, pero el evolutivo se incluye.']},
 3268:{texto:'Según la documentación de Git, ¿qué hace `git pull` con la rama de seguimiento del repositorio remoto?',opciones:['Envía los commits locales al repositorio remoto.','Obtiene los cambios remotos y los integra en la rama actual según las opciones/configuración; la integración puede ser mediante merge o rebase.','Obtiene las referencias remotas, pero no integra sus cambios en la rama actual.','Reemplaza la rama remota por el contenido de la rama local.'],respuesta_correcta:1},
 3269:{texto:'¿Cuál es la especificación de portlets más reciente publicada como JSR por el Java Community Process?',opciones:['JSR 168 (Portlet 1.0).','JSR 286 (Portlet 2.0).','JSR 283 (Content Repository API 2.0).','JSR 362 (Portlet 3.0).'],respuesta_correcta:3},
 3270:{opcion:[2,'SMTP']}
}});
