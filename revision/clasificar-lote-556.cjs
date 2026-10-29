const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-556.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
 3096:{A1:['A1-109','A1-111'],A2:['A2-II-8'],note:'ITIC Academy, Bloque 43 «Protocolos», mensajería/protocolos de aplicación; AMQP figura junto con MQTT/CoAP en tecnologías IoT.'},
 3097:{A1:['A1-111'],A2:['A2-II-8'],note:'ITIC Academy, Bloque 43 «Protocolos», §§1.2 y conceptos OSI de conexión, servicio, SAP y relación entre capas.'},
 3098:{A1:['A1-118'],A2:['A2-IV-8'],note:'ITIC Academy, Bloque 42 «Redes», §4.4: repetidor/hub de capa 1 frente a puente/switch de capa 2 y filtrado MAC.'},
 3099:{A1:['A1-108'],A2:['A2-IV-7'],note:'ITIC Academy, Bloque 42 «Redes», acceso sobre cobre xDSL/ADSL2+ y características del par telefónico.'},
 3100:{A1:['A1-123'],A2:['A2-IV-15'],note:'ITIC Academy, Bloque 46 «Redes inalámbricas», §12.2: GSM, bandas P-GSM 900, duplexación FDD y enlace ascendente.'}
};
const links={
 3096:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view'],
 3097:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view'],
 3098:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view'],
 3099:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view'],
 3100:['https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,`Falta pregunta o clasificación ${c.id}`);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),`Tema oficial inexistente ${t}`);const note=`${m.note} ${links[c.id].join(' ')} Correspondencias cotejadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); se diferencia mención curricular directa de encaje temático.`;q.revision.observaciones+=` Cotejo curricular: ${note}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:`${q.revision.estado}. ${note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación oficial A1/A2 y cotejo curricular de ITIC Academy añadidos al lote 556.');
