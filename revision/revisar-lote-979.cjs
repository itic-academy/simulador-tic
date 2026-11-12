const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({url, referencia});
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const academy42 = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy43 = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academy49 = 'https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk';
const records = [
  [5216, ['65','77'], ['III-12'], ['WebDAV', 'HTTP', 'autoría web distribuida', 'RFC 4918'], [
    ref('https://www.rfc-editor.org/rfc/rfc4918.html', 'IETF RFC 4918, título, resumen y §1: WebDAV significa Web Distributed Authoring and Versioning; define extensiones de HTTP para autoría remota, propiedades, colecciones y bloqueos de recursos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 65 (arquitectura y desarrollo web) y 77 (lenguajes y herramientas para redes globales).'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.12: aplicaciones web, estándares y protocolos asociados.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de Información», versión 2026, temas A1-65/A1-77 y aplicaciones web/servidor. En la búsqueda textual no apareció una explicación específica de WebDAV; la sigla y el protocolo se validan en RFC 4918.')
  ], null, 'Se corrige el significado expandido de WebDAV: Web Distributed Authoring and Versioning, no «Web Data Authoring and Versioning». RFC 4918 lo especifica como un conjunto de métodos y extensiones complementarias de HTTP para operaciones de autoría remota. «Web Folders» fue una denominación de interfaz/cliente en ciertos productos, no la expansión de las siglas ni un nombre técnico universal del protocolo.', 'corregida'],
  [5217, ['65','68'], ['III-12'], ['WordPress', 'PHP', 'CMS', 'aplicaciones web'], [
    ref('https://developer.wordpress.org/advanced-administration/performance/php/', 'WordPress Developer Resources, PHP Optimization: WordPress está escrito principalmente en PHP y necesita PHP en servidor para funcionar; puede incluir JavaScript, HTML y CSS.'),
    ref('https://wordpress.org/about/requirements/', 'WordPress.org, requisitos oficiales: documenta el runtime PHP requerido por WordPress; el número mínimo/recomendado es dependiente de versión.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 65 (desarrollo web en servidor) y 68 (entorno PHP).'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.12: aplicaciones y tecnologías de desarrollo web.'),
    ref(academy30, 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de Información», versión 2026, sección PHP: identifica WordPress/Drupal como CMS construidos principalmente con PHP y distingue framework de aplicación.')
  ], null, 'La clave PHP es correcta para el núcleo de WordPress: el proyecto indica que está escrito principalmente en PHP y se ejecuta en un servidor con PHP. Se precisa «principalmente» porque WordPress también contiene código JavaScript, CSS y otros recursos; no se convierte una pregunta sobre el lenguaje principal en la afirmación de que toda la interfaz está escrita en un solo lenguaje.', 'corregida'],
  [5218, ['108','111','115'], ['II-8','IV-10'], ['OSPF', 'encaminamiento dinámico', 'IGP', 'estado de enlace', 'RFC 2328'], [
    ref('https://www.rfc-editor.org/rfc/rfc2328.html', 'IETF RFC 2328, OSPF Version 2, §§1.1–1.2: OSPF es un protocolo de encaminamiento IP de estado de enlace, clasificado como IGP y operado dinámicamente entre routers de un sistema autónomo.'),
    ref('https://www.rfc-editor.org/info/rfc5340/', 'IETF RFC 5340, OSPF for IPv6: especificación de OSPFv3 para IPv6; complementa el tratamiento moderno del protocolo.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 108, 111 y 115: redes de telecomunicaciones, encaminamiento, OSI e IP.'),
    ref(a2, 'Convocatoria A2 GSI 2025, temas II.8 (TCP/IP y encaminamiento) y IV.10 (protocolos de encaminamiento WAN).'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», versión 2026, recoge OSPFv2/OSPFv3 y su estado actual; cotejo específico del protocolo.'),
    ref(academy43, 'ITIC Academy, bloque 43 «Protocolos», versión 2026, apartado 5.5 OSPF e IS-IS: cotejo específico de protocolos de encaminamiento.')
  ], null, 'La respuesta vigente es «protocolo de encaminamiento dinámico». Con más precisión, OSPF es un protocolo de estado de enlace e IGP, no un protocolo de vector distancia como RIP ni un mecanismo implementado en hubs. El límite de 15 saltos caracteriza RIP en determinados contextos y no OSPF; OSPF calcula rutas según el estado de enlace y el coste.', 'vigente'],
  [5219, ['109'], ['IV-13'], ['IXP', 'Internet Exchange Point', 'interconexión de redes', 'peering'], [
    ref('https://www.icann.org/en/icann-acronyms-and-terms/internet-exchange-point-en', 'ICANN, Internet Exchange Point (IXP), glosario: identifica el término y describe la ubicación neutral donde se conectan redes/ISP y CDN.'),
    ref('https://www.internetsociety.org/issues/ixps/', 'Internet Society, Internet Exchange Points: describe los IXP como lugares físicos y habitualmente neutrales donde distintas redes intercambian tráfico local mediante conmutación.'),
    ref('https://www.apnic.net/community/support/internet-infrastructure/', 'APNIC, Internet infrastructure: definición de IXP como estructura de red que interconecta sistemas autónomos para intercambiar tráfico.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 109: arquitectura y servicios básicos de Internet.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.13: arquitectura, funcionamiento y evolución de Internet.'),
    ref(academy42, 'ITIC Academy, bloque 42 «Redes», versión 2026: explica las redes globales y la infraestructura troncal/backbone; no presenta IXP como «el» backbone ni se encontró una equivalencia actual NAP=backbone. La definición se contrasta con ICANN, ISOC y APNIC.')
  ], null, 'El original asociaba los nodos del backbone de Internet con NAP como si hubiera una única denominación vigente. NAP (Network Access Point) es terminología histórica usada para puntos de intercambio; el término general actual es Internet Exchange Point (IXP). Un IXP facilita que sistemas autónomos/redes intercambien tráfico directamente, pero no es sinónimo de toda la infraestructura troncal ni existe un conjunto centralizado de nodos que constituya por sí solo «el backbone» de Internet. Se reformula para preguntar la función inequívoca.', 'corregida'],
  [5220, ['110'], ['IV-7'], ['RJ11', 'roseta telefónica', 'conector modular', 'cableado doméstico'], [
    ref('https://www.legrand.com/ecatalogue/en/legrand-ecat/generatepdf/135881', 'Legrand, ficha técnica de toma telefónica Mosaic RJ11, 4 contactos: evidencia del uso del RJ11 como toma telefónica modular de fabricante.'),
    ref('https://www.itu.int/rec/T-REC-K.35/en', 'ITU-T Recommendation K.35, Bonding configurations and earthing at remote electronic sites: referencia de instalación de telecomunicaciones; no define como universal el conector de roseta doméstica. Se conserva el alcance geográfico/modal de la pregunta.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 110: sistemas de cableado y equipos de interconexión de redes.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema IV.7: medios guiados y elementos de cableado estructurado.'),
    ref(academy49, 'ITIC Academy, bloque 49 «Normas reguladoras de las telecomunicaciones», versión 2026: cobertura de cableado estructurado y normas ISO/IEC 11801, EN 50173 y ANSI/TIA-568. No pretende fijar el conector de toda roseta telefónica doméstica; la pregunta se limita a la toma modular convencional y se coteja con la ficha de fabricante.')
  ], null, 'Se acota el reactivo a una roseta modular telefónica doméstica convencional en España. RJ11 es la interfaz habitual entre terminal telefónico analógico y toma modular en instalaciones de ese tipo; no debe generalizarse a todas las viviendas, conectores históricos españoles, bases de operador ni países. No se confunde el nombre comercial RJ11 con una afirmación universal sobre cantidad de posiciones/contactos del módulo modular.', 'corregida']
];
const edits = {
  5216: { texto: '¿Qué significan las siglas WebDAV?', opciones: ['Web Distributed Authoring and Versioning.', 'Web Data Authoring and Versioning.', 'Wideband Digital Access and Voice.', 'World Database Authentication and Validation.'], respuesta_correcta: 0, comentarios: 'WebDAV significa Web Distributed Authoring and Versioning. RFC 4918 define extensiones al protocolo HTTP para la autoría remota, propiedades, colecciones y bloqueo de recursos. «Web Folders» fue el nombre de una interfaz cliente en productos concretos, no la expansión oficial de las siglas.' },
  5217: { texto: '¿En qué lenguaje está escrito principalmente el núcleo del CMS WordPress?', opciones: ['Java', 'PHP', 'Python'], respuesta_correcta: 1, comentarios: 'El núcleo de WordPress está escrito principalmente en PHP y se ejecuta en servidor; también contiene JavaScript, CSS, HTML y otros componentes. La respuesta identifica el lenguaje principal, no el único lenguaje utilizado en todo el producto.' },
  5219: { texto: '¿Qué instalación facilita que distintas redes autónomas intercambien tráfico directamente (peering) en un punto común?', opciones: ['Un punto de intercambio de Internet (Internet Exchange Point, IXP).', 'Un traductor de direcciones de red (NAT).', 'Un servidor raíz del DNS.', 'Un registro regional de direcciones de Internet (RIR).'], respuesta_correcta: 0, comentarios: 'Un IXP es una instalación donde distintas redes interconectan sus equipos para intercambiar tráfico directamente. NAP (Network Access Point) es una denominación histórica asociada a algunos puntos de intercambio, no la etiqueta general actual ni el nombre de todo el backbone de Internet.' },
  5220: { texto: 'En una instalación doméstica española con una toma modular convencional para telefonía analógica, ¿qué conector se utiliza habitualmente para conectar el terminal telefónico?', opciones: ['RJ49.', 'RJ45.', 'RJ11.', 'Conector N.'], respuesta_correcta: 2, comentarios: 'RJ11 es habitual en tomas telefónicas modulares convencionales, pero no es universal en todas las viviendas, países o instalaciones históricas. Se acota el contexto y se evita confundirlo con RJ45, usado normalmente en tomas de red de cableado estructurado.' }
};
if (!fs.existsSync(path.join(__dirname, 'cambios-lote-979.json'))) aplicar({ numero: '979', fecha: '2026-11-12', records, edits });
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'), logPath=path.join(__dirname,'cambios-lote-979.json');
if(fs.existsSync(logPath)){
 const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
 const academy={
  5216:['ITIC Academy, bloque 30 «Tecnologías de Sistemas de Información», versión 2026: cotejo temático con arquitectura/desarrollo web y extensiones/protocolos asociados. La búsqueda del texto íntegro no encontró una explicación específica de WebDAV, por lo que la definición se valida en IETF RFC 4918.','Cotejo A1-65/A1-77 y A2-III.12; el material sirve como mapa temático, no como fuente de la expansión de WebDAV.'],
  5217:['ITIC Academy, bloque 30 «Tecnologías de Sistemas de Información», versión 2026, §8 y tabla de CMS: WordPress/Drupal como CMS construidos principalmente con PHP; el detalle se contrasta con documentación WordPress.','Cotejo directo A1-65/A1-68 y A2-III.12 (desarrollo en servidor y aplicaciones web).'],
  5218:['ITIC Academy, bloque 42 «Redes», versión 2026, OSPFv2/OSPFv3; bloque 43 «Protocolos», apartado 5.5 OSPF e IS-IS: cobertura directa de encaminamiento; RFC 2328 determina la clasificación técnica precisa.','Cotejo directo A1-108/111/115 y A2-II.8/IV.10.'],
  5219:['ITIC Academy, bloque 42 «Redes», versión 2026: contexto de topología y backbone/troncal; no se atribuye al documento una equivalencia actual entre NAP y la totalidad de la infraestructura Internet.','Cotejo A1-109 y A2-IV.13; tema de arquitectura/funcionamiento de Internet.'],
  5220:['ITIC Academy, bloque 49 «Normas reguladoras de las telecomunicaciones», versión 2026: cubre normas de cableado estructurado ISO/IEC 11801, EN 50173 y ANSI/TIA-568. No aborda específicamente el RJ11 doméstico, así que el dato se comprueba con la ficha del fabricante y se limita la redacción a una toma telefónica modular convencional.','Cotejo directo A1-110/A2-IV.7 como contexto de cableado y medios guiados, sin atribuir al temario una regla universal para rosetas domésticas.']
 };
 const motive='Cotejo curricular individual con el temario oficial A1/A2 2025 y los materiales ITIC Academy vigentes accesibles en Drive.';
 for(const [key,[block,note]] of Object.entries(academy)){
  const id=Number(key),q=bank.preguntas.find(x=>x.id===id),entry=log.cambios.find(x=>x.id===id);if(!q||!entry)throw Error(`Falta ${id}`);
  const before={bloque_academia:q.clasificacion.bloque_academia,nota:q.clasificacion.nota};q.clasificacion.bloque_academia=block;q.clasificacion.nota=note;
  const corrections=entry.correcciones_posteriores||[];if(!corrections.some(x=>x.motivo===motive))corrections.push({fecha:'2026-11-12',motivo:motive,clasificacion_anterior:before,clasificacion_actualizada:{bloque_academia:block,nota:note}});
  entry.correcciones_posteriores=corrections;entry.actualizada=structuredClone(q);
 }
 const byId=new Map(log.cambios.map(c=>[c.id,c]));let replaced=0;const raw=fs.readFileSync(bankPath,'utf8');const output=raw.replace(/^    \{[\s\S]*?^    \}/gm,block=>{const old=JSON.parse(block),change=byId.get(old.id);if(!change)return block;replaced++;return JSON.stringify(change.actualizada,null,2).split('\n').map(l=>`    ${l}`).join('\n')});if(replaced!==5)throw Error(`Esperadas 5 actualizaciones Academy; hubo ${replaced}`);fs.writeFileSync(bankPath,output);fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
}

