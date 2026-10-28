const apply = require('./aplicar-lote.cjs');

const sources = {
  hibernate: {
    url: 'https://hibernate.org/orm/',
    referencia: 'Hibernate ORM, Object/Relational Mapping y Jakarta Persistence: Hibernate mapea entidades Java a datos relacionales y facilita sincronizar cambios en memoria con la base de datos; el manual explica que automatiza gran parte de las tareas habituales de persistencia que de otro modo se implementarían manualmente con SQL/JDBC. Esto no significa que desaparezca toda programación de persistencia ni garantiza mejor rendimiento para cualquier consulta.'
  },
  transversal: {
    url: 'https://www.boe.es/eli/es/rd/2024/11/05/1125/con',
    referencia: 'Real Decreto 1125/2024, de 5 de noviembre, art. 9.2 y disposición adicional primera, texto consolidado BOE. El uso de los medios y servicios digitales declarados transversales es obligatorio y sustitutivo respecto de los particulares empleados por las unidades; el art. 9 contempla excepciones autorizadas y la DA 1 cambia a transversales la denominación de los que fueron declarados compartidos bajo el RD 806/2014.'
  },
  ml: {
    url: 'https://developers.google.com/machine-learning/crash-course/',
    referencia: 'Google for Developers, Machine Learning Crash Course, módulos oficiales de regresión lineal, clasificación y redes neuronales. El curso diferencia la predicción de valores numéricos continuos propia de regresión de las tareas de clasificación; son familias habituales de problemas supervisados, no una lista exhaustiva de todo lo que pueden hacer las redes neuronales.'
  },
  logistic: {
    url: 'https://developers.google.com/machine-learning/crash-course/logistic-regression',
    referencia: 'Google for Developers, Machine Learning Crash Course, Logistic Regression: compara la predicción de valores numéricos continuos de la regresión lineal con problemas de clasificación, que estiman probabilidades de resultados/categorías.'
  },
  scrum: {
    url: 'https://scrumguides.org/scrum-guide.html',
    referencia: 'The Scrum Guide, versión oficial de noviembre de 2020 (HTML oficial): el Product Backlog es una lista emergente y ordenada de lo necesario para mejorar el producto y la única fuente del trabajo que emprende el Scrum Team. El Product Owner responde de su gestión efectiva, de crear y comunicar sus elementos, ordenarlos y mantenerlo transparente; los interesados pueden proponer cambios convenciendo al Product Owner.'
  },
  usgs: {
    url: 'https://www.usgs.gov/faqs/what-does-georeferenced-mean',
    referencia: 'U.S. Geological Survey, “What does georeferenced mean?”: la georreferenciación relaciona el sistema de coordenadas interno de un mapa digital o fotografía aérea con un sistema terrestre de coordenadas geográficas conocido, permitiendo localizar sobre la superficie terrestre sus puntos.'
  }
};

const records = [
  [2551, [67], ['III-10'], ['Hibernate ORM', 'mapeo objeto-relacional', 'persistencia', 'SQL', 'JDBC'], [sources.hibernate], '', 'Hibernate ORM mapea el modelo de objetos Java a un modelo relacional y automatiza buena parte del mapeo y de las tareas habituales de persistencia que, de otro modo, se codificarían manualmente con SQL/JDBC. No es el único modo de conectar con MongoDB ni asegura por sí solo que todas las consultas rindan mejor. Se acota el beneficio a simplificar la programación de la persistencia. Cotejo curricular con ITIC Academy, bloque 30 (Tecnologías de Sistemas de Información, versión 2026.1), apartados de Java, Jakarta EE/JPA y persistencia; A1-67 y A2-III-10.'],
  [2552, [49], ['I-10'], ['Administración digital', 'servicios transversales', 'servicios comunes', 'RD 1125/2024', 'AGE'], [sources.transversal], '', 'Se actualiza el supuesto al régimen vigente del Real Decreto 1125/2024: las unidades de la Administración del Estado deben utilizar los medios y servicios declarados transversales con carácter obligatorio y sustitutivo frente a los particulares, salvo las excepciones autorizadas conforme al propio artículo 9. La disposición adicional primera denomina transversales a los antiguos compartidos del RD 806/2014; se elimina la afirmación antigua y general de que los organismos normalmente contribuyen económicamente. Cotejo curricular con ITIC Academy, bloque 10 (Gobernanza TIC y Administración Digital, versión 2026; RD 1125/2024, AEAD y servicios comunes), y con A1-49/A2-I-10.'],
  [2553, [70], ['III-5'], ['aprendizaje supervisado', 'clasificación', 'regresión', 'redes neuronales', 'inteligencia artificial'], [sources.ml, sources.logistic], '', 'Clasificación y regresión son dos familias habituales de problemas de predicción supervisada: clasificación predice categorías/clases y regresión estima valores numéricos continuos. Los modelos de redes neuronales pueden aplicarse a ambas; no se afirma que sean las únicas tareas posibles para una red neuronal. Se precisa el alcance, que el enunciado original presentaba como una taxonomía exhaustiva. Cotejo curricular con ITIC Academy, bloque 32 (Inteligencia Artificial y Ciencia de Datos, nuevo temario 2026), que incluye aprendizaje automático, redes neuronales, clasificación y regresión; A1-70/A2-III-5.'],
  [2554, [88], ['III-2'], ['Scrum', 'Product Backlog', 'Product Owner', 'artefactos', 'priorización'], [sources.scrum], '', 'El Product Backlog es la lista emergente y ordenada de lo necesario para mejorar el producto y la única fuente del trabajo que emprende el Scrum Team. El Product Owner responde de su gestión y ordenación, pero el Scrum Guide vigente no lo describe como un documento de requisitos de todo el proyecto ni dice que incorpore automáticamente las peticiones: quienes desean un cambio tratan de convencer al Product Owner. Se reformula conforme a la guía de noviembre de 2020. Cotejo curricular con ITIC Academy, bloque 15 (Metodologías ágiles y ciclo de vida, edición 2026), epígrafes A1-37/A1-88 y A2-D2 sobre Scrum, metodologías y planificación.'],
  [2555, [74], [], ['SIG', 'sistemas de información geográfica', 'georreferenciación', 'coordenadas geográficas', 'cartografía'], [sources.usgs], '', 'Georreferenciar consiste en relacionar el sistema de coordenadas interno de un mapa o imagen con un sistema conocido de coordenadas geográficas terrestres para poder ubicar espacialmente sus puntos; no consiste en dibujar capas ni en convertir formatos cartográficos. Se precisa la definición del enunciado. Cotejo con ITIC Academy, Tema 074, Sistemas de Información Geográfica, apartado “Georreferenciación y sistemas de coordenadas”, correspondiente a A1-74. No se asigna tema A2: el programa oficial A2 cotejado no contiene un epígrafe específico de SIG/georreferenciación.']
];

