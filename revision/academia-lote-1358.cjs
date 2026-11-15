const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1358.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc={url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026.1'};
const notes={
7111:'El documento trata direcciones MAC/EUI y asignación IEEE en el apartado de enlace e identificadores; se especifica el formato EUI-48 y OUI de 24 bits.',
7112:'El contenido de IPv6 incluye estructura de cabecera y extensiones, útil para distinguir los 40 octetos base de las extensiones.',
7113:'El capítulo de IPv6 desarrolla unicast, multicast y anycast y señala la ausencia de broadcast.',
7114:'Se coteja como antecedente classful dentro de IPv4; el propio material explica CIDR como el esquema actual y advierte que clases no sirven para enrutar redes modernas.',
7115:'El bloque de IPv6 incluye notación comprimida y direccionamiento; se diferencia sintaxis válida de forma canónica recomendada.'
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision&&notes[c.id]);for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);const note=`Cotejo curricular ITIC Academy: ${doc.label}; ${notes[c.id]} Correspondencia oficial: ${q.clasificacion.A1.join(', ')}/${q.clasificacion.A2.join(', ')}. La Academia sirve como contraste curricular, no como sustituto de RFC/IEEE.`;q.clasificacion.bloque_academia=note;q.clasificacion.nota+=` ${note}`;q.comentarios+=` ${note}`;q.revision.observaciones+=` ${note}`;q.revision.fuentes.push({url:doc.url,referencia:`${doc.label}; ${notes[c.id]} Cotejo curricular.`});c.actualizada=structuredClone(q)}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo curricular individual de 7111–7115 registrado.');
