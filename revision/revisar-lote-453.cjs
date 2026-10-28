const apply = require('./aplicar-lote.cjs');

const sources = {
  efqm2003: {
    url: 'https://www.crowe-associates.co.uk/wp-content/uploads/2013/07/Business-Excellence-Model.pdf',
    referencia: 'EFQM Excellence Model, figura del modelo 1999–2003, reproducción del modelo de evaluación para el European Quality Award: Customer Results ponderaba el 20 %, más que Key Performance Results (15 %), Processes (14 %) y Society Results (6 %). La edición y ponderaciones se hacen explícitas como históricas.'
  },
  efqmCurrent: {
    url: 'https://efqm.org/transform/',
    referencia: 'EFQM, Model 2025: la organización confirma siete criterios y 29 partes de criterio. Se cita para dejar claro que los nombres y ponderaciones de la edición 2003 no describen el modelo actual.'
  },
  ieeeUsability: {
    url: 'https://www.nist.gov/system/files/documents/2025/04/29/61012-1990.pdf',
    referencia: 'IEEE Std 610.12-1990, IEEE Standard Glossary of Software Engineering Terminology, definición “usability”: facilidad con la que un usuario aprende a operar, preparar entradas e interpretar salidas de un sistema o componente. El ítem se fecha para conservar el contexto de esta definición histórica.'
  },
  iso25010: {
    url: 'https://www.iso.org/standard/78176.html',
    referencia: 'ISO/IEC 25010:2023, edición publicada y vigente en el catálogo ISO, define el modelo actual de calidad del producto con nueve características; sirve para distinguir el vocabulario de calidad actual de la cita explícita a IEEE 610.12-1990.'
  },
  ifpug: {
    url: 'https://ifpug.org/ifpug-standards/fpa',
    referencia: 'IFPUG, Function Point Analysis: los puntos de función miden el tamaño funcional del software a partir de la funcionalidad solicitada y entregada al usuario. Pueden servir de base para estimar coste y calendario si se dispone de datos de productividad; no miden directamente tiempo ni calidad.'
  },
  istqbRegression: {
    url: 'https://api.glossary.istqb.org/storage/help/R0uz58NqLzUz48LVUuyGSF76NFj4LHQazSs0GlNS.pdf',
    referencia: 'ISTQB, Standard Glossary of Terms used in Software Testing: “regression” es una degradación de la calidad de un componente o sistema debida a un cambio; “regression testing” es una práctica de prueba distinta. El reactivo pregunta ahora por la regresión como degradación.'
  },
  iso33020: {
    url: 'https://committee.iso.org/standard/78526.html?browse=ics',
    referencia: 'ISO/IEC 33020:2019, revisada y confirmada en 2026: marco de medición para evaluar la capacidad de procesos, que facilita autoevaluación y mejora de procesos.'
  },
  iso33000: {
    url: 'https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/isoiec-33000-family.html',
    referencia: 'ISO/IEC JTC 1/SC 7, página de la familia ISO/IEC 33000: declara que la familia 33xxx revisa la serie ISO/IEC 15504 y ofrece un marco para evaluar capacidad y madurez de procesos. Por ello 15504 se conserva como antecedente histórico, no como la familia actual.'
  }
};

