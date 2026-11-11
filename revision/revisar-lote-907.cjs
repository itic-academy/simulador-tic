const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const metricAnalisis = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const pmiLifeCycles = 'https://www.pmi.org/learning/library/matching-software-development-life-cycles-project-environment-7961';
const agileMethods = 'https://agilemanifesto.org/principles';
const mitFanout = 'https://ocw.mit.edu/courses/16-355j-software-engineering-concepts-fall-2005/2595db843b206fcaa30fc563a3c1db94_cnotes7.pdf';
const testlink = 'https://github.com/TestLinkOpenSourceTRMS/testlink-code';
const iso9241 = 'https://www.iso.org/standard/63500.html';

const sources = {
  4856: [
    { url: metricAnalisis, referencia: 'MÉTRICA v3, Análisis del Sistema de Información: la tarea ASI 2.2 Especificación de Casos de Uso tiene como objetivo especificar cada caso de uso y produce la especificación correspondiente; es obligatoria en OO y opcional como apoyo a requisitos en análisis estructurado.' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf', referencia: 'MÉTRICA v3, Diseño del Sistema de Información: arquitectura, optimización física y pruebas unitarias pertenecen a procesos/tareas distintos; el diseño contempla módulos y diseño físico.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: determinación de requerimientos, análisis y especificación de requisitos.' }
  ],
  4857: [
    { url: pmiLifeCycles, referencia: 'PMI, Matching Software Development Life Cycles to Project Environment: los ciclos adaptativos permiten entregar resultados tangibles en iteraciones e incorporar cambios; cuando se elige un ciclo incremental y se prioriza alcance con los interesados, puede ponerse antes en uso funcionalidad prioritaria sin afirmar que el modelo haga posibles todos los requisitos con recursos insuficientes.' },
    { url: agileMethods, referencia: 'Principios del Manifiesto Ágil: entrega frecuente de software funcionando y bienvenida al cambio; una entrega incremental requiere priorizar el alcance si fecha y recursos son restricciones.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 86: modelos del ciclo de vida; tema 88: metodologías de desarrollo y ágiles.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.1: fases y modelos del ciclo de vida; tema III.2: gestión y planificación del desarrollo.' }
  ],
  4858: [
    { url: mitFanout, referencia: 'MIT OpenCourseWare, Software Design Metrics: fan-out es el número de módulos a los que llama directamente un módulo; fan-in es el número de módulos que lo llaman.' },
    { url: academy38, referencia: 'ITIC Academy 2026.1, bloque 38, diseño estructurado/diagramas de estructura: define fan-in como módulos que invocan al módulo y fan-out como módulos directamente controlados.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos, UML y patrones de diseño.' }
  ],
  4859: [
    { url: testlink, referencia: 'Repositorio oficial TestLinkOpenSourceTRMS: el proyecto se describe como Test & Requirement Management System; gestiona planes de prueba, casos de prueba y relación/trazabilidad con requisitos.' },
    { url: 'https://testlink.org/', referencia: 'Sitio del proyecto TestLink: lo identifica como sistema de gestión de pruebas de código abierto.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 96: pruebas, niveles, técnicas y herramientas de pruebas de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.7: planificación y documentación de pruebas de software.' }
  ],
  4860: [
    { url: iso9241, referencia: 'ISO 9241-11:2018, definición vigente de usabilidad y eficacia: exactitud y completitud con que los usuarios alcanzan objetivos especificados; la eficacia se considera en un contexto de uso.' },
    { url: 'https://csrc.nist.gov/glossary/term/effectiveness', referencia: 'NIST CSRC Glossary, definición procedente de ISO 9241-11: eficacia como exactitud y completitud con que los usuarios logran objetivos especificados.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 98: métricas y evaluación de calidad del software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.13: calidad del software y su medida, modelos, métricas, normas y estándares.' }
  ]
};

const records = [
  [4856, ['95'], ['III-3'], ['MÉTRICA v3', 'ASI', 'casos de uso', 'análisis de sistemas'], sources[4856], null,
    'Respuesta B. En MÉTRICA v3, ASI 2.2 es Especificación de Casos de Uso: concreta los escenarios identificados y produce una especificación. La arquitectura se acepta/diseña en el proceso de diseño; la optimización física del modelo y la ejecución de pruebas unitarias no son tareas de ASI.', 'corregida'],
  [4857, ['86', '88'], ['III-1', 'III-2'], ['ciclo incremental', 'priorización', 'fecha fija', 'entregas funcionales'], sources[4857], null,
    'Respuesta C, con una condición que el original no explicitaba: el enfoque incremental permite acordar prioridades y entregar primero un subconjunto funcional, incorporando el resto en incrementos posteriores. Ningún modelo convierte en viable cumplir íntegramente un alcance imposible con recursos y fecha inamovibles; si todos los requisitos son obligatorios, hay que renegociar alcance, fecha o recursos.', 'corregida'],
  [4858, ['93'], ['III-9'], ['fan-out', 'métricas de diseño', 'módulos llamados', 'acoplamiento'], sources[4858], null,
    'Respuesta B. El fan-out de un módulo cuenta sus subordinados inmediatos: los módulos que invoca o controla directamente. El fan-in cuenta los módulos que llaman al módulo analizado. Son recuentos estructurales; un fan-out alto puede aumentar complejidad, pero no define por sí solo una calidad global.', 'corregida'],
  [4859, ['96'], ['III-7'], ['TestLink', 'gestión de pruebas', 'casos de prueba', 'trazabilidad de requisitos'], sources[4859], null,
    'Respuesta C. TestLink es un sistema de gestión de pruebas: permite organizar especificaciones/casos y planes de prueba, registrar ejecuciones y enlazar pruebas con requisitos para trazabilidad. No es una herramienta de desarrollo de interfaces ni de gestión de configuración de software.', 'corregida'],
  [4860, ['98'], ['III-13'], ['eficacia', 'usabilidad', 'objetivos de usuario', 'ISO 9241-11'], sources[4860], null,
    'Respuesta C. En la evaluación de usabilidad, eficacia es la exactitud y completitud con que usuarios especificados alcanzan objetivos especificados en un contexto de uso. Eficiencia relaciona los resultados alcanzados con los recursos empleados; no es sinónimo de eficacia.', 'corregida']
];

const edits = {
  4856: { texto: 'En MÉTRICA v3, ¿qué tarea pertenece al proceso Análisis del Sistema de Información (ASI)?', opciones: [
    'Aceptar la arquitectura física del sistema.',
    'Especificar los casos de uso identificados y sus escenarios.',
    'Optimizar el modelo físico de datos.',
    'Ejecutar las pruebas unitarias del software.'
  ], respuesta_correcta: 1 },
  4857: { texto: 'La fecha de una primera entrega funcional es fija y los recursos no permiten desarrollar de una vez todo el alcance. Si los interesados pueden priorizar requisitos y aceptar que parte de la funcionalidad llegue después, ¿qué enfoque facilita entregar primero un subconjunto útil y completarlo en versiones sucesivas?', opciones: [
    'Prototipación desechable, que no produce necesariamente software operativo.',
    'Cascada, que planifica el alcance completo antes de construir y concentra la entrega al final.',
    'Desarrollo incremental, priorizando y entregando funcionalidad en incrementos acordados.',
    'Espiral WIN-WIN, que elimina la necesidad de negociar alcance o recursos.'
  ], respuesta_correcta: 2 },
  4858: { texto: 'En las métricas de diseño estructurado, ¿qué cuenta el fan-out de un módulo?', opciones: [
    'El número de módulos que llaman directamente al módulo analizado.',
    'El número de módulos subordinados que el módulo analizado invoca directamente.',
    'El grado de absorción de requisitos del sistema.',
    'El número de módulos superiores que invocan al módulo analizado.'
  ], respuesta_correcta: 1 },
  4859: { texto: '¿Cuál describe correctamente TestLink?', opciones: [
    'Una herramienta para diseñar gráficamente interfaces de usuario.',
    'Una herramienta de gestión de configuración y versiones del código fuente.',
    'Un sistema de gestión de pruebas que organiza casos y planes y permite relacionar pruebas con requisitos.',
    'Un compilador para generar automáticamente código de pruebas unitarias.'
  ], respuesta_correcta: 2 },
  4860: { texto: 'Según ISO 9241-11, en evaluación de usabilidad, ¿cómo se denomina la exactitud y completitud con que usuarios especificados alcanzan objetivos especificados en un contexto de uso?', opciones: [
    'Eficiencia.',
    'Correspondencia.',
    'Eficacia.',
    'Capacidad.'
  ], respuesta_correcta: 2 }
};

aplicar({ numero: '907', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-907.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4856: 'bloque 38, mapa oficial cita MÉTRICA v3 y cubre análisis/requisitos, pero no aparecieron los rótulos ASI 2.2 ni la lista de tareas de MÉTRICA en el material textual consultado; se marca alineación temática, no cobertura directa de la pregunta.',
  4857: 'bloque 38, ciclo de vida y modelos predictivos, iterativos e incrementales; el material explica el valor de entregas e iteraciones, no promete resolver restricciones imposibles de alcance/fecha/recursos.',
  4858: 'bloque 38, diseño estructurado, diagramas de estructura de Constantine y definición directa de fan-in/fan-out.',
  4859: 'el texto del bloque 38 no menciona TestLink por nombre; el tema se alinea con A1 pruebas/herramientas y A2 planificación/documentación de pruebas, pero no se afirma cobertura del producto específico.',
  4860: 'bloque 38, sección de usabilidad/interacción, incluye eficacia, eficiencia, errores y experiencia en tareas; la definición normativa se fundamenta en ISO 9241-11, no en el material de academia.'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, bloque 38: ${detail} Cotejo curricular, no fuente técnica primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} El material de academia no sustituye la normativa/fuente técnica citada.`;
  q.revision.observaciones += ` Cotejo curricular ITIC Academy: ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy38, referencia: `ITIC Academy 2026.1, bloque 38: ${detail} Cotejo temático.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 907.');
