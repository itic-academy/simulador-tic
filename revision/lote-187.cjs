const apply = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');

const academy = {
  gis: {
    url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 33, E-learning y SIG, versión 2026.1, tema 74 (Sistemas de información geográfica); el propio temario señala que no aplica correspondencia A2 directa.'
  },
  storage: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD y almacenamiento, versión 2026.1, § 8.2 Fibre Channel y redes SAN; cotejo temático, sin atribuir al PDF el valor EtherType concreto.'
  },
  db: {
    url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 29, Bases de datos/SQL, versión 2026.1, lenguajes relacionales y SQL; cotejo temático. El PDF no define RQL para RDF/S.'
  },
  markup: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1, XML y tecnologías web; cotejo temático, sin atribuir al PDF la especificación RQL.'
  },
  cpd: {
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 26, Hardware, servidores, CPD y almacenamiento, versión 2026.1, § 5.6, incendios, seguridad física y cableado.'
  },
  security: {
    url: 'https://drive.google.com/file/d/1Rix8RBBUSoXJBOAt8iWyU9j5tPiqlXzk/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1; marco eIDAS y medios de identificación electrónica.'
  }
};

const sources = {
  iso19110: { url: 'https://www.iso.org/standard/57303.html', referencia: 'ISO 19110:2016, Geographic information — Methodology for feature cataloguing. ISO confirma que sigue vigente tras su revisión de 2022; define la metodología para catalogar tipos de objetos geográficos.' },
  iso19115: { url: 'https://www.iso.org/standard/53798.html', referencia: 'ISO 19115-1:2014, Geographic information — Metadata — Part 1: Fundamentals. Norma de metadatos de información geográfica; la ficha ISO indica que la edición publicada sigue vigente y registra sus enmiendas.' },
  iso19115Review: { url: 'https://committee.iso.org/sites/tc211/home/projects/systematic-reviews.html', referencia: 'ISO/TC 211, systematic reviews: registra la decisión de revisar ISO 19115-1; no se presenta la edición de 2014 como libre de futuras revisiones.' },
  iso23950: { url: 'https://www.niso.org/publications/ansiniso-z3950-2003-s2014', referencia: 'ANSI/NISO Z39.50-2003 (S2014), Information Retrieval: Application Service Definition & Protocol Specification; NISO define Z39.50/ISO 23950 como servicio y protocolo cliente/servidor de recuperación de información.' },
  iso23950Loc: { url: 'https://www.loc.gov/standards/z3950/agency/profiles/irp.html', referencia: 'Library of Congress, Internationally Registered Profiles: identifica expresamente ISO 23950 como Z39.50 Information Retrieval Protocol.' },
  fcoe: { url: 'https://grouper.ieee.org/groups/802/1/files/public/docs2021/802f-mholness-Updatel-0121-v03.pdf', referencia: 'IEEE 802.1, documento del proyecto P802f YANG Data Model for Ethertypes: identifica el EtherType 0x8906 como FCoE y 0x8914 como FCoE Initialization Protocol (FIP).' },
  fcoeCisco: { url: 'https://www.cisco.com/c/dam/en/us/products/collateral/storage-networking/mds-9700-series-multilayer-directors/guide-c07-733622.pdf', referencia: 'Cisco, Fibre Channel over Ethernet (FCoE) Configuration and Troubleshooting Guide, § 2.2: distingue EtherType 0x8906 para el plano de datos FCoE y 0x8914 para FIP.' },
  rql: { url: 'https://projects.ics.forth.gr/isl/RDF/RQL/index.html', referencia: 'ICS-FORTH, RDF Query Language (RQL): describe RQL como lenguaje declarativo para consultar descripciones y esquemas RDF/S, incluidos datos inferidos.' },
  rqlManual: { url: 'https://projects.ics.forth.gr/isl/RDF/RQL/Manual.html', referencia: 'ICS-FORTH, RQL v2.1 User Manual: explica consultas de esquema y datos RDF/S mediante patrones, iteradores y expresiones de camino.' },
  fm2024: { url: 'https://www.fm.com/FMAApi/data/ApprovalStandardsDownload?isGated=true&itemId=%7B2D62FBAB-83CA-4B26-A447-72D7EF6D574D%7D', referencia: 'FM Global Property Loss Prevention Data Sheet 5-32, Data Centers and Related Facilities, edición 2024: § 2.4.2.3 recomendaba no usar extintores de polvo químico seco en salas con equipos informáticos o electrónicos. La referencia se usa solo como antecedente histórico.' },
  fmCurrent: { url: 'https://www.fm.com/FMAApi/data/ApprovalStandardsDownload?itemId=%7B2D62FBAB-83CA-4B26-A447-72D7EF6D574D%7D', referencia: 'FM Global Property Loss Prevention Data Sheet 5-32, copia oficial vigente consultada: enero de 2026, revisión provisional de julio de 2026. La sección 2.4 actual reorganiza detección y supresión; el historial indica que se eliminó la guía de extintores portátiles por no ser pertinente o quedar cubierta por la ficha autorizada correspondiente. No se reproduce como recomendación actual.' },
  eidas: { url: 'https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18', referencia: 'EUR-Lex, versión consolidada vigente a 18-10-2024 del Reglamento (UE) 910/2014, artículo 6.1: exige esquema en la lista del artículo 9; la letra b limita la obligación a niveles sustancial/alto y la c exige igual o mayor nivel requerido, y que el organismo use sustancial/alto. El propio artículo fija reconocimiento a más tardar 12 meses tras la publicación de la lista.' },
  eidas2024: { url: 'https://eur-lex.europa.eu/eli/reg/2024/1183/oj/spa', referencia: 'Reglamento (UE) 2024/1183, modificativo de eIDAS: se coteja para confirmar la reforma del marco europeo de identidad digital y la vigencia del texto consolidado usado para el artículo 6.' }
};

