const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive = {
  services: 'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk',
  hardware: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
  standards: 'https://docs.google.com/document/d/1VfLeoQFRbVTnXneuy9LTGIvROu2-eRr_/edit?usp=drivesdk',
  bi: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk'
};

const records = [
  [5486, [49], ['I-10'], ['servicios compartidos', 'SIGP', 'gestión económico-presupuestaria', 'CTT'], [
    {url:'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aed0ea576-d9fc-4c7f-a8bf-45314ea5aaab/20151002-Declaracion-servicios-compartidos.pdf',referencia:'CETIC, Primera Declaración de Servicios Compartidos, 15-09-2015: índice y listado (pp. 5–6) incluyen seguridad gestionada, atención multicanal, servicio integrado de gestión de personal y servicio común de gestión económico-presupuestaria. El enunciado original no usa el nombre oficial para la opción B; se acota la pregunta a la denominación incluida en la declaración.'},
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2014-9890',referencia:'Real Decreto 806/2014, art. 10: marco de medios y servicios TIC de uso compartido en la AGE; contexto normativo de la declaración.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 49: infraestructuras y servicios comunes y compartidos entre Administraciones.'},
    {url:a2,referencia:'Convocatoria A2 GSI 2025, tema I.10: infraestructuras y servicios comunes.'},
    {url:drive.services,referencia:'ITIC Academy 2026, Tema 49, Servicios Comunes: cotejo del mapa temático; la respuesta se contrasta con la declaración oficial.'}
  ], null, 'Se mantiene la clave B, pero se precisa el alcance temporal y literal: la primera declaración oficial denomina al servicio presupuestario “Servicio común de gestión económico-presupuestaria”, no “Servicio integrado de gestión de fondos”. Las otras tres opciones aparecen, con esas denominaciones, en la declaración. El texto original era ambiguo al sustituir el nombre oficial por un posible sinónimo.', 'corregida'],
  [5487, [132], ['IV-6'], ['Citrix Virtual Apps and Desktops', 'Citrix Studio', 'StoreFront', 'Gateway', 'virtualización de puestos'], [
    {url:'https://docs.citrix.com/us/en/citrix-virtual-apps-desktops/2607-ltsr/install-configure/install-core-components.html',referencia:'Citrix, Install core components (documentación del producto): enumera Delivery Controller, Citrix Studio, Web Studio, Director y License Server; StoreFront se instala aparte en las versiones recientes.'},
    {url:'https://docs.citrix.com/en-us/legacy-archive/downloads/citrix-virtual-apps-and-desktops%E2%84%A2-7-2212.pdf',referencia:'Citrix, guía de integración con Citrix Gateway: diagrama y texto describen Gateway y StoreFront en una arquitectura típica de acceso remoto a aplicaciones y escritorios.'},
    {url:'https://docs.citrix.com/us/en/citrix-virtual-apps-desktops/2511/technical-overview.html',referencia:'Citrix, Technical overview: arquitectura CVAD, publicación de recursos y administración mediante Studio/Director.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 132: virtualización de sistemas, centros de datos y puestos de trabajo.'},
    {url:a2,referencia:'Convocatoria A2 GSI 2025, tema IV.6: virtualización, consolidación y recursos de centros de datos.'},
    {url:drive.hardware,referencia:'ITIC Academy 2026, bloque sobre equipos, servidores y virtualización de puestos de trabajo (A1-132 y temas A2 de centros de datos); mapa curricular.'}
  ], null, 'La opción A no es un componente de Citrix Virtual Apps and Desktops. La documentación del fabricante identifica Studio y los componentes de infraestructura, mientras Gateway y StoreFront participan en el acceso/publicación de recursos. Se corrige “Citrix Estudio” por la denominación oficial Citrix Studio y se evita sugerir que StoreFront sea siempre un componente instalador central en todas las versiones.', 'corregida'],
  [5488, [50], ['II-6'], ['XPG3', 'XPG4', 'X/Open', 'estándares históricos', 'X Window System'], [
    {url:'https://citeseerx.ist.psu.edu/document?doi=ab9ca9a2268ec7399b8edbdebc3dd0ce26e97d1a&repid=rep1&type=pdf',referencia:'IBM, informe técnico GG24-3950-01, capítulo sobre X/Open Portability Guide: tabla comparativa de componentes marca “X Window System Application Interface” tanto en XPG3 como en XPG4. Fuente histórica secundaria que reproduce la comparación de los perfiles.'},
    {url:'https://docs.oracle.com/cd/E19455-01/806-2914/intro-70963/index.html',referencia:'Oracle, Common Desktop Environment: Internationalization Programmer’s Guide, identifica XPG4 como especificación X/Open y referencia interfaces X Window; sirve de corroboración contextual, no de fuente primaria de la tabla XPG3/XPG4.'},
    {url:'https://www.typewritten.org/Manual/Sun/SunOS/5.5.1/man5/xpg4.html',referencia:'Manual histórico xpg4(5) de SunOS: XPG4 especifica utilidades, cabeceras e interfaces, y agrega estándares POSIX.2.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, tema 50: normalización, estándares y pruebas de conformidad; clasificación por relación temática, dado que XPG es histórico.'},
    {url:a2,referencia:'Convocatoria A2 GSI 2025, tema II.6: arquitectura y componentes de sistemas; relación temática histórica.'},
    {url:drive.standards,referencia:'ITIC Academy 2026, Tema 50 sobre organismos de normalización: cotejo temático; XPG se conserva como referencia histórica, no como estándar vigente.'}
  ], null, 'La clave B queda respaldada por una tabla histórica comparativa que marca el componente X Window System Application Interface en ambas ediciones. XPG3/XPG4 son guías de portabilidad de finales de los años ochenta y 1992: se conserva como pregunta histórica, no como recomendación tecnológica actual. La fuente pública consultada es un informe técnico que reproduce los componentes; no se presenta como el texto normativo original de X/Open.', 'historica'],
  [5489, [31, 49], ['I-9', 'I-10'], ['CTT', 'reutilización', 'aplicaciones públicas', 'Ley 40/2015', 'ENI'], [
    {url:'https://administracionelectronica.gob.es/pae_Home/pae_SolucionesCTT/pae_CTT_-__Que_es_',referencia:'PAe/Administración electrónica, ¿Qué es el CTT?: lo define como directorio general de aplicaciones o soluciones reutilizables en la AGE e interoperable con directorios de otras AAPP.'},
    {url:'https://administracionelectronica.gob.es/ctt',referencia:'PAe, catálogo actual de soluciones CTT: directorio para localizar soluciones, servicios y activos reutilizables entre Administraciones.'},
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566',referencia:'Ley 40/2015, art. 158, cooperación para la reutilización de sistemas y aplicaciones; base normativa del Centro de Transferencia de Tecnología.'},
    {url:'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331',referencia:'Real Decreto 4/2010, art. 17, directorios de aplicaciones reutilizables e interoperabilidad en el ENI.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 31 y 49: reutilización de información y servicios comunes/interoperabilidad.'},
    {url:a2,referencia:'Convocatoria A2 GSI 2025, temas I.9 y I.10: reutilización, ENI e infraestructuras comunes.'},
    {url:drive.services,referencia:'ITIC Academy 2026, Tema 49, Servicios Comunes: CTT y soluciones compartidas; mapa curricular.'}
  ], null, 'Se conserva B y se corrige la denominación completa: CTT significa Centro de Transferencia de Tecnología. El portal oficial lo describe como el directorio general de aplicaciones/soluciones reutilizables de la AGE, interoperable con los directorios de otras Administraciones; no es un repositorio exclusivamente de código.', 'corregida'],
  [5490, [75, 76], ['II-4', 'II-5'], ['virtualización de datos', 'federación de datos', 'vista lógica', 'data warehouse', 'OLAP'], [
    {url:'https://www.ibm.com/docs/en/ws-and-kc?topic=data-virtualizing',referencia:'IBM Data Virtualization: integra fuentes físicas mediante una capa semántica virtual y permite consultar sin mover o copiar los datos.'},
    {url:'https://www.ibm.com/docs/en/software-hub/5.3.x?topic=services-data-virtualization',referencia:'IBM Software Hub, Data Virtualization: ofrece acceso unificado desde una ubicación central a fuentes físicas diversas sin reubicarlas.'},
    {url:'https://www.ibm.com/think/topics/data-warehouse',referencia:'IBM, What is a data warehouse?: agrega datos en un almacén central para consulta y análisis; distingue esa consolidación de la capa virtual sin copia.'},
    {url:a1,referencia:'Convocatoria A1 GSI 2025, temas 75 y 76: tecnologías de explotación, data warehouse/data fabric y gobierno del dato.'},
    {url:a2,referencia:'Convocatoria A2 GSI 2025, temas II.4 y II.5: almacenes de datos/OLAP y sistemas gestores de bases de datos.'},
    {url:drive.bi,referencia:'ITIC Academy 2026, bloque 34 Business Intelligence y Big Data: almacenes de datos, explotación e integración de datos; mapa curricular.'}
  ], null, 'Se corrige la clave: la definición describe virtualización o federación lógica de datos, no un almacén de datos. La virtualización publica una vista unificada sobre fuentes físicas que permanecen en sus ubicaciones; un data warehouse normalmente ingiere y consolida datos en un repositorio orientado a consulta. Se añade esa distinción a las opciones para eliminar la ambigüedad.', 'corregida']
];

