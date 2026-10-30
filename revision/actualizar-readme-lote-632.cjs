const fs = require('node:fs');
const path = require('node:path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => /^cambios-lote-\d+\.json$/.test(f));
const totals = {vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0};
let changed = 0;
for (const file of files) for (const c of JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')).cambios) {
  totals[c.actualizada.revision.estado]++;
  if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
}
const n = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const left = 12123 - n;
const summary = `Último lote secuencial aplicado: 632 (IDs 3476–3480). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 632 — 30 de octubre de 2026

IDs 3476–3480 revisados individualmente y conservados en [cambios-lote-632.json](cambios-lote-632.json).
- **3476 — arquitectura Grid:** se identifica Fabric como capa inferior en el modelo de cinco capas de Globus; reúne recursos locales compartibles, como cómputo y almacenamiento. **Corregida.** A1-52; A2-II-1.
- **3477 — unidad de control:** se retira la generalización por tamaño de ordenador y se presenta el compromiso clásico: lógica cableada fija, normalmente rápida y menos flexible; microprogramación más modificable. **Corregida.** A1-52; A2-II-1.
- **3478 — ASCII:** se confirma American Standard Code for Information Interchange y se contextualiza como código histórico de 7 bits, sin equipararlo a Unicode. **Corregida.** A1-50; A2-II-9 como encuadre de estándares de texto.
- **3479 — virtualización del almacenamiento:** se limita la compatibilidad a un riesgo de integración en un entorno heterogéneo, dependiente de matrices y equipos; no se afirma que toda solución reduzca capacidad o elimine la complejidad. **Corregida.** A1-56; A2-IV-5.
- **3480 — JSP scriptlets:** se distingue el fragmento <% ... %> de la expresión <%= ... %> y la declaración <%! ... %>. Se advierte que, aunque siguen definidos por la especificación, se recomienda separar la lógica de negocio de las páginas. **Corregida.** A1-65; A2-III-12.

Fuentes técnicas: Foster, Kesselman y Tuecke, [The Anatomy of the Grid](https://www.mcs.anl.gov/papers/P870.pdf); University of Babylon, [Computer Architecture Lecture 8](https://www.uobabylon.edu.iq/eprints/publication_1_11548_1724.pdf) y University of Baghdad, [Lecture 6](https://learning-space.uoa.edu.iq/sites/default/files/2024-10/Lecture_6.pdf); IETF [RFC 20, ASCII](https://datatracker.ietf.org/doc/rfc20/); SNIA [Storage Virtualization](https://www.snia.org/sites/default/files/sniavirt.pdf) e IBM [Storage Virtualize compatibility reference](https://www.ibm.com/support/pages/concurrent-compatibility-and-code-cross-reference-ibm-storage-virtualize); Jakarta EE [Server Pages 3.0 Specification](https://jakarta.ee/specifications/pages/3.0/jakarta-server-pages-spec-3.0.pdf) y [Server Pages explained](https://jakarta.ee/learn/specification-guides/servlet-faces-and-server-pages-explained/).

Cotejo ITIC Academy en Drive: [bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), que incluye Grid Computing, arquitecturas de altos prestaciones y virtualización del almacenamiento; no se localizó en él la figura exacta de las capas Fabric ni la comparación de unidad de control; [bloque 30 Tecnologías de Sistemas de Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), para tecnologías web, Java y JSP; la sintaxis exacta se atribuye a Jakarta EE. No se localizó material académico específico de ASCII en la búsqueda efectuada; se indica el encuadre temático, sin afirmar cobertura literal. Para almacenamiento, el bloque 26 trata la virtualización, pero la compatibilidad de cada matriz/host se contrasta con documentación del fabricante y SNIA.

Programas cotejados contra [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y [temario-oficial.json](temario-oficial.json): A1-52/A2-II-1 para Grid y arquitectura; A1-50/A2-II-9 como encuadre de estándares/codificación de texto; A1-56/A2-IV-5 para almacenamiento; A1-65/A2-III-12 para JSP/web. La referencia al control de unidad se clasifica por proximidad en arquitectura/sistemas de altas prestaciones.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 632 —')) text = text.replace('## Lote 631 —', section + '## Lote 631 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
