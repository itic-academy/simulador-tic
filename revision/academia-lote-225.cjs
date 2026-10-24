const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-225.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const sources = {
  1441: ['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', 'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026), registros y notificaciones electrónicas actuales; cotejo temático, pues la pregunta versa sobre una norma histórica. A1-22/A2-I-9.'],
  1442: ['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', 'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026), sociedad de la información y LSSI-CE. A1-22/A2-I-6.'],
  1443: ['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', 'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026), LSSI-CE y sociedad de la información; la tipificación se verifica con el texto vigente del BOE. A1-22/A2-I-6.'],
  1444: ['https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk', 'ITIC Academy, bloque 07 Dirección Pública, Empleo, Transparencia y Unidad de Mercado, versión 2026.2 (01-10-2026), transparencia y límites del derecho de acceso. A1-25/A2-I-4.'],
  1445: ['https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk', 'ITIC Academy, bloque 07 Dirección Pública, Empleo, Transparencia y Unidad de Mercado, versión 2026.2 (01-10-2026), unidad de mercado; advierte que el artículo 6 sobre eficacia nacional fue anulado y no debe estudiarse como vigente. A1-26, sin epígrafe A2 específico.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const source = sources[c.id];
  if (!q?.revision || !source) throw new Error(`Falta pregunta, registro o cotejo para ${c.id}`);
  const note = `Cotejo temático: ${source[1]} La respuesta se fundamenta en las fuentes primarias citadas en el registro.`;
  q.clasificacion.bloque_academia = source[1];
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({url:source[0],referencia:`ITIC Academy, ${source[1]}`});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático de academia añadido a los IDs 1441–1445.');
