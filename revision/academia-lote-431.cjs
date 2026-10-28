const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-431.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  collaboration: { url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', label: 'ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», versión 2026.1 (01-10-2026); cubre A1-131 (SSO), A1-133 (redes sociales y Guía de Comunicación Digital) y A2-T16 (sindicación y trabajo colaborativo).' },
  content: { url: 'https://drive.google.com/file/d/14HXV8n8g6aayqn0O7PJY3SDRsxVHtFgj/view?usp=drivesdk', label: 'ITIC Academy, bloque «Gestión documental», versión 2026.1 (23-09-2026); incluye gestión de contenidos, workflow, redes sociales y sindicación RSS/Atom en A2-T16.' },
  image: { url: 'https://drive.google.com/file/d/1gMHqDuxGhw_pON9qqIWefuS0khKsF3Uv/view?usp=drivesdk', label: 'ITIC Academy, bloque 37 «Imágenes, OCR, biometría y gestión de contenidos», versión 2026.1 (18-09-2026); encuadra los activos/servicios de imagen y, para A2-T16, la gestión de contenidos y redes sociales.' }
};
const map = {
  2466: { doc: 'collaboration', a1: ['A1-131'], a2: ['A2-I-9'], detail: 'Gestión de identidades e inicio de sesión único para el acceso a aplicaciones.' },
  2467: { doc: 'collaboration', a1: ['A1-131'], a2: ['A2-III-12', 'A2-IV-12'], detail: 'Federación de identidad, autenticación y roles del protocolo SAML en servicios web.' },
  2468: { doc: 'content', a1: ['A1-133'], a2: ['A2-II-16'], detail: 'Sindicación y lectores de feeds frente a plataformas de publicación y redes sociales.' },
  2469: { doc: 'collaboration', a1: ['A1-133'], a2: ['A2-III-14'], detail: 'Guía de Comunicación Digital de la AGE y gestión de presencia institucional en redes sociales.' },
  2470: { doc: 'image', a1: ['A1-83', 'A1-133'], a2: ['A2-II-16'], detail: 'Almacenamiento/compartición de imagen digital y servicios colaborativos de publicación social.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2466,2467,2468,2469,2470') throw new Error('IDs del lote 431 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta revisión de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia comprobada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). Academy aporta encuadre curricular; la comprobación de respuestas se apoya en las fuentes primarias citadas en revision.fuentes.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular y temario oficial aplicados a 2466–2470.');
