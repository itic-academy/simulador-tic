const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-421.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  java: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026, encuadra el entorno Java y el desarrollo de aplicaciones; Java Web Start se mantiene solo como tecnología histórica del despliegue Java.'
  },
  web: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026, y bloque 33 «E-learning y SIG», versión 2026.1, aportan el encuadre de tecnologías web y de contenidos de aprendizaje.'
  },
  licenses: {
    url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 17 «Adquisición de sistemas, alternativas y rentabilidad de las inversiones», versión 2026.2 (02/10/2026), incluye software libre, alternativas de software y modelos de licencia.'
  },
  elearning: {
    url: 'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 33 «E-learning y Sistemas de Información Geográfica», versión 2026.1 (31/07/2026), §1.8 y puntos clave: normalización e interoperabilidad, SCORM como estándar clásico de contenidos e-learning.'
  }
};
const map = {
  2416: { doc: 'java', topics: ['A1-67', 'A2-II-3'], detail: 'Interoperabilidad de Java con código nativo mediante JNI e Invocation API.' },
  2417: { doc: 'java', topics: ['A1-67', 'A2-II-3'], detail: 'Despliegue de aplicaciones Java y protocolo JNLP; se registra como histórico por la retirada de Java Web Start del JDK Oracle 11.' },
  2418: { doc: 'web', topics: ['A1-77', 'A2-III-12'], detail: 'Tecnología de servidor PHP y acceso de aplicaciones web a bases de datos.' },
  2419: { doc: 'licenses', topics: ['A1-69', 'A2-II-14'], detail: 'Software libre y tipos de licencias: alcance del copyleft y compatibilidad de licencias.' },
  2420: { doc: 'elearning', topics: ['A1-73', 'A2-III-6'], detail: 'Estándares de interoperabilidad y empaquetado de contenidos de aprendizaje para LMS.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2416,2417,2418,2419,2420') throw new Error('El lote 421 no coincide con los IDs esperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error(`Falta revisión para ${c.id}`);
  if (!m.topics.every(topic => valid.has(topic))) throw new Error(`Tema no oficial para ${c.id}`);
  q.clasificacion.A1 = m.topics.filter(topic => topic.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(topic => topic.startsWith('A2-'));
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1/A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia se usa para encuadre curricular; las respuestas se justifican con documentación técnica primaria.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 421 completado.');
