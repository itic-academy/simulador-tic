const fs = require('node:fs');
const path = require('node:path');
const apply = require('./aplicar-lote.cjs');

const academy32 = {
  url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
  referencia: 'ITIC Academy, bloque 32, versión 2026.1: § 6.2 trata lógica, representación simbólica y Prolog; § 6.4 describe base de conocimiento y motor de inferencia; §§ 10.1–10.2 desarrollan neuronas artificiales y aprendizaje de redes. Se indica cuando la cobertura es temática y no una taxonomía literal.'
};
const a1ai = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, A1-70: inteligencia artificial, sistemas expertos y aprendizaje automático.'
};
const a2ai = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, A2-III-5: estructuras de datos, algoritmos y fundamentos de inteligencia artificial.'
};

const records = [
  [1061, [70], ['III-5'], ['IA lógica', 'sistemas formales', 'semántica', 'teoría de la demostración'], [
    { url: 'https://www.cl.cam.ac.uk/teaching/0708/LogicProof/notes.pdf', referencia: 'University of Cambridge, Logic and Proof: distingue sintaxis y teoría de la demostración (reglas para construir pruebas) de semántica (significado e interpretación de fórmulas).' },
    { url: 'https://www.umu.se/en/education/courses/foundations-of-logic-and-model-theory-5dv102/', referencia: 'Umeå University, Foundations of Logic and Model Theory: diferencia la verdad lógica/semántica de los sistemas formales para derivar enunciados, e incluye sistemas de prueba y modelos lógicos.' },
    academy32, a1ai, a2ai
  ], null, 'El original alude a “sistemas de Kleene” sin identificar qué formalismo concreto designa, y contiene distractores que mezclan cálculo proposicional, predicados y métodos heurísticos. Se reformula para evaluar la distinción verificable entre la perspectiva sintáctica/proof-theoretic (sistemas formales de prueba) y la semántica/model-theoretic (interpretaciones o modelos). Se conserva la clave C. El bloque 32 aborda IA simbólica y lógica en § 6.2, pero no presenta esta dicotomía con esa terminología; se cotejó el tema y se contrastó la distinción con Cambridge y Umeå.', 'corregida'],
  [1062, [70], ['III-5'], ['Prolog', 'programación lógica', 'ingeniería del conocimiento', 'hechos y reglas'], [
    { url: 'https://doi.org/10.1145/154766.155362', referencia: 'Alain Colmerauer y Philippe Roussel, “The Birth of Prolog”, HOPL-II, ACM, 1993, pp. 37–52: historia y diseño del lenguaje Prolog, nacido de trabajo de procesamiento del lenguaje natural y programación lógica.' },
    { url: 'https://softwarepreservation.computerhistory.org/prolog/', referencia: 'Computer History Museum, Prolog and Logic Programming Historical Sources Archive: reúne especificaciones, implementaciones y artículos originales; documenta el origen del lenguaje y su relación con la programación lógica.' },
    academy32, a1ai, a2ai
  ], null, 'C++ y Java también pueden emplearse en ingeniería del conocimiento; por eso “lenguaje específico” era demasiado amplio. Se pregunta por el lenguaje de programación lógica declarativa asociado clásicamente a la IA simbólica, en el que se expresan hechos, reglas y consultas: Prolog. Se conserva el índice C. El bloque 32 § 6.2 explica Prolog en IA simbólica, aunque recuerda que es una referencia histórica y no el lenguaje dominante de ML.', 'corregida'],
  [1063, [70], ['III-5'], ['redes neuronales', 'aprendizaje', 'entrenamiento', 'pesos'], [
    { url: 'https://doi.org/10.1038/323533a0', referencia: 'Rumelhart, Hinton y Williams, “Learning representations by back-propagating errors”, Nature 323 (1986), pp. 533–536: describe cómo el entrenamiento ajusta repetidamente los pesos de conexión para reducir la diferencia entre salidas reales y deseadas.' },
    { url: 'https://www.tensorflow.org/guide/keras/training_with_built_in_methods', referencia: 'TensorFlow Core, Training with built-in methods: el ciclo de entrenamiento calcula la pérdida y actualiza los parámetros del modelo mediante un optimizador.' },
    academy32, a1ai, a2ai
  ], null, '“En base a la experiencia” era demasiado vago y no explica el mecanismo de aprendizaje. Se concreta que una red neuronal aprende durante el entrenamiento ajustando sus pesos y sesgos a partir de ejemplos, de acuerdo con una función de pérdida y un algoritmo de optimización; no recibe impulsos biológicos ni aprende por recursividad como propiedad general. Se mantiene la clave C tras reformular esa opción. Cotejado con §§ 10.1–10.2 del bloque 32 y con el artículo de backpropagation.', 'corregida'],
  [1064, [70], ['III-5'], ['sistemas expertos', 'base de conocimiento', 'motor de inferencia', 'hechos', 'reglas'], [
    { url: 'https://hai.stanford.edu/ai-definitions/what-is-an-expert-system', referencia: 'Stanford HAI, “What is an Expert System?”: describe el uso de una base de conocimiento de hechos y reglas lógicas para obtener conclusiones.' },
    { url: 'https://www.shortliffe.net/Buchanan-Shortliffe-1984/Contents.pdf', referencia: 'Buchanan y Shortliffe (eds.), Rule-Based Expert Systems: The MYCIN Experiments of the Stanford Heuristic Programming Project, Addison-Wesley, 1984; fuente primaria sobre la arquitectura y componentes de los sistemas expertos basados en reglas.' },
    academy32, a1ai, a2ai
  ], null, 'La frase “el conocimiento, independientemente del paradigma” generalizaba una arquitectura particular como si fuera una propiedad universal del conocimiento. Se reformula como componentes nucleares de un sistema experto clásico basado en reglas: base de conocimiento con hechos/reglas y motor de inferencia que los aplica. La respuesta A mantiene el índice, con el mecanismo de inferencia explicitado. El bloque 32 § 6.4 presenta expresamente ambos componentes.', 'corregida'],
  [1065, [70], ['III-5'], ['sistemas expertos', 'motor de inferencia', 'reglas', 'hechos', 'razonamiento'], [
    { url: 'https://hai.stanford.edu/ai-definitions/what-is-an-expert-system', referencia: 'Stanford HAI, “What is an Expert System?”: los sistemas expertos usan hechos y reglas de una base de conocimiento para inferir conclusiones.' },
    { url: 'https://www.shortliffe.net/Buchanan-Shortliffe-1984/Contents.pdf', referencia: 'Buchanan y Shortliffe (eds.), Rule-Based Expert Systems, 1984: documentación clásica de sistemas expertos basados en reglas y sus mecanismos de razonamiento.' },
    academy32, a1ai, a2ai
  ], null, 'Se precisa la función solicitada: el motor de inferencia aplica reglas de la base de conocimiento a los hechos disponibles y deriva conclusiones. La base almacena el conocimiento del dominio, pero no ejecuta por sí sola el razonamiento. Se conserva la clave B. Cotejado con § 6.4 del bloque 32, que enuncia estos dos componentes y sus funciones.', 'corregida']
];

