const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-612.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:{url:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',title:'ITIC Academy, bloque 26 «Hardware, servidores, CPD, almacenamiento y virtualización», versión 2026.1'},
 soa:{url:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk',title:'ITIC Academy, bloque 28 «Arquitectura SOA y requisitos no funcionales», versión 2026.1'},
 os:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',title:'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1'},
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',title:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1'}
};
const details={
 3376:{docs:[docs.hardware],detail:'el bloque 26 sitúa la cuestión en hardware y conectividad de dispositivos; el nombre normalizado de USB se verificó directamente en la documentación USB-IF.'},
 3377:{docs:[docs.soa],detail:'el bloque 28 cubre arquitectura SOA, integración y requisitos no funcionales, encuadre curricular de los buses de servicios; las categorías de cada producto se contrastaron con documentación de Apache, WSO2 y MuleSoft.'},
 3378:{docs:[docs.os],detail:'el bloque 47 desarrolla administración y fundamentos de Windows dentro del epígrafe A2 C2; la posibilidad de instalar cada rol se comprobó en documentación vigente de Microsoft Learn.'},
 3379:{docs:[docs.db],detail:'el bloque 29 incluye explícitamente el modelo relacional y las reglas de Codd (§ 2.5); la formulación histórica de la regla 8 se verificó en la publicación de Codd.'},
 3380:{docs:[docs.db],detail:'el bloque 29 cubre problemas de concurrencia y control de acceso de bases de datos; el efecto de granularidad y el coste de los bloqueos se cotejaron con documentación Microsoft Learn sobre control de transacciones.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con A1 BOE-A-2025-25938 (anexo I), A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),d=details[c.id];assert.ok(q&&d&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=d.docs.map(x=>`${x.title}; ${d.detail} ${x.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'Clasificación A2 respaldada por el epígrafe oficial correspondiente.':'No se fuerza una clasificación A2 sin encaje directo.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const x of d.docs)q.revision.fuentes.push({url:x.url,referencia:`${x.title}; cotejo curricular: ${d.detail} Material de academia complementario a las fuentes primarias citadas.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas las cinco preguntas del lote 612 con materiales ITIC Academy y programas oficiales A1/A2.');
