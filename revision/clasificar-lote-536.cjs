const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-536.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const networks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const networks2025='https://drive.google.com/file/d/1AJFovfbL1q-L1YziRwg08uzsKtV5aWb8/view?usp=drivesdk';
const protocols='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const security='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const academy={
 2996:{A1:['A1-119'],A2:['A2-II-6'],academy:`ITIC Academy, «Tema 108, 109, 113, 118, 119, 120, 121. Redes v2025», tema de redes Intranet/Extranet y granjas de servidores; se alinea con A1-119 y A2-II-6. ${networks2025}`},
 2997:{A1:['A1-118'],A2:['A2-IV-9'],academy:`ITIC Academy, Bloque 42 «Redes» (2026), gestión y administración de redes; Bloque 43 «Protocolos» (2026), marcos y protocolos de gestión. ${networks} ${protocols}`},
 2998:{A1:['A1-109'],A2:['A2-IV-13'],academy:`ITIC Academy, Bloque 42 «Redes» (2026), DNS y servicios de Internet; Bloque 43 «Protocolos» (2026), protocolos y servicios. ${networks} ${protocols}`},
 2999:{A1:['A1-109'],A2:['A2-IV-13'],academy:`ITIC Academy, Bloque 42 «Redes» (2026), servicios básicos de Internet y correo; Bloque 43 «Protocolos» (2026), SMTP/RFC. ${networks} ${protocols}`},
 3000:{A1:['A1-109','A1-125'],A2:['A2-IV-12','A2-IV-13'],academy:`ITIC Academy, Bloque 42 «Redes» (2026), correo/DNS, y Bloque 48 «Seguridad en redes y nivel de aplicación» (2026), autenticación/protección de correo. ${networks} ${security}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.academy} Clasificación contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia orienta, no sustituye el programa oficial ni la comprobación de las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy validados para lote 536.');
