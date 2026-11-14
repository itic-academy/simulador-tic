const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1271.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 hardware:'1xwthhXbCj-TsATaIDQSI21MsALa-a-FA',
 social:'1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn',
 mobile:'1nXa2jkiUqpu31smkt5D8WswcTgEN7XlB',
 systems:'1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm'
};
const mapping={
 6676:{a1:[55,57],a2:['II-6','IV-6'],ids:[docs.hardware],coverage:'ITIC Academy, bloque Hardware 2026, recursos de servidor/virtualización y capacidad: cotejo de encaje curricular general. No se confirma que el temario especifique cuotas de Azure VM Scale Sets; el límite se toma de Microsoft Learn.'},
 6677:{a1:[28,57],a2:['IV-6'],ids:[docs.hardware],coverage:'ITIC Academy, bloque Hardware 2026, dimensionamiento de servidores, recursos de cómputo, almacenamiento y virtualización: cotejo general. El reactivo se acota a capacidad cuantitativa del host, no al emplazamiento global del CPD.'},
 6678:{a1:[133],a2:['III-14'],ids:[docs.social],coverage:'ITIC Academy, bloque 50, redes sociales y Guía de Comunicación Digital AGE: cotejo curricular. La pregunta es histórica y cita expresamente el fascículo de Twitter de 2013, no prácticas de X vigentes.'},
 6679:{a1:[62],a2:['II-2'],ids:[docs.mobile],coverage:'ITIC Academy, bloque 47, sistemas operativos móviles y desarrollo Objective-C/Swift para iOS: cotejo general del ecosistema; el nombre Cocoa Touch se contrasta con la documentación archivada de Apple.'},
 6680:{a1:[67],a2:['II-3'],ids:[docs.systems],coverage:'ITIC Academy, bloque 30, tecnologías de sistemas de información y programación Java: cotejo curricular general; la sintaxis se establece según Java Language Specification SE 26.'}
};
const idUrl=id=>`https://drive.google.com/file/d/${id}/view?usp=drivesdk`;
for(const c of log.cambios){
 const m=mapping[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 q.clasificacion.bloque_academia=m.coverage;
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular: ${m.coverage} Correspondencia oficial: ${topics}. La academia orienta cobertura y prioridad, pero no sustituye a la fuente primaria.`;
 q.clasificacion.nota=note;q.comentarios=`${q.comentarios||''} ${note}`.trim();q.revision.observaciones=`${q.revision.observaciones||''} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));
 for(const id of m.ids)q.revision.fuentes.push({url:idUrl(id),referencia:m.coverage});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido para 6676–6680.');
