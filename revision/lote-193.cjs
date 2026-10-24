const apply = require('./aplicar-lote.cjs');

const sources = {
  keys: {
    url: 'https://alg.manifoldapp.org/read/guide-to-database-systems/section/b8bd26b4-9bbd-4159-86dc-f11c7695fd0c',
    referencia: 'OpenALG, Guide to Database Systems, The Relational Model, apartado Keys: una superclave identifica unívocamente; clave/key es una superclave mínima; una clave candidata es una clave y la primaria es la candidata elegida. El conjunto de todos los atributos es superclave, no necesariamente candidata.'
  },
  gplFaq: {
    url: 'https://www.gnu.org/licenses/gpl-faq.es.html#ModifiedJustBinary',
    referencia: 'Free Software Foundation, FAQ oficial de GNU GPL, “¿Puedo publicar únicamente en forma binaria una versión modificada?”: no; al distribuir una versión modificada se pone a disposición el código fuente modificado bajo GPL. La respuesta sobre diffs indica que parches sin el fuente completo no son satisfactorios.'
  },
  gpl3: {
    url: 'https://www.gnu.org/licenses/gpl-3.0.html#section6',
    referencia: 'GNU General Public License v3, sección 6: la distribución del código objeto requiere acompañarlo de la Corresponding Source por uno de los medios permitidos. Se especifica GPLv3 en la pregunta revisada para eliminar la indeterminación entre versiones y opciones que mezclaban fuente y parches.'
  },
  clustering: {
    url: 'https://scikit-learn.org/stable/modules/clustering.html',
    referencia: 'Documentación oficial de scikit-learn, Clustering: el clustering se aplica a datos sin etiquetar y busca agrupar muestras; K-means, por ejemplo, separa las muestras en grupos de acuerdo con sus características.'
  },
  cssId: {
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/ID_selectors',
    referencia: 'MDN Web Docs, CSS ID selectors: el selector #id selecciona el elemento cuyo atributo id coincide exactamente con ese valor; la clase se seleccionaría con .nombre.'
  },
  dniCurrent: {
    url: 'https://www.boe.es/eli/es/rd/2025/04/01/255/con',
    referencia: 'Real Decreto 255/2025, de 1 de abril, por el que se regula el DNI, texto consolidado, artículo 11.3: la validez de los certificados electrónicos contenidos en el DNI será de dos años.'
  },
  dniOld: {
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2005-21163&p=20250402&tn=0',
    referencia: 'Real Decreto 1553/2005, texto consolidado: el BOE señala su derogación, con efectos desde el 2 de abril de 2025, por el Real Decreto 255/2025; las preguntas sobre el antiguo artículo 12 no deben tratarse como regla vigente.'
  }
};

const academy = {
  databases: {
    url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 29, Bases de Datos, SQL y Modelado de Datos, versión 2026.1, apartado 2.2, “Claves”: superclave, clave candidata como superclave mínima y clave primaria como candidata seleccionada.'
  },
  software: {
    url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 18, Protección jurídica, licencias y control del software, versión 2026.1; incluye A1-43 y A2-II-14 (software libre, tipos de licencias y protección jurídica).'
  },
  data: {
    url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 32, Inteligencia Artificial y Ciencia de Datos, versión 2026.1, A1-70/A1-71 y A2-D5: minería, modelado de datos y métodos de aprendizaje; cotejo temático con el bloque 34 de Business Intelligence y Big Data (A2-D15).'
  },
  web: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 30, Tecnologías de sistemas de la información, versión 2026.1, apartado sobre HTML/CSS y tecnologías de desarrollo web; corresponde a A1-77 y A2-III-12.'
  },
  dni: {
    url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
    referencia: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1; incluye DNIe, certificados y claves y corresponde a A1-81 y A2-I-6. La duración vigente se comprueba directamente en el BOE.'
  }
};

