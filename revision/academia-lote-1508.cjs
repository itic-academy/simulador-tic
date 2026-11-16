const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1508.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7841: ['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', 'ITIC Academy, bloque 33 E-learning y GIS, versión 2026', 'El temario oficial del bloque recoge A1-73 sobre e-learning; la especificación xAPI se contrasta directamente con ADL.'],
  7842: ['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk', 'ITIC Academy, bloque 03 Actuación administrativa y Administración digital, versión 2026', 'Este bloque desarrolla las Leyes 39/2015 y 40/2015 y los temas de administración digital; el artículo 42 de la Ley 40/2015 y el ámbito A2-I-9 fundamentan la pregunta.'],
  7843: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026', 'Se coteja solo como material general de lenguajes y tecnologías de programación; no se localizó en Drive un desarrollo académico específico de Python. La clasificación precisa de esta pregunta es A2-II-3.'],
  7844: ['https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026', 'Cubre criptografía de clave pública, certificados y firma en A1-79–81/A2-IV-12; los formatos PKCS concretos se verifican en los RFC.'],
  7845: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026', 'Incluye explícitamente A1-77 HTML/XML y tecnologías web; el comportamiento bitmap de canvas se comprueba con documentación del estándar y MDN.']
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
    { url: convocation.A1, referencia: `Convocatoria oficial A1 BOE-A-2025-25938; epígrafe(s): ${q.clasificacion.A1.join(', ') || 'sin correspondencia A1 directa'}.` },
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
console.log('Cotejo curricular en Drive y convocatorias A1/A2 incorporado para lote 1508.');
