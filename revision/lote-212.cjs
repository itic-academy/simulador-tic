const apply = require('./aplicar-lote.cjs');

const sources = {
  sql: [
    { url: 'https://www.postgresql.org/docs/18/using-explain.html', referencia: 'PostgreSQL 18 Documentation, Using EXPLAIN: el planificador elige un plan según la consulta y las propiedades de los datos; su calidad es crítica para el rendimiento y puede examinarse con EXPLAIN/ANALYZE.' }
  ],
  spa: [
    { url: 'https://github.com/rishabhp/bideo.js', referencia: 'Repositorio atribuido al autor de Bideo.js; devolvió 404 al comprobarlo el 24-10-2026, por lo que no se usa para certificar la definición.' },
    { url: 'https://npm.io/package/bideo.js', referencia: 'Ficha secundaria del paquete bideo.js: lo describe como plugin para vídeo HTML5 de fondo; sirve solo como indicio, no sustituye una fuente primaria del mantenedor.' },
    { url: 'https://angular.dev/overview', referencia: 'Angular official documentation: framework web para crear aplicaciones.' },
    { url: 'https://vuejs.org/guide/introduction.html', referencia: 'Vue official guide: framework progresivo para construir interfaces de usuario y aplicaciones.' },
    { url: 'https://react.dev/learn', referencia: 'React official documentation: biblioteca para interfaces de usuario; puede emplearse para aplicaciones de página única.' }
  ],
  java: [
    { url: 'https://docs.oracle.com/javase/specs/jls/se25/html/jls-9.html', referencia: 'Java Language Specification, Java SE 25, §9: una interfaz puede extender varias interfaces y una clase implementar varias; clases Java no admiten herencia de varias clases.' }
  ],
  gpl: [
    { url: 'https://www.gnu.org/licenses/gpl-3.0.html', referencia: 'GNU General Public License v3, preámbulo y §§0, 2, 4 y 5: define copyright conforme a las leyes aplicables y otorga permisos para ejecutar, copiar, modificar y distribuir sujetos a condiciones.' },
    { url: 'https://www.gnu.org/licenses/gpl-faq.html', referencia: 'GNU GPL FAQ, Free Software Foundation: aclara el fundamento de copyright de la GPL y los permisos/condiciones para redistribuir el programa.' }
  ],
  mining: [
    { url: 'https://www.ibm.com/docs/en/spss-modeler/18.6.0?topic=started-modeling-techniques', referencia: 'IBM SPSS Modeler documentation, Modeling Techniques: identifica árboles de decisión, redes neuronales y redes bayesianas como técnicas/modelos supervisados de minería de datos.' },
    { url: 'https://www.ncbi.nlm.nih.gov/books/NBK550346/table/Ch9-t0002/', referencia: 'NCBI Bookshelf, tabla de métodos y algoritmos de aprendizaje automático: incluye redes neuronales, algoritmos bayesianos/redes bayesianas y árboles de decisión.' }
  ]
};

