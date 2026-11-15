const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1411.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7356: [{
    url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y herramientas de trabajo colaborativo, versión 2026.1',
    detail: 'El capítulo sobre H.323 reconoce los dispositivos IVR (Interactive Voice Response) como terminales habituales. El temario oficial A2-II-12 también menciona expresamente IVR y VoiceXML; A1-106 aporta el encaje general de atención/gestión del servicio.'
  }],
  7357: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, versión 2026.1',
    detail: 'El material incluye el modelo OSI y los protocolos por capas, en consonancia con A1-111/A2-II-8; las funciones precisas de sesión se contrastan con ITU-T X.225.'
  }],
  7358: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, versión 2026.1',
    detail: 'El cuadro de tecnologías de acceso trata xDSL/ADSL como tecnología sobre cobre histórica, contextualiza su retirada progresiva en España y la predominancia de FTTH; las características de G.992.1 se apoyan en la norma ITU-T.'
  }],
  7359: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, versión 2026.1',
    detail: 'La sección de evolución Wi-Fi señala que 802.11ax/Wi-Fi 6E incorpora OFDMA y que la modalidad 6E usa la banda de 6 GHz; la clasificación A1-114/A2-IV-11 coincide con redes inalámbricas. Se distingue que la banda depende de certificación 6E y regulación.'
  }],
  7360: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, versión 2026.1',
    detail: 'El bloque cubre arquitectura IP/Internet y modelos por capas (A1-111/A1-115/A2-II-8); la diferencia entre loopback local y prueba de adaptador/ruta se verifica además con RFC 1122 y RFC 792.'
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
console.log('Cotejo Academy/Drive registrado para 7356–7360 con clasificación A1/A2 oficial.');
