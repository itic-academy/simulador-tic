const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const sphinx = 'https://cmusphinx.github.io/wiki/tutorialconcepts/';
const morpheme = 'https://glossary.sil.org/term/morpheme';
const iso29148 = 'https://www.iso.org/standard/72089.html';
const ieee29148 = 'https://standards.ieee.org/ieee/29148/6937/';
const yourdon = 'https://vtda.org/books/Computing/Programming/StructuredDesign_EdwardYourdonLarryConstantine.pdf';
const uml = 'https://www.omg.org/spec/UML';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy70 = 'https://drive.google.com/file/d/1TK0LY4JDblNzmcSMFecDp5TDAm04fjXK/view?usp=drivesdk';
const academy12 = 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const records = [
  [5276, ['70'], ['III-5'], ['reconocimiento del habla', 'unidades acústicas', 'morfema', 'fonema', 'difonema'], [
    ref(sphinx, 'CMUSphinx, Basic concepts of speech recognition: fonemas y difonemas son unidades que se utilizan para representar pronunciaciones y contextos acústicos; el nivel de unidad depende del componente del reconocedor.'),
    ref(morpheme, 'SIL Glossary of Linguistic Terms: morfema es la unidad mínima significativa de la gramática de una lengua; pertenece al análisis morfológico, no a la segmentación fonético-acústica tradicional.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 70: inteligencia artificial, PLN y tecnologías asociadas.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.5: fundamentos de inteligencia artificial, tecnologías asociadas y áreas de aplicación.'),
    ref(academy70, 'ITIC Academy, temas 070–071 «Inteligencia artificial y Ciencia de datos»: reconocimiento del habla y procesamiento del lenguaje natural.')
  ], null, 'La opción B (morfema) es la unidad morfológica de significado, no una unidad fonético-acústica tradicional como fonema, difonema o semisílaba. La pregunta se acota al nivel acústico/fonético: los reconocedores también pueden emplear subpalabras o morfemas en modelos léxicos y lingüísticos, por lo que la formulación anterior era demasiado amplia.', 'corregida'],
  [5277, ['96'], ['III-3'], ['ISO/IEC/IEEE 29148', 'ingeniería de requisitos', 'estándares', 'IEEE 830'], [
    ref(iso29148, 'ISO, ISO/IEC/IEEE 29148:2018: edición 2, confirmada en 2024 como vigente; establece procesos y productos de ingeniería de requisitos para sistemas y software.'),
    ref(ieee29148, 'IEEE Standards Association, IEEE/ISO/IEC 29148-2018: la identifica como Active Standard y muestra que sustituye a la edición 29148-2011.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 96: procesos de pruebas y garantía de calidad, documentación y estándares del desarrollo de software.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.3: determinación de requerimientos y especificación de requisitos de software.'),
    ref(academy38, 'ITIC Academy, Análisis, diseño y construcción de sistemas de información, edición 2026: recoge 29148:2018 como referencia vigente y distingue las referencias históricas IEEE 830/1233.')
  ], null, 'La respuesta B es correcta tras actualizar la edición: ISO/IEC/IEEE 29148:2018, «Systems and software engineering — Life cycle processes — Requirements engineering». La edición 2011 y el IEEE 830 son referencias anteriores; los otros distractores contienen números, años o títulos incorrectos.', 'corregida'],
  [5278, ['87'], ['III-2'], ['planificación estratégica', 'sistemas de información', 'objetivos', 'programas', 'presupuesto'], [
    ref(a1, 'Convocatoria A1 GSI 2025, tema 87: planificación estratégica de sistemas de información y comunicaciones y plan de sistemas de información.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.2: gestión, planificación de procesos y proyectos de desarrollo.'),
    ref(academy12, 'ITIC Academy, Tema 087 y bloque 12 «Directivo TIC: planificación estratégica», edición 2026: alineamiento estratégico, objetivos, cartera de iniciativas y planificación de recursos.'),
    ref('https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk', 'ITIC Academy, bloque 09 «Organización y gestión de sistemas de información», edición 2026: alineamiento de los SI con los objetivos de la organización.')
  ], null, 'La opción D es correcta en el nivel general de planificación: se fijan objetivos y metas, se definen programas/proyectos para alcanzarlos y se determinan alcance y recursos presupuestarios. La pregunta se formula como conjunto de decisiones básicas, pues su detalle depende del método de planificación empleado.', 'corregida'],
  [5279, ['90'], ['III-3'], ['DFD', 'análisis de transacción', 'análisis de transformación', 'centro de transacción'], [
    ref(yourdon, 'Yourdon y Constantine, Structured Design, cap. 11: transaction analysis identifica un centro que clasifica cada transacción y la despacha a la rama que procesa su tipo; se deriva del flujo del DFD.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 90: análisis dinámico, modelado de procesos y BPMN.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.3: análisis, derivación y especificación de requisitos.'),
    ref(academy38, 'ITIC Academy, Análisis, diseño y construcción de sistemas de información, edición 2026, apartado de DFD: distingue análisis de transacción (ramas según evento/tipo) de análisis de transformación (entrada, transformación y salida).')
  ], null, 'La técnica es el análisis de transacción: un centro clasifica un flujo de entrada como transacción y selecciona/deriva una de varias ramas de procesamiento. El análisis de transformación se aplica al patrón entrada–transformación central–salida. Se corrigen la sintaxis y las tildes del enunciado.', 'corregida'],
  [5280, ['88'], ['III-9'], ['UML', 'casos de uso', 'actores', 'relaciones', 'sujeto'], [
    ref(uml, 'Object Management Group, UML 2.5.1, capítulo 18 Use Cases: especifica actores, casos de uso, relaciones y el sujeto/límite del sistema en los modelos de casos de uso.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 88: análisis funcional, casos de uso e historias de usuario.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.9: análisis y diseño orientado a objetos, UML y patrones.'),
    ref(academy38, 'ITIC Academy, Análisis, diseño y construcción de sistemas de información, edición 2026: análisis funcional, UML, actores y relaciones de casos de uso.')
  ], null, 'Los conceptos centrales son casos de uso, actores y relaciones (asociación, inclusión, extensión y generalización); también puede representarse el sujeto o límite del sistema. Se añade este último elemento a la opción correcta para que el resumen no sugiera que los diagramas carecen de frontera de sistema.', 'corregida']
];

