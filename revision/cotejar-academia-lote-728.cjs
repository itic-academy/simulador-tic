const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-728.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const boeA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const boeA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy = {
  3961: { a1: ['101'], a2: ['III-8'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», actualización 2026: mantenimiento del software y ciclo de vida; correspondencia A1-101/A2-III-8. La edición vigente de la norma se contrasta en ISO.' },
  3962: { a1: ['101'], a2: ['III-8'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», actualización 2026: mantenimiento correctivo, evolutivo y adaptativo; correspondencia A1-101/A2-III-8. Se cita el vocabulario propio de MÉTRICA v3.' },
  3963: { a1: ['101'], a2: ['III-8'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», actualización 2026: proceso MSI, solicitudes, análisis de cambios y pruebas de regresión; correspondencia A1-101/A2-III-8. Los productos exactos se verifican en el manual oficial de MÉTRICA v3.' },
  3964: { a1: ['101','125'], a2: ['III-8','II-13'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», actualización 2026: gestión de configuración y control del ciclo de cambio; correspondencia A1-101/A2-III-8. La exigencia de revisión y autorización se contrasta además con NIST CM-3 (A1-125/A2-II-13, controles de seguridad).' },
  3965: { a1: ['98','101'], a2: ['III-8','III-13'], url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', detail: 'ITIC Academy, bloque 39 «Calidad y mantenimiento», actualización 2026: mantenibilidad y mantenimiento del software; correspondencia A1-98/A1-101 y A2-III-8/III-13. El principio de alta cohesión y bajo acoplamiento se contrasta con el SEI de Carnegie Mellon.' }
};
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = academy[c.id];
  if (!q?.revision || !q.clasificacion || !m) throw new Error(`Falta revisión o cotejo: ${c.id}`);
  q.clasificacion.A1 = m.a1.map(x => `A1-${x}`);
  q.clasificacion.A2 = m.a2.map(x => `A2-${x}`);
  q.clasificacion.bloque_academia = `Cotejo temático con ${m.detail}`;
  q.clasificacion.nota = 'El temario académico ubica el contenido; las definiciones técnicas se verifican contra ISO, MÉTRICA, NIST y SEI según corresponde.';
  q.revision.observaciones = `${q.revision.observaciones} ${m.detail}`;
  q.comentarios = q.revision.observaciones.trim();
  for (const f of [
    { url: m.url, referencia: m.detail },
    { url: boeA1, referencia: `Convocatoria oficial A1 GSI 2025, anexo I: tema(s) ${m.a1.join(', ')}.` },
    { url: boeA2, referencia: `Convocatoria oficial A2 GSI 2025, anexo IX: tema(s) ${m.a2.join(', ')}.` }
  ]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de academia y programas oficiales A1/A2 aplicado a IDs 3961–3965.');
