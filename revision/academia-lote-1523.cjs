const fs = require('fs');
const path = require('path');
const assert = require('assert');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1523.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7916:['https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk','ITIC Academy, bloque 46 Redes Inalámbricas, v2026','Correspondencia temática con las redes inalámbricas y de acceso (A1-108/A2-IV-11); la asignación de la banda EHF y la conversión de longitud de onda se verificaron en el Reglamento de Radiocomunicaciones de la UIT.'],
  7917:['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk','ITIC Academy, bloque 27 Sistemas Operativos, v2026','Cubre sistemas Linux y virtualización (A1-57/A1-60/A1-132 y A2-II-2/A2-IV-6); la denominación exacta KVM se confirmó en documentación oficial del kernel.'],
  7918:['https://drive.google.com/file/d/1dZeM6nHsrfoseFfduoy9SVCQXvAZK7OO/view?usp=drivesdk','ITIC Academy, Tema 85 Blockchain, v2025','Correspondencia directa con blockchain, consenso y redes (A1-85); PoET se documenta como implementación histórica de Sawtooth y no como estándar de uso actual predominante.'],
  7919:['https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk','ITIC Academy, bloque 8 Protección de Datos, v2026','Cubre el RGPD y sus obligaciones (A1-27/A1-82 y A2-I-7); la expresión concreta del artículo 25.1 se cotejó con el texto oficial en español de EUR-Lex.'],
  7920:['https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk','ITIC Academy, bloque 8 Protección de Datos, v2026','Cubre el RGPD y sus obligaciones (A1-27/A2-I-7); los campos del registro se verificaron específicamente contra el artículo 30.1 del texto oficial en español de EUR-Lex.']
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
console.log(`Cotejo curricular del lote 1523: ${log.cambios.length} preguntas; epígrafes validados con el programa oficial.`);
