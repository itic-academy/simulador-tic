const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyItil = 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk';
const academyCms = 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const academyDb = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const academyMetrica = 'https://docs.google.com/document/d/1ihmfO0PXn1lenLrjgS3SmP0xg01CLnS0/edit?usp=drivesdk';
const academyUml = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const fuentes = {
  4716: [
    { url: 'https://www.hci-itil.com/ITIL_v3/docs/ITILV3_Glossary_English_v1_2007_0.pdf', referencia: 'ITIL v3 Glossary v01, 30-05-2007, texto del glosario AXELOS reproducido en una copia archivada: define ECAB como subconjunto del CAB que decide sobre cambios de emergencia de alto impacto y permite decidir su composición al convocarlo según la naturaleza de la emergencia. La pregunta se limita expresamente a ITIL v3.' },
    { url: 'https://www.itil.co.il/ITIL_Files/ITIL_2007_English_Glossary_V3_1_24.pdf', referencia: 'ITIL v3 Glossary v3.1.24, copia archivada del glosario histórico: identifica ECAB como Emergency Change Advisory Board. Se conserva el marco v3, sin extrapolarlo a ITIL 4 o Version 5.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 106: gestión de servicios TIC y bases conceptuales de ITIL.' }
  ],
  4717: [
    { url: 'https://www.drupal.org/docs/user_guide/en/understanding-drupal.html', referencia: 'Drupal User Guide, documentación oficial: el núcleo de Drupal contiene scripts PHP que implementan el CMS; el código del producto está escrito en PHP.' },
    { url: 'https://www.liferay.com/documents/10182/3292406/Liferay%2BPortal%2B6_1%2BDatasheet.pdf/869a1c52-1926-4c2a-bc79-c0bcc5a96a27?download=true&t=1596856383957', referencia: 'Liferay Portal Technical Specs, ficha del fabricante: lista Java J2EE/JEE entre las tecnologías usadas por Liferay Portal.' },
    { url: 'https://docs.hyland.com/r/Alfresco/Alfresco-Content-Services/23.4/Alfresco-Content-Services/Develop/Getting-Started', referencia: 'Hyland, documentación oficial Alfresco Content Services 23.4: Content Services está implementado en Java; las extensiones in-process emplean Java.' },
    { url: 'https://www.opencms.org/en/overview/what-is-opencms/', referencia: 'OpenCms/Alkacon, descripción oficial: OpenCms está implementado en Java y XML y se ejecuta sobre la plataforma Java.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 104: gestión documental, gestión de contenidos y tecnologías CMS/DMS.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.16: sistemas de gestión documental y de contenidos.' }
  ],
  4718: [
    { url: 'https://faculty.kfupm.edu.sa/ICS/adam/ICS324/L19_20_ER.pdf', referencia: 'King Fahd University of Petroleum & Minerals, material docente de modelo E-R: define grado de una relación como el número de tipos de entidad participantes; distingue la cardinalidad de la relación.' },
    { url: 'https://people.cs.pitt.edu/~chang/156/03ERmodel.html', referencia: 'University of Pittsburgh, material docente sobre modelado E-R: grado es el número de tipos de entidad participantes.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 89: modelado de dominio y modelo entidad-relación.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.4: modelado de datos, diseño de bases de datos y modelo lógico.' }
  ],
  4719: [
    { url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3', referencia: 'Portal oficial PAe, MÉTRICA v3: separa la «Estructura Principal» (procesos como PSI, EVS, ASI y DSI) de las interfaces (aseguramiento de la calidad, seguridad, gestión de configuración y gestión de proyectos). La planificación de sistemas de información, PSI, es un proceso, no una interfaz.' },
    { url: 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf', referencia: 'MÉTRICA v3, documento oficial del proceso PSI: identifica PSI como «Planificación de Sistemas de Información», un proceso principal de la metodología.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA de planificación y desarrollo de sistemas de información.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.2: planificación del proceso de desarrollo y metodologías.' }
  ],
  4720: [
    { url: 'https://www.omg.org/spec/', referencia: 'OMG Specifications Catalog, consultado el 11-11-2026: registra UML 2.5.1 como especificación formal vigente; el catálogo registra además versiones e historiales separados, por lo que UML no ha tenido una única versión.' },
    { url: 'https://www.omg.org/spec/UML/ISO/19505-1/PDF', referencia: 'OMG/ISO/IEC 19505-1:2012, especificación UML: documenta el origen e historial de versiones del lenguaje y su adopción por OMG; se usa el catálogo actual de OMG para la versión vigente.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 93: técnicas de diseño de software y patrones.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos y lenguaje UML.' }
  ]
};

const registros = [
  [4716, ['106'], [], ['ITIL v3', 'gestión de cambios', 'cambios de emergencia', 'ECAB'], fuentes[4716], null,
    'Respuesta B. Se mantiene el marco histórico citado en el enunciado: el glosario ITIL v3 denomina ECAB al subconjunto del CAB que decide sobre cambios de emergencia de alto impacto; sus integrantes se determinan según el caso. «SECAB» e «IECB» no son nombres del órgano en el glosario v3. No se aplica automáticamente esta estructura de ITIL v3 a versiones posteriores.', 'corregida'],
  [4717, ['104'], ['II-16'], ['CMS', 'Java', 'PHP', 'Drupal', 'Liferay', 'Alfresco', 'OpenCms'], fuentes[4717], null,
    'Respuesta C. El núcleo de Drupal está escrito en PHP. Liferay Portal, Alfresco Content Services y OpenCms están implementados sobre Java; se contrasta la tecnología del producto, no el lenguaje que un administrador pueda usar para extensiones o scripts externos.', 'corregida'],
  [4718, ['89'], ['III-4'], ['modelo entidad-relación extendido', 'grado de relación', 'tipos de entidad', 'cardinalidad'], fuentes[4718], null,
    'Respuesta A. En el modelo E-R, el grado (o aridad) es el número de tipos de entidad que participan en la relación: binaria, ternaria, etc. No es la cardinalidad, que expresa restricciones sobre cuántas ocurrencias pueden asociarse.', 'corregida'],
  [4719, ['95'], ['III-2'], ['MÉTRICA v3', 'proceso PSI', 'interfaz', 'estructura principal'], fuentes[4719], null,
    'Respuesta A. PSI (Planificación de Sistemas de Información) es uno de los procesos de la estructura principal de MÉTRICA v3. Las otras opciones —aseguramiento de la calidad, seguridad y gestión de configuración— son interfaces de la metodología. Se invierte el enunciado para distinguir inequívocamente proceso de interfaz.', 'corregida'],
  [4720, ['93'], ['III-9'], ['UML', 'OMG', 'versiones', 'especificación formal'], fuentes[4720], null,
    'Respuesta A. El catálogo oficial OMG consultado en la fecha de revisión lista UML 2.5.1 como especificación formal. La afirmación del original de que UML solo tuvo una versión es falsa: existen versiones históricas y un catálogo formal de especificaciones. Se acota la pregunta a la versión actualmente listada para evitar confundir hitos de adopción de UML 1.x.', 'corregida']
];

const ediciones = {
  4716: { texto: 'En la terminología histórica de ITIL v3, ¿qué subgrupo del CAB decide sobre cambios de emergencia de alto impacto?', opciones: ['Change Advisory Board (CAB).', 'Emergency Change Advisory Board (ECAB).', 'Comité de gestión de continuidad del servicio (ITSCM).', 'Configuration Control Board (CCB).'], respuesta_correcta: 1 },
  4717: { texto: '¿Cuál de estos gestores de contenidos tiene su núcleo implementado en PHP, mientras que los otros tres se implementan sobre Java?', opciones: ['Liferay Portal.', 'Alfresco Content Services.', 'Drupal core.', 'OpenCms.'], respuesta_correcta: 2 },
  4718: { texto: 'En el modelo entidad-relación, ¿qué expresa el grado (aridad) de un tipo de relación?', opciones: ['El número de tipos de entidad que participan en la relación.', 'El número máximo de ocurrencias que pueden asociarse, según sus restricciones de cardinalidad.', 'El número de columnas de la tabla que materializa la relación.', 'El número de atributos que describen un tipo de entidad.'], respuesta_correcta: 0 },
  4719: { texto: 'En MÉTRICA v3, ¿cuál de estos elementos pertenece a la estructura principal de procesos y no al grupo de interfaces?', opciones: ['Planificación de Sistemas de Información (PSI).', 'Aseguramiento de la calidad.', 'Seguridad.', 'Gestión de la configuración.'], respuesta_correcta: 0 },
  4720: { texto: 'Según el catálogo oficial OMG consultado el 11 de noviembre de 2026, ¿qué versión de UML aparece como especificación formal vigente?', opciones: ['UML 2.5.1.', 'UML 1.1.', 'UML 2.3 Beta 1.', 'UML 3.0.'], respuesta_correcta: 0 }
};

aplicar({ numero: '879', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-879.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4716: { bloque: 'Bloque 41 — ITIL y COBIT', detalle: 'encuadre en gestión de servicios y conceptos de ITIL; el contenido de respuesta se limita a la versión histórica ITIL v3.', url: academyItil },
  4717: { bloque: 'Bloque 40 — gestión documental y CMS', detalle: 'cotejo curricular de CMS/DMS y gestión de contenidos; las tecnologías se verifican con la documentación oficial de cada producto.', url: academyCms },
  4718: { bloque: 'Bloque 29 — bases de datos y modelado', detalle: 'cotejo de modelado de dominio y relaciones E-R; la fuente universitaria citada establece la definición de grado.', url: academyDb },
  4719: { bloque: 'Tema 093 — MÉTRICA v3', detalle: 'cotejo curricular de procesos y metodología; la clasificación proceso/interfaz se determina con la documentación oficial PAe.', url: academyMetrica },
  4720: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo curricular de orientación a objetos y UML en el programa de Academy.', url: academyUml }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo Academy: ${a.detalle} El material académico se usa para localizar la cobertura, no para sustituir la fuente técnica o primaria.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026, ${a.bloque}: cotejo del encaje curricular; no se usa para fundamentar el dato técnico.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular y log del lote 879 preparados.');
