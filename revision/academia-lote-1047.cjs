const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1047.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const mappings = {
  5556: ['https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk', 'bloque 37, imágenes y OCR; correspondencia curricular A1-83.'],
  5557: ['https://drive.google.com/file/d/1D62OE6Sw-ZB46S_2tvGophVTKgS3ip22/view?usp=drivesdk', 'bloque 15, ciclo de vida y metodologías; correspondencia curricular A1-86/A2-III-2.'],
  5558: ['https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', 'bloque 38, análisis y diseño orientado a objetos; correspondencia A1-93/A2-III-9.'],
  5559: ['https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', 'bloque 38, análisis estructurado y métodos; la academia solo orienta el temario, no resuelve la falta de fuente primaria de MÉTRICA 2.1.'],
  5560: ['https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', 'bloque 38, análisis/modelado de procesos y DFD; correspondencia A1-90/A1-95/A2-III-2/III-3.']
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const [url, description] = mappings[c.id];
  const topics = [...q.clasificacion.A1, ...q.clasificacion.A2].join('/');
  const ref = `ITIC Academy 2026, ${description}`;
  q.clasificacion.bloque_academia = description;
  q.clasificacion.nota = `Cotejo curricular con Drive: ${description} Temas oficiales asociados: ${topics}. La academia no sustituye fuentes técnicas primarias.`;
  q.comentarios = `${q.comentarios || ''} ${q.clasificacion.nota}`.trim();
  q.revision.observaciones = `${q.revision.observaciones} ${q.clasificacion.nota}`;
  q.revision.fuentes.push({url, referencia: ref});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive añadido a las cinco preguntas del lote 1047.');
