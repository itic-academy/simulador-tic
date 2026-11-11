const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metric = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const construction = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A19993efa-8c88-4205-b1a5-fb7fc0bd94de/METRICA_V3_Construccion_del_Sistema_de_Informacion.pdf';
const design = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf';
const oracle = 'https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html';
const nasa = 'https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019%2B-%2BSoftware%2BLife%2BCycle';
const nist = 'https://csrc.nist.gov/pubs/sp/800/128/upd1/final';
const nistBaseline = 'https://csrc.nist.gov/glossary/term/baseline_configuration';
const cms = 'https://www.cms.gov/tra/Application_Development/AD_0520_Configuration_Management_Processes.htm';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';

const fuentes = {
  4776: [
    { url: metric, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información, pp. 3–4: ASI 9 realiza la verificación y validación de los modelos; el esquema separa las actividades que pueden desarrollarse en paralelo de las secuenciales.' },
    { url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias', referencia: 'Portal PAe, Metodologías y Guías: MÉTRICA v3 es una metodología de planificación y desarrollo de sistemas de información.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo y metodologías.' }
  ],
  4777: [
    { url: design, referencia: 'PAe, MÉTRICA v3, Diseño del Sistema de Información, actividad DSI 10, pp. 53–54: diferencia los niveles unitario, integración, sistema, implantación y aceptación; integración comprueba ensamblaje de componentes, mientras que sistema prueba el sistema completo.' },
    { url: construction, referencia: 'PAe, MÉTRICA v3, Construcción del Sistema de Información: CSI 4 es ejecución de pruebas de integración y CSI 5 es ejecución de pruebas del sistema.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 96: niveles, técnicas y herramientas de pruebas de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.7: pruebas, planificación y documentación.' }
  ],
  4778: [
    { url: oracle, referencia: 'Oracle Java Tutorials, Inheritance: una subclase se deriva de una superclase, hereda miembros y puede añadir o especializar comportamiento; la herencia permite reutilizar los miembros existentes.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 89: análisis del dominio y modelos de clases.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y sus elementos.' }
  ],
  4779: [
    { url: nasa, referencia: 'NASA Software Engineering Handbook, SWE-019, Standard Waterfall Life Cycle: los procesos aplicables se realizan secuencialmente y, al finalizar una fase, se pasa a la siguiente; se fijan criterios de transición. El mismo documento distingue los modelos incremental, evolutivo e iterativo y en espiral.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 86: modelos del ciclo de vida de los sistemas de información.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.1: fases y modelos del ciclo de vida.' }
  ],
  4780: [
    { url: nistBaseline, referencia: 'NIST CSRC Glossary, baseline configuration: conjunto de especificaciones formalmente revisadas y acordadas en un momento dado, base para futuras compilaciones, entregas y cambios.' },
    { url: nist, referencia: 'NIST SP 800-128 Rev. 1, Guide for Security-Focused Configuration Management: una configuración base puede evolucionar según la etapa del ciclo de vida y existir para desarrollo, prueba, preproducción y producción.' },
    { url: cms, referencia: 'U.S. Centers for Medicare & Medicaid Services, Configuration Management Processes: define eventos que establecen líneas base y una serie de líneas base cuando los elementos de configuración maduran durante las iteraciones o fases; no prescribe una única fecha universal.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 100 y 102: gestión de configuración, versiones y cambios en desarrollo de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: gestión de configuración, control de cambios y versiones.' }
  ]
};

const records = [
  [4776, ['95'], ['III-2'], ['MÉTRICA v3', 'ASI', 'análisis de consistencia', 'modelos', 'actividades secuenciales'], fuentes[4776], null,
    'Respuesta B. MÉTRICA v3 sitúa el análisis de consistencia (ASI 9) después de la generación de los modelos que se elaboran en paralelo: en esta actividad se verifican y validan su completitud, coherencia y corrección. Se sustituye la pregunta negativa y se corrige la concordancia del enunciado original.', 'corregida'],
  [4777, ['96'], ['III-7'], ['MÉTRICA v3', 'pruebas', 'pruebas de integración', 'CSI 4', 'ensamblaje de componentes'], fuentes[4777], null,
    'Respuesta D. MÉTRICA v3 considera las pruebas de integración un nivel de prueba que verifica el ensamblaje entre componentes o grupos. Las pruebas del sistema corresponden al sistema de información completo; el banco original mezclaba categorías de prueba con niveles y formulaba una exclusión negativa, por lo que se reemplaza por una pregunta positiva y delimitada.', 'corregida'],
  [4778, ['89'], ['III-9'], ['programación orientada a objetos', 'herencia', 'subclase', 'superclase', 'reutilización'], fuentes[4778], null,
    'Respuesta D. En programación orientada a objetos basada en clases, la herencia permite derivar una subclase de una superclase, reutilizar miembros y especializar el comportamiento. Se especifica el contexto basado en clases y se evita presentar la reutilización como el único efecto del mecanismo.', 'corregida'],
  [4779, ['86'], ['III-1'], ['ciclo de vida', 'modelo en cascada', 'fases secuenciales', 'criterios de transición'], fuentes[4779], null,
    'Respuesta A. El rasgo distintivo del modelo clásico en cascada es la ejecución secuencial de las fases, con criterios de transición entre ellas. Completar documentación no es una definición exclusiva ni suficiente del modelo; por eso se corrige el enunciado y se distinguen las alternativas iterativa, de prototipado y en espiral.', 'corregida'],
  [4780, ['100', '102'], ['IV-4'], ['gestión de configuración', 'elementos de configuración', 'línea base', 'control de cambios', 'ciclo de vida'], fuentes[4780], null,
    'Respuesta C. Las líneas base se establecen en hitos o eventos cuando los elementos de configuración alcanzan un estado revisado, estable y aprobado; pueden evolucionar durante el ciclo de vida y no existe una única fecha universal. Se precisa que se pregunta por establecer líneas base, no por identificar elementos de configuración, que puede empezar antes y continuar durante el ciclo.', 'corregida']
];

const edits = {
  4776: { texto: 'En la secuencia de actividades del proceso ASI de MÉTRICA v3, ¿qué actividad verifica y valida los modelos generados en las actividades anteriores?', opciones: ['Identificación de subsistemas de análisis.', 'Análisis de consistencia.', 'Definición de interfaces de usuario.', 'Análisis de casos de uso.'], respuesta_correcta: 1 },
  4777: { texto: 'En MÉTRICA v3, ¿qué nivel de prueba comprueba el correcto ensamblaje de distintos componentes o grupos de componentes?', opciones: ['Pruebas de comunicaciones.', 'Pruebas de rendimiento.', 'Pruebas de volumen.', 'Pruebas de integración.'], respuesta_correcta: 3 },
  4778: { texto: 'En programación orientada a objetos basada en clases, ¿qué mecanismo permite definir una subclase que reutiliza y especializa miembros heredados de una clase base?', opciones: ['Concurrencia.', 'Persistencia.', 'Encapsulación.', 'Herencia.'], respuesta_correcta: 3 },
  4779: { texto: '¿Qué rasgo caracteriza al modelo clásico en cascada frente a los modelos iterativos, de prototipado y en espiral?', opciones: ['Las fases se ejecutan secuencialmente, con criterios de transición entre ellas.', 'El sistema se desarrolla mediante ciclos evolutivos con entregas parciales.', 'Se construyen prototipos sucesivos para explorar o aclarar requisitos.', 'El desarrollo se organiza en ciclos que incluyen análisis explícito de riesgos.'], respuesta_correcta: 0 },
  4780: { texto: 'En gestión de configuración, ¿cuándo se establecen las líneas base aprobadas para controlar los cambios a medida que evoluciona el software?', opciones: ['Antes de iniciar el ciclo de vida, sin revisiones posteriores.', 'Únicamente al comenzar el ciclo de vida.', 'En hitos o eventos del ciclo de vida, cuando los elementos de configuración alcanzan un estado revisado y aprobado.', 'Únicamente al finalizar el ciclo de vida.'], respuesta_correcta: 2 }
};

aplicar({ numero: '891', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(repo, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-891.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4776: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'MÉTRICA v3 y análisis de sistemas, dentro del contenido A1-95; el manual PAe determina la secuencia de actividades.' },
  4777: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'sección 5.3, niveles de prueba (integración y sistema), vinculada a A1-96 y A2-D7; la distinción técnica se contrasta con MÉTRICA v3.' },
  4778: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'sección 6.1, conceptos de orientación a objetos: herencia como especialización y reutilización; Oracle documenta la semántica de subclase/superclase.' },
  4779: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'secciones 1.1 y 4.5, ciclo de vida y comparación de modelos predictivos e iterativos; NASA sustenta la secuencia del modelo en cascada.' },
  4780: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'sección 6.1, elementos de configuración y líneas base; NIST y CMS se citan para precisar que las bases se aprueban en momentos o hitos sucesivos, no en una sola fecha universal.' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const a = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy ubica el contenido en el temario; la fuente técnica citada determina la respuesta.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: change.id === 4776 || change.id === 4778 || change.id === 4779 ? academySystems : academyQuality, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo de ubicación curricular; no se utiliza como autoridad técnica.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(repo, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 891 preparados.');
