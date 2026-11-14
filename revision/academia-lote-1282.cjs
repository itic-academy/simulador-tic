const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1282.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  tech: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',
  security: 'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',
  os: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',
  databases: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk'
};
const map = {
  6731: {a1:[67,80], a2:[], urls:[docs.tech,docs.security], desc:'ITIC Academy, bloque 30, §4.5, sitúa JNDI entre servicios Java de nombres/directorio y la distingue de JMS, mensajería; bloque 36 ofrece el contexto curricular de directorios LDAP/X.500. Encaje oficial directo A1-67 (Java) y A1-80 (protocolos LDAP/X.500); no hay un epígrafe A2 que nombre JNDI o LDAP expresamente para esta pregunta.'},
  6732: {a1:[79], a2:['IV-12'], urls:[docs.security], desc:'ITIC Academy, bloque 36, §3.1, incluye RSA y criptografía de clave pública. Encaje oficial A1-79 y A2-IV-12 (técnicas criptográficas); el material se usa para cotejo curricular, con RFC 8017 como fuente técnica.'},
  6733: {a1:[], a2:['II-2'], urls:[docs.os], desc:'ITIC Academy, bloque 27 «Sistemas Operativos», incluye planificación/dispatcher y cambio de contexto. Encaje oficial A2-II-2, que incluye Windows. No se asigna A1-60 porque ese tema corresponde a Unix/Linux, no al componente interno específico de Windows.'},
  6734: {a1:[64], a2:['III-4'], urls:[docs.databases], desc:'ITIC Academy, bloque 29 de bases de datos, trata el álgebra relacional y la división. Encaje oficial A1-64 (modelo relacional) y A2-III-4 (modelo lógico relacional); el material de academia es cotejo curricular y el fundamento se contrasta con Codd y la definición formal de división.'},
  6735: {a1:[68], a2:['III-12'], urls:[docs.tech], desc:'ITIC Academy, bloque 30 incluye PHP y desarrollo web. Encaje oficial A1-68 (entorno de desarrollo PHP) y A2-III-12 (desarrollo web en servidor). La sintaxis vigente se valida con el manual oficial de PHP.'}
};
const marker = 'Cotejo curricular ITIC Academy:';
const trim = value => {
  const raw = (value || '').trim(), i = raw.indexOf(marker);
  return (i < 0 ? raw : raw.slice(0, i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/, '').trim();
};
for (const change of log.cambios) {
  const q = bank.preguntas.find(item => item.id === change.id), m = map[change.id];
  assert.ok(q && m, `Falta ID ${change.id}`);
  q.clasificacion.A1 = m.a1.map(n => `A1-${n}`);
  q.clasificacion.A2 = m.a2.map(n => `A2-${n}`);
  const topics = [...q.clasificacion.A1, ...q.clasificacion.A2].join('/');
  q.clasificacion.bloque_academia = m.desc;
  const note = `${marker} ${m.desc} Correspondencia oficial: ${topics || 'sin epígrafe específico para esta API de directorio'}. El cotejo académico acredita contexto curricular; la conclusión técnica se contrasta con las fuentes primarias citadas.`;
  q.clasificacion.nota = `${trim(q.clasificacion.nota)} ${note}`.trim();
  q.comentarios = `${trim(q.comentarios)} ${note}`.trim();
  q.revision.observaciones = `${trim(q.revision.observaciones)} ${note}`.trim();
  const urls = new Set(m.urls);
  q.revision.fuentes = q.revision.fuentes.filter(source => !urls.has(source.url));
  for (const url of m.urls) q.revision.fuentes.push({url, referencia:`ITIC Academy/Drive: ${m.desc}`});
  change.actualizada = structuredClone(q);
}
fs.writeFileSync(path.join(root, 'preguntas_preparatic.json'), JSON.stringify(bank, null, 2) + '\n');
fs.writeFileSync(logPath, JSON.stringify(log, null, 2) + '\n');
console.log('Cotejo curricular aplicado a los IDs 6731–6735.');
