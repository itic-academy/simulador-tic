const fs = require('node:fs');
const path = require('node:path');
const apply = require('./aplicar-lote.cjs');

const academy = {
  url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
  referencia: 'ITIC Academy, bloque 32, versión 2026.1: §§ 1 (IA simbólica y sistemas expertos), 2.10 (grafos), 4 (estrategias de diseño), 5 (ordenación y búsqueda), 8.4 (aprendizaje por refuerzo) y 10 (deep learning). Se cotejaron los apartados temáticos correspondientes; las denominaciones históricas concretas no se desarrollan todas en este material.'
};
const a1 = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, tema 70: inteligencia artificial, aprendizaje automático, sistemas expertos y agentes.'
};
const a2 = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, bloque III, tema 5: algoritmos, búsqueda y fundamentos de inteligencia artificial.'
};

const records = [
  [1071, [70], ['III-5'], ['sistemas expertos', 'MYCIN', 'razonamiento bajo incertidumbre', 'factores de certeza'], [
    { url: 'https://impact.dbmi.columbia.edu/shortliffe/Buchanan-Shortliffe-1984/Chapter-11.pdf', referencia: 'Shortliffe y Buchanan, “A Model of Inexact Reasoning in Medicine”, en Rule-Based Expert Systems (1984), capítulo 11: describe cómo MYCIN acumula evidencias mediante factores de certeza para formular recomendaciones clínicas; el sistema no presupone conocimiento completo ni certeza absoluta.' },
    { url: 'https://impact.dbmi.columbia.edu/shortliffe/Buchanan-Shortliffe-1984/Chapter-10.pdf', referencia: 'Buchanan y Shortliffe, Rule-Based Expert Systems (1984), capítulo 10: documenta que MYCIN incorpora respuestas inciertas, ambigüedad y razonamiento bajo incertidumbre, y permite al usuario aportar grados de certeza.' },
    academy, a1, a2
  ], null, 'El absoluto “solo pueden operar con conocimiento completo” no describe a los sistemas expertos basados en reglas en general: MYCIN es un contraejemplo documentado, con factores de certeza y razonamiento clínico ante evidencia incompleta o incierta. Se conserva la clave D, pero se acota la pregunta a MYCIN para que la respuesta falsa sea inequívoca. Cotejo temático con ITIC Academy, bloque 32, §§ 1 y 6; el documento presenta sistemas expertos e IA simbólica y desarrolla la incertidumbre de los sistemas expertos en los apartados correspondientes.', 'corregida'],
  [1072, [70], ['III-5'], ['aprendizaje automático', 'aprendizaje por refuerzo', 'recompensa', 'retorno acumulado'], [
    { url: 'https://mitpress.mit.edu/9780262039246/reinforcement-learning/', referencia: 'Sutton y Barto, Reinforcement Learning: An Introduction, 2.ª ed., MIT Press (2018), capítulos 1 y 3: el agente interactúa con un entorno, recibe recompensas y aprende a maximizar el retorno acumulado esperado.' },
    { url: 'http://incompleteideas.net/book/RLbook2020.pdf', referencia: 'Sutton y Barto, manuscrito de Reinforcement Learning: An Introduction, 2.ª ed., sección 3.1: define el retorno como la suma descontada de recompensas futuras y distingue el objetivo acumulado de la recompensa inmediata.' },
    academy, a1, a2
  ], null, 'Se corrigen erratas y se evita la idea de que “recompensa” sea por sí sola exclusiva de todo algoritmo de aprendizaje por refuerzo. En el marco clásico de los paradigmas de aprendizaje, la señal de recompensa caracteriza el aprendizaje por refuerzo; su objetivo es el retorno acumulado esperado, no necesariamente maximizar cada recompensa inmediata. Cotejado con § 8.4 de ITIC Academy, que define la interacción agente-entorno y el objetivo de retorno acumulado esperado.', 'corregida'],
  [1073, [70], ['III-5'], ['redes neuronales', 'ADALINE', 'MADALINE', 'Adaptive Resonance Theory', 'historia de la IA'], [
    { url: 'https://isl.stanford.edu/~widrow/publications.html', referencia: 'Bernard Widrow, Stanford University, lista de publicaciones: recoge “Adaptive Switching Circuits” (Widrow y Hoff, 1960), el informe técnico original de ADALINE y trabajos posteriores de ADALINE/MADALINE; documenta el linaje de esos modelos.' },
    { url: 'https://sites.bu.edu/steveg/files/2016/06/CarGro1987AppliedOptics.pdf', referencia: 'Carpenter y Grossberg, “ART 2: Stable Self-Organization of Neural Recognition Codes in Response to Arbitrary Lists of Input Patterns”, Applied Optics 26(23), 1987, pp. 4919–4930: presenta ART como una clase de arquitecturas de resonancia adaptativa, distinta de las redes derivadas de perceptrón/ADALINE.' },
    academy, a1, a2
  ], null, 'La taxonomía original agrupaba bajo “redes de una capa” nombres de familias con arquitecturas distintas. Se reformula como una pregunta de identificación histórica: Perceptron y ADALINE son modelos de una capa; MADALINE combina varias unidades ADALINE; ART designa otra familia de arquitecturas de resonancia adaptativa. Se mantiene C. El cotejo con ITIC Academy, bloque 32, §§ 1 y 10 confirma la cobertura de IA/neuronales, aunque no enumera estas cuatro arquitecturas clásicas.', 'corregida'],
  [1074, [70], ['III-5'], ['búsqueda local', 'mejora iterativa', 'hill climbing', 'escalada por máxima pendiente'], [
    { url: 'https://inst.eecs.berkeley.edu/~cs188/textbook/search/local.html', referencia: 'UC Berkeley, CS 188, § 1.5.1: describe hill-climbing/steepest-ascent como búsqueda local que se desplaza iterativamente al vecino que más mejora la función objetivo, hasta que no hay mejora.' },
    { url: 'https://www.cs.ubc.ca/~poole/aibook/3e/html/ArtInt3e.Ch4.S6.html', referencia: 'Poole y Mackworth, Artificial Intelligence: Foundations of Computational Agents, 3.ª ed., § 4.6.1: define iterative best improvement como búsqueda local iterativa y denomina hill climbing/greedy ascent a la variante de maximización.' },
    academy, a1, a2
  ], null, 'Se precisa la categoría como búsqueda local de mejora iterativa. La escalada por máxima pendiente evalúa vecinos del estado actual y elige el de mayor mejora; no es búsqueda en profundidad iterativa, greedy best-first ni A*. Cotejado con ITIC Academy, bloque 32, §§ 4–5, sobre estrategias de diseño y búsqueda; la distinción formal entre mejora local y búsqueda en árbol se verificó con UC Berkeley y Poole/Mackworth.', 'corregida'],
  [1075, [70], ['III-5'], ['teoría de grafos', 'ciclo hamiltoniano', 'grafo hamiltoniano'], [
    { url: 'https://www.maths.tcd.ie/pub/HistMath/People/Hamilton/Icosian/PRIAIcos.pdf', referencia: 'William Rowan Hamilton, “Account of the Icosian Calculus”, Proceedings of the Royal Irish Academy 6 (1858), pp. 415–416: fuente histórica primaria del cálculo y juego icosiano, basados en circuitos cerrados que recorren los vértices del dodecaedro.' },
    { url: 'https://www.cs.cmu.edu/~odonnell/teach/comb/lectures/lect16.pdf', referencia: 'Carnegie Mellon University, material docente de combinatoria sobre ciclos hamiltonianos: define un ciclo hamiltoniano como ciclo que visita cada vértice exactamente una vez y regresa al vértice inicial.' },
    academy, a1, a2
  ], null, 'Se completa la definición que el original dejaba ambigua: un ciclo hamiltoniano es un ciclo que visita cada vértice exactamente una vez y vuelve al vértice inicial; un grafo es hamiltoniano si contiene uno. La opción B sigue siendo la correcta, precisando que el recorrido es cerrado y no repite vértices. Cotejado con ITIC Academy, bloque 32, § 2.10, que cubre grafos; la definición específica se comprobó en el material universitario de Carnegie Mellon y se contextualizó con la fuente histórica de Hamilton.', 'corregida']
];

