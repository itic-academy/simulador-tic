const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const ids = [11, 31, 32, 38, 48, 52];
const byId = new Map(bank.preguntas.map(q => [q.id, q]));
const previous = {};
for (const id of ids) {
  const q = byId.get(id);
  if (!q || !q.revision?.estado?.startsWith('pendiente_')) throw new Error(`La pregunta ${id} no está pendiente`);
  previous[id] = structuredClone(q);
}

const drive = id => `https://drive.google.com/file/d/${id}/view?usp=drivesdk`;
const academy7 = drive('11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2');
const academy15 = drive('1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW');
const academy38 = drive('1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN');
const academyLabel = (block, name, version, date, sections) =>
  `ITIC Academy, bloque ${block} ${name}, ${version} (${date}), ${sections}. Correspondencia oficial contrastada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2); la academia orienta el encaje, no sustituye las fuentes primarias.`;
const source = (url, referencia) => ({ url, referencia });
const setReview = (q, estado, fuentes, observaciones) => {
  q.revision = { estado, fecha: '2026-10-27', fuentes, observaciones };
};

{
  const q = byId.get(11);
  const academy = academyLabel(7, 'Dirección pública, empleo, transparencia y unidad de mercado', 'versión 2026.2', '01-10-2026', 'apartados 1 y 4 (función gerencial y management público; A1-20/A1-23)');
  q.texto = 'En el triángulo estratégico de Mark H. Moore para la gestión pública, ¿qué tres elementos deben alinearse?';
  q.opciones = [
    'Valor público, legitimidad y apoyo, y capacidad operativa.',
    'Misión, visión y valores de la organización.',
    'Nueva gestión pública, gobernanza y privatización.',
    'Liderazgo, participación y negociación.'
  ];
  q.respuesta_correcta = 0;
  q.comentarios = `Moore articula el triángulo estratégico alrededor del valor público que se pretende crear, la legitimidad y el apoyo del entorno autorizador y la capacidad operativa para ejecutarlo. La pregunta original no delimitaba qué significaban las «técnicas de dirección más importantes» y no permitía atribuir una respuesta única; se conserva en el historial como original y se sustituye por una formulación comprobable. Cotejo con el programa de ITIC Academy: ${academy}`;
  q.clasificacion.bloque_academia = academy;
  q.clasificacion.nota = academy;
  q.etiquetas = [...new Set([...q.etiquetas, 'valor-publico', 'triangulo-estrategico'])];
  setReview(q, 'corregida', [
    source('https://www.hks.harvard.edu/centers/mrcbg/programs/growthpolicy/creating-public-value', 'Harvard Kennedy School, Mark H. Moore, On Creating Public Value (Working Paper 3): presenta el triángulo estratégico de gestión pública.'),
    source('https://cityleadership.harvard.edu/wp-content/uploads/2024/10/BHCLI_Concept-Note_PV-Toolkit.pdf', 'Bloomberg Harvard City Leadership Initiative, Creating Public Value: Concept Note, rev. 09/2024, § The Strategic Triangle as a Diagnostic Tool: identifica public value, operational capacity y legitimacy & support.'),
    source(academy7, `ITIC Academy, bloque 7, versión 2026.2 (01-10-2026), apartados 1 y 4; temario A1-20 y A1-23. ${academy}`)
  ], 'Reformulada tras comprobar el modelo de Moore: la expresión original «técnicas más importantes» no era una categoría definitoria del autor.');
}

{
  const q = byId.get(31);
  const academy = academyLabel(38, 'Análisis, diseño y construcción de sistemas de información', 'versión 2026.1', '18-09-2026', 'apartados 5.3–5.4 (diseño estructurado, modularidad, cohesión y acoplamiento; A1-93/A1-98/A2-III-13)');
  q.texto = 'En las métricas de flujo de información de módulos, ¿qué cuenta el fan-in de un módulo?';
  q.opciones = [
    'El número de conexiones entrantes al módulo.',
    'El número de conexiones salientes del módulo.',
    'La suma del fan-in y el fan-out, elevada al cuadrado.',
    'El número de instrucciones ejecutables del módulo.'
  ];
  q.respuesta_correcta = 0;
  q.comentarios = `Fan-in cuenta las conexiones entrantes y fan-out las salientes. En modelos de flujo de información, la complejidad se calcula combinando medidas (por ejemplo, fan-in y fan-out con el tamaño del módulo); fan-in aislado no es una medida universal de complejidad ni garantiza reutilización. El enunciado original mezclaba esas interpretaciones sin fijar el modelo. Cotejo curricular con ITIC Academy: ${academy}`;
  q.clasificacion.bloque_academia = academy;
  q.clasificacion.nota = academy;
  q.etiquetas = [...new Set([...q.etiquetas, 'flujo-de-informacion', 'fan-out'])];
  setReview(q, 'corregida', [
    source('https://www.sei.cmu.edu/documents/478/2016_019_001_484344.pdf', 'Software Engineering Institute, CMU/SEI-2015-TR-013, § complexity metrics: define fan-in como conexiones entrantes y fan-out como salientes; la métrica de complejidad de flujo de información combina ambos.'),
    source(academy38, `ITIC Academy, bloque 38, versión 2026.1 (18-09-2026), apartados 5.3–5.4; diseño estructurado, modularidad, cohesión y acoplamiento. ${academy}`)
  ], 'Reformulada a la definición del fan-in: la asociación con reutilización o complejidad depende de cómo se construya la métrica, no de una propiedad universal del indicador aislado.');
}

