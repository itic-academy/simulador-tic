const apply = require('./aplicar-lote.cjs');

const academy39 = {
  url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
  referencia: 'ITIC Academy, Bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026), leído en Drive: calidad, EFQM 2025, SQuaRE/ISO 25010:2023 e ISO 25019:2023, McCall, métricas (incluida McCabe), pruebas y aseguramiento. Cotejo curricular; no sustituye la fuente primaria.'
};
const efqmOld = {
  url: 'https://www.hacienda.gob.es/SGT/CATALOGO_SEFP/034_Guia-EFQM-corta-04-06.pdf',
  referencia: 'Ministerio de Administraciones Públicas, Guía de autoevaluación para la Administración Pública: Modelo EFQM de Excelencia (2006), secciones de metodología de autoevaluación; métodos clásicos de cuestionario, formulario y simulación de presentación al premio. Referencia metodológica histórica.'
};
const efqmNow = {
  url: 'https://digital.gob.es/content/dam/sgad/sefp/es/portalsefp/gobernanza-publica/calidad/Metodolog-as-y-Guias/Guia_modelo_EFQM_2025.pdf',
  referencia: 'EFQM, Modelo EFQM 2025, guía oficial publicada en el portal del Ministerio para la Transformación Digital y de la Función Pública. Se consulta para delimitar la referencia actual: el reactivo no atribuye las técnicas históricas a una obligación del modelo 2025.'
};
const efqmPortal = {
  url: 'https://digital.gob.es/en/funcion-publica/gobernanza-publica/calidad-administraciones-publicas/metodologias-y-guias',
  referencia: 'Ministerio para la Transformación Digital y de la Función Pública, metodologías y guías de calidad: identifica separadamente la guía EFQM 2025 y las guías anteriores, incluida EFQM 2013; contextualiza la evolución de las guías.'
};
const isoSquare = {
  url: 'https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/iso-25000-square-series.html',
  referencia: 'ISO/IEC JTC 1/SC 7, descripción de SQuaRE y sus divisiones: ISO/IEC 2501n reúne modelos detallados de calidad de producto, calidad en uso y datos; 2500n es gestión común y 2502n medición.'
};
const iso25010 = {
  url: 'https://www.iso.org/standard/78176.html',
  referencia: 'ISO/IEC 25010:2023, edición vigente publicada en noviembre de 2023: modelo de calidad de producto TIC/software con nueve características; sustituye a ISO/IEC 25010:2011.'
};
const iso25019 = {
  url: 'https://www.iso.org/standard/78177.html',
  referencia: 'ISO/IEC 25019:2023, edición vigente para el modelo de calidad en uso; separa esta materia del modelo de calidad del producto de ISO/IEC 25010:2023.'
};
const mccall = {
  url: 'https://apps.dtic.mil/sti/pdfs/ADA049014.pdf',
  referencia: 'McCall, Richards y Walters, Factors in Software Quality, RADC-TR-77-369, vol. I (1977), modelo histórico: Product Operation contiene correctness, reliability, efficiency, integrity y usability; multifuncionalidad no es uno de sus factores.'
};
const mccallCopy = {
  url: 'https://cgi.csc.liv.ac.uk/~comp208/2013/GetTRDoc.pdf',
  referencia: 'Copia accesible del informe técnico original RADC-TR-77-369, vol. I (1977), tabla/taxonomía de factores de operación, revisión y transición de McCall.'
};
const mccabe = {
  url: 'https://doi.org/10.1109/TSE.1976.233837',
  referencia: 'McCabe, “A Complexity Measure”, IEEE Transactions on Software Engineering, SE-2(4), 1976, pp. 308–320: define una medida grafo-teórica basada en el flujo de control y el número de caminos básicos/independientes.'
};
const pggc = {
  url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A018552c6-b17d-46a3-a982-32deb2fcaf5d/1991-Plan-General-de-Garantia-de-calidad-NIPO-328-91-023-6.pdf',
  referencia: 'MAP/Consejo Superior de Informática, Plan General de Garantía de Calidad, 1991, fascículo 3, introducción (pp. 170–171): distingue revisiones técnicas formales e inspecciones, pruebas de aceptación de la aplicación (PAA), auditorías y evaluación de prototipos (EVP). PAA son pruebas, no “revisiones de aceptación”. Referencia histórica.'
};
const a1 = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'Convocatoria y programa oficial del Cuerpo Superior de Sistemas y Tecnologías de la Información de la Administración del Estado, BOE-A-2025-25938, anexo de programa: temas 96, 98 y 103 según cada reactivo.'
};
const a2 = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'Convocatoria y programa oficial del Cuerpo de Gestión de Sistemas e Informática de la Administración del Estado, BOE-A-2025-26262, anexo IX: temas III.7 y III.13 según cada reactivo.'
};
const sources = (...items) => items.map(x => ({url:x.url, referencia:x.referencia}));

