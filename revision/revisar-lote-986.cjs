const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });
const ine = 'https://www.ine.es/daco/daco42/daco4211/epa0422.pdf';
const ontsi = 'https://www.ontsi.es/sites/ontsi/files/2021-03/InformeSectorTIC2020_0.pdf';
const hood = 'https://doi.org/10.1111/j.1467-9299.1991.tb00779.x';
const oecd = 'https://www.oecd.org/en/publications/public-administration-after-new-public-management_9789264086449-en.html';
const juntaDafo = 'https://ws168.juntadeandalucia.es/publicaciones/public/libros/manualPlanesEstrategicos/132/';
const juntaCame = 'https://ws168.juntadeandalucia.es/publicaciones/public/libros/manualPlanesEstrategicos/133/';
const pmi = 'https://www.pmi.org/learning/library/critical-path-method-calculations-scheduling-8040';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const b06 = 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const b12 = 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk';

const records = [
  [5251, ['17'], [], ['EPA', 'tasa de actividad', 'cuarto trimestre 2022', 'INE', 'dato histórico'], [
    ref(ine, 'INE, EPA del cuarto trimestre de 2022, anexo de tablas, resultados nacionales: tasa de actividad de ambos sexos (16 y más años) = 58,52 %. La tasa de actividad de 16 a 64 años es distinta; la pregunta no especifica ese subgrupo y las opciones apuntan al total.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 17: mercado de trabajo, principales magnitudes y políticas públicas de empleo.'),
    ref(b06, 'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026: indicadores de la EPA y tasas de actividad, paro y empleo.')
  ], null, 'Para el conjunto de población de 16 y más años, la tabla nacional del INE da 58,52 %. La tasa del grupo de 16–64 años es 79,37 %, pero no es la que pregunta el enunciado. Se conserva como dato histórico referido expresamente al cuarto trimestre de 2022.', 'historica'],
  [5252, ['19'], [], ['ONTSI', 'sector TIC', 'ocupación', 'consultoría informática', 'dato histórico'], [
    ref(ontsi, 'ONTSI, Informe anual del sector TIC, medios y servicios audiovisuales en España 2020, datos de 2019, apartado de empleo en actividades informáticas: la consultoría informática ocupa a 108.605 personas; programación, 43.820; gestión de recursos informáticos, 14.352; reparación de equipos de comunicación, 7.175. Entre las cuatro opciones del test, consultoría es la de mayor empleo.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 19: impacto de las TIC en la economía y el mercado de trabajo; principales magnitudes.'),
    ref(b06, 'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026: magnitudes del empleo y peso económico del sector TIC.')
  ], null, 'La respuesta es «Consultoría informática» entre las actividades ofrecidas: el informe ONTSI contabiliza 108.605 ocupados en esa rama, por encima de programación (43.820), gestión de recursos (14.352) y reparación de equipos de comunicación (7.175). El informe sitúa por encima de consultoría a «otros servicios relacionados con las TIC», pero esa rama no aparece entre las opciones. Es una comparación histórica con datos de 2019 publicados en el informe de 2020.', 'historica'],
  [5253, ['20'], [], ['Nueva Gestión Pública', 'reforma administrativa', 'gerencialismo', 'gestión pública'], [
    ref(hood, 'Christopher Hood, «A Public Management for All Seasons?», Public Administration 69(1), 1991, pp. 3–19, DOI 10.1111/j.1467-9299.1991.tb00779.x: describe el ascenso de la Nueva Gestión Pública y sus doctrinas de gestión; el artículo sitúa su auge en el periodo precedente y examina su persuasión en los años 1980.'),
    ref(oecd, 'OCDE, Public Administration after “New Public Management” (2010): resume que en los años 1980 predominaba la idea de un Estado menor y en los 1990 la NGP fue el tema dominante; destaca las técnicas gerenciales y de mercado.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 20: función gerencial en las Administraciones públicas y particularidades de la gestión pública.'),
    ref(b12, 'ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC. Planificación estratégica», versión 2026.2, secciones sobre función gerencial, directivo público y teorías de organización.')
  ], null, 'Se precisa «Nueva Gestión Pública» porque el rótulo genérico «Management» era impreciso. La opción B es la aproximación correcta: la corriente se vincula a reformas iniciadas a fines de los 70 y desarrolladas durante los 80, con reducción/contención del Estado y adopción de técnicas del sector privado. La OCDE distingue ese ideal de menor gobierno en los 80 de la NGP como tema dominante en los 90; no debe entenderse 1970 como una fecha única de aparición ni atribuir al modelo una sola doctrina uniforme.', 'corregida'],
  [5254, ['33'], [], ['PEST', 'DAFO', 'CAME', 'análisis estratégico', 'planificación'], [
    ref(juntaDafo, 'Junta de Andalucía, Manual de elaboración de planes estratégicos de políticas públicas, apartado 1.3.2: DAFO diagnostica fortalezas y debilidades internas y oportunidades y amenazas externas para orientar la estrategia.'),
    ref(juntaCame, 'Junta de Andalucía, mismo manual, apartado 1.3.3: CAME parte del DAFO y ayuda a definir acciones; corregir debilidades, afrontar amenazas, mantener fortalezas y explotar oportunidades.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 33: herramientas de planificación y control de gestión de la función directiva TIC.'),
    ref(b12, 'ITIC Academy, bloque 12, versión 2026.2, apartado 2.2 «Herramientas de análisis: PESTEL, DAFO, FCE, SMART y gap» y apartado sobre planificación estratégica.')
  ], null, 'Se corrige el reactivo: en la versión original se pedía identificar una afirmación errónea, pero las tres eran compatibles con el uso habitual de PEST y DAFO/CAME, por lo que no había una respuesta incorrecta única. El nuevo enunciado pregunta por la secuencia correcta: PEST analiza el macroentorno; DAFO integra factores internos y externos para el diagnóstico; CAME traduce el DAFO en actuaciones (corregir, afrontar, mantener y explotar).', 'corregida'],
  [5255, ['33'], [], ['PERT', 'gestión de proyectos', 'camino crítico', 'holgura'], [
    ref(pmi, 'Project Management Institute, Critical Path Method Calculations: una actividad crítica tiene holgura total nula; al añadir duración o retraso a cualquiera de las actividades del camino crítico, se retrasa la fecha de fin del proyecto en el modelo CPM/PERT sin medidas compensatorias.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 33: herramientas de planificación y control de gestión de la función directiva TIC.'),
    ref(b12, 'ITIC Academy, bloque 12, versión 2026.2, apartado 2.3, herramientas de planificación de proyectos; incluye diagramas PERT.')
  ], null, 'En el modelo de red PERT/CPM, una tarea crítica tiene holgura total cero: si su duración aumenta, la fecha prevista de terminación del proyecto también se desplaza, salvo que se acorte otra actividad o se adopte una medida correctora. Se explicita este supuesto para no confundir el retraso con una replanificación posterior.', 'vigente']
];

