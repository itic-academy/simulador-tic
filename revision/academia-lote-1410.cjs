const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1410.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7351: [
    {
      url: 'https://drive.google.com/file/d/11qGK4GbJ0QV81HEyboRAy5AZorijJmhs/view?usp=drivesdk',
      title: 'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026.1',
      detail: 'Incluye arquitectura de servicios web y procesos de negocio; se coteja con el estándar OASIS para identificar la organización que publicó WS-BPEL 2.0.'
    },
    {
      url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
      title: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, edición 2026',
      detail: 'El mapa A1/A2 recoge XML (A1-77/A2-II-9), útil para contextualizar que WS-BPEL es un lenguaje XML de procesos de negocio; la atribución de estandarización se contrasta con OASIS.'
    }
  ],
  7352: [{
    url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1',
    detail: 'El bloque trata MÉTRICA v3 y su correspondencia con A1-95/A2-III-2. El nombre de los perfiles y la inclusión de perfiles técnicos como especialidades se cotejan con el manual de participantes citado en la revisión.'
  }],
  7353: [{
    url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1',
    detail: 'El apartado de análisis estructurado/DFD presenta el flujo de entrada, centro de transformación y salida y la selección de ramas según transacción; encaja en A1-95 y en las estrategias de análisis/desarrollo A2-III-2/III-3.'
  }],
  7354: [{
    url: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 41 ITIL y COBIT, versión 2026.1',
    detail: 'El apartado 2.3 enumera los siete principios guía de ITIL 4 y describe “Progresar iterativamente con retroalimentación” como trabajo en piezas pequeñas y gestionables; el programa lo enlaza con A1-106 y desarrollo ágil A2-III-2.'
  }],
  7355: [{
    url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
    title: 'ITIC Academy, bloque 42 Redes, versión 2026.1',
    detail: 'El programa cubre A1-108/A1-109 y A2-IV-12/IV-13 (Internet, servicios y protocolos seguros). Sirve para ubicar FTPS curricularmente; la separación real de sus canales y la negociación TLS se verifica con RFC 4217, no se atribuye a este temario una cita específica de FTPS.'
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
console.log('Cotejo Academy/Drive registrado para 7351–7355 con clasificación A1/A2 oficial.');
