const fs = require('fs');
const path = require('path');
const assert = require('assert');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1524.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7921:['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk','ITIC Academy, bloque 39 Calidad y Mantenimiento, v2026','El bloque trata control de cambios/configuración (A1-100/A1-102 y A2-III-8); los comandos concretos de Git se verificaron en la documentación oficial de Git.'],
  7922:['https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk','ITIC Academy, Tema 37/86/88 Metodologías Ágiles y Ciclo de Vida, v2026','Cubre Scrum y gestión ágil (A1-37/A2-III-2); el propósito y timebox de Sprint Review se comprobaron en la guía Scrum oficial.'],
  7923:['https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk','ITIC Academy, bloque 3 Actuación Administrativa y Administración Digital, v2026','Cubre Ley 39/2015 y recursos administrativos (A1-8/A2-I-8); los artículos concretos se cotejaron en BOE consolidado.'],
  7924:['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque 26 Hardware, v2026','Cubre almacenamiento (A1-56/A2-IV-5); la distinción de acceso por bloques/archivos y los protocolos se verificaron además con IBM.'],
  7925:['https://drive.google.com/file/d/1CvENeoh2AelkfK8ykF9wQyp5lJj6qpNH/view?usp=drivesdk','ITIC Academy, Temas 45–46 Interoperabilidad de Sistemas, v2025','Cubre el ENI y las Normas Técnicas de Interoperabilidad (A1-46/A2-I-9); los requisitos literales de modelos XSD, guías PDF, INE y CISE se verificaron en la NTI publicada en BOE.']
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
console.log(`Cotejo curricular del lote 1524: ${log.cambios.length} preguntas; epígrafes validados con el programa oficial.`);