const records = [
  [2646,['103'],['III-13'],['EFQM','autoevaluación','simulación al premio','formularios','cuestionarios','métodos históricos'],sources(efqmOld,efqmNow,efqmPortal),'','Se reforma el reactivo para eliminar la ambigüedad de la pregunta negativa y de “todas son correctas”: en las guías clásicas de autoevaluación EFQM, cuestionario, formulario/pro forma y simulación de presentación al premio son métodos reconocidos. Se acota a las guías clásicas (MAP, 2006), no se presenta como una prescripción del Modelo EFQM 2025. Referencia histórica. Correspondencia A1-103/A2-III-13.','historica'],
  [2647,['98'],['III-13'],['SQuaRE','ISO/IEC 2501n','ISO/IEC 25010:2023','calidad del producto','calidad en uso'],sources(isoSquare,iso25010,iso25019),'','Se actualiza la descripción de la división ISO/IEC 2501n: ofrece modelos detallados de calidad de producto, calidad en uso y datos. La frase original sobre calidad interna/externa y en uso mezclaba el modelo de ISO/IEC 25010:2011, retirado, con la división actual. La edición 2023 de ISO/IEC 25010 define el modelo de producto (nueve características) y ISO/IEC 25019:2023 trata calidad en uso por separado. A1-98/A2-III-13.','corregida'],
  [2648,['98'],['III-13'],['McCall','factores de calidad','Product Operation','modelo histórico'],sources(mccall,mccallCopy),'','Se acota a la taxonomía histórica de McCall et al. (1977): Product Operation incluye corrección, fiabilidad, eficiencia, integridad y usabilidad; “multifuncionalidad” no es uno de esos cinco factores. No se equipara esta clasificación histórica con un catálogo actual de características ISO. A1-98/A2-III-13.','historica'],
  [2649,['98'],['III-13'],['McCabe','complejidad ciclomática','grafo de flujo de control','métricas de software'],sources(mccabe),'','Se concreta la métrica como complejidad ciclomática de McCabe: medida grafo-teórica del flujo de control vinculada al número de caminos básicos independientes. No es una medición exhaustiva de toda dimensión de complejidad del programa. El artículo original de 1976 introduce la medida; el concepto sigue siendo una métrica de software utilizable. A1-98/A2-III-13.','corregida'],
  [2650,['96','98'],['III-7','III-13'],['PGGC','garantía de calidad','pruebas de aceptación','revisiones técnicas formales','evaluación de prototipos','referencia histórica'],sources(pggc),'','Se delimita al PGGC del MAP/Consejo Superior de Informática de 1991. Su fascículo 3 incluye revisiones técnicas formales, pruebas (entre ellas pruebas de aceptación de la aplicación, PAA), auditorías y evaluación de prototipos (EVP). “Revisiones de aceptación” no es la denominación de un procedimiento-tipo: se confunde con las pruebas PAA. Se conserva la clave 0 y se marca histórica. A1-96/A1-98/A2-III-7/A2-III-13.','historica']
];
const edits = {
  2646:{texto:'En las guías clásicas de autoevaluación EFQM, ¿qué afirmación reúne correctamente las técnicas indicadas?',opciones:['La simulación de presentación al premio es un método de autoevaluación.','La autoevaluación mediante formularios o pro forma es un método reconocido.','El cuestionario de autoevaluación es otro método reconocido.','Las tres anteriores son técnicas clásicas de autoevaluación.'],respuesta_correcta:3},
  2647:{texto:'En la familia SQuaRE vigente, ¿qué caracteriza a la división ISO/IEC 2501n?',opciones:['Define los modelos, términos y definiciones comunes referenciados por el resto de la familia.','Presenta modelos detallados de calidad para productos de sistemas y software, calidad en uso y datos.','Define el modelo de referencia de medición y las medidas de calidad con guías para aplicarlas.','Ayuda a especificar requisitos de calidad.'],respuesta_correcta:1},
  2648:{texto:'En el modelo histórico de factores de McCall (1977), ¿cuál NO pertenece al grupo Product Operation?'},
  2649:{texto:'¿Qué métrica de McCabe, basada en el grafo de flujo de control, cuantifica la complejidad ciclomática de un programa?',opciones:['Complejidad ciclomática.','Complejidad de camino máximo.','Complejidad de flujo.','Complejidad de bucle.'],respuesta_correcta:0},
  2650:{texto:'Según el fascículo 3 del PGGC del MAP de 1991, ¿cuál de estas denominaciones NO es un procedimiento-tipo de control de calidad?',opciones:['Revisiones de aceptación.','Auditorías.','Revisiones técnicas formales.','Evaluación de prototipos.'],respuesta_correcta:0}
};
apply({numero:'467',fecha:'2026-10-29',records,edits});
