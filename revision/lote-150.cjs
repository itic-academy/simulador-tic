const fs = require('node:fs');
const path = require('node:path');
const apply = require('./aplicar-lote.cjs');

const academy32 = {
  url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
  referencia: 'ITIC Academy, bloque 32, versión 2026.1: § 4.6 aborda backtracking y heurísticas en problemas de restricciones; § 5.9–5.10 trata búsqueda heurística y MINIMAX; § 6.3 describe redes semánticas mediante conceptos y relaciones en forma de grafo. Cotejo de esos apartados concretos.'
};
const a1ai = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, A1-70: inteligencia artificial, razonamiento, sistemas expertos, agentes y robótica.'
};
const a2ai = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, A2-III-5: fundamentos de IA, algoritmos y búsqueda.'
};

const records = [
  [1066, [70], ['III-5'], ['restricciones', 'satisfacción de restricciones', 'variables', 'dominios'], [
    { url: 'https://www.cs.ubc.ca/~poole/aibook/3e/html/ArtInt3e.Ch4.S1.html', referencia: 'Poole y Mackworth, Artificial Intelligence: Foundations of Computational Agents, § 4.1: una restricción define las combinaciones legales de valores sobre variables; un CSP tiene variables, dominios y restricciones, y busca asignaciones que las satisfagan.' },
    { url: 'https://www.sciencedirect.com/science/article/pii/0004370277900078', referencia: 'Alan K. Mackworth, “Consistency in Networks of Relations”, Artificial Intelligence 8(1), 1977, DOI 10.1016/0004-3702(77)90007-8: formula tareas de IA como problemas de satisfacción de restricciones y estudia algoritmos de consistencia y búsqueda.' },
    academy32, a1ai, a2ai
  ], null, 'Se reemplaza la formulación confusa que trataba las restricciones como ecuaciones causales y usaba “sincronismo” sin definirlo. Una restricción especifica combinaciones permitidas de valores de variables; en un CSP se busca una asignación que satisfaga las restricciones. La afirmación falsa se concreta en que toda restricción deba ser una ecuación causal. Se conserva el índice C. Cotejado con § 4.6 del bloque 32, que trata problemas de restricciones y backtracking; la definición formal se contrasta con Poole y Mackworth y el artículo de Mackworth.', 'corregida'],
  [1067, [70], ['III-5'], ['MINIMAX', 'juegos adversarios', 'suma cero', 'búsqueda'], [
    { url: 'https://www.cs.ubc.ca/~poole/aibook/3e/html/ArtInt3e.Ch5.S10.html', referencia: 'Poole y Mackworth, § 5.10: MINIMAX modela decisiones alternas de MAX y MIN en juegos adversarios de suma cero; la búsqueda puede truncarse y evaluarse heurísticamente.' },
    { url: 'https://www.cs.cmu.edu/~./17230-s23/lectures/lecture22.pdf', referencia: 'Carnegie Mellon University, Artificial Intelligence, lecture on adversarial search: define minimax para árboles de juego con decisiones alternas de dos jugadores y utilidad terminal.' },
    academy32, a1ai, a2ai
  ], null, 'Se restringe la afirmación de optimalidad al modelo habitual de juego adversario de dos jugadores, suma cero y decisiones alternas, respecto de la función de utilidad definida; con búsqueda limitada se usa una función de evaluación y no se garantiza óptimo global del juego completo. Se conserva el índice C. Cotejado con § 5.10 del bloque 32, que cubre MINIMAX y alfa-beta.', 'corregida'],
  [1068, [70], ['III-5'], ['redes semánticas', 'representación del conocimiento', 'grafos', 'relaciones'], [
    { url: 'https://cse.buffalo.edu/faculty/shapiro/Papers/sha79d.pdf', referencia: 'Stuart C. Shapiro, “Associative Networks: The SNePS Semantic Network Processing System” (1979): caracteriza la red semántica como grafo dirigido etiquetado cuyos nodos representan conceptos y cuyas etiquetas de arco representan relaciones binarias.' },
    { url: 'https://doi.org/10.1002/bs.3830120511', referencia: 'M. Ross Quillian, “Word Concepts: A Theory and Simulation of Some Basic Semantic Capabilities”, Behavioral Science 12(5), 1967, pp. 410–430: representa un modelo de memoria mediante una red de elementos y asociaciones para codificar información y relaciones semánticas.' },
    academy32, a1ai, a2ai
  ], null, 'Se elimina “lingüístico”, que limita innecesariamente la representación, y se define la red semántica como grafo de conceptos y relaciones. Se conserva el índice B. Cotejado con § 6.3 del bloque 32, que explicita conceptos, relaciones y grafos; la definición formal se contrasta con Shapiro y el trabajo fundacional de Quillian.', 'corregida'],
  [1069, [70], ['III-5'], ['redes semánticas', 'nodos', 'arcos', 'conocimiento'], [
    { url: 'https://cse.buffalo.edu/faculty/shapiro/Papers/sha79d.pdf', referencia: 'Stuart C. Shapiro, “Associative Networks: The SNePS Semantic Network Processing System” (1979): los nodos representan conceptos y los arcos etiquetados relaciones entre conceptos.' },
    { url: 'https://doi.org/10.1002/bs.3830120511', referencia: 'M. Ross Quillian, “Word Concepts: A Theory and Simulation of Some Basic Semantic Capabilities”, Behavioral Science 12(5), 1967: modela memoria/conocimiento mediante elementos y asociaciones en red.' },
    academy32, a1ai, a2ai
  ], null, 'Se concreta la definición: nodos representan conceptos y arcos etiquetados representan relaciones entre ellos. Se distingue de frames/slots y de redes neuronales con pesos. Se conserva el índice A. Cotejado con § 6.3 del bloque 32, que describe redes semánticas como grafos de conceptos y relaciones.', 'corregida'],
  [1070, [70], ['III-5'], ['historia de la IA', 'búsqueda heurística', 'GPS', 'heurísticas'], [
    { url: 'https://electronicsandbooks.com/edt/manual/Magazine/C/Computers%20and%20Automatisation%20US/1950s/195907.pdf', referencia: 'Newell, Shaw y Simon, “A General Problem-Solving Program for a Computer”, Computers and Automation 8 (1959): presenta GPS y sus sistemas de heurísticas; define las heurísticas como ayudas prácticas a la exploración, útiles pero no infalibles.' },
    { url: 'https://ai.stanford.edu/~nilsson/OnlinePubs-Nils/PublishedPapers/astar.pdf', referencia: 'Hart, Nilsson y Raphael, “A Formal Basis for the Heuristic Determination of Minimum Cost Paths”, IEEE Transactions on Systems Science and Cybernetics 4(2), 1968: formaliza el uso de información heurística en búsqueda de caminos.' },
    academy32, a1ai, a2ai
  ], null, 'El original preguntaba por una “etapa” de difusión de IA sin definir esa periodización, y podía sugerir erróneamente que la búsqueda heurística solo pertenece a una época. Se formula como pregunta histórica de emergencia: las heurísticas ya eran centrales en la IA simbólica temprana y en GPS de los años cincuenta, aunque siguen usándose hoy. La clave pasa de A a D (“Etapa inicial”). El bloque 32 estudia heurísticas en §§ 4–5, pero no establece esa cronología; se cotejó el contenido técnico y la fecha se apoya en fuentes primarias históricas.', 'historica']
];

