const fs = require('node:fs');
const path = require('node:path');
const apply = require('./aplicar-lote.cjs');
const academyAI = {
  url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
  referencia: 'ITIC Academy, bloque 32, versión 2026.1, §§ 6.3–6.4: RDF/ontologías y componentes de los sistemas expertos.'
};
const academyDocs = {
  url: 'https://drive.google.com/file/d/1k7xJ0zVj4fNRbX5M03raV2Vhh0RZMyHX/view?usp=drivesdk',
  referencia: 'ITIC Academy, bloque Gestión documental, edición 2026: tema A1 105 / A2 II-16 y § 2.4 (búsqueda), trata los tesauros como vocabularios controlados con relaciones semánticas/genéricas y orden jerárquico; la clasificación lineal/arborescente/reticular es una taxonomía bibliográfica tradicional, no una tipología normativa de ISO 25964.'
};
const a1AI = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, tema 70: inteligencia artificial, machine learning y sistemas expertos.'
};
const a2AI = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, bloque III, tema 5: búsqueda y fundamentos de inteligencia artificial.'
};
const a1Docs = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, tema 105: sistemas de recuperación de información.'
};
const a2Docs = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, bloque II, tema 16: búsqueda de información y sistemas de gestión documental y de contenidos.'
};
const records = [
  [1081, [70], ['III-5'], ['aprendizaje supervisado', 'clasificación', 'regresión lineal', 'regresión logística'], [
    { url: 'https://scikit-learn.org/stable/modules/linear_model.html', referencia: 'scikit-learn User Guide, Linear Models: LinearRegression minimiza el error cuadrático para predecir una respuesta numérica; LogisticRegression se implementa como clasificador y espera un objetivo categórico.' },
    academyAI, a1AI, a2AI
  ], null, 'El enunciado original generalizaba que la regresión lineal no se usa en clasificación; puede adaptarse/umbralizarse en algunos métodos. Se pregunta ahora por el uso principal del estimador estándar: predecir una variable continua, frente a los clasificadores nombrados. La clave se mantiene en Regresión lineal. Cotejo temático con ITIC Academy, bloque 32, § 8, sobre problemas de clasificación y regresión.', 'corregida'],
  [1082, [105], ['II-16'], ['tesauros', 'recuperación de información', 'estructura lineal', 'descriptores'], [
    { url: 'https://dspace.uazuay.edu.ec/bitstream/datos/6178/1/08270.pdf', referencia: 'Repositorio institucional de la Universidad del Azuay, tesis sobre tesauros, apartado de estructura: en la tipología didáctica tradicional lineal/arborescente/reticular, el tipo lineal se presenta como una serie de palabras sin conexiones; el arborescente ramifica y el reticular entrecruza relaciones.' },
    { url: 'https://www.niso.org/standards-committees/iso-25964', referencia: 'NISO, información oficial sobre ISO 25964-1:2011: describe desarrollo y mantenimiento de tesauros, relaciones entre conceptos, facetas y formas de presentación; no consagra la clasificación lineal/arborescente/reticular como tipología normativa.' },
    academyDocs, a1Docs, a2Docs
  ], null, 'Se mantiene la opción C, pero se acota el enunciado a la tipología bibliográfica tradicional que utiliza las categorías lineal, arborescente y reticular. La clasificación es didáctica y no debe confundirse con los modelos de datos y relaciones descritos por ISO 25964. La academia presenta el tesauro como vocabulario controlado con relaciones semánticas y orden jerárquico, por lo que no respalda como tesauro operativo una lista sin conexiones.', 'corregida'],
  [1083, [70, 107], ['III-5'], ['ENIA', 'Estrategia Nacional de Inteligencia Artificial', 'España Digital 2025', 'PRTR', '2020'], [
    { url: 'https://espanadigital.gob.es/sites/espanadigital/files/2022-06/Estrategia%20Nacional%20de%20Inteligencia%20Artificial.pdf', referencia: 'Gobierno de España, Estrategia Nacional de Inteligencia Artificial (ENIA), documento publicado en 2020: plan de actuación 2020–2025 articulado en seis ejes estratégicos.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2021-10680', referencia: 'BOE-A-2021-10680: sitúa la ENIA presentada en 2020 dentro de la Agenda España Digital y confirma seis ejes de actuación para el período 2020–2025.' },
    { url: 'https://digital.gob.es/digitalizacion/areas-interes/inteligencia-artificial', referencia: 'Ministerio para la Transformación Digital y de la Función Pública, área de IA: actualmente presenta ENIA como uno de los ejes de España Digital 2026 y como componente del PRTR; la redacción y el marco estratégico han evolucionado desde España Digital 2025.' },
    academyAI, a1AI, a2AI
  ], null, 'El original mezcla datos ciertos de la ENIA 2020 (seis ejes y treinta medidas; integración en el PRTR) con una descripción incorrecta de España Digital 2025: la ENIA no era uno de sus diez ejes. Además, las estrategias posteriores actualizaron el marco. Se reemplaza por una pregunta temporal y estable sobre el número de ejes de la ENIA publicada en 2020. La respuesta es seis. Se clasifica como histórica por su referencia expresa al plan 2020–2025; cotejo temático con ITIC Academy, bloque 32, §§ 1 y 6.', 'historica'],
  [1084, [70], ['III-5'], ['sistemas expertos', 'base de conocimiento', 'motor de inferencia', 'IA simbólica'], [
    { url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir82-2505.pdf', referencia: 'NIST, An Overview of Expert Systems (NBSIR 82-2505): define los sistemas expertos a partir de conocimiento y procedimientos de inferencia; describe base de conocimiento, procedimiento de inferencia y memoria de trabajo.' },
    { url: 'https://www.sciencedirect.com/science/article/pii/0141933189900343', referencia: 'Gallacher, “Practical introduction to expert systems”, Microprocessors and Microsystems 13(1), 1989: resume la arquitectura de sistemas basados en reglas en base de conocimiento, motor de inferencia e interfaz.' },
    academyAI, a1AI, a2AI
  ], null, 'El original atribuía a todos los sistemas expertos rasgos no universales (superar al experto, tratar siempre información numérica y simbólica, o ser irreproducibles). Se sustituye por la arquitectura clásica comprobable de un sistema experto basado en reglas: conocimiento explícito separado del mecanismo que aplica reglas/infiere. Cotejo temático con ITIC Academy, bloque 32, §§ 6.4–6.6, sobre sistemas expertos, bases de conocimiento e inferencia.', 'corregida'],
  [1085, [107], ['II-16'], ['RDF', 'RDF Schema', 'rdfs:range', 'rdf:Property', 'web semántica'], [
    { url: 'https://www.w3.org/TR/rdf-schema/', referencia: 'W3C Recommendation, RDF Schema 1.1, § 3.1: se permiten varias declaraciones rdfs:range para una propiedad; los valores de esa propiedad se infieren como instancias de todas las clases declaradas (conjunción, no alternativas). § 6.1 distingue rdf:Property como clase de propiedades.' },
    { url: 'https://www.rfc-editor.org/rfc/rfc4151', referencia: 'IETF RFC 4151, The “tag” URI Scheme, §§ 2.1–2.2: la forma tag: usa un nombre de autoridad (FQDN o email) y una fecha, seguido opcionalmente por un identificador específico; es un esquema URI distinto de la semántica RDF Schema.' },
    academyAI, a1Docs, a2Docs
  ], null, 'La opción original sobre rdfs:range se consideraba falsa en modelos o textos antiguos; en la Recomendación W3C RDF Schema 1.1 es válida: varias declaraciones range implican pertenencia simultánea a todas las clases. La opción sobre email/dominio, fecha e identificador alude en realidad al esquema tag: de RFC 4151, no a RDF Schema, y se excluye expresamente del supuesto. También se corrige la confusión entre rdf:Property (clase de propiedades) y cualquier recurso URI. Respuesta única: la formulación corregida sobre varias declaraciones rdfs:range. Cotejo temático con ITIC Academy, bloque 32, § 6.3 (RDF y ontologías); el bloque Gestión documental se consultó para encuadre en recuperación/búsqueda, pero no desarrolla esta semántica RDF.', 'corregida']
];
const edits = {
  1081: { texto: 'En aprendizaje supervisado, ¿cuál de estos estimadores estándar está diseñado principalmente para predecir una variable objetivo continua, no una etiqueta de clase?', opciones: ['Naive Bayes, clasificador probabilístico.', 'Árbol de decisión de clasificación.', 'Regresión lineal ordinaria (LinearRegression).', 'Regresión logística (LogisticRegression), clasificador para objetivos categóricos.'], respuesta_correcta: 2 },
  1082: { texto: 'En la tipología bibliográfica tradicional de estructuras de tesauros (lineal, arborescente y reticular), ¿qué caracteriza al tesauro lineal?', opciones: ['Los descriptores forman una red de relaciones jerárquicas y asociativas entrecruzadas.', 'Los conceptos se organizan en ramas jerárquicas desde términos generales a específicos.', 'Presenta una serie de términos sin conexiones entre sí, como vocabulario simple.', 'Los descriptores se enlazan formando un ciclo cerrado en anillo.'], respuesta_correcta: 2 },
  1083: { texto: 'Según el documento de la Estrategia Nacional de Inteligencia Artificial publicado en 2020 para el período 2020–2025, ¿cuántos ejes estratégicos de actuación articulaban el plan?', opciones: ['Cuatro.', 'Seis.', 'Ocho.', 'Diez.'], respuesta_correcta: 1 },
  1084: { texto: 'En un sistema experto clásico basado en reglas, ¿qué describe correctamente su arquitectura básica?', opciones: ['La base de conocimiento contiene siempre más conocimientos que cualquier experto humano y no requiere mantenimiento.', 'Se separa una base de conocimiento del dominio de un mecanismo de inferencia que la utiliza para obtener conclusiones.', 'Su funcionamiento no debe ser uniforme ni reproducible.', 'Todos los sistemas expertos adquieren y modifican automáticamente su conocimiento durante la ejecución.'], respuesta_correcta: 1 },
  1085: { texto: 'Según la Recomendación W3C RDF Schema 1.1, ¿qué afirmación es correcta sobre rdfs:range?', opciones: ['RDF no permite ampliar vocabularios con nuevas clases y propiedades.', 'Una propiedad puede tener varias declaraciones rdfs:range; los valores de esa propiedad se infieren como instancias de todas las clases declaradas.', 'Varias declaraciones rdfs:range indican que el valor pertenece a cualquiera de las clases, como alternativas mutuamente excluyentes.', 'rdf:Property es la clase de cualquier recurso que pueda identificarse mediante una URI.'], respuesta_correcta: 1 }
};
apply({ numero: '153', fecha: '2026-10-24', records, edits });
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-153.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyNotes = {
  1081: 'Cotejo temático con ITIC Academy, bloque 32, § 8 (aprendizaje supervisado; clasificación y regresión).',
  1082: 'Cotejo con ITIC Academy, bloque Gestión documental, edición 2026, § 2.4: tesauros como vocabulario controlado con relaciones jerárquicas/asociativas. La tríada lineal/arborescente/reticular es una taxonomía bibliográfica tradicional y no una tipología de ISO 25964.',
  1083: 'Cotejo temático con ITIC Academy, bloque 32, §§ 1 y 6 (IA y sistemas basados en conocimiento); el dato concreto de la ENIA se contrasta con su documento oficial de 2020.',
  1084: 'Cotejo con ITIC Academy, bloque 32, §§ 6.4–6.6 (base de conocimiento, sistemas expertos y mecanismos de inferencia).',
  1085: 'Cotejo con ITIC Academy, bloque 32, § 6.3 (RDF, ontologías y web semántica); la regla normativa exacta se verifica con W3C RDF Schema 1.1.'
};
const academies = {1081: academyAI, 1082: academyDocs, 1083: academyAI, 1084: academyAI, 1085: academyAI};
const a2Ids = {1081: ['A2-III-5'], 1082: ['A2-II-16'], 1083: ['A2-III-5'], 1084: ['A2-III-5'], 1085: ['A2-II-16']};
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  q.clasificacion.bloque_academia = q.id === 1082 ? 'Gestión documental (temas 103–105)' : '32';
  q.clasificacion.nota = academyNotes[q.id];
  q.clasificacion.A2 = a2Ids[q.id];
  q.comentarios = `${q.revision.observaciones} ${academyNotes[q.id]}`;
  q.revision.observaciones = q.comentarios;
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y registro completados.');

