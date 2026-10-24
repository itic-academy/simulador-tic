const fs = require('node:fs');
const path = require('node:path');
const apply = require('./aplicar-lote.cjs');

const academy = {
  url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
  referencia: 'ITIC Academy, bloque 32, versión 2026.1: §§ 5.8–5.9 sobre BFS y búsqueda heurística; §§ 6.2–6.6 sobre Prolog, redes semánticas, sistemas expertos y encadenamientos. El documento no detalla la secuencia de prioridad entre valor, valor por defecto y procedimiento IF-NEEDED en un lenguaje de marcos.'
};
const a1 = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, tema 70: inteligencia artificial, sistemas expertos y técnicas de representación y razonamiento.'
};
const a2 = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, bloque III, tema 5: estrategias de diseño de algoritmos, búsqueda y fundamentos de inteligencia artificial.'
};

const records = [
  [1076, [70], ['III-5'], ['IA simbólica', 'representación del conocimiento', 'redes semánticas', 'marcos', 'reglas', 'encadenamiento'], [
    { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 32, §§ 6.3–6.6: redes semánticas como grafos de conceptos y relaciones; sistemas basados en conocimiento; encadenamiento hacia delante y hacia atrás.' },
    { url: 'https://www.cs.gordon.edu/courses/cps331/lectures-2014/Knowledge%20Representation.pdf', referencia: 'Gordon College, material de Knowledge Representation: distingue valores y defaults en slots, procedimientos IF-NEEDED/IF-ADDED y mecanismos de representación mediante frames.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: a1.referencia },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: a2.referencia }
  ], null, 'Se conserva la idea general de que los tres formalismos admiten mecanismos de inferencia, pero se especifica cada asociación y se evita presentar las listas como exhaustivas: las redes semánticas permiten recorrer relaciones/heredar propiedades; los marcos usan slots, valores por defecto y procedimientos ligados; las reglas pueden ejecutarse con encadenamiento hacia delante o hacia atrás según el motor. La clave “todas” queda correcta bajo esta formulación. Cotejado con ITIC Academy, bloque 32, §§ 6.3–6.6, que cubre de forma expresa redes, sistemas expertos y ambos encadenamientos.', 'corregida'],
  [1077, [70], ['III-5'], ['marcos', 'slots', 'IF-NEEDED', 'procedimientos ligados', 'representación del conocimiento'], [
    { url: 'https://dspace.mit.edu/entities/publication/6aafeb67-3c0d-45ed-8fca-1029fef1c47c', referencia: 'Roberts y Goldstein, The FRL Primer, MIT AI Memo 408 (1977): documenta el lenguaje Frame Representation Language y procedimientos ligados a slots, incluidos los que se activan cuando se necesita un valor.' },
    { url: 'https://bista.sites.dmi.unipg.it/didattica/CSP/PublicKRSlides.pdf', referencia: 'Università degli Studi di Perugia, slides de Knowledge Representation: IF-ADDED se activa al asignar un valor e IF-NEEDED al solicitarlo; en ciertos sistemas se heredan procedimientos y valores de los frames superiores.' },
    { url: 'https://www.cs.gordon.edu/courses/cps331/lectures-2014/Knowledge%20Representation.pdf', referencia: 'Gordon College, Knowledge Representation, sección sobre información incompleta en frames: diferencia los valores explícitos, defaults y procedimientos de lectura IF-NEEDED.' },
    academy, a1, a2
  ], null, 'El original impone un orden universal entre valor explícito, default e IF-NEEDED, aunque esos detalles dependen del lenguaje de marcos y de cómo materializa los defaults. Se sustituye por la semántica estable: una rutina IF-NEEDED se asocia al slot y se invoca cuando se solicita su valor, si no hay un filler disponible, para intentar inferirlo u obtenerlo. Se diferencia de IF-ADDED e IF-REMOVED. Se conserva la opción D como clave. Cotejado con § 6 del bloque 32 para representación simbólica; el documento no prescribe esta secuencia operativa concreta.', 'corregida'],
  [1078, [70], ['III-5'], ['búsqueda informada', 'búsqueda heurística', 'greedy best-first'], [
    { url: 'https://www.cs.ubc.ca/~poole/aibook/3e/html/ArtInt3e.Ch3.S6.html', referencia: 'Poole y Mackworth, Artificial Intelligence: Foundations of Computational Agents, 3.ª ed., § 3.6: búsqueda informada usa una heurística para guiar la expansión; greedy best-first selecciona según la estimación h(n).' },
    { url: 'https://inst.eecs.berkeley.edu/~cs188/textbook/search/informed.html', referencia: 'UC Berkeley CS188, § 1.4.2: greedy search expande el nodo de la frontera con menor valor heurístico, estimando cercanía a una meta.' },
    academy, a1, a2
  ], null, 'Se mantiene la respuesta B, pero se nombra el método como greedy best-first y se define la señal que lo hace heurístico: prioriza los nodos según una estimación h(n) del coste restante. Profundidad limitada, coste uniforme y búsqueda bidireccional estándar no necesitan esa heurística. Cotejado con ITIC Academy, bloque 32, § 5.9, que distingue uniform-cost por g(n), greedy por h(n) y A* por g(n)+h(n).', 'corregida'],
  [1079, [70], ['III-5'], ['programación lógica', 'Prolog', 'lenguajes declarativos', 'Common Lisp', 'CLOS'], [
    { url: 'https://www.swi-prolog.org/pldoc/man?section=clp', referencia: 'SWI-Prolog Reference Manual, capítulo 8: identifica CLP como paradigma de programación declarativa y señala que Prolog puede considerarse un caso particular de CLP.' },
    { url: 'https://www.swi-prolog.org/pldoc/man?section=clpfd-integer-arith', referencia: 'SWI-Prolog Reference Manual, § A.9.3: explica el carácter relacional/declarativo de las restricciones y su uso en Prolog.' },
    { url: 'https://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node260.html', referencia: 'Common Lisp the Language, 2nd Edition, capítulo 28: CLOS se presenta como el sistema de objetos de Common Lisp, no como un lenguaje de programación independiente.' },
    academy, a1, a2
  ], null, 'El enunciado negativo original no tenía una única respuesta defendible: Prolog es declarativo/lógico, mientras que Lisp es multiparadigma y CLOS es el sistema de objetos de Common Lisp, no un lenguaje independiente; por tanto podían elegirse varias opciones. Se convierte en una pregunta positiva sobre identificación de un lenguaje de programación lógica: Prolog. Cotejado con ITIC Academy, bloque 32, § 6.2, que describe Prolog como programación lógica y contrasta su uso simbólico con Lisp.', 'corregida'],
  [1080, [70], ['III-5'], ['búsqueda no informada', 'búsqueda ciega', 'BFS', 'primero en anchura'], [
    { url: 'https://www.cs.cmu.edu/~15281-s24/coursenotes/search/index.html', referencia: 'Carnegie Mellon University, course notes on search: BFS expands frontier states in increasing depth and does not use a heuristic estimate of distance to the goal.' },
    { url: 'https://www.cs.ubc.ca/~poole/aibook/3e/html/ArtInt3e.Ch3.S5.html', referencia: 'Poole y Mackworth, § 3.5: búsqueda no informada utiliza solo la definición del problema; breadth-first search expande los nodos por niveles.' },
    academy, a1, a2
  ], null, 'Se mantiene BFS/primero en anchura como clave y se la caracteriza por su regla de expansión por niveles, sin información heurística sobre la distancia a la meta. Las opciones se cambian para que “mejora iterativa” y búsqueda adversaria no induzcan a mezclar taxonomías distintas. Cotejado con ITIC Academy, bloque 32, § 5.8, que define BFS por niveles y recoge su aparición en el examen A1 de 2019.', 'corregida']
];

const edits = {
  1076: { texto: '¿Qué asociación entre formalismos de IA simbólica y mecanismos de inferencia es correcta?', opciones: ['En las redes semánticas pueden recorrerse relaciones y heredarse propiedades entre conceptos.', 'En los marcos se puede razonar con slots, valores por defecto y procedimientos ligados.', 'En sistemas basados en reglas pueden emplearse encadenamiento hacia delante o hacia atrás, según el motor.', 'Todas las asociaciones anteriores describen mecanismos de inferencia utilizados en esos formalismos.'], respuesta_correcta: 3 },
  1077: { texto: 'En un sistema de marcos, ¿qué describe correctamente un procedimiento IF-NEEDED asociado a un slot?', opciones: ['Se ejecuta al añadir un valor al slot.', 'Se ejecuta al borrar un valor del slot.', 'Se ejecuta cada vez que se crea cualquier frame, aunque el slot no se consulte.', 'Se invoca al solicitar el valor del slot cuando no hay un filler disponible, para intentar calcularlo u obtenerlo.'], respuesta_correcta: 3 },
  1078: { texto: '¿Cuál de estos métodos estándar de búsqueda informada prioriza los nodos de la frontera mediante una estimación heurística h(n) del coste restante hasta la meta?', opciones: ['Búsqueda en profundidad limitada.', 'Greedy best-first search (búsqueda voraz primero el mejor).', 'Búsqueda de coste uniforme, que prioriza el coste acumulado g(n).', 'Búsqueda bidireccional estándar, que ejecuta búsquedas desde inicio y meta sin usar h(n).'], respuesta_correcta: 1 },
  1079: { texto: '¿Cuál de estos es un lenguaje de programación lógica, asociado al paradigma declarativo?', opciones: ['Prolog.', 'Common Lisp.', 'CLOS, el sistema de objetos de Common Lisp.', 'Java.'], respuesta_correcta: 0 },
  1080: { texto: 'En búsqueda en espacio de estados, ¿qué método estándar es no informado porque no utiliza una estimación heurística de cercanía a la meta y expande los nodos por niveles?', opciones: ['Primero en anchura (BFS).', 'Greedy best-first search, guiado por h(n).', 'A*, guiado por g(n)+h(n).', 'Beam search, que limita la frontera mediante una función de evaluación.'], respuesta_correcta: 0 }
};

apply({ numero: '152', fecha: '2026-10-24', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-152.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const notes = {
  1076: '§§ 6.3–6.6 enumeran redes, sistemas expertos y ambos tipos de encadenamiento; la correspondencia es temática y no una clasificación exhaustiva.',
  1077: '§ 6.2 cubre marcos y programación simbólica, pero no el orden de evaluación de IF-NEEDED; ese detalle se cotejó con el informe MIT FRL y las referencias universitarias citadas.',
  1078: '§ 5.9 separa búsqueda uniforme, voraz y A* mediante g(n), h(n) y g(n)+h(n).',
  1079: '§ 6.2 describe Prolog como programación lógica y a Lisp por su flexibilidad para la programación simbólica.',
  1080: '§ 5.8 define BFS por niveles y señala su presencia en un examen A1 de 2019; § 5.9 contrasta búsqueda informada.'
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
console.log('Cotejo con ITIC Academy incorporado a preguntas y trazabilidad.');
