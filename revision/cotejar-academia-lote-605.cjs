const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bp,'utf8'));
const lp=path.join(__dirname,'cambios-lote-605.json'),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={
eu:{url:'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk',label:'ITIC Academy, bloque 02 «La Unión Europea», versión 2026.2'},
economy:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026'},
constitution:{url:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',label:'ITIC Academy, bloque 01 «Constitución, organización del Estado y AGE», versión 2026.2'}
};
const rows={
3341:{A1:['A1-5'],A2:[],doc:docs.eu,detail:'el bloque relata la retirada británica en el contexto del art. 50 TUE y distingue la fecha de salida del período transitorio, al tratar la cronología de la integración y los tratados. La fecha oficial se comprobó con Consejo/Comisión.'},
3342:{A1:['A1-5'],A2:[],doc:docs.eu,detail:'la sección de procedimiento legislativo ordinario refleja el art. 289 TFUE: Parlamento y Consejo son colegisladores y adoptan sobre propuesta de la Comisión. El material identifica también los procedimientos especiales.'},
3343:{A1:['A1-5'],A2:[],doc:docs.eu,detail:'el test actualizado pregunta quién ejerce la presidencia en el segundo semestre de 2026 y responde Irlanda; el bloque no desarrolla el trío Ireland-Lithuania-Greece de 2026–2027, comprobado directamente en el calendario oficial del Consejo.'},
3344:{A1:['A1-5','A1-14'],A2:[],doc:docs.economy,detail:'el bloque aborda la cohesión económica, el Fondo Social Europeo Plus y los fondos agrícolas FEAGA/FEADER en el marco vigente; no se encontró en la búsqueda un inventario histórico explícito de los cinco ESIF 2014–2020. Esa lista y su gestión compartida se comprobaron en la Comisión Europea.'},
3345:{A1:['A1-6'],A2:['A2-I-8'],doc:docs.constitution,detail:'la sección 13.2 distingue órganos superiores/directivos y la sección 14 trata Delegados y Subdelegados; la atribución exacta de rango se contrasta con el artículo 72.3 de la Ley 40/2015.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación cotejada con revision/temario-oficial.json y convocatorias BOE: A1 BOE-A-2025-25938 (anexo I) y A2 BOE-A-2025-26262 (anexo IX).';
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),r=rows[c.id];assert.ok(q&&r);for(const t of [...r.A1,...r.A2])assert.ok(official.has(t),`Tema oficial inexistente: ${t}`);
 q.clasificacion={A1:r.A1,A2:r.A2,bloque_academia:`${r.doc.label}; ${r.detail} ${r.doc.url}`,estado:'revisada',nota:`${q.revision.estado}. ${r.A2.length?'Encaje A2 consignado conforme al tema oficial indicado.':'No se fuerza clasificación A2: el programa oficial no incluye un tema específico de Unión Europea; el bloque de Academy lo señala como no aplicable a A2.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.doc.label}; ${r.detail} ${r.doc.url} ${calls}`;
 q.revision.fuentes.push({url:r.doc.url,referencia:`${r.doc.label}; cotejo curricular: ${r.detail} El material de academia se usa como guía curricular, no sustituye a la norma/fuente oficial.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');console.log('Cotejo de Academy y programas oficiales A1/A2 aplicado al lote 605.');
