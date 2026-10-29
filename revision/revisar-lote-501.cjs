const apply = require('./aplicar-lote.cjs');

const records = [
  [2821, ['11'], [], ['LCSP', 'procedimiento abierto simplificado abreviado', 'PRTR'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-17340', referencia: 'RDL 36/2020, art. 51: umbral de valor estimado inferior a 100.000 euros para suministros y servicios financiados con fondos PRTR; se excluyen prestaciones de carácter intelectual.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902', referencia: 'Ley 9/2017, art. 159.6: regula la tramitación específica del procedimiento abierto simplificado abreviado.' }
  ], '', 'Se conserva la clave del umbral PRTR, pero se delimitan sus condiciones. El artículo 51 RDL 36/2020 permite aplicar la tramitación del art. 159.6 LCSP a suministros/servicios financiados con PRTR con valor estimado inferior a 100.000 euros, excluidas prestaciones de carácter intelectual. No se confunde con el umbral ordinario del art. 159.6.', 'corregida'],
  [2822, ['3'], ['I-1'], ['Constitución Española', 'competencias Estado', 'competencias comunidades autónomas', 'sanidad e higiene'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520', referencia: 'Constitución, art. 149.1.12, .13 y .14: legislación sobre pesas y medidas/hora oficial, bases y coordinación de planificación económica y Hacienda general/Deuda del Estado son competencias exclusivas estatales.' },
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520', referencia: 'Constitución, arts. 148.1.21 y 149.1.16: las comunidades pueden asumir sanidad e higiene; el Estado tiene sanidad exterior, bases y coordinación general de sanidad y legislación farmacéutica.' }
  ], '', 'Se confirma «sanidad e higiene» como la afirmación incorrecta: el art. 148.1.21 permite a las comunidades autónomas asumirla; el art. 149.1.16 atribuye al Estado sanidad exterior, bases y coordinación general de la sanidad y legislación sobre productos farmacéuticos, no la competencia genérica «sanidad e higiene».', 'vigente'],
  [2823, ['46', '105'], ['I-9', 'II-16'], ['Ley 39/2015', 'archivo electrónico único', 'conservación documental', 'procedimientos finalizados'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565&p=20260929', referencia: 'Ley 39/2015, art. 17: archivo electrónico único de documentos electrónicos correspondientes a procedimientos finalizados y conservación en formatos que garanticen autenticidad, integridad, conservación y consulta.' },
    { url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2021-5032', referencia: 'RD 203/2021, art. 55: alcance del archivo electrónico único y custodia/recuperación de documentos y expedientes electrónicos tras finalizar procedimientos o actuaciones.' }
  ], '', 'El original no citaba una norma y reproducía una formulación antigua de la Ley 11/2007 (documentos con actos que afectaban a derechos/intereses). Se actualiza a la Ley 39/2015: el archivo electrónico único comprende los documentos electrónicos correspondientes a procedimientos finalizados; deben conservarse de forma que se aseguren autenticidad, integridad, conservación y consulta.', 'corregida'],
  [2824, ['3'], ['I-1'], ['Constitución Española', 'provincia', 'límites provinciales', 'ley orgánica'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520', referencia: 'Constitución, art. 141.1: cualquier alteración de los límites provinciales debe ser aprobada por las Cortes Generales mediante ley orgánica.' }
  ], '', 'Se confirma la respuesta sobre la alteración de los límites provinciales, que requiere aprobación de las Cortes Generales mediante ley orgánica (art. 141.1 CE).', 'vigente'],
  [2825, ['1'], ['I-1'], ['Constitución Española', 'artículo 53.2', 'tutela derechos fundamentales', 'recurso de amparo'], [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520', referencia: 'Constitución, art. 53.2: tutela de los derechos del art. 14 y sección primera del capítulo II ante tribunales ordinarios por procedimiento preferente y sumario y, en su caso, recurso de amparo ante el Tribunal Constitucional.' }
  ], '', 'Se confirma la clave conforme al artículo 53.2 CE. El recurso de amparo es distinto del recurso de inconstitucionalidad y procede, en su caso, después de la tutela ante la jurisdicción ordinaria, con los requisitos procesales aplicables.', 'vigente']
];

const edits = {
  2821: {
    texto: 'Para un contrato de suministros o servicios financiado con fondos del Plan de Recuperación, Transformación y Resiliencia (PRTR), ¿cuándo permite el artículo 51 del Real Decreto-ley 36/2020 aplicar la tramitación del procedimiento abierto simplificado abreviado del artículo 159.6 LCSP?',
    opciones: [
      'Cuando el valor estimado sea inferior a 80.000 euros, aunque no se financie con fondos PRTR.',
      'Cuando el valor estimado sea igual o inferior a 100.000 euros, sin otras condiciones.',
      'Cuando el precio, incluido el IVA, sea igual o inferior a 80.000 euros.',
      'Cuando el valor estimado sea inferior a 100.000 euros, con fondos PRTR y sin que el contrato tenga por objeto prestaciones de carácter intelectual.'
    ], respuesta_correcta: 3
  },
  2823: {
    texto: 'Según el artículo 17 de la Ley 39/2015, ¿qué documentos deben integrarse en el archivo electrónico único de cada Administración?',
    opciones: [
      'Los documentos electrónicos correspondientes a procedimientos finalizados, conservados en formatos que aseguren autenticidad, integridad, conservación y consulta.',
      'Únicamente los documentos electrónicos que contienen actos que afectan a derechos o intereses de particulares.',
      'Todos los documentos usados durante cualquier actuación administrativa, aunque el procedimiento no haya finalizado.',
      'Solo los documentos de procedimientos tributarios y sancionadores.'
    ], respuesta_correcta: 0
  }
};

apply({ numero: '501', fecha: '2026-10-29', records, edits });

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-501.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2821: { A1: ['A1-11'], A2: [], academy: 'ITIC Academy, Bloque 05 Contratación, Presupuestos y Compra TIC 2026: procedimiento de contratación pública; correspondencia directa A1-11. El programa A2 GSI vigente no contiene un epígrafe específico de contratación pública.' },
  2822: { A1: ['A1-3'], A2: ['A2-I-1'], academy: 'ITIC Academy, Bloque 01 Constitución, Estado y AGE 2026: distribución constitucional de competencias; correspondencia A1-3/A2-I-1.' },
  2823: { A1: ['A1-46', 'A1-105'], A2: ['A2-I-9', 'A2-II-16'], academy: 'ITIC Academy, Bloque 03 Actuación Administrativa 2026 y Bloque 11 RISP/gestión documental: expediente y conservación electrónica; correspondencia A1-46/A1-105/A2-I-9/II-16.' },
  2824: { A1: ['A1-3'], A2: ['A2-I-1'], academy: 'ITIC Academy, Bloque 01 Constitución, Estado y AGE 2026: organización territorial y provincia; correspondencia A1-3/A2-I-1.' },
  2825: { A1: ['A1-1'], A2: ['A2-I-1'], academy: 'ITIC Academy, Bloque 01 Constitución, Estado y AGE 2026: garantías de derechos fundamentales; correspondencia A1-1/A2-I-1.' }
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mapping[c.id];
  assert.ok(q && m, `Pregunta ${c.id} o mapeo ausente`);
  for (const id of [...m.A1, ...m.A2]) assert.ok(topics.has(id), `Tema no oficial: ${id}`);
  q.clasificacion.A1 = m.A1;
  q.clasificacion.A2 = m.A2;
  q.clasificacion.bloque_academia = m.academy;
  q.clasificacion.estado = 'revisada';
  q.clasificacion.nota = `${q.revision.estado}. ${m.academy}`;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} Cotejo curricular: ${m.academy} El material de Academy se utiliza como mapa curricular y no como fuente jurídica primaria.`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Lote 501 aplicado con revisión individual y correspondencias oficiales A1/A2.');
