const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-347.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  audit: { url: 'https://drive.google.com/file/d/1ZMlFiRyoKl044jwPZ7KYERgWH3ah3L-J/view?usp=drivesdk', label: 'ITIC Academy, Tema 038 Auditoría, versión 2025 v2' },
  digital: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, Bloque 36 Temas 79–81: seguridad, criptografía, identificación y firma, edición 2026' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, Bloque 27 Sistemas operativos, edición 2026.1' },
  web: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, Bloque 30 Tecnologías de sistemas de información, edición 2026' },
  governance: { url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk', label: 'ITIC Academy, Bloque 10 Gobernanza TIC y Administración Digital, versión 2026.4' }
};
const map = {
  2051: { doc: 'audit', topics: ['A1-38', 'A2-II-11'], detail: 'El bloque incluye fases y prácticas del proceso de auditoría, análisis de riesgos, controles y papeles de trabajo. La delimitación del enunciado sigue los estándares profesionales actuales.' },
  2052: { doc: 'digital', topics: ['A1-80', 'A2-I-6'], detail: 'Cotejo con identificación y firma electrónica, certificados y régimen eIDAS; la regla concreta de cese se comprobó en la Ley 6/2020, no se atribuye al material didáctico.' },
  2053: { doc: 'os', topics: ['A1-59', 'A2-II-2'], detail: 'El bloque desarrolla fundamentos de sistemas operativos y gestión de memoria virtual; el matiz de fallos menores/mayores se verificó en documentación primaria del kernel y Linux man-pages.' },
  2054: { doc: 'web', topics: ['A1-65', 'A1-68', 'A2-III-12'], detail: 'El bloque cubre desarrollo web en servidor, conexión a bases de datos y entorno PHP. Se distingue un framework web con capa DAO de productos centrados en DBAL/ORM según documentación oficial.' },
  2055: { doc: 'governance', topics: ['A1-30', 'A2-I-10'], detail: 'Cotejo con gobernanza de las TIC de la AGE, cooperación e instrumentos de Administración Digital; se mantiene explícita la separación entre la antigua SGAD y la AEAD actual.' }
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
  q.clasificacion.nota = `Correspondencia curricular comprobada con ${calls}. El temario de academia se usa como contraste del alcance; la respuesta y las correcciones se fundamentan en fuentes primarias. ${c.actualizada.revision.observaciones}`;
  q.revision.observaciones = q.clasificacion.nota;
  q.comentarios = q.clasificacion.nota;
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; contraste del temario, epígrafes y alcance curricular.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia, temario oficial y convocatorias anotado para IDs 2051–2055.');
