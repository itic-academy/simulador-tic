const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1509.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7846: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026', 'Cotejo con el epígrafe A1-68, entorno de desarrollo PHP, y A2-II-3, características de lenguajes de programación; las reglas precisas sobre variables se confirman en el manual PHP.'],
  7847: ['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', 'ITIC Academy, bloque 33 E-learning y GIS, versión 2026', 'Cubre conceptos, herramientas, sistemas de implantación y normalización del e-learning (A1-73); los requisitos de instalación de Moodle se verifican en la documentación oficial.'],
  7848: ['https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026', 'Cotejo con SGBD/optimización en A1-63 y A2-II-5. La aplicación de reglas heurísticas en optimizadores se contrasta con investigación académica sobre sistemas expertos y optimización de consultas.'],
  7849: ['https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026', 'Cubre certificados e identificación/firma electrónica (A1-80/81); se mantiene separado el dato histórico del DNIe 3.0 de los modelos y certificados vigentes actuales.'],
  7850: ['https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026', 'Incluye ciencia de datos, analítica y minería de datos de A1-71/A2-III-15; la definición se contrasta con NIST y documentación técnica de Oracle.']
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
console.log('Cotejo curricular en Drive y convocatorias A1/A2 incorporado para lote 1509.');
