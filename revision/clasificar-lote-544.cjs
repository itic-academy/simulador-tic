const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-544.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const red='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocolos='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',seguridad='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',video='https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const academy={
 3036:{A1:['A1-125'],A2:['A2-IV-12'],note:`ITIC Academy, Bloque 48 «Seguridad en redes y en el nivel de aplicación» (2026.1), cortafuegos y seguridad perimetral. ${seguridad}`},
 3037:{A1:['A1-130'],A2:['A2-IV-16'],note:`ITIC Academy, Bloque 50 «Videoconferencia, SSO y trabajo colaborativo» (2026.1), sistemas/protocolos de videoconferencia; H.321 se incorpora como especificación histórica concreta del ámbito. ${video}`},
 3038:{A1:['A1-117'],A2:['A2-IV-13'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), apartado IoT y redes conectadas, relacionado con los sistemas HBES/BACS; no se localizó epígrafe específico de domótica, por lo que esta correspondencia es indirecta. ${red}`},
 3039:{A1:['A1-118'],A2:['A2-IV-8'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), LAN/Ethernet y cableado; Bloque 43 «Protocolos» (2026.1), redes locales y protocolos. ${red} ${protocolos}`},
 3040:{A1:['A1-108','A1-115'],A2:['A2-II-8'],note:`ITIC Academy, Bloque 43 «Protocolos» (2026.1), TCP/IP, transporte y segmentación; Bloque 42 «Redes» (2026.1), MTU y redes. ${protocolos} ${red}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.note} Correspondencias contrastadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); el temario de academia es material auxiliar, no fuente normativa.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.note,estado:'revisada',nota:`${q.revision.estado}. ${m.note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación temática A1/A2 y cotejo Academy registrados para lote 544.');
