const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const osd='https://opensource.org/osd';
const hadoop='https://hadoop.apache.org/modules.html';
const mobile='https://unesdoc.unesco.org/in/rest/annotationSVC/DownloadWatermarkedAttachment/attach_import_c713d58b-f667-46b6-9291-133eba59b074?_=219641eng.pdf';
const mobileUNESCO='https://www.unesco.org/en/query-list/m/mobile-learning';
const ulearning='https://eric.ed.gov/?id=EJ814097';
const rss='https://www.rssboard.org/rss-specification';
const edits={
 6956:{texto:'Según la Open Source Definition de la Open Source Initiative, indique la afirmación INCORRECTA sobre los criterios de las licencias de código abierto:',opciones:['La licencia debe permitir la venta o distribución del software, incluso como parte de una distribución agregada, sin exigir regalías por esa venta.','La licencia debe permitir modificaciones y obras derivadas, que puedan distribuirse bajo los términos de la licencia original.','La licencia no puede restringir el uso del programa en un campo de actividad, por ejemplo comercial o de investigación.','La licencia puede depender de una tecnología o estilo de interfaz concretos; incluso puede discriminar a favor de una interfaz específica.'],respuesta_correcta:3},
 6957:{texto:'¿Cuál de los siguientes NO es uno de los módulos oficiales de Apache Hadoop?',opciones:['Hadoop Distributed File System (HDFS).','Hadoop Common.','Hadoop YARN.','Apache Spark MLlib, biblioteca de aprendizaje automático de Apache Spark.'],respuesta_correcta:3},
 6958:{texto:'En educación, ¿qué se entiende por mobile learning (m-learning)?',opciones:['Una modalidad semipresencial que combina necesariamente clases físicas y e-learning.','Aprendizaje mediado por dispositivos móviles, que facilita el acceso a actividades y recursos educativos desde distintos lugares y momentos.','La adaptación automática de la enseñanza exclusivamente al contexto físico detectado del estudiante.','Formación en línea abierta, diseñada necesariamente para un número masivo de participantes.'],respuesta_correcta:1},
 6959:{texto:'En la literatura sobre modalidades educativas, ¿qué término se utiliza habitualmente para el aprendizaje ubicuo (ubiquitous learning)?',opciones:['U-learning.','X-learning.','S-learning.','N-learning.'],respuesta_correcta:0},
 6960:{texto:'¿Qué formato se utiliza para sindicar contenidos web y permitir que un lector consulte actualizaciones de distintas fuentes?',opciones:['SPARQL.','RSS.','CMS.','WebQuest.'],respuesta_correcta:1}
};
const records=[
 [6956,[69],['II-14'],['Open Source Initiative','Open Source Definition','OSD','software de código abierto','licencias abiertas','neutralidad tecnológica'],[
  {url:osd,referencia:'OSI, Open Source Definition (versión publicada 1.9), criterios 1, 3, 5 y 10: distribución sin regalías, obras derivadas, ausencia de discriminación por campo de actividad y neutralidad tecnológica.'},
  {url:'https://opensource.org/licenses',referencia:'OSI, catálogo de licencias aprobadas conforme a la Open Source Definition.'},
  {url:a1,referencia:'Convocatoria A1 GSI, BOE-A-2025-25938, tema 69: software de código abierto, software libre y conceptos base.'},
  {url:a2,referencia:'Convocatoria A2 GSI, BOE-A-2025-26262, tema II.14: software libre/propietario y tipos de licencias.'}
 ],undefined,'Corregida D. Se elimina la presentación imprecisa de OSI como promotora de «software no propietario» y se pregunta directamente por sus criterios. El criterio 10 exige neutralidad tecnológica; el criterio 5 impide discriminar por campo de actividad. Por ello, la afirmación de D es la incorrecta. El criterio 1 permite cobrar por distribuir copias, pero la licencia no puede exigir una regalía por esa venta.','corregida'],
 [6957,[75],['III-15'],['Apache Hadoop','HDFS','Hadoop Common','YARN','MapReduce','Apache Spark','MLlib'],[
  {url:hadoop,referencia:'Apache Hadoop, Modules: el proyecto enumera Hadoop Common, HDFS, YARN y MapReduce como sus módulos; MLlib pertenece a Apache Spark.'},
  {url:'https://spark.apache.org/mllib/',referencia:'Apache Spark, MLlib: biblioteca de aprendizaje automático del proyecto Spark, diferenciada de los módulos de Hadoop.'},
  {url:a1,referencia:'Convocatoria A1 GSI, BOE-A-2025-25938, tema 75: tecnologías y sistemas de explotación de datos.'},
  {url:a2,referencia:'Convocatoria A2 GSI, BOE-A-2025-26262, tema III.15: Big Data y entornos Hadoop o similares.'}
 ],undefined,'Corregida D. Los módulos que el proyecto Apache Hadoop enumera son Common, HDFS, YARN y MapReduce. MLlib es la biblioteca de aprendizaje automático de Apache Spark, no un módulo de Hadoop. La pregunta comprueba la diferencia entre los proyectos y no se basa en el error tipográfico «MapExtend».','corregida'],
 [6958,[73],[],['mobile learning','m-learning','e-learning','aprendizaje móvil','UNESCO','dispositivos móviles'],[
  {url:mobile,referencia:'UNESCO, Policy Guidelines for Mobile Learning (2013), apartado What is Mobile Learning?: uso de tecnología móvil para posibilitar aprendizaje en cualquier momento y lugar, acceder a recursos, comunicarse y crear contenidos.'},
  {url:mobileUNESCO,referencia:'UNESCO, ficha introductoria de mobile learning: aprendizaje mediante dispositivos móviles; permite flexibilidad temporal y espacial.'},
  {url:a1,referencia:'Convocatoria A1 GSI, BOE-A-2025-25938, tema 73: e-learning, conceptos, herramientas y sistemas de implantación.'}
 ],undefined,'Corregida B. M-learning se refiere al aprendizaje mediado por tecnología/dispositivos móviles; puede desarrollarse dentro o fuera del aula y no exige autonomía, una estrategia semipresencial ni que el sistema adapte el contenido al contexto. La respuesta C describe una modalidad adaptativa/contextual y D se aproxima a los MOOC.','corregida'],
 [6959,[73],[],['U-learning','ubiquitous learning','aprendizaje ubicuo','e-learning','modalidades educativas'],[
  {url:ulearning,referencia:'Hwang, Tsai y Yang (2008), Criteria, Strategies and Research Issues of Context-Aware Ubiquitous Learning, Educational Technology & Society 11(2), pp. 81–91; registro ERIC de la publicación académica original.'},
  {url:'https://doi.org/10.1016/j.tele.2018.01.009',referencia:'Revisión académica de la literatura de aprendizaje ubicuo: identifica u-learning como denominación habitual de ubiquitous learning y analiza la variedad de enfoques.'},
  {url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',referencia:'ITIC Academy, bloque 33 E-learning y GIS, versión 2026.1: incluye modalidades de aprendizaje online y ubicuo; cotejo curricular, no fuente definitoria primaria.'},
  {url:a1,referencia:'Convocatoria A1 GSI, BOE-A-2025-25938, tema 73: e-learning y sus conceptos.'}
 ],undefined,'Corregida A. U-learning se usa habitualmente para ubiquitous learning (aprendizaje ubicuo), pero no es una clasificación jurídica o taxonomía universalmente normalizada: la literatura presenta enfoques y rasgos diversos. Se reformula el enunciado para preguntar por el uso habitual del término, no por una equivalencia excluyente.','corregida'],
 [6960,[77],['II-16'],['RSS','sindicación de contenidos','XML','Atom','gestión documental','lectores de noticias'],[
  {url:rss,referencia:'RSS Advisory Board, RSS 2.0 Specification, versión 2.0.11: define RSS como formato XML para sindicación de contenidos web.'},
  {url:'https://www.iana.org/assignments/media-types/application/rss+xml',referencia:'IANA, registro del tipo application/rss+xml para documentos RSS.'},
  {url:'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk',referencia:'ITIC Academy, bloque 40 Gestión documental, versión 2026.1: incluye sindicación, RSS/Atom y gestión de contenidos; cotejo curricular.'},
  {url:a1,referencia:'Convocatoria A1 GSI, BOE-A-2025-25938, tema 77: lenguajes y herramientas para redes globales, XML y estándares web.'},
  {url:a2,referencia:'Convocatoria A2 GSI, BOE-A-2025-26262, tema II.16: gestión documental y de contenidos, incluida la sindicación.'}
 ],undefined,'Vigente B. RSS es un formato XML de sindicación web que permite a los lectores recibir actualizaciones publicadas en distintas fuentes. SPARQL es un lenguaje de consulta para RDF, CMS es una categoría de sistema de gestión de contenidos y WebQuest es una actividad didáctica.','vigente']
];
aplicar({numero:'1327',fecha:'2026-11-15',records,edits});
