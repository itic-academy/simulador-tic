const apply = require('./aplicar-lote.cjs');

const sources = {
  constitution: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520', referencia: 'BOE, Constitución Española, texto consolidado con última actualización publicada el 20-05-2026. Artículos 103, 123 y 140, citados individualmente en las observaciones.' }
  ],
  lpac: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&p=20241106', referencia: 'BOE, Ley 39/2015, texto consolidado con última actualización publicada el 06-11-2024. Art. 44: anuncio de notificación en BOE en los tres supuestos descritos; art. 68.1–2: plazo inicial de diez días y posible ampliación prudencial de hasta cinco días, con condiciones y exclusión de procedimientos selectivos o de concurrencia competitiva.' }
  ]
};

const academy = {
  constitution: { url: 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view', referencia: 'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2: §8.1 (justicia en la Constitución), §11.1 (autonomía local) y §12 (principios constitucionales de la Administración); A1 temas 2, 3 y 4. El bloque A2 O1/O2 aporta encaje constitucional general, sin reemplazar la consulta literal de cada artículo.' },
  lpac: { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view', referencia: 'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2, §3 (procedimiento administrativo común, Ley 39/2015); corresponde al A1 tema 8 y A2 O8.' }
};

const records = [
  [1336, [2], ['I-2'], ['Constitución Española', 'artículo 123', 'Tribunal Supremo', 'Poder Judicial'], sources.constitution, null,
    'El artículo 123.1 CE identifica al Tribunal Supremo, con jurisdicción en toda España, como órgano jurisdiccional superior en todos los órdenes, salvo lo dispuesto en materia de garantías constitucionales. Se mantiene la respuesta original. Cotejo con ITIC Academy, bloque 01, versión 2026.2, §8.1 (justicia en la Constitución); en el programa A2 el encaje es constitucional general/O2, mientras que el desarrollo explícito del Poder Judicial pertenece al A1 tema 2.', 'vigente'],
  [1337, [3], ['I-1'], ['Constitución Española', 'artículo 140', 'autonomía municipal', 'Administración local'], sources.constitution, null,
    'El artículo 140 CE garantiza expresamente la autonomía de los municipios, que además gozan de personalidad jurídica plena. La suficiencia de las Haciendas locales aparece en el artículo 142 y la personalidad jurídica provincial en el 141, por lo que son distractores de artículos distintos. Cotejo con ITIC Academy, bloque 01, versión 2026.2, §11.1 (regulación constitucional de la Administración local); el encaje A2-I-1 es constitucional general y no atribuye al tema un desarrollo específico de régimen local.', 'vigente'],
  [1338, [4], ['I-8'], ['Constitución Española', 'artículo 103', 'Administración Pública', 'principios de actuación', 'eficacia', 'jerarquía', 'descentralización', 'desconcentración', 'coordinación'], sources.constitution, null,
    'El artículo 103.1 CE enumera eficacia, jerarquía, descentralización, desconcentración y coordinación, y exige sometimiento pleno a la ley y al Derecho. La objetividad aparece como modo de servir los intereses generales, no sustituye a esa lista de principios. Cotejo con ITIC Academy, bloque 01, versión 2026.2, §12 (principios constitucionales de la Administración); el A2-I-8 ofrece encaje de contexto en régimen jurídico administrativo.', 'vigente'],
  [1339, [8], ['I-8'], ['Ley 39/2015', 'artículo 44', 'notificación infructuosa', 'anuncio BOE', 'notificación administrativa'], sources.lpac, null,
    'El artículo 44 de la Ley 39/2015 ordena publicar un anuncio de notificación en el BOE cuando los interesados sean desconocidos, se ignore el lugar de notificación o, intentada esta, no se hubiera podido practicar. Se sustituye “por medio de edictos”, expresión imprecisa frente al término actual del artículo (“anuncio”), y se conserva la opción que reúne los tres supuestos. Cotejo con ITIC Academy, bloque 03, versión 2026.2, §3 (procedimiento administrativo común).', 'corregida'],
  [1340, [8], ['I-8'], ['Ley 39/2015', 'artículo 68', 'subsanación', 'ampliación de plazo', 'procedimiento administrativo'], sources.lpac, null,
    'El artículo 68.1 fija diez días para subsanar o aportar documentos preceptivos. Su apartado 2 permite ampliar ese plazo prudencialmente hasta cinco días, a petición del interesado o por iniciativa del órgano, si existe dificultad especial y no es un procedimiento selectivo ni de concurrencia competitiva. La respuesta original recoge todas esas condiciones y se mantiene. Cotejo con ITIC Academy, bloque 03, versión 2026.2, §3 (procedimiento administrativo común).', 'vigente']
];

apply({ numero: '204', fecha: '2026-10-24', records, edits: {
  1339: { texto: 'De acuerdo con el artículo 44 de la Ley 39/2015, ¿en cuál de estos supuestos se publicará un anuncio de notificación en el «Boletín Oficial del Estado»?', opciones: [
    'Cuando los interesados en un procedimiento sean desconocidos.',
    'Cuando se ignore el lugar de la notificación.',
    'Cuando, intentada la notificación, no se hubiese podido practicar.',
    'En todos los supuestos anteriores.'
  ], respuesta_correcta: 3 }
}});

const fs = require('node:fs');
const path = require('node:path');
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-204.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const meta = {
  1336: { source: academy.constitution, block: 'Bloque 01, Constitución, organización del Estado y AGE, versión 2026.2, §8.1 (justicia en la Constitución).', topics: 'A1-2/A2-I-2' },
  1337: { source: academy.constitution, block: 'Bloque 01, Constitución, organización del Estado y AGE, versión 2026.2, §11.1 (regulación constitucional de la Administración local).', topics: 'A1-3/A2-I-1' },
  1338: { source: academy.constitution, block: 'Bloque 01, Constitución, organización del Estado y AGE, versión 2026.2, §12 (principios constitucionales de la Administración).', topics: 'A1-4/A2-I-8' },
  1339: { source: academy.lpac, block: 'Bloque 03, Actuación administrativa y Administración digital, versión 2026.2, §3 (procedimiento administrativo común, Ley 39/2015).', topics: 'A1-8/A2-I-8' },
  1340: { source: academy.lpac, block: 'Bloque 03, Actuación administrativa y Administración digital, versión 2026.2, §3 (procedimiento administrativo común, Ley 39/2015).', topics: 'A1-8/A2-I-8' }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const m = meta[q.id];
  q.clasificacion.bloque_academia = m.block;
  q.clasificacion.nota = `Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  const comment = ` Cotejo temático con ITIC Academy: ${m.block} Correspondencia orientativa con el temario oficial: ${m.topics}.`;
  q.comentarios = (q.comentarios || '') + comment;
  q.revision.observaciones += comment;
  q.revision.fuentes.push({ url: m.source.url, referencia: `${m.source.referencia} Correspondencia: ${m.topics}.` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(__dirname, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido al lote 204.');
