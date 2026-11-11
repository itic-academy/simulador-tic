const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metricaTech = 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf';
const metricaOverview = 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3';
const jmeter = 'https://jmeter.apache.org/';
const git = 'https://git-scm.com/about';
const subversion = 'https://subversion.apache.org/';
const whatwg = 'https://html.spec.whatwg.org/';
const mdnHtml = 'https://developer.mozilla.org/en-US/docs/Web/HTML';
const asq = 'https://asq.org/quality-resources/brainstorming';
const academy50 = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const sources = {
  4821: [
    { url: whatwg, referencia: 'WHATWG HTML Living Standard: si el documento se transmite con tipo MIME text/html, el navegador lo procesa como documento HTML; la pregunta revisada se limita expresamente a ese caso de publicación.' },
    { url: metricaOverview, referencia: 'PAe, portal oficial de MÉTRICA v3: referencia contextual de metodología; no define un formato universal para todos los gestores de contenido.' },
    { url: academy50, referencia: 'ITIC Academy 2026.1, bloque 50, sección 6.2: clasifica los CMS por tipo (web, portal, headless) y diferencia CMS de formatos de sindicación; evidencia curricular de que la pregunta requiere especificar plataforma o función.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 104: tecnologías CMS/DMS y gestión de contenidos.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema II.16: sistemas de gestión documental y de contenidos y sindicación.' }
  ],
  4822: [
    { url: metricaOverview, referencia: 'PAe, portal oficial de MÉTRICA v3: incluye y publica la guía de Técnicas y Prácticas de la metodología.' },
    { url: metricaTech, referencia: 'MÉTRICA v3, Técnicas y Prácticas, “Diagrama de Estructura”, pp. 23–24: módulos, conexiones, parámetros (de control o datos), módulo predefinido, almacén de datos y dispositivo físico.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, temas 93 (técnicas de diseño) y 95 (MÉTRICA).' }
  ],
  4823: [
    { url: jmeter, referencia: 'Apache JMeter, sitio oficial: aplicación para pruebas de carga del comportamiento funcional y medición de rendimiento; no es un sistema de control de versiones.' },
    { url: git, referencia: 'Git, documentación oficial: sistema distribuido de control de versiones.' },
    { url: subversion, referencia: 'Apache Subversion, proyecto oficial: sistema de control de versiones.' },
    { url: 'https://help.launchpad.net/Code', referencia: 'Launchpad Code, ayuda oficial: identifica Bazaar como sistema distribuido de control de versiones.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, temas 100 y 102: gestión de configuración y versiones.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema IV.4: gestión de configuración, cambios y versiones.' }
  ],
  4824: [
    { url: metricaOverview, referencia: 'PAe, portal oficial de MÉTRICA v3: metodología aplicable al análisis estructurado y modelado de procesos.' },
    { url: metricaTech, referencia: 'MÉTRICA v3, Técnicas y Prácticas, “Diagrama de Flujo de Datos”, pp. 34–35: el diagrama de contexto (nivel 0) delimita el sistema con un único proceso, entidades externas y flujos de datos.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 90: modelado de procesos; tema 95: MÉTRICA.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: análisis y especificación de requisitos.' }
  ],
  4825: [
    { url: asq, referencia: 'ASQ, Quality Resources, Brainstorming: las reglas del método incluyen no criticar/evaluar durante la generación, buscar cantidad, acoger ideas inusuales y combinar/construir sobre ideas existentes.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: análisis funcional y estrategias/metodologías de desarrollo; se vincula al repertorio de técnicas de elicitación.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: estrategias de determinación de requerimientos.' }
  ]
};

const records = [
  [4821, ['77', '104'], ['II-9', 'II-16'], ['CMS', 'gestión de contenidos', 'HTML', 'XML', 'sindicación', 'text/html'], sources[4821], null,
    'Respuesta C. El enunciado original preguntaba por el formato “más utilizado” en todos los CMS, sin especificar plataforma ni distinguir almacenamiento, sindicación y presentación. Se acota al caso verificable: cuando un CMS publica una página como documento con tipo MIME text/html, el navegador la procesa en sintaxis HTML. XML puede emplearse para contenido estructurado o feeds, pero no es una respuesta universal sobre CMS.', 'corregida'],
  [4822, ['93', '95'], [], ['MÉTRICA v3', 'diagrama de estructura', 'módulos', 'parámetros', 'diseño estructurado'], sources[4822], null,
    'Respuesta C. MÉTRICA v3 representa el diagrama de estructura como un árbol modular: incluye módulos, conexiones y parámetros (que pueden ser de control o de datos), además de elementos opcionales como módulo predefinido, almacén de datos y dispositivo físico. La opción C enumera esta familia de elementos; las otras mezclan notación DFD o UML. Se cita la edición concreta de MÉTRICA v3.', 'corregida'],
  [4823, ['100', '102'], ['IV-4'], ['control de versiones', 'Git', 'Subversion', 'Bazaar', 'Apache JMeter', 'pruebas de carga'], sources[4823], null,
    'Respuesta C. Git, Subversion (SVN) y Bazaar son sistemas de control de versiones; Apache JMeter se utiliza para pruebas de carga y medición de rendimiento. Se corrige la marca a “Apache JMeter” y se formula la categoría técnica de la herramienta para que la exclusión no dependa de versiones concretas.', 'corregida'],
  [4824, ['90', '95'], ['III-3'], ['DFD', 'diagrama de contexto', 'nivel 0', 'MÉTRICA v3', 'entidades externas'], sources[4824], null,
    'Respuesta B. En MÉTRICA v3, el diagrama de contexto es el DFD de nivel 0: representa el sistema como un único proceso, sus entidades externas y los flujos de datos que cruzan el límite del sistema. El diagrama 0 (nivel 1) ya descompone ese proceso en procesos principales. Se hace explícita esta convención de numeración de MÉTRICA.', 'corregida'],
  [4825, ['88'], ['III-3'], ['brainstorming', 'lluvia de ideas', 'elicitación de requisitos', 'generación de ideas'], sources[4825], null,
    'Respuesta B. Durante la generación de ideas en brainstorming se difiere la evaluación, se busca cantidad, se admiten ideas poco convencionales y se permite combinar o desarrollar ideas ajenas. “Ser convencional” contradice la invitación a explorar ideas inusuales. Se corrige la grafía y se precisa que la regla se aplica a la fase generativa, antes de evaluar y seleccionar propuestas.', 'corregida']
];

