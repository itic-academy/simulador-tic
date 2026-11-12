const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });
const ine = 'https://www.ine.es/daco/daco42/daco4211/epa0422.pdf';
const matrix = 'https://pure.iiasa.ac.at/2146/1/XB-83-003.pdf';
const pmi = 'https://www.pmi.org/learning/library/critical-path-method-calculations-scheduling-8040';
const lpi = 'https://www.boe.es/eli/es/rdlg/1996/04/12/1/con';
const ens = 'https://www.boe.es/eli/es/rd/2022/05/03/311/con';
const p3p = 'https://www.w3.org/TR/P3P/';
const w3c = 'https://www.w3.org/standards/';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const b12 = 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk';
const b17 = 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk';
const b30 = 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const b43 = 'https://docs.google.com/document/d/1idLNt7OqjLIr_pxoBcGeW2vi9Kldm8Z1/edit?usp=drivesdk';
const b48 = 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';

const records = [
  [5256, ['36'], ['II-15'], ['PERT', 'camino crítico', 'holgura total', 'planificación de proyectos'], [
    ref(pmi, 'Project Management Institute, Critical Path Method Calculations: las actividades críticas tienen holgura total nula; los retrasos en actividades no críticas pueden consumirse hasta agotar su holgura.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 36: metodologías predictivas para gestión de proyectos, GANTT y PERT.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.15: evaluación de alternativas, viabilidad, planificación, presupuestación y control de costes de un proyecto informático.'),
    ref(b12, 'ITIC Academy, bloque 12, versión 2026.2, apartado 2.3 «Herramientas de planificación de proyectos»; diagramas PERT/CPM, holgura y camino crítico.' )
  ], null, 'Se precisa la regla: una actividad no crítica puede retrasarse hasta consumir su holgura total sin mover la fecha final. El retraso la desplaza sólo cuando excede esa holgura y alarga el camino hasta superar la duración crítica vigente; que el camino pase a ser crítico por empate, sin superar al actual, no basta por sí solo para demorar la entrega.', 'corregida'],
  [5257, ['40'], ['II-15'], ['método de permutación', 'decisión multicriterio', 'matriz de decisión', 'ordenación de alternativas'], [
    ref(matrix, 'International Institute for Applied Systems Analysis, Multicriteria Evaluation, sección 3.5 «Permutation Method»: el método examina permutaciones de todas las ordenaciones posibles de los planes/alternativas y usa conjuntamente ponderaciones y resultados para seleccionar la ordenación preferida.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 40: adquisición de sistemas, estudio de alternativas, viabilidad y toma de decisiones.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad de proyectos TIC.'),
    ref(b17, 'ITIC Academy, bloque 17 «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», versión 2026.2: decisión multicriterio y evaluación de alternativas.')
  ], { opcion: [2, 'Método de permutación'] }, 'La descripción corresponde al método de permutación, que compara los órdenes posibles de las alternativas a partir de su desempeño y pesos por criterio. La opción C es la respuesta; «Ninguno» no lo es.', 'corregida'],
  [5258, ['43'], ['II-14'], ['Ley de Propiedad Intelectual', 'programas de ordenador', 'duración derechos de explotación', 'RDL 1/1996'], [
    ref(lpi, 'Real Decreto Legislativo 1/1996, texto consolidado BOE, arts. 96–98: programas originales; protección de documentación preparatoria y manuales; titularidad de personas físicas o jurídicas; para autor persona natural, duración conforme al capítulo I del título III, que establece vida del autor más setenta años (art. 26).'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 43: protección jurídica de los programas de ordenador y control de legalidad del software.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.14: software libre y propietario, licencias y protección jurídica de programas de ordenador.'),
    ref(b43, 'ITIC Academy, Tema 043 «Ley de Propiedad Intelectual», actualización 2026: protección de programas y duración de derechos de explotación conforme al TRLPI.')
  ], null, 'La afirmación falsa es A: el término general de protección no acaba al fallecimiento. Para autor persona natural, el art. 98.1 remite al plazo general del TRLPI: vida del autor más setenta años (art. 26). El programa debe ser original (art. 96.1); el régimen alcanza la documentación preparatoria, manuales y personas jurídicas en los términos de los arts. 96–97.', 'corregida'],
  [5259, ['48'], ['I-9', 'II-13'], ['confidencialidad', 'integridad', 'disponibilidad', 'triada CIA', 'ENS'], [
    ref(ens, 'Real Decreto 311/2022, de 3 de mayo, ENS, texto consolidado, anexo I: para clasificar sistemas enumera cinco dimensiones, C-I-T-A-D (confidencialidad, integridad, trazabilidad, autenticidad y disponibilidad). La pregunta se reescribe para referirse específicamente a la triada clásica CIA, que selecciona C, I y D.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 48: Esquema Nacional de Seguridad y adecuación al ENS.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.9: acceso electrónico y Esquema Nacional de Seguridad; tema II.13: seguridad física y lógica de sistemas.'),
    ref(b48, 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», actualización 2026: ENS, conceptos y dimensiones de seguridad.')
  ], null, 'Se delimita el marco porque «dimensiones canónicas» era ambiguo: la triada clásica CIA está formada por confidencialidad, integridad y disponibilidad. El ENS vigente utiliza cinco dimensiones (añade trazabilidad y autenticidad); no deben confundirse ambos conjuntos. La respuesta D sólo se verifica para la pregunta ahora referida expresamente a la triada CIA.', 'corregida'],
  [5260, ['44', '77'], ['II-9'], ['W3C', 'HTML', 'DOM', 'P3P', 'PVG', 'estándares web'], [
    ref(w3c, 'World Wide Web Consortium, catálogo de estándares y especificaciones: HTML y DOM forman parte de las tecnologías/especificaciones web mantenidas por W3C.'),
    ref(p3p, 'W3C, Platform for Privacy Preferences 1.0: consta como W3C Recommendation de 16-04-2002; su estado fue sustituido/obsoleto en 2018, pero sí fue una especificación publicada por W3C.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 44 (W3C y diseño web) y 77 (HTML, CSS, XML y compatibilidad con estándares).'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.9: lenguajes de marca, HTML y características.'),
    ref(b30, 'ITIC Academy, bloque de Tecnologías de Sistemas de Información, actualización 2026: A1-77, estándares HTML/CSS/XML, navegadores y compatibilidad.')
  ], null, 'La opción PVG no identifica una recomendación o especificación del W3C. Se aclara el término: P3P sí fue una W3C Recommendation en 2002 aunque quedó obsoleta en 2018; DOM y HTML también corresponden a tecnologías/especificaciones W3C. Por ello PVG sigue siendo la respuesta correcta.', 'corregida']
];

const edits = {
  5256: {
    texto: 'En una red PERT/CPM, ¿cuándo puede el retraso de una actividad que inicialmente no pertenece al camino crítico desplazar la fecha prevista de fin del proyecto?',
    opciones: [
      'Cualquier retraso la desplaza, porque todas las actividades tienen holgura cero.',
      'Nunca; una actividad no crítica no puede influir en la fecha final.',
      'Sólo cuando su duración supera la duración de cualquiera de las demás actividades, consideradas aisladamente.',
      'Cuando el retraso excede su holgura total y hace que el camino afectado supere la duración del camino crítico vigente.'
    ],
    respuesta_correcta: 3,
    comentarios: 'Una actividad no crítica puede retrasarse hasta consumir su holgura total sin mover la fecha final. El retraso la desplaza sólo cuando excede esa holgura y alarga el camino hasta superar la duración crítica vigente; que el camino pase a ser crítico por empate, sin superar al actual, no basta por sí solo para demorar la entrega.'
  },
  5258: {
    opcion: [0, 'Los derechos de explotación finalizan al morir o ser declarado fallecido el autor, sin que se aplique un periodo adicional.'],
    comentarios: 'La afirmación falsa es A: el término general de protección no acaba al fallecimiento. Para autor persona natural, el art. 98.1 remite al plazo general del TRLPI: vida del autor más setenta años (art. 26). El programa debe ser original (art. 96.1); el régimen alcanza la documentación preparatoria, manuales y personas jurídicas en los términos de los arts. 96–97.'
  },
  5259: {
    texto: 'En el modelo clásico CIA de seguridad de la información, ¿qué conjunto forma la triada básica?',
    opciones: [
      'Disponibilidad, confidencialidad y trazabilidad.',
      'Confidencialidad, autenticidad y disponibilidad.',
      'Integridad, trazabilidad y autenticidad.',
      'Confidencialidad, integridad y disponibilidad.'
    ],
    respuesta_correcta: 3,
    comentarios: 'La triada clásica CIA está formada por confidencialidad, integridad y disponibilidad. El ENS vigente utiliza cinco dimensiones (añade trazabilidad y autenticidad); no deben confundirse ambos conjuntos.'
  },
  5260: {
    texto: '¿Cuál de las siguientes siglas no identifica una especificación o recomendación publicada por el W3C (vigente u obsoleta)?',
    comentarios: 'La opción PVG no identifica una recomendación o especificación del W3C. P3P sí fue una W3C Recommendation en 2002 aunque quedó obsoleta en 2018; DOM y HTML también corresponden a tecnologías/especificaciones W3C. Por ello PVG sigue siendo la respuesta correcta.'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-987.json'))) {
  aplicar({ numero: '987', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-987.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5256: ['ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC. Planificación estratégica», versión 2026.2, apartado 2.3 «Herramientas de planificación de proyectos» (PERT/CPM).', 'Cotejo A1-36/A2-II.15; el nuevo enunciado distingue explícitamente consumo de holgura y desplazamiento del fin.'],
  5257: ['ITIC Academy, bloque 17 «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», versión 2026.2: decisión multicriterio y evaluación de alternativas.', 'Cotejo A1-40/A2-II.15; se identifica expresamente el método de permutación frente a PROMETHEE y utilidad multiatributo.'],
  5258: ['ITIC Academy, Tema 043 «Ley de Propiedad Intelectual», actualizado en Drive: protección jurídica del software.', 'Cotejo A1-43/A2-II.14, protección jurídica de programas de ordenador.'],
  5259: ['ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», actualización 2026: ENS y dimensiones de seguridad.', 'Cotejo A1-48/A2-I.9/A2-II.13. Se limita a triada CIA y se explica por separado que el ENS recoge cinco dimensiones.'],
  5260: ['ITIC Academy, bloque de Tecnologías de Sistemas de Información (A1-77/A2-II.9): HTML y compatibilidad con estándares web.', 'Cotejo A1-44/A1-77/A2-II.9. P3P fue recomendación W3C, hoy obsoleta; PVG no identifica una especificación.']
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
console.log('Lote 987 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
