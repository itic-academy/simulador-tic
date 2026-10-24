const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-221.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  1421: ['https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', 'ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, versión 2026.1 (01-10-2026), §3.6: federación de identidades SAML. Correspondencia A1-131/A2-I-6.'],
  1422: ['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026), §§12.7 y 18.4. Correspondencia A1-132/A2-II-1/A2-IV-6.'],
  1423: ['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk', 'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026): Constitución y derechos fundamentales. Correspondencia A1-1/A2-I-1.'],
  1424: ['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk', 'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026): Tribunal Constitucional, composición y organización. Correspondencia A1-2/A2-I-2.'],
  1425: ['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk', 'ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, versión 2026.2 (01-10-2026): órganos constitucionales de control, incluido el Tribunal de Cuentas. Correspondencia A1-1. El bloque A2-I-2 trata el Tribunal Constitucional y el Defensor del Pueblo, no el Tribunal de Cuentas.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q?.revision || !academy[c.id]) throw new Error(`Falta pregunta, registro o academia para ${c.id}`);
  const [url, block] = academy[c.id];
  const note = `Cotejo temático: ${block} El temario se usa para el encaje curricular; las fuentes primarias citadas por separado fundamentan la respuesta.`;
  q.clasificacion.bloque_academia = block;
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${block}` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy añadido a las cinco preguntas del lote 221.');
