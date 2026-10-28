const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2136, [71], ['III-15'], ['valores ausentes', 'NULL', 'preprocesado', 'imputación', 'minería de datos'],
    [
      { url: 'https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html', referencia: 'Documentación oficial de scikit-learn, SimpleImputer: la imputación es una estrategia configurable (media, mediana, valor más frecuente, constante o callable), no una regla única aplicable a todo dato ausente.' },
      { url: 'https://learn.microsoft.com/en-us/analysis-services/data-mining/missing-values-analysis-services-data-mining?view=asallproducts-allversions', referencia: 'Microsoft Learn, Missing Values (Analysis Services—Data Mining): explica que el significado y tratamiento de los valores ausentes dependen de los datos y del algoritmo. Documentación de una funcionalidad heredada de Analysis Services; se cita para la observación de contexto, no como recomendación vigente de producto.' }
    ],
    'Documentación oficial de scikit-learn y Microsoft Analysis Services sobre tratamiento contextual de valores ausentes',
    'El original imponía reglas arbitrarias (eliminar solo cuando son pocos o imputar si son muchos) y presentaba «NULL» como si tuviera un tratamiento universal. Se reemplaza por el principio correcto: interpretar el significado y contexto de la ausencia, el tipo de variable y las necesidades del modelo; imputar es una posibilidad entre varias, no una regla automática. Se evita prescribir una estrategia concreta sin conocer el conjunto de datos.',
    'corregida'
  ],
  [
    2137, [59], ['II-2'], ['sistemas operativos', 'memoria virtual', 'paginación', 'dirección lógica', 'direccionamiento por palabra'],
    [
      { url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf', referencia: 'OSTEP, capítulo 18, Introduction to Paging: una dirección virtual se divide en número de página y desplazamiento; el espacio direccionable se obtiene del número de páginas y palabras por página.' }
    ],
    'Cálculo del espacio direccionable por palabra; contraste con OSTEP, capítulo de paginación',
    'Se especifica direccionamiento por palabra y k=1024 para resolver la ambigüedad entre dirección por palabra y por byte. Hay 128×2^10 = 2^17 páginas y 8×2^10 = 2^13 palabras por página; el espacio lógico contiene 2^30 palabras y requiere 30 bits. El tamaño de memoria física es irrelevante para el ancho de la dirección lógica en este cálculo, por lo que se elimina del enunciado junto con el ancho de palabra que podía sugerir direccionamiento por byte.',
    'corregida'
  ],
  [
    2138, [79], ['IV-12'], ['criptografía', 'cifrado simétrico', 'cifrado asimétrico', 'fortaleza criptográfica', 'NIST SP 800-57'],
    [
      { url: 'https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final', referencia: 'NIST SP 800-57 Part 1 Rev. 5, tabla 2 y §5: correspondencias aproximadas de fortaleza; 128 bits de fortaleza se asocian, entre otros, a AES-128 y RSA de 3072 bits.' }
    ],
    'NIST SP 800-57 Part 1 Rev. 5, equivalencias de fortaleza criptográfica',
    'La afirmación original de que una familia es «más segura suponiendo igual longitud de clave» no es válida como comparación general: bits nominales de clave de algoritmos simétricos y asimétricos no representan la misma fortaleza. Se reformula usando la equivalencia aproximada de NIST para 128 bits de fortaleza: entre AES y RSA, la clave asimétrica nominal requiere mayor longitud (p. ej., AES-128 frente a RSA-3072). No se extrapola esta pareja a todo algoritmo ni a todos los parámetros.',
    'corregida'
  ],
  [
    2139, [93], ['III-9'], ['MVC', 'modelo-vista-controlador', 'patrones de diseño', 'separación de responsabilidades'],
    [
      { url: 'https://jakarta.ee/specifications/mvc/3.0/jakarta-mvc-spec-3.0', referencia: 'Jakarta MVC 3.0, introducción y modelo de procesamiento: el modelo representa datos/estado de la aplicación, la vista presenta contenido y el controlador procesa entradas y coordina el flujo.' }
    ],
    'Especificación Jakarta MVC 3.0, responsabilidades de modelo, vista y controlador',
    'El original mezcla una expansión incorrecta del acrónimo MVC, una afirmación genérica sobre acoplamiento entre capas y una responsabilidad atribuida erróneamente al modelo. Se pregunta por una responsabilidad definida en la especificación Jakarta MVC: el modelo representa los datos o estado de la aplicación. La vista se ocupa de presentación y el controlador procesa entradas y coordina el flujo.',
    'corregida'
  ],
  [
    2140, [65], ['III-10'], ['Java EE 7', 'EJB', 'contenedor EJB', 'Expression Language', 'APIs empresariales'],
    [
      { url: 'https://docs.oracle.com/javaee/7/tutorial/overview007.htm', referencia: 'Oracle Java EE 7 Tutorial, §1.7: identifica la figura 1-8 como la disponibilidad de APIs Java EE 7 en el contenedor EJB.' },
      { url: 'https://docs.oracle.com/javaee/7/JEETT.pdf', referencia: 'Oracle Java EE 7 Tutorial, figura 1-8 «Java EE APIs in the EJB Container»: incluye JavaMail, JTA y JAX-WS entre las APIs disponibles; Expression Language no aparece.' },
      { url: 'https://jakarta.ee/specifications/platform/11/jakarta-platform-spec-11.0', referencia: 'Jakarta EE Platform 11, tabla de APIs y contenedores: fuente de contraste que muestra por qué no debe generalizarse hoy la antigua pregunta Java EE 7; la plataforma actual ha cambiado y JAX-WS ya no forma parte de ella.' }
    ],
    'Oracle Java EE 7 Tutorial, figura 1-8; alcance histórico expresamente delimitado',
    'La pregunta original no indicaba versión de Java EE y no es fiable como afirmación sobre una plataforma actual. Se ancla explícitamente a la figura 1-8 del tutorial Oracle Java EE 7: en esa figura aparecen JavaMail, JTA y JAX-WS en el contenedor EJB, pero no Expression Language. La referencia contemporánea a Jakarta EE 11 confirma que el catálogo de APIs cambió; por ello esta pregunta se conserva como histórica y no se extrapola al presente.',
    'historica'
  ]
];

