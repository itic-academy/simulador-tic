const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academyDb = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const academyAgile = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academyCms = 'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk';
const academyMetrica = 'https://docs.google.com/document/d/1ihmfO0PXn1lenLrjgS3SmP0xg01CLnS0/edit?usp=drivesdk';

const fuentes = {
  4711: [
    { url: 'https://www.ibm.com/think/topics/entity-relationship-diagram', referencia: 'IBM, Entity-Relationship Diagram: el modelo conceptual es una representación de alto nivel del dominio y sus datos; frente al modelo lógico detalla menos atributos y relaciones y no llega al esquema físico.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 89: análisis del dominio, modelado de dominio y modelo entidad-relación.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.4: modelado de datos y diseño de bases de datos.' }
  ],
  4713: [
    { url: 'https://www.iso.org/standard/78176.html', referencia: 'ISO/IEC 25010:2023, edición 2 vigente: modelo de calidad del producto TIC/software con nueve características. Esta edición sustituyó a ISO/IEC 25010:2011; entre sus características están adecuación funcional, capacidad de interacción y mantenibilidad. C++ es un lenguaje, no una característica de calidad; «funcionalidad inacabada» tampoco es una característica del modelo.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 98: métricas y evaluación de la calidad del software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.13: calidad del software, modelos, métricas, normas y estándares.' }
  ],
  4714: [
    { url: 'https://www.iso.org/standard/62542.html', referencia: 'ISO 15489-1:2016, confirmada como vigente: principios y procesos para crear, capturar y gestionar documentos/records y sus controles; no es una norma de sindicación o publicación web de contenidos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 104: gestión documental, gestión de contenidos y tecnologías CMS/DMS.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.16: sistemas de gestión documental y de contenidos; la sindicación de contenido aparece expresamente como materia relacionada, por lo que el reactivo se acota a la gestión de records conforme a ISO 15489.' }
  ],
  4715: [
    { url: 'https://administracionelectronica.gob.es/content/dam/pae/pae-home/documentos/documentacion/metodologias-y-guias/metricav3/METRICA_V3_Tecnicas.pdf', referencia: 'MÉTRICA v3, documento oficial Técnicas y Prácticas, índice y apartado «Técnicas de desarrollo»: Análisis Coste/Beneficio se incluye en dicho grupo, antes del apartado separado «Técnicas de gestión de proyectos». La técnica estima y compara costes previstos y beneficios.' },
    { url: 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3', referencia: 'Portal de Administración Electrónica, página oficial de MÉTRICA v3: publica los documentos de la metodología y enlaza el manual de Técnicas (apartado Técnicas).' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA de planificación y desarrollo de sistemas de información.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema II.15: evaluación de alternativas, análisis de viabilidad, presupuestación y control de costes.' }
  ]
};

const registros = [
  [4711, ['89'], ['III-4'], ['modelo conceptual', 'modelo de datos', 'modelo entidad-relación', 'visión global'], fuentes[4711], null,
    'Respuesta A, con el término «visión global» precisado: el modelo conceptual ofrece una representación de alto nivel del dominio y sus datos, independiente del esquema físico. El detalle de atributos por entidad corresponde a modelos más detallados; el flujo de información se aborda con técnicas de procesos.', 'corregida'],
  [4712, ['88'], ['III-2'], ['metodologías', 'Dorfman', 'requisitos de metodología'], null, null,
    'Pendiente de fuente primaria. No se ha localizado una publicación primaria de Dorfman que permita comprobar que esta lista concreta de seis propiedades («documentada, repetible, enseñable, basada en técnicas probadas, validada y apropiada») le pertenece ni cuál de las variantes del enunciado es textual. Se conserva la clave histórica sin certificarla y se deja constancia explícita de que la atribución y la respuesta requieren cotejo bibliográfico; el programa oficial solo acredita el encaje curricular, no la lista.', 'pendiente_fuente'],
  [4713, ['98'], ['III-13'], ['ISO/IEC 25010:2023', 'calidad del software', 'capacidad de interacción', 'mantenibilidad'], fuentes[4713], null,
    'Respuesta D, actualizada a ISO/IEC 25010:2023. Esta edición denomina una característica «capacidad de interacción»; «usabilidad» era la denominación de la edición 2011 retirada. Adecuación funcional, capacidad de interacción y mantenibilidad son características del modelo actual; C++ y «funcionalidad inacabada» no lo son.', 'corregida'],
  [4714, ['104'], ['II-16'], ['gestión documental', 'ISO 15489-1:2016', 'gestión de records', 'sindicación de contenidos'], fuentes[4714], null,
    'Respuesta D, con alcance delimitado. ISO 15489-1 trata de la creación, captura y gestión de documentos/records, incluidos sus controles y procesos; la publicación o sindicación de contenidos es una función editorial/CMS distinta. La palabra «redifusión» del reactivo original era ambigua porque la sindicación sí figura en el temario de contenidos de A2; se sustituye por «sindicación pública automática» y se especifica el marco de gestión de records.', 'corregida'],
  [4715, ['95'], ['II-15'], ['MÉTRICA v3', 'análisis coste-beneficio', 'técnicas de desarrollo', 'evaluación de alternativas'], fuentes[4715], null,
    'Respuesta B. Aunque la técnica se aplica a la valoración de costes, beneficios y viabilidad de proyectos, el manual oficial MÉTRICA v3 la incluye en el apartado «Técnicas de desarrollo»; lo distingue del apartado posterior «Técnicas de gestión de proyectos». Se conserva la clasificación explícita del manual para evitar inferirla solo por su uso.', 'corregida']
];

