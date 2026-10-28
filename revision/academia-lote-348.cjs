const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-348.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  security: { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, Bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026' },
  hardware: { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, Bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1' },
  reuse: { url: 'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk', label: 'ITIC Academy, Bloque 11 Reutilización de información del sector público, datos abiertos y transparencia, actualización octubre 2026' },
  web: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, Bloque 30 Tecnologías de sistemas de información, edición 2026' },
  procurement: { url: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', label: 'ITIC Academy, Bloque 5 Contratación, presupuestos, convenios y compra TIC, actualización 2026' }
};
const map = {
  2056: { doc: 'security', topics: ['A1-47', 'A1-48', 'A2-II-13'], detail: 'El bloque aborda ataques, prevención, seguridad lógica e incidentes; el caso WannaCry se verificó aparte con CISA y Microsoft.' },
  2057: { doc: 'hardware', topics: ['A1-41', 'A2-II-1'], detail: 'Cotejo de encaje con fundamentos de hardware y componentes/capacidades de ordenadores; la función concreta de la ALU se sustenta en el manual técnico de Intel.' },
  2058: { doc: 'reuse', topics: ['A1-31', 'A1-46', 'A2-I-9'], detail: 'El bloque incluye RISP, datos abiertos y normativa vigente de reutilización, ENI y normas técnicas de interoperabilidad; el ámbito literal se comprobó en BOE.' },
  2059: { doc: 'web', topics: ['A1-65', 'A1-77', 'A2-III-12'], detail: 'El bloque cubre desarrollo web front-end, HTML y herramientas para redes globales; el concepto WYSIWYG se contrastó con documentación técnica.' },
  2060: { doc: 'procurement', topics: ['A1-11'], detail: 'El bloque trata la LCSP, contratación pública y compra TIC. La separación jurídica entre PCAP y PPT se comprobó directamente en los artículos 122 y 124–125.' }
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
  q.clasificacion.nota = `Correspondencia curricular comprobada con ${calls}. El material académico sirve de contraste del alcance, no de fuente para validar respuestas. ${c.actualizada.revision.observaciones}`;
  q.revision.observaciones = q.clasificacion.nota;
  q.comentarios = q.clasificacion.nota;
  q.revision.fuentes.push({ url: d.url, referencia: `${d.label}; contraste del temario, epígrafes y alcance curricular.` });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia, temario oficial y convocatorias anotado para IDs 2056–2060.');