const records = [
  [1376, [64], ['II-5', 'IV-2'], ['SQL', 'optimizador', 'plan de ejecución', 'EXPLAIN', 'rendimiento de consultas'], sources.sql, null,
    'La formulación original no delimitaba qué significaba «elegir una sentencia» y los distractores sobre índices, CPU y paralelismo también pueden influir en el plan. Se cambia el supuesto: al comparar formas de ejecutar una consulta, debe evaluarse el plan que selecciona el optimizador y su coste/rendimiento con datos representativos. Cotejo con ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31-08-2026), apartados de optimización y planes de ejecución.', 'corregida'],
  [1377, [65], ['III-12'], ['SPA', 'frameworks web', 'Angular', 'Vue.js', 'React', 'Bideo.js'], sources.spa, null,
    'Angular y Vue son frameworks web; React es una biblioteca para construir interfaces y también puede usarse en aplicaciones SPA. El material secundario consultado describe Bideo.js como biblioteca de vídeo de fondo HTML5, no para crear SPA, pero el repositorio atribuido al autor devuelve 404 y la web del proyecto no ha podido consultarse. Se corrige el enunciado para incluir framework o biblioteca y se deja pendiente la certificación de la opción D hasta recuperar documentación primaria del mantenedor. Cotejo con ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1 (31-08-2026), tema A1-65 y desarrollo front-end.', 'pendiente_fuente'],
  [1378, [67], ['III-9'], ['Java', 'interfaces', 'herencia múltiple', 'programación orientada a objetos'], sources.java, null,
    'La respuesta interfaces es correcta como mecanismo de herencia múltiple de tipos: una clase puede implementar varias interfaces y una interfaz extender varias. No equivale a permitir que una clase herede el estado de varias clases. Se reformula el enunciado para acotar esta distinción y no presentar interfaces como herencia múltiple de clases. Cotejo con ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1 (31-08-2026), Java y orientación a objetos.', 'corregida'],
  [1379, [43], ['II-14'], ['GNU GPL v3', 'software libre', 'copyright', 'licencia copyleft'], sources.gpl, null,
    'La opción D es falsa: GPLv3 es una licencia de copyright (y de derechos afines) que concede permisos con condiciones. La GPL autoriza ejecutar, copiar, modificar y redistribuir el programa; las opciones se reescriben para que la redistribución quede expresamente sujeta a sus términos y no haya una segunda respuesta falsa por afirmar un derecho de copia irrestricto. Cotejo con ITIC Academy, bloque 18 «Protección jurídica, licencias y control del software», versión 2026.1 (26-08-2026), licencia GPL y derechos de autor.', 'corregida'],
  [1380, [71], ['II-15'], ['minería de datos', 'redes bayesianas', 'árboles de decisión', 'redes neuronales', 'algoritmos'], sources.mining, null,
    'Se conserva D como respuesta: redes bayesianas, árboles de decisión y redes neuronales son técnicas/modelos reconocidos de minería de datos; «Look and Find» no es una familia de algoritmos reconocida en la documentación consultada. El término se mantiene como distractor literal, sin atribuirle una definición técnica. Cotejo con ITIC Academy, bloque 32 «Inteligencia artificial y ciencia de datos», versión 2026 (contenido A1-71 y A2-II-15 sobre minería de datos).', 'vigente']
];

apply({ numero: '212', fecha: '2026-10-24', records, edits: {
  1376: {
    texto: 'Al comparar distintas formas de ejecutar una consulta SQL sobre datos representativos, ¿qué aspecto es esencial para determinar cuál conviene?',
    opciones: [
      'El plan de ejecución elegido por el optimizador y su coste/rendimiento estimado o medido.',
      'El número de espacios y saltos de línea que contiene la sentencia.',
      'La longitud de los alias asignados a tablas y columnas.',
      'Que las palabras clave estén escritas en mayúsculas en lugar de minúsculas.'
    ],
    respuesta_correcta: 0
  },
  1377: { texto: '¿Cuál de los siguientes no es un framework ni una biblioteca de interfaces utilizada para crear aplicaciones web de página única (SPA)?' },
  1378: {
    texto: 'En Java, una clase no puede extender varias clases. ¿Qué mecanismo permite que una clase implemente varios tipos y comparta contratos de comportamiento?',
    opcion: [2, 'Interfaces: una clase puede implementar varias y una interfaz puede extender varias interfaces.'],
    respuesta_correcta: 2
  },
  1379: {
    opciones: [
      'No limita el número de equipos en los que puede ejecutarse el programa.',
      'Permite redistribuir copias no modificadas si se conservan los avisos y se cumplen las condiciones de la licencia.',
      'Permite copiar, modificar y distribuir obras cubiertas conforme a las condiciones de la GPL.',
      'No se apoya en el copyright ni en otras leyes aplicables; concede permisos al margen de la propiedad intelectual.'
    ],
    respuesta_correcta: 3
  }
}});
