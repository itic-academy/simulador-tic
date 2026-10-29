const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-533.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const networks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const wireless='https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk';
const academy={
 2981:{A1:['A1-108','A1-110'],A2:['A2-IV-7'],academy:`ITIC Academy, Bloque 42 «Redes» (actualización 2026), apartados de medios de transmisión guiados y transporte óptico, dentro de A1 108/110 y A2 IV-7. Se contrastó la terminología de tres ventanas con el esquema histórico de fibra. ${networks}`},
 2982:{A1:['A1-108'],A2:['A2-IV-10'],academy:`ITIC Academy, Bloque 42 «Redes» (actualización 2026), conmutación de circuitos y paquetes y tecnologías de redes WAN. Se normaliza al programa A1-108 y al ámbito de redes de área extensa A2-IV-10. ${networks}`},
 2983:{A1:['A1-108','A1-110'],A2:['A2-IV-7','A2-IV-8'],academy:`ITIC Academy, Bloque 42 «Redes» (actualización 2026), medios de acceso de banda ancha, bucle local y equipos de interconexión; el temario sitúa redes y acceso en A1 108/110 y medios y redes locales en A2 IV-7/IV-8. ${networks}`},
 2984:{A1:['A1-108'],A2:['A2-IV-11'],academy:`ITIC Academy, Bloque 42 «Redes» (actualización 2026), acceso inalámbrico de banda ancha IEEE 802.16/WiMAX. Se asigna al tema oficial A1-108 y a redes inalámbricas A2-IV-11. ${networks}`},
 2985:{A1:['A1-114'],A2:['A2-IV-11'],academy:`ITIC Academy, Bloque «Redes inalámbricas y comunicaciones móviles» (actualización 2026), correspondencia IEEE 802.11/Wi-Fi; se declara A1-114 y se normaliza el código de redes inalámbricas al tema oficial A2-IV-11. ${wireless}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.academy} Clasificación contrastada con revision/temario-oficial.json y anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia sirve de orientación, no sustituye el programa oficial ni las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy validados para lote 533.');
