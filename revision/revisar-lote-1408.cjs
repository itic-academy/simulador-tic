const apply = require('./aplicar-lote.cjs');

const sources = {
  pragma: [{
    url: 'https://www.gnu.org/software/c-intro-and-ref/manual/c-intro-and-ref.html',
    referencia: 'GNU C Language Manual, Directing Compilation / Pragmas: #pragma es una anotación que da instrucciones al compilador; el estándar deja el significado de pragmas no normalizadas a la implementación y un compilador puede ignorar las que no reconoce. No crea nuevas directivas de preprocesamiento.'
  }],
  kmeans: [{
    url: 'https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html',
    referencia: 'Documentación oficial de scikit-learn, KMeans: define el número de clusters/centroides que se formarán y clasifica cada muestra respecto del centroide más próximo; es un método de clustering, no un clasificador supervisado.'
  }],
  gis: [
    {
      url: 'https://www.nationalacademies.org/read/11019/chapter/9',
      referencia: 'National Academies, Learning to Think Spatially, capítulo 7: los datos geoespaciales vinculan lugar, tiempo y atributos; esto sustenta distinguir componente posicional, temporal y temática.'
    },
    {
      url: 'https://www.asprs.org/wp-content/uploads/pers/1996journal/jul/1996_jul_833-838.pdf',
      referencia: 'E. Lynn Usery, A Feature-Based Geographic Information System Model, Photogrammetric Engineering & Remote Sensing (1996): modelo conceptual GIS con dimensiones espacial, temática y temporal.'
    }
  ],
  lbs: [{
    url: 'https://docs.ogc.org/rfc/03-006r1/03-006r1.pdf',
    referencia: 'Open Geospatial Consortium, OpenLS Implementation Specification 03-006r1, apartado 5.8: Location-Based Service usa información geográfica para servir a un usuario móvil y puede explotar la posición de su terminal.'
  }],
  olap: [{
    url: 'https://www.ibm.com/think/topics/olap',
    referencia: 'IBM, What is OLAP?: roll-up agrega los datos ascendiendo en la jerarquía conceptual o reduciendo el número de dimensiones; drill-down realiza el movimiento inverso y pivot/rotate cambia la orientación.'
  }]
};

apply({
  numero: '1408',
  fecha: '2026-11-15',
  records: [
    [7341, [], ['II-3'], ['C', 'preprocesador', 'pragma', 'directivas de compilación'], sources.pragma, {
      texto: '¿Qué describe correctamente una directiva #pragma del lenguaje C?',
      opciones: [
        'Ordena al preprocesador emitir siempre un error en ese punto.',
        'Incluye un fichero de forma condicional, igual que #include dentro de una condición.',
        'Proporciona información o instrucciones adicionales al compilador; el significado de pragmas no normalizadas depende de la implementación.',
        'Define una nueva directiva de preprocesamiento disponible en todos los compiladores.'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. La pregunta original decía que #pragma permite al implementador definir “otras instrucciones de preprocesamiento”, lo que confunde las pragmas con la lista de directivas, que no se amplía por esa vía. La pragma comunica instrucciones o información al compilador; para pragmas no normalizadas el significado depende de la implementación, que puede ignorar una que no reconozca.', 'corregida'],
    [7342, [70, 71], ['III-5', 'III-15'], ['inteligencia artificial', 'machine learning', 'aprendizaje no supervisado', 'clustering', 'K-means'], sources.kmeans, {
      texto: 'El algoritmo K-means:',
      opciones: [
        'Es un algoritmo de series temporales que extrapola una secuencia en K iteraciones.',
        'Es un algoritmo de agrupamiento no supervisado que agrupa observaciones en K clústeres según sus características.',
        'Es un algoritmo de regresión logística que divide la muestra en K regiones.'
      ],
      respuesta_correcta: 1
    }, 'Corregida B. K-means es un algoritmo de clustering no supervisado: asigna observaciones a uno de K grupos y actualiza sus centroides. “Clasificación” en sentido de aprendizaje supervisado no es una descripción adecuada; se elimina del enunciado de la opción correcta.', 'corregida'],
    [7343, [74], [], ['SIG', 'GIS', 'datos geoespaciales', 'posición', 'tiempo', 'atributos temáticos'], sources.gis, {
      texto: 'En el modelo conceptual que vincula lugar, tiempo y atributos, ¿qué tres dimensiones de información geográfica corresponden a esos elementos?',
      opciones: [
        'Topológica, vectorial y ráster.',
        'Posicional, temporal y temática.',
        'Topológica, temática y posicional.',
        'Posicional, ráster y topológica.'
      ],
      respuesta_correcta: 1
    }, 'Corregida B. La expresión original “en el caso más general” presentaba el trío como taxonomía universal. Se delimita a un modelo conceptual documentado: lugar/posición, tiempo y atributos/tema. Vectorial y ráster son modelos de representación; topología describe relaciones espaciales, no sustituye a las tres dimensiones semánticas.', 'corregida'],
    [7344, [74, 124], ['IV-15'], ['SIG', 'GIS', 'LBS', 'servicios basados en localización', 'dispositivos móviles'], sources.lbs, {
      texto: 'En la especificación OpenLS del OGC, ¿qué servicio utiliza información geográfica para atender a un usuario móvil o explota la posición de su terminal?',
      opciones: [
        'LBS (Location-Based Service).',
        'LIIS (Location-Invariant Information Service).',
        'PBS (Position-Based Service).',
        'Ninguno de los anteriores.'
      ],
      respuesta_correcta: 0
    }, 'Corregida A. Se sustituye la vaga referencia al “ámbito geográfico” por los rasgos definitorios de un Location-Based Service (LBS) en OpenLS: servicio para usuario móvil que usa información geográfica y puede explotar la posición del terminal. La clasificación enlaza el contenido con SIG y aplicaciones móviles sin atribuir al temario una sigla distinta.', 'corregida'],
    [7345, [75], ['II-4', 'III-15'], ['OLAP', 'roll-up', 'agregación', 'jerarquía de dimensiones'], sources.olap, {
      texto: 'En OLAP, ¿qué operación agrega los datos al ascender en una jerarquía de dimensión o reducir el número de dimensiones?',
      opciones: [
        'Drill-across.',
        'Drill-down.',
        'Roll-up.',
        'Rotación (pivot).'
      ],
      respuesta_correcta: 2
    }, 'Corregida C. Se concreta la operación: roll-up agrega y sube de nivel en una jerarquía o reduce dimensiones; drill-down aumenta el detalle y pivot/rotate cambia la orientación de la vista. Se cambia “Drill-In”, término impreciso en este conjunto de operaciones, por drill-down.', 'corregida']
  ]
});
