const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-549.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const protocolos='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',social='https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk';
const academy={
 3061:{A1:['A1-111'],A2:['A2-II-8'],note:`ITIC Academy, Bloque 43 «Protocolos», versión 2026.1, apartados de arquitectura OSI y capas; A1-111/A2-II-8 son correspondencias directas. ${protocolos}`},
 3062:{A1:['A1-108'],A2:['A2-II-8','A2-IV-10'],note:`ITIC Academy, Bloque 42 «Redes», versión 2026.1, conmutación de circuitos y paquetes; Bloque 43, arquitectura y redes. Encaje A1-108 directo; A2-II-8/IV-10 temático, no epígrafe que nombre la conmutación de circuitos. ${redes} ${protocolos}`},
 3063:{A1:['A1-108'],A2:['A2-IV-7','A2-IV-10'],note:`ITIC Academy, Bloque 42 «Redes», versión 2026.1, medios, acceso y redes WAN; la correspondencia A1-108 es directa y A2-IV-7/IV-10 relaciona medio inalámbrico y WAN sin nombrar VSAT expresamente. ${redes}`},
 3064:{A1:['A1-133'],A2:['A2-II-16'],note:`ITIC Academy, Bloque 50 «Videoconferencia, SSO y trabajo colaborativo», versión 2026.1, apartado de colaboración y redes sociales; correspondencia directa con A1-133/A2-II-16. ${social}`},
 3065:{A1:['A1-118'],A2:['A2-IV-8'],note:`ITIC Academy, Bloques 42 «Redes» y 43 «Protocolos», versión 2026.1, LAN, Ethernet conmutada y VLAN; correspondencia directa A1-118/A2-IV-8. ${redes} ${protocolos}`}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,`Falta pregunta o clasificación ${c.id}`);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),`Tema oficial inexistente ${t}`);const note=`${m.note} Correspondencias contrastadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); se indica cuándo el encaje A2 es temático y no literal.`;q.revision.observaciones+=` Cotejo curricular: ${note}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:`${q.revision.estado}. ${note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación oficial A1/A2 y cotejo de Academy añadidos al lote 549.');
