const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const gpi='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf';
const asi='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const jenkins='https://www.jenkins.io/doc/tutorials/';
const cocomo='https://info.usherbrooke.ca/llavoie/enseignement/References/CocomoII_Model_Manual.pdf';
const itil='https://www.itil.co.il/wp-content/uploads/2015/04/ITIL_2011_Glossary_GB-v1-0.pdf';
const edits={
6896:{texto:'En MÉTRICA v3, ¿en qué tarea asigna formalmente el Jefe de Proyecto la estrategia de desarrollo más adecuada (por ejemplo, clásica, evolutiva o híbrida)?',opciones:['En la tarea GPI 2.1, Selección de la Estrategia de Desarrollo.','En la tarea ASI 8.4, Especificación del Comportamiento Dinámico de la Interfaz.','En ambas tareas: ASI 8.4 es la selección formal de la estrategia general del proyecto.','MÉTRICA v3 no permite elegir una estrategia de desarrollo.'],respuesta_correcta:0},
6897:{texto:'En MÉTRICA v3, las actividades GPS de seguimiento y control se realizan mientras se ejecutan las tareas de qué procesos?',opciones:['EVS, ASI, DSI, CSI e IAS, pero no MSI.','ASI, DSI, CSI, IAS y MSI.','GPI y GPF exclusivamente.','Solo al inicio, al concluir EVS y al final del proyecto.'],respuesta_correcta:1},
6898:{texto:'¿Cuál de estas herramientas de código abierto se emplea habitualmente para automatizar procesos de integración continua y entrega continua?',opciones:['CIT, una biblioteca Java de interfaces gráficas.','Swing, una biblioteca Java de interfaces gráficas.','Lucene, una biblioteca para recuperación de información/búsqueda.','Jenkins, un servidor de automatización extensible con soporte de pipelines CI/CD.'],respuesta_correcta:3},
6899:{texto:'Según el COCOMO II Model Definition Manual 2.1, ¿cuántas horas de trabajo comprende un person-month (mes-persona) del modelo?',opciones:['140 horas.','150 horas.','172 horas.','152 horas.'],respuesta_correcta:3},
6900:{texto:'En la clasificación histórica de procesos de ITIL v3 (edición 2011), ¿cuál de los siguientes se asigna a la fase Diseño del Servicio?',opciones:['Gestión de la disponibilidad.','Gestión de la demanda.','Gestión de entregas.','Gestión de la configuración.'],respuesta_correcta:0}
};
const records=[
[6896,[95],['III-2'],['MÉTRICA v3','GPI','GPI 2.1','estrategia de desarrollo','prototipado'],[
{url:gpi,referencia:'MÉTRICA v3, Gestión de Proyectos, tarea GPI 2.1: el Jefe de Proyecto selecciona la estrategia más adecuada en función del proyecto; la metodología no impone una estrategia única.'},
{url:asi,referencia:'MÉTRICA v3, Análisis del Sistema de Información, ASI 8.3–8.5: prototipado se emplea como práctica/técnica para especificar y validar interfaces; no es la tarea que selecciona la estrategia general del proyecto.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodología.'}
],edits[6896],'Se mantiene A, pero se precisa el alcance: GPI 2.1 es la selección formal de la estrategia del proyecto. MÉTRICA también emplea prototipado en tareas ASI de interfaz; por ello el enunciado original podía confundir estrategia general con técnica de análisis. La reformulación distingue ambos usos.', 'corregida'],
[6897,[95],['III-2'],['MÉTRICA v3','GPS','seguimiento y control','ASI','DSI','CSI','IAS','MSI'],[
{url:gpi,referencia:'MÉTRICA v3, Gestión de Proyectos, apartado Actividades de Seguimiento y Control: GPS se ejecuta a medida que se desarrollan los procesos ASI, DSI, CSI, IAS y MSI.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodología.'}
],edits[6897],'Se conserva B. El original decía «LAS»; se corrige a IAS, Implantación y Aceptación del Sistema. La lista oficial de MÉTRICA incluye ASI, DSI, CSI, IAS y MSI, y el seguimiento/control acompaña la ejecución de esos procesos.', 'corregida'],
[6898,[97],['III-6'],['integración continua','entrega continua','Jenkins','pipeline','automatización'],[
{url:jenkins,referencia:'Jenkins User Documentation, Tutorials: describe la automatización de aplicaciones y presenta Jenkins como herramienta para implementar flujos CI/CD; el capítulo Pipeline documenta la función central de pipelines.'},
{url:'https://www.jenkins.io/doc/book/pipeline/',referencia:'Jenkins User Documentation, Pipeline: define pipelines automatizados y su uso para entregar software de forma continua.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 97: modelos y herramientas de integración continua.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.6: construcción, despliegue e integración continua.'}
],edits[6898],'La respuesta Jenkins se conserva. Se especifica «habitualmente» y se denomina servidor de automatización con pipelines CI/CD, porque Jenkins puede automatizar tareas generales y no es exclusivamente una herramienta de CI.', 'vigente'],
[6899,[99],['III-2'],['COCOMO II','estimación de esfuerzo','mes-persona','152 horas'],[
{url:cocomo,referencia:'COCOMO II Model Definition Manual 2.1, §6, Person-month definition: fija 1 person-month en 152 horas de trabajo (19 jornadas); algunas implementaciones permiten ajustar el parámetro local.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 99: estimación de recursos y esfuerzo en el desarrollo de sistemas.'},{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo.'}
],edits[6899],'Se conserva D (152), pero se fija COCOMO II, edición 2.1, para que el supuesto sea reproducible: el manual define el mes-persona en 152 horas y advierte que ciertas implementaciones permiten ajustar el parámetro según el entorno.', 'corregida'],
[6900,[106],[],['ITIL v3','ITIL 2011','Diseño del Servicio','gestión de disponibilidad','proceso histórico'],[
{url:itil,referencia:'ITIL 2011 Glossary and abbreviations: la lista de procesos de Service Design incluye Availability Management; Demand Management pertenece a Service Strategy y Release/Configuration Management a Service Transition.'},
{url:'https://kornev-online.net/ITIL/02%20-%20ITIL%20V3%202011%20Service%20Design%20SD.pdf',referencia:'ITIL Service Design 2011, capítulo sobre Availability Management y tabla de procesos del ciclo de vida.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 106: bases conceptuales de ITIL y gestión de servicios TIC.'}
],edits[6900],'Se conserva A para la taxonomía expresamente histórica de ITIL v3/2011. Availability Management figura en Service Design; Demand Management se sitúa en Service Strategy y Release/Configuration en Service Transition. No se extrapola esa organización por procesos a ITIL 4, que reorganiza el marco en prácticas.', 'historica']
];
aplicar({numero:'1315',fecha:'2026-11-15',records,edits});
