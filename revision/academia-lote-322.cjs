const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-322.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 blockchain:{url:'https://drive.google.com/file/d/1dZeM6nHsrfoseFfduoy9SVCQXvAZK7OO/view?usp=drivesdk',label:'ITIC Academy, Tema 85 Blockchain v2025_subrayado'},
 methods:{url:'https://drive.google.com/file/d/1NmmcxKXatIjwmZTdaD_rR5ht93CV3SxF/view?usp=drivesdk',label:'ITIC Academy, Tema 037, 085, 087 - Metodologías y MCV v2'},
 analysis:{url:'https://drive.google.com/file/d/1w_ZhQ3f2MMvQDg3oAp45DRkZUJzdCmxB/view?usp=drivesdk',label:'ITIC Academy, Tema 087, 089, 091, 092, 093, 096 - Análisis y Diseño Subrayado V2026'}
};
const mapping={
 1926:{doc:['blockchain'],detail:'la portada relaciona expresamente el material con A1-85 (blockchain, redes, consenso, smart contracts, EBP/EBSI); se usa para el encaje temático, y la fecha y naturaleza del proyecto se verifican en Linux Foundation.',topics:['A1-85'],note:'Cotejo curricular específico con el tema oficial A1-85. El material de academia es temático y no sustituye la fuente institucional para caracterizar Hyperledger.'},
 1927:{doc:['methods'],detail:'la portada cubre A1-37 y A2-D2 y el contenido tiene un apartado de metodologías ágiles; no incluye ASD entre los métodos enumerados en el fragmento consultado.',topics:['A1-37','A1-88','A2-III-2'],note:'Cotejo temático con metodologías ágiles y metodologías de desarrollo. La academia no se cita como fuente de la definición específica de ASD.'},
 1928:{doc:['analysis'],detail:'la portada cubre A1-88 y A2-D4 (determinación y especificación de requisitos); su índice/texto trata modelado y análisis, pero los tres objetivos concretos se cotejan con Pressman.',topics:['A1-88','A2-III-3'],note:'Cotejo con análisis funcional y especificación de requisitos. La definición de los objetivos del modelo se acredita directamente con la obra de Pressman.'},
 1929:{doc:['analysis'],detail:'la portada del material de Análisis y Diseño identifica A1-89 (modelos de dominio, entidad-relación y clases) y su contenido de metodologías OO; el epígrafe de la convocatoria A2-III-9 cubre expresamente análisis/diseño OO.',topics:['A1-89','A2-III-9'],note:'Cotejo curricular con modelado de clases y análisis/diseño orientado a objetos; la lista de cuatro principios se explicita como la clasificación de Microsoft Learn, no como lista universal.'},
 1930:{doc:['analysis'],detail:'el material académico incluye análisis/diseño estructurado y diagramas de flujo de datos en su apartado A2-D8, legado académico que no se equipara a un epígrafe del temario A2 vigente; A1-90 es la correspondencia conceptual de modelado de procesos.',topics:['A1-90'],note:'Cotejo con modelado de procesos A1-90. El material de academia también conserva el tratamiento de análisis estructurado/DFD bajo su etiqueta A2-D8; dicha etiqueta académica no es un identificador oficial actual de la convocatoria A2 revisada.'}
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
console.log('Cotejo de academia, temario oficial y convocatorias actualizado para IDs 1926–1930.');
