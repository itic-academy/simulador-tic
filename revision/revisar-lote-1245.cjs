const apply = require('./aplicar-lote.cjs');
const src = (url, referencia) => ({ url, referencia });
const academy = (id, title, detail) => src(
  `https://drive.google.com/file/d/${id}/view?usp=drivesdk`,
  `ITIC Academy, ${title}, edición 2026: ${detail}; cotejo curricular, no fuente jurídica primaria.`
);
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229';
const epRules = 'https://www.europarl.europa.eu/rules/rules20240716/Rules20240716_EN.pdf';
const epBodies = 'https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/political-bodies';
const ljca = 'https://www.boe.es/buscar/act.php?id=BOE-A-1998-16718';
const lcsp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';

apply({ numero: '1245', fecha: '2026-11-14', records: [
  [6546, ['3'], ['I-1'], ['Constitución Española', 'Estatutos de Autonomía', 'reforma estatutaria', 'ley orgánica'], [
    src(ce, 'Constitución Española consolidada, artículo 147.3: la reforma estatutaria sigue el procedimiento previsto en cada Estatuto y requiere siempre aprobación de las Cortes Generales mediante ley orgánica.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 3: organización política y administrativa de las comunidades autónomas y Estatutos de Autonomía.'),
    src(a2, 'Convocatoria GSI A2 2025, tema I.1: Constitución Española; el punto se clasifica por su fundamento constitucional general, aunque el programa A2 no desarrolla específicamente la reforma estatutaria.'),
    academy('1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN', 'bloque 01, Constitución, organización del Estado y AGE', 'incluye A1-3, organización de las comunidades autónomas y Estatutos; la regla concreta se verifica en el art. 147.3 CE.'),
    academy('11wa3Kb-raEHyXAwPtbhT45UIfDFPR4Y-', 'bloque constitucional A1/A2, temas 1–6 y O1–O3', 'coteja la cobertura general de la Constitución en A2-I.1, sin tratar el material académico como fuente normativa.')
  ], { texto: 'La reforma de los Estatutos de Autonomía de las comunidades autónomas requerirá en todo caso:', opciones: ['Autorización del Consejo de Ministros.', 'Aprobación del Senado.', 'Aprobación de las Cortes Generales mediante ley orgánica.', 'Referéndum de los electores inscritos en los censos correspondientes y aprobación por ley orgánica de las Cortes Generales.'], respuesta_correcta: 2 }, 'Se mantiene C. El artículo 147.3 CE exige siempre la aprobación de las Cortes Generales mediante ley orgánica y remite además al procedimiento de reforma establecido en cada Estatuto. El referéndum no es requisito universal para toda reforma estatutaria; depende del procedimiento constitucional/estatutario aplicable. A1-3 y, como encaje constitucional general, A2-I.1.', 'vigente'],

  [6547, ['5'], [], ['Unión Europea', 'Parlamento Europeo', 'Mesa', 'Bureau', 'Vicepresidencias', 'Cuestores'], [
    src(epRules, 'Reglamento interno del Parlamento Europeo, edición en vigor desde el 16-07-2024, regla 24: composición y funciones de la Mesa; los Cuestores participan con carácter consultivo.'),
    src(epBodies, 'Parlamento Europeo, órganos políticos: la Mesa comprende al Presidente, 14 Vicepresidentes y cinco Cuestores; estos últimos son miembros con función consultiva.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 5: instituciones y organización de la Unión Europea.'),
    academy('1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7', 'bloque 02, Unión Europea', 'incluye el tema A1-5 y las instituciones; la composición y el papel consultivo de los Cuestores se verifican en las reglas del Parlamento Europeo.')
  ], { texto: 'Según la regla 24 del Reglamento interno del Parlamento Europeo, ¿cuál es la composición de la Mesa y qué papel tienen los Cuestores?', opciones: ['El Presidente, catorce Vicepresidentes y cinco Cuestores; estos últimos participan con carácter consultivo.', 'El Presidente, catorce Vicepresidentes y cinco Cuestores, todos con idénticas funciones decisorias.', 'El Presidente, doce Vicepresidentes y cinco Cuestores con carácter consultivo.', 'El Presidente, catorce Vicepresidentes; los Cuestores no forman parte de la Mesa.'], respuesta_correcta: 0 }, 'Se corrige la pregunta para distinguir la composición de la Mesa de la condición de los Cuestores. La respuesta es A: Presidente, 14 Vicepresidentes y cinco Cuestores, que participan en la Mesa con carácter consultivo; no debe inferirse que tengan idéntica función decisoria. A1-5. El temario A2 no contiene un tema específico de instituciones de la UE.', 'corregida'],

  [6548, ['9'], [], ['jurisdicción contencioso-administrativa', 'sentencia', 'plazo procesal', 'artículo 67 LJCA'], [
    src(ljca, 'Ley 29/1998, reguladora de la Jurisdicción Contencioso-administrativa, texto consolidado vigente, artículo 67.1 y 67.2: plazo general de diez días desde que el pleito se declara concluso; el apartado 2 prevé que se señale motivadamente una fecha posterior concreta cuando no pueda cumplirse.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 9: revisión de actos, recursos administrativos y recurso contencioso-administrativo.'),
    academy('1U6EEziJeYQVc2YuAzidHpR4x_MBjZhV-', 'bloque 04, revisión de actos y responsabilidad patrimonial', 'incluye el tema A1-9 y el recurso contencioso-administrativo; la respuesta se contrasta con el artículo vigente de la LJCA.')
  ], { texto: 'Según el artículo 67.1 de la Ley reguladora de la Jurisdicción Contencioso-administrativa, como regla general y sin perjuicio de su apartado 2, ¿en qué plazo se dictará sentencia desde que el pleito sea declarado concluso?', opciones: ['Cinco días.', 'Diez días.', 'Quince días.', 'Veinte días.'], respuesta_correcta: 1 }, 'Se mantiene B y se precisa que se pregunta por la regla general del artículo 67.1 LJCA: diez días desde que el pleito se declara concluso. El apartado 2 permite que, si el órgano judicial razona que no puede dictar sentencia dentro de ese plazo, fije una fecha posterior concreta y la notifique a las partes. No se añade la calificación «hábiles» porque el precepto no la expresa.', 'corregida'],

  [6549, ['11'], [], ['contratación pública', 'contratación centralizada', 'Junta de Contratación Centralizada', 'LCSP artículo 229'], [
    src(lcsp, 'Ley 9/2017, de Contratos del Sector Público, texto consolidado vigente, artículo 229.5: identifica a la Junta de Contratación Centralizada como órgano de contratación del sistema estatal de contratación centralizada.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 11: contratos de las Administraciones públicas y Ley de Contratos del Sector Público.'),
    academy('1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ', 'bloque 05, contratación, presupuestos y compra TIC', 'cubre el tema A1-11 y contratación centralizada; el órgano competente se contrasta con el artículo 229.5 LCSP.')
  ], { texto: 'De acuerdo con el artículo 229.5 de la Ley 9/2017, ¿cuál es el órgano de contratación del sistema estatal de contratación centralizada?', opciones: ['El Ministro de Hacienda.', 'La Dirección General de Patrimonio del Estado.', 'La Junta de Contratación Centralizada.', 'La Junta Consultiva de Contratación Pública del Estado.'], respuesta_correcta: 2 }, 'Se confirma C. El artículo 229.5 LCSP identifica expresamente a la Junta de Contratación Centralizada como órgano de contratación del sistema estatal. La Dirección General indicada en el propio artículo desempeña funciones de adscripción/gestión, pero no sustituye a la Junta como órgano de contratación. Se cita el precepto para evitar confundir la respuesta con denominaciones ministeriales que pueden variar.', 'vigente'],

  [6550, ['11'], [], ['contratación pública', 'invalidez contractual', 'causas civiles', 'LCSP artículo 38'], [
    src(lcsp, 'Ley 9/2017, de Contratos del Sector Público, texto consolidado vigente, artículos 38 y 39: el artículo 38 incluye como supuesto de invalidez que concurra una causa de invalidez conforme al Derecho civil; distingue los actos preparatorios/adjudicación sujetos a causas administrativas y la ilegalidad del clausulado.'),
    src(a1, 'Convocatoria GSI A1 2025, tema 11: contratos de las Administraciones públicas y Ley de Contratos del Sector Público.'),
    academy('1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ', 'bloque 05, contratación, presupuestos y compra TIC', 'incluye la LCSP y su régimen jurídico, materia del tema A1-11; la opción se verifica directamente con el artículo 38.')
  ], {}, 'Se confirma B. El artículo 38.a LCSP contempla las causas de invalidez reconocidas por el Derecho civil. También incluye la invalidez de actos preparatorios o de adjudicación por causas administrativas y la ilegalidad del clausulado; ni la mala fe del contratista ni la referencia al Derecho mercantil son la formulación del precepto.', 'vigente']
] });
