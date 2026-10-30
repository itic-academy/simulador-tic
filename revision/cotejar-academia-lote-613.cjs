const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bankPath=path.join(__dirname,'..','preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-613.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',title:'ITIC Academy, bloque 29 «Bases de datos, SQL y modelado de datos», versión 2026.1'},
 tech:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 «Tecnologías de sistemas de información», versión 2026.1'},
 os:{url:'https://drive.google.com/file/d/1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB/view?usp=drivesdk',title:'ITIC Academy, bloque 47 «Aplicaciones móviles y sistemas operativos», versión 2026.1'},
 licence:{url:'https://drive.google.com/file/d/1Og6yI-YaZ48UA3pBT-HQhTh7TfvdPW_C/view?usp=drivesdk',title:'ITIC Academy, bloque 18 «Protección jurídica, licencias y control del software», versión 2026.1'}
};
const details={
 3381:{docs:[docs.db],detail:'el bloque 29 cubre SQL y administración de bases de datos; la instrucción concreta REVOKE se contrastó con la documentación oficial del SGBD.'},
 3382:{docs:[docs.db,docs.tech],detail:'los bloques 29 y 30 cubren modelo relacional, persistencia y entornos Java; el contraste curricular no equipara sin matices un data mapper a un ORM completo.'},
 3383:{docs:[docs.tech],detail:'el bloque 30 incluye desarrollo web en servidor y entorno Java/Jakarta EE, contexto curricular para JSP; la sintaxis exacta se cotejó con Jakarta Pages 3.1.'},
 3384:{docs:[docs.os],detail:'el bloque 47 cubre fundamentos y evolución de sistemas operativos; el detalle cronológico de Plasma se contrastó por separado con el archivo de anuncios de KDE.'},
 3385:{docs:[docs.licence],detail:'el bloque 18 trata software libre/propietario y tipos de licencia bajo A2 T14; la excepción y compatibilidad concreta se verificaron en el texto de MPL 2.0 y la lista de licencias de la FSF.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con A1 BOE-A-2025-25938 (anexo I), A2 BOE-A-2025-26262 (anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),d=details[c.id];assert.ok(q&&d&&q.revision);const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial inexistente: ${id}`);
 const academy=d.docs.map(x=>`${x.title}; ${d.detail} ${x.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academy,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'Clasificación A2 respaldada por el epígrafe oficial correspondiente.':'No se fuerza un tema A2 sin encaje directo.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${academy} ${calls}`;
 for(const x of d.docs)q.revision.fuentes.push({url:x.url,referencia:`${x.title}; cotejo curricular: ${d.detail} La academia contextualiza el tema; las conclusiones se apoyan en las fuentes técnicas primarias citadas.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejadas las cinco preguntas del lote 613 con materiales ITIC Academy y programas oficiales A1/A2.');
