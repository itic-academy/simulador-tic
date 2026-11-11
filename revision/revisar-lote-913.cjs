const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const rdl12 = 'https://www.boe.es/eli/es/rdl/2018/09/07/12/con';
const enisa = 'https://www.enisa.europa.eu/topics/eu-incident-response-and-cyber-crisis-management/csirts-network';
const metricacal = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A6838aec9-835a-4562-bdc3-87a96fd9c743/METRICA_V3_Aseguramiento_de_la_Calidad.pdf';
const metricamsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf';
const ntkit = 'https://bitsavers.trailing-edge.com/pdf/microsoft/resource_kits/Windows_NT_4.0_Resource_Kit_1996/097-0001650_Windows_NT_4.0_Server_Networking_Guide_1996.pdf';
const microsoftNT = 'https://learn.microsoft.com/en-us/security-updates/securitybulletins/2004/ms04-020';
const objectdb = 'https://www.objectdb.com/database/faq/object/db/database';
const gemstone = 'https://gemtalksystems.com/products/gss32/';
const ontos = 'https://www.sciencedirect.com/science/article/pii/0164121294900795';
const hostingIONOS = 'https://www.ionos.es/digitalguide/servidores/know-how/colocation/';
const housingContract = 'https://adw.es/contrato-housing-colocation.html';

const academyDb = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const academyOs = 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const academyEns = 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const academyMetric = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academyHardware = 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';

const sources = {
  4886: [
    { url: objectdb, referencia: 'FAQ del fabricante de ObjectDB: define explícitamente el producto como Object Oriented Database Management System (ODBMS). Se elimina «puro», término taxonómico no definido en la pregunta y que no permite una respuesta única: GemStone se describe como servidor de objetos y ONTOS figura en literatura técnica como SGBD orientado a objetos.' },
    { url: gemstone, referencia: 'GemTalk Systems, fabricante y mantenedor de GemStone/S: lo documenta como servidor de objetos; esto confirma que la formulación original podía incluir más de una opción según la clasificación utilizada.' },
    { url: ontos, referencia: 'Artículo técnico revisado en Journal of Systems and Software: describe ONTOS expresamente como sistema de base de datos orientado a objetos, lo que confirma la ambigüedad del enunciado original.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 63: sistemas de gestión de bases de datos; cobertura general de SGBD, no una lista oficial de productos ni una taxonomía de sistemas «puros».' }
  ],
  4887: [
    { url: ntkit, referencia: 'Microsoft Windows NT 4.0 Server Networking Guide, Resource Kit 1996, capítulo de arquitectura: enumera tres subsistemas de entorno incluidos en NT 4.0: Win32, POSIX y OS/2.' },
    { url: microsoftNT, referencia: 'Boletín oficial de seguridad Microsoft MS04-020: confirma que Windows NT 4.0 ejecutaba aplicaciones POSIX y describe POSIX como subsistema de entorno opcional; junto con la guía Resource Kit se confirma el alcance histórico.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 59 y 61: fundamentos de sistemas operativos y sistemas Microsoft.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.2: características técnicas, funcionales y de administración de Windows, Linux, Unix y otros sistemas operativos.' }
  ],
  4888: [
    { url: rdl12, referencia: 'Real Decreto-ley 12/2018, artículo 11.1.a, texto consolidado BOE: para las relaciones con operadores de servicios esenciales enumera CCN-CERT e INCIBE-CERT como comunidades de referencia diferenciadas e incluye ESPDEF-CERT, con la función de cooperación indicada en la norma. El apartado 1.b y el apartado 2 regulan además otros ámbitos y coordinación; por eso se delimita la pregunta al supuesto de la letra a).' },
    { url: enisa, referencia: 'ENISA, página oficial de la CSIRTs Network: la red está compuesta por CSIRT nombrados por Estados miembros y CERT-EU; ENISA proporciona la secretaría y apoya la cooperación. No está «al frente» de una red jerárquica de los equipos españoles.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 48 y 127: ENS/CCN-STIC y ciberseguridad/estrategia nacional.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.13: seguridad de sistemas, ciberseguridad y gestión de incidentes.' }
  ],
  4889: [
    { url: metricacal, referencia: 'MÉTRICA v3, interfaz de Aseguramiento de la Calidad, actividad IAS-CAL 4, tarea IAS-CAL 4.1, «Revisión del Plan de Mantenimiento del Sistema»: se sitúa en Implantación y Aceptación del Sistema (IAS), no entre las actividades de calidad MSI-CAL 1–3.' },
    { url: metricacal, referencia: 'MÉTRICA v3, actividades MSI-CAL 1, 2 y 3: recoge revisión del mantenimiento, revisión del plan de pruebas de regresión y revisión de la realización de dichas pruebas. Las opciones B y C son, por tanto, actividades MSI-CAL.' },
    { url: metricamsi, referencia: 'MÉTRICA v3, proceso Mantenimiento de Sistemas de Información: actividades MSI 1–4, incluida la preparación y ejecución de pruebas de regresión.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología Métrica.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, temas III.8 (instalación, cambio y mantenimiento) y III.13 (calidad del software y su medida). Correspondencia curricular del contenido; el procedimiento concreto se comprueba en MÉTRICA v3.' }
  ],
  4890: [
    { url: housingContract, referencia: 'Condiciones contractuales de un proveedor español de housing/colocation: el servicio aloja en las instalaciones del proveedor un servidor que es propiedad del cliente; sirve como ejemplo primario de las condiciones de ese servicio, no como definición legal universal.' },
    { url: hostingIONOS, referencia: 'IONOS, proveedor de alojamiento: distingue housing/colocation —hardware propio del cliente instalado en un centro externo— del hosting, donde el proveedor aporta el servidor/infraestructura del servicio. La oferta y la titularidad concreta dependen del producto y su contrato, de modo que se formula como distinción habitual.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 53 y 57: servidores, centros de proceso de datos y tipos de sistemas multiusuario con servidores de datos y aplicaciones.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema IV.6: planificación física de CPD y consolidación de servidores y recursos.' }
  ]
};

