const aplicar=require('./aplicar-lote.cjs');
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ref=(url,referencia)=>({url,referencia});
const records=[
 [5621,[88],['III-9'],['Proceso Unificado','RUP','casos de uso','arquitectura','ciclo de vida'],[
  ref('https://www.sei.cmu.edu/documents/3042/2001_017_001_23068.pdf','Carnegie Mellon Software Engineering Institute, The Rational Unified Process: identifica como características clave el desarrollo dirigido por casos de uso, diseño centrado en arquitectura e iteraciones basadas en riesgo.'),
  ref('https://public.dhe.ibm.com/software/rational/web/datasheets/version6/rup.pdf','IBM Rational Unified Process: describe el enfoque iterativo, la arquitectura como foco y la gestión del proyecto, entre otras disciplinas.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 88: casos de uso, metodologías de desarrollo y métodos ágiles.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.9: proceso unificado de software y análisis/diseño orientados a objetos.')
 ],null,'Se reformula el enunciado para distinguir las propiedades del Proceso Unificado frente a historias de usuario (asociadas a enfoques ágiles), refactorización continua (práctica popularizada por XP) y gestión del proyecto, que sí se contempla en el proceso. El desarrollo dirigido por casos de uso es una característica definitoria; el Proceso Unificado también es iterativo e iterativo-incremental y centrado en la arquitectura.','corregida'],
 [5622,[],['II-3'],['C++','const','paso por valor','referencia constante','parámetros'],[
  ref('https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/n4988.pdf','WG21, borrador de trabajo C++ N4988, reglas de inicialización de parámetros y referencias: un parámetro por valor recibe su propio objeto; una referencia a const puede vincularse a un objeto const, mientras una referencia no constante no.'),
  ref('https://learn.microsoft.com/en-us/cpp/cpp/functions-cpp?view=msvc-160','Microsoft Learn, Functions (C++): explica parámetros por valor y por referencia; el modo depende de la declaración del parámetro.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.3: características técnicas de lenguajes y paradigmas de programación.')
 ],null,'El original era indeterminado al no especificar lenguaje ni tipo de parámetro. Se concreta a C++: un objeto const puede pasarse por valor (se inicializa una copia del parámetro) o por referencia constante (`const T&`), pero no a una referencia no constante `T&`. Por ello la opción que incluye ambos modos es correcta dentro del alcance declarado. El temario oficial A2 trata lenguajes y paradigmas de forma general; no se encontró en la academia una cobertura específica de esta regla C++.','corregida'],
 [5623,[88],['II-3'],['programación estructurada','refinamiento sucesivo','diseño descendente','construcción paso a paso'],[
  ref('https://www.cs.utexas.edu/~EWD/transcriptions/EWD02xx/EWD249/EWD249.html','Edsger W. Dijkstra, Notes on Structured Programming (EWD 249): describe la composición de programas paso a paso, desde fuera hacia dentro, mediante refinamientos progresivos.'),
  ref('https://www.cs.utexas.edu/~EWD/transcriptions/EWD02xx/EWD268.html','Edsger W. Dijkstra, Structured Programming (EWD 268): analiza la abstracción paso a paso y la disciplina de construcción estructurada.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 88: metodologías de desarrollo de sistemas.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema II.3: lenguajes y paradigmas de programación.')
 ],null,'Vigente, respuesta A. La técnica es el refinamiento sucesivo o paso a paso: se empieza por una descripción de alto nivel y se descompone progresivamente en instrucciones y subproblemas de mayor detalle. Iteración y selección son estructuras de control, no el tipo de refinamiento al que se refiere la pregunta.','vigente'],
 [5624,[89],['III-4'],['modelo entidad-relación extendido','especialización','supertipo','subtipo','herencia'],[
  ref('https://mrce.in/ebooks/Database-Fundamentals%20of%20Database%20Systems%207th%20Ed.pdf','Elmasri y Navathe, Fundamentals of Database Systems, 7.ª ed., cap. 4: la especialización define subclases de un supertipo; cada entidad del subtipo hereda los atributos y relaciones del supertipo. Distingue generalización y agregación.'),
  ref('https://www.cs.purdue.edu/homes/bb/cs448_Fall2016/lecture-files/pdf/ch04-Enhanced%20Entity-Relationship%20%28EER%29%20Modeling.pdf','Purdue University, EER Modeling, diapositiva sobre herencia: los subtipos heredan atributos y relaciones de su supertipo.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 89: análisis de dominio y modelos entidad-relación.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.4: modelado y diseño de bases de datos.')
 ],null,'Vigente, respuesta A. La especialización define uno o varios subtipos a partir de un supertipo y cada subtipo hereda atributos y participación en relaciones del supertipo, además de poder tener atributos/relaciones propios. La generalización abstrae elementos comunes para obtener un supertipo; la agregación trata una relación como una entidad de nivel superior.','vigente'],
 [5625,[89],['III-4'],['modelo entidad-relación extendido','modelo conceptual','independencia física','modelado de datos'],[
  ref('https://doi.org/10.1145/320434.320440','Peter Pin-Shan Chen, The Entity-Relationship Model—Toward a Unified View of Data, ACM Transactions on Database Systems, 1976: plantea el modelo ER como representación conceptual de entidades, relaciones y atributos del dominio.'),
  ref('https://mrce.in/ebooks/Database-Fundamentals%20of%20Database%20Systems%207th%20Ed.pdf','Elmasri y Navathe, Fundamentals of Database Systems, 7.ª ed., capítulos 3–4: el modelado ER/EER representa datos y semántica del dominio antes de las decisiones lógicas y físicas de implementación.'),
  ref(a1,'Convocatoria GSI A1 2025, anexo I, tema 89: análisis del dominio, modelo entidad-relación y modelos de clases.'),
  ref(a2,'Convocatoria GSI A2 2025, anexo IX, tema III.4: modelado de datos y diseño de bases de datos.')
 ],null,'Vigente, respuesta C. El modelo ER/EER es un modelo conceptual centrado en describir los datos del dominio y sus relaciones, sin exigir conocer previamente un SGBD ni depender del entorno físico. La eficiencia y la información necesaria son objetivos relevantes del análisis, pero no describen esta propiedad conceptual.','vigente']
];
const edits={
 5621:{texto:'¿Qué característica del Proceso Unificado de Desarrollo de Software lo distingue de metodologías basadas principalmente en historias de usuario?',opciones:['Se basa principalmente en Historias de Usuario como artefacto conductor.','Es un proceso dirigido por casos de uso.','Se define por la refactorización continua como práctica central.','No contempla la gestión del proyecto.'],respuesta_correcta:1},
 5622:{texto:'En C++, un objeto declarado const puede pasarse como argumento a un parámetro de función:',opciones:['Solo por valor.','Solo por referencia constante.','No puede pasarse.','Por valor o por referencia constante, según la declaración del parámetro.'],respuesta_correcta:3}
};
aplicar({numero:'1060',fecha:'2026-11-12',records,edits});
