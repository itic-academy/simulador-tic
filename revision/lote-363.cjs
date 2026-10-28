const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2131, [54], ['II-1'], ['modding', 'personalización de hardware', 'carcasa de ordenador'],
    [
      { url: 'https://sarreplec.caib.es/pluginfile.php/12137/mod_resource/content/9/SMR_MME08%20Nuevas%20tendencias%20en%20equipos%20inform%C3%A1ticos.pdf?forcedownload=1', referencia: 'Material educativo de FP del Govern de les Illes Balears: describe modding como modificación estética o funcional del equipo para personalizarlo y mejorar prestaciones.' },
      { url: 'https://www.consumer.es/tecnologia/hardware/modding-ordenadores-al-gusto-del-usuario.html', referencia: 'Artículo técnico divulgativo sobre modding de PC: modificaciones de hardware que personalizan la estética o el rendimiento.' }
    ],
    'Material educativo de FP de CAIB y explicación técnica de modding de PC',
    'Se acota «personalización» a cambios físicos o funcionales en la carcasa/componentes del ordenador. El término habitual es modding; customizing es una expresión genérica que también puede referirse a personalización de software, y no identifica esta práctica concreta.',
    'corregida'
  ],
  [
    2132, [74], [], ['OGC Simple Features', 'GIS', 'predicados espaciales', 'Intersects', 'Overlaps', 'Equals', 'Crosses', 'Disjoint'],
    [
      { url: 'https://docs.ogc.org/is/22-047r1/22-047r1.html', referencia: 'OGC GeoSPARQL 1.1, requisitos 8 y 44 y tabla 2: define la familia Simple Features, que incluye sfEquals, sfDisjoint, sfIntersects, sfCrosses y sfOverlaps.' },
      { url: 'https://postgis.net/docs/using_postgis_query.html#ST_Relationships', referencia: 'Documentación PostGIS: los predicados topológicos nombrados derivados de OGC SFS incluyen ST_Intersects, ST_Overlaps, ST_Equals, ST_Crosses y ST_Disjoint.' }
    ],
    'OGC Filter Encoding 2.0 / ISO 19125-1, operadores de relaciones espaciales',
    'El enunciado se reformula para pedir exactamente la opción que contiene los cinco predicados OGC enumerados. En la versión original varias opciones eran subconjuntos formados por operadores válidos, así que preguntar simplemente cuáles eran «correctos» no producía una única respuesta. No se afirma que la opción sea la lista exhaustiva de todos los operadores OGC.',
    'corregida'
  ],
  [
    2133, [65, 77], ['II-9', 'III-12'], ['HTML', 'WHATWG', 'Web Storage', 'sessionStorage'],
    [
      { url: 'https://html.spec.whatwg.org/multipage/webstorage.html', referencia: 'WHATWG HTML Living Standard, Web Storage: window.sessionStorage devuelve el objeto Storage asociado al área de almacenamiento de sesión del origen de esa ventana.' }
    ],
    'WHATWG HTML Living Standard, sección Web Storage',
    'Se conserva SessionStorage como respuesta y se normaliza su grafía al identificador API exacto, sessionStorage. Se precisa que el objeto corresponde al área de almacenamiento de sesión asociada al origen y a la ventana; no se presenta como una categoría general única de todo almacenamiento HTML.',
    'corregida'
  ],
  [
    2134, [58], ['II-6'], ['SOA', 'interoperabilidad', 'reutilización', 'principios de orientación a servicios'],
    [
      { url: 'https://www.oracle.com/technetwork/topics/entarch/oracle-ra-soa-foundation-r3-1-176715.pdf', referencia: 'Oracle RA SOA Foundation 3.1, §1.4: la lista genérica de principios de orientación a servicios menciona, entre otros, contratos formales, bajo acoplamiento, abstracción, reutilización, autonomía, descubribilidad, composición, interoperabilidad y cumplimiento de estándares.' },
      { url: 'https://docs.oasis-open.org/soa-rm/v1.0/soa-rm.html', referencia: 'OASIS Reference Model for SOA 1.0: SOA organiza soluciones para promover reutilización e interoperabilidad; el modelo define conceptos y relaciones, no una lista normativa única de principios de diseño.' }
    ],
    'Oracle RA SOA Foundation 3.1, §1.4, contrastado con OASIS SOA-RM 1.0',
    'La pregunta original no fijaba una taxonomía de principios y sus opciones podían interpretarse de forma distinta según la referencia arquitectónica. Se ancla a la lista genérica de Oracle y se pregunta qué principio aparece expresamente en ella. Se sustituye la clave por Interoperabilidad; «conceptualización» y «componentización» no figuran como nombres de principios en esa lista. OASIS trata interoperabilidad y reutilización como objetivos/propiedades de SOA, pero no prescribe esa taxonomía concreta.',
    'corregida'
  ],
  [
    2135, [70, 71], ['III-15'], ['minería de datos', 'Microsoft Analysis Services', 'clasificación', 'regresión', 'segmentación', 'algoritmos'],
    [
      { url: 'https://learn.microsoft.com/en-us/analysis-services/data-mining/data-mining-algorithms-analysis-services-data-mining?view=asallproducts-allversions', referencia: 'Microsoft Learn, «Data Mining Algorithms (Analysis Services - Data Mining)», categorías: clasificación, regresión, segmentación, asociación y análisis de secuencias.' }
    ],
    'Microsoft Learn, categorías de algoritmos de minería de datos de Analysis Services',
    'La respuesta «predestinación» es una categoría inventada. Se corrige el enunciado para distinguir explícitamente categorías de tareas de minería de las familias de algoritmos concretos y se acota a la taxonomía de Microsoft Analysis Services; clasificación, regresión y segmentación sí están documentadas en esa taxonomía.',
    'corregida'
  ]
];

const edits = {
  2131: {
    texto: '¿Qué término designa habitualmente la modificación física o funcional de la carcasa y los componentes de un PC para personalizar su aspecto o prestaciones?',
    respuesta_correcta: 2
  },
  2132: {
    texto: 'Según los predicados espaciales OGC Simple Features, ¿qué opción enumera estos cinco operadores: Intersects, Overlaps, Equals, Crosses y Disjoint?',
    opciones: [
      'Overlaps, Equals, Touches y Contains',
      'Overlaps, Equals y Disjoint',
      'Intersects, Overlaps, Equals y Disjoint',
      'Intersects, Overlaps, Equals, Crosses y Disjoint'
    ],
    respuesta_correcta: 3
  },
  2133: {
    texto: 'Según el estándar WHATWG HTML, ¿qué propiedad de Window proporciona el objeto Storage asociado al área de almacenamiento de sesión de esa ventana?',
    opciones: ['HTMLStorage', 'sessionStorage', 'HTMLCookie', 'SessionCookie'],
    respuesta_correcta: 1
  },
  2134: {
    texto: 'En la lista genérica de principios de orientación a servicios de Oracle RA SOA Foundation 3.1, ¿cuál de los siguientes aparece expresamente?',
    opciones: ['Conceptualización', 'Interoperabilidad', 'Componentización', 'Predestinación'],
    respuesta_correcta: 1
  },
  2135: {
    texto: 'Según la documentación de Microsoft Analysis Services, ¿cuál NO es una categoría de tareas de los algoritmos de minería de datos?',
    respuesta_correcta: 3
  }
};

aplicar({ numero: '363', fecha: '2026-10-28', records, edits });
