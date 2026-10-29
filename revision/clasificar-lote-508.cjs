const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-508.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2856: { A1: ['A1-110'], A2: ['A2-IV-7'], academy: 'ITIC Academy, Bloque 42 Redes 2026.1, cableado estructurado y medios de transmisión.' },
  2857: { A1: ['A1-96'], A2: ['A2-III-7', 'A2-III-6'], academy: 'ITIC Academy, Bloque 38 Análisis, Diseño y Construcción de SI 2026.1, pruebas, ciclo de vida y despliegue.' },
  2858: { A1: ['A1-48'], A2: ['A2-I-9', 'A2-II-13'], academy: 'ITIC Academy, Bloque 22 Seguridad, ENS y Ciberseguridad 2026.2, ENS vigente y gestión de incidentes.' },
  2859: { A1: ['A1-76'], A2: ['A2-I-9'], academy: 'ITIC Academy, Bloque 34 Business Intelligence y Big Data 2026.1, §12 metadatos/semántica/ontologías; Bloque 11 RISP 2026.2, §5.3 web semántica y datos enlazados.' },
  2860: { A1: ['A1-58'], A2: ['A2-II-6', 'A2-III-12'], academy: 'ITIC Academy, Bloque 28 Arquitectura SOA y requisitos no funcionales 2026.1, SOAP/WSDL, RPC y contratos de servicio.' }
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
console.log('Clasificación A1/A2 validada contra temario-oficial.json para IDs 2856–2860.');