const edits = {
  1061: { texto: 'En lógica, ¿qué dos perspectivas complementarias permiten caracterizar la deducción y la consecuencia?', opciones: ['La forma de derivar fórmulas puede definirse sin especificar un lenguaje ni reglas de inferencia.', 'Los sistemas formales de prueba son métodos heurísticos y no pertenecen al razonamiento lógico.', 'Los sistemas formales describen derivaciones mediante reglas; la semántica estudia verdad y consecuencia respecto de interpretaciones o modelos.', 'La semántica y los sistemas formales son sinónimos y no permiten distinguir prueba de interpretación.'], respuesta_correcta: 2 },
  1062: { texto: '¿Qué lenguaje de programación lógica declarativa, asociado clásicamente a la IA simbólica, expresa conocimiento mediante hechos, reglas y consultas?', opciones: ['C++.', 'Java.', 'Prolog.', 'Pascal.'], respuesta_correcta: 2 },
  1063: { texto: 'Durante el entrenamiento, ¿cómo aprende normalmente una red neuronal a reducir sus errores de predicción?', opciones: ['Recibiendo impulsos eléctricos biológicos en sus axones.', 'Ejecutando recursividad, con independencia de los datos y del objetivo.', 'Ajustando pesos y sesgos a partir de ejemplos mediante un algoritmo de aprendizaje que optimiza una función de pérdida.', 'Almacenando sin cambios los ejemplos en la capa de salida.'], respuesta_correcta: 2 },
  1064: { texto: 'En un sistema experto clásico basado en reglas, ¿qué dos componentes nucleares colaboran para obtener conclusiones?', opciones: ['La base de conocimiento, que contiene hechos y reglas, y el motor de inferencia, que los aplica.', 'La interfaz gráfica y el sistema operativo.', 'El compilador y la base de datos de usuarios.', 'El componente simbólico y el componente procedimental, como categorías universales de todo conocimiento.'], respuesta_correcta: 0 },
  1065: { texto: 'En un sistema experto basado en reglas, ¿qué componente aplica las reglas de la base de conocimiento a los hechos disponibles para derivar conclusiones?', opciones: ['La base de conocimiento.', 'El motor de inferencia.', 'La interfaz de adquisición de conocimiento.', 'El módulo de presentación.'], respuesta_correcta: 1 }
};

apply({ numero: '149', fecha: '2026-10-24', records, edits });
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-149.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const sectionNotes = {
  1061: '§ 6.2 aborda lógica e IA simbólica, pero no expone literalmente la distinción formal sistemas/semántica; cotejo temático complementado con fuentes universitarias de lógica.',
  1062: '§ 6.2 trata Prolog como lenguaje de programación lógica ligado a IA simbólica.',
  1063: '§§ 10.1–10.2 cubren neurona artificial, perceptrón multicapa y entrenamiento de redes; se complementa la exposición con la publicación primaria de backpropagation.',
  1064: '§ 6.4 define la base de conocimiento y el motor de inferencia como componentes nucleares de un sistema experto.',
  1065: '§ 6.4 describe que el motor de inferencia determina qué conocimiento es aplicable y deriva conclusiones desde reglas y hechos.'
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const detail = sectionNotes[c.id];
  q.clasificacion.bloque_academia = '32';
  q.clasificacion.nota = `Cotejo temático del bloque 32, versión 2026.1: ${detail}`;
  q.comentarios = `${q.comentarios} ${detail}`;
  q.revision.observaciones = q.comentarios;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo del bloque 32 incorporado en preguntas y trazabilidad.');
