const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-324.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 analysis:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, Bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1'},
 agile:{url:'https://drive.google.com/file/d/1XhxuoYyCTIYuffLG2O8NwOcgQkrDI3EW/view?usp=drivesdk',label:'ITIC Academy, Tema 37, 86 y 88 Metodologías Ágiles y Ciclo de Vida, versión 2026.1'},
 quality:{url:'https://drive.google.com/file/d/17PDaqPVVwhzfeplx9bzp8XjEXm_qlami/view?usp=drivesdk',label:'ITIC Academy, Bloque 39 Calidad y Mantenimiento, versión 2026.2'},
 metrics:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, Bloque 17 Adquisición de Sistemas y Rentabilidad, versión 2026.2'}
};
const mapping={
 1936:{doc:['analysis'],detail:'el bloque 38 ofrece encaje general en ingeniería, ciclo de vida y desarrollo; la propiedad de invisibilidad/intangibilidad de Brooks no aparece como contenido expreso en el material consultado y se verifica con SEBoK.',topics:['A1-88','A2-III-2'],note:'Cotejo académico de encaje en desarrollo de sistemas; la caracterización concreta del software se atribuye a la fuente técnica.'},
 1937:{doc:['agile'],detail:'el tema 37/86/88 incluye expresamente XP y sus prácticas, incluida integración continua; su asociación y no exclusividad se comprueban además con Agile Alliance y Fowler.',topics:['A1-37','A1-88','A1-97','A2-III-2'],note:'El documento académico cubre la asociación entre XP y CI; no se infiere que la práctica sea exclusiva de XP.'},
 1938:{doc:['analysis','agile'],detail:'el bloque 38 recoge A1-97 (modelos de integración continua) y A2-D6 (construcción, despliegue, CI y DevOps), y explica integración frecuente, build y pruebas automatizados; el tema 37/86/88 encuadra CI en prácticas ágiles/XP.',topics:['A1-37','A1-88','A1-97','A2-III-2'],note:'Cotejo directo con el apartado de integración continua del bloque 38; la definición específica se contrasta también con Fowler.'},
 1939:{doc:['quality'],detail:'el bloque 39 trata modelos clásicos de calidad (McCall), familia SQuaRE e ISO/IEC 25010:2023, y diferencia los modelos de calidad de producto de la gestión ISO 9000/9001; IBM Rational documenta FURPS como dimensiones de calidad.',topics:['A1-98','A2-III-13'],note:'El cotejo confirma el reemplazo de ISO/IEC 9126 por ISO/IEC 25010:2023 y la distinción entre calidad del producto y sistema de gestión.'},
 1940:{doc:['metrics'],detail:'el bloque 17 de adquisición/viabilidad incluye explícitamente LOC como longitud del código fuente y preguntas de estimación de tamaño, costes y viabilidad; la distinción rigurosa entre líneas físicas y sentencias lógicas se contrasta con el informe SEI/CMU.',topics:['A1-99','A2-III-2'],note:'El documento académico ofrece el encaje de LOC y estimación, pero DSI/DSLOC se definen con el marco técnico de SEI/CMU.'}
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
console.log('Cotejo de ITIC Academy, temario oficial y convocatorias actualizado para IDs 1936–1940.');
