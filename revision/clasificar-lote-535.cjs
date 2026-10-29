const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-535.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const networks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const wireless='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academy={
 2991:{A1:['A1-116'],A2:['A2-IV-14'],academy:'ITIC Academy: las búsquedas disponibles en Drive de «Cisco Unity», «telefonía IP» y «VoIP/ToIP» no devolvieron una unidad con texto verificable específica de este producto. Se clasifica por el tema oficial de VoIP/ToIP y NGN/IMS; esta correspondencia deriva del BOE, no se atribuye a un bloque académico no comprobado.'},
 2992:{A1:['A1-114'],A2:['A2-IV-11'],academy:`ITIC Academy, bloque de Redes inalámbricas y comunicaciones móviles (actualización 2026), IEEE 802.11, roaming y operación WLAN. ${wireless}`},
 2993:{A1:['A1-118'],A2:['A2-IV-8'],academy:`ITIC Academy, Bloque 42 «Redes» (2026.1), redes locales, VLAN y dispositivos de interconexión. ${networks}`},
 2994:{A1:['A1-123'],A2:['A2-IV-15'],academy:`ITIC Academy, bloque de Redes inalámbricas y comunicaciones móviles (actualización 2026), acceso radio móvil y técnicas de acceso múltiple; clasificación oficial A1-123/A2-IV-15. ${wireless}`},
 2995:{A1:['A1-113'],A2:['A2-IV-10'],academy:`ITIC Academy, Bloque 42 «Redes» (2026.1), redes de transporte y WDM. ${networks}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.academy} Clasificación contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia orienta, no sustituye el programa oficial ni la comprobación en fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy validados para lote 535.');
