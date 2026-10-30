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
const section = `## Lote 623 — 30 de octubre de 2026

IDs 3431–3435 revisados individualmente. Se comprobó la respuesta y se añadieron explicación, fuentes primarias y correspondencia temática; los originales están íntegros en [cambios-lote-623.json](cambios-lote-623.json).
- **3431 — gatekeeper H.323:** se precisa que el gatekeeper es opcional en una zona; si está presente, ofrece control de admisión RAS mediante ARQ/ACF/ARJ, que puede configurarse como función nula. No se confunde el control de admisión con autorización de llamadas o enrutamiento de señalización. **Corregida.** A1-116/130; A2-IV-14/IV-16.
- **3432 — escritorio remoto:** se pregunta por tecnología; VNC proporciona acceso/control gráfico y usa RFB como protocolo. NNTP, NTP y FTP tienen fines distintos. No se encontró un tratamiento VNC/RFB específico en el material académico localizado. **Corregida.** A1-54/131; A2-IV-12.
- **3433 — Guía de Comunicación Digital AGE:** se identifica la edición de 2014 y su §1.4: no crear sitio móvil separado, crear sitio específico o adaptar el sitio al dispositivo; WYSIWYG es un modo de autoría. Se señala que la referencia es histórica, no una norma técnica vigente. **Corregida.** A1-44/65/124; A2-III-14.
- **3434 — RAID:** se conserva la clave falsa: RAID 5 no tiene un disco fijo de paridad dedicada, sino paridad distribuida. Se sustituyó una comparación de rendimiento RAID 1/0 dependiente de implementación por la propiedad inequívoca del espejo RAID 1. **Corregida.** A1-56; A2-IV-5.
- **3435 — eIDAS, art. 19.2:** se delimita a brechas con impacto significativo en el servicio o los datos personales mantenidos. Prestadores cualificados y no cualificados notifican al órgano de supervisión sin demora indebida y, como máximo, 24 horas tras conocerlas. Se separa de obligaciones del art. 24 limitadas a prestadores cualificados emisores de certificados cualificados. **Corregida.** A1-80/81; A2-I-6.

Fuentes primarias: [UIT-T H.323 vigente](https://www.itu.int/rec/T-REC-H.323/en) y [texto H.323, §6.4](https://www.itu.int/rec/dologin_pub.asp?id=T-REC-H.323-200011-S%21%21PDF-E&lang=e&type=items); IETF [RFC 6143](https://www.rfc-editor.org/rfc/rfc6143.html) y [RFC 7869](https://www.rfc-editor.org/rfc/rfc7869.html); [Guía de Comunicación Digital AGE, edición 2014](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8e88a7d3-296b-4ebe-b1ea-9b45f3dbaee4/Guia-de-Comuincacion-Digital_2014-06-26_.pdf); Oracle [RAID software en Oracle Linux 10](https://docs.oracle.com/en/operating-systems/oracle-linux/10/stordev/stordev-SoftwareRAIDLevels.html), [fundamentos RAID](https://docs.oracle.com/cd/E19487-01/817-3337-18/appa_raid_basic.html) y Linux [md(4)](https://manpages.debian.org/unstable/mdadm/md.4.en.html); [Reglamento eIDAS consolidado](https://eur-lex.europa.eu/eli/reg/2014/910).

Cotejo Drive: ITIC Academy [bloques 43](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk) y [50](https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk) como encuadre para protocolos, comunicaciones y colaboración; no se halló exposición específica de VNC/RFB ni de funciones obligatorias H.323. El [bloque 47](https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk) incluye diseño adaptable (RWD) en §2.1; [bloque 26](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk) trata hardware/RAID; [bloques 48](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk) y [36](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk) sirven de contexto para seguridad, certificados e identidad. La respuesta de la pregunta 3433 procede del epígrafe A2-III-14, que menciona la guía AGE. Material académico no sustituye normas o estándares fuente.

Se cotejaron los programas de la convocatoria [A1 BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, y [A2 GSI BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, así como los identificadores de [temario-oficial.json](temario-oficial.json). En las fichas BOE consultadas el 30-10-2026 no se localizó rectificación posterior de dichos programas; esta anotación se limita a las fichas revisadas.

`;
const p = path.join(__dirname, 'README.md');
let s = fs.readFileSync(p, 'utf8');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, `Último lote secuencial aplicado: 623 (IDs 3431–3435). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`);
if (!s.includes('## Lote 623 —')) s = s.replace('## Lote 622 —', section + '## Lote 622 —');
fs.writeFileSync(p, s);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
