const path = require('node:path');
const aplicar = require('./aplicar-lote.cjs');

const ce = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520';
const l39 = 'https://www.boe.es/eli/es/l/2015/10/01/39/con';
const lcsp = 'https://www.boe.es/eli/es/l/2017/11/08/9/con';
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const drive = {
  constitution: 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',
  procedure: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',
  contracts: 'https://drive.google.com/file/d/14iahY0cgkiV8RESN81b8pHdD4K3UbSOj/view?usp=drivesdk'
};

const records = [
  [5521, [1, 12], ['I-2', 'I-3'], ['Constitución Española', 'Presupuestos Generales del Estado', 'Cortes Generales', 'artículo 66', 'artículo 134'], [
    { url: ce, referencia: 'Constitución Española, texto consolidado a 20/05/2026, arts. 66.2 y 134.1: las Cortes Generales aprueban los Presupuestos; el art. 134.1 distingue su función de examen, enmienda y aprobación de la elaboración que corresponde al Gobierno.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 1 (Cortes Generales) y tema 12 (Presupuestos Generales del Estado y su control).' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, temas I.2 (atribuciones de las Cortes) y I.3 (Gobierno y relaciones entre Gobierno y Cortes).' },
    { url: drive.constitution, referencia: 'ITIC Academy 2026, bloque 01 Constitución, Estado y AGE: Cortes Generales, Constitución y presupuestos en su marco orgánico; mapa curricular.' }
  ], null, 'Se ajusta el enunciado para citar conjuntamente los artículos que atribuyen la aprobación de los Presupuestos Generales del Estado a las Cortes Generales: el art. 66.2 indica que las Cortes aprueban sus Presupuestos y el art. 134.1 especifica para los PGE que el Gobierno los elabora y las Cortes los examinan, enmiendan y aprueban. La respuesta D es la única correcta; el Congreso y el Senado no votan en sesión conjunta para aprobarlos.', 'corregida'],
  [5522, [7], ['I-3'], ['delegación legislativa', 'Constitución Española', 'ley de bases', 'texto articulado', 'texto refundido', 'artículo 82'], [
    { url: ce, referencia: 'Constitución Española, texto consolidado a 20/05/2026, art. 82.2: ley de bases para formar textos articulados y ley ordinaria para refundir varios textos legales en uno.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 7: fuentes del Derecho administrativo y disposiciones del Gobierno con fuerza de ley, incluidos decretos legislativos.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.3: funciones del Gobierno y relaciones entre el Gobierno y las Cortes Generales; la delegación legislativa se encuadra en esta relación constitucional.' },
    { url: drive.constitution, referencia: 'ITIC Academy 2026, bloque 01 Constitución, Estado y AGE: delegación legislativa y relaciones constitucionales; mapa curricular.' }
  ], null, 'El artículo 82.2 CE establece dos modalidades: una ley de bases cuando la delegación tiene por objeto formar textos articulados y una ley ordinaria cuando se trata de refundir varios textos legales en uno. Por ello la opción D es correcta. No se exige ley orgánica para la refundición.', 'corregida'],
  [5523, [8], ['I-8'], ['Ley 39/2015', 'derechos de las personas interesadas', 'artículo 53', 'identificación de autoridades', 'procedimiento administrativo'], [
    { url: l39, referencia: 'Ley 39/2015, texto consolidado, art. 53.1.b: derecho de los interesados a identificar a las autoridades y al personal responsable de la tramitación. Las opciones A y C generalizan de forma incorrecta; la D refleja también un derecho distinto del art. 53.1.d.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico de las Administraciones y procedimiento administrativo.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.8: Leyes 39/2015 y 40/2015.' },
    { url: drive.procedure, referencia: 'ITIC Academy 2026, bloque 03 Actuación Administrativa y Administración Digital: Ley 39/2015, derechos de interesados y procedimiento; mapa curricular.' }
  ], null, 'El enunciado original admitía dos respuestas: B reproduce el art. 53.1.b y D reproduce, con una errata gramatical, el derecho distinto del art. 53.1.d. Se precisa que se pregunta por el contenido específico de la letra b); la respuesta es B. A es demasiado amplia (el derecho se refiere a procedimientos en que se tiene condición de interesado) y C ignora la excepción legal para la presentación de originales.', 'corregida'],
  [5524, [8], ['I-8'], ['Ley 39/2015', 'registros electrónicos de apoderamientos', 'artículo 6', 'asientos registrales', 'representación'], [
    { url: l39, referencia: 'Ley 39/2015, texto consolidado, art. 6.3: los asientos deben contener, al menos, identificación de poderdante y apoderado, fecha de inscripción, período de otorgamiento y tipo de poder. No requiere un «lugar de inscripción» entre esos datos mínimos.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico de las Administraciones, procedimiento y relación con la ciudadanía.' },
    { url: a2, referencia: 'Convocatoria A2 GSI 2025, tema I.8: Ley 39/2015 y Ley 40/2015.' },
    { url: drive.procedure, referencia: 'ITIC Academy 2026, bloque 03 Actuación Administrativa y Administración Digital: Ley 39/2015, representación y procedimiento; mapa curricular.' }
  ], null, 'El artículo 6.3 enumera los datos mínimos del asiento: identificación del poderdante y apoderado, fecha de inscripción, período por el que se otorga el poder y tipo de poder. El lugar de inscripción no figura entre esos datos, así que C es la respuesta. El precepto exige interoperabilidad de los registros, pero no añade ese campo al mínimo del asiento.', 'corregida'],
  [5525, [11], [], ['contratos menores', 'Ley 9/2017', 'artículo 29.8', 'artículo 118.1', 'duración', 'prórroga', 'servicios complementarios'], [
    { url: lcsp, referencia: 'Ley 9/2017, texto consolidado BOE, art. 29.8: los contratos menores definidos en el art. 118.1 no pueden durar más de un año ni prorrogarse. El art. 29.7 contiene una excepción estrecha para servicios complementarios de contratos menores de obras: hasta 30 meses y solo por garantía/liquidación.' },
    { url: a1, referencia: 'Convocatoria A1 GSI 2025, tema 11: contratos de las Administraciones Públicas y Ley de Contratos del Sector Público.' },
    { url: a2, referencia: 'El programa A2 GSI 2025 no incluye un epígrafe específico de contratación pública; no se fuerza una etiqueta A2.' },
    { url: drive.contracts, referencia: 'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: Ley 9/2017 y contratos menores; el documento indica que el bloque A1 no tiene equivalente en el temario A2.' }
  ], null, 'Se corrigen la referencia normativa y el alcance: el artículo 118.1 define los contratos menores, mientras que su regla general de duración está en el art. 29.8 LCSP: máximo de un año y sin prórroga. La opción A es la respuesta. Se añade “como regla general” porque el art. 29.7 contempla una excepción limitada para servicios complementarios de contratos menores de obras, que puede exceder del año hasta 30 meses solo por el período de garantía y los trabajos de liquidación.', 'corregida']
];

const edits = {
  5521: { texto: 'Conforme a los artículos 66.2 y 134.1 de la Constitución Española, ¿a qué órgano corresponde aprobar los Presupuestos Generales del Estado?', respuesta_correcta: 3 },
  5522: { texto: 'Según el artículo 82.2 de la Constitución Española, ¿mediante qué tipo de ley se delega la formación de textos articulados y la refundición de varios textos legales, respectivamente?', respuesta_correcta: 3 },
  5523: { texto: '¿Qué derecho reconoce específicamente el artículo 53.1.b de la Ley 39/2015 a las personas interesadas en un procedimiento administrativo?', respuesta_correcta: 1 },
  5525: { texto: 'Como regla general, según el artículo 29.8 de la Ley 9/2017, ¿cuál es la duración máxima de los contratos menores definidos en su artículo 118.1 y pueden prorrogarse?', respuesta_correcta: 0 }
};

const log = path.join(__dirname, 'cambios-lote-1040.json');
const fs = require('node:fs');
if (!fs.existsSync(log)) aplicar({ numero: '1040', fecha: '2026-11-12', records, edits });

const bankFile = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));
const changeLog = JSON.parse(fs.readFileSync(log, 'utf8'));
const academy = {
  5521: 'ITIC Academy 2026, bloque 01 Constitución, Estado y AGE: Cortes Generales y aprobación presupuestaria; clasificación A1-1/12 y A2-I.2/I.3.',
  5522: 'ITIC Academy 2026, bloque 01 Constitución, Estado y AGE: delegación legislativa; clasificación A1-7 y A2-I.3.',
  5523: 'ITIC Academy 2026, bloque 03 Actuación Administrativa y Administración Digital: derechos de las personas interesadas en Ley 39/2015; clasificación A1-8 y A2-I.8.',
  5524: 'ITIC Academy 2026, bloque 03 Actuación Administrativa y Administración Digital: registros de apoderamientos de Ley 39/2015; clasificación A1-8 y A2-I.8.',
  5525: 'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: contratos menores y LCSP; A1-11. El propio mapa curricular indica que este bloque no tiene equivalente en A2.'
};
for (const c of changeLog.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  q.clasificacion.bloque_academia = academy[c.id];
  q.clasificacion.nota = 'Clasificación cotejada con el programa oficial A1/A2 de 2025 y con ITIC Academy 2026; el temario académico se emplea como mapa curricular, no como fuente jurídica.';
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankFile, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(log, JSON.stringify(changeLog, null, 2) + '\n');
