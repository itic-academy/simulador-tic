const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-553.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={
 3081:{A1:['A1-108'],A2:['A2-IV-8','A2-II-8'],note:'ITIC Academy, Bloque 42 «Redes», secciones de conmutación de paquetes, datagramas y circuitos virtuales; Bloque 43, IP y encaminamiento. Correspondencia directa A1-108 y temática A2-IV-8/II-8.'},
 3082:{A1:['A1-118'],A2:['A2-IV-8'],note:'ITIC Academy, Bloque 42 «Redes», apartado de métodos de acceso CSMA/CD; Bloque 46, sección 7, CSMA/CA de WLAN. La pregunta se refiere a capa MAC, por lo que se clasifica directamente en redes LAN.'},
 3083:{A1:['A1-111','A1-118'],A2:['A2-II-8','A2-IV-8'],note:'ITIC Academy, Bloque 43, arquitectura OSI y protocolos de enlace/IEEE 802; Bloque 42, arquitectura LAN. Se pregunta por el modelo IEEE 802 con LLC/MAC, no se afirma que todo Ethernet II lleve una cabecera LLC.'},
 3084:{A1:['A1-113','A1-108'],A2:['A2-IV-10','A2-IV-7'],note:'ITIC Academy, Bloque 42 «Redes», §7.3 PDH/SDH (JDS), §7.4 WDM y redes de transporte. Encaje directo A1-113/A2-IV-10; A1-108/A2-IV-7 por transmisión y medios.'},
 3085:{A1:['A1-113','A1-115'],A2:['A2-IV-10','A2-II-8'],note:'ITIC Academy, Bloque 43 «Protocolos», §7 MPLS y Segment Routing; Bloque 42, §7.5 MPLS/WAN. Correspondencia directa A1-113/A2-IV-10 y relacionada A1-115/A2-II-8 por encaminamiento IP.'}
};
const links={
 3081:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view','https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view'],
 3082:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view','https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view'],
 3083:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view','https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view'],
 3084:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view'],
 3085:['https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view','https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view']
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m,`Falta pregunta o clasificación ${c.id}`);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),`Tema oficial inexistente ${t}`);const note=`${m.note} ${links[c.id].join(' ')} Correspondencias cotejadas con revision/temario-oficial.json y anexos I de BOE-A-2025-25938 (A1) y IX de BOE-A-2025-26262 (A2 GSI); las correspondencias temáticas se distinguen de las menciones expresas.`;q.revision.observaciones+=` Cotejo curricular: ${note}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:note,estado:'revisada',nota:`${q.revision.estado}. ${note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2, enlaces y cotejo de ITIC Academy añadidos al lote 553.');
