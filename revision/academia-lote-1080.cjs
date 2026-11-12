const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1080.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',wireless:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk'};
const map={
 5721:{a1:[108],a2:['IV-7'],urls:[urls.networks],desc:'ITIC Academy 2026, bloque 42 Redes, sección de infraestructuras de acceso: incluye xDSL sobre par de cobre, con ADSL2+, VDSL2 y G.fast. No desarrolla SHDSL/G.991.2 en el extracto curricular; la identificación de la variante simétrica de un par se valida en UIT-T.'},
 5722:{a1:[129],a2:[],urls:[],desc:'Cotejo de límites: los bloques de Redes/Protocolos no desarrollan el régimen de licencias audiovisuales de la Ley 13/2022. El tema A1-129 es únicamente encaje regulatorio próximo y no cita expresamente esta ley ni el audiovisual; no se fuerza correspondencia A2.'},
 5723:{a1:[108,121],a2:['IV-7'],urls:[urls.networks],desc:'ITIC Academy 2026, bloque 42 Redes, apartado de DOCSIS/CATV: describe DOCSIS/EuroDOCSIS y el perfil europeo de 8 MHz. La anchura de canal clásica y el carácter no satelital del estándar base se contrastan con especificación CableLabs y fuentes técnicas específicas.'},
 5724:{a1:[109,122],a2:['IV-13'],urls:[urls.networks,urls.protocols],desc:'ITIC Academy 2026, bloque 42 incluye SMTP/MIME en Internet/correo; bloque Protocolos presenta SMTP entre los protocolos de aplicación/correo. El reparto de funciones actuales entre SMTP y protocolos de acceso se contrasta con RFC 5321.'},
 5725:{a1:[114,123],a2:['IV-11','IV-15'],urls:[urls.wireless],desc:'ITIC Academy 2026, bloque de redes inalámbricas/móviles, §10.3 Radio profesional (PMR): describe TETRA, trunking, llamadas de grupo y radio de seguridad/emergencias. No se localizó DMO explicado literalmente; la definición de modo directo se apoya en ETSI EN 300 396-1.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags||'sin correspondencia específica; no se fuerza etiqueta'}. El material de academia sirve de cotejo curricular; no sustituye la fuente primaria.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
