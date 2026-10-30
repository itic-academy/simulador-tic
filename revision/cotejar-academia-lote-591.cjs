const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-591.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const gov={url:'https://docs.google.com/document/d/1rSQpq9zk56uslNANapnI4nujT5OnVb2O/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',label:'ITIC Academy, Tema 030 «Gobernanza TIC», v2025; documento consultado en Drive el 30-10-2026'};
const networks={url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42 «Redes», versión 2026.1, fecha 29-09-2026'};
const protocols={url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026.1, fecha 29-09-2026'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación comprobada contra revision/temario-oficial.json y los programas GSI publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX). El BOE, no el material académico, determina los temas oficiales.';
const rows={
 3271:{A1:['A1-30'],A2:['A2-I-10'],academy:gov,detail:'el tema de gobernanza identifica la organización TIC AGE y los organismos públicos, incluida Red.es/ONTSI; la pregunta se resolvió con las funciones estatutarias verificadas en el BOE.'},
 3272:{A1:['A1-110','A1-118'],A2:['A2-IV-7','A2-IV-8'],academy:networks,detail:'bloque 42 de redes: cableado de datos, conectores 8P8C/RJ45, pares y esquemas T568A/T568B; la asignación de pines se contrasta con TIA y documentación técnica.'},
 3273:{A1:['A1-111'],A2:['A2-II-8'],academy:protocols,detail:'bloque 43: modelos OSI y TCP/IP, arquitectura por capas e IP; la correspondencia de capas se fundamenta en ITU-T X.200 y RFC 1122.'},
 3274:{A1:['A1-108'],A2:['A2-IV-7'],academy:networks,detail:'bloque 42: medios guiados, fibra óptica y magnitudes de transmisión; la definición electromagnética de modo se apoya en recomendaciones vigentes de ITU-T.'},
 3275:{A1:['A1-112','A1-114'],A2:['A2-IV-11'],academy:networks,detail:'bloque 42: WLAN IEEE 802.11, Wi-Fi 7, bandas, medios inalámbricos y fibra; el uso de 6 GHz se contrasta con IEEE y con las decisiones vigentes de espectro de la UE.'}
};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema inexistente ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.academy.label}; ${r.detail} ${r.academy.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.academy.label}; ${r.detail} ${r.academy.url} ${calls}`;
 q.revision.fuentes.push({url:r.academy.url,referencia:`${r.academy.label}; material consultado para correspondencia curricular, no como evidencia normativa/técnica. ${r.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy en Drive y programas oficiales GSI A1/A2 completado para 3271–3275; las respuestas se apoyan en fuentes primarias independientes.');
