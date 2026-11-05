const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-739.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const db = { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', name: 'ITIC Academy, bloque «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)' };
const mapping = {
  4016: { a1: ['64'], a2: ['II-5'], detail: 'el bloque 29, §§2.1–2.2, desarrolla relación, atributo, dominio y claves; el artículo original de Codd se usa para precisar nombres/roles y dominios.' },
  4017: { a1: ['89'], a2: ['III-4'], detail: 'el bloque 29, §4.2, identifica asociaciones recursivas junto a las binarias/ternarias; el artículo original de Chen documenta roles y relaciones sobre el mismo tipo de entidad.' },
  4018: { a1: ['63', '64'], a2: ['II-5', 'IV-2'], detail: 'el bloque 29 cubre SGBD, SQL y administración; la regla exacta de concesión se contrasta con Oracle AI Database 26, no con la simplificación académica.' },
  4019: { a1: ['64'], a2: ['II-5'], detail: 'el bloque 29, §3.4, enumera los cinco operadores primitivos, trata la intersección como derivada y da R ∩ S = R − (R − S).' },
  4020: { a1: ['64'], a2: ['III-4'], detail: 'el bloque 29, §§3.1–3.2, trata dependencias funcionales y normalización 1FN–3FN; la definición concreta se contrasta con el artículo de Codd de 1971.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${db.name}; ${m.detail} Correspondencia curricular contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular temático documentado; la respuesta se sustenta en las fuentes técnicas primarias enlazadas en la revisión.';
  q.revision.observaciones += ` ${q.clasificacion.bloque_academia}`;
  for (const f of [
    { url: db.url, referencia: `${db.name}; cotejo directo del bloque temático correspondiente a modelo relacional, modelado ER, privilegios, álgebra o normalización.` },
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 4016–4020.');
