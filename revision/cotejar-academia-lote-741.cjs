const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-741.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const course = { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', name: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)' };
const mapping = {
  4026: { a1: ['64'], a2: ['III-4'], detail: 'el bloque 29 cubre normalización y diseño lógico en §§3.1–3.8; §4 separa las fases conceptual, lógica y física.' },
  4027: { a1: ['63', '64'], a2: ['II-5', 'IV-2'], detail: 'el bloque 29 trata SGBD, SQL/objetos programables y administración de bases de datos; el ejemplo concreto de sintaxis se contrasta con Oracle Database 26.' },
  4028: { a1: ['64'], a2: ['III-4'], detail: 'el bloque 29, §3.2, presenta 1FN–3FN y BCNF; la formulación de 3FN se comprueba con el texto original de Codd.' },
  4029: { a1: ['64'], a2: ['III-4'], detail: 'el bloque 29, §2.1, estudia relación y tupla y distingue modelo relacional matemático de tablas SQL; se comprueba con la definición original de Codd.' },
  4030: { a1: ['64'], a2: ['III-4'], detail: 'el bloque 29, §§3.1–3.2, desarrolla dependencias funcionales y 2FN; la definición se comprueba con el texto original de Codd.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, 'Falta pregunta/cotejo ' + c.id);
  for (const id of [...m.a1.map(n => 'A1-' + n), ...m.a2.map(n => 'A2-' + n)]) assert.ok(official.has(id), 'Tema oficial desconocido: ' + id);
  q.clasificacion.A1 = m.a1.map(n => 'A1-' + n);
  q.clasificacion.A2 = m.a2.map(n => 'A2-' + n);
  q.clasificacion.bloque_academia = course.name + '; ' + m.detail + ' Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ' + m.a1.join(', ') + '), y A2 GSI 2025, anexo IX (tema(s) ' + m.a2.join(', ') + ').';
  q.clasificacion.nota = 'Cotejo curricular temático documentado; las respuestas se fundamentan en las fuentes técnicas primarias y oficiales enlazadas en cada pregunta.';
  q.revision.observaciones += ' ' + q.clasificacion.bloque_academia;
  for (const f of [
    { url: course.url, referencia: course.name + '; cotejo directo de los apartados de normalización, relaciones, funciones/procedimientos y fases del diseño de bases de datos.' },
    { url: boeA1, referencia: 'Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ' + m.a1.join(', ') + '.' },
    { url: boeA2, referencia: 'Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ' + m.a2.join(', ') + '.' }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 4026–4030.');
