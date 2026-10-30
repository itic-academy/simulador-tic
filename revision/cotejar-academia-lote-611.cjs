const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-611.json');
const bank=JSON.parse(fs.readFileSync(bp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={
 ens:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',title:'ITIC Academy, bloque 22 «Seguridad, ENS y ciberseguridad», versión 2026.2'},
 admin:{url:'https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk',title:'ITIC Academy, bloque 03 «Actuación administrativa y Administración digital», versión 2026.2'},
 wireless:{url:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',title:'ITIC Academy, bloque 46 «Redes inalámbricas y comunicaciones móviles», versión 2026.1'},
 infra:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',title:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1'}
};
const details={
 3371:{docs:[docs.ens],detail:'el bloque 22 separa los niveles de seguridad por dimensión de la categoría BÁSICA/MEDIA/ALTA del sistema y cita el RD 311/2022; la respuesta se verificó en el anexo I consolidado del ENS.'},
 3372:{docs:[docs.ens],detail:'el bloque 22 incluye GLORIA dentro del ecosistema CCN-CERT/ENS; la función de correlación compleja se confirmó en la ficha oficial CCN-CERT y sus publicaciones CCN-STIC.'},
 3373:{docs:[docs.admin],detail:'el bloque 03 actualizado cubre procedimiento y Administración digital, incluida la normativa BOE/RD 203/2021; no respalda una jerarquía mínima universal, razón por la que se sustituyó el test histórico por la regla legal vigente.'},
 3374:{docs:[docs.wireless],detail:'el bloque 46 actualizado incluye expresamente MDM, EMM y UEM y sus respectivos alcances en gestión móvil; se mantuvo UEM como categoría de gestión unificada de diferentes endpoints.'},
 3375:{docs:[docs.infra],detail:'el bloque 26 trata virtualización de servidores y compara vSphere/ESXi (vMotion) e Hyper-V (Live Migration); advierte que requisitos y movimientos de almacenamiento dependen de la plataforma.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con A1 BOE-A-2025-25938 (anexo I), A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=details[c.id];assert.ok(q&&r&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=r.docs.map(d=>`${d.title}; ${r.detail} ${d.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'Asignación A2 respaldada por el epígrafe oficial correspondiente.':'No se fuerza una clasificación A2 no reflejada en el programa.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const d of r.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo de temario y alcance: ${r.detail} Material de academia complementario a las fuentes primarias citadas.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas las cinco preguntas del lote 611 con materiales ITIC Academy 2026 y programas oficiales A1/A2.');
