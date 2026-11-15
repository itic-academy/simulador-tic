const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1403.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7316: { url: 'https://drive.google.com/file/d/1TCiFKKRdum7eVCEog-AOw6KgwzGp1ZP4/view?usp=drivesdk', title: 'ITIC Academy, bloque 07 Dirección pública, empleo, transparencia y unidad de mercado, versión 2026', detail: 'El bloque correspondiente a A1-22 incluye una sección sobre TIC y Administración digital y relaciona las Leyes 39/2015 y 40/2015 con el RD 203/2021. Se usa como encaje curricular general; la fecha se verifica con el BOE.' },
  7317: { url: 'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk', title: 'ITIC Academy, bloque 02 Unión Europea, versión 2026.2', detail: 'El bloque identifica expresamente el tema A1-5 sobre Unión Europea, tratados, derecho e instituciones; declara que el tema no aplica al programa A2.' },
  7318: { url: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk', title: 'ITIC Academy, bloque 06 Economía, sociedad, empleo y transformación digital, edición 2026', detail: 'El documento identifica A1-17 y contiene apartados sobre mercado de trabajo y empleo; trata magnitudes laborales. La relación conceptual NAIRU/inflación se apoya además en la fuente OCDE.' },
  7319: { url: 'https://drive.google.com/file/d/1TCiFKKRdum7eVCEog-AOw6KgwzGp1ZP4/view?usp=drivesdk', title: 'ITIC Academy, bloque 07 Dirección pública, empleo, transparencia y unidad de mercado, versión 2026', detail: 'El contenido de A1-22 incluye administración digital y recoge CIRCE/DUE, la Ley 14/2013 y la Ley 18/2022 para emprendimiento y creación/crecimiento de empresas. La lista actual de formas tramitables se contrasta con PAE Electrónico.' },
  7320: { url: 'https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk', title: 'ITIC Academy, bloque 49 Normas reguladoras de las telecomunicaciones, versión 2026.1', detail: 'El documento se corresponde con A1-129 y actualiza el marco europeo y nacional de telecomunicaciones; la identidad y funciones institucionales concretas de BEREC se comprueban en el Reglamento (UE) 2018/1971.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id);
  assert.ok(q?.revision, `Falta revisión ${change.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema oficial inválido: ${id}`);
  const doc = docs[change.id];
  const note = `Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
  q.clasificacion.bloque_academia = note;
  q.clasificacion.nota = `${q.clasificacion.nota} ${note}`.trim();
  q.comentarios = `${q.comentarios} ${note}`.trim();
  q.revision.observaciones = `${q.revision.observaciones} ${note}`.trim();
  q.revision.fuentes.push({ url: doc.url, referencia: `${doc.title}; cotejo: ${doc.detail}` });
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo Academy/Drive registrado para 7316–7320 con los temas oficiales A1/A2 correspondientes.');
