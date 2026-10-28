const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-325.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 metrics:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, Bloque 17 Adquisición de Sistemas y Rentabilidad, versión 2026.2'},
 quality:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, versión 2026.2'},
 itil:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',label:'ITIC Academy, Bloque 41 ITIL y COBIT, versión 2026.1'}
};
const mapping={
 1941:{doc:['metrics'],detail:'el bloque 17 desarrolla medición funcional, puntos de función, COSMIC y LOC como enfoques de estimación; la portada/fragmentos consultados no desarrolla la diferencia Mark II de Symons, que se verifica con el informe técnico de SEI/CMU.',topics:['A1-99','A2-III-2'],note:'Cotejo temático con estimación y medición de tamaño. Se deja claro que la definición de referencias a entidades procede de la fuente técnica de Symons/SEI, no se atribuye al material académico.'},
 1942:{doc:['quality'],detail:'el bloque 39 incluye un apartado específico de control de versiones con Git dentro de gestión de configuración y cambios; no se atribuye al temario una explicación literal de los patrones .gitignore, que se confirman con la documentación oficial de Git.',topics:['A1-102','A2-IV-4'],note:'Cotejo académico de Git/control de versiones; la semántica exacta y diferencia con info/exclude se verifica en git-scm.com.'},
 1943:{doc:['quality'],detail:'el bloque 39 actualizado aborda el modelo EFQM 2025 y REDER; el enunciado se conserva como pregunta histórica explícita de EFQM 2013, edición de nueve criterios, con esos términos antiguos.',topics:['A1-103'],note:'El material académico 2026 cubre el modelo actual; el ítem se rotula como histórico y se contrasta con el documento de EFQM 2013 para evitar mezclar ediciones.'},
 1944:{doc:['quality'],detail:'el bloque 39 estudia la gestión de calidad y actualiza ISO 9000/9001 a las ediciones de 2026; no pretende reproducir la lista histórica de normas de 2000. La composición del conjunto antiguo se verifica en el manual del Banco Mundial.',topics:['A1-103'],note:'Cotejo con la actualización de calidad/ISO en la academia. La taxonomía citada queda fechada como 2000 y no se atribuye al temario moderno.'},
 1945:{doc:['itil'],detail:'el bloque 41 cubre A1-106 y A2-C2; advierte que ITIL v3 es histórico, que ITIL 4 sustituyó su ciclo de vida y que el marco vigente cambia el nombre/práctica a Change Enablement. La relación de la pregunta se conserva solo para Service Transition de ITIL v3.',topics:['A1-106','A2-IV-4'],note:'Cotejo directo del marco académico actual y de su advertencia sobre v3; la respuesta histórica se comprueba en Service Transition y el glosario v3.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); el cotejo temático no sustituye la fuente primaria.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de contenido y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de ITIC Academy, temario oficial y convocatorias actualizado para IDs 1941–1945.');
