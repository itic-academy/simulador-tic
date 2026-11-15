const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1414.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7371: [{
    url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y herramientas de trabajo colaborativo, edición 2026.1',
    detail: 'Cotejo con el bloque de sistemas y protocolos de videoconferencia; las funciones concretas de H.245 se verifican en la recomendación ITU-T vigente.'
  }],
  7372: [{
    url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
    title: 'ITIC Academy, bloque Hardware, temas A1-52/53/54/56/57 y A2-I/III/V, edición 2026',
    detail: 'El temario incluye virtualización de servidores y sistemas (A1-57); no se atribuye a ese material una prescripción de fabricante o de plataforma concreta. La definición de VDI se contrasta con Microsoft Learn.'
  }],
  7373: [{
    url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 46 Redes inalámbricas, edición 2026',
    detail: 'Cotejo curricular en el bloque de redes inalámbricas y modos WLAN; la definición precisa de IBSS/ad hoc se comprueba en la documentación técnica de Microsoft y NIST.'
  }],
  7374: [{
    url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 43 Tema Protocolos, edición 2026',
    detail: 'El bloque se usa como cotejo curricular general de protocolos. La búsqueda de Drive no localizó una explicación específica de FTAM en el material actual; el alcance de FTAM se contrasta directamente con ISO 8571-3 e ITU-T T.190.'
  }],
  7375: [{
    url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 50 Videoconferencia, SSO y herramientas de trabajo colaborativo, edición 2026.1',
    detail: 'Cotejo con videoconferencia y tratamiento audiovisual; la distinción normativa entre predicción intra e intertrama se contrasta con ITU-T H.264 vigente.'
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
console.log('Cotejo Academy/Drive registrado para 7371–7375 con temas A1/A2 oficiales.');
