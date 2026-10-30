const fs = require('node:fs');
const path = require('node:path');

const files = fs.readdirSync(__dirname).filter(f => /^cambios-lote-\d+\.json$/.test(f));
const totals = {vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0};
let changed = 0;
for (const f of files) for (const c of JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8')).cambios) {
  totals[c.actualizada.revision.estado] = (totals[c.actualizada.revision.estado] || 0) + 1;
  if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
}
const n = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const left = 12123 - n;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const section = `## Lote 622 — 30 de octubre

IDs 3426–3430 revisados uno a uno con normas técnicas/documentación primaria, materiales de ITIC Academy en Drive y programas oficiales A1/A2. Los originales se conservan íntegros en [cambios-lote-622.json](cambios-lote-622.json).
- **3426 — filtrado de paquetes:** se delimita a un filtro básico; usa campos de cabecera de IP/transporte (direcciones, protocolo, puertos disponibles), no inspección profunda de la carga útil ni autenticación del usuario. **Corregida.** A1-125; A2-IV-12; Academy, bloque 48.
- **3427 — Apache TLS:** se confirma SSLProtocol para controlar versiones aceptadas; se da sintaxis actual de ejemplo para limitar a TLS 1.2 y se distingue de SSLCipherSuite. No se encontró en Drive material específico de configuración Apache; el dato se confirma en la documentación Apache. **Corregida.** A1-126; A2-III-12; Academy, bloque 48 como contexto de TLS/seguridad web.
- **3428 — IPsec:** se corrige la afirmación falsa de que siempre se añaden juntos cabecera AH y tráiler ESP; son formatos/protocolos distintos, cada uno con modo transporte/túnel. Se mantienen los servicios con alcance según protocolo/política. **Corregida.** A1-125; A2-IV-12; Academy, bloque 48.
- **3429 — SIP:** INVITE inicia la invitación a sesión y puede llevar una oferta SDP; no todo INVITE contiene necesariamente SDP. **Corregida.** A1-116; A2-IV-14; Academy, bloques 43 y 50.
- **3430 — voz IP:** se mantiene la respuesta «todas» pero se acota a factores que degradan calidad percibida de una comunicación VoIP: ancho de banda insuficiente, jitter y eco. Se distingue el eco (impedimento de voz) de las métricas de red. **Corregida.** A1-108/130; A2-IV-16; Academy, bloques 42 y 50.

Fuentes técnicas: [NIST SP 800-41 Rev. 1, filtrado de paquetes](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-41r1.pdf); [Apache mod_ssl, versión 2.4, SSLProtocol](https://httpd.apache.org/docs/2.4/mod/mod_ssl.html); IETF [RFC 4301](https://www.rfc-editor.org/rfc/rfc4301.html), [RFC 4302](https://www.rfc-editor.org/rfc/rfc4302.html), [RFC 4303](https://www.rfc-editor.org/rfc/rfc4303.html), [RFC 7296](https://www.rfc-editor.org/rfc/rfc7296.html), [RFC 3261](https://www.rfc-editor.org/rfc/rfc3261.html), [RFC 3264](https://www.rfc-editor.org/rfc/rfc3264.html) y [RFC 8866](https://www.rfc-editor.org/rfc/rfc8866.html); UIT-T [G.114](https://www.itu.int/itu-t/recommendations/rec.aspx?rec=6254), [G.1020](https://www.itu.int/dms_pubrec/itu-t/rec/g/T-REC-G.1020-200311-S%21%21SUM-HTM-E.htm), [G.131](https://www.itu.int/rec/T-REC-G.131-200311-I/en) y [P.940 (03/2025)](https://www.itu.int/epublications/publication/itu-t-p-940-2025-03-computational-model-used-for-the-monitoring-and-quality-assessment-of-videotelephony-services).

Cotejo Drive: ITIC Academy [bloque 48, seguridad de redes y capa de aplicación](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk) incluye cortafuegos, TLS y sección IPsec; la búsqueda no halló configuración específica de Apache SSLProtocol. [Bloque 43, Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk) incluye QoS, VoIP y señalización, y [bloque 50, videoconferencia y trabajo colaborativo](https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk) cubre calidad de comunicaciones/protocolos; [bloque 42, Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk) complementa QoS. Temario oficial comprobado en [convocatoria A1 BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) (anexo I) y [A2 GSI BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) (anexo IX), con revision/temario-oficial.json. El 30-10-2026 se consultaron las fichas consolidadas del BOE: no se localizó rectificación posterior del programa en ellas; la convocatoria BOE-A-2026-22558 es de cuerpos del Ministerio de Transportes, no modifica estos programas TIC. Los apuntes académicos son contexto, no sustituyen la norma/protocolo fuente.

`;
const p = path.join(__dirname, 'README.md');
let s = fs.readFileSync(p, 'utf8');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, `Último lote secuencial aplicado: 622 (IDs 3426–3430). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`);
if (!s.includes('## Lote 622 —')) s = s.replace('## Lote 621 —', section + '## Lote 621 —');
fs.writeFileSync(p, s);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
