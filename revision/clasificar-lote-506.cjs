const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-506.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mapping = {
  2846: { A1: ['A1-48'], A2: ['A2-I-9', 'A2-II-11'], academy: 'ITIC Academy, Bloque 22 Seguridad, ENS y Ciberseguridad 2026.2, §§1.2 y 3.6 (dimensiones y registro de auditoría).' },
  2847: { A1: ['A1-123'], A2: ['A2-IV-15'], academy: 'ITIC Academy, Bloque 46 Redes inalámbricas y comunicaciones móviles 2026.1 (GPRS/GSM y generaciones móviles).' },
  2848: { A1: ['A1-111'], A2: ['A2-II-8'], academy: 'ITIC Academy, Bloque 43 Protocolos 2026.1, modelo OSI, capa de presentación y ASN.1.' },
  2849: { A1: ['A1-42'], A2: ['A2-II-15'], academy: 'ITIC Academy, Bloque 17 Adquisición de sistemas y rentabilidad de inversiones 2026.2, §7.1 (flujos de caja y tasa de descuento).' },
  2850: { A1: ['A1-56'], A2: ['A2-III-15'], academy: 'ITIC Academy, Bloque 34 Business Intelligence y Big Data 2026.1, §5.2 (Hadoop/HDFS); Bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización 2026.1 (almacenamiento y tolerancia a fallos).' }
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
console.log('Clasificación oficial A1/A2 y cotejo de academia aplicados a 2846–2850.');