const edits = {
  5486: {texto:'Según la Primera Declaración de Servicios Compartidos de la AGE, de 15 de septiembre de 2015, ¿cuál de estas opciones NO aparece con esa denominación en el listado de servicios declarados?',opciones:['Servicio integrado de gestión de personal.','Servicio integrado de gestión de fondos.','Servicio multicanal de atención al ciudadano.','Servicio de seguridad gestionada.'],respuesta_correcta:1},
  5487: {texto:'En una arquitectura típica local de Citrix Virtual Apps and Desktops, ¿cuál de las siguientes opciones NO es un componente o producto de la solución?',opciones:['Citrix Switch.','Citrix Gateway.','Citrix StoreFront.','Citrix Studio.'],respuesta_correcta:0},
  5490: {texto:'¿Cómo se denomina la técnica que ofrece una vista lógica unificada de datos que permanecen dispersos en varias bases de datos físicas, sin exigir que se consoliden en un único almacén?',opciones:['Un almacén de datos (data warehouse).','Un sistema OLAP.','Un sistema de información a la dirección.','Virtualización o federación de datos.'],respuesta_correcta:3}
};

const logFile = path.join(__dirname, 'cambios-lote-1033.json');
if (!fs.existsSync(logFile)) aplicar({numero:'1033', fecha:'2026-11-12', records, edits});
const bankFile = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
const log = JSON.parse(fs.readFileSync(logFile, 'utf8'));
const academy = {
  5486: 'ITIC Academy 2026, Tema 49 Servicios Comunes: cotejo curricular de CTT/servicios compartidos; la respuesta se contrasta con la declaración oficial.',
  5487: 'ITIC Academy 2026, bloque A1-132/A2-IV-6 sobre virtualización de puestos de trabajo, servidores y centros de datos; mapa temático.',
  5488: 'ITIC Academy 2026, Tema 50 Organismos de normalización: cotejo temático. XPG3/XPG4 se mantienen únicamente como estándares históricos.',
  5489: 'ITIC Academy 2026, Tema 49 Servicios Comunes: CTT y reutilización de soluciones; mapa curricular.',
  5490: 'ITIC Academy 2026, bloque 34 Business Intelligence y Big Data: almacenes de datos, explotación e integración; mapa temático.'
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  q.clasificacion.bloque_academia = academy[c.id];
  q.clasificacion.nota = 'Cotejado con el programa oficial A1/A2 vigente y el material de academia indicado como mapa temático; la clave se contrasta con fuentes técnicas, históricas o normativas primarias citadas.';
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logFile, JSON.stringify(log, null, 2) + '\n');
