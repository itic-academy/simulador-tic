const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-344.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 mobile:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, Bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026'},
 software:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',label:'ITIC Academy, Bloque 46 Redes inalámbricas y comunicaciones móviles, edición 2026'},
 prototype:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, Bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, edición 2026.1'},
 quality:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, edición 2026'},
 protocols:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, Bloque 43 Protocolos, edición 2026'}
};
const map={
 2036:{doc:'mobile',topics:['A1-123','A2-IV-15'],detail:'cubre generaciones y sistemas de comunicaciones móviles; la modalidad tarifaria se deja sin certificar por depender del servicio y plan.'},
 2037:{doc:'software',topics:['A1-114','A2-IV-11'],detail:'cubre WLAN y métodos de configuración/seguridad; WPS/RADIUS se diferencian por sus funciones.'},
 2038:{doc:'prototype',topics:['A1-94','A2-III-3'],detail:'cubre prototipos y diseño de interfaces; el feedback y la clarificación de requisitos se contrastan con Pressman.'},
 2039:{doc:'quality',topics:['A1-96','A2-III-13'],detail:'cubre procesos y calidad del software; SW-CMM se identifica como modelo histórico, distinto de CMMI vigente.'},
 2040:{doc:'protocols',topics:['A1-111','A2-II-8'],detail:'incluye el modelo OSI; la equivalencia exacta ITU-T X.200 = ISO/IEC 7498-1 se verifica con ITU/ISO.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);assert.deepEqual(q.clasificacion.A1,m.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,m.topics.filter(t=>t.startsWith('A2-')));assert.ok(m.topics.every(t=>official.has(t)));const d=docs[m.doc];q.clasificacion.bloque_academia=`${d.label}; ${m.detail}`;q.clasificacion.nota=`Correspondencia comprobada en revision/temario-oficial.json y convocatorias A1/A2 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). El material de academia sirve como cotejo curricular, no reemplaza la fuente primaria. ${c.actualizada.revision.observaciones}`;q.revision.observaciones=q.clasificacion.nota;q.comentarios=q.clasificacion.nota;q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo temático con los epígrafes oficiales.`});c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de academia, convocatorias y programas A1/A2 registrado para IDs 2036–2040.');
