const fs = require('node:fs');
const path = require('node:path');
const dir = __dirname;
const totals = {vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0};
let changed = 0;
for (const file of fs.readdirSync(dir).filter(f => /^cambios-lote-\d+\.json$/.test(f))) {
  for (const c of JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')).cambios) {
    totals[c.actualizada.revision.estado]++;
    if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
  }
}
const n = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const left = 12123 - n;
const summary = `Último lote secuencial aplicado: 636 (IDs 3496–3500). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = String.raw`## Lote 636 — 31 de octubre de 2026

IDs 3496–3500 revisados individualmente y conservados en [cambios-lote-636.json](cambios-lote-636.json).
- **3496 — dirección de socket:** se explicita que un endpoint TCP se identifica por dirección IP y puerto; una conexión completa requiere dos sockets (local y remoto). **Corregida.** A1-109; A2-II-8.
- **3497 — categorías de sentencias SQL:** DDL, DML y DCL son grupos didácticos conocidos; se advierte que los gestores pueden clasificar operaciones como GRANT/REVOKE de forma distinta. **Corregida.** A1-64; A2-II-5.
- **3498 — agudeza visual y resolución de imagen:** se fija la distancia de observación a 25 cm y un minuto de arco; el paso equivalente es ≈72,7 µm y cae en 25–100 µm. No se presenta como regla universal de procesamiento. **Corregida.** A1-83; sin tema A2 directo.
- **3499 — escalabilidad vertical:** se define como aumento de capacidad de una instancia/servidor (scale up), frente a añadir instancias/nodos (scale out). **Corregida.** A1-53/A1-57; A2-II-1/A2-IV-6.
- **3500 — factores de implantación CRM:** se concreta el marco en estrategia, personas/adopción, procesos y tecnología; se aclara que “cuatro pilares” no es taxonomía normativa universal. **Corregida.** A1-72; A2-II-12.

Fuentes técnicas primarias: IETF [RFC 9293, §3.3.1](https://www.rfc-editor.org/rfc/rfc9293.html); IBM [Data Control Language](https://www.ibm.com/docs/en/netezza?topic=categories-data-control-language) y Oracle [Types of SQL Statements](https://docs.oracle.com/en/database/oracle/oracle-database/18/sqlrf/Types-of-SQL-Statements.html); UIT-R [Recommendation BT.1845-1](https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.1845-1-201003-I!!PDF-E.pdf); Microsoft Learn [Autoscaling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/auto-scaling) y [Azure Well-Architected Capacity](https://learn.microsoft.com/en-us/azure/architecture/framework/scalability/capacity); Microsoft Learn [Dynamics 365 implementation strategy](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/implementation-strategy) y Oracle [CRM Implementation](https://www.oracle.com/cx/what-is-crm/implementation/).

Cotejo ITIC Academy en Drive: [bloque 42 Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk) y [bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), TCP/IP e Internet; [bloque 29 Bases de datos, SQL y modelado](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), A1-64/A2-T5; [bloque 37 Tratamiento de imágenes](https://drive.google.com/file/d/1xTMCpPmwNi8hpb0nZ3sMqpgvrhLXT-yf/view?usp=drivesdk), A1-83; [bloque 26 Hardware y servidores](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), servidores/escalabilidad; y [bloque 30 Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), A1-72 CRM/ERP. La etiqueta A2-II-12 de CRM se cotejó directamente con el programa oficial; no se afirma que el bloque 30 la enumere como A2.

Programas contrastados con [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y [temario-oficial.json](temario-oficial.json): A1-109/A2-II-8 (socket/IP y transporte), A1-64/A2-II-5 (SQL), A1-83 (tratamiento de imágenes), A1-53/57/A2-II-1/IV-6 (servidores, escalabilidad y virtualización) y A1-72/A2-II-12 (CRM/gestión de atención a clientes).

Se ejecutaron inventario.cjs, verificar.cjs y git diff --check; estos controles automáticos comprueban estructura y trazabilidad, no sustituyen la revisión individual del contenido.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 636 —')) text = text.replace('## Lote 635 —', section + '## Lote 635 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
