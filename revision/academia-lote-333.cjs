const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-333.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 administracion:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, Bloque 03 Actuación Administrativa y Administración Digital, versión 2026.2 (01-10-2026)'},
 contratacion:{url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, Bloque 05 Contratación, Presupuestos y Compra TIC, versión 2026.2 (01-10-2026)'},
 datos:{url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, Bloque 08 Protección de Datos, versión 2026.3 (01-10-2026)'},
 economia:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, Bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2 (01-10-2026)'}
};
const mapping={
 1981:{doc:'administracion',topics:['A1-8','A2-I-8'],detail:'cubre Ley 40/2015 y decisiones de competencia en el régimen jurídico del sector público.',note:'El artículo 14 y la clave se validan directamente contra el texto consolidado de la Ley 40/2015.'},
 1982:{doc:'contratacion',topics:['A1-11'],detail:'trata duración contractual, prórrogas y formalización en LCSP.',note:'La condición especial de contratos basados en acuerdo marco/SDA se incorpora según el texto vigente del art. 29.4.'},
 1983:{doc:'contratacion',topics:['A1-12'],detail:'incluye la LGP, modificaciones, aprobación y compromiso del gasto, ejecución y control.',note:'El alcance de las competencias se contrasta con el art. 74.1–2 consolidado de la LGP.'},
 1984:{doc:'datos',topics:['A1-27','A2-I-7'],detail:'incluye expresamente LOPDGDD y derechos digitales; el título X y sus rúbricas se cotejan en el BOE.',note:'La formulación distingue el derecho legal de acceso universal a Internet de la rúbrica y de cualquier velocidad concreta de banda ancha.'},
 1985:{doc:'economia',topics:['A1-14','A1-16'],detail:'incluye distribución personal de la renta, ECV, Gini, S80/S20, riesgo de pobreza y tasa AROPE, dentro de los temas oficiales de economía y estructura social.',note:'El manual de actualización 2026.2 contextualiza los indicadores; las cifras de 2025 se verifican con el INE y Eurostat.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 assert.deepEqual(q.clasificacion.A1,r.topics.filter(t=>t.startsWith('A1-')));assert.deepEqual(q.clasificacion.A2,r.topics.filter(t=>t.startsWith('A2-')));assert.ok(r.topics.every(t=>official.has(t)));
 const d=docs[r.doc];assert.ok(d);
 q.clasificacion.bloque_academia=`${d.label}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia contrastada con revision/temario-oficial.json y las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. El material académico acredita cobertura temática, no sustituye a las fuentes primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo específico de cobertura curricular.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 1981–1985.');
