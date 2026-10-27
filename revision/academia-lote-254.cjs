const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-254.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  images: {url: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk', label: 'ITIC Academy, bloque 37 Imágenes, OCR, biometría y gestión de contenidos, versión 2026.1 (18-09-2026)'},
  os: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'},
  java: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1586: {docs: ['hardware', 'images'], detail: 'el bloque 26 trata conectividad de periféricos y el 37 tecnologías de digitalización y tratamiento de imágenes (A1-83); la clasificación de escáneres se contrasta con USGS y OCLC', topics: ['A1-83']},
  1587: {docs: ['os'], detail: 'el bloque cubre administración UNIX/Linux, autenticación y registros de sistema (A1-60 y A2-II-2); la página del comando `last(1)` precisa la consulta de intentos fallidos en `btmp`', topics: ['A1-60', 'A2-II-2']},
  1588: {docs: ['os'], detail: 'el bloque cubre Linux, sistemas de archivos y administración de dispositivos y montajes (A1-60, A2-II-2 e IV-1); las fuentes Linux documentan el montaje ISO 9660 y los dispositivos ópticos', topics: ['A1-60', 'A2-II-2', 'A2-IV-1']},
  1589: {docs: ['java'], detail: 'el bloque cubre el entorno Java (A1-67), los lenguajes y paradigmas (A2-II-3) y la arquitectura Java/Jakarta EE (A2-III-10); la JVM Specification determina la frontera entre máquina abstracta, formato de clase e implementación anfitriona', topics: ['A1-67', 'A2-II-3', 'A2-III-10']},
  1590: {docs: ['os'], detail: 'el bloque trata fundamentos, Unix/Linux y administración de sistemas operativos (A1-59/60, A2-II-2 e IV-1); la documentación del kernel define específicamente su memoria virtual y diferencia las páginas de usuario de la memoria del kernel', topics: ['A1-59', 'A1-60', 'A2-II-2', 'A2-IV-1']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  const refs = row.docs.map(key => ({url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}. Correspondencia oficial contrastada con revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. El temario de academia orienta la clasificación; las fuentes primarias técnicas sustentan las respuestas.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  question.revision.fuentes.push(...refs);
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 1586–1590.');
