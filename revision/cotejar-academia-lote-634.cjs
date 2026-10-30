const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const dir = __dirname;
const bankPath = path.join(dir, '..', 'preguntas_preparatic.json');
const logPath = path.join(dir, 'cambios-lote-634.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  web: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', title: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, versión 2026.1'},
  redes: {url: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', title: 'ITIC Academy, bloque 42 Redes, versión 2026.1'},
  crypto: {url: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk', title: 'ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma, versión 2026.1'},
  bi: {url: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk', title: 'ITIC Academy, bloque 34 Business Intelligence y Big Data, versión 2026.1'}
};
const mappings = {
  3486: {a1: [66], a2: ['III-11'], use: [docs.web], detail: 'El bloque 30 cubre el entorno .NET dentro del A1-66 y la plataforma .NET en A2-D11, normalizado como A2-III-11. La identificación de xUnit.net como framework se comprueba con la documentación oficial del proyecto.'},
  3487: {a1: [109], a2: ['IV-13'], use: [docs.redes], detail: 'El bloque 42 cubre Internet, servicios básicos y redes; el apartado de resolución DNS se trata como herramienta/servicio de Internet. La correspondencia es A1-109 y A2-C11, normalizado como A2-IV-13.'},
  3488: {a1: [80, 81], a2: ['I-6'], use: [docs.crypto], detail: 'El bloque 36 cubre certificados digitales, criptografía, PKI e infraestructura del DNI electrónico. La academia contextualiza el contenido, mientras que los tamaños de clave y la diferencia entre jerarquías se verifican en la DPC vigente de la DGP.'},
  3489: {a1: [66], a2: ['III-11'], use: [docs.web], detail: 'El bloque 30 incluye A1-66 (entorno Microsoft .NET) y A2-D11 (plataforma .NET; código oficial A2-III-11). La definición de ADO.NET se contrasta con documentación de Microsoft Learn.'},
  3490: {a1: [75], a2: ['II-4'], use: [docs.bi], detail: 'El bloque 34 desarrolla almacenes de datos, OLAP y el modelo dimensional con hechos, dimensiones y medidas; los epígrafes oficiales corresponden a A1-75 y A2-T4, normalizado como A2-II-4.'}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(dir, 'temario-oficial.json'), 'utf8')).programas.flatMap(p => p.temas.map(t => t.id)));
const examA1 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938';
const examA2 = 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x => x.id === c.id);
  const m = mappings[c.id];
  assert.ok(q?.revision && m, `Falta revisión o cotejo de ${c.id}`);
  for (const id of [...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)]) assert.ok(official.has(id), `Tema oficial inexistente: ${id}`);
  q.clasificacion = {...q.clasificacion, A1: m.a1.map(n => `A1-${n}`), A2: m.a2.map(n => `A2-${n}`), bloque_academia: `${m.use.map(d => `${d.title}; ${m.detail}; ${d.url}`).join(' | ')}`, estado: 'revisada', nota: 'Correspondencia cotejada con los programas A1/A2 publicados en BOE y revision/temario-oficial.json; el material académico se describe según lo localizado.'};
  q.revision.observaciones += ` Cotejo ITIC Academy: ${m.detail} Correspondencia oficial: ${[...m.a1.map(n => `A1-${n}`), ...m.a2.map(n => `A2-${n}`)].join(', ')}.`;
  for (const d of m.use) q.revision.fuentes.push({url: d.url, referencia: `${d.title}. ${m.detail}`});
  q.revision.fuentes.push({url: examA1, referencia: 'Convocatoria BOE-A-2025-25938, programa A1 del anexo I; correspondencia contrastada con revision/temario-oficial.json.'});
  q.revision.fuentes.push({url: examA2, referencia: 'Convocatoria BOE-A-2025-26262, programa A2 GSI del anexo IX; correspondencia contrastada con revision/temario-oficial.json.'});
  if (c.id === 3488) {
    q.revision.fuentes = q.revision.fuentes.filter(f => !f.url.includes('Politicas_de_Certificacion_v3.2.pdf'));
    q.revision.fuentes.unshift({url: 'https://www.dnielectronico.es/PDFs/Politicas_de_certificacion_v3.4.pdf', referencia: 'DGP, Declaración de Prácticas y Políticas de Certificación DNIe v3.4, junio de 2026, apartado 6.1.5, p. 110: raíces 4096 bits; subordinadas emitidas por AC Raíz 2048 bits y emitidas por AC Raíz 2, 4096 bits.'});
    q.revision.fuentes.push({url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_501', referencia: 'Portal DNIe de la DGP, catálogo oficial de Políticas de Certificación; v3.4 es la versión más reciente publicada en el catálogo consultado.'});
    q.revision.observaciones = q.revision.observaciones.replace('DPC del DNIe v3.2 (5 de mayo de 2025)', 'DPC del DNIe v3.4 (junio de 2026)');
  }
  c.actualizada = structuredClone(q);
}
fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo académico, programas BOE y clasificación oficial completado para lote 634.');