const records = [
  [1251, [74], [], ['SIG', 'ISO 19110', 'catálogo de tipos de objetos geográficos', 'metadatos'], [sources.iso19110, sources.iso19115, sources.iso19115Review, sources.iso23950, sources.iso23950Loc], null,
    'El original llamaba incorrectamente «Clearinghouse» a un conjunto de datos marco de Dublin Core y mezclaba esa afirmación con estándares de funciones distintas. Se formula una pregunta positiva y unívoca: ISO 19110 especifica la metodología para catalogar tipos de objetos geográficos; ISO 19115-1 trata metadatos geográficos. La ficha de ISO confirma que ISO 19110:2016 sigue vigente tras su revisión de 2022; ISO/TC 211 registra que ISO 19115-1 está sometida a revisión sistemática. Cotejo temático con ITIC Academy, bloque 33, tema 74; la academia declara que no hay correspondencia directa A2.', 'corregida'],
  [1252, [56], ['IV-5'], ['FCoE', 'Fibre Channel over Ethernet', 'EtherType', '0x8906', 'SAN'], [sources.fcoe, sources.fcoeCisco], null,
    'La respuesta se mantiene: el EtherType de las tramas de datos FCoE es 0x8906. No debe confundirse con FIP, el protocolo de inicialización y descubrimiento de FCoE, cuyo EtherType es 0x8914. El documento del grupo IEEE 802.1 y la guía técnica de Cisco corroboran la distinción. Cotejo temático con el bloque 26 de ITIC Academy, § 8.2, Fibre Channel y redes SAN; ese material no contiene el valor numérico concreto.', 'vigente'],
  [1253, [76], [], ['RQL', 'RDF/S', 'lenguaje de consulta', 'datos semánticos', 'QUEL', 'QBE', 'SQL'], [sources.rql, sources.rqlManual], null,
    'El acrónimo RQL no identifica un único lenguaje en todos los contextos y la oposición original entre «relacional» y «no relacional» era insuficiente. Se especifica el sentido RDF Query Language de ICS-FORTH: consulta esquemas y descripciones RDF/S. La academia cotejada cubre por separado SQL/consultas relacionales (bloque 29) y XML/tecnologías web (bloque 30), pero no desarrolla RQL para RDF/S; la definición procede del proyecto y manual originales de ICS-FORTH.', 'corregida'],
  [1254, [53], ['IV-6'], ['CPD', 'protección contra incendios', 'FM Global Data Sheet 5-32', 'extintores', 'histórica'], [sources.fm2024, sources.fmCurrent], null,
    'La pregunta original usaba un «NO» con cuatro afirmaciones absolutas sobre cableado, acometidas, ubicación y extinción, varias dependientes del diseño y de la normativa aplicable. Se conserva únicamente como pregunta histórica: la edición 2024 de FM Global Data Sheet 5-32 recomendaba no usar extintores de polvo seco en salas de equipos informáticos/electrónicos (§ 2.4.2.3). En la copia oficial consultada, enero de 2026 con revisión provisional de julio de 2026, dicha guía de extintores portátiles se ha eliminado de la ficha 5-32; por tanto, la respuesta no se presenta como requisito universal ni como recomendación vigente de esa ficha. Para proyectos actuales se debe consultar la normativa aplicable y la ficha actual que corresponda. ITIC Academy, bloque 26, § 5.6, cubre CPD, incendios y cableado, pero no se atribuye al temario una prohibición normativa universal.', 'historica'],
  [1255, [80], ['I-6'], ['eIDAS', 'Reglamento (UE) 910/2014', 'identificación electrónica', 'reconocimiento mutuo', 'nivel de seguridad'], [sources.eidas, sources.eidas2024], null,
    'El original mezclaba requisitos del artículo 6.1 y contenía un plazo de seis meses incorrecto. El texto consolidado de eIDAS exige que el medio se expida bajo un sistema incluido en la lista de la Comisión (letra a); la obligación del apartado 1 queda además sujeta a los niveles sustancial/alto y al nivel requerido por el servicio (letras b y c). El plazo general es de hasta 12 meses desde la publicación de la lista, no seis. Se formula la pregunta sobre el requisito concreto del artículo 6.1.a para que exista una única respuesta. Cotejo temático con el bloque 36 de ITIC Academy, marco eIDAS e identificación electrónica; los criterios y su tenor vigente se han comprobado directamente en EUR-Lex.', 'corregida']
];

