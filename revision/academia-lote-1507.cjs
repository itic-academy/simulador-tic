const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1507.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7836: ['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', 'ITIC Academy, bloque 43 Protocolos, actualización 2026', 'Cubre TCP/IP e interconexión de redes en los epígrafes A1-109/A2-II-8; para el origen histórico concreto se consulta la cronología institucional de DARPA y la Internet Society.'],
  7837: ['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', 'ITIC Academy, bloque 39 Calidad y mantenimiento, versión 2026', 'Abarca el temario de evaluación de calidad del software A1-98/A2-III-13. La distinción terminológica entre portabilidad clásica e ISO/IEC 25010:2023 se verifica por separado con ISO.'],
  7838: ['https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', 'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, nuevo temario 2026', 'Se coteja con el epígrafe A1-70, que incluye sistemas expertos; los marcos/slots de representación simbólica se contrastan con la fuente académica de Knowledge Representation citada en la revisión.'],
  7839: ['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', 'ITIC Academy, bloque 43 Protocolos, actualización 2026', 'Incluye arquitectura TCP/IP, protocolos y estándares de Internet bajo A1-109/A2-II-8. La delimitación actual entre IETF y RFC Editor se contrasta con las páginas oficiales de proceso/publicación de IETF.'],
  7840: ['https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', 'ITIC Academy, bloque 25 Cloud Computing, versión 2026', 'Incluye expresamente IaaS, PaaS y SaaS y el tema A1-55/A2-II-1; la categoría de EC2 se comprueba con documentación de AWS.']
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
console.log('Cotejo curricular en Drive y convocatorias A1/A2 incorporado para lote 1507.');
