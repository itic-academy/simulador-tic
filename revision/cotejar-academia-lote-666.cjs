const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-666.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academyUrl='https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const a1Url='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2Url='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy='ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31-08-2026); se coteja la cobertura de arquitectura de computadores, memoria, sistemas de altas prestaciones y grid computing. No se encontró una explicación específica de la UMA propietaria de SGI O2 ni de JCL; se consignan como contexto temático, no como respaldo técnico.';
const officialA1='Convocatoria BOE-A-2025-25938, anexo I, tema A1-52 (sistemas de altas prestaciones, Grid Computing y mainframe), cotejada con revision/temario-oficial.json el 31-10-2026.';
const officialA2='Convocatoria BOE-A-2025-26262, anexo IX, tema A2-II-1 (tecnologías actuales de ordenadores, superordenadores y arquitecturas escalables y de altas prestaciones), cotejada con revision/temario-oficial.json el 31-10-2026.';
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión para ${c.id}`);
 q.clasificacion.bloque_academia=academy;
 q.clasificacion.nota='Cotejo curricular: bloque 26 de hardware/arquitectura y altas prestaciones; correspondencia oficial A1-52 y A2-II-1 comprobada en los anexos de 2025 el 31-10-2026. El material formativo orienta cobertura y no sustituye fuentes técnicas primarias.';
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const [url,referencia] of [[academyUrl,academy],[a1Url,officialA1],[a2Url,officialA2]])if(!q.revision.fuentes.some(f=>f.url===url))q.revision.fuentes.push({url,referencia});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy 26 y programas oficiales A1/A2 incorporado a 3646–3650.');
