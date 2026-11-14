const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1270.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 protocols:'1Nbz8x6yaXWFh_4_d1emVOYOIpRj_xiLw',
 networks:'12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH',
 security:'1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82',
 continuity:'1xwthhXbCj-TsATaIDQSI21MsALa-a-FA'
};
const mapping={
 6671:{a1:[109],a2:['II-8'],ids:[docs.protocols],coverage:'ITIC Academy, bloque Protocolos, sección de correo electrónico: cotejo del ámbito MHS/correo. La lectura disponible no confirma mención literal de X.400, MD, ADMD o PRMD; para esos términos prevalece UIT-T F.400.'},
 6672:{a1:[109,125],a2:['II-13','IV-12'],ids:[docs.security],coverage:'ITIC Academy, bloque Seguridad en redes y en el nivel de aplicación: cobertura curricular general de criptografía, autenticación y protocolos seguros; no se atribuye al documento la definición normativa de S/MIME/OpenPGP.'},
 6673:{a1:[114],a2:['IV-11'],ids:[docs.networks],coverage:'ITIC Academy, bloque Redes, sección de comunicaciones inalámbricas/antenas MIMO: correspondencia curricular temática con IEEE 802.11; la expansión del acrónimo se comprueba en la referencia IEEE.'},
 6674:{a1:[125],a2:['IV-12'],ids:[docs.security],coverage:'ITIC Academy, bloque Seguridad en redes y en el nivel de aplicación: cobertura general de protocolos seguros; la versión actual y deprecaciones se establecen con RFC del IETF.'},
 6675:{a1:[128],a2:['IV-6'],ids:[docs.continuity],coverage:'ITIC Academy, bloque Hardware, unidad de continuidad y recuperación ante desastres: cotejo de los objetivos RTO/RPO; la definición precisa se contrasta con NIST.'}
};
const idUrl=id=>`https://drive.google.com/file/d/${id}/view?usp=drivesdk`;
for(const c of log.cambios){
 const m=mapping[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 q.clasificacion.bloque_academia=m.coverage;
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular: ${m.coverage} Correspondencia oficial: ${topics}. El temario académico orienta el alcance y no sustituye la fuente primaria.`;
 q.clasificacion.nota=note;q.comentarios=`${q.comentarios||''} ${note}`.trim();
 q.revision.observaciones=`${q.revision.observaciones||''} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>!f.url.includes('drive.google.com'));
 for(const id of m.ids)q.revision.fuentes.push({url:idUrl(id),referencia:m.coverage});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido para 6671–6675.');
