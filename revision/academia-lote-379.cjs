const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-379.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27, Sistemas operativos' },
  security: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma' }
};
const map = {
  2211: { topics: ['A1-65', 'A1-66', 'A2-III-11', 'A2-III-12'], docs: ['systems'], detail: 'A1-65/A2-III-12 cubren desarrollo web y aplicaciones en servidor; A1-66/A2-III-11, plataforma .NET. El bloque 30 aporta contexto de ASP.NET; el ciclo de vida se comprueba con Microsoft Learn.' },
  2212: { topics: ['A1-66', 'A2-III-11'], docs: ['systems'], detail: 'A1-66/A2-III-11 incluyen plataforma .NET. El bloque 30 aporta el marco curricular; la definición de BCL se contrasta con Microsoft Learn.' },
  2213: { topics: ['A1-60', 'A2-II-2'], docs: ['os'], detail: 'A1-60/A2-II-2 recogen sistemas UNIX/Linux. El bloque 27 aporta contexto de sistemas de ficheros; el cálculo concreto conserva el modelo clásico expresado en el enunciado.' },
  2214: { topics: ['A1-80', 'A2-I-9'], docs: [], detail: 'A1-80 y A2-I-9 incluyen identidad, documentos electrónicos, ENI y normas técnicas de interoperabilidad. En el material Drive cotejado no se localizó una unidad específica que reproduzca el umbral de la NTI; se verifica directamente en BOE.' },
  2215: { topics: ['A1-79', 'A1-80', 'A2-I-6', 'A2-IV-12'], docs: ['security'], detail: 'A1-79/A1-80 y A2-I-6/IV-12 recogen criptografía, certificados, firma y seguridad. El bloque 36 ofrece contexto de PKI; las reglas específicas de CRL se validan en el estándar IETF.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  assert.ok(m.topics.every(t => official.has(t)), `Tema oficial inexistente para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(t => t.startsWith('A2-'));
  q.clasificacion.bloque_academia = m.docs.length ? m.docs.map(k => `${academy[k].label}; ${m.detail}`).join(' | ') : m.detail;
  const calls = 'convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejadas con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las ${calls}. La academia se usa para encuadre curricular; la respuesta se sustenta en fuentes técnicas o normativas primarias.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo curricular, no fuente de autoridad técnica ni normativa.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2211–2215.');
