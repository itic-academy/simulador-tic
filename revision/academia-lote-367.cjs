const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-367.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  'os': { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas operativos, versión 2026.1' },
  'software': { url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', label: 'ITIC Academy, bloque 18 Protección jurídica, licencias y control del software, versión 2026.1' },
  'hardware': { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1' }
};
const map = {
  2151: { topics: ['A1-60', 'A2-II-2'], docs: ['os'], detail: 'A1-60 y A2-II-2 incluyen fundamentos de sistemas operativos Unix/Linux. El bloque 27 ofrece el encuadre de administración y herramientas de sistemas; el comando concreto se contrasta con la ayuda oficial de Vim.' },
  2152: { topics: ['A1-69', 'A2-II-14'], docs: ['software'], detail: 'A1-69 y A2-II-14 cubren software libre, software propietario y licencias. El bloque 18 de academia trata las licencias y protección jurídica; la libertad de cobrar se verifica en el texto oficial de GPLv3.' },
  2153: { topics: ['A1-54', 'A2-II-1'], docs: ['hardware'], detail: 'A1-54 abarca equipos personales y A2-II-1 tecnologías y arquitectura de ordenadores. El bloque 26 contextualiza memoria y hardware; el resultado se obtiene de la unidad de direccionamiento explícita del enunciado.' },
  2154: { topics: ['A1-41', 'A2-II-1'], docs: ['hardware'], detail: 'A1-41 incluye equipamiento hardware y A2-II-1 arquitecturas de ordenadores. El bloque 26 proporciona contexto de arquitectura; la definición de microprogramación se contrasta con IEEE.' },
  2155: { topics: ['A1-69', 'A2-II-14'], docs: ['software'], detail: 'A1-69 y A2-II-14 incluyen software libre y sus licencias. El bloque 18 de academia cubre libertad y licencia; la distinción libre/gratis se verifica con la definición de la FSF y GPLv3.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los materiales de academia indicados y con los programas oficiales de las convocatorias ${calls}. La academia se usa para encuadre curricular; la respuesta se apoya en la fuente técnica primaria citada.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; correspondencia curricular del tema. Material de academia utilizado para encuadre, no como autoridad normativa ni técnica.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 vigente consultada; anexo de programa, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI vigente consultada; anexo de programa, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2151–2155.');
