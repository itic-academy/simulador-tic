const apply = require('./aplicar-lote.cjs');

const primary = {
  xlink: { url: 'https://www.w3.org/TR/xlink11/', referencia: 'W3C Recommendation, XML Linking Language (XLink) Version 1.1: define atributos y elementos para expresar vínculos entre recursos XML; no debe confundirse con el mecanismo que selecciona fragmentos XML.' },
  xpointer: { url: 'https://www.w3.org/TR/xptr-framework/', referencia: 'W3C Recommendation, XPointer Framework: define un sistema extensible de direccionamiento de partes/fragmentos de recursos XML y puede emplearse como sintaxis de fragment identifier.' },
  wfs: { url: 'https://www.ogc.org/standards/wfs/', referencia: 'OGC Web Feature Service Standard (WFS 2.0.2): permite acceso detallado a información geográfica al nivel de entidades y propiedades; incluye operaciones de consulta y transacción. OGC recomienda considerar OGC API – Features para desarrollos nuevos.' },
  informix11: { url: 'https://www.redbooks.ibm.com/redbooks/pdfs/sg247488.pdf', referencia: 'IBM Redbooks, Informix Dynamic Server 11: Extending Availability and Replication, capítulo 3: HDR requiere instancias de la misma versión y configuración de dispositivos/chunks espejada, incluidos paths; la secundaria reproduce logs del primario.' },
  informixGuide: { url: 'https://publib.boulder.ibm.com/epubs/html/25122672/admin650.htm', referencia: 'IBM Informix Administrator’s Guide, requisitos de configuración HDR: misma versión; mismos dbspaces/chunks, tamaños, paths y offsets.' },
  informixCurrent: { url: 'https://www.ibm.com/docs/en/informix-servers/14.10.0?topic=clusters-database-data-requirements', referencia: 'IBM Informix 14.10, Database and data requirements for clusters: las bases que se replican deben tener transaction logging; la secundaria HDR no debe ejecutar operaciones de compresión de disco.' },
  lynda: { url: 'https://news.linkedin.com/2021/may/lynda-com-sunset', referencia: 'LinkedIn News, 25-05-2021: concluyó la transición de lynda.com a LinkedIn Learning; el nombre Lynda.com no identifica una plataforma actual independiente.' },
  tutellus: { url: 'https://lib.tutellus.com/ico/pdf/tutellus.io_whitepaper_v5.1.1_en.pdf', referencia: 'Tutellus, white paper v5.1: distingue “MOOC platforms” como Coursera/edX de modelos de suscripción como Lynda y marketplaces como Udemy; por ser una fuente promocional se usa como evidencia de que las etiquetas comerciales no son uniformes, no como taxonomía normativa.' },
  moocStudy: { url: 'https://cradall.org/sites/default/files/comunicar44-en_0.pdf', referencia: 'Estudio académico publicado en Comunicar, “MOOCs in Education”: incluye Tutellus y Udemy en su muestra de plataformas MOOC, pero advierte que parte de su oferta no se ajusta al concepto. La clasificación requiere fijar criterio y periodo.' },
  nas: { url: 'https://www.ibm.com/think/topics/network-attached-storage', referencia: 'IBM, What is Network Attached Storage?: NAS es un dispositivo dedicado que comparte ficheros por Ethernet/Wi-Fi en una LAN, con acceso normalmente a nivel de fichero; contrasta con SAN a nivel de bloque.' },
  ibmNas: { url: 'https://www.ibm.com/think/topics/san-vs-nas', referencia: 'IBM, Storage Area Network (SAN) vs. Network Attached Storage (NAS): NAS sirve ficheros sobre red local; una caja NAS puede tener dirección IP propia, interfaz y varias bahías de disco.' }
};

