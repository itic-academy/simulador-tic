const fs=require('node:fs'),path=require('node:path'),root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-681.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const refs=[
 ['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1 (31-08-2026); contexto curricular, no evidencia técnica.'],
 ['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria BOE-A-2025-25938, anexo I, tema A1-52, cotejada con revision/temario-oficial.json el 03-11-2026.'],
 ['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria BOE-A-2025-26262, anexo IX, tema A2-II-1, cotejada con revision/temario-oficial.json el 03-11-2026.']
];
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión ${c.id}`);q.clasificacion.bloque_academia=refs[0][1];q.clasificacion.nota='Cotejo curricular: Academy bloque 26 y correspondencia con A1-52/A2-II-1 de las convocatorias 2025, contrastados frente a revision/temario-oficial.json el 03-11-2026. La evidencia técnica reside en revision.fuentes.';q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;for(const [url,referencia] of refs)if(!q.revision.fuentes.some(f=>f.url===url))q.revision.fuentes.push({url,referencia});c.actualizada=structuredClone(q);}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy 26 y temarios oficiales añadido a 3721–3725.');
