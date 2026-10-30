const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const bank = JSON.parse(fs.readFileSync(path.join(dir, '..', 'preguntas_preparatic.json'), 'utf8'));
const log = JSON.parse(fs.readFileSync(path.join(dir, 'cambios-lote-635.json'), 'utf8'));
const docs = {
  gis: {url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', title: 'ITIC Academy, bloque 33 E-learning y SIG, versión 2026.1'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', title: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1'},
  web: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'},
  images: {url: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk', title: 'ITIC Academy, bloque 37 Tratamiento de imágenes, OCR, biometría y gestión de contenidos, versión 2026.1'}
};
const mappings = {
  3491: {a1: [74], a2: [], use: [docs.gis], detail: 'El bloque 33 desarrolla conceptos y funcionalidad SIG dentro de A1-74 y señala expresamente A2: NO APLICA; por ello no se asigna tema A2.'},
  3492: {a1: [52], a2: ['II-1'], use: [docs.hardware], detail: 'El bloque 26 incluye A1-52 (sistemas de altas prestaciones/Grid/Mainframe) y A2-T1, normalizado al identificador A2-II-1; sirve de encuadre hardware. La enumeración concreta del VT82C686A procede del manual/datasheet de VIA.'},
  3493: {a1: [65], a2: ['III-10'], use: [docs.web], detail: 'El bloque 30 cubre desarrollo web en servidor y Jakarta EE (A2-D10, normalizado como A2-III-10); la API y semántica exactas se verifican con Jakarta Servlet 6.1.'},
  3494: {a1: [77], a2: ['II-9'], use: [docs.web], detail: 'El bloque 30 incluye A1-77, HTML/CSS/XML, y A2-T9, normalizado como A2-II-9, sobre lenguajes de marca y XML; se atribuye al temario el encuadre, no la literalidad de la definición de validez.'},
  3495: {a1: [56, 83], a2: [], use: [docs.images, docs.hardware], detail: 'El bloque 37 corresponde a A1-83 (tratamiento de imágenes) y aborda formatos/parámetros; el bloque 26 cubre A1-56, incluidos dispositivos multimedia. Aunque el bloque 37 también enumera A2-T16 para gestión de contenidos, no se asigna ese epígrafe a compresión de imagen por no ser una correspondencia directa.'}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(dir, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const examA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const examA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mappings[c.id];
  assert.ok(q?.revision && m, `Falta revisión o cotejo de ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: `${m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | ')}`, estado: 'revisada', nota: 'Correspondencia cotejada con los programas A1/A2 publicados en BOE y revision/temario-oficial.json; la cobertura académica se limita a lo localizado.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ') || 'sin asignación A2 directa'}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; epígrafes cotejados con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; epígrafes cotejados con revision/temario-oficial.json. No se asigna A2 cuando no existe relación directa.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(dir, '..', 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(path.join(dir, 'cambios-lote-635.json'), JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy, programas BOE y clasificación oficial completado para lote 635.');
