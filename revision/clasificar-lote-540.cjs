const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-540.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const hardware='https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academy={
 3016:{A1:['A1-109'],A2:['A2-IV-13'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), §9.3 TCP/UDP, servicios y puertos; programa oficial A1-109 y A2-IV-13. ${redes}`},
 3017:{A1:['A1-110'],A2:['A2-IV-8'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), §§2–3 sobre fibra monomodo, medios y cableado estructurado; programa oficial de cableado y medios guiados A1-110/A2-IV-8. ${redes}`},
 3018:{A1:['A1-132','A1-57'],A2:['A2-IV-6'],note:`ITIC Academy, Bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización» (2026), §§13 y 34–37: arquitectura de hipervisores, máquinas virtuales y virtualización de servidores; programa oficial A1-57/132 y consolidación/virtualización de servidores A2-IV-6. ${hardware}`},
 3019:{A1:['A1-110'],A2:['A2-IV-8'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), §§2–3 de par trenzado y cableado estructurado. La categoría 4 se identifica solo como antecedente histórico (20 MHz/Token Ring), no como categoría vigente; programa oficial de cableado A1-110/A2-IV-8. ${redes}`},
 3020:{A1:['A1-111','A1-118'],A2:['A2-II-8','A2-IV-9'],note:`ITIC Academy, Bloque 42 «Redes» (2026.1), §§1.2 y 5.4: modelo OSI y áreas funcionales FCAPS; diferencia entre el marco de gestión X.700 y CMIP. Programa oficial OSI y gestión de redes A1-111/118 y A2-II-8/IV-9. ${redes}`}
};
const topics=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),m=academy[c.id];assert.ok(q&&q.revision&&m);for(const t of [...m.A1,...m.A2])assert.ok(topics.has(t),t);q.revision.observaciones+=` Cotejo curricular: ${m.note} Correspondencias contrastadas con revision/temario-oficial.json y los anexos I (A1) y IX (A2 GSI) de las convocatorias BOE-A-2025-25938 y BOE-A-2025-26262; los apuntes de academia son apoyo, no sustituyen el programa oficial ni las fuentes primarias.`;q.clasificacion={...q.clasificacion,A1:m.A1,A2:m.A2,bloque_academia:m.note,estado:'revisada',nota:`${q.revision.estado}. ${m.note}`};q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Clasificación oficial A1/A2 y correspondencia Academy cotejadas para lote 540.');
