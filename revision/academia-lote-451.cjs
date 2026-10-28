const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const log = JSON.parse(fs.readFileSync(path.join(__dirname, 'cambios-lote-451.json'), 'utf8'));
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, 'temario-oficial.json'), 'utf8')).programas.flatMap(program => program.temas.map(topic => topic.id)));
const docs = {
  java: {
    url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 30, Tecnologías de Sistemas de Información, edición 2026; entorno Java, Java EE/Jakarta EE. El modificador implícito de los campos de interfaz se verifica en JLS SE 25.'
  },
  security: {
    url: 'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 48, Seguridad en Redes y en el Nivel de Aplicación, edición 2026; cortafuegos, seguridad perimetral, VPN y protección de redes.'
  },
  architecture: {
    url: 'https://drive.google.com/file/d/11qGK4GbJ0QV81HEyboRAy5AZorijJmhs/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 28, Arquitectura SOA y requisitos no funcionales, edición 2026; arquitectura de tres capas con presentación, lógica de negocio y datos.'
  },
  securityManagement: {
    url: 'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 22, ENS y Ciberseguridad, edición 2026; gestión de seguridad y SGSI. La función específica de medición se contrasta con ISO/IEC 27004 publicada.'
  },
  data: {
    url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 34, Business Intelligence y Big Data, edición 2026; incluye espacios de datos, sus aspectos tecnológicos y organizativos, y protección de datos.'
  },
  reuse: {
    url: 'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk',
    label: 'ITIC Academy, bloque 11, RISP, Datos Abiertos y Transparencia, actualización octubre de 2026; reutilización, intercambio de datos y su marco europeo.'
  }
};
const mapping = {
  2566: { docs: ['java'], topics: ['A1-67', 'A2-II-3'], detail: 'El bloque cubre Java/Jakarta; la regla de los campos implícitos se comprueba en la especificación normativa de Java SE 25.' },
  2567: { docs: ['security'], topics: ['A1-125', 'A2-IV-12'], detail: 'El bloque encuadra seguridad perimetral y redes; NIST SP 800-41 sustenta el patrón común y aclara que la DMZ no tiene una definición técnica única.' },
  2568: { docs: ['architecture'], topics: ['A1-119', 'A2-II-6'], detail: 'El bloque presenta explícitamente presentación, lógica de negocio y datos como las tres capas lógicas; Microsoft Learn respalda la distinción entre capas lógicas y equipos físicos.' },
  2569: { docs: ['securityManagement'], topics: ['A1-48', 'A2-II-13'], detail: 'El bloque sitúa SGSI y gestión de seguridad; la identidad de ISO/IEC 27004 como edición publicada, alcance y estado de DIS se verifican en el catálogo oficial ISO.' },
  2570: { docs: ['data', 'reuse'], topics: ['A1-75', 'A2-I-9'], detail: 'El bloque 34 aborda explícitamente espacios de datos y el bloque 11, reutilización/intercambio. Se elige una arquitectura concreta para que el distractor se contraste con los componentes de Simpl-Open y no se convierta en una afirmación universal.' }
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
  const note = `Cotejo curricular: ${curriculum}. ${row.detail} Correspondencia contrastada con revision/temario-oficial.json y convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia aporta encuadre, no sustituye las fuentes primarias que sustentan la respuesta.`;
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
fs.writeFileSync(path.join(__dirname, 'cambios-lote-451.json'), `${JSON.stringify(log, null, 2)}\n`);
console.log('Cotejo ITIC Academy, temario oficial y convocatorias añadido para 2566–2570.');
