const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1185 (IDs 6246–6250). Acumulado: 6.245 preguntas examinadas individualmente; 6.135 verificadas (1.208 vigentes, 4.480 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.878 sin revisar individualmente.';
const neu='Último lote secuencial: 1186 (IDs 6251–6255). Acumulado: 6.250 preguntas examinadas individualmente; 6.140 verificadas (1.209 vigentes, 4.484 corregidas y 447 históricas); 110 pendientes documentadas (45 de fuente y 65 de ambigüedad); 5.873 sin revisar individualmente.';
const section=`## Lote 1186 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6251–6255 sobre conservación de identificación remota por vídeo, patrones de diseño, procesos MÉTRICA v3 y UML/casos de uso. Se confirma 6251 y se corrigen 6252–6255 para retirar ambigüedad en sus enunciados/distractores.

- **6251 — conservación de grabaciones de identificación por vídeo:** **vigente**, respuesta B. El art. 12.3 de la Orden ETD/465/2021 fija 15 años desde la extinción de la vigencia del certificado. No confundirlo con pruebas de identificaciones incompletas por sospecha de fraude: art. 12.6, cinco años. A1-80/A2-I.6.
- **6252 — patrones de diseño:** **corregida**, respuesta B. Los patrones documentan soluciones recurrentes, favorecen reutilización y vocabulario común; no imponen una receta obligatoria ni eliminan la evaluación contextual de alternativas. A1-93/A2-III.9.
- **6253 — MÉTRICA v3:** **corregida**, respuesta C. Se distingue “Desarrollo de Sistemas de Información”, proceso principal, del DSI (“Diseño del Sistema de Información”), que es un proceso/actividad dentro de aquel. Los principales son PSI, Desarrollo y MSI. A1-95/A2-III.2.
- **6254 — casos de uso UML:** **corregida**, respuesta A. Actores se asocian con casos de uso; «include» y «extend» relacionan casos de uso. MÉTRICA v3 sí incluye diseño de casos de uso. A1-88/A2-III.9.
- **6255 — proceso PSI en MÉTRICA v3:** **corregida**, respuesta C. Requisitos (PSI 4), diseño del modelo de sistemas (PSI 6) y arquitectura tecnológica (PSI 7) son actividades del PSI; los procedimientos de migración están en DSI 9, dentro de Desarrollo. A1-95/A2-III.2.

Fuentes primarias y técnicas: [Orden ETD/465/2021, texto consolidado, art. 12.3 y 12.6](https://boe.es/buscar/act.php?id=BOE-A-2021-7966); [Gamma et al., *Design Patterns: Abstraction and Reuse of Object-Oriented Design*](https://www.dre.vanderbilt.edu/~schmidt/original-GOF-patterns-paper.pdf); [MÉTRICA v3, portal PAe de metodologías](https://administracionelectronica.gob.es/documentacion/metodologias-guias), [manual PSI](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A8d2cfee5-5617-4dea-8cf8-7b7a0131de84/METRICA_V3_Panificacion_de_Sistemas_de_Informacion.pdf), [manual de Diseño del Sistema de Información](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3A7f366cd1-6759-42d9-9e0b-31edce0256d9/METRICA_V3_Diseno_del_Sistema_de_Informacion.pdf) y [manual MSI](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Ae15c0c5b-dd9c-4e48-82e3-9e36ba18e839/METRICA_V3_Mantenimiento_de_Sistemas_de_Informacion.pdf); [OMG UML 2.5.1, cap. 18](https://www.omg.org/spec/UML/2.5.1/PDF).

Convocatorias cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, temas 80, 88, 93 y 95; [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas I.6, III.2 y III.9.

Cotejo de cobertura curricular (no evidencia de respuestas): [ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk), 6251; [bloque 38 Análisis, Diseño y Construcción de Sistemas de Información](https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk), 6252–6254; [bloque 41 ITIL y COBIT](https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk), correspondencia A2-D2 en 6253 y 6255. La revisión toma la convocatoria vigente como taxonomía y registra aquí los temas normalizados.

Ejecutados revisar-lote-1186.cjs, academia-lote-1186.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario esperado: 12.123 preguntas; 6.250 examinadas; 6.140 verificadas; 110 pendientes documentadas; 5.873 aún sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'No coincide resumen previo al lote 1186');assert.ok(s.includes('## Lote 1185 — 13 de noviembre de 2026'),'No se encontró lote anterior');
s=s.replace(old,neu).replace('## Lote 1185 — 13 de noviembre de 2026',section+'## Lote 1185 — 13 de noviembre de 2026');
fs.writeFileSync(file,s);console.log('README actualizado para lote 1186.');
