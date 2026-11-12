const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1085.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',contracts:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',data:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk'};
const map={
 5746:{a1:[11],a2:[],urls:[urls.contracts],desc:'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: órganos y régimen de contratación bajo la LCSP. El temario GSI A2 consultado no contiene un epígrafe de contratación pública específico; no se fuerza A2.'},
 5747:{a1:[13],a2:[],urls:[],desc:'Se cotejaron el temario oficial GSI A1/A2 y el índice de materiales ITIC Academy accesible en Drive; no se localizó un bloque con cobertura específica del procedimiento de concurrencia competitiva en subvenciones. A1-13 incluye literalmente el régimen y procedimiento de subvenciones públicas; el programa GSI A2 no tiene epígrafe específico.'},
 5748:{a1:[8],a2:['I-8','I-9'],urls:[urls.admin],desc:'ITIC Academy 2026, bloque 03 Actuación administrativa y Administración digital: derechos de las personas/interesados bajo Ley 39/2015, canales, aportación documental y expediente electrónico. A1-8/A2-I.8 encuadran el procedimiento; A2-I.9, la tramitación y conservación electrónicas.'},
 5749:{a1:[27],a2:['I-7'],urls:[urls.data],desc:'ITIC Academy 2026, bloque 8 Protección de Datos: autoridades de protección de datos, AEPD y régimen de autonomía/independencia bajo RGPD y LOPDGDD. La terminología y mandato actuales se verifican en la LO 3/2018 consolidada.'},
 5750:{a1:[11],a2:['I-9'],urls:[urls.contracts,urls.admin],desc:'ITIC Academy 2026, bloque 05 Contratación, Presupuestos y Compra TIC: comunicaciones electrónicas en la contratación pública; bloque 03 Actuación administrativa y Administración digital: notificaciones y canales electrónicos. A1-11/A2-I.9 son las correspondencias curriculares.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} El material académico se usa como mapa didáctico, no como fuente jurídica.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
