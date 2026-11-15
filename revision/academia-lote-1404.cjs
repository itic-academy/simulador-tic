const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1404.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7321: { url: 'https://drive.google.com/file/d/1TCiFKKRdum7eVCEog-AOw6KgwzGp1ZP4/view?usp=drivesdk', title: 'ITIC Academy, bloque 07 Dirección pública, empleo, transparencia y unidad de mercado, versión 2026', detail: 'Incluye A1-22, calidad de los servicios públicos y modernización TIC, con apartados sobre CAF y EFQM. SERVQUAL y DMAIC se contrastan además con sus fuentes técnicas específicas.' },
  7322: { url: 'https://drive.google.com/file/d/1TCiFKKRdum7eVCEog-AOw6KgwzGp1ZP4/view?usp=drivesdk', title: 'ITIC Academy, bloque 07 Dirección pública, empleo, transparencia y unidad de mercado, versión 2026', detail: 'Cubre A1-23, «management» público y gobernanza; el apartado 4.4 describe la gobernanza y la gestión de redes. No equipara colaboración en red con supresión del Estado.' },
  7323: { url: 'https://drive.google.com/file/d/1TCiFKKRdum7eVCEog-AOw6KgwzGp1ZP4/view?usp=drivesdk', title: 'ITIC Academy, bloque 07 Dirección pública, empleo, transparencia y unidad de mercado, versión 2026', detail: 'Incluye A1-24 y un apartado A2 sobre TREBEP/empleo público; se contrasta la definición literal con el artículo 9 del texto refundido.' },
  7324: { url: 'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk', title: 'ITIC Academy, bloque 08 Protección de Datos, A1-27/82 y A2, edición 2026', detail: 'El contenido se organiza alrededor de A1-27, A1-82 y el tema A2 de protección de datos; incluye el apartado AEPD y sus autoridades. La norma y estatuto se verifican directamente en BOE.' },
  7325: { url: 'https://docs.google.com/document/d/1BRLBHuHySkuHV-P7dta8o0I_Rn6BznrB/edit?usp=drivesdk', title: 'ITIC Academy, Temas 28, 29 y 34: Organización y gestión de Sistemas de Información, edición 2026', detail: 'Cubre A1-28 y presenta el SI como conjunto organizativo de recursos humanos, datos, procedimientos manuales y automatizados, software y hardware. Su definición se corrobora con el temario técnico oficial del IGN/CNIG.' }
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
console.log('Cotejo Academy/Drive registrado para 7321–7325 con los temas oficiales A1/A2 correspondientes.');
