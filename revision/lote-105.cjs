const records = [
  [841,[95],['III-3'],['MÉTRICA v3','EVS 3','requisitos','participantes'],[
    {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr:75728be8-964e-45e8-865e-e3582c232cc8/METRICA_V3_Estudio_de_Viabilidad_del_Sistema.pdf',referencia:'Ministerio de Administraciones Públicas, MÉTRICA v3, Estudio de Viabilidad del Sistema, actividad EVS 3: participantes Jefe de Proyecto, Analistas y Usuarios Expertos; el portal oficial rechaza la consulta automatizada, pero el documento original y sus metadatos están identificados.'},
    {url:'https://manuel.cillero.es/doc/metodologia/metrica-3/procesos-principales/evs/',referencia:'Transcripción de la tabla oficial de participantes de EVS: marca Analistas, Jefe de Proyecto y Usuarios Expertos en EVS 3; Técnicos de Sistemas, Especialistas en Comunicaciones y Responsables de Seguridad aparecen en EVS 4, no EVS 3.'}
  ],null,'La tabla de participantes de MÉTRICA v3 asigna a EVS 3 al Jefe de Proyecto, los Analistas y los Usuarios Expertos. Técnicos de Sistemas, Especialistas en Comunicaciones y Responsables de Seguridad corresponden a EVS 4; por tanto, la primera opción es la única que enumera el grupo de EVS 3.','vigente'],
  [842,[95],['III-2'],['MÉTRICA v3','DFD','diagramas de estructura','flujo de control'],[
    {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr:75728be8-964e-45e8-865e-e3582c232cc8/METRICA_V3_Estudio_de_Viabilidad_del_Sistema.pdf',referencia:'Ministerio de Administraciones Públicas, MÉTRICA v3, Estudio de Viabilidad del Sistema: fuente normativa/metodológica indicada por el enunciado. El portal oficial rechazó el acceso automatizado al PDF y no se ha podido comprobar en él el tratamiento exacto de flujos de control y procesos de control.'}
  ],null,'Pendiente de fuente: la respuesta señalada mezcla flujos de control, datos y sincronía. No se certifica la clave hasta cotejar la definición exacta en la documentación de MÉTRICA v3; el PDF oficial identificado rechaza el acceso automatizado y las fuentes disponibles no bastan para resolver el matiz.','pendiente_fuente'],
  [843,[100],['III-6'],['repositorios de código','control de versiones','Team Foundation Server','Azure DevOps Server','Apache Tomcat'],[
    {url:'https://learn.microsoft.com/en-us/azure/devops/user-guide/source-control',referencia:'Microsoft Learn, Understand source control: Azure DevOps ofrece repositorios Git y Team Foundation Version Control (TFVC), ambos para control de versiones de código.'},
    {url:'https://tomcat.apache.org/',referencia:'Apache Software Foundation, Apache Tomcat: contenedor de servlets y páginas Jakarta, no un sistema de repositorios o control de versiones de código.'}
  ],null,'Se actualiza el nombre para que la opción no dependa de una denominación histórica: Team Foundation Server (TFS, hoy Azure DevOps Server) incluye repositorios y control de versiones Git/TFVC. Apache Tomcat es un contenedor web para servlets y páginas Jakarta; por ello sigue siendo la respuesta que no es un repositorio de código.','corregida'],
  [844,[96],['III-7'],['verificación estática','auditoría','revisión','análisis formal'],[
    {url:'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-234.pdf',referencia:'NIST SP 500-234, §3: clasifica revisiones, inspecciones y auditorías como técnicas de análisis estático que examinan productos sin ejecutarlos; distingue el análisis formal como tercera clase de técnicas de V&V (estática, dinámica y formal).'},
    {url:'https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_2018_v3.1.1.pdf',referencia:'ISTQB CTFL v3.1.1, §3.1: la prueba estática examina productos de trabajo sin ejecutar el software, mediante revisiones manuales o análisis estático basado en herramientas.'}
  ],null,'Se corrige la clave: conforme a la clasificación de NIST, auditorías y revisiones son ejemplos de análisis estático; la verificación formal pertenece a la categoría diferenciada de análisis formal. «Todos» era demasiado amplio. El término del enunciado se precisa para no confundir la categoría de análisis estático con todas las actividades estáticas de verificación.','corregida'],
  [845,[96],['III-7'],['pruebas de caja blanca','cobertura de código','cobertura de ramas','cobertura de bucles'],[
    {url:'https://www.istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf',referencia:'ISTQB CTFL v4.0.1, §4.3: define pruebas de caja blanca y cobertura de sentencias y ramas; los resultados de decisiones pueden incluir continuar o salir de un bucle. El temario señala que existen otras técnicas más rigurosas fuera de su alcance.'}
  ],null,'La cobertura de ramas/sentencias y los criterios estructurales que examinan condiciones o bucles usan elementos del flujo de control del código; «texto» sin definir una unidad de cobertura no constituye un criterio estructural. Se conserva la opción D como respuesta, precisando el término para no confundirlo con cobertura de líneas o sentencias.','corregida']
];

const edits = {
  843:{texto:'¿Cuál de los siguientes NO proporciona repositorios de código y control de versiones?',opciones:[
    'CVS.',
    'Subversion (SVN).',
    'Team Foundation Server (TFS; actualmente Azure DevOps Server).',
    'Apache Tomcat.'
  ],respuesta_correcta:3},
  844:{texto:'Según la clasificación de técnicas de verificación y validación de software de NIST SP 500-234, ¿cuáles son ejemplos de análisis estático que examinan productos sin ejecutarlos?',opciones:[
    'La ejecución de pruebas funcionales.',
    'Las revisiones y auditorías.',
    'La verificación formal mediante técnicas matemáticas.',
    'Todas las anteriores.'
  ],respuesta_correcta:1},
  845:{texto:'En pruebas de caja blanca, ¿cuál de estas opciones no es un criterio de cobertura estructural del código?',opciones:[
    'Cobertura de sentencias ejecutables y ramas.',
    'Cobertura de condiciones o decisiones.',
    'Cobertura de bucles o de sus salidas.',
    'Cobertura de texto sin definir una unidad estructural del código.'
  ],respuesta_correcta:3}
};

require('./aplicar-lote.cjs')({numero:'105',fecha:'2026-10-22',records,edits});
