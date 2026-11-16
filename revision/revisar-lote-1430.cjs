const apply = require('./aplicar-lote.cjs');

const records = [
  [7451, [37], ['III-2'], ['Lean software development', 'Poppendieck', 'siete principios', 'agilidad'], [
    { url: 'https://www.gao.gov/assets/720/710147.pdf', referencia: 'U.S. Government Accountability Office, GAO-20-590G, Agile Assessment Guide (2020), apéndice V, tabla 25 y texto asociado: identifica los siete principios de Lean Software Development, entre ellos “Amplify learning” y “Defer commitment” (decidir en el último momento responsable); tabla 26 incluye “Empower the team”. El propio informe cita como fuente a Mary y Tom Poppendieck, Lean Software Development: An Agile Toolkit (2003).' },
    { url: 'https://books.google.com/books/about/Lean_Software_Development.html?id=IJ1gAgAAQBAJ', referencia: 'Ficha bibliográfica de Lean Software Development: An Agile Toolkit, de Mary y Tom Poppendieck: el libro presenta siete principios Lean aplicados al desarrollo de software.' },
    { url: 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk', referencia: 'Cotejo curricular: ITIC Academy, bloque 15 “Metodologías ágiles y modelos de ciclo de vida”, versión 2026.1; declara A1-37 (metodologías ágiles y Lean) y A2-III-2 (gestión y planificación del desarrollo y metodologías). La guía del GAO, que remite a Poppendieck, confirma los ejemplos concretos.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria oficial del Cuerpo Superior TIC, A1, BOE-A-2025-25938; programa A1-37.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', referencia: 'Convocatoria oficial del Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; programa A2-III-2.' }
  ], {
    texto: 'En Lean Software Development, según los siete principios de Mary y Tom Poppendieck, ¿cuál de las siguientes opciones recoge principios del modelo?',
    opciones: ['Empoderar al equipo.', 'Decidir lo más tarde posible, en el último momento responsable.', 'Amplificar el aprendizaje.', 'Todas las anteriores.'],
    respuesta_correcta: 3
  }, 'Vigente D. Las tres primeras opciones corresponden a principios del marco de Poppendieck: empoderar al equipo, diferir el compromiso hasta el último momento responsable y amplificar el aprendizaje. Se identifica expresamente el modelo para evitar confundir sus principios con otros marcos Lean o Agile.', 'corregida'],

  [7452, [30, 40], ['II-15'], ['contratación TIC', 'informe técnico', 'AEAD', 'RD 1125/2024', 'plazos administrativos'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2024-22935&lang=es&p=&tn=1', referencia: 'Real Decreto 1125/2024, texto consolidado del BOE, arts. 13.4–13.5 y 14.4: el informe técnico preceptivo se exige antes de licitar en las categorías enumeradas y tiene excepciones; el plazo general es de cinco días hábiles desde el siguiente a la solicitud con documentación completa y puede ampliarse, por las causas del precepto y comunicándolo al órgano solicitante, hasta quince días hábiles.' },
    { url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk', referencia: 'Cotejo curricular: ITIC Academy, bloque 10 “Gobernanza TIC y Administración digital”, versión 2026.4; aborda el modelo vigente del RD 1125/2024 y la Agencia Estatal de Administración Digital. A1-30.' },
    { url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk', referencia: 'Cotejo curricular: ITIC Academy, bloque 17 “Adquisición de sistemas, alternativas y rentabilidad de las inversiones”, versión 2026.2; trata adquisición y contratación TIC en el marco de evaluación y viabilidad de alternativas. A1-40/A2-II-15.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria oficial del Cuerpo Superior TIC, A1, BOE-A-2025-25938; correspondencia con gobernanza TIC A1-30 y adquisición de sistemas A1-40.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', referencia: 'Convocatoria oficial del Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; correspondencia con evaluación de alternativas y viabilidad A2-II-15.' }
  ], {
    texto: 'Conforme al Real Decreto 1125/2024, sobre el informe técnico de la Agencia Estatal de Administración Digital para determinadas contrataciones TIC sujetas a informe preceptivo, ¿qué afirmación es correcta?',
    opciones: [
      'El plazo es siempre de diez días hábiles y no puede ampliarse.',
      'El informe es preceptivo para cualquier contrato TIC, sin excepciones.',
      'El plazo general es de cinco días hábiles desde el día siguiente a la solicitud y puesta a disposición de la documentación completa; por la naturaleza del objeto o la complejidad, puede ampliarse hasta quince días hábiles, comunicándolo al órgano solicitante.',
      'Lo emite la Comisión Ministerial de Administración Digital junto con la Agencia.'
    ],
    respuesta_correcta: 2
  }, 'Corregida C. Se sustituye la referencia desactualizada a la antigua Dirección de Tecnologías de la Información y las Comunicaciones por el régimen vigente del RD 1125/2024. El informe es preceptivo solo para los contratos enumerados en el art. 13.4 y con las exclusiones del art. 13.5; el art. 14.4 fija cinco días hábiles como plazo general y permite la ampliación motivada hasta quince, con comunicación al órgano solicitante.', 'corregida'],

  [7453, [40], ['II-15'], ['decisión multicriterio discreta', 'método de la entropía', 'ponderación objetiva', 'Zeleny'], [
    { url: 'https://doi.org/10.1016/0305-0548(74)90064-1', referencia: 'Milan Zeleny, “A concept of compromise solutions and the method of the displaced ideal”, Computers & Operations Research, 1(3–4), 1974, pp. 479–496. El trabajo introduce una ponderación basada en la medición de la entropía de los atributos en problemas multiobjetivo.' },
    { url: 'https://www.sciencedirect.com/science/article/pii/0305054874900641', referencia: 'Ficha editorial de Elsevier para el artículo de Zeleny (1974), con resumen del concepto de peso de importancia basado en entropía de atributos.' },
    { url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk', referencia: 'Cotejo curricular: ITIC Academy, bloque 17, versión 2026.2; incluye DMD, asignación de pesos a criterios y el método de la entropía. Correspondencia directa con A1-40 y A2-II-15.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria oficial del Cuerpo Superior TIC, A1, BOE-A-2025-25938; programa A1-40, estudio de alternativas y toma de decisiones.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', referencia: 'Convocatoria oficial del Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; programa A2-II-15, evaluación de alternativas y análisis de viabilidad.' }
  ], {
    texto: 'En una decisión multicriterio discreta, ¿qué método de ponderación objetiva obtiene pesos a partir de la entropía de los valores de los criterios en las alternativas, asignando más peso relativo a los criterios que aportan mayor contraste informativo?',
    opciones: ['Método Delphi.', 'Método de las Utilidades Relativas.', 'Método de Saaty o AHP.', 'Método de la entropía.'],
    respuesta_correcta: 3
  }, 'Corregida D. Zeleny introdujo un concepto de peso de importancia basado en la entropía de los atributos. En las variantes habituales, menor entropía (mayor dispersión o contraste de los datos del criterio) produce mayor grado de diversificación y peso objetivo. La ponderación depende de la matriz y de su normalización; no expresa por sí sola la importancia normativa o estratégica del criterio.', 'corregida'],

  [7454, [41], ['II-15'], ['adquisición de hardware', 'viabilidad', 'coste del ciclo de vida', 'amortización', 'obsolescencia'], [
    { url: 'https://green-forum.ec.europa.eu/green-business/green-public-procurement/life-cycle-costing_en', referencia: 'Comisión Europea, Life-cycle costing: explica que el precio de compra es solo un componente y que la evaluación puede incluir costes de adquisición, explotación, mantenimiento y fin de vida durante la vida útil del producto.' },
    { url: 'https://publications.jrc.ec.europa.eu/repository/handle/JRC124294', referencia: 'Comisión Europea, Joint Research Centre, revisión de los criterios de contratación pública ecológica para ordenadores, monitores y smartphones: identifica la extensión de la vida útil, consumo energético, sustancias peligrosas y fin de vida como ámbitos de evaluación de equipos TIC.' },
    { url: 'https://docs.google.com/document/d/1DH-igjyag_aw_p36LaNS1djSWTKTakxb/edit?usp=drivesdk', referencia: 'Cotejo curricular: ITIC Academy, bloque 17 de adquisición de sistemas, edición 2026; en alternativas de hardware incluye presupuesto/costes, vida útil, amortización de equipos y evolución tecnológica/obsolescencia. Correspondencia con A1-41 y A2-II-15.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria oficial del Cuerpo Superior TIC, A1, BOE-A-2025-25938; programa A1-41, alternativas de decisión para equipamiento hardware y software.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', referencia: 'Convocatoria oficial del Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; programa A2-II-15, evaluación de alternativas y viabilidad.' }
  ], {
    texto: 'En un estudio de viabilidad para adquirir hardware, ¿qué conjunto de aspectos es razonable valorar antes de elegir una solución, sin que ninguno de ellos por sí solo determine la compra?',
    opciones: [
      'La disponibilidad presupuestaria para el coste de adquisición y los costes asociados.',
      'La vida útil esperada, comparada con el horizonte de uso y la amortización estimada.',
      'El riesgo de obsolescencia tecnológica y la disponibilidad de soporte y mantenimiento.',
      'Todos los anteriores.'
    ],
    respuesta_correcta: 3
  }, 'Corregida D. El original era ambiguo al presentar presupuesto, vida superior al periodo de amortización y bajo riesgo de obsolescencia como condiciones tajantes de compra. Se formula como factores que deben valorarse, no como umbrales universales ni requisitos legales autónomos. El enfoque de ciclo de vida incorpora precio, operación y mantenimiento; la guía del JRC identifica la extensión de vida útil como criterio relevante para la contratación TIC.', 'corregida'],

  [7455, [43], ['II-14'], ['propiedad intelectual', 'derecho de autor', 'programas de ordenador', 'TRLPI'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930', referencia: 'Real Decreto Legislativo 1/1996, texto consolidado del BOE, art. 10.1: incluye expresamente los programas de ordenador entre las creaciones originales objeto de propiedad intelectual; art. 96.2: el programa se protege únicamente si es original como creación intelectual propia de su autor. La protección autoral no exige novedad ni aplicación industrial.' },
    { url: 'https://www.boe.es/eli/es/dir/2009/24/oj', referencia: 'Directiva 2009/24/CE del Parlamento Europeo y del Consejo, relativa a la protección jurídica de programas de ordenador; art. 1 delimita el objeto de protección por derecho de autor y exige originalidad, no novedad patentable.' },
    { url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', referencia: 'Cotejo curricular: ITIC Academy, bloque 18 “Protección jurídica, licencias y control del software”, edición 2026.1; trata el TRLPI, la protección jurídica de programas y sus licencias. Correspondencia directa con A1-43 y A2-II-14.' },
    { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria oficial del Cuerpo Superior TIC, A1, BOE-A-2025-25938; programa A1-43, protección jurídica de programas de ordenador.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2025-26262', referencia: 'Convocatoria oficial del Cuerpo de Gestión de Sistemas e Informática, A2, BOE-A-2025-26262; programa A2-II-14, protección jurídica de programas de ordenador.' }
  ], {
    texto: 'Según el texto refundido de la Ley de Propiedad Intelectual, ¿qué afirmación describe correctamente la protección de los programas de ordenador por derecho de autor?',
    opciones: [
      'Los programas de ordenador están excluidos de las creaciones protegidas por el artículo 10.',
      'Se incluyen entre las obras objeto de propiedad intelectual; un programa queda protegido únicamente si es original, en el sentido de creación intelectual propia de su autor.',
      'Solo se protegen si son novedosos y susceptibles de aplicación industrial, como una patente.',
      'Solo se protegen cuando se fijan en un soporte tangible.'
    ],
    respuesta_correcta: 1
  }, 'Corregida B. El artículo 10.1 incluye expresamente los programas de ordenador, y el artículo 96.2 exige que sean originales como creación intelectual propia del autor. No se confunde originalidad autoral con novedad y aplicación industrial propias del régimen de patentes, ni se limita la protección a un soporte tangible.', 'corregida']
];

apply({ numero: '1430', fecha: '2026-11-16', records });
