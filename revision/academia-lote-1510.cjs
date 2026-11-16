const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1510.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  7851: ['https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', 'ITIC Academy, bloque 30, Tecnologías de Sistemas de la Información, versión 2026', 'El material incluye blockchain/DLT, redes y smart contracts; el programa oficial A1 lo identifica en A1-85. No se asigna A2 porque no hay epígrafe específico de blockchain en el programa A2. La definición del glosario se contrasta con la fuente de Szabo.'],
  7852: ['https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', 'ITIC Academy, bloque 25, Cloud Computing, edición 2026', 'Cotejo curricular de modelos y riesgos de computación en la nube; correspondencia A1-55/A2-II-1. La categoría de riesgo y sus límites se comprueban directamente en ENISA; las obligaciones actuales, en el RGPD.'],
  7853: ['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', 'ITIC Academy, bloque 48, Seguridad', 'Cotejo de seguridad/ENS y guías CCN-STIC; correspondencia A1-48, A2-I-9 y A2-II-13. El mecanismo concreto se atribuye a la guía CCN-STIC-819, no al manual académico.'],
  7854: ['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', 'ITIC Academy, bloque 42, Redes y Comunicaciones', 'Cotejo curricular de medios de transmisión y comunicaciones inalámbricas de corto alcance; correspondencia A1-108/A1-114 y A2-IV-7/A2-IV-11. El comportamiento LF frente a líquidos se comprueba en la documentación técnica del fabricante SICK.'],
  7855: ['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', 'ITIC Academy, bloque 26, Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)', 'Los apartados de periféricos de entrada, captura automática y digitalización de documentos aportan el encaje curricular; la distinción técnica entre OCR por plantillas y extracción de rasgos se verifica en literatura académica y documentación técnica. Correspondencia A1-54/A1-84 y A2-II-1.']
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const convocatorias = {
  A1: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  A2: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
};
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  assert.ok(q?.revision, `Falta revisión ${c.id}`);
  for (const id of [...q.clasificacion.A1, ...q.clasificacion.A2]) assert.ok(official.has(id), `Tema no oficial ${id}`);
  const [url, title, detail] = docs[c.id];
  q.revision.fuentes = q.revision.fuentes.filter(x => !x.referencia.startsWith('Cotejo curricular:') && !x.referencia.startsWith('Convocatoria oficial A1 BOE-') && !x.referencia.startsWith('Convocatoria oficial A2 BOE-'));
  q.revision.fuentes.push(
    { url, referencia: `Cotejo curricular: ${title}. ${detail}` },
    { url: convocatorias.A1, referencia: `Convocatoria oficial A1 BOE-A-2025-25938; epígrafe(s): ${q.clasificacion.A1.join(', ') || 'sin asignación directa'}.` },
    { url: convocatorias.A2, referencia: `Convocatoria oficial A2 BOE-A-2025-26262; epígrafe(s): ${q.clasificacion.A2.join(', ') || 'sin asignación directa'}.` }
  );
  const priorObs = q.revision.observaciones.split(' Cotejo curricular:')[0];
  const priorComments = q.comentarios.split(' Cotejo curricular:')[0];
  q.revision.observaciones = `${priorObs} Cotejo curricular: ${title}. ${detail}`;
  q.comentarios = `${priorComments} Cotejo curricular: ${title}. ${detail}`.trim();
  q.clasificacion.bloque_academia = title;
  q.clasificacion.nota = `Cotejo curricular: ${detail}`;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo individual con materiales de Academy/Drive y convocatorias A1/A2 incorporado para el lote 1510.');
