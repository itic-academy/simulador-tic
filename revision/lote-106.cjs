const records = [
  [846,[99],['III-2'],['COCOMO 81','estimación de esfuerzo','modos orgánico y semiacoplado','modo empotrado'],[
    {url:'https://books.google.com/books?id=VphQAAAAMAAJ',referencia:'Barry W. Boehm, Software Engineering Economics, Prentice-Hall, 1981, capítulos sobre el modelo básico COCOMO y sus modos de desarrollo. Se delimita la pregunta a COCOMO 81 y no se generaliza a versiones posteriores.'},
    {url:'https://www.rose-hulman.edu/class/cs/csse372/201310/Homework/CII_manual2000.pdf',referencia:'USC COCOMO II Model Definition Manual, §1.1: identifica COCOMO II como revisión del modelo original de Boehm (1981); sirve para distinguir generaciones del modelo.'}
  ],null,'La taxonomía orgánico, semiadherido/semiacoplado y empotrado corresponde al COCOMO original (COCOMO 81). «Acoplado» sin el prefijo «semi» no es una cuarta categoría. Se acota el enunciado al modelo histórico de 1981 para no confundirlo con las generaciones COCOMO II y III.','historica'],
  [847,[99],['III-2'],['estimación de tamaño','Albrecht','Mark II FPA','Use Case Points','Boeing 3D Function Points','COCOMO'],[
    {url:'https://ifpug.org/ifpug-standards/fpa',referencia:'International Function Point Users Group: sitúa el origen del análisis de puntos función en Allan Albrecht y lo describe como medida lógica del tamaño funcional.'},
    {url:'https://www.iso.org/standard/35603.html',referencia:'ISO/IEC 20968:2002, Mk II Function Point Analysis: estándar vigente que define el método MkII de medición del tamaño funcional.'},
    {url:'https://www.pnsqc.org/archives/uploads/proceedings/pnsqc1992.pdf',referencia:'Scott A. Whitmire, “3D Function Points: Scientific and Real-Time Extensions to Function Points”, Boeing Computer Services, PNSQC 1992: presenta el método 3D como extensión de los puntos función de Albrecht desarrollada en Boeing.'},
    {url:'https://www.scribd.com/document/210680399/1993-Karner-Resource-Estimation-for-Objectory-Projects',referencia:'Gustav Karner, Metrics for Objectory / Resource Estimation for Objectory Projects (1993), documento original reproducido: define Use Case Points y el cálculo del tamaño y los recursos.'}
  ],null,'Se conserva D como la opción que no corresponde a un método reconocido de medición funcional: el método 3D fue desarrollado en Boeing, no por Barry Boehm. Boehm es el autor de COCOMO, un modelo de esfuerzo/coste distinto de los puntos función. Se corrige la formulación para distinguir expresamente «Boehm» de «Boeing».','corregida'],
  [848,[99],['III-2'],['COCOMO','estimación algorítmica','esfuerzo','coste','plazo'],[
    {url:'https://swehb.nasa.gov/pages/viewpage.action?navigatingVersions=true&pageId=16457486',referencia:'NASA Software Engineering Handbook, SWE-015 Cost Estimation: identifica COCOMO II y SEER-SEM como modelos paramétricos de estimación de coste de software; explica el uso de tamaño y factores del proyecto como entradas.'},
    {url:'https://www.rose-hulman.edu/class/cs/csse372/201310/Homework/CII_manual2000.pdf',referencia:'USC COCOMO II Model Definition Manual, §1.1: describe COCOMO como herramienta/modelo de planificación presupuestaria y estimación de calendario de proyectos de software.'}
  ],null,'COCOMO es un modelo algorítmico de estimación de esfuerzo, coste y calendario de proyectos software. Se precisa el objeto de estimación en el enunciado; CMMI es un modelo de mejora/capacidad de procesos y no sustituye a un modelo de coste como COCOMO.','vigente'],
  [849,[100],['III-6'],['documentación del ciclo de vida','productos de información','gestión de configuración','gestión documental'],[
    {url:'https://www.iso.org/standard/74909.html',referencia:'ISO/IEC/IEEE 15289:2019, confirmada vigente en 2025: especifica propósito y contenido de los elementos de información/documentación del ciclo de vida de sistemas y software, y los relaciona con procesos de ISO/IEC/IEEE 12207 y 15288.'},
    {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr:0f07660d-1044-489e-a3be-3a94b80fbb16/METRICA_V3_Gestion_de_Proyectos.pdf',referencia:'MÉTRICA v3, Gestión de Proyectos, tarea GPI 2.2: elabora un catálogo de productos a generar para el proyecto; las tareas y productos se determinan y planifican dentro de la metodología.'}
  ],null,'Se sustituye la definición imprecisa que mezclaba documentación con cualquier artefacto (programas, juegos de pruebas y gráficos). La documentación del ciclo de vida comprende elementos de información definidos y vinculados a procesos; su contenido y planificación se gestionan conforme al ciclo de vida y al método adoptado. La gestión de configuración puede incluir documentación cuando se identifica como elemento de configuración, no solo código.','corregida'],
  [850,[106],[],['ITIL','ITIL versión 5','gestión de servicios TIC','edición vigente'],[
    {url:'https://www.peoplecert.org/help-and-support/faq-itil',referencia:'PeopleCert, FAQ oficial de ITIL: presenta ITIL (Version 5), Foundation y Bridge; informa que ITIL 4 seguirá disponible durante la transición y que su retirada está prevista para el 31 de diciembre de 2027.'},
    {url:'https://www.peoplecert.org/news-and-announcements/itil-version-5-explained',referencia:'PeopleCert, “New ITIL Explained for Certified Professionals”: confirma el lanzamiento gradual de ITIL (Version 5) y la convivencia transitoria con ITIL 4.'}
  ],null,'Se actualiza la clave de ITIL 4 a ITIL (Version 5), edición más reciente anunciada por PeopleCert a fecha de esta revisión. ITIL 4 continúa disponible durante la transición y sus módulos tienen retirada prevista para finales de 2027; «actual» se interpreta como última versión publicada, no como la única versión aún utilizable.','corregida']
];

const edits = {
  846:{texto:'En el COCOMO original de 1981, ¿cuál de las siguientes NO es una de sus tres categorías de proyecto?',opciones:[
    'Orgánico.',
    'Acoplado (sin el prefijo «semi»).',
    'Semiacoplado o semiadherido.',
    'Empotrado.'
  ],respuesta_correcta:1},
  847:{texto:'¿Cuál de las siguientes NO es una técnica reconocida para medir tamaño funcional o estimar el tamaño de un sistema software?',opciones:[
    'Análisis de puntos función de Albrecht/IFPUG.',
    'Puntos de caso de uso (Use Case Points).',
    'MkII Function Point Analysis (Mark II).',
    'Puntos función de Boehm: no debe confundirse con COCOMO ni con los puntos función 3D desarrollados en Boeing.'
  ],respuesta_correcta:3},
  848:{texto:'¿Cuál de los siguientes es un modelo algorítmico para estimar el esfuerzo, coste o calendario de un proyecto de software?',opciones:[
    'CMMI.',
    'COCOMO.',
    'El método de Cox.',
    'El plan de aseguramiento de la calidad (SQA).'
  ],respuesta_correcta:1},
  849:{texto:'Indique la afirmación verdadera sobre la documentación del ciclo de vida de un proyecto o sistema:',opciones:[
    'La gestión de configuración y versiones se aplica únicamente al código ejecutable, nunca a documentos.',
    'Los productos de información generados son independientes de los procesos y del método de ciclo de vida adoptado.',
    'La especificación de requisitos del sistema debe preceder necesariamente a la captura y análisis de requisitos de usuario.',
    'La documentación debe identificar y gestionar los elementos de información necesarios para apoyar los procesos del ciclo de vida; se planifica y adapta al sistema y a sus procesos.'
  ],respuesta_correcta:3},
  850:{texto:'A fecha de 2026, ¿cuál es la edición más reciente publicada de ITIL, marco de gestión de servicios de TI?',opciones:[
    'ITIL v3.',
    'ITIL 4.',
    'ITIL (Version 5).',
    'ITIL v2.'
  ],respuesta_correcta:2}
};

require('./aplicar-lote.cjs')({numero:'106',fecha:'2026-10-22',records,edits});
