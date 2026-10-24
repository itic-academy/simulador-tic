const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-229.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const refs={
 1461:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',label:'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2 (26-08-2026), §§1.3 y 3.3 sobre mínimo privilegio y requisitos del ENS.'},
 1462:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026), §2.2 sobre SMP, NUMA y MPP.'},
 1463:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026), §§2.1–2.2 sobre organización de procesadores y sistemas de altas prestaciones.'},
 1464:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026), §3 sobre HPC, supercomputación y Grid Computing; cotejo curricular, no fuente histórica del término WWG.'},
 1465:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026), §3 sobre Grid Computing y compartición de recursos; cotejo curricular, no especificación normativa de seguridad grid.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=refs[c.id];if(!q?.revision||!r)throw new Error(`Falta revisión o cotejo ${c.id}`);
 const ids=[...q.clasificacion.A1,...q.clasificacion.A2];
 const note=`Cotejo temático con ITIC Academy: ${r.label} Correspondencia programática oficial: ${ids.join('/')||'sin epígrafe específico'}. La academia da el encaje curricular; la conclusión se sustenta en las fuentes primarias/técnicas del registro.`;
 q.clasificacion.bloque_academia=`${r.label} Correspondencia: ${ids.join('/')||'sin epígrafe específico'}.`;
 q.clasificacion.nota=note;q.revision.observaciones=`${q.revision.observaciones} ${note}`;q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:r.url,referencia:`ITIC Academy, ${r.label}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido a los IDs 1461–1465.');
