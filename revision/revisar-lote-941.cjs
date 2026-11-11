const aplicar=require('./aplicar-lote.cjs');
const ref=(url,referencia)=>({url,referencia});
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy17='https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const academy30='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy39='https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academy28='https://drive.google.com/file/d/11qGK4GbJ0QV81HEyboRAy5AZorijJmhs/view?usp=drivesdk';
const brans='https://pubsonline.informs.org/doi/abs/10.1287/mnsc.31.6.647';
const java='https://docs.oracle.com/en/java/javase/26/docs/api/java.base/java/util/StringTokenizer.html';
const irs='https://www.irs.gov/irm/part2/irm_02-005-012';
const istqb='https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf';
const nist='https://csrc.nist.gov/glossary/term/interface';
const records=[
 [5026,['40','41'],['II-15'],['PROMETHEE','decisión multicriterio','relaciones de superación'],[
  ref(brans,'Brans y Vincke, “A Preference Ranking Organisation Method (The PROMETHEE Method for Multiple Criteria Decision-Making)”, Management Science 31(6), 1985, pp. 647–656: define PROMETHEE como familia de métodos de superación (outranking), con grafo de superación valorado.'),
  ref(a1,'Convocatoria oficial A1 GSI 2025, anexo I, temas 40–41: estudio de alternativas, viabilidad y toma de decisión en adquisición de sistemas.'),
  ref(a2,'Convocatoria oficial A2 GSI 2025, anexo IX, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad.'),
  ref(academy17,'ITIC Academy, bloque 17 «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», versión 2026.2 (02/10/2026): decisión multicriterio y evaluación de alternativas; cotejo curricular.')
 ],null,'Respuesta C: PROMETHEE es una familia de métodos de relaciones de superación para ordenar alternativas en análisis multicriterio; no es el método de concordancia ELECTRE, un método de permutaciones ni una suma ponderada lineal. Se conserva el enunciado y la clave.', 'vigente'],
 [5027,['67'],['III-10'],['Java','StringTokenizer','nextToken'],[
  ref(java,'Oracle Java SE 26 API, java.util.StringTokenizer: el ejemplo recorre los tokens con nextToken(); la ficha define el método nextToken() como retorno del siguiente token y avance de la posición interna.'),
  ref(a1,'Convocatoria oficial A1 GSI 2025, anexo I, tema 67: entorno de desarrollo Java.'),
  ref(a2,'Convocatoria oficial A2 GSI 2025, anexo IX, tema III.10: arquitectura Java EE/Jakarta EE y sus elementos.'),
  ref(academy30,'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1 (31/08/2026): entorno Java y tecnologías de programación; cotejo curricular.')
 ],null,'Respuesta C: nextToken(). La API oficial de Java indica que obtiene el token siguiente y adelanta la posición del tokenizer. StringTokenizer se conserva por compatibilidad, aunque la documentación de Oracle lo considera una clase heredada y desaconseja su uso en código nuevo.', 'vigente'],
 [5028,['93'],['III-5'],['pseudocódigo','especificación de módulos','diseño de algoritmos'],[
  ref(irs,'Internal Revenue Manual 2.5.12, Design Techniques and Deliverables: pseudocode es un esquema de la intención del código en lenguaje no perteneciente a un lenguaje de programación, similar al inglés estructurado.'),
  ref(a1,'Convocatoria oficial A1 GSI 2025, anexo I, tema 93: técnicas de diseño de software.'),
  ref(a2,'Convocatoria oficial A2 GSI 2025, anexo IX, tema III.5: estrategias de diseño de algoritmos.'),
  ref(academy30,'ITIC Academy, bloque 30 «Tecnologías de sistemas de la información», versión 2026.1 (31/08/2026): tecnologías de programación y lenguajes; se coteja el contexto, sin atribuir al bloque una sintaxis estándar de pseudocódigo.')
 ],null,'Respuesta B, con una precisión necesaria: pseudocódigo es una notación informal y estructurada para expresar la lógica de un algoritmo, pero no un lenguaje de programación ejecutable ni una categoría con gramática universal normalizada. Se reformula la opción B para sustituir la etiqueta imprecisa «lenguaje estructurado» por una descripción técnicamente delimitada.', 'corregida'],
 [5029,['96'],['III-7'],['pruebas de caja negra','partición de equivalencia','pruebas de software'],[
  ref(istqb,'ISTQB Certified Tester Foundation Level Syllabus v4.0.1, §4.2: incluye partición de equivalencia entre las técnicas black-box; el §4.3 sitúa camino básico, bucles y flujo de datos entre técnicas de caja blanca/estructurales.'),
  ref(a1,'Convocatoria oficial A1 GSI 2025, anexo I, tema 96: procesos, técnicas y herramientas de pruebas de software.'),
  ref(a2,'Convocatoria oficial A2 GSI 2025, anexo IX, tema III.7: pruebas y utilización de datos de prueba.'),
  ref(academy39,'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1 (23/09/2026): estrategia y técnicas de prueba de software; cotejo curricular.')
 ],null,'Respuesta C: partición de equivalencia es una técnica de caja negra basada en la especificación y el comportamiento esperado. Camino básico, pruebas de bucles y flujo de datos analizan la estructura interna y son técnicas de caja blanca. La clasificación coincide con ISTQB CTFL v4.0.1.', 'vigente'],
 [5030,['92'],['II-6'],['interfaz','arquitectura de sistemas','componentes'],[
  ref(nist,'NIST CSRC Glossary, entrada interface: para ingeniería de sistemas recoge de CNSSI 4009-2022 que es un límite común donde ocurren interacciones y de ISO/IEC/IEEE 15288:2015 que es donde dos o más elementos lógicos o físicos de sistema se encuentran e interactúan o comunican.'),
  ref(a1,'Convocatoria oficial A1 GSI 2025, anexo I, tema 92: diseño arquitectónico de sistemas.'),
  ref(a2,'Convocatoria oficial A2 GSI 2025, anexo IX, tema II.6: arquitectura de sistemas, componentes e interoperabilidad.'),
  ref(academy28,'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1 (25/09/2026): arquitectura, componentes e interoperabilidad; cotejo curricular, no sustituto de la definición normalizada.')
 ],null,'Respuesta C, reformulada con el alcance preciso de ingeniería de sistemas: una interfaz es el límite común en que dos o más elementos de sistema, lógicos o físicos, se encuentran e interactúan o comunican. Se descartan las caracterizaciones vagas del original («grupo de especificaciones», «entidad lógica») y el enunciado se ancla a la definición que NIST atribuye a ISO/IEC/IEEE 15288:2015; no se marca «todas» por la sola posible validez de esas expresiones en otros contextos.', 'corregida']
];
const edits={
 5028:{opcion:[1,'Una notación informal y estructurada para expresar algoritmos, sin sintaxis formal única ni ejecución directa por el ordenador.']},
 5030:{texto:'Según la definición de ingeniería de sistemas recogida por NIST a partir de ISO/IEC/IEEE 15288:2015, ¿qué es una interfaz?',opcion:[2,'El límite común donde dos o más elementos de sistema, lógicos o físicos, se encuentran e interactúan o se comunican.']}
};
aplicar({numero:'941',fecha:'2026-11-11',records,edits});
