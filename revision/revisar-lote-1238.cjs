const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const academy=(id,title,detail)=>src(`https://drive.google.com/file/d/${id}/view?usp=drivesdk`,`ITIC Academy, ${title}, edición 2026: ${detail}`);
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const B={numero:'1238',fecha:'2026-11-13',records:[
[6511,['99'],['III-13'],['puntos de función','IFPUG','medición del tamaño funcional'],[
src('https://ifpug.org/ifpug-standards/fpa','IFPUG, Function Point Analysis: identifica cinco tipos de función del usuario: entradas, salidas, consultas, datos internos y datos de interfaz externa; «usuarios» no es tipo de función.'),
src('https://www.iso.org/standard/35689.html','ISO/IEC 20926, guía del método IFPUG: enumera External Input, External Output, External Inquiry, Internal Logical File y External Interface File.'),
src(a1,'Convocatoria GSI A1 2025, tema 99: estimación de recursos y esfuerzo en desarrollo de sistemas de información.'),
src(a2,'Convocatoria GSI A2 2025, tema III.13: métricas, modelos y medida del software; se usa como contexto de medición funcional.'),
academy('17PDaqPVVwhzfeplx9bzp8XjEXm_qlami','bloque 39 «Calidad y mantenimiento»','trata el análisis de puntos de función como medida de tamaño funcional y diferencia FPA de COSMIC; reconoce los cinco tipos de función del usuario.')
],{texto:'En el método clásico IFPUG de puntos de función, ¿cuál de estos conceptos NO es uno de los cinco tipos de función que se cuentan?',respuesta_correcta:3},'Se confirma D. El FPA clasifica entradas externas, salidas externas, consultas externas, ficheros lógicos internos y ficheros de interfaz externa; los usuarios pueden ser actores de las funciones, pero no constituyen un tipo de función contado. Se reformula «cálculo» para hacer explícito que se pregunta por tipos funcionales IFPUG. A1-99; A2-III.13 como encaje relacionado con medición del software.', 'corregida'],
[6512,['106'],[],['ITIL 4','gestión de solicitudes de servicio','usuario'],[
src('https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil4-practices-service-request-management-3690','PeopleCert, ITIL 4 Service Request Management: la práctica gestiona peticiones predefinidas iniciadas por usuarios.'),
src('https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565','PeopleCert, ITIL 4 Foundation: el usuario consume/usa el servicio; el cliente define requisitos y acuerda resultados, no son términos intercambiables.'),
src(a1,'Convocatoria GSI A1 2025, tema 106: ITIL, gestión de servicios y operación TIC.'),
academy('13ohkITliw7Nrg6LKPinh9vliiwrgPdwr','bloque 41 «ITIL y COBIT»','cubre ITIL en A1-106 y diferencia actores y prácticas de gestión de servicio; no se fuerza epígrafe A2 directo.')
],{texto:'En ITIL 4, ¿quién inicia una petición de servicio predefinida?',respuesta_correcta:0},'Se confirma A. La práctica de gestión de solicitudes trata solicitudes iniciadas por usuarios; un representante autorizado puede cursarla en su nombre, pero no cambia quién es el usuario solicitante del servicio. Se cambia «rol» por «quién inicia» para eliminar ambigüedad entre usuarios, clientes, patrocinadores y proveedor. A1-106; sin correspondencia A2 directa.', 'corregida'],
[6513,['88'],['III-9'],['polimorfismo','orientación a objetos','sobrescritura'],[
src('https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html','Oracle Java Tutorials, Polymorphism: una referencia de tipo común puede invocar en tiempo de ejecución la implementación sobrescrita correspondiente al tipo concreto del objeto.'),
src('https://docs.oracle.com/javase/specs/jls/se24/jls24.pdf','Java Language Specification, §8.4.9: define sobrecarga cuando métodos de una clase tienen el mismo nombre y firmas que no son override-equivalent; esto es distinto del polimorfismo dinámico por sobrescritura.'),
src(a1,'Convocatoria GSI A1 2025, tema 88: metodologías y análisis funcional; concepto general de programación orientada a objetos relacionado.'),
src(a2,'Convocatoria GSI A2 2025, tema III.9: análisis y diseño orientado a objetos.'),
academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN','bloque 38 «Análisis, diseño y construcción de sistemas de información»','incluye fundamentos OO/UML y distingue polimorfismo de mecanismos de sobrecarga y sobrescritura.')
],{texto:'En programación orientada a objetos, ¿qué propiedad permite invocar la misma operación a través de una interfaz común y obtener un comportamiento distinto según la clase concreta del objeto?',respuesta_correcta:2},'Se mantiene C (polimorfismo), pero se sustituye la definición errónea/ambigua sobre «dos métodos con el mismo nombre». La mera coincidencia de nombres puede ser sobrecarga y no basta para concluir polimorfismo; aquí se describe despacho dinámico de implementaciones sobrescritas. A1-88 como contexto de desarrollo y A2-III.9.', 'corregida'],
[6514,['88'],[],['Scrum','Scrum Team','Product Owner','Scrum Master','Developers'],[
src('https://scrumguides.org/scrum-guide.html','Scrum Guide 2020, apartado Scrum Team: el equipo está compuesto por un Product Owner, un Scrum Master y Developers; no tiene subequipos ni jerarquías internas.'),
src('https://www.scrum.org/resources/scrum-guide','Scrum.org, portal de la guía oficial de Scrum y sus autores Ken Schwaber y Jeff Sutherland.'),
src(a1,'Convocatoria GSI A1 2025, tema 88: metodologías ágiles, Scrum y Kanban.'),
academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN','bloque 38 «Análisis, diseño y construcción de sistemas de información»','el resumen y la sección Scrum del material de 2026 indican que el Scrum Team está formado por Product Owner, Scrum Master y Developers; el epígrafe oficial A1 es el 88.')
],{texto:'Según la Scrum Guide 2020, ¿quiénes componen el Scrum Team?',opciones:['El Scrum Master y los Developers.','El Product Owner y el Scrum Master.','El Product Owner y los Developers.','El Product Owner, el Scrum Master y los Developers.'],respuesta_correcta:3},'Se confirma D. La guía 2020 describe tres accountabilities dentro de un único Scrum Team: Product Owner, Scrum Master y Developers. Se normaliza «equipo de desarrolladores» a Developers, que no implica únicamente programadores. A1-88; no se fuerza tema A2 Scrum específico.', 'vigente'],
[6515,['86'],['III-1'],['ciclo de vida del software','modelos de ciclo de vida','análisis estructurado'],[
src('https://voyager.gsfc.nasa.gov/Library/Software_Guide_HSTX.pdf','NASA Software Engineering Guidebook, capítulo Lifecycle Process Models: presenta modelos de ciclo de vida de software, incluidos cascada, espiral, incremental y prototipos.'),
src('https://www.cs.uct.ac.za/mit_notes/software/htmls/ch02s03.html','University of Cape Town, Software Engineering notes: define un modelo de proceso/ciclo de vida como modelo descriptivo de prácticas para desarrollar software.'),
src('https://www.cs.uct.ac.za/mit_notes/software/htmls/ch02s04.html','University of Cape Town, Software Engineering notes: separa modelos de proceso/ciclo de vida de métodos/técnicas de análisis estructurado.'),
src(a1,'Convocatoria GSI A1 2025, tema 86: ciclo de vida de sistemas y modelos de ciclo de vida.'),
src(a2,'Convocatoria GSI A2 2025, tema III.1: fases y modelos del ciclo de vida de sistemas.'),
academy('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN','bloque 38 «Análisis, diseño y construcción de sistemas de información»','incluye expresamente ciclo de vida y modelos, y separa análisis estructurado del proceso de desarrollo.')
],{texto:'¿Cuál de los siguientes es una técnica de análisis del sistema, pero no un modelo de ciclo de vida del software?',opciones:['Modelo en cascada.','Modelo en espiral.','Análisis estructurado de Yourdon/DeMarco.','Modelo basado en prototipos.'],respuesta_correcta:2},'Se confirma C y se elimina la ambigüedad de «modelo estructurado»: cascada, espiral y prototipado son familias de modelos de ciclo de vida; Yourdon/DeMarco se refiere a técnicas de análisis estructurado, no a un modelo de ciclo de vida. Se asignan A1-86 y A2-III.1.', 'corregida']
]};
apply(B);
{
 const fs=require('node:fs'),p=require('node:path');
 const dataPath=p.join(__dirname,'..','preguntas_preparatic.json'),logPath=p.join(__dirname,'cambios-lote-1238.json');
 const data=JSON.parse(fs.readFileSync(dataPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
 const notes={
 6511:'Cotejo con ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1: el material dedica un apartado a puntos de función y distingue FPA de COSMIC. La clasificación oficial es A1-99 y, como medición de software, A2-III.13 relacionada.',
 6512:'Cotejo con ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026.1: ITIL se estudia bajo A1-106; las peticiones son iniciadas por usuarios. No se localiza un epígrafe A2 específico de ITIL.',
 6513:'Cotejo con ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1: los conceptos de orientación a objetos incluyen polimorfismo y se distinguen de sobrecarga/sobrescritura; encaje oficial A2-III.9.',
 6514:'Cotejo directo con ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1: reproduce correctamente las tres accountabilities del Scrum Team y lo ubica en A1-88; no se fuerza etiqueta A2 Scrum.',
 6515:'Cotejo directo con ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1: contiene un apartado de ciclo de vida y sus modelos y separa modelado/análisis estructurado. A2-III.1 sigue la numeración oficial vigente.'
 };
 const byId=Object.fromEntries(log.cambios.map(c=>[c.id,c]));
 for(const [key,note] of Object.entries(notes)){const id=Number(key),q=data.preguntas.find(x=>x.id===id),c=byId[id];q.clasificacion.bloque_academia=note;q.clasificacion.nota=note;c.actualizada.clasificacion.bloque_academia=note;c.actualizada.clasificacion.nota=note;c.actualizada.revision.fuentes=structuredClone(q.revision.fuentes);c.actualizada.revision.observaciones=q.revision.observaciones;}
 fs.writeFileSync(dataPath,JSON.stringify(data,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
}
