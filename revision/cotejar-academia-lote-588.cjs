const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-588.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const block38={url:'https://docs.google.com/document/d/1za_7e_LlvUEpja7VJyYElIgRIPu_AbE3/edit?usp=drivesdk',label:'ITIC Academy, bloque 38 «Análisis, diseño y construcción de sistemas», versión 2026.1'};
const block48={url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1, 30-09-2026'};
const links={
 3256:{block:block38,detail:'encaje curricular en W3C, interfaces, diseño de interacción y requisitos de accesibilidad/usabilidad; la definición técnica de SRGS/SSML/SISR/EMMA se fundamenta exclusivamente en las recomendaciones W3C citadas en la ficha.'},
 3257:{block:block48,detail:'cotejo con el bloque de seguridad y los epígrafes oficiales de biometría/seguridad; la edición vigente y el alcance de pruebas PAD se sustentan en la ficha oficial ISO, no se atribuyen a Academy.'},
 3258:{block:block38,detail:'encaje en documentación técnica, manuales de usuario y construcción del sistema; la edición y alcance de ISO/IEC/IEEE 26514:2022 se verifican en la ficha ISO.'},
 3259:{block:block38,detail:'apartado de UML y diagramas de diseño; la clasificación estructural del diagrama de despliegue se comprueba en OMG UML 2.5.1.'},
 3260:{block:block38,detail:'apartado de análisis/diseño orientado a objetos y UML; Oracle y Microsoft Learn respaldan los conceptos de herencia, polimorfismo y encapsulación.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Correspondencia cotejada con revision/temario-oficial.json y los anexos de las convocatorias GSI más recientes localizadas al cierre: A1, BOE-A-2025-25938 (anexo I), y A2, BOE-A-2025-26262 (anexo IX). La convocatoria define el temario; Academy orienta su estudio y no sustituye las fuentes normativas o técnicas primarias.';
const topics={3256:{A1:['A1-44'],A2:['A2-III-14']},3257:{A1:['A1-81'],A2:['A2-II-13']},3258:{A1:['A1-34'],A2:['A2-III-6','A2-III-14']},3259:{A1:['A1-92'],A2:['A2-III-9']},3260:{A1:['A1-89'],A2:['A2-III-9']}};
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const m=topics[c.id],ref=links[c.id],q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q&&m&&ref);for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema inexistente ${id}`);const academy=`${ref.block.label}; ${ref.detail} ${ref.block.url}`;q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:academy,estado:'revisada',nota:c.actualizada.revision.estado+'. '+calls};q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;q.revision.fuentes.push({url:ref.block.url,referencia:academy});c.actualizada=structuredClone(q);}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo académico contextual de las cinco preguntas y comprobación de códigos oficiales A1/A2: 5/5.');
