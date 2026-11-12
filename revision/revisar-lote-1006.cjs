const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({url, referencia});

const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const mcCall = 'https://cgi.csc.liv.ac.uk/~comp208/2013/GetTRDoc.pdf';
const iso9000 = 'https://www.iso.org/standards/popular/iso-9000-family.html';
const cocomo = 'https://boehmcsse.org/tools/cocomo-ii/';
const apacheSvn = 'https://subversion.apache.org/quick-start';
const eclipseSubversive = 'https://eclipse.dev/subversive/';
const subclipse = 'https://github.com/subclipse/subclipse';
const tortoiseCvs = 'https://tortoisecvs.sourceforge.net/';
const sventon = 'https://www.freshports.org/www/sventon/';
const corning = 'https://www.corning.com/content/dam/corning/media/worldwide/coc/documents/Fiber/white-paper/WP1160-11_13.pdf';
const academyQuality = 'https://drive.google.com/file/d/1vRvn5ctFs9bXwuR5gfYXJiVUVhAfgG_7/view?usp=drivesdk';
const academyNetworks = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const astic88 = 'https://drive.google.com/file/d/0Bw-rS_kOHzMKbl9YTDRkYXhpUVU/view?usp=drivesdk&resourcekey=0-G68W8glaMjTzq8AK65xzZQ';

