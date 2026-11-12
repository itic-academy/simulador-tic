const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const trlpi = 'https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930';
const dotnet = 'https://learn.microsoft.com/en-us/dotnet/framework/get-started/overview';
const oracleApplet = 'https://www.oracle.com/java/technologies/jpl1-building-applet.html';
const oracleMigration = 'https://docs.oracle.com/en/java/javase/11/migrate/';
const oracleJdk26 = 'https://docs.oracle.com/en/java/javase/26/migrate/significant-changes-jdk-26-release.html';
const pytorch = 'https://pytorch.org/projects/pytorch/';
const caffe = 'https://github.com/BVLC/caffe';
const mxnet = 'https://attic.apache.org/projects/mxnet.html';
const deepmind = 'https://deepmind.google/about/';
const wms = 'https://www.ogc.org/standards/wms/';
const inspire = 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02009R0976-20141231';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy43 = 'https://docs.google.com/document/d/1idLNt7OqjLIr_pxoBcGeW2vi9Kldm8Z1/edit?usp=drivesdk';
const academy6567 = 'https://drive.google.com/file/d/1zk8UbyZCGo2GZrgnrA4aiwQxa8zi6S7U/view?usp=drivesdk';
const academy7071 = 'https://drive.google.com/file/d/1TK0LY4JDblNzmcSMFecDp5TDAm04fjXK/view?usp=drivesdk';
const academy74 = 'https://drive.google.com/file/d/1tVfcKtzyXWLEcINm_dwDActD-kLfpKva/view?usp=drivesdk';

