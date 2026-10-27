const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const bank = JSON.parse(fs.readFileSync(path.join(root, 'preguntas_preparatic.json'), 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-263.json');
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  systems: {url: 'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk', label: 'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026.1 (14-08-2026)'},
  hardware: {url: 'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk', label: 'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  soa: {url: 'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 28 Arquitectura SOA y requisitos no funcionales, versión 2026 V2 (26-09-2026)'},
  data: {url: 'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label: 'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026.1 (31-08-2026)'},
  technology: {url: 'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label: 'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'}
};
const mapping = {
  1631: {docs:['soa'], detail:'el bloque de arquitectura SOA y sistemas distribuidos orienta los servicios web, interoperabilidad y mensajería SOAP; la precisión del nombre se contrasta con la W3C Recommendation (A1-58/A2-II-6)', topics:['A1-58','A2-II-6']},
  1632: {docs:['systems'], detail:'el bloque de sistemas operativos abarca memoria virtual y planificación de procesos; se asigna A1-61 y arquitectura/sistemas de altas prestaciones A2-II-1', topics:['A1-61','A2-II-1']},
  1633: {docs:['hardware'], detail:'el bloque de hardware cubre buses y periféricos; IEEE 1394 se encuadra en estándares de interconexión de dispositivos (A1-56/A2-II-1)', topics:['A1-56','A2-II-1']},
  1634: {docs:['technology'], detail:'el bloque de tecnologías de sistemas de información incluye desarrollo Java y acceso desde aplicaciones a bases de datos (A1-65/A1-67/A2-III-10)', topics:['A1-65','A1-67','A2-III-10']},
  1635: {docs:['data'], detail:'el bloque de bases de datos cubre expresamente el modelo relacional, SQL y administración de SGBD (A1-63/A1-64/A2-IV-2)', topics:['A1-63','A1-64','A2-IV-2']}
};
const base = {
  1631: ['Se corrige el reactivo: preguntar la expansión de las siglas solo tiene una respuesta histórica (Simple Object Access Protocol, SOAP 1.1), pero W3C declara en la especificación SOAP 1.2 que el nombre ya no es un acrónimo. La formulación actualizada evalúa qué define el estándar y evita presentar su etimología histórica como definición vigente.', 'corregida'],
  1632: ['Se conserva la clave Round Robin y se reformula el reactivo con descripciones breves para distinguir inequívocamente familias: FIFO, LRU y NRU son estrategias de reemplazo de páginas; Round Robin es planificación de CPU por turnos.', 'corregida'],
  1633: ['Se limita la pregunta a nombres comerciales documentados. Se elimina la comparación general con USB y las afirmaciones de velocidad compartida, que dependen de versión, topología y dispositivos y no permitían una respuesta universal.', 'corregida'],
  1634: ['La clave Type 4 es correcta: es un controlador Java puro que habla directamente el protocolo del producto de base de datos. Se evita generalizar una implementación de fabricante a todos los drivers JDBC: JDBC define interfaces y cada proveedor implementa su controlador.', 'vigente'],
  1635: ['El original preguntaba por una característica genérica y ofrecía “independencia de relaciones entre tablas”, expresión no definida que no equivale a independencia de datos. Se sustituye por una pregunta concreta sobre la representación relacional; filas/tuplas y columnas/atributos evitan atribuir al modelo propiedades imprecisas.', 'corregida']
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for (const change of log.cambios) {
  const q=bank.preguntas.find(x=>x.id===change.id), row=mapping[change.id];
  assert.ok(q?.revision&&row,`Falta revisión o encaje curricular ${change.id}`);
  for(const topic of [...q.clasificacion.A1,...q.clasificacion.A2,...row.topics]) assert.ok(official.has(topic),topic);
  const refs=row.docs.map(k=>({url:docs[k].url,referencia:`${docs[k].label}; ${row.detail}. Correspondencia oficial cotejada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`}));
  const curriculum=row.docs.map(k=>docs[k].label).join('; ');
  const note=`Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje curricular; no sustituye las fuentes técnicas primarias.`;
  const [baseNote, state]=base[change.id];
  q.revision.estado=state;
  q.revision.observaciones=`${baseNote} ${note}`;
  q.revision.fuentes=q.revision.fuentes.filter(f=>!Object.values(docs).some(d=>d.url===f.url));
  change.original.revision && assert.ok(!change.original.revision, 'La pregunta original no debe traer revisión');
  q.clasificacion.bloque_academia=`${curriculum}; ${row.detail}`;
  q.clasificacion.nota=note;
  q.comentarios=q.revision.observaciones;
  q.revision.fuentes.push(...refs);
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy y BOE añadido para 1631–1635.');
