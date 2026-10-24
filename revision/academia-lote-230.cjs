const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-230.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc={url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, Servidores, CPD, Almacenamiento y Virtualización, versión 2026.1 (31-08-2026)'};
const notes={
 1466:'§5.6 (incendios y seguridad física), revisado junto a §5 diseño de CPD; correspondencia A1-53/A2-II-11/A2-II-13.',
 1467:'§13.5 Hiperconvergencia; correspondencia A1-53/A2-II-1.',
 1468:'§5.2 TIA-942-C y Tier de Uptime; correspondencia A1-53/A2-II-1.',
 1469:'§§5.4–5.5 refrigeración, PUE y sostenibilidad; correspondencia A1-14/A1-53/A2-II-1.',
 1470:'§6.1 dispositivos personales y formas de interacción; correspondencia A1-54/A2-II-1.'
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);if(!q?.revision)throw new Error(`Falta revisión ${c.id}`);
 const note=`Cotejo temático: ${doc.label}, ${notes[c.id]} La correspondencia curricular se contrasta con el programa de la convocatoria A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262; el contenido se apoya en las fuentes primarias/técnicas enumeradas en la revisión.`;
 const ids=notes[c.id].match(/A[12]-[IVX]+-?\d+|A1-\d+/g)||[];
 q.clasificacion.A1=[...new Set(ids.filter(x=>x.startsWith('A1-')))];
 q.clasificacion.A2=[...new Set(ids.filter(x=>x.startsWith('A2-')))];
 q.clasificacion.bloque_academia=`${doc.label}, ${notes[c.id]}`;
 q.clasificacion.nota=note;
 q.revision.observaciones=`${q.revision.observaciones} ${note}`;
 q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:doc.url,referencia:`ITIC Academy, ${doc.label}, ${notes[c.id]}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo con el temario de ITIC Academy y programa oficial A1/A2 añadido a 1466–1470.');
