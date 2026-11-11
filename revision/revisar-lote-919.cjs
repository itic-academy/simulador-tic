const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const adobeKerning = 'https://helpx.adobe.com/indesign/desktop/format-and-style-text/tabs-indents-and-spacing/about-kerning-and-tracking.html';
const rd1125 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-22935';
const rd1118 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-22929';
const htmlStandard = 'https://html.spec.whatwg.org/multipage/';
const ibmOlap = 'https://www.ibm.com/think/topics/olap-vs-oltp';
const scrumGuide = 'https://scrumguides.org/scrum-guide.html';
const academyWeb = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyGov = 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk';
const academyBI = 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const academyAgile = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';

const sources = {
  4916: [
    { url: adobeKerning, referencia: 'Adobe InDesign, “About kerning and tracking”, actualización de 2-6-2026: kerning ajusta el espacio entre pares específicos de caracteres; tracking modifica uniformemente un rango de texto. La definición del reactivo se concreta para no confundirlo con subdivisión, corrección de inclinación o salto de línea.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 77: HTML, CSS y lenguajes/herramientas de la Web.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.9: lenguajes de marca, HTML y funcionalidades.' }
  ],
  4917: [
    { url: rd1125, referencia: 'Real Decreto 1125/2024, de 5 de noviembre: marco de organización y gobernanza TIC de la Administración del Estado; su disposición transitoria primera mantuvo temporalmente las referencias a la AEAD como referencias a la SGAD hasta la constitución efectiva de la Agencia.' },
    { url: rd1118, referencia: 'Real Decreto 1118/2024, de 5 de noviembre, texto consolidado con actualización de 12-6-2026: disposición adicional primera establece la constitución efectiva de la AEAD y supresión de la Secretaría General de Administración Digital; la DA tercera prevé la incorporación de su personal. Por ello se marca la denominación SGAD como histórica.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 30: organización y gobernanza TIC de la Administración General del Estado y transformación digital.' }
  ],
  4918: [
    { url: htmlStandard, referencia: 'WHATWG HTML Living Standard, secciones de elementos HTML: define header, footer, nav, section y article como elementos del lenguaje vigente. Se actualiza el enunciado para preguntar por el estándar actual y evitar tratar HTML5 como una versión cerrada/vigente separada.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, temas 65 y 77: arquitectura web y lenguajes HTML/CSS.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, temas II.9 (lenguajes de marca, HTML) y III.12 (aplicaciones y desarrollo web).' }
  ],
  4919: [
    { url: ibmOlap, referencia: 'IBM, OLAP vs OLTP: OLAP se orienta a análisis y consultas complejas sobre grandes conjuntos/datos multidimensionales; OLTP a transacciones breves de lectura/escritura. Se elimina la afirmación absoluta de “mayor rapidez” porque el tiempo depende de la implementación, datos y carga.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, temas 71 (ciencia de datos) y 75 (explotación de datos/data warehouse).' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, temas II.4 (inteligencia de negocio y OLTP/OLAP) y III.15 (OLAP, minería de datos y tecnologías analíticas).' }
  ],
  4920: [
    { url: scrumGuide, referencia: 'Scrum Guide 2020, secciones Sprints y Sprint Goal: si el horizonte del Sprint es excesivo, el objetivo puede quedar obsoleto y aumentar complejidad/riesgo; Sprints más cortos generan ciclos de aprendizaje y limitan el riesgo a un intervalo menor.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, temas 37 y 88: metodologías ágiles y metodologías de desarrollo de sistemas, incluido Scrum.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.2: gestión y planificación del desarrollo y metodologías de desarrollo.' }
  ]
};

const academy = {
  4916: [academyWeb, 'ITIC Academy 2026.1, bloque 30 «Tecnologías de Sistemas de Información»: incluye HTML, CSS, tipografía y estándares web en los temas A1-77/A2-T9. Cotejo de cobertura curricular; la definición precisa de kerning se comprueba en documentación primaria de Adobe.'],
  4917: [academyGov, 'ITIC Academy 2026.4, bloque 10 «Gobernanza TIC y Administración Digital»: incluye el RD 1125/2024 y la transición de SGAD a AEAD bajo A1-30 y A2-O10. El cambio orgánico se comprueba en las disposiciones del BOE, no solo en el material docente.'],
  4918: [academyWeb, 'ITIC Academy 2026.1, bloque 30 «Tecnologías de Sistemas de Información», apartados HTML, elementos semánticos y estándares; encaje explícito en A1-77/A2-T9. El catálogo de elementos se verifica contra WHATWG.'],
  4919: [academyBI, 'ITIC Academy 2026, bloque 34 «Business Intelligence y Big Data»: incluye A1-71/A1-75 y A2-T4; el resumen y el temario cubren la diferencia OLTP/OLAP y los almacenes de datos. La decisión técnica se contrasta con documentación IBM.'],
  4920: [academyAgile, 'ITIC Academy 2026.1, bloque 15 «Metodologías Ágiles y Ciclo de Vida»: incluye Scrum bajo A1-37/A1-88 y metodologías de desarrollo bajo el epígrafe académico A2-D2; se contrasta con el texto de Scrum Guide 2020.']
};

const records = [
  [4916, ['77'], ['II-9'], ['tipografía', 'kerning', 'tracking', 'HTML', 'CSS'], sources[4916], null,
    'Respuesta B. El kerning ajusta el espacio tipográfico entre pares concretos de caracteres para equilibrar visualmente el texto. No es el tracking, que ajusta de forma uniforme un rango de caracteres, ni el análisis léxico de una página, la corrección de inclinación (deskew) o la composición de líneas.', 'corregida'],
  [4917, ['30'], [], ['SGAD', 'Secretaría General de Administración Digital', 'AEAD', 'gobernanza TIC', 'denominación histórica'], sources[4917], null,
    'Respuesta A. SGAD significaba Secretaría General de Administración Digital, no “Secretaría General con rango de Subsecretaría”. La pregunta queda fechada explícitamente como denominación histórica: tras la constitución efectiva de la Agencia Estatal de Administración Digital (AEAD), la Secretaría General fue suprimida conforme a la disposición adicional primera del Real Decreto 1118/2024. Se conserva la acepción histórica sin presentarla como el órgano actual.', 'historica'],
  [4918, ['65', '77'], ['II-9', 'III-12'], ['HTML', 'HTML5', 'HTML Living Standard', 'elementos semánticos', 'header', 'footer', 'nav', 'section', 'article'], sources[4918], null,
    'Respuesta D. Los cinco nombres de las opciones son elementos HTML reconocidos por el estándar vivo actual: header y footer son elementos estructurales; nav representa una sección de navegación; section agrupa contenido temáticamente; article representa contenido que puede tener sentido por sí mismo. Se cambia “nuevos elementos de HTML5” por una pregunta sobre el HTML vigente, ya que HTML se mantiene como Living Standard y no conviene tratar HTML5 como una edición cerrada.', 'corregida'],
  [4919, ['71', '75'], ['II-4', 'III-15'], ['OLAP', 'OLTP', 'inteligencia de negocio', 'almacén de datos', 'consultas analíticas'], sources[4919], null,
    'Respuesta A. OLAP se diseña para análisis y consultas complejas, agregaciones y perspectivas multidimensionales sobre conjuntos amplios de datos; OLTP prioriza el procesamiento de transacciones operacionales breves. Se elimina “mayor rapidez de respuesta” como criterio universal: no permite comparar tiempos sin fijar sistemas, consulta, datos y carga. El supuesto se formula por finalidad analítica, no por velocidad absoluta.', 'corregida'],
  [4920, ['37', '88'], ['III-2'], ['Scrum', 'Sprint', 'feedback', 'horizonte temporal', 'riesgo de producto'], sources[4920], null,
    'Respuesta D. Un Sprint con horizonte demasiado largo puede dejar obsoleto el Sprint Goal, aumentar la complejidad y retrasar la inspección y adaptación; el equipo puede descubrir tarde que ha construido algo distinto de lo que necesitan los usuarios. Scrum Guide indica que Sprints más cortos generan más ciclos de aprendizaje y limitan el riesgo de coste y esfuerzo a un período menor. No es correcto afirmar que un Sprint largo necesariamente reduzca el número de eventos sin coste o consecuencias.', 'corregida']
];

const edits = {
  4916: {
    texto: 'En tipografía, ¿qué describe el kerning?',
    opciones: [
      'El proceso de subdividir los elementos de una página hasta llegar a caracteres individuales.',
      'El ajuste del espacio entre pares concretos de caracteres para equilibrar visualmente el texto.',
      'La corrección automática de la inclinación de una página escaneada.',
      'La composición que divide un párrafo en las líneas que caben en una columna.'
    ],
    respuesta_correcta: 1
  },
  4917: {
    texto: 'Antes de su supresión tras la constitución de la Agencia Estatal de Administración Digital (AEAD), ¿qué significaban las siglas SGAD en la organización TIC de la Administración General del Estado?',
    opciones: [
      'Secretaría General de Administración Digital.',
      'Subsecretaría General de Administración Digital.',
      'Agencia Estatal de Administración Digital.',
      'Subdirección General de Administración Digital.'
    ],
    respuesta_correcta: 0
  },
  4918: {
    texto: 'Según el HTML Living Standard actual, ¿cuáles de los siguientes nombres corresponden a elementos HTML?',
    opciones: [
      'header y footer.',
      'nav.',
      'section y article.',
      'Todos los anteriores.'
    ],
    respuesta_correcta: 3
  },
  4919: {
    texto: '¿Qué tipo de procesamiento está orientado a consultas analíticas complejas, agregaciones y análisis multidimensional de grandes conjuntos de datos?',
    opciones: [
      'OLAP.',
      'OLTP.',
      'ETL.',
      'OLTA.'
    ],
    respuesta_correcta: 0
  },
  4920: {
    texto: 'Según Scrum Guide 2020, ¿qué riesgo puede aumentar si el horizonte de un Sprint es demasiado largo?',
    opciones: [
      'El equipo puede reaccionar mejor ante imprevistos y recibe antes el feedback de cada Incremento.',
      'Se reduce necesariamente el número de reuniones y desaparece la necesidad de inspección.',
      'Los ciclos de aprendizaje se hacen más frecuentes y el riesgo se limita a intervalos menores.',
      'El Sprint Goal puede quedar obsoleto y el feedback tardío puede permitir construir algo distinto de lo que se necesita.'
    ],
    respuesta_correcta: 3
  }
};

aplicar({ numero: '919', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-919.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material se cita como cotejo curricular, no como fuente técnica o normativa primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} Fuentes primarias y alcance están documentados en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 919.');
