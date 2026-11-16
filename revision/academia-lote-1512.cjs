const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1512.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7861: ['https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', 'ITIC Academy, bloque 33, E-learning y Sistemas de Información Geográfica, edición 2026.1', 'El apartado de estándares e interoperabilidad de contenidos trata especificaciones de e-learning, incluido SCORM; encaje A1-73/A2-III-6. ADL diferencia el estándar de la iniciativa que lo mantiene.'],
  7862: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', 'ITIC Academy, bloque 27, Sistemas Operativos, versión 2026.1 (14/08/2026)', 'Cubre administración Microsoft/Windows y tareas de gestión del sistema; encaje A1-61/A2-IV-1. La operación concreta y el estado de desarrollo de WSUS se verifican en Microsoft Learn.'],
  7863: ['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', 'ITIC Academy, bloque 26, Hardware, versión 2026, firmware/UEFI y arranque', 'El apartado de hardware y firmware contextualiza BIOS/UEFI; encaje A1-41/A1-54/A2-II-1. El comportamiento histórico del BIOS clásico y las actualizaciones de firmware se comprueban en NIST SP 800-147.'],
  7864: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30, Tecnologías de Sistemas de la Información, versión 2026.1', 'El material cubre Java y las APIs de acceso a datos (A1-67/A2-III-10); el bloque 29 Bases de Datos (https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk) aporta contexto de SGBD/modelo relacional (A1-63/64/A2-II-5). La definición de JDBC se comprueba en la API de Java/Oracle.'],
  7865: ['https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', 'ITIC Academy, bloque 27, Sistemas Operativos, versión 2026.1 (14/08/2026)', 'Se cotejó el bloque moderno de sistemas operativos como contexto y se buscó una sección específica de Emacs: no aparece en el contenido consultado. No se atribuye la definición ni sus características a ese material; la clasificación se apoya en los programas oficiales de software libre y licencias A1-69/A2-II-14, y la fuente de GNU sustenta la respuesta.']
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
console.log('Cotejo curricular individual con materiales de Academy/Drive y convocatorias incorporado para lote 1512.');
