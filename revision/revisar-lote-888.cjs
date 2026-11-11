const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyMetric = 'https://docs.google.com/document/d/1ihmfO0PXn1lenLrjgS3SmP0xg01CLnS0/edit?usp=drivesdk';
const academyCms = 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const academyItil = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';

const fuentes = {
  4761: [
    { url: 'https://citeseerx.ist.psu.edu/document?doi=fb9a2c0e0446666d31538209412a8e61c835182e&repid=rep1&type=pdf', referencia: 'Edward Yourdon, Just Enough Structured Analysis, capítulo 9, convención de flujos hacia/desde almacenes: un flujo sin etiqueta representa una instancia/registro completo; una etiqueta con otro nombre que el almacén puede representar componentes. Es una convención propia de esta notación, no una regla universal de todo DFD.' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'MÉTRICA v3, documento oficial de Análisis del Sistema de Información: describe el DFD ampliado y la estructura de flujos y almacenes en ASI.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 90: modelado de procesos y técnicas de análisis.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.3: análisis y determinación de requisitos.' }
  ],
  4762: [
    { url: 'https://learn.microsoft.com/en-us/visualstudio/get-started/visual-studio-ide', referencia: 'Microsoft Learn: Visual Studio se define explícitamente como entorno de desarrollo integrado (IDE), no como CMS.' },
    { url: 'https://www.drupal.org/docs/user_guide/en/understanding-drupal.html', referencia: 'Guía oficial de Drupal: define CMS y Drupal como CMS.' },
    { url: 'https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/overview/introduction', referencia: 'Documentación oficial Adobe Experience Manager: describe AEM como producto para experiencias digitales basadas en contenido.' },
    { url: 'https://wordpress.org/documentation/article/introduction-to-blogging/', referencia: 'Documentación oficial WordPress: sitúa el software que administra y publica contenido web en la categoría CMS y describe WordPress como herramienta de publicación web.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 104: gestión de contenidos y tecnologías CMS/DMS.' }
  ],
  4763: [
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf', referencia: 'MÉTRICA v3, documento oficial PSI: el índice define Planificación de Sistemas de Información y sus actividades PSI 1–9 como proceso de planificación.' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', referencia: 'MÉTRICA v3, documento oficial ASI: distingue análisis del sistema de los procesos de planificación; los modelos de clases se sitúan en actividades de análisis, pero la formulación original no aislaba un único proceso donde no usar la técnica.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: gestión, planificación y metodologías de desarrollo.' }
  ],
  4764: [
    { url: 'https://www.axelos.com/getmedia/5896d51f-ab6c-4843-992b-4f045eab0875/ITIL-4-Foundation-glossary_v0_22.aspx', referencia: 'Glosario oficial AXELOS para ITIL 4 Foundation: define outcome literalmente como “a result for a stakeholder enabled by one or more outputs”.' },
    { url: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1/itil-4-foundation-2565', referencia: 'PeopleCert, organismo certificador de ITIL: fuente oficial para el marco y alcance de ITIL 4 Foundation.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: gestión de servicios TIC y bases conceptuales de ITIL.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema IV.4: gestión de servicios y marcos ITIL/COBIT.' }
  ],
  4765: [
    { url: 'https://www.omg.org/spec/UML/2.5.1/PDF', referencia: 'OMG UML 2.5.1, especificación vigente consultada: define VisibilityKind (incluida private) y notación de clasificadores/miembros; el signo menos es la notación convencional para visibilidad privada.' },
    { url: 'https://www.omg.org/spec/UML/1.3/PDF', referencia: 'Especificación OMG UML 1.3, notación histórica: índice y sección de notación identifican expresamente el signo menos para visibilidad privada. Se cita solo como respaldo explícito de la convención gráfica, no para describir la versión vigente.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 89 y 93: modelos de clases y técnicas de diseño de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y UML.' }
  ]
};

