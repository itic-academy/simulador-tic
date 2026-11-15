const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),file=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(file,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1392.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 networks:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',title:'ITIC Academy, bloque 42 Redes, edición 2026',detail:'Cubre redes locales, dominios de difusión, VLAN y medios de transmisión como encaje curricular general con A1-118/A2-IV-8 (7281) y telecomunicaciones/medios con A1-108/A2-IV-7 (7283); no se usa para probar el detalle técnico ni la historia de CATV.'},
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',title:'ITIC Academy, bloque 48 Seguridad en redes y aplicaciones, edición 2026',detail:'Se coteja la ubicación curricular de ataques y suplantación con A1-125 y A2-II-13; la definición de spoofing se fundamenta en el glosario NIST.'},
 os:{url:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',title:'ITIC Academy, bloque 27, temas 59–62: Sistemas Operativos, actualización 2026',detail:'Cubre fundamentos de sistemas operativos, procesos e hilos dentro de A1-59 y A2-II-2.'},
 none:{url:null,title:'Búsqueda de cobertura de continuidad/contingencia en ITIC Academy/Drive (15-11-2026)',detail:'La búsqueda por continuidad del negocio, plan de contingencia y recuperación no localizó un bloque académico 2026 directamente identificable para este epígrafe. No se fuerza correspondencia con apuntes genéricos; se conserva la clasificación basada en el programa oficial A1-128/A2-IV-6 y NIST SP 800-34.'}
};
const assignments={7281:docs.networks,7282:docs.security,7283:docs.networks,7284:docs.os,7285:docs.none};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision,`Falta revisión ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),`Tema oficial inválido: ${id}`);
 const doc=assignments[c.id];assert.ok(doc);
 const note=`Cotejo curricular ITIC Academy/Drive: ${doc.title}. ${doc.detail}`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota=(q.clasificacion.nota+' '+note).trim();
 q.comentarios=(q.comentarios+' '+note).trim();q.revision.observaciones=(q.revision.observaciones+' '+note).trim();
 if(doc.url)q.revision.fuentes.push({url:doc.url,referencia:`${doc.title}; cotejo: ${doc.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(file,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy/Drive registrado para IDs 7281–7285; no se inventa un bloque directo para continuidad.');
