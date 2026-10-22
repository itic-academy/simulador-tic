const records = [
  [836,[89],['III-4'],['EER','supertipo','subtipo','especialización total','solapamiento','restricción de totalidad'],[
    {url:'https://people.inf.elte.hu/kiss/DB/fundamentals-of-database-systems.pdf',referencia:'Elmasri y Navathe, Fundamentals of Database Systems, 7.ª ed., cap. 4.3: distingue especializaciones totales/parciales y disjuntas/solapadas; en una especialización total cada entidad del supertipo pertenece al menos a un subtipo.'},
    {url:'https://studylib.es/doc/9474666/fundamentos-de-sistemas-de-bases-de-datos',referencia:'Elmasri y Navathe, Fundamentos de Sistemas de Bases de Datos, cap. 4.3.1: expresa la regla de que al borrar una entidad del supertipo se elimina de sus subtipos y define la obligación de pertenencia de las especializaciones totales.'}
  ],null,'Se formaliza el supuesto. «Total» exige que cada entidad del supertipo pertenezca al menos a un subtipo; «solapada» permite pertenecer a varios. Por tanto, al retirar la única pertenencia que quedaba, la entidad debe eliminarse también del supertipo o asignarse a otro subtipo para no dejar una entidad sin clasificar. El borrado del supertipo, por su parte, se propaga a todos los subtipos a los que pertenecía.','corregida'],
  [837,[90],['III-2'],['BPMN 2.0','XPDL','XML','modelado de procesos','intercambio de modelos'],[
    {url:'https://www.omg.org/spec/BPMN/2.0.2/PDF/',referencia:'OMG, Business Process Model and Notation (BPMN), versión 2.0.2: define notación gráfica, metamodelo y serialización XML estandarizada de modelos BPMN.'},
    {url:'https://wfmc.org/vote_xpdl2/',referencia:'Workflow Management Coalition, XPDL 2.0, documento WFMC-TC-1025: presenta XPDL como formato XML de intercambio de definiciones de procesos entre herramientas y distingue las perspectivas de XPDL y BPMN.'},
    {url:'https://wfmc.org/xpdl/',referencia:'Workflow Management Coalition, XPDL: describe el formato como serialización/intercambio y señala el soporte de descripciones gráficas y propiedades ejecutables de modelos BPMN.'}
  ],null,'Se actualiza la comparación para BPMN 2.0: BPMN no es solo una notación visual, pues la especificación también define un metamodelo y serialización XML. XPDL sigue siendo un formato XML específico de intercambio que puede transportar información gráfica y propiedades ejecutables. La distinción simplificada «notación humana frente a formato máquina» se aplicaba mejor a BPMN 1.x y no describe correctamente BPMN 2.0.','corregida'],
  [838,[95],['III-2'],['SPEM','OMG','metamodelo','procesos de software','métodos de desarrollo'],[
    {url:'https://www.omg.org/spec/SPEM/About-SPEM',referencia:'OMG, About SPEM 2.0: publica la especificación formal del Software & Systems Process Engineering Metamodel y sus artefactos normativos.'},
    {url:'https://www.omg.org/spec/SPEM/2.0/PDF/',referencia:'OMG, Software & Systems Process Engineering Metamodel, versión 2.0: define el metamodelo y explica su actualización para UML 2 y MOF 2.'},
    {url:'https://www.omg.org/mda/specs.htm',referencia:'OMG, MDA Specifications: describe SPEM como marco estándar para describir metodologías y procesos, sin estandarizar una metodología concreta.'}
  ],null,'SPEM significa Software & Systems Process Engineering Metamodel. Es el metamodelo de OMG para describir procesos y métodos de ingeniería de software y sistemas. SPEM 2.0 se basa en MOF y aprovecha UML 2; describirlo simplemente como un lenguaje genérico que «extiende UML» es impreciso.','corregida'],
  [839,[101],['III-8'],['mantenimiento de software','ISO/IEC/IEEE 14764:2022','mantenimiento aditivo','mantenimiento perfectivo','ampliación funcional'],[
    {url:'https://www.iso.org/standard/80710.html',referencia:'ISO, ISO/IEC/IEEE 14764:2022, Software engineering — Software life cycle processes — Maintenance: ficha de la edición vigente que define los tipos de mantenimiento.'},
    {url:'https://preview.sist.si/sist-preview/80710/9a26fc3a1a464fa286fb85d6c1eeed31/ISO-IEC-IEEE-14764-2022.pdf',referencia:'SIST, vista previa autorizada de ISO/IEC/IEEE 14764:2022, cláusulas 3.1.2 y 3.1.9: mantenimiento aditivo añade funciones o características para mejorar el uso; perfectivo mejora prestaciones, mantenibilidad u otros atributos.'}
  ],null,'La pregunta se ajusta a la clasificación actual de ISO/IEC/IEEE 14764:2022. Añadir nuevas funciones o características para ampliar el uso es mantenimiento aditivo. El mantenimiento perfectivo cubre mejoras para usuarios y atributos como rendimiento o mantenibilidad; «evolutivo» puede usarse informalmente, pero no es el tipo preciso de esta norma.','corregida'],
  [840,[95],['III-2'],['MÉTRICA v3','EVS 2','estudio de situación actual','catalogación','diagrama de clases','diagrama de flujo de datos'],[
    {url:'https://www.preparatic.org/material/20090425/Metricav3.pdf',referencia:'MÉTRICA Versión 3, Ministerio de Administraciones Públicas, copia del documento metodológico oficial: en EVS 2 (estudio de la situación actual), la catalogación aparece en EVS 2.2 y los diagramas de clases y de flujo de datos entre las técnicas de EVS 2.3.'},
    {url:'https://manuel.cillero.es/doc/metodologia/metrica-3/procesos-principales/evs/actividad-2/',referencia:'Transcripción consultable de la actividad EVS 2: enumera catalogación en la identificación de usuarios y los diagramas de clases y de flujo de datos en la descripción de sistemas existentes.'}
  ],null,'La opción C reúne técnicas y prácticas usadas en distintas tareas de EVS 2: catalogación en EVS 2.2 y diagramas de clases y de flujo de datos en EVS 2.3. Se mantiene como respuesta correcta dentro de MÉTRICA v3, metodología histórica que sigue siendo objeto de examen por estar citada expresamente en el temario.','vigente']
];

