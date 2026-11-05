const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-733.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = { url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', name: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1 (23/09/2026)' };
const mapping = {
  3986: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39, §8, trata el mantenimiento de software y actualiza la referencia a ISO/IEC/IEEE 14764:2022. La respuesta se contrasta con el propósito expresado por la norma, no con una afirmación académica de que todos los sistemas requieran cambios periódicos.' },
  3987: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 explica los tipos de mantenimiento de MÉTRICA v3 y su relación con el proceso MSI; la exclusión concreta de adaptativo y perfectivo se coteja con la metodología oficial.' },
  3988: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 recoge mantenimiento y optimización de rendimiento; la definición precisa de MÉTRICA v3 distingue perfectivo de adaptativo y evolutivo.' },
  3989: { a1: ['101'], a2: ['III-8'], detail: 'El bloque 39 incluye mantenimiento preventivo y declara como referencia vigente ISO/IEC/IEEE 14764:2022; la definición de defecto latente se contrasta con la vista de la norma.' },
  3990: { a1: ['88'], a2: ['III-6'], detail: 'El bloque 38, §11.2, incluye CASE e ingeniería inversa entre las herramientas y actividades de construcción. La clasificación concreta usada en el ítem se acota a NBS FIPS PUB 99, no se atribuye al material académico.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${academy.name}; ${m.detail} Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular temático documentado; las referencias técnicas primarias de la edición o taxonomía citada fundamentan la respuesta.';
  q.revision.observaciones += ` ${q.clasificacion.bloque_academia}`;
  q.comentarios = q.revision.observaciones;
  if (!q.revision.fuentes.some(f => f.url === academy.url)) q.revision.fuentes.push({ url: academy.url, referencia: `${academy.name}; cotejo curricular del apartado de mantenimiento.` });
  for (const f of [
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 3986–3990.');
