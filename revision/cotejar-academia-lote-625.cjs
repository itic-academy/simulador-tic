const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-625.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', title: 'ITIC Academy, Bloque 27 Sistemas Operativos, versión 2026.1'},
  crypto: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, Bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1'},
  collaborative: {url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', title: 'ITIC Academy, Bloque 50 Videoconferencia, SSO y trabajo colaborativo, versión 2026.1'},
  java: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, Bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1'}
};
const mappings = {
  3441: {a1: [59], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 cubre fundamentos de sistemas operativos, concurrencia, procesos e hilos, como contexto del uso de semáforos. La semántica de espera/señalización y sincronización se verifica en las páginas de manual POSIX/Linux.'},
  3442: {a1: [80, 81], a2: ['I-6'], use: [docs.crypto], detail: 'El bloque 36 cubre certificados, infraestructura de clave pública e identidad/firma. UIT-T X.509 y RFC 5280 son las fuentes directas para distinguir el marco internacional del perfil de Internet.'},
  3443: {a1: [109], a2: ['II-16'], use: [docs.collaborative], detail: 'El bloque 50 cubre streaming, trabajo colaborativo y gestión de contenidos; la búsqueda no encontró un apartado específico sobre podcasting. La correspondencia oficial directa está en A1-109 (servicios de Internet) y A2-II-16 (sindicación de contenidos).'},
  3444: {a1: [67], a2: ['III-10'], use: [docs.java], detail: 'El bloque 30 cubre el entorno Java y la arquitectura Java EE/Jakarta EE. La función de JAR/WAR/EAR se verifica en las especificaciones y tutoriales oficiales Jakarta EE.'},
  3445: {a1: [67], a2: ['III-10'], use: [docs.java], detail: 'El bloque 30 cubre el entorno Java y el modelo de objetos usado en Java EE/Jakarta EE. La expansión histórica exacta del término se contrasta con la nota de Martin Fowler, coacuñador de POJO.'}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const examA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const examA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mappings[c.id];
  assert.ok(q?.revision && m, `Falta revisión o cotejo de ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | '), estado: 'revisada', nota: 'Correspondencia cotejada con programas A1/A2 publicados en BOE y revision/temario-oficial.json.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ')}. El material académico es contexto; la afirmación se acredita con normas/documentos técnicos citados.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I, consultada el 30-10-2026; el tema asignado se cotejó con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX, consultada el 30-10-2026; el tema asignado se cotejó con revision/temario-oficial.json.'});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con materiales ITIC Academy, programas oficiales A1/A2 y convocatorias BOE.');
