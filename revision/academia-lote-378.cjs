const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-378.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const academy = {
  databases: { url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29, Bases de datos, SQL y modelado' },
  systems: { url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30, Tecnologías de sistemas de información' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27, Sistemas operativos' },
  licensing: { url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', label: 'ITIC Academy, bloque 18, Protección jurídica, licencias y control del software' },
  security: { url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', label: 'ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma' }
};
const map = {
  2206: { topics: ['A1-63', 'A2-II-5'], docs: ['databases'], detail: 'A1-63 comprende SGBD; A2-II-5, sistemas de bases de datos y SQL. El bloque 29 aporta contexto de modelos y SGBD; la clasificación específica de Versant se valida con Actian.' },
  2207: { topics: ['A1-8', 'A1-80', 'A2-I-8', 'A2-I-9'], docs: [], detail: 'A1-8/A2-I-8 cubren procedimiento administrativo; A1-80/A2-I-9, identidad, firma, documentos e interoperabilidad electrónica. No se asigna material de academia por no encontrar en el cruce de Drive consultado una ficha específica de copias auténticas; se contrastó directamente la Ley 39/2015.' },
  2208: { topics: ['A1-60', 'A2-II-2'], docs: ['os'], detail: 'A1-60/A2-II-2 recogen UNIX/Linux y sistemas operativos. El bloque 27 se usa para contexto curricular; el modelo de permisos se verifica en documentación de sistemas.' },
  2209: { topics: ['A1-43', 'A1-69', 'A2-II-14'], docs: ['licensing'], detail: 'A1-43/A1-69 y A2-II-14 cubren protección jurídica, software abierto y licencias. El bloque 18 aporta encuadre de licencias; la compatibilidad concreta se contrasta con el texto de EUPL 1.2.' },
  2210: { topics: ['A1-27', 'A1-82', 'A2-I-7'], docs: ['security'], detail: 'A1-27/A1-82 y A2-I-7 cubren protección de datos y gestión de riesgos. El bloque 36 ofrece contexto de seguridad; la función concreta y denominación actual se comprueban en la AEPD.' }
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
  const note = `${m.detail} Correspondencia ${m.topics.join(', ')} cotejada con el material académico indicado y con los programas oficiales de las ${calls}. La academia se utiliza para encuadre curricular; la respuesta se sustenta en fuentes primarias.`;
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
console.log('Cotejo curricular Drive, temas oficiales y convocatorias actualizado para IDs 2206–2210.');
