const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-372.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  ai: { url: 'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk', label: 'ITIC Academy, bloque 32 Inteligencia artificial, versión 2026.1' },
  dni: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36 Seguridad, criptografía, identificación y firma, versión 2026.1' },
  bi: { url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence & Big Data, versión 2026.1' }
};
const map = {
  2176: { topics: ['A1-65', 'A1-67', 'A2-III-10', 'A2-III-12'], docs: ['systems'], detail: 'A1-65/A1-67 y A2-III-10/III-12 encuadran Java empresarial, Jakarta Server Pages y aplicaciones web. El bloque 30 contiene tecnologías Java/servidor; la definición del scriptlet se verifica en la especificación Jakarta, no en el temario de academia.' },
  2177: { topics: ['A1-69', 'A2-II-14'], docs: [], detail: 'A1-69/A2-II-14 encuadran software, licencias y propiedad intelectual. Las búsquedas del material accesible de ITIC Academy no localizaron una sección que compare las licencias de estos productos de backup; se deja constancia del límite del cotejo y el encaje se hace con el programa oficial. Las licencias y el estado comercial se verifican directamente con los proyectos y el titular de NetBackup.' },
  2178: { topics: ['A1-70', 'A2-III-5'], docs: ['ai'], detail: 'A1-70/A2-III-5 incluyen inteligencia artificial y representación del conocimiento. El bloque 32 sirve de encuadre curricular; la codificación real de cromosomas se contrasta con la literatura académica citada en la revisión.' },
  2179: { topics: ['A1-81', 'A2-I-6'], docs: ['dni'], detail: 'A1-81/A2-I-6 encuadran identificación electrónica, DNIe y servicios de confianza. El bloque 36 cubre identificación y firma; la incorporación de NFC en DNI 3.0 se verifica con el portal oficial del DNI electrónico.' },
  2180: { topics: ['A1-63', 'A2-II-4'], docs: ['bi'], detail: 'A1-63/A2-II-4 encuadran bases de datos y sistemas de información; el bloque 34 introduce BI/analítica y sirve de contraste curricular entre cargas operativas y analíticas. La definición OLTP se comprueba en documentación técnica oficial.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q?.revision && m, `Falta cotejo ${c.id}`);
  assert.ok(m.topics.every(t => official.has(t)), `Tema oficial inexistente para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(t => t.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(t => t.startsWith('A2-'));
  q.clasificacion.bloque_academia = m.docs.length
    ? m.docs.map(k => `${academy[k].label}; ${m.detail}`).join(' | ')
    : `Sin apartado específico localizado en los materiales consultables; ${m.detail}`;
  const calls = 'programas oficiales A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262, cotejados con revision/temario-oficial.json';
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los materiales de academia indicados y con los programas oficiales de las convocatorias ${calls}. La academia se utiliza para encuadre curricular; la respuesta se apoya en las fuentes técnicas primarias citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo del contenido curricular. Material de academia usado para encuadre, no como autoridad normativa ni técnica.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2176–2180.');
