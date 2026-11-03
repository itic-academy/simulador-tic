const fs = require('node:fs'), path = require('node:path');
const root = path.join(__dirname, '..'), bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-688.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const shared = [
  { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938', referencia: 'Convocatoria A1 2025, anexo I; correspondencia cotejada con temario-oficial.json el 03-11-2026.' },
  { url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262', referencia: 'Convocatoria A2 2025, anexo IX; correspondencia cotejada con temario-oficial.json el 03-11-2026.' }
];
const academyTransparency = { url: 'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado»; material de cobertura, no fuente normativa.' };
const academyDigital = { url: 'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk', referencia: 'ITIC Academy, bloque 10 «Gobernanza TIC, Administración digital, acceso electrónico y cooperación», sección 13 sobre ENI e interoperabilidad; material curricular 2026, no fuente normativa.' };
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  if (!q?.revision || !q.clasificacion) throw new Error('Falta revisión/clasificación ' + c.id);
  const isInteroperability = c.id === 3757;
  const a1 = isInteroperability ? 'A1-45' : 'A1-25';
  const a2 = isInteroperability ? 'A2-I-9' : 'A2-I-4';
  q.clasificacion.A1 = [a1]; q.clasificacion.A2 = [a2];
  q.clasificacion.bloque_academia = isInteroperability
    ? 'ITIC Academy, bloque 10 «Gobernanza TIC, Administración digital, acceso electrónico y cooperación», sección 13 (ENI e interoperabilidad).'
    : 'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (transparencia y buen gobierno).';
  q.clasificacion.nota = 'Correspondencia ' + a1 + '/' + a2 + ' cotejada con temario-oficial.json y convocatorias BOE 2025 el 03-11-2026. Academy se utiliza para orientar la cobertura curricular; la norma primaria determina la respuesta.';
  if (c.id === 3757) q.clasificacion.nota += ' La definición de Ley 18/2011 se mantiene como histórica porque la norma fue derogada en 2023.';
  q.revision.observaciones = (q.revision.observaciones || '') + ' ' + q.clasificacion.nota;
  q.comentarios = q.revision.observaciones.trim();
  const refs = isInteroperability ? [academyDigital] : [academyTransparency];
  for (const f of [...refs, ...shared]) if (!q.revision.fuentes.some(x => x.url === f.url)) q.revision.fuentes.push(f);
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo de Academy y programas oficiales añadido a 3756–3760.');
