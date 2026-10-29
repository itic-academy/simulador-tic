const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-507.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2851: { A1: ['A1-79', 'A1-125'], A2: ['A2-IV-12'], academy: 'ITIC Academy, Bloque 48 Seguridad en Redes y Aplicación 2026.1, §8.2 TLS/HTTPS.' },
  2852: { A1: ['A1-115'], A2: ['A2-II-8'], academy: 'ITIC Academy, Bloque 43 Protocolos 2026.1, IPv4/IPv6.' },
  2853: { A1: ['A1-106'], A2: ['A2-IV-4'], academy: 'ITIC Academy, Bloque 41 ITIL y COBIT 2026.1, ITIL 4/Version 5 y gestión del cambio.' },
  2854: { A1: ['A1-65'], A2: ['A2-II-3', 'A2-II-9'], academy: 'ITIC Academy, Bloque 30 Tecnologías de los Sistemas de Información 2026.1, §2.4 JavaScript y ECMAScript 2026.' },
  2855: { A1: ['A1-93'], A2: ['A2-III-2'], academy: 'ITIC Academy, Bloque 38 Análisis, Diseño y Construcción de SI 2026.1, §5.3 diagramas de estructura de Constantine.' }
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
  q.revision.observaciones = `${c.actualizada.revision.observaciones} Cotejo curricular: ${m.academy} La academia se usa como mapa de estudio, no como autoridad para establecer la respuesta.`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Clasificación A1/A2 validada contra temario-oficial.json para IDs 2851–2855.');
