const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');

const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-512.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
  2876:{A1:['A1-67'],A2:['A2-III-10'],academy:'ITIC Academy, Bloque 30 Tecnologías de Sistemas de la Información 2026.1: https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk. Incluye el entorno Java y la arquitectura Java EE/Jakarta EE; mapa curricular, no fuente técnica primaria.'},
  2877:{A1:['A1-96'],A2:['A2-III-7'],academy:'ITIC Academy, Bloque 39 Calidad y Mantenimiento 2026: https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk. El programa comprende calidad y garantía en desarrollo de software, pruebas y documentación; Pressman se usa para el detalle de FTR.'},
  2878:{A1:['A1-48','A1-110','A1-125'],A2:['A2-IV-12'],academy:'ITIC Academy, Bloque 48 Seguridad en Redes y Aplicaciones 2026.1: https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk; y Bloque 43 Protocolos 2026: https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk. El temario sitúa la materia en seguridad de redes y dispositivos; se usa como mapa curricular y no como autoridad técnica.'},
  2879:{A1:['A1-37','A1-88'],A2:['A2-III-2'],academy:'ITIC Academy, Bloque 15 Metodologías Ágiles y Ciclo de Vida 2026.1: https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk. Incluye A1-37, A1-86, A1-88 y A2-D2; se utiliza como mapa de estudio, no como autoridad del manifiesto.'},
  2880:{A1:['A1-89'],A2:['A2-III-4'],academy:'ITIC Academy, Bloque 29 Bases de Datos, SQL y Modelado de Datos 2026.1: https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk. Incluye modelo entidad-relación y modelado de datos; se usa como mapa curricular y la definición se fundamenta en Elmasri y Navathe.'}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),m=academy[change.id];
  assert.ok(q&&q.revision&&m,`ID ${change.id} sin revisión o mapa`);
  for(const id of [...m.A1,...m.A2])assert.ok(topics.has(id),`Tema no oficial: ${id}`);
  q.revision.observaciones=q.revision.observaciones.split(' Cotejo curricular:')[0]+` Cotejo curricular: ${m.academy}`;
  q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};
  q.comentarios=q.revision.observaciones;
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación A1/A2 cotejada contra temario-oficial.json y los materiales de Academy de los cinco temas del lote 512.');
