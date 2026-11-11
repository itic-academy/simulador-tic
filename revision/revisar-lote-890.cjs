const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyEmerging = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyRecords = 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const academyMetric = 'https://docs.google.com/document/d/1ihmfO0PXn1lenLrjgS3SmP0xg01CLnS0/edit?usp=drivesdk';
const academyInvestment = 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const academyDb = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';

const moreq = 'https://interoperable-europe.ec.europa.eu/collection/eu-semantic-interoperability-catalogue/solution/moreq2';
const metrica = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ada7d91fa-d6bd-467c-be32-a72e27c603b3/METRICA_V3_Tecnicas.pdf';
const book = 'https://www.pearson.com/en-ca/subject-catalog/p/design-patterns-elements-of-reusable-object-oriented-software/P200000009480/9780201633610';
const bridgeText = 'https://www.javier8a.com/itc/bd1/articulo.pdf';
const nasa = 'https://esto.nasa.gov/trl/';
const oracle = 'https://docs.oracle.com/en/database/oracle/oracle-database/19/dwhsg/data-warehouse-logical-design.html';

const fuentes = {
  4771: [
    { url: book, referencia: 'Gamma, Helm, Johnson y Vlissides, Design Patterns: Elements of Reusable Object-Oriented Software, Addison-Wesley, 1994; ficha editorial de Pearson. El patrón Bridge aparece en el capítulo de patrones estructurales.' },
    { url: bridgeText, referencia: 'Texto de Bridge en la obra GoF, sección Intent y capítulo 4: separar abstracción e implementación para que puedan variar independientemente; distingue Bridge de Adapter.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas y patrones de diseño de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis/diseño orientado a objetos y patrones.' }
  ],
  4772: [
    { url: nasa, referencia: 'NASA Earth Science and Technology Office, Technology Readiness Levels: la escala NASA tiene nueve niveles; TRL 9 es un sistema real probado en operaciones de misión exitosas.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 107: tecnologías emergentes, clasificación y aplicaciones.' }
  ],
  4773: [
    { url: moreq, referencia: 'Comisión Europea, Interoperable Europe Portal, MoReq2: MoReq es un modelo de requisitos para sistemas de gestión de registros electrónicos; el programa IDA encargó el modelo original, publicado en 2001; MoReq2 se publicó en 2008 y MoReq2010 en 2011. La distribución consultada está archivada, por lo que se trata como contenido histórico.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 104: gestión documental y sistemas DMS.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.16: sistemas de gestión documental y de contenidos.' }
  ],
  4774: [
    { url: metrica, referencia: 'MÉTRICA v3, Técnicas y Prácticas, apartado «Análisis Coste/Beneficio»: estima los costes previstos y los compara con beneficios esperados; también orienta a valorar oportunidad, seleccionar alternativas y estimar recursos.' },
    { url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias', referencia: 'Portal PAe, Metodologías y Guías: MÉTRICA v3 figura como metodología oficial de ciclo de vida de sistemas de información.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.15: evaluación de alternativas, viabilidad y control de costes.' }
  ],
  4775: [
    { url: oracle, referencia: 'Oracle Database Data Warehousing Guide, diseño lógico, apartado Denormalization: la normalización puede implicar numerosas uniones y penalizaciones de rendimiento; una desnormalización sensata puede simplificar consultas analíticas.' },
    { url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/tgdba/designing-and-developing-for-performance.html', referencia: 'Oracle Database Performance Tuning Guide: admite desnormalización selectiva para mejorar el rendimiento de transacciones concretas; no la presenta como eliminación de redundancia.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 64: modelo relacional, SQL y bases de datos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.4: normalización y diseño lógico/físico de bases de datos.' }
  ]
};

const registros = [
  [4771, ['93'], ['III-9'], ['Bridge', 'GoF', 'patrones estructurales', 'abstracción', 'implementación'], fuentes[4771], null,
    'Respuesta C. La intención canónica de Bridge es desacoplar una abstracción de su implementación para que ambas varíen independientemente. GoF distingue este propósito del de Adapter, que adapta una interfaz ya existente.', 'vigente'],
  [4772, ['107'], [], ['NASA', 'TRL', 'madurez tecnológica', 'TRL 9', 'tecnologías emergentes'], fuentes[4772], null,
    'Respuesta A. Se acota la pregunta a la escala de nueve niveles de NASA: TRL 9 significa que el sistema real está probado mediante operaciones de misión exitosas. No se extiende esta numeración a cualquier escala TRL; la convocatoria A2 no tiene un epígrafe específico sobre TRL que permita forzar otra correspondencia.', 'corregida'],
  [4773, ['104'], ['II-16'], ['MoReq', 'MoReq2', 'IDA', 'gestión documental', 'ERMS'], fuentes[4773], null,
    'Respuesta A. MoReq2 es un conjunto de requisitos funcionales y técnicos para sistemas de gestión de registros electrónicos. La Comisión Europea indica que IDA encargó el MoReq original (publicado en 2001), que MoReq2 se publicó en 2008 y que MoReq2010 apareció en 2011. La pregunta original mezclaba versiones y afirmaba sin alcance que MoReq no era gratuito; se reemplaza por una pregunta acotada a hechos identificables. La copia consultada de MoReq2 figura archivada, así que el reactivo se conserva como histórico.', 'historica'],
  [4774, ['95'], ['II-15'], ['MÉTRICA v3', 'análisis coste-beneficio', 'EVS', 'viabilidad', 'costes previstos', 'beneficios esperados'], fuentes[4774], null,
    'Respuesta D. La guía de MÉTRICA v3 define como objetivo fundamental estimar los costes del proyecto y compararlos con los beneficios esperados; esa evaluación ayuda a decidir la oportunidad, escoger alternativas y calcular recursos. Se cambia el enunciado y las opciones para aislar el objetivo sin confundirlo con pasos o métodos particulares de viabilidad.', 'corregida'],
  [4775, ['64'], ['III-4'], ['bases de datos', 'normalización', 'desnormalización', 'rendimiento', 'redundancia controlada'], fuentes[4775], null,
    'Respuesta A. La desnormalización selectiva puede reducir uniones o simplificar consultas y mejorar su rendimiento. Introduce redundancia potencial y exige preservar coherencia; no evita redundancia ni sustituye la normalización del diseño lógico sin justificación.', 'corregida']
];

const ediciones = {
  4771: {},
  4772: { texto: 'Según la escala NASA de nueve niveles de madurez tecnológica (TRL), ¿qué nivel corresponde a un sistema real probado mediante operaciones de misión exitosas?', opciones: ['TRL 9', 'TRL 10', 'TRL 11', 'TRL 6'], respuesta_correcta: 0 },
  4773: { texto: '¿Qué programa de la Comisión Europea encargó desarrollar el modelo de requisitos MoReq original para sistemas de gestión de registros electrónicos?', opciones: ['IDA (Interchange of Data between Administrations).', 'ISA² (Interoperability solutions for public administrations).', 'El programa de certificación de DLM Forum.', 'El programa eEurope 2020.'], respuesta_correcta: 0 },
  4774: { texto: '¿Cuál es el objetivo fundamental de la técnica de análisis coste/beneficio de MÉTRICA v3?', opciones: ['Determinar por sí sola la aceptación jurídica, técnica y operativa de una alternativa.', 'Comparar únicamente los costes iniciales de adquisición de hardware y software.', 'Sustituir la valoración de alternativas de EVS por un cálculo del retorno de la inversión.', 'Estimar los costes previstos del proyecto y compararlos con los beneficios esperados.'], respuesta_correcta: 3 },
  4775: { texto: '¿Cuál es una motivación habitual de la desnormalización selectiva tras normalizar el modelo, especialmente en consultas con numerosas uniones?', opciones: ['Mejorar el rendimiento de determinadas consultas.', 'Eliminar toda redundancia de datos.', 'Garantizar por sí sola la integridad de los datos.', 'Facilitar necesariamente el uso de la base de datos al usuario final.'], respuesta_correcta: 0 }
};

aplicar({ numero: '890', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-890.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4771: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'sección 9.4, patrones GoF, incluida en el tema A1-93; GoF es la fuente de la definición de Bridge.', url: academySystems },
  4772: { bloque: 'Bloque 30 — tecnologías de sistemas de información', detalle: 'sección 15, clasificación y aplicaciones de tecnologías emergentes (A1-107); el documento no se usa para definir la escala NASA.', url: academyEmerging },
  4773: { bloque: 'Bloque 40 — gestión documental', detalle: 'cotejo curricular con gestión electrónica de registros y sistemas DMS; la Comisión Europea fundamenta la cronología y el encargo de MoReq.', url: academyRecords },
  4774: { bloque: 'Tema 093 — MÉTRICA v3 y Bloque 17 — adquisición y rentabilidad de inversiones', detalle: 'el tema recorre EVS y la técnica de análisis coste/beneficio; el bloque 17 sitúa la evaluación económica. La definición y el objetivo se contrastan en la guía de MÉTRICA v3.', url: academyMetric },
  4775: { bloque: 'Bloque 29 — bases de datos, SQL y modelado de datos', detalle: 'sección 3.6, desnormalización consciente: redundancia controlada o estructuras derivadas por rendimiento después de un modelo lógico coherente.', url: academyDb }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academy[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy ubica los contenidos, no sustituye la fuente técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo de ubicación curricular; no se usa como autoridad técnica.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 890 preparados.');
