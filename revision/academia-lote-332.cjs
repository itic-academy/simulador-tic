const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-332.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc={url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, Bloque 05 Contratación, Presupuestos y Compra TIC, versión 2026.2 (01-10-2026)'};
const mapping={
 1976:{topics:['A1-11'],detail:'el índice oficial del material incluye expresamente el art. 118 LCSP y sus secciones sobre contratos menores; el programa del bloque identifica A1-11 y declara que no hay equivalente en A2.',note:'Se cotejó la cobertura académica del artículo y sus umbrales; se verifican de forma independiente contra LCSP consolidada.'},
 1977:{topics:['A1-12'],detail:'el material incluye Presupuestos Generales, modificaciones presupuestarias y control y cita la Ley 47/2003; la LGP consolidada se contrasta directamente para el art. 67.',note:'El encaje es el tema oficial A1-12. El Bloque 05 indica que ese bloque oficial A1 no tiene equivalente en el temario A2.'},
 1978:{topics:['A1-11'],detail:'el material trata perfección, formalización y recursos especiales en la sección 4.6, incluyendo el art. 154 LCSP.',note:'El plazo y sus excepciones se validan contra el texto consolidado de la LCSP, no solo contra el manual.'},
 1979:{topics:['A1-5','A1-12'],detail:'la sección 8.1 del Bloque 05 trata el marco legal y europeo de los presupuestos; la actualización 2026 incluye las reglas fiscales europeas reformadas. No se localizó mención expresa al TSCG de 2012 en el contenido consultado.',note:'Se cotejan los epígrafes oficiales A1-5 y A1-12; el manual aporta contexto curricular, mientras la regla del Fiscal Compact se comprueba en el texto del Consejo y la Comisión. El programa A2 no tiene un epígrafe de la UE, presupuestos ni contratación que permita asignar una correspondencia específica.'},
 1980:{topics:['A1-11'],detail:'el material incluye los órganos que intervienen en contratación pública y el recurso especial en la sección 4.6.',note:'El marco académico aborda TACRC y recurso especial; creación, adscripción, competencia y gratuidad se verifican en los arts. 41 RDL 3/2011 y 44–45 LCSP.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 assert.deepEqual(q.clasificacion.A1,r.topics);assert.ok(r.topics.every(t=>official.has(t)));
 assert.equal(q.clasificacion.A2.length,0,`No se esperaba tema A2 en ${c.id}`);
 q.clasificacion.bloque_academia=`${doc.label}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia comprobada en revision/temario-oficial.json y en las convocatorias vigentes: A1 BOE-A-2025-25938 y A2 BOE-A-2025-26262. El material académico no sustituye la fuente normativa primaria.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:doc.url,referencia:`${doc.label}; cotejo específico de cobertura del tema.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo académico, temario oficial y convocatorias actualizado para IDs 1976–1980.');