const records = [
  [4886, ['63'], [], ['SGBD', 'base de datos orientada a objetos', 'ODBMS', 'ObjectDB', 'clasificación de productos', 'ambigüedad terminológica'], sources[4886], null,
    'Se corrige la pregunta porque «SGBD orientado a objetos puro» no definía una categoría ni una regla de selección única. Hay documentación técnica que describe GemStone y ONTOS como sistemas orientados a objetos, además de la FAQ del fabricante de ObjectDB que lo identifica como ODBMS. Con la redacción acotada al producto que su fabricante define expresamente así, la respuesta es C (OBJECT-DB). El tema A2-II.5 se refiere específicamente a SGBD relacionales y SQL, por lo que no se asigna a esta pregunta sobre bases de datos de objetos.', 'corregida'],
  [4887, ['59', '61'], ['II-2'], ['Windows NT 4.0', 'subsistemas de entorno', 'Win32', 'POSIX', 'OS/2', 'historia de sistemas operativos'], sources[4887], null,
    'Respuesta C, con alcance histórico precisado: Microsoft documentó que Windows NT 4.0 incluía los subsistemas de entorno Win32, POSIX y OS/2. No debe generalizarse como una afirmación sobre todas las versiones llamadas NT o sobre Windows actual; el distractor relativo a Windows XP no responde a la pregunta de arquitectura.', 'corregida'],
  [4888, ['48', '127'], ['II-13'], ['CSIRT', 'equipos de referencia', 'CCN-CERT', 'INCIBE-CERT', 'ESPDEF-CERT', 'RDL 12/2018', 'ENISA', 'CSIRTs Network'], sources[4888], null,
    'Se delimita la pregunta al artículo 11.1.a del Real Decreto-ley 12/2018 y a las relaciones con operadores de servicios esenciales. Ese apartado enumera CCN-CERT e INCIBE-CERT como equipos con comunidades de referencia diferenciadas y también menciona ESPDEF-CERT para la cooperación prevista legalmente. Respuesta D, actualizada para incluir los tres nombres que enumera la letra a). La opción que sitúa a ENISA «al frente» es imprecisa: en la red europea ENISA ejerce la secretaría y apoya la cooperación; tampoco existe atención indistinta de todos los ámbitos.', 'corregida'],
  [4889, ['95'], ['III-8', 'III-13'], ['MÉTRICA v3', 'aseguramiento de la calidad', 'MSI-CAL', 'IAS-CAL', 'pruebas de regresión', 'mantenimiento de sistemas'], sources[4889], null,
    'Respuesta D. MÉTRICA v3 ubica la revisión del Plan de Mantenimiento del Sistema en IAS-CAL 4.1, en Implantación y Aceptación del Sistema. En cambio, MSI-CAL 1–3 incluye revisar el mantenimiento, revisar el plan de pruebas de regresión y revisar la ejecución de esas pruebas. Se reescribe la pregunta para especificar la comparación entre IAS-CAL 4.1 y MSI-CAL 1–3, evitando confundir una tarea de revisión del mantenimiento con la revisión del propio plan.', 'corregida'],
  [4890, ['53', '57'], ['IV-6'], ['housing', 'hosting', 'colocation', 'servidores', 'CPD', 'titularidad del hardware', 'servicios de alojamiento'], sources[4890], null,
    'Respuesta A, con una distinción habitual de mercado y no una regla jurídica uniforme: housing/colocation suele alojar en el CPD de un proveedor el servidor físico aportado por el cliente; en el hosting tradicional el proveedor suministra la capacidad de servidor como servicio. El contrato de cada modalidad puede añadir gestión, soporte o variar la titularidad, por lo que se explicita el modelo de servidor dedicado tradicional y se recomienda atender a las condiciones pactadas.', 'corregida']
];

