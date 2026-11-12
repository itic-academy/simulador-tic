const aplicar = require('./aplicar-lote.cjs');
const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const d28 = 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk';
const d29 = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const d34 = 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk';
const d37 = 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk';
const d47 = 'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk';

const records = [
  [5146, ['83'], ['II-1'], ['visión humana', 'percepción del color', 'niveles de gris', 'imagen digital'], [
    ref('https://pubmed.ncbi.nlm.nih.gov/23456062/', 'Masaoka et al., Journal of the Optical Society of America A (2013), PMID 23456062: las estimaciones de colores distinguibles varían con el modelo de apariencia, el espacio de color, el umbral diferencial, la adaptación cromática y la iluminancia; no respalda una cifra universal de 7 millones ni un promedio universal de 200 grises.'),
    ref('https://www.aao.org/eye-health/tips-prevention/how-humans-see-in-color', 'American Academy of Ophthalmology: cifra divulgativa de hasta 10 millones; describe una estimación superior, no una media universal.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 83: tratamiento de imágenes y tecnologías de digitalización.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.1: tecnologías y capacidades de los ordenadores; encaje contextual, sin epígrafe específico de percepción visual.'),
    ref(d37, 'ITIC Academy, bloque 37 «Imágenes, OCR, biometría y gestión de contenidos», versión 2026.1, §1: representación, resolución y color de la imagen digital; no fija un umbral universal de discriminación visual.')
  ], null, 'La pregunta original mezcla cifras psicofísicas que dependen de las condiciones de observación y del método, y presenta 200 niveles de gris como promedio humano sin delimitar tarea, luminancia ni contraste. La revisión sustituye la premisa numérica por la conclusión respaldada: no hay un máximo promedio universal independiente de condiciones; los valores publicados son estimaciones de modelos o condiciones concretas.', 'corregida'],
  [5147, ['75'], ['II-4'], ['Bill Inmon', 'almacén de datos', 'data warehouse', 'integración', 'no volátil', 'orientado a materias', 'variante en el tiempo'], [
    ref('https://www.redbooks.ibm.com/redbooks/pdfs/sg246343.pdf', 'IBM Redbooks, Tivoli Data Warehouse Version 1.3: reproduce la definición de Inmon de almacén de datos como colección orientada a materias, integrada, variante en el tiempo y no volátil que apoya la toma de decisiones de gestión.'),
    ref('https://public.dhe.ibm.com/software/rational/web/whitepapers/2003/tp161.pdf', 'IBM, Data Modeling for Data Warehouses: describe las propiedades de orientación temática, integración, no volatilidad y variación temporal.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 75: tecnologías de explotación de datos, incluido data warehouse.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.4: inteligencia de negocios y almacenes de datos.'),
    ref(d34, 'ITIC Academy, bloque 34 «Business Intelligence y Big Data», versión 2026.1, §2.1: definición y propiedades del Data Warehouse; incluye explícitamente Inmon.')
  ], null, 'La definición de Inmon describe un almacén de datos como colección de datos orientada a materias, integrada, variante en el tiempo y no volátil, concebida para apoyar la toma de decisiones de gestión. La opción A expresa esos cuatro rasgos.', 'corregida'],
  [5148, ['60'], ['II-2'], ['UNIX', 'Linux', 'núcleo', 'kernel', 'gestión de memoria', 'asignación'], [
    ref('https://docs.kernel.org/admin-guide/mm/', 'Documentación oficial del kernel Linux, Memory Management: el subsistema de gestión de memoria implementa memoria virtual y asigna memoria tanto a estructuras internas del kernel como a programas de espacio de usuario.'),
    ref('https://docs.kernel.org/mm/concepts.html', 'Documentación oficial del kernel Linux, Memory Management Concepts: explica memoria virtual, direcciones de proceso, traducción de páginas y gestión por el kernel.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 60: sistemas operativos UNIX-LINUX, fundamentos, administración e instalación.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.2: fundamentos y administración de Windows, Linux y Unix.'),
    ref(d47, 'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1: fundamentos de sistemas operativos Windows, Linux y Unix; cotejo curricular general, no fuente de implementación del kernel.')
  ], null, 'En Linux, la asignación de memoria a procesos la realiza el subsistema de gestión de memoria del kernel. El enunciado se acota al kernel Linux para no confundir el núcleo (que alberga el subsistema) con el nombre funcional específico «gestión de memoria».', 'corregida'],
  [5149, ['58'], ['II-6'], ['SOA', 'ESB', 'integración', 'servicios empresariales', 'middleware'], [
    ref('https://www.ibm.com/docs/en/bpms/8.0.x?topic=manager-connecting-services-through-enterprise-service-bus', 'IBM Documentation, Connecting services through an enterprise service bus: el ESB proporciona infraestructura común para conectar servicios y facilita encaminamiento, transformación de mensajes y conversión de protocolos en SOA.'),
    ref('https://www.ibm.com/think/topics/esb', 'IBM, What is an enterprise service bus?: define ESB como patrón de integración entre aplicaciones, con conectividad, encaminamiento y transformación.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 58: procesamiento cooperativo, cliente-servidor y arquitectura SOA.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.6: interoperabilidad y arquitectura de servicios web.'),
    ref(d28, 'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1: SOA, middleware y mecanismos de comunicación; cotejo curricular, sin elevarlo a autoridad definitoria del ESB.')
  ], null, 'Un ESB es un patrón/componente de integración que conecta servicios mediante infraestructura de comunicación común y puede mediar en el encaminamiento, la transformación y los protocolos. IKE negocia claves, SBC controla sesiones de voz y WPA es una familia de seguridad Wi-Fi; ninguno cumple esa función de integración SOA.', 'corregida'],
  [5150, ['61'], ['II-2'], ['Microsoft', 'Windows Server', 'Active Directory', 'AD DS', 'bosque', 'árbol', 'dominio', 'unidad organizativa', 'objetos'], [
    ref('https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/understanding-the-active-directory-logical-model', 'Microsoft Learn, Understanding the Active Directory Logical Model: el bosque es el contenedor de nivel superior; dentro se organizan dominios y, dentro de ellos, unidades organizativas y objetos.'),
    ref('https://learn.microsoft.com/en-us/windows/win32/ad/containers-and-leaves', 'Microsoft Learn, Containers and Leaves: AD DS contiene una jerarquía de objetos; las reglas de esquema determinan qué clases pueden contener a otras.'),
    ref('https://learn.microsoft.com/en-us/windows/win32/ad/domain-trees', 'Microsoft Learn, Domain Trees: un árbol agrupa dominios con espacio de nombres contiguo; Active Directory puede componerse de uno o varios árboles.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 61: sistemas operativos Microsoft, fundamentos y administración.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.2: características técnicas y administración de Windows y otros sistemas operativos.'),
    ref(d47, 'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1, cubre fundamentos de Windows; no se localizó tratamiento específico de la estructura lógica de Active Directory.')
  ], null, 'La estructura lógica de AD DS se organiza desde el bosque hacia árboles y dominios; dentro de los dominios se sitúan unidades organizativas y objetos. Los grupos son una clase de objeto, no un nivel estructural paralelo. Se reformula la opción correcta para incluir los contenedores reales y eliminar esa falsa jerarquía.', 'corregida']
];

