const apply = require('./aplicar-lote.cjs');

const records = [
  [2431, [92], ['III-9'], ['UML', 'diagrama de componentes', 'componentes', 'interfaces', 'dependencias'], [
    { url: 'https://www.omg.org/spec/UML/2.5.1/PDF', referencia: 'OMG, UML 2.5.1, §11 (Components): componentes como partes modulares con interfaces/dependencias; se distingue del capítulo  deployment, que modela nodos y asignación física de artefactos.' },
    { url: 'https://www.omg.org/spec/UML', referencia: 'OMG, ficha normativa UML: UML 2.5.1 es la especificación formal publicada por el consorcio.' }
  ], '', 'El original usaba «componentes físicos» y «relaciones con el entorno», expresiones que podían confundirse con el diagrama de despliegue. Se reescribe para preguntar por componentes como módulos de software, sus interfaces proporcionadas/requeridas y dependencias. En UML el diagrama de componentes representa esa estructura modular; el de despliegue representa nodos/entornos de ejecución y la asignación física de artefactos. Se ajusta el término «colaboración» del original al diagrama de comunicación de UML 2.x.', 'corregida'],
  [2432, [88], ['III-3'], ['MÉTRICA v3', 'JAD', 'ASI 2', 'requisitos', 'sesiones de trabajo', 'usuarios'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, ASI 2 Establecimiento de Requisitos: las sesiones de trabajo con usuarios completan el catálogo de requisitos detallado; entre las técnicas de recopilación cita reuniones, entrevistas y Joint Application Design (JAD).' }
  ], '', 'Se preserva el contenido correcto pero se formula contra la actividad ASI 2 y la fuente primaria: las sesiones de trabajo con usuarios sirven para completar la especificación detallada de requisitos, y JAD es una de las técnicas posibles. Se evita asegurar que JAD sirve principalmente para la alta dirección o que su producto dependa del Plan de Sistemas de Información. La fuente consultada no atribuye a esta afirmación validación de prototipos, por lo que se elimina ese añadido del original.', 'corregida'],
  [2433, [95], ['III-2'], ['MÉTRICA v3', 'IAS', 'CSI', 'implantación', 'aceptación', 'manuales de usuario', 'SLA'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A507af1ff-0457-464d-b276-be26a8826b1c/METRICA_V3_Implantacion_y_Aceptacion_del_Sistema.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Implantación y Aceptación del Sistema: incluye carga de datos al entorno de operación y determinación del acuerdo de nivel de servicio (IAS 8.3).' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A19993efa-8c88-4205-b1a5-fb7fc0bd94de/METRICA_V3_Construccion_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Construcción del Sistema de Información: los manuales de usuario son el producto de CSI 6.1, «Elaboración de los Manuales de Usuario».' }
  ], '', 'Se convierte la pregunta negativa en una clasificación directa entre dos procesos. MÉTRICA sitúa la carga de datos y el establecimiento del SLA dentro de Implantación y Aceptación (IAS); la elaboración de manuales de usuario corresponde a CSI 6.1, Construcción del Sistema de Información. Así se conserva la distinción comprobable y no se depende de opciones ausentes o de una negación difícil de leer.', 'corregida'],
  [2434, [95], ['III-2'], ['MÉTRICA v3', 'gestión de proyectos', 'GPI', 'GPS', 'JRP', 'WBS', 'PERT', 'extrapolación'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Gestión de Proyectos: GPI 1 emplea Albrecht/MARK II para puntos función y esfuerzo; GPI 2 incluye WBS, PERT y Gantt; GPS 11.2 produce y utiliza el Diagrama de Extrapolación.' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, ASI 2: JAD aparece como técnica de trabajo/recopilación de requisitos con usuarios, no como técnica del interfaz de gestión de proyectos.' }
  ], '', 'Se mantiene JRP como la respuesta que no pertenece al interfaz de Gestión de Proyectos (GPI/GPS), pero se sustituye la formulación general por una lista delimitada de técnicas que sí aparecen en las actividades de gestión. La guía oficial encuadra WBS y PERT en la planificación, el Diagrama de Extrapolación en el seguimiento, y las estimaciones Albrecht/MARK II en GPI 1. La guía de ASI 2 cita JAD (Joint Application Design) como técnica para sesiones de requisitos; JAD y JRP son siglas distintas y no se intercambian.', 'corregida'],
  [2435, [95], ['III-2'], ['MÉTRICA v3', 'estimación del esfuerzo', 'MARK II', 'puntos función', 'WBS', 'PERT'], [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, GPI 1.2 Cálculo del Esfuerzo: para desarrollo estructurado contempla Albrecht o MARK II como métodos de análisis de puntos función; GPI 2.4 ubica WBS y PERT en planificación detallada.' }
  ], '', 'El original era demasiado genérico: WBS estructura el trabajo y PERT planifica dependencias/tiempos, de modo que «técnica de estimación» podía interpretarse de varias maneras. Se especifica el análisis de puntos función en desarrollo estructurado. MÉTRICA v3 cita tanto Albrecht como MARK II para ese propósito; entre las opciones presentadas solo MARK II es uno de esos métodos. WBS y PERT se asocian a GPI 2.4, planificación detallada de actividades y recursos.', 'corregida']
];

