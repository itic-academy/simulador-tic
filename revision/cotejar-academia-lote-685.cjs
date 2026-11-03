const fs=require('node:fs'),path=require('node:path'),root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-685.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const common=[
 {url:'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk',referencia:'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (material 2026), cobertura A1 temas 20–25; guía de cobertura curricular, no evidencia legal.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria BOE-A-2025-25938, anexo I, tema A1-25, cotejada con revision/temario-oficial.json el 03-11-2026.'},
 {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria BOE-A-2025-26262, anexo IX, tema A2-I-4, cotejada con revision/temario-oficial.json el 03-11-2026.'}
];
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión ${c.id}`);
 q.clasificacion.A1=['A1-25'];q.clasificacion.A2=['A2-I-4'];
 q.clasificacion.bloque_academia='ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (cobertura directa A1-25).';
 q.clasificacion.nota='Correspondencia A1-25/A2-I-4 contrastada con temario-oficial.json y convocatorias BOE 2025 el 03-11-2026. El material Academy es guía curricular; el contenido legal se valida con BOE.';
 if(c.id===3743)q.clasificacion.nota+=' Discrepancia temporal documentada: el programa A1-2025 cita RD 919/2014, derogado expresamente por RD 615/2024.';
 const base=c.actualizada.revision.observaciones.split(' Correspondencia A1-25/A2-I-4 ')[0];
 q.revision.observaciones=`${base} ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 const refs=c.id===3743?[
  ...common,
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'El programa A1-2025, anexo I, tema 25, cita RD 919/2014; se identifica como referencia histórica desactualizada, pues RD 615/2024 lo derogó.'}
 ]:common;
 for(const f of refs)if(!q.revision.fuentes.some(x=>x.url===f.url&&x.referencia===f.referencia))q.revision.fuentes.push(f);
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y temarios oficiales añadido a 3741–3745.');
