const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-426.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  systems: {
    url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», versión 2026.1; encuadra ciclo de vida, reingeniería, construcción y modernización de aplicaciones en los temas A1/A2 de sistemas.'
  },
  quality: {
    url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», actualización 2026; aborda el Modelo EFQM y el marco de calidad organizativa, con referencia al tema A1-103.'
  },
  itil: {
    url: 'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 41 «ITIL y COBIT», versión 2026; encuadra ITIL, gestión de servicios y configuración en A1-34/A2-IV-4.'
  }
};
const map = {
  2441: { doc: 'systems', topics: ['A1-86'], a2: ['A2-III-2'], detail: 'Modernización y mantenimiento evolutivo de sistemas; se distingue refacing de rehosting, replacement y rearchitecting.' },
  2442: { doc: 'systems', topics: ['A1-86'], a2: ['A2-III-2'], detail: 'Mantenimiento/reingeniería dentro del ciclo de vida del software, con transformación que preserva comportamiento.' },
  2443: { doc: 'quality', topics: ['A1-103'], a2: [], detail: 'Gestión de calidad organizativa, directrices ISO 9004 y búsqueda del éxito sostenido.' },
  2444: { doc: 'quality', topics: ['A1-103'], a2: [], detail: 'Modelo EFQM y evolución de sus criterios de resultados; la pregunta delimita el modelo histórico 2013.' },
  2445: { doc: 'itil', topics: ['A1-34'], a2: ['A2-IV-4'], detail: 'Gestión de configuración, CMDB/CMS, atributos, relaciones, registros y ciclo de vida del servicio TI.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2441,2442,2443,2444,2445') throw new Error('IDs del lote 426 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta revisión de ' + c.id);
  if (![...m.topics, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.topics;
  q.clasificacion.A2 = m.a2;
  const note = 'Cotejo curricular: ' + d.label + ' ' + m.detail + ' Drive: ' + d.url + '. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (' + calls.join('; ') + '). Academy orienta la ubicación curricular; las definiciones concretas se apoyan en las fuentes documentales enlazadas en revision.fuentes.';
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 426 completado.');
