const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-505.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2841: { A1: ['A1-86'], A2: ['A2-III-1'], academy: 'ITIC Academy, Bloque 15 Metodologías ágiles y modelos de ciclo de vida 2026.1, tema oficial A1 86/A2 D1 (modelos y fases del ciclo de vida).' },
  2842: { A1: ['A1-111'], A2: ['A2-II-8'], academy: 'ITIC Academy, Bloque 43 Protocolos 2026.1, OSI y TCP/IP, especialmente arquitectura y capas.' },
  2843: { A1: ['A1-115'], A2: ['A2-II-8'], academy: 'ITIC Academy, Bloque 43 Protocolos 2026.1, IPv4/IPv6 y funcionalidades específicas de IPv6.' },
  2844: { A1: ['A1-114'], A2: ['A2-IV-11'], academy: 'ITIC Academy, Bloque 46 Redes inalámbricas y comunicaciones móviles 2026.1, §4 y evolución de IEEE 802.11/Wi-Fi.' },
  2845: { A1: ['A1-123'], A2: ['A2-IV-15'], academy: 'ITIC Academy, Bloque 46 Redes inalámbricas y comunicaciones móviles 2026.1, figura 34 y apartado 2G/GPRS: BSS/NSS, SGSN/GGSN y datos por paquetes.' }
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
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Clasificación oficial A1/A2 y cotejo de academia aplicados a 2841–2845.');
