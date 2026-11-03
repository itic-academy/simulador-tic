const fs=require('node:fs'),path=require('node:path'),root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-683.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academy7={url:'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk',referencia:'ITIC Academy, bloque 7 «Dirección pública, empleo, transparencia y unidad de mercado» (material 2026), cubre explícitamente A1 temas 20–25; contexto curricular directo para gobierno abierto, Ley 19/2013 y transparencia, no fuente jurídica.'};
const academy11={url:'https://drive.google.com/file/d/17B9a1yxMFgHCHEyVVBi0PG-cdCYABVvd/view?usp=drivesdk',referencia:'ITIC Academy, bloque 11 «RISP, datos abiertos y transparencia» (material 2026), etiquetado por la academia como A1-31/A2-O9; apoyo temático en datos abiertos, no correspondencia directa con A2-I-4.'};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión ${c.id}`);
 q.clasificacion.bloque_academia='ITIC Academy, bloque 7 (cobertura curricular A1-25).'+(c.id===3731?' Bloque 11 (apoyo en datos abiertos, etiquetado A1-31/A2-O9; no A2-I-4).':'');
 q.clasificacion.nota='Correspondencia oficial A1-25/A2-I-4 cotejada con revision/temario-oficial.json y BOE de convocatorias 2025 el 03-11-2026. El material Academy se emplea solo como contexto curricular; los hechos jurídicos se contrastan con BOE vigente.';
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const f of (c.id===3731?[academy7,academy11]:[academy7]))if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy y temarios oficiales añadido a 3731–3735.');
