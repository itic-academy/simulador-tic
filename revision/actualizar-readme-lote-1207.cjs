const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const file=path.join(__dirname,'README.md');let s=fs.readFileSync(file,'utf8');
const old='Último lote secuencial: 1206 (IDs 6351–6355). Acumulado: 6.350 preguntas examinadas individualmente; 6.238 verificadas (1.235 vigentes, 4.547 corregidas y 456 históricas); 112 pendientes documentadas (45 de fuente y 67 de ambigüedad); 5.773 sin revisar individualmente.';
const neu='Último lote secuencial: 1207 (IDs 6356–6360). Acumulado: 6.355 preguntas examinadas individualmente; 6.242 verificadas (1.236 vigentes, 4.550 corregidas y 456 históricas); 113 pendientes documentadas (45 de fuente y 68 de ambigüedad); 5.768 sin revisar individualmente.';
const section=`## Lote 1207 — 13 de noviembre de 2026

Revisadas individualmente las preguntas 6356–6360 sobre gobernanza TIC, accesibilidad pública/WCAG y análisis de riesgos MAGERIT. Se distinguen las competencias legales de dos órganos/instrumentos y se retira la validación de una pregunta de riesgo con opciones solapadas.

- **6356 — funciones de la Comisión de Estrategia TIC:** **corregida**, respuesta D. Los apartados A–C recogen funciones del artículo 4 del RD 806/2014; la agregación y planificación de la demanda TIC como cliente único está atribuida a la Dirección TIC (art. 18), no a la Comisión. Se añade esa atribución a la opción D.
- **6357 — accesibilidad de portales públicos:** **corregida**, respuesta C. Se cambia “órgano encargado” por “iniciativa” con herramienta de seguimiento/diagnóstico: el Observatorio de Accesibilidad Web (OAW) no es un órgano administrativo autónomo. El régimen actual deriva del RD 1112/2018.
- **6358 — WCAG 2.1, criterio 2.3.1:** **corregida**, respuesta A (nivel A). La versión original atribuía el criterio al nivel AAA y simplificaba el límite. Se cita la regla completa: como máximo tres destellos por segundo o cumplimiento de los umbrales general y rojo.
- **6359 — rol de MAGERIT v3:** **vigente**, respuesta B, “Enlace operacional”. La definición del enunciado coincide con el Libro I de MAGERIT v3.
- **6360 — opciones para tratar el riesgo:** **pendiente de ambigüedad**. La academia incluye eliminar/evitar, reducir/mitigar, asumir/aceptar y transferir/compartir, y describe el seguro como ejemplo de transferencia. Por ello A es defendible y D también puede leerse como correcta; se conserva la clave original solo como dato, sin validarla.

Fuentes oficiales: [RD 806/2014, arts. 4 y 18](https://www.boe.es/eli/es/rd/2014/09/19/806/con), [RD 1112/2018](https://www.boe.es/eli/es/rd/2018/09/07/1112), [PAe — Accesibilidad](https://administracionelectronica.gob.es/estrategias/accesibilidad), [PAe — Rastreador OAW](https://administracionelectronica.gob.es/ctt/oaw), [W3C WAI — WCAG 2.1, SC 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html), [MAGERIT v3, Libro I, Método](https://administracionelectronica.gob.es/pae_Home/dam/jcr%3Afb373672-f804-4d05-8567-2d44b3020387/2012_Magerit_v3_libro1_metodo_es_NIPO_630-12-171-8.pdf) y [PAe — ficha MAGERIT](https://administracionelectronica.gob.es/ctt/magerit).

Convocatorias oficiales cotejadas: [GSI A1 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), anexo I, tema 30 (gobernanza TIC), tema 44 (accesibilidad) y tema 47 (análisis de riesgos); [GSI A2 2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), anexo IX, temas III.14 (accesibilidad) y II.10 (riesgos). No se fuerza un tema A2 de gobernanza para 6356.

Cotejo curricular ITIC Academy/Drive: [bloque 03 Administración Digital, actualización 2026](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk) resume el reparto de funciones de CETIC y trata accesibilidad/WCAG, sin desarrollar el OAW por su nombre; [bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk) aborda MAGERIT y tratamiento de riesgos, pero no el rol operacional concreto. La academia sí explicita que asegurar puede ser una forma de transferir el riesgo, razón por la que 6360 no se da por verificada.

Ejecutados revisar-lote-1207.cjs, academia-lote-1207.cjs, inventario.cjs, verificar.cjs y git diff --check. Inventario: 12.123 preguntas; 6.355 examinadas; 6.242 verificadas (1.236 vigentes, 4.550 corregidas y 456 históricas); 113 pendientes documentadas (45 de fuente, 68 de ambigüedad); 5.768 sin revisar individualmente; cero errores estructurales.

`;
assert.ok(s.includes(old),'Resumen anterior no coincide');assert.ok(s.includes('## Lote 1206 — 13 de noviembre de 2026'),'Sección 1206 ausente');
s=s.replace(old,neu).replace('## Lote 1206 — 13 de noviembre de 2026',section+'## Lote 1206 — 13 de noviembre de 2026');fs.writeFileSync(file,s);console.log('README actualizado para lote 1207.');