const edits = {
  5276: {
    texto: 'En una representación fonético-acústica tradicional para reconocimiento del habla, ¿cuál de estas opciones es una unidad morfológica de significado y no una unidad acústico-fonética?',
    comentarios: 'La opción B (morfema) es la unidad morfológica de significado, no una unidad fonético-acústica tradicional como fonema, difonema o semisílaba. La pregunta se acota al nivel acústico/fonético: los reconocedores también pueden emplear subpalabras o morfemas en modelos léxicos y lingüísticos, por lo que la formulación anterior era demasiado amplia.'
  },
  5277: {
    texto: '¿Cuál es la referencia vigente que establece procesos de ingeniería de requisitos para sistemas y software?',
    opcion: [1, 'ISO/IEC/IEEE 29148:2018. Ingeniería de sistemas y software — Procesos del ciclo de vida — Ingeniería de requisitos.'],
    comentarios: 'La respuesta B es correcta: ISO/IEC/IEEE 29148:2018, «Systems and software engineering — Life cycle processes — Requirements engineering». La edición 2011 y el IEEE 830 son referencias anteriores; los otros distractores contienen números, años o títulos incorrectos.'
  },
  5278: {
    texto: 'En términos generales, ¿qué conjunto reúne las decisiones básicas de un plan estratégico de sistemas de información?',
    comentarios: 'La opción D es correcta en el nivel general de planificación: se fijan objetivos y metas, se definen programas/proyectos para alcanzarlos y se determinan alcance y recursos presupuestarios. La pregunta se formula como conjunto de decisiones básicas, pues su detalle depende del método de planificación empleado.'
  },
  5279: {
    texto: 'En el diseño estructurado a partir de un DFD, si un flujo de entrada se clasifica y se dirige por una de varias ramas según el tipo de transacción, ¿qué técnica se emplea para derivar la estructura del sistema?',
    comentarios: 'La técnica es el análisis de transacción: un centro clasifica un flujo de entrada como transacción y selecciona/deriva una de varias ramas de procesamiento. El análisis de transformación se aplica al patrón entrada–transformación central–salida. Se corrigen la sintaxis y las tildes del enunciado.'
  },
  5280: {
    texto: '¿Qué elementos conceptuales aparecen en un modelo de casos de uso de UML?',
    opcion: [2, 'Casos de uso, actores, relaciones entre ellos y, cuando se representa, el sujeto o límite del sistema.'],
    comentarios: 'Los conceptos centrales son casos de uso, actores y relaciones (asociación, inclusión, extensión y generalización); también puede representarse el sujeto o límite del sistema. Se añade este último elemento a la opción correcta para que el resumen no sugiera que los diagramas carecen de frontera de sistema.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-991.json'))) {
  aplicar({ numero: '991', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-991.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5276: ['ITIC Academy, temas 070–071 «Inteligencia artificial y Ciencia de datos»: reconocimiento del habla y procesamiento del lenguaje natural.', 'Cotejo A1-70/A2-III.5; se distingue la unidad morfológica de las unidades acústico-fonéticas tradicionales.'],
  5277: ['ITIC Academy, Análisis, diseño y construcción de sistemas de información, edición 2026: requisitos y estándar ISO/IEC/IEEE 29148:2018.', 'Cotejo A1-96/A2-III.3; 29148:2018 es la edición vigente; IEEE 830/29148:2011 son referencias históricas.'],
  5278: ['ITIC Academy, Tema 087 y bloque 12 «Directivo TIC: planificación estratégica», edición 2026: objetivos, iniciativas y planificación de recursos.', 'Cotejo A1-87/A2-III.2; objetivos, cartera de programas/proyectos, alcance y recursos integran la planificación estratégica.'],
  5279: ['ITIC Academy, Análisis, diseño y construcción de sistemas de información, edición 2026: análisis de transacción frente al análisis de transformación en DFD.', 'Cotejo A1-90/A2-III.3; si el centro decide la rama por el tipo de flujo, se aplica análisis de transacción.'],
  5280: ['ITIC Academy, Análisis, diseño y construcción de sistemas de información, edición 2026: UML, actores, casos de uso, relaciones y sujeto del sistema.', 'Cotejo A1-88/A2-III.9; el modelo incluye casos de uso, actores, relaciones y el límite del sistema cuando se muestra.']
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
console.log('Lote 991 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
