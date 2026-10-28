const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-436.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const valid = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  constitution: { url: 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk', label: 'ITIC Academy, bloque 1 «Constitución, organización del Estado y AGE», versión 2026.2 (01-10-2026), incluye A1 tema 1 y A2 tema O1.' },
  government: { url: 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk', label: 'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado», edición 2026; encuadra Ley 19/2013, buen gobierno y políticas de empleo.' },
  digitalGov: { url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk', label: 'ITIC Academy, bloque 10 «Gobernanza TIC y Administración Digital», edición 2026; encuadra gobernanza TIC y servicios digitales comunes/transversales.' },
  commonServices: { url: 'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk', label: 'ITIC Academy, tema 49 «Servicios comunes», edición 2026, sobre medios y servicios compartidos/transversales.' },
  programming: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 «Tecnologías de Sistemas de Información», versión 2026.1 (31-08-2026); encuadra Java, .NET y entornos de desarrollo.' }
};
const map = {
  2491: { doc: 'government', a1: ['A1-25'], a2: ['A2-I-4'], detail: 'Buen gobierno y principios de actuación de la Ley 19/2013.' },
  2492: { doc: 'constitution', a1: ['A1-1'], a2: ['A2-I-1'], detail: 'Principios constitucionales del artículo 9.3.' },
  2493: { doc: 'government', a1: ['A1-17'], a2: [], detail: 'Políticas públicas de empleo y Sistema Nacional de Empleo; el programa A2 GSI consultado no contiene epígrafe específico sobre el mercado de trabajo o la Ley de Empleo.' },
  2494: { doc: 'commonServices', a1: ['A1-30'], a2: ['A2-I-10'], detail: 'Gobernanza TIC en la AGE e infraestructuras y servicios comunes; se contrasta la nomenclatura actual «transversales» del RD 1125/2024 con el término histórico «compartidos».' },
  2495: { doc: 'programming', a1: ['A1-66', 'A1-67'], a2: ['A2-II-3', 'A2-III-11'], detail: 'Características de lenguajes y paradigmas de programación, con encuadre específico en los entornos .NET y Java.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2491,2492,2493,2494,2495') throw new Error('IDs del lote 436 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m?.doc];
  if (!q?.revision || !d) throw new Error('Falta revisión o mapeo curricular de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Documento consultado en Drive: ${d.url}. Se verificó la correspondencia con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). No se fuerza equivalencia A2 para el mercado de trabajo/empleo al no existir epígrafe específico; la academia aporta encuadre y las fuentes primarias citadas sustentan las respuestas.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de 2491–2495 con Drive, temario oficial y convocatorias aplicado.');
