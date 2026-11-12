const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metrica='https://administracionelectronica.gob.es/documentacion/metodologias-guias';
const gp='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf';
const asid='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const tec='https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf';
const dsi='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf';
const uml='https://www.omg.org/spec/UML/2.5.1/PDF';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5631,[95],['III-2'],['MÉTRICA v3','ciclo de vida','desarrollo de sistemas','requisitos','instalación'],[
  ref(metrica,'Portal oficial PAe, MÉTRICA v3: la metodología sistematiza las actividades de soporte al ciclo de vida del software. La definición del proceso de desarrollo de v3 abarca desde el análisis de requisitos hasta la instalación del software; el mantenimiento se trata como proceso separado MSI.'),
  ref('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aaebb954c-79fc-4701-a2d0-3cd7f7e5a79b/TECNIMAP_2010_CCAA_CASTILLA_Y_LEON_SAUSS.pdf','Documento técnico alojado en PAe, apartado Implementación: reproduce la definición completa del proceso de desarrollo MÉTRICA v3, desde el análisis de requisitos hasta la instalación del software.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 95 (MÉTRICA).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.2 (gestión y planificación del proceso de desarrollo y metodologías).')
 ],null,'Vigente, respuesta A. La descripción de MÉTRICA v3 delimita su proceso de desarrollo desde el análisis de requisitos hasta la instalación del software. El mantenimiento de sistemas se aborda aparte en MSI; por ello no se extiende aquí el proceso de desarrollo hasta mantenimiento. La frase original se conserva porque coincide con la definición documentada.','vigente'],
 [5632,[90,95],['III-2'],['MÉTRICA v3','DFD','flujo de diálogo','flujo de control','proceso de control'],[
  ref(tec,'MÉTRICA v3, Técnicas y Prácticas, § Diagramas de flujo de datos: flujo de diálogo entre proceso y almacén significa consulta y actualización; el flujo de control se distingue por notación discontinua; un proceso de control coordina y sincroniza actividades de otros procesos.'),
  ref(asid,'MÉTRICA v3, Análisis del Sistema de Información, ASI 7: modelo de procesos estructurado mediante DFD y especificaciones de procesos.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 90 (modelado de procesos) y 95 (MÉTRICA).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.2 (metodologías y proceso de desarrollo).')
 ],null,'Corregida, respuesta C. En MÉTRICA v3 un flujo de diálogo conecta un proceso con un almacén y representa una consulta y una actualización. No se dibuja como flujo de control discontinuo: esa notación distingue el flujo de control. El proceso de control coordina/sincroniza actividades de otros procesos, no accesos a almacenes. Así quedan descartadas las otras opciones sin ambigüedad.','corregida'],
 [5633,[89,95],['III-9'],['MÉTRICA v3','UML','diagrama de clases','relaciones entre clases','inclusión'],[
  ref(tec,'MÉTRICA v3, Técnicas y Prácticas, § Diagrama de clases: modela clases y sus relaciones, entre ellas asociación, agregación/composición y generalización; la relación «include» pertenece a casos de uso.'),
  ref(uml,'OMG, UML 2.5.1, § 18.1 (UseCases): Include es una relación dirigida entre dos UseCases; la especificación separa estas relaciones de las asociaciones/generalizaciones entre clasificadores/clases.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, temas 89 (modelado de dominio) y 95 (MÉTRICA).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.9 (análisis y diseño orientado a objetos y UML).')
 ],null,'Corregida, respuesta A. «Inclusión» (UML «include») es una relación entre casos de uso, no una relación entre clases. Agregación, composición y generalización/herencia sí pueden representarse en diagramas de clases. Se conserva el vocabulario del examen y se hace explícita la distinción de metamodelo UML.','corregida'],
 [5634,[95],['III-7'],['MÉTRICA v3','pruebas del sistema','pruebas funcionales','especificaciones de usuario'],[
  ref(dsi,'MÉTRICA v3, Diseño del Sistema de Información, planificación y realización de pruebas del sistema: se comprueba el sistema completo frente a especificaciones funcionales y técnicas; distingue niveles de prueba y responsabilidades.'),
  ref(tec,'MÉTRICA v3, Técnicas y Prácticas, apartado Pruebas del sistema: enumera la prueba funcional entre los tipos de prueba de sistema y la relaciona con las funciones especificadas por el usuario.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 95 (MÉTRICA).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.7 (pruebas: planificación, documentación y pruebas de software, hardware, procedimientos y datos).')
 ],null,'Corregida, respuesta C. MÉTRICA v3 incluye las pruebas funcionales entre los tipos de pruebas del sistema. Para fijar el nivel y no confundirlo con pruebas unitarias o de integración, el enunciado ahora especifica que se evalúan funciones del sistema frente a las especificaciones del usuario.','corregida'],
 [5635,[95],['III-2'],['MÉTRICA v3','Gestión de Proyectos','GPI','GPS','GPF','planificación del proyecto'],[
  ref(gp,'MÉTRICA v3, Gestión de Proyectos, descripción y objetivos: la interfaz GP distingue tres grupos: Inicio (GPI), Seguimiento y Control (GPS) y Finalización (GPF). Estimación de Esfuerzo y Planificación del Proyecto son actividades/tareas del grupo GPI, no un grupo adicional.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 95 (MÉTRICA).'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.2 (gestión y planificación del proceso de desarrollo).')
 ],null,'Corregida, respuesta B. La interfaz GP organiza las actividades en tres grupos: inicio, seguimiento y control y finalización. La planificación del proyecto se realiza dentro de GPI (Inicio); no constituye un cuarto grupo de actividad. Se corrige el enunciado para identificar expresamente la interfaz GP.','corregida']
];
const edits={
 5632:{texto:'Según la técnica de diagramas de flujo de datos de MÉTRICA v3, indique la afirmación correcta.',opciones:[
  'El flujo de diálogo se dibuja discontinuo para indicar que es un flujo de control.',
  'Un proceso de control coordina directamente los accesos a almacenes de datos.',
  'Un flujo de diálogo conecta un proceso con un almacén y representa una consulta y una actualización.',
  'Un proceso de control representa una entidad externa que origina datos.'
 ],respuesta_correcta:2},
 5633:{texto:'Según MÉTRICA v3 y UML, ¿cuál de las siguientes NO es una relación entre clases representable en un diagrama de clases?',opciones:['Inclusión («include» entre casos de uso).','Agregación.','Generalización o herencia.','Composición.'],respuesta_correcta:0},
 5634:{texto:'Según MÉTRICA v3, ¿qué tipo de prueba del sistema comprueba que el sistema implementa las funciones especificadas por los usuarios?',opciones:['Pruebas globales.','Pruebas integradas.','Pruebas funcionales.','Pruebas unitarias.'],respuesta_correcta:2},
 5635:{texto:'En la interfaz Gestión de Proyectos (GP) de MÉTRICA v3, ¿cuál NO es uno de sus tres grupos de actividades?',opciones:['Actividades de Seguimiento y Control (GPS).','Actividades de Planificación del Proyecto.','Actividades de Finalización del Proyecto (GPF).','Actividades de Inicio del Proyecto (GPI).'],respuesta_correcta:1}
};
aplicar({numero:'1062',fecha:'2026-11-12',records,edits});
