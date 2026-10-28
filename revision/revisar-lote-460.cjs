const apply = require('./aplicar-lote.cjs');

const sources = {
  gqm: [
    {url:'https://csis.pace.edu/~ogotel/teaching/CS777gqm.pdf',referencia:'Basili, Caldiera y Rombach, “The Goal Question Metric Approach”, capítulo de Encyclopedia of Software Engineering (1994); niveles conceptual (goal), operacional (question) y cuantitativo (metric).'}
  ],
  clustering: [
    {url:'https://epubs.siam.org/doi/10.1137/S003614450342480',referencia:'Newman, M. E. J., “The Structure and Function of Complex Networks”, SIAM Review 45(2), 2003, sección 3.7: coeficiente global y coeficientes locales de agrupamiento; los locales miden la fracción de pares de vecinos conectados.'}
  ],
  iso: [
    {url:'https://www.iso.org/quality-management/principles',referencia:'ISO, Quality management principles: siete principios (enfoque al cliente, liderazgo, compromiso de las personas, enfoque a procesos, mejora, decisiones basadas en evidencia y gestión de las relaciones).'},
    {url:'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A9000%3Aed-5%3Av1%3Aen',referencia:'ISO Online Browsing Platform, ISO 9000, quinta edición (2026): cancela y sustituye la edición ISO 9000:2015, técnicamente revisada.'}
  ],
  mccall: [
    {url:'https://apps.dtic.mil/sti/pdfs/ADA049014.pdf',referencia:'McCall, Richards y Walters, Factors in Software Quality, RADC-TR-77-369, vol. I (1977): definición histórica del factor Integrity, relativa al control del acceso no autorizado a software o datos.'}
  ]
};
const academy39={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',referencia:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): encuadre en calidad, métricas, normas y modelos; no identifica la curva Lawler mencionada en la pregunta 2615.'};
const academy32={url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',referencia:'ITIC Academy, Inteligencia Artificial y Ciencia de Datos, edición 2026.1 (31-08-2026): A1-71 (ciencia de datos y fundamentos estadísticos), A2-D5 (estructuras de datos y algoritmos); encuadre curricular, no fuente de la definición de la métrica.'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria y programa oficial A1, BOE-A-2025-25938; correspondencia de epígrafes contrastada con revision/temario-oficial.json.'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria y programa oficial A2 GSI, BOE-A-2025-26262; correspondencia de epígrafes contrastada con revision/temario-oficial.json.'};
const curriculum=(primary,academy)=>[...primary,academy,a1,a2];

const records = [
  [2611,['98'],['III-13'],['GQM','métricas de software','calidad'],curriculum(sources.gqm,academy39).map(x=>({url:x.url,referencia:x.referencia})),'','Se concreta la denominación de los tres niveles del paradigma GQM: conceptual (objetivo), operacional (preguntas) y cuantitativo (métricas). La secuencia representa el refinamiento de objetivos en preguntas y de estas en medidas; no son fases de madurez. Correspondencia curricular: ITIC Academy, bloque 39 (calidad y métricas); A1-98 y A2-III-13 comprobados en temario-oficial.json y programas BOE citados.','corregida'],
  [2612,['71'],['III-5'],['grafos','coeficiente de agrupamiento','métricas de red'],curriculum(sources.clustering,academy32).map(x=>({url:x.url,referencia:x.referencia})),'','Se delimita a la medida local de un nodo: el coeficiente de agrupamiento local expresa qué fracción de los pares de vecinos de ese nodo está conectada (equivalentemente, triángulos incidentes respecto del máximo posible). Para toda la red también existe un coeficiente global, con definición distinta; el enunciado original no distinguía ambos niveles. Correspondencia curricular: bloque Academy 32, ciencia de datos/estructuras y algoritmos; A1-71/A2-III-5.','corregida'],
  [2613,['103'],['III-13'],['ISO 9000','principios de gestión de la calidad','histórica'],curriculum(sources.iso,academy39).map(x=>({url:x.url,referencia:x.referencia})),'','La opción «Gestión de resultados» no pertenece a los siete principios de gestión de la calidad de ISO. Se conserva el marco de la edición de 2015 y se señala que ISO 9000:2015 fue sustituida por ISO 9000:2026; por ello el reactivo vale como pregunta histórica y no debe presentarse como referencia de edición vigente. Los principios incluyen liderazgo, enfoque al cliente y enfoque a procesos. Cotejo curricular: bloque Academy 39 y epígrafes A1-103/A2-III-13.','historica'],
  [2614,['98'],['III-13'],['McCall','integridad','modelo histórico de calidad'],curriculum(sources.mccall,academy39).map(x=>({url:x.url,referencia:x.referencia})),'','Se identifica expresamente el modelo de McCall (1977): Integrity es el factor que trata la capacidad de controlar el acceso no autorizado al software o a los datos. Se mantiene como definición histórica del modelo; no se equipara sin matices con la dimensión moderna de integridad de la información. Cotejo curricular: bloque Academy 39 y epígrafes A1-98/A2-III-13.','historica'],
  [2615,['98','103'],['III-13'],['coste de calidad','modelo compuesto','atribución sin verificar'],[academy39,a1,a2].map(x=>({url:x.url,referencia:x.referencia})),'','PENDIENTE DE FUENTE: se conserva el enunciado, las cuatro opciones y la clave importada, pero no se valida la respuesta. La búsqueda en fuentes primarias accesibles no ha permitido identificar una publicación de Lawler que proponga, en el ámbito de implantación de la calidad, la curva de tres tramos descrita; el bloque 39 de Academy sirve solo para ubicar el tema y tampoco identifica esa atribución. Hace falta la referencia bibliográfica primaria (autor, título, edición y página) antes de confirmar la clave o corregir el reactivo. A1-98/A1-103/A2-III-13 son una clasificación temática provisional cotejada con los programas oficiales.','pendiente_fuente']
];

const edits={
  2611:{texto:'En el paradigma Goal-Question-Metric (GQM) de medición del software, ¿cuáles son sus tres niveles jerárquicos?',opcion:[1,'Nivel conceptual (objetivos), nivel operacional (preguntas) y nivel cuantitativo (métricas).']},
  2612:{texto:'Para un nodo de un grafo, ¿qué métrica expresa la fracción de pares de vecinos que están conectados entre sí?',opcion:[2,'Coeficiente de agrupamiento local del nodo.']},
  2613:{texto:'En la edición histórica ISO 9000:2015, ¿cuál de las siguientes opciones NO era uno de los siete principios de gestión de la calidad?',opcion:[3,'Gestión de resultados.']},
  2614:{texto:'En el modelo histórico de calidad de McCall (1977), ¿qué factor expresa el grado en que puede controlarse el acceso no autorizado al software o a sus datos?'}
};

apply({numero:'460',fecha:'2026-10-28',records,edits});
