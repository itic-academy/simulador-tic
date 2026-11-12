const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1053.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const net='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const security='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const admin='https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk';
const map={
 5586:{url:net,a1:[108,123],a2:['IV-15'],desc:'bloque 42 Redes, apartado de arquitectura de redes móviles/GSM y preguntas de repaso; y bloque 46 Redes inalámbricas y comunicaciones móviles (2026), que cubre las generaciones móviles. El material orienta la clasificación; las funciones de HLR/VLR se contrastan con ETSI/3GPP.'},
 5587:{url:security,a1:[125,126],a2:['IV-12','III-12'],desc:'bloque Seguridad en redes y en el nivel de aplicación (2026), secciones de cortafuegos, control de accesos y protección de aplicaciones web; encaje curricular, sin equiparar autenticación con inspección WAF.'},
 5588:{url:security,a1:[125,126],a2:['IV-12','III-12'],desc:'bloque Seguridad en redes y en el nivel de aplicación (2026), secciones de cortafuegos y protección de aplicaciones web; encaje curricular para WAF y despliegue perimetral/cloud.'},
 5589:{url:admin,a1:[8,22],a2:['I-9'],desc:'bloque Actuación administrativa y Administración digital (2026), Ley 40/2015 y sede electrónica, dentro de A1 temas 8/22 y A2 O8/I.9; la definición se contrasta con el art. 38.1 del BOE.'},
 5590:{url:admin,a1:[8,22],a2:['I-9'],desc:'bloque Actuación administrativa y Administración digital (2026), Ley 39/2015, procedimiento y expediente electrónico, dentro de A1 temas 8/22 y A2 O8/I.9; la definición y formato se contrastan con el art. 70 del BOE.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy 2026: ${m.desc} Temas oficiales asociados: ${tags}. Se usa este material para correspondencia temática, no como autoridad normativa.`;
 const marker='Cotejo curricular de ITIC Academy 2026:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);
 q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy 2026: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive agregado a las cinco preguntas del lote 1053.');
