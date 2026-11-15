const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1359.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc={url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026.1'};
const notes={
7116:'El bloque incluye cliente/servidor y el capítulo 3.7 DHCP; el cotejo distingue los modos de asignación recogidos por RFC 2131.',
7117:'El material aborda DHCP y opciones de configuración; el cotejo identifica timeout ARP y servidor SMTP como opciones documentadas por RFC 2132.',
7118:'El apartado de arquitectura IEEE 802/MAC lo identifica como subcapa de enlace que controla acceso al medio.',
7119:'El bloque desarrolla protocolos de encaminamiento y OSPF; sus epígrafes distinguen rutas internas, interárea y el tratamiento de áreas stub.',
7120:'El documento define convergencia como el tiempo hasta que todos los routers tienen una visión coherente tras cambios de encaminamiento.'
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision&&notes[c.id]);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${doc.label}; ${notes[c.id]} Correspondencia oficial: ${q.clasificacion.A1.join(', ')}/${q.clasificacion.A2.join(', ')}. La academia se usa para cobertura, no como sustituto de RFC/IEEE.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota+=` ${note}`;q.comentarios+=` ${note}`;q.revision.observaciones+=` ${note}`;q.revision.fuentes.push({url:doc.url,referencia:`${doc.label}; ${notes[c.id]} Cotejo curricular.`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular individual de 7116–7120 registrado.');
