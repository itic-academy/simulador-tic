const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const btc='https://developer.bitcoin.org/devguide/block_chain.html';
const btcCore='https://bitcoin.org/en/bitcoin-core/2016-01-07-statement';
const nist='https://xlinux.nist.gov/dads/HTML/dataStructure.html';
const rup='https://public.dhe.ibm.com/software/rational/web/whitepapers/2003/rup_bestpractices.pdf';
const oracle='https://www.oracle.com/database/technologies/developer-tools/designer.html';
const rose='https://public.dhe.ibm.com/software/rational/docs/v2002/rose/rose_using/intro.html';
const predict='https://archive.computerhistory.org/resources/text/Software_AG/070910download/softwareag.connections_1989_sep/softwareag.connections_1989_sep.pdf';
const easy='https://jacobfilipp.com/DrDobbs/articles/DDJ/1997/9714/9714l/9714l.htm';
const coh='https://www.niap-ccevs.org/Documents_and_Guidance/ci_manuals/med_rob_manual-3.0.pdf';
const edits={
 6891:{texto:'En la red Bitcoin, ¿qué afirmación describe correctamente una bifurcación suave (soft fork) de las reglas de consenso?',opciones:['Los nodos actualizados aceptan los nuevos bloques y los nodos antiguos necesariamente los rechazan.','La actualización amplía las reglas válidas, por lo que los bloques nuevos quedan fuera de las reglas antiguas.','La actualización añade restricciones compatibles: los bloques que cumplen las nuevas reglas también son válidos según las reglas antiguas, aunque los nodos antiguos no aplican las restricciones nuevas.','Todos los nodos deben actualizarse para que la red pueda seguir una única cadena.'],respuesta_correcta:2},
 6892:{texto:'¿Cuál de las siguientes afirmaciones sobre algoritmos y estructuras de datos no es correcta?',opciones:['Una estructura de datos organiza la información para facilitar su manipulación y puede tener operaciones/algoritmos asociados.','La elección de un algoritmo y de las estructuras de datos que utilizará tiene poca relación entre sí.','La estructura lógica y sus operaciones se eligen atendiendo al problema y a la eficiencia requerida.','Las estructuras pueden clasificarse, entre otros criterios, como estáticas o dinámicas.'],respuesta_correcta:1},
 6893:{texto:'¿Cuál de estas afirmaciones no describe una característica del Proceso Unificado de Desarrollo de Software (PUDS/RUP)?',opciones:['No incorpora actividades de verificación ni control de calidad del software.','Es un proceso centrado en la arquitectura.','Es un proceso dirigido por casos de uso.','Es un proceso iterativo e incremental.'],respuesta_correcta:0},
 6894:{texto:'Oracle Designer, EasyCASE de Evergreen, PREDICT CASE de Software AG y Rational Rose son ejemplos históricos de herramientas CASE principalmente orientadas a:',opciones:['Pruebas automatizadas y generación de código exclusivamente.','Gestión de configuración y control de versiones.','Métricas y estimación del software.','Análisis y diseño de sistemas/software.'],respuesta_correcta:3},
 6895:{texto:'En la clasificación clásica de cohesión de módulos y acoplamiento, ¿cuál de los siguientes términos no es un tipo de cohesión?',opciones:['Lógica.','Temporal.','Funcional.','Por estampado (stamp), que es un tipo de acoplamiento.'],respuesta_correcta:3}
};
const records=[
[6891,[85],[],['blockchain','soft fork','hard fork','compatibilidad hacia atrás','consenso'],[
{url:btc,referencia:'Bitcoin Developer Guide, Block Chain: describe cambios de consenso compatibles hacia atrás; los soft forks añaden reglas más restrictivas que los nodos actualizados hacen cumplir.'},
{url:btcCore,referencia:'Bitcoin Core, declaración de 7-1-2016: formaliza soft fork como cambio donde los bloques válidos bajo nuevas reglas siguen siendo válidos bajo las reglas antiguas, mientras el conjunto de bloques admitidos se restringe.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 85: características de blockchain, redes, consenso y contratos inteligentes.'}
],edits[6891],'Se sustituye la comparación subjetiva «más difícil de implementar» por la propiedad definitoria verificable. En un soft fork las nuevas reglas son más restrictivas: los bloques que las cumplen permanecen válidos bajo las reglas antiguas; los nodos antiguos pueden no aplicar las nuevas restricciones. La frase original confundía ese comportamiento con un hard fork.', 'corregida'],
[6892,[],['III-5'],['algoritmos','estructuras de datos','eficiencia','NIST DADS'],[
{url:nist,referencia:'NIST Dictionary of Algorithms and Data Structures, entrada data structure: una estructura organiza la información para favorecer la eficiencia algorítmica y suele tener algoritmos asociados para sus operaciones.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.5: TAD, estructuras de datos y estrategias de diseño de algoritmos.'}
],edits[6892],'Se mantiene la clave B (la única incorrecta): algoritmo y estructura de datos se eligen conjuntamente porque las operaciones y la organización de datos afectan a la eficiencia. NIST DADS indica explícitamente que las estructuras se usan para mejorar la eficiencia de algoritmos y que suelen tener algoritmos asociados.', 'corregida'],
[6893,[88],['III-9'],['Proceso Unificado','RUP','iterativo','incremental','arquitectura','casos de uso','calidad'],[
{url:rup,referencia:'IBM Rational Unified Process: sus mejores prácticas incluyen desarrollo iterativo, arquitecturas basadas en componentes, gestión de requisitos mediante casos de uso y verificación continua de la calidad; la calidad se integra durante el ciclo.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 88: metodologías de desarrollo de sistemas.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.9: incluye expresamente el proceso unificado de software.'}
],edits[6893],'Se conserva A como enunciado falso: RUP sí incorpora evaluación/verificación de calidad y pruebas a lo largo del proceso; también es iterativo e incremental, centrado en arquitectura y dirigido por casos de uso. Se usa la denominación PUDS/RUP para reducir la ambigüedad de la sigla española.', 'corregida'],
[6894,[88],['III-9'],['CASE','Oracle Designer','EasyCASE','PREDICT CASE','Rational Rose','análisis','diseño','herramientas históricas'],[
{url:oracle,referencia:'Oracle, product information for Oracle Designer: modelado de procesos, análisis de sistemas, diseño y generación de aplicaciones.'},
{url:rose,referencia:'IBM Rational Rose guide: Rose permite crear, analizar y diseñar modelos/componentes de software; herramienta de modelado visual y análisis/diseño.'},
{url:predict,referencia:'Software AG Connections (1989), descripción del producto PREDICT CASE: entorno CASE integrado para análisis de requisitos, modelado lógico/conceptual y fases de diseño/implementación.'},
{url:easy,referencia:'Dr. Dobb’s Sourcebook, entrada contemporánea EasyCASE Professional 4.2/Evergreen: apoyo al análisis estructurado y diseño mediante DFD, ER, estados y diagramas de estructura.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, temas 88–93: metodologías de desarrollo, análisis funcional, modelado y técnicas de diseño.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y proceso unificado.'}
],edits[6894],'Se mantiene D: los productos citados son herramientas CASE de análisis/modelado/diseño. El enunciado se marca histórico porque son nombres de productos legados; no se presentan como catálogo tecnológico vigente ni se afirma que todos tengan idéntico alcance funcional.', 'historica'],
[6895,[93],['III-9'],['cohesión','acoplamiento','cohesión funcional','cohesión temporal','cohesión lógica','stamp coupling'],[
{url:coh,referencia:'NIAP Common Criteria evaluation manual, extracto del IEEE Std 610.12: enumera cohesión coincidental, lógica/procedural, temporal, comunicacional, secuencial y funcional; distingue acoplamiento y cita el «stamp» como ejemplo de call coupling.'},
{url:a1,referencia:'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software.'},
{url:a2,referencia:'Convocatoria A2 GSI 2025, tema III.9: análisis/diseño orientado a objetos y patrones; correspondencia contextual para conceptos de diseño modular.'}
],edits[6895],'Se conserva D. En la taxonomía clásica, cohesión lógica, temporal y funcional son clases de cohesión; stamp (estampado) es acoplamiento de datos estructurados. Se acota «clasificación clásica» porque la terminología de diseño puede variar entre textos y evita presentar stamp como una clase de cohesión.', 'corregida']
];
const extras={6891:[{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',referencia:'Cotejo curricular ITIC Academy, bloque 30, Tecnologías de sistemas de información (2026): A1-85 incluye blockchain, redes y consenso, y el apartado sobre forks.'}],6892:[{url:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',referencia:'Cotejo curricular ITIC Academy, bloque 32, Inteligencia Artificial y Ciencia de Datos (2026): A2 incluye TAD, estructuras de datos y estrategias de diseño de algoritmos.'}],6893:[{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',referencia:'Cotejo curricular ITIC Academy, bloque 38, Análisis, diseño y construcción (2026): metodologías, proceso unificado, iteraciones, arquitectura, casos de uso y calidad.'}],6894:[{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',referencia:'Cotejo curricular ITIC Academy, bloque 38, Análisis, diseño y construcción (2026): herramientas CASE, análisis, diseño estructurado y modelado.'}],6895:[{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',referencia:'Cotejo curricular ITIC Academy, bloque 38, Análisis, diseño y construcción (2026), §5.4: cohesión y acoplamiento.'}]};
for(const r of records) r[4].push(...extras[r[0]]);
aplicar({numero:'1314',fecha:'2026-11-15',records,edits});
