const apply = require('./aplicar-lote.cjs');

const sources = {
  planning: [
    {url:'https://www.pmi.org/-/media/pmi/documents/registered/pdf/pmbok-standards/pmi-lexicon-pm-terms.pdf?rev=447328d841c249af985d14177ddd5f95', referencia:'PMI Lexicon of Project Management Terms, v5: define el diagrama de Gantt como representación de actividades, fechas y duración mediante barras; distingue el cronograma de objetivos estratégicos.'},
    {url:'https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/scheduling-professional-exam-outline.pdf', referencia:'PMI Scheduling Professional Exam Content Outline: secuencia actividades incorporando dependencias y usa PERT/redes para análisis de cronograma y camino crítico.'},
    {url:'https://www.pmi.org/learning/library/project-schedule-risk-analysis-simulation-4620', referencia:'PMI, Project schedule risk analysis: PERT parte de la lógica de dependencias del cronograma y estima duración con tiempos optimista, más probable y pesimista.'}
  ],
  stories: [
    {url:'https://www.gov.uk/service-manual/agile-delivery/writing-user-stories', referencia:'GOV.UK Service Manual, Writing user stories: una historia describe quién usa el servicio, qué necesita y por qué; el formato habitual incluye actor, necesidad y objetivo/beneficio.'},
    {url:'https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/contracting-for-agile-guidance-note-html', referencia:'GOV.UK, Contracting for Agile: define user story como unidad pequeña de trabajo que describe necesidad y cómo satisfacerla; el formato «so that» expresa razón, beneficio o valor.'}
  ],
  dataset: [
    {url:'https://learn.microsoft.com/en-us/dotnet/api/system.data.dataset?view=net-10.0', referencia:'Microsoft Learn, DataSet Class: objeto ADO.NET que actúa como caché en memoria de datos; contiene varias DataTable que pueden relacionarse mediante DataRelation y permite trabajar desconectado.'},
    {url:'https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-datasets', referencia:'Microsoft Learn, ADO.NET DataSets: explica la arquitectura desconectada, DataSet, DataTable, DataRelation y DataTableCollection.'}
  ],
  itil: [
    {url:'https://assets.ctfassets.net/82ripq7fjls2/7AMoolQNwmqpxisIdPiXIX/3a836bde1c9e5aa29b61143b3dd4f327/ITIL-guiding-principles-for-continual-improvement_FINAL.pdf', referencia:'AXELOS/PeopleCert, ITIL guiding principles for continual improvement: el principio optimizar y automatizar manda aplicar técnicas de optimización y automatizar cuando tenga sentido, especialmente tareas repetitivas.'},
    {url:'https://www.beformazione.com/wp-content/uploads/2024/08/ITIL-4-Foundation_Learner-Workbook_Digital.pdf', referencia:'ITIL 4 Foundation Official Learner Workbook, §4.3.7.3 (material formativo oficial PeopleCert): recomienda simplificar u optimizar antes de automatizar; se reformula como recomendación de aplicación, no como orden absoluto para cualquier caso.'}
  ],
  metrica: [
    {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ad601853c-e255-4ade-a9f8-af1357e3a151/METRICA_V3_Participantes.pdf', referencia:'Ministerio de Administraciones Públicas, MÉTRICA v3 — Participantes: enumera cinco perfiles de alto nivel: Directivo, Jefe de Proyecto, Consultor, Analista y Programador; Administrador no aparece en esa clasificación.'}
  ]
};

const records = [
  [2331,[33,35,36],['III-2'],['PERT','Gantt','DAFO','cuadro de mando integral','dependencias','planificación de proyectos'],sources.planning,'','PERT representa la lógica de precedencias entre actividades y sirve para planificar y analizar duraciones; Gantt representa actividades frente al calendario; DAFO analiza factores internos y externos, mientras el cuadro de mando traduce estrategia y desempeño a objetivos e indicadores. Se delimita la pregunta a la utilidad de PERT para que la opción correcta sea inequívoca.','vigente'],
  [2332,[37,88],['III-2'],['historias de usuario','requisitos ágiles','beneficio del usuario','Scrum'],sources.stories,'','Se sustituye «siempre deben aportar valor al negocio», demasiado absoluto y centrado solo en negocio, por una formulación precisa: una historia expresa una necesidad de usuario y el objetivo o beneficio que la justifica. No hay un límite universal de 15 días; la autoría no corresponde exclusivamente al equipo de desarrollo, y COCOMO es un modelo de estimación de esfuerzo, no una técnica de historias.','corregida'],
  [2333,[66],['III-11'],['ADO.NET','DataSet','DataTable','DataRelation','datos desconectados'],sources.dataset,'','La respuesta es DataSet: mantiene en memoria un conjunto de datos que puede incluir varias DataTable y relaciones DataRelation, y puede utilizarse desconectado de la base de datos. Se corrigen la grafía oficial DataSet y el término impreciso «caché de tablas de la BBDD»; DataTableCollection y DataRelation son componentes distintos, no el contenedor completo.','corregida'],
  [2334,[106],['IV-4'],['ITIL 4','optimizar','automatizar','mejora de procesos'],sources.itil,'','El principio rector de ITIL 4 se denomina «optimizar y automatizar». Su guía recomienda simplificar u optimizar el proceso hasta donde sea razonable antes de automatizarlo, con atención al valor, el contexto y las restricciones; no es una regla absoluta de automatizar todo. Se concreta el enunciado en esa recomendación, manteniendo la clave «optimizar primero».','corregida'],
  [2335,[95],['III-2'],['MÉTRICA v3','participantes','perfiles','jefe de proyecto','consultor','programador'],sources.metrica,'','La guía oficial de participantes de MÉTRICA v3 fija cinco perfiles: Directivo, Jefe de Proyecto, Consultor, Analista y Programador. «Administrador» no figura entre ellos. Se precisa que el reactivo pregunta por esos perfiles definidos en el documento, no por todos los roles técnicos que puedan existir en una organización.','vigente']
];

const edits = {
  2331:{texto:'¿Qué afirmación describe correctamente la utilidad de la técnica PERT en la planificación de un proyecto?',opciones:['El cuadro de mando integral identifica por sí mismo las oportunidades y amenazas externas del proyecto.','El diagrama de Gantt establece los objetivos estratégicos de la organización al comienzo del proyecto.','El análisis DAFO sirve para hacer el seguimiento temporal de las tareas del proyecto.','PERT representa las dependencias lógicas entre actividades y permite analizar su secuencia y duración para planificar el proyecto.'],respuesta_correcta:3},
  2332:{texto:'En el desarrollo ágil de software, ¿qué característica describe mejor una historia de usuario?',opciones:['Toda historia debe poder terminarse en un plazo máximo fijo de 15 días.','Las historias las redacta exclusivamente el equipo de desarrollo.','Expresa una necesidad de usuario y el beneficio u objetivo que se pretende satisfacer.','Es una técnica incluida en el modelo COCOMO de estimación de costes.'],respuesta_correcta:2},
  2333:{texto:'¿Qué objeto de ADO.NET representa un conjunto de datos en memoria, formado por varias tablas que pueden relacionarse y utilizarse desconectadas del origen de datos?',opciones:['DataRelationCollection','DataTableCollection','DataSet','DataTable'],respuesta_correcta:2},
  2334:{texto:'Al aplicar el principio rector «optimizar y automatizar» de ITIL 4, ¿qué recomienda hacer antes de automatizar un proceso?',opciones:['Automatizarlo inmediatamente y medir después si ha mejorado.','Conservar el proceso sin cambios para que la automatización reproduzca exactamente su estado actual.','Simplificarlo u optimizarlo hasta donde sea razonable, considerando el valor y las restricciones.','Automatizar todos sus pasos, aunque no sean repetitivos o adecuados para ello.'],respuesta_correcta:2},
  2335:{texto:'MÉTRICA v3 define cinco perfiles para agrupar a quienes participan en sus procesos. ¿Cuál de los siguientes NO figura entre esos perfiles en la guía oficial de participantes?',opciones:['Jefe de Proyecto','Consultor','Administrador','Programador'],respuesta_correcta:2}
};

apply({numero:'403',fecha:'2026-10-28',records,edits});
