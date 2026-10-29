const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-510.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2866: { A1: ['A1-106'], A2: ['A2-IV-4'], academy: 'ITIC Academy, Bloque 41 ITIL y COBIT 2026: principios guía de ITIL 4; PeopleCert mantiene módulos ITIL 4 disponibles durante la transición a Version 5.' },
  2867: { A1: ['A1-33', 'A1-40'], A2: ['A2-II-15'], academy: 'ITIC Academy, Bloque 12 Directivo TIC y Planificación Estratégica 2026 y Bloque 17 Adquisición y rentabilidad de inversiones 2026.2. El mapa curricular no resuelve la metodología omitida en el reactivo.' },
  2868: { A1: ['A1-80'], A2: ['A2-I-6', 'A2-I-9'], academy: 'ITIC Academy, Bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1: firma electrónica, políticas y formatos interoperables.' },
  2869: { A1: ['A1-63'], A2: ['A2-IV-2'], academy: 'ITIC Academy, Bases de Datos, SQL y Modelado de Datos 2026 (A1-63 y SGBD); mapa curricular general, no fuente técnica para la regla específica de Oracle.' },
  2870: { A1: ['A1-59'], A2: ['A2-II-2', 'A2-IV-1'], academy: 'ITIC Academy, Bloque 27 Sistemas Operativos 2026: fundamentos y administración de sistemas operativos.' }
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  const m = mapping[change.id];
  assert.ok(q && m, `ID ${change.id}`);
  for (const id of [...m.A1, ...m.A2]) assert.ok(topics.has(id), `Tema no oficial: ${id}`);
  q.clasificacion = { ...q.clasificacion, A1: m.A1, A2: m.A2, bloque_academia: m.academy, estado: 'revisada', nota: `${q.revision.estado}. ${m.academy}` };
  q.revision.observaciones += ` Cotejo curricular: ${m.academy} La academia se usa como mapa de estudio, no como autoridad legal o técnica.`;
  q.comentarios = q.revision.observaciones;
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Clasificación A1/A2 cotejada contra temario-oficial.json para IDs 2866–2870.');
