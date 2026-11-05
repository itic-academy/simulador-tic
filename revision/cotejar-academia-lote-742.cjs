const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-742.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const course = { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', name: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)' };
const mapping = {
  4031: { a1: ['64'], a2: ['II-5'], detail: 'el bloque 29 cubre claves e integridad del modelo relacional (§§2.2–2.3) y sentencias SQL; el cotejo identifica la FOREIGN KEY como constraint referencial.' },
  4032: { a1: ['64'], a2: ['II-5'], detail: 'el bloque 29, §§5.1–5.2, presenta SQL y distingue DDL, DML, DCL y TCL.' },
  4033: { a1: ['64'], a2: ['II-5'], detail: 'el bloque 29, §3.4, identifica los cinco operadores primitivos y deriva la intersección mediante diferencia.' },
  4034: { a1: ['63', '64'], a2: ['II-5'], detail: 'el bloque 29, §§5.1–5.2, diferencia la definición de objetos del esquema de las operaciones sobre los datos, sin trasladar indebidamente la distinción a niveles ANSI/SPARC.' },
  4035: { a1: ['64', '75'], a2: ['II-4', 'II-5'], detail: 'el bloque 29, §5.11 y §10.1, cubre objetos programables/materializados y almacenes analíticos; la diferencia entre almacenar resultados y solo guardar una consulta se verifica con Oracle y PostgreSQL.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, 'Falta pregunta/cotejo ' + c.id);
  for (const id of [...m.a1.map(n => 'A1-' + n), ...m.a2.map(n => 'A2-' + n)]) assert.ok(official.has(id), 'Tema oficial desconocido: ' + id);
  q.clasificacion.A1 = m.a1.map(n => 'A1-' + n);
  q.clasificacion.A2 = m.a2.map(n => 'A2-' + n);
  q.clasificacion.bloque_academia = course.name + '; ' + m.detail + ' Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ' + m.a1.join(', ') + '), y A2 GSI 2025, anexo IX (tema(s) ' + m.a2.join(', ') + ').';
  q.clasificacion.nota = 'Cotejo curricular temático documentado; la respuesta se fundamenta en las fuentes técnicas primarias y oficiales enlazadas en cada pregunta.';
  q.revision.observaciones += ' ' + q.clasificacion.bloque_academia;
  for (const f of [
    { url: course.url, referencia: course.name + '; cotejo curricular directo de modelo relacional, integridad, álgebra, SQL, DDL/DML y vistas materializadas.' },
    { url: boeA1, referencia: 'Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ' + m.a1.join(', ') + '.' },
    { url: boeA2, referencia: 'Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ' + m.a2.join(', ') + '.' }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 4031–4035.');
