const apply = require('./aplicar-lote.cjs');

const records = [
  [1496, [65], ['II-9'], ['XML', 'XSL', 'XSLT', 'CSS', 'transformación'], [
    {url: 'https://www.w3.org/Style/CSS-vs-XSL', referencia: 'W3C, CSS & XSL: CSS puede aplicarse a HTML y XML; XSL/XSLT permite transformaciones que CSS no realiza, y los lenguajes pueden complementarse.'},
    {url: 'https://www.w3.org/Style/', referencia: 'W3C, Web Style Sheets: CSS se utiliza con HTML y XML; XSL también con XML y sí es un lenguaje de transformación.'}
  ], null, 'XSLT, parte de la familia XSL, puede transformar datos XML en HTML y asociar CSS al resultado. CSS también puede estilizar HTML y XML, pero no es un lenguaje general de transformación de datos; CSS y XSL pueden usarse juntos. Se ajusta la opción correcta para explicitar XSLT y evitar confundir estilos con lógica de transformación.', 'corregida'],
  [1497, [65], ['II-9', 'III-12'], ['HTML', 'object', 'recurso externo', 'contenido incrustado'], [
    {url: 'https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-object-element', referencia: 'WHATWG HTML Living Standard, The object element: puede representar un recurso externo mediante data, que según su tipo se trata como imagen o como contenido navegable.'}
  ], null, 'El elemento <object> representa un recurso externo asociado normalmente mediante data. Según el tipo del recurso, el navegador puede tratarlo como imagen o como contenido navegable y el elemento permite contenido alternativo. No se limita a applets: estos son tecnología histórica, y para un uso concreto como vídeo/audio existen elementos más específicos. La respuesta se reformula conforme al estándar HTML vigente.', 'corregida'],
  [1498, [11, 78], ['I-9'], ['factura electrónica', 'Ley 25/2013', 'Ley 11/2007', 'contratación pública', 'histórica'], [
    {url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-13722', referencia: 'BOE, Ley 25/2013, arts. 1 y 4: impulsa la factura electrónica y regula su presentación en las Administraciones Públicas.'},
    {url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-17887', referencia: 'BOE, texto refundido de la Ley de Contratos del Sector Público de 2011, DA 16.ª y DF 4.ª: incluía previsiones expresas sobre factura electrónica en contratación pública; hoy está derogado.'},
    {url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-12352', referencia: 'BOE, Ley 11/2007: norma general de acceso electrónico a los servicios públicos, no regulación específica de factura electrónica; fue derogada por la Ley 39/2015.'}
  ], null, 'Se acota la pregunta al marco histórico para que haya una única respuesta: la Ley 11/2007 regulaba el acceso electrónico a los servicios públicos, pero no establecía un régimen específico de factura electrónica. En cambio, la Ley 25/2013 impulsa la factura electrónica en el sector público y el texto refundido de contratos de 2011 contenía previsiones sobre su uso en contratación pública. Ambas normas históricas están derogadas o sustituidas en el marco vigente; se conserva la referencia como pregunta de historia normativa, no como orientación actual.', 'historica'],
  [1499, [80], ['I-6'], ['eIDAS', 'prestador cualificado', 'auditoría', 'informe de evaluación de conformidad', 'días hábiles'], [
    {url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:02014R0910-20241018', referencia: 'Reglamento (UE) 910/2014 consolidado tras la modificación por el Reglamento (UE) 2024/1183, art. 20.1: el prestador cualificado remite el informe al organismo de supervisión en los tres días hábiles desde su recepción.'},
    {url: 'https://eur-lex.europa.eu/eli/reg/2024/1183/oj', referencia: 'Reglamento (UE) 2024/1183, art. 1.19: sustituye el artículo 20.1 de eIDAS y mantiene el plazo de tres días hábiles; añade aviso previo de auditorías.'}
  ], null, 'El artículo 20.1 del Reglamento eIDAS, en su redacción vigente tras el Reglamento (UE) 2024/1183, obliga al prestador cualificado a remitir el informe de evaluación de conformidad al organismo de supervisión en los tres días hábiles siguientes a su recepción. La norma modificadora añadió además el preaviso de auditorías, por lo que se cita el texto consolidado vigente y no solo la versión inicial de 2014.', 'corregida'],
  [1500, [27], ['I-7'], ['AEPD', 'Facilita RGPD', 'análisis de riesgos', 'nivel de riesgo', 'pymes'], [
    {url: 'https://www.aepd.es/guias-y-herramientas/herramientas', referencia: 'AEPD, Herramientas: Facilita RGPD es un asistente para tratamientos de escaso riesgo; Gestiona RGPD y Evalúa-Riesgo RGPD son herramientas distintas para análisis de riesgo.'},
    {url: 'https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/9-analisis-de-riesgos/FAQ-0223-si-se-utiliza-la-herramienta-facilita-rgpd-es-necesario-realizar-el-analisis-de-riesgos', referencia: 'AEPD, FAQ 0223: Facilita_RGPD se limita a tratamientos habituales de escaso riesgo en pymes y microempresas y avisa cuando el tratamiento planteado no resulta adecuado para el asistente.'},
    {url: 'https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/3-que-obligaciones-establece-el-rgpd-para-los-responsables/FAQ-0243-sobre-el-uso-de-herramienta-facilita', referencia: 'AEPD, FAQ 0243: Facilita es una herramienta de ayuda y no implica por sí sola cumplimiento automático del RGPD.'}
  ], null, 'La pregunta original mezcla funciones de distintas herramientas AEPD. Se reformula para identificar qué hace Facilita_RGPD: su cuestionario recoge actividad, datos y tratamientos para orientar a pymes/microempresas con tratamientos habituales de bajo riesgo y advertir si el supuesto no es adecuado para ese asistente. No sustituye el análisis de riesgos ni una EIPD cuando procedan, ni garantiza por sí sola el cumplimiento. La AEPD distingue Facilita de Gestiona RGPD y Evalúa-Riesgo RGPD.', 'corregida']
];

const edits = {
  1496: {
    texto: '¿Qué afirmación describe correctamente la relación entre CSS, XSL y XML?',
    opciones: [
      'CSS no puede aplicarse a documentos HTML.',
      'XSLT puede transformar datos XML en un documento HTML al que se aplique una hoja de estilos CSS.',
      'CSS es un lenguaje de programación capaz de ejecutar cualquier algoritmo sobre los datos XML.',
      'CSS y XSL no pueden utilizarse en el mismo flujo de publicación.'
    ],
    respuesta_correcta: 1
  },
  1497: {
    texto: '¿Qué describe mejor el elemento HTML <object>?',
    opciones: [
      'Un elemento reservado exclusivamente a imágenes en línea.',
      'Un elemento que solo reproduce audio y vídeo en formatos multimedia.',
      'Un elemento que representa un recurso externo, que el navegador puede tratar como imagen o como contenido navegable según su tipo.',
      'Una etiqueta para ejecutar applets Java, sin otros usos ni contenido alternativo.'
    ],
    respuesta_correcta: 2
  },
  1498: {
    texto: 'En el marco normativo histórico anterior a las Leyes 39/2015 y 9/2017, ¿cuál de estas normas no establecía una previsión específica sobre factura electrónica?',
    opciones: [
      'Ley 11/2007, de acceso electrónico de los ciudadanos a los Servicios Públicos.',
      'Real Decreto 1619/2012, por el que se regulan las obligaciones de facturación.',
      'Ley 25/2013, de impulso de la factura electrónica en el sector público.',
      'Real Decreto Legislativo 3/2011, texto refundido de la Ley de Contratos del Sector Público.'
    ],
    respuesta_correcta: 0
  },
  1499: {
    texto: 'Según el artículo 20.1 del Reglamento eIDAS vigente, ¿en qué plazo remitirá un prestador cualificado el informe de evaluación de conformidad al organismo de supervisión?',
    opciones: ['Tres días hábiles desde su recepción.', 'Cinco días hábiles desde su recepción.', 'Diez días hábiles desde su recepción.', 'Diez días naturales desde su recepción.'],
    respuesta_correcta: 0
  },
  1500: {
    texto: '¿Qué describe correctamente el asistente Facilita_RGPD de la AEPD?',
    opciones: [
      'Orienta a pymes y microempresas con tratamientos habituales de escaso riesgo y puede advertir si el supuesto no es adecuado para ese asistente.',
      'Emite una certificación vinculante que acredita automáticamente el cumplimiento íntegro del RGPD.',
      'Sustituye siempre el análisis de riesgos y la evaluación de impacto, incluso ante tratamientos de alto riesgo.',
      'Es la herramienta de la AEPD para gestionar de forma integral el registro de actividades y calcular el riesgo residual de cualquier entidad.'
    ],
    respuesta_correcta: 0
  }
};

apply({numero: '236', fecha: '2026-10-25', records, edits});
