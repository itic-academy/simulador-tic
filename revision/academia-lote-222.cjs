const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-222.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1426: ['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk', 'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026): organización territorial de la AGE y Delegaciones del Gobierno. Correspondencia A1-6/A2-I-8.'],
  1427: ['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', 'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026), y bloque 04 Revisión de actos y responsabilidad, versión 2026.2 (01-10-2026): nulidad y anulabilidad. Correspondencia A1-8/A2-I-8.'],
  1428: ['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', 'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026): Ley 40/2015 y funcionamiento electrónico del sector público. Correspondencia A1-22/A2-I-9.'],
  1429: ['https://drive.google.com/file/d/1U6EEziJeYQVc2YuAzidHpR4x_MBjZhV-/view?usp=drivesdk', 'ITIC Academy, bloque 04 Revisión de actos y responsabilidad, versión 2026.2 (01-10-2026): recurso contencioso-administrativo y representación procesal. Correspondencia A1-9; el bloque académico declara que el tema no aplica a A2 y no se asigna tema A2 específico.'],
  1430: ['https://drive.google.com/file/d/1U6EEziJeYQVc2YuAzidHpR4x_MBjZhV-/view?usp=drivesdk', 'ITIC Academy, bloque 04 Revisión de actos y responsabilidad, versión 2026.2 (01-10-2026), y bloque 03 Actuación Administrativa, versión 2026.2 (01-10-2026): revisión de oficio, nulidad y Ley 39/2015. Correspondencia A1-9/A2-I-8.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q?.revision || !academy[c.id]) throw new Error(`Falta pregunta, registro o academia para ${c.id}`);
  const [url, block] = academy[c.id];
  const note = `Cotejo temático: ${block} El material de academia se usa como contexto curricular; las fuentes legales oficiales citadas por separado fundamentan la respuesta.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block}` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido a las cinco preguntas del lote 222.');
