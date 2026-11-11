const fs = require('node:fs');
const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ccn800 = 'https://www.ccn-cert.cni.es/es/series-ccn-stic/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad.html';
const metricaPortal = 'https://administracionelectronica.gob.es/documentacion/metodologias-guias/pae-metrica-v3';
const metricaCsi = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A19993efa-8c88-4205-b1a5-fb7fc0bd94de/METRICA_V3_Construccion_del_Sistema_de_Informacion.pdf';
const magerit = 'https://pilar.ccn-cert.cni.es/docman/documentos/1-magerit-v3-libro-i-metodo/file';
const ley39 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const hap7 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2014-400';
const pcm1383 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-20478';
const boehm = 'https://doi.org/10.1109/2.59';
const academyENS = 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk';
const academyMethods = 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academySystems = 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';

const sources = {
  4911: [
    { url: ccn800, referencia: 'CCN-CERT, catálogo oficial de la Serie CCN-STIC 800: identifica la serie como guías para implantar las medidas del Esquema Nacional de Seguridad; el catálogo contiene, entre otras, las guías 801 y 802.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 48: incluye expresamente el ENS y las guías CCN-STIC.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema I.9: cita expresamente las Guías CCN-STIC serie 800.' }
  ],
  4912: [
    { url: metricaCsi, referencia: 'PAe / MÉTRICA v3, Construcción del Sistema de Información, actividad CSI 9 y tarea CSI 9.1: la tarea se titula “Presentación y Aprobación del Sistema de Información” y recopila productos para presentarlos al Comité de Seguimiento; pertenece a Construcción del Sistema de Información.' },
    { url: metricaPortal, referencia: 'Portal oficial PAe de MÉTRICA v3: catálogo de procesos y documentos de la metodología.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 95: metodología MÉTRICA.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.6: construcción del sistema, como encuadre curricular de la tarea CSI 9.1.' }
  ],
  4913: [
    { url: magerit, referencia: 'MAGERIT v3, Libro I, §3.1.4: define riesgo como medida del daño probable y explica que se deriva del impacto teniendo en cuenta la probabilidad de ocurrencia; el impacto es la consecuencia/degradación, no la probabilidad.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 47: análisis y gestión de riesgos.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema II.10: análisis y gestión de riesgos de los sistemas de información.' }
  ],
  4914: [
    { url: ley39, referencia: 'Ley 39/2015 consolidada, arts. 12.2 y 12.3: asistencia por funcionario con identificación y consentimiento expreso, y obligación de mantener registro de funcionarios habilitados.' },
    { url: ley39, referencia: 'Ley 39/2015 consolidada, art. 27.1: permite copias auténticas mediante funcionario habilitado o actuación administrativa automatizada y exige registro interoperable.' },
    { url: hap7, referencia: 'Orden HAP/7/2014, de 8 de enero: título y texto histórico auténticos. La opción de la pregunta se corrige para distinguir número de orden y fecha.' },
    { url: pcm1383, referencia: 'Orden PCM/1383/2021, vigente desde 12-12-2021: regula actualmente el RFH de la AGE y deroga expresamente la Orden HAP/7/2014.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico y procedimiento administrativo.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, temas I.8 (procedimiento administrativo) e I.9 (identificación y autenticación electrónica).' }
  ],
  4915: [
    { url: boehm, referencia: 'Barry W. Boehm, “A Spiral Model of Software Development and Enhancement”, IEEE Computer 21(5), 1988, pp. 61–72, DOI 10.1109/2.59: presenta el modelo como enfoque evolutivo dirigido por riesgos, con análisis de alternativas y riesgos en cada ciclo.' },
    { url: boeA1, referencia: 'Convocatoria A1 GSI 2025, tema 86: ciclo de vida y modelos de ciclo de vida.' },
    { url: boeA2, referencia: 'Convocatoria A2 GSI AGE 2025, tema III.1: concepto, fases y modelos del ciclo de vida.' }
  ]
};