const records = [
  [2576, [103], ['III-13'], ['EFQM', 'modelo de excelencia', 'criterios', 'ponderación', 'historia de la calidad'], [sources.efqm2003, sources.efqmCurrent], '', 'El enunciado sin fecha mezclaba una escala de 1.000 puntos y criterios de una edición antigua con el modelo actual. Se delimita al EFQM Excellence Model 2003: Customer Results tenía el mayor peso, 20 % (200 puntos en la escala de 1.000). El EFQM Model 2025 presenta siete criterios y no se debe responder a la pregunta histórica como si sus criterios o pesos siguieran vigentes. A1-103/A2-III-13.', 'historica'],
  [2577, [98], ['III-14'], ['usabilidad', 'IEEE 610.12-1990', 'calidad del software', 'modelo de calidad'], [sources.ieeeUsability, sources.iso25010], '', 'La frase coincide con la definición de “usability” del glosario IEEE 610.12-1990. Se fecha el enunciado en esa norma histórica y se evita presentarla como taxonomía actual universal: ISO/IEC 25010:2023 es la edición publicada vigente del modelo de calidad de producto. La respuesta es usabilidad en el contexto de la definición citada. A1-98/A2-III-14.', 'historica'],
  [2578, [98, 99], ['III-13', 'II-15'], ['puntos de función', 'tamaño funcional', 'IFPUG', 'métricas', 'estimación de esfuerzo'], [sources.ifpug], '', 'Los puntos de función miden tamaño funcional del software según la funcionalidad que recibe el usuario. A partir de ese tamaño se pueden normalizar métricas de productividad/coste y estimar esfuerzo o calendario con datos históricos, pero no son una medida directa del tiempo de desarrollo ni de la calidad. A1-98/A1-99/A2-III-13/A2-II-15.', 'corregida'],
  [2579, [96], ['III-7', 'III-13'], ['regresión', 'pruebas de regresión', 'cambio', 'calidad del software', 'ISTQB'], [sources.istqbRegression], '', 'Se separa “regresión” de “pruebas de regresión”. Según el glosario ISTQB, regresión es una degradación de la calidad de un componente o sistema debida a un cambio. Las pruebas de regresión buscan detectar defectos introducidos o descubiertos tras una modificación; la respuesta correcta describe la degradación, no un fallo espontáneo ni un bucle infinito. A1-96/A2-III-7/A2-III-13.', 'corregida'],
  [2580, [98], ['III-13'], ['ISO/IEC 15504', 'SPICE', 'ISO/IEC 33000', 'capacidad de procesos', 'mejora de procesos'], [sources.iso33020, sources.iso33000], '', 'ISO/IEC 15504, conocida como SPICE, es la serie histórica que abordaba evaluación de procesos y determinación de capacidad. La familia actual ISO/IEC 33000 revisa la serie 15504; ISO/IEC 33020:2019 establece un marco de medición de capacidad de procesos y fue confirmada en 2026. Se reescribe la pregunta como antecedente histórico para que no se confunda con el estándar vigente. A1-98/A2-III-13.', 'historica']
];

const edits = {
  2576: {
    texto: 'En el EFQM Excellence Model de 2003, utilizado para evaluar el European Quality Award, ¿qué criterio tenía la mayor ponderación? (La escala total era de 1.000 puntos.)',
    opciones: ['Impacto en la sociedad (6 %).', 'Resultados clave del rendimiento (15 %).', 'Resultados en los clientes (20 %).', 'Procesos (14 %).'],
    respuesta_correcta: 2
  },
  2577: {
    texto: 'Según la definición de “usability” del IEEE Std 610.12-1990, ¿cómo se denomina la facilidad con la que un usuario aprende a operar un sistema o componente, preparar entradas e interpretar salidas?',
    opciones: ['Usabilidad.', 'Mantenibilidad.', 'Verificabilidad.', 'Flexibilidad.'],
    respuesta_correcta: 0
  },
  2578: {
    texto: 'En Function Point Analysis (FPA), ¿qué dimensión mide directamente el recuento de puntos de función?',
    opciones: ['La calidad del producto.', 'El tiempo de desarrollo.', 'El tamaño funcional del software.', 'Los resultados empresariales.'],
    respuesta_correcta: 2
  },
  2579: {
    texto: 'Según el glosario ISTQB, ¿qué significa “regresión” en la calidad del software?',
    opciones: [
      'Un fallo que parece resolverse espontáneamente y cuyo origen luego no puede determinarse.',
      'Un fallo lógico que hace que el sistema entre en un bucle o recursión infinitos.',
      'Un error de un subproceso que devuelve la ejecución al proceso principal.',
      'Una degradación de la calidad de un componente o sistema debida a un cambio.'
    ],
    respuesta_correcta: 3
  },
  2580: {
    texto: '¿Qué serie histórica de estándares de evaluación de procesos, conocida como SPICE, fue revisada por la actual familia ISO/IEC 33000?',
    opciones: ['ISO/IEC 12207.', 'ISO/IEC 27002.', 'ISO/IEC 15504.', 'ISO/IEC 17799.'],
    respuesta_correcta: 2
  }
};

apply({ numero: '453', fecha: '2026-10-28', records, edits });
