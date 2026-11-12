const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1076.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const urls = {
  wireless: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
  crypto: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
  services: 'https://drive.google.com/file/d/1wf9xQtg-rFSu_6YPmeUc_Y9J3bq1Lb-q/view?usp=drivesdk',
  hardware: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
  quality: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
};
const map = {
  5701: {a1:[108],a2:['IV-7'],urls:[urls.wireless],desc:'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026: cobertura próxima de radiocomunicación y comunicaciones inalámbricas/móviles. El índice no menciona Galileo PRS de forma específica; la respuesta se acredita con el Reglamento (UE) 2021/696.'},
  5702: {a1:[79,125],a2:['IV-12'],urls:[urls.crypto],desc:'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1: incluye el tema A1-79 sobre funciones hash y el marco A2 de criptografía/seguridad. La clasificación sigue el temario oficial; SHA-3/MD5 se contrastan con NIST.'},
  5703: {a1:[8,80],a2:['I-9'],urls:[urls.services],desc:'ITIC Academy, bloque 49 Servicios Comunes: cotejo de la gestión electrónica y del epígrafe A2-I.9. El índice consultado no localiza de forma literal la excepción del artículo 26.3; la regla jurídica se verifica con la Ley 39/2015 consolidada en BOE.'},
  5704: {a1:[56],a2:[],urls:[urls.hardware],desc:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026: incluye el tema A1-56 y dispositivos para tratamiento de información multimedia. El material acredita cobertura curricular general, no el detalle del proceso JPEG; este se verifica en ITU-T T.81.'},
  5705: {a1:[103],a2:[],urls:[urls.quality],desc:'ITIC Academy, bloque 39 Calidad y Mantenimiento, versión 2026: incluye explícitamente el tema A1-103 sobre calidad en servicios de información y el Modelo EFQM. No se fuerza una correspondencia A2: el tema A2-III.13 trata calidad del software, ámbito distinto.'},
};
const marker = 'Cotejo curricular ITIC Academy:';
const trimPrior = value => { const i = (value || '').indexOf(marker); return i < 0 ? (value || '').trim() : value.slice(0, i).trim(); };
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id), m = map[c.id];
  assert.ok(q && m, `Falta pregunta o mapeo ${c.id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  const tags = [...q.clasificacion.A1, ...q.clasificacion.A2].join('/');
  q.clasificacion.bloque_academia = m.desc;
  const note = `${marker} ${m.desc}${tags ? ` Temas oficiales asociados: ${tags}.` : ' No se asigna tema A2 específico equivalente.'} La academia se usa para cotejar cobertura; las respuestas se fundamentan en las fuentes normativas y técnicas primarias citadas en la revisión individual.`;
  q.clasificacion.nota = `${trimPrior(q.clasificacion.nota)} ${note}`.trim();
  q.comentarios = `${trimPrior(q.comentarios)} ${note}`.trim();
  q.revision.observaciones = `${trimPrior(q.revision.observaciones)} ${note}`.trim();
  const related = new Set(Object.values(urls));
  q.revision.fuentes = q.revision.fuentes.filter(f => !related.has(f.url));
  for (const url of m.urls) q.revision.fuentes.push({url, referencia:`ITIC Academy: ${m.desc}`});
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5701–5705.');