const edits = {
  1066: { texto: 'En un problema de satisfacción de restricciones (CSP), ¿cuál afirmación es incorrecta?', opciones: ['Una restricción especifica qué combinaciones de valores de ciertas variables son admisibles.', 'Un CSP se define mediante variables, dominios y restricciones; una solución asigna valores que satisfacen todas las restricciones.', 'Toda restricción debe ser una ecuación causal que describa sincronismos en el comportamiento de objetos.', 'Las restricciones pueden expresar condiciones unarias, binarias o de mayor aridad.'], respuesta_correcta: 2 },
  1067: { texto: 'En un juego adversario de dos jugadores y suma cero, con decisiones alternas y una función de utilidad definida, ¿qué hace MINIMAX?', opciones: ['Realiza una búsqueda ciega no relacionada con árboles de juego.', 'Predice la siguiente versión de un modelo generativo de lenguaje.', 'Elige una jugada maximizando la utilidad mínima que puede asegurar frente a las respuestas del rival.', 'Es un sistema experto de lógica borrosa que aprende sin explorar jugadas.'], respuesta_correcta: 2 },
  1068: { texto: 'En representación del conocimiento, ¿qué es una red semántica?', opciones: ['Una red física de dispositivos que comparte recursos informáticos.', 'Un grafo que representa conceptos mediante nodos y relaciones entre ellos mediante arcos.', 'Una red neuronal con pesos aleatorios, sin conceptos ni relaciones explícitas.', 'Una base de datos cuyos registros se conectan sin representar relaciones semánticas.'], respuesta_correcta: 1 },
  1069: { texto: 'En una red semántica clásica, ¿qué representan normalmente los nodos y los arcos etiquetados?', opciones: ['Los nodos representan conceptos y los arcos, relaciones entre conceptos.', 'Cada nodo es un slot y cada slot es una idea aislada.', 'Los nodos son individuos de una población y los arcos representan mutaciones aleatorias.', 'Cada nodo contiene necesariamente un valor numérico y cada arco un peso de conexión neuronal.'], respuesta_correcta: 0 },
  1070: { texto: 'En la historia de la inteligencia artificial, ¿en qué etapa surgieron como técnica fundacional los métodos de búsqueda heurística? La pregunta se refiere a su aparición histórica, no a que hayan dejado de utilizarse.', opciones: ['En la difusión reciente de la IA generativa.', 'Solo durante la etapa de prototipos comerciales.', 'Después de la consolidación de los sistemas expertos.', 'En la etapa inicial de la IA simbólica, con trabajos como Logic Theorist y General Problem Solver.'], respuesta_correcta: 3 }
};

apply({ numero: '150', fecha: '2026-10-24', records, edits });
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-150.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const sectionNotes = {
  1066: '§ 4.6 trata problemas de restricciones y backtracking; la definición CSP formal se contrastó con la fuente técnica citada.',
  1067: '§ 5.10 explica MINIMAX y poda alfa-beta en juegos adversarios de suma cero.',
  1068: '§ 6.3 describe una red semántica como grafo de conceptos y relaciones.',
  1069: '§ 6.3 desarrolla redes semánticas, conceptos y relaciones representados mediante grafos.',
  1070: '§§ 4–5 cubren búsqueda heurística vigente; el bloque no define una cronología de etapas de IA. La pregunta se acota a la aparición histórica contrastada con publicaciones de los años cincuenta y sesenta.'
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
