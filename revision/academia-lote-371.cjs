const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-371.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  hardware: { url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1' },
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de sistemas de información, versión 2026.1' },
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de datos, SQL y modelado de datos, versión 2026.1' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas operativos, versión 2026' }
};
const map = {
  2171: { topics: ['A1-56', 'A2-IV-5'], docs: ['hardware'], detail: 'A1-56 incluye sistemas de almacenamiento y A2-IV-5 arquitectura y tipos de almacenamiento; el bloque 26 trata discos, RAID y almacenamiento. La distinción entre striping y paridad se comprueba en documentación de IBM.' },
  2172: { topics: ['A1-72', 'A2-II-12'], docs: ['systems'], detail: 'A1-72 incluye expresamente CRM; A2-II-12 trata CRM y centros de contacto. El bloque 30 encuadra los sistemas CRM; las ventajas se contrastan con documentación oficial de Microsoft y Oracle, sin presentar los resultados como garantía.' },
  2173: { topics: ['A1-63', 'A2-II-5', 'A2-III-4'], docs: ['databases'], detail: 'A1-63 cubre sistemas gestores de bases de datos; A2-II-5 trata SGBD relacionales y A2-III-4, diseño, concurrencia y transacciones. El bloque 29 cubre arquitectura y propiedades de los gestores; la expansión ACID se verifica con Microsoft Learn.' },
  2174: { topics: ['A1-61', 'A1-57', 'A2-II-2'], docs: ['os'], detail: 'A1-61 comprende sistemas operativos Microsoft y A1-57 servidores; A2-II-2 incluye administración de Windows. El bloque 27 incluye sistemas Microsoft/Windows Server; la jerarquía del rol NFS se verifica en Microsoft Learn.' },
  2175: { topics: ['A1-66', 'A2-III-11'], docs: ['systems'], detail: 'A1-66 y A2-III-11 incluyen el entorno y la plataforma Microsoft .NET. El bloque 30 contextualiza las tecnologías de sistemas y .NET; la conformidad de CLI y CIL se verifica en ECMA-335, no en el material de academia.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con los materiales de academia indicados y con los programas oficiales de las convocatorias ${calls}. La academia se utiliza para el encuadre curricular; la respuesta se apoya en las fuentes técnicas primarias citadas.`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.comentarios = q.revision.observaciones;
  for (const k of m.docs) q.revision.fuentes.push({ url: academy[k].url, referencia: `${academy[k].label}; cotejo del contenido curricular. Material de academia usado para encuadre, no como autoridad normativa ni técnica.` });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 vigente consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A1-')).join(', ') + '.' });
  q.revision.fuentes.push({ url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 GSI vigente consultada; programa del anexo, tema(s) ' + m.topics.filter(t => t.startsWith('A2-')).join(', ') + '.' });
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2171–2175.');
