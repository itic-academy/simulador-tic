const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const inspire = 'https://eur-lex.europa.eu/eli/dir/2007/2/oj';
const inspireOverview = 'https://knowledge-base.inspire.ec.europa.eu/overview_en';
const inspireTransition = 'https://knowledge-base.inspire.ec.europa.eu/news-and-publications/news/european-commission-transitioning-inspire-infrastructure-eu-horizontal-services-ensure-long-term-2026-07-01_en';
const raster = 'https://doc.esri.com/en/arcgis-pro/latest/help/data/imagery/introduction-to-raster-data.html';
const ide = 'https://www.miteco.gob.es/es/cartografia-y-sig/ide/presentacion/que-es-ide.html';
const dom = 'https://dom.spec.whatwg.org/';
const xml = 'https://www.w3.org/TR/xml/';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyGis = 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk';
const academyWeb = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const ref = (url, referencia) => ({ url, referencia });

const records = [
  [4986, ['74'], [], ['INSPIRE', 'Directiva 2007/2/CE', 'infraestructura de información espacial', 'IDE'], [
    ref(inspire, 'Directiva 2007/2/CE del Parlamento Europeo y del Consejo, de 14 de marzo de 2007, establece INSPIRE, una infraestructura para la información espacial en la Comunidad Europea.'),
    ref(inspireOverview, 'Comisión Europea, INSPIRE Overview: define el propósito de la infraestructura europea de datos espaciales y el intercambio interoperable de información espacial.'),
    ref(inspireTransition, 'Comisión Europea/JRC, noticia de 1 de julio de 2026: los componentes clave de infraestructura transitan a servicios horizontales de la UE; la transición operativa no cambia la identificación de la Directiva INSPIRE.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 74: sistemas de información geográfica, conceptos y funcionalidad básicos.'),
    ref(academyGis, 'ITIC Academy, bloque 33 «E-learning y Sistemas de Información Geográfica», versión 2026.1 (31/07/2026), § 2 y tema A1-74; el bloque declara A2 no aplicable.')
  ], 'La Directiva 2007/2/CE (INSPIRE) estableció la infraestructura europea de información espacial para apoyar políticas ambientales y facilitar el intercambio y la interoperabilidad de datos espaciales. La Comisión anunció en julio de 2026 una transición de componentes operativos a servicios horizontales de la UE; esto no debe confundirse con que otra directiva sea la base jurídica identificada por INSPIRE.', 'vigente'],
  [4987, ['74'], [], ['SIG', 'modelo ráster', 'modelo vectorial', 'malla de celdas', 'superposición de capas'], [
    ref(raster, 'Esri ArcGIS Pro, Introduction to raster data: la estructura matricial sencilla es adecuada para análisis espacial y permite superposiciones rápidas con conjuntos de datos complejos; la cuadrícula implica pérdida de precisión geométrica frente a límites vectoriales.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 74: sistemas de información geográfica, conceptos y funcionalidad básicos.'),
    ref(academyGis, 'ITIC Academy, bloque 33 «E-learning y Sistemas de Información Geográfica», versión 2026.1 (31/07/2026), § 2.4 sobre modelos de datos ráster/vectorial; el bloque declara A2 no aplicable.')
  ], 'La regularidad de la cuadrícula ráster hace simple aplicar análisis celda a celda y combinar capas mediante operaciones de superposición. No implica mayor precisión geométrica ni, en general, menos elementos almacenados que en el vectorial. Se corrige la errata «maltas» por «mallas».', 'corregida'],
  [4988, ['74'], [], ['IDE', 'infraestructura de datos espaciales', 'metadatos', 'datos geográficos', 'servicios'], [
    ref(ide, 'MITECO, «¿Qué es una IDE?»: enumera cuatro componentes fundamentales: datos, metadatos, servicios y aspectos organizativos.'),
    ref(inspireOverview, 'Comisión Europea, INSPIRE Overview: contexto de las infraestructuras espaciales europeas y de los datos y servicios interoperables.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 74: sistemas de información geográfica, conceptos y funcionalidad básicos.'),
    ref(academyGis, 'ITIC Academy, bloque 33 «E-learning y Sistemas de Información Geográfica», versión 2026.1 (31/07/2026), § 2.8 sobre IDE; el bloque declara A2 no aplicable.')
  ], 'Los metadatos son uno de los cuatro componentes fundamentales de una IDE, junto con datos, servicios y aspectos organizativos. La pregunta admite una única respuesta: las otras opciones no son componentes de esa clasificación de MITECO.', 'vigente'],
  [4989, ['65', '77'], ['II-9', 'III-7', 'III-12'], ['DOM', 'Document Object Model', 'HTML', 'XML', 'interfaz independiente de plataforma'], [
    ref(dom, 'WHATWG DOM Standard (Living Standard, consultado 11/11/2026): especificación del modelo de objetos y API independiente de plataforma para árboles de nodos; DOM permite acceder y manipular documentos, incluidos HTML y XML.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, temas 65 (arquitectura y desarrollo web, scripts de cliente) y 77 (HTML, CSS, XML y compatibilidad con estándares).'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, II.9 (lenguajes de marcado y script) y III.7/III.12 (aplicaciones y tecnologías web, front-end y lenguajes de script).'),
    ref(academyWeb, 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1 (31/08/2026), § 2.2 DOM y APIs del navegador, y bloques de desarrollo web/XML; cotejo curricular.')
  ], 'DOM (Document Object Model) es el modelo/API estándar que expone documentos como árboles de nodos y permite a programas acceder a ellos y modificarlos; su diseño es independiente de plataforma y lenguaje. El enunciado se cambia de «convención» imprecisa a «interfaz estándar». JavaScript puede utilizar DOM, pero no es el modelo de objetos; HTTP es un protocolo y ESS no corresponde a esta definición.', 'corregida'],
  [4990, ['77'], ['II-9', 'III-7'], ['XML', 'buena formación', 'validez', 'DTD'], [
    ref(xml, 'W3C, Extensible Markup Language (XML) 1.0, Fifth Edition, § 2: un documento XML es válido si tiene una declaración de tipo de documento asociada y cumple las restricciones que expresa; la buena formación es un requisito distinto y necesario.'),
    ref(a1, 'Convocatoria oficial A1 GSI 2025, anexo I, tema 77: HTML, CSS y XML y compatibilidad con estándares.'),
    ref(a2, 'Convocatoria oficial A2 GSI AGE 2025, anexo IX, II.9 y III.7: XML y derivados y aplicaciones web.'),
    ref(academyWeb, 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1 (31/08/2026), § 9 sobre XML; cotejo curricular.')
  ], 'Según XML 1.0, para que un documento sea válido debe estar bien formado, tener una declaración de tipo de documento asociada y cumplir las restricciones expresadas en ella. Se precisa el enunciado y la opción correcta para que la definición normativa de validez no se mezcle con la noción más amplia de validación mediante lenguajes de esquema como XML Schema.', 'corregida']
];

const edits = {
  4986: { texto: '¿Qué directiva de la Unión Europea establece INSPIRE, el marco para una infraestructura europea de información espacial?' },
  4987: { opcion: [3, 'La regularidad y sistematicidad de las mallas ráster facilitan la implementación de algoritmos de análisis, especialmente los que combinan varias capas.'] },
  4989: { texto: '¿Qué interfaz estándar, independiente de plataforma y lenguaje, permite a los programas acceder a documentos HTML y XML y modificar su contenido y estructura?' },
  4990: { texto: 'Según XML 1.0, ¿qué condición debe cumplir un documento para ser válido?', opcion: [3, 'Debe estar bien formado, tener una declaración de tipo de documento asociada y cumplir las restricciones que esta expresa.'] }
};

aplicar({ numero: '933', fecha: '2026-11-11', records: records.map(([id,a1topics,a2topics,tags,refs,note,state]) => [id,a1topics,a2topics,tags,refs,null,note,state]), edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-933.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4986: 'ITIC Academy, bloque 33 «E-learning y Sistemas de Información Geográfica», versión 2026.1 (31/07/2026), § 2 y tema A1-74; el bloque declara A2 no aplicable.',
  4987: 'ITIC Academy, bloque 33 «E-learning y Sistemas de Información Geográfica», versión 2026.1 (31/07/2026), § 2.4 sobre modelos ráster/vectorial; el bloque declara A2 no aplicable.',
  4988: 'ITIC Academy, bloque 33 «E-learning y Sistemas de Información Geográfica», versión 2026.1 (31/07/2026), § 2.8 sobre IDE; el bloque declara A2 no aplicable.',
  4989: 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1 (31/08/2026), § 2.2 DOM y APIs del navegador, y apartados de XML/desarrollo web; cotejo curricular.',
  4990: 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de la Información», versión 2026.1 (31/08/2026), § 9 sobre XML; cotejo curricular.'
};
const academyUrl = id => [4986,4987,4988].includes(id) ? academyGis : academyWeb;
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = academy[change.id];
  q.clasificacion.bloque_academia = detail;
  q.clasificacion.nota = `${q.revision.estado}. ${detail} La academia se utiliza como cotejo curricular, no como fuente técnica primaria.`;
  q.revision.observaciones += ` ${detail} Cotejo curricular, no sustituto de la fuente primaria.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academyUrl(change.id), referencia: detail });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy añadido al lote 933.');
