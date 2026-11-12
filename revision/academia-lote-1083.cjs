const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1083.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={hardware:'https://docs.google.com/document/d/1i7gM8fFljlK2jLDlCxr_h0titV5bPo5U/edit?usp=drivesdk&ouid=107088454749630873035&rtpof=true&sd=true',social:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',data:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk'};
const map={
 5736:{a1:[132],a2:['II-7'],urls:[urls.hardware],desc:'ITIC Academy 2026, bloque 26 Hardware y Virtualización: desarrolla Docker, Kubernetes, contenedores frente a máquinas virtuales y el uso de contenedores; relación directa. Los epígrafes oficiales A1-132/A2-II.7 son el encaje curricular.'},
 5737:{a1:[133],a2:['II-16'],urls:[urls.social],desc:'ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo: aborda herramientas colaborativas y redes sociales/gestión de contenidos, contexto de publicación digital. No se localizó una explicación literal de Real Time Marketing; el concepto se fundamenta en la bibliografía citada en la revisión. A1-133/A2-II.16 son asociaciones temáticas.'},
 5738:{a1:[],a2:[],urls:[],desc:'Se cotejaron los programas oficiales GSI A1/A2 2025 y el índice/material de ITIC Academy accesible en Drive; no se encontró un epígrafe TIC específico de período medio de pago a proveedores ni material académico específico. Se mantiene sin clasificación A1/A2 para no forzar una analogía; la respuesta se contrasta directamente con la normativa presupuestaria y de morosidad.'},
 5739:{a1:[109],a2:['IV-13'],urls:[],desc:'Se buscó cobertura específica del informe ONTSI 2021 en el temario accesible de ITIC Academy y no se localizó. Los epígrafes A1-109 y A2-IV.13 cubren Internet/servicios de forma general, no esta estadística concreta; la respuesta se verifica con el informe primario fechado.'},
 5740:{a1:[27],a2:['I-7'],urls:[urls.data],desc:'ITIC Academy 2026, bloque 8 Protección de Datos: desarrolla RGPD y LOPDGDD, responsables/encargados, autoridades y códigos de conducta en el marco de protección de datos. El detalle de las categorías y remisiones del art. 38.2 se contrasta con la LO 3/2018 y el RGPD.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} El cotejo académico no sustituye la fuente normativa o técnica primaria.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
