const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy29 = 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk';
const academy38 = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const academy03 = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const paemet = 'https://administracionelectronica.gob.es/documentacion/metodologias-guias';
const records = [
  [5211, ['86'], ['III-1'], ['ciclo de vida', 'modelo en cascada', 'fases secuenciales'], [
    ref('https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019%2B-%2BSoftware%2BLife%2BCycle', 'NASA Software Engineering Handbook, SWE-019, Software Life Cycle: requiere seleccionar y documentar el modelo y sus criterios de transición; describe el modelo secuencial y lo diferencia de modelos iterativos. La pregunta se limita al sentido clásico secuencial, no afirma que todos los ciclos actuales deban ser lineales.'),
    ref('https://nodis3.gsfc.nasa.gov/npg_img/N_PR_7150_002D_/N_PR_7150_002D__Chapter3.pdf', 'NASA NPR 7150.2D, capítulo 3: fases del ciclo de vida y gestión de transiciones; no prescribe un único modelo para todos los proyectos.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 86: ciclo de vida y modelos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.1: concepto, fases y modelos del ciclo de vida.'),
    ref(academy38, 'ITIC Academy, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información», versión 2026.2: §1.1 contrasta el proceso lineal con el ciclo iterativo; cotejo directo con A1-86/A2-III.1.')
  ], null, 'El original mezclaba afirmaciones no definidas con precisión sobre abstracción y especificaciones. Se sustituye por una pregunta acotada al modelo secuencial clásico: las actividades/fases se planifican en una secuencia y sus transiciones usan productos o criterios definidos. Esto no implica que todos los modelos de ciclo de vida sean lineales ni que un proyecto real jamás gestione cambios o iteraciones.', 'corregida'],
  [5212, ['89'], ['II-5'], ['modelo EER', 'entidad-relación extendido', 'generalización', 'especialización', 'subclases', 'herencia'], [
    ref('https://www.auhd.edu.ye/upfiles/elibrary/Azal2020-01-22-12-28-11-76901.pdf', 'Elmasri y Navathe, Fundamentals of Database Systems, 7.ª ed., cap. 4, §4.1: el EER incorpora conceptos de superclases/subclases, especialización/generalización, categorías y herencia; el capítulo 3 presenta el modelo ER básico del que parte.'),
    ref('https://www.pearson.com/en-us/subject-catalog/p/fundamentals-of-database-systems/P200000003546', 'Pearson, ficha editorial de Fundamentals of Database Systems: texto académico de referencia sobre modelado y diseño de bases de datos; capítulos de ER/EER.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 89: análisis del dominio, modelo entidad-relación y modelos de clases.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.5: arquitectura ANSI/SPARC y sistemas de gestión de bases de datos relacionales; el encaje es temático, no cita expresamente EER.'),
    ref(academy29, 'ITIC Academy, bloque 29 «Bases de datos», versión vigente accesible en Drive: apartados 4.2–4.4 cubren modelado de dominio, E/R extendido, cardinalidad y generalización/especialización; cotejo curricular, no fuente de autoridad terminológica.')
  ], null, 'Se corrige el reactivo porque cardinalidades y entidades débiles/dependientes ya pueden representarse en el modelo ER básico y las opciones mezclaban esos conceptos con EER. El EER amplía ER con superclases/subclases, especialización/generalización, categorías y herencia; la nueva opción correcta delimita estos constructos distintivos. Se evita presentar «cardinalidad mínima» o dependencia de identificación como rasgos exclusivos de la extensión.', 'corregida'],
  [5213, ['86'], ['III-1', 'III-3'], ['prototipado', 'ciclo de vida evolutivo', 'realimentación', 'requisitos'], [
    ref('https://nodis3.gsfc.nasa.gov/displayAll.cfm?Internal_ID=N_PR_7150_002D_&page_name=all', 'NASA NPR 7150.2D, §§ 1.1.4 y 3.1: no impone un único modelo; contempla prototipos y validación iterativa con participación del usuario para aclarar requisitos.'),
    ref('https://swehb.nasa.gov/spaces/7150/pages/16449735/SWE-019%2B-%2BSoftware%2BLife%2BCycle', 'NASA Software Engineering Handbook, SWE-019: explica ciclos iterativos/espirales y el empleo de prototipos cuando los requisitos necesitan madurarse.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 86: modelos de ciclo de vida.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema III.1 (modelos de ciclo) y III.3 (prototipos y determinación de requisitos).'),
    ref(academy38, 'ITIC Academy, bloque 38, versión 2026.2: prototipos en A1-94 y estrategias de prototipado para determinar requisitos en A2-D3/A2-III.3; el ciclo de evaluación y realimentación se contrasta con NASA.')
  ], null, 'La secuencia original no explicaba las fases ni hacía única la respuesta: tanto los retornos entre construcción y diseño como la realimentación desde evaluación pueden darse según el tipo de prototipo. Se pregunta ahora por la propiedad definitoria del prototipado evolutivo: la evaluación del prototipo por usuarios puede generar cambios de requisitos/diseño y una nueva iteración antes de aceptar el producto.', 'corregida'],
  [5214, ['95'], [], ['MÉTRICA v3', 'ASI 2', 'requisitos', 'ciclo de vida'], [
    ref('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf', 'PAe, MÉTRICA v3, Planificación de Sistemas de Información, actividad PSI 4: Identificación de Requisitos.'),
    ref('https://upcommons.upc.edu/server/api/core/bitstreams/f3715719-2d7c-404e-802d-8f375ee4c463/content', 'Universitat Politècnica de Catalunya, material docente basado en MÉTRICA v3: EVS 3 es Definición de Requisitos del Sistema y ASI 2 es Establecimiento de Requisitos; remite a los nombres formales de actividades.'),
    ref('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Aad870327-56b7-4dfa-af15-e62222f45b90/METRICA_V3_Analisis_del_Sistema_de_Informacion.pdf', 'PAe, MÉTRICA v3, Análisis del Sistema de Información: identifica explícitamente ASI 2 como Establecimiento de Requisitos.'),
    ref('https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf', 'PAe, MÉTRICA v3, Diseño del Sistema de Información: DSI 11 es Establecimiento de Requisitos de Implantación.'),
    ref(paemet, 'Portal de Administración Electrónica, Metodologías y Guías: cataloga MÉTRICA v3 como metodología oficial de la Administración.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA de planificación y desarrollo de sistemas.'),
    ref(academy38, 'ITIC Academy, bloque 38, versión 2026.2: sitúa MÉTRICA v3 entre los marcos clásicos de análisis/diseño y construcción; el nombre formal de ASI 2 se verifica en PAe.')
  ], null, 'Se reemplaza la pregunta negativa y con denominaciones inexactas por una comprobación directa de la nomenclatura oficial. En MÉTRICA v3, la actividad ASI 2 se denomina «Establecimiento de Requisitos»; «Especificación de Requisitos» no es su nombre. Se conserva como respuesta correcta la afirmación equivalente a la opción C original.', 'corregida'],
  [5215, ['22'], [], ['EFQM', 'EFQM 2025', 'calidad en servicios públicos', 'Direction', 'Execution', 'Results'], [
    ref('https://efqm.org/the-efqm-model/', 'EFQM, página oficial The EFQM Model: estructura organizativa en torno a las preguntas Why/How/What y los bloques Direction, Execution y Results.'),
    ref('https://efqm.org/transform/', 'EFQM, página oficial de The EFQM Model 2025: indica siete criterios y 29 partes de criterio y explicita la lógica de los tres bloques.'),
    ref('https://www.boe.es/buscar/act.php?id=BOE-A-2019-13618&lang=es&p=&tn=1', 'Orden TFP/967/2019, procedimiento vigente de reconocimiento del nivel de excelencia: distingue evaluación y certificación/acreditación según el marco administrativo; no valida como actual la antigua lista de agentes facilitadores.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 22: calidad en los servicios públicos y papel de las TIC en su modernización.'),
    ref(academy03, 'ITIC Academy, bloque 03 «Actuación Administrativa y Administración Digital», versión 2026.2: apartado de calidad en servicios públicos y modelos EFQM 2025/CAF 2020; cobertura curricular cotejada con A1-22.')
  ], null, 'La versión no indicada hacía que el enunciado mezclara el EFQM 2013 (facilitadores/resultados), un antiguo procedimiento español de reconocimiento y una afirmación incorrecta sobre resultados. Se reformula explícitamente para el Modelo EFQM 2025: su lógica agrupa el marco en Direction, Execution y Results y actualmente desarrolla siete criterios. No se extrapola la antigua lista de «agentes facilitadores» como taxonomía vigente.', 'corregida']
];
const edits = {
  5211: { texto: 'En el modelo secuencial clásico o en cascada del ciclo de vida del software, ¿qué afirmación es característica?', opciones: ['Las fases se planifican en una secuencia y su transición se apoya en productos o criterios definidos.', 'La evaluación del prototipo genera necesariamente una nueva versión antes de cada fase.', 'El trabajo se organiza únicamente en incrementos cortos sin fases de ciclo de vida.', 'No se establecen productos intermedios ni criterios de transición entre fases.'], respuesta_correcta: 0, comentarios: 'En la formulación clásica secuencial las fases se organizan en orden, con entregables y puntos de transición. La pregunta no afirma que el modelo sea universalmente superior ni que en proyectos reales nunca se gestione una vuelta o un cambio; otros modelos, como los iterativos, organizan explícitamente ciclos de realimentación.' },
  5212: { texto: '¿Qué conjunto recoge constructos característicos que amplían el modelo entidad-relación básico en el modelo EER?', opciones: ['Especialización/generalización mediante superclases y subclases, con herencia de atributos o relaciones.', 'Atributos, entidades, relaciones y cardinalidades, sin añadir ningún constructo semántico.', 'Claves primarias, claves externas y normalización relacional.', 'Tablas, índices y vistas materializadas propias de la implementación de un SGBD.'], respuesta_correcta: 0, comentarios: 'El modelo EER conserva los constructos ER y añade, entre otros, superclases/subclases, especialización/generalización, categorías y herencia. Las cardinalidades y la participación pertenecen también al modelado ER básico, por lo que no son por sí solas una ampliación exclusiva del EER.' },
  5213: { texto: 'En un proceso evolutivo basado en prototipos, ¿qué puede ocurrir después de evaluar un prototipo con los usuarios?', opciones: ['La realimentación puede modificar requisitos o diseño y conducir a construir y evaluar otra iteración.', 'La evaluación se realiza solo después de congelar definitivamente los requisitos y no puede producir cambios.', 'El prototipo se convierte siempre, sin revisión, en el producto final.', 'La evaluación sustituye todas las pruebas de aceptación del sistema terminado.'], respuesta_correcta: 0, comentarios: 'El prototipado permite obtener realimentación temprana. Cuando la evaluación revela necesidades o defectos, se revisan requisitos/diseño y se construye otra iteración. No significa que todo prototipo termine siendo el producto ni que las pruebas de aceptación queden sustituidas.' },
  5214: { texto: 'Según MÉTRICA v3, ¿cómo se denomina la actividad ASI 2 del proceso de Análisis del Sistema de Información?', opciones: ['Identificación de Requisitos.', 'Definición de Requisitos del Sistema.', 'Establecimiento de Requisitos.', 'Establecimiento de Requisitos de Implantación.'], respuesta_correcta: 2, comentarios: 'La actividad ASI 2 se llama «Establecimiento de Requisitos». No debe confundirse con EVS 3 («Definición de Requisitos del Sistema»), PSI 4 («Identificación de Requisitos») ni DSI 11 («Establecimiento de Requisitos de Implantación»).' },
  5215: { texto: 'En el Modelo EFQM 2025, ¿cuál es la organización general del marco?', opciones: ['Tres bloques —Direction, Execution y Results— que agrupan siete criterios.', 'Cuatro tipos de resultados y cinco agentes facilitadores, estructura que se mantiene como versión actual.', 'Un ciclo de cinco fases: liderazgo, estrategia, personas, procesos y resultados.', 'Un único bloque de resultados, sin criterios de dirección ni de ejecución.'], respuesta_correcta: 0, comentarios: 'EFQM presenta el modelo mediante tres preguntas (Why, How, What), agrupadas en Direction, Execution y Results. La edición 2025 desarrolla siete criterios y 29 partes de criterio. La lista antigua de agentes facilitadores/resultados corresponde a ediciones anteriores y no debe citarse como estructura actual.' }
};
// Corrige accidental repetición de la propiedad de opciones en la definición de 5214.
if (!fs.existsSync(path.join(__dirname, 'cambios-lote-978.json'))) aplicar({ numero: '978', fecha: '2026-11-12', records, edits });
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-978.json');
if (fs.existsSync(logPath)) {
  const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
  const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
  const academy = {
    5211: ['ITIC Academy, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información», versión 2026.2 (octubre de 2026), §1.1 «Del proceso lineal al ciclo iterativo»: coteja el concepto de ciclo clásico/iterativo.', 'Cotejo directo A1-86/A2-III.1; el bloque explica la evolución desde el proceso lineal y se contrasta con NASA para precisar límites.'],
    5212: ['ITIC Academy, bloque 29 «Bases de datos», versión 2026 accesible en Drive, §§4.2–4.4: modelo E/R extendido, cardinalidad y generalización/especialización. El material confirma el encaje temático; el alcance de constructos EER se fundamenta en Elmasri y Navathe.', 'Cotejo directo A1-89; A2-II.5 ofrece contexto de bases de datos relacionales, sin nombrar expresamente el modelo EER.'],
    5213: ['ITIC Academy, bloque 38, versión 2026.2, §§1 y 2 sobre ciclo iterativo y determinación de requisitos: incluye prototipos en A1-94 y A2-D3/III.3.', 'Cotejo directo A1-86/A2-III.1 y A2-III.3; en este último la convocatoria menciona expresamente estrategias de requisitos mediante prototipos.'],
    5214: ['ITIC Academy, bloque 38, versión 2026.2, marco de análisis/diseño y referencia a MÉTRICA v3: cotejo curricular; la nomenclatura exacta se verifica en la metodología oficial PAe.', 'Cotejo directo A1-95 (MÉTRICA). La convocatoria A2 no incluye un epígrafe MÉTRICA específico; no se fuerza etiqueta A2.'],
    5215: ['ITIC Academy, bloque 03 «Actuación Administrativa y Administración Digital», versión 2026.2 (actualizada 01-10-2026): apartado de calidad en servicios públicos, modelos EFQM 2025 y CAF 2020.', 'Cotejo directo A1-22 (calidad en los servicios públicos). No se etiqueta A2 porque el modelo EFQM de gestión organizativa no coincide con el epígrafe de A2 sobre calidad del software.']
  };
  const motive = 'Cotejo individual con el programa oficial A1/A2 de la convocatoria 2025 y los materiales ITIC Academy vigentes accesibles en Drive.';
  for (const [key, [block, note]] of Object.entries(academy)) {
    const id = Number(key), q = bank.preguntas.find(x => x.id === id), entry = log.cambios.find(x => x.id === id);
    if (!q || !entry) throw Error(`Falta pregunta o registro ${id}`);
    const before = { bloque_academia: q.clasificacion.bloque_academia, nota: q.clasificacion.nota };
    q.clasificacion.bloque_academia = block;
    q.clasificacion.nota = note;
    const corrections = entry.correcciones_posteriores || [];
    if (!corrections.some(x => x.motivo === motive)) corrections.push({ fecha: '2026-11-12', motivo: motive, clasificacion_anterior: before, clasificacion_actualizada: { bloque_academia: block, nota: note } });
    entry.correcciones_posteriores = corrections;
    entry.actualizada = structuredClone(q);
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
  if (replaced !== 5) throw Error(`Se esperaban 5 actualizaciones de academia; hubo ${replaced}`);
  fs.writeFileSync(bankPath, output);
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
}

