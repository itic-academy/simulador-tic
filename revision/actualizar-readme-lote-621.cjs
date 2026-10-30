const fs = require('node:fs');
const path = require('node:path');

const files = fs.readdirSync(__dirname).filter(f => /^cambios-lote-\d+\.json$/.test(f));
const totals = {vigente: 0, corregida: 0, historica: 0, pendiente_fuente: 0, pendiente_ambiguedad: 0};
let changed = 0;
for (const f of files) for (const c of JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8')).cambios) {
  totals[c.actualizada.revision.estado] = (totals[c.actualizada.revision.estado] || 0) + 1;
  if (['texto', 'opciones', 'respuesta_correcta'].some(k => JSON.stringify(c.original[k]) !== JSON.stringify(c.actualizada[k]))) changed++;
}
const n = Object.values(totals).reduce((a, b) => a + b, 0);
const verified = totals.vigente + totals.corregida + totals.historica;
const left = 12123 - n;
const pending = totals.pendiente_fuente + totals.pendiente_ambiguedad;
const section = `## Lote 621 — 30 de octubre

IDs 3421–3425 revisados individualmente y cotejados con fuentes técnicas/primarias, los materiales de ITIC Academy en Drive y los temarios oficiales A1/A2. Se conserva íntegro el estado anterior de cada pregunta en [cambios-lote-621.json](cambios-lote-621.json).
- **3421 — arquitectura HFC:** se precisa que llevar fibra hasta nodos ópticos cercanos suele reducir los amplificadores coaxiales en cascada respecto a redes todo-coaxiales; depende del diseño y no significa que HFC sea unidireccional. **Corregida.** A1-108/121; A2-IV-7/8; Academy, bloque 42.
- **3422 — bandas GSM:** se acota la pregunta a P-GSM 900: transmisión del terminal en 890–915 MHz y recepción en 935–960 MHz. Se advierte que E-GSM/R-GSM tienen otros límites. **Corregida.** A1-123; A2-IV-15; Academy, bloque 46.
- **3423 — banda Ku:** se mantiene 12–18 GHz como intervalo convencional del designador RF; no se confunde el nombre de banda con las asignaciones concretas de un servicio satelital. **Corregida.** A1-108/114; A2-IV-7/11; Academy, bloque 46.
- **3424 — software Wonderware:** se elimina el falso contraste de marcas entre frameworks de apps. Se pregunta qué nombre identifica la familia industrial HMI/SCADA de AVEVA; Xamarin.Forms terminó soporte el 2-5-2024. **Corregida.** A1-124; sin epígrafe A2 directo (A2-II-2 no se fuerza porque trata sistemas operativos móviles); Academy, bloque 47.
- **3425 — DoS:** se concreta el objetivo en impedir o degradar el acceso legítimo/disponibilidad; un escaneo de puertos es reconocimiento y no todo DoS precede a una intrusión. **Corregida.** A1-125; A2-II-13; Academy, bloque 48.

Fuentes técnicas y oficiales: [CableLabs, evolución de HFC](https://account.cablelabs.com/server/alfresco/c021877d-cce7-434a-b3ac-9cc466d6c601) y [fiber-deep](https://account.cablelabs.com/server/alfresco/ba21967b-c262-4cfe-9aff-c014a8e52d5b); [3GPP TS 45.005 V18.0.0 / ETSI](https://www.etsi.org/deliver/etsi_ts/145000_145099/145005/18.00.00_60/ts_145005v180000p.pdf); [NASA, tabla de bandas RF](https://www.nasa.gov/smallsat-institute/sst-soa/soa-communications/); [AVEVA Wonderware](https://www.aveva.com/en/solutions/operations/wonderware/), [ciclo de vida Xamarin.Forms](https://learn.microsoft.com/en-us/lifecycle/products/xamarinforms), [Flutter FAQ](https://docs.flutter.dev/resources/faq) y [React Native](https://reactnative.dev/); [NIST CSRC, DoS](https://csrc.nist.gov/glossary/term/denial_of_service) y [disponibilidad](https://csrc.nist.gov/glossary/term/availability).

Cotejo curricular en Drive: ITIC Academy [bloque 42, Redes](https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk) (CATV/HFC); [bloque 46, redes inalámbricas y comunicaciones móviles](https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk) (redes móviles y satélite); [bloque 47, aplicaciones móviles y sistemas operativos](https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk) (frameworks multiplataforma); [bloque 48, seguridad en redes y capa de aplicación](https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk) (disponibilidad/DoS). La correspondencia de epígrafes se comprobó con [programa A1 BOE-A-2025-25938](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938), [programa A2 BOE-A-2025-26262](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262) y revision/temario-oficial.json; ITIC Academy es contexto curricular, no sustituye las fuentes técnicas/normativas.

Controles de inventario y esquema ejecutados tras este lote; un registro estructural no acredita la revisión de contenido.
`;
const p = path.join(__dirname, 'README.md');
let s = fs.readFileSync(p, 'utf8');
s = s.replace(/Último lote secuencial aplicado:[^\r\n]*/, `Último lote secuencial aplicado: 621 (IDs 3421–3425). Acumulado: ${n} preguntas examinadas individualmente, ${verified} verificadas (${totals.vigente} vigentes, ${totals.corregida} corregidas y ${totals.historica} históricas) y ${pending} pendientes documentadas (${totals.pendiente_fuente} de fuente y ${totals.pendiente_ambiguedad} de ambigüedad); quedan ${left} sin revisar individualmente. Hay ${changed} preguntas con cambios en enunciado, opciones o clave frente al original, comparando registros completos.`);
if (!s.includes('## Lote 621 —')) s = s.replace('## Lote 620 —', section + '\n## Lote 620 —');
fs.writeFileSync(p, s);
console.log(`README: ${n} examinadas; ${verified} verificadas; ${pending} pendientes; ${left} restantes; ${changed} preguntas con cambios.`);
