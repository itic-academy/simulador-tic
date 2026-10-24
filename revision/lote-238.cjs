const apply = require('./aplicar-lote.cjs');

const records = [
  [1506, [63, 64], ['II-5'], ['modelo entidad-relación', 'entidades', 'atributos', 'entidades fuertes', 'entidades débiles'], [
    {url: 'https://www2.cs.sfu.ca/CourseCentral/354/zaiane/material/notes/Chapter1/node7.html', referencia: 'Simon Fraser University, The E-R Model: una entidad es un objeto distinguible; cada entidad tiene atributos y los rectángulos representan conjuntos de entidades.'}
  ], null, 'En el modelo E/R una entidad representa un objeto distinguible y se describe mediante atributos; los rectángulos representan conjuntos o tipos de entidad en el diagrama. Hay entidades fuertes y débiles. Se precisa la diferencia entre una instancia de entidad y su representación gráfica como tipo/conjunto.', 'corregida'],
  [1507, [88, 95], ['III-2'], ['MÉTRICA v3', 'ASI', 'interfaz de usuario', 'análisis de sistemas'], [
    {url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Análisis del Sistema de Información: la actividad ASI 8 se denomina Definición de Interfaces de Usuario.'}
  ], null, 'En MÉTRICA v3, la definición de las interfaces de usuario pertenece al proceso Análisis del Sistema de Información (ASI), en concreto a la actividad ASI 8. No corresponde a CSI ni a DSI.', 'corregida'],
  [1508, [95], ['III-2'], ['MÉTRICA v3', 'perfil analista', 'aseguramiento de la calidad', 'participantes'], [
    {url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ad601853c-e255-4ade-a9f8-af1357e3a151/METRICA_V3_Participantes.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, Participantes: el perfil Analista agrupa, entre otros, al Grupo de Aseguramiento de la Calidad.'}
  ], null, 'La descripción oficial de perfiles de MÉTRICA v3 incluye el Grupo de Aseguramiento de la Calidad entre los participantes agrupados en el perfil Analista. Los perfiles reúnen participantes y responsabilidades para organizar la metodología.', 'corregida'],
  [1509, [88, 95], ['III-3'], ['MÉTRICA v3', 'ASI 9.4', 'ERS', 'requisitos de software'], [
    {url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, ASI 9, tarea ASI 9.4: Elaboración de la Especificación de Requisitos Software (ERS); participantes: Analistas.'}
  ], null, 'La ERS se elabora en la tarea ASI 9.4, dentro de la actividad ASI 9 (Análisis de Consistencia y Especificación de Requisitos) del proceso ASI. La tarea asigna esta elaboración a los analistas; la participación de usuarios expertos en tareas previas de análisis no cambia quién figura como responsable participante de ASI 9.4.', 'corregida'],
  [1510, [88, 95], ['III-3'], ['MÉTRICA v3', 'ASI 2.2', 'casos de uso', 'especificación de requisitos'], [
    {url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'Ministerio de Administraciones Públicas, MÉTRICA v3, actividad ASI 2 Establecimiento de Requisitos, tarea ASI 2.2 Especificación de Casos de Uso; es obligatoria en orientación a objetos y opcional como apoyo en análisis estructurado.'}
  ], null, 'La especificación de casos de uso se realiza en ASI 2.2, dentro de la actividad Establecimiento de Requisitos. MÉTRICA v3 la establece como obligatoria para orientación a objetos y opcional en análisis estructurado. Las otras opciones pertenecen a diseño, construcción o pruebas.', 'corregida']
];

const edits = {
  1506: {texto: 'En el modelo entidad-relación, señale la afirmación incorrecta sobre las entidades y su representación.', opciones: [
    'En un diagrama E/R, un rectángulo representa un tipo o conjunto de entidades y suele llevar su nombre.',
    'Una entidad es indistinguible de las demás entidades del mundo modelado.',
    'Las entidades de un tipo se describen mediante atributos.',
    'El modelo distingue entre tipos de entidad fuertes y débiles.'
  ], respuesta_correcta: 1},
  1507: {texto: 'En MÉTRICA v3, ¿a qué proceso pertenece la actividad «Definición de Interfaces de Usuario»?', opciones: ['Diseño del Sistema de Información (DSI)', 'Construcción del Sistema de Información (CSI)', 'Análisis del Sistema de Información (ASI)', 'Implantación y Aceptación del Sistema (IAS)'], respuesta_correcta: 2},
  1508: {texto: 'Según MÉTRICA v3, ¿cuál de estos participantes se agrupa en el perfil Analista?', opciones: ['Especialista en Comunicaciones', 'Usuarios expertos', 'Técnicos de Comunicaciones', 'Grupo de Aseguramiento de la Calidad'], respuesta_correcta: 3},
  1509: {texto: 'En MÉTRICA v3, ¿en qué tarea se elabora la Especificación de Requisitos Software (ERS) y quién participa como responsable?', opciones: ['En ASI 9.4, por los analistas.', 'En ASI 2.1, exclusivamente por usuarios expertos.', 'En ASI 9.3, por usuarios expertos y analistas.', 'En DSI 1.1, por el equipo de arquitectura.'], respuesta_correcta: 0},
  1510: {texto: 'En MÉTRICA v3, ¿en qué tarea se especifican los casos de uso?', opciones: ['En ASI 4.1, identificación de clases asociadas a un caso de uso.', 'En ASI 2.2, especificación de casos de uso.', 'En DSI 3.1, definición de la interfaz de usuario.', 'En CSI 4.2, realización de pruebas unitarias.'], respuesta_correcta: 1}
};

apply({numero: '238', fecha: '2026-10-25', records, edits});
