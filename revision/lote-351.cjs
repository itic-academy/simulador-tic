const aplicar = require('./aplicar-lote.cjs');

const records = [
  [
    2071, [60], ['II-2'], ['Linux', 'Unix', 'arranque', 'rc.local', 'histórica'],
    { url: 'https://www.freedesktop.org/software/systemd/man/250/rc-local.service.html', referencia: 'systemd-rc-local-generator/rc-local.service: documenta que la versión System V tradicional de /etc/rc.local se ejecutaba «last» en el proceso de arranque; systemd conserva el hook por compatibilidad con semántica distinta.' },
    'systemd-rc-local-generator, rc-local.service(8)',
    'No existe una secuencia universal para las distribuciones Linux actuales: systemd ejecuta rc-local.service en late boot y en paralelo con muchos servicios. Se limita la pregunta al arranque histórico SysV, donde /etc/rc.local era el hook local tradicional ejecutado al final de la secuencia antes de habilitar el acceso normal.',
    'historica'
  ],
  [
    2072, [38, 48], ['I-9', 'II-11'], ['ENS', 'auditoría de seguridad', 'autoevaluación', 'categoría básica'],
    { url: 'https://www.boe.es/buscar/pdf/2022/BOE-A-2022-7191-consolidado.pdf', referencia: 'Real Decreto 311/2022, de 3 de mayo, anexo III, apartado 2.1.a: los sistemas BÁSICOS no precisan auditoría; basta autoevaluación documentada por el personal administrador o por quien delegue. El responsable de seguridad analiza el informe.' },
    'RD 311/2022, anexo III, § 2.1.a',
    'La clave 0 refleja literalmente el nivel de auditoría para categoría BÁSICA del anexo III del ENS. Debe precisarse que la autoevaluación es documentada, que el responsable de seguridad analiza su informe y que la regla no exime a categorías MEDIA o ALTA de auditoría. El art. 31 establece la auditoría regular y el anexo III concreta niveles y excepción.',
    'vigente'
  ],
  [
    2073, [60], ['II-2'], ['Unix', 'Linux', 'dispositivos', 'nodos de dispositivo', 'sistema de archivos'],
    { url: 'https://www.kernel.org/doc/html/latest/admin-guide/devices.html', referencia: 'Linux kernel documentation, Linux allocated devices: registra los nodos de dispositivo de /dev, incluidos dispositivos de carácter, bloque y especiales, que exponen interfaces de dispositivo.' },
    'Linux kernel documentation, Linux allocated devices',
    'La pregunta original permitía varias respuestas: el kernel gestiona sistemas de archivos y la shell sirve de interfaz, mientras «todo dispositivo como archivo» es una simplificación. Se pregunta ahora por el significado acotado de la convención: muchos dispositivos se exponen con nodos especiales en /dev y operaciones de archivo, sin abolir sus controladores ni convertir todos los periféricos en archivos regulares.',
    'corregida'
  ],
  [
    2074, [75], ['II-4'], ['OLAP', 'MOLAP', 'ROLAP', 'HOLAP', 'inteligencia de negocio'],
    { url: 'https://www.ibm.com/think/topics/olap', referencia: 'IBM, What is OLAP?, sección MOLAP vs. ROLAP vs. HOLAP: distingue OLAP multidimensional, relacional e híbrido; «BOLAP» no figura entre estas tres arquitecturas de almacenamiento habituales.' },
    'IBM, What is OLAP?, MOLAP vs. ROLAP vs. HOLAP',
    'Se delimita la pregunta a las tres arquitecturas de almacenamiento comunes descritas por IBM: MOLAP, ROLAP y HOLAP. La expresión «tipo OLAP» puede abarcar otras taxonomías (p. ej., DOLAP o WOLAP), por lo que se evita presentar la lista como exhaustiva; BOLAP no es una de las tres categorías aquí contrastadas.',
    'corregida'
  ],
  [
    2075, [35], ['II-15'], ['gestión de proyectos TIC', 'eficacia', 'eficiencia', 'recursos', 'resultados'],
    { url: 'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A9000%3Aed-5%3Av1%3Aen', referencia: 'ISO 9000:2015, vocabulario, entradas 3.7.16 y 3.7.17: eficiencia = relación entre resultado logrado y recursos utilizados; eficacia = grado en que se realizan actividades planificadas y se alcanzan resultados planificados.' },
    'ISO 9000:2015, §§ 3.7.16–3.7.17',
    'La formulación original equiparaba eficiencia con uso correcto de recursos y mezclaba eficacia con lograr objetivos usando recursos mínimos. Se pregunta ahora por la definición exacta de ISO 9000: la eficiencia relaciona resultados y recursos; la eficacia mide la realización de actividades y resultados planificados.',
    'corregida'
  ]
];

const edits = {
  2071: {
    texto: 'En un sistema Linux histórico con arranque System V (SysV), ¿qué script local se ejecutaba tradicionalmente al final de la secuencia de arranque?',
    opcion: [0, '/etc/rc.local (si estaba presente y configurado).']
  },
  2073: {
    texto: 'En sistemas Unix-like, ¿qué significa de forma precisa la convención de tratar muchos dispositivos como archivos?',
    opciones: [
      'El kernel prescinde de controladores y accede a cada periférico como a un archivo ordinario.',
      'Muchos dispositivos se exponen mediante nodos especiales, normalmente en /dev, y operaciones de archivo, sin que esto elimine los controladores ni cubra todos los dispositivos.',
      'La shell es el componente del kernel encargado de gestionar el sistema de archivos.',
      'Todo periférico debe implementarse exclusivamente como un archivo regular.'
    ],
    respuesta_correcta: 1
  },
  2074: {
    texto: 'Si se comparan las tres arquitecturas de almacenamiento OLAP habituales —multidimensional, relacional e híbrida—, ¿cuál de estas siglas no identifica una de ellas?',
    opciones: [
      'HOLAP (Hybrid OLAP).',
      'MOLAP (Multidimensional OLAP).',
      'ROLAP (Relational OLAP).',
      'BOLAP (Business OLAP).'
    ],
    respuesta_correcta: 3
  },
  2075: {
    texto: 'Según ISO 9000:2015, ¿qué significa eficiencia?',
    opciones: [
      'La relación entre el resultado logrado y los recursos utilizados.',
      'El grado en que se realizan las actividades planificadas y se alcanzan los resultados planificados.',
      'La satisfacción de los usuarios, con independencia de los resultados o recursos.',
      'Alcanzar el resultado planificado sin considerar los recursos utilizados.'
    ],
    respuesta_correcta: 0
  }
};

aplicar({ numero: '351', fecha: '2026-10-28', records, edits });
