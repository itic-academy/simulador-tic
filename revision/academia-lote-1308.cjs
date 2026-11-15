const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-1308.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const drive = {
  block05: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',
  block06: 'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',
  block08: 'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk'
};
const academy = {
  6861: { url: drive.block05, note: 'ITIC Academy, bloque temático 05, Contratación, Presupuestos y Compra TIC (versión 2026.2): desarrolla la Ley 9/2017 y las prohibiciones de contratar. La calificación jurídica de cada causa se coteja con el art. 71 LCSP vigente.' },
  6862: { url: drive.block06, note: 'ITIC Academy, bloque 06, Economía, Sociedad, Empleo y Transformación Digital (versión 2026.2): incluye A1 temas 14–19 y recoge la EPA, definiciones y datos fechados. El A2 de esa edición solo relaciona en ese bloque Agenda 2030 y políticas de igualdad (O4/O5), sin epígrafe equivalente sobre la definición EPA.' },
  6863: { url: drive.block06, note: 'ITIC Academy, bloque 06 (versión 2026.2): desarrolla políticas de igualdad en A1-16 y A2 O5; su mención se coteja con la numeración del programa oficial A2 2025 (I.5). El requisito y la excepción de urgencia proceden del art. 55 LO 3/2007.' },
  6864: { url: drive.block08, note: 'ITIC Academy, bloque 08, Protección de Datos (edición 2026): cubre A1-27 y A2 I.7 e identifica el RGPD. La fecha de aplicación y derogación de la Directiva 95/46/CE se verifican en los arts. 94 y 99 del Reglamento, no en el material académico.' },
  6865: { url: drive.block08, note: 'ITIC Academy, bloque 08 (edición 2026): cubre el régimen de protección de datos y las autoridades de control (A1-27/A2 I.7). El organigrama se comprueba contra el Estatuto vigente, RD 389/2021, art. 12; la respuesta académica u obsoleta no se toma como fuente normativa.' }
};
const marker = 'Cotejo curricular ITIC Academy:';
const stripMarker = value => {
  const text = (value || '').trim();
  const index = text.indexOf(marker);
  return (index < 0 ? text : text.slice(0, index)).trim();
};

for (const item of log.cambios) {
  const question = bank.preguntas.find(q => q.id === item.id);
  const entry = academy[item.id];
  assert.ok(question && entry, `Falta cotejo curricular para ${item.id}`);
  const official = [...question.clasificacion.A1, ...question.clasificacion.A2].join('/') || 'sin epígrafe A2 directamente equivalente';
  const note = `${marker} ${entry.note} Correspondencia oficial: ${official}. El material académico se usa para comprobar cobertura y terminología; la respuesta sustantiva se fundamenta en BOE/INE/EUR-Lex.`;
  question.clasificacion.bloque_academia = entry.note;
  question.clasificacion.nota = `${stripMarker(question.clasificacion.nota)} ${note}`.trim();
  question.comentarios = `${stripMarker(question.comentarios)} ${note}`.trim();
  question.revision.observaciones = `${stripMarker(question.revision.observaciones)} ${note}`.trim();
  question.revision.fuentes = question.revision.fuentes.filter(source => source.url !== entry.url);
  question.revision.fuentes.push({ url: entry.url, referencia: entry.note });
  item.actualizada = structuredClone(question);
}

fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo de temario ITIC Academy aplicado a 6861–6865.');
