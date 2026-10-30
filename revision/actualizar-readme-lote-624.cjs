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
const section = `## Lote 624 — 30 de octubre de 2026

IDs 3436–3440 examinados individualmente. Los originales completos se conservan en [cambios-lote-624.json](cambios-lote-624.json); se cotejaron fuentes primarias, temario oficial, material de ITIC Academy y las convocatorias.
- **3436 — caducidad de contraseña:** se limita a Linux con shadow passwords: los parámetros de envejecimiento/caducidad están en /etc/shadow. No se generaliza el nombre del fichero a todos los sistemas Unix. **Corregida.** A1-60; A2-II-2.
- **3437 — almacén de datos:** Inmon caracteriza el data warehouse como temático, integrado, histórico/temporal y no volátil. “Volátil” no forma parte de las cuatro características. La clave original permanece válida. **Vigente.** A1-75; A2-II-4.
- **3438 — cifrado asimétrico:** se explicita el objetivo de confidencialidad: Pilar cifra con la clave pública de Antonio y el descifrado requiere su clave privada. Se añade la salvedad de que normalmente los mensajes se protegen con cifrado híbrido. **Corregida.** A1-79/80; A2-IV-12.
- **3439 — comando ps:** se confirma que informa del estado de procesos seleccionados; el formato y las opciones concretas dependen de la implementación Unix. La clave original permanece válida. **Vigente.** A1-60; A2-II-2.
- **3440 — modelo vectorial SIG:** se mantiene la afirmación falsa de que el vector no gestiona topología ni redes; se reformulan las alternativas para acotar las ventajas de almacenamiento a entidades discretas y distinguir superficies continuas, habitualmente adecuadas para ráster. No se fuerza una correspondencia A2: no se halló tema GSI específico de SIG. **Corregida.** A1-74.

Fuentes técnicas: Linux man-pages [shadow(5)](https://man7.org/linux/man-pages/man5/shadow.5.html) y [ps(1p)](https://man7.org/linux/man-pages/man1/ps.1p.html); Oracle [Database Concepts 12.2, almacenes de datos](https://docs.oracle.com/en/database/oracle/oracle-database/12.2/cncpt/database-concepts.pdf); NIST [Public and Private Key](https://csrc.nist.gov/glossary/term/Public_and_Private_Key); QGIS [modelo vectorial topológico GRASS](https://docs.qgis.org/4.2/en/docs/user_manual/grass_integration/grass_integration.html), [datos vectoriales](https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/vector_data.html) y [datos ráster](https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/raster_data.html); ArcGIS Pro [topología](https://pro.arcgis.com/en/pro-app/3.4/help/data/topologies/an-overview-of-topology-in-arcgis.htm).

Cotejo Drive: [bloque 27 Sistemas Operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk) cubre Unix/Linux, cuentas y procesos; [bloque 34 Business Intelligence y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk) incluye almacenes de datos; [bloques 36](https://drive.google.com/file/d/1e63zmnn7AdxZtHG6iIfiqbGqH7l7fjP6/view?usp=drivesdk) y [48](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk) encuadran criptografía asimétrica y seguridad en redes; [Tema 074 SIG](https://docs.google.com/document/d/13sxQ3m8eNgg-dLxtbUHY9AzXaEnJtyyN/edit?usp=drivesdk) cubre el modelo vectorial. La respuesta se fundamenta en los manuales técnicos enlazados, no solo en los apuntes.

Temas oficiales cotejados en el programa A1 de la [convocatoria BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y el programa GSI A2 de la [convocatoria BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), contrastados con [temario-oficial.json](temario-oficial.json). No se asignó tema A2 de SIG por analogía con datos o bases de datos: no se encontró una correspondencia directa en el programa consultado.

`;
const p = path.join(__dirname, 'README.md');
let s = fs.readFileSync(p, 'utf8');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, `Último lote secuencial aplicado: 624 (IDs 3436–3440). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`);
if (!s.includes('## Lote 624 —')) s = s.replace('## Lote 623 —', section + '## Lote 623 —');
fs.writeFileSync(p, s);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
