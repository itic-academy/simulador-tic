const apply=require('./aplicar-lote.cjs');
const ms='https://learn.microsoft.com/en-us/office/client-developer/access/desktop-database-reference/recordset-object-ado';
const angular='https://angular.dev/docs';
const mdn='https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction';
const jvms='https://docs.oracle.com/en/java/javase/26/docs/specs/jvms26.pdf';
const springAop='https://docs.spring.io/spring/reference/core/aop.html';
const springOrm='https://docs.spring.io/spring-framework/reference/data-access/orm/introduction.html';
const springMvc='https://docs.spring.io/spring-framework/reference/web/webmvc.html';
const records=[
 [2951,[64],['II-5'],['ADO','Recordset','bases de datos','acceso a datos'],[
  {url:ms,referencia:'Microsoft Learn, Recordset object (ADO): representa el conjunto de registros de una tabla base o el resultado de un comando ejecutado; contiene filas y campos y mantiene un registro actual.'}
 ],'','Se precisa el término de ADO: un Recordset no es sólo una referencia al resultado, sino el objeto que representa el conjunto completo de registros devuelto por una tabla o comando/consulta y mantiene una fila actual. Se conserva la alternativa correspondiente, que se amplía para expresar la definición técnica. Cotejo curricular: ITIC Academy, Bloque 30, versión 2026.1, tecnologías de bases de datos y acceso a datos; A1-64/A2-II-5.','corregida'],
 [2952,[65],['II-12'],['Angular','frameworks','SPA','desarrollo web'],[
  {url:angular,referencia:'Angular, documentación oficial, What is Angular?: framework web mantenido por un equipo dedicado de Google.'}
 ],'','Se confirma Angular como opción correcta porque la documentación oficial lo describe como framework web mantenido por un equipo de Google. La pregunta se formula sobre mantenimiento oficial, no sobre el origen histórico de AngularJS ni la variedad de frameworks disponibles. Cotejo curricular: ITIC Academy, Bloque 30, §2.5 frameworks front-end; A1-65/A2-II-12.','vigente'],
 [2953,[65,77],['II-9','II-12'],['JavaScript','cliente-servidor','scripts','navegador'],[
  {url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction',referencia:'MDN, Introduction to JavaScript: JavaScript admite entornos cliente (navegador) y servidor (por ejemplo, Node.js).'},
  {url:mdn,referencia:'MDN, Introduction to the server side: diferencia la ejecución de código cliente en navegador y código servidor; JavaScript puede ejecutarse en ambos lados.'}
 ],'','Se corrige una generalización obsoleta: JavaScript no se ejecuta sólo en el servidor ni sólo en el navegador. Se contextualiza la pregunta en desarrollo web y se reemplazan opciones absolutas por afirmaciones comprobables: puede ir embebido o externo; el cliente lo descarga y lo ejecuta en navegador; también puede ejecutarse del lado servidor con Node.js. Es falsa la afirmación de que todo JavaScript se ejecuta exclusivamente en servidor y nunca en navegador. Cotejo curricular: ITIC Academy, Bloque 30, §§2.2–2.5 sobre JavaScript, DOM y frameworks, y arquitectura web; A1-65/A1-77/A2-II-9/A2-II-12.','corregida'],
 [2954,[67],['II-3','III-10'],['Java','JVM','bytecode','compilación'],[
  {url:jvms,referencia:'Oracle, Java Virtual Machine Specification, edición 26: define el formato class y las instrucciones bytecode interpretadas/ejecutadas por la JVM.'}
 ],'','Se confirma bytecode. La JVM ejecuta instrucciones del conjunto de instrucciones de la máquina virtual almacenadas en archivos class; «class» designa el formato de archivo, jar un archivo de distribución y applet una tecnología web Java histórica. Cotejo curricular: ITIC Academy, Bloque 30, contenidos JVM, bytecode, JDK y javac; A1-67/A2-II-3/A2-III-10.','vigente'],
 [2955,[65,67],['II-12','III-10'],['Spring','AOP','Hibernate','Spring MVC','Java'],[
  {url:springAop,referencia:'Spring Framework Reference, Aspect Oriented Programming with Spring: AOP es uno de los componentes clave del framework.'},
  {url:springOrm,referencia:'Spring Framework Reference, Introduction to ORM with Spring: documenta integración con JPA y soporte nativo de Hibernate para recursos, DAO y transacciones.'},
  {url:springMvc,referencia:'Spring Framework Reference, Spring Web MVC: Spring MVC es el framework web propio de Spring, construido sobre Servlet API e incluido en Spring Framework; no es Struts.'}
 ],'','Se mantiene como falsa la dependencia con Struts, pero se delimita con precisión: Spring MVC es el framework web MVC propio de Spring, basado en Servlet API; no se construye sobre Struts ni lo necesita. Se verifican además las otras afirmaciones: Spring incluye soporte AOP e integración documentada con Hibernate/JPA. Cotejo curricular: ITIC Academy, Bloque 30, §§6.3–6.4 Spring MVC y persistencia/seguridad; A1-65/A1-67/A2-II-12/A2-III-10.','corregida']
];
apply({numero:'527',fecha:'2026-10-29',records,edits:{
 2951:{texto:'En ADO, ¿qué representa un objeto Recordset?',opciones:['Un conjunto de variables de un lenguaje orientado a objetos.','El conjunto de registros de una tabla base o del resultado de un comando ejecutado, con un registro actual.','La unidad básica para acceder a volúmenes de disco montados por NFS.','Ninguna de las anteriores.'],respuesta_correcta:1},
 2952:{texto:'Según la documentación oficial actual, ¿qué framework web está mantenido por un equipo dedicado de Google?',respuesta_correcta:2},
 2953:{texto:'En el desarrollo web, ¿cuál de estas afirmaciones sobre JavaScript es falsa?',opciones:['Puede incorporarse en una página HTML o cargarse desde un archivo externo.','El código JavaScript del lado cliente puede descargarse y ejecutarse en el navegador.','JavaScript también puede ejecutarse en el servidor, por ejemplo con Node.js.','Todo código JavaScript se ejecuta exclusivamente en el servidor y nunca en el navegador.'],respuesta_correcta:3},
 2954:{texto:'El código intermedio formado por instrucciones de la máquina virtual Java y ejecutable por una JVM se denomina:',respuesta_correcta:0},
 2955:{texto:'Indique la afirmación falsa sobre Spring Framework:',opciones:['Incluye soporte para programación orientada a aspectos (AOP).','Puede integrarse con tecnologías de persistencia como Hibernate y JPA.','Spring MVC es un framework propio de Spring, pero necesita Apache Struts para gestionar las peticiones web.'],respuesta_correcta:2}
}});
