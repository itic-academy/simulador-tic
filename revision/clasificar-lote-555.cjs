const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-555.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
 3091:{A1:['A1-118'],A2:['A2-IV-8'],note:'ITIC Academy, Bloque 42 “Redes”, §§4 y 4.2: Ethernet y CSMA/CD; se contrasta half-duplex compartido frente a Ethernet full-duplex.'},
 3092:{A1:['A1-113','A1-118'],A2:['A2-IV-8'],note:'ITIC Academy, Bloque 42 “Redes”, ATM como red de agregación y servicios LAN/infraestructura; encaje directo con ATM y LAN.'},
 3093:{A1:['A1-122'],A2:['A2-II-8'],note:'ITIC Academy, Bloque 43 “Protocolos”, modelo OSI y servicios de aplicación/directorio: X.500 y LDAP.'},
 3094:{A1:['A1-127'],A2:['A2-IV-6'],note:'ITIC Academy, Bloque 48 “Seguridad en redes”, §10.4 continuidad/recuperación; Bloque 26, CPD y recuperación ante desastres.'},
 3095:{A1:['A1-127'],A2:['A2-II-13'],note:'ITIC Academy, Bloque 48 “Seguridad en redes”, §7.2 SIEM/SOAR/EDR/XDR/SOC, detección y respuesta a incidentes.'}
};
const links={
 3091:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view'],
 3092:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view'],
 3093:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view'],
 3094:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view','https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view'],
 3095:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,`Falta pregunta o clasificación ${c.id}`);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),`Tema oficial inexistente ${t}`);const note=`${m.note} ${links[c.id].join(' ')} Correspondencias cotejadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); se separa mención directa y encaje temático.`;q.revision.observaciones+=` Cotejo curricular: ${note}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:`${q.revision.estado}. ${note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación oficial A1/A2 y cotejo curricular de ITIC Academy añadidos al lote 555.');
