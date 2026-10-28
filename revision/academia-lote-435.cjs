const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-435.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const valid = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  admin: { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', label: 'ITIC Academy, bloque 3 «Actuación Administrativa y Administración Digital», versión 2026.2 (01-10-2026), Ley 39/2015 y Administración electrónica.' },
  procurement: { url: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', label: 'ITIC Academy, bloque 5 «Contratación, Presupuestos, Convenios y Compra TIC», versión 2026.2 (01-10-2026), contratación pública.' },
  transparency: { url: 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk', label: 'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado», edición 2026, transparencia y acceso a información pública.' },
  agenda: { url: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk', label: 'ITIC Academy, bloque 6 de Agenda Digital, edición 2026, sociedad de la información y estrategias digitales.' }
};
const map = {
  2486: { doc: 'admin', a1: ['A1-8', 'A1-22'], a2: ['A2-I-9'], detail: 'Derechos de relación electrónica del artículo 6 de la derogada Ley 11/2007, con contraste frente al régimen vigente de la Ley 39/2015.' },
  2487: { doc: 'procurement', a1: ['A1-11'], a2: [], detail: 'Duración y prórroga de los contratos menores; no hay epígrafe de contratación pública equivalente en el programa A2 GSI.' },
  2488: { doc: 'transparency', a1: ['A1-25'], a2: ['A2-I-4'], detail: 'Titularidad del derecho de acceso a información pública, encuadrada en transparencia y buen gobierno.' },
  2489: { doc: 'admin', a1: ['A1-22'], a2: ['A2-I-6'], detail: 'Régimen de multas coercitivas de la LSSI-CE, legislación de sociedad de la información.' },
  2490: { doc: 'agenda', a1: ['A1-18'], a2: ['A2-I-6'], detail: 'Agenda Digital para España y su seguimiento de objetivos, como política histórica de sociedad de la información.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2486,2487,2488,2489,2490') throw new Error('IDs del lote 435 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m?.doc];
  if (!q?.revision || !d) throw new Error('Falta revisión o mapeo curricular de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Documento consultado: ${d.url}. Se verificó la correspondencia con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). Cuando el dato describe una norma derogada o una estrategia finalizada, se mantiene expresamente como histórico; el programa académico es contexto y las fuentes primarias de revision.fuentes sustentan la respuesta.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de 2486–2490 con Academy, temas oficiales y convocatorias aplicado.');
