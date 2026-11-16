const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1483.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));

const docs = {
  7716: [{ url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026.1', detail: 'Se coteja IEEE 802.11, autenticación y seguridad Wi-Fi; el material actualizado estudia WPA3. Correspondencia oficial: A1-114 y A2-IV-11.' }],
  7717: [{ url: 'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk', title: 'ITIC Academy, bloque 15 Metodologías ágiles y modelos de ciclo de vida, versión 2026.1', detail: 'El programa incluye expresamente los modelos de ciclo de vida y el tema de examen sobre ciclo de vida; el modelo espiral se contrasta con Boehm. Correspondencia oficial: A1-86 y A2-III-1.' }],
  7718: [{ url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1', detail: 'Incluye técnicas criptográficas y sus fundamentos, adecuados para distinguir criptoanálisis de criptografía y de técnicas concretas de ataque. Correspondencia oficial: A1-79 y A2-IV-12.' }],
  7719: [{ url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1', detail: 'Cotejo con SGBD, arquitectura ANSI/SPARC y catálogo/diccionario de metadatos. Correspondencia oficial: A1-63 y A2-II-5.' }],
  7720: [{ url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', title: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1', detail: 'Cotejo con el modelo entidad-relación, modelado conceptual, relaciones y cardinalidad. Correspondencia oficial: A1-89 y A2-III-4.' }]
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const a1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const a2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';

assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  assert.ok(q?.revision, `Falta revisión ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  assert.ok(docs[c.id]?.length, `Falta cotejo académico ${c.id}`);
  const prior = q.revision.observaciones.split(' Cotejo curricular:')[0];
  const comments = q.comentarios.split(' Cotejo curricular:')[0];
  const notes = [];
  q.revision.fuentes = q.revision.fuentes.filter(x => !x.referencia.startsWith('Cotejo curricular:') && !x.referencia.startsWith('Convocatoria oficial A1 BOE-') && !x.referencia.startsWith('Convocatoria oficial A2 BOE-'));
  for (const d of docs[c.id]) {
    const note = `${d.title}. ${d.detail}`;
    notes.push(note);
    q.revision.fuentes.push({ url: d.url, referencia: `Cotejo curricular: ${note}` });
  }
  q.revision.fuentes.push(
    { url: a1, referencia: `Convocatoria oficial A1 BOE-A-2025-25938; epígrafes: ${q.clasificacion.A1.join(', ') || 'sin tema A1 específico'}.` },
    { url: a2, referencia: `Convocatoria oficial A2 BOE-A-2025-26262; epígrafes: ${q.clasificacion.A2.join(', ') || 'sin tema A2 específico'}.` }
  );
  q.revision.observaciones = [prior, ...notes].filter(Boolean).join(' Cotejo curricular: ');
  q.comentarios = `${comments} Cotejo curricular: ${notes.join(' ')}`;
  q.clasificacion.bloque_academia = docs[c.id].map(d => d.title.replace('ITIC Academy, ', '')).join(' + ');
  q.clasificacion.nota = `Cotejo curricular completado: ${notes.join(' ')}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular con ITIC Academy y programas oficiales A1/A2 añadido a cinco preguntas.');
