const fs = require('fs');
const path = require('path');
const assert = require('assert');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1521.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7906:['https://drive.google.com/file/d/1dZeM6nHsrfoseFfduoy9SVCQXvAZK7OO/view?usp=drivesdk','ITIC Academy, Tema 85 Blockchain, v2025','El material trata blockchain y contratos inteligentes, correspondencia directa con A1-85; la configuración concreta de Geth se comprobó en documentación oficial actual.'],
  7907:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42 Redes, v2026','Cubre redes inalámbricas y de acceso (A1-108/A2-IV-11); la familia de estándares de WiMAX se verificó específicamente en IEEE 802.16.'],
  7908:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42 Redes, v2026','Cubre redes e infraestructuras de acceso; para la expansión normativa exacta RITI se acudió al reglamento oficial de ICT, pues no se atribuye al temario académico una cita literal no localizada.'],
  7909:['https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk','ITIC Academy, bloque 34 Business Intelligence y Big Data, v2026','El título y los contenidos localizados abordan BI/Big Data, en relación con A1-75 y A2-II-4. La definición corregida se contrastó además con IBM.'],
  7910:['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk','ITIC Academy, bloque 39 Calidad y Mantenimiento, v2026','Cubre calidad, cambios y mantenimiento (A1-96/A1-102 y A2-III-7/A2-III-8); la asignación de productos y tareas se verificó contra la guía oficial MÉTRICA v3.']
};
const calls = {A1:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', A2:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  assert.ok(q?.revision, `Falta revisión ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  const [url, title, detail] = docs[c.id];
  q.revision.fuentes = q.revision.fuentes.filter(x => !x.referencia.startsWith('Cotejo curricular:') && !x.referencia.startsWith('Convocatoria oficial A1 BOE-') && !x.referencia.startsWith('Convocatoria oficial A2 BOE-'));
  q.revision.fuentes.push({url, referencia:`Cotejo curricular: ${title}. ${detail}`}, {url:calls.A1, referencia:`Convocatoria oficial A1 BOE-A-2025-25938; epígrafe(s): ${q.clasificacion.A1.join(', ') || 'sin asignación directa'}.`}, {url:calls.A2, referencia:`Convocatoria oficial A2 BOE-A-2025-26262; epígrafe(s): ${q.clasificacion.A2.join(', ') || 'sin asignación directa'}.`});
  const originalObs = q.revision.observaciones.split(' Cotejo curricular:')[0];
  q.revision.observaciones = `${originalObs} Cotejo curricular: ${title}. ${detail}`;
  const originalComment = q.comentarios.split(' Cotejo curricular:')[0];
  q.comentarios = `${originalComment} Cotejo curricular: ${title}. ${detail}`.trim();
  q.clasificacion.bloque_academia = title;
  q.clasificacion.nota = `Cotejo curricular: ${detail}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log(`Cotejo curricular del lote 1521: ${log.cambios.length} preguntas; epígrafes validados con el programa oficial.`);
