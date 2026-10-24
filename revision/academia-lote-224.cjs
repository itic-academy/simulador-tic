const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-224.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const url = 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const notes = {
  1436: 'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2 (01-10-2026), apartado de políticas de igualdad. Correspondencia A1-16/A2-I-5.',
  1437: 'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2 (01-10-2026), contenidos de violencia de género y movilidad. Correspondencia A1-16/A1-24/A2-I-5/A2-I-8.',
  1438: 'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2 (01-10-2026), trabajo a distancia y teletrabajo. Correspondencia A1-22/A1-131/A2-I-6.',
  1439: 'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2 (01-10-2026), encaje temático en mercado único digital y sociedad de la información; no se atribuye al material una explicación específica del Reglamento 2018/302. Correspondencia A1-5/A1-22/A2-I-6.',
  1440: 'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2 (01-10-2026), encaje temático en objetivos de la UE; el bloque no se cita como fuente específica de Europa 2020. Correspondencia A1-5/A1-14; sin epígrafe específico equivalente en el programa A2 GSI.'
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q?.revision || !notes[c.id]) throw new Error(`Falta pregunta, registro o cotejo para ${c.id}`);
  const note = `Cotejo temático: ${notes[c.id]} La respuesta se fundamenta en las fuentes primarias citadas en el registro.`;
  q.clasificacion.bloque_academia = notes[c.id];
  q.clasificacion.nota = note;
  q.revision.observaciones = `${q.revision.observaciones} ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push({ url, referencia: `ITIC Academy, ${notes[c.id]}` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo temático de academia registrado para los IDs 1436–1440.');
