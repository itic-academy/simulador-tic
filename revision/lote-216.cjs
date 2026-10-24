const apply = require('./aplicar-lote.cjs');

const records = [
  [1396, [93], ['III-9'], ['diseño modular', 'acoplamiento débil', 'dependencias', 'interfaces'],
    [{ url: 'https://developer.android.com/topic/modularization/patterns', referencia: 'Android Developers, Common modularization patterns, High cohesion and low coupling principle: módulos independientes, dependencias e impacto de cambios mínimos, y exposición solo de una interfaz pública esencial.' }], null,
    'Se corrige «programación orientada a objetivos», que no corresponde al concepto preguntado. El acoplamiento débil busca que los módulos dependan poco entre sí y se comuniquen mediante los contratos mínimos necesarios; no significa eliminar toda interacción ni hacer pública toda la información interna. Cotejo con ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, diseño de software. Correspondencia oficial: A1-93 y A2-III-9.', 'corregida'],
  [1397, [94], ['III-3'], ['prototipos', 'requisitos', 'riesgos del prototipado'],
    [{ url: 'https://www.cs.uct.ac.za/mit_notes/software/htmls/ch02s04.html', referencia: 'University of Cape Town, Software Engineering, §2.4, Software models: un prototipo desechable puede confundirse con el producto final; se evalúa si se amplía, se sustituye o se continúa con otro proceso.' }, { url: 'https://eng.libretexts.org/Bookshelves/Computer_Science/Programming_and_Computation_Fundamentals/Introduction_to_Computer_Science_%28OpenStax%29/09%3A_Software_Engineering/9.02%3A_Software_Engineering_Process', referencia: 'OpenStax/Rice University, Software Engineering Process: el prototipo es una representación temprana y parcial para recoger feedback; la funcionalidad completa se desarrolla después.' }], null,
    'La respuesta se precisa: construir un prototipo de todo el sistema no es una obligación inherente al enfoque; puede prototiparse solo una parte o aspecto. La confusión entre prototipo y producto final sí es un riesgo documentado, y reutilizar como producto un prototipo de baja calidad puede dificultar su evolución. Cotejo con ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, requisitos y prototipos. Correspondencia oficial: A1-94 y A2-III-3.', 'corregida'],
  [1398, [95], ['III-2'], ['Métrica v3', 'diseño de sistemas de información', 'arquitectura'],
    [{ url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Diseño del Sistema de Información, actividad DSI 1: Definición de la Arquitectura del Sistema.' }], null,
    'La clave coincide literalmente con la actividad DSI 1 de MÉTRICA v3: «Definición de la Arquitectura del Sistema». La preparación del entorno de generación y construcción pertenece a CSI; la definición de requisitos/interfaces y el modelo de datos se desarrollan en actividades de ASI. Cotejo con ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, ciclo de vida y diseño. Correspondencia oficial: A1-95 y A2-III-2.', 'vigente'],
  [1399, [95], ['III-13'], ['Métrica v3', 'aseguramiento de la calidad', 'interfaces CAL'],
    [{ url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A6838aec9-835a-4562-bdc3-87a96fd9c743/METRICA_V3_Aseguramiento_de_la_Calidad.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Aseguramiento de la Calidad: actividades de interfaz CAL en EVS, ASI, DSI, CSI, IAS y MSI.' }], null,
    'La interfaz de Aseguramiento de la Calidad define actividades a lo largo de los procesos de desarrollo y aceptación —EVS, ASI, DSI, CSI e IAS— y también del mantenimiento —MSI—. Por tanto, la opción que incluye todos esos procesos es la correcta. Cotejo con ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, ciclo de vida y calidad. Correspondencia oficial: A1-95 y A2-III-13.', 'vigente'],
  [1400, [95], ['III-2'], ['Métrica v3', 'procesos principales', 'planificación', 'desarrollo', 'mantenimiento'],
    [{ url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Gestión de Proyectos, tarea GPI 2.2: selección de la estructura de actividades, tareas y productos; el método se adapta al proyecto y se seleccionan sus procesos principales.' }, { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Planificación de Sistemas de Información (PSI), proceso principal de planificación.' }, { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Diseño del Sistema de Información (DSI), documento del proceso de desarrollo.' }, { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Mantenimiento de Sistemas de Información (MSI), proceso de mantenimiento.' }], null,
    'Se delimita «procesos principales» a la estructura general de MÉTRICA v3: PSI (planificación), DSI (desarrollo) y MSI (mantenimiento). EVS, ASI, DSI, CSI e IAS son procesos/partes del proceso de desarrollo; CAL es una interfaz, no un cuarto proceso principal. La documentación de gestión indica que la estructura se selecciona y adapta a cada proyecto. Cotejo con ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1, procesos y ciclo de vida. Correspondencia oficial: A1-95 y A2-III-2.', 'corregida']
];

apply({ numero: '216', fecha: '2026-10-24', records, edits: {
  1396: { texto: 'En diseño modular de software, ¿qué caracteriza mejor un acoplamiento débil entre módulos?', opciones: [
    'Declarar mecanismos de comunicación y tipos de información intercambiada, aunque los módulos dependan ampliamente de la implementación interna de los demás.',
    'Reducir las dependencias entre módulos y limitar su interacción a los contratos o interfaces necesarios.',
    'Crear estructuras jerárquicas para intercambiar información entre todos los módulos.',
    'Hacer pública toda la información gestionada por cada módulo para que los demás puedan utilizarla.'
  ], respuesta_correcta: 1 },
  1397: { texto: '¿Cuál de las siguientes afirmaciones NO describe un inconveniente inherente al uso de prototipos?', opciones: [
    'La aprobación temprana de un prototipo puede llevar a descartar alternativas que podrían resultar mejores.',
    'Si se construye sin cuidado y después se reutiliza como producto, puede limitar la flexibilidad o dificultar la evolución del sistema.',
    'El enfoque obliga a construir un prototipo completo de todo el sistema.',
    'El usuario puede confundir un prototipo con un producto terminado.'
  ], respuesta_correcta: 2 },
  1400: { texto: 'Si se pregunta por la estructura general de procesos principales de MÉTRICA v3 —y no por las fases internas del desarrollo—, ¿qué trío la representa?', opciones: [
    'Estudio de Viabilidad (EVS), Planificación (PSI), Desarrollo (DSI) y Mantenimiento (MSI).',
    'Planificación de Sistemas de Información (PSI), Desarrollo de Sistemas de Información (DSI) y Mantenimiento de Sistemas de Información (MSI).',
    'Análisis (ASI), Diseño (DSI), Aseguramiento de la Calidad (CAL) y Mantenimiento (MSI).',
    'Análisis (ASI), Diseño (DSI), Construcción (CSI) e Implantación y Aceptación (IAS), como únicos procesos de MÉTRICA v3.'
  ], respuesta_correcta: 1 }
}});