const records = [
  [5351, ['98'], ['III-13'], ['modelo de McCall', 'factores de calidad', 'criterios de calidad', 'modularidad'], [
    ref(mcCall, 'McCall, Richards y Walters, RADC-TR-77-369, vol. I, Factors in Software Quality (1977): distingue los factores externos de calidad de los criterios/atributos internos; modularidad figura como criterio, mientras eficiencia, flexibilidad y reutilización son factores.'),
    ref(boeA1, 'Convocatoria A1 GSI 2025, tema 98: métricas y evaluación de la calidad del software.'),
    ref(boeA2, 'Convocatoria A2 GSI 2025, tema III.13: calidad del software, modelos, métricas, normas y estándares.'),
    ref(academyQuality, 'ITIC Academy, material de calidad (archivo cuyo índice identifica expresamente el modelo de McCall; edición 2021): sitúa modularidad en los criterios y trata los factores de calidad. Se cita como apoyo curricular histórico, no como fuente de vigencia normativa.'),
  ], null, 'La respuesta B (modularidad) es la que no es un factor de McCall: es un criterio/atributo que contribuye a diversos factores. Reusabilidad, flexibilidad y eficiencia sí forman parte de los once factores. Se acota la pregunta a la distinción factor/criterio del modelo.', 'corregida'],
  [5352, ['50', '103'], ['III-13'], ['ISO 9000', 'gestión de calidad', 'aseguramiento de calidad', 'normalización'], [
    ref(iso9000, 'ISO, ISO 9000 family — Quality management: la familia reúne ISO 9001 y normas de apoyo sobre sistemas de gestión de la calidad, conceptos, vocabulario y materias asociadas; no trata de redes WAN, diseño web o fabricación electrónica.'),
    ref(boeA1, 'Convocatoria A1 GSI 2025, temas 50 y 103: normalización y certificación; calidad en los servicios de información y referencia ISO 9004.'),
    ref(boeA2, 'Convocatoria A2 GSI 2025, tema III.13: modelos, normas y estándares de calidad del software.'),
    ref(academyQuality, 'ITIC Academy, material de calidad (edición 2021), apartados ISO 9000:2015 y garantía/gestión de la calidad; el material se usa como referencia curricular y se contrasta con la página vigente de ISO.'),
  ], null, 'La respuesta B es correcta: ISO 9000 designa una familia de normas sobre gestión de la calidad (con ISO 9001 como norma de requisitos para sistemas de gestión de la calidad y documentos de apoyo). La edición docente localizada cubre la familia de 2015; para su estado actual se remite a la ficha vigente de ISO.', 'corregida'],
  [5353, ['99'], ['III-2'], ['COCOMO II', 'estimación de esfuerzo', 'composición de aplicaciones', 'post-arquitectura'], [
    ref(cocomo, 'Boehm Center for Systems and Software Engineering, COCOMO II: enumera exactamente los submodelos Applications Composition, Early Design y Post-Architecture.'),
    ref(boeA1, 'Convocatoria A1 GSI 2025, tema 99: estimación de recursos y esfuerzo en el desarrollo de sistemas de información.'),
    ref(boeA2, 'Convocatoria A2 GSI 2025, tema III.2: gestión y planificación del proceso de desarrollo.'),
    ref(astic88, 'Material de preparación ASTIC almacenado en Drive, tema 88 (2007), índice sobre métricas de estimación, COCOMO y COCOMO II. Es material histórico de estudio, no una fuente primaria.'),
  ], null, 'La respuesta A (Diseño de arquitectura) no es uno de los tres nombres de submodelo de COCOMO II. La denominación correcta es Early Design (diseño temprano), además de Applications Composition y Post-Architecture; se explicita la etiqueta en inglés para evitar que «diseño preliminar» parezca una opción distinta.', 'corregida'],
  [5354, ['100', '102'], ['IV-4'], ['control de versiones', 'Subversion', 'CVS', 'clientes SVN'], [
    ref(apacheSvn, 'Apache Subversion Quick Start: distingue el cliente de línea de órdenes svn y remite a clientes gráficos de Subversion.'),
    ref(eclipseSubversive, 'Eclipse Subversive: el propio proyecto lo define como complemento de Eclipse que proporciona soporte SVN.'),
    ref(subclipse, 'Subclipse: el proyecto se define como Eclipse Team Provider para Apache Subversion.'),
    ref(tortoiseCvs, 'TortoiseCVS, sitio oficial del proyecto: permite operar repositorios CVS desde Windows Explorer; no es cliente de Subversion.'),
    ref(sventon, 'Sventon, ficha del proyecto archivada por FreeBSD Ports: aplicación web Java para examinar repositorios Subversion; se actualiza la pregunta para distinguir navegador web de repositorio frente a cliente de versiones genérico.'),
    ref(boeA1, 'Convocatoria A1 GSI 2025, temas 100 y 102: gestión de configuración, migración, cambios y versiones.'),
    ref(boeA2, 'Convocatoria A2 GSI 2025, tema IV.4: gestión de la configuración, control de cambios y versiones.'),
  ], null, 'La respuesta A (TortoiseCVS) no es un cliente SVN: es una interfaz para CVS. Subversive y Subclipse integran SVN en Eclipse; Sventon es un cliente web para explorar repositorios Subversion. Se cambia el enunciado a «producto asociado a CVS» para evitar llamar cliente de escritorio a Sventon.', 'corregida'],
  [5355, ['108', '110', '118'], ['IV-7', 'IV-8'], ['fibra óptica', 'monomodo', 'multimodo', 'medios de transmisión'], [
    ref(corning, 'Corning, Fiber Selection and Standards Guide: la fibra monomodo, de núcleo menor, se orienta generalmente a mayores distancias (alcances de varios kilómetros); la multimodo tiene núcleo mayor y se usa en enlaces de alcance más corto. El documento también explica que tasas máximas dependen de tipo, transceptor y arquitectura, no de una cifra universal para «la fibra».'),
    ref(boeA1, 'Convocatoria A1 GSI 2025, temas 108, 110, 112 y 118: medios de transmisión, cableado, fibra y redes locales.'),
    ref(boeA2, 'Convocatoria A2 GSI 2025, temas IV.7 y IV.8: medios guiados, parámetros de transmisión, cableado estructurado y redes locales.'),
    ref(academyNetworks, 'ITIC Academy, bloque Redes 2026, A1.108/A1.110/A1.118 y A2.C5/C6: medios, fibra, cableado estructurado y redes locales. Se coteja el encaje curricular, no se toma como autoridad de prestaciones.'),
  ], null, 'La respuesta A es correcta: la fibra monomodo tiene un núcleo típicamente mucho menor que la multimodo y se usa generalmente para enlaces de más alcance; la multimodo, con núcleo mayor, suele emplearse en distancias más cortas. El original combinaba cuatro afirmaciones categóricas, varias falsas y una tasa agregada sin condiciones («más de 50 Tb/s»), por lo que no tenía una clave robusta. La pregunta se reescribe para evaluar la diferencia física estable y se evita atribuir una capacidad fija a toda fibra.', 'corregida'],
];