const academy = {
  4911: [academyENS, 'ITIC Academy 2026.2, bloque 22 «Seguridad, ENS y Ciberseguridad», epígrafes del programa A1-48/A2-I.9 y apartado 8.2 «Series CCN-STIC»: el temario identifica la serie 800 con el ENS. Se usa como cotejo curricular, no como autoridad del catálogo CCN.'],
  4912: [academySystems, 'ITIC Academy 2026.1, bloque 38 «Análisis, Diseño y Construcción de Sistemas de Información»: encuadre curricular de MÉTRICA v3 y construcción; la denominación y fase CSI se verifican en el documento oficial PAe.'],
  4913: [academyENS, 'ITIC Academy 2026.2, bloque 22, apartado 1.5 «Gestión de riesgos y MAGERIT»: encaje curricular en análisis de riesgos y conceptos impacto/probabilidad; la definición se decide según MAGERIT v3.'],
  4914: [academyAdmin, 'ITIC Academy 2026.2, bloque 03 «Actuación administrativa y Administración digital»: cotejo de los temas de Ley 39/2015 y administración electrónica; no se toma el apunte como fuente normativa ni sustituye la consulta de la redacción BOE vigente.'],
  4915: [academyMethods, 'ITIC Academy 2026.1, bloque 15 «Metodologías ágiles y modelos de ciclo de vida»: temario A1-86/A2-D1 y sección de modelos del ciclo de vida; se incluye el modelo espiral y se contrasta con el artículo de Boehm.']
};

const records = [
  [4911, ['48'], ['I-9'], ['ENS', 'CCN-STIC', 'serie 800', 'ciberseguridad'], sources[4911], null,
    'Respuesta C. El catálogo oficial del CCN-CERT organiza las guías para la implantación de medidas del ENS en la Serie CCN-STIC 800. Se precisa la referencia al catálogo institucional actual y no a una edición antigua del ENS.', 'corregida'],
  [4912, ['95'], ['III-6'], ['MÉTRICA v3', 'CSI 9.1', 'construcción del sistema', 'aprobación'], sources[4912], null,
    'Respuesta B. En MÉTRICA v3, la tarea CSI 9.1 “Presentación y Aprobación del Sistema de Información” forma parte de la actividad CSI 9, “Aprobación del Sistema de Información”, dentro del proceso de Construcción del Sistema de Información. La tarea prepara y presenta los productos al Comité de Seguimiento; no pertenece a Implantación y Aceptación.', 'corregida'],
  [4913, ['47'], ['II-10'], ['MAGERIT', 'riesgo', 'impacto', 'probabilidad', 'análisis de riesgos'], sources[4913], null,
    'Respuesta D. Bajo el supuesto explícito de que la pérdida de 10.000 euros es la consecuencia si el incidente ocurre, ese importe expresa el impacto económico; el 20 % expresa su probabilidad estimada. MAGERIT define el riesgo como medida del daño probable, derivada del impacto considerando la probabilidad. No se equipara riesgo con el valor esperado de 2.000 euros: ese cálculo requiere asumir un modelo cuantitativo simple y no es la definición que pregunta MAGERIT.', 'corregida'],
  [4914, ['8'], ['I-8', 'I-9'], ['Ley 39/2015', 'Registro de Funcionarios Habilitados', 'Habilit@', 'Orden HAP/7/2014', 'Orden PCM/1383/2021', 'normativa histórica'], sources[4914], null,
    'Respuesta B. La opción se formula explícitamente como referencia histórica para que la respuesta falsa sea inequívoca: la norma fue la Orden HAP/7/2014, de 8 de enero, no “HAP/8/2014, de 7 de enero”. Además, la Orden HAP/7/2014 está derogada desde el 12 de diciembre de 2021 por la Orden PCM/1383/2021, que regula actualmente el registro de la AGE. El artículo 12.3 de la Ley 39/2015 exige mantener el registro para identificación o firma; el artículo 12.2 regula la asistencia con identificación y consentimiento expreso; y el artículo 27.1 permite copias auténticas mediante funcionario habilitado o actuación automatizada.', 'corregida'],
  [4915, ['86'], ['III-1'], ['modelo espiral', 'Boehm', 'ciclo de vida', 'iterativo', 'análisis de riesgos'], sources[4915], null,
    'Respuesta B. La característica distintiva del modelo espiral de Boehm es que el avance es iterativo y dirigido por riesgos: en cada ciclo se determinan objetivos y alternativas, se identifican y resuelven riesgos y se planifica la siguiente vuelta. La clave original “se adapta bien a metodologías orientadas a objetos” no identifica esta propiedad central y podía confundirse con una asociación de estilo o herramienta.', 'corregida']
];

