const fs = require('node:fs');
const path = require('node:path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => /^cambios-lote-\d+\.json$/.test(f));
const totals = {vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0};
let changed = 0;
for (const file of files) {
  for (const c of JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')).cambios) {
    totals[c.actualizada.revision.estado]++;
    if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
  }
}
const n = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const left = 12123 - n;
const summary = `Último lote secuencial aplicado: 625 (IDs 3441–3445). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`;
const section = `## Lote 625 — 30 de octubre de 2026

IDs 3441–3445 revisados individualmente. Se conservaron los originales completos en [cambios-lote-625.json](cambios-lote-625.json) y se añadieron explicación, fuentes, clasificación y cotejo de materiales.
- **3441 — semáforos:** el enunciado ahora pregunta por el uso habitual de un semáforo binario; la exclusión mutua protege una sección crítica. No se afirma que los semáforos eviten interbloqueos: su uso incorrecto puede causarlos. **Corregida.** A1-59; A2-II-2.
- **3442 — certificados digitales:** se especifica la recomendación UIT-T X.509 y su versión 3. Se distingue el marco general de X.509 del perfil de PKI para Internet definido en RFC 5280. **Corregida.** A1-80/81; A2-I-6.
- **3443 — podcasting:** se define mediante la sindicación de episodios multimedia por canales/feeds a los que la audiencia puede suscribirse; se admite escucha en streaming o descarga, evitando afirmar que descargar sea requisito universal. **Corregida.** A1-109; A2-II-16.
- **3444 — formatos de despliegue Java EE/Jakarta EE:** se pregunta por el archivo de módulo web; la opción inequívoca es WAR. Se distingue de JAR y EAR. **Corregida.** A1-67; A2-III-10.
- **3445 — POJO:** se normaliza la expansión exacta como “Plain Old Java Object” en singular. **Corregida.** A1-67; A2-III-10.

Fuentes técnicas: POSIX/Linux [sem_overview(7)](https://man7.org/linux/man-pages/man7/sem_overview.7.html) y [sem_wait(3)](https://man7.org/linux/man-pages/man3/sem_wait.3.html); [UIT-T X.509](https://www.itu.int/rec/t-rec-x.509) y [IETF RFC 5280](https://www.rfc-editor.org/rfc/rfc5280.html); Apple Podcasts [distribución de podcasts](https://podcasters.apple.com/support/5108-how-apple-podcasts-distributes-your-shows-to-listeners), [requisitos de RSS](https://podcasters.apple.com/support/823-podcast-requirements) y [episodios](https://podcasters.apple.com/support/825-how-to-create-an-episode); Jakarta EE [empaquetado de aplicaciones](https://jakarta.ee/learn/docs/jakartaee-tutorial/current/platform/packaging/packaging.html); Martin Fowler [POJO](https://www.martinfowler.com/bliki/POJO.html).

Cotejo académico ITIC Academy: [bloque 27 Sistemas Operativos](https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk), como contexto de procesos, hilos y concurrencia; [bloque 36 Seguridad, Criptografía, Identificación y Firma](https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk), para certificados y PKI; [bloque 50 Videoconferencia, SSO y trabajo colaborativo](https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk), como contexto de distribución de contenido, sin localizar una sección específica sobre podcasting; [bloque 30 Tecnologías de Sistemas de la Información](https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk), para Java. Las respuestas se fundan en las especificaciones y documentos técnicos enlazados, no únicamente en los apuntes.

Temario cotejado con la convocatoria [A1 BOE-A-2025-25938, anexo I](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938) y la convocatoria [A2 GSI BOE-A-2025-26262, anexo IX](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262), contrastados con [temario-oficial.json](temario-oficial.json): A1-59/A2-II-2 para concurrencia; A1-80/81 y A2-I-6 para certificados e identidad; A1-109/A2-II-16 para sindicación de contenidos; A1-67/A2-III-10 para Java. La clasificación identifica relación curricular y no sustituye la evidencia técnica de la respuesta.

`;
const readme = path.join(dir, 'README.md');
let text = fs.readFileSync(readme, 'utf8');
text = text.replace(/Último lote secuencial aplicado:[^\r\n]*/, summary);
if (!text.includes('## Lote 625 —')) text = text.replace('## Lote 624 —', section + '## Lote 624 —');
fs.writeFileSync(readme, text);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
