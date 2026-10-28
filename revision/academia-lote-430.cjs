const fs = require('node:fs');
const path = require('node:path');
const bp = path.join(__dirname, '..', 'preguntas_preparatic.json');
const lp = path.join(__dirname, 'cambios-lote-430.json');
const bank = JSON.parse(fs.readFileSync(bp, 'utf8'));
const log = JSON.parse(fs.readFileSync(lp, 'utf8'));
const valid = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = [
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'
];
const docs = {
  networks: { url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label: 'ITIC Academy, bloque 42 «Redes», versión 2026.1 (29-09-2026); contexto de multiplexación, medios y sistemas de comunicaciones.' },
  email: { url: 'https://docs.google.com/document/d/1TquAQ4a5u1wiDtMpLGimvmFONKEQa2Gv/edit?usp=drivesdk', label: 'ITIC Academy, bloque 45, tema 122 «Correo, mensajería y directorios», versión 2026.1 (17-08-2026); encuadre de correo electrónico y servicios de mensajería.' },
  mobile: { url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', label: 'ITIC Academy, bloque 46 «Redes inalámbricas y movilidad», versión 2026.1 (30-09-2026); encuadre de GSM/UMTS y servicios móviles.' },
  security: { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', label: 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026; encuadre de phishing y amenazas de ingeniería social.' }
};
const map = {
  2461: { doc: 'networks', a1: ['A1-108'], a2: ['A2-IV-10'], detail: 'Transmisión de comunicaciones y aprovechamiento de capacidad mediante técnicas de multiplexación.' },
  2462: { doc: 'email', a1: ['A1-109', 'A1-111'], a2: ['A2-II-8', 'A2-IV-13'], detail: 'Correo electrónico como servicio de Internet y representación MIME del contenido de mensajes.' },
  2463: { doc: 'mobile', a1: ['A1-123'], a2: ['A2-IV-15'], detail: 'Acceso radio GSM, canales de frecuencia, tramas TDMA y generaciones de comunicaciones móviles.' },
  2464: { doc: 'mobile', a1: ['A1-123'], a2: ['A2-IV-15'], detail: 'UMTS, entorno personal de servicios y portabilidad del perfil de usuario entre redes y terminales.' },
  2465: { doc: 'security', a1: ['A1-48'], a2: ['A2-IV-12'], detail: 'Amenazas de phishing dirigido e ingeniería social como riesgos para la seguridad de redes y sistemas.' }
};
if (log.cambios.map(c => c.id).join(',') !== '2461,2462,2463,2464,2465') throw new Error('IDs del lote 430 inesperados.');
for (const c of log.cambios) {
  const q = bank.preguntas.find(item => item.id === c.id);
  const m = map[c.id], d = docs[m.doc];
  if (!q?.revision) throw new Error('Falta revisión de ' + c.id);
  if (![...m.a1, ...m.a2].every(topic => valid.has(topic))) throw new Error('Tema no oficial para ' + c.id);
  q.clasificacion.A1 = m.a1;
  q.clasificacion.A2 = m.a2;
  const note = `Cotejo curricular: ${d.label} ${m.detail} Drive: ${d.url}. Correspondencia contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (${calls.join('; ')}). Academy aporta encuadre curricular; la evidencia técnica está en las fuentes primarias enlazadas en revision.fuentes.`;
  q.clasificacion.bloque_academia = d.url;
  q.clasificacion.nota = note;
  q.revision.observaciones += ' ' + note;
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(lp, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bp, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular y temario oficial aplicados a 2461–2465.');
