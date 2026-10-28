const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-366.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  'systems': { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  'security': { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, criptografía, identificación y firma, versión 2026.1' },
  'image': { url: 'https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk', label: 'ITIC Academy, bloque 37 Tratamiento de imágenes, OCR, biometría y gestión de contenidos, versión 2026.1' },
  'database': { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1' }
};
const map = {
  2146: { topics: ['A1-72'], docs: ['systems'], detail: 'A1-72 incluye expresamente sistemas ERP. El bloque 30 de academia trata la diferencia entre ERP y CRM y su uso en los sistemas corporativos; los mecanismos concretos ABAP se contrastan con SAP Help.' },
  2147: { topics: ['A1-77', 'A2-II-9'], docs: ['systems'], detail: 'A1-77 incluye HTML y compatibilidad con estándares; A2-II-9 trata HTML y lenguajes de marca. El bloque 30 de academia cubre HTML semántico y estándares web; el significado de td se verifica en WHATWG.' },
  2148: { topics: ['A1-83'], docs: ['image'], detail: 'A1-83 comprende el tratamiento de imágenes y tecnologías asociadas. El bloque 37 de academia desarrolla formatos y procesamiento de imágenes; las definiciones de WebP y AVIF se contrastan con Google y AOM.' },
  2149: { topics: ['A1-79', 'A1-80'], docs: ['security'], detail: 'A1-79 comprende algoritmos simétricos/asimétricos y A1-80 las claves públicas y privadas; A2-IV-12 trata técnicas criptográficas. El bloque 36 cubre criptografía e identidad digital; el requisito formal se contrasta con NIST.' },
  2150: { topics: ['A1-63', 'A2-II-5'], docs: ['database'], detail: 'A1-63 incluye el modelo de referencia ANSI para sistemas de bases de datos y A2-II-5 nombra expresamente ANSI/SPARC. El bloque 29 de academia trata la arquitectura de tres niveles y la independencia de datos; la respuesta se fundamenta en el informe NBSIR 85-3173.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con material académico de Drive y programas oficiales ${calls}. La academia encuadra el contenido en el temario; la verificación técnica se apoya en las fuentes primarias señaladas.`;
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
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2146–2150.');
