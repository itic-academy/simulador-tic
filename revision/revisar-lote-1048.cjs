const aplicar = require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metricav3='https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const systems='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const lifecycle='https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk';
const records=[
 [5561,[89,93],['III-9'],['análisis orientado a objetos','diseño orientado a objetos','dominio del problema','dominio de solución'],[
  {url:metricav3,referencia:'MÉTRICA v3, Análisis (ASI 4–5), distingue clases de análisis identificadas a partir de casos de uso del modelo y el posterior proceso de diseño del sistema.'},
  {url:'https://www.omg.org/spec/UML/2.5.1/About-UML/',referencia:'OMG UML 2.5.1, especificación del lenguaje para modelado orientado a objetos; el análisis expresa el dominio/requisitos y el diseño detalla la solución realizable.'},
  {url:a1,referencia:'Programa A1 GSI 2025, temas 89 (análisis del dominio/modelos de clases) y 93 (diseño de software).'},
  {url:a2,referencia:'Programa A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos.'},
  {url:systems,referencia:'ITIC Academy 2026, bloque 38, análisis, diseño y construcción de sistemas; correspondencia curricular.'}
 ],null,'La opción D se precisa como distinción conceptual: el análisis modela conceptos del dominio del problema; el diseño los transforma/refina en elementos de la solución. Se eliminan explicaciones vagas basadas en el momento de “construir” o conectar objetos, que no definen por sí solas la frontera análisis/diseño.','corregida'],
 [5562,[94],['III-3'],['prototipado','prototipo desechable','prototipo evolutivo','requisitos'],[
  {url:'https://www.nasa.gov/wp-content/uploads/2018/09/nasa_systems_engineering_handbook_0.pdf',referencia:'NASA Systems Engineering Handbook, glosario de prototipo y guía institucional; se complementa con la guía universitaria de prototipado software para la distinción desechable/evolutivo.'},
  {url:'https://sceweb.uhcl.edu/helm/REQ_ENG_WEB/My-Files/mod4/Software_Prototyping.pdf',referencia:'University of Houston–Clear Lake, Methods for Software Prototyping: distingue el prototipado throwaway, cuyo prototipo se descarta, del evolutivo, que se amplía hacia el sistema.'},
  {url:a1,referencia:'Programa A1 GSI 2025, tema 94: elaboración de prototipos en el desarrollo de sistemas.'},
  {url:a2,referencia:'Programa A2 GSI 2025, tema III.3 incluye el prototipado entre estrategias de determinación de requisitos.'},
  {url:systems,referencia:'ITIC Academy 2026, bloque 38, prototipado y análisis/diseño de sistemas; correspondencia curricular.'}
 ],null,'Se mantiene la opción A y se expresa como la clasificación según el destino del prototipo: desechable (se descarta) o evolutivo (se refina hacia el producto). El rótulo “cambiante” no es la categoría estándar.','corregida'],
 [5563,[95],['III-2'],['MÉTRICA v3','ASI 6','modelo de datos','paralelismo','análisis estructurado'],[
  {url:metricav3,referencia:'MÉTRICA v3, Análisis del Sistema de Información, introducción (pp. 2–4) y actividad ASI 6 (pp. 22–23): el modelo de datos de análisis estructurado se realiza en paralelo y con realimentación con ASI 2, ASI 3, ASI 7 y ASI 8; ASI 4 corresponde solo a orientación a objetos.'},
  {url:a1,referencia:'Programa A1 GSI 2025, tema 95: MÉTRICA.'},
  {url:a2,referencia:'Programa A2 GSI 2025, tema III.2: metodologías de desarrollo.'},
  {url:systems,referencia:'ITIC Academy 2026, bloque 38, análisis/modelado de sistemas y MÉTRICA; correspondencia curricular.'}
 ],null,'Se conserva la clave B pero se rehacen enunciado y opciones para eliminar la mezcla de actividades exclusivas de aproximaciones distintas. Según MÉTRICA v3 ASI 6 (análisis estructurado), elaboración del modelo de datos se realiza en paralelo con requisitos (ASI 2), subsistemas (ASI 3), procesos (ASI 7) e interfaces (ASI 8); ASI 4 es propia del análisis orientado a objetos.','corregida'],
 [5564,[89,95],['II-5'],['MÉTRICA v3','modelo entidad-relación','relaciones','dominios de atributos'],[
  {url:metricav3,referencia:'MÉTRICA v3, Análisis, ASI 6.1: identifica atributos y sus dominios, y relaciones entre entidades con cardinalidades mínimas y máximas; diferencia explícitamente dominios de atributo y cardinalidades de relación.'},
  {url:a1,referencia:'Programa A1 GSI 2025, temas 89 (modelo entidad-relación y dominio) y 95 (MÉTRICA).'},
  {url:a2,referencia:'Programa A2 GSI 2025, tema II.5: bases de datos, modelado y diseño.'},
  {url:systems,referencia:'ITIC Academy 2026, bloque 38, análisis y modelado; cobertura de MÉTRICA/entidades y relaciones.'}
 ],null,'Se concreta que la pregunta trata del modelo E/R conceptual de MÉTRICA v3. La relación entre entidades se caracteriza por su tipo y cardinalidades; el dominio es una propiedad de los atributos, no de la relación. La opción D es la excepción.','corregida'],
 [5565,[100,102],['IV-4'],['control de versiones','gestión de configuración','Subversion','Mercurial','Bitbucket'],[
  {url:'https://subversion.apache.org/faq.html',referencia:'Apache Subversion FAQ: Subversion es un sistema de control de versiones centralizado con servidor central.'},
  {url:'https://mercurial-scm.org/about',referencia:'Proyecto Mercurial, página About: Mercurial es una herramienta distribuida de gestión del control de fuentes; distingue sistemas distribuidos de sistemas cliente-servidor como Subversion.'},
  {url:'https://www.atlassian.com/software/bitbucket/guides/getting-started/overview',referencia:'Atlassian, descripción vigente de Bitbucket: alojamiento Git y colaboración sobre repositorios; es una plataforma de alojamiento/gestión, no un VCS centralizado del mismo tipo que Subversion.'},
  {url:a1,referencia:'Programa A1 GSI 2025, temas 100 y 102: gestión de configuración, versiones y cambios en proyectos de software.'},
  {url:a2,referencia:'Programa A2 GSI 2025, tema IV.4: gestión de configuración y control de cambios/versiones.'},
  {url:systems,referencia:'ITIC Academy 2026, bloque 38, herramientas y proceso de desarrollo de sistemas; cotejo curricular.'}
 ],null,'Se reformula para distinguir categorías y evitar afirmar que Bitbucket es en sí un sistema centralizado de control de versiones: Subversion usa el modelo centralizado; Mercurial es distribuido y Bitbucket aloja repositorios Git y ofrece colaboración. Por tanto, para la pregunta reformulada, la respuesta única es A.','corregida']
];
const edits={
  5561:{texto:'En el desarrollo orientado a objetos, ¿qué diferencia conceptualiza mejor el análisis frente al diseño?',opciones:['El análisis solo comienza después de construir los objetos.','El diseño se reconoce únicamente cuando se conectan clases.','No existe diferencia entre los modelos de análisis y los de diseño.','El análisis modela el dominio del problema y el diseño concreta elementos de la solución.'],respuesta_correcta:3},
  5562:{texto:'Según el destino previsto para el prototipo, ¿qué dos categorías se suelen distinguir?',opciones:['Desechable o evolutivo.','Desechable o cambiante.','De implantación o de diseño.','Temporal o definitivo.'],respuesta_correcta:0},
  5563:{texto:'En MÉTRICA v3, ¿qué afirmación describe correctamente una ejecución paralela durante el análisis estructurado?',opciones:['ASI 9 (consistencia) se completa a la vez que ASI 6, antes de construir los modelos.','ASI 6 (modelo de datos) se realiza en paralelo y con realimentación con ASI 2, ASI 3, ASI 7 y ASI 8.','ASI 4 (casos de uso, propia del análisis OO) se combina con ASI 6 (modelo de datos, propio del estructurado) como tareas paralelas de una misma aproximación.','ASI 1 y ASI 6 son una única actividad sin dependencias.'],respuesta_correcta:1},
  5564:{texto:'En el modelo entidad/relación conceptual de MÉTRICA v3, ¿cuál de estas propiedades corresponde a los atributos y no caracteriza por sí misma una relación entre entidades?',opciones:['Nombre identificador de la relación.','Tipo de correspondencia entre entidades.','Cardinalidad de la relación.','Dominio de un atributo.'],respuesta_correcta:3},
  5565:{texto:'¿Cuál de estas herramientas es un sistema centralizado de control de versiones, frente a un sistema distribuido o una plataforma de alojamiento de repositorios?',opciones:['Subversion.','Mercurial.','Bitbucket.','Todas son sistemas centralizados de control de versiones.'],respuesta_correcta:0}
};
aplicar({numero:'1048',fecha:'2026-11-12',records,edits});
