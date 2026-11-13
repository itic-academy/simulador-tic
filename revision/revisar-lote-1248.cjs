const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({ url, referencia });
const academy = (id, title, detail) => src(
  `https://drive.google.com/file/d/${id}/view?usp=drivesdk`,
  `ITIC Academy, ${title}, edición 2026: ${detail}; cotejo curricular, no fuente jurídica o técnica primaria.`
);
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const lopdgdd = 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673';
const padrón = 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392';
const risp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-19814';
const agile = 'https://agilealliance.org/glossary/burndown-chart/';

apply({ numero: '1248', fecha: '2026-11-14', records: [
  [6561, ['27'], ['I-7'], ['protección de datos', 'códigos de conducta', 'AEPD', 'autoridad autonómica', 'artículo 38 LOPDGDD'], [
    src(lopdgdd, 'Ley Orgánica 3/2018, texto consolidado vigente, artículo 38.3: los códigos de conducta son aprobados por la AEPD o, en su caso, por la autoridad autonómica de protección de datos competente.'),
    src('https://eur-lex.europa.eu/eli/reg/2016/679/oj', 'Reglamento (UE) 2016/679, artículo 40.5: la autoridad de control competente emite opinión y aprueba los códigos que satisfacen los requisitos; el art. 38.3 LOPDGDD precisa las autoridades españolas.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 27: régimen jurídico de protección de datos, RGPD y AEPD.'),
    src(a2, 'Convocatoria GSI A2 2025, tema I.7: régimen jurídico de protección de datos y autoridades de control.'),
    academy('1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM', 'bloque 08, protección de datos', 'incluye RGPD, LOPDGDD, derechos, autoridades de control y códigos de conducta, A1-27/A2-I.7.')
  ], { texto: 'Conforme al artículo 38.3 de la LOPDGDD, ¿quién aprueba los códigos de conducta en protección de datos en España?', opciones: ['La AEPD o, en su caso, la autoridad autonómica de protección de datos competente, según el ámbito de sus competencias.', 'El responsable del tratamiento, sin intervención de una autoridad de control.', 'El delegado de protección de datos de cada entidad que se adhiera al código.', 'El encargado del tratamiento, previa autorización del responsable.'], respuesta_correcta: 0 }, 'Se delimita la pregunta al artículo 38.3 LOPDGDD y se evita presentar a la AEPD como única autoridad competente para todos los códigos: también puede aprobarlos la autoridad autonómica de protección de datos competente. El responsable o encargado puede promoverlos, pero la aprobación corresponde a la autoridad supervisora.', 'corregida'],

  [6562, ['3', '8'], ['I-8'], ['Padrón municipal', 'cesión de datos', 'residencia', 'domicilio', 'competencias administrativas', 'artículo 16.3 LBRL'], [
    src(padrón, 'Ley 7/1985, Reguladora de las Bases del Régimen Local, texto consolidado vigente, artículo 16.3: los datos obligatorios se ceden sin consentimiento previo solo si son necesarios para las competencias de la Administración solicitante y para asuntos donde residencia o domicilio sean relevantes; los datos voluntarios no se ceden.'),
    src('https://www.boe.es/boe/dias/2023/09/18/pdfs/BOE-A-2023-19648.pdf', 'Resolución publicada en BOE con criterio de la AEPD sobre cesiones padronales: necesidad, relevancia del domicilio/residencia y minimización, conforme al art. 16.3 LBRL.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 3: organización territorial y Administración local; tema 8, régimen jurídico administrativo.'),
    src(a2, 'Convocatoria GSI A2 2025, tema I.8: régimen jurídico de las Administraciones públicas y procedimiento administrativo.'),
    academy('1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN', 'bloque 01, Constitución, organización del Estado y AGE', 'cubre la organización territorial y la Administración local; el requisito de cesión se verifica directamente con el artículo 16.3 LBRL.')
  ], { texto: 'Según el artículo 16.3 de la Ley de Bases del Régimen Local, ¿en qué condiciones se ceden a otras Administraciones públicas los datos obligatorios del Padrón municipal?', opciones: ['Solo con consentimiento previo de la persona interesada.', 'Sin consentimiento, siempre que la Administración solicitante invoque cualquier competencia, aunque el domicilio no sea relevante.', 'Con consentimiento previo y exclusivamente para fines estadísticos.', 'Sin consentimiento previo, cuando sean necesarios para las competencias de la Administración solicitante y exclusivamente para asuntos en que residencia o domicilio sean relevantes.'], respuesta_correcta: 3 }, 'Se confirma D y se precisa la referencia al artículo 16.3 LBRL. La cesión sin consentimiento exige necesidad para las competencias de la Administración solicitante y relevancia de residencia o domicilio en el asunto; los datos voluntarios no son cedibles.', 'corregida'],

  [6563, ['31'], ['I-9'], ['RISP', 'reutilización de información pública', 'responsabilidad', 'artículo 11.7 Ley 37/2007', 'datos abiertos'], [
    src(risp, 'Ley 37/2007, de reutilización de la información del sector público, texto consolidado vigente, artículo 11.7: la reutilización se realiza bajo responsabilidad y riesgo de quienes reutilizan, a quienes corresponde en exclusiva responder frente a terceros por los daños derivados de ella; apartado 8 excluye la responsabilidad pública por esos daños.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 31: reutilización de información del sector público, datos abiertos y transparencia.'),
    src(a2, 'Convocatoria GSI A2 2025, tema I.9: datos abiertos y normativa vigente de reutilización de información del sector público.'),
    academy('17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd', 'bloque 11, reutilización de la información del sector público, datos abiertos y transparencia', 'desarrolla Ley 37/2007 y agentes reutilizadores, encaje A1-31/A2-I.9; la regla se comprueba en el artículo 11.7 BOE.')
  ], { texto: 'Conforme al artículo 11.7 de la Ley 37/2007, ¿quién responde frente a terceros por los daños que puedan derivarse de la reutilización de los conjuntos de datos?', opciones: ['Los usuarios o agentes reutilizadores, bajo cuya responsabilidad y riesgo se realiza la reutilización.', 'La Administración u organismo público que elaboró los datos, en exclusiva.', 'Los reutilizadores y la Administración, de forma solidaria en todo caso.', 'La Administración como responsable principal y los reutilizadores subsidiariamente.'], respuesta_correcta: 0 }, 'Se confirma A y se acota al artículo 11.7: la reutilización se realiza bajo responsabilidad y riesgo de los usuarios o agentes reutilizadores, a quienes corresponde en exclusiva responder frente a terceros por los daños que de ella pudieran derivarse. El apartado 8 complementa la regla respecto de los sujetos públicos.', 'corregida'],

  [6564, ['33', '35', '87'], ['II-15'], ['DAFO', 'planificación estratégica', 'fortalezas', 'debilidades', 'oportunidades', 'amenazas'], [
    src('https://publications.jrc.ec.europa.eu/repository/bitstream/JRC125110/jrc125110_ce_perspectives_for_eu_textiles_tr_10.06.2021_final.pdf', 'Centro Común de Investigación de la Comisión Europea, análisis SWOT: define las cuatro dimensiones como fortalezas, debilidades, oportunidades y amenazas, y las ordena en factores internos y externos.'),
    src(a1, 'Convocatoria GSI A1 2025, temas 33, 35 y 87: herramientas de planificación/gestión y planificación estratégica de sistemas.'),
    src(a2, 'Convocatoria GSI A2 2025, tema II.15: evaluación de alternativas, planificación y control de proyectos informáticos.'),
    academy('1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF', 'bloque 12, estrategias y herramientas del directivo público TIC', 'incluye DAFO, planificación estratégica, cuadro de mando y plan de sistemas; cotejo A1-33/A1-35/A1-87 y A2-II.15.')
  ], {}, 'La respuesta A se confirma: DAFO representa Debilidades, Amenazas, Fortalezas y Oportunidades (SWOT); «Directrices» no es una de sus cuatro dimensiones. En el modelo habitual, debilidades y fortalezas son internas, mientras que amenazas y oportunidades son externas.', 'vigente'],

  [6565, ['37'], ['III-2'], ['Lean', 'Kaizen', 'Value Stream Mapping', '5S', 'ágil', 'burndown chart'], [
    src('https://www.lean.org/lexicon-terms/kaizen/', 'Lean Enterprise Institute, glosario Lean: kaizen es mejora continua y se usa como práctica Lean.'),
    src('https://www.lean.org/lexicon-terms/value-stream-mapping/', 'Lean Enterprise Institute, glosario: el mapeo del flujo de valor representa los flujos de material e información como práctica central Lean.'),
    src('https://www.lean.org/lexicon-terms/five-s/', 'Lean Enterprise Institute, glosario 5S: método Lean para ordenar, estandarizar y sostener mejoras del puesto de trabajo.'),
    src(agile, 'Agile Alliance, glosario de burndown chart: gráfica de trabajo pendiente frente al tiempo, usada para visualizar progreso en proyectos ágiles/Scrum.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 37: metodologías ágiles para la gestión de proyectos y metodologías Lean.'),
    src(a2, 'Convocatoria GSI A2 2025, tema III.2: gestión y planificación del desarrollo, prácticas de proyecto y metodologías.'),
    academy('1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW', 'bloque 15, metodologías ágiles y ciclo de vida', 'edición 2026, incluye el tema oficial A1-37 (metodologías ágiles y Lean) y el contraste con A2-III.2.')
  ], { texto: '¿Cuál de las siguientes es una gráfica de seguimiento del trabajo pendiente propia de la gestión ágil (por ejemplo, Scrum), y no una de las prácticas Lean enumeradas?', respuesta_correcta: 2 }, 'Se mantiene C, pero se delimita la comparación para evitar afirmar que una gráfica no pueda coexistir con prácticas Lean en un equipo híbrido. Kaizen, Value Stream Mapping y 5S son prácticas/herramientas asociadas a Lean; el burndown chart representa trabajo pendiente frente al tiempo y se utiliza en seguimiento ágil/Scrum. A1-37/A2-III.2.', 'corregida']
] });
