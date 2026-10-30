const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-604.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={
constitution:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2'},
security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026'},
};
const rows={
3336:{A1:['A1-126'],A2:['A2-III-12'],doc:docs.security,detail:'el bloque incluye WS-Security en su temario de seguridad de servicios web; desarrolla su uso en SOAP, con integridad, confidencialidad, autenticación, tokens y firmas. Se cotejó como material didáctico, y el estándar se validó separadamente con OASIS.'},
3337:{A1:['A1-1'],A2:['A2-I-1'],doc:docs.constitution,detail:'el índice y el desarrollo del bloque incluyen derechos fundamentales y garantías; su sección sobre el art. 18 distingue el secreto de las comunicaciones del art. 18.3 y la limitación del uso de la informática del 18.4.'},
3338:{A1:['A1-1'],A2:['A2-I-1'],doc:docs.constitution,detail:'el bloque cubre los derechos constitucionales y la nacionalidad/extranjería; se compara la regla del art. 23.1 con la excepción electoral municipal del art. 13.2. La respuesta normativa se contrasta con el texto consolidado del BOE.'},
3339:{A1:['A1-2'],A2:['A2-I-1'],doc:docs.constitution,detail:'el bloque dedica el tema A1-2 al Poder Judicial y desarrolla el art. 127, incompatibilidades y asociación profesional; se coteja el alcance del epígrafe A2-I-1, que es constitucional general y no contiene un epígrafe A2 específico de Poder Judicial.'},
3340:{A1:['A1-4'],A2:['A2-I-8'],doc:docs.constitution,detail:'la sección 13.2 aborda los órganos superiores y directivos de la AGE y reproduce el encuadre oficial del tema A1-4; la clasificación se verifica con el art. 55.3 vigente de la Ley 40/2015.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con revision/temario-oficial.json y convocatorias BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} La academia es un material formativo y no sustituye a la fuente normativa/técnica primaria de la respuesta.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de Academy y programas oficiales A1/A2 aplicado al lote 604.');
