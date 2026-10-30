const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-614.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 elearn:{url:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',title:'ITIC Academy, bloque temático 33 «E-learning y Sistemas de Información Geográfica», versión 2026.1'},
 bi:{url:'https://drive.google.com/file/d/1S8Dn0VtGFN0nxCvI8CAv6Q1R-5Z2sgHw/view?usp=drivesdk',title:'ITIC Academy, bloque 34 «Business Intelligence y Big Data», versión 2026'},
 biPrev:{url:'https://drive.google.com/file/d/120y3QsoRVBV5KfzyXgGNPtQPCOCjffE1/view?usp=drivesdk',title:'ITIC Academy, «Temas 075 y 076 — BI y Big Data», edición 2024, utilizada solo para localizar la nomenclatura de la pregunta histórica'}
};
const details={
 3386:{docs:[docs.elearn],detail:'el temario explícita blended learning como aprendizaje híbrido/semipresencial y distingue la modalidad tecnológica m-learning; el concepto se confirmó además con la definición de la Comisión Europea.'},
 3387:{docs:[docs.elearn],detail:'el temario cubre LMS, contenidos digitales y SCORM en A1-73; la diferencia entre SCORM y UDDI se contrastó con ADL y OASIS, respectivamente.'},
 3388:{docs:[docs.elearn],detail:'el bloque dedica apartados a georreferenciación, SIG, IDE y metadatos; la taxonomía histórica se identificó con el marco UN-IGIF.'},
 3389:{docs:[docs.elearn,docs.biPrev],detail:'el bloque 33 contextualiza metadatos SIG; la terminología histórica de los niveles de explotación se contrastó directamente con el estándar NSDI citado. No se presenta como estándar obligatorio vigente.'},
 3390:{docs:[docs.bi],detail:'el bloque 34 se alinea con A1-75 y A2-II-4/A2-III-15 (BI, almacenes de datos, OLAP y minería); la distinción técnica se verificó con Microsoft Learn.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con programa A1 BOE-A-2025-25938 (anexo I), programa A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),d=details[c.id];assert.ok(q&&d&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=d.docs.map(x=>`${x.title}; ${d.detail} ${x.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'La relación con A2 se respalda en epígrafes oficiales de BI/OLAP.':'No se fuerza un tema A2 sin encaje directo; la academia también señala A2 «no aplica» para el bloque A1-73/74.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const x of d.docs)q.revision.fuentes.push({url:x.url,referencia:`${x.title}; cotejo curricular: ${d.detail} El temario de academia establece el encaje, mientras las definiciones y conclusiones técnicas se contrastan con las fuentes primarias citadas.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas individualmente las cinco preguntas del lote 614 con los bloques pertinentes de ITIC Academy y los programas oficiales A1/A2.');
