const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metricAsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const boeNti = 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-13169';
const paeNti = 'https://administracionelectronica.gob.es/ctt/verPestanaGeneral.htm?idIniciativa=documentoe';
const nginx = 'https://nginx.org/en/docs/http/load_balancing.html';
const xorg = 'https://www.x.org/guide/concepts/';
const kde = 'https://docs.kde.org/trunk_kf6/en/khelpcenter/fundamentals/install.html';
const ibmDfd = 'https://www.ibm.com/think/topics/data-flow-diagram';
const prezi = 'https://prezi.com/product/';
const slideshare = 'https://www.slideshare.net/';
const scribd = 'https://support.scribd.com/hc/en-us/articles/210134786-Uploading-a-document-to-Scribd';
const flickr = 'https://www.flickr.com/about';

const academy119 = 'https://drive.google.com/file/d/13GD1KKUpJAcvUdMGjI244Hy3WFQE-PA8/view?usp=drivesdk';
const academyAnalysis = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academySystems = 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyCollaborative = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';

const sources = {
  4896: [
    { url: nginx, referencia: 'NGINX HTTP Load Balancing, documentación del fabricante: describe el balanceo mediante grupos de servidores y métodos configurables, entre ellos round-robin, least-connected e IP hash; la distribución no está limitada a una decisión estática inmutable.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 119: intranet/extranet y granjas de servidores; tema 53: servidores y centros de proceso de datos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema IV.6: alta disponibilidad y balanceo de carga.' }
  ],
  4897: [
    { url: metricAsi, referencia: 'MÉTRICA v3, Análisis del Sistema de Información, actividad ASI 7: utiliza DFD como modelo de procesos y documenta sus componentes y convenciones; una entidad externa no se conecta directamente con otra sin que un proceso intermedie.' },
    { url: ibmDfd, referencia: 'IBM, Data-Flow Diagrams: identifica entidades externas, procesos, almacenes y flujos como componentes del DFD; los flujos representan recorridos de datos dentro del modelo.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 90: análisis y modelado de sistemas/procesos; tema 95: MÉTRICA v3.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.3: determinación y análisis de requisitos.' }
  ],
  4898: [
    { url: boeNti, referencia: 'NTI de Documento Electrónico, apartados III y VII.1–VII.2 y anexo II: los componentes son contenido, firma electrónica cuando proceda y metadatos; el intercambio se estructura según el esquema XML del anexo II.' },
    { url: paeNti, referencia: 'Portal de Administración Electrónica, iniciativa Documento Electrónico: especifica que, con carácter general, el intercambio emplea un fichero XML con fichero de contenido, bloque de metadatos y firma/s.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 22: legislación sobre administración electrónica; tema 77: XML.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.9: ENI y Normas Técnicas de Interoperabilidad, incluida la NTI de Documento Electrónico.' }
  ],
  4899: [
    { url: xorg, referencia: 'X.Org, X Window System Concepts: explica la arquitectura cliente/servidor, el protocolo de comunicación y los servicios del X server, al que se conectan los clientes de aplicaciones.' },
    { url: kde, referencia: 'Documentación oficial KDE Fundamentals, instalación de Plasma y aplicaciones KDE en distintas plataformas, incluidos GNU/Linux, BSD, Windows y macOS; desmiente la exclusividad de Unix.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 59 y 60: fundamentos de sistemas operativos y sistemas UNIX-LINUX.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.2: características técnicas, funcionales y de administración de sistemas operativos Linux, Unix y otros.' }
  ],
  4900: [
    { url: prezi, referencia: 'Prezi Present, producto oficial: plataforma para crear, presentar y compartir presentaciones.' },
    { url: slideshare, referencia: 'SlideShare, página oficial: plataforma de publicación y compartición de presentaciones y documentos.' },
    { url: scribd, referencia: 'Scribd Help Center, carga de documentos: permite subir documentos y compartir su enlace desde la biblioteca de Scribd.' },
    { url: flickr, referencia: 'Flickr, descripción oficial: servicio centrado en organizar y compartir fotografías y vídeo; se reformula el ítem para distinguirlo de plataformas cuyo contenido principal son presentaciones/documentos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 133: herramientas colaborativas y redes sociales.' },
    { url: a2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.16: gestión de contenidos y herramientas colaborativas/redes sociales.' }
  ]
};

const academy = {
  4896: [academy119, 'ITIC Academy/ASTIC, Tema 119 «Arquitectura de las redes Intranet y Extranet», actualización marzo de 2026, epígrafe 8 sobre granjas de servidores y epígrafe 8.2 sobre balanceo: cotejo del ámbito del temario; los algoritmos y la posibilidad de reconfiguración se comprueban en la documentación de NGINX.'],
  4897: [academyAnalysis, 'ITIC Academy 2026, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información», índice 5.1 «Modelo de procesos: DFD»: confirma el encaje curricular del diagrama de flujo de datos; para la regla de conexiones se contrasta MÉTRICA v3.'],
  4898: [academyAdmin, 'ITIC Academy 2026, bloque 3 «Actuación Administrativa»: incluye identificación/firma electrónica y procedimiento; la estructura normativa concreta se verifica en la NTI vigente publicada en BOE y en PAe.'],
  4899: [academySystems, 'ITIC Academy 2026, bloque 27, temas 59–62, sección de sistemas operativos UNIX-LINUX: coteja contenidos de sistemas y entornos gráficos; arquitectura X y compatibilidad de KDE se contrastan en documentación de los proyectos.'],
  4900: [academyCollaborative, 'ITIC Academy 2026, bloque 50 «Videoconferencia y herramientas de trabajo colaborativo», que incluye el tema 133 de herramientas colaborativas y redes sociales: cotejo curricular; la función actual de cada servicio se verifica en su documentación oficial.']
};

const records = [
  [4896, ['53', '119'], ['IV-6'], ['granja de servidores', 'balanceo de carga', 'NGINX', 'alta disponibilidad'], sources[4896], null,
    'Respuesta C (la afirmación incorrecta). En una granja o grupo de servidores la distribución puede basarse en métodos configurables y en el estado/carga observados; no es imposible la reconfiguración dinámica ni se exige una decisión estática inmutable. Se conserva la idea preguntada y se elimina una formulación defectuosa que mezclaba configuración del sistema operativo con la instalación del balanceador.', 'corregida'],
  [4897, ['90', '95'], ['III-3'], ['DFD', 'flujo de datos', 'entidades externas', 'procesos', 'MÉTRICA v3'], sources[4897], null,
    'Respuesta B (la regla falsa). Un DFD contiene entidades externas, procesos, almacenes y flujos. No se representa un flujo directo entre dos entidades externas: el intercambio debe pasar por un proceso del sistema. Se explicita que se pregunta por la convención de conexiones, pues la redacción original confundía «relación» con flujo de datos y mezclaba reglas distintas.', 'corregida'],
  [4898, ['22', '77'], ['I-9'], ['ENI', 'NTI Documento Electrónico', 'XML', 'metadatos', 'firma electrónica'], sources[4898], null,
    'Respuesta B. Como regla general de intercambio, la NTI establece una estructura XML que integra el fichero de contenido, el bloque de metadatos y, cuando proceda, la/s firma/s. La firma no es obligatoria para cualquier documento electrónico en abstracto: la NTI contempla «en su caso» y regula supuestos con firma asociada; aquí se pregunta por los componentes en la estructura de intercambio. Se conserva «de forma general» para no ocultar las excepciones normativas.', 'corregida'],
  [4899, ['59', '60'], ['II-2'], ['UNIX', 'Linux', 'X Window System', 'X server', 'cliente-servidor', 'KDE', 'GNOME'], sources[4899], null,
    'Respuesta C. X Window System emplea un modelo cliente/servidor definido por un protocolo: el X server ofrece los servicios de pantalla y dispositivos de entrada y los clientes solicitan esos servicios. Se normalizan los nombres «X server» y «X client»; KDE no es exclusivo de Unix y la opción de GNOME confundía su nombre con COM+.', 'corregida'],
  [4900, ['133'], ['II-16'], ['publicación de contenidos', 'presentaciones', 'documentos', 'Flickr', 'Prezi', 'SlideShare', 'Scribd'], sources[4900], null,
    'Respuesta D. Prezi se centra en crear y presentar; SlideShare en compartir presentaciones/documentos y Scribd en publicar/compartir documentos. Flickr permite compartir fotos y vídeos, pero ese es su objeto principal, por lo que es la opción que no pertenece al grupo de plataformas de presentaciones y documentos. La pregunta se acota al tipo de contenido principal, ya que «publicar» en sentido amplio también podría aplicarse a fotos y vídeos.', 'corregida']
];

const edits = {
  4896: { texto: '¿Cuál de estas afirmaciones sobre una granja de servidores con balanceo de carga es incorrecta?', opciones: [
    'Agrupa varios servidores que cooperan para prestar un servicio y repartir solicitudes.',
    'Un balanceador puede distribuir las solicitudes entre los servidores del grupo mediante un método configurado.',
    'La distribución debe ser estática: es imposible reconfigurarla dinámicamente según el estado de los servidores.',
    'El dimensionamiento de la red y de los servidores influye en el rendimiento global.'
  ], respuesta_correcta: 2 },
  4897: { texto: 'En un diagrama de flujo de datos (DFD), ¿qué regla sobre las conexiones entre elementos es falsa?', opciones: [
    'Los flujos representan datos que entran, salen o se transforman dentro del sistema modelado.',
    'Dos entidades externas pueden intercambiar datos directamente, sin que intervenga un proceso del sistema.',
    'Un proceso puede recibir datos de un almacén y emitir datos transformados hacia otro elemento.',
    'Las entidades externas pueden actuar como origen o destino de flujos que conectan con procesos.'
  ], respuesta_correcta: 1 },
  4898: { texto: 'Según la NTI de Documento Electrónico, ¿qué estructura se utiliza, con carácter general, para intercambiar documentos electrónicos?', opciones: [
    'Un fichero de texto plano que contiene únicamente el fichero con los datos del documento.',
    'Un fichero XML que integra el fichero de contenido, el bloque de metadatos y, cuando proceda, las firmas.',
    'Un fichero XML que contiene exclusivamente el fichero de contenido, sin metadatos ni firmas.',
    'Un fichero de texto plano con el índice electrónico, la firma del índice y los metadatos del expediente.'
  ], respuesta_correcta: 1 },
  4899: { texto: '¿Cuál es la afirmación correcta sobre la interfaz gráfica X Window System en entornos UNIX y Linux?', opciones: [
    'GNOME se basa en la tecnología COM+ de Microsoft.',
    'XFree86 es una implementación del entorno de escritorio CDE incluida por defecto en MacX Server.',
    'X Window System utiliza un protocolo cliente/servidor: los clientes solicitan servicios al X server, que gestiona la pantalla y los dispositivos de entrada.',
    'KDE solo puede utilizarse en sistemas Unix.'
  ], respuesta_correcta: 2 },
  4900: { texto: '¿Cuál de estos servicios se centra principalmente en compartir fotografías y vídeos, y no en publicar presentaciones o documentos?', opciones: [
    'Scribd.',
    'Prezi.',
    'SlideShare.',
    'Flickr.'
  ], respuesta_correcta: 3 }
};

aplicar({ numero: '915', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-915.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [academyUrl, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material académico sirve para cotejar cobertura y no sustituye la fuente normativa/técnica primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} La respuesta se contrasta con las fuentes primarias citadas.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academyUrl, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 915.');
