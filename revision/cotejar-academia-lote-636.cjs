const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const dir = __dirname;
const bankPath = path.join(dir, '..', 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(dir, 'cambios-lote-636.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  networks: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, versión 2026.1'},
  protocols: {url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', title: 'ITIC Academy, bloque 43 Protocolos, versión 2026.1'},
  databases: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1'},
  images: {url: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk', title: 'ITIC Academy, bloque 37 Tratamiento de imágenes, OCR, biometría y gestión de contenidos, versión 2026.1'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', title: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1'},
  systems: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'}
};
const mappings = {
  3496: {a1: [109], a2: ['II-8'], use: [docs.networks, docs.protocols], detail: 'Los bloques 42/43 cubren Internet y protocolos TCP/IP, direccionamiento y transporte; A2-II-8 corresponde al temario oficial de TCP/IP, interfaces, protocolos y direccionamiento.'},
  3497: {a1: [64], a2: ['II-5'], use: [docs.databases], detail: 'El bloque 29 cubre el lenguaje SQL y los SGBD en A1-64 y A2-T5, normalizado como A2-II-5; la variación de clasificación DCL según gestor se contrasta con IBM y Oracle.'},
  3498: {a1: [83], a2: [], use: [docs.images], detail: 'El bloque 37 encuadra el tratamiento/digitalización de imágenes y sus parámetros en A1-83. El material no aporta un epígrafe A2 directo para el cálculo de resolución visual, por lo que A2 queda sin asignar.'},
  3499: {a1: [53, 57], a2: ['II-1', 'IV-6'], use: [docs.hardware], detail: 'El bloque 26 incluye servidores y escalabilidad/virtualización (A1-53/57; A2-T1/C6, normalizados A2-II-1/IV-6); la distinción scale-up/scale-out se fundamenta en Microsoft Learn.'},
  3500: {a1: [72], a2: ['II-12'], use: [docs.systems], detail: 'El bloque 30 identifica los sistemas CRM dentro de A1-72. El tema A2-II-12 oficial comprende gestión de atención a clientes y CRM; la guía académica de este bloque no enumera ese epígrafe A2, así que se deja constancia de que la correspondencia A2 procede del programa BOE, no de ese material.'}
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
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: `${m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | ')}`, estado: 'revisada', nota: 'Correspondencia cotejada con programas oficiales BOE y revision/temario-oficial.json; se distingue la cobertura académica que se localizó.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ') || 'sin asignación A2 directa'}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; epígrafes cotejados con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; epígrafes cotejados con revision/temario-oficial.json. Una relación curricular no se atribuye al material académico si no aparece allí.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy, programas BOE y clasificación oficial completado para lote 636.');
