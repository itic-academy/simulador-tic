const apply=require('./aplicar-lote.cjs');
const aima='https://aima.cs.berkeley.edu/4th-ed/pdfs/newchap04.pdf';
const fcm='https://u-aizu.ac.jp/course/bmclass/documents/FCM%20-%20The%20Fuzzy%20c-Means%20Clustering%20Algorithm.pdf';
const frames='https://kr.org/proceedings/KR-1989-proceedings-scanned.pdf';
const moodle='https://support.moodle.com/support/solutions/articles/80001075425-about-moodle';
const joomla='https://docs.joomla.org/Content_Management_System/en';
const drupal='https://www.drupal.org/about';
const lopdgdd='https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const rgpd='https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807';
const ens='https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191';
const records=[
 [2956,[70],['III-5'],['búsqueda heurística','greedy best-first','algoritmos de búsqueda','inteligencia artificial'],[
  {url:aima,referencia:'Russell y Norvig, Artificial Intelligence: A Modern Approach, 4.ª ed., §4.1: greedy best-first usa la heurística h(n); best-first general ordena por una función f y no siempre usa heurística.'}
 ],'','Se precisa la pregunta: «búsqueda primero el mejor» es una familia que puede emplear distintas funciones de evaluación y no toda variante best-first es heurística. La respuesta correcta queda delimitada a greedy best-first, que evalúa con h(n), estimación del coste restante hasta el objetivo. Anchura y profundidad son estrategias no informadas; coste uniforme ordena por g(n). Cotejo curricular: ITIC Academy, Bloque 32, búsqueda/heurísticas dentro de A2-III-5 y fundamentos de IA A1-70.','corregida'],
 [2957,[70,71],['III-5'],['FCM','Fuzzy C-Means','reconocimiento de patrones','agrupamiento difuso'],[
  {url:fcm,referencia:'Bezdek, Ehrlich y Full, FCM: The Fuzzy c-Means Clustering Algorithm, Computers & Geosciences 10(2–3), 1984: algoritmo que genera particiones difusas y prototipos para datos numéricos.'}
 ],'','Se confirma la clave: FCM significa Fuzzy c-Means y es un algoritmo de agrupamiento difuso; cada observación puede tener grados de pertenencia a varios grupos. Se corrige la errata del enunciado y se expande la sigla sin confundirla con encadenamiento hacia delante. Cotejo curricular: ITIC Academy, Bloque 32, fundamentos de IA, aprendizaje no supervisado y agrupamiento; A1-70/A1-71/A2-III-5.','vigente'],
 [2958,[70],['III-5'],['representación del conocimiento','marcos','ranuras','procedimientos adjuntos'],[
  {url:frames,referencia:'Proceedings of KR-1989, Crawford y Kuipers: reglas if-needed se aplican cuando se requiere un valor de ranura; reglas if-added cuando se inserta un nuevo valor.'},
  {url:'https://www.mit.edu/~dxh/marvin/web.media.mit.edu/~minsky/papers/Frames/frames.html',referencia:'Minsky, A Framework for Representing Knowledge, MIT-AI Memo 306: marcos con contenidos factuales y procedimentales vinculados.'}
 ],'','Se convierte en pregunta directa porque el original confundía facetas declarativas con procedimientos adjuntos. En marcos, if-added se dispara al añadir un valor a la ranura; if-needed se invoca cuando hace falta obtener un valor y no hay uno disponible. Cotejo curricular: ITIC Academy, Bloque 32, IA simbólica, representación del conocimiento y sistemas expertos; A1-70/A2-III-5.','corregida'],
 [2959,[65],['II-12'],['LMS','Moodle','Joomla','Drupal','plataformas de aprendizaje'],[
  {url:moodle,referencia:'Moodle, About Moodle: se define como sistema de gestión del aprendizaje (LMS) para crear espacios, cursos y actividades de aprendizaje.'},
  {url:joomla,referencia:'Joomla! Documentation: Joomla CMS es un sistema de gestión de contenidos web extensible mediante extensiones.'},
  {url:drupal,referencia:'Drupal.org, About: Drupal se define como software de gestión de contenidos, con extensiones que amplían su funcionalidad.'}
 ],'','Se conserva Moodle como respuesta, pero se evita afirmar que Joomla o Drupal no puedan ampliarse para usos educativos: Moodle se define oficialmente como LMS; Joomla y Drupal se describen como CMS de propósito general extensibles. Cotejo curricular: ITIC Academy, Bloque 30, arquitectura de aplicaciones web y plataformas; A1-65/A2-II-12.','corregida'],
 [2960,[27,48,82],['I-7','I-9','II-13'],['LOPDGDD','RGPD','ENS','seguridad de datos personales','sector público'],[
  {url:lopdgdd,referencia:'BOE, Ley Orgánica 3/2018, texto consolidado, disposición adicional primera: el ENS incluye medidas para prevenir pérdida, alteración o acceso no autorizado y adapta los criterios de riesgo al artículo 32 RGPD.'},
  {url:rgpd,referencia:'BOE, Reglamento (UE) 2016/679, artículo 32: seguridad del tratamiento basada en riesgo.'},
  {url:ens,referencia:'BOE, Real Decreto 311/2022, texto consolidado: Esquema Nacional de Seguridad y gestión de riesgos.'}
 ],'','Se actualiza «nueva Ley» por la referencia vigente a la disposición adicional primera de la LO 3/2018. La opción correcta es la que indica que el ENS incluirá las medidas necesarias y adaptará los criterios de riesgo al artículo 32 del RGPD. No se requieren informes previos conjuntos de CCN-CERT y AEPD para que ellos determinen cada medida; el análisis y la gestión de riesgos se realizan conforme al ENS. Cotejo curricular: ITIC Academy, Bloque 08 Protección de Datos (2026.3), RGPD/LOPDGDD y medidas; Bloque 48 Seguridad en redes y aplicaciones; A1-27/A1-48/A1-82/A2-I-7/I-9/II-13.','corregida']
];
apply({numero:'528',fecha:'2026-10-29',records,edits:{
 2956:{texto:'¿Qué algoritmo de búsqueda informada selecciona para expandir el nodo de la frontera con menor estimación heurística h(n) del coste restante hasta el objetivo?',opciones:['Greedy best-first search (búsqueda voraz primero el mejor).','Búsqueda de coste uniforme, que ordena por el coste acumulado g(n).','Búsqueda primero en anchura.','Búsqueda primero en profundidad.'],respuesta_correcta:0},
 2957:{texto:'En reconocimiento de patrones, ¿para qué se utiliza FCM (Fuzzy c-Means)?',opciones:['Para encadenamiento hacia delante en un sistema de reglas.','Para agrupar datos en clústeres difusos, asignando grados de pertenencia a los grupos.','Para construir mapas cognitivos finales.','Ninguna de las anteriores.'],respuesta_correcta:1},
 2958:{texto:'En una representación del conocimiento mediante marcos, ¿cuándo se ejecuta normalmente un procedimiento adjunto if-added a una ranura?',opciones:['Cuando se solicita un valor que falta en la ranura.','Cuando se añade un nuevo valor a la ranura.','Sólo al crear el marco, independientemente de sus ranuras.','Cada vez que se consulta el marco, aunque no cambie ninguna ranura.'],respuesta_correcta:1},
 2959:{texto:'¿Cuál de estas plataformas se define oficialmente como un sistema de gestión del aprendizaje (LMS) para crear cursos y actividades educativas?',opciones:['Joomla, CMS web extensible.','Drupal, CMS web extensible.','Moodle.','Ninguna; todas son LMS por definición.'],respuesta_correcta:2},
 2960:{texto:'Conforme a la disposición adicional primera de la Ley Orgánica 3/2018, sobre medidas de seguridad en el sector público para tratamientos de datos personales:',opciones:['El ENS incluye medidas para prevenir la pérdida, alteración o acceso no autorizado, pero sus criterios de riesgo no tienen que adaptarse al RGPD.','La ley exige informe previo conjunto del CCN-CERT y la AEPD para que ambos determinen las medidas aplicables a cada tratamiento.','El ENS incluirá medidas para prevenir pérdida, alteración o acceso no autorizado y adaptará los criterios de determinación del riesgo al artículo 32 del RGPD.','Basta un informe del CCN-CERT; no se aplican las medidas del ENS.'],respuesta_correcta:2}
}});
