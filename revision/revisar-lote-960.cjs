const fs=require('node:fs'),path=require('node:path');
const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262';
const d27='https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const d28='https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const d30='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const d32='https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk';
const d34='https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const d3='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5121,['65'],['III-12'],['HTTP','sesiones','Jakarta Servlet','HttpSession','timeout','invalidate'],[
  ref('https://jakarta.ee/specifications/servlet/6.1/jakarta-servlet-spec-6.1.html','Jakarta Servlet 6.1, §§7.5 y 7.10: el contenedor mantiene sesiones y las invalida tras el timeout de inactividad configurado; el API también permite invalidación explícita por la aplicación.'),
  ref('https://jakarta.ee/specifications/servlet/6.1/apidocs/jakarta.servlet/jakarta/servlet/http/httpsession','Jakarta Servlet 6.1, HttpSession API: get/setMaxInactiveInterval documentan el intervalo de inactividad tras el que el contenedor invalida la sesión.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 65: arquitectura de desarrollo web, scripts de cliente, frameworks y desarrollo en servidor.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web y desarrollo front-end y en servidor.'),
  ref(d30,'ITIC Academy, bloque 30 (actualizado a octubre de 2026): aplicaciones web, tecnologías de servidor, Java/Jakarta EE; cotejo curricular del contexto Servlet.')
 ],null,'Se delimita a la invalidación automática normal del contenedor con un timeout de inactividad positivo. La aplicación también puede invalidar explícitamente mediante HttpSession.invalidate(); cerrar la ventana del navegador no es una notificación HTTP que invalide por sí sola la sesión remota, y Servlet no define un mandato KILL_SESSION ni la sobrecarga obliga a invalidar sesiones.','corregida'],
 [5122,['58'],['II-6'],['arquitectura cliente-servidor','tres capas','presentación','lógica de negocio','acceso a datos'],[
  ref('https://learn.microsoft.com/en-us/windows/win32/cossdk/using-a-three-tier-architecture-model','Microsoft Learn, Using a Three-Tier Architecture Model: separa la aplicación en servicios de presentación, negocio y datos.'),
  ref('https://learn.microsoft.com/en-us/windows/win32/cossdk/the-logical-model--application-definition-and-planning','Microsoft Learn, The Logical Model: identifica los tiers de presentación/servicio al usuario, negocio y datos.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo y arquitectura cliente-servidor.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema II.6: arquitecturas cliente-servidor y multicapas.'),
  ref(d28,'ITIC Academy, bloque 28 (versión 2026.2): A1-58/A2-T6 y tipología de componentes de arquitecturas cliente-servidor.')
 ],null,'Se especifica el modelo lógico de aplicación de tres capas habitual: presentación, negocio y datos/acceso a datos. Seguridad es una preocupación transversal que puede aplicarse en todas las capas, no una de esas tres capas. Otras arquitecturas pueden usar nombres o particiones diferentes.','corregida'],
 [5123,[],['III-5'],['árboles binarios de búsqueda','estructuras de datos','clave','ordenación','algoritmos de búsqueda'],[
  ref('https://www.dgp.toronto.edu/public_user/JamesStewart/378notes/15bst/','University of Toronto, notas de BST: las claves del subárbol izquierdo son menores que la del nodo y las del subárbol derecho mayores, bajo la convención sin duplicados ilustrada.'),
  ref('https://chalmersgu-data-structure-courses.github.io/OpenDSA/Published/ChalmersGU-DSABook/html/BST.html','Chalmers/OpenDSA, Binary Search Trees: define la propiedad de búsqueda comparando las claves de los nodos en los subárboles izquierdo y derecho.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema III.5: tipos abstractos y estructuras de datos, algoritmos de ordenación y búsqueda.'),
  ref(d32,'ITIC Academy, bloque 32 (2026.1): A2-D5 incluye estructuras de datos, estrategias de algoritmos y búsqueda; cotejo curricular directo.')
 ],null,'Un árbol binario de búsqueda se organiza por una clave comparable asociada a cada nodo: convencionalmente las claves menores quedan en el subárbol izquierdo y las mayores en el derecho. El recorrido preorden o el orden de inserción no son la regla de ordenación. Las políticas sobre claves duplicadas dependen de la implementación.','corregida'],
 [5124,['75'],[],['espacios de datos','soberanía del dato','gobernanza','federación','compartición de datos'],[
  ref('https://digital-strategy.ec.europa.eu/en/policies/data-spaces','Comisión Europea, Common European Data Spaces: describe infraestructuras y marcos de gobernanza comunes, reglas de acceso transparentes, y la capacidad de los titulares de decidir qué datos comparten.'),
  ref('https://blueprint.dssc.eu/','Data Spaces Support Centre (DSSC), Blueprint 3.0: contempla participantes soberanos, reglas comunes y escenarios federados; admite variedad de topologías y servicios centralizados o descentralizados según el diseño.'),
  ref('https://publications.jrc.ec.europa.eu/repository/bitstream/JRC139026/JRC139026_01.pdf','JRC, estudio sobre el papel de la Comisión en los espacios de datos: explica la descentralización como principio usado en ciertos modelos y advierte que conviven principios y mecanismos centralizados y descentralizados.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 75: entornos de compartición de datos y espacios de datos, aspectos tecnológicos y organizativos.'),
  ref(d34,'ITIC Academy, bloque 34 (2026): A1-75 trata espacios de datos y aspectos tecnológicos/organizativos; cotejo curricular directo.')
 ],null,'El enunciado original no identificaba qué documento de la UE enumeraba esos «fundamentos», y la centralización no es una prohibición universal: los espacios de datos pueden combinar componentes centralizados y federados. Se reformula sobre un modelo que respeta la soberanía de los participantes: lo incompatible es que un operador único sea dueño y controlador exclusivo de todos los datos y sus usos.','corregida'],
 [5125,['80'],['I-6'],['eIDAS','identificación electrónica','niveles de garantía','nivel bajo','nivel sustancial','nivel alto'],[
  ref('https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18/spa','EUR-Lex, Reglamento (UE) 910/2014, versión consolidada de 18-10-2024, art. 8: los niveles de seguridad/garantía son bajo, sustancial y alto; el artículo permanece aplicable tras las modificaciones eIDAS.'),
  ref('https://eur-lex.europa.eu/eli/reg_impl/2015/1502/oj?locale=es','EUR-Lex, Reglamento de Ejecución (UE) 2015/1502: fija especificaciones y procedimientos mínimos para dichos niveles de seguridad.'),
  ref(a1,'Convocatoria A1 GSI 2025, tema 80: marco europeo y nacional de identificación y firma electrónica.'),
  ref(a2,'Convocatoria A2 GSI 2025, tema I.6: identidad y firma electrónica y Reglamento eIDAS.'),
  ref(d3,'ITIC Academy, bloque 03 (versión 2026.2): legislación de sociedad de la información y Administración digital en España y la UE; cotejo contextual. No se encontró en el extracto accesible una correspondencia específica para los tres niveles del artículo 8.')
 ],null,'La terminología normativa en español es niveles de seguridad bajo, sustancial y alto (artículo 8 del Reglamento eIDAS). «Básico» o «medio» no son los nombres de estos niveles. La revisión cita la versión consolidada vigente tras la modificación por el Reglamento (UE) 2024/1183.','corregida']
];
const edits={
 5121:{texto:'Según Jakarta Servlet 6.1, si la aplicación no la invalida explícitamente, ¿cuándo invalida automáticamente el contenedor una sesión con un intervalo de inactividad positivo?',opciones:['Cuando vence el intervalo máximo de inactividad configurado para esa sesión.','En el instante en que el usuario cierra la ventana del navegador, porque el navegador envía una orden estándar de invalidación.','Siempre que el servidor alcanza una carga elevada, porque la especificación obliga a invalidar sesiones.','Cuando el navegador envía el comando HTTP estándar KILL_SESSION.'],respuesta_correcta:0,comentarios:'El contenedor invalida la sesión cuando expira su intervalo de inactividad. La aplicación puede hacerlo antes llamando a HttpSession.invalidate(). HTTP no comunica automáticamente que se cerró una ventana del navegador; Servlet tampoco define KILL_SESSION ni obliga a invalidar sesiones por sobrecarga.'},
 5122:{texto:'En el modelo lógico habitual de aplicación de tres capas —presentación, negocio y datos/acceso a datos—, ¿cuál NO es una de esas tres capas?',opciones:['Presentación.','Seguridad.','Acceso a datos.','Lógica de negocio.'],respuesta_correcta:1,comentarios:'En este modelo las capas son presentación, lógica de negocio y datos/acceso a datos. La seguridad es una preocupación transversal que debe diseñarse en las capas pertinentes, no una de las tres capas del modelo indicado.'},
 5123:{texto:'¿Qué propiedad determina el orden de los elementos en un árbol binario de búsqueda?',opciones:['El orden en que se visita cada nodo durante el recorrido preorden.','El orden cronológico en que se insertaron los elementos, con independencia de sus valores.','La comparación de la clave de cada nodo con las claves de los nodos de sus subárboles.','La posición de un tercer hijo que almacena la ordenación de cada hoja.'],respuesta_correcta:2,comentarios:'La clave comparable de cada nodo define la propiedad: convencionalmente, las claves menores que la del nodo están a su izquierda y las mayores a su derecha. Los recorridos sirven para visitar nodos y la política de duplicados depende de la implementación.'},
 5124:{texto:'En un espacio de datos que respeta la soberanía de sus participantes y permite compartir datos bajo reglas comunes, ¿qué modelo contradice el control que conserva cada titular sobre sus datos?',opciones:['Cada participante decide qué datos ofrece y bajo qué políticas de uso acordadas.','Las reglas de acceso son transparentes y comunes a los participantes.','Los sistemas de los participantes pueden interoperar mediante servicios federados.','Un operador único es propietario y controlador exclusivo de todos los datos y decide unilateralmente todos sus usos.'],respuesta_correcta:3,comentarios:'Los espacios comunes europeos promueven marcos de gobernanza, reglas transparentes y que los titulares puedan autorizar la puesta en común de datos. No debe inferirse una prohibición de todo componente centralizado: el distractor se delimita al control exclusivo de un único operador sobre los datos y todos sus usos.'},
 5125:{texto:'Conforme al artículo 8 del Reglamento (UE) 910/2014 (eIDAS), en su versión modificada, ¿qué niveles de seguridad se especifican para los medios de identificación electrónica?',opciones:['Bajo, medio y alto.','Básico, medio y alto.','Bajo, sustancial y alto.','Bajo, sustancial y avanzado.'],respuesta_correcta:2,comentarios:'El artículo 8 de eIDAS denomina los tres niveles bajo, sustancial y alto. La reforma del Reglamento (UE) 2024/1183 no cambia esos nombres; las especificaciones técnicas se desarrollan en el Reglamento de Ejecución (UE) 2015/1502.'}
};
const logPath=path.join(__dirname,'cambios-lote-960.json');
if(!fs.existsSync(logPath)) aplicar({numero:'960',fecha:'2026-11-12',records,edits});
else {const log=JSON.parse(fs.readFileSync(logPath,'utf8'));if(JSON.stringify(log.cambios.map(x=>x.id))!==JSON.stringify(records.map(x=>x[0])))throw new Error('Registro 960 existente con IDs distintos; no se sobrescribe');}
const dataPath=path.join(__dirname,'..','preguntas_preparatic.json'),data=JSON.parse(fs.readFileSync(dataPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
 5121:['ITIC Academy, bloque 30, «Tecnologías de sistemas de información» (octubre de 2026): aborda aplicaciones web, tecnologías de servidor y Java/Jakarta EE.','Cotejo curricular contextual con tecnologías web y de servidor; no se atribuye al temario de Academy una regla propia sobre timeout Servlet.'],
 5122:['ITIC Academy, bloque 28, «Arquitectura SOA y requisitos no funcionales» (2026.2): incluye arquitectura cliente-servidor y componentes/interoperabilidad.','Cotejo curricular directo del tema de arquitectura multicapas; la división concreta en tres tiers se verifica en Microsoft Learn.'],
 5123:['ITIC Academy, bloque 32, «Inteligencia artificial y ciencia de datos» (2026.1): A2-D5 incluye estructuras de datos y algoritmos de ordenación y búsqueda.','Cotejo curricular directo del epígrafe oficial A2-D5; la propiedad de BST se comprueba en material universitario de estructuras de datos.'],
 5124:['ITIC Academy, bloque 34, «Business Intelligence y Big Data» (2026): incluye A1-75, entornos de compartición y espacios de datos.','Cotejo curricular directo; el material ubica el espacio de datos en el programa, mientras la topología y el control de los titulares se verifican en fuentes europeas.'],
 5125:['ITIC Academy, bloque 03, «Actuación administrativa y Administración digital» (2026.2): aborda la legislación europea de sociedad de la información y administración digital.','Cotejo curricular contextual. El extracto accesible no confirma una sección específica sobre los tres niveles eIDAS; estos se verifican en EUR-Lex, artículo 8.']
};
for(const [key,[block,note]] of Object.entries(academy)){
 const id=Number(key),q=data.preguntas.find(x=>x.id===id),entry=log.cambios.find(x=>x.id===id);
 if(!q||!entry||q.revision?.estado!=='corregida')throw new Error('Desfase en ID '+id);
 const old={bloque_academia:q.clasificacion.bloque_academia,nota:q.clasificacion.nota};q.clasificacion.bloque_academia=block;q.clasificacion.nota=note;
 entry.correcciones_posteriores=[...(entry.correcciones_posteriores||[]),{fecha:'2026-11-12',motivo:'Cotejo del temario de ITIC Academy y convocatoria oficial; se registra el alcance directo, contextual o no confirmado sin atribuirle valor técnico/normativo.',clasificacion_anterior:old,clasificacion_actualizada:{bloque_academia:block,nota:note}}];entry.actualizada=structuredClone(q);
}
const raw=fs.readFileSync(dataPath,'utf8'),byId=new Map(log.cambios.map(x=>[x.id,x.actualizada]));let count=0;
const output=raw.replace(/^    \{[\s\S]*?^    \}/gm,b=>{const old=JSON.parse(b),updated=byId.get(old.id);if(!updated)return b;count++;return JSON.stringify(updated,null,2).split('\n').map(line=>'    '+line).join('\n')});
if(count!==records.length)throw new Error(`Cambios aplicados ${count}, esperado ${records.length}`);
fs.writeFileSync(dataPath,output);fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular del lote 960 actualizado.');
