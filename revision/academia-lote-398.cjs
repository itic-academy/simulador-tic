const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-398.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque Sistemas Operativos, temas A1 59–62 y A2 T2/C1, versión 2026.1' },
  admin: { url: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', label: 'ITIC Academy, bloque 03, Actuación Administrativa, versión 2026' },
  ai: { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32, Inteligencia Artificial' },
  digital: { url: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk', label: 'ITIC Academy, bloque 06, Economía, sociedad, empleo y transformación digital, actualización 2026.2' },
  itil: { url: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk', label: 'ITIC Academy, bloque 41, ITIL y COBIT 2019, actualización 2026' }
};
const mapping = {
  2306: { topics: ['A1-60', 'A2-II-2'], docs: ['os'], detail: 'El bloque de sistemas operativos contiene expresamente UNIX/Linux y administración; correspondencia directa con los epígrafes A1-60 y A2-II-2.' },
  2307: { topics: ['A1-8', 'A2-I-8'], docs: ['admin'], detail: 'El bloque 03 de Actuación Administrativa aborda el procedimiento común y sus derechos; correspondencia directa con A1-8 y A2-I-8.' },
  2308: { topics: ['A1-70', 'A2-III-5'], docs: ['ai'], detail: 'El bloque 32 de IA estudia aprendizaje automático y agrupamiento; los dos programas oficiales incluyen fundamentos de IA y machine learning.' },
  2309: { topics: ['A1-22', 'A2-I-10'], docs: ['digital', 'admin'], detail: 'La pregunta trata principios de un plan de Administración Digital y servicios públicos, con relación curricular a modernización mediante TIC (A1-22) y cooperación/Administración electrónica (A2-I-10). El bloque 06 aporta contexto de agenda digital; el bloque 03 encuadra la Administración electrónica. La clasificación es temática: ninguno convierte el plan citado en norma vigente.' },
  2310: { topics: ['A1-106'], docs: ['itil'], detail: 'El bloque 41 estudia ITIL; A1-106 cita expresamente sus bases conceptuales. No se asigna tema A2 por analogía: el programa GSI no tiene un epígrafe específico de ITIL o gestión de servicios TIC.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
assert.deepEqual(log.cambios.map(c => c.id), [2306, 2307, 2308, 2309, 2310]);
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id);
  const map = mapping[change.id];
  assert.ok(q?.revision && map, `Falta cotejo ${change.id}`);
  assert.ok(map.topics.every(t => official.has(t)), `Tema oficial inexistente ${change.id}`);
  q.clasificacion.A1 = map.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = map.topics.filter(t => t.startsWith('A2-'));
  const curriculum = `${map.docs.map(key => docs[key].label).join('; ')}. ${map.detail}`;
  const note = `Cotejo curricular: ${curriculum} Temas cotejados con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). Los materiales de ITIC Academy se emplean para encuadre curricular; la respuesta se apoya en fuentes primarias.`;
  q.clasificacion.bloque_academia = curriculum;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
console.log('Cotejo Academy/temario oficial del lote 398 completado.');
