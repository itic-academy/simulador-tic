const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-738.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const docs = {
  db: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', name: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)' },
  bi: { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', name: 'ITIC Academy, bloque 34 «Business Intelligence y Big Data», versión 2026.1 (16/09/2026)' },
  maintenance: { url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', name: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026.1 (23/09/2026)' }
};
const mapping = {
  4011: { a1: ['101'], a2: ['III-8'], docs: ['maintenance'], detail: 'el bloque aborda mantenimiento, análisis de cambios y mantenibilidad, en correspondencia con los temas oficiales sobre mantenimiento de sistemas.' },
  4012: { a1: ['64'], a2: ['II-5'], docs: ['db'], detail: 'el bloque 29 desarrolla el modelo relacional y contiene el apartado §2.5 «Reglas de Codd»; la respuesta se ha cotejado con la publicación del propio Codd.' },
  4013: { a1: ['64', '75'], a2: ['II-5', 'II-4'], docs: ['db', 'bi'], detail: 'el bloque 29 cubre SQL sobre almacenes relacionales; el bloque 34 trata OLAP. La pregunta separa ambos conceptos y evita atribuir a OLAP una aceleración universal de una sentencia SQL.' },
  4014: { a1: ['64'], a2: ['II-5'], docs: ['db'], detail: 'el bloque 29 incluye expresamente §2.4 «NULL y lógica de tres valores» y el lenguaje SQL; el resultado concreto se verifica con la documentación actual del gestor PostgreSQL.' },
  4015: { a1: ['63'], a2: ['II-5', 'IV-2'], docs: ['db'], detail: 'el bloque 29 cubre SGBD y arquitectura relacional; la definición específica de instancia se verifica con Oracle AI Database 26.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  const docsText = m.docs.map(d => docs[d].name).join('; ');
  q.clasificacion.bloque_academia = `${docsText}; ${m.detail} Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular temático documentado; la respuesta se fundamenta en las fuentes técnicas primarias enlazadas en la revisión.';
  q.revision.observaciones += ` ${q.clasificacion.bloque_academia}`;
  q.comentarios = q.revision.observaciones;
  for (const d of m.docs.map(x => docs[x])) if (!q.revision.fuentes.some(f => f.url === d.url)) q.revision.fuentes.push({ url: d.url, referencia: `${d.name}; cotejo curricular de SQL, bases de datos, OLAP o mantenimiento, según corresponda.` });
  for (const f of [
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 4011–4015.');
