const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-368.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  'hardware': { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1' },
  'systems': { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  'elearning': { url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', label: 'ITIC Academy, bloque 33 E-learning y Sistemas de Información Geográfica, versión 2026.1' }
};
const map = {
  2156: { topics: ['A1-53', 'A2-II-6'], docs: ['hardware'], detail: 'A1-53 cubre servidores y centros de proceso de datos; A2-II-6, arquitectura cliente-servidor y servicios web. El bloque 26 incluye servidores, CPD y virtualización; el límite de CPU se verifica en Microsoft Learn.' },
  2157: { topics: ['A1-53', 'A2-IV-6'], docs: ['hardware'], detail: 'A1-53 incluye diseño, implantación y gestión de CPD; A2-IV-6, planificación física y dimensionamiento de centros de procesamiento de datos. El bloque 26 incluye TIA-942-C y diseño de CPD; la respuesta sigue pendiente de cotejo con el texto autorizado de la cláusula TIA aplicable.' },
  2158: { topics: ['A1-54', 'A2-IV-12'], docs: ['hardware'], detail: 'A1-54 cubre dispositivos personales/móviles y sus medidas de seguridad y gestión; A2-IV-12 incluye seguridad en el puesto del usuario. El bloque 26 trata BYOD, MDM, MAM, EMM y UEM; el alcance técnico se contrasta con NIST SP 800-124 Rev. 2.' },
  2159: { topics: ['A1-65', 'A2-III-12'], docs: ['systems'], detail: 'A1-65 incluye scripts de cliente y desarrollo web en servidor; A2-III-12 cubre aplicaciones web y desarrollo front-end y servidor. El bloque 30 encuadra tecnologías de sistemas; la distinción CGI/cliente se prueba con RFC 3875 y estándares de plataforma.' },
  2160: { topics: ['A1-73'], docs: ['elearning'], detail: 'A1-73 recoge e-learning, herramientas, sistemas de implantación y normalización. El bloque 33 aborda SCORM, estándares de interoperabilidad y contenidos digitales; la función concreta del libro CAM se verifica con la guía oficial de ADL.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  assert.ok(m.topics.every(t => official.has(t)), `Tema oficial inexistente para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(t => t.startsWith('A2-'));
  q.clasificacion.bloque_academia = m.docs.map(k => `${academy[k].label}; ${m.detail}`).join(' | ');
  const calls = 'Programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los materiales de academia indicados y con los programas oficiales de las convocatorias ${calls}. La academia se usa para encuadre curricular; no sustituye la fuente técnica primaria ni permite dar por verificada una respuesta pendiente.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; correspondencia curricular del tema. Material de academia utilizado para encuadre, no como autoridad técnica o normativa.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 vigente consultada; anexo de programa, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI vigente consultada; anexo de programa, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2156–2160.');
