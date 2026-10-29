const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json'), logPath = path.join(__dirname, 'cambios-lote-546.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8')), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const temario = JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8'));
const topics = new Set(temario.programas.flatMap(p => p.temas.map(t => t.id)));
const red = 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const protocolos = 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const movil = 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const colaboracion = 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const academy = {
  3046: {A1:['A1-123'], A2:['A2-IV-15'], note:`ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles», epígrafe de 5G. ${movil}`},
  3047: {A1:['A1-133'], A2:['A2-II-16'], note:`ITIC Academy, Bloque 50 «Videoconferencia, SSO y trabajo colaborativo» (2026.1), herramientas colaborativas y comunicaciones en tiempo real. ${colaboracion}`},
  3048: {A1:['A1-120'], A2:['A2-IV-10'], note:`ITIC Academy, Bloque 42 «Redes» (2026.1), redes públicas/interconexión y SARA. En A2-IV-10 la relación es temática indirecta (WAN/interconexión), pues el epígrafe no menciona SARA expresamente. ${red}`},
  3049: {A1:['A1-108'], A2:['A2-II-8','A2-IV-10'], note:`ITIC Academy, Bloques 42 «Redes» y 43 «Protocolos» (2026.1), encaminamiento IP e IS-IS. ${red} ${protocolos}`},
  3050: {A1:['A1-110','A1-118'], A2:['A2-IV-7','A2-IV-8'], note:`ITIC Academy, Bloque 42 «Redes» (2026.1), fibra óptica, Ethernet y LAN. ${red}`}
};
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = academy[c.id];
  assert.ok(q && q.revision && m, `Falta pregunta o mapeo ${c.id}`);
  for (const t of [...m.A1, ...m.A2]) assert.ok(topics.has(t), `Tema oficial inexistente: ${t}`);
  const note = `${m.note} Correspondencias contrastadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); la academia es material auxiliar, no fuente normativa.`;
  q.revision.observaciones += ` Cotejo curricular: ${note}`;
  q.clasificacion = {A1:m.A1, A2:m.A2, bloque_academia:note, estado:'revisada', nota:`${q.revision.estado}. ${note}`};
  q.comentarios = q.revision.observaciones;
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Clasificación oficial A1/A2 y cotejo curricular ITIC Academy añadidos al lote 546.');
