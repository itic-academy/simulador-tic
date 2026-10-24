const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-240.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const rows = {
  1516: {
    doc: {url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', label: 'ITIC Academy, bloque 39 Calidad y Mantenimiento, versión 2026.1 (23-09-2026)'},
    detail: 'EFQM, calidad organizativa y excelencia en las instituciones públicas', topics: ['A1-23', 'A1-103', 'A2-III-13']
  },
  1517: {
    doc: {url: 'https://drive.google.com/file/d/1D93MNUzOWGwD6IyuWdxIMnHaL7aXvYhp/view?usp=drivesdk', label: 'ITIC Academy, bloque 16 Auditoría Informática, versión 2026.2 (19-08-2026)'},
    detail: 'auditoría informática, objetivos, alcance, técnicas, estándares y aseguramiento de TI', topics: ['A1-38', 'A2-II-11']
  },
  1518: {
    doc: {url: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk', label: 'ITIC Academy, bloque 41 ITIL y COBIT, edición 2026'},
    detail: 'gestión de servicios TIC e ITIL 4; la ficha académica también incorpora ITIL (Version 5), por lo que se conserva la pregunta explícitamente acotada a ITIL 4', topics: ['A1-106']
  },
  1519: {
    doc: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 Redes, versión 2026'},
    detail: 'medios de transmisión, cableado estructurado y clasificación de cableado balanceado', topics: ['A1-108', 'A1-110', 'A2-IV-7']
  },
  1520: {
    doc: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 Redes, versión 2026'},
    detail: 'medios guiados, atenuación y parámetros de transmisión', topics: ['A1-108', 'A1-110', 'A2-IV-7']
  }
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  const row = rows[change.id];
  assert.ok(q?.revision && row, `Falta ficha o cotejo académico para ${change.id}`);
  const topicCodes = row.topics.join('/');
  const note = `Cotejo curricular: ${row.doc.label}; ${row.detail}; correspondencia ${topicCodes}, contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia se usa como encaje curricular y no sustituye las fuentes técnicas primarias de la ficha.`;
  const source = {url: row.doc.url, referencia: `${row.doc.label}; ${row.detail}; temas oficiales ${topicCodes}.`};
  q.clasificacion.bloque_academia = `${row.doc.label}; ${row.detail}; correspondencia ${topicCodes}.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  q.revision.fuentes.push(source);
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de ITIC Academy y correspondencia oficial A1/A2 añadido para 1516–1520.');
