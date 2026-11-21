const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.join(__dirname,'..'),bp=path.join(root,'preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-1602.json');
const bank=JSON.parse(fs.readFileSync(bp)),log=JSON.parse(fs.readFileSync(lp));
const docs={
 data:{url:'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk',title:'ITIC Academy, bloque 08 Protección de Datos, 2026'},
 admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',title:'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital, 2026'},
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',title:'ITIC Academy, bloque 48 Seguridad en Redes y Aplicación, 2026.1'},
 dotnet:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',title:'ITIC Academy, bloque 30 Tecnologías de Sistemas de Información, 2026.1'}
};
const map={
 8311:[docs.data,'conservación y protección de datos de comunicaciones'],
 8312:[docs.admin,'gobernanza y cooperación en Administración digital'],
 8313:[docs.security,'IPsec, asociaciones de seguridad y protocolos seguros'],
 8314:[docs.dotnet,'plataforma .NET e implementaciones'],
 8315:[null,'Se buscó cobertura directa de notación de Kendall y teoría de colas en los materiales accesibles de Drive; no se localizó un bloque específico y no se fuerza equivalencia curricular.']
};
const u={A1:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',A2:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'};
const off=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'))).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),[d,detail]=map[c.id];for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(off.has(id),id);const title=d?d.title:'Sin bloque directo localizado';const note=`Cotejo curricular: ${title}, ${detail}`;if(d)q.revision.fuentes.push({url:d.url,referencia:note});q.revision.fuentes.push({url:u.A1,referencia:`Convocatoria A1: ${q.clasificacion.A1.join(', ')||'sin asignación directa'}.`},{url:u.A2,referencia:`Convocatoria A2: ${q.clasificacion.A2.join(', ')||'sin asignación directa'}.`});q.revision.observaciones+=` ${note}.`;q.comentarios+=` ${note}.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota='Academia para encaje curricular; fuentes primarias/técnicas para la respuesta.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo lote 1602: 5.');
