const fs = require('node:fs');
const path = require('node:path');
const apply = require('./aplicar-lote.cjs');

const academyAI = {
  url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',
  referencia: 'ITIC Academy, bloque 32, versión 2026.1: § 1.3 (IA simbólica y sistemas expertos), § 6 (representación del conocimiento, sistemas expertos e inferencia), § 10 (redes neuronales) y § 12 (visión/OCR). Se usa como cotejo de cobertura, no como autoridad normativa.'
};
const academyFrames2023 = {
  url: 'https://drive.google.com/file/d/1iqL2-TEeR7aSwDQwmbI-ZD4A0r2TOvcY/view?usp=drivesdk',
  referencia: 'ITIC Academy, «Tema 070 y 71 Inteligencia Artificial y Ciencia de datos», versión 2023: sección de inferencia en marcos con herencia; define la estrategia Z como búsqueda local (agotar facetas del marco antes de ascender) y la N como búsqueda ascendente por la faceta en curso antes de cambiar de faceta. Es terminología específica de esa edición, no una taxonomía normativa universal; no aparece desarrollada en la edición 2026.1.'
};
const a1AI = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, tema 70 (IA, aprendizaje automático, NLP, visión artificial, sistemas expertos, robótica y agentes inteligentes).'
};
const a1OCR = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, tema 84 (reconocimiento óptico de caracteres, OCR/ICR).'
};
const a1Processes = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  referencia: 'BOE-A-2025-25938, anexo I, tema 90 (modelado de procesos y BPMN), como correspondencia de contexto para automatización de procesos; el temario no nombra RPA expresamente.'
};
const a2AI = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, bloque III, tema 5/D5 (fundamentos de IA, tecnologías asociadas y áreas de aplicación).'
};
const a2Workflow = {
  url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',
  referencia: 'BOE-A-2025-26262, anexo IX, bloque II, tema 16 (sistemas de gestión de flujos de trabajo y gestión documental), correspondencia contextual para automatización de procesos; no menciona RPA expresamente.'
};