const edits = {
  4886: { texto: '¿Qué producto identifica expresamente su fabricante, en la FAQ citada, como un «Object Oriented Database Management System (ODBMS)»?', opciones: [
    'GEMSTONE',
    'ONTOS',
    'OBJECT-DB',
    'DOMINIQUE'
  ], respuesta_correcta: 2 },
  4887: { texto: 'Según la documentación de arquitectura de Microsoft Windows NT 4.0, ¿qué subsistemas de entorno incluía esta versión?', opciones: [
    'Solo el subsistema OS/2.',
    'Solo el subsistema POSIX.',
    'Win32, POSIX y OS/2.',
    'OS/2 y POSIX, pero no Win32.'
  ], respuesta_correcta: 2 },
  4888: { texto: 'Conforme al artículo 11.1.a del Real Decreto-ley 12/2018, ¿qué equipos de referencia se enumeran para las relaciones con operadores de servicios esenciales?', opciones: [
    'CCN-CERT e INCIBE-CERT, sin otros equipos mencionados en el apartado.',
    'ESPDEF-CERT como único equipo de referencia.',
    'Los CSIRT españoles, coordinados jerárquicamente por ENISA.',
    'CCN-CERT e INCIBE-CERT, y ESPDEF-CERT, que coopera en los términos previstos en ese apartado.'
  ], respuesta_correcta: 3 },
  4889: { texto: 'En el aseguramiento de la calidad de MÉTRICA v3, ¿qué revisión aparece en IAS-CAL 4.1 y no entre las actividades MSI-CAL 1–3?', opciones: [
    'La revisión del mantenimiento y de las peticiones del catálogo (MSI-CAL 1).',
    'La revisión del plan de pruebas de regresión (MSI-CAL 2).',
    'La revisión de la realización de las pruebas de regresión (MSI-CAL 3).',
    'La revisión del Plan de Mantenimiento del Sistema (IAS-CAL 4.1).'
  ], respuesta_correcta: 3 },
  4890: { texto: 'En la distinción habitual entre housing/colocation y hosting tradicional de servidores dedicados, ¿qué afirmación describe mejor la diferencia?', opciones: [
    'En housing/colocation el cliente suele aportar el servidor físico para alojarlo en el CPD del proveedor; en hosting tradicional el proveedor ofrece la capacidad de servidor como servicio. Las condiciones concretas dependen del contrato.',
    'Housing exige que el servidor esté en un CPD propio de la Administración.',
    'Housing significa que el proveedor es dueño del hardware y hosting que lo es el cliente.',
    'Housing y hosting son siempre sinónimos y designan exactamente el mismo servicio.'
  ], respuesta_correcta: 0 }
};

aplicar({ numero: '913', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-913.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4886: [academyDb, 'ITIC Academy 2026, bloque 29 de bases de datos A1-63/A1-64/A1-89: encuadra los modelos y SGBD. El programa A2-II.5 es relacional/SQL y no se fuerza para esta pregunta de productos ODBMS.'],
  4887: [academyOs, 'ITIC Academy 2026, bloque 27 de sistemas operativos A1-59–62/A2-II.2: el contenido actual separa expresamente los antiguos subsistemas POSIX y OS/2 de la arquitectura de Windows moderna; el enunciado se limita a NT 4.0 histórico.'],
  4888: [academyEns, 'ITIC Academy 2026, bloque 22 de ENS y ciberseguridad: cubre CCN-CERT, respuesta y gestión de incidentes; la enumeración legal y los ámbitos competenciales se verifican en el RDL 12/2018.'],
  4889: [academyMetric, 'ITIC Academy 2026, bloque 15, sección 39 de MÉTRICA v3: coteja el proceso y sus actividades; la ubicación exacta de IAS-CAL 4.1 y MSI-CAL 1–3 se verifica en los manuales oficiales de aseguramiento de calidad.'],
  4890: [academyHardware, 'ITIC Academy 2026, bloque 26 de hardware, servidores y CPD A1-53/A1-57/A2-IV.6: aporta el encuadre de infraestructura física; la distinción entre productos se formula como práctica de mercado y queda sujeta a cada contrato.']
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [academyUrl, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material de academia se usa como cotejo curricular, no como fuente jurídica ni como especificación del producto.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} La respuesta se fundamenta en las fuentes primarias indicadas.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academyUrl, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular ITIC Academy agregado al lote 913.');
