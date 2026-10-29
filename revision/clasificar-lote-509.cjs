const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-509.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2861: { A1: ['A1-80'], A2: ['A2-II-8', 'A2-IV-9'], academy: 'ITIC Academy, Bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, tema A1-80: LDAP y X.500.' },
  2862: { A1: ['A1-34'], A2: ['A2-IV-1', 'A2-IV-9'], academy: 'ITIC Academy, Bloque 9 Organización y Gestión de los Sistemas de Información 2026, tema A1-34 y funciones de los equipos de desarrollo y sistemas.' },
  2863: { A1: ['A1-80'], A2: ['A2-I-6'], academy: 'ITIC Academy, Bloque 36 Seguridad, Criptografía, Identificación y Firma 2026.1, marco eIDAS y servicios de confianza.' },
  2864: { A1: ['A1-106'], A2: ['A2-IV-4'], academy: 'ITIC Academy, Bloque 41 ITIL y COBIT 2026, temario actual centrado en ITIL 4/Version 5; la pregunta se marca como histórica al referirse explícitamente a ITIL v3.' },
  2865: { A1: ['A1-108', 'A1-56'], A2: ['A2-IV-8', 'A2-IV-10', 'A2-IV-5'], academy: 'ITIC Academy, Bloque 42 Redes 2026.1 (LAN/WAN) y Bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización (SAN).' }
};
const topics = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mapping[c.id];
  assert.ok(q && m, `Pregunta ${c.id} o mapeo ausente`);
  for (const id of [...m.A1, ...m.A2]) assert.ok(topics.has(id), `Tema no oficial: ${id}`);
  q.clasificacion.A1 = m.A1;
  q.clasificacion.A2 = m.A2;
  q.clasificacion.bloque_academia = m.academy;
  q.clasificacion.estado = 'revisada';
  q.clasificacion.nota = `${q.revision.estado}. ${m.academy}`;
  const curricular = `Cotejo curricular: ${m.academy} La academia es un mapa de estudio y no una autoridad normativa o técnica.`;
  q.revision.observaciones = `${c.actualizada.revision.observaciones} ${curricular}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Clasificación A1/A2 validada contra temario-oficial.json para IDs 2861–2865.');