const edits = {
  5254: {
    texto: '¿Qué secuencia describe correctamente la relación entre PEST, DAFO y CAME en el análisis estratégico?',
    opciones: [
      'PEST analiza el macroentorno; DAFO integra factores internos y externos para el diagnóstico; y CAME deriva actuaciones para corregir debilidades, afrontar amenazas, mantener fortalezas y explotar oportunidades.',
      'PEST analiza las fortalezas y debilidades internas; DAFO se limita al macroentorno; y CAME sustituye el diagnóstico por una previsión financiera.',
      'CAME se realiza antes del DAFO y sirve para elegir los factores políticos, económicos, sociales y tecnológicos del entorno.'
    ],
    respuesta_correcta: 0,
    comentarios: 'Se corrige el reactivo: en la versión original se pedía identificar una afirmación errónea, pero las tres eran compatibles con el uso habitual de PEST y DAFO/CAME, por lo que no había una respuesta incorrecta única. El nuevo enunciado pregunta por la secuencia correcta: PEST analiza el macroentorno; DAFO integra factores internos y externos para el diagnóstico; CAME traduce el DAFO en actuaciones (corregir, afrontar, mantener y explotar).'
  }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-986.json'))) {
  aplicar({ numero: '986', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-986.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5251: ['ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026: indicadores básicos de mercado de trabajo y lectura de resultados EPA.', 'Cotejo A1-17. La pregunta identifica una observación histórica concreta; el total de 16 y más años no debe confundirse con la tasa de 16–64 años.'],
  5252: ['ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», actualización 2026: empleo y magnitudes del sector TIC, en relación con A1-19.', 'Cotejo A1-19. La consultoría es la mayor de las ramas que ofrecen las respuestas, pero el informe también tiene una categoría de otros servicios TIC con más empleo que no figura en las opciones.'],
  5253: ['ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC. Planificación estratégica», versión 2026.2, apartado 1 «El directivo público y el directivo TIC».', 'Cotejo A1-20: la pregunta se concreta a Nueva Gestión Pública para evitar el término genérico e impreciso Management.'],
  5254: ['ITIC Academy, bloque 12, versión 2026.2, apartado 2.2 «Herramientas de análisis: PESTEL, DAFO, FCE, SMART y gap».', 'Cotejo A1-33. Se corrige la premisa defectuosa del reactivo original y se pregunta por la secuencia PEST→DAFO→CAME.'],
  5255: ['ITIC Academy, bloque 12, versión 2026.2, apartado 2.3 «Herramientas de planificación de proyectos» (PERT).', 'Cotejo A1-33: holgura de tareas críticas y efecto en la duración planificada del proyecto.']
};
const reason = 'Cotejo curricular individual con ITIC Academy accesible en Drive y los programas oficiales A1/A2 de 2025.';
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
console.log('Lote 986 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
