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
const summary = `Último lote secuencial aplicado: 727 (IDs 3956–3960). Acumulado: ${total} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = [
  '## Lote 727 — 5 de noviembre de 2026', '',
  'IDs 3956–3960 revisados individualmente; las versiones originales se preservan en [cambios-lote-727.json](cambios-lote-727.json).', '',
  '- **3956 — H.323/H.235:** se precisa que H.323 opera sobre redes de paquetes y ofrece audio/vídeo/datos; H.235.x aporta perfiles de seguridad, sin asumir protección E2E automática. **Corregida.**',
  '- **3957 — IdM/IdAM:** se define gestión del ciclo de vida de identidades, credenciales y accesos; se descartan las definiciones absolutas o restringidas a PKI. **Corregida.**',
  '- **3958 — Guía de Comunicación Digital AGE:** se limita a la edición 2014 y a las tres partes temáticas del cuerpo, distinguiéndolas de los anexos. **Histórica.**',
  '- **3959 — IEEE 1219:** el cambio del entorno de tecnología corresponde a mantenimiento adaptativo según IEEE 1219-1998, hoy reemplazado. **Histórica.**',
  '- **3960 — ingeniería directa:** se separa la construcción desde requisitos/diseño de la ingeniería inversa a partir de un sistema existente. **Corregida.**', '',
  'Fuentes primarias: [ITU-T H.323, resumen oficial](https://www.itu.int/dms_pubrec/itu-t/rec/h/T-REC-H.323-202203-P%21%21SUM-HTM-E.htm); [ITU-T H.235.0, marco de seguridad H.323](https://www.itu.int/rec/T-REC-H.235.0-201401-I/en); [NIST SP 1800-2, gestión de identidades y accesos](https://www.nccoe.nist.gov/publication/1800-2/VolB/); [Guía de Comunicación Digital AGE, introducción 2014](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A25ffa916-b49d-439a-802f-3d6639687b7d/0-Guia-de-Comunicacion-Digital-para-la-AGE-Introducion.pdf); [IEEE SA, estado de IEEE 1219-1998](https://standards.ieee.org/ieee/1219/1842/) y [texto de IEEE 1219-1998, definición de mantenimiento adaptativo](https://www.cs.uah.edu/~rcoleman/CS499/CourseTopics/IEEE_Std_1219-1998.pdf); [Chikofsky y Cross, taxonomía de ingeniería directa/inversa](https://www.cs.cmu.edu/~aldrich/courses/654-sp05/ReengineeringTaxonomy.pdf); [IEEE/EIA 12207.2-1997, modelo de reingeniería](https://www.dote.osd.mil/Portals/97/docs/TEMPGuide/IEEE_EIA_12207.2_1997.pdf).', '',
  'Cotejo académico en Drive: [bloque 43, Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk) y [bloque 48, Seguridad en redes y aplicaciones](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk) para H.323/H.235; [bloque 50, Videoconferencia, SSO y trabajo colaborativo](https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk) para IdM y la Guía AGE; [bloque 39, Calidad y mantenimiento](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk) para mantenimiento; [bloque 38, Análisis, diseño y construcción de sistemas](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk) para ciclo de vida/ingeniería de software. Correspondencia con [convocatoria A1 GSI 2025, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [A2 GSI 2025, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262): 3956 A1-116/125 y A2-IV-14/II-13; 3957 A1-131/A2-II-13; 3958 A1-133/A2-III-14; 3959 A1-101/A2-III-8; 3960 A1-86/A2-III-2.', '',
  'Comprobaciones: inventario y verificador ejecutados tras el lote; originales conservados en el registro.', ''
].join('\n');
const file = path.join(dir, 'README.md');
let s = fs.readFileSync(file, 'utf8');
s = s.replace(/^# Revisión del banco TIC — estado al .*$/m, '# Revisión del banco TIC — estado al 5 de noviembre de 2026');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!s.includes('## Lote 727 —')) s = s.replace('## Lote 726 —', `${section}\n## Lote 726 —`);
fs.writeFileSync(file, s);
console.log(`README: ${total} examinadas; ${left} por revisar; ${changed} cambios de contenido.`);
