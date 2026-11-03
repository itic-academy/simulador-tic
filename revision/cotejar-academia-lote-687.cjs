const fs = require('node:fs'), path = require('node:path');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-687.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const refs = [
  { url: 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»; guía de cobertura curricular para A1-25, no fuente jurídica.' },
  { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria BOE-A-2025-25938, anexo I, tema A1-25, cotejada con temario-oficial.json el 03-11-2026.' },
  { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria BOE-A-2025-26262, anexo IX, tema A2-I-4, cotejada con temario-oficial.json el 03-11-2026.' }
];
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q?.revision || !q.clasificacion) throw new Error(`Falta revisión/clasificación ${c.id}`);
  q.clasificacion.A1 = ['A1-25']; q.clasificacion.A2 = ['A2-I-4'];
  q.clasificacion.bloque_academia = 'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (cobertura A1-25).';
  q.clasificacion.nota = 'Correspondencia A1-25/A2-I-4 contrastada con temario-oficial.json y convocatorias BOE 2025 el 03-11-2026. Academy es guía curricular; las respuestas se fundamentan en fuentes oficiales.';
  q.revision.observaciones = `${q.revision.observaciones || ''} ${q.clasificacion.nota}`.trim();
  q.comentarios = q.revision.observaciones;
  for (const f of refs) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular y convocatoria oficial añadido a 3751–3755.');
