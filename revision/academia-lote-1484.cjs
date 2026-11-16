const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1484.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));

const docs = {
  7721: [{ url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', title: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026.1', detail: 'Cotejo de GSM, acceso radio, TDMA, salto de frecuencia y DTX en el bloque de redes inalámbricas y comunicaciones móviles. Correspondencia oficial: A1-123 y A2-IV-15.' }],
  7722: [{ url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1', detail: 'Cotejo de PKI, certificados, claves y mecanismos de identidad/firma. El formato preciso de CSR se verifica aparte en RFC 2986. Correspondencia oficial: A1-80/A1-81 y A2-I-6.' }],
  7723: [{ url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1', detail: 'Cotejo curricular parcial: el bloque desarrolla XML y lenguajes de marcado; en la búsqueda de los materiales accesibles no se localizó una unidad Academy específica de VoiceXML/IVR. Esa correspondencia concreta sí aparece en el programa oficial A2-II-12; VoiceXML también se clasifica en A1-77/A2-II-9 por su base de marcado XML.' }],
  7724: [{ url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', title: 'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas de información, versión 2026.1', detail: 'Cotejo con análisis estructurado, DFD y metodología MÉTRICA; el balanceo de la descomposición se verifica en la Guía oficial de Técnicas de MÉTRICA v3. Correspondencia oficial: A1-90/A1-95 y A2-III-2.' }],
  7725: [{ url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', title: 'ITIC Academy, bloque 27 Sistemas operativos, versión 2026.1', detail: 'Cotejo con fundamentos de sistemas operativos y algoritmos de planificación de CPU; la diferencia entre equidad y prioridades se explica con documentación vigente del kernel Linux. Correspondencia oficial: A1-59 y A2-II-2.' }]
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
