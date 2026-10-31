const fs=require('node:fs'),path=require('node:path'),root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-673.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academyUrl='https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk';
const a1Url='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',a2Url='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const academy='ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31-08-2026); cotejado como contexto curricular para arquitecturas de sistemas, multiprocesamiento y clústeres. No se usa para probar definiciones de arquitectura.';
const officialA1='Convocatoria BOE-A-2025-25938, anexo I, tema A1-52 (sistemas de altas prestaciones, Grid Computing y mainframe), contrastada con revision/temario-oficial.json el 31-10-2026.';
const officialA2='Convocatoria BOE-A-2025-26262, anexo IX, tema A2-II-1 (tecnologías actuales de ordenadores, superordenadores y arquitecturas escalables y de altas prestaciones), contrastada con revision/temario-oficial.json el 31-10-2026.';
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión para ${c.id}`);
 q.clasificacion.bloque_academia=academy;
 q.clasificacion.nota='Cotejo curricular: Academy bloque 26 y correspondencia oficial A1-52/A2-II-1 con los programas de la convocatoria 2025 y revision/temario-oficial.json, comprobados el 31-10-2026. La clave se sustenta en las fuentes técnicas de revision.fuentes.';
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const [url,referencia] of [[academyUrl,academy],[a1Url,officialA1],[a2Url,officialA2]])if(!q.revision.fuentes.some(f=>f.url===url))q.revision.fuentes.push({url,referencia});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Academy 26 y temarios oficiales A1/A2 incorporado a 3681–3685.');
