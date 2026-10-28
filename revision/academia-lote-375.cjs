const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-375.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  ai: { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 Inteligencia Artificial y Ciencia de Datos, temario 2026' },
  security: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, criptografía, identificación y firma, versión 2026.1' },
  application: { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, edición 2026' },
  cloud: { url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', label: 'ITIC Academy, bloque 25 Cloud Computing, versión 2026.1' }
};
const map = {
  2191: { topics: ['A1-70', 'A2-III-5'], docs: ['ai'], detail: 'A1-70 y A2-III-5 incluyen fundamentos de IA, NLP y tecnologías asociadas. El bloque 32 aporta el encuadre de IA; los factores de dificultad se comprueban con NIST y documentación técnica de reconocimiento del habla.' },
  2192: { topics: ['A1-81', 'A2-II-2', 'A2-IV-12'], docs: ['security'], detail: 'A1-81 incluye smart cards como mecanismos de identificación; A2-II-2 encuadra la tecnología de dispositivos y A2-IV-12 la identificación/control seguro. El bloque 36 aporta el contexto de tarjetas; alcance y clases se verifican con ISO/NIST.' },
  2193: { topics: ['A1-126', 'A2-III-12'], docs: ['application'], detail: 'A1-126 comprende seguridad y protección de servicios web; A2-III-12 incluye estándares, protocolos e interoperabilidad de servicios web. El bloque 48 cubre seguridad de aplicación y servicios web; las denominaciones se cotejan en el catálogo y especificaciones oficiales WS-I.' },
  2194: { topics: ['A1-70', 'A2-III-5'], docs: ['ai'], detail: 'A1-70 y A2-III-5 recogen inteligencia artificial, planificación, búsqueda y áreas de aplicación. El bloque 32 aporta el marco didáctico; la comprobación histórica se apoya en el informe NBS/NIST.' },
  2195: { topics: ['A1-55', 'A2-II-1'], docs: ['cloud'], detail: 'A1-55 cubre cloud computing y nubes pública, privada e híbrida; A2-II-1 incluye computación en la nube. El bloque 25 aporta el encuadre académico; la respuesta es un dato histórico y se comprueba en la edición citada del informe oficial ONTSI.' }
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
  const calls = 'convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejadas con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las ${calls}. La academia se utiliza para encuadre curricular; la respuesta se sustenta en las fuentes técnicas o institucionales citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo curricular. Material usado para encuadre, no como autoridad técnica o estadística.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2191–2195.');