const edits = {
  1071: { texto: '¿Cuál afirmación es falsa sobre el sistema experto médico MYCIN?', opciones: ['Podía explicar las reglas que contribuían a una recomendación.', 'Su base de conocimiento podía ampliarse incorporando reglas del dominio.', 'Representaba conocimiento médico mediante reglas simbólicas.', 'Solo podía razonar si todos los datos clínicos eran completos y ciertos; no podía manejar incertidumbre ni evidencia ausente.'], respuesta_correcta: 3 },
  1072: { texto: 'En los paradigmas clásicos de aprendizaje automático, ¿qué tipo de aprendizaje se caracteriza por que un agente interactúa con un entorno y recibe señales de recompensa?', opciones: ['Aprendizaje supervisado, que requiere una etiqueta objetivo en cada ejemplo.', 'Aprendizaje no supervisado, que busca estructura sin una señal de recompensa como objetivo.', 'Aprendizaje por refuerzo.', 'Ningún paradigma de aprendizaje automático puede utilizar recompensas.'], respuesta_correcta: 2 },
  1073: { texto: '¿Cuál de estos nombres designa una familia de arquitecturas distinta de los modelos clásicos Perceptron/ADALINE y de la red MADALINE construida con unidades ADALINE?', opciones: ['Perceptron.', 'ADALINE.', 'Adaptive Resonance Theory (ART).', 'MADALINE.'], respuesta_correcta: 2 },
  1074: { texto: '¿Qué algoritmo es un método de búsqueda local de mejora iterativa que selecciona un estado vecino con mayor valor de la función objetivo?', opciones: ['Greedy best-first search, que prioriza nodos de una frontera mediante una heurística.', 'Búsqueda en profundidad iterativa, que repite búsquedas en árbol con límites de profundidad crecientes.', 'A*, que ordena nodos de una frontera mediante g(n)+h(n).', 'Escalada por máxima pendiente (steepest-ascent hill climbing).'], respuesta_correcta: 3 },
  1075: { texto: 'Un grafo no dirigido es hamiltoniano si contiene:', opciones: ['Un ciclo que visita cada vértice exactamente dos veces.', 'Un ciclo que visita cada vértice exactamente una vez y regresa al vértice inicial.', 'Ningún ciclo.', 'Un ciclo y es conexo, aunque el ciclo no pase por todos los vértices.'], respuesta_correcta: 1 }
};

