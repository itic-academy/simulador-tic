const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-551.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const protocolos='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',radio='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const academy={
 3071:{A1:['A1-111'],A2:['A2-II-8'],note:`ITIC Academy, Bloque 43 «Protocolos», versión 2026.1, OSI y funciones de sus capas; correspondencia directa A1-111/A2-II-8. ${protocolos}`},
 3072:{A1:['A1-108','A1-111'],A2:['A2-IV-7','A2-II-8'],note:`ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026, §2.2 trata multiplexación; Bloques 42/43 cubren medios y capas. Encaje A1-108/111 y A2-IV-7/II-8 por transmisión y arquitectura, sin ser un epígrafe que nombre una técnica concreta de multiplexación. ${radio} ${redes} ${protocolos}`},
 3073:{A1:['A1-115'],A2:['A2-II-8'],note:`ITIC Academy, Bloque 43 «Protocolos», versión 2026.1, IPv4/IPv6, encaminamiento, OSPF e IPv6; correspondencia directa A1-115/A2-II-8. ${protocolos}`},
 3074:{A1:['A1-112'],A2:['A2-IV-11'],note:`ITIC Academy, Bloque 46 «Redes inalámbricas y comunicaciones móviles», actualización 2026, §10.1 denomina expresamente WiMAX (IEEE 802.16); A1-112/A2-IV-11 son el encaje inalámbrico y de acceso. ${radio}`},
 3075:{A1:['A1-116'],A2:['A2-IV-14'],note:`ITIC Academy, Bloque 43 «Protocolos», versión 2026.1, §13 VoIP, transporte RTP y códecs; correspondencia directa A1-116/A2-IV-14. ${protocolos}`}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,`Falta pregunta o clasificación ${c.id}`);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),`Tema oficial inexistente ${t}`);const note=`${m.note} Correspondencias cotejadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); se explicitan las relaciones temáticas no literales.`;q.revision.observaciones+=` Cotejo curricular: ${note}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:`${q.revision.estado}. ${note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación oficial A1/A2 y cotejo Academy añadidos al lote 551.');