const records = [
  [1091, [70], ['III-5'], ['redes neuronales', 'aprendizaje supervisado', 'retropropagación', 'gradiente', 'función de pérdida'], [
    { url: 'https://doi.org/10.1038/323533a0', referencia: 'Rumelhart, Hinton y Williams, “Learning representations by back-propagating errors”, Nature 323 (1986), pp. 533–536, DOI 10.1038/323533a0: describe back-propagation como procedimiento que ajusta iterativamente los pesos para reducir la diferencia entre salida real y deseada.' },
    academyAI, a1AI, a2AI
  ], null, 'Se formula la pregunta para identificar la retropropagación como procedimiento que propaga el error desde la salida por las capas y obtiene señales/gradientes usados en el ajuste de pesos. No se confunde con el optimizador (por ejemplo, descenso del gradiente), que es quien aplica una regla de actualización concreta. La fuente original presenta el ajuste iterativo de pesos para minimizar una medida de discrepancia; el enunciado evita equiparar toda pérdida con MSE. Cotejo con ITIC Academy, bloque 32, § 10.', 'corregida'],
  [1092, [70], ['III-5'], ['representación del conocimiento', 'marcos', 'herencia', 'facetas', 'estrategia Z', 'estrategia N', 'material de academia 2023'], [
    academyFrames2023,
    { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 32, versión 2026.1, § 6: cobertura actual de representación mediante marcos y conocimiento; no reproduce los nombres de estrategia Z/N, que se documentan en la edición 2023 citada separadamente.' },
    a1AI, a2AI
  ], null, 'La respuesta C se conserva, pero el nuevo enunciado limita el supuesto al modelo didáctico de marcos con herencia de la edición 2023 del temario de academia. En esa fuente Z agota las facetas localmente antes de ascender; N asciende buscando la misma faceta antes de pasar a otra. No se presenta Z/N como una norma ni como taxonomía universal: la edición 2026.1 sigue cubriendo marcos, pero no desarrolla esos nombres. Cotejo directo con ambas ediciones de ITIC Academy y correspondencia temática con A1-70/A2-III-5.', 'corregida'],
  [1093, [70], ['III-5'], ['sistemas expertos', 'sistemas basados en reglas', 'encadenamiento hacia delante', 'encadenamiento hacia atrás', 'mecanismos de inferencia'], [
    { url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-188.pdf', referencia: 'NIST SP 500-188, §§ 2.4 y 3.3: separa la base de conocimiento del componente de inferencia y describe estrategias de inferencia, incluido encadenamiento hacia atrás; el informe también trata el encadenamiento hacia delante.' },
    { url: 'https://www.cs.utexas.edu/~novak/cs343361.html', referencia: 'University of Texas at Austin, CS343, ciclo de reconocimiento-acción en sistemas de producción: las reglas cuyos antecedentes casan con hechos forman el conjunto de conflicto; se selecciona y dispara una regla y se actualiza la memoria de trabajo.' },
    academyAI, a1AI, a2AI
  ], null, 'El original agrupaba mecanismos de inferencia con formalismos de representación, herramientas de construcción y familias de razonamiento, por lo que la categoría era inconsistente. Se pregunta ahora por dos estrategias de control efectivamente utilizadas en sistemas expertos basados en reglas: encadenamiento hacia delante, desde hechos, y hacia atrás, desde una meta. Cotejo con ITIC Academy, bloque 32, §§ 6.4–6.6, y con NIST SP 500-188.', 'corregida'],
  [1094, [70], ['III-5'], ['sistemas expertos', 'ventajas', 'validación', 'eficiencia', 'selección del dominio'], [
    { url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-188.pdf', referencia: 'NIST SP 500-188, §§ 4.3–4.7: la utilidad de un sistema experto depende de que el problema sea estrecho, descomponible y adecuado; el desarrollo requiere recursos y dedicación de expertos, por lo que la mejora de productividad debe evaluarse para la aplicación concreta.' },
    { url: 'https://www.fhwa.dot.gov/publications/research/safety/aard/', referencia: 'Federal Highway Administration, Verification, Validation and Evaluation of Expert Systems, handbook (1995): considera la evaluación y validación de sistemas expertos un problema sustantivo de su ciclo de vida y señala que la falta de pruebas limita su implantación.' },
    academyAI, a1AI, a2AI
  ], null, 'La lista original trataba «eficiencia» como una ventaja siempre válida, aunque esta depende de la tarea, la calidad del conocimiento, la integración, el mantenimiento y el coste total. Se delimita la pregunta: permanencia del conocimiento codificado mientras se mantenga el sistema, facilidad de reproducción y consistencia al aplicar las mismas reglas/datos son propiedades típicas; no puede prometerse una mejora universal de eficiencia frente al proceso humano. NIST condiciona la adecuación a un problema concreto y exige valorar productividad y recursos; FHWA trata validación/evaluación como parte crítica. Cotejo temático con ITIC Academy, bloque 32, §§ 6.4–6.6.', 'corregida'],
  [1095, [70, 84, 90], ['II-16'], ['RPA', 'automatización de procesos', 'OCR', 'NLP', 'IA', 'contact center', 'hiperautomatización'], [
    { url: 'https://learn.microsoft.com/en-us/ai-builder/use-in-flow-overview', referencia: 'Microsoft Learn, AI Builder in Power Automate overview: enumera capacidades de IA utilizables desde flujos, entre ellas reconocimiento de texto/OCR, extracción de frases clave, sentimiento, idioma y entidades, además de procesamiento documental.' },
    { url: 'https://www.ibm.com/docs/en/rpa/23.0.x?topic=tasks-ocr-automation', referencia: 'IBM Robotic Process Automation documentation, OCR usage during automation: documenta proveedores OCR integrables en automatizaciones para extraer texto de documentos, imágenes y controles de interfaz.' },
    { url: 'https://learn.microsoft.com/en-us/dynamics365/guidance/resources/cs-pad-automation', referencia: 'Microsoft Learn, Automate agent tasks with Power Automate: describe flujos RPA de escritorio para automatizar tareas repetitivas en el entorno de representantes de atención al cliente.' },
    academyAI, a1AI, a1OCR, a1Processes, a2Workflow
  ], null, 'Se mantiene la idea de que OCR, NLP y componentes de IA pueden ampliar algunas soluciones RPA, pero se elimina la lectura de que toda instalación los usa. Microsoft documenta modelos de texto, extracción de entidades/frases, sentimiento y procesamiento de documentos ejecutables en Power Automate; IBM documenta OCR dentro de tareas RPA. La aplicación en contact center también es posible: Microsoft publica un ejemplo de RPA para validar credenciales de clientes. El temario actual de academia cubre IA/OCR y automatización de procesos, pero no presenta RPA como epígrafe independiente; por ello las fuentes de producto verifican el detalle técnico. Las correspondencias A1-90/A2-II-16 se indican como contexto de flujos de trabajo, no como mención literal de RPA.', 'corregida']
];

const edits = {
  1091: { texto: 'En el entrenamiento de una red neuronal feedforward, ¿qué procedimiento propaga hacia atrás el error desde la salida por las capas anteriores para calcular cómo contribuyen los pesos a la pérdida?', opciones: ['Método de la varianza.', 'Encadenamiento hacia atrás propio de sistemas de reglas.', 'Retropropagación del error (backpropagation).', 'Método de Kohonen para mapas autoorganizados.'], respuesta_correcta: 2 },
  1092: { texto: 'En la descripción de inferencia en marcos con herencia del temario ITIC Academy de 2023, ¿qué diferencia correctamente las estrategias Z y N?', opciones: ['Z asciende buscando primero la misma faceta; N agota primero todas las facetas locales.', 'Ambas estrategias ascienden a la superclase antes de consultar los valores del marco local.', 'Z agota las facetas del marco local antes de ascender; N busca la faceta en curso a lo largo de la jerarquía antes de cambiar de faceta.', 'Z y N solo se diferencian en el orden de disparo de reglas de producción.'], respuesta_correcta: 2 },
  1093: { texto: 'En un sistema experto basado en reglas, ¿qué pareja identifica dos estrategias de control de la inferencia?', opciones: ['Encadenamiento hacia delante y encadenamiento hacia atrás.', 'Redes semánticas y marcos.', 'Aserciones y árboles de decisión.', 'Shells y conjuntos borrosos.'], respuesta_correcta: 0 },
  1094: { texto: '¿Cuál de estas afirmaciones no puede considerarse una ventaja universal de todo sistema experto sin evaluar la tarea y su implantación concreta?', opciones: ['El conocimiento codificado puede mantenerse disponible mientras se conserve y actualice el sistema.', 'Una solución puede reproducirse para varios usuarios o instalaciones.', 'Con las mismas reglas y datos, el sistema puede aplicar de forma uniforme el conocimiento codificado.', 'El sistema mejorará necesariamente la eficiencia total frente al proceso humano, incluidos desarrollo, integración y mantenimiento.'], respuesta_correcta: 3 },
  1095: { texto: 'En algunas soluciones RPA, ¿qué tecnologías pueden integrarse para ampliar la automatización a documentos y texto no estructurado?', opciones: ['Ninguna: OCR y procesamiento del lenguaje son incompatibles con RPA.', 'OCR y capacidades de IA/NLP, por ejemplo para reconocer texto o extraer entidades de documentos.', 'Solo macros de teclado; RPA no puede interactuar con aplicaciones existentes.', 'Ninguna: RPA no puede aplicarse en procesos de atención al cliente.'], respuesta_correcta: 1 }
};

apply({ numero: '155', fecha: '2026-10-24', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-155.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academyNotes = {
  1091: 'Cotejo con ITIC Academy, bloque 32, versión 2026.1, § 10 (redes neuronales y entrenamiento supervisado); el artículo original de Nature sustenta el procedimiento de retropropagación.',
  1092: 'Cotejo literal con ITIC Academy, bloque 32, versión 2023, apartado de inferencia en marcos con herencia: contiene las dos estrategias Z/N descritas. El bloque 32, versión 2026.1, § 6, mantiene la cobertura de marcos pero no desarrolla esos nombres; por eso el nuevo enunciado atribuye expresamente la taxonomía a la edición 2023.',
  1093: 'Cotejo con ITIC Academy, bloque 32, versión 2026.1, §§ 6.4–6.6 (sistemas expertos, motores de inferencia y encadenamientos); contrastado con NIST SP 500-188.',
  1094: 'Cotejo con ITIC Academy, bloque 32, versión 2026.1, §§ 6.4–6.6: arquitectura y límites de los sistemas expertos; el material no presenta una mejora de eficiencia como garantía universal. La aplicabilidad se verifica con NIST y FHWA.',
  1095: 'Cotejo con ITIC Academy, bloque 32, versión 2026.1, §§ 1, 12 y 13 (IA, OCR y automatización de procesos). El material no trata RPA en detalle; las capacidades concretas se verifican con documentación primaria de Microsoft e IBM.'
};
const a1Ids = {
  1091: ['A1-70'], 1092: ['A1-70'], 1093: ['A1-70'], 1094: ['A1-70'], 1095: ['A1-70', 'A1-84', 'A1-90']
};
const a2Ids = {
  1091: ['A2-III-5'], 1092: ['A2-III-5'], 1093: ['A2-III-5'], 1094: ['A2-III-5'], 1095: ['A2-II-16']
};
const academyBlocks = {
  1091: '32', 1092: '32 (ediciones 2023 y 2026.1; Z/N solo en 2023)', 1093: '32', 1094: '32', 1095: '32 (cobertura parcial; RPA no se desarrolla como epígrafe)'
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  q.clasificacion.A1 = a1Ids[q.id].map(n => n.replace('A1-', ''));
  q.clasificacion.A2 = a2Ids[q.id].map(n => n.replace('A2-', ''));
  q.clasificacion.bloque_academia = academyBlocks[q.id];
  q.clasificacion.nota = academyNotes[q.id];
  q.comentarios = `${q.revision.observaciones} ${academyNotes[q.id]}`;
  q.revision.observaciones = q.comentarios;
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y clasificaciones oficiales finalizados.');
