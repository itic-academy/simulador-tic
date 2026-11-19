const fs = require('fs');
const path = require('path');
const assert = require('assert');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1525.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7926:['https://drive.google.com/file/d/1QOtcOOnCwv64GVg_2jkN5Yuma90Caoa_/view?usp=drivesdk','ITIC Academy, bloque 46 Redes Inalámbricas, v2026','Cubre técnicas de acceso radio y redes inalámbricas (A1-108/A2-IV-11); la característica concreta de CDMA se verificó en la UIT.'],
  7927:['https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk','ITIC Academy, bloque 41 ITIL y COBIT, v2026','Cubre ITIL 4 y el sistema de valor del servicio (A1-106); sus componentes y la transición de versión se comprobaron en PeopleCert.'],
  7928:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 6 Economía, Sociedad, Empleo y Digitalización, v2026','Cubre Agenda 2030 y ODS (A1-14/A2-I-4); el nombre y alcance del ODS 4 se comprobaron en Naciones Unidas.'],
  7929:['https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk','ITIC Academy, bloque 41 ITIL y COBIT, v2026','Cubre las cuatro dimensiones de ITIL 4 (A1-106); su enumeración y vigencia durante la transición se comprobaron en PeopleCert.'],
  7930:['https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk','ITIC Academy, bloque 3 Actuación Administrativa y Administración Digital, v2026','Cubre organización administrativa y Ley 40/2015 (A1-4/A2-I-8); los requisitos de nombramiento se verificaron en el BOE consolidado.']
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
console.log(`Cotejo curricular del lote 1525: ${log.cambios.length} preguntas; epígrafes validados con el programa oficial.`);
