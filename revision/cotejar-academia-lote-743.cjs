const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-743.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const docs = {
  db: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', name: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)' },
  algo: { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', name: 'ITIC Academy, bloque 32 «Inteligencia artificial y ciencia de datos», versión 2026.1 (31/08/2026)' }
};
const mapping = {
  4036: { a1: ['64'], a2: ['II-5'], docs: ['db'], detail: 'el bloque 29, §9.2, expone SQL/CLI, ODBC y JDBC como capas/API de acceso a datos con drivers.' },
  4037: { a1: ['64'], a2: ['III-4'], docs: ['db'], detail: 'el bloque 29, §§3.1–3.2, explica dependencias funcionales y normalización; se confirma la definición de 3FN de Codd, no solo respecto a la clave primaria.' },
  4038: { a1: [], a2: ['III-5'], docs: ['algo'], detail: 'el bloque 32 incluye explícitamente A2-D5 y §2.10 «Grafos», con vértices, aristas y representaciones; el programa A1 consultado no contiene un epígrafe específico de teoría de grafos, por lo que no se asigna una etiqueta A1 forzada.' },
  4039: { a1: ['63', '64'], a2: ['II-5', 'IV-2'], docs: ['db'], detail: 'el bloque 29 cubre SGBD, SQL y administración/distribución de bases de datos; el comportamiento exacto de DATABASE LINK se contrasta con Oracle Database 26.' },
  4040: { a1: ['64'], a2: ['III-4'], docs: ['db'], detail: 'el bloque 29, §§2.1–2.2, define relación, tupla, atributo, dominio y grado; el artículo original de Codd aclara el grado n como número de dominios.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, 'Falta pregunta/cotejo ' + c.id);
  for (const id of [...m.a1.map(n => 'A1-' + n), ...m.a2.map(n => 'A2-' + n)]) assert.ok(official.has(id), 'Tema oficial desconocido: ' + id);
  q.clasificacion.A1 = m.a1.map(n => 'A1-' + n);
  q.clasificacion.A2 = m.a2.map(n => 'A2-' + n);
  q.clasificacion.bloque_academia = m.docs.map(d => docs[d].name).join('; ') + '; ' + m.detail + ' Correspondencia contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ' + m.a1.join(', ') + '), y A2 GSI 2025, anexo IX (tema(s) ' + m.a2.join(', ') + ').';
  q.clasificacion.nota = 'Cotejo curricular temático documentado; se omite la asignación A1 en 4038 al no identificarse un tema A1 específico para grafos en el anexo oficial.';
  q.revision.observaciones += ' ' + q.clasificacion.bloque_academia;
  for (const d of m.docs.map(x => docs[x])) if (!q.revision.fuentes.some(f => f.url === d.url)) q.revision.fuentes.push({ url: d.url, referencia: d.name + '; cotejo temático directo de las secciones pertinentes.' });
  for (const f of [
    { url: boeA1, referencia: 'Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ' + (m.a1.length ? m.a1.join(', ') : 'sin epígrafe específico A1 aplicable') + '.' },
    { url: boeA2, referencia: 'Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ' + m.a2.join(', ') + '.' }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 4036–4040.');
