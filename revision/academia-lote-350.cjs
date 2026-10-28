const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-350.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, Bloque 30 Tecnologías de sistemas de información, edición 2026' },
  agile: { url: 'https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk', label: 'ITIC Academy, Bloque 15 Metodologías ágiles y ciclo de vida, actualización octubre de 2026' },
  security: { url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk', label: 'ITIC Academy, Bloque 22 Seguridad, ENS y ciberseguridad, versión 2026.2' },
  governance: { url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk', label: 'ITIC Academy, Bloque 10 Gobernanza TIC, Administración Digital, acceso electrónico y cooperación, actualización octubre de 2026' }
};
const map = {
  2066: { doc: 'systems', topics: ['A1-65', 'A1-67', 'A2-III-10'], detail: 'El bloque cubre desarrollo web en servidor y entorno Java; la lista exacta de manejadores se verificó con la especificación Jakarta Servlet.' },
  2067: { doc: 'agile', topics: ['A1-88', 'A2-III-2'], detail: 'El bloque 15 desarrolla metodologías ágiles, Lean y XP; la práctica de programación por parejas se confirma en Agile Alliance.' },
  2068: { doc: 'systems', topics: ['A1-67', 'A1-77', 'A2-II-9', 'A2-III-10'], detail: 'El bloque comprende entorno Java, XML y tecnologías web; el nombre actual y las operaciones de binding se contrastaron con la especificación oficial Jakarta XML Binding.' },
  2069: { doc: 'security', topics: ['A1-47', 'A1-48', 'A2-II-13'], detail: 'El bloque actualizado desarrolla seguridad, ENS y ciberseguridad; la Directiva NIS histórica y su transposición/relevo se verificaron en EUR-Lex y BOE.' },
  2070: { doc: 'governance', topics: ['A1-30'], detail: 'El bloque actualizado incluye el encaje organizativo de la AGE y la AEAD; el organigrama histórico y la supresión de SGAD se comprobaron en los reales decretos aplicables.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  const a1 = m.topics.filter(t => t.startsWith('A1-')), a2 = m.topics.filter(t => t.startsWith('A2-'));
  assert.deepEqual(q.clasificacion.A1, a1);
  assert.deepEqual(q.clasificacion.A2, a2);
  assert.ok(m.topics.every(t => official.has(t)));
  const d = docs[m.doc];
  const calls = 'Convocatorias oficiales A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262, cotejadas con revision/temario-oficial.json';
  q.clasificacion.bloque_academia = `${d.label}; ${m.detail}`;
  q.clasificacion.nota = `Correspondencia curricular contrastada con ${calls}. La academia se utiliza para el alcance del temario; las respuestas se validan con fuentes primarias o documentación técnica oficial. ${c.actualizada.revision.observaciones}`;
  q.revision.observaciones = q.clasificacion.nota;
  q.comentarios = q.clasificacion.nota;
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; cotejo de epígrafes y alcance curricular.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia, temario oficial y convocatorias anotado para IDs 2066–2070.');
