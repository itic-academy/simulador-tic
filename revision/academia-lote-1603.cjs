const fs=require('fs'),path=require('path'),assert=require('assert');
const root=path.join(__dirname,'..'),bp=path.join(root,'preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-1603.json');
const bank=JSON.parse(fs.readFileSync(bp)),log=JSON.parse(fs.readFileSync(lp));
const docs={
 ens:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',title:'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, 2026.2'},
 uml:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',title:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas, 2026.1'},
 blockchain:{url:'https://drive.google.com/file/d/1dZeM6nHsrfoseFfduoy9SVCQXvAZK7OO/view?usp=drivesdk',title:'ITIC Academy, tema 85 Blockchain, redes y consenso, 2026'},
 security:{url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',title:'ITIC Academy, bloque 48 Seguridad en Redes y Aplicación, 2026.1'}
};
const map={8316:[docs.ens,'categorías y dimensiones del ENS'],8317:[docs.uml,'UML y diagramas de casos de uso'],8318:[docs.blockchain,'tipos de redes blockchain y consenso'],8319:[docs.security,'servicios y mecanismos de seguridad'],8320:[docs.ens,'seguridad lógica y modelos de control de acceso']};
const calls={A1:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-25938',A2:'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-26262'};
const valid=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'))).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),[d,detail]=map[c.id];assert.ok(q&&d);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(valid.has(id),id);const note=`Cotejo curricular: ${d.title}, ${detail}.`;q.revision.fuentes.push({url:d.url,referencia:note},{url:calls.A1,referencia:`Convocatoria A1: ${q.clasificacion.A1.join(', ')||'sin correspondencia directa'}.`},{url:calls.A2,referencia:`Convocatoria A2: ${q.clasificacion.A2.join(', ')||'sin correspondencia directa'}.`});q.revision.observaciones+=` ${note}`;q.comentarios+=` ${note}`;q.clasificacion.bloque_academia=note;q.clasificacion.nota='Academia para encaje curricular; norma o fuente técnica primaria para la respuesta.';c.actualizada=structuredClone(q)}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo lote 1603: 5.');
