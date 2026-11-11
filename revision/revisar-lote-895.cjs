const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const paeMetric = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const itilGuide = 'https://www.nilc.co.uk/wp-content/uploads/2025/09/ITIL-4-Foundation_Quick-Reference-Guide_Digital.pdf';
const peoplecertProblem = 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil4-practices-problem-management-3688';
const ibmRup = 'https://public.dhe.ibm.com/software/rational/web/whitepapers/2003/systemsdevelopment.pdf';
const eicPathfinder = 'https://eic.ec.europa.eu/eic-funding-opportunities/eic-pathfinder_en?prefLang=es';
const eicFaq = 'https://eic.ec.europa.eu/eic-frequently-asked-questions/faqs-eic-pathfinder_en?prefLang=es';
const ifpugFpa = 'https://ifpug.org/ifpug-standards/fpa';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy41 = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';

const sources = {
  4796: [
    { url: itilGuide, referencia: 'ITIL 4 Foundation Quick Reference Guide, material de referencia con copyright de PeopleCert, alojado por el proveedor de formación National IT Learning Centre: glosario, known error = problema analizado pero aún no resuelto. La respuesta se acota explícitamente a ITIL 4.' },
    { url: peoplecertProblem, referencia: 'PeopleCert, práctica oficial ITIL 4 Problem Management: su propósito incluye identificar causas reales o potenciales y gestionar workarounds y known errors.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 106: gestión de servicios TIC y bases conceptuales de ITIL.' }
  ],
  4797: [
    { url: paeMetric, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información: incluye el DFD como técnica del análisis y el modelo de procesos en ASI 7; los procesos se detallan jerárquicamente mediante descomposición funcional y diagramas de nivel inferior.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 90: análisis dinámico, modelado de procesos.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: estrategias de determinación de requerimientos y análisis.' }
  ],
  4798: [
    { url: ibmRup, referencia: 'IBM Rational, Developing Large-Scale Systems with the Rational Unified Process: describe RUP como centrado en arquitectura y desarrollado de forma iterativa e incremental; las características se atribuyen al proceso, no únicamente a Booch y Rumbaugh.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: metodologías de desarrollo de sistemas.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.9: proceso unificado de software y análisis/diseño orientado a objetos.' }
  ],
  4799: [
    { url: eicPathfinder, referencia: 'Comisión Europea, EIC Pathfinder en Horizon Europe: investigación deep-tech en etapas iniciales, con TRL 1–4.' },
    { url: eicFaq, referencia: 'Comisión Europea, FAQ EIC Pathfinder: las actividades normalmente cubren TRL 1–4; las convocatorias pueden especificar rangos más estrechos.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 107: tecnologías emergentes, concepto, clasificación y aplicaciones; asociación temática, no atribución de financiación.' }
  ],
  4800: [
    { url: ifpugFpa, referencia: 'International Function Point Users Group (IFPUG), Function Point Analysis: Allan Albrecht desarrolló FPA para medir tamaño funcional de software; FPA mide funcionalidad requerida/proporcionada y no es una técnica de elicitación de requisitos.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: análisis funcional de sistemas.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: entrevistas, análisis y prototipos como estrategias de determinación de requisitos.' }
  ]
};

const records = [
  [4796, ['106'], [], ['ITIL 4', 'gestión de problemas', 'error conocido', 'known error'], sources[4796], null,
    'Respuesta A. En ITIL 4, un error conocido es un problema ya analizado que todavía no se ha resuelto. No es necesario que exista una solución provisional ni que la causa raíz esté completamente identificada; una workaround puede documentarse durante el análisis. Se delimita la pregunta a ITIL 4 porque las definiciones pueden variar entre ediciones.', 'corregida'],
  [4797, ['90'], ['III-3'], ['MÉTRICA v3', 'DFD', 'modelo de procesos', 'descomposición jerárquica'], sources[4797], null,
    'Respuesta A. En el análisis estructurado, los procesos se descomponen de forma jerárquica en diagramas de niveles inferiores, manteniendo la coherencia de las entradas y salidas entre niveles. Se reemplaza «partición», que podía entenderse como una operación equivalente, y se elimina «descomposición» sin precisar el sentido top-down.', 'corregida'],
  [4798, ['88'], ['III-9'], ['RUP', 'Proceso Unificado', 'casos de uso', 'arquitectura', 'iterativo', 'incremental'], sources[4798], null,
    'Respuesta A. El Rational Unified Process se caracteriza por estar guiado por casos de uso, centrado en la arquitectura y desarrollarse iterativa e incrementalmente. La atribución original solo a Grady Booch y James Rumbaugh era incompleta y confundía autores del modelado unificado con las características del proceso; se formula la pregunta sobre RUP.', 'corregida'],
  [4799, ['107'], [], ['TRL', 'EIC Pathfinder', 'Horizon Europe', 'tecnologías emergentes', 'I+D+i'], sources[4799], null,
    'Respuesta A. En el marco actual de Horizon Europe, EIC Pathfinder apoya investigación deep-tech en fases iniciales, normalmente entre TRL 1 y 4, con el objetivo de avanzar hacia prueba de concepto/validación. Se sustituye la afirmación general y obsoleta sobre financiación bajo Horizon 2020 por una pregunta delimitada a la convocatoria y programa actuales; los rangos de retos concretos pueden ser más estrechos.', 'corregida'],
  [4800, ['88'], ['III-3'], ['requisitos', 'elicitación', 'puntos de función', 'Albrecht', 'estimación funcional'], sources[4800], null,
    'Respuesta A. El análisis de puntos de función, desarrollado por Allan Albrecht, mide el tamaño funcional del software a partir de la funcionalidad requerida/proporcionada; no es una técnica para elicitar requisitos. Entrevistas, lluvia de ideas y prototipos sí pueden usarse para descubrir o aclarar requisitos. Se corrige además la grafía del apellido.', 'corregida']
];

const edits = {
  4796: { texto: 'Según ITIL 4, ¿qué es un error conocido (known error)?', opciones: [
    'Un problema que ha sido analizado, pero todavía no se ha resuelto.',
    'Un incidente resuelto cuya causa no ha sido registrada.',
    'Cualquier problema registrado, aunque aún no se haya analizado.',
    'Un problema cuya solución definitiva ya se ha implantado.'
  ], respuesta_correcta: 0 },
  4797: { texto: 'En el análisis estructurado con diagramas de flujo de datos, ¿cómo se obtiene un modelo de procesos con mayor nivel de detalle?', opciones: [
    'Descomponiendo jerárquicamente un proceso en subprocesos y manteniendo la coherencia de sus flujos de entrada y salida.',
    'Ordenando los procesos según el tiempo de ejecución, sin crear niveles de detalle.',
    'Asignando cada proceso a un servidor físico distinto.',
    'Sustituyendo los flujos de datos por relaciones de herencia entre clases.'
  ], respuesta_correcta: 0 },
  4798: { texto: '¿Qué conjunto de características describe el Rational Unified Process (RUP)?', opciones: [
    'Guiado por casos de uso, centrado en la arquitectura, iterativo e incremental.',
    'Secuencial en cascada, sin iteraciones y basado exclusivamente en procesos funcionales.',
    'Iterativo, pero sin arquitectura ni modelado de requisitos mediante casos de uso.',
    'Un proceso lineal que impide incorporar cambios después de la fase de análisis.'
  ], respuesta_correcta: 0 },
  4799: { texto: 'En Horizon Europe, ¿qué programa del Consejo Europeo de Innovación se orienta a investigación deep-tech temprana, normalmente en niveles TRL 1–4?', opciones: [
    'EIC Pathfinder.',
    'EIC Accelerator, dirigido principalmente a innovación y escalado próximos al mercado.',
    'EIC Transition, que parte de resultados de investigación más maduros y busca su validación y preparación para el mercado.',
    'Digital Europe, programa centrado en el despliegue de capacidades digitales.'
  ], respuesta_correcta: 0 },
  4800: { opciones: [
    'Método de puntos de función de Albrecht (Function Point Analysis).',
    'Brainstorming.',
    'Entrevistas.',
    'Prototipado.'
  ] }
};

aplicar({ numero: '895', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(repo, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-895.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4796: { bloque: 'bloque temático ITIL y COBIT', detalle: 'A1 tema 106: el índice incluye la gestión de problemas y la sección 4.3 desarrolla el análisis de problemas, errores conocidos y workarounds; cotejo temático, definición contrastada con el material oficial de ITIL 4.', url: academy41 },
  4797: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'sección 5.1, modelado de procesos con DFD; el documento lo relaciona con A2 D8, pero para esta clasificación se utiliza el programa oficial A2 III.3 y A1 tema 90.', url: academy38 },
  4798: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'sección 4.5, mapa comparativo de Scrum, Kanban, RUP y modelos clásicos; distingue las propiedades del proceso unificado.', url: academy38 },
  4799: { bloque: null, detalle: 'no se localizó cobertura de EIC Pathfinder o de TRL en los documentos ITIC Academy consultados para el bloque 38 y el bloque ITIL; se clasifica solo por el tema oficial A1 de tecnologías emergentes.', url: null },
  4800: { bloque: 'bloque 38 — análisis, diseño y construcción', detalle: 'el documento aborda estrategias de determinación de requisitos y técnicas de análisis; no menciona expresamente el método de puntos de función, cuya identificación como técnica de medición se basa en la referencia de IFPUG.', url: academy38 }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const a = academy[change.id];
  q.clasificacion.bloque_academia = a.bloque ? `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}` : `Cotejo ITIC Academy 2026.1: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} El material de academia sirve para ubicar el contenido, no sustituye la fuente técnica primaria.`;
  q.revision.observaciones += ` Cotejo curricular: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  if (a.url) q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo de ubicación/alcance curricular; no se usa como autoridad técnica primaria.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(repo, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y registro de lote 895 preparados.');