const edits = {
  5146: { texto: '¿Qué afirmación sobre la cantidad de colores y niveles de gris distinguibles por una persona es científicamente más precisa?', opciones: ['Todas las personas distinguen exactamente 7 millones de colores y 200 niveles de gris.','Existe un promedio universal de 2 millones de colores, independiente de la iluminación y del método de medida.','No hay una cifra universal independiente de las condiciones: las estimaciones dependen, entre otros factores, de la iluminación, la adaptación y el criterio de diferencia perceptible.','La visión humana distingue siempre más niveles de gris que colores, con independencia del contraste.'], respuesta_correcta: 2, comentarios: 'La literatura presenta estimaciones dependientes de modelos y condiciones de observación. Las cifras divulgativas de varios millones de colores no fijan un promedio psicofísico universal; tampoco debe confundirse la profundidad de bits de una pantalla con umbrales perceptivos.' },
 5147: { texto: 'Según la definición clásica de Bill Inmon, ¿cómo se caracteriza un almacén de datos (data warehouse)?', opciones: ['Como una colección de datos orientada a materias, integrada, no volátil y variante en el tiempo, destinada a apoyar la toma de decisiones de gestión.','Como un sistema operativo de procesamiento de transacciones que mantiene únicamente el estado actual.','Como un repositorio necesariamente volátil, organizado por aplicaciones y optimizado solo para escrituras.','Como cualquier conjunto de copias de seguridad, aunque no integre datos ni permita análisis.'], respuesta_correcta: 0, comentarios: 'La definición clásica de Inmon recoge cuatro rasgos: orientación temática, integración, no volatilidad y variación temporal; su propósito es apoyar la decisión de gestión.' },
 5148: { texto: 'En Linux, ¿qué subsistema realiza la asignación de memoria principal a un proceso en ejecución?', opciones: ['El sistema de archivos.','El subsistema de gestión de memoria del kernel.','El subsistema de entrada/salida.','El gestor de paquetes.'], respuesta_correcta: 1, comentarios: 'La gestión de memoria del kernel implementa memoria virtual y asigna memoria a los procesos. El enunciado se delimita a Linux para identificar el subsistema responsable.' },
 5149: { texto: '¿Qué patrón de integración proporciona una infraestructura común para conectar servicios dentro de una arquitectura SOA?', opciones: ['IKE (Internet Key Exchange).','ESB (Enterprise Service Bus).','SBC (Session Border Controller).','WPA (Wi-Fi Protected Access).'], respuesta_correcta: 1, comentarios: 'El ESB conecta servicios y puede mediar en encaminamiento, transformación de mensajes y conversión de protocolos. Los otros acrónimos se refieren a intercambio de claves, control de sesiones de comunicaciones y seguridad Wi-Fi.' },
 5150: { texto: '¿Cuál describe correctamente la estructura lógica de Active Directory Domain Services (AD DS)?', opciones: ['Un bosque puede contener uno o varios árboles y dominios; dentro de los dominios se organizan unidades organizativas y objetos.','Una jerarquía formada por unidades físicas, discos y particiones.','Un nivel paralelo de bosques, grupos y unidades organizativas, donde los grupos no son objetos del directorio.','Una estructura limitada a usuarios y equipos, sin dominios ni contenedores.'], respuesta_correcta: 0, comentarios: 'El bosque es el contenedor lógico de nivel superior; árboles y dominios proporcionan organización y espacio de nombres, y las OUs contienen objetos. Los grupos son una clase de objeto de Active Directory.' }
};

