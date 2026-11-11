const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const metrica = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf';
const uml = 'https://www.omg.org/spec/UML/2.5.1/PDF';
const princeton = 'https://ux.princeton.edu/learn-ux/glossary2';
const iso210 = 'https://www.iso.org/standard/77520.html';
const gof = 'https://web.eecs.umich.edu/~movaghar/Gang%20of%20Four%20Book.pdf';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const sources = {
  4816: [
    { url: metrica, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información, actividad ASI 2: obtención, especificación, análisis y validación de requisitos; incluye el catálogo de requisitos como producto. Las tareas de ASI 2 asignan participación a analistas y usuarios expertos.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: análisis funcional y requisitos.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.3: estrategias de determinación y especificación de requisitos.' }
  ],
  4817: [
    { url: uml, referencia: 'Object Management Group, UML 2.5.1, especificación normativa: los diagramas de componentes describen la organización y dependencias entre componentes; los diagramas de secuencia/comunicación representan interacciones, los de actividad flujos de comportamiento y los de despliegue la distribución en nodos.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.9: lenguaje UML.' }
  ],
  4818: [
    { url: uml, referencia: 'Object Management Group, UML 2.5.1, §18 (Use Cases): un actor es un rol desempeñado por una entidad externa que interactúa con el sujeto; no es necesariamente una persona individual.' },
    { url: metrica, referencia: 'PAe, MÉTRICA v3, Análisis del Sistema de Información: los casos de uso describen interacción y requisitos desde las necesidades de usuarios; en ASI 2/ASI 4 participan usuarios expertos y analistas.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 88: casos de uso.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, temas III.3 y III.9: requisitos, análisis/diseño orientado a objetos y UML.' }
  ],
  4819: [
    { url: princeton, referencia: 'Princeton University, UX Glossary: interaction design (IxD) define la estructura y el comportamiento de sistemas interactivos y diseña las relaciones de interacción entre personas y productos/servicios.' },
    { url: iso210, referencia: 'ISO 9241-210:2019, ergonomía de interacción persona-sistema y diseño centrado en las personas para sistemas interactivos; marco pertinente para diseño UI/UX.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 44: accesibilidad, usabilidad y diseño universal; tema 94: prototipos y diseño de interfaces.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.14: accesibilidad, usabilidad y Experiencia de Usuario (UX).' }
  ],
  4820: [
    { url: gof, referencia: 'Gamma, Helm, Johnson y Vlissides, Design Patterns: Elements of Reusable Object-Oriented Software, catálogo GoF: Interpreter, Iterator y Mediator están en los patrones de comportamiento; Composite está en los patrones estructurales. Copia consultable del libro original.' },
    { url: a1, referencia: 'Convocatoria GSI A1 2025, tema 93: técnicas y patrones de diseño de software.' },
    { url: a2, referencia: 'Convocatoria GSI A2 2025, tema III.9: patrones de diseño orientado a objetos.' }
  ]
};

const records = [
  [4816, ['88'], ['III-3'], ['MÉTRICA v3', 'ASI 2', 'catálogo de requisitos', 'analista'], sources[4816], null,
    'Respuesta D. MÉTRICA v3 sitúa el establecimiento de requisitos en ASI 2 y contempla el catálogo de requisitos como producto de la actividad. Los analistas realizan el análisis y la especificación; los usuarios expertos aportan necesidades y participan en su validación. Se explicita el perfil preguntado y se evita dar a entender que el analista trabaja sin usuarios.', 'corregida'],
  [4817, [], ['III-9'], ['UML', 'diagrama de componentes', 'dependencias', 'estructura de software'], sources[4817], null,
    'Respuesta C. El diagrama de componentes representa la organización estructural del software en componentes y sus relaciones/dependencias. Los diagramas de secuencia y comunicación modelan interacciones; actividad modela flujos de comportamiento, y despliegue representa la distribución en nodos. Se reformula el enunciado porque la opción original A podía defenderse parcialmente según el objeto de modelado.', 'corregida'],
  [4818, ['88'], ['III-3', 'III-9'], ['casos de uso', 'actor UML', 'rol', 'usuarios'], sources[4818], null,
    'Respuesta D. En UML, actor es un rol externo respecto del sistema, no una persona concreta. Varias personas pueden desempeñar el mismo rol; una persona puede interactuar bajo roles distintos. Además, un actor puede ser otro sistema o una entidad externa no humana, por lo que no se debe identificar actor exclusivamente con usuario humano.', 'corregida'],
  [4819, ['44', '94'], ['III-14'], ['UX', 'UI', 'IxD', 'diseño de interacción', 'usabilidad'], sources[4819], null,
    'Respuesta C. IxD (interaction design/diseño de interacción) es la disciplina que diseña la estructura y el comportamiento de sistemas interactivos y las relaciones entre personas y productos o servicios. UX abarca la experiencia de uso, y UI se refiere a la interfaz; “RX” no es el término que designa esa disciplina en las fuentes citadas. El nuevo enunciado pregunta por una definición positiva para no basar la clave solo en la ausencia de una sigla.', 'corregida'],
  [4820, ['93'], ['III-9'], ['patrones de diseño', 'GoF', 'Composite', 'patrones estructurales', 'patrones de comportamiento'], sources[4820], null,
    'Respuesta C. En la clasificación GoF, Interpreter, Iterator y Mediator son patrones de comportamiento; Composite es estructural porque compone objetos en jerarquías parte-todo y permite tratarlos uniformemente. Se pregunta por la clasificación clásica del catálogo original, no por las categorías amplias de otros catálogos.', 'corregida']
];

const edits = {
  4816: { texto: 'En MÉTRICA v3, ¿qué perfil profesional participa en la elaboración y especificación del catálogo de requisitos de ASI 2?', opciones: [
    'El consultor, como único responsable de fijar las necesidades de los usuarios.',
    'El jefe de proyecto, que sustituye a los participantes de análisis.',
    'El directivo, como autor exclusivo de la especificación detallada.',
    'El analista, junto con la participación de usuarios expertos.'
  ], respuesta_correcta: 3 },
  4817: { texto: '¿Qué diagrama UML representa la organización del software en componentes y las dependencias entre ellos?', opciones: [
    'El diagrama de secuencia.',
    'El diagrama de actividad.',
    'El diagrama de componentes.',
    'El diagrama de despliegue.'
  ], respuesta_correcta: 2 },
  4818: { texto: 'En un modelo UML de casos de uso, ¿qué relación describe correctamente a los actores respecto de las personas usuarias?', opciones: [
    'Cada actor identifica obligatoriamente a una única persona usuaria.',
    'Una persona solo puede interactuar con el sistema mediante un único rol.',
    'Un actor representa siempre un sistema informático y nunca a una persona.',
    'Un actor representa un rol: puede ser desempeñado por distintas personas y una misma persona puede asumir roles diferentes.'
  ], respuesta_correcta: 3 },
  4819: { texto: 'Según el glosario de UX de Princeton, ¿qué disciplina diseña la estructura y el comportamiento de los sistemas interactivos?', opciones: [
    'UX (experiencia de usuario), que se limita al diseño visual de pantallas.',
    'UI (interfaz de usuario), que define todas las relaciones y objetivos de interacción.',
    'IxD (diseño de interacción).',
    'RX (response experience), término equivalente a la especificación de requisitos de software.'
  ], respuesta_correcta: 2 },
  4820: { texto: 'En la clasificación del catálogo GoF, ¿cuál de estos patrones no pertenece a la categoría de comportamiento?', opciones: [
    'Interpreter.',
    'Mediator.',
    'Composite.',
    'Iterator.'
  ], respuesta_correcta: 2 }
};

aplicar({ numero: '899', fecha: '2026-11-11', records, edits });

const repo = path.join(__dirname, '..');
const bankPath = path.join(repo, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-899.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const details = {
  4816: 'bloque 38 — análisis, diseño y construcción: MÉTRICA v3, obtención y especificación de requisitos.',
  4817: 'bloque 38 — análisis, diseño y construcción: notación UML y diagramas de estructura y comportamiento.',
  4818: 'bloque 38 — análisis, diseño y construcción: casos de uso, actores y análisis funcional.',
  4819: 'bloque 38 — análisis, diseño y construcción: diseño de interfaces, UI, UX e IxD.',
  4820: 'bloque 38 — análisis, diseño y construcción: orientación a objetos y patrones GoF.'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const detail = details[change.id];
  q.clasificacion.bloque_academia = `ITIC Academy 2026.1, ${detail} Cotejo curricular únicamente; no es autoridad técnica.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo curricular: ${detail} La academia ubica la materia; la respuesta se fundamenta en las fuentes técnicas.`;
  q.revision.observaciones += ` Cotejo curricular: ${detail} La academia se usa para cobertura, no para validar la respuesta.`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url: academy38, referencia: `ITIC Academy 2026.1, ${detail} Se coteja cobertura curricular, no autoridad técnica.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido a las preguntas del lote 899.');