const edits = {
  2136: {
    texto: 'Al preparar datos para minería o modelado se detectan valores ausentes. ¿Qué afirmación describe correctamente cómo deben tratarse?',
    opciones: [
      'Deben eliminarse siempre todos los registros que tengan algún valor ausente.',
      'Deben sustituirse siempre por la media de la variable, incluso si es categórica.',
      'El tratamiento debe elegirse según el significado de la ausencia, los datos y el modelo; la imputación es una opción, no una regla universal.',
      'Deben reemplazarse siempre por un mismo valor por defecto, sin analizar el contexto.'
    ],
    respuesta_correcta: 2
  },
  2137: {
    texto: 'En un sistema direccionado por palabra, la memoria lógica tiene 128k páginas de 8k palabras cada una (k = 1024). ¿Cuántos bits requiere la dirección lógica?',
    respuesta_correcta: 1
  },
  2138: {
    texto: 'Según las equivalencias aproximadas de fortaleza de NIST SP 800-57, al comparar AES y RSA para proporcionar alrededor de 128 bits de fortaleza, ¿qué familia requiere una clave nominal de mayor longitud?',
    opciones: [
      'La criptografía simétrica, por ejemplo AES-128.',
      'La criptografía asimétrica basada en RSA, por ejemplo RSA-3072.',
      'Ambas requieren claves nominales de 128 bits.',
      'La comparación depende del lenguaje de programación, no del algoritmo.'
    ],
    respuesta_correcta: 1
  },
  2139: {
    texto: 'En el patrón Modelo-Vista-Controlador (MVC), ¿qué responsabilidad corresponde al modelo?',
    opciones: [
      'Representar los datos o el estado de la aplicación.',
      'Renderizar por sí solo toda la presentación visible al usuario.',
      'Recibir las entradas y coordinar el flujo entre la vista y el modelo.',
      'Definir el acrónimo como «Modelo-Vista-Componente».'
    ],
    respuesta_correcta: 0
  },
  2140: {
    texto: 'Según la figura 1-8 del tutorial Oracle Java EE 7, ¿qué API de esta lista no aparece disponible en el contenedor EJB?',
    respuesta_correcta: 1
  }
};

aplicar({ numero: '364', fecha: '2026-10-28', records, edits });
