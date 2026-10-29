const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-532.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const itilDrive='https://docs.google.com/document/d/1jjSrUwj9WHzDegEtoHih6L_o3srhlL8I/edit?usp=drivesdk';
const networks='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const protocols='https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk';
const academy={
 2976:{A1:['A1-106'],A2:[],academy:`ITIC Academy, «Tema 105 - ITIL y COBIT - v2.docx», sección de ITIL v3/v4 y gestión de proveedores. El documento académico conserva el número 105; la convocatoria A1 vigente BOE-A-2025-25938 sitúa esta materia como A1-106. ${itilDrive}`},
 2977:{A1:['A1-106'],A2:[],academy:`ITIC Academy, «Tema 105 - ITIL y COBIT - v2.docx», apartados de ITIL 4/SVS y gestión de solicitudes. Numeración interna 105 cotejada con el tema vigente A1-106 del BOE-A-2025-25938. ${itilDrive}`},
 2978:{A1:['A1-117'],A2:['A2-IV-13'],academy:`ITIC Academy, Bloque 42 «Redes» (2026.1), cobertura de IoT en A2 C11/A1 117; el programa vigente identifica A1-117 y A2-IV-13. ${networks}`},
 2979:{A1:['A1-115'],A2:['A2-II-8'],academy:`ITIC Academy, Bloque 43 «Protocolos» (2026.1), secciones 3.1–3.6 sobre IPv4, ICMP y ARP; declara A1 115 y A2 T8. Se contrastó T8 con el identificador oficial A2-II-8. ${protocols}`},
 2980:{A1:['A1-108'],A2:['A2-II-8'],academy:`ITIC Academy, Bloque 43 «Protocolos» (2026.1), §§1.2–1.5 sobre OSI, capas y protocolos; declara A1 111/A2 T8. También Bloque 42 «Redes», A1 108. La clasificación se normaliza a A1-108 y A2-II-8 según la convocatoria vigente. ${protocols} ${networks}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.academy} Clasificación contrastada con revision/temario-oficial.json y los anexos de las convocatorias A1 BOE-A-2025-25938 y A2 GSI BOE-A-2025-26262; la academia sirve de orientación, no sustituye el programa oficial ni las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.academy,estado:'revisada',nota:`${q.revision.estado}. ${m.academy}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Clasificación A1/A2 y cotejo Academy validados para lote 532.');
