const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-726.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = {
  3951: { a1: ['108'], a2: ['IV-7'], url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', detail: 'ITIC Academy, bloque 42 «Redes», edición 2026: encuadre de TDT/radiodifusión digital y transmisión radioeléctrica; el comportamiento concreto ante señal débil se verifica en el manual ITU-R citado.' },
  3952: { a1: ['122'], a2: ['IV-13'], url: 'https://docs.google.com/document/d/1TquAQ4a5u1wiDtMpLGimvmFONKEQa2Gv/edit?usp=drivesdk', detail: 'ITIC Academy, bloque 45, tema 122 «Correo, mensajería y directorios», versión 2026.1: protocolos y formatos de correo; la distinción normativa MIME/IMAP/SMTP/FTP se contrasta con los RFC citados.' },
  3953: { a1: ['122'], a2: ['IV-13'], url: 'https://docs.google.com/document/d/1TquAQ4a5u1wiDtMpLGimvmFONKEQa2Gv/edit?usp=drivesdk', detail: 'ITIC Academy, bloque 45, tema 122 «Correo, mensajería y directorios», versión 2026.1: acceso, organización y sincronización del correo; las capacidades exactas de IMAP4rev2 se verifican en RFC 9051.' },
  3954: { a1: ['123'], a2: ['IV-15'], url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', detail: 'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», edición 2026: UMTS, HSDPA y evolución móvil; el encuadre normativo se confirma con 3GPP TS 25.308.' },
  3955: { a1: ['125'], a2: ['II-13'], url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk', detail: 'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1: Kerberos y autenticación de red; la diferenciación respecto de DNSSEC y DANE se comprueba directamente en los RFC citados.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = academy[c.id];
  if (!q?.revision || !q.clasificacion || !m) throw new Error(`Falta revisión o cotejo: ${c.id}`);
  q.clasificacion.A1 = m.a1.map(x => `A1-${x}`);
  q.clasificacion.A2 = m.a2.map(x => `A2-${x}`);
  q.clasificacion.bloque_academia = `Cotejo temático con ${m.detail}`;
  q.clasificacion.nota = 'El material de academia orienta el encuadre curricular; respuestas y precisiones normativas se apoyan en las fuentes primarias citadas.';
  q.revision.observaciones = `${q.revision.observaciones} ${m.detail}`;
  q.comentarios = q.revision.observaciones.trim();
  for (const fuente of [
    { url: m.url, referencia: m.detail },
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === fuente.url)) q.revision.fuentes.push(fuente);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y temarios oficiales aplicado a IDs 3951–3955.');
