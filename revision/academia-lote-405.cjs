const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-405.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 sql:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1 (31-08-2026): A1-63/64/89 y A2-T5/D4/C2; incluye clasificación DDL/DML/TCL y lenguaje SQL.'},
 lcsp:{url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, bloque 5 «Contratación, presupuestos, convenios, subvenciones y compra TIC», actualización 2026: A1-11, contenido sobre Ley 9/2017, procedimientos y adjudicación; el material indica que no hay equivalente en el temario A2.'},
 etl:{url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',label:'ITIC Academy, bloque 34 «Business Intelligence y Big Data», versión 2026.1 (16-09-2026): A1-71 (ciclo ETL) y A1-75 (data warehouse), A2-T4 (almacenes de datos/BI) y A2-D15 (Big Data/OLAP).'},
 freelance:{url:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',label:'ITIC Academy, bloque 50 «Videoconferencia, SSO y trabajo colaborativo», versión 2026.1 (01-10-2026): A1-130/131/133, incluye gestión de identidades, teletrabajo y plataformas vigentes; A2-C14/T16 cubren videoconferencia y herramientas colaborativas. Corresponde A1-131 por teletrabajo; no se fuerza correspondencia A2 para los mercados freelance.'},
 odf:{url:'https://drive.google.com/file/d/18qm2iCLcxLReK_TkqQWIm26S38HXEDYr/view?usp=drivesdk',label:'ITIC Academy, Tema 069 «Software libre», epígrafe oficial de aplicaciones en entorno ofimático; el formato abierto se relaciona además con A1-45/46 (ENI/NTI), A1-77 (XML) y A2-I-9/II-9 (ENI y XML). La búsqueda de Drive no localizó un material específico de ODF; esta asociación es curricular temática, no una atribución de cobertura expresa.'}
};
const mapping={
 2341:{topics:['A1-64','A2-II-5'],doc:'sql',detail:'A1-64 y A2-II-5 mencionan expresamente el lenguaje SQL; A1-63/A2-II-5 aportan el contexto SGBD.'},
 2342:{topics:['A1-11'],doc:'lcsp',detail:'A1-11 incluye LCSP, procedimientos de contratación y formas de adjudicación. No se fuerza A2: el bloque académico actualizado y el anexo oficial consultado no identifican tema equivalente de contratación pública.'},
 2343:{topics:['A1-71','A1-75','A2-II-4','A2-III-15'],doc:'etl',detail:'A1-71 incluye explícitamente ETL; A1-75 data warehouse; A2-II-4 almacenes de datos/BI y A2-III-15 minería de datos, OLAP y Big Data.'},
 2344:{topics:['A1-131'],doc:'freelance',detail:'La asociación es con acceso remoto/teletrabajo en A1-131; no se equiparan las plataformas comerciales de contratación freelance con una herramienta corporativa de teletrabajo. No se fuerza tema A2.'},
 2345:{topics:['A1-45','A1-46','A1-69','A1-77','A2-I-9','A2-II-9'],doc:'odf',detail:'A1-69 aborda software y aplicaciones ofimáticas; A1-45/46 ENI y NTI; A1-77 XML. A2-I-9 ENI/NTI y A2-II-9 XML. La convocatoria no nombra específicamente ODF; se indica como encuadre curricular.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls=['https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938','https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'];
assert.equal(log.cambios.length,5);assert.deepEqual(log.cambios.map(c=>c.id),[2341,2342,2343,2344,2345]);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapping[c.id],d=docs[m.doc];assert.ok(q?.revision&&m&&d,`Falta pregunta ${c.id}`);assert.ok(m.topics.every(x=>official.has(x)),`Tema oficial inexistente ${c.id}`);
 q.clasificacion.A1=m.topics.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(x=>x.startsWith('A2-'));
 const curriculum=`${d.label}. ${m.detail}`;
 const note=`Cotejo curricular: ${curriculum} Correspondencia contrastada con revision/temario-oficial.json y programas oficiales de la convocatoria A1 (anexo I) y A2 GSI (anexo IX), BOE-A-2025-25938 y BOE-A-2025-26262 (${calls.join('; ')}). La academia contextualiza el programa; las respuestas se fundamentan en las fuentes primarias anotadas en la revisión.`;
 q.clasificacion.bloque_academia=curriculum;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');console.log('Cotejo curricular del lote 405 completado.');
