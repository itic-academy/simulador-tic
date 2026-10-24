const fs = require('node:fs');
const path = require('node:path');
const apply = require('./aplicar-lote.cjs');

const academy32 = {
  url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
  referencia: 'ITIC Academy, bloque 32, versión 2026.1: § 5.9 distingue búsqueda greedy y A*; § 5.7 explica búsqueda binaria; § 7.3 cubre IA distribuida y sistemas multiagente; § 6.4–6.6 describe sistemas basados en conocimiento y encadenamiento. El cotejo es temático y se indican expresamente los conceptos que el material no desarrolla.'
};
const a1ai = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, A1-70: IA, sistemas expertos, agentes inteligentes y robótica.'
};
const a2ai = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, A2-III-5: estructuras de datos, algoritmos de búsqueda y fundamentos de inteligencia artificial.'
};

const records = [
  [1056, [70], ['III-5'], ['búsqueda heurística', 'greedy best-first', 'optimalidad', 'A*'], [
    { url: 'https://www.cs.ubc.ca/~poole/aibook/3e/html/ArtInt3e.Ch3.S6.html', referencia: 'Poole y Mackworth, Artificial Intelligence: Foundations of Computational Agents, § 3.6: greedy best-first prioriza h(n) y puede dar soluciones no óptimas; A* puede ser óptimo con heurística admisible y las condiciones indicadas.' },
    { url: 'https://aimacode.github.io/aima-exercises/search-exercises/', referencia: 'Russell y Norvig, recursos de Artificial Intelligence: A Modern Approach: la optimalidad de búsqueda depende del algoritmo y de propiedades de la heurística; “búsqueda heurística” no es una única garantía.' },
    academy32, a1ai, a2ai
  ], null, 'El original generaliza sobre todos los métodos heurísticos: algunos, como greedy best-first, pueden hallar rápidamente una solución no óptima, pero otros, como A* con heurística admisible y condiciones apropiadas, sí conservan optimalidad. Se delimita el supuesto a greedy best-first, que prioriza h(n), y se pregunta por su garantía: puede hallar pronto una solución, sin garantizar que sea óptima. Se conserva el índice D. Cotejado con § 5.9 de ITIC Academy; el propio material distingue greedy de A*.', 'corregida'],
  [1057, [70], ['III-5'], ['modelo de actores', 'sistemas distribuidos', 'agentes', 'concurrencia'], [
    { url: 'https://doc.akka.io/libraries/akka-core/current/typed/guide/actors-intro.html', referencia: 'Akka, “How the Actor Model Meets the Needs of Modern, Distributed Systems”: el modelo de actores sirve de abstracción para entidades concurrentes que se comunican mediante mensajes y puede mapear la comunicación remota.' },
    { url: 'https://www.sciencedirect.com/science/article/pii/0004370277900339', referencia: 'Carl Hewitt, “Viewing control structures as patterns of passing messages”, Artificial Intelligence 8(3), 1977, DOI 10.1016/0004-3702(77)90033-9: fundamenta el paso de mensajes para sistemas de resolución de problemas basados en conocimiento.' },
    academy32, a1ai, a2ai
  ], null, 'El modelo de actores es un modelo general de computación concurrente/distribuida, no un modelo que por sí solo implemente inteligencia artificial. Se precisa que se pregunta por el modelo que ofrece una abstracción para sistemas distribuidos y que también puede usarse al implementar sistemas multiagente de IA; la opción correcta sigue siendo “modelo de actores”. ITIC Academy § 7.3 cubre IA distribuida y sistemas multiagente, pero no desarrolla expresamente el modelo de actores; para este matiz se usa la documentación Akka y el artículo de Hewitt.', 'corregida'],
  [1058, [], ['III-5'], ['búsqueda binaria', 'tabla ordenada', 'complejidad', 'O(log n)'], [
    { url: 'https://algs4.cs.princeton.edu/code/javadoc/edu/princeton/cs/algs4/BinarySearch.html', referencia: 'Princeton, Algorithms, 4th ed., clase BinarySearch: el método busca en array ordenado y sus operaciones indexOf toman tiempo logarítmico en el peor caso.' },
    { url: 'https://www.cs.cornell.edu/courses/cs2110/2026fa/lectures/lec05/', referencia: 'Cornell University, CS 2110, “Analyzing Complexity”: la búsqueda binaria reduce a la mitad la ventana de búsqueda en cada iteración y ejecuta O(log N) pasos.' },
    academy32, a2ai
  ], null, 'Se confirma la clave A: en una tabla ordenada con acceso adecuado, la búsqueda binaria descarta aproximadamente la mitad del intervalo en cada comparación, lo que da complejidad O(log n). Se precisa “peor caso” y se conserva el índice A. Cotejado con § 5.7 del bloque 32, que explica el requisito de orden y la complejidad O(log n).', 'vigente'],
  [1059, [70], ['III-5'], ['sistemas basados en conocimiento', 'conocimiento inferencial', 'conocimiento estratégico', 'sistemas expertos'], [
    { url: 'https://files01.core.ac.uk/download/25256773.pdf', referencia: '“Intelligent Monitoring and Control”, sección sobre adquisición y clasificación del conocimiento: strategic knowledge describe los pasos que sigue el experto; inferential/judgmental knowledge explica cómo deduce hechos o hipótesis nuevos a partir de la información disponible.' },
    { url: 'https://home.cse.ust.hk/~dekai/523/notes/KM_Slides_Ch08.pdf', referencia: 'Dekai Wu, HKUST, Knowledge Management lecture slides, knowledge-based systems: diferencia conocimiento del dominio y mecanismo procedural/de inferencia que lo aplica.' },
    academy32, a1ai, a2ai
  ], null, 'Se ajusta la formulación para seguir la taxonomía de adquisición de conocimiento citada: el estratégico describe los pasos que sigue el experto al realizar la tarea; el inferencial describe cómo deduce nuevos hechos o hipótesis a partir de la información disponible. La opción D mantiene el sentido correcto del original, pero ya no reduce el conocimiento estratégico a elegir una regla concreta. El bloque 32 § 6.4–6.6 explica base de conocimiento, motor de inferencia y selección de reglas, aunque no desarrolla expresamente estos dos rótulos; se deja constancia de ese límite.', 'corregida'],
  [1060, [70], ['III-5'], ['áreas de aplicación de la IA', 'juegos', 'sistemas expertos', 'NLP', 'robótica'], [
    { url: 'https://aiml.rice.edu/ai-applications', referencia: 'Rice University, AI Applications: recoge aplicaciones y técnicas de IA como juegos, razonamiento, representación del conocimiento, planificación, aprendizaje, NLP y robótica.' },
    { url: 'https://www.cs.umd.edu/researcharea/artificial-intelligence', referencia: 'University of Maryland, Artificial Intelligence research area: incluye juegos, sistemas multiagente, procesamiento del lenguaje, redes neuronales y computación evolutiva entre áreas de investigación de IA.' },
    academy32, a1ai, a2ai
  ], null, 'El enunciado negativo del original era confuso y mezclaba áreas, técnicas y aplicaciones. Se reformula en positivo: juegos, sistemas expertos, demostración de teoremas, procesamiento del lenguaje, razonamiento automático, redes neuronales, algoritmos genéticos y robótica son áreas, métodos o aplicaciones reconocidas de IA; por tanto la opción D es la afirmación correcta. Se conserva el índice D. Cotejado con el § 1 y los §§ 6, 7 y 13 del bloque 32; Rice y Maryland respaldan la amplitud de la lista.', 'corregida']
];

