const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bankPath = path.join(root, 'preguntas_preparatic.json');
const logPath = path.join(__dirname, 'cambios-lote-449.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(program => program.temas.map(topic => topic.id)));
const docs = {
  wireless: {
    url: 'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 46, Redes inalámbricas y comunicaciones móviles, versión 2026.1; Bluetooth, radio, modulaciones y espectro.'
  },
  uml: {
    url: 'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYelIgRIPu_AbE3/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',
    label: 'ITIC Academy, bloque 38, Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1; análisis y diseño orientado a objetos, UML y diagramas de clases.'
  },
  risp: {
    url: 'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 11, RISP, Datos Abiertos y Transparencia, actualización a octubre de 2026; Directiva (UE) 2019/1024 y conjuntos de datos de alto valor.'
  },
  web: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 30, Tecnologías de Sistemas de Información, versión 2026.1; arquitectura web, APIs y servicios web, Java/Jakarta EE.'
  },
  security: {
    url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 22, Seguridad, ENS y Ciberseguridad, versión 2026.2; Estrategia Nacional de Ciberseguridad y seguridad estratégica.'
  }
};
const mapping = {
  2556: { docs: ['wireless'], topics: ['A1-114', 'A2-IV-11'], detail: 'el bloque contextualiza Bluetooth; la modulación precisa para BR/EDR Basic Rate se verifica en la especificación primaria Bluetooth SIG.' },
  2557: { docs: ['uml'], topics: ['A1-89', 'A2-III-9'], detail: 'el bloque cubre modelado de clases y UML; la semántica de agregación se contrasta con el metamodelo normativo UML 2.5.1 del OMG.' },
  2558: { docs: ['risp'], topics: ['A1-31', 'A2-I-9'], detail: 'el bloque encuadra RISP y datos abiertos; la lista vinculante de categorías HVD se verifica en el anexo I de la Directiva y en el Reglamento (UE) 2023/138.' },
  2559: { docs: ['web'], topics: ['A1-65', 'A2-III-12'], detail: 'el bloque incluye servicios web y tecnologías Java; los nombres de proyectos/APIs se cotejan con Apache y Jakarta.' },
  2560: { docs: ['security'], topics: ['A1-127', 'A2-II-13'], detail: 'el bloque cubre la estrategia de ciberseguridad; las líneas de acción y su literalidad se verifican en la Estrategia oficial del DSN.' }
};

assert.equal(log.cambios.length, 5);
for (const change of log.cambios) {
  const row = mapping[change.id];
  const question = bank.preguntas.find(item => item.id === change.id);
  assert.ok(row && question?.revision, `Falta el cotejo curricular de ${change.id}`);
  for (const topic of [...row.topics, ...question.clasificacion.A1, ...question.clasificacion.A2]) assert.ok(official.has(topic), `Tema oficial inexistente: ${topic}`);
  question.clasificacion.A1 = row.topics.filter(topic => topic.startsWith('A1-'));
  question.clasificacion.A2 = row.topics.filter(topic => topic.startsWith('A2-'));
  const curriculum = row.docs.map(key => docs[key].label).join('; ');
  const note = `Cotejo curricular: ${curriculum}. ${row.detail} Correspondencia contrastada con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia aporta encuadre, no la evidencia decisoria.`;
  question.clasificacion.bloque_academia = curriculum;
  question.clasificacion.nota = note;
  question.revision.observaciones = `${question.revision.observaciones} ${note}`.trim();
  question.comentarios = question.revision.observaciones;
  for (const key of row.docs) {
    const ref = { url: docs[key].url, referencia: `${docs[key].label}; ${row.detail}` };
    if (!question.revision.fuentes.some(source => source.url === ref.url)) question.revision.fuentes.push(ref);
  }
  change.actualizada = structuredClone(question);
}

fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(logPath, `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo ITIC Academy, temario oficial y convocatorias añadido para 2556–2560.');
