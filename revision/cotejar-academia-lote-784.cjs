const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-784.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const academy={url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',name:'ITIC Academy, bloque 38, Análisis/Diseño/Construcción de SI, versión 2026.'};
const boeA1='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',boeA2='https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262';
const map={
4241:{a1:['88'],a2:['III-2'],note:'El programa y el bloque académico cubren análisis funcional/requisitos, pero no establecen una lista universal de «rasgos de carácter» de un buen analista; por eso la pregunta se conserva pendiente de una fuente/perfil explícito.'},
4242:{a1:['88'],a2:['II-3'],note:'El §6 del bloque presenta abstracción, encapsulación, herencia y polimorfismo como conceptos de OO; se coteja la cobertura, mientras el concepto se confirma con documentación de Oracle.'},
4243:{a1:['88'],a2:['II-3'],note:'El §6 define el polimorfismo como comportamiento de una operación distinto según el tipo concreto; se coteja curricularmente con análisis/diseño OO.'},
4244:{a1:['86','95'],a2:['III-6'],note:'El bloque 38 incluye documentación técnica/de explotación; el procedimiento de backup/recovery se contrasta directamente con MÉTRICA v3 DSI 1.7.'},
4245:{a1:['88'],a2:['II-3'],note:'El §6 define una clase como descripción de estructura/operaciones comunes de un conjunto de objetos y un objeto como instancia concreta; se coteja cobertura OO.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&q.clasificacion&&m,'Falta revisión/cotejo '+c.id);
 const aa1=m.a1.map(n=>'A1-'+n),aa2=m.a2.map(n=>'A2-'+n);for(const id of [...aa1,...aa2])assert.ok(official.has(id),'Tema oficial inexistente: '+id);
 q.clasificacion.A1=aa1;q.clasificacion.A2=aa2;
 q.clasificacion.bloque_academia=`${academy.name} ${m.note} Correspondencia oficial: ${aa1.join(', ')}; ${aa2.join(', ')}.`;
 q.clasificacion.nota='El material de ITIC Academy se usa para cotejar cobertura curricular; las afirmaciones técnicas se contrastan con documentación oficial y normativa primaria.';
 q.revision.observaciones+=' Cotejo curricular Academy/BOE: '+q.clasificacion.bloque_academia;
 const f={url:academy.url,referencia:`${academy.name} ${m.note}`};if(!q.revision.fuentes.some(x=>x.url===f.url))q.revision.fuentes.push(f);
 for(const x of [{url:boeA1,referencia:`Convocatoria A1 GSI 2025, anexo I; temas ${m.a1.join(', ')}.`},{url:boeA2,referencia:`Convocatoria A2 GSI 2025, anexo IX; temas ${m.a2.join(', ')}.`}])if(!q.revision.fuentes.some(z=>z.url===x.url))q.revision.fuentes.push(x);
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy/BOE lote 784 aplicado: '+log.cambios.length+' preguntas.');
