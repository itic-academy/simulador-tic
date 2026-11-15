const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1402.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7311: { url: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk', title: 'ITIC Academy, bloque 41 ITIL y COBIT, versión 2026.1', detail: 'El contenido cotejado cubre ITIL 4 y el tema A1-106 (gestión de servicios TIC); el bloque puntualiza que la parte A2 solo se integra en subapartados concretos de D2/C2 y no como un tema A2 general de ITIL.' },
  7312: { url: 'https://drive.google.com/file/d/1NWEg_hd3iDIC0kIitK-u8BpmJ20Jecmw/view?usp=drivesdk', title: 'ITIC Academy, bloque 49 Infraestructuras y Servicios Comunes, edición 2026', detail: 'El documento incluye A1-49/A2-I-10 y cubre Notific@/DEHú como servicios transversales de Administración digital. SIM se distingue a partir de la ficha técnica oficial del PAe/CTT.' },
  7313: { url: 'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk', title: 'ITIC Academy, bloque 01 Constitución, Estado y AGE, edición 2026', detail: 'Cotejo del artículo 54 y el Defensor del Pueblo en A1-1; la obra también contiene el temario constitucional A2, cuya clasificación específica se completa con A2-I-2.' },
  7314: { url: 'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk', title: 'ITIC Academy, bloque 02 Unión Europea, edición 2026.2', detail: 'Cotejo del tema A1-5 y sus instituciones. La academia declara que este tema no aplica al programa A2.' },
  7315: { url: 'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk', title: 'ITIC Academy, bloque 02 Unión Europea, edición 2026.2', detail: 'El material incluye Comisión y demás instituciones en A1-5; la composición del Colegio se actualiza a partir de la ficha oficial del mandato 2024–2029, no de una cifra memorizada sin fecha.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, `Falta revisión ${change.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema oficial inválido: ${id}`);
  const doc = docs[change.id];
  const note = `Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
  q.clasificacion.bloque_academia = note;
  q.clasificacion.nota = `${q.clasificacion.nota} ${note}`.trim();
  q.comentarios = `${q.comentarios} ${note}`.trim();
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.revision.fuentes.push({ url: doc.url, referencia: `${doc.title}; cotejo: ${doc.detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7311–7315 con los temas oficiales A1/A2 correspondientes.');
