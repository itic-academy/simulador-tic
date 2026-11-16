const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1504.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7821: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1', 'Incluye desarrollo web front-end, frameworks y desarrollo en servidor (A1-65/A2-III-12); la diferencia de producto/plataforma se comprueba con documentación de Spring y Angular.'],
  7822: ['https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk', 'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2', 'Cubre el RD 311/2022, sus principios y requisitos mínimos (A1-48/A2-I-9); el artículo 12.6.h se verifica con el BOE consolidado.'],
  7823: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', 'ITIC Academy, bloque 27 Sistemas operativos, temas 59–62, versión 2026.1', 'Cubre los sistemas UNIX/Linux y sus interfaces (A1-60/A2-II-2); el significado histórico de SVID se comprueba con la documentación original de AT&T.'],
  7824: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', 'ITIC Academy, bloque 42 Redes, versión 2026.1', 'Incluye ATM en redes de transporte (A1-113) y tecnologías WAN (A2-IV-10); la clase de tráfico se verifica con ATM Forum/ETSI.'],
  7825: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1', 'Cubre entorno Java y persistencia (A1-67/A2-III-10); la semántica de CallableStatement y múltiples ResultSet se confirma con la API Java SE 26.']
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const convocation = {
  A1: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  A2: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
};
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  assert.ok(q?.revision, `Falta revisión ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  const [url, title, detail] = docs[c.id];
  q.revision.fuentes = q.revision.fuentes.filter(x => !x.referencia.startsWith('Cotejo curricular:') && !x.referencia.startsWith('Convocatoria oficial A1 BOE-') && !x.referencia.startsWith('Convocatoria oficial A2 BOE-'));
  q.revision.fuentes.push(
    { url, referencia: `Cotejo curricular: ${title}. ${detail}` },
    { url: convocation.A1, referencia: `Convocatoria oficial A1 BOE-A-2025-25938; epígrafe(s): ${q.clasificacion.A1.join(', ')}.` },
    { url: convocation.A2, referencia: `Convocatoria oficial A2 BOE-A-2025-26262; epígrafe(s): ${q.clasificacion.A2.join(', ')}.` }
  );
  q.revision.observaciones = `${q.revision.observaciones.split(' Cotejo curricular:')[0]} Cotejo curricular: ${title}. ${detail}`;
  q.comentarios = `${q.comentarios.split(' Cotejo curricular:')[0]} Cotejo curricular: ${title}. ${detail}`.trim();
  q.clasificacion.bloque_academia = title.replace('ITIC Academy, ', '');
  q.clasificacion.nota = `Cotejo curricular: ${detail}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular de Drive y convocatorias A1/A2 incorporado para lote 1504.');
