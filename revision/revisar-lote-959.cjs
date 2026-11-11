const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const drive28='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const drive27='https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const drive29='https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const drive38='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5116,['58'],['II-6'],['CORBA','ORB','stub IDL','skeleton','middleware','arquitectura distribuida'],[
  ref('https://www.omg.org/spec/CORBA/3.4/','OMG, CORBA 3.4: separa la interfaz de stub del cliente, el ORB, los adaptadores de objetos y skeletons de implementación en el lado servidor.'),
  ref('https://www.omg.org/gettingstarted/orb_basics.htm','OMG, ORB Basics: el ORB enruta las peticiones del cliente hacia el objeto destino; las invocaciones estáticas usan stubs.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo, arquitectura cliente-servidor y SOA.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema II.6: arquitecturas cliente-servidor, componentes e interoperabilidad.'),
  ref(drive28,'ITIC Academy, bloque 28 (versión 2026.2): A1-58/A2-T6, arquitectura cliente-servidor, middleware y componentes distribuidos; cotejo curricular, no fuente normativa.')
 ],null,'En una invocación CORBA estática, el cliente llama al stub generado desde IDL; este entrega la petición al ORB, que la enruta al adaptador/skeleton del servidor para despacharla al objeto. La opción resume el flujo: en una implementación real intervienen el ORB de cliente y servidor y el adaptador de objetos; el skeleton no es un salto de red autónomo.','corregida'],
 [5117,['58'],['II-6'],['SOA','servicios','encapsulación','interfaz','acoplamiento débil','interoperabilidad'],[
  ref('https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.html','OASIS, Reference Model for SOA 1.0, §3.1: un servicio permite acceder a capacidades por una interfaz prescrita; su implementación suele quedar opaca al consumidor.'),
  ref('https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.pdf','OASIS, Reference Model for SOA 1.0: SOA organiza soluciones para promover reutilización, evolución e interoperabilidad; no es incompatible con servicios web.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 58: arquitectura SOA.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema II.6: arquitectura de servicios web e interoperabilidad.'),
  ref(drive28,'ITIC Academy, bloque 28 (versión 2026.2), dedicado a SOA, requisitos no funcionales y servicios web; cotejo curricular.')
 ],null,'La respuesta correcta es la encapsulación: el servicio expone capacidades mediante una interfaz y oculta normalmente sus detalles internos. SOA puede implementarse con servicios web; acoplamiento y dependencia de plataforma son decisiones de diseño, no las características absolutas propuestas por los distractores.','corregida'],
 [5118,['59'],['II-2'],['sistema operativo','máquina ampliada','gestión de recursos','compilador','enlazador'],[
  ref('https://uodiyala.edu.iq/uploads/PDF%20ELIBRARY%20UODIYALA/EL48/Operating%5B1%5D.Systems.Design.and.Implementation.3rd.Edition.pdf','Tanenbaum y Woodhull, Operating Systems: Design and Implementation, 3.ª ed., §1.7: presenta las dos perspectivas clásicas del SO como gestor de recursos y máquina ampliada/virtual.'),
  ref('https://cs.nyu.edu/~gottlieb/courses/2000s/2002-03-spring/os/lectures/lecture-01.html','NYU, apuntes de sistemas operativos: distingue el sistema operativo de compiladores y enlazadores, herramientas de construcción de programas.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 59: conceptos y fundamentos de sistemas operativos.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema II.2: conceptos, características funcionales y administración de sistemas operativos.'),
  ref(drive27,'ITIC Academy, bloque 27 (actualización 2026), fundamentos y funciones de sistemas operativos; cotejo curricular.')
 ],null,'La alternativa que no describe una función propia del sistema operativo es la creación del programa mediante edición, compilación y enlazado: son tareas de herramientas de desarrollo. El SO sí gestiona recursos concurrentes, ofrece abstracciones de más alto nivel y carga/ejecuta programas. Un entorno puede incluir herramientas junto al SO, pero no por ello son funciones del núcleo/servicio del SO.','corregida'],
 [5119,['64'],['II-5','III-4'],['transacciones','concurrencia','aislamiento','lectura no repetible','READ COMMITTED'],[
  ref('https://www.postgresql.org/docs/18/transaction-iso.html','PostgreSQL 18, §13.2: lectura no repetible ocurre cuando una transacción vuelve a leer un dato y ve un cambio confirmado desde la lectura inicial; distingue lecturas sucias y fantasma.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 64: modelo relacional y SQL; el programa general incluye fundamentos de transacciones en bases de datos.'),
  ref(a2,'Convocatoria A2 GSI 2025, temas II.5 (SGBD relacionales/SQL) y III.4 (problemas de concurrencia y resolución de conflictos).'),
  ref(drive29,'ITIC Academy, bloque 29 (versión 2026.1): transacciones, concurrencia y niveles de aislamiento; cotejo curricular directo.')
 ],null,'Se corrige el enunciado: dos transacciones que leen una vez el mismo valor y luego lo actualizan describen mejor una actualización perdida, anomalía que no aparece entre las respuestas. La lectura no repetible se define por dos lecturas del mismo dato en una transacción, con una actualización confirmada por otra transacción entre ambas; en READ COMMITTED la segunda lectura puede devolver el nuevo valor.','corregida'],
 [5120,['94'],['III-14'],['OOUI','interfaz orientada a objetos','objeto-acción','acción-objeto','usabilidad','diseño de interfaces'],[
  ref('https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=90090H00.txt','U.S. EPA, Common User Interface Guidelines, §1.2.2.1: en la secuencia orientada a objetos se selecciona primero el objeto y después se ofrecen acciones aplicables.'),
  ref('https://bitsavers.computerhistory.org/pdf/ibm/pc/os2/OS2_2.x/redbooks/GG24-3774-00_OS2_V2.0_Vol_4_Writing_Applications_199301.pdf','IBM, OS/2 Version 2, Writing Applications, §1–3: describe interfaces object-action, donde el objeto es el foco y las acciones pertinentes se ofrecen para manipularlo.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 94: prototipos y diseño de interfaces de aplicaciones.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema III.14: usabilidad y experiencia de usuario.'),
  ref(drive38,'ITIC Academy, bloque 38 (versión 2026), tema A1-94 sobre prototipos y diseño de interfaces; el material cubre el área curricular, no establece una taxonomía universal de objetos OOUI.')
 ],null,'Se sustituye la lista ambigua que afirmaba como universal una clasificación exacta de tres tipos de objetos. En el patrón objeto-acción se selecciona primero el objeto y después se elige una acción aplicable; no es correcto definirlo por una secuencia acción-objeto. Un acceso directo puede ser un objeto interactivo en ciertos sistemas, pero no basta por sí solo para clasificar una interfaz completa.','corregida']
];
const edits={
 5116:{texto:'En una invocación estática CORBA basada en IDL, ¿qué secuencia resume correctamente la llamada desde el cliente hasta la implementación del objeto en el servidor?',opciones:['Cliente → stub IDL → ORB, que enruta la petición al skeleton/adaptador del servidor → objeto.','Cliente → skeleton del servidor → stub IDL → objeto.','Cliente → servidor, sin intermediación del ORB ni de un stub.','Cliente → adaptador de objetos del servidor → stub del cliente → objeto.'],respuesta_correcta:0,comentarios:'El stub generado es la interfaz de invocación del cliente; el ORB enruta la solicitud y el skeleton/adapter del lado servidor la despacha a la implementación. Es un esquema didáctico: no representa cada componente ni el transporte con el detalle de una implementación CORBA concreta.'},
 5117:{texto:'¿Cuál de estas afirmaciones describe correctamente una característica de los servicios en una arquitectura orientada a servicios (SOA)?',opciones:['SOA excluye el uso de servicios web.','Un servicio ofrece acceso a una o más capacidades mediante una interfaz y normalmente oculta al consumidor los detalles de implementación.','Los servicios deben mantener un fuerte acoplamiento entre proveedor y consumidor.','Toda implementación de SOA debe depender de una plataforma de ejecución única.'],respuesta_correcta:1,comentarios:'En SOA, los servicios exponen capacidades a través de interfaces descritas y su implementación suele ser opaca para quien los consume. Los servicios web son una posible tecnología de implementación, no algo incompatible con SOA; acoplamiento y plataforma no se fijan como en los distractores.'},
 5118:{texto:'Desde las perspectivas clásicas del sistema operativo como gestor de recursos y como máquina ampliada, ¿cuál de estas tareas NO es propiamente una función del sistema operativo?',opciones:['Coordinar el acceso concurrente de programas y usuarios a recursos compartidos.','Proporcionar abstracciones de más alto nivel que facilitan el uso del hardware.','Editar, compilar y enlazar el código fuente para crear un programa.','Cargar e iniciar la ejecución de un programa.'],respuesta_correcta:2,comentarios:'La compilación y el enlazado corresponden a herramientas de desarrollo. El sistema operativo gestiona recursos, ofrece abstracciones y participa en la carga y ejecución. Algunos sistemas distribuyen compiladores como software adicional, pero eso no los convierte en servicios propios del sistema operativo.'},
 5119:{texto:'En una transacción, una operación vuelve a leer la misma fila y obtiene un valor diferente porque otra transacción confirmó una actualización entre ambas lecturas. ¿Cómo se denomina esta anomalía?',opciones:['Lectura sucia: leer cambios todavía no confirmados por otra transacción.','Lectura fantasma: cambia el conjunto de filas que satisface una consulta de rango.','Lectura no repetible: una nueva lectura del mismo dato observa un cambio confirmado desde la lectura anterior.','Actualización confirmada: nombre estándar de cualquier escritura que termina correctamente.'],respuesta_correcta:2,comentarios:'La lectura no repetible consiste en leer de nuevo un dato previamente leído y encontrarlo modificado por otra transacción ya confirmada. La lectura sucia, en cambio, observa un cambio sin confirmar; una lectura fantasma altera el conjunto de filas de una consulta.'},
 5120:{texto:'En una interfaz de interacción orientada a objetos con secuencia objeto-acción, ¿qué patrón de interacción es característico?',opciones:['Seleccionar primero un objeto y después elegir una de las acciones aplicables que ofrece la interfaz.','Elegir siempre una acción global antes de seleccionar el objeto sobre el que se aplicará.','La interfaz debe mostrar exactamente tres clases universales de objetos: datos, contenedores y dispositivos.','Cada objeto de la interfaz debe ser una instancia de una clase del código de la aplicación.'],respuesta_correcta:0,comentarios:'El patrón objeto-acción pone primero el foco en el objeto: se selecciona y luego se presentan acciones que pueden aplicarse. No exige un número universal de categorías ni que cada objeto visible corresponda a una clase de implementación.'}
};
const batchPath=path.join(__dirname,'cambios-lote-959.json');
if(!fs.existsSync(batchPath)) aplicar({numero:'959',fecha:'2026-11-12',records,edits});
else {const prior=JSON.parse(fs.readFileSync(batchPath,'utf8'));if(JSON.stringify(prior.cambios.map(x=>x.id))!==JSON.stringify(records.map(x=>x[0])))throw new Error('Registro 959 existente con IDs no coincidentes');}
const root=path.join(__dirname,'..'),qfile=path.join(root,'preguntas_preparatic.json'),logfile=path.join(__dirname,'cambios-lote-959.json');
const data=JSON.parse(fs.readFileSync(qfile,'utf8')),log=JSON.parse(fs.readFileSync(logfile,'utf8'));
const academy={
 5116:['ITIC Academy, bloque 28, «Arquitectura SOA y requisitos no funcionales», versión 2026.2: incluye A1-58/A2-T6 y componentes/interoperabilidad de arquitecturas cliente-servidor.','Cotejo curricular directo del área de procesamiento cooperativo y arquitectura distribuida; la secuencia CORBA se valida con la especificación OMG.'],
 5117:['ITIC Academy, bloque 28, «Arquitectura SOA y requisitos no funcionales», versión 2026.2: cubre SOA, servicios web y A1-58/A2-T6.','Cotejo curricular directo con el bloque SOA; la definición del servicio se comprueba en OASIS.'],
 5118:['ITIC Academy, bloque 27, «Sistemas operativos», actualización 2026: cubre fundamentos funcionales de sistemas operativos y A1-59/A2-II.2.','Cotejo curricular directo del tema de sistema operativo; la separación respecto de compiladores/enlazadores se verifica en material universitario de sistemas operativos.'],
 5119:['ITIC Academy, bloque 29, «Bases de datos, SQL y modelado de datos», versión 2026.1: cubre transacciones, concurrencia y niveles de aislamiento dentro de A1-64/A2-T5/D4.','Cotejo curricular directo de anomalías de concurrencia; definición terminológica contrastada con PostgreSQL 18.'],
 5120:['ITIC Academy, bloque 38, «Análisis, diseño y construcción de sistemas de información», versión 2026.1: incluye A1-94, prototipos y diseño de interfaces; no fija una taxonomía universal de OOUI.','Cotejo curricular directo del ámbito de interfaces/usabilidad; la secuencia objeto-acción se comprueba en las guías CUA/EPA e IBM.']
};
const changes=new Map(log.cambios.map(x=>[x.id,x]));
for(const [key,[block,note]] of Object.entries(academy)){
 const id=Number(key),q=data.preguntas.find(x=>x.id===id),entry=changes.get(id);
 if(!q||!entry||q.revision?.estado!=='corregida')throw new Error('Desfase en pregunta '+id);
 const old={bloque_academia:q.clasificacion?.bloque_academia,nota:q.clasificacion?.nota};
 q.clasificacion.bloque_academia=block;q.clasificacion.nota=note;
 entry.correcciones_posteriores=[...(entry.correcciones_posteriores||[]),{fecha:'2026-11-12',motivo:'Cotejo expreso de temario ITIC Academy accesible en Drive y actualización de correspondencia curricular.',clasificacion_anterior:old,clasificacion_actualizada:{bloque_academia:block,nota:note}}];entry.actualizada=structuredClone(q);
}
const raw=fs.readFileSync(qfile,'utf8');const byId=new Map(log.cambios.map(x=>[x.id,x.actualizada]));let count=0;
const output=raw.replace(/^    \{[\s\S]*?^    \}/gm,block=>{const old=JSON.parse(block),updated=byId.get(old.id);if(!updated)return block;count++;return JSON.stringify(updated,null,2).split('\n').map(line=>'    '+line).join('\n');});
if(count!==records.length)throw new Error(`Se actualizaron ${count} registros, se esperaban ${records.length}`);
fs.writeFileSync(qfile,output);
fs.writeFileSync(logfile,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy guardado en lote 959.');