const logPath = require('node:path').join(__dirname, 'cambios-lote-965.json');
if (!require('node:fs').existsSync(logPath)) aplicar({ numero: '965', fecha: '2026-11-12', records, edits });

const fs = require('node:fs');
const path = require('node:path');
const file = path.join(__dirname, '..', 'preguntas_preparatic.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5146: ['ITIC Academy, bloque 37 «Imágenes, OCR, biometría y gestión de contenidos», versión 2026.1, §1 cubre representación, resolución y color digitales; no establece un número psicofísico fijo de colores o grises distinguibles.', 'Cotejo curricular A1-83/A2-II.1 contextual; la salvedad sobre variabilidad perceptiva se apoya en investigación de visión.'],
  5147: ['ITIC Academy, bloque 34 «Business Intelligence y Big Data», versión 2026.1, §§2.1–2.2: definición y propiedades del Data Warehouse e Inmon.', 'Cotejo curricular directo A1-75/A2-II.4; IBM documenta las cuatro propiedades clásicas.'],
  5148: ['ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1: fundamentos de Windows, Linux y Unix; no se atribuye al material una especificación concreta del subsistema de memoria.', 'Cotejo curricular directo A1-60/A2-II.2; la asignación Linux se verifica con documentación del kernel.'],
  5149: ['ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1: SOA, middleware, comunicación e integración; cotejo de ámbito.', 'Cotejo curricular directo A1-58/A2-II.6.'],
  5150: ['ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1, cubre fundamentos de Windows; no se localizó tratamiento específico de la estructura lógica de Active Directory.', 'Cotejo curricular A1-61/A2-II.2 como sistemas operativos, no como cobertura específica de AD DS.']
};
const map = new Map(log.cambios.map(x => [x.id, x]));
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = data.preguntas.find(x => x.id === id), entry = map.get(id);
  if (!q || !entry) throw new Error(`Falta ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const corrections = entry.correcciones_posteriores || [];
  if (!corrections.some(c => c.motivo === 'Cotejo del temario Academy accesible en Drive y separación entre cobertura curricular y autoridad técnica.')) corrections.push({ fecha: '2026-11-12', motivo: 'Cotejo del temario Academy accesible en Drive y separación entre cobertura curricular y autoridad técnica.', clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  entry.correcciones_posteriores = corrections;
  entry.actualizada = structuredClone(q);
}
let replaced = 0;
const raw = fs.readFileSync(file, 'utf8');
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), entry = map.get(old.id);
  if (!entry) return block;
  replaced++;
  return JSON.stringify(entry.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaba 5 preguntas, resultó ${replaced}`);
fs.writeFileSync(file, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
