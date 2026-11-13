const apply=require('./aplicar-lote.cjs');
const src=(url,referencia)=>({url,referencia});
const uml='https://www.omg.org/spec/UML/2.5.1/PDF';
const umlAbout='https://www.omg.org/spec/UML/2.5.1/About-UML/';
const umlInfo='https://www.omg.org/UML/what-is-uml.htm';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const dsi='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf';
const csi='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A19993efa-8c88-4205-b1a5-fb7fc0bd94de/METRICA_V3_Construccion_del_Sistema_de_Informacion.pdf';
const ias='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A507af1ff-0457-464d-b276-be26a8826b1c/METRICA_V3_Implantacion_y_Aceptacion_del_Sistema.pdf';
apply({numero:'1211',fecha:'2026-11-13',records:[
 [6376,['93'],['III-9'],['UML 2.5.1','diagramas de comportamiento','interaction overview','communication diagram'],[
  src(uml,'OMG UML 2.5.1, §§7.3, 12 y 17: los diagramas de actividades, máquinas de estado, casos de uso e interacción son diagramas de comportamiento; Interaction Overview es una variante del diagrama de actividad y usa nodos Interaction/InteractionUse.'),
  src(umlAbout,'OMG, registro normativo: UML 2.5.1 es la especificación formal publicada en diciembre de 2017.'),
  src(umlInfo,'OMG, What is UML: clasificación de diagramas de comportamiento e interacción.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 93: técnicas de diseño de software.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-9: análisis y diseño orientado a objetos y UML.')
 ],null,'Se corrige la clave de D a B y se actualiza a UML 2.5.1. A confunde el origen del diagrama de comunicación: UML 2 renombró el diagrama de colaboración de UML 1.x, no lo creó ex novo. C sobrestima la función del Interaction Overview: ofrece una vista de control de interacciones con notación de actividad, no representa sin más rutas de ejecución de toda la aplicación ni mezcla elementos de diagramas de secuencia. B expresa la clasificación normativa; se rehacen los distractores para que solo esa afirmación sea cierta.','corregida'],
 [6377,['93'],['III-9'],['UML','GeneralizationSet','generalización','disjoint','overlapping','complete','incomplete'],[
  src(uml,'OMG UML 2.5.1, §9.7.4, tabla 9.1: una GeneralizationSet combina dos dimensiones independientes: complete/incomplete (cobertura) y disjoint/overlapping (instancias comunes); ambas parejas son valores estándar.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 93: técnicas de diseño de software.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-9: UML.')
 ],null,'Se mantiene D solo después de reformular el enunciado para preguntar por las dos alternativas de la propiedad de disjunción (si los clasificadores específicos comparten instancias). En UML la cobertura es otra propiedad independiente, con valores complete/incomplete; el enunciado original mezclaba ambas dimensiones y no permitía afirmar que D fuera el único par estándar.','corregida'],
 [6378,['93'],['III-9'],['UML 2.5.1','diagrama de comportamiento','diagrama de casos de uso'],[
  src(uml,'OMG UML 2.5.1, §7.3.2 y §7.3.3: UseCase es un tipo de Behavior y UseCaseDiagram se incluye entre los diagramas de comportamiento; los diagramas de clases, componentes y paquetes son estructurales.'),
  src(umlInfo,'OMG, What is UML: clasificación de diagramas estructurales y de comportamiento.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 93: técnicas de diseño de software.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-9: análisis y diseño orientado a objetos y UML.')
 ],null,'Se conserva B, pero se elimina el dato obsoleto “UML 2.0 tiene 13 tipos”. La pregunta se ancla en la clasificación normativa vigente UML 2.5.1 y las opciones dejan clara la diferencia entre UseCaseDiagram (comportamiento) y los tres diagramas estructurales.','corregida'],
 [6379,['93'],['III-9'],['UML','ciclo de vida de objetos','creación','mensajes','destrucción','interacción'],[
  src(uml,'OMG UML 2.5.1, §§9.4.4 y 17: CreationEvent/DestructionOccurrenceSpecification modelan creación y término de lifelines; Message expresa comunicación entre participantes de una interacción.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 93: técnicas de diseño de software.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-9: diseño orientado a objetos y UML.')
 ],null,'Se conserva D como respuesta incorrecta. Se matiza que la creación, el envío de mensajes y el fin de vida son sucesos/modelos posibles del comportamiento OO; los mecanismos concretos de liberación dependen del lenguaje y del entorno. Renombrar un objeto automáticamente al dejar de ser necesario no es un suceso estándar de su ciclo de vida.','corregida'],
 [6380,['95'],['III-2'],['MÉTRICA v3','migración','carga inicial','DSI','CSI','IAS'],[
  src(dsi,'MÉTRICA v3, Diseño del Sistema de Información, actividad DSI 9: Diseño de la Migración y Carga Inicial de Datos.'),
  src(csi,'MÉTRICA v3, Construcción del Sistema de Información, actividad CSI 8: construcción de componentes y procedimientos de migración y carga inicial.'),
  src(ias,'MÉTRICA v3, Implantación y Aceptación del Sistema, actividad IAS 4: carga de datos al entorno de operación.'),
  src(a1,'Convocatoria GSI A1 2025, anexo I, tema 95: metodología MÉTRICA.'),
  src(a2,'Convocatoria GSI A2 2025, anexo IX, tema III-2: gestión y planificación del proceso de desarrollo y metodologías.')
 ],null,'Se mantiene A. Las tres fases contemplan aspectos distintos y sucesivos: diseño de la migración/carga inicial (DSI 9), construcción de sus procedimientos (CSI 8) y carga en el entorno operativo (IAS 4). Por ello EVS, ASI o MSI no sustituyen las tres siglas indicadas.','vigente']
],edits:{
 6376:{texto:'Según la clasificación de diagramas de comportamiento de UML 2.5.1, ¿cuál afirmación es correcta?',opciones:[
  'El diagrama de comunicación apareció por primera vez en UML 2.0; no existía un diagrama equivalente en UML 1.x.',
  'Los diagramas de actividad, máquinas de estado, casos de uso e interacción pertenecen a los diagramas de comportamiento.',
  'El diagrama global de interacción describe necesariamente todas las rutas de ejecución de una aplicación y combina libremente diagramas de secuencia completos.',
  'Todas las anteriores.'
 ],respuesta_correcta:1},
 6377:{texto:'En UML 2.5.1, ¿qué dos valores alternativos puede tomar la propiedad de una GeneralizationSet que indica si sus clasificadores específicos comparten instancias?',opciones:['complete, incomplete','complete, overlapping','incomplete, disjoint','disjoint, overlapping'],respuesta_correcta:3},
 6378:{texto:'De acuerdo con UML 2.5.1, ¿cuál de estos es un diagrama de comportamiento?',opcion:[1,'Diagrama de casos de uso.']},
 6379:{texto:'En una interacción orientada a objetos pueden modelarse creación, comunicación y fin de vida de instancias. ¿Cuál NO es un suceso estándar de ese ciclo de vida?',opciones:[
  'Se crea una instancia durante la ejecución.',
  'Se envía un mensaje entre participantes para comunicar una solicitud o respuesta.',
  'Finaliza la vida de una instancia; el modo concreto de liberación depende del lenguaje o entorno.',
  'El sistema renombra automáticamente la instancia cuando deja de ser necesaria.'
 ],respuesta_correcta:3},
 6380:{texto:'¿Qué procesos de MÉTRICA v3 incluyen, respectivamente, el diseño, la construcción de procedimientos y la carga operativa de la migración/carga inicial de datos?',opcion:[0,'DSI, CSI e IAS'],respuesta_correcta:0}
}});
