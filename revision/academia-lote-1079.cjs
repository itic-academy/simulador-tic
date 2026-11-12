const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1079.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk'};
const map={
 5716:{a1:[114],a2:['IV-11'],urls:[urls.networks,urls.protocols],desc:'ITIC Academy 2026, bloques Redes y Protocolos: se trata 802.11 como WLAN y como tecnología de enlace/MAC dentro de la arquitectura de capas. El estándar IEEE es la fuente de la lista exacta de servicios MAC.'},
 5717:{a1:[108,115],a2:['IV-16'],urls:[urls.protocols],desc:'ITIC Academy 2026, bloque Protocolos: capítulo 6 (QoS), con IntServ, RSVP, servicio garantizado y contraste con DiffServ; el temario oficial A1 108/115 y A2 IV.16 cubre QoS en redes/comunicaciones.'},
 5718:{a1:[115],a2:['II-8','IV-16'],urls:[urls.protocols],desc:'ITIC Academy 2026, bloque Protocolos: capítulos 3.1 (cabecera IPv4) y 6 (QoS), con IHL, ToS histórico, DSCP y ECN. Temas oficiales A1-115/A2-II.8 y IV.16.'},
 5719:{a1:[116],a2:['IV-14'],urls:[urls.protocols],desc:'ITIC Academy 2026, bloque Protocolos: §13.6 trata NAT, seguridad y controladores de frontera e identifica explícitamente SBC, mediación de SIP, medios y transcoding; encaje A1-116/A2-IV.14 NGN/IMS y VoIP.'},
 5720:{a1:[108],a2:['IV-16'],urls:[urls.networks],desc:'ITIC Academy 2026, bloque Redes: §6.4 explica QoS, colas y planificación. No se encontró SIRO nombrado literalmente ni en ese bloque ni en el programa oficial; se deja explícito que la academia aporta contexto y la definición se contrasta con el material docente institucional de NPTEL/IIT Bombay.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. El material de academia comprueba encaje temático y no sustituye normas, RFC ni la fuente técnica específica.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
