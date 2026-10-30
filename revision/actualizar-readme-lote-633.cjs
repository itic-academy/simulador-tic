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
const summary = `Último lote secuencial aplicado: 633 (IDs 3481–3485). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 633 — 30 de octubre de 2026

IDs 3481–3485 revisados individualmente y conservados en [cambios-lote-633.json](cambios-lote-633.json).
- **3481 — interfaces de línea de comandos y menús:** se elimina la generalización de que la CLI sea siempre más intuitiva; los menús pueden favorecer el reconocimiento y la CLI el recuerdo/eficiencia experta, según usuario y tarea. **Corregida.** A1-65; A2-III-14.
- **3482 — WMS:** se pregunta qué organismo publica el estándar OpenGIS: OGC. Se añade el matiz de la publicación de WMS 1.3.0 como ISO 19128. **Corregida.** A1-74; el material Academy del bloque SIG declara A2: NO APLICA.
- **3483 — estándares SIG:** se separan ISO 19115/FGDC CSDGM (metadatos), CSW (servicio de catálogo), WMS (mapas), WFS (entidades) y GML (codificación XML). **Corregida.** A1-74; el bloque Academy declara A2: NO APLICA.
- **3484 — jerarquías dimensionales:** se corrige la afirmación de que una dimensión solo puede tener una jerarquía; pueden coexistir varias jerarquías naturales/alternativas. **Corregida.** A1-75; A2-II-4.
- **3485 — applets Java:** se acota la pregunta al antiguo plug-in de navegador, se explica carga/ejecución cliente-servidor y sandbox, y se clasifica como histórica: Oracle eliminó el plug-in/visor en JDK 11 y retiró el API java.applet en JDK 26. **Histórica.** A1-67; A2-III-12 como encuadre de tecnología web.

Fuentes técnicas primarias: [Oxford Academic, Introduction to HCI, Commands and navigation](https://doi.org/10.1093/oso/9780192864543.003.0027); OGC [Web Map Service](https://www.ogc.org/standards/wms/), [Catalogue Service](https://www.ogc.org/standards/cat/), [Web Feature Service](https://www.ogc.org/standards/wfs/) y [Geography Markup Language](https://www.ogc.org/standards/gml/); FGDC [ISO geospatial metadata standards](https://www.fgdc.gov/metadata/iso-standards); [ISO 19128](https://www.iso.org/standard/40114.html); Kimball Group, [Multiple Hierarchies](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/multiple-hierarchies/); Oracle [JDK 26 APIs Removed](https://docs.oracle.com/en/java/javase/26/migrate/removed-apis.html), [JDK 26 significant changes](https://docs.oracle.com/en/java/javase/26/migrate/significant-changes-jdk-26-release.html) y [Applet Security](https://docs.oracle.com/javase/tutorial/deployment/applet/security.html).

Cotejo ITIC Academy en Drive: [bloque 30, Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), que cubre Java, web, UX y usabilidad; el documento actualizado sitúa Applet como tecnología histórica e indica que JDK 26 eliminó el API, aunque no desarrolla la pregunta de interfaz CLI/menús. [Bloque 33, E-learning y SIG](https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk) incluye estándares OGC WMS/WFS/WCS y explícitamente A2: NO APLICA. [Bloque 34, Business Intelligence y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk) trata almacenes, OLAP y modelado dimensional; no se atribuye a Academy el detalle de jerarquías alternativas, comprobado en Kimball Group.

Programas cotejados contra [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y [temario-oficial.json](temario-oficial.json): A1-65/A2-III-14 (interfaz, UX y usabilidad), A1-74 (SIG; el bloque Academy indica que A2 no aplica), A1-75/A2-II-4 (explotación dimensional de datos) y A1-67/A2-III-12 para el contexto histórico Java/web. La clasificación A2 de applets es contextual, no afirma que ese epígrafe mencione literalmente applets.

Se ejecutaron inventario.cjs, verificar.cjs y git diff --check; las verificaciones automáticas validan estructura y trazabilidad, no sustituyen la revisión individual de contenido.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 633 —')) text = text.replace('## Lote 632 —', section + '## Lote 632 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