const edits = {
  5351: {texto: 'En el modelo de calidad de McCall, ¿cuál de estos elementos es un criterio (atributo interno) y no uno de los factores de calidad?', comentarios: 'La respuesta B (modularidad) es correcta: en el modelo de McCall es un criterio que contribuye a factores como mantenibilidad, testabilidad, flexibilidad y reutilización; eficiencia, flexibilidad y reutilización son factores.'},
  5352: {texto: 'La familia de normas ISO 9000 trata principalmente sobre:', opciones: ['Protocolos y equipos para conectar redes WAN.', 'Sistemas de gestión de la calidad, sus fundamentos y normas de apoyo.', 'Requisitos técnicos para diseñar páginas web.', 'Normas de fabricación de componentes electrónicos.'], respuesta_correcta: 1, comentarios: 'La respuesta B es correcta. ISO 9000 es la familia de normas de gestión de la calidad; ISO 9001 contiene requisitos para sistemas de gestión y el resto incluye fundamentos, vocabulario y guías relacionadas. No es una familia de estándares de telecomunicaciones o fabricación.'},
  5353: {texto: '¿Cuál de las siguientes opciones no es uno de los tres submodelos de COCOMO II?', opciones: ['Diseño de arquitectura.', 'Diseño temprano (Early Design).', 'Composición de aplicaciones (Applications Composition).', 'Post-arquitectura (Post-Architecture).'], respuesta_correcta: 0, comentarios: 'La respuesta A es correcta. Los tres submodelos se denominan Applications Composition, Early Design y Post-Architecture. «Diseño de arquitectura» no es un cuarto submodelo.'},
  5354: {texto: '¿Cuál de estos productos está asociado a CVS y no a Apache Subversion (SVN)?', comentarios: 'La respuesta A (TortoiseCVS) es correcta: proporciona operaciones CVS desde el Explorador de Windows. Subversive y Subclipse son complementos SVN de Eclipse; Sventon es un cliente web para examinar repositorios SVN. Se evita describir Sventon como cliente instalado en el puesto de trabajo.'},
  5355: {texto: '¿Qué afirmación distingue correctamente la fibra monomodo de la fibra multimodo en instalaciones de comunicaciones?', opciones: ['La monomodo tiene un núcleo mucho menor y suele utilizarse para alcances mayores; la multimodo tiene un núcleo mayor y suele emplearse en enlaces más cortos.', 'La multimodo tiene un núcleo menor y es la opción habitual para los mayores alcances.', 'Ambos tipos tienen el mismo diámetro de núcleo y se distinguen únicamente por el blindaje exterior.', 'La fibra multimodo solo puede transportar señales de una única longitud de onda.'], respuesta_correcta: 0, comentarios: 'La respuesta A es correcta. En valores típicos, el núcleo monomodo es de unos 9 μm y los núcleos multimodo habituales son de 50 o 62,5 μm; la elección concreta de alcance y caudal depende del estándar, la longitud de onda y el transceptor. El original mezclaba generalizaciones obsoletas sobre categoría 6, coaxial y una capacidad agregada de fibra sin especificar sistema ni condiciones, de modo que varias opciones eran incorrectas.'},
};

aplicar({numero:'1006',fecha:'2026-11-12',records,edits});

// Registrar de forma explícita los cotejos de temario recuperados de Drive;
// la helper genérica deja por defecto la clasificación curricular pendiente.
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1006.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5351: 'ITIC Academy, archivo de calidad sobre temas 95/97/99/100/101/102, índice con el modelo de McCall y métricas de calidad (edición 2021; contenido curricular cotejado, datos históricos).',
  5352: 'ITIC Academy, mismo material de calidad, sección ISO 9000:2015 (edición 2021; se contrasta su marco con ISO vigente).',
  5353: 'Drive: material ASTIC histórico, tema 88, apartado de métricas COCOMO II; no se localizó en esta búsqueda una versión actual de Academia con este detalle.',
  5355: 'ITIC Academy, bloque Redes 2026, medios de transmisión/cableado/fibra en A1.108/110/118 y A2.C5/C6.'
};
for (const entry of log.cambios) {
  const q = bank.preguntas.find(x => x.id === entry.id);
  if (academy[entry.id]) {
    q.clasificacion.bloque_academia = academy[entry.id];
    q.clasificacion.nota = `Cotejo curricular realizado: ${academy[entry.id]}`;
  } else {
    q.clasificacion.bloque_academia = null;
    q.clasificacion.nota = 'No se localizó un material de academia accesible que detalle este producto; clasificación temática basada en el temario oficial y las fuentes técnicas enlazadas.';
  }
  entry.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
