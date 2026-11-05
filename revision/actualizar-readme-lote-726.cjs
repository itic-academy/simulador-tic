const fs = require('node:fs');
const path = require('node:path');
const dir = __dirname;
const totals = { vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0 };
let changed = 0;
for (const f of fs.readdirSync(dir).filter(x => /^cambios-lote-\d+\.json$/.test(x))) {
  for (const c of JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')).cambios) {
    totals[c.actualizada.revision.estado]++;
    if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
  }
}
const total = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const left = 12123 - total;
const summary = `Último lote secuencial aplicado: 726 (IDs 3951–3955). Acumulado: ${total} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 726 — 5 de noviembre de 2026', '',
  'IDs 3951–3955 revisados individualmente. Se conservan los enunciados, las opciones y las claves anteriores en [cambios-lote-726.json](cambios-lote-726.json).', '',
  '- **3951 — DVB-T/TDT:** se corrige la afirmación sobre degradación progresiva; se explica el umbral de recepción y el efecto cliff-edge digital. **Corregida.**',
  '- **3952 — correo:** se distingue FTP como transferencia de ficheros de IMAP/SMTP; MIME es formato/extensión de contenido, no transporte/acceso de correo. **Corregida.**',
  '- **3953 — IMAP4:** se explican buzones remotos, resincronización y descarga selectiva; se elimina la afirmación absoluta de que sincroniza sin descargar mensajes. **Corregida.**',
  '- **3954 — HSDPA:** se identifica como mejora de UMTS/3G; «3.5G» es denominación divulgativa y se conserva como dato histórico. **Histórica.**',
  '- **3955 — Kerberos:** se separan sus funciones de las de IPsec, DNSSEC y DANE/TLSA. **Corregida.**', '',
  'Fuentes primarias: [ITU-R, Handbook on Digital Terrestrial Television, efecto cliff-edge](https://www.itu.int/dms_pub/itu-r/oth/0a/07/R0A0700003B0001PDFE.PDF); [RFC 9051, IMAP4rev2](https://www.rfc-editor.org/rfc/rfc9051.html); [RFC 5321, SMTP](https://www.rfc-editor.org/rfc/rfc5321.html); [RFC 2045, MIME](https://www.rfc-editor.org/rfc/rfc2045.html); [RFC 959, FTP](https://www.rfc-editor.org/rfc/rfc959.html); [ETSI/3GPP TS 25.308, HSDPA sobre UMTS](https://www.etsi.org/deliver/etsi_ts/125300_125399/125308/18.00.00_60/ts_125308v180000p.pdf); [RFC 4120, Kerberos V5](https://www.rfc-editor.org/rfc/rfc4120.html); [RFC 4033, DNSSEC](https://www.rfc-editor.org/rfc/rfc4033.html); [RFC 6698, DANE](https://www.rfc-editor.org/rfc/rfc6698.html).', '',
  'Cotejo académico en Drive: [bloque 42, Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk) para DVB-T; [bloque 45, tema 122, Correo, mensajería y directorios](https://docs.google.com/document/d/1TquAQ4a5u1wiDtMpLGimvmFONKEQa2Gv/edit?usp=drivesdk) para IMAP/SMTP/MIME; [bloque 46, Redes inalámbricas y comunicaciones móviles](https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk) para HSDPA; [bloque 48, Seguridad en redes y aplicaciones](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk) para Kerberos. Correspondencia contrastada con las convocatorias oficiales [A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3951 A1-108/A2-IV-7; 3952–3953 A1-122/A2-IV-13; 3954 A1-123/A2-IV-15; 3955 A1-125/A2-II-13.', '',
  'Comprobaciones: se ejecutaron inventario y verificador tras aplicar los cambios; los originales permanecen en el registro de lote.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let s = fs.readFileSync(file, 'utf8');
s = s.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!s.includes('## Lote 726 —')) s = s.replace('## Lote 725 —', `${section}\n## Lote 725 —`);
fs.writeFileSync(file, s);
console.log(`README: ${total} examinadas; ${left} por revisar; ${changed} cambios de contenido.`);
