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
const summary = `Último lote secuencial aplicado: 637 (IDs 3501–3505). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = String.raw`## Lote 637 — 31 de octubre de 2026

IDs 3501–3505 revisados individualmente y conservados en [cambios-lote-637.json](cambios-lote-637.json).
- **3501 — Enterprise Beans asíncronos:** se identifica el message-driven bean como consumidor invocado al llegar un mensaje; se aclara que los session beans también pueden ofrecer métodos asíncronos aunque sus invocaciones sean síncronas por defecto. **Corregida.** A1-67; A2-III-10.
- **3502 — monitorización del SO:** se distingue la monitorización de rendimiento (contadores, tendencias, cuellos de botella) de la gestión de permisos. **Corregida.** A1-60; A2-II-2.
- **3503 — Configuration Manager:** se conserva la respuesta heredada SCCM, ahora Microsoft Configuration Manager, y se acota a configuración, inventario y cumplimiento; se documenta que el nombre SCCM y la gestión MDM local de móviles son históricos. **Histórica.** A1-61; A2-II-2.
- **3504 — preprocesamiento de datos:** Weka, pandas y RapidMiner AI Studio pueden realizar tareas de preparación, aunque uno es biblioteca y los otros plataformas; se actualiza la denominación de RapidMiner. **Corregida.** A1-71; A2-III-15.
- **3505 — arquitectura ANSI/SPARC:** se precisa que las vistas del nivel externo pueden limitar los datos visibles a cada usuario/aplicación y que la omisión de información financiera depende de los requisitos de diseño. **Corregida.** A1-63; A2-II-5.

Fuentes técnicas primarias: Eclipse Foundation [Jakarta Enterprise Beans 4.0 Core Specification, §§2.4 y 5](https://jakarta.ee/specifications/enterprise-beans/4.0/jakarta-enterprise-beans-spec-core-4.0.html); Microsoft Learn [Performance Monitor](https://learn.microsoft.com/en-us/troubleshoot/windows-server/support-tools/troubleshoot-issues-performance-monitor) y [auditoría de seguridad](https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/basic-audit-policy-recommendations); Microsoft Lifecycle [Configuration Manager](https://learn.microsoft.com/en-au/lifecycle/products/microsoft-configuration-manager), Microsoft Learn [hardware inventory](https://learn.microsoft.com/en-us/intune/configmgr/core/clients/manage/inventory/configure-hardware-inventory) y [compliance settings](https://learn.microsoft.com/en-us/intune/configmgr/compliance/get-started/get-started-with-compliance-settings); University of Waikato [Weka Explorer: Preprocess](https://ml.cms.waikato.ac.nz/weka/gui_explorer.html), pandas [User Guide](https://pandas.pydata.org/docs/user_guide/) y RapidMiner [AI Studio: data preparation](https://docs.rapidminer.com/latest/studio/guided/index.html); NBS/ANSI-X3/SPARC [Reference Model for DBMS Standardization, Fig. 4.2](https://www.govinfo.gov/content/pkg/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22/pdf/GOVPUB-C13-f55f11d78745e6c51f75a39a44913f22.pdf).

Cotejo ITIC Academy en Drive: [bloque 30 Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), Java/Jakarta EE; [bloque 27 Sistemas Operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk), Windows/Linux y administración de SO; [bloque 29 Bases de datos y SQL](https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk), ANSI/SPARC; y [bloque 34 Business Intelligence y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk), encuadre de preparación/explotación de datos. No se atribuye a la academia detalle literal de ConfigMgr ni APIs/filtros concretos: esas afirmaciones se contrastaron con los fabricantes y la especificación.

Temario cotejado con [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y [temario-oficial.json](temario-oficial.json): A1-67/A2-III-10 (Java/Jakarta EE); A1-60/A2-II-2 (sistemas operativos); A1-61/A2-II-2 (administración Microsoft); A1-71/A2-III-15 (ciencia y minería de datos); A1-63/A2-II-5 (SGBD y arquitectura ANSI/SPARC).

Se ejecutaron inventario.cjs, verificar.cjs y git diff --check; estos controles automáticos comprueban estructura y trazabilidad, no sustituyen la revisión individual del contenido.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 637 —')) text = text.replace('## Lote 636 —', section + '## Lote 636 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