const edits = {
  2551: {
    texto: '¿Qué aporta Hibernate ORM al desarrollar una aplicación Java que persiste datos en una base relacional?',
    opciones: [
      'Es la única tecnología que permite conectar una aplicación con MongoDB.',
      'Mapea el modelo de objetos a datos relacionales y automatiza parte de las tareas habituales de persistencia, reduciendo código manual de SQL/JDBC.',
      'Garantiza que cualquier acceso a la base de datos tenga mejor rendimiento, sin necesidad de medir ni optimizar.',
      'Sustituye por completo la necesidad de diseñar el modelo de datos y las transacciones.'
    ],
    respuesta_correcta: 1
  },
  2552: {
    texto: 'Según el artículo 9.2 del Real Decreto 1125/2024, ¿qué carácter tiene el uso de los medios y servicios digitales declarados transversales en la Administración del Estado?',
    opciones: [
      'Es voluntario y cada unidad conserva con carácter general sus medios particulares.',
      'Es obligatorio y sustitutivo respecto de los medios y servicios particulares empleados por las unidades, sin perjuicio de las excepciones autorizadas previstas en el artículo 9.',
      'Exige siempre firmar un convenio con la Secretaría General de Administración Digital y pagar una cuota de la sección 31.',
      'Solo se aplica a las comunidades autónomas y entidades locales.'
    ],
    respuesta_correcta: 1
  },
  2553: {
    texto: 'En aprendizaje supervisado, ¿qué dos familias habituales de problemas de predicción pueden abordarse con redes neuronales?',
    opciones: [
      'Clasificación, que predice categorías, y regresión, que estima valores numéricos continuos.',
      'Únicamente clasificación; las redes neuronales no pueden producir valores numéricos continuos.',
      'Únicamente regresión; las redes neuronales no pueden predecir categorías.',
      'La clasificación y la regresión son nombres de capas obligatorias de cualquier red neuronal.'
    ],
    respuesta_correcta: 0
  },
  2554: {
    texto: 'Según la Scrum Guide de 2020, ¿qué describe mejor el Product Backlog?',
    opciones: [
      'Una reunión diaria de inspección del avance del Sprint.',
      'La lista emergente y ordenada de lo necesario para mejorar el producto, única fuente del trabajo que emprende el Scrum Team.',
      'El plan detallado e inmutable de todo el proyecto, que incorpora automáticamente cualquier petición de los interesados.',
      'El plan del Sprint creado y adaptado por los Developers para alcanzar el Sprint Goal.'
    ],
    respuesta_correcta: 1
  },
  2555: {
    texto: 'En un SIG, ¿qué significa georreferenciar un mapa digital o una imagen?',
    opciones: [
      'Relacionar su sistema de coordenadas interno con un sistema terrestre conocido de coordenadas geográficas para poder ubicar espacialmente sus puntos.',
      'Representar sus objetos en pantalla usando capas cartográficas diferenciadas.',
      'Convertir el fichero a otro formato, aunque no se asocie a coordenadas terrestres.',
      'Cambiar únicamente la escala visual con la que se muestra la imagen.'
    ],
    respuesta_correcta: 0
  }
};

apply({ numero: '448', fecha: '2026-10-28', records, edits });
