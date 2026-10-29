const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-539.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const links={
 redes:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
 protocolos:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',
 continuidad:'https://drive.google.com/file/d/1ZhZq0-ZuXcGkrz_YGxr8RTYvjeU4V2o_/view?usp=drivesdk',
 movil:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk'
};
const academy={
 3011:{A1:['A1-108','A1-115'],A2:['A2-II-8'],note:`ITIC Academy, Bloques 42 «Redes» y 43 «Protocolos» (2026.1), sección de OSPF/estado de enlace; programa oficial de encaminamiento A1-108/115 y A2-II-8. ${links.redes} ${links.protocolos}`},
 3012:{A1:['A1-128'],A2:['A2-IV-6'],note:`ITIC Academy, «Tema 038 - Auditoría 2025 v2», apartado que distingue BCP, Plan de Continuidad de Operaciones (COOP) y contingencia de TI; programa oficial A1-128 y recuperación ante desastres A2-IV-6. El concepto legal/técnico se contrasta con NIST. https://drive.google.com/file/d/1ZhZq0-ZuXcGkrz_YGxr8RTYvjeU4V2o_/view?usp=drivesdk`},
 3013:{A1:['A1-109'],A2:['A2-IV-13'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), apartado DNS: zona raíz, autoridades nombradas A–M y anycast; correspondencia oficial A1-109/A2-IV-13. ${links.redes}`},
 3014:{A1:['A1-113'],A2:['A2-IV-10'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), apartado de redes de transporte/agregación ATM y AAL5 para IP sobre ATM, cotejado con RFC 2225; A1-113/A2-IV-10. ${links.redes}`},
 3015:{A1:['A1-108','A1-123'],A2:['A2-IV-10','A2-IV-15'],note:`ITIC Academy, Bloque 46 «Redes inalámbricas» (2026.1), apartado WiMAX/IEEE 802.16 y WirelessMAN-Advanced; encuadre oficial en infraestructura de acceso y comunicaciones móviles A1-108/123 y A2-IV-10/15. ${links.movil}`}
};
const programs=JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8'));
const topics=new Set(programs.programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.note} Correspondencias contrastadas con revision/temario-oficial.json y los anexos I (A1) y IX (A2 GSI) de las convocatorias BOE-A-2025-25938 y BOE-A-2025-26262; los apuntes de academia sirven de apoyo y no sustituyen el programa oficial ni las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.note,estado:'revisada',nota:`${q.revision.estado}. ${m.note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación oficial A1/A2 y correspondencia Academy cotejadas para lote 539.');
