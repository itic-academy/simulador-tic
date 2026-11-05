const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-740.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const docs = {
  db: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', name: 'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31/08/2026)' },
  free: { url: 'https://drive.google.com/file/d/18qm2iCLcxLReK_TkqQWIm26S38HXEDYr/view?usp=drivesdk', name: 'ITIC Academy, «Tema 069 - software libre», PDF archivado en Drive (metadatos de 2021; contenido de licencias y diferencia entre libertad y gratuidad)' }
};
const mapping = {
  4021: { a1: ['64'], a2: ['II-5'], docs: ['db'], detail: 'el bloque 29, §5.2, clasifica sentencias DDL/DML/DCL/TCL; se coteja DELETE con la SQL Language Reference vigente de Oracle.' },
  4022: { a1: ['64'], a2: ['II-5'], docs: ['db'], detail: 'el bloque 29, §9.2, trata APIs/capas de acceso a datos (ODBC/JDBC/ADO.NET/ORM); el enunciado distingue esas interfaces del propio sistema gestor y elimina el distractor erróneo DMBS.' },
  4023: { a1: ['64'], a2: ['II-5'], docs: ['db'], detail: 'el bloque 29, §5.14, incluye SQL declarativo y planes de ejecución; la distinción entre sentencia SQL y extensión procedural se contrasta con Oracle.' },
  4024: { a1: ['89'], a2: ['III-4'], docs: ['db'], detail: 'el bloque 29, §4.2, cubre entidades, relaciones y entidad débil; el criterio de identificación y dependencia se verifica con el artículo original de Chen.' },
  4025: { a1: ['69'], a2: ['II-14'], docs: ['free'], detail: 'el Tema 069 aborda software libre, propietario y licencias, y advierte que libertad no significa gratuidad; la comparación de costes se formula de nuevo con coste total y fuentes públicas actuales.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = mapping[c.id];
  assert.ok(q?.revision && q.clasificacion && m, `Falta pregunta/cotejo ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial desconocido: ${id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  q.clasificacion.bloque_academia = `${m.docs.map(d => docs[d].name).join('; ')}; ${m.detail} Correspondencia curricular contrastada con convocatoria A1 GSI 2025, anexo I (tema(s) ${m.a1.join(', ')}), y A2 GSI 2025, anexo IX (tema(s) ${m.a2.join(', ')}).`;
  q.clasificacion.nota = 'Cotejo curricular temático documentado; las respuestas se justifican con fuentes técnicas primarias y oficiales enlazadas en cada pregunta.';
  q.revision.observaciones += ` ${q.clasificacion.bloque_academia}`;
  for (const d of m.docs.map(x => docs[x])) if (!q.revision.fuentes.some(f => f.url === d.url)) q.revision.fuentes.push({ url: d.url, referencia: `${d.name}; cotejo curricular temático directo en Drive.` });
  for (const f of [
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico y clasificación oficial aplicado a IDs 4021–4025.');
