const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1066.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const redes='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const mapa={
 5651:{a1:[108],a2:['II-8'],desc:'ITIC Academy, bloque 42 Redes 2026.1: el índice cubre modelos TCP/IP, Internet y servicios básicos. No se localizó una explicación específica de DHCP como extensión de BOOTP; ese vínculo se comprueba en RFC 2131.'},
 5652:{a1:[108],a2:['II-8'],desc:'ITIC Academy, bloque 42 Redes 2026.1: incluye el modelo TCP/IP y sus protocolos por capas. No se localizó la actualización de la referencia histórica RFC 2463 a RFC 4443; se valida en el RFC vigente.'},
 5653:{a1:[108],a2:['II-8'],desc:'ITIC Academy, bloque 42 Redes 2026.1: cubre diagnóstico y conceptos generales de redes TCP/IP, pero no se localizaron las funciones concretas de netstat, ipconfig, nbtstat y tracert; se cotejan con documentación Microsoft Learn.'},
 5654:{a1:[108],a2:['II-8'],desc:'ITIC Academy, bloque 42 Redes 2026.1: aborda el modelo TCP/IP y protocolos; no se localizó el límite numérico exacto de longitud IPv4. Este se verifica con RFC 791.'},
 5655:{a1:[108,121],a2:['IV-7'],desc:'ITIC Academy, bloque 42 Redes 2026.1, sección 8.3 «Telecomunicaciones por cable: CATV» y tema A1-121: cubre redes de cable. No se localizó el mecanismo DOCSIS request/grant con oportunidades de contienda; se verifica en la especificación MAC de CableLabs.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta cobertura/clasificación; la evidencia técnica se cita por separado.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==redes);q.revision.fuentes.push({url:redes,referencia:`ITIC Academy, bloque 42 Redes: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular del bloque 42 Redes y clasificación A1/A2 actualizado para IDs 5651–5655; se identifican expresamente los datos técnicos no hallados en el temario.');
