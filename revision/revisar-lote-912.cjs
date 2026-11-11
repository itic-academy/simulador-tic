const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ley40 = 'https://www.boe.es/eli/es/l/2015/10/01/40/con';
const constitucion = 'https://www.boe.es/eli/es/c/1978/12/27/(1)/con';
const reglamentoCongreso = 'https://www.boe.es/eli/es/res/1982/02/24/(1)/con';
const metrica = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const dotnet = 'https://learn.microsoft.com/en-us/dotnet/standard/language-independence';
const ecma335 = 'https://ecma-international.org/publications-and-standards/standards/ecma-335/';
const topMan = 'https://man7.org/linux/man-pages/man1/top.1.html';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyConstitution = 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const academyBudget = 'https://docs.google.com/document/d/1Q27FpqRtIq26eYviXIP88A52-YnEJhEG/edit?usp=drivesdk';
const academySystemsAnalysis = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyDotnet = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academyOS = 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';

const sources = {
  4881: [
    { url: ley40, referencia: 'Ley 40/2015, artículo 5.3, texto consolidado BOE: para crear un órgano administrativo se exigen integración y dependencia jerárquica, delimitación de funciones y competencias, y dotación de créditos; las instrucciones y órdenes de servicio se regulan separadamente en el artículo 6.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico de las Administraciones públicas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.8: Ley 40/2015, de Régimen Jurídico del Sector Público.' }
  ],
  4882: [
    { url: constitucion, referencia: 'Constitución Española, artículo 134.6, texto consolidado BOE: exige la conformidad del Gobierno a las proposiciones o enmiendas que aumenten créditos o disminuyan los ingresos presupuestarios; no establece ese requisito para las que aumenten los ingresos.' },
    { url: reglamentoCongreso, referencia: 'Reglamento del Congreso de los Diputados, artículo 133, texto consolidado BOE: las enmiendas al proyecto presupuestario que supongan minoración de ingresos requieren conformidad del Gobierno; junto con el art. 134 CE delimita el supuesto y confirma que la opción sobre aumento de ingresos es falsa.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 1 (Cortes Generales) y tema 12 (Presupuestos Generales del Estado, ejecución y control).' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.2: atribuciones del Congreso de los Diputados y del Senado; correspondencia temática con la tramitación parlamentaria.' }
  ],
  4883: [
    { url: metrica, referencia: 'MÉTRICA v3, proceso Análisis del Sistema de Información (ASI): emplea diagramas de flujo de datos para modelar procesos y el movimiento de datos; el DFD es la opción orientada al flujo de datos frente al modelo E/R y los modelos de ciclo de vida de entidades.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 90: análisis dinámico y modelado de procesos; tema 95: metodología MÉTRICA.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.3: estrategias de determinación de requerimientos y análisis de sistemas.' }
  ],
  4884: [
    { url: dotnet, referencia: 'Microsoft Learn, independencia de lenguaje y componentes .NET: CLS es el conjunto de reglas comunes aplicables a los ensamblados; permite que los componentes expuestos mediante interfaces CLS-compliant sean consumibles desde lenguajes que soportan CLS. La conformidad afecta a la interfaz pública, no obliga a que toda implementación privada o lenguaje que ejecute sobre .NET use cada regla.' },
    { url: ecma335, referencia: 'ECMA-335, Common Language Infrastructure, partición I, cláusulas 7–11: especifica CLI y reglas de la Common Language Specification (CLS).' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.11: plataforma .NET, modelo de programación y servicios.' }
  ],
  4885: [
    { url: topMan, referencia: 'Manual de procps-ng top(1), Linux man-pages: top presenta una vista dinámica de los procesos o hilos gestionados por el kernel, además de información-resumen del sistema. La pregunta se limita expresamente a esta implementación porque el comportamiento y opciones pueden variar entre Unix.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 59 y 60: fundamentos de sistemas operativos y sistemas UNIX-LINUX.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.2: sistemas operativos Unix/Linux; y tema IV.1: administración del sistema operativo y software de base.' }
  ]
};

const records = [
  [4881, ['8'], ['I-8'], ['Ley 40/2015', 'órganos administrativos', 'artículo 5.3', 'instrucciones y órdenes de servicio', 'creación de órganos'], sources[4881], null,
    'Respuesta B. El artículo 5.3 de la Ley 40/2015 exige, para crear cualquier órgano administrativo, determinar su integración en la Administración y su dependencia jerárquica, delimitar sus funciones y competencias y dotarlo de créditos para su puesta en marcha y funcionamiento. La determinación de instrucciones u órdenes de servicio no es uno de esos requisitos: el artículo 6 regula cómo los órganos dirigen la actividad de sus unidades dependientes mediante ellas.', 'corregida'],
  [4882, ['1', '12'], ['I-2'], ['Constitución Española', 'artículo 134', 'Presupuestos Generales del Estado', 'Congreso de los Diputados', 'enmiendas presupuestarias', 'conformidad del Gobierno'], sources[4882], null,
    'La opción falsa es B. El artículo 134.6 CE exige conformidad del Gobierno para tramitar proposiciones o enmiendas que aumenten los créditos o disminuyan los ingresos presupuestarios; la opción invierte el segundo supuesto al referirse a un aumento de ingresos. En la tramitación del proyecto de Presupuestos se aplican las reglas parlamentarias con sus especialidades: tiene preferencia y las enmiendas que minoren ingresos requieren esa conformidad. Respuesta B.', 'corregida'],
  [4883, ['90', '95'], ['III-3'], ['análisis estructurado', 'diagrama de flujo de datos', 'DFD', 'MÉTRICA v3', 'modelado de procesos'], sources[4883], null,
    'Respuesta A. El diagrama de flujo de datos (DFD) representa procesos y el movimiento de datos entre procesos, almacenes y entidades externas; por eso es la técnica orientada al flujo de datos. El modelo entidad/relación se centra en datos y relaciones, y la historia de vida de las entidades en sus cambios a lo largo del tiempo. MÉTRICA v3 contempla DFD en el análisis del sistema.', 'corregida'],
  [4884, ['66'], ['III-11'], ['Microsoft .NET', 'Common Language Specification', 'CLS', 'interoperabilidad entre lenguajes', 'ECMA-335'], sources[4884], null,
    'Respuesta B, con precisión. La Common Language Specification (CLS) define reglas comunes de la infraestructura .NET que los componentes pueden respetar para favorecer su consumo desde otros lenguajes compatibles con CLS. No es el conjunto de clases del framework ni la especificación completa de .NET; la conformidad interesa especialmente a la interfaz pública del componente, no a toda la implementación privada.', 'corregida'],
  [4885, ['60'], ['II-2', 'IV-1'], ['Linux', 'procps-ng', 'top', 'procesos', 'monitorización del sistema'], sources[4885], null,
    'Respuesta C. En la implementación procps-ng de Linux, top ofrece una vista dinámica de los procesos o hilos gestionados por el kernel y puede mostrar también un resumen de recursos del sistema. Se acota el enunciado a Linux/procps-ng porque “UNIX” comprende variantes y herramientas que pueden diferir. No es un visor de ficheros abiertos, escritorio ni puertos TCP/IP.', 'corregida']
];

const edits = {
  4881: { texto: 'Según el artículo 5.3 de la Ley 40/2015, ¿cuál de los siguientes NO es un requisito exigido para crear cualquier órgano administrativo?', opciones: [
    'Dotarlo de los créditos necesarios para su puesta en marcha y funcionamiento.',
    'Determinar las instrucciones y órdenes de servicio con las que dirigirá las actividades de sus órganos jerárquicamente dependientes.',
    'Determinar su forma de integración en la Administración y su dependencia jerárquica.',
    'Delimitar sus funciones y competencias.'
  ], respuesta_correcta: 1 },
  4882: { texto: 'Señale la afirmación FALSA sobre la tramitación parlamentaria del proyecto de Ley de Presupuestos Generales del Estado:', opciones: [
    'Goza de preferencia en la tramitación sobre los demás trabajos de las Cámaras.',
    'Las enmiendas que supongan un aumento de los ingresos presupuestarios requieren la conformidad del Gobierno para su tramitación.',
    'Se tramita conforme al procedimiento legislativo con las especialidades presupuestarias previstas en la Constitución y los reglamentos parlamentarios.',
    'El debate de totalidad del proyecto tiene lugar en el Pleno del Congreso de los Diputados.'
  ], respuesta_correcta: 1 },
  4883: { texto: '¿Cuál de las siguientes técnicas de análisis representa principalmente el flujo de datos entre procesos, almacenes y entidades externas?', opciones: [
    'El diagrama de flujo de datos (DFD).',
    'El modelo entidad/relación (E/R) de Peter Chen.',
    'La historia de vida de las entidades (HVE).',
    'El diagrama de estructura de datos (DED).'
  ], respuesta_correcta: 0 },
  4884: { texto: '¿Qué describe correctamente la Common Language Specification (CLS) de .NET?', opciones: [
    'El conjunto de clases del entorno .NET que los programas deben utilizar.',
    'Un conjunto de reglas comunes para favorecer que los componentes .NET puedan consumirse desde lenguajes compatibles con CLS.',
    'La especificación completa del framework .NET.',
    'Ninguna de las anteriores.'
  ], respuesta_correcta: 1 },
  4885: { texto: 'En Linux, ¿qué muestra la utilidad top de procps-ng?', opciones: [
    'Los ficheros abiertos por cada proceso, exclusivamente.',
    'El escritorio y sus elementos.',
    'Una vista dinámica de los procesos o hilos y, opcionalmente, un resumen del sistema.',
    'Los puertos TCP/IP en escucha.'
  ], respuesta_correcta: 2 }
};

aplicar({ numero: '912', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-912.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4881: [academyAdmin, 'ITIC Academy 2026, bloque 03 de Actuación Administrativa: cubre el régimen de los órganos y las Leyes 39/2015 y 40/2015; el artículo 5.3 separa los requisitos de creación de órganos de las instrucciones reguladas en el artículo 6.'],
  4882: [[academyConstitution, academyBudget], 'ITIC Academy 2026, bloque 01 de Constitución/AGE y tema 012 de Presupuestos: contextualizan las atribuciones parlamentarias y la elaboración/tramitación presupuestaria; la regla exacta sobre enmiendas se comprueba en la Constitución y los reglamentos oficiales.'],
  4883: [academySystemsAnalysis, 'ITIC Academy 2026, tema A1 90 y material de análisis, diseño y construcción de sistemas: desarrolla el DFD como técnica de modelado de procesos y flujo de información, incluyendo su uso en MÉTRICA v3.'],
  4884: [academyDotnet, 'ITIC Academy 2026, material de tecnologías de sistemas de información A1 66/A2 III.11: distingue CLR, CIL, CTS y CLS y explica CLS como subconjunto de reglas para interoperabilidad de componentes .NET.'],
  4885: [academyOS, 'ITIC Academy 2026, bloque de sistemas operativos A1 59–62: incluye sistemas Unix/Linux y herramientas de monitorización como top; la descripción precisa se verifica en el manual de procps-ng.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [urls, detail] = academy[change.id];
  const academyUrls = Array.isArray(urls) ? urls : [urls];
  q.clasificacion.bloque_academia = `${detail} El material de academia se usa como cotejo curricular, no como fuente jurídica o especificación primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} La conclusión se contrasta con las fuentes primarias citadas.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  for (const url of academyUrls) q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 912.');
