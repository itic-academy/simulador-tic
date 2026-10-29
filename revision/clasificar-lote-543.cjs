const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-543.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocolos='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',voz='https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',correo='https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',crypto='https://drive.google.com/file/d/1e63zmnn7AdxZtHG6iIfiqbGqH7l7fjP6/view?usp=drivesdk';
const academy={
 3031:{A1:['A1-108','A1-109','A1-115'],A2:['A2-II-8'],note:`ITIC Academy, Bloque 43 «Protocolos» (2026), TCP/IP, transporte, encaminamiento; Bloque 42 «Redes» para interconexión. ${protocolos} ${redes}`},
 3032:{A1:['A1-110','A1-118'],A2:['A2-IV-7'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), cableado y LAN; Token Ring/Manchester diferencial se conserva como tecnología histórica de capa física. ${redes}`},
 3033:{A1:['A1-116'],A2:['A2-IV-14'],note:`ITIC Academy, Bloque 43 «Protocolos» (2026), protocolos de tiempo real y codificación de voz; Bloque 50 «Videoconferencia, SSO y colaboración», calidad de voz y códecs. ${protocolos} ${voz}`},
 3034:{A1:['A1-110','A1-118'],A2:['A2-IV-7'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), cableado estructurado, categoría 6/6A y Ethernet; se matiza alcance/distancia según IEEE 802.3an y TIA TSB-155-A. ${redes}`},
 3035:{A1:['A1-122','A1-125'],A2:['A2-II-13','A2-IV-12'],note:`ITIC Academy, Bloque 45 «Correo electrónico, mensajería y servicios de directorio» (2026), protección criptográfica del correo; Bloque 36 «Seguridad, criptografía, identificación y firma» (2026.1), integridad/confidencialidad. ${correo} ${crypto}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.note} Correspondencias verificadas en revision/temario-oficial.json y anexos I (A1) y IX (A2 GSI) de BOE-A-2025-25938 y BOE-A-2025-26262; la academia es material auxiliar, no fuente normativa.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.note,estado:'revisada',nota:`${q.revision.estado}. ${m.note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación temática A1/A2 y cotejo Academy registrados para lote 543.');
