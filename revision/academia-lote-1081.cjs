const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1081.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={wireless:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',regulation:'https://drive.google.com/file/d/1yNoGRQ6orxdHGYBQ-RW4lFzaexftWnIm/view?usp=drivesdk',security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk'};
const map={
 5726:{a1:[123],a2:['IV-15'],urls:[urls.wireless],desc:'ITIC Academy 2026, bloque 46 Redes inalámbricas y móviles: §§ 12.3 (UMTS/tercera generación) y acceso radio WCDMA; cubre las generaciones móviles. La identificación se contrasta con UIT/3GPP.'},
 5727:{a1:[129],a2:['IV-7'],urls:[urls.wireless],desc:'ITIC Academy 2026, bloque 46: radiocomunicación, espectro y transmisión radioeléctrica; no se halló la denominación Red FU-E ni DAB en la unidad. Se clasifica solo como encaje técnico/regulatorio próximo y se comprueba en el BOE consolidado, que incluye la modificación futura de 2026.'},
 5728:{a1:[129],a2:['IV-11'],urls:[urls.wireless,urls.regulation],desc:'ITIC Academy 2026, bloque 46: espectro y dominio público radioeléctrico según Ley 11/2022; bloque 49 Normas reguladoras de las telecomunicaciones: título V, dominio público radioeléctrico y procedimientos/títulos habilitantes. Encaje curricular directo; el texto del art. 88.4 se valida en BOE.'},
 5729:{a1:[125,127],a2:['IV-12'],urls:[urls.security],desc:'ITIC Academy 2026, bloque 48 Seguridad, Redes y Aplicación: amenazas, vulnerabilidades, ingeniería social y protección de usuarios; no se localizó grooming mencionado literalmente. El programa oficial encuadra seguridad de redes/ciberseguridad, no define esta práctica; la explicación se comprueba con INCIBE y el alcance penal con el Código Penal.'},
 5730:{a1:[127],a2:['IV-12'],urls:[urls.security],desc:'ITIC Academy 2026, bloque 48 Seguridad, Redes y Aplicación: distingue amenaza como causa potencial, vulnerabilidad como debilidad explotable, riesgo y salvaguarda; coincide con NIST, que se cita para la definición técnica.'},
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc} Temas oficiales asociados: ${tags}. La academia coteja cobertura y no sustituye la norma o definición primaria.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
