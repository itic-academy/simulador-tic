const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1178 (IDs 6211–6215). Acumulado: 6.210 preguntas examinadas individualmente; 6.100 verificadas (1.197 vigentes, 4.458 corregidas y 445 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.913 sin revisar individualmente.';
const neu='Último lote secuencial: 1179 (IDs 6216–6220). Acumulado: 6.215 preguntas examinadas individualmente; 6.105 verificadas (1.200 vigentes, 4.460 corregidas y 445 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.908 sin revisar individualmente.';
const section=`## Lote 1179 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6216–6220: microservicios, composición del Tribunal Constitucional, Haciendas locales, principios constitucionales de la Administración y estructura ministerial. Se corrigen 6216 y 6219; 6217, 6218 y 6220 se mantienen vigentes.

- **6216 — microservicios:** **corregida**, respuesta A. Se elimina el carácter absoluto de «pequeño» y HTTP: lo esencial es la autonomía y posibilidad de despliegue independiente; APIs HTTP son habituales, no obligatorias. A1-58/A2-II.7.
- **6217 — Tribunal Constitucional:** **vigente**, respuesta C. El artículo 159.1 CE dispone que dos miembros son propuestos por el CGPJ, cuatro por Congreso, cuatro por Senado y dos por Gobierno. A1-2/A2-I.2.
- **6218 — Haciendas locales:** **vigente**, respuesta D. El artículo 142 CE garantiza medios suficientes y enumera como financiación fundamental tributos propios y participación en tributos estatales y autonómicos. Ninguna otra opción reproduce esa regla. A1-3.
- **6219 — principios administrativos:** **corregida**, respuesta A. La centralización no figura en la lista literal del artículo 103.1 CE (eficacia, jerarquía, descentralización, desconcentración y coordinación). Se simplifica una opción para separar la lista constitucional de los calificativos de la Ley 40/2015. A1-4.
- **6220 — estructura ministerial:** **vigente**, respuesta B. El artículo 58 de la Ley 40/2015 establece Subsecretaría y, dependiendo de ella, Secretaría General Técnica. A1-4/A2-I.8.

Fuentes primarias: [Constitución Española, texto consolidado BOE actualizado a 20/05/2026](https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229&p=20260520), arts. 103.1, 142 y 159.1; [Ley 40/2015 consolidada BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566&p=20240802), arts. 58 y 63; [WG21/WG14 P2735R0](https://isocpp.org/files/papers/P2735R0.pdf); [Microsoft Learn sobre microservicios](https://learn.microsoft.com/en-us/devops/deliver/what-are-microservices) y [Martin Fowler, Microservices](https://martinfowler.com/microservices/).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 2, 3, 4 y 58; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas I.2, I.8 y II.7. Cotejo curricular ITIC Academy: [bloque 28 de SOA](https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk), arquitectura distribuida/microservicios; [bloque 01 de Constitución](https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk), Tribunal Constitucional, Administración local y AGE; [bloque 03 de actuación administrativa](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk), Leyes 39/40/2015. La academia se usa para delimitar cobertura curricular, no como autoridad jurídica.

Ejecutados revisar-lote-1179.cjs, academia-lote-1179.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.215 examinadas; 6.105 verificadas (1.200 vigentes, 4.460 corregidas y 445 históricas); 110 pendientes documentadas; 5.908 aún sin revisar; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide el resumen previo al lote 1179');assert.ok(s.includes('## Lote 1178 — 13 de noviembre de 2026'),'No se encontró el lote anterior');s=s.replace(old,neu).replace('## Lote 1178 — 13 de noviembre de 2026',section+'## Lote 1178 — 13 de noviembre de 2026');fs.writeFileSync(file,s);console.log('README actualizado para el lote 1179.');
