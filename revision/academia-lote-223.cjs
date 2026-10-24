const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-223.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1431: ['https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', 'ITIC Academy, bloque 05 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.2 (01-10-2026), apartados 7.2–7.3: racionalización técnica y catálogo centralizado TIC. Correspondencia A1-11/A1-39.'],
  1432: ['https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', 'ITIC Academy, bloque 05 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.2 (01-10-2026), §4.2: tramitación ordinaria, urgente y de emergencia. Correspondencia A1-11.'],
  1433: ['https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', 'ITIC Academy, bloque 05 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.2 (01-10-2026), §3.1: tipos contractuales. Correspondencia A1-11.'],
  1434: ['https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', 'ITIC Academy, bloque 05 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.2 (01-10-2026), §11.1: control interno de la IGAE y control externo del Tribunal de Cuentas. Correspondencia A1-12.'],
  1435: ['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk', 'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026), epígrafe A1-16 y políticas contra la violencia de género. Correspondencia A1-16/A2-I-5.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q?.revision || !academy[c.id]) throw new Error(`Falta pregunta, registro o academia para ${c.id}`);
  const [url, block] = academy[c.id];
  const note = `Cotejo temático: ${block} El temario sirve para confirmar el encaje curricular; la respuesta se fundamenta en las fuentes primarias citadas en el registro.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block}` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido a las cinco preguntas del lote 223.');
