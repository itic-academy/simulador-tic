const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1257.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const hardware='1xwthhXbCj-TsATaIDQSI21MsALa-a-FA',security='1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82';
const map={
 6606:{a1:[128],a2:['IV-6'],file:hardware,desc:'bloque 26 Hardware, edición 2026: correspondencia curricular general con continuidad y recuperación ante desastres (incluidos RTO/RPO); la búsqueda no confirmó una mención literal de BIA.'},
 6607:{a1:[128],a2:['IV-6'],file:hardware,desc:'bloque 26 Hardware, edición 2026: cubre continuidad y recuperación ante desastres; el temario guía correspondencia, mientras NIST sustenta los procedimientos del plan.'},
 6608:{a1:[128],a2:['IV-6'],file:hardware,desc:'bloque 26 Hardware, edición 2026: correspondencia curricular con continuidad y recuperación; no es fuente de la distinción normativa entre prevención y respuesta.'},
 6609:{a1:[47],a2:['II-13'],file:security,desc:'bloque 48 Seguridad en redes y aplicaciones, edición 2026: cobertura general de seguridad y autenticación. No se confirmó en el texto accesible una prescripción literal de KDF/sal/algoritmo; esa respuesta se apoya en NIST y OWASP.'},
 6610:{a1:[57,132],a2:['IV-6'],file:hardware,desc:'bloque 26 Hardware, edición 2026: incluye virtualización y máquinas virtuales, además de continuidad/recuperación. La dependencia del hipervisor se contrasta con NIST, no con el material de academia.'}
};
const trim=s=>{const x=s||'',needle='Cotejo curricular de ITIC Academy:';const i=x.indexOf(needle);return i<0?x.trim():x.slice(0,i).trim();};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${topics}. Academia sirve para cobertura curricular, no para validar el hecho técnico.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trim(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trim(q.revision.observaciones)} ${note}`.trim();
 const url=`https://drive.google.com/file/d/${m.file}/view?usp=drivesdk`;
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==url);q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular de academia añadido para 6606–6610.');