const records = [
  [5266, ['43'], ['II-14'], ['base de datos', 'fabricante', 'derecho sui generis', 'TRLPI'], [
    ref(trlpi, 'Real Decreto Legislativo 1/1996, texto consolidado, art. 133.3.a: es fabricante quien toma la iniciativa y asume el riesgo de las inversiones sustanciales para obtener, verificar o presentar el contenido de la base de datos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 43: propiedad intelectual y protección jurídica de programas y bases de datos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.14: software libre y propietario, licencias y protección jurídica de programas; se incluye como materia próxima de propiedad intelectual, no como sustituto de la definición legal.'),
    ref(academy43, 'ITIC Academy, Tema 043 «Propiedad Intelectual»: cotejo curricular del derecho de autor y protección de bases de datos.')
  ], null, 'Se sustituye la descripción informal e imprecisa por la definición legal del fabricante de una base de datos: persona natural o jurídica que toma la iniciativa y asume el riesgo de inversiones sustanciales orientadas a obtener, verificar o presentar el contenido (art. 133.3.a TRLPI). No basta con recopilar información ni con mantenerla actualizada.', 'corregida'],
  [5267, ['66'], ['III-11'], ['.NET Framework', 'CLR', 'FCL', 'arquitectura clásica'], [
    ref(dotnet, 'Microsoft Learn, Overview of .NET Framework: la arquitectura .NET Framework se compone de Common Language Runtime (CLR) y .NET Framework Class Library (FCL).'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 66: entorno de desarrollo Microsoft .NET.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.11: plataforma .NET, modelo de programación, servicios, herramientas, persistencia y seguridad.'),
    ref(academy6567, 'ITIC Academy, temas 065–067, Tecnologías de sistemas de información, edición 2025: entorno Microsoft .NET y sus componentes.')
  ], null, 'La opción A es correcta para la arquitectura clásica de .NET Framework: CLR más biblioteca de clases FCL. Se acota el nombre para no confundir .NET Framework con la plataforma moderna .NET, cuya terminología y componentes se describen de otra forma.', 'corregida'],
  [5268, ['67'], [], ['Java', 'applet', 'ciclo de vida', 'obsoleta'], [
    ref(oracleApplet, 'Oracle Java Tutorials, Building Applets: el applet no usa main como punto de entrada; el entorno invoca su ciclo de vida (init/start/stop/destroy) y el método paint cuando corresponde.'),
    ref(oracleMigration, 'Oracle JDK 11 Migration Guide: el Java Plug-in, appletviewer y la funcionalidad de ejecución de applets se retiraron en JDK 11.'),
    ref(oracleJdk26, 'Oracle JDK 26 Migration Guide: la API java.applet, ya obsoleta para eliminación desde JDK 17, fue eliminada en JDK 26.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 67: entorno de desarrollo Java.'),
    ref(academy6567, 'ITIC Academy, temas 065–067, Tecnologías de sistemas de información: Java y tecnologías históricas de cliente.')
  ], null, 'Pregunta histórica: en una aplicación Java convencional, main es el punto de entrada; no forma parte del ciclo de vida clásico de un applet, cuyo entorno gestionaba init/start/stop/destroy. Los applets no son tecnología vigente: Oracle retiró appletviewer y el plug-in en JDK 11 y eliminó la API java.applet en JDK 26.', 'historica'],
  [5269, ['70'], ['III-5'], ['deep learning', 'PyTorch', 'Caffe', 'MXNet', 'Google DeepMind'], [
    ref(pytorch, 'PyTorch, página oficial del proyecto: se identifica explícitamente como framework abierto de machine learning/deep learning.'),
    ref(caffe, 'Repositorio oficial BVLC/Caffe: Caffe se define como framework abierto de deep learning.'),
    ref(mxnet, 'Apache Attic, MXNet: lo describe como biblioteca de deep learning y documenta que el proyecto fue retirado y archivado; su retirada no altera su clasificación histórica.'),
    ref(deepmind, 'Google DeepMind, About: se presenta como equipo/laboratorio de científicos e ingenieros que desarrolla investigación y sistemas de IA, no como framework de deep learning.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 70: inteligencia artificial, machine learning y deep learning.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.5: fundamentos de inteligencia artificial, tecnologías asociadas y áreas de aplicación.'),
    ref(academy7071, 'ITIC Academy, temas 070–071 «Inteligencia artificial y Ciencia de datos», versión 2024: cotejo de conceptos de IA y aprendizaje profundo.')
  ], null, 'La respuesta es Google DeepMind: designa una organización/equipo de investigación en IA, mientras que PyTorch, Caffe y MXNet sí son frameworks o bibliotecas de deep learning. Se precisa la pregunta porque MXNet fue retirado y archivado por Apache en 2023–2024, pero sigue siendo históricamente un framework; que esté discontinuado no lo convierte en la respuesta.', 'corregida'],
  [5270, ['74'], ['II-6'], ['WMS', 'OGC', 'INSPIRE', 'SIG', 'visualización'], [
    ref(wms, 'Open Geospatial Consortium, Web Map Service: WMS recibe peticiones HTTP y devuelve imágenes de mapas georreferenciadas para su visualización.'),
    ref(inspire, 'Reglamento (CE) 976/2009 consolidado, anexo III: define los servicios de visualización INSPIRE y la operación Get Map, que devuelve una imagen cartográfica georreferenciada.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 74: sistemas de información geográfica.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.6: arquitecturas cliente-servidor y servicios web; contexto técnico del servicio geográfico interoperable.'),
    ref(academy74, 'ITIC Academy, Tema 074 «Sistemas de Información Geográfica»: OGC, servicios de mapas y visualización geográfica.')
  ], null, 'WMS es un servicio de visualización: entrega imágenes de mapas georreferenciadas. En la terminología INSPIRE corresponde a un view service; no descarga el conjunto de datos fuente ni transforma datos como función principal.', 'vigente']
];

const edits = {
  5266: {
    texto: 'Según el artículo 133.3.a del texto refundido de la Ley de Propiedad Intelectual, ¿quién es fabricante de una base de datos?',
    opciones: [
      'La persona natural o jurídica que toma la iniciativa y asume el riesgo de realizar inversiones sustanciales para obtener, verificar o presentar su contenido.',
      'Cualquier usuario que consulta o reutiliza una parte no sustancial de su contenido.',
      'La persona que se limita a mantener actualizada la información, sin tomar la iniciativa ni asumir el riesgo de la inversión.',
      'Quien aporta datos aislados a la base, aunque no asuma una inversión sustancial en su obtención, verificación o presentación.'
    ],
    respuesta_correcta: 0,
    comentarios: 'El artículo 133.3.a TRLPI define fabricante como quien toma la iniciativa y asume el riesgo de las inversiones sustanciales destinadas a obtener, verificar o presentar el contenido. No basta con aportar datos, consultarlos o mantenerlos actualizados.'
  },
  5267: {
    texto: 'En la arquitectura clásica de Microsoft .NET Framework, ¿cuáles son sus dos componentes principales?',
    comentarios: 'La opción A es correcta para la arquitectura clásica de .NET Framework: Common Language Runtime (CLR) y .NET Framework Class Library (FCL). Esta denominación histórica se distingue de la plataforma moderna .NET.'
  },
  5268: {
    texto: 'En una aplicación Java convencional, ¿qué método actúa como punto de entrada estándar, pero no forma parte del ciclo de vida clásico de un applet?',
    opciones: ['init()', 'start()', 'paint(Graphics)', 'main(String[])'],
    comentarios: 'La respuesta es main(String[]): una aplicación Java convencional arranca por main, mientras que el contenedor gestionaba el ciclo de vida clásico del applet mediante métodos como init y start. Es contenido histórico: appletviewer y el plug-in se retiraron en JDK 11 y la API java.applet se eliminó en JDK 26.'
  },
  5269: {
    texto: '¿Cuál de estas opciones designa una organización de investigación en inteligencia artificial y no un framework de deep learning?',
    opciones: ['PyTorch', 'Google DeepMind', 'Caffe', 'Apache MXNet'],
    comentarios: 'Google DeepMind es una organización/equipo de investigación en IA. PyTorch, Caffe y MXNet son frameworks o bibliotecas de deep learning; MXNet está retirado y archivado, pero eso no cambia su clasificación histórica.'
  },
  5270: {
    texto: 'En la clasificación de servicios de información geográfica de INSPIRE, un servicio OGC WMS es principalmente un servicio de:',
    comentarios: 'WMS es un servicio de visualización: devuelve imágenes de mapas georreferenciadas. INSPIRE denomina view service a este tipo de prestación; no es principalmente un servicio de descarga ni de transformación.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-989.json'))) {
  aplicar({ numero: '989', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-989.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5266: ['ITIC Academy, Tema 043 «Propiedad Intelectual»: derecho de autor y protección jurídica de bases de datos.', 'Cotejo A1-43/A2-II.14; se utiliza la definición legal del fabricante del art. 133.3.a TRLPI.'],
  5267: ['ITIC Academy, temas 065–067 «Tecnologías de sistemas de información», edición 2025: entorno Microsoft .NET.', 'Cotejo A1-66/A2-III.11; FCL más CLR es la composición de .NET Framework clásico.'],
  5268: ['ITIC Academy, temas 065–067 «Tecnologías de sistemas de información»: Java y tecnologías de cliente históricas.', 'Cotejo A1-67; applets, el plug-in y appletviewer son tecnologías retiradas/eliminadas, por lo que se etiqueta histórica.'],
  5269: ['ITIC Academy, temas 070–071 «Inteligencia artificial y Ciencia de datos», versión 2024: deep learning y tecnologías asociadas.', 'Cotejo A1-70/A2-III.5; Google DeepMind es equipo/laboratorio de investigación, no framework.'],
  5270: ['ITIC Academy, Tema 074 «Sistemas de Información Geográfica»: OGC, WMS e interfaces de visualización geográfica.', 'Cotejo A1-74/A2-II.6; WMS entrega mapas renderizados como imágenes, es decir, servicio de visualización/view service.']
};
const reason = 'Cotejo curricular individual con materiales ITIC Academy accesibles en Drive y los programas oficiales A1/A2 de 2025.';
for (const [key, [block, note]] of Object.entries(academy)) {
  const id = Number(key), q = bank.preguntas.find(x => x.id === id), change = log.cambios.find(x => x.id === id);
  if (!q || !change) throw new Error(`Falta registro de ${id}`);
  const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  const later = change.correcciones_posteriores || [];
  if (!later.some(x => x.motivo === reason)) later.push({ fecha: '2026-11-12', motivo: reason, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
  change.correcciones_posteriores = later;
  change.actualizada = structuredClone(q);
}
const byId = new Map(log.cambios.map(c => [c.id, c]));
const raw = fs.readFileSync(bankPath, 'utf8');
let replaced = 0;
const output = raw.replace(/^    \{[\s\S]*?^    \}/gm, block => {
  const old = JSON.parse(block), change = byId.get(old.id);
  if (!change) return block;
  replaced++;
  return JSON.stringify(change.actualizada, null, 2).split('\n').map(line => `    ${line}`).join('\n');
});
if (replaced !== 5) throw new Error(`Se esperaban 5 cambios; encontrados ${replaced}`);
JSON.parse(output);
fs.writeFileSync(bankPath, output);
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Lote 989 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
