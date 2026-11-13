const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy=(id,title,detail)=>src(`https://drive.google.com/file/d/${id}/view?usp=drivesdk`,`ITIC Academy, ${title}, edición 2026: ${detail}`);
const B={numero:'1236',fecha:'2026-11-13',records:[
[6501,['106'],[],['COBIT 5','APO11','gestión de calidad','gobierno TIC'],[
src('https://www.isaca.org/resources/glossary','ISACA Interactive Glossary, entrada COBIT 5: marco para gobernar y gestionar la información y tecnología de la empresa.'),
src('https://community.mis.temple.edu/mis5203sec951spring2022/files/2021/05/COBIT5-Ver2-enabling.pdf','ISACA, COBIT 5: Enabling Processes, figura 16 y proceso APO11 Manage Quality: APO11 está en el dominio Align, Plan and Organise.'),
src('https://www.isaca.org/resources/news-and-trends/industry-news/2020/cobit-2019-and-cobit-5-comparison','ISACA, comparación COBIT 5/2019: COBIT 2019 es la actualización posterior; varían estructura, procesos y terminología.'),
src(a1,'Convocatoria GSI A1 2025, tema 106: gestión de servicios, planificación y control de las TIC, COBIT.'),
academy('13ohkITliw7Nrg6LKPinh9vliiwrgPdwr','bloque 41 «ITIL y COBIT»','el contenido sitúa COBIT en el tema A1-106; enumera A2 D2/C2 como materias relacionadas, no como cobertura específica del proceso APO11.')
],{texto:'En el modelo de procesos de COBIT 5 (referencia histórica, sustituida por COBIT 2019), ¿en qué dominio se encuadra APO11 «Gestionar la Calidad»?',respuesta_correcta:0},'Se confirma A: APO11 Manage Quality pertenece al dominio Align, Plan and Organise (APO). Se conserva como pregunta histórica porque solicita expresamente la estructura de COBIT 5; no debe extrapolarse sin más a la organización/terminología de COBIT 2019. El material de ITIC Academy cubre COBIT en A1-106; el programa A2 no incluye un epígrafe equivalente de gobierno TIC/COBIT, así que no se fuerza etiqueta A2.', 'historica'],
[6502,['106'],[],['COBIT','ISACA','gobierno TIC','gestión TIC'],[
src('https://www.isaca.org/store2/product/CB19FGMP-C','ISACA, COBIT 2019 Framework: Governance and Management Objectives: COBIT es un marco para el gobierno y la gestión de información y tecnología empresarial.'),
src('https://www.isaca.org/resources/glossary','ISACA Interactive Glossary: COBIT designa el marco; ISACA es la asociación profesional que lo desarrolla, no el nombre del marco.'),
src('https://www.pmi.org/pmbok-guide-standards/foundational/pmbok','Project Management Institute, PMBOK Guide: referencia de dirección de proyectos, distinta de COBIT.'),
src(a1,'Convocatoria GSI A1 2025, tema 106: planificación y control TIC; bases conceptuales de COBIT.'),
academy('13ohkITliw7Nrg6LKPinh9vliiwrgPdwr','bloque 41 «ITIL y COBIT»','explica el marco COBIT 2019 y lo sitúa en el tema A1-106. El programa A2 relaciona temas de planificación/configuración, pero no tiene un tema específico para COBIT; no se asigna etiqueta A2 directa.')
],{texto:'¿Qué marco de referencia de ISACA ofrece prácticas para el gobierno y la gestión de la información y la tecnología empresarial?',opciones:['ISACA, la asociación profesional que publica el marco.','PMBOK, guía de buenas prácticas de dirección de proyectos.','COBIT, marco de gobierno y gestión de información y tecnología empresarial.','Ninguna de las anteriores.'],respuesta_correcta:2},'Se corrige la clave: C (COBIT). Se corrigen también las erratas «PNBOK» y «COVIT» y se distingue el nombre del marco de la organización que lo publica. COBIT no es solo control/supervisión de TI: el marco actual COBIT 2019 cubre gobierno y gestión de I&T empresarial. El programa actual lo vincula directamente con A1-106; no se fuerza correspondencia A2.', 'corregida'],
[6503,['96','98'],['III-13'],['CMMI','madurez de procesos','mejora del desarrollo de software','calidad del software'],[
src('https://cmmiinstitute.com/resource-files/public/cmmi-model-materials/cmmi-adoption-and-transition-guide','CMMI Institute, CMMI Model Adoption and Transition Guide: explica la adopción del modelo para mejorar el rendimiento y la capacidad de los procesos de la organización.'),
src('https://cmmiinstitute.com/learning/appraisals/levels','CMMI Institute, Levels of Capability and Performance: relaciona la mejora de procesos con niveles de capacidad y esfuerzos de mejora priorizados.'),
src('https://www.isaca.org/resources/glossary','ISACA Interactive Glossary, CMMI: marco de mejores prácticas para desarrollar y mejorar el rendimiento mediante la mejora de procesos.'),
src(a1,'Convocatoria GSI A1 2025, temas 96 y 98: calidad en desarrollo, garantía de calidad y evaluación de la calidad del software.'),
src(a2,'Convocatoria GSI A2 2025, tema III.13: modelos, métricas y estándares para calidad del software.'),
academy('17PDaqPVVwhzfeplx9bzp8XjEXm_qlami','bloque 39 «Calidad y mantenimiento»','incluye el modelo CMMI junto con ISO/IEC 330xx, métricas y modelos de calidad; en A2 el material conserva D7 para pruebas, mientras que el encaje oficial actual de los modelos de calidad es III.13.')
],{texto:'Si el objetivo es mejorar de forma sistemática la capacidad de los procesos de desarrollo de software de una organización, ¿qué modelo de los siguientes se ajusta mejor?',respuesta_correcta:1},'Se confirma B. CMMI ofrece un conjunto integrado de prácticas y niveles de capacidad/rendimiento para mejorar procesos; no es una metodología de desarrollo concreta ni un marco general de gobierno TIC. ITIL se centra en gestión de servicios, COBIT en gobierno/gestión empresarial de I&T y MÉTRICA es una metodología de planificación/desarrollo. Se acota el enunciado para evitar que «desarrollo de aplicaciones» se interprete como una herramienta para programar aplicaciones.', 'corregida'],
[6504,['100'],['IV-4'],['gestión de configuración','identificación','control de cambios','status accounting'],[
src('https://www.nasa.gov/wp-content/uploads/2018/09/nasa_systems_engineering_handbook_0.pdf','NASA Systems Engineering Handbook, §6.5.1.2: distingue identificación de configuración, control de cambios, contabilidad/estado de configuración y verificación/auditoría; se define seguimiento y trazabilidad de los cambios.'),
src('https://swehb.nasa.gov/spaces/SWEHBVD/pages/102695465/SWE-083+Status+Accounting','NASA Software Engineering Handbook, SWE-083 Status Accounting: registro del estado de productos de configuración y de sus solicitudes de cambio durante el ciclo de vida.'),
src(a1,'Convocatoria GSI A1 2025, tema 100: gestión de configuración y versiones.'),
src(a2,'Convocatoria GSI A2 2025, tema IV.4: gestión de configuración, control de cambios y de versiones.'),
academy('13ohkITliw7Nrg6LKPinh9vliiwrgPdwr','bloque 41 «ITIL y COBIT»','el contenido A2 C2 cubre gestión de configuración, control de cambios/versiones y operación; la identificación, el control y la contabilidad se separan conforme a la guía técnica de NASA.')
],{texto:'¿Cuáles de las siguientes son actividades de la gestión de configuración? 1) Identificar elementos, estructura y líneas base con nombres/formatos inequívocos; 2) revisar y controlar la incorporación de cambios; 3) registrar el estado y la trazabilidad de los cambios (quién, qué, cuándo, por qué y cómo).',opciones:['Las tres.','Solo 1 y 2.','Solo 2 y 3.','Solo 1 y 3.'],respuesta_correcta:0},'Se conserva A, pero se corrige el alcance del concepto. La pregunta original atribuía a «identificación de configuración» actividades que corresponden a funciones distintas de la gestión de configuración: identificar elementos y líneas base; controlar cambios; y mantener la contabilidad/estado y trazabilidad. Las tres son funciones de la gestión de configuración, no de la identificación tomada aisladamente.', 'corregida'],
[6505,['90'],['III-9'],['UML','máquina de estados','comportamiento','eventos','transiciones'],[
src('https://www.omg.org/spec/UML/2.5.1/PDF','OMG, UML 2.5.1, cláusula 14 State Machines: una máquina de estados es un comportamiento que modela la respuesta a eventos mediante estados y transiciones; especifica comportamiento de clasificadores/objetos.'),
src('https://www.omg.org/spec/UML','OMG, catálogo oficial de UML 2.5.1.'),
src(a1,'Convocatoria GSI A1 2025, tema 90: análisis dinámico y modelado del comportamiento/procesos.'),
src(a2,'Convocatoria GSI A2 2025, tema III.9: UML, análisis y diseño orientado a objetos.'),
academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN','bloque 38 «Análisis, diseño y construcción de sistemas de información»','incluye UML y sus diagramas de comportamiento; la semántica de state machine se contrasta con OMG UML 2.5.1, y se conserva la etiqueta A2 oficial III.9 frente a D9 heredada del material.')
],{texto:'En UML 2.5.1, ¿qué describe una máquina de estados de comportamiento?',opciones:['Un modelo computacional genérico de grafos cuyos vértices representan estados, sin relación necesaria con el comportamiento de un clasificador.','Un dispositivo programable que ejecuta tareas de control en un sistema automático.','Un comportamiento que especifica los estados y transiciones por los que pasa un objeto en respuesta a eventos.','Un sistema lógico de entrada, procesador y salida.'],respuesta_correcta:2},'Se confirma C y se precisa la definición UML: una máquina de estados es un comportamiento que describe estados y transiciones activados por eventos, pudiendo especificar el comportamiento de un objeto/clasificador. A es una descripción genérica de autómatas, no la definición específica; B corresponde a un controlador físico y D es una descripción genérica de procesamiento.', 'vigente']
]};
apply(B);
{
 const fs=require('node:fs'),p=require('node:path');
 const dataPath=p.join(__dirname,'..','preguntas_preparatic.json'),logPath=p.join(__dirname,'cambios-lote-1236.json');
 const data=JSON.parse(fs.readFileSync(dataPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
 const notes={
 6501:'Cotejo directo con ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026.1: incluye COBIT en A1-106; A2 D2/C2 son materias relacionadas, no cobertura específica de APO11. Se conserva la numeración BOE A1-106 y no se fuerza etiqueta A2.',
 6502:'Cotejo directo con ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026.1: COBIT se trata bajo A1-106. La convocatoria A2 vigente no contiene un tema propio de COBIT/gobierno TIC, por lo que no se fuerza clasificación A2.',
 6503:'Cotejo directo con ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026: el índice incluye CMMI, ISO/IEC 330xx y TMMi. La academia conserva D7 para pruebas A2; la correspondencia oficial actual para modelos de calidad es A2-III.13.',
 6504:'Cotejo directo con ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026.1: su mapeo A2 C2 trata gestión de configuración, cambios y versiones. Se registra el epígrafe oficial vigente A2-IV.4, no la etiqueta académica heredada C2.',
 6505:'Cotejo directo con ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1: incluye UML y diagramas de comportamiento. Su etiqueta heredada A2 D9 se traduce a la referencia oficial vigente III.9.'
 };
 const byId=Object.fromEntries(log.cambios.map(c=>[c.id,c]));
 for(const [key,note] of Object.entries(notes)){const id=Number(key),q=data.preguntas.find(x=>x.id===id),c=byId[id];q.clasificacion.bloque_academia=note;q.clasificacion.nota=note;c.actualizada.clasificacion.bloque_academia=note;c.actualizada.clasificacion.nota=note;c.actualizada.revision.fuentes=structuredClone(q.revision.fuentes);c.actualizada.revision.observaciones=q.revision.observaciones;}
 fs.writeFileSync(dataPath,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
}
