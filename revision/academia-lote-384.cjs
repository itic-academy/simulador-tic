const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const root = path.join(__dirname, '..'), bankPath = path.join(root, 'preguntas_preparatic.json');
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const logPath = path.join(__dirname, 'cambios-lote-384.json'), log = JSON.parse(fs.readFileSync(logPath, 'utf8'));
const docs = {
  databases: {url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk', label:'ITIC Academy, bloque 29, Bases de datos, SQL y modelado, versión 2026.1'},
  systems: {url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk', label:'ITIC Academy, bloque 30, Tecnologías de sistemas de información, versión 2026.1'},
  design: {url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk', label:'ITIC Academy, bloque 38, Análisis, diseño y construcción de sistemas, versión 2026.1'},
  quality: {url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk', label:'ITIC Academy, bloque 39, Calidad y mantenimiento, versión 2026.1'},
  network: {url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk', label:'ITIC Academy, bloques 42 Redes y 43 Protocolos, versión 2026.1'}
};
const map = {
  2236:{topics:['A1-64','A2-III-4'], doc:'databases', detail:'modelo relacional, estructura y acceso a datos; el bloque 29 cubre el modelo relacional y el diseño lógico de bases de datos'},
  2237:{topics:['A1-65','A1-77','A2-III-12'], doc:'systems', detail:'desarrollo web, scripts de cliente, solicitudes de red y compatibilidad; el bloque 30 aborda AJAX y tecnologías de cliente-servidor'},
  2238:{topics:['A1-89','A2-III-9'], doc:'design', detail:'modelado de clases y diseño orientado a objetos; el bloque 38 trata diseño modular y acoplamiento, mientras el III-9 del programa A2 encuadra análisis y diseño orientado a objetos'},
  2239:{topics:['A1-96','A2-III-7'], doc:'quality', detail:'procesos, técnicas y documentación de pruebas de software; el bloque 39 trata calidad y mantenimiento y el programa A2 incluye planificación y documentación de pruebas'},
  2240:{topics:['A1-115','A2-II-8'], doc:'network', detail:'redes IP e IPv6; el bloque 42/43 cubre redes y protocolos, mientras A2-II-8 abarca arquitectura TCP/IP y protocolos de interconexión'}
};
const official = new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length, 5);
for (const c of log.cambios) {
  const q = bank.preguntas.find(x=>x.id===c.id), m=map[c.id], doc=m&&docs[m.doc];
  assert.ok(q?.revision && m && doc, `Falta revisión o cotejo académico para ${c.id}`);
  assert.ok(m.topics.every(t=>official.has(t)), `Tema oficial inexistente: ${c.id}`);
  q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));
  q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
  const curr=`${doc.label}; ${m.detail}.`;
  const note=`Cotejo curricular: ${curr} Correspondencia ${m.topics.join(', ')} contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). La academia aporta encuadre curricular; la respuesta se fundamenta en las fuentes técnicas primarias de la ficha.`;
  q.clasificacion.bloque_academia=curr;
  q.clasificacion.nota=note;
  q.revision.observaciones += ` ${note}`;
  q.comentarios=q.revision.observaciones;
  q.revision.fuentes.push({url:doc.url,referencia:`${doc.label}; cotejo del contenido docente y su encaje, no fuente normativa ni autoridad técnica.`});
  q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
  q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; anexo de programa, tema(s) ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')}.`});
  c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive, programas oficiales y convocatorias actualizado para IDs 2236–2240.');
