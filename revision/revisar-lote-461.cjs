const apply=require('./aplicar-lote.cjs');
const src={
  safety:[
    {url:'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso-iec-ieee%3A24641%3Aed-1%3Av1%3Aen',referencia:'ISO/IEC/IEEE 24641, Systems and software engineering — Methods and tools for model-based systems and software engineering: define safety como evitar lesión o daño mediante el uso o mal uso del sistema; la norma distingue safety, reliability y security.'},
    {url:'https://swehb.nasa.gov/spaces/SWEHBVB/pages/32604459/SWE-023+-%2BSoftware+Safety',referencia:'NASA Software Engineering Handbook, SWE-023 Software Safety: software puede contribuir a condiciones peligrosas por comandos inesperados, datos erróneos o uso no previsto de recursos; las safety requirements deben abordar acciones e inacciones.'}
  ],
  deming:[
    {url:'https://onlinelibrary.wiley.com/doi/10.1002/npr.4040010105',referencia:'Deming, W. E., “Improvement of quality and productivity through action by management”, National Productivity Review 1(1), 1981, pp. 12–22, DOI 10.1002/npr.4040010105; reacción en cadena de mejora de calidad, reducción de costes y mejora de productividad.'}
  ],
  cmmi:[
    {url:'https://cmmiinstitute.com/learning/appraisals/levels',referencia:'CMMI Institute, CMMI Levels of Capability and Performance: niveles de madurez staged 1 Initial, 2 Managed, 3 Defined, 4 Quantitatively Managed y 5 Optimizing; distingue los niveles de capacidad.'}
  ],
  complexity:[
    {url:'https://www.sei.cmu.edu/library/software-metrics/',referencia:'Mills, E. E., Software Metrics, CMU/SEI-88-CM-012 (1988): clasifica Bang en métricas de tamaño; separa las medidas de complejidad (v(G), knots, information flow) y presenta Halstead como métricas de producto.'},
    {url:'https://apps.dtic.mil/sti/pdfs/ADA049014.pdf',referencia:'McCall, Richards y Walters, Factors in Software Quality, RADC-TR-77-369 (1977): modelo jerárquico de factores, criterios y métricas de calidad; no es una medida de complejidad del código.'},
    {url:'https://doi.org/10.1109/tse.1976.233837',referencia:'McCabe, T. J., “A Complexity Measure”, IEEE Transactions on Software Engineering SE-2(4), 1976, pp. 308–320, DOI 10.1109/TSE.1976.233837.'}
  ],
  copq:[
    {url:'https://asq.org/quality-resources/cost-of-quality',referencia:'American Society for Quality, Cost of Quality: define Cost of Poor Quality (COPQ) como costes de fallos internos (defectos detectados antes de entrega) y externos (detectados por el cliente); distingue ambos de prevención y evaluación.'}
  ]
};
const academy={url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',referencia:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026.1 (23-09-2026): incluye seguridad como característica de calidad de producto, CMMI, evaluación y métricas (McCabe/Halstead), pruebas y aseguramiento; se usa solo como encuadre curricular.'};
const a1={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Programa oficial A1, convocatoria BOE-A-2025-25938; correspondencia comprobada con revision/temario-oficial.json.'};
const a2={url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Programa oficial A2 GSI, convocatoria BOE-A-2025-26262; correspondencia comprobada con revision/temario-oficial.json.'};
const withCurr=(items)=>[...items,academy,a1,a2].map(x=>({url:x.url,referencia:x.referencia}));
const records=[
 [2616,['96','98'],['II-10','III-3'],['seguridad funcional','safety requirements','requisitos no funcionales'],withCurr(src.safety),'','La definición alude a seguridad (safety), no a fiabilidad: los requisitos de seguridad buscan evitar que el sistema contribuya a lesiones o daños a personas, bienes o entorno. La fiabilidad caracteriza el funcionamiento bajo condiciones y tiempo especificados, y por sí sola no expresa las consecuencias de un fallo. Se sustituye la opción imprecisa «salvaguarda» por «Seguridad funcional (safety)» y se corrige la clave. Encaje Academy: seguridad como característica de calidad; temas oficiales A1-96/A1-98 y A2-II-10/A2-III-3.','corregida'],
 [2617,['98','103'],['III-13'],['Deming','productividad','costes de calidad'],withCurr(src.deming),'','Se sustituye la afirmación simplista «un producto de calidad es más barato de producir» por la reacción en cadena de Deming: mejorar la calidad del proceso reduce retrabajos/fallos y costes, y eleva la productividad. No se afirma que cualquier producto de mayor calidad tenga necesariamente menor coste de diseño o producción. Encaje Academy: calidad y mejora; temas oficiales A1-98/A1-103 y A2-III-13.','corregida'],
 [2618,['96','98'],['III-13'],['CMMI','niveles de madurez','mejora de procesos'],withCurr(src.cmmi),'','Se especifica la representación staged de CMMI y se pregunta por nivel de madurez, no por niveles de capacidad: el nivel 5 se denomina Optimizing (Optimizado). El CMMI Institute mantiene esta denominación en su descripción de niveles. Encaje Academy: bloque 39 incluye CMMI e ISO/IEC 330xx; temas oficiales A1-96/A1-98/A2-III-13.','corregida'],
 [2619,['98'],['III-13'],['métricas de software','complejidad ciclomática','Halstead','McCall'],withCurr(src.complexity),'','Se precisa que se pregunta por medidas de complejidad del código: McCabe, Halstead y medidas de flujo de información son métricas de complejidad; McCall es un modelo de calidad organizado en factores, criterios y métricas. Se elimina Bang como distractor porque el SEI lo clasifica como medida de tamaño funcional, lo que hacía que también pudiera considerarse ajeno a la complejidad del código y dejaba dos respuestas posibles. Se conserva McCall como clave única. Encaje Academy: bloque 39 trata McCabe/Halstead y modelos de calidad; temas oficiales A1-98/A2-III-13.','corregida'],
 [2620,['98','103'],['III-13'],['coste de mala calidad','fallos internos','fallos externos'],withCurr(src.copq),'','Se acota «coste de no calidad» al coste de mala calidad (COPQ) en el modelo de costes de calidad: comprende costes de fallos internos y externos. Evaluación y prevención forman parte del coste total de calidad, pero no del COPQ en esta clasificación. Encaje Academy: bloque 39, calidad y evaluación; temas oficiales A1-98/A1-103/A2-III-13.','corregida']
];
const edits={
  2616:{texto:'Los requisitos que pretenden evitar que un fallo del sistema provoque lesiones o daños a personas, bienes o entorno son requisitos de:',opcion:[2,'Seguridad funcional (safety).'],respuesta_correcta:2},
  2617:{texto:'Según la reacción en cadena de Deming, ¿qué efecto sigue a la mejora de la calidad del proceso?',opcion:[3,'Se reducen fallos y retrabajos, bajan los costes y mejora la productividad.']},
  2618:{texto:'En los niveles de madurez de la representación staged de CMMI, ¿cómo se denomina el nivel 5?',opcion:[0,'Optimizado (Optimizing).']},
  2619:{texto:'¿Cuál de las siguientes opciones es un modelo de calidad del software y no una métrica de complejidad del código?',opciones:['La complejidad ciclomática de McCabe.','El modelo de factores de calidad de McCall.','Las métricas de Halstead.','Las métricas de flujo de información entre módulos.']},
  2620:{texto:'En el modelo PAF, ¿qué costes componen el coste de mala calidad (COPQ), también llamado coste de no calidad?',opcion:[2,'Los costes de fallos internos y de fallos externos.']}
};
apply({numero:'461',fecha:'2026-10-28',records,edits});
