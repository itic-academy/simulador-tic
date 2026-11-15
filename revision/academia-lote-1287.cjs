const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-1287.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  bigdata: 'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',
  databases: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
  hardware: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',
  networks: 'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk'
};
const map = {
  6756: {a1:[75], a2:[], urls:[docs.bigdata], desc:'ITIC Academy, bloque 34, Business Intelligence y Big Data, edición 2026: cotejo del encaje curricular de Data Mesh en los contenidos de gestión y arquitectura de datos. La lista de los cuatro principios se verifica con Dehghani; no se fuerza una correspondencia A2.'},
  6757: {a1:[64,89], a2:['II-5'], urls:[docs.databases], desc:'ITIC Academy, bloque 29, Bases de Datos: cubre modelo relacional, SQL y modelado de datos. Correspondencia oficial A1-64/A1-89/A2-II.5; el material coteja cobertura, y las definiciones de CODASYL y tipos de clave se comprueban con fuentes técnicas primarias.'},
  6758: {a1:[], a2:['II-7'], urls:[docs.hardware], desc:'ITIC Academy, bloque 26, hardware, servidores, virtualización y contenedores. Correspondencia oficial directa A2-II.7 (contenedores, despliegue, monitorización y escalado); no se fuerza A1-57, cuyo epígrafe trata virtualización de servidores y no nombra Kubernetes.'},
  6759: {a1:[108], a2:[], urls:[docs.networks], desc:'ITIC Academy, bloque 42, redes, edición 2026: cotejo curricular de WAN y técnicas de conmutación. Correspondencia oficial directa A1-108; no se fuerza A2-II.8, que trata TCP/IP y OSI, no clasificación de conmutación.'},
  6760: {a1:[], a2:['II-7'], urls:[docs.hardware], desc:'ITIC Academy, bloque 26, servidores, virtualización y contenedores. Correspondencia oficial directa A2-II.7 para despliegue de aplicaciones contenedorizadas; Helm no se menciona como herramienta concreta en el temario, por lo que esa identificación procede exclusivamente de la documentación oficial de Helm.'}
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
  const note = `${marker} ${m.desc} Correspondencia oficial: ${topics || 'sin epígrafe específico; no se fuerza etiqueta'}. El cotejo académico acredita contexto curricular; la conclusión técnica se contrasta con las fuentes primarias citadas.`;
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
console.log('Cotejo curricular aplicado a los IDs 6756–6760.');