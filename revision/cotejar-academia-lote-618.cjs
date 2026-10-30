const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-618.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 ops:{url:'https://drive.google.com/file/d/13ohkITliw7Nrg6LKPinh9vliiwrgPdwr/view?usp=drivesdk',title:'ITIC Academy, Bloque 41 «ITIL y COBIT», 2026'},
 networks:{url:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',title:'ITIC Academy, Bloque 42 «Redes», 2026'},
 internet:{url:'https://drive.google.com/file/d/1gsIkYz-EtMC3uK63t-sJasXaFo2mLkUd/view?usp=drivesdk',title:'ITIC Academy, Tema Redes «Internet y servicios básicos», 2026'}
};
const details={
 3406:{docs:[docs.ops],detail:'el bloque moderno incluye control de cambios y versiones en A2-C2, correspondiente al actual A2-IV-4, y gestión COBIT; el alcance funcional del control de versiones se confirmó en Pro Git.'},
 3407:{docs:[docs.ops],detail:'el bloque cubre COBIT (A1-106) y su contexto de gobierno/control TIC; la tríada se comprobó en ISACA y NIST, aclarando que no agota los criterios de COBIT.'},
 3408:{docs:[docs.networks],detail:'la portada sitúa conmutación de circuitos/paquetes en A1-108; el comportamiento de capacidad y retardo se contrastó en UIT-T Y.1314.'},
 3409:{docs:[docs.internet],detail:'el material encuadra A1-109 y A2-IV-13 (red Internet, evolución y servicios); Archie se conserva como servicio histórico de localización de ficheros FTP y se verificó con la historia institucional de McGill.'},
 3410:{docs:[docs.networks],detail:'el bloque aborda redes, transmisión y medios (A1-108; A2-IV-7/8); las definiciones de intermodulación, cuantificación y diafonía se cotejaron con UIT-R, UIT-T y ETSI.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con programa A1 BOE-A-2025-25938 (anexo I), programa A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),d=details[c.id];assert.ok(q&&d&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=d.docs.map(x=>`${x.title}; ${d.detail} ${x.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const x of d.docs)q.revision.fuentes.push({url:x.url,referencia:`${x.title}; cotejo curricular: ${d.detail} El material Academy encuadra el temario, no sustituye las fuentes técnicas primarias.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas las cinco preguntas con ITIC Academy, temarios oficiales A1/A2 y sus fuentes técnicas.');
