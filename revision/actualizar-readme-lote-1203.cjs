const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1202 (IDs 6331–6335). Acumulado: 6.330 preguntas examinadas individualmente; 6.219 verificadas (1.230 vigentes, 4.535 corregidas y 454 históricas); 111 pendientes documentadas (45 de fuente y 66 de ambigüedad); 5.793 sin revisar individualmente.';
const neu='Último lote secuencial: 1203 (IDs 6336–6340). Acumulado: 6.335 preguntas examinadas individualmente; 6.224 verificadas (1.232 vigentes, 4.537 corregidas y 455 históricas); 111 pendientes documentadas (45 de fuente y 66 de ambigüedad); 5.788 sin revisar individualmente.';
const section=`## Lote 1203 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6336–6340 sobre JSON, datum WGS 84, AAA, XMLHttpRequest y el modelo EFQM. Se completan dos respuestas y una formulación ambigua; dos respuestas vigentes se confirman y una pregunta de versión antigua queda expresamente histórica.

- **6336 — JSON:** **corregida**, respuesta A. RFC 8259 expande JSON como JavaScript Object Notation y lo define como formato ligero, textual e independiente del lenguaje para intercambio de datos, legible/escribible por personas y analizable/generable por máquinas. Se completa la opción que estaba truncada. A1-65/A2-III.12.
- **6337 — datum:** **corregida**, respuesta D (WGS 1984/WGS 84). “El datum más utilizado” no delimitaba el ámbito; se concreta que se pregunta por el datum geodésico global usado por GPS. A1-74; el programa A2 no tiene tema específico SIG/datum. En Drive no se localizó un documento Academy específico sobre WGS 84/datum; se registra expresamente como ausencia de cotejo curricular directo.
- **6338 — AAA:** **vigente**, respuesta A: Authentication, Authorization and Accounting. La RFC 2903 documenta la arquitectura AAA. A1-125/A2-IV.12.
- **6339 — XMLHttpRequest:** **vigente**, respuesta B: stop no es método XHR; la especificación WHATWG incluye open, setRequestHeader y getAllResponseHeaders. A1-65/A2-III.12.
- **6340 — EFQM:** **histórica**, respuesta B únicamente para EFQM 2013: 6a ponderaba 75 % y 6b 25 %. Se identifica edición en el enunciado para evitar presentar esa ponderación como vigente. Academy 2026 cubre calidad en servicios públicos y EFQM 2025/CAF 2020. A1-103; no se fuerza tema A2 específico.

Fuentes: [RFC 8259 JSON](https://www.rfc-editor.org/rfc/rfc8259.html); [NGA — World Geodetic System 1984](https://earth-info.nga.mil/?action=wgs84&dir=wgs84); [RFC 2903 — AAA](https://www.rfc-editor.org/rfc/rfc2903.html); [WHATWG — XMLHttpRequest](https://xhr.spec.whatwg.org/); [EFQM Excellence Model 2013, Quality Scotland](https://www.qualityscotland.co.uk/sites/default/files/efqm/EFQM%20Excellence%20Model%20Book%202013.pdf) y [Universidad de Jaén, material EFQM 2013](https://www.ujaen.es/gobierno/efqm/sites/gobierno_efqm/files/uploads/COMUNICACION%20Y%20FORMACION/Pres_EqEvaluador_UJA_2013_vs1.pdf).

Convocatorias oficiales cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 65 (web), 74 (SIG), 103 (EFQM) y 125 (seguridad de redes); [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas III.12 (aplicaciones web) y IV.12 (seguridad en redes). A2 no incluye equivalencia directa para SIG/datum o EFQM en estos ítems, por lo que no se asigna artificialmente.

Cotejo curricular ITIC Academy/Drive: [bloque 30 Tecnologías de sistemas de información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk) como cobertura general de web/JavaScript (6336, 6339; sin atribuirle una definición específica de JSON/XHR); [bloque 48 Seguridad de redes y aplicaciones](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk) como cobertura general de autenticación/control de acceso (6338); [bloque 3 Actuación administrativa, edición 2026](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk) para calidad en servicios, EFQM 2025 y CAF 2020 (6340). Para 6337 se deja constancia de que no se localizó en Drive un material específico de datum geodésico.

Ejecutados revisar-lote-1203.cjs, academia-lote-1203.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario: 12.123 preguntas; 6.335 examinadas; 6.224 verificadas (1.232 vigentes, 4.537 corregidas y 455 históricas); 111 pendientes documentadas (45 de fuente, 66 de ambigüedad); 5.788 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'Resumen anterior no coincide');assert.ok(s.includes('## Lote 1202 — 13 de noviembre de 2026'),'Sección 1202 ausente');
s=s.replace(old,neu).replace('## Lote 1202 — 13 de noviembre de 2026',section+'## Lote 1202 — 13 de noviembre de 2026');fs.writeFileSync(file,s);console.log('README actualizado para lote 1203.');

