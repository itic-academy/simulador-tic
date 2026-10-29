const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-534.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const networks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const protocols='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const wireless='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academy={
 2986:{A1:['A1-114'],A2:['A2-IV-11'],academy:`ITIC Academy, bloque de Redes inalámbricas y comunicaciones móviles (2026), IEEE 802.11 y sus subcapas MAC/PHY; clasificación oficial A1-114/A2-IV-11. ${wireless}`},
 2987:{A1:['A1-115'],A2:['A2-II-8'],academy:`ITIC Academy, Bloque 43 «Protocolos» (2026.1), protocolos TCP/IP y documentos RFC. Se normaliza la referencia a los temas oficiales A1-115 y A2-II-8. ${protocols}`},
 2988:{A1:['A1-118'],A2:['A2-IV-9'],academy:`ITIC Academy, Bloque 42 «Redes» (2026.1), gestión y monitorización de dispositivos mediante SNMP; corresponde a A1-118 y A2-IV-9. ${networks}`},
 2989:{A1:['A1-108','A1-115'],A2:['A2-IV-10'],academy:`ITIC Academy, Bloque 42 «Redes» (2026.1) y Bloque 43 «Protocolos» (2026.1), encaminamiento IP y OSPF; clasificación normalizada a A1 108/115 y A2 IV-10. ${networks} ${protocols}`},
 2990:{A1:['A1-115'],A2:['A2-II-8'],academy:`ITIC Academy, Bloque 43 «Protocolos» (2026.1), protocolo IPv6 y cabeceras; clasificación oficial A1-115/A2-II-8. ${protocols}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.academy} Clasificación contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia sirve de orientación, no sustituye el programa oficial ni las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy validados para lote 534.');
