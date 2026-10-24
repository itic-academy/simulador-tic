const apply = require('./aplicar-lote.cjs');

const a1 = { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'BOE-A-2025-25938, anexo I: programa oficial A1; cotejo de clasificación.' };
const a2 = { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'BOE-A-2025-26262, anexo IX: programa oficial A2 de ingreso libre; cotejo de clasificación.' };
const drive39 = { url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view', referencia: 'ITIC Academy, 39_Bloque_39_ITIC_Academy_Calidad_Mantenimiento_2026.pdf, versión 2026.1, apartados sobre ISO/IEC 25010:2023 y mantenibilidad.' };
const drive15 = { url: 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view', referencia: 'ITIC Academy, 15_Tema_37_86_88_Metodologias_Agiles_Ciclo_Vida_2026_FINAL.pdf, ciclo de vida en espiral y sus iteraciones.' };
const drive41 = { url: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view', referencia: 'ITIC Academy, 41_Bloque_41_Tema_ITIL_y_COBIT_2026.pdf, versión 2026.1, incidentes: priorización mediante criterios acordados, impacto y urgencia; minimizar el impacto negativo.' };
const drive9 = { url: 'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view', referencia: 'ITIC Academy, 9_Bloque_09_Organizacion_Gestion_SI_ITIC_2026.pdf, versión 2026: evaluación del rendimiento, benchmark, carga de trabajo, métricas y throughput.' };

const records = [
 [956, [91], ['IV-4'], ['rendimiento', 'throughput', 'caudal', 'evaluación de sistemas'], [
  { url: 'https://datatracker.ietf.org/doc/html/rfc6349', referencia: 'IETF RFC 6349, §1: define el caudal TCP alcanzable como cantidad de datos transportados por unidad de tiempo.' },
  { url: 'https://datatracker.ietf.org/doc/html/rfc1242#section-3.17', referencia: 'IETF RFC 1242, §3.17: definición de throughput para benchmarking de dispositivos de interconexión.' },
  drive9, a1, a2
 ], null, 'La opción D era correcta, pero estaba mal escrita como «Throughtput» y la definición no fijaba que el caudal es una tasa efectiva. Se corrige la grafía y se precisa como cantidad de datos transportados con éxito por unidad de tiempo. La RFC 6349 da esa definición para TCP; la RFC 1242 precisa el concepto en el benchmark de dispositivos de red. No se equipara throughput a latencia ni a ancho de banda teórico. Clasificación contrastada con A1-91 y A2-IV-4.', 'corregida'],
 [957, [98], ['III-13'], ['ISO/IEC 25010:2023', 'mantenibilidad', 'calidad del producto'], [
  { url: 'https://committee.iso.org/standard/78176.html', referencia: 'ISO/IEC 25010:2023, edición 2 publicada en noviembre de 2023; el modelo define mantenibilidad como la capacidad de que los mantenedores previstos modifiquen el producto con eficacia y eficiencia.' },
  drive39, a1, a2
 ], null, 'Se reemplaza la definición heredada de ISO/IEC 9126/25010:2011 («conjunto de atributos» y «esfuerzo») por la terminología vigente de ISO/IEC 25010:2023: capacidad del producto para ser modificado por los mantenedores previstos con eficacia y eficiencia. La fuente oficial confirma que la edición 2023 sustituyó técnicamente a la de 2011. Se mantiene la distinción de mantenibilidad frente a eficiencia de desempeño, capacidad de interacción y flexibilidad. Correspondencia cotejada con A1-98 y A2-III-13.', 'corregida'],
 [958, [86], ['III-1'], ['modelo en espiral', 'evaluación', 'planificación', 'ciclo de vida'], [
  { url: 'https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019%2B-%2BSoftware%2BLife%2BCycle', referencia: 'NASA Software Engineering Handbook, SWE-019: el ciclo espiral estándar tiene planificación, análisis de riesgos, ingeniería y evaluación; esta última revisa y replantea la espiral siguiente.' },
  { url: 'https://faculty.washington.edu/hazeline/misc/reserve/boehm_spiralmodel.pdf', referencia: 'Barry W. Boehm, «A Spiral Model of Software Development and Enhancement», Computer 21(5), 1988: cada ciclo termina con revisión de productos y del plan de la fase siguiente y compromiso de las partes.' },
  drive15, a1, a2
 ], null, 'El original preguntaba en qué actividad se decide continuar, pero no especificaba la variante del modelo ni distinguía entre evaluar los resultados, asumir el compromiso de proceder y planificar la siguiente iteración. Se reformula para preguntar por la fase que revisa el ciclo y replantea la siguiente espiral según el modelo de cuatro fases descrito por NASA: evaluación. Se conserva la respuesta semántica, ahora inequívoca. Correspondencia cotejada con A1-86 y A2-III-1.', 'corregida'],
 [959, [106], ['IV-3'], ['ITIL (Version 5)', 'gestión de incidentes', 'priorización', 'impacto', 'urgencia'], [
  { url: 'https://www.peoplecert.org/help-and-support/faq-itil', referencia: 'PeopleCert, preguntas frecuentes oficiales: ITIL (Version 5) es el marco y esquema de certificación vigente; Incident Management forma parte de Monitor, Support and Fulfil.' },
  { url: 'https://www.itil.com/', referencia: 'ITIL.com, sitio oficial del marco: módulos y designaciones ITIL Version 5 disponibles.' },
  drive41,
  { url: 'https://www.mafranci.com/itil4/cds/support/2%2020191122_Practice_incident%20management.pdf', referencia: 'AXELOS, ITIL 4 Practice Guide «Incident Management», §2.4.2.1 (copia de consulta): la priorización gestiona recursos limitados para minimizar impactos negativos; evaluación de impacto y urgencia contribuye a priorizar.' }, a1, a2
 ], null, 'El material actualizado de ITIC Academy ya utiliza ITIL (Version 5), que PeopleCert confirma como marco vigente en 2026; por ello se moderniza la referencia y se formula el principio general de priorización con criterios de impacto y urgencia. Sin embargo, no se localizó una fuente primaria pública de PeopleCert/ITIL que confirme la redacción detallada para la versión 5; la guía de ITIL 4 no basta para certificarla en la versión actual. La respuesta queda pendiente de fuente hasta cotejar una publicación oficial de ITIL (Version 5). Correspondencia temática cotejada con A1-106 y A2-IV-3.', 'pendiente_fuente'],
 [960, [91, 98], ['IV-4'], ['benchmark', 'rendimiento', 'carga de trabajo', 'comparación de sistemas'], [
  { url: 'https://www.spec.org/cpu2026/docs/overview.html', referencia: 'SPEC CPU 2026, FAQ: un benchmark ejecuta una carga definida y produce métricas; ejecutar la misma prueba en varios sistemas permite compararlos.' },
  { url: 'https://www.spec.org/cpu2000/docs/readme1st.html', referencia: 'SPEC CPU2000, «Read Me First», §Q2: la misma prueba y carga permite comparar sistemas; especifica que el resultado es una métrica de rendimiento.' },
  drive9, a1, a2
 ], null, 'Se conserva la clave A y se concreta el alcance: un benchmark de rendimiento aplica una carga de trabajo definida y comparable para medir y comparar sistemas. No es sinónimo de simular cualquier carga real ni de analizar únicamente tiempos de respuesta. SPEC explica que una prueba ejecuta operaciones definidas, genera métricas y permite comparar equipos ejecutando el mismo benchmark. Clasificación cotejada con A1-91/A1-98 y A2-IV-4.', 'corregida']
];

const edits = {
  956: { texto: 'La cantidad de datos que un sistema transporta con éxito por unidad de tiempo se denomina:', opciones: ['Latencia', 'Rendimiento', 'Fluctuación (jitter)', 'Throughput (caudal efectivo)'], respuesta_correcta: 3 },
  957: { texto: 'Según ISO/IEC 25010:2023, ¿qué describe la mantenibilidad de un producto?', opciones: ['La capacidad de que los mantenedores previstos modifiquen el producto con eficacia y eficiencia.', 'La eficiencia de desempeño del producto bajo condiciones especificadas.', 'La capacidad de interacción del producto con sus usuarios.', 'La flexibilidad del producto para adaptarse a cambios de contexto.'], respuesta_correcta: 0 },
  958: { texto: 'En el modelo espiral estándar de cuatro fases descrito por NASA, ¿qué fase revisa la iteración y replantea la siguiente espiral?', opciones: ['Planificación.', 'Análisis de riesgos.', 'Ingeniería (desarrollo y verificación).', 'Evaluación.'], respuesta_correcta: 3 },
  959: { texto: 'En ITIL (Version 5), ¿para qué se priorizan los incidentes cuando compiten por recursos limitados?', opciones: ['Para enlazarlos automáticamente con problemas identificados.', 'Para determinar exclusivamente el grupo técnico al que se escalan.', 'Para decidir cuáles atender primero y minimizar el impacto negativo, usando criterios acordados como impacto y urgencia.', 'Para fomentar por sí sola la colaboración entre equipos.'], respuesta_correcta: 2 },
  960: { texto: 'En las pruebas de rendimiento, ¿cuál es el objetivo principal de un benchmark?', opciones: ['Medir y comparar sistemas aplicando una carga de trabajo definida y comparable.', 'Analizar únicamente el tiempo de respuesta con distintas cargas reales.', 'Simular cualquier comportamiento del sistema ante cargas variables.', 'Ninguna de las anteriores.'], respuesta_correcta: 0 }
};

apply({ numero: '128', fecha: '2026-10-24', records, edits });
