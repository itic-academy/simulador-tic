const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-441.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  bi: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', label: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026'},
  cloud: {url: 'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk', label: 'ITIC Academy, bloque 25 Cloud Computing, versión 2026.1 (19-08-2026)'},
  mobile: {url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk', label: 'ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026 (30-09-2026)'},
  db: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
  routing: {url: 'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk', label: 'ITIC Academy, bloque 43 Protocolos, versión 2026'}
};
const extraRefs = {
  2518: [{url:'https://www.itu.int/ITU-D/tech/MobileCommunications/IMT_INTRODUCING/IMT_Introducing.html', referencia:'UIT-T/ITU-D, Introducing IMT: las etiquetas fraccionarias 2.5G, 3.5G y 3.9G no están formalmente reconocidas en los estándares y se emplean en posicionamiento comercial.'}],
  2520: [
    {url:'https://www.rfc-editor.org/rfc/rfc2328.html', referencia:'IETF RFC 2328, OSPF Version 2, especificación del protocolo de enrutamiento OSPF.'},
    {url:'https://www.rfc-editor.org/rfc/rfc2453.html', referencia:'IETF RFC 2453, RIP Version 2, especificación del protocolo de enrutamiento RIP.'},
    {url:'https://www.rfc-editor.org/rfc/rfc4271.html', referencia:'IETF RFC 4271, A Border Gateway Protocol 4 (BGP-4), especificación del protocolo de enrutamiento inter-AS.'}
  ]
};
const mapping = {
  2516: {docs:['bi'], detail:'el apartado de almacenes de datos y OLAP incluye data marts y modelado dimensional', topics:['A1-75','A2-II-4']},
  2517: {docs:['cloud'], detail:'el bloque aborda el modelo cloud y servicios de AWS; se registra el contexto curricular general, ya que el programa no exige conocer el catálogo comercial completo de AppFabric', topics:['A1-55','A2-II-1']},
  2518: {docs:['mobile'], detail:'el bloque trata generaciones de comunicaciones móviles; el detalle histórico de HSDPA se verifica aparte en documentación 3GPP, sin convertir la etiqueta informal 3.5G en una categoría normativa', topics:['A1-112','A2-IV-15']},
  2519: {docs:['db'], detail:'el contenido oficial incluye transacciones, concurrencia de acceso y mecanismos de resolución de conflictos', topics:['A1-63','A1-64','A2-III-4']},
  2520: {docs:['routing'], detail:'el bloque desarrolla TCP/IP, encaminamiento, protocolos de red y redes locales; la distinción funcional NAT/routing se sustenta en RFC del IETF', topics:['A1-115','A2-II-8']}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
for (const change of log.cambios) {
  const question = bank.preguntas.find(item => item.id === change.id);
  const row = mapping[change.id];
  assert.ok(question?.revision && row, `Falta revisión o cotejo académico para ${change.id}`);
  for (const topic of [...question.clasificacion.A1, ...question.clasificacion.A2, ...row.topics]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  question.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  question.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const refs = row.docs.map(key => ({url:docs[key].url, referencia:`${docs[key].label}; ${row.detail}. Correspondencia temática comprobada en revision/temario-oficial.json y los programas BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} comprobada en revision/temario-oficial.json y en las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. El material de academia encuadra los conceptos; las fuentes técnicas primarias de revision.fuentes fundamentan la respuesta.`;
  question.clasificacion.bloque_academia = `${curriculum}; ${row.detail}`;
  question.clasificacion.nota = note;
  if (!question.revision.observaciones.includes(note)) question.revision.observaciones += ` ${note}`;
  question.comentarios = question.revision.observaciones;
  for (const ref of [...refs, ...(extraRefs[change.id] || [])]) {
    if (!question.revision.fuentes.some(existing => existing.url === ref.url)) question.revision.fuentes.push(ref);
  }
  change.actualizada = structuredClone(question);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 2516–2520.');
