const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1082.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={protocols:'https://drive.google.com/file/d/1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw/view?usp=drivesdk',security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',wireless:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',video:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk'};
const map={
 5731:{a1:[125],a2:['IV-12'],urls:[urls.protocols,urls.security],desc:'ITIC Academy 2026, bloque 43 Protocolos: TLS aparece en el modelo por capas y en protocolos seguros; bloque 48 Seguridad, Redes y Aplicación: TLS 1.3. El material encuadra el protocolo, mientras que la función concreta del Record Protocol y la actualización de RFC 8446 a RFC 9846 se verifican en el estándar IETF vigente.'},
 5732:{a1:[125],a2:['IV-12'],urls:[urls.security],desc:'ITIC Academy 2026, bloque 48 Seguridad, Redes y Aplicación, §6.5: EAP, 802.1X y NAC; diferencia EAP-TLS con certificados frente a PEAP y EAP-TTLS en túnel. La condición de certificados en ambos extremos se matiza con el RFC: certificado de servidor obligatorio y certificado de peer recomendado/configurable.'},
 5733:{a1:[127],a2:['IV-12'],urls:[urls.security],desc:'ITIC Academy 2026, bloque 48 Seguridad, Redes y Aplicación: expone las fases del ciclo clásico de NIST SP 800-61 Rev. 2 y señala explícitamente que Rev. 3 (2025) lo reorganiza conforme a CSF 2.0. Se etiqueta histórica porque Rev. 2 fue retirada; el estado se comprueba en NIST.'},
 5734:{a1:[130],a2:['IV-16'],urls:[urls.video],desc:'ITIC Academy 2026, bloque 50 Videoconferencia, SSO y trabajo colaborativo: §1.7 desarrolla códecs de vídeo, incluido H.264/AVC, H.265 y H.266; cubre el contexto de compresión audiovisual. No se localizó una definición literal de VLC/redundancia estadística en el bloque; la relación específica se confirma con ITU-T H.264.'},
 5735:{a1:[123],a2:['IV-15'],urls:[urls.wireless],desc:'ITIC Academy 2026, bloque 46 Redes inalámbricas y comunicaciones móviles: incluye MDM/EMM/UEM y describe Android Enterprise fully managed (COBO clásico), work profile (BYOD/COPE según propiedad/uso) y los modos de uso exclusivo o mixto. La terminología vigente de Google/Intune se consulta por separado.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. El cotejo académico no sustituye la fuente normativa o técnica primaria.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