const records = [
  [1281, [64], ['II-5'], ['modelo relacional', 'superclave', 'clave candidata', 'clave primaria', 'minimalidad'], [sources.keys, academy.databases], null,
    'La cuarta opción es correcta: una clave candidata es una superclave mínima, de modo que retirar cualquiera de sus atributos destruye la propiedad de superclave. El conjunto de todos los atributos siempre es superclave, pero puede no ser mínimo; una candidata no se convierte automáticamente en clave primaria, pues esta es la candidata seleccionada. Cotejo con ITIC Academy, bloque 29, apartado 2.2.', 'vigente'],
  [1282, [43, 69], ['II-14'], ['GPL', 'GPLv3', 'código fuente correspondiente', 'distribución de binarios', 'licencias de software'], [sources.gplFaq, sources.gpl3, academy.software], null,
    'Se especifica GPLv3 para evitar la ambigüedad entre versiones. Si se distribuye el programa modificado en forma de código objeto, el código fuente correspondiente completo debe acompañarlo por uno de los medios que permite la sección 6; no basta entregar solo el fuente original ni solo un fichero de parches. Cotejo con ITIC Academy, bloque 18; el requisito concreto se contrasta con la FAQ oficial de GNU y GPLv3.', 'corregida'],
  [1283, [71], ['III-15'], ['minería de datos', 'aprendizaje no supervisado', 'clustering', 'datos sin etiquetar', 'modelado'], [sources.clustering, academy.data], null,
    'Se concreta el concepto en clustering: agrupar observaciones sin etiquetas previas según su similitud en las características. La pregunta evita usar “descubrir patrones” como equivalente, porque es una descripción demasiado amplia de tareas diversas de minería no supervisada. Cotejo con ITIC Academy, bloques 32 y 34; definición y alcance de clustering verificados en la documentación de scikit-learn.', 'corregida'],
  [1284, [77], ['III-12'], ['HTML', 'CSS', 'selector de ID', 'atributo id', 'selector #'], [sources.cssId, academy.web], null,
    'El selector #inner corresponde al atributo id="inner" del elemento. Por tanto, el estilo se aplica al párrafo con `<p id="inner">…</p>`; una clase `inner` requeriría el selector `.inner`. Se normalizan las mayúsculas y comillas tipográficas del HTML del original. Cotejo con ITIC Academy, bloque 30; el comportamiento se confirma con MDN.', 'corregida'],
  [1285, [81], ['I-6'], ['DNI electrónico', 'DNIe', 'certificado electrónico', 'vigencia', 'Real Decreto 255/2025'], [sources.dniCurrent, sources.dniOld, academy.dni], null,
    'Se corrige la clave y se cita la norma vigente: el artículo 11.3 del Real Decreto 255/2025 fija en dos años la validez de los certificados electrónicos contenidos en el DNI. El Real Decreto 1553/2005, cuyo artículo 12 daba pie a la antigua respuesta de cinco años, quedó derogado con efectos de 2 de abril de 2025. Cotejo con ITIC Academy, bloque 36; prevalece el texto consolidado del BOE.', 'corregida']
];

apply({ numero: '193', fecha: '2026-10-24', records, edits: {
  1282: { texto: 'Antonio modifica un programa licenciado bajo GNU GPL versión 3 y distribuye el programa modificado únicamente en forma de código objeto. ¿Qué debe hacer para cumplir la sección 6 de la GPLv3?', opciones: ['Acompañar el código objeto de la Corresponding Source completa de la versión modificada, bajo GPLv3, por uno de los medios permitidos en esa sección.', 'Entregar únicamente el código fuente original, sin las modificaciones.', 'Entregar únicamente un fichero diff o parche frente al código fuente original.', 'No facilitar el código fuente porque la distribución se realiza desde un sitio web.'], respuesta_correcta: 0 },
  1283: { texto: 'En aprendizaje no supervisado, ¿qué objetivo caracteriza específicamente al clustering de datos sin etiquetas?', opciones: ['Agrupar las observaciones según la similitud de sus características, sin clases objetivo previamente etiquetadas.', 'Entrenar un clasificador con ejemplos etiquetados para asignar categorías conocidas.', 'Predecir el valor futuro de una variable objetivo continua a partir de datos históricos.', 'Asignar cada observación a una de las clases definidas previamente por un experto.'], respuesta_correcta: 0 },
  1284: { texto: 'Una hoja CSS contiene el selector `#inner { float: right; width: 130px; color: blue; }`. ¿Qué atributo HTML debe tener un párrafo para que coincida con ese selector?', opciones: ['`class="inner"`', '`id="inner"`', '`name="inner"`', '`style="inner"`'], respuesta_correcta: 1 },
  1285: { texto: 'Según el artículo 11.3 del Real Decreto 255/2025, ¿cuál es el plazo de validez de los certificados electrónicos contenidos en el DNI?', opciones: ['Dos años.', 'Tres años.', 'Cinco años.', 'Doce meses.'], respuesta_correcta: 0 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-193.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1281: { source: academy.databases, block: 'Bloque 29, Bases de Datos, SQL y Modelado de Datos, versión 2026.1, apartado 2.2 (superclave, candidata mínima y primaria seleccionada).', topics: 'A1-64/A2-II-5' },
  1282: { source: academy.software, block: 'Bloque 18, Protección jurídica, licencias y control del software, versión 2026.1 (software libre, licencias y protección jurídica).', topics: 'A1-43/A1-69/A2-II-14' },
  1283: { source: academy.data, block: 'Bloque 32, Inteligencia Artificial y Ciencia de Datos, versión 2026.1, más cotejo con bloque 34, Business Intelligence y Big Data.', topics: 'A1-71/A2-III-15' },
  1284: { source: academy.web, block: 'Bloque 30, Tecnologías de sistemas de la información, versión 2026.1, HTML/CSS y desarrollo web.', topics: 'A1-77/A2-III-12' },
  1285: { source: academy.dni, block: 'Bloque 36, Seguridad, criptografía, identificación y firma, versión 2026.1 (DNIe y certificados); plazo comprobado en el BOE vigente.', topics: 'A1-81/A2-I-6' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const meta = notes[q.id];
  q.clasificacion.bloque_academia = meta.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa con el programa oficial: ${meta.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${meta.block} Correspondencia orientativa: ${meta.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones = (q.revision.observaciones || '') + comment;
  q.revision.fuentes.push({ url: meta.source.url, referencia: `${meta.source.referencia} Correspondencia: ${meta.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático con ITIC Academy y registro actualizados para el lote 193.');
