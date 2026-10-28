const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-374.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas operativos, versión 2026' },
  security: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, criptografía, identificación y firma, versión 2026.1' }
};
const map = {
  2186: { topics: ['A1-65', 'A1-67', 'A2-II-9', 'A2-III-10'], docs: ['systems'], detail: 'A1-65/A2-II-9 cubren scripts y lenguajes de marca; A1-67/A2-III-10, la plataforma Java/Jakarta. El bloque 30 aporta el marco de tecnologías web y Java; las definiciones se verifican en las especificaciones y documentación Oracle/ECMA.' },
  2187: { topics: ['A1-61', 'A2-II-2'], docs: ['os'], detail: 'A1-61/A2-II-2 encuadran sistemas operativos. El bloque 27 aporta contexto BSD/Unix, pero no localiza una fuente primaria suficiente sobre SecureBSD; por ello la respuesta continúa pendiente de fuente y no se valida por descarte.' },
  2188: { topics: ['A1-80', 'A2-I-6', 'A2-IV-12'], docs: ['security'], detail: 'A1-80/A2-I-6 cubren certificados e identidad electrónica; A2-IV-12 mecanismos criptográficos y firma digital. El bloque 36 da contexto de PKI/certificados; la respuesta se verifica con RFC 5280 y RFC 5755.' },
  2189: { topics: ['A1-61', 'A1-81', 'A2-II-2', 'A2-IV-12'], docs: ['os', 'security'], detail: 'A1-61/A2-II-2 tratan sistemas operativos; A1-81/A2-IV-12 seguridad e identificación mediante dispositivos. Los bloques 27 y 36 encuadran esos ámbitos; Jini frente a plataformas de smart card se comprueba con las especificaciones técnicas citadas.' },
  2190: { topics: ['A1-81', 'A2-I-6', 'A2-IV-12'], docs: ['security'], detail: 'A1-81/A2-I-6 cubren mecanismos biométricos e identificación electrónica; A2-IV-12, control de acceso y seguridad. El bloque 36 aporta el encuadre; la deseabilidad de alta variación entre sujetos frente a baja variación intra-sujeto se verifica con NIST/National Academies e ISO.' }
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
  const calls = 'programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los materiales de academia indicados y con los programas oficiales de las convocatorias ${calls}. La academia se utiliza para encuadre curricular; la respuesta se apoya en las fuentes técnicas primarias citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo curricular. Material usado para encuadre, no como autoridad técnica o normativa.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2186–2190.');
