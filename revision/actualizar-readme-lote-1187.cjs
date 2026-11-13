const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1186 (IDs 6251–6255). Acumulado: 6.250 preguntas examinadas individualmente; 6.140 verificadas (1.209 vigentes, 4.484 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.873 sin revisar individualmente.';
const neu='Último lote secuencial: 1187 (IDs 6256–6260). Acumulado: 6.255 preguntas examinadas individualmente; 6.145 verificadas (1.209 vigentes, 4.489 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.868 sin revisar individualmente.';
const section=`## Lote 1187 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6256–6260 sobre pruebas alfa, fundamentos de ingeniería del software, Gitflow, configuración y estado de repositorios Git. Se corrigen las cinco para separar conceptos que los enunciados originales mezclaban o expresaban con ambigüedad.

- **6256 — pruebas alfa:** **corregida**, respuesta B. No equivale a caja negra/blanca: ISTQB la define como una prueba de aceptación en el entorno de pruebas del desarrollador realizada por personas externas a la organización de desarrollo. A1-96/A2-III.7.
- **6257 — ingeniería del software:** **corregida**, respuesta C. IEEE la define como aplicación de enfoques sistemáticos, disciplinados y cuantificables al desarrollo, operación y mantenimiento; no se limita a programar. A1-86/88/A2-III.1/III.2.
- **6258 — ramas Gitflow:** **corregida**, respuesta B. Se pregunta por el modelo clásico de Driessen: master, develop, release, feature y hotfix. Es un flujo de trabajo concreto, no un estándar obligatorio; el autor advirtió que no debe tratarse como dogma. A1-102/A2-IV.4.
- **6259 — configuración software:** **corregida**, respuesta C. Se precisa la diferencia entre la configuración (características funcionales y físicas documentadas o materializadas del elemento) y la gestión de configuración que identifica y controla cambios. A1-100/102/A2-IV.4.
- **6260 — git status:** **corregida**, respuesta A. Muestra diferencias entre árbol de trabajo, índice y HEAD; puede mostrar relación ahead/behind con upstream cuando este está configurado. A1-102/A2-IV.4.

Fuentes técnicas/primarias: [ISTQB Glossary](https://glossary.istqb.org/) y [glosario oficial de pruebas](https://api.glossary.istqb.org/storage/help/R0uz58NqLzUz48LVUuyGSF76NFj4LHQazSs0GlNS.pdf); [IEEE Std 610.12-1990, glosario de ingeniería del software](https://www.nist.gov/system/files/documents/2025/04/29/61012-1990.pdf) y [IEEE Computer Society, ingeniería del software como tecnología en capas](https://www.computer.org/publications/tech-news/trends/software-engineering-as-a-layered-technology); [Vincent Driessen, modelo de ramas Gitflow y nota de 2020](https://nvie.com/posts/a-successful-git-branching-model/); [Git, git-status](https://git-scm.com/docs/git-status) y [git-branch](https://git-scm.com/docs/git-branch); [FDA, glosario de terminología de desarrollo de software que cita IEEE](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-guides/glossary-computer-system-software-development-terminology-895); [ISO, gestión de configuración](https://www.iso.org/information-security/configuration-management).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 86, 88, 96, 100 y 102; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas III.1, III.2, III.7 y IV.4.

Cotejo académico (cobertura, no evidencia de respuesta): [ITIC Academy, bloque 39 Calidad y Mantenimiento](https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk), para pruebas, gestión de configuración y versiones (6256, 6258–6260); [bloque 38 Análisis, Diseño y Construcción de Sistemas](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk), para ingeniería y ciclo de vida (6257). En el registro se normalizan las referencias académicas heredadas D7/D1/D2/C4 a la estructura A2 de convocatoria actual.

Ejecutados revisar-lote-1187.cjs, academia-lote-1187.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.255 examinadas; 6.145 verificadas; 110 pendientes documentadas; 5.868 aún sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide resumen previo al lote 1187');assert.ok(s.includes('## Lote 1186 — 13 de noviembre de 2026'),'No se encontró lote anterior');
s=s.replace(old,neu).replace('## Lote 1186 — 13 de noviembre de 2026',section+'## Lote 1186 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1187.');
