const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy=(id,title,detail)=>src(`https://drive.google.com/file/d/${id}/view?usp=drivesdk`,`ITIC Academy, ${title}, edición 2026: ${detail}`);
const B={numero:'1235',fecha:'2026-11-13',records:[
[6496,['106'],[],['MÉTRICA v3','Acuerdo de Nivel de Servicio','IAS 8.3'],[
src('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A507af1ff-0457-464d-b276-be26a8826b1c/METRICA_V3_Implantacion_y_Aceptacion_del_Sistema.pdf','Ministerio de Administraciones Públicas, MÉTRICA v3, Implantación y Aceptación del Sistema, IAS 8.3: determina formalmente el Acuerdo de Nivel de Servicio una vez que el sistema está en su entorno de operación y ha sido aceptado.'),
src(a1,'Convocatoria GSI A1 2025, tema 106: gestión de servicios TIC y acuerdos de nivel de servicio.'),

academy('13ohkITliw7Nrg6LKPinh9vliiwrgPdwr','bloque 41, «ITIL y COBIT»','gestión de servicios; el contenido oficial enumera acuerdos de nivel de servicio y el tema A1-106. El programa A2 actual no contiene un epígrafe específico de SLA, de modo que no se fuerza clasificación A2.')
],{texto:'Según la tarea IAS 8.3 de MÉTRICA v3, ¿en qué momento se formaliza el Acuerdo de Nivel de Servicio?',respuesta_correcta:2},'Se confirma C. La tarea IAS 8.3 establece que el sistema ya está en su entorno de operación y ha sido aceptado cuando se formalizan los tipos de servicio y el acuerdo correspondiente; la opción B anticipa el acuerdo a la aceptación.', 'vigente'],
[6497,['85'],['IV-12'],['criptoactivos','monedero digital','hot wallet','blockchain'],[
src('https://help.coinbase.com/en/coinbase/getting-started/crypto-education/glossary/wallet','Coinbase Help, glosario Wallet: un hot wallet está conectado a Internet; las wallets gestionan criptoactivos mediante claves/semillas, mientras que los activos permanecen en la cadena.'),
src('https://www.ledger.com/academy/glossary/hot-wallet','Ledger Academy, Hot Wallet: define hot wallet como interfaz de cartera conectada a Internet y describe el papel de las claves privadas.'),
src(a1,'Convocatoria GSI A1 2025, tema 85: blockchain, redes, contratos inteligentes e infraestructura EBSI.'),
src(a2,'Convocatoria GSI A2 2025, tema IV.12: técnicas criptográficas, protocolos seguros y seguridad en el puesto; clasificación contextual, pues el temario no enumera específicamente las wallets.'),
academy('1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82','bloque 48, «Seguridad en redes y en el nivel de aplicación»','incluye técnicas criptográficas y protección de comunicaciones; se usa como encaje de seguridad de claves, no como fuente definitoria de wallets. El contenido de blockchain se clasifica directamente en A1-85; el documento no cubre hot wallets como epígrafe independiente.')
],{texto:'¿Cuál de las siguientes afirmaciones describe correctamente un hot wallet en el contexto de los criptoactivos?',opciones:['Es una modalidad de cartera fría que mantiene las claves aisladas de Internet, normalmente mediante un dispositivo sin conexión.','Es una cartera digital cuya interfaz o servicio está conectado a Internet y permite gestionar claves y transacciones.','Solo puede utilizarse desde un teléfono móvil.','Almacena físicamente las criptomonedas dentro de un dispositivo de hardware.'],respuesta_correcta:1},'Se confirma B y se corrigen tres distractores. «Hot» describe la conexión a Internet, no el tipo de dispositivo ni una limitación a móviles; una hardware wallet puede mantener las claves aisladas y los criptoactivos se registran en la cadena, no se guardan físicamente en el dispositivo. Las carteras difieren además en custodia y arquitectura, por lo que la característica definitoria preguntada es la conectividad.', 'corregida'],
[6498,['89','90'],['III-9'],['UML','diagramas UML','diagramas de actividad','diagrama de frecuencia'],[
src('https://www.omg.org/spec/UML/2.5.1/PDF','OMG, UML 2.5.1, especificación normativa: define el repertorio de diagramas estructurales, de comportamiento e interacción; actividad, clase y secuencia son clases reconocidas de diagrama.'),
src('https://www.omg.org/UML/what-is-uml.htm','OMG, What is UML?: enumera diagramas de estructura, comportamiento e interacción, incluidos los diagramas de actividad, clase y secuencia.'),
src(a1,'Convocatoria GSI A1 2025, temas 89 y 90: modelos de clases y análisis dinámico/modelado de procesos.'),
src(a2,'Convocatoria GSI A2 2025, tema III.9: análisis y diseño orientado a objetos, UML y patrones.'),
academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN','bloque 38, «Análisis, diseño y construcción de sistemas de información»','el índice y contenido tratan UML, modelado orientado a objetos y diagramas de actividad, clases y secuencia; las categorías normativas se contrastan con OMG UML 2.5.1.')
],{texto:'Conforme al repertorio de UML 2.5.1, ¿cuál de los siguientes no es un tipo de diagrama UML?',respuesta_correcta:3},'Se confirma D. UML 2.5.1 reconoce diagramas de actividad y secuencia (comportamiento/interacción) y de clases (estructura). «Diagrama de frecuencia» no es un tipo del repertorio normativo UML; puede existir como gráfico en otros contextos, pero no como clase de diagrama UML definida por la especificación.', 'vigente'],
[6499,['89'],['III-9'],['UML','interfaz','operaciones','contrato'],[
src('https://www.omg.org/spec/UML/2.5.1/PDF','OMG, UML 2.5.1, § 9.2.3.1 y § 10.4 (Interfaces): una interfaz es un clasificador que declara características públicas y obligaciones coherentes, incluidos atributos/operaciones, como contrato sin describir la implementación.'),
src('https://www.omg.org/spec/UML','OMG, catálogo oficial de la especificación vigente UML 2.5.1.'),
src(a1,'Convocatoria GSI A1 2025, tema 89: análisis del dominio y modelos de clases.'),
src(a2,'Convocatoria GSI A2 2025, tema III.9: análisis y diseño orientado a objetos y UML.'),
academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN','bloque 38, «Análisis, diseño y construcción de sistemas de información»','incluye UML y orientación a objetos; la definición formal de interfaz como contrato de características públicas se verifica en OMG UML 2.5.1.')
],{texto:'En UML 2.5.1, ¿qué elemento declara un contrato mediante un conjunto coherente y nombrado de características públicas —entre ellas operaciones— sin especificar cómo se implementan?',opciones:['Una clase, que define la estructura y el comportamiento de sus instancias.','Una interfaz, que declara las características públicas que debe ofrecer un clasificador que la realiza.','Un componente, que representa una parte modular encapsulada del sistema.','Un nodo, que representa un recurso computacional en el que pueden desplegarse artefactos.'],respuesta_correcta:1},'Se confirma B y se actualiza la definición simplificada. En UML 2.5.1 una Interface es un clasificador que especifica un contrato de características públicas coherentes y obligaciones; puede declarar operaciones, pero no determina su implementación. Clase, componente y nodo tienen significados distintos y no sustituyen ese contrato.', 'corregida'],
[6500,['90'],['II-16'],['BPM','BPMS','BPMN','ERP','integración de sistemas'],[
src('https://www.omg.org/spec/BPMN/2.0.2/PDF','OMG, Business Process Model and Notation (BPMN) 2.0.2: especificación normativa para modelar procesos de negocio; no establece una arquitectura universal de módulos BPMS.'),
src('https://docs.camunda.io/docs/components/modeler/bpmn/user-tasks/','Camunda 8 documentation, User tasks: una tarea de usuario modela trabajo humano asistido por el motor BPMN o una aplicación.'),
src('https://docs.camunda.io/docs/components/connectors/introduction-to-connectors/','Camunda 8 documentation, Connectors: los conectores integran procesos con sistemas, aplicaciones y datos externos.'),
src('https://www.ibm.com/docs/en/bpma/8.0.x?topic=manager-product-overview','IBM Business Process Manager, product overview: describe herramientas de modelado y repositorio de proceso, servidor/motor de ejecución, portal y herramientas de integración con aplicaciones empresariales.'),
src(a1,'Convocatoria GSI A1 2025, tema 90: modelado de procesos y BPMN.'),
src(a2,'Convocatoria GSI A2 2025, tema II.16: sistemas de gestión de flujos de trabajo; correspondencia curricular contextual, sin atribuir al temario una lista normativa de módulos BPMS.'),
academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN','bloque 38, «Análisis, diseño y construcción de sistemas de información»','incluye BPMN y modelado de procesos bajo A1-90; la integración con ERP se trata como conexión con una aplicación externa y la terminología de módulos se contrasta con documentación de plataformas BPMS.')
],{texto:'En una solución BPMS de referencia con modelador de procesos, motor de ejecución y bandeja/interfaz para tareas humanas, ¿cuál opción nombra un sistema empresarial externo que puede integrarse, pero no un módulo funcional propio de la suite?',respuesta_correcta:2},'Se confirma C solo con el alcance precisado. No existe una arquitectura universal obligatoria para todo BPMS: las suites varían y pueden integrar sistemas ERP mediante conectores o servicios. En la arquitectura de referencia descrita, modelador, motor y bandeja de tareas son funciones de la suite; el ERP es el sistema empresarial externo integrado, no un módulo BPMS. Se reformula el enunciado para evitar que la afirmación absoluta «no es un componente típico» dependa del producto.', 'corregida']
]};
apply(B);
// Añadir el cotejo curricular explícito a los registros del lote y mantener alineadas
// las fuentes del banco y su bitácora. El ajuste evita inferir etiquetas A2 cuando no existe
// un tema oficial directamente aplicable.
{
 const fs=require('node:fs');
 const p=require('node:path');
 const dataPath=p.join(__dirname,'..','preguntas_preparatic.json');
 const logPath=p.join(__dirname,'cambios-lote-1235.json');
 const data=JSON.parse(fs.readFileSync(dataPath,'utf8'));
 const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
 const notes={
 6496:'Cotejo directo con ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026.1 (29/09/2026), cuyo contenido oficial cubre acuerdos de nivel de servicio en A1-106. El programa A2 vigente no tiene epígrafe específico de gestión de servicios/SLA, por lo que no se asigna una etiqueta A2 forzada.',
 6497:'Cotejo con ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1 (30/09/2026): incluye criptografía y seguridad de claves; no trata wallets como epígrafe independiente. Se clasifica bajo el tema oficial de blockchain A1-85 y, como contexto A2 de claves/seguridad, IV.12.',
 6498:'Cotejo directo con ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1 (18/09/2026), que incluye UML y sus diagramas; el repertorio formal de diagramas se verifica en OMG UML 2.5.1. El programa BOE vigente prevalece sobre las etiquetas A2 heredadas D9 del material.',
 6499:'Cotejo directo con ITIC Academy, bloque 38, versión 2026.1 (18/09/2026), que incluye UML y orientación a objetos. El material utiliza la etiqueta heredada D9 para A2; se conserva la numeración oficial vigente A2-III.9.',
 6500:'Cotejo con ITIC Academy, bloque 38, versión 2026.1 (18/09/2026): incluye BPMN y modelado de procesos bajo A1-90. La etiqueta académica A2 D9 alude a UML y no es la mejor correspondencia para workflow/BPM; el temario oficial actual contiene en A2-II.16 los sistemas de gestión de flujos de trabajo, por lo que se usa esa referencia. El contenido concreto de módulos de BPMS se verifica con documentación del estándar y plataformas.'
 };
 const entries=Object.fromEntries(log.cambios.map(c=>[c.id,c]));
 for(const [idText,note] of Object.entries(notes)){
  const id=Number(idText),q=data.preguntas.find(x=>x.id===id),entry=entries[id];
  q.clasificacion.bloque_academia=note;q.clasificacion.nota=note;
  entry.actualizada.clasificacion.bloque_academia=note;entry.actualizada.clasificacion.nota=note;
  entry.actualizada.revision.fuentes=structuredClone(q.revision.fuentes);
  entry.actualizada.revision.observaciones=q.revision.observaciones;
 }
 fs.writeFileSync(dataPath,JSON.stringify(data,null,2)+'\n');
 fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
}