const edits = {
  4821: { texto: 'Cuando un CMS entrega al navegador una página publicada con el tipo MIME text/html, ¿en qué lenguaje de marcado se procesa el documento?', opciones: [
    'HTTP, que es el protocolo de transporte y comunicación web.',
    'CSS, que define principalmente la presentación visual.',
    'HTML, que estructura el documento que interpreta el navegador.',
    'XML, que puede usarse para datos estructurados, pero no es la sintaxis indicada por el tipo MIME text/html.'
  ], respuesta_correcta: 2 },
  4822: { texto: 'Según MÉTRICA v3, ¿qué conjunto corresponde a elementos que pueden aparecer en un diagrama de estructura?', opciones: [
    'Nodo, conexión, flujo de datos, almacén de datos y dispositivo físico.',
    'Módulo, componente UML, interfaz, paquete y relación de dependencia.',
    'Módulo, conexión, parámetro, módulo predefinido, almacén de datos y dispositivo físico.',
    'Entidad externa, proceso, almacén de datos y flujo de datos.'
  ], respuesta_correcta: 2 },
  4823: { texto: '¿Cuál de estas herramientas no es un sistema de control de versiones de código fuente?', opciones: [
    'Git.',
    'Apache Subversion (SVN).',
    'Apache JMeter.',
    'Bazaar.'
  ], respuesta_correcta: 2 },
  4824: { texto: 'Según la terminología de modelado de procesos de MÉTRICA v3, ¿qué DFD de nivel 0 representa el sistema como un único proceso, junto con las entidades externas y sus flujos de datos?', opciones: [
    'El diagrama de bloques.',
    'El diagrama de contexto.',
    'El diagrama 0 (nivel 1), que descompone el sistema en procesos principales.',
    'El diagrama básico.'
  ], respuesta_correcta: 1 },
  4825: { texto: '¿Cuál de estas pautas NO corresponde a la fase de generación de ideas de una sesión de brainstorming?', opciones: [
    'Aplazar la crítica y evaluación de las propuestas.',
    'Limitarse a ideas convencionales y evitar propuestas inusuales.',
    'Buscar una gran cantidad de ideas.',
    'Combinar o desarrollar ideas propuestas por otras personas.'
  ], respuesta_correcta: 1 }
};

aplicar({ numero: '900', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-900.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4821: ['bloque 50 — videoconferencia, SSO y trabajo colaborativo; sección 6.2, CMS y sección 6.3, sindicación. La academia distingue distintos tipos de CMS y los formatos de feed, pero no respalda una única respuesta universal sobre su almacenamiento/publicación.', academy50],
  4822: ['bloque 38 — análisis, diseño y construcción; MÉTRICA v3 y técnicas de diseño estructurado.', academy38],
  4823: ['bloque 38 — análisis, diseño y construcción; sección 11.2, herramientas CASE e ingeniería de software. El contenido no se atribuye a ese bloque como cobertura exhaustiva de Git/SVN/Bazaar.', academy38],
  4824: ['bloque 38 — análisis, diseño y construcción; sección 5.1, DFD y análisis estructurado.', academy38],
  4825: ['bloque 38 — análisis, diseño y construcción; sección 2.2, estrategias de determinación de requerimientos y técnicas de ideación.', academy38]
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [detail, url] = academy[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${detail} El cotejo ubica el contenido, no sustituye fuentes técnicas.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} La academia se emplea como mapa curricular, no como autoridad técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ${detail} La academia se emplea como mapa curricular, no como autoridad técnica.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy 2026.1, ${detail} Cotejo de cobertura curricular; no se usa para validar la respuesta.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido a las preguntas del lote 900.');
