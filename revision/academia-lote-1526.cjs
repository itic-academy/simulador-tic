const fs = require('fs');
const path = require('path');
const assert = require('assert');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1526.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7931:['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk','ITIC Academy, bloque 39 Calidad y Mantenimiento, v2026','Cubre gestión de configuración y versiones (A1-100/A1-102/A2-IV-4); los números y vigencia de las normas se comprobaron en ISO e IEEE SA.'],
  7932:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 6 Economía, Sociedad, Empleo y Digitalización, v2026','Cubre política económica europea (A1-14); los objetivos históricos de Europa 2020 se comprobaron en la comunicación de la Comisión.'],
  7933:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 6 Economía, Sociedad, Empleo y Digitalización, v2026','Cubre Unión Económica y Monetaria (A1-5); la composición actual de la zona euro se verificó en la UE y la Comisión.'],
  7934:['https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk','ITIC Academy, bloque 28 Arquitectura SOA y sistemas distribuidos, v2026.1','Cubre sistemas distribuidos, middleware y cliente-servidor (A1-58/A2-II-6); las transparencias se contrastaron con ISO/IEC y OMG.'],
  7935:['https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk','ITIC Academy, Tema 37/86/88 Metodologías Ágiles y Ciclo de Vida, v2026','Cubre Scrum (A1-37/A1-88/A2-III-2); la lista formal de eventos se verificó en la Guía Scrum oficial.']
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
console.log(`Cotejo curricular del lote 1526: ${log.cambios.length} preguntas; epígrafes validados con el programa oficial.`);
