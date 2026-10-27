const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-280.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 26:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',label:'ITIC Academy, bloque 26 Hardware, servidores, CPD, almacenamiento y virtualización, versión 2026.1 (31-08-2026)'},
 42:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',label:'ITIC Academy, bloque 42 Redes, versión 2026.1 (29-09-2026)'}
};
const mapping={
 1716:{doc:26,detail:'apartado 8.1: RAID, rendimiento y tolerancia a fallos (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5'],note:'Cotejado con el apartado RAID, que distingue la expansión actual “Independent” de términos históricos y advierte que RAID no sustituye a backup ni todos sus niveles redundan.'},
 1717:{doc:42,detail:'apartado sobre Internet y servicios de entrega de contenido CDN en el borde (A1-109/A2-IV-13)',topics:['A1-109','A2-IV-13'],note:'Cotejado con el apartado de CDN, caché y servidores de origen. La pregunta distingue la precarga push de la obtención pull del nodo de borde.'},
 1718:{doc:26,detail:'apartado de dispositivos y soportes ópticos de almacenamiento (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5'],note:'Cotejado con medios ópticos y sus formatos DVD; el temario diferencia DVD-RW/DVD+RW/DVD-RAM y DVD-RE no se identifica como formato.'},
 1719:{doc:26,detail:'apartado 8.4: virtualización del almacenamiento (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5'],note:'Cotejado con virtualización del almacenamiento por host, red y dispositivo/subsistema; la clasificación SNIA es la fuente técnica, no el material de academia.'},
 1720:{doc:26,detail:'epígrafes de dispositivos de almacenamiento y rendimiento (A1-56/A2-IV-5)',topics:['A1-56','A2-IV-5'],note:'Cotejado con dispositivos y rendimiento de almacenamiento. El cálculo queda determinado en el enunciado por la densidad, geometría, giro y proporción de bits de paridad.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id],doc=docs[r?.doc];assert.ok(q?.revision&&r&&doc,`Falta cotejo ${c.id}`);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);const curr=`${doc.label}; ${r.detail}`,note=`Cotejo curricular: ${curr}. Correspondencia ${r.topics.join(', ')} contrastada con revision/temario-oficial.json y BOE-A-2025-25938/BOE-A-2025-26262. La academia orienta el encaje, no sustituye la comprobación técnica primaria.`;q.revision.observaciones=`${r.note} ${note}`;q.revision.fuentes.push({url:doc.url,referencia:`${curr}; epígrafes cotejados en el documento de Drive. Correspondencia oficial contrastada con revision/temario-oficial.json y BOE-A-2025-25938 (A1)/BOE-A-2025-26262 (A2).`});q.clasificacion.bloque_academia=curr;q.clasificacion.nota=note;q.comentarios=q.revision.observaciones;c.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo ITIC Academy y temario oficial añadido a 1716–1720.');
