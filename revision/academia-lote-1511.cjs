const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1511.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7856: ['https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', 'ITIC Academy, bloque 29, Bases de Datos, SQL y Modelado de Datos, edición 2026', 'El material cubre SGBD y modelo relacional/reglas de Codd; correspondencia A1-63/A1-64 y A2-II-5. Los nombres de las reglas se verifican con la fuente de Codd/Computerworld.'],
  7857: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', 'ITIC Academy, bloque 27, Sistemas Operativos, versión 2026 actualizada', 'Cubre administración de sistemas Microsoft y servicios de red, con encaje A1-61/A2-II-2 y A2-IV-1. El comportamiento exacto de loopback, Merge y Replace se verifica en Microsoft Learn.'],
  7858: ['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', 'ITIC Academy, bloque 33, E-learning y Sistemas de Información Geográfica, edición 2026.1', 'El apartado de estándares e interoperabilidad de contenidos de e-learning incluye SCORM y especificaciones relacionadas; encaje A1-73/A2-III-6. El estado y el alcance de cada organismo/especificación se cotejan en ADL, 1EdTech e índice AICC.'],
  7859: ['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', 'ITIC Academy, bloque 33, E-learning y Sistemas de Información Geográfica, edición 2026.1', 'Cotejo curricular de calidad y servicios de formación virtual; encaje A1-73/A2-III-6. La vigencia y cancelación de versiones de UNE se comprueban directamente en el catálogo de AENOR, no se deducen del manual.'],
  7860: ['https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', 'ITIC Academy, bloque 50, Videoconferencia, SSO y trabajo colaborativo, edición 2026.1', 'El apartado de gestión documental y formatos aporta el contexto curricular; encaje A1-83/A2-II-16. La naturaleza de PostScript como lenguaje de descripción de páginas se contrasta con Adobe.']
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = { A1: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', A2: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262' };
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  assert.ok(q?.revision, `Falta revisión ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  const [url, title, detail] = docs[c.id];
  q.revision.fuentes = q.revision.fuentes.filter(x => !x.referencia.startsWith('Cotejo curricular:') && !x.referencia.startsWith('Convocatoria oficial A1 BOE-') && !x.referencia.startsWith('Convocatoria oficial A2 BOE-'));
  q.revision.fuentes.push(
    { url, referencia: `Cotejo curricular: ${title}. ${detail}` },
    { url: calls.A1, referencia: `Convocatoria oficial A1 BOE-A-2025-25938; epígrafe(s): ${q.clasificacion.A1.join(', ') || 'sin asignación directa'}.` },
    { url: calls.A2, referencia: `Convocatoria oficial A2 BOE-A-2025-26262; epígrafe(s): ${q.clasificacion.A2.join(', ') || 'sin asignación directa'}.` }
  );
  const beforeObs = q.revision.observaciones.split(' Cotejo curricular:')[0];
  const beforeComments = q.comentarios.split(' Cotejo curricular:')[0];
  q.revision.observaciones = `${beforeObs} Cotejo curricular: ${title}. ${detail}`;
  q.comentarios = `${beforeComments} Cotejo curricular: ${title}. ${detail}`.trim();
  q.clasificacion.bloque_academia = title;
  q.clasificacion.nota = `Cotejo curricular: ${detail}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular individual con Drive y convocatorias incorporado para el lote 1511.');
