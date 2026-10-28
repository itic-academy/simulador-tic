const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-432.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  transparency: { url: 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk', label: 'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado», versión 2026; incluye A1-25 y Ley 19/2013.' },
  procedure: { url: 'https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk', label: 'ITIC Academy, bloque 3 «Actuación administrativa y Administración digital», versión 2026.1 (17-08-2026); cubre A1-8/A1-22 y A2-O8, incluyendo Ley 39/2015 y RD 203/2021.' },
  budget: { url: 'https://drive.google.com/file/d/1-JS2zo4isD-ee9n3qV7aL09eVo3SFvbO/view?usp=drivesdk', label: 'ITIC Academy, tema 12 «Presupuestos», versión 3.2; encuadre A1-12 en presupuesto y control del gasto. El material consultado no desarrolla expresamente AIReF; esa respuesta se verifica contra la LO 6/2013.' },
  eu: { url: 'https://drive.google.com/file/d/1J6hKZSLSX3oM_DCfqJYa2aChRar7_dHU/view?usp=drivesdk', label: 'ITIC Academy, bloque «Unión Europea», versión 2026 (24-08-2026); cubre el tema A1-5 y declara que no aplica a los epígrafes A2.' }
};
const map = {
  2471: { doc: 'transparency', a1: ['A1-25'], a2: ['A2-I-4'], detail: 'Consejo de Transparencia y Buen Gobierno, Ley 19/2013 y mandato de su Presidencia.' },
  2472: { doc: 'procedure', a1: ['A1-8', 'A1-22'], a2: ['A2-I-8', 'A2-I-9'], detail: 'Derecho de las personas físicas a elegir el canal de relación y excepciones de la Ley 39/2015.' },
  2473: { doc: 'budget', a1: ['A1-12'], a2: [], detail: 'Control del gasto, estabilidad presupuestaria y encuadre del tema de presupuestos; AIReF se fundamenta directamente en la LO 6/2013. El temario A2 no tiene epígrafe específico AIReF.' },
  2474: { doc: 'eu', a1: ['A1-5'], a2: [], detail: 'Tratados, Derecho de la Unión y Tribunal de Justicia de la Unión Europea; el programa A2 vigente no contiene tema específico de instituciones/Derecho de la Unión.' },
  2475: { doc: 'procedure', a1: ['A1-8', 'A1-22'], a2: ['A2-I-8', 'A2-I-9'], detail: 'Procedimiento administrativo electrónico y régimen de notificación en Ley 39/2015 y RD 203/2021.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2471,2472,2473,2474,2475') throw new Error('IDs del lote 432 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta revisión de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia comprobada con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). Academy aporta encuadre; la evidencia jurídica es la norma o tratado citado en revision.fuentes.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular y temario oficial aplicados a 2471–2475.');