const edits = {
  836:{texto:'En una especialización EER total y solapada, toda entidad del supertipo debe pertenecer al menos a un subtipo y puede pertenecer a varios. Si se elimina su pertenencia al único subtipo al que pertenece, ¿qué debe hacerse para conservar la restricción de totalidad?',opciones:[
    'Puede permanecer en el supertipo sin pertenecer a ningún subtipo.',
    'Debe eliminarse siempre del supertipo al borrar cualquier pertenencia a un subtipo, aunque pertenezca a otros.',
    'Debe eliminarse también del supertipo o asignarse a otro subtipo antes de retirar su última pertenencia.',
    'La especialización total impide que una entidad pertenezca a varios subtipos.'
  ],respuesta_correcta:2},
  837:{texto:'¿Qué afirmación describe correctamente la relación entre BPMN 2.0 y XPDL?',opciones:[
    'BPMN 2.0 define solo una notación visual; no establece una representación XML de los modelos.',
    'BPMN 2.0 define notación gráfica y serialización XML; XPDL es además un formato XML de intercambio que puede conservar información gráfica y propiedades ejecutables.',
    'XPDL define la notación gráfica BPMN y BPMN es únicamente el formato XML para intercambiar procesos.',
    'BPMN y XPDL son nombres del mismo estándar y usan necesariamente el mismo metamodelo.'
  ],respuesta_correcta:1},
  838:{texto:'¿Qué describe con mayor precisión SPEM 2.0, especificación de OMG?',opciones:[
    'Un metamodelo para describir procesos y métodos de ingeniería de software y sistemas, basado en MOF y alineado con UML 2.',
    'Una métrica de tamaño funcional para estimar proyectos de software.',
    'Un consorcio internacional que crea lenguajes de modelado.',
    'Un estándar dedicado exclusivamente a definir roles de usuario.'
  ],respuesta_correcta:0},
  839:{texto:'Según ISO/IEC/IEEE 14764:2022, ¿cómo se denomina el mantenimiento realizado después de la entrega para añadir nuevas funciones o características que amplíen el uso del producto?',opciones:[
    'Mantenimiento correctivo.',
    'Mantenimiento perfectivo.',
    'Mantenimiento aditivo.',
    'Mantenimiento adaptativo.'
  ],respuesta_correcta:2}
};

require('./aplicar-lote.cjs')({numero:'104',fecha:'2026-10-22',records,edits});
