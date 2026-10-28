const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-434.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const valid = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const doc = {
  url: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',
  label: 'ITIC Academy, bloque 5 «Contratación, Presupuestos, Convenios y Compra TIC», versión 2026.2 (01-10-2026), materiales de contratación pública y presupuestos.'
};
const map = {
  2481: { a1: ['A1-11'], a2: [], detail: 'Principios comunes de contratación pública y Ley 9/2017. Sin epígrafe de contratación pública equivalente en el programa A2 GSI.' },
  2482: { a1: ['A1-11'], a2: [], detail: 'Precio de los contratos públicos e IVA, Ley 9/2017. Sin epígrafe de contratación pública equivalente en el programa A2 GSI.' },
  2483: { a1: ['A1-12'], a2: [], detail: 'Elaboración y tramitación de los Presupuestos Generales del Estado. Sin epígrafe equivalente específico de Derecho presupuestario estatal en el programa A2 GSI.' },
  2484: { a1: ['A1-11'], a2: [], detail: 'UTE, clasificación y solvencia en contratación pública. Sin epígrafe de contratación pública equivalente en el programa A2 GSI.' },
  2485: { a1: ['A1-11'], a2: [], detail: 'Umbral de regulación armonizada para contratos de obras; el importe se verifica con la normativa vigente de la UE y la actualización publicada en BOE. Sin epígrafe de contratación pública equivalente en el programa A2 GSI.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2481,2482,2483,2484,2485') throw new Error('IDs del lote 434 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id];
  if (!q?.revision || !m) throw new Error('Falta revisión o mapeo curricular de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${doc.label} ${m.detail} Documento de referencia: ${doc.url}. Se contrastó la asignación con revision/temario-oficial.json y las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). El bloque académico orienta sobre el contenido; prevalecen las fuentes legislativas primarias de revision.fuentes. No se inventa una correspondencia A2 cuando el programa no contiene epígrafe directo.`;
  q.clasificacion.bloque_academia = doc.url;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de 2481–2485 con Academy, temarios oficiales y convocatorias aplicado.');
