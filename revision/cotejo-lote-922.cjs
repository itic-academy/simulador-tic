const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-922.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const q = bank.preguntas.find(item => item.id === 4934);
const detail = 'ITIC Academy 2026, bloque 43 «Protocolos», §1.2 y pregunta A2 2021: incluye literalmente la pregunta de ordenar las siete capas OSI de inferior a superior; cotejo directo con UIT-T X.200 y convocatoria A1-111/A2-II.8.';
q.clasificacion.bloque_academia = `${detail} El material se cita como cotejo curricular, no como fuente primaria.`;
q.clasificacion.nota = `Corregida. ${detail} La respuesta técnica se verifica con la recomendación UIT-T X.200.`;
q.revision.observaciones += ` ${detail}`;
q.comentarios = q.revision.observaciones;
q.revision.fuentes.push({
  url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
  referencia: `ITIC Academy: ${detail}`
});
const entry = log.cambios.find(change => change.id === 4934);
entry.actualizada = structuredClone(q);
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo del bloque Academy 43 registrado para el ID 4934.');
