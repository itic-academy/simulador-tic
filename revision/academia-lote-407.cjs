const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-407.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  process: { url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', label: 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», edición 2026.1 (18-09-2026): incluye el análisis dinámico y el modelado de procesos del tema A1-90.' },
  software: { url: 'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk', label: 'ITIC Academy, bloque 18 «Protección jurídica, licencias y control del software», edición 2026.1 (26-08-2026): desarrolla la protección jurídica de programas y los derechos de explotación; encuadre A1-43/A2-II-14.' },
  os: { url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 «Sistemas operativos», versión 2026.1: Windows y administración de sistemas operativos; se usa para el encuadre curricular, y la distinción entre roles/features se verifica en Microsoft Learn.' },
  protocols: { url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', label: 'ITIC Academy, bloque 43 «Protocolos», actualización 2026: familias de protocolos y comunicaciones; el detalle de direccionamiento XMPP/JID se apoya en la especificación IETF, no se atribuye a Academy.' },
  eni: { url: 'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk', label: 'ITIC Academy, bloque temático de Interoperabilidad de Sistemas, versión 2026.2 (14-08-2026): temas A1-45/46 y A2-I-9; incluye el ENI y las normas técnicas de interoperabilidad.' }
};
const mapping = {
  2351: { topics: ['A1-90'], doc: 'process', detail: 'Se clasifica en A1-90 (modelado de procesos y análisis dinámico). No se fuerza una correspondencia A2: los DFD no aparecen expresamente como epígrafe autónomo en el programa GSI.' },
  2352: { topics: ['A1-43', 'A2-II-14'], doc: 'software', detail: 'La duración de derechos de explotación de programas se vincula a la protección jurídica del software en ambos programas.' },
  2353: { topics: ['A1-59', 'A2-II-2'], doc: 'os', detail: 'Windows Server se clasifica en fundamentos de sistemas operativos (A1-59) y características/administración de sistemas Windows (A2-II-2).' },
  2354: { topics: ['A1-116', 'A2-II-8'], doc: 'protocols', detail: 'La dirección JID se relaciona con protocolos de comunicaciones y servicios de mensajería; el encuadre curricular es general, mientras RFC 7622 define el formato técnico.' },
  2355: { topics: ['A1-45', 'A1-46', 'A2-I-9'], doc: 'eni', detail: 'Las NTI se encuadran en el ENI y en sus normas técnicas, conforme a A1-45/46 y A2-I-9.' }
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const calls = ['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.deepEqual(log.cambios.map(c => c.id), [2351, 2352, 2353, 2354, 2355]);
for (const change of log.cambios) {
  const q = bank.preguntas.find(x => x.id === change.id), m = mapping[change.id], d = docs[m.doc];
  assert.ok(q?.revision && m && d, `Falta pregunta o cotejo ${change.id}`);
  assert.ok(m.topics.every(x => official.has(x)), `Tema oficial inexistente: ${change.id}`);
  q.clasificacion.A1 = m.topics.filter(x => x.startsWith('A1-'));
  q.clasificacion.A2 = m.topics.filter(x => x.startsWith('A2-'));
  const curriculum = `${d.label} ${m.detail}`;
  const note = `Cotejo curricular: ${curriculum} Correspondencia comprobada en revision/temario-oficial.json y los anexos de los programas oficiales de las convocatorias A1 y A2 GSI BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). Academy se cita como material de encuadre; las respuestas se sustentan en las fuentes técnicas o normativas primarias indicadas.`;
  q.clasificacion.bloque_academia = `${d.url} — ${curriculum}`;
  q.clasificacion.nota = note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios = q.revision.observaciones;
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Cotejo curricular del lote 407 completado.');
