const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-552.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
 3076:{A1:['A1-122'],A2:['A2-II-8','A2-IV-12'],note:'ITIC Academy, Bloque 43 «Protocolos», tabla de puertos LDAP/LDAPS; Bloque 48 «Seguridad en redes», LDAP/LDAPS en directorios y protocolos seguros. Relación directa A1-122 y temática A2-II-8/A2-IV-12.'},
 3077:{A1:['A1-127'],A2:['A2-IV-6','A2-IV-12'],note:'ITIC Academy, Bloque 48, §10.4, continuidad de negocio y recuperación ante desastres; Bloque 26 incluye continuidad y recuperación. Encaje conceptual: la guía CSAE de 2004 no forma parte del temario de la academia.'},
 3078:{A1:['A1-132'],A2:['A2-IV-6'],note:'ITIC Academy, Bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», edición 2026.1, incluye virtualización de puestos, maquetas, imágenes base y plantillas; A1-132 directo y A2-IV-6 temático.'},
 3079:{A1:['A1-111'],A2:['A2-II-8'],note:'ITIC Academy, Bloque 43 «Protocolos», edición 2026.1, secciones 1.2 y 1.5, OSI y funciones de las capas; relación directa A1-111/A2-II-8.'},
 3080:{A1:['A1-114'],A2:['A2-IV-11'],note:'ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles», edición 2026, capítulos de tecnologías inalámbricas y IEEE 802.11; relación directa A1-114/A2-IV-11.'}
};
const links={
 3076:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view','https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view'],
 3077:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view','https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view'],
 3078:['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view'],
 3079:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view'],
 3080:['https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,`Falta pregunta o clasificación ${c.id}`);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),`Tema oficial inexistente ${t}`);const note=`${m.note} ${links[c.id].join(' ')} Correspondencias cotejadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); las correspondencias temáticas se distinguen de las menciones expresas.`;q.revision.observaciones+=` Cotejo curricular: ${note}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:`${q.revision.estado}. ${note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2, enlaces y cotejo de ITIC Academy añadidos al lote 552.');