const edits = {
  1056: { texto: 'Si se utiliza greedy best-first search, que prioriza el valor heurístico h(n), ¿qué garantía ofrece sobre la calidad de la primera solución que encuentra?', opciones: ['Siempre es una solución óptima.', 'Nunca encuentra una solución.', 'La solución siempre es óptima, aunque el algoritmo tarde más que A*.', 'Puede encontrar pronto una solución, pero no garantiza que sea óptima.'], respuesta_correcta: 3 },
  1057: { texto: '¿Qué modelo de computación ofrece una abstracción para sistemas concurrentes y distribuidos, y puede utilizarse al implementar sistemas multiagente de inteligencia artificial?', opciones: ['Modelo de actores.', 'Modelo de puntos de función.', 'Modelo de regresión múltiple.', 'Modelo de Nashville.'], respuesta_correcta: 0 },
  1058: { texto: 'En una tabla ordenada con acceso por índice, ¿cuál es la complejidad temporal en el peor caso de la búsqueda binaria?', opciones: ['O(log n), logarítmica.', 'O(n), lineal.', 'O(2^n), exponencial.', 'O(n²), cuadrática.'], respuesta_correcta: 0 },
  1059: { texto: 'En la clasificación del conocimiento usada en adquisición de conocimiento experto, ¿qué distingue al conocimiento inferencial del estratégico?', opciones: ['El inferencial contiene solo hechos iniciales; el estratégico consiste en conclusiones ya derivadas.', 'Son dos nombres para el mismo tipo de conocimiento.', 'El conocimiento estratégico no se utiliza en sistemas basados en conocimiento.', 'El estratégico describe los pasos de la tarea; el inferencial explica cómo se deducen hechos o hipótesis nuevos desde la información disponible.'], respuesta_correcta: 3 },
  1060: { texto: '¿Qué afirmación describe correctamente los ámbitos indicados?', opciones: ['Los juegos y los sistemas expertos no guardan relación con la inteligencia artificial.', 'El procesamiento del lenguaje natural y las redes neuronales quedan fuera de la IA.', 'La demostración de teoremas, los algoritmos genéticos y la robótica no son áreas ni aplicaciones de IA.', 'Los juegos, los sistemas expertos, la demostración de teoremas, el procesamiento del lenguaje, el razonamiento automático, las redes neuronales, los algoritmos genéticos y la robótica son ámbitos reconocidos de IA.'], respuesta_correcta: 3 }
};

apply({ numero: '148', fecha: '2026-10-24', records, edits });

// Marcar la comprobación concreta del bloque de academia en ambas copias de trazabilidad.
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-148.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academySections = {
  1056: '§ 5.9: búsqueda greedy best-first y A*; se explicita que el texto compara sus garantías y no atribuye falta de optimalidad a toda búsqueda heurística.',
  1057: '§ 7.3: IA distribuida y sistemas multiagente. El material no desarrolla expresamente el modelo de actores; ese aspecto se completa con la documentación de Akka y el artículo de Hewitt.',
  1058: '§ 5.7: búsqueda binaria sobre estructura ordenada, reducción a la mitad del intervalo y O(log n).',
  1059: '§§ 6.4–6.6: base de conocimiento, motor de inferencia y selección de reglas. El material no desarrolla expresamente la taxonomía estratégico/inferencial citada; se hace constar y se usa la referencia técnica externa.',
  1060: '§ 1 y §§ 6, 7 y 13: finalidad/ámbitos de IA, sistemas expertos, agentes e IA distribuida y robótica; se cotejó el alcance temático, no una lista literal de cada ejemplo.'
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const section = academySections[c.id];
  q.clasificacion.bloque_academia = '32';
  q.clasificacion.nota = `Cotejo temático del bloque 32, versión 2026.1: ${section}`;
  q.comentarios = `${q.comentarios} ${section}`;
  q.revision.observaciones = q.comentarios;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo del bloque 32 incorporado en preguntas y trazabilidad.');
