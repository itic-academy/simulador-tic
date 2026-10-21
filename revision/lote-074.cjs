const records=[
[686,[67],['III-10'],['Log4j','niveles-log','Java'],'https://logging.apache.org/log4j/2.x/manual/customloglevels.html','Apache Log4j 2, niveles estándar y prioridad','Se conserva A. En Log4j 2 los niveles incorporados se ordenan por prioridad numérica FATAL, ERROR, WARN, INFO, DEBUG y TRACE; TRACE es el más detallado y FATAL el menos detallado. La pregunta usa «detalle» como el sentido inverso a gravedad/prioridad; la explicación lo explicita.'],
[687,[67],['III-10'],['EJB','J2EE','histórica'],'https://docs.oracle.com/javaee/7/tutorial/overview004.htm','Oracle Java EE 7 Tutorial, niveles de una aplicación empresarial: EJB en el nivel de negocio','Se mantiene A con contexto histórico. En la arquitectura J2EE de tres niveles, los EJB se ejecutan en el nivel medio/de negocio en el servidor o contenedor EJB de la plataforma; el EIS/base de datos es el nivel de datos. La terminología J2EE es antigua y evolucionó a Java EE y Jakarta EE.'],
[688,[67],['III-10'],['Servlet','J2EE','histórica'],'https://docs.oracle.com/javaee/7/tutorial/overview004.htm','Oracle Java EE 7 Tutorial, niveles de una aplicación empresarial: servlet en el nivel web','Se mantiene D con contexto histórico. Un servlet es un componente web del lado servidor que procesa solicitudes y genera respuestas en el nivel web, en un contenedor web; no se ejecuta en el cliente ni es por sí mismo un componente de negocio EJB. La pregunta conserva la nomenclatura histórica J2EE.'],
[689,[65],['III-12'],['Apache-Struts','MVC','Java-framework'],'https://struts.apache.org/','Apache Struts, documentación oficial del proyecto y versiones mantenidas','Se mantiene B. Apache Struts es un framework MVC para aplicaciones Java; «Struts 2» fue la denominación de una generación anterior, mientras que el proyecto activo publica hoy versiones 6 y 7. No se basa en JSF ni es un patrón de diseño.'],
[690,[68],['III-12'],['PHP','OPcache','Memcached','caché-bytecode','histórica'],'https://www.php.net/manual/en/book.opcache.php','PHP Manual, OPcache; PHP Manual, WinCache; documentación oficial de Memcached','Se mantiene C y se corrige la errata «corno». Se delimita la pregunta a las generaciones citadas: OPcache y APC (histórico) son cachés de bytecode de PHP; WinCache incluyó opcode cache en versiones anteriores a 2.0.0, donde se retiró. Memcached es un almacén distribuido genérico de objetos/valores en memoria, no una extensión PHP de opcode caching. Se etiqueta histórica por las diferencias de versión y soporte entre esas opciones.','historica']
];
const edits={
686:{texto:'En Log4j 2, ¿cuál es el orden de niveles desde el de menor detalle hasta el de mayor detalle?',opciones:['FATAL, ERROR, WARN, INFO, DEBUG y TRACE.','ERROR, FATAL, INFO, WARN, DEBUG y TRACE.','ERROR, FATAL, INFO, WARN, TRACE y DEBUG.','FATAL, ERROR, WARN, INFO, TRACE y DEBUG.']},
687:{texto:'En la arquitectura J2EE clásica de tres niveles, ¿en qué nivel se ejecutan normalmente los componentes Enterprise JavaBeans (EJB)?',opciones:['En el nivel medio o de negocio, dentro del servidor/contenedor EJB de la plataforma.','En el cliente, dentro del navegador web.','En el sistema de información empresarial (EIS), como si fueran parte del servidor de base de datos.','En el equipo cliente, fuera del servidor de aplicaciones.']},
688:{texto:'En la arquitectura J2EE clásica, ¿qué papel y ubicación corresponden normalmente a los Java Servlets?',opciones:['Componentes de interfaz que se ejecutan dentro del navegador del cliente.','Componentes de negocio que se ejecutan en el servidor EIS.','Componentes de persistencia que se ejecutan dentro del gestor de base de datos.','Componentes web del lado servidor, ejecutados en un contenedor web.']},
689:{texto:'Respecto de Apache Struts 2, ¿cuál de estas afirmaciones describe correctamente el framework?',opciones:['Es un framework basado en JavaServer Faces (JSF), que sustituye al patrón MVC.','Es un framework MVC para desarrollar aplicaciones web Java.','Es un patrón de diseño para plataformas Java EE, no un framework.']},
690:{texto:'¿Cuál de estas opciones es un sistema genérico de caché distribuida de objetos/valores en memoria, y no una extensión de PHP para caché de bytecode?',opciones:['OPcache, que almacena bytecode PHP precompilado.','WinCache en las versiones que incluían opcode cache (antes de 2.0.0).','Memcached, un almacén distribuido genérico de valores en memoria.','Alternative PHP Cache (APC), que históricamente incluyó caché de opcode.']}
};
require('./aplicar-lote.cjs')({numero:'074',fecha:'2026-10-21',records,edits});
// La pregunta 690 reúne tres productos distintos; registra las tres fuentes
// oficiales por separado para que cada afirmación pueda comprobarse.
const fs=require('node:fs'),path=require('node:path');
const bankFile=path.join(__dirname,'..','preguntas_preparatic.json');
const logFile=path.join(__dirname,'cambios-lote-074.json');
const raw=fs.readFileSync(bankFile,'utf8');
const bank=JSON.parse(raw);
const log=JSON.parse(fs.readFileSync(logFile,'utf8'));
const sources=[
 {url:'https://www.php.net/manual/en/book.opcache.php',referencia:'PHP Manual, OPcache: almacena bytecode precompilado.'},
 {url:'https://www.php.net/manual/en/book.wincache.php',referencia:'PHP Manual, WinCache: opcode cache histórico y retirado en WinCache 2.0.0.'},
 {url:'https://www.memcached.org/',referencia:'Memcached, descripción oficial: almacén distribuido genérico de objetos/valores en memoria.'},
 {url:'https://www.php.net/manual/en/intro.apc.php',referencia:'PHP Manual archivado, APC: se describe como caché de opcode para PHP.'},
 {url:'https://www.php.net/manual/en/book.apcu.php',referencia:'PHP Manual, APCu: caché de variables de usuario separada de la antigua caché de opcode de APC.'}
];
const q=bank.preguntas.find(x=>x.id===690),entry=log.cambios.find(x=>x.id===690);
q.revision.fuentes=sources;entry.actualizada.revision.fuentes=sources;
const patched=raw.replace(/^    \{[\s\S]*?^    \}/gm,block=>{
 const item=JSON.parse(block);
 if(item.id!==690)return block;
 item.revision.fuentes=sources;
 return JSON.stringify(item,null,2).split('\n').map(line=>'    '+line).join('\n');
});
fs.writeFileSync(bankFile,patched);
fs.writeFileSync(logFile,JSON.stringify(log,null,2)+'\n');
