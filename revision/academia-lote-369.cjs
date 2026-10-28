const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-369.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  'systems': { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  'contracts': { url: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk', label: 'ITIC Academy, bloque 5 Contratación, presupuestos y compra TIC, versión 2026.2' },
  'hardware': { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1' },
  'gis': { url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk', label: 'ITIC Academy, bloque 33 E-learning y Sistemas de Información Geográfica, versión 2026.1' },
  'crypto': { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, criptografía, identificación y firma, versión 2026.1' }
};
const map = {
  2161: { topics: ['A1-65', 'A1-67', 'A2-III-10'], docs: ['systems'], detail: 'A1-65 y A1-67 incluyen desarrollo web y entorno Java; A2-III-10 cubre Java EE/Jakarta EE. El bloque 30 contextualiza contenedores y aplicaciones; la opción histórica se verifica en documentación oficial de Apache Tomcat 8.0.' },
  2162: { topics: ['A1-11', 'A1-27', 'A2-I-7'], docs: ['contracts'], detail: 'A1-11 cubre contratación pública; A1-27 y A2-I-7 incluyen el régimen jurídico de protección de datos. El bloque 5 encuadra la LCSP; la correspondencia de protección de datos se coteja directamente con los programas oficiales y el contenido se comprueba en la LCSP consolidada y el Real Decreto-ley 14/2019.' },
  2163: { topics: ['A1-54', 'A2-II-1'], docs: ['hardware'], detail: 'A1-54 abarca dispositivos personales y su conectividad; A2-II-1, tecnologías actuales de ordenadores. El bloque 26 trata conectividad, puertos y dispositivos; el límite se contrasta con la especificación USB.' },
  2164: { topics: ['A1-74'], docs: ['gis'], detail: 'A1-74 trata conceptos y funcionalidad básica de sistemas de información geográfica. El bloque 33 incluye modelos ráster/vectorial y herramientas SIG; las capacidades de Google Earth se verifican con documentación oficial de Google.' },
  2165: { topics: ['A1-80', 'A2-I-6', 'A2-IV-12'], docs: ['crypto'], detail: 'A1-80 cubre certificados digitales, nombres X.500 y firma electrónica; A2-I-6, identidad y firma electrónica; A2-IV-12, técnicas criptográficas. El bloque 36 encuadra PKI y certificados; la sintaxis se contrasta con RFC 5280.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los materiales de academia indicados y con los programas oficiales de las convocatorias ${calls}. La academia se utiliza para encuadre curricular; la respuesta se apoya en la norma o documentación técnica primaria citada.`;
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
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2161–2165.');
