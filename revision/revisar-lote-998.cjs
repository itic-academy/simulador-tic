const aplicar = require('./aplicar-lote.cjs');
const fs = require('node:fs');
const path = require('node:path');
const ref = (url, referencia) => ({ url, referencia });

const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const law39 = 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565';
const lcsp = 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902';
const threshold = 'https://www.boe.es/eli/es/o/2025/12/18/hac1517';
const lgp = 'https://www.boe.es/eli/es/l/2003/11/26/47/con';
const academyAdmin = 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const academyContracts = 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';

const records = [
  [5311, ['8'], ['I-8'], ['Ley 39/2015', 'procedimiento administrativo', 'alegaciones', 'prueba', 'informes', 'trámite de audiencia'], [
    ref(law39, 'Ley 39/2015, texto consolidado del BOE, arts. 76.1, 77.3, 80.1 y 83.4: alegaciones hasta antes del trámite de audiencia; rechazo de pruebas manifiestamente improcedentes o innecesarias mediante resolución motivada; por defecto los informes son facultativos y no vinculantes; puede prescindirse de audiencia si no se incorporan hechos, alegaciones o pruebas distintos de los aportados por el interesado.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 8: régimen jurídico de las Administraciones públicas y procedimiento administrativo.'),
    ref(a2, 'Convocatoria A2 GSI 2025, tema I.8: Ley 39/2015, procedimiento administrativo común.'),
    ref(academyAdmin, 'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», edición 2026.2 (01/10/2026), Ley 39/2015 y procedimiento administrativo.'),
  ], null, 'La respuesta C es falsa. El artículo 80.1 de la Ley 39/2015 establece que, salvo disposición expresa en contrario, los informes son facultativos y no vinculantes, no preceptivos y vinculantes. Las otras tres opciones se corresponden con los arts. 76.1, 77.3 y 83.4, respectivamente. Se preserva la clave C y se arregla la formulación del enunciado.', 'corregida'],
  [5312, ['11'], [], ['Ley 9/2017', 'contratación pública', 'acuerdo marco', 'procedimientos de adjudicación'], [
    ref(lcsp, 'Ley 9/2017, de Contratos del Sector Público, texto consolidado del BOE, arts. 131 y 220.1: la adjudicación se sujeta a los procedimientos y normas de las secciones 1.ª y 2.ª del capítulo I del título I del libro II, según proceda. No se limita a un único procedimiento ni exclusivamente a las tres etiquetas de las opciones originales.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 11: contratos públicos, LCSP, procedimientos de contratación y formas de adjudicación.'),
    ref(academyContracts, 'ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2 (01/10/2026), acuerdos marco y procedimientos LCSP; el bloque declara que no tiene equivalente específico en el temario A2.'),
  ], null, 'La respuesta D se conserva, pero se sustituye la formulación inexacta «abierto, restringido o negociado» por la regla legal: el acuerdo marco se celebra siguiendo los procedimientos de contratación que resulten aplicables conforme al art. 220.1 LCSP. Los procedimientos abiertos, restringidos y negociados pueden estar disponibles cuando concurran sus requisitos; la ley no establece que solo puedan utilizarse esos tres ni que todos sean intercambiables en cualquier caso.', 'corregida'],
  [5313, ['11'], [], ['Ley 9/2017', 'sector público', 'ámbito subjetivo', 'consorcios', 'universidades públicas'], [
    ref(lcsp, 'Ley 9/2017, texto consolidado del BOE, art. 3.1.a–d: forman parte del sector público, entre otros, las Administraciones territoriales y entidades locales, las Entidades Gestoras y Servicios Comunes de la Seguridad Social, organismos autónomos, universidades públicas, autoridades administrativas independientes y los consorcios indicados por la ley.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 11: ámbito y régimen de los contratos del sector público y LCSP.'),
    ref(academyContracts, 'ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2, ámbito y entidades del sector público en la LCSP.'),
  ], null, 'La respuesta D («Todas las anteriores») es correcta. Las categorías de las tres primeras opciones están comprendidas en el ámbito subjetivo del sector público del artículo 3.1 de la LCSP. La adscripción como sector público no significa, por sí sola, que cada entidad tenga idéntica condición de Administración pública o de poder adjudicador; esas categorías se precisan en los apartados siguientes del artículo.', 'vigente'],
  [5314, ['11'], [], ['Ley 9/2017', 'contratos de suministro', 'regulación armonizada', 'umbral 2026', 'Orden HAC/1517/2025'], [
    ref(lcsp, 'Ley 9/2017, texto consolidado del BOE, art. 21.1.a: para suministros adjudicados por la AGE, sus organismos autónomos y las Entidades Gestoras/Servicios Comunes de la Seguridad Social, el umbral debe leerse con la actualización bienal publicada por Hacienda.'),
    ref(threshold, 'Orden HAC/1517/2025, de 18 de diciembre, publicada en BOE-A-2025-26605: desde el 1 de enero de 2026 sustituye 143.000 euros por 140.000 euros en el art. 21.1.a LCSP. El umbral es aplicable durante el ciclo 2026–2027.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 11: LCSP, contratación pública y regulación armonizada.'),
    ref(academyContracts, 'ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2, actualizado con los umbrales SARA 2026–2027 y la Orden HAC/1517/2025.'),
  ], null, 'A 12 de noviembre de 2026 la respuesta correcta es B, 140.000 euros, para un contrato de suministro del Ministerio del Interior (Administración General del Estado). El umbral anterior de 143.000 euros dejó de aplicarse el 1 de enero de 2026: la Orden HAC/1517/2025 sustituyó expresamente esa cifra en el artículo 21.1.a LCSP. Se actualiza la clave y se distinguen los distractores de umbral estatal anterior, otros poderes adjudicadores y contratos de obras.', 'corregida'],
  [5315, ['12'], [], ['Ley 47/2003', 'Ley General Presupuestaria', 'ejercicio presupuestario', 'año natural', 'artículo 34'], [
    ref(lgp, 'Ley 47/2003, de 26 de noviembre, General Presupuestaria, texto consolidado del BOE, art. 34.1: el ejercicio presupuestario coincide con el año natural.'),
    ref(a1, 'Convocatoria A1 GSI 2025, tema 12: Presupuestos Generales del Estado, ejecución del gasto y control.'),
    ref(academyContracts, 'ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2, parte de Presupuestos Generales del Estado y ejecución presupuestaria.'),
  ], null, 'La respuesta C es correcta conforme al artículo 34.1 de la Ley General Presupuestaria: el ejercicio presupuestario coincide con el año natural. Se aclara que el precepto también establece a qué ejercicio se imputan derechos y obligaciones, pero ello no altera la respuesta preguntada.', 'vigente']
];

