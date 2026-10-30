const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-624.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', title: 'ITIC Academy, Bloque 27 Sistemas Operativos, versión 2026.1'},
  warehouse: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, Bloque 34 Business Intelligence y Big Data, versión 2026.1'},
  crypto: {url: 'https://drive.google.com/file/d/1e63zmnn7AdxZtHG6iIfiqbGqH7l7fjP6/view?usp=drivesdk', title: 'ITIC Academy, Bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1'},
  security: {url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', title: 'ITIC Academy, Bloque 48 Seguridad en redes y nivel de aplicación, versión 2026.1'},
  gis: {url: 'https://docs.google.com/document/d/13sxQ3m8eNgg-dLxtbUHY9AzXaEnJtyyN/edit?usp=drivesdk', title: 'ITIC Academy, Tema 074 — Sistemas de Información Geográfica'}
};
const mappings = {
  3436: {a1: [60], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 cubre administración UNIX/Linux, permisos y gestión de cuentas, como contexto del sistema operativo. La distinción exacta entre /etc/passwd y los campos de envejecimiento de /etc/shadow se verifica en la página de manual Linux shadow(5).'},
  3437: {a1: [75], a2: ['II-4'], use: [docs.warehouse], detail: 'El bloque 34 aborda data warehouse y business intelligence y alinea su contenido con A1-75 y A2-II-4. La atribución y las cuatro propiedades de Inmon se comprueban además en documentación Oracle que cita su obra.'},
  3438: {a1: [79, 80], a2: ['IV-12'], use: [docs.crypto, docs.security], detail: 'El bloque 36 cubre cifrado asimétrico y claves públicas/privadas; el bloque 48 contextualiza técnicas criptográficas en seguridad de redes. La regla de confidencialidad se verifica con NIST, no con el material académico.'},
  3439: {a1: [60], a2: ['II-2'], use: [docs.os], detail: 'El bloque 27 trata Unix/Linux, procesos y administración de sistemas. La utilidad ps se verifica con su descripción de estado de procesos en la interfaz POSIX documentada por Linux man-pages.'},
  3440: {a1: [74], a2: [], use: [docs.gis], detail: 'El Tema 074 de ITIC Academy trata SIG y el modelo vectorial. El cotejo del programa GSI A2 no halló un epígrafe directo sobre SIG; se mantiene únicamente el tema A1-74 en lugar de forzar una clasificación A2.'}
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
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | '), estado: 'revisada', nota: 'Correspondencia cotejada con programas A1/A2 publicados en BOE y revision/temario-oficial.json; una correspondencia no directa se declara expresamente.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ') || 'A1-74; no se encontró correspondencia A2 directa'}. El material académico sirve de encuadre, no sustituye la fuente técnica.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: `Convocatoria BOE-A-2025-25938, programa A1 del anexo I, consultada el 30-10-2026; el tema citado se cotejó con revision/temario-oficial.json.`});
  q.revision.fuentes.push({url: examA2, referencia: `Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX, consultada el 30-10-2026; para este ítem se registra la correspondencia directa solo si existe, sin asignar un tema A2 por analogía.`});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejadas cinco preguntas con Drive, temas oficiales A1/A2 y convocatorias BOE.');
