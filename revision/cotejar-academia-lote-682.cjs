const fs=require('node:fs'),path=require('node:path'),root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-682.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const refs=[
 ['https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk','ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», material 2026; contexto curricular, no evidencia técnica.'],
 ['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria BOE-A-2025-25938, anexo I, tema A1-52, cotejada con revision/temario-oficial.json el 03-11-2026.'],
 ['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria BOE-A-2025-26262, anexo IX, tema A2-II-1, cotejada con revision/temario-oficial.json el 03-11-2026.'],
 ['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','Convocatoria BOE-A-2025-25938, anexo I, tema A1-25 (gobierno abierto, OGP, planes y Ley 19/2013), cotejada con revision/temario-oficial.json el 03-11-2026.'],
 ['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262','Convocatoria BOE-A-2025-26262, anexo IX, tema A2-I-4 (Ley 19/2013 y transparencia), cotejada con revision/temario-oficial.json el 03-11-2026.'],
 ['https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk','ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado», temas A1-20 a A1-25; material 2026. A1-25 es la correspondencia curricular directa para gobierno abierto y sus planes.'],
 ['https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk','ITIC Academy, bloque 11 «RISP, datos abiertos y transparencia», material 2026: material de apoyo temático, etiquetado por la academia como A1-31/A2-O9; no se atribuye como equivalencia exacta de A2-I-4.']
];
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión ${c.id}`);
 const isLaw=c.id>=3729;
 q.clasificacion.bloque_academia=isLaw
  ?'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (cobertura directa A1-25); bloque 11 «RISP, datos abiertos y transparencia» (apoyo temático, la academia lo etiqueta A1-31/A2-O9, no A2-I-4).'
  :refs[0][1];
 q.clasificacion.nota=isLaw
  ?'Correspondencia oficial A1-25/A2-I-4, cotejada con revision/temario-oficial.json y convocatorias BOE de 2025 el 03-11-2026. El bloque 7 de Academy cubre A1-25; el bloque 11 es solo apoyo en transparencia, sin atribuirle la clasificación A2-I-4. La evidencia primaria se cita en revision.fuentes.'
  :'Correspondencia oficial A1-52/A2-II-1, cotejada con revision/temario-oficial.json y convocatorias BOE de 2025 el 03-11-2026. El bloque 26 de Academy se usa como contexto curricular, no evidencia técnica.';
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 const subset=isLaw?[refs[1],refs[2],refs[4],refs[5]]:[refs[0],refs[1],refs[2]];
 for(const [url,referencia] of subset)if(!q.revision.fuentes.some(f=>f.url===url))q.revision.fuentes.push({url,referencia});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y temarios oficiales añadido a 3726–3730.');
