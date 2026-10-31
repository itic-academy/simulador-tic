const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-664.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academyUrl='https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const academy='ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31-08-2026); cotejo del apartado de arquitectura de computadores, procesadores, clústeres/mainframes. Para JCL no se encontró explicación técnica específica y se usa el bloque solo como contexto curricular; las reglas concretas se verifican en la documentación IBM.';
const a1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const officialA1='Convocatoria BOE-A-2025-25938, anexo I, tema A1-52 (sistemas de altas prestaciones, Grid Computing y mainframe), cotejada con revision/temario-oficial.json el 31-10-2026.';
const officialA2='Convocatoria BOE-A-2025-26262, anexo IX, tema A2-II-1 (tecnologías actuales de ordenadores, superordenadores y arquitecturas escalables y de altas prestaciones), cotejada con revision/temario-oficial.json el 31-10-2026.';
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión para ${c.id}`);
 q.clasificacion.bloque_academia=academy;
 q.clasificacion.nota=`Cotejo curricular: ITIC Academy, bloque 26; correspondencia oficial A1-52 y A2-II-1 verificada en los anexos vigentes consultados el 31-10-2026. El temario delimita cobertura, no sustituye fuentes técnicas.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const [url,referencia] of [[academyUrl,academy],[a1,officialA1],[a2,officialA2]]) if(!q.revision.fuentes.some(f=>f.url===url))q.revision.fuentes.push({url,referencia});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy 26 y programas oficiales A1/A2 incorporado a 3636–3640.');
