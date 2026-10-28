const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-393.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 cpd:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26, hardware, servidores, CPD, almacenamiento y virtualización'},
 ens:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',label:'ITIC Academy, bloque 22, ENS y ciberseguridad'},
 constitution:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, bloque 01, Constitución y organización del Estado'},
 law:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03, Leyes 39/2015 y 40/2015, actuación administrativa y administración digital'}
};
const map={
 2281:{topics:['A1-53','A2-IV-6'],docs:['cpd'],detail:'El bloque 26 aporta contexto sobre planificación física y operación de CPD. No se atribuye a la academia la definición del Tier Standard; la distinción entre Uptime Tier y ANSI/TIA-942 Rated se valida con las organizaciones responsables.'},
 2282:{topics:['A1-1','A2-I-3'],docs:['constitution'],detail:'El bloque 01 da encuadre de Constitución y organización del Estado. La composición concreta del Gobierno se verifica en el artículo 98.1 de la Constitución, no en el material docente.'},
 2283:{topics:['A1-48','A1-53','A2-I-9','A2-II-13','A2-IV-6'],docs:['ens','cpd'],detail:'Los bloques 22 y 26 encuadran ENS/ciberseguridad y CPD. Temas oficiales de ENS, seguridad y planificación física. La aplicabilidad exacta de mp.if.5/mp.if.6 se resuelve con el anexo II del RD 311/2022.'},
 2284:{topics:['A1-131'],docs:[],detail:'No se localizó en Drive un material de ITIC Academy dedicado específicamente a trabajo a distancia o reversibilidad. El encaje oficial directo identificado es A1-131 (acceso remoto y teletrabajo); no se fuerza un tema A2 equivalente.'},
 2285:{topics:['A1-8','A2-I-8','A2-I-9'],docs:['law'],detail:'El bloque 03 trata las Leyes 39/2015 y 40/2015 y administración digital. Temas oficiales de procedimiento, régimen jurídico y administración electrónica; la fecha se verifica en la disposición final séptima consolidada de la Ley 39/2015.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);assert.deepEqual(log.cambios.map(c=>c.id),[2281,2282,2283,2284,2285]);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q?.revision&&m,`Falta revisión ${c.id}`);assert.ok(m.topics.every(t=>official.has(t)),`Tema oficial inexistente en ${c.id}`);
 q.clasificacion.A1=m.topics.filter(t=>t.startsWith('A1-'));q.clasificacion.A2=m.topics.filter(t=>t.startsWith('A2-'));
 const curricular=`${m.docs.map(k=>docs[k].label).join('; ')||'No se localizó material académico específico en Drive'}. ${m.detail}`;
 const note=`Cotejo curricular: ${curricular} Correspondencias ${m.topics.join(', ')} contrastadas con revision/temario-oficial.json y los anexos de las convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2). El temario académico aporta encuadre, no autoridad técnica ni normativa.`;
 q.clasificacion.bloque_academia=curricular;q.clasificacion.nota=note;q.revision.observaciones+=` ${note}`;q.comentarios=q.revision.observaciones;
 for(const k of m.docs)q.revision.fuentes.push({url:docs[k].url,referencia:`${docs[k].label}; cotejo curricular, no autoridad técnica ni normativa.`});
 if(m.topics.some(t=>t.startsWith('A1-')))q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',referencia:`Convocatoria A1 consultada; temas de programa ${m.topics.filter(t=>t.startsWith('A1-')).join(', ')}.`});
 if(m.topics.some(t=>t.startsWith('A2-')))q.revision.fuentes.push({url:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262',referencia:`Convocatoria A2 GSI consultada; temas de programa ${m.topics.filter(t=>t.startsWith('A2-')).join(', ')}.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
console.log('Cotejo académico y temas oficiales del lote 393 completados.');