const ediciones = {
  4711: { texto: 'En el modelado de datos, ¿qué propósito distingue al modelo conceptual?', opciones: ['Representar de forma global y de alto nivel el dominio y los datos relevantes, sin fijar el esquema físico.', 'Definir tipos de columna, índices y opciones de almacenamiento de un SGBD concreto.', 'Establecer exhaustivamente las propiedades físicas de cada atributo para su implementación.', 'Describir la secuencia temporal de actividades y el flujo de control de un proceso.'], respuesta_correcta: 0 },
  4713: { texto: 'Según ISO/IEC 25010:2023, ¿qué opción reúne únicamente características del modelo de calidad del producto?', opciones: ['Adecuación funcional, lenguaje C++ y funcionalidad inacabada.', 'Usabilidad, funcionalidad inacabada y mantenibilidad.', 'Adecuación funcional, mantenibilidad y uso del lenguaje C++.', 'Adecuación funcional, capacidad de interacción y mantenibilidad.'], respuesta_correcta: 3 },
  4714: { texto: 'Según ISO 15489-1:2016, ¿cuál de estas actividades no es un proceso propio de la creación, captura y gestión de documentos/records?', opciones: ['Crear y capturar documentos como evidencia de la actividad.', 'Aplicar controles y procesos de gestión documental durante el tiempo que sea necesario.', 'Gestionar los documentos atendiendo a requisitos y responsabilidades asignadas.', 'Sindicar automáticamente en abierto todos los contenidos sin atender a autorización, acceso ni política editorial.'], respuesta_correcta: 3 },
  4715: { texto: 'En el manual oficial de técnicas de MÉTRICA v3, ¿en qué grupo se clasifica el análisis coste/beneficio?', opciones: ['Prácticas.', 'Técnicas de desarrollo.', 'Técnicas de gestión de proyectos.', 'Ninguna de las anteriores: es un proceso independiente.'], respuesta_correcta: 1 }
};

aplicar({
  numero: '878', fecha: '2026-11-11',
  records: registros,
  edits: ediciones
});

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-878.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academia = {
  4711: { bloque: 'Bloque 29 — bases de datos y modelo E-R', detalle: 'modelado de dominio, entidades y relaciones; el material Academy se utiliza como índice de cobertura curricular.', url: academyDb },
  4712: { bloque: 'Bloque 15 — metodologías ágiles', detalle: 'cotejo de encaje con las materias de metodologías; el material consultado no acredita la atribución a Dorfman ni resuelve la variante textual.', url: academyAgile },
  4713: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo curricular del apartado de calidad del software; la norma ISO citada determina la respuesta y edición vigente.', url: academyQuality },
  4714: { bloque: 'Bloque 40 / Temas 103–104 — gestión documental y CMS', detalle: 'el material Academy se usa para ubicar la cobertura de gestión documental y de contenidos; la delimitación entre records management y sindicación se contrasta con ISO 15489 y el temario oficial.', url: academyCms },
  4715: { bloque: 'Tema 093 — MÉTRICA v3', detalle: 'cotejo curricular del análisis coste/beneficio y MÉTRICA v3; la clasificación se contrasta con el manual oficial de Técnicas y Prácticas.', url: academyMetrica }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academia[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo Academy: ${a.detalle} Academy y la convocatoria se emplean para encaje curricular, no como fuente técnica primaria.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026, ${a.bloque}: comprobación del encaje curricular; no se usa para fundamentar la respuesta técnica.` });
  q.comentarios = q.revision.observaciones;
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular y registro de lote 878 preparados.');
