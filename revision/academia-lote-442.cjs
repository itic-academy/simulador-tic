const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-442.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
  os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',label:'ITIC Academy, bloque 27 Sistemas Operativos, versión 2026 actualizado (01-09-2026)'},
  sec:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 Seguridad en redes y en el nivel de aplicación, actualización 2026'},
  java:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de Sistemas de la Información, versión 2026.1 (31-08-2026)'}
};
const map={
  2521:{docs:['hardware'],detail:'el bloque incluye dispositivos y medios de almacenamiento; el componente físico pista/cilindro se contrasta con IBM',topics:['A1-56','A2-II-1']},
  2522:{docs:['hardware'],detail:'el bloque incluye sistemas de altas prestaciones y Grid Computing (A1-52); se documenta aparte que Globus Toolkit es una tecnología histórica retirada, no recomendación de despliegue actual',topics:['A1-52','A2-II-1']},
  2523:{docs:['os'],detail:'el bloque desarrolla UNIX/Linux y sus fundamentos de administración; Xshell se identifica separadamente mediante el manual del fabricante como emulador/cliente Windows',topics:['A1-60','A2-II-2']},
  2524:{docs:['sec'],detail:'el bloque cubre seguridad de redes y ataques; CISA aporta la definición concreta de whaling para víctimas de alto perfil',topics:['A1-125','A2-II-13','A2-IV-12']},
  2525:{docs:['java'],detail:'el bloque incluye el entorno y lenguaje Java; la regla de sintaxis sobre declaración frente a creación de array se verifica directamente en JLS Java SE 25',topics:['A1-67','A2-II-3']}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),row=map[change.id];
  assert.ok(q?.revision&&row,`Falta revisión o cotejo para ${change.id}`);
  for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...row.topics])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
  q.clasificacion.A1=row.topics.filter(x=>x.startsWith('A1-'));
  q.clasificacion.A2=row.topics.filter(x=>x.startsWith('A2-'));
  const refs=row.docs.map(k=>({url:docs[k].url,referencia:`${docs[k].label}; ${row.detail}. Correspondencia contrastada en temario-oficial.json y las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2).`}));
  const curriculum=row.docs.map(k=>docs[k].label).join('; ');
  const note=`Cotejo curricular: ${curriculum}; ${row.detail}. Correspondencia con ${row.topics.join(', ')} contrastada con revision/temario-oficial.json y las convocatorias BOE-A-2025-25938/BOE-A-2025-26262. El material de academia encuadra el contenido; las fuentes técnicas primarias de revision.fuentes justifican la respuesta.`;
  q.clasificacion.bloque_academia=`${curriculum}; ${row.detail}`;
  q.clasificacion.nota=note;
  if(!q.revision.observaciones.includes(note))q.revision.observaciones+=` ${note}`;
  q.comentarios=q.revision.observaciones;
  for(const ref of refs)if(!q.revision.fuentes.some(f=>f.url===ref.url))q.revision.fuentes.push(ref);
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy y temas oficiales añadido para 2521–2525.');