const edits = {
  4911: {
    texto: 'Según el catálogo oficial actual del CCN-CERT, ¿qué serie de guías CCN-STIC desarrolla políticas y procedimientos para implantar medidas del Esquema Nacional de Seguridad?',
    opciones: ['Serie CCN-STIC 200.', 'Serie CCN-STIC 400.', 'Serie CCN-STIC 800.'],
    respuesta_correcta: 2
  },
  4912: {
    texto: 'En MÉTRICA v3, la tarea CSI 9.1 «Presentación y Aprobación del Sistema de Información» pertenece a qué proceso?',
    opciones: ['Implantación y Aceptación del Sistema.', 'Construcción del Sistema de Información.', 'Aseguramiento de la Calidad.', 'Gestión de Proyectos.'],
    respuesta_correcta: 1
  },
  4913: {
    texto: 'Un análisis estima que un incidente, si ocurre, causaría una pérdida de 10.000 euros y le asigna una probabilidad de ocurrencia del 20 %. Según los conceptos de MAGERIT, señale la opción correcta:',
    opciones: [
      'La pérdida de 10.000 euros representa el impacto económico estimado si el incidente ocurre.',
      'El 20 % representa la probabilidad estimada de ocurrencia del incidente.',
      'El riesgo es una medida del daño probable que considera el impacto y la probabilidad.',
      'Todas las afirmaciones anteriores son correctas.'
    ],
    respuesta_correcta: 3
  },
  4914: {
    texto: 'Sobre la normativa del Registro de Funcionarios Habilitados, señale la referencia histórica incorrecta. Téngase en cuenta que la Orden HAP/7/2014 fue derogada en 2021 por la Orden PCM/1383/2021:',
    opciones: [
      'El artículo 12.3 de la Ley 39/2015 exige mantener un registro actualizado de funcionarios habilitados para identificación o firma.',
      'La regulación histórica fue la Orden HAP/8/2014, de 7 de enero.',
      'El artículo 12.2 de la Ley 39/2015 permite que un funcionario asista en la identificación o firma si la persona interesada se identifica y presta consentimiento expreso.',
      'El artículo 27.1 de la Ley 39/2015 permite expedir copias auténticas mediante funcionario habilitado o actuación administrativa automatizada.'
    ],
    respuesta_correcta: 1
  },
  4915: {
    texto: '¿Qué característica define el modelo espiral de desarrollo de software propuesto por Barry Boehm?',
    opciones: [
      'Sigue una única secuencia lineal de fases y no vuelve sobre decisiones anteriores.',
      'Es iterativo y está dirigido por riesgos: en cada ciclo se analizan alternativas y riesgos antes de planificar el siguiente.',
      'Omite el análisis explícito de riesgos durante el desarrollo.',
      'Solo permite analizar riesgos al comienzo del proyecto y no en ciclos posteriores.'
    ],
    respuesta_correcta: 1
  }
};

aplicar({ numero: '918', fecha: '2026-11-11', records, edits });

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-918.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const [url, detail] = academy[change.id];
  q.clasificacion.bloque_academia = `${detail} El material se cita como cotejo curricular, no como fuente técnica o normativa primaria.`;
  q.clasificacion.nota = `${q.revision.estado}. Cotejo ITIC Academy: ${detail} Fuentes primarias y alcance están documentados en el registro del lote.`;
  q.revision.observaciones += ` ${detail}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy: ${detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy añadido al lote 918.');
