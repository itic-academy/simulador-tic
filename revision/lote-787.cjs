const apply = require('./aplicar-lote.cjs');
const f = (url, referencia) => ({url, referencia});
apply({
  numero: '787',
  fecha: '2026-11-09',
  records: [
    [4256,[35,106],['III-2'],['selección de herramientas','evaluación','ITIL v3','histórica'],
      [f('https://www.itsm.hr/wp-content/uploads/2016/01/Sample_exam_ITIL_Foundation_v3_SP3.pdf','APM Group, ITIL v3 Foundation Sample Paper, pregunta 26: la secuencia marcada como correcta es requisitos, criterios de selección, evaluar y seleccionar. Copia consultada de la publicación de examen.'),
       f('https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk','ITIC Academy, bloque ITIL y COBIT, versión 2026.1: se usa para cotejar la cobertura actual del tema y separar las preguntas históricas de ITIL v3 del material vigente.')],
      '', 'Se identifica como pregunta de la muestra histórica de examen ITIL v3: primero se concretan requisitos, después criterios de selección, se evalúan las alternativas y finalmente se elige. No se presenta como una secuencia normativa universal para cualquier adquisición de tecnología.', 'historica'],
    [4257,[98],['III-13'],['CMMI','mejora del rendimiento','capacidades organizativas'],
      [f('https://cmmiinstitute.com/cmmi/intro','CMMI Institute, “What is CMMI?”: el modelo actual impulsa el rendimiento empresarial construyendo y evaluando capacidades clave, y ayuda a mejorar capacidades y rendimiento en distintas organizaciones.'),
       f('https://cmmiinstitute.com/learning/appraisals/levels','CMMI Institute, niveles de capacidad y rendimiento: la mejora de procesos es un aspecto, mientras que el modelo de madurez/capacidad caracteriza además rendimiento organizativo.'),
       f('https://drive.google.com/file/d/1ua1Adn74oFSuJYjeBcRhXXtjUl6dGMqg/view?usp=drivesdk','ITIC Academy Drive, CMMI v3.0: el material formula CMMI como buenas prácticas para impulsar el rendimiento mediante capacidades; cotejo curricular/técnico.' )],
      '', 'Se actualiza la formulación al CMMI v3.0: es un conjunto integrado de buenas prácticas para construir capacidades y mejorar el rendimiento de la organización. “Mejora de procesos” describe una dimensión del modelo, pero es demasiado estrecha como definición general de la versión actual.', 'corregida'],
    [4258,[106],['II-11'],['COBIT 4.1','objetivo de control','auditoría informática','histórica'],
      [f('https://www.isaca.org/resources/glossary','ISACA Interactive Glossary, entrada “Control objective”: en COBIT 4.1 y versiones anteriores, enunciado del resultado o propósito deseado al implantar procedimientos de control en un proceso concreto.'),
       f('https://www.isaca.org/resources/cobit','ISACA, COBIT: documentación vigente del marco y su terminología actual de objetivos de gobierno y gestión; se coteja para delimitar el término antiguo “control objective”.'),
       f('https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk','ITIC Academy, bloque ITIL y COBIT, versión 2026.1: el temario actual se centra en COBIT 2019 y trata las preguntas de COBIT 4.1 como terminología histórica.')],
      '', 'Se atribuye explícitamente la definición a COBIT 4.1 y anteriores, donde “objetivo de control” expresa el resultado o propósito esperado al aplicar controles en un proceso. COBIT 2019 organiza el marco con objetivos de gobierno y gestión; no se mezcla esa estructura con la definición histórica.', 'historica'],
    [4259,[106],[],['ITIL 4','cadena de valor del servicio','actividades','flujo de valor'],
      [f('https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565','PeopleCert, ITIL 4 Foundation: material oficial del creador que incluye Service Value Chain y sus actividades.'),
       f('https://community.peoplecert.org/public/clubs/itil/blogs/itil-version-5-a-value-stream-perspective','PeopleCert Community, ITIL Version 5: confirma que el Service Value System y la Service Value Chain de ITIL 4 siguen siendo centrales en Version 5.'),
       f('https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk','ITIC Academy, bloque ITIL y COBIT, versión 2026.1: contiene un epígrafe ITIL 4 y la evolución hacia ITIL (Version 5); cotejo curricular.')],
      '', 'La actividad de la cadena de valor transforma entradas concretas en salidas y utiliza combinaciones de prácticas. La demanda y las oportunidades impulsan el sistema, pero no son siempre la entrada directa de cualquier actividad; los flujos de valor tampoco son un único flujo de trabajo. PeopleCert mantiene la cadena de valor de ITIL 4 en ITIL Version 5.', 'corregida'],
    [4260,[108],['IV-8'],['PPP','Point-to-Point Protocol','multiprotocolo','FCS','detección de errores'],
      [f('https://datatracker.ietf.org/doc/html/rfc1661','IETF RFC 1661, Point-to-Point Protocol, §1–2: PPP transporta datagramas multiprotocolo mediante un campo Protocol y negocia protocolos de red con NCP.'),
       f('https://www.rfc-editor.org/rfc/rfc1662.html','IETF RFC 1662, PPP in HDLC-like Framing, §1–2: contempla enlaces síncronos y asíncronos, dedicados o conmutados, y FCS para detección de errores.'),
       f('https://www.rfc-editor.org/info/rfc1547/','IETF RFC 1547, requisitos PPP, §2.8: PPP requiere detección básica de errores, mientras que la corrección a nivel de enlace no es requisito.'),
       f('https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk','ITIC Academy, bloque 43 Redes/Protocolos 2026: PPP aparece en el acceso/enlace y se cubren sus protocolos de enlace; cotejo curricular.')],
      '', 'Se evita la expresión vaga “circuitos analógicos” y se pregunta por rasgos definidos en RFC: PPP admite distintos protocolos de red y framing sobre enlaces asíncronos o síncronos; su FCS detecta errores, no los corrige. Se cambia la opción sobre corrección para que ya no compita como segunda respuesta falsa.', 'corregida']
  ],
  edits: {
    4256: {
      texto: 'En la pregunta de muestra de ITIL v3 sobre selección de una herramienta tecnológica, ¿qué secuencia es la correcta?',
      opciones: ['Seleccionar; definir requisitos; fijar criterios de selección; evaluar.','Fijar criterios; definir requisitos; evaluar; seleccionar.','Definir requisitos; fijar criterios; seleccionar; evaluar.','Definir requisitos; fijar criterios de selección; evaluar; seleccionar.'],
      respuesta_correcta: 3,
      comentarios: 'Es la secuencia indicada como correcta en la pregunta 26 de la muestra ITIL v3 de APM Group. Se mantiene como referencia histórica del examen, no como norma universal de compras.'
    },
    4257: {
      texto: '¿Cuál describe mejor el objetivo general del CMMI v3.0 según CMMI Institute?',
      opciones: ['Impulsar el rendimiento organizativo mediante la construcción y evaluación de capacidades clave.','Mejorar exclusivamente la consistencia de los datos.','Aumentar únicamente la capacidad de liderazgo.','Sustituir todos los procesos de la organización por una metodología única.'],
      respuesta_correcta: 0,
      comentarios: 'CMMI v3.0 reúne buenas prácticas para ayudar a organizaciones a construir capacidades y mejorar el rendimiento. No prescribe sustituir todos sus procesos por una metodología única.'
    },
    4258: {
      texto: 'En la terminología de COBIT 4.1, ¿qué significa “objetivo de control” en un proceso de TI?',
      opciones: ['Los soportes informáticos y sus sistemas de backup.','El resultado o propósito deseado al implantar procedimientos de control en un proceso concreto.','La compatibilidad del software.','El tiempo medio entre fallos de los sistemas de TI.'],
      respuesta_correcta: 1,
      comentarios: 'Definición del glosario de ISACA para COBIT 4.1 y anteriores; se conserva con su versión para no atribuir esa terminología sin matices a COBIT 2019.'
    },
    4259: {
      texto: 'Según la cadena de valor del servicio de ITIL 4 —mantenida como elemento central en ITIL Version 5—, señale la afirmación correcta:',
      opciones: ['Las entradas de cada actividad son siempre la demanda o las oportunidades.','Una combinación de actividades y prácticas constituye una relación de servicio.','Cada actividad transforma entradas específicas en salidas.','Las seis actividades forman necesariamente un único flujo de trabajo fijo.'],
      respuesta_correcta: 2,
      comentarios: 'Cada actividad transforma sus entradas en salidas. Las prácticas se combinan para realizar el trabajo y distintos flujos de valor conectan actividades según el propósito; no hay un único flujo fijo. La demanda/oportunidad puede impulsar el SVS, pero no es siempre la entrada directa de cada actividad.'
    },
    4260: {
      texto: '¿Cuál de las siguientes afirmaciones sobre PPP es falsa?',
      opciones: ['Puede transportar tráfico por enlaces síncronos o asíncronos punto a punto.','Sólo admite el protocolo de red IP.','Permite encapsular datagramas de distintos protocolos de red.','Emplea FCS para detectar errores de trama.'],
      respuesta_correcta: 1,
      comentarios: 'PPP es multiprotocolo (RFC 1661) y su framing puede operar en enlaces asíncronos y síncronos; el FCS detecta errores (RFC 1662). PPP no ofrece por sí mismo corrección de errores de enlace, pero esta opción se redactó para evitar una segunda afirmación falsa.'
    }
  }
});
