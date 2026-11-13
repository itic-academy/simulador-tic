const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1194 (IDs 6291–6295). Acumulado: 6.290 preguntas examinadas individualmente; 6.180 verificadas (1.219 vigentes, 4.511 corregidas y 450 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.833 sin revisar individualmente.';
const neu='Último lote secuencial: 1195 (IDs 6296–6300). Acumulado: 6.295 preguntas examinadas individualmente; 6.185 verificadas (1.222 vigentes, 4.513 corregidas y 450 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.828 sin revisar individualmente.';
const section=`## Lote 1195 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6296–6300 sobre prioridad de incidencias, órganos directivos de la AGE, pruebas de caminos básicos, agente base de Mobile IPv4 y virtualización completa. Las cinco quedan verificadas; se corrigen dos enunciados para eliminar imprecisiones.

- **6296 — priorización de incidencias:** **corregida**, respuesta C. La prioridad se calcula normalmente a partir de impacto y urgencia según la matriz de la organización; no se confunde prioridad (resultado) con los factores evaluados. A1-106/A2-IV-3.
- **6297 — órganos de la AGE:** **vigente**, respuesta A. El art. 55.3 Ley 40/2015 enumera a los Subdirectores generales entre los órganos directivos; Ministros y Secretarios de Estado son órganos superiores. A1-4; sin epígrafe A2 específico en el programa cotejado.
- **6298 — basis path testing:** **vigente**, respuesta B. NIST SP 500-235 identifica el structured/basis-path testing como técnica basada en la estructura de control y la complejidad ciclomática de McCabe; es una prueba estructural/de caja blanca. A1-96/A2-III-7.
- **6299 — Home Agent de Mobile IPv4:** **vigente**, respuesta B. RFC 5944 define el Home Agent como router de la red de origen que mantiene la ubicación registrada, intercepta datagramas destinados a la home address y los tuneliza a la care-of address. A1-115/A2-IV-13.
- **6300 — virtualización completa:** **corregida**, respuesta B. Cada VM tiene sistema operativo invitado/kernel propio y este se ejecuta sobre hardware virtual; el hipervisor gestiona invitados y media el flujo hacia el hardware físico. Se corrige «directamente sobre el hardware». A1-53/A1-57/A1-132/A2-II-1/A2-IV-6.

Fuentes primarias: [Gobierno de Ontario, GO-ITS 44 ITSM Terminology Reference Model](https://www.ontario.ca/page/go-its-44-itsm-terminology-reference-model), apéndice B, prioridad por impacto y urgencia; [Ley 40/2015 consolidada, art. 55](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&lang=es&p=20260929&tn=1#art55); [NIST SP 500-235, Structured Testing](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication500-235.pdf) y [glosario NIST de white-box testing](https://csrc.nist.gov/glossary/term/white_box_testing); [RFC 5944, §§1 y 4.2.3](https://www.rfc-editor.org/rfc/rfc5944.html); [NIST SP 800-125](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-125.pdf) y [NIST SP 800-125A Rev. 1](https://csrc.nist.gov/pubs/sp/800/125/a/r1/final).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 4, 53, 57, 96, 106, 115 y 132; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas III.7, IV.3, IV.6 y IV.13. El tema A2 I.3 describe el Gobierno, pero no la clasificación general de órganos AGE; no se fuerza equivalencia para 6297.

Cotejo curricular ITIC Academy —alcance temático, no validación de respuestas—: [bloque 41 ITIL y COBIT 2026](https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk), gestión de incidencias (6296); [bloque 01 Constitución, organización del Estado y AGE 2026](https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk), órganos de la AGE (6297); [bloque 39 Calidad y mantenimiento 2026](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), pruebas (6298); [bloque 43 Protocolos 2026](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), IP y encaminamiento (6299); [bloque Hardware, servidores, CPD y virtualización 2026](https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk), hipervisores y máquinas virtuales (6300). Se cotejaron los documentos accesibles en Drive junto con los anexos oficiales de convocatoria.

Ejecutados revisar-lote-1195.cjs, academia-lote-1195.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.295 examinadas; 6.185 verificadas (1.222 vigentes, 4.513 corregidas, 450 históricas); 110 pendientes; 5.828 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'El resumen previo no coincide con lote 1194');
assert.ok(s.includes('## Lote 1194 — 13 de noviembre de 2026'),'No se encontró la sección 1194');
s=s.replace(old,neu).replace('## Lote 1194 — 13 de noviembre de 2026',section+'## Lote 1194 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1195.');
