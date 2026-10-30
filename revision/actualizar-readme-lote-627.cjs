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
const summary = `Último lote secuencial aplicado: 627 (IDs 3451–3455). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 627 — 30 de octubre de 2026

IDs 3451–3455 revisados individualmente; los originales completos se conservan en [cambios-lote-627.json](cambios-lote-627.json).
- **3451 — prestadores de servicios de confianza:** se actualiza el término histórico PSC a la definición vigente de eIDAS: persona física o jurídica que presta uno o más servicios de confianza, cualificados o no; expedir certificados es solo uno de ellos. **Corregida.** A1-80/81; A2-I-6.
- **3452 — sistemas de tiempo real:** se centra la definición en responder dentro del plazo requerido para guiar un proceso físico. El dato no basta para calificarlo como tiempo real duro o blando. **Corregida.** A1-59; A2-II-2.
- **3453 — modelo vectorial SIG:** se confirma que admite relaciones topológicas, aclarando que las reglas no se imponen automáticamente en toda capa o formato. Se distingue de ráster y se añaden los polígonos como entidades vectoriales. No se fuerza una correspondencia A2. **Corregida.** A1-74.
- **3454 — versión HTTP:** se convierte la pregunta abierta en una comparación verificable de versiones principales estandarizadas; HTTP/3 (RFC 9114) reemplaza el distractor falso “1.3” y pasa a ser la clave. **Corregida.** A1-109; A2-IV-13.
- **3455 — minería predictiva:** se acota a aprendizaje supervisado: identificar la variable objetivo y separarla de atributos de entrada/predictores. Se distingue de técnicas descriptivas o de asociación. **Corregida.** A1-71; A2-II-4.

Fuentes primarias y técnicas: Reglamento eIDAS [Reglamento (UE) 910/2014 consolidado a 18-10-2024](https://eur-lex.europa.eu/eli/reg/2014/910/2024-10-18), art. 3.19, modificado por el Reglamento (UE) 2024/1183, y [Ley 6/2020](https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046); NIST [glosario de tiempo real](https://csrc.nist.gov/glossary/term/Real_Time) y [SP 800-82 Rev. 3](https://csrc.nist.gov/pubs/sp/800/82/r3/final); QGIS Documentation 3.44 [topología](https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/topology.html) y [datos vectoriales](https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/vector_data.html); IETF [RFC 9114, HTTP/3](https://www.rfc-editor.org/rfc/rfc9114.html) y [RFC 9113, HTTP/2](https://www.rfc-editor.org/rfc/rfc9113.html); IBM [construcción de modelos predictivos](https://www.ibm.com/docs/en/spss-modeler/18.0.0?topic=models-building-predictive-model) y [operador predictor de minería de datos](https://www.ibm.com/docs/en/db2/11.1.0?topic=reference-predictor-operator).

Cotejo ITIC Academy: [bloque 3 Actuación Administrativa](https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk), que incluye eIDAS/Ley 6/2020; [bloque 27 Sistemas Operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk) como contexto de sistemas operativos, sin localizar tratamiento específico de control nuclear/RTOS; [Tema 074 SIG](https://docs.google.com/document/d/13sxQ3m8eNgg-dLxtbUHY9AzXaEnJtyyN/edit?usp=drivesdk), modelos vectorial y ráster; [bloque 43 Protocolos](https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk), con apartado QUIC/HTTP/3; [bloque 32 IA y Ciencia de Datos](https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk) y [bloque 34 BI y Big Data](https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk), para aprendizaje/modelado predictivo. Los temas sin cobertura específica se declaran como encuadre y no como fuente de definición.

Temario cotejado con [convocatoria A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y [convocatoria A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), frente a [temario-oficial.json](temario-oficial.json): certificados/identificación A1-80/81 y A2-I-6; SO y tiempo real A1-59/A2-II-2; SIG A1-74, sin A2 directo localizado; Internet/HTTP A1-109/A2-IV-13; minería predictiva/datos A1-71/A2-II-4.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 627 —')) text = text.replace('## Lote 626 —', section + '## Lote 626 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
