const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const lopdgdd = 'https://www.boe.es/eli/es/lo/2018/12/05/3/con';
const rdReuse = 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-17560';
const metricaPSI = 'https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf';
const inapCapacity = 'https://sede.inap.gob.es/documents/10136/1680866/GSI_2010_PI_GSIPI.pdf/c1e421e1-5039-b8b1-a773-e080b62dc109';
const academyPrivacy = 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk';
const academyAlternatives = 'https://drive.google.com/file/d/1eUycEwRk8zA8IIrGWS-tJqNXpajQQR8S/view?usp=drivesdk';
const academyReuse = 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk';
const academyPlan = 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk';

const records = [
  [5321, ['27'], ['I-7'], ['LOPDGDD', 'derechos de las personas', 'transparencia e información', 'acceso', 'rectificación', 'supresión', 'limitación'], [
    ref(lopdgdd, 'Ley Orgánica 3/2018, texto consolidado del BOE, título III, capítulo II, arts. 13–18: transparencia e información, ejercicio, acceso, rectificación, supresión y limitación del tratamiento. La portabilidad y oposición son derechos reconocidos por el RGPD, pero no títulos de este capítulo de la LOPDGDD.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 27: RGPD, derechos y régimen de protección de datos.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.7: régimen jurídico de protección de datos personales y derechos.'),
    ref(academyPrivacy, 'ITIC Academy, bloque 08 «Protección de datos», actualización 2026, derechos de las personas y relación entre RGPD y LOPDGDD.'),
  ], null, 'La respuesta A original no era correcta porque añadía portabilidad y oposición, derechos del RGPD que no figuran como contenido de los arts. 13–18 de este capítulo. La opción correcta se reconstruye con la rúbrica legal: transparencia e información, acceso, rectificación, supresión y limitación del tratamiento. Se elimina una opción que mezclaba derechos del RGPD con el contenido específico de la LOPDGDD.', 'corregida'],
  [5322, ['40', '41'], ['II-15'], ['planificación de capacidad', 'teoría de colas', 'factor de cola', 'Fq', 'tiempo de espera'], [
    ref(inapCapacity, 'INAP, examen oficial de GSI 2010, pregunta 36: reproduce la misma formulación sobre el valor ideal de Fq y presenta Fq=0 como opción. Sirve como antecedente de procedencia del reactivo; no se trata como clave oficial publicada.'),
    ref(a1, 'Convocatoria A1 GSI 2025, temas 40–41: adquisición de sistemas, estudio de alternativas y planificación/viabilidad de capacidad.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.15: evaluación de alternativas, viabilidad, planificación y control de costes de proyectos informáticos.'),
    ref(academyAlternatives, 'ITIC Academy, bloque «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», temas A1.40–42/A2.II.15, incluye planificación de capacidad y proyección.'),
  ], null, 'Se corrige la clave de C (Fq=1) a B (Fq=0). En este reactivo de proyección de capacidad, el factor representa la penalización/espera atribuible a la cola: el valor ideal es cero, sin espera añadida. Se precisa esa interpretación en el enunciado, porque «factor de cola» no tiene una definición simbólica universal en toda la teoría de colas. El examen oficial del INAP de 2010 contiene el mismo reactivo como antecedente, pero no se presenta como una clave de respuestas publicada.', 'corregida'],
  [5323, ['31'], ['I-9'], ['reutilización de información pública', 'RD 1495/2011', 'Catálogo de Información Pública reutilizable', 'datos abiertos'], [
    ref(rdReuse, 'Real Decreto 1495/2011, texto consolidado del BOE, art. 5, «Catálogo de Información Pública reutilizable»: prevé un catálogo estatal de recursos reutilizables accesible desde un único punto. Los nombres de las secretarías que aparecen en el texto original corresponden a la organización administrativa de 2011 y no deben interpretarse como denominaciones orgánicas actuales.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 31: reutilización de información en el sector público, datos abiertos y papel de las TIC.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.9: datos abiertos y normativa de reutilización de la información del sector público.'),
    ref(academyReuse, 'ITIC Academy, bloque 10 «Gobernanza TIC, Administración digital, acceso electrónico y cooperación», edición 2026.4 (01/10/2026), datos abiertos y reutilización de información pública.'),
  ], null, 'La respuesta B es correcta: el nombre del art. 5 es «Catálogo de Información Pública reutilizable». Se reescribe la pregunta para preguntar directamente por la denominación legal, y se advierte que las dos Secretarías de Estado citadas en el texto original reflejan la estructura administrativa de 2011, no necesariamente los órganos responsables actuales.', 'corregida'],
  [5324, ['87'], [], ['MÉTRICA v3', 'factores críticos de éxito', 'FCE', 'Planificación de Sistemas de Información', 'PSI'], [
    ref(metricaPSI, 'Administración electrónica, metodología MÉTRICA v3, proceso Planificación de Sistemas de Información (PSI), tareas PSI 1.2–1.3: identifica «Factores críticos de éxito» entre las prácticas y resultados utilizados para dirigir la planificación del sistema de información.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 87: planificación estratégica de sistemas de información y comunicaciones y plan de sistemas.'),
    ref(academyPlan, 'ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC. Planificación estratégica de sistemas de información», actualización octubre de 2026; cotejo con A1.87.'),
  ], null, 'La respuesta C (MÉTRICA v3) es correcta en el contexto del sistema de información público español. Para evitar que «FCE» parezca una técnica exclusiva de una sola metodología, se concreta el enunciado al proceso PSI de MÉTRICA v3; su documentación oficial incluye los factores críticos de éxito como práctica de planificación.', 'corregida'],
  [5325, ['40', '41'], ['II-15'], ['evaluación multicriterio', 'PROMETHEE', 'utilidad multiatributo', 'permutación', 'recuento de criterios'], [
    ref(a1, 'Convocatoria A1 GSI 2025, temas 40–41: evaluación de alternativas y toma de decisiones en adquisición de sistemas.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema II.15: técnicas de evaluación de alternativas y análisis de viabilidad.'),
    ref(academyAlternatives, 'ITIC Academy, bloque «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», apartado de métodos de evaluación multicriterio y clasificación de alternativas.'),
  ], null, 'Pendiente de ambigüedad. La frase «contar en cuántos criterios ha sido la mejor» no define una regla de agregación multicriterio normalizada ni indica si se cuentan primeras posiciones, victorias por pares o puntuaciones. PROMETHEE, utilidad multiatributo y permutación tienen procedimientos distintos, pero sin fijar qué regla de recuento se pretende, no se puede afirmar que la respuesta D sea inequívoca. Se conserva sin marcar como verificada; hace falta una referencia de origen/definición del método para resolverla.', 'pendiente_ambiguedad']
];