const registros = [
  [4761, ['90'], ['III-3'], ['DFD', 'MÉTRICA v3', 'Yourdon', 'almacén de datos', 'flujo sin etiqueta', 'registro completo'], fuentes[4761], null,
    'Respuesta A. En la convención de análisis estructurado de Yourdon, un flujo no etiquetado que entra o sale de un almacén representa una instancia o registro completo. La opción original B invertía la convención: una etiqueta distinta del nombre del almacén puede señalar solo componentes. No se generaliza esta regla a todas las notaciones DFD.', 'corregida'],
  [4762, ['104'], [], ['CMS', 'IDE', 'gestión de contenidos', 'Visual Studio', 'WordPress', 'Drupal', 'Adobe Experience Manager'], fuentes[4762], null,
    'Respuesta A. Visual Studio es un entorno de desarrollo integrado (IDE). WordPress, Drupal y Adobe Experience Manager son plataformas de gestión o publicación de contenidos. Se cambia la pregunta negativa a una identificación positiva del IDE para hacer inequívoca la categoría.', 'corregida'],
  [4763, ['95'], ['III-2'], ['MÉTRICA v3', 'PSI', 'planificación', 'procesos'], fuentes[4763], null,
    'Respuesta B. PSI es el proceso de Planificación de Sistemas de Información, separado del proceso principal de Desarrollo de Sistemas de Información, que incluye EVS, ASI, DSI, CSI e IAS. La formulación inicial sobre en qué proceso “no se utiliza” el diagrama de clases era ambigua porque la técnica puede aparecer en más de una fase de desarrollo; se pregunta ahora por planificación frente a desarrollo.', 'corregida'],
  [4764, ['106'], [], ['ITIL 4', 'outcome', 'resultado', 'stakeholder', 'output'], fuentes[4764], null,
    'Respuesta A. En el glosario ITIL 4, outcome es un resultado para una parte interesada habilitado por uno o más outputs. Un output es un entregable tangible o intangible; no es por sí mismo el resultado. Se retira “beneficio esperado por el consumidor”, que no es la definición formal y limita indebidamente los stakeholders al consumidor.', 'corregida'],
  [4765, ['89', '93'], ['III-9'], ['UML', 'diagrama de clases', 'visibilidad', 'private', 'notación'], fuentes[4765], null,
    'Respuesta A. En la notación habitual de diagramas de clases UML, el prefijo “−” indica visibilidad privada (private). Se formula como convención de notación y no como regla literal de acceso del lenguaje de programación; la descripción “solo desde dentro de la clase” era demasiado absoluta para explicar el alcance de visibilidad UML.', 'corregida']
];

const ediciones = {
  4761: { texto: 'Según la convención de análisis estructurado de Yourdon para DFD, ¿qué indica un flujo de datos sin etiqueta que entra o sale de un almacén?', opciones: ['Que se transfiere una instancia o registro completo.', 'Que el almacén no contiene datos.', 'Que el diagrama es necesariamente inválido.', 'Que se transfiere solo una parte del registro.'], respuesta_correcta: 0 },
  4762: { texto: '¿Cuál de estos productos es un entorno de desarrollo integrado (IDE), no un CMS?', opciones: ['Microsoft Visual Studio.', 'WordPress.', 'Adobe Experience Manager.', 'Drupal.'], respuesta_correcta: 0 },
  4763: { texto: 'En MÉTRICA v3, ¿cuál de estos procesos corresponde a planificación de sistemas y no al proceso de desarrollo de sistemas de información?', opciones: ['Análisis del Sistema de Información (ASI).', 'Planificación de Sistemas de Información (PSI).', 'Estudio de Viabilidad del Sistema (EVS).', 'Construcción del Sistema de Información (CSI).'], respuesta_correcta: 1 },
  4764: { texto: 'Según el glosario de ITIL 4, ¿qué es un outcome?', opciones: ['Un resultado para una parte interesada habilitado por uno o más outputs.', 'Un entregable tangible o intangible de una actividad.', 'La funcionalidad ofrecida por un producto o servicio.', 'Un resultado que solo puede recibir el consumidor del servicio.'], respuesta_correcta: 0 },
  4765: { texto: 'En la notación habitual de un diagrama de clases UML, ¿qué visibilidad representa el signo menos (−) delante de un atributo u operación?', opciones: ['Privada (private).', 'Pública (public).', 'Protegida (protected).', 'De paquete (package).'], respuesta_correcta: 0 }
};

aplicar({ numero: '888', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-888.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4761: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de análisis estructurado y diagramas de flujo de datos; la convención precisa citada se atribuye a Yourdon.', url: academySystems },
  4762: { bloque: 'Bloque 40 — gestión documental y contenidos', detalle: 'el apartado de tecnologías CMS/DMS contextualiza la clasificación de las plataformas de contenidos; Microsoft documenta Visual Studio como IDE.', url: academyCms },
  4763: { bloque: 'Tema 093 — MÉTRICA v3', detalle: 'cotejo curricular de la metodología; el manual oficial separa PSI (planificación) de los procesos de desarrollo.', url: academyMetric },
  4764: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'cotejo del marco de gestión de servicios; la definición de outcome se valida con el glosario oficial AXELOS/PeopleCert.', url: academyItil },
  4765: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de UML y modelos de clases; la notación se contrasta con las especificaciones OMG.', url: academySystems }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academy[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy contextualiza el programa, no sustituye la fuente técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo del encaje A1/A2; no se usa como autoridad técnica.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 888 preparados.');