const edits = {
  5311: { texto: 'Señale la opción falsa respecto de la instrucción del procedimiento regulada en la Ley 39/2015:', comentarios: 'La respuesta C es falsa. El artículo 80.1 de la Ley 39/2015 establece que, salvo disposición expresa en contrario, los informes son facultativos y no vinculantes, no preceptivos y vinculantes. Las otras tres opciones se corresponden con los arts. 76.1, 77.3 y 83.4, respectivamente. Se preserva la clave C y se arregla la formulación del enunciado.' },
  5312: { texto: '¿Qué procedimiento de adjudicación puede seguirse para celebrar un acuerdo marco conforme a la LCSP?', opciones: ['Exclusivamente el procedimiento abierto.', 'Exclusivamente el procedimiento restringido.', 'Exclusivamente el procedimiento negociado.', 'Los procedimientos de contratación previstos en la LCSP que resulten aplicables conforme a su artículo 220.1.'], respuesta_correcta: 3, comentarios: 'La respuesta D se conserva, pero se sustituye la formulación inexacta «abierto, restringido o negociado» por la regla legal: el acuerdo marco se celebra siguiendo los procedimientos de contratación que resulten aplicables conforme al art. 220.1 LCSP. Los procedimientos abiertos, restringidos y negociados pueden estar disponibles cuando concurran sus requisitos; la ley no establece que solo puedan utilizarse esos tres ni que todos sean intercambiables en cualquier caso.' },
  5313: { comentarios: 'La respuesta D («Todas las anteriores») es correcta. Las categorías de las tres primeras opciones están comprendidas en el ámbito subjetivo del sector público del artículo 3.1 de la LCSP. La adscripción como sector público no significa, por sí sola, que cada entidad tenga idéntica condición de Administración pública o de poder adjudicador; esas categorías se precisan en los apartados siguientes del artículo.' },
  5314: { texto: 'A 12 de noviembre de 2026, un contrato de suministros del Ministerio del Interior estará sujeto a regulación armonizada si su valor estimado es:', opciones: ['Igual o superior a 143.000 euros (umbral aplicable hasta el 31 de diciembre de 2025).', 'Igual o superior a 140.000 euros (umbral vigente desde el 1 de enero de 2026 para la Administración General del Estado).', 'Igual o superior a 216.000 euros (umbral 2026–2027 para los poderes adjudicadores subcentrales).', 'Igual o superior a 5.404.000 euros (umbral 2026–2027 para contratos de obras).'], respuesta_correcta: 1, comentarios: 'A 12 de noviembre de 2026 la respuesta correcta es B, 140.000 euros, para un contrato de suministro del Ministerio del Interior (Administración General del Estado). El umbral anterior de 143.000 euros dejó de aplicarse el 1 de enero de 2026: la Orden HAC/1517/2025 sustituyó expresamente esa cifra en el artículo 21.1.a LCSP. Se actualiza la clave y se distinguen los distractores de umbral estatal anterior, otros poderes adjudicadores y contratos de obras.' },
  5315: { comentarios: 'La respuesta C es correcta conforme al artículo 34.1 de la Ley General Presupuestaria: el ejercicio presupuestario coincide con el año natural. Se aclara que el precepto también establece a qué ejercicio se imputan derechos y obligaciones, pero ello no altera la respuesta preguntada.' }
};

