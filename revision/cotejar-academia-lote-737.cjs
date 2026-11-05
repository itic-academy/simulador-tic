const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-737.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const docs = {
  quality: { url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', name: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1 (23/09/2026)' }
};
const mapping = {
  4006: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 incluye mantenimiento de sistemas, tipos de mantenimiento y cambios del aplicativo; la delimitación por cambio normativo coincide con el caso expresamente tipificado en el convenio BOE citado.' },
  4007: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 incorpora ISO/IEC/IEEE 14764:2022 como referencia vigente para el mantenimiento; la pregunta se ha actualizado para emplear su definición de mantenimiento preventivo.' },
  4008: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 aborda mantenimiento y pruebas; el epígrafe de MÉTRICA v3 MSI 3.3 en la fuente primaria citada explica el efecto onda y las pruebas de regresión.' },
  4009: { a1: ['98'], a2: ['III-13'], detail: 'El bloque 39 incluye los modelos de calidad y métricas, el modelo vigente ISO/IEC 25010:2023 y su evolución desde modelos anteriores; la pregunta distingue expresamente la lista histórica de ISO/IEC 9126-1:2001.' },
  4010: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 dedica un apartado al estándar de mantenimiento ISO/IEC/IEEE 14764:2022 y lo distingue del modelo de calidad ISO/IEC 25010:2023.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${docs.quality.name}; ${m.detail} Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular temático documentado; la respuesta se vincula a la fuente primaria indicada en la revisión.';
  q.revision.observaciones += ` ${q.clasificacion.bloque_academia}`;
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(f => f.url === docs.quality.url)) q.revision.fuentes.push({ url: docs.quality.url, referencia: `${docs.quality.name}; cotejo curricular de mantenimiento y calidad.` });
  for (const f of [
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 4006–4010.');
