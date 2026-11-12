const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1067.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const mapa={
 5656:{a1:[111,118],a2:['II-8','IV-8'],desc:'ITIC Academy, bloque 42 Redes 2026.1, sección de arquitectura IEEE 802: divide explícitamente el nivel de enlace OSI entre LLC (IEEE 802.2) y MAC; coincide directamente con el reactivo. A1-111/A1-118 y A2-II.8/IV.8.'},
 5657:{a1:[110,118],a2:['IV-7','IV-8'],desc:'ITIC Academy, bloque 42 Redes 2026.1: enumera PoE IEEE 802.3af/at/bt en Ethernet y cableado; confirma la familia de ampliaciones. Para fijar Type 2/PoE+ frente a Type 3/4 se consulta IEEE y documentación técnica complementaria.'},
 5658:{a1:[119],a2:['IV-12'],desc:'ITIC Academy, bloque 42 Redes 2026.1: describe la arquitectura empresarial con la DMZ/red perimetral para servicios publicados (proxy/WAF, correo, DNS, VPN) y controles entre zonas. Se coteja con NIST, que define la zona como separación entre redes de distinta confianza.'},
 5659:{a1:[118],a2:['IV-9'],desc:'ITIC Academy, bloque 42 Redes 2026.1, sección SNMP: especifica que los agentes escuchan en 161 y las notificaciones llegan al gestor por 162; correspondencia directa con el enunciado petición-respuesta.'},
 5660:{a1:[118],a2:['IV-9','IV-12'],desc:'ITIC Academy, bloque 42 Redes 2026.1, sección de gestión: explica SNMPv3, USM (User-based Security Model), autenticación, integridad, privacidad y RFC 3411–3418. La referencia RFC 3414 se verifica por separado en el RFC Editor.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura y clasificación; las fuentes técnicas primarias quedan citadas por separado.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==redes);q.revision.fuentes.push({url:redes,referencia:`ITIC Academy, bloque 42 Redes: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de temario ITIC Academy y clasificación A1/A2 actualizado para IDs 5656–5660.');
