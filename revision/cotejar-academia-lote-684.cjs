const fs=require('node:fs'),path=require('node:path'),root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-684.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy={url:'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk',referencia:'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (material 2026), cobertura A1 temas 20–25; contexto curricular, no fuente normativa.'};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión ${c.id}`);
 const ethics=c.id===3738,a1=ethics?'A1-24':'A1-25',a2=ethics?'A2-I-8':'A2-I-4';
 q.clasificacion.A1=ethics?['A1-24']:['A1-25'];q.clasificacion.A2=ethics?['A2-I-8']:['A2-I-4'];
 q.clasificacion.bloque_academia=ethics?'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (cubre A1-20 a A1-25, incluido empleo público/EBEP).':'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (cobertura directa A1-25).';
 q.clasificacion.nota=`Correspondencia oficial ${a1}/${a2} contrastada con revision/temario-oficial.json y convocatorias BOE 2025 el 03-11-2026. Academy se usa como guía de cobertura A1, no como fuente normativa; la evidencia jurídica se cita aparte.`;
 const baseObservation=c.actualizada.revision.observaciones.split(' Correspondencia oficial ')[0];
 q.revision.observaciones=`${baseObservation} ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 const refs=ethics?[
  academy,
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria BOE-A-2025-25938, anexo I, tema A1-24 (empleo público y EBEP), cotejada con revision/temario-oficial.json el 03-11-2026.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria BOE-A-2025-26262, anexo IX, tema A2-I-8 (EBEP), cotejada con revision/temario-oficial.json el 03-11-2026.'}
 ]:[
  academy,
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:'Convocatoria BOE-A-2025-25938, anexo I, tema A1-25, cotejada con revision/temario-oficial.json el 03-11-2026.'},
  {url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:'Convocatoria BOE-A-2025-26262, anexo IX, tema A2-I-4, cotejada con revision/temario-oficial.json el 03-11-2026.'}
 ];
 for(const f of refs)if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y temarios oficiales añadido a 3736–3740.');