const academy = {
  xml: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1: XML y tecnologías de enlaces web.' },
  gis: { url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 33, Temas 73–74 E-Learning y GIS, versión 2026, apartado SIG y servicios geográficos.' },
  db: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 29, Bases de Datos, SQL y Modelado de Datos, versión 2026.1: SGBD, alta disponibilidad y administración de bases de datos.' },
  elearning: { url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 33, E-Learning y GIS, versión 2026, apartado E-Learning/MOOC.' },
  hardware: { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1.' }
};

const records = [
  [1296, [77], ['II-9'], ['XML', 'XLink', 'XPointer', 'direccionamiento', 'fragment identifier'], [primary.xlink, primary.xpointer, academy.xml], null,
    'Se precisa el uso de los estándares: XLink expresa vínculos entre recursos XML y XPointer sirve para direccionar partes o fragmentos de recursos XML. No son dos alternativas excluyentes para el caso descrito. La pregunta original usaba “localizador” como si ambos estándares fueran idénticos; se reformula para asignar cada función.', 'corregida'],
  [1297, [65, 74], ['III-12'], ['OGC', 'WFS', 'Web Feature Service', 'entidades geográficas', 'vectorial', 'OGC API Features'], [primary.wfs, academy.gis], null,
    'WFS es el servicio web clásico de OGC para descubrir, consultar y, según operaciones habilitadas, gestionar entidades geográficas y sus propiedades, habitualmente datos vectoriales. No es el servicio de mapas renderizados (WMS) ni el catálogo de metadatos (CSW). Se concreta que se pregunta por el estándar WFS; para nuevos desarrollos OGC promueve OGC API – Features. Cotejo con ITIC Academy, bloque 33, GIS.', 'corregida'],
  [1298, [57, 63], ['II-5', 'IV-2'], ['Informix', 'HDR', 'alta disponibilidad', 'transaction logging', 'chunks', 'compresión', 'histórica-IDS-11'], [primary.informix11, primary.informixGuide, primary.informixCurrent, academy.db], null,
    'Se acota a IDS 11.70 y se conserva como pregunta histórica de administración. La versión y la geometría/configuración de chunks deben ser compatibles en el par HDR y las bases replicadas necesitan transaction logging. No es requisito que ambos servidores ejecuten compresión: IBM indica que una secundaria HDR no debe ejecutar operaciones de compresión; las filas que el primario ya comprimió se replican como datos comprimidos. Así, la afirmación “ambos deben usar compresión” es la incorrecta. Cotejo temático con ITIC Academy, bloque 29; la versión antigua se identifica expresamente.', 'historica'],
  [1299, [73], ['II-16'], ['MOOC', 'E-learning', 'Coursera', 'Tutellus', 'Lynda', 'Udemy', 'pendiente de criterio y fecha'], [primary.lynda, primary.tutellus, primary.moocStudy, academy.elearning], null,
    'Pendiente de ambigüedad: el enunciado no fija fecha ni criterio para llamar “plataforma MOOC”. Lynda.com dejó de ser una marca independiente tras su transición a LinkedIn Learning en 2021; Udemy se describe como marketplace y Tutellus ofrece una mezcla de formatos. La literatura académica ha incluido Udemy/Tutellus en muestras de MOOCs, pero también advierte que no todos sus cursos cumplen la definición. No se certifica ninguna terna como única sin una fuente/periodo de referencia; se preserva intacto el original y su clave histórica no se presenta como verificada. Cotejo temático con ITIC Academy, bloque 33, E-Learning/MOOC.', 'pendiente_ambiguedad'],
  [1300, [56, 57], ['IV-5'], ['NAS', 'Network Attached Storage', 'LAN', 'servidor de ficheros', 'SAN', 'RAID'], [primary.nas, primary.ibmNas, academy.hardware], null,
    'NAS (Network Attached Storage) es un dispositivo de almacenamiento conectado a la red que sirve ficheros a varios clientes mediante protocolos de archivo. La combinación de dirección IP propia, discos internos y servicio de ficheros en la LAN describe una NAS; RAID es una técnica/conjunto de niveles de redundancia y una cabina no implica por sí sola servicio de ficheros. Cotejo con ITIC Academy, bloque 26, almacenamiento.', 'vigente']
];

apply({ numero: '196', fecha: '2026-10-24', records, edits: {
  1296: { texto: 'Para enlazar recursos XML y señalar fragmentos concretos dentro de ellos, ¿qué especificaciones se complementan?', opciones: ['Solo XLink, que además define por sí mismo todas las expresiones de fragmento XML.', 'Solo XPointer, que reemplaza la necesidad de expresar enlaces entre recursos.', 'XLink para expresar vínculos y XPointer para direccionar fragmentos XML.', 'Ninguna: XML no admite mecanismos estandarizados de enlace o direccionamiento de fragmentos.'], respuesta_correcta: 2 },
  1297: { texto: 'En el estándar clásico Web Feature Service (WFS) de OGC, ¿qué tipo de acceso proporciona principalmente?', opciones: ['Acceso detallado a entidades geográficas y a sus propiedades, para consultarlas y, si se habilita, gestionarlas.', 'Generación y entrega únicamente de imágenes cartográficas renderizadas.', 'Consulta exclusiva de metadatos y registros de catálogo.', 'Consulta de píxeles de coberturas ráster como única función.'], respuesta_correcta: 0 },
  1298: { texto: 'En una pareja de alta disponibilidad HDR de IBM Informix Dynamic Server 11.70, señale la afirmación INCORRECTA:', opciones: ['Los servidores primario y secundario deben usar la misma versión de IDS.', 'La configuración de los chunks (incluidas sus rutas) debe ser compatible para que la secundaria replique la instancia.', 'Las bases que se quieran replicar deben tener activado el transaction logging.', 'La secundaria HDR debe ejecutar compresión de disco, aunque el primario no la use.'], respuesta_correcta: 3 },
  1300: { texto: 'Un dispositivo con discos propios, dirección IP en la LAN y que comparte ficheros con varios equipos es, por su función, una:', opciones: ['SAN, que presenta almacenamiento en bloque a los servidores.', 'NAS, que ofrece almacenamiento de ficheros a través de la red.', 'RAID, que es por sí mismo un servidor de ficheros.', 'Cabina de discos, necesariamente conectada mediante un protocolo SAN.'], respuesta_correcta: 1 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-196.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1296: { source: academy.xml, block: 'Bloque 30, Tecnologías de sistemas de información, versión 2026.1 (XML y tecnologías web).', topics: 'A1-77/A2-II-9' },
  1297: { source: academy.gis, block: 'Bloque 33, Temas 73–74 E-Learning y GIS, versión 2026 (servicios y datos geográficos).', topics: 'A1-65/A1-74/A2-III-12' },
  1298: { source: academy.db, block: 'Bloque 29, Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (SGBD y disponibilidad).', topics: 'A1-57/A1-63/A2-II-5/A2-IV-2' },
  1299: { source: academy.elearning, block: 'Bloque 33, E-Learning y GIS, versión 2026 (concepto y plataformas MOOC); clasificación comercial ambigua, pendiente de criterio/fecha.', topics: 'A1-73/A2-II-16' },
  1300: { source: academy.hardware, block: 'Bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1.', topics: 'A1-56/A1-57/A2-IV-5' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: meta.source.url, referencia: `${meta.source.referencia} Correspondencia: ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático con ITIC Academy y registro actualizados para el lote 196.');
