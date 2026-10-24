const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-231.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026)'},
 workflow:{url:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',label:'ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, versión 2026.1 (01-10-2026)'}
};
const sections={
 1471:{doc:'hardware',detail:'§§2.1–2.2, organización y escalas de integración de circuitos; correspondencia A1-52/A2-II-1.'},
 1472:{doc:'hardware',detail:'§§6.1–6.4, endpoints, gestión MDM y controles; correspondencia A1-54/A2-II-1.'},
 1473:{doc:'hardware',detail:'§7.3, dispositivos y soportes de almacenamiento multimedia; correspondencia A1-56/A2-II-1.'},
 1474:{doc:'hardware',detail:'§§3.3 y 11.2, cómputo cooperativo y arquitecturas de aplicaciones; correspondencia A1-58/A2-II-1.'},
 1475:{doc:'workflow',detail:'§6.4, WfMC, modelo de referencia e interfaces de workflow; correspondencia A2-II-16 y encaje A1-104.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),s=sections[c.id],d=docs[s?.doc];
 if(!q?.revision||!s)throw new Error(`Falta revisión o mapeo curricular ${c.id}`);
 const prior=q.clasificacion.A1.concat(q.clasificacion.A2);
 const note=`Cotejo temático con ${d.label}, ${s.detail} Las correspondencias se contrastan con los programas oficiales A1 (BOE-A-2025-25938) y A2 (BOE-A-2025-26262); la academia aporta encaje curricular, no sustituye la fuente técnica citada.`;
 q.clasificacion.bloque_academia=`${d.label}, ${s.detail}`;
 q.clasificacion.nota=note;
 q.revision.observaciones+=` ${note}`;
 q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:d.url,referencia:`${d.label}, ${s.detail}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo con los bloques ITIC Academy 26 y 50 y correspondencia curricular oficial añadidos a 1471–1475.');
