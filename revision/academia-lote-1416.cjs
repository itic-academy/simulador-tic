const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1416.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7381: [{
    url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 43 Protocolos, edición 2026',
    detail: 'Cotejo curricular con el bloque dedicado a protocolos; la capa OSI y el transporte directo de OSPFv2 sobre IP se verifican en RFC 2328, no se atribuyen al material pedagógico como afirmación normativa.'
  }],
  7382: [{
    url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 46 Redes inalámbricas, edición 2026',
    detail: 'Cotejo curricular con comunicaciones móviles y redes inalámbricas; la comparación de propagación y la distinción TDD/FDD se comprueban en documentos UIT-R vigentes.'
  }],
  7383: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, edición 2026',
    detail: 'Cotejo curricular con redes y arquitectura de granjas/servidores; la distinción L4/L7 se contrasta con documentación técnica primaria de NGINX y AWS.'
  }],
  7384: [{
    url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 43 Protocolos, edición 2026',
    detail: 'Cotejo curricular con protocolos y encaminamiento; la diferencia entre RIP y la familia de algoritmos vector-distancia se establece a partir de RFC 2453.'
  }],
  7385: [{
    url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 48 Seguridad de redes y aplicaciones, edición 2026',
    detail: 'Cotejo curricular con seguridad de red, defensa perimetral y análisis de amenazas; la limitación de análisis de adjuntos protegidos por contraseña se verifica en Microsoft Learn.'
  }]
};

const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, 'Falta revisión ' + change.id);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), 'Tema oficial inválido: ' + id);
  const notes = docs[change.id];
  assert.ok(notes?.length, 'Falta cotejo académico ' + change.id);
  for (const doc of notes) {
    const note = `Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
    q.revision.fuentes.push({ url: doc.url, referencia: note });
    q.clasificacion.nota = (q.clasificacion.nota + ' ' + note).trim();
    q.comentarios = (q.comentarios + ' ' + note).trim();
    q.revision.observaciones = (q.revision.observaciones + ' ' + note).trim();
  }
  q.clasificacion.bloque_academia = notes.map(x => `${x.title}: ${x.detail}`).join(' ');
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7381–7385 con temas A1/A2 oficiales.');
