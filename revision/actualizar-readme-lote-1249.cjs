const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const dir=__dirname, root=path.dirname(dir);
const data=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(dir,'cambios-lote-1249.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academyUrl='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academyRef='ITIC Academy, bloque 48 «Seguridad en Redes y en el Nivel de Aplicación», versión 2026.1 (30-09-2026): incluye análisis y gestión de riesgos, MAGERIT v3 y PILAR, con correspondencia curricular A1-47/A2-II.10. No se usa como fuente para la formulación de COBIT 4.1.';
for(const id of [6566,6567,6568,6569,6570]){
 const q=data.preguntas.find(x=>x.id===id), row=log.cambios.find(x=>x.id===id); assert.ok(q&&row,`id ${id}`);
 if(id===6570){
  for(const obj of [q,row.actualizada]) { const f=obj.revision.fuentes.find(x=>x.url.includes('1bF48')); assert.ok(f); f.url=academyUrl; f.referencia=academyRef; }
 }
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(data,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
const inv=JSON.parse(fs.readFileSync(path.join(dir,'inventario.json'),'utf8'));
const fmt=n=>n.toLocaleString('es-ES');
const examined=inv.total-inv.estados.sin_revisar;
const verified=inv.estados.vigente+inv.estados.corregida+inv.estados.historica;
const pending=inv.estados.pendiente_fuente+inv.estados.pendiente_ambiguedad;
let readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
readme=readme.replace(/Último lote secuencial:.*?sin revisar individualmente\./,`Último lote secuencial: 1249 (IDs 6566–6570). Acumulado: ${fmt(examined)} preguntas examinadas individualmente; ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas); ${fmt(pending)} pendientes documentadas (${fmt(inv.estados.pendiente_fuente)} de fuente y ${fmt(inv.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inv.estados.sin_revisar)} sin revisar individualmente.`);
const section=`## Lote 1249 — 14 de noviembre de 2026

Revisadas individualmente las preguntas 6566–6570. Se dejó explícita como pendiente una atribución a EFFORTS que no quedó demostrada por una fuente primaria y cuyas dos opciones de respuesta se solapan; se precisó el número de parte ISO vigente para la definición de usabilidad; se corrigieron los niveles de conformidad WCAG 2.1; se reformuló el perfil mínimo de firma electrónica NTI como EPES; y se acotó a COBIT 4.1 una formulación histórica sobre transparencia de riesgos. Se preservaron los cinco enunciados y opciones originales en el registro de cambios, se contrastó el temario A1/A2 y se buscó el material curricular de ITIC Academy en Drive.

- **6566 — EFFORTS:** no se valida la clave original. La búsqueda en fuentes oficiales UE/Comisión y en Drive no identificó una fuente primaria que relacione inequívocamente el acrónimo con la descripción. La página oficial de una acción ISA² sobre racionalización TIC sirve solo como contexto, no como prueba de identidad. Además, las opciones primera y cuarta se solapan. Estado **pendiente de aclaración**; clasificación provisional A1-5/A1-49 y A2-I-9 por materia, no por identificación confirmada. Academy, bloque 03, cubre sociedad de la información España-UE y administración digital, pero no el término exacto.
- **6567 — usabilidad:** corregida B: **ISO 9241-11:2018**, vigente y confirmada por ISO en 2023; se completa la referencia de serie/parte para distinguirla de ISO/IEC 9126 y de normas de seguridad. A1-44/A2-III-14; Academy, bloque 03 como contexto de accesibilidad/usabilidad.
- **6568 — WAI/WCAG 2.1:** corregida B. WCAG 2.1 es una Recomendación W3C desarrollada en WAI. El nivel A exige todos los criterios A, AA todos los A y AA, y AAA todos los anteriores más AAA; la conformidad AAA no se recomienda como política general para un sitio completo. A1-44/A2-III-14; Academy, bloque 03.
- **6569 — formato NTI de firma:** corregida B: el perfil mínimo **-EPES** combina clase básica BES e información de política de firma/sello; las organizaciones pueden añadir reglas compatibles, pero BES aislado no satisface el perfil mínimo indicado. Se acota a la sección III.4.3 de la NTI. A1-8/46 y A2-I.6/I.9; Academy, bloque 03.
- **6570 — gestión de riesgos:** histórica, respuesta B según el área «Risk Management» de **COBIT 4.1**: conciencia y apetito de riesgo, transparencia respecto a riesgos significativos e integración de responsabilidades en la organización. No se atribuye sin contexto a las versiones actuales de COBIT. A1-47/A2-II.10; Academy, bloque 48, «Seguridad en Redes y en el Nivel de Aplicación», edición 2026.1, con riesgos/MAGERIT.

Fuentes primarias/técnicas: [Comisión Europea, racionalización de sistemas TIC (ISA²)](https://ec.europa.eu/isa2/actions/evaluating-and-rationalising-ict-public-administrations_en/) —solo contexto, no confirma EFFORTS; [ISO 9241-11:2018](https://www.iso.org/standard/63500.html) y [definición en ISO OBP](https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A9241%3A-222%3Aed-1%3Av1%3Aen); [W3C WCAG 2.1](https://www.w3.org/TR/WCAG21/); [NTI de Política de Firma y Sello, BOE-A-2016-10146, sec. III.4.3](https://www.boe.es/buscar/act.php?id=BOE-A-2016-10146); [ITGI/ISACA, COBIT 4.1, resumen ejecutivo, área Risk Management](https://www.csu.edu/internalaudit/documents/CobiT-4.1-Brochure.pdf) (documento primario de ISACA, copia en CSU). Programas: [convocatoria GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), temas 5, 44, 46 y 47; [convocatoria GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), temas I.6/I.9, II.10 y III.14. Cotejo Drive: [bloque 03 — Actuación administrativa y Administración digital](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk) y [bloque 48 — Seguridad en Redes y en el Nivel de Aplicación](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk). Los bloques académicos orientan la adscripción, no sustituyen la evidencia primaria citada.

Inventario local: ${fmt(examined)} examinadas; ${fmt(verified)} verificadas (${fmt(inv.estados.vigente)} vigentes, ${fmt(inv.estados.corregida)} corregidas y ${fmt(inv.estados.historica)} históricas); ${fmt(pending)} pendientes (${fmt(inv.estados.pendiente_fuente)} de fuente y ${fmt(inv.estados.pendiente_ambiguedad)} de ambigüedad); ${fmt(inv.estados.sin_revisar)} sin revisar; errores estructurales ${inv.errores_estructurales.length}. Ejecutados inventario.cjs, verificar.cjs y git diff --check. Pendiente verificar la publicación del lote.

`;
assert.ok(readme.includes('## Lote 1248 —'),'missing prior heading'); assert.ok(!readme.includes('## Lote 1249 —'),'already inserted');
const at=readme.indexOf('## Lote 1248 —'); readme=readme.slice(0,at)+section+readme.slice(at);
fs.writeFileSync(path.join(dir,'README.md'),readme);
console.log(`README actualizado: ${examined} examinadas; ${verified} verificadas; ${pending} pendientes; ${inv.estados.sin_revisar} sin revisar.`);