apply({ numero: '151', fecha: '2026-10-24', records, edits });

// Añade una correspondencia verificable con el temario de academia a la ficha y al registro.
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-151.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1071: 'El bloque 32 introduce IA simbólica y sistemas expertos (§§ 1 y 6); cotejo temático, ya que el material no reemplaza la fuente primaria sobre MYCIN.',
  1072: '§ 8.4 explica agente, entorno, acción, recompensa y retorno acumulado esperado.',
  1073: '§§ 1 y 10 cubren IA y redes neuronales; la distinción histórica entre ART y ADALINE/MADALINE se verificó en las publicaciones originales citadas.',
  1074: '§§ 4–5 cubren diseño de algoritmos y búsqueda; hill climbing se cotejó además con las definiciones universitarias citadas.',
  1075: '§ 2.10 cubre grafos; la definición de ciclo hamiltoniano se comprobó en la fuente universitaria citada.'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  const detail = notes[q.id];
  q.clasificacion.bloque_academia = '32';
  q.clasificacion.nota = `Cotejo temático del bloque 32, versión 2026.1: ${detail}`;
  q.comentarios = `${q.comentarios} ${detail}`;
  q.revision.observaciones = q.comentarios;
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo con apartados pertinentes de ITIC Academy incorporado a preguntas y trazabilidad.');
