const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-727.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = {
  3956: { a1: ['116','125'], a2: ['IV-14','II-13'], url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', detail: 'ITIC Academy, bloque 43 «Protocolos», edición 2026: H.323/VoIP y comunicaciones multimedia; el bloque 48, «Seguridad en redes y aplicaciones», trata los mecanismos de seguridad. La correspondencia curricular es A1-116/A2-IV-14 (VoIP y convergencia) y A1-125/A2-II-13 (seguridad); el alcance exacto de H.235 se contrasta con ITU-T.' },
  3957: { a1: ['131'], a2: ['II-13'], url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', detail: 'ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», versión 2026.1: gestión de identidades e inicio de sesión único; encuadre en A1-131 y A2-II-13. El ciclo de identidad/accesos se concreta con NIST SP 1800-2.' },
  3958: { a1: ['133'], a2: ['III-14'], url: 'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk', detail: 'ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», versión 2026.1: Guía de Comunicación Digital de la AGE; correspondencia expresa con A1-133 y A2-III-14. La estructura histórica se comprueba en la introducción oficial de la guía AGE de 2014.' },
  3959: { a1: ['101'], a2: ['III-8'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», versión 2026: tipologías de mantenimiento de software; correspondencia A1-101/A2-III-8. Se mantiene la pregunta sobre IEEE 1219-1998 como histórica, y la definición se verifica en ese estándar.' },
  3960: { a1: ['86'], a2: ['III-2'], url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', detail: 'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas de información», edición 2026: ciclo de vida, modelado, construcción y reingeniería; correspondencia A1-86/A2-III-2. La distinción entre ingeniería directa e inversa se contrasta con la taxonomía IEEE de Chikofsky y Cross.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = academy[c.id];
  if (!q?.revision || !q.clasificacion || !m) throw new Error(`Falta revisión o cotejo: ${c.id}`);
  q.clasificacion.A1 = m.a1.map(x => `A1-${x}`);
  q.clasificacion.A2 = m.a2.map(x => `A2-${x}`);
  q.clasificacion.bloque_academia = `Cotejo temático con ${m.detail}`;
  q.clasificacion.nota = 'El material de academia orienta el encuadre curricular; la respuesta y las matizaciones se contrastan con estándares y documentación primaria.';
  q.revision.observaciones = `${q.revision.observaciones} ${m.detail}`;
  q.comentarios = q.revision.observaciones.trim();
  for (const f of [
    { url: m.url, referencia: m.detail },
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  if (c.id === 3956) {
    const extra = { url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 48 «Seguridad en redes y aplicaciones», actualización 2026: seguridad de protocolos y comunicaciones.' };
    if (!q.revision.fuentes.some(x => x.url === extra.url)) q.revision.fuentes.push(extra);
  }
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y programas oficiales A1/A2 aplicado a IDs 3956–3960.');