{
  const q = byId.get(32);
  const academy = academyLabel(15, 'Metodologías ágiles y modelos de ciclo de vida', 'versión 2026.1', '26-08-2026', 'tema 37 y A1-86 (modelos de ciclo de vida)');
  q.texto = 'En el modelo de ciclo de vida en espiral de Boehm, ¿qué representa la dimensión radial del diagrama?';
  q.opciones = [
    'El progreso angular completado dentro del ciclo actual.',
    'El coste acumulado del proyecto hasta ese punto.',
    'La cantidad de riesgos todavía no identificados.',
    'Los costes de explotación una vez puesto el sistema en servicio.'
  ];
  q.respuesta_correcta = 1;
  q.comentarios = `En la representación de Boehm, el radio expresa el coste acumulado incurrido al completar los pasos hasta el momento, mientras el ángulo muestra el progreso a través de un ciclo. Se conserva la clave y se elimina la opción que confundía la dimensión radial con el progreso. Cotejo con ITIC Academy: ${academy}`;
  q.clasificacion.bloque_academia = academy;
  q.clasificacion.nota = academy;
  q.etiquetas = [...new Set([...q.etiquetas, 'coste-acumulado', 'progreso-angular'])];
  setReview(q, 'corregida', [
    source('https://doi.org/10.1109/2.59', 'Barry W. Boehm, “A Spiral Model of Software Development and Enhancement”, IEEE Computer, 21(5), 1988, pp. 61–72, DOI 10.1109/2.59; fuente original del modelo.'),
    source('https://www.sciencedirect.com/science/article/pii/B9780080515748500315', 'Reproducción editorial del capítulo de Boehm: explicita que la dimensión radial representa el coste acumulado y la angular el progreso en cada ciclo.'),
    source(academy15, `ITIC Academy, bloque 15, metodologías ágiles y ciclo de vida, tema 37/A1-86. ${academy}`)
  ], 'Verificada con la descripción de Boehm; el radio es coste acumulado y el ángulo, progreso.');
}

{
  const q = byId.get(38);
  q.texto = 'En el modelo Entidad-Relación de MÉTRICA v3, ¿qué elementos describen a una entidad?';
  q.opciones = [
    'Los datos que se guardan en cualquier soporte.',
    'Las relaciones que mantiene con otras entidades.',
    'Sus atributos, incluidos los que puedan actuar como identificadores.',
    'Otras entidades del sistema.'
  ];
  q.respuesta_correcta = 2;
  const academy = 'ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas de información, versión 2026.1 (18-09-2026), apartados de análisis/diseño de datos (A1-89/A1-95/A2-III-4); correspondencia contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262.';
  q.comentarios = `MÉTRICA v3 indica que el modelo conceptual identifica entidades, sus atributos —distinguiendo los que pueden ser identificadores—, dominios y relaciones. La respuesta es «atributos»; la relación es un elemento distinto del modelo. Cotejo curricular: ${academy}`;
  q.clasificacion.bloque_academia = academy;
  q.clasificacion.nota = academy;
  q.etiquetas = [...new Set([...q.etiquetas, 'identificador', 'metrica-v3'])];
  setReview(q, 'vigente', [
    source('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', 'Ministerio de Administraciones Públicas, MÉTRICA v3, Análisis del Sistema de Información, tarea ASI 1.1: define entidades, atributos e identificadores, dominios y relaciones.'),
    source(academy38, `ITIC Academy, bloque 38, análisis, diseño y construcción de sistemas, versión 2026.1. ${academy}`)
  ], 'La formulación y la clave coinciden con MÉTRICA v3; se explicita que los atributos identificadores forman parte de la descripción de la entidad.');
}

