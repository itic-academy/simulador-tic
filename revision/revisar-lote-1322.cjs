const aplicar = require('./aplicar-lote.cjs');
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const consejo = 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-11489&p=20211023';
const ministerios = 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-23537&p=20231229';
const oracle = 'https://docs.oracle.com/en/database/oracle/oracle-database/26/cncpt/concepts-for-database-administrators.html';
const doran = 'https://www.decisionskills.com/uploads/5/1/6/0/5160560/doran_1981_s.m.a.r.t-way-management-review.pdf';
const agile = 'https://agilemanifesto.org/principles.html';
const scrum = 'https://scrumguides.org/scrum-guide.html';
const weighting = 'https://administracionelectronica.gob.es/ctt/ssd/infoadicional';
const entropy = 'https://www.sems-journal.org/index.php/sems/article/view/28';
const edits = {
  6931: {
    texto: '¿Qué denominación ministerial aparece literalmente en el artículo 4.2 de la Orden ETD/920/2020 (en su texto consolidado a 23 de octubre de 2021) para la Presidencia del Consejo Consultivo para la Transformación Digital?',
    opciones: ['La persona titular del Ministerio de Asuntos Económicos y Transformación Digital.', 'La persona titular del Ministerio de Economía, Comercio y Empresa.', 'La persona titular de la Secretaría de Estado de Digitalización e Inteligencia Artificial.', 'La persona titular de la Secretaría General de Administración Digital.'],
    respuesta_correcta: 0
  },
  6932: {
    texto: 'En una organización que separa la administración de sistemas de la administración de bases de datos, ¿cuál de estas tareas corresponde específicamente al administrador de bases de datos (DBA), y no a la administración general de servidores y sistemas operativos?',
    opciones: ['Diseñar y administrar la estructura de las bases de datos y controlar su calidad e integridad.', 'Redactar manuales de operación de los servidores corporativos.', 'Evaluar las necesidades generales de nuevas aplicaciones y herramientas para la plataforma.', 'Instalar servidores y puestos de usuario.'],
    respuesta_correcta: 0
  },
  6933: {
    texto: 'Según la formulación original de los objetivos SMART de George T. Doran (1981), ¿qué conjunto de características recoge el acrónimo?',
    opciones: ['Ser estratégicos, generales, integrales, innovadores y revisables.', 'Ser específicos, medibles o cuantificables, asignables, realistas y acotados en el tiempo.', 'Ser específicos, motivadores, alcanzables, relevantes y revisados por consenso.', 'Ser definidos mediante una sesión de brainstorming y mantenerse sin cambios durante el proyecto.'],
    respuesta_correcta: 1
  },
  6934: {
    texto: '¿Qué característica de los métodos ágiles se refleja en la revisión periódica del trabajo y la adaptación del comportamiento del equipo?',
    opciones: ['La planificación inicial fija los requisitos y evita cambios posteriores.', 'El equipo aprende de la inspección y de la retroalimentación y ajusta su forma de trabajar.', 'La comunicación con el cliente se reduce hasta la entrega final.', 'El avance se mide principalmente por la cantidad de documentación producida.'],
    respuesta_correcta: 1
  },
  6935: {
    texto: 'En un análisis multicriterio, ¿cuál de las siguientes técnicas normaliza las puntuaciones de las alternativas respecto al valor máximo, en vez de determinar el peso o importancia relativa de los criterios?',
    opciones: ['El método de las utilidades relativas.', 'El método de la entropía.', 'La normalización por fracción del máximo.', 'El método Delphi aplicado mediante un panel de expertos.'],
    respuesta_correcta: 2
  }
};
const records = [
  [6931, [30], ['I-10'], ['Consejo Consultivo para la Transformación Digital', 'presidencia', 'Orden ETD/920/2020', 'denominación ministerial histórica'], [
    {url: consejo, referencia: 'Orden ETD/920/2020, arts. 2 y 4.2, texto consolidado: el Consejo se adscribe al titular del ministerio competente y su presidencia se atribuye a la persona titular del Ministerio de Asuntos Económicos y Transformación Digital (denominación departamental histórica que figura en la redacción consolidada).'},
    {url: ministerios, referencia: 'Real Decreto 829/2023, estructura ministerial consolidada: atribuye al Ministerio para la Transformación Digital y de la Función Pública la política del Gobierno en telecomunicaciones, sociedad de la información, transformación digital e IA; permite identificar el departamento sucesor de las funciones digitales.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 30: gobernanza TIC, organización e instrumentos operativos y transformación digital de la AGE.'},
    {url: a2, referencia: 'Programa oficial A2 GSI 2025, tema I.10: órganos e instrumentos de cooperación entre Administraciones en Administración electrónica.'}
  ], edits[6931], 'Corregida A como pregunta histórica de literalidad normativa. El texto consolidado de la Orden ETD/920/2020 conserva la denominación «Ministerio de Asuntos Económicos y Transformación Digital»; la pregunta identifica expresamente la fecha de consolidación para no presentar ese nombre departamental como vigente. El Real Decreto 829/2023 atribuye las competencias de transformación digital al ministerio actual, pero no modifica literalmente el artículo 4.2 ni nombra de forma expresa a un sucesor para esa presidencia; no se afirma esa sucesión como respuesta jurídica textual.', 'historica'],
  [6932, [34], ['II-2'], ['administración de sistemas', 'administración de bases de datos', 'servidores', 'responsabilidades profesionales', 'operación de sistemas'], [
    {url: oracle, referencia: 'Oracle Database Concepts, “Concepts for Database Administrators”: atribuye a la administración de bases de datos el diseño lógico y físico, creación y gestión de objetos de base de datos, seguridad, almacenamiento y monitorización; el reparto exacto de roles varía según el entorno.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 34: organización de centros de sistemas de información y funciones diferenciadas de sistemas y bases de datos.'},
    {url: a2, referencia: 'Programa oficial A2 GSI 2025, tema II.2: sistemas operativos y sus características de administración.'}
  ], edits[6932], 'Corregida A. El enunciado original presentaba una responsabilidad profesional como universal, aunque la delimitación entre administradores depende del tamaño y organización de cada equipo. Se explicita que hay roles separados: el diseño y la integridad del esquema corresponden específicamente al DBA; las opciones restantes son tareas de operación general de la plataforma. La documentación Oracle advierte que en entornos pequeños pueden concentrarse varias funciones en la misma persona, por lo que esa premisa organizativa queda expresada en la pregunta.', 'corregida'],
  [6933, [33], [], ['objetivos SMART', 'Doran', 'planificación y control de gestión', 'objetivos específicos', 'indicadores'], [
    {url: doran, referencia: 'Doran, G. T. (1981), “There’s a S.M.A.R.T. way to write management’s goals and objectives”, Management Review 70(11), pp. 35–36: Specific, Measurable, Assignable, Realistic y Time-related.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 33: herramientas de planificación y control de gestión de la función directiva de sistemas y tecnologías de la información.'}
  ], edits[6933], 'Corregida B. «SMART» tiene variantes posteriores (por ejemplo, attainable/relevant), por lo que el original no especificaba qué expansión evaluaba. Se cita la formulación original de Doran: específico, medible, asignable, realista y temporal. No se fuerza un epígrafe A2: el programa consultado no incluye este marco de gestión como apartado autónomo.', 'corregida'],
  [6934, [37], ['III-2'], ['metodologías ágiles', 'aprendizaje', 'inspección', 'adaptación', 'retroalimentación', 'gestión de proyectos'], [
    {url: agile, referencia: 'Principios del Manifiesto Ágil: acoger cambios, entregar software frecuentemente y reflexionar periódicamente sobre cómo ser más efectivos, ajustando en consecuencia el comportamiento del equipo.'},
    {url: scrum, referencia: 'Guía Scrum 2020, apartados de teoría Scrum, inspección y adaptación: inspección periódica y adaptación cuando se aprende algo nuevo; las retrospectivas concretan el aprendizaje y la mejora del equipo.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 37: metodologías ágiles para la gestión de proyectos y metodologías lean.'},
    {url: a2, referencia: 'Programa oficial A2 GSI 2025, tema III.2: gestión y planificación del desarrollo y metodologías de desarrollo.'}
  ], edits[6934], 'Corregida B. El original describía los métodos ágiles con la etiqueta imprecisa «orientada al aprendizaje». La revisión vincula la opción correcta a prácticas verificables: inspeccionar entregas y retroalimentación, aprender y adaptar periódicamente el trabajo del equipo. El Manifiesto Ágil y la Guía Scrum respaldan esa formulación; no implican ausencia de planificación, cliente o requisitos.', 'corregida'],
  [6935, [40], ['II-15'], ['análisis multicriterio', 'ponderación de criterios', 'método de la entropía', 'utilidades relativas', 'Delphi', 'normalización de puntuaciones', 'fracción del máximo'], [
    {url: weighting, referencia: 'Portal de Administración Electrónica, SSD-AAPP, información adicional: separa las fases de definición/peso de criterios, normalización de puntuaciones de alternativas por fracción del ideal y ordenación mediante ponderación lineal.'},
    {url: entropy, referencia: 'Žižović y Albijanić, “An Implementation of the Entropy Method for Determining Weighing Coefficients in a Multicriteria Optimization of Public Procurements” (2025): la entropía se aplica para calcular coeficientes/pesos de criterios.'},
    {url: a1, referencia: 'Programa oficial A1 GSI 2025, tema 40: estudio de alternativas, evaluación de viabilidad y toma de decisión en la adquisición de sistemas.'},
    {url: a2, referencia: 'Programa oficial A2 GSI 2025, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad.'}
  ], edits[6935], 'Corregida C. El original confundía ponderar criterios (asignar importancia relativa) con normalizar la puntuación de cada alternativa. Delphi puede emplearse para recoger pesos por consenso de expertos; la entropía y las utilidades relativas también calculan pesos. La fracción del máximo es una regla de normalización de puntuaciones respecto a una referencia máxima, no un método para decidir cuánto pesa cada criterio. El propio SSD-AAPP distingue explícitamente criterios y peso, normalización por fracción del ideal y ordenación ponderada.', 'corregida']
];
aplicar({numero: '1322', fecha: '2026-11-15', records, edits});
