const fs = require('node:fs');
const path = require('node:path');
const bankPath = path.join(__dirname, '..', 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-433.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const lpac = 'https://www.boe.es/eli/es/l/2015/10/01/39/con';
const sources = {
  2476: [{ url: lpac, referencia: 'Ley 39/2015, artículos 26.2 y 26.3: requisitos de validez del documento electrónico administrativo y exención de firma para los documentos publicados con carácter meramente informativo, que deben identificar su origen.' }],
  2477: [{ url: 'https://www.boe.es/eli/es/l/2003/11/17/38/con', referencia: 'Ley 38/2003, artículo 10.1: órganos competentes para conceder subvenciones en la AGE, sus respectivos ámbitos y consignación presupuestaria previa; el apartado 2 prevé autorización previa para importes superiores a 12 millones de euros.' }],
  2478: [
    { url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758', referencia: 'Ley 34/2002, artículos 22.2, 38.4.g y 43.1: supuestos y excepciones de consentimiento para dispositivos de almacenamiento/recuperación, tipificación de la infracción y atribución expresa de la competencia sancionadora a la AEPD.' },
    { url: 'https://www.boe.es/eli/es/rd/2021/06/01/389/con', referencia: 'Real Decreto 389/2021, artículo 5.1.l: incluye entre las funciones de la AEPD la instrucción de procedimientos sancionadores por las infracciones LSSI allí enumeradas; complemento institucional de la atribución de competencia que establece el artículo 43.1 LSSI.' }
  ],
  2479: [{ url: lpac, referencia: 'Ley 39/2015, artículos 113 y 125.1: el recurso extraordinario de revisión procede contra actos firmes en vía administrativa cuando concurra alguno de los motivos tasados.' }],
  2480: [{ url: lpac, referencia: 'Ley 39/2015, artículos 115.2 y 116: el error o falta de calificación no impide tramitar el recurso si se deduce su verdadero carácter; causas legales de inadmisión.' }]
};
const notes = {
  2476: 'El artículo 26.2.e exige las firmas electrónicas que correspondan conforme a la normativa, pero el 26.3 exime de firma a los documentos publicados con carácter meramente informativo, siempre que se identifique su origen. Por ello, la afirmación de la opción clave es falsa.',
  2477: 'La pregunta se circunscribe a la AGE y a los órganos indicados: el artículo 10.1 atribuye competencia a Ministros y Secretarios de Estado, cada uno en su ámbito y con consignación presupuestaria previa. También incluye a presidentes o directores de organismos y entidades públicas vinculados o dependientes; «entre los órganos indicados» evita convertir la respuesta en una enumeración exhaustiva. La autorización previa del artículo 10.2 para importes superiores a 12 millones de euros es un requisito adicional.',
  2478: 'El supuesto se limita al incumplimiento no exento del artículo 22.2 LSSI. El artículo 38.4.g lo tipifica y el 43.1 atribuye expresamente su sanción a la AEPD. No se afirma que todo uso de cookies requiera consentimiento: se respetan las excepciones legales para fines técnicos/de transmisión o estrictamente necesarios.',
  2479: 'El artículo 113 dispone que contra actos firmes en vía administrativa solo procede el recurso extraordinario de revisión cuando concurra alguna de las circunstancias tasadas del artículo 125.1; no cabe automáticamente contra todo acto firme.',
  2480: 'El artículo 116 incluye la falta de legitimación, el acto no recurrible y el transcurso del plazo entre las causas de inadmisión. Según el artículo 115.2, el error o la ausencia de calificación no impide tramitar el recurso si puede deducirse su verdadero carácter.'
};
const academy = {
  2476: 'ITIC Academy, bloque 3 «Actuación Administrativa y Administración Digital», versión 2026.2 (01-10-2026), apartado 4.4 sobre documento y expediente electrónicos; A1-8/A1-22 y A2-I-8/I-9.',
  2477: 'ITIC Academy, bloque 5 «Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC», versión 2026.2 (01-10-2026), tema 13 y apartado 13 sobre subvenciones, alineado con A1-13; no hay epígrafe equivalente específico en A2.',
  2478: 'ITIC Academy, bloque 3 «Actuación Administrativa y Administración Digital», versión 2026.2 (01-10-2026), apartado 6.2 LSSI-CE; A1-22 y A2-I-6.',
  2479: 'ITIC Academy, bloque 3 «Actuación Administrativa y Administración Digital», versión 2026.2 (01-10-2026), apartado 3.11 sobre revisión de oficio y recursos; A1-8 y A2-I-8.',
  2480: 'ITIC Academy, bloque 3 «Actuación Administrativa y Administración Digital», versión 2026.2 (01-10-2026), apartado 3.11 sobre recursos; A1-8 y A2-I-8.'
};
const urls = {
  2476: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',
  2477: 'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',
  2478: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',
  2479: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',
  2480: 'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'
};
const calls = 'Programas cotejados en revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262 (https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938; https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262). ITIC Academy da contexto curricular; la respuesta jurídica se sustenta en las fuentes primarias de revision.fuentes.';
for (const item of log.cambios) {
  const q = bank.preguntas.find(x => x.id === item.id);
  const note = `${notes[item.id]} Cotejo curricular: ${academy[item.id]} Drive: ${urls[item.id]}. ${calls}`;
  q.revision.fuentes = sources[item.id];
  q.revision.observaciones = note;
  q.comentarios = note;
  q.clasificacion.nota = `Cotejo curricular: ${academy[item.id]} Drive: ${urls[item.id]}. ${calls}`;
  item.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Normalizados referencias legislativas específicas y notas de academia del lote 433.');
