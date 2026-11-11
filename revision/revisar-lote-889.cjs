const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academyQuality = 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk';
const academyDb = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';

const fuentes = {
  4766: [
    { url: 'https://efqm.org/the-efqm-model/', referencia: 'EFQM, descripción oficial del modelo vigente: sitúa Purpose, Vision & Strategy bajo Direction y distingue Direction, Execution y Results.' },
    { url: 'https://www.itqm.ch/uploads/files/EFQM%20Brochures/EFQM%20Broschure_2025_English.pdf', referencia: 'EFQM Model 2025, folleto del modelo de la fundación: identifica Criterion 1 Purpose, Vision & Strategy dentro de Direction y Criteria 6–7 dentro de Results.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 103: modelos de excelencia y EFQM.' }
  ],
  4767: [
    { url: 'https://books.google.com/books/about/Object_oriented_Modeling_and_Design.html?id=Q4ZQAAAAMAAJ', referencia: 'Rumbaugh, Blaha, Premerlani, Eddy y Lorensen, Object-Oriented Modeling and Design, Prentice Hall, 1991: obra original de OMT; distingue modelado de objetos, dinámico y funcional.' },
    { url: 'https://cs.ioc.ee/yik/lib/14/Rumbaugh1.html', referencia: 'Catálogo universitario del libro de Rumbaugh et al.: confirma autoría, edición y capítulos separados de Object Modeling, Dynamic Modeling y Functional Modeling.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, temas 89–90: modelos de clases y análisis/modelado de sistemas.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos.' }
  ],
  4768: [
    { url: 'https://www.ibm.com/think/topics/entity-relationship-diagram', referencia: 'IBM, explicación técnica de diagramas E-R: en la notación Chen, las entidades débiles se dibujan con rectángulo doble; distingue la notación crow’s foot y otras variantes.' },
    { url: 'https://doi.org/10.1145/320434.320440', referencia: 'Peter P. Chen, “The Entity-Relationship Model—Toward a Unified View of Data”, ACM Transactions on Database Systems 1(1), 1976, pp. 9–36: artículo original que introduce el modelo E-R y su técnica diagramática.' },
    { url: 'https://support.microsoft.com/en-us/visio/create-a-diagram-with-chen-s-database-notation', referencia: 'Microsoft Support, stencil de notación de base de datos de Chen: documentación de la notación y de sus formas para entidades y relaciones, incluida la entidad débil.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 89: modelado entidad-relación.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.4: modelado de datos y entidad-relación.' }
  ],
  4769: [
    { url: 'https://dl.acm.org/doi/10.1145/182.358441', referencia: 'Russell J. Abbott, “Program Design by Informal English Descriptions”, Communications of the ACM 26(11), 1983, pp. 882–894, DOI 10.1145/182.358441: propone derivar tipos de datos de sustantivos comunes y operadores de verbos/atributos.' },
    { url: 'https://paperzz.com/doc/9331797/program-design-by-informal-english-descriptions', referencia: 'Copia consultable del artículo original de Abbott, con el resumen y las secciones sobre sustantivos, tipos de datos y operadores; usada para comprobar la regla concreta.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 89: clases y análisis del dominio.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos.' }
  ],
  4770: [
    { url: 'https://www.nist.gov/system/files/documents/2025/04/29/61012-1990.pdf', referencia: 'IEEE Std 610.12-1990, Standard Glossary of Software Engineering Terminology, alojado en el repositorio institucional NIST: define big-bang testing como combinar todos los elementos a la vez, no por etapas.' },
    { url: 'https://glossary.istqb.org/en_US/term/integration-testing?exact_matches_first=true&term=verification', referencia: 'Glosario actual del International Software Testing Qualifications Board: ubica integration testing como nivel de pruebas centrado en las interacciones entre componentes o sistemas.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 96: procesos y técnicas de pruebas de software.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema III.7: pruebas de software.' }
  ]
};