const edits = {
  1251: { texto: '¿Qué norma ISO especifica la metodología para catalogar tipos de objetos geográficos?', opciones: ['ISO 19115-1, sobre fundamentos de metadatos de información geográfica.', 'ISO 19110, sobre metodología para catalogar tipos de objetos geográficos.', 'ISO 23950, sobre protocolo de recuperación de información.', 'Dublin Core, sobre identificación del sistema de referencia espacial.'], respuesta_correcta: 1 },
  1253: { texto: 'En el contexto del proyecto ICS-FORTH, ¿qué describe RQL (RDF Query Language)?', opciones: ['Un lenguaje declarativo para consultar esquemas y descripciones RDF/S, incluidos datos inferidos.', 'Una extensión de SQL para definir restricciones en tablas relacionales.', 'Un lenguaje de marcado que sustituye a XML en páginas web.', 'Un protocolo de transporte de consultas a bases de datos por Ethernet.'], respuesta_correcta: 0 },
  1254: { texto: 'Según la edición 2024 de FM Global Data Sheet 5-32 para centros de datos, ¿qué recomendación figuraba en su § 2.4.2.3 sobre extintores portátiles?', opciones: ['Usar extintores de polvo químico seco dentro de la sala de equipos.', 'No usar extintores de polvo químico seco en salas con equipos informáticos o electrónicos.', 'La ficha prohibía todos los extintores portátiles, incluidos CO₂ y agentes limpios.', 'La ficha exigía una única acometida eléctrica para evitar corrientes de retorno.'], respuesta_correcta: 1 },
  1255: { texto: 'Conforme al artículo 6.1.a del Reglamento (UE) 910/2014 consolidado, ¿qué condición debe cumplir el sistema bajo el que se expidió el medio de identificación electrónica para el reconocimiento mutuo?', opciones: ['Estar incluido en la lista publicada por la Comisión de conformidad con el artículo 9.', 'Tener siempre nivel de seguridad bajo, cualquiera que sea el servicio.', 'Ser un sistema privado autorizado por el organismo público receptor.', 'Haber sido publicado por la Comisión durante los seis meses anteriores.'], respuesta_correcta: 0 }
};

apply({ numero: '187', fecha: '2026-10-24', records, edits });

// Record the precise Academy cross-check in both the bank and the audit trail.
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-187.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyNotes = {
  1251: { block: '33 · E-learning y SIG, versión 2026.1, tema 74 (Sistemas de información geográfica); el temario declara A2: no aplica.', key: 'gis', topics: 'A1-74; A2 sin correspondencia directa según el bloque' },
  1252: { block: '26 · Hardware, servidores, CPD y almacenamiento, versión 2026.1, § 8.2 (Fibre Channel y SAN); no ofrece el EtherType concreto.', key: 'storage', topics: 'A1-56/A2-IV-5' },
  1253: { block: '29 · Bases de datos/SQL, versión 2026.1 (consultas relacionales); bloque 30, XML y tecnologías web. La academia no desarrolla RQL para RDF/S, por lo que se usan solo como contexto de contraste.', key: 'db', topics: 'A1-76; A2 sin correspondencia directa' },
  1254: { block: '26 · Hardware, servidores, CPD y almacenamiento, versión 2026.1, § 5.6 (incendios, seguridad física y cableado); no afirma una prohibición universal de extintores.', key: 'cpd', topics: 'A1-53/A2-IV-6' },
  1255: { block: '36 · Seguridad, criptografía, identificación y firma, versión 2026.1, marco eIDAS e identificación electrónica.', key: 'security', topics: 'A1-80/A2-I-6' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = academyNotes[q.id];
  const source = academy[meta.key];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  q.comentarios += comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: source.url, referencia: `ITIC Academy, ${meta.block} Correspondencia temática con ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y registro de resultados añadidos al lote 187.');
