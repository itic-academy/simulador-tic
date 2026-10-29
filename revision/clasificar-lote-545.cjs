const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-545.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const red='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocolos='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',social='https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const academy={
 3041:{A1:['A1-118'],A2:['A2-IV-8'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), LAN, puentes y protocolos de nivel de enlace. ${red}`},
 3042:{A1:['A1-110'],A2:['A2-IV-7'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), medios de transmisión guiados y fibra óptica. ${red}`},
 3043:{A1:['A1-133'],A2:['A2-II-16'],note:`ITIC Academy, Bloque 50 «Videoconferencia, SSO y trabajo colaborativo» (2026.1), apartado de herramientas colaborativas y redes sociales, A1-133/A2-II-16. ${social}`},
 3044:{A1:['A1-115'],A2:['A2-II-8'],note:`ITIC Academy, Bloque 43 «Protocolos» (2026.1), arquitectura y direccionamiento IPv6; Bloque 42 «Redes» (2026.1), arquitectura IP. ${protocolos} ${red}`},
 3045:{A1:['A1-118'],A2:['A2-IV-9'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), gestión SNMP, administración/monitorización de redes locales. ${red}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.note} Correspondencias contrastadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); el temario de academia es material auxiliar, no fuente normativa.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.note,estado:'revisada',nota:`${q.revision.estado}. ${m.note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación temática A1/A2 y cotejo Academy registrados para lote 545.');
