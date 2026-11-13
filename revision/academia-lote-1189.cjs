const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1189.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={
 6266:{url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',desc:'ITIC Academy, bloque 43 Protocolos (2026.1), modelos, interfaces y protocolos TCP/IP-OSI; cobertura A1-111/A2-II.8.'},
 6267:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',desc:'ITIC Academy, bloque 42 Redes (2026.1), administración de redes y gestión SNMP; cobertura A1-118/A2-IV.9.'},
 6268:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',desc:'ITIC Academy, bloque 42 Redes (2026.1), tecnologías de transporte/agregación y ATM; cobertura A1-113 y redes de área extensa A2-IV.10.'},
 6269:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',desc:'ITIC Academy, bloque 46 Redes inalámbricas (2026.1), IEEE 802.11 y sus modos/funciones; cobertura A1-114/A2-IV.11.'},
 6270:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',desc:'ITIC Academy, bloque 46 Redes inalámbricas (2026.1), IEEE 802.11 y modos de operación; cobertura A1-114/A2-IV.11.'}
};
const clean=s=>{s=(s||'').trim();const i=s.indexOf('Cotejo curricular de ITIC Academy:');return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\.[^\n]*/,'').trim();};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&m,'Falta pregunta/mapeo '+c.id);q.clasificacion.bloque_academia=m.desc;const note='Cotejo curricular de ITIC Academy: '+m.desc+' El temario acredita cobertura curricular, no la respuesta.';q.clasificacion.nota=(clean(q.clasificacion.nota)+' '+note).trim();q.comentarios=(clean(q.comentarios)+' '+note).trim();q.revision.observaciones=(clean(q.revision.observaciones)+' '+note).trim();if(!q.revision.fuentes.some(f=>f.url===m.url))q.revision.fuentes.push({url:m.url,referencia:'ITIC Academy: '+m.desc});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular ITIC Academy actualizado para IDs 6266–6270.');
