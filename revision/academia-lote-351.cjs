const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-351.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, Bloque 27 Sistemas operativos UNIX-LINUX y Microsoft, edición 2026' },
  audit: { url: 'https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk', label: 'ITIC Academy, Bloque 16 Auditoría informática, versión 2026' },
  security: { url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk', label: 'ITIC Academy, Bloque 22 Seguridad, ENS y ciberseguridad, versión 2026.2' },
  bi: { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, Bloque 34 Business Intelligence y Big Data, edición 2026' },
  strategy: { url: 'https://drive.google.com/file/d/1fti1UIhEIqK3pY8GBENi-4rTKwoEG8tF/view?usp=drivesdk', label: 'ITIC Academy, Bloque 12 Estrategias y herramientas del directivo público TIC, planificación estratégica, edición octubre de 2026' }
};
const map = {
  2071: { doc: 'os', topics: ['A1-60', 'A2-II-2'], detail: 'El bloque cubre administración Linux/UNIX; rc.local se contrasta con el manual oficial de systemd para distinguir su semántica SysV histórica de la actual.' },
  2072: { doc: 'audit', topics: ['A1-38', 'A1-48', 'A2-I-9', 'A2-II-11'], detail: 'El bloque 16 abarca metodología y auditoría del ENS; el bloque 22 cubre niveles y medidas del ENS. El detalle de autoevaluación básica se verifica directamente en BOE.' },
  2073: { doc: 'os', topics: ['A1-60', 'A2-II-2'], detail: 'El bloque cubre fundamentos UNIX/Linux y administración; la descripción precisa de nodos especiales y /dev se verifica con documentación del kernel Linux.' },
  2074: { doc: 'bi', topics: ['A1-75', 'A2-II-4'], detail: 'El bloque desarrolla BI, almacenes de datos, OLTP/OLAP y tipologías de cubos; la clasificación MOLAP/ROLAP/HOLAP se contrasta con IBM.' },
  2075: { doc: 'strategy', topics: ['A1-35', 'A2-II-15'], detail: 'El bloque incorpora planificación de proyectos y dirección por objetivos y recursos; las definiciones normativas de eficacia y eficiencia se toman de ISO 9000:2015.' }
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
  q.clasificacion.nota = `Correspondencia curricular contrastada con ${calls}. El material académico sirve para verificar el alcance del temario; la clave se fundamenta en la norma o documentación técnica citada. ${c.actualizada.revision.observaciones}`;
  q.revision.observaciones = q.clasificacion.nota;
  q.comentarios = q.clasificacion.nota;
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; cotejo de epígrafes y alcance curricular.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia, temario oficial y convocatorias anotado para IDs 2071–2075.');
