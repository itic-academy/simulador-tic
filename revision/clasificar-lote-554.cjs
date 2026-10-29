const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-554.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
 3086:{A1:['A1-108'],A2:['A2-IV-7'],note:'ITIC Academy, Bloque 42 «Redes», fibra óptica y medios de transmisión; comparación entre fibra monomodo y multimodo. Correspondencia directa A1-108/A2-IV-7.'},
 3087:{A1:['A1-127'],A2:['A2-IV-12'],note:'ITIC Academy, Bloque 48 «Seguridad en redes y nivel de aplicación», §§6.1 y 6.3: distingue identificación, autenticación, autorización y factores/autenticadores. Correspondencia temática directa A1-127/A2-IV-12.'},
 3088:{A1:['A1-110','A1-118'],A2:['A2-IV-8'],note:'ITIC Academy, Bloque 42 «Redes», redes LAN y equipos de interconexión; routers IP y switches/puentes Ethernet. Correspondencia directa A1-110/118 y A2-IV-8.'},
 3089:{A1:['A1-127','A1-115'],A2:['A2-IV-12','A2-II-8'],note:'ITIC Academy, Bloque 48, protocolos IPsec; Bloque 43, IPv4/IPv6. Encaje directo en seguridad de redes e IP.'},
 3090:{A1:['A1-55','A1-117'],A2:['A2-IV-13'],note:'ITIC Academy, Bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», §18.6 «Edge computing» (cómputo próximo a origen/usuario y baja latencia); Bloque 42 relaciona edge y 5G. Relación directa A1-55/117 y temática A2-IV-13.'}
};
const links={
 3086:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view'],
 3087:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view'],
 3088:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view'],
 3089:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view','https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view'],
 3090:['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view','https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,`Falta pregunta o clasificación ${c.id}`);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),`Tema oficial inexistente ${t}`);const note=`${m.note} ${links[c.id].join(' ')} Correspondencias cotejadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); se separa la mención literal del encaje temático.`;q.revision.observaciones+=` Cotejo curricular: ${note}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:`${q.revision.estado}. ${note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2, enlaces y cotejo de ITIC Academy añadidos al lote 554.');