{
  const q = byId.get(48);
  const academy = 'No se asigna un bloque ITIC Academy: en los materiales consultados no se encontró un epígrafe directo para este plan temporal; se mantiene el encaje oficial A1-30/A1-51 sin forzar correspondencia.';
  q.comentarios = 'La pregunta se refiere expresamente al Plan 2021–2025 y se conserva como reactivo histórico. El PDF oficial identifica el eje 2 como «Proyectos de alto impacto en la digitalización del Sector Público» y el eje 3 como «Transformación Digital y Modernización del Ministerio de Política Territorial y Función Pública, Comunidades Autónomas y Entidades Locales». Por tanto, la opción D («ninguna») era correcta: la opción A altera el nombre del ministerio; la B no reproduce el eje; la C es el eje 2. El periodo del plan concluyó en 2025, por eso no se presenta como política vigente. Cotejo curricular: ' + academy;
  q.clasificacion.bloque_academia = null;
  q.clasificacion.nota = academy;
  q.etiquetas = [...new Set([...q.etiquetas, 'plan-historico', 'eje-3'])];
  setReview(q, 'historica', [
    source('https://administracionelectronica.gob.es/dam/jcr%3Aae43f87a-9cdb-4ed9-9d78-d665a5d8491a/20210127_Plan_Digitalizacion_AP_2021-2025.pdf', 'Ministerio de Asuntos Económicos y Transformación Digital, Plan de Digitalización de las Administraciones Públicas 2021–2025, objetivos estratégicos, ejes 2 y 3; publicación oficial en el portal de Administración electrónica.')
  ], 'Respuesta históricamente correcta conforme al documento oficial; el plan terminó en 2025 y no debe memorizarse como vigente.');
}

{
  const q = byId.get(52);
  q.texto = 'En el marco de gestión de riesgos NIST SP 800-37 Rev. 2, ¿cuál es el último paso del Risk Management Framework (RMF)?';
  q.opciones = [
    'Implementar los controles de seguridad.',
    'Autorizar el sistema de información.',
    'Monitorizar el sistema y sus controles de seguridad.',
    'Evaluar los controles de seguridad.'
  ];
  q.respuesta_correcta = 2;
  const academy = 'Sin correspondencia directa asignada en el programa ITIC Academy consultado; clasificación oficial A1-47/A1-48/A2-I-9/A2-II-10 contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. No se fuerza un bloque curricular.';
  q.comentarios = `El RMF de NIST SP 800-37 Rev. 2 tiene siete pasos: Prepare, Categorize, Select, Implement, Assess, Authorize y Monitor; el último es monitorizar. La atribución original a CCN-STIC 801 no se sostiene: el catálogo oficial del CCN identifica esa guía como “ENS. Responsabilidades y Funciones”, no como la fuente de la secuencia de siete pasos. Se corrige la fuente normativa del reactivo. ${academy}`;
  q.clasificacion.bloque_academia = null;
  q.clasificacion.nota = academy;
  q.etiquetas = [...new Set([...q.etiquetas, 'NIST-SP-800-37', 'RMF', 'monitorizacion'])];
  setReview(q, 'corregida', [
    source('https://csrc.nist.gov/pubs/sp/800/37/r2/final', 'NIST SP 800-37 Rev. 2, Risk Management Framework for Information Systems and Organizations, §3 y Figura 1: el paso 7 es Monitor; publicación final vigente consultada.'),
    source('https://www.ccn-cert.cni.es/gl/800-guia-esquema-nacional-de-seguridad.html?limit=20&limitstart=0', 'Catálogo oficial de la serie CCN-STIC 800: la guía CCN-STIC-801 se titula ENS. Responsabilidades y Funciones; no documenta el proceso RMF de siete pasos atribuido por el enunciado original.')
  ], 'Se reemplaza la atribución no sustentada a CCN-STIC 801 por el marco NIST SP 800-37 Rev. 2, cuya secuencia y paso final están explícitos en la fuente primaria.');
}

// Update the historical log snapshots without touching their immutable `original` fields.
for (const lot of ['001', '002', '003']) {
  const file = path.join(__dirname, `cambios-lote-${lot}.json`);
  const log = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const entry of log.cambios) if (ids.includes(entry.id)) entry.actualizada = byId.get(entry.id);
  fs.writeFileSync(file, JSON.stringify(log, null, 2) + '\n', 'utf8');
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n', 'utf8');

const resolution = {
  fecha: '2026-10-27',
  alcance: 'Resolución individual de seis pendientes anteriores. Los originales del banco se mantienen en sus lotes de origen; este anexo documenta el estado pendiente previo y el resultado revisado.',
  resoluciones: ids.map(id => ({ id, estado_anterior: previous[id].revision.estado, pregunta_anterior: previous[id], pregunta_actualizada: byId.get(id) }))
};
fs.writeFileSync(path.join(__dirname, 'resolucion-pendientes-2026-10-27.json'), JSON.stringify(resolution, null, 2) + '\n', 'utf8');
console.log(`Pendientes resueltos: ${ids.join(', ')}`);
