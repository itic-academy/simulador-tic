const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-364.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  'bi': { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1' },
  'systems': { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas operativos, versión 2026.1' },
  'security': { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad y criptografía, versión 2026.1' },
  'design': { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', label: 'ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas, versión 2026.1' },
  'java': { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' }
};
const map = {
  2136: { topics: ['A1-71', 'A2-III-15'], docs: ['bi'], detail: 'A1-71 incluye el preprocesado en el ciclo de vida de ciencia de datos y A2-III-15 incluye minería de datos y algoritmos. El bloque de BI/Big Data encuadra la explotación y preparación analítica de datos; no se usa como autoridad para imponer una técnica de imputación.' },
  2137: { topics: ['A1-59', 'A2-II-2'], docs: ['systems'], detail: 'A1-59 recoge fundamentos de sistemas operativos y A2-II-2 sus conceptos y fundamentos. El bloque académico de sistemas operativos cubre administración de memoria; la respuesta se deriva del cálculo explícito del espacio direccionable.' },
  2138: { topics: ['A1-79', 'A2-IV-12'], docs: ['security'], detail: 'A1-79 comprende cifrado simétrico y asimétrico; A2-IV-12 incluye técnicas criptográficas. El bloque académico de seguridad y criptografía aporta el encuadre del temario, mientras que las equivalencias concretas proceden de NIST.' },
  2139: { topics: ['A1-93', 'A2-III-9'], docs: ['design'], detail: 'A1-93 incluye patrones de diseño y A2-III-9 análisis/diseño orientado a objetos y patrones. El bloque académico de análisis y diseño permite encuadrar MVC, sin sustituir la definición de responsabilidades de la especificación.' },
  2140: { topics: ['A1-65', 'A2-III-10', 'A2-III-12'], docs: ['java'], detail: 'A1-65 incluye desarrollo web en servidor e interconexión con sistemas y servicios; A2-III-10 trata Java EE/Jakarta EE y A2-III-12 aplicaciones web. El bloque de tecnologías de sistemas de información aporta contexto curricular. La respuesta se limita deliberadamente a la figura de Java EE 7 citada.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las convocatorias ${calls}. El material de academia se utiliza para encuadre curricular; la verificación técnica se sustenta en la documentación primaria citada en la revisión.`;
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
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2136–2140.');
