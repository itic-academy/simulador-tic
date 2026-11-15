const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1288.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  tech: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
  oop: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
  hardware: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
  quality: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk'
};
const map = {
  6761: {a1:[69], a2:['II-14'], urls:[docs.tech], desc:'ITIC Academy, bloque 30, Tecnologías de Sistemas de Información, edición 2026.1: incluye aplicaciones web y servidores. Correspondencia oficial A1-69 (software abierto y aplicaciones en servidores web) y A2-II.14 (licencias). La familia PowerEdge se contrasta con el catálogo de Dell; el bloque académico no sustituye esa identificación.'},
  6762: {a1:[93], a2:['III-9'], urls:[docs.oop], desc:'ITIC Academy, bloque 38, análisis y diseño orientado a objetos/dominio de solución, versión 2026. Correspondencia A1-93/A2-III.9 por diseño de software y OO; el principio ISP se verifica en Robert C. Martin y documentación técnica, no se atribuye como epígrafe literal del temario.'},
  6763: {a1:[], a2:['II-7'], urls:[docs.hardware], desc:'ITIC Academy, bloque 26, servidores, virtualización y contenedores: cotejo de contexto de contenedores. Correspondencia directa A2-II.7; el epígrafe A1 no enumera orquestadores de contenedores, por lo que no se fuerza A1.'},
  6764: {a1:[96], a2:['III-7'], urls:[docs.quality], desc:'ITIC Academy, bloque 39, Calidad y Mantenimiento, versión 2026: incluye planificación, técnicas y pruebas de software. Correspondencia A1-96/A2-III.7; la definición de caja negra se valida con el syllabus oficial ISTQB.'},
  6765: {a1:[100,102], a2:['IV-4'], urls:[docs.oop], desc:'ITIC Academy, bloque 38, análisis y diseño, construcción de sistemas y control de versiones. Correspondencia A1-100/A1-102/A2-IV.4; el formato y las reglas de incremento se validan directamente con la especificación SemVer 2.0.0.'}
};
const marker = 'Cotejo curricular ITIC Academy:';
const trim = value => {
  const raw = (value || '').trim(), i = raw.indexOf(marker);
  return (i < 0 ? raw : raw.slice(0, i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/, '').trim();
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id), m = map[change.id];
  assert.ok(q && m, `Falta ID ${change.id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  const topics = [...q.clasificacion.A1, ...q.clasificacion.A2].join('/');
  q.clasificacion.bloque_academia = m.desc;
  const note = `${marker} ${m.desc} Correspondencia oficial: ${topics || 'sin epígrafe específico; no se fuerza etiqueta'}. El cotejo académico acredita contexto curricular; la conclusión técnica se contrasta con las fuentes primarias citadas.`;
  q.clasificacion.nota = `${trim(q.clasificacion.nota)} ${note}`.trim();
  q.comentarios = `${trim(q.comentarios)} ${note}`.trim();
  q.revision.observaciones = `${trim(q.revision.observaciones)} ${note}`.trim();
  const urls = new Set(m.urls);
  q.revision.fuentes = q.revision.fuentes.filter(source => !urls.has(source.url));
  for (const url of m.urls) q.revision.fuentes.push({url, referencia:`ITIC Academy/Drive: ${m.desc}`});
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular aplicado a los IDs 6761–6765.');