const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-433.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const programs = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas;
const valid = new Set(programs.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  admin: { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', label: 'ITIC Academy, bloque 3 «Actuación Administrativa y Administración Digital», versión 2026.2 (01-10-2026), apartados 3.6, 3.7, 3.11 y 6.2; desarrolla Ley 39/2015, documentos/notificaciones, recursos y LSSI-CE.' },
  grants: { url: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', label: 'ITIC Academy, bloque 5 «Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC», versión 2026.2 (01-10-2026), tema 13 y apartado 13 sobre subvenciones; indica que no existe equivalente específico en el programa A2.' }
};
const map = {
  2476: { doc: 'admin', a1: ['A1-8', 'A1-22'], a2: ['A2-I-8', 'A2-I-9'], detail: 'Documento electrónico administrativo y excepción de firma de publicaciones informativas (art. 26 Ley 39/2015).' },
  2477: { doc: 'grants', a1: ['A1-13'], a2: [], detail: 'Régimen jurídico de las subvenciones públicas (tema A1-13); el programa A2 no contiene epígrafe equivalente específico.' },
  2478: { doc: 'admin', a1: ['A1-22'], a2: ['A2-I-6'], detail: 'Legislación sobre sociedad de la información (LSSI-CE) y cookies; el tema A2-I-6 abarca la sociedad de la información.' },
  2479: { doc: 'admin', a1: ['A1-8'], a2: ['A2-I-8'], detail: 'Recurso extraordinario de revisión, firmeza del acto y causas tasadas (Ley 39/2015, arts. 113 y 125).' },
  2480: { doc: 'admin', a1: ['A1-8'], a2: ['A2-I-8'], detail: 'Interposición, calificación y causas de inadmisión de los recursos administrativos (Ley 39/2015, arts. 115 y 116).' }
};
if (log.cambios.map(c => c.id).join(',') !== '2476,2477,2478,2479,2480') throw new Error('IDs del lote 433 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta revisión de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia comprobada con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). Academy da contexto curricular; la respuesta jurídica se sustenta en las fuentes primarias consignadas en revision.fuentes.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo con ITIC Academy 2026.2, temarios oficiales y convocatorias A1/A2 aplicado a 2476–2480.');