const edits = {
  5321: { texto: '¿Qué derechos enumera el capítulo II del título III de la Ley Orgánica 3/2018 (LOPDGDD)?', opciones: [
    'Transparencia e información, acceso, rectificación, supresión y limitación del tratamiento.',
    'Acceso, rectificación, supresión, portabilidad y oposición.',
    'Información, acceso, portabilidad, limitación del tratamiento y oposición.',
    'Acceso, rectificación, supresión, corresponsabilidad, portabilidad y oposición.'
  ], respuesta_correcta: 0, comentarios: 'La respuesta A reproduce el contenido del título III, capítulo II, arts. 13–18 de la LOPDGDD: transparencia e información, ejercicio, acceso, rectificación, supresión y limitación del tratamiento. Portabilidad y oposición son derechos del RGPD, pero no títulos de este capítulo de la LOPDGDD.' },
  5322: { texto: 'En la proyección de capacidad mediante teoría de colas, si Fq representa la penalización o espera añadida por la cola, ¿qué valor se considera ideal?', opciones: ['Cualquier valor negativo.', 'Fq = 0.', 'Fq = 1.', 'Infinito.'], respuesta_correcta: 1, comentarios: 'Se corrige la clave de C (Fq=1) a B (Fq=0). En este reactivo de proyección de capacidad, el factor representa la penalización/espera atribuible a la cola: el valor ideal es cero, sin espera añadida. Se precisa esa interpretación en el enunciado, porque «factor de cola» no tiene una definición simbólica universal en toda la teoría de colas. El examen oficial del INAP de 2010 contiene el mismo reactivo como antecedente, pero no se presenta como una clave de respuestas publicada.' },
  5323: { texto: '¿Cómo se denomina el catálogo estatal de recursos de información pública reutilizable previsto en el artículo 5 del Real Decreto 1495/2011?', comentarios: 'La respuesta B es correcta: el nombre del art. 5 es «Catálogo de Información Pública reutilizable». Se reescribe la pregunta para preguntar directamente por la denominación legal, y se advierte que las dos Secretarías de Estado citadas en el texto original reflejan la estructura administrativa de 2011, no necesariamente los órganos responsables actuales.' },
  5324: { texto: 'En el proceso PSI de la metodología MÉTRICA v3, ¿qué metodología incluye los factores críticos de éxito (FCE) entre las prácticas de planificación?', comentarios: 'La respuesta C (MÉTRICA v3) es correcta en el contexto del sistema de información público español. Para evitar que «FCE» parezca una técnica exclusiva de una sola metodología, se concreta el enunciado al proceso PSI de MÉTRICA v3; su documentación oficial incluye los factores críticos de éxito como práctica de planificación.' },
  5325: { comentarios: 'Pendiente de ambigüedad. La frase «contar en cuántos criterios ha sido la mejor» no define una regla de agregación multicriterio normalizada ni indica si se cuentan primeras posiciones, victorias por pares o puntuaciones. PROMETHEE, utilidad multiatributo y permutación tienen procedimientos distintos, pero sin fijar qué regla de recuento se pretende, no se puede afirmar que la respuesta D sea inequívoca. Se conserva sin marcar como verificada; hace falta una referencia de origen/definición del método para resolverla.' }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-1000.json'))) {
  aplicar({ numero: '1000', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1000.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5321: ['ITIC Academy, bloque 08 «Protección de datos», actualización 2026, derechos reconocidos por el RGPD y la LOPDGDD.', 'Cotejo con A1.27/A2.I.7. Se separan las rúbricas de los arts. 13–18 LOPDGDD de derechos RGPD que no dan título a este capítulo.'],
  5322: ['ITIC Academy, bloque «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», temas A1.40–42/A2.II.15, apartado de planificación de capacidad y proyección.', 'El material sitúa la teoría de colas en planificación de capacidad. La cifra Fq=0 se contrasta además con el antecedente de examen GSI publicado por INAP; como Fq no es notación universal, el reactivo se define de forma local.'],
  5323: ['ITIC Academy, bloque 10 «Gobernanza TIC, Administración digital, acceso electrónico y cooperación», edición 2026.4 (01/10/2026), datos abiertos y reutilización de la información del sector público.', 'Cotejo con A1.31/A2.I.9; el nombre exacto del catálogo procede del artículo 5 del real decreto.'],
  5324: ['ITIC Academy, bloque 12 «Estrategias y herramientas del directivo público TIC. Planificación estratégica de sistemas de información», edición 2026.2 (02/10/2026), apartado de Planes de Sistemas de Información/MÉTRICA v3.', 'Cotejo con A1.87. El vínculo de FCE con PSI se verifica en la documentación oficial de MÉTRICA v3.'],
  5325: ['ITIC Academy, bloque «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», temas A1.40–41/A2.II.15, métodos multicriterio.', 'El temario confirma el ámbito curricular, pero no permite identificar de forma unívoca la regla de recuento descrita ni convertirla en PROMETHEE, utilidad multiatributo o permutación. Se deja pendiente hasta encontrar la fuente del reactivo.']
};
const reason = 'Cotejo curricular individual con ITIC Academy en Drive y los programas oficiales A1/A2.';
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
console.log('Lote 1000 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
