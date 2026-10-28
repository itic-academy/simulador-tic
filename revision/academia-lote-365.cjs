const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-365.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  'security': { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad y criptografía, versión 2026.1' },
  'java': { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  'software': { url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', label: 'ITIC Academy, bloque 18 Protección jurídica, licencias y control del software, versión 2026.1' },
  'hardware': { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1' }
};
const map = {
  2141: { topics: ['A1-80', 'A1-81', 'A2-I-9', 'A2-IV-12'], docs: ['security'], detail: 'A1-80/81 incluyen certificados digitales y PKI; A2-I-9 trata identificación/autenticación y certificados en servicios electrónicos, y A2-IV-12 las técnicas criptográficas. El bloque 36 encuadra PKI y criptografía.' },
  2142: { topics: ['A1-65', 'A2-II-6', 'A2-III-12'], docs: ['java'], detail: 'A1-65 trata la interconexión web con servicios; A2-II-6 incluye arquitectura de servicios web y A2-III-12 sus estándares e interoperabilidad. El bloque 30 ofrece el encuadre de tecnologías de sistemas y servicios web.' },
  2143: { topics: ['A1-69'], docs: ['software'], detail: 'A1-69 incluye aplicaciones de software libre en el entorno ofimático. El bloque 18 del material de academia trata licencias y protección jurídica del software; el inventario concreto de aplicaciones se contrasta con el sitio oficial de Apache OpenOffice.' },
  2144: { topics: ['A1-54', 'A2-II-1'], docs: ['hardware'], detail: 'A1-54 abarca hardware y dispositivos personales; A2-II-1, tecnologías y arquitecturas de ordenadores. El bloque 26 cubre hardware y almacenamiento; la topología AGP se verifica con documentación de Intel.' },
  2145: { topics: ['A1-79', 'A2-IV-12'], docs: ['security'], detail: 'A1-79 incluye cifrado simétrico, asimétrico y funciones hash; A2-IV-12 contempla técnicas criptográficas. El bloque 36 cubre criptografía; longitudes y características se verifican contra NIST y la literatura técnica primaria citada.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las convocatorias ${calls}. La academia se utiliza para encuadre curricular; las afirmaciones técnicas se contrastan con estándares, especificaciones y documentación primaria.`;
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
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2141–2145.');
