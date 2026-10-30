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
const summary = `Último lote secuencial aplicado: 634 (IDs 3486–3490). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 634 — 30 de octubre de 2026

IDs 3486–3490 revisados individualmente y conservados en [cambios-lote-634.json](cambios-lote-634.json).
- **3486 — frameworks de pruebas .NET:** se elimina el contraste ambiguo entre “xUnit” y “xUnit.net” y se identifica xUnit.net con opciones de ecosistemas distintos. **Corregida.** A1-66; A2-III-11.
- **3487 — nslookup:** se reemplaza el antiguo hostname www.map.es por una pregunta sobre la función DNS, sin memorizar una IP cambiante; no equivale a obtener MAC, medir latencia ni listar ficheros remotos. **Corregida.** A1-109; A2-IV-13.
- **3488 — claves de la PKI del DNIe:** la DPC DGP vigente v3.4 distingue ambas jerarquías: raíces 4096 bits; subordinadas de Raíz 2048 y subordinadas de Raíz 2, 4096. **Corregida.** A1-80/A1-81; A2-I-6.
- **3489 — ADO.NET:** se normaliza la grafía y se distingue la tecnología de acceso a datos de sus componentes concretos DataSet/DataAdapter. **Corregida.** A1-66; A2-III-11.
- **3490 — OLAP:** se distinguen hechos, dimensiones y medidas del procesamiento transaccional OLTP. **Corregida.** A1-75; A2-II-4.

Fuentes técnicas primarias: [xUnit.net](https://xunit.net/); Microsoft Learn, [nslookup](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup), [IETF RFC 1035](https://www.rfc-editor.org/rfc/rfc1035.html), [ADO.NET Overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview), [.NET Framework Data Providers](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/data-providers), [Measures and Measure Groups](https://learn.microsoft.com/en-us/analysis-services/multidimensional-models/measures-and-measure-groups?view=sql-analysis-services-2025) y [Modeling Fact Tables](https://learn.microsoft.com/en-us/fabric/data-warehouse/dimensional-modeling-fact-tables); DGP, [Declaración de Prácticas de Certificación DNIe v3.4, junio de 2026](https://www.dnielectronico.es/PDFs/Politicas_de_certificacion_v3.4.pdf), apartado 6.1.5, p. 110, y [catálogo oficial de políticas](https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_501).

Cotejo ITIC Academy en Drive: [bloque 30, Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), incluye A1-66/A2-D11 (.NET) y Java; [bloque 42, Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk), incluye Internet y servicios básicos en A1-109/A2-C11 (A2-IV-13); [bloque 36, Seguridad, Criptografía, Identificación y Firma](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk), cubre certificados digitales, PKI y DNIe; [bloque 34, Business Intelligence y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk), cubre almacenes, OLAP, hechos, dimensiones y medidas.

Programas cotejados contra [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y [temario-oficial.json](temario-oficial.json): A1-66/A2-III-11 (.NET), A1-109/A2-IV-13 (Internet/DNS), A1-80/A1-81/A2-I-6 (certificados, PKI y DNIe), A1-75/A2-II-4 (almacenes y OLAP).

Se ejecutaron inventario.cjs, verificar.cjs y git diff --check; estos controles automáticos comprueban estructura y trazabilidad, no sustituyen la revisión individual del contenido.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 634 —')) text = text.replace('## Lote 633 —', section + '## Lote 633 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
