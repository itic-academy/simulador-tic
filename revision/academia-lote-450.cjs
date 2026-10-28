const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const log = JSON.parse(fs.readFileSync(path.join(__dirname, 'cambios-lote-450.json'), 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(program => program.temas.map(topic => topic.id)));
const docs = {
  quality: {
    url: 'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 39, Calidad y Mantenimiento, edición 2026; incluye modelos de madurez y mejora de procesos (CMMI, ISO/IEC 330xx y TMMi), junto con los temas A1 de calidad y A2 de modelos y métricas.'
  },
  security: {
    url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 48, Seguridad en Redes y en el Nivel de Aplicación, edición 2026; VPN, seguridad de redes y protocolos criptográficos.'
  },
  design: {
    url: 'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 38, Análisis, Diseño y Construcción de Sistemas de Información, edición 2026; técnicas de diseño de software, diseño por capas, patrones, análisis y diseño orientado a objetos.'
  },
  standardization: {
    url: 'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 50, Organismos de Normalización, Conformidad, Certificación y Normativa LAN/WLAN, edición 2026; organismos internacionales y nacionales de normalización.'
  },
  investment: {
    url: 'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 17, Adquisición de Sistemas, Alternativas y Rentabilidad de las Inversiones, versión 2026.2 (2 de octubre de 2026); temas A1 40–42 y A2 II-15, con taxonomía de asignación de pesos: Delphi directa, AHP/Saaty y utilidades relativas indirectas.'
  }
};
const mapping = {
  2561: { docs: ['quality'], topics: ['A1-96', 'A2-III-13'], detail: 'El bloque actual aborda modelos de madurez contemporáneos; la afirmación histórica del CMM for Software v1.1 se contrasta de forma decisoria con el informe primario del SEI y no se presenta CMMI como sinónimo.' },
  2562: { docs: ['security'], topics: ['A1-125', 'A2-IV-12'], detail: 'El bloque cubre VPN y seguridad en redes; modo túnel, servicios y arquitectura se verifican en NIST SP 800-77 Rev. 1.' },
  2563: { docs: ['design'], topics: ['A1-93', 'A2-III-9'], detail: 'El bloque recoge técnicas de diseño y diseño orientado a objetos; la proposición se atribuye específicamente al artículo de Parnas sobre modularización.' },
  2564: { docs: ['standardization'], topics: ['A1-50'], detail: 'El bloque curricular A1-50 incluye organizaciones internacionales de normalización. No se fuerza un tema A2: el programa A2 consultado no incluye un epígrafe específico de organismos internacionales; ITU-T se define con la fuente institucional ITU.' },
  2565: { docs: ['investment'], topics: ['A1-40', 'A2-II-15'], detail: 'El bloque v2026.2 incluye evaluación de alternativas y explicita su taxonomía de pesos directos/indirectos. Las fuentes originales explican los métodos, pero la clasificación se atribuye a esta convención del material y no se universaliza.' }
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
  const note = `Cotejo curricular: ${curriculum}. ${row.detail} Correspondencia contrastada con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia orienta la clasificación, no sustituye las fuentes primarias que sustentan las respuestas.`;
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

fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), `${JSON.stringify(bank, null, 2)}\n`);
fs.writeFileSync(path.join(__dirname, 'cambios-lote-450.json'), `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo ITIC Academy, temario oficial y convocatorias añadido para 2561–2565.');
