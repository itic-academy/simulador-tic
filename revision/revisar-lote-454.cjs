const apply = require('./aplicar-lote.cjs');

const sources = {
  istqbEquivalence: {
    url: 'https://api.glossary.istqb.org/storage/help/R0uz58NqLzUz48LVUuyGSF76NFj4LHQazSs0GlNS.pdf',
    referencia: 'ISTQB, Standard Glossary of Terms used in Software Testing, término equivalence partitioning: técnica de caja negra en que las condiciones de prueba se agrupan en particiones de equivalencia y se prueba un representante de cada partición.'
  },
  cmmi: {
    url: 'https://support.isaca.org/s/article/What-is-CMMI-What-is-the-CMMI-Model-1598331745984',
    referencia: 'ISACA/CMMI Institute, What is CMMI?: define CMMI como modelo de mejora de capacidades adaptable a problemas de rendimiento en cualquier nivel organizativo e industria, y describe sus guías para diagnosticar problemas y mejorar resultados.'
  },
  appraisal: {
    url: 'https://cmmiinstitute.com/learning/appraisals/method',
    referencia: 'CMMI Institute/ISACA, Appraisal Method: método oficial para evaluar procesos y asignar calificaciones relativas a capacidad organizativa y rendimiento; contempla mejora interna de procesos, benchmarking, seguimiento y reducción de riesgos.'
  },
  mccall: {
    url: 'https://ntrl.ntis.gov/NTRL/dashboard/searchResults/titleDetail/ADA049014.xhtml',
    referencia: 'McCall, Richards y Walters, Factors in Software Quality, vol. I (1977), registro de National Technical Information Service, informe original ADA049014. El material consultado identifica el modelo y sus factores; no sustenta inequívocamente que “responder ante situaciones no previstas” sea la definición de fiabilidad, ni resuelve si el ítem alude a robustez, término ausente de sus opciones.'
  },
  efqm2010: {
    url: 'https://www.leyhill.com/wp-content/uploads/EFQM-Excellence-Model-2010.pdf',
    referencia: 'EFQM Excellence Model 2010, reproducción de la guía EFQM: el marco de esa edición consta de nueve criterios y 32 partes (subcriterios). Se indica edición porque el EFQM Model 2025 es distinto.'
  },
  efqm2025: {
    url: 'https://efqm.org/transform/',
    referencia: 'EFQM Model 2025: la descripción oficial indica siete criterios y 29 partes de criterio; se cita para evitar generalizar el número de criterios/subcriterios históricos al modelo vigente.'
  }
};

const records = [
  [2581, [96], ['III-7'], ['partición de equivalencia', 'caja negra', 'técnicas de prueba', 'ISTQB'], [sources.istqbEquivalence], '', 'La opción correcta expresa la técnica de caja negra: dividir el dominio de entrada en particiones consideradas equivalentes y seleccionar representantes para las pruebas. Se actualiza la redacción al término y definición ISTQB, sin confundir la técnica con modularización, refactorización o gestión de proyectos. A1-96/A2-III-7.', 'corregida'],
  [2582, [96, 98], ['III-13'], ['CMMI', 'capacidad de procesos', 'mejora del rendimiento', 'ISACA'], [sources.cmmi, sources.appraisal], '', 'El original limita el modelo al desarrollo, mantenimiento y operación de software. CMMI es un modelo de mejora de capacidades y rendimiento más amplio, adaptable a distintos niveles, industrias y disciplinas; el método de appraisal permite evaluar procesos y obtener ratings de capacidad/rendimiento. Se corrige el alcance demasiado estrecho. A1-96/A1-98/A2-III-13.', 'corregida'],
  [2583, [98], ['III-13'], ['McCall', 'fiabilidad', 'robustez', 'definición pendiente'], [], '', 'Pendiente de aclaración: la clave heredada “Fiabilidad” no queda demostrada por la formulación «responder ante situaciones no previstas». El informe original de McCall define un modelo de factores, pero las fuentes consultadas describen fiabilidad como desempeño de la función prevista con precisión y condiciones especificadas; «robustez» sería una interpretación distinta y no aparece entre las opciones. No se valida ni se sustituye la clave sin localizar la fuente o reformular el atributo. Solicitar fuente del enunciado o reescribirlo usando una definición explícita del modelo. A1-98/A2-III-13.', 'pendiente_ambiguedad'],
  [2584, [103], ['III-13'], ['EFQM', 'EFQM 2010', 'nueve criterios', '32 subcriterios', 'modelos históricos'], [sources.efqm2010, sources.efqm2025], '', 'Se fija la edición EFQM Excellence Model 2010: nueve criterios divididos en 32 partes/subcriterios. El enunciado original sin fecha podía confundir ese marco con el EFQM Model 2025, que oficialmente tiene siete criterios y 29 partes. Se conserva como pregunta histórica, no como estructura actual. A1-103/A2-III-13.', 'historica'],
  [2585, [98, 99], ['II-15', 'III-13'], ['coste de calidad', 'coste de implantación', 'ambigüedad', 'pendiente de fuente'], [], '', 'Pendiente de aclaración: «Teoría de la Calidad/Coste» no identifica autor, modelo ni definición y las opciones afirman una relación exponencial sin condiciones. Los modelos de coste de calidad distinguen prevención, evaluación y fallos, cuyos componentes pueden evolucionar en sentidos distintos; eso no determina por sí solo una ley exponencial universal sobre coste de implantación y nivel de calidad. No se mantiene una clave verificada; hace falta la fuente didáctica original o una formulación con modelo y supuestos identificables. A1-98/A1-99/A2-II-15/A2-III-13.', 'pendiente_ambiguedad']
];

const edits = {
  2581: {
    texto: 'Según el glosario ISTQB, ¿qué describe la técnica de prueba de caja negra denominada partición de equivalencia?',
    opciones: [
      'Dividir un programa en módulos funcionales de tamaño aproximadamente igual.',
      'Dividir las condiciones de entrada en grupos que se consideran equivalentes y probar representantes de cada grupo.',
      'Sustituir la herencia por delegación en un diseño orientado a objetos.',
      'Asignar responsabilidades de ejecución de pruebas mediante una técnica de gestión de proyectos.'
    ],
    respuesta_correcta: 1
  },
  2582: {
    texto: '¿Cuál describe mejor el modelo CMMI actual?',
    opciones: [
      'Un modelo destinado exclusivamente a mejorar la recogida de datos internos.',
      'Un modelo de mejora de capacidades y rendimiento que ayuda a organizaciones de distintas industrias a diagnosticar problemas y mejorar procesos y resultados.',
      'Un modelo dedicado únicamente a desarrollar la capacidad de liderazgo personal.',
      'Un modelo para mejorar exclusivamente la consistencia de datos organizativos.'
    ],
    respuesta_correcta: 1
  },
  2584: {
    texto: 'En el EFQM Excellence Model 2010, ¿cuántos criterios y partes (subcriterios) tenía el marco?',
    opciones: ['8 criterios y 30 partes.', '9 criterios y 32 partes.', '9 criterios y 40 partes.', 'El modelo no se estructuraba en criterios.'],
    respuesta_correcta: 1
  }
};

apply({ numero: '454', fecha: '2026-10-28', records, edits });
