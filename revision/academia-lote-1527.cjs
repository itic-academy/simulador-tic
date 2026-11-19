const fs=require('fs'), path=require('path'), assert=require('assert');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'), logPath=path.join(__dirname,'cambios-lote-1527.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')), log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  7936:['https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk','ITIC Academy, bloque 39 Calidad y Mantenimiento, v2026','Cubre gestión de versiones y configuración (A1-100/A1-102/A2-IV-4); la semántica del comando se verificó en Git.'],
  7937:['https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk','ITIC Academy, bloque 48 Seguridad, v2026.1, §10.4','Cubre continuidad, RTO y MTD (A1-128/A2-IV-6); la relación temporal se verificó en NIST.'],
  7938:['https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk','ITIC Academy, bloque 8 Protección de Datos, v2026','Cubre RGPD y categorías especiales (A1-27/A1-82/A2-I-7); la lista se verificó en EUR-Lex.'],
  7939:['https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk','ITIC Academy, bloque 38 Análisis, diseño y construcción, v2026','Cubre MÉTRICA v3 y gestión de productos (A1-95/A1-102/A2-III-2/A2-IV-4); los estados se verificaron en el manual oficial.'],
  7940:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 6 Economía, Sociedad, Empleo y Digitalización, v2026','Encuadre A1-13/A1-16 sobre protección social y demografía; la regulación histórica y su derogación se verificaron en el BOE.']
};
const calls={A1:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',A2:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id); assert.ok(q?.revision); for(const id of [...q.clasificacion.A1,...q.clasificacion.A2]) assert.ok(official.has(id),`Tema no oficial ${id}`); const [url,title,detail]=docs[c.id]; q.revision.fuentes.push({url,referencia:`Cotejo curricular: ${title}. ${detail}`},{url:calls.A1,referencia:`Convocatoria oficial A1 BOE-A-2025-25938; epígrafe(s): ${q.clasificacion.A1.join(', ')||'sin asignación directa'}.`},{url:calls.A2,referencia:`Convocatoria oficial A2 BOE-A-2025-26262; epígrafe(s): ${q.clasificacion.A2.join(', ')||'sin asignación directa'}.`}); q.revision.observaciones += ` Cotejo curricular: ${title}. ${detail}`; q.comentarios += ` Cotejo curricular: ${title}. ${detail}`; q.clasificacion.bloque_academia=title; q.clasificacion.nota=`Cotejo curricular: ${detail}`; c.actualizada=structuredClone(q);}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n'); fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
console.log(`Cotejo curricular del lote 1527: ${log.cambios.length} preguntas.`);