if (!fs.existsSync(path.join(__dirname, 'cambios-lote-998.json'))) {
  aplicar({ numero: '998', fecha: '2026-11-12', records, edits });
}

const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-998.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  5311: ['ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», edición 2026.2 (01/10/2026), instrucción y fases del procedimiento reguladas por la Ley 39/2015.', 'Cotejo con los temas A1.8 y A2.I.8; se comprobaron por separado los arts. 76, 77, 80 y 83 en el texto consolidado oficial.'],
  5312: ['ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2 (01/10/2026), acuerdos marco y procedimientos de contratación.', 'Cotejo con el tema A1.11. El propio bloque 05 declara que no tiene equivalente específico en el programa A2.'],
  5313: ['ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2, ámbito subjetivo de la LCSP.', 'Cotejo con A1.11; la LCSP, no el material de academia, determina el alcance de las categorías del sector público.'],
  5314: ['ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2 (01/10/2026), sección de umbrales SARA 2026–2027 y Orden HAC/1517/2025.', 'Cotejo con el tema A1.11. La academia confirma el ámbito curricular; se comprobó independientemente el umbral vigente en la orden publicada en BOE.'],
  5315: ['ITIC Academy, bloque 05 «Contratación, presupuestos, convenios, subvenciones y compra TIC», edición 2026.2, Presupuestos Generales del Estado y ejecución presupuestaria.', 'Cotejo con A1.12; el propio bloque 05 no tiene equivalente específico en A2. La regla temporal se contrasta con el art. 34.1 de la Ley 47/2003.']
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
console.log('Lote 998 enriquecido con cotejo curricular y trazabilidad de las cinco preguntas.');