const registros = [
  [4766, ['103'], [], ['EFQM', 'EFQM 2025', 'Direction', 'Results', 'estrategia', 'percepciones de las partes interesadas'], fuentes[4766], null,
    'Respuesta C. En el modelo EFQM 2025, Purpose, Vision & Strategy pertenece a Direction. Results agrupa la percepción de las partes interesadas y el desempeño estratégico y operativo. Se fija expresamente la edición actual, porque la estructura histórica de nueve criterios no debe mezclarse con la vigente.', 'corregida'],
  [4767, ['89', '90'], ['III-9'], ['OMT', 'Rumbaugh', 'modelo de objetos', 'modelo dinámico', 'modelo funcional'], fuentes[4767], null,
    'Respuesta A. Los tres modelos complementarios de OMT son el modelo de objetos, el dinámico y el funcional. La pregunta inicial atribuía el trío de OMT al análisis estructurado y llamaba “estático” al modelo de objetos; se corrigen la metodología y el nombre del modelo.', 'corregida'],
  [4768, ['89'], ['III-4'], ['entidad-relación', 'Chen', 'entidad débil', 'rectángulo doble'], fuentes[4768], null,
    'Respuesta B. En la notación tradicional de Chen, una entidad débil se representa con rectángulo doble. Se explicita la notación, dado que existen diagramas E-R con notaciones alternativas que pueden usar símbolos distintos.', 'vigente'],
  [4769, ['89'], ['III-9'], ['Abbott', 'análisis orientado a objetos', 'lenguaje natural', 'sustantivos', 'tipos de datos', 'abstracciones'], fuentes[4769], null,
    'Respuesta A. En la técnica de Abbott para derivar un programa desde una descripción informal, los sustantivos comunes ayudan a identificar tipos de datos/clases; verbos y atributos sugieren operadores. La respuesta original sobre “reconocer abstracciones” era demasiado vaga para ser comprobable.', 'corregida'],
  [4770, ['96'], ['III-7'], ['pruebas de integración', 'big-bang', 'no incremental', 'integración'], fuentes[4770], null,
    'Respuesta C. Big-bang integra los componentes de una vez y no de forma incremental; top-down, bottom-up y sandwich incorporan componentes progresivamente desde distintos niveles.', 'vigente']
];

const ediciones = {
  4766: { texto: 'Según el modelo EFQM 2025, ¿cuál de estos criterios pertenece a Direction y no al bloque Results?', opciones: ['Percepciones de los clientes.', 'Percepciones del personal.', 'Propósito, visión y estrategia.', 'Percepciones de la sociedad.'], respuesta_correcta: 2 },
  4767: { texto: 'En la técnica OMT de Rumbaugh, ¿qué tres modelos complementarios se utilizan para describir un sistema?', opciones: ['Modelo de objetos, modelo dinámico y modelo funcional.', 'Modelo funcional, modelo estático y modelo de casos de uso.', 'Modelo de procesos, modelo de datos y modelo de interfaces.', 'Modelo estático, diagrama de secuencia y diagrama de despliegue.'], respuesta_correcta: 0 },
  4768: { texto: 'En la notación tradicional de Chen para diagramas entidad-relación, ¿cómo se representa una entidad débil?', opciones: ['Con un rectángulo simple.', 'Con un rectángulo doble.', 'Con un rombo dentro de un rectángulo.'], respuesta_correcta: 1 },
  4769: { texto: 'En la técnica de Abbott para derivar un programa a partir de una descripción informal, ¿qué sugieren inicialmente los sustantivos comunes?', opciones: ['Tipos de datos o clases.', 'Operadores o acciones.', 'Estructuras de control.', 'Claves ajenas de la base de datos.'], respuesta_correcta: 0 },
  4770: { texto: '¿Qué estrategia de integración combina los componentes de una vez, en lugar de incorporarlos por etapas?', opciones: ['Top-down.', 'Sandwich.', 'Big-bang.', 'Bottom-up.'], respuesta_correcta: 2 }
};

aplicar({ numero: '889', fecha: '2026-11-11', records: registros, edits: ediciones });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-889.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  4766: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo curricular del modelo de excelencia EFQM; la estructura y los nombres de criterios se comprueban en la edición 2025 de la propia fundación.', url: academyQuality },
  4767: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo de modelado y análisis orientado a objetos; la identificación del trío de modelos se apoya en el texto de Rumbaugh et al.', url: academySystems },
  4768: { bloque: 'Bloque 29 — modelo entidad-relación y bases de datos', detalle: 'cotejo curricular de notación E-R; se especifica Chen y se valida el símbolo con referencias técnicas.', url: academyDb },
  4769: { bloque: 'Bloque 38 — análisis, diseño y construcción de sistemas', detalle: 'cotejo de análisis de abstracciones orientado a objetos; la heurística concreta se contrasta con el artículo original de Abbott.', url: academySystems },
  4770: { bloque: 'Bloque 39 — calidad y mantenimiento', detalle: 'cotejo curricular de niveles y estrategias de prueba; el glosario ISTQB fundamenta la definición de big-bang.', url: academyQuality }
};
for (const cambio of log.cambios) {
  const q = bank.preguntas.find(x => x.id === cambio.id);
  const a = academy[cambio.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${a.detalle} Academy contextualiza el programa, no sustituye la fuente técnica.`;
  q.revision.observaciones += ` Cotejo curricular: ITIC Academy 2026.1, ${a.bloque}: ${a.detalle}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: a.url, referencia: `ITIC Academy 2026.1, ${a.bloque}: cotejo del encaje A1/A2; no se usa como autoridad técnica.` });
  cambio.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy y registro de lote 889 preparados.');
