const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-597.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={standards:{url:'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk',label:'ITIC Academy, tema 24 «Normalización, conformidad, certificación y normativa LAN/WLAN», A1-50, 2026'},storage:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 «Hardware, sistemas de almacenamiento y virtualización», A1-56, 2026'},database:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado», A1-63/A2-T5, 2026'},tech:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», A1-65–68/A2-T3, 2026'}};
const rows={
3301:{A1:['A1-50'],A2:['A2-II-11'],doc:docs.standards,detail:'el temario se corresponde con los organismos de normalización y con las obligaciones de adopción de una EN; se distingue adopción nacional de obligatoriedad legal de uso.'},
3302:{A1:['A1-56'],A2:['A2-IV-5'],doc:docs.storage,detail:'el bloque oficial y académico trata sistemas de almacenamiento; en la búsqueda de Drive no se encontró una ficha que establezca específicamente el límite de ext3, por lo que el apunte sirve solo para encaje curricular y no como validación del valor histórico.'},
3303:{A1:['A1-63'],A2:['A2-II-5'],doc:docs.database,detail:'el documento incluye expresamente el modelo de referencia ANSI y la arquitectura ANSI/SPARC de tres esquemas.'},
3304:{A1:['A1-66'],A2:['A2-III-11'],doc:docs.tech,detail:'el bloque cubre el entorno Microsoft .NET; se revisó el stem para distinguir .NET Framework, cuya arquitectura documentada incluye CLR y class library, de la plataforma .NET actual.'},
3305:{A1:['A1-67'],A2:['A2-III-10'],doc:docs.tech,detail:'el temario de Java cubre APIs Java; el bloque de bases de datos menciona drivers JDBC históricos, coherente con la taxonomía Tipo 1–4 examinada. Para la semántica exacta se usa Oracle.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con revision/temario-oficial.json y los programas GSI vigentes publicados en BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 const academyLinks=c.id===3305?`${docs.database.url}; también ${r.doc.url}`:r.doc.url;
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${academyLinks}`,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy en Drive: ${r.doc.label}; ${r.detail} ${academyLinks} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} El material académico se usa para situar y contrastar cobertura, no como fuente normativa/técnica de la respuesta.`});
 if(c.id===3305)q.revision.fuentes.push({url:docs.database.url,referencia:`${docs.database.label}; su apartado de JDBC trata explícitamente drivers JDBC históricos.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy, clasificación oficial A1/A2 y trazabilidad del lote 597 completados.');