const edits = {
  2431: {
    texto: 'En UML 2.5.1, ¿qué diagrama representa módulos de software como componentes, sus interfaces proporcionadas o requeridas y sus dependencias?',
    opciones: [
      'Diagrama de componentes.',
      'Diagrama de despliegue, que asigna artefactos a nodos o entornos de ejecución.',
      'Diagrama de secuencia, que representa mensajes ordenados en el tiempo.',
      'Diagrama de comunicación, que representa enlaces y mensajes entre participantes.'
    ], respuesta_correcta: 0
  },
  2432: {
    texto: 'Según MÉTRICA v3, ¿para qué se emplean las sesiones de trabajo con usuarios en la actividad ASI 2, Establecimiento de Requisitos?',
    opciones: [
      'Para sustituir el catálogo de requisitos por una decisión exclusiva de la alta dirección.',
      'Para determinar los productos de salida del proceso Planificación de Sistemas de Información (PSI).',
      'Para limitar la participación del usuario a la fase de aceptación final.',
      'Para completar la especificación detallada de requisitos; pueden usarse reuniones, entrevistas o la técnica JAD.'
    ], respuesta_correcta: 3
  },
  2433: {
    texto: 'Según MÉTRICA v3, ¿qué actividad corresponde a Construcción del Sistema de Información (CSI) y no al proceso Implantación y Aceptación del Sistema (IAS)?',
    opciones: [
      'Carga de datos al entorno de operación.',
      'Determinación del acuerdo de nivel de servicio.',
      'Elaboración de los manuales de usuario.',
      'Presentación y aprobación del sistema de información.'
    ], respuesta_correcta: 2
  },
  2434: {
    texto: '¿Cuál de las siguientes técnicas no aparece entre las actividades de la interfaz de Gestión de Proyectos (GPI/GPS) descritas en MÉTRICA v3?',
    opciones: [
      'Joint Requirements Planning (JRP), que no debe confundirse con JAD, citado en ASI 2.',
      'Estructura de Descomposición de Trabajo (WBS).',
      'Método PERT.',
      'Diagrama de extrapolación.'
    ], respuesta_correcta: 0
  },
  2435: {
    texto: 'En MÉTRICA v3, ¿qué método de análisis de puntos función puede utilizarse para estimar esfuerzo en desarrollos estructurados?',
    opciones: [
      'Estructura de Descomposición de Trabajo (WBS), usada para estructurar actividades y recursos.',
      'Método MARK II, además del método de Albrecht.',
      'Método PERT, utilizado para planificar actividades y recursos.',
      'Joint Requirements Planning (JRP), técnica de trabajo sobre requisitos.'
    ], respuesta_correcta: 1
  }
};

apply({ numero: '424', fecha: '2026-10-28', records, edits });
