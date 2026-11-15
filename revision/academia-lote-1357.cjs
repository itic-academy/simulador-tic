const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1357.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const protocol={url:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',label:'ITIC Academy, bloque 43 «Protocolos», versión 2026.1'};
const security={url:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',label:'ITIC Academy, bloque 48 «Seguridad en redes y en el nivel de aplicación», versión 2026.1'};
const notes={
7106:`El bloque 43 incluye IPv4/CIDR y cálculo de subredes; el extracto sitúa el direccionamiento en su tema de redes locales; correspondencia oficial A1-115/A2-IV-8.`,
7107:`El bloque 43 desarrolla OSI/TCP-IP, PDU y unidades de datos; el apartado de transporte distingue TCP (segmento) y UDP (datagrama).`,
7108:`El bloque 48 cubre seguridad de redes, técnicas criptográficas y VPN; el bloque corresponde al contenido de seguridad oficial A1-125/A2-IV-12.`,
7109:`El bloque 43 cubre direccionamiento IPv4, CIDR, bloques privados y la evolución desde redes con clase; se coteja con el tema oficial de redes IP.`,
7110:`El bloque 43 aborda el transporte, puertos y servicios de directorio; su índice y texto incluyen LDAP/X.500 y el anexo de puertos. El extracto curricular no sustituye el registro IANA.`
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q?.revision&&notes[c.id]);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2])assert.ok(official.has(id),id);
 const doc=c.id===7108?security:protocol;
 const note=`Cotejo curricular ITIC Academy: ${doc.label}; ${notes[c.id]} Correspondencia oficial: ${q.clasificacion.A1.join(', ')}/${q.clasificacion.A2.join(', ')}. La comprobación de exactitud se fundamenta en las fuentes normativas indicadas en la revisión.`;
 q.clasificacion.bloque_academia=note;q.clasificacion.nota+=` ${note}`;q.comentarios+=` ${note}`;q.revision.observaciones+=` ${note}`;
 q.revision.fuentes.push({url:doc.url,referencia:`${doc.label}; ${notes[c.id]} Cotejo curricular.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular individual de 7106–7110 guardado con extractos de los bloques 43 y 48.');
