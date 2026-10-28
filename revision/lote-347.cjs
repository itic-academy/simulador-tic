const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2051, [38], ['II-11'], ['auditoría informática', 'gestión de riesgos', 'auditoría interna'],
    [
      { url: 'https://www.theiia.org/globalassets/site/standards/globalinternalauditstandards_2024january9_printable.pdf', referencia: 'The IIA, Global Internal Audit Standards (2024), estándar 13.2: evaluación de riesgos del encargo; estándar 14.6: documentación del trabajo. Vigentes desde 9-1-2025.' }
    ], 'Estándares 13.2 y 14.6',
    'La formulación original permitía más de una respuesta: documentar el trabajo es una obligación expresa del estándar 14.6, y evaluar los riesgos relevantes forma parte del 13.2. Se reformula para preguntar específicamente por la evaluación de la gestión de riesgos, separándola de las tareas de documentación y dejando claro que el auditor evalúa, no asume la gestión directiva. La opción 4 queda como única respuesta.',
    'corregida'
  ],
  [
    2052, [80], ['I-6'], ['Ley 6/2020', 'servicios electrónicos de confianza', 'prestador cualificado', 'cese de actividad'],
    [
      { url: 'https://www.boe.es/eli/es/l/2020/11/11/6/con', referencia: 'Ley 6/2020, artículo 9.3.c): comunicación por el prestador cualificado con al menos dos meses de antelación al cese efectivo.' }
    ], 'Ley 6/2020, art. 9.3.c)',
    'El plazo mínimo es de dos meses. Se precisa el sujeto: el artículo 9.3.c) impone esta obligación al prestador cualificado de servicios electrónicos de confianza; la formulación genérica y la antigua denominación «prestador de servicios de certificación» podían extender indebidamente la regla. Se corrige además el error tipográfico «AI».',
    'corregida'
  ],
  [
    2053, [59], ['II-2'], ['sistemas operativos', 'memoria virtual', 'fallo menor de página', 'fallo suave'],
    [
      { url: 'https://man7.org/linux/man-pages/man5/proc_pid_stat.5.html', referencia: 'Linux man-pages, proc_pid_stat(5): los fallos menores no requieren cargar una página desde disco; los mayores sí.' },
      { url: 'https://docs.kernel.org/6.9/mm/page_tables.html', referencia: 'Linux kernel documentation, Page Tables: fallos de página, traducciones ausentes y causas esperables como asignación diferida y copy-on-write.' }
    ], 'Linux man-pages proc_pid_stat(5); documentación del kernel sobre tablas de páginas',
    'Un fallo menor o suave se resuelve sin lectura de una página desde el disco; puede requerir instalar o actualizar una entrada de página, por ejemplo tras asignación diferida o copy-on-write. Se concreta que la página solicitada está ya disponible en memoria y se corrige la opción para distinguir este caso de un fallo mayor, que sí necesita E/S desde almacenamiento.',
    'corregida'
  ],
  [
    2054, [65, 68], ['III-12'], ['PHP', 'framework web', 'acceso a datos', 'Yii DAO'],
    [
      { url: 'https://www.yiiframework.com/doc/guide/2.0/en/db-dao', referencia: 'Documentación oficial de Yii 2: el framework incorpora Yii DAO, API orientada a objetos para acceder a bases de datos, base de query builder y Active Record.' },
      { url: 'https://www.doctrine-project.org/projects/dbal.html', referencia: 'Doctrine DBAL, proyecto oficial: biblioteca de abstracción de bases de datos PHP.' },
      { url: 'https://laravel.com/framework/docs/eloquent', referencia: 'Laravel, documentación oficial de Eloquent ORM: mapeo de modelos y operaciones de persistencia.' },
      { url: 'https://propelorm.org/documentation/', referencia: 'Propel, documentación oficial: ORM PHP para generación de modelos, consultas, relaciones y persistencia.' }
    ], 'Documentación oficial de Yii DAO, Doctrine DBAL, Laravel Eloquent y Propel',
    'La pregunta original llamaba a todas las opciones «utilidades orientadas a capa de abstracción de datos», pero Yii también ofrece explícitamente una capa DAO; por tanto, «no se encuentra» no daba una excepción defendible. Se reescribe para distinguir categorías: Yii es el framework web generalista de las opciones y contiene su propia capa de acceso a datos; Doctrine DBAL, Eloquent y Propel son tecnologías centradas en abstracción/ORM de datos. La clave sigue siendo Yii.',
    'corregida'
  ],
  [
    2055, [30], ['I-10'], ['gobernanza TIC', 'Administración digital', 'SGAD', 'AEAD', 'histórica'],
    [
      { url: 'https://www.boe.es/eli/es/rd/2020/02/25/403/con', referencia: 'Real Decreto 403/2020, artículo 9.2, redacción histórica: estrategia, interlocución internacional, supervisión de planes y Catálogo; no atribuye a SGAD la supervisión y coordinación del registro de convenios del sector público estatal.' },
      { url: 'https://www.boe.es/eli/es/rd/2024/11/05/1118/con', referencia: 'Real Decreto 1118/2024, disposición adicional primera y artículo 7: constitución y funciones de la Agencia Estatal de Administración Digital; la SGAD fue suprimida al constituirse la Agencia (21-2-2025).' }
    ], 'RD 403/2020, art. 9.2 (referencia histórica); RD 1118/2024, DA 1.ª y art. 7',
    'Se conserva como pregunta histórica y se acota al artículo 9.2 del RD 403/2020: a), b), c) y d) corresponden a las cuatro primeras funciones enumeradas; la opción sobre el Registro de convenios no figura en esa relación. No debe memorizarse como organigrama vigente: la disposición adicional primera del RD 1118/2024 suprimió la SGAD cuando se constituyó la AEAD, el 21-2-2025, y su artículo 7 atribuye hoy las funciones a la Agencia. La opción correcta histórica sigue siendo la 3.',
    'historica'
  ]
];

const edits = {
  2051: {
    texto: 'En una auditoría interna, respecto a la gestión de riesgos y sin asumir responsabilidades propias de la dirección, ¿qué corresponde al auditor?',
    opcion: [3, 'Evaluar si los riesgos relevantes se identifican, valoran y tratan mediante procesos y controles adecuados, dentro del alcance del encargo.']
  },
  2052: {
    texto: 'Conforme a la Ley 6/2020, el prestador cualificado de servicios electrónicos de confianza que vaya a cesar en su actividad debe comunicarlo a sus clientes y al órgano de supervisión con una antelación mínima de:',
    opcion: [0, 'Al menos dos meses.']
  },
  2053: {
    texto: 'En sistemas que distinguen fallos menores (suaves) y mayores de página, ¿qué caracteriza a un fallo menor o suave?',
    opcion: [0, 'La página se resuelve sin cargarla desde disco —por ejemplo, porque ya está en memoria—, instalando o actualizando la traducción de la tabla de páginas.']
  },
  2054: {
    texto: '¿Cuál de estas tecnologías PHP es un framework web generalista que, además, incluye su propia capa DAO para acceder a bases de datos?',
    opcion: [1, 'Yii']
  },
  2055: {
    texto: 'En la relación histórica de funciones de la SGAD del artículo 9.2 del Real Decreto 403/2020, ¿cuál de las siguientes NO figuraba entre sus funciones?',
  }
};

aplicar({ numero: '347', fecha: '2026-10-28', records, edits });
