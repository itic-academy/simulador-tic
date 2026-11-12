const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1054.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const admin='https://drive.google.com/file/d/1dW2ffNhCduFHJ1hI2nT6fqs_G8DeNpo3/view?usp=drivesdk';
const org='https://drive.google.com/file/d/1ANdenllxXF4E7Sl4vJdJ_XPUPkx7Mqp_/view?usp=drivesdk';
const security='https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk';
const projects='https://drive.google.com/file/d/1hPYYrCoVBKhiEgMaqVBi5mpdUEm4_vV5/view?usp=drivesdk';
const map={
 5591:{url:admin,a1:[8],a2:['I-9'],desc:'bloque Actuación administrativa y Administración digital 2026, temas A1 8/22 y A2 O8/I.9; correspondencia con capacidad de obrar/procedimiento, cuya literalidad se contrasta con el art. 3 de la Ley 39/2015.'},
 5592:{url:admin,a1:[22],a2:['I-9'],desc:'bloque Actuación administrativa y Administración digital 2026, identificación, firma electrónica y eIDAS; correspondencia curricular, con los sistemas admitidos delimitados según el art. 10.2 de la Ley 39/2015.'},
 5593:{url:admin,a1:[22],a2:['I-9'],desc:'bloque Actuación administrativa y Administración digital 2026, apartado de derechos y protección de datos en el marco administrativo/digital; la Carta y el RGPD son las fuentes primarias citadas.'},
 5594:{url:org,a1:[34,125],a2:['IV-12'],desc:'bloque Organización y gestión de sistemas de información, tema A1 34: enumera separadamente desarrollo, bases de datos, seguridad y calidad; se usa para el reparto de funciones y se matiza conforme a riesgos y al control NIST AC-5.'},
 5595:{url:projects,a1:[99],a2:['III-2'],desc:'material académico de MÉTRICA v3 (tema histórico 93) sobre planificación; para el término y producto exactos se coteja GPS 11.2 de la guía oficial MÉTRICA v3. Correspondencia actual: A1-99 y A2-III-2.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. El material de academia sirve para comprobar cobertura y correspondencia, no como autoridad normativa.`;
 const marker='Cotejo curricular de ITIC Academy:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);
 q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive agregado a las cinco preguntas del lote 1054.');
