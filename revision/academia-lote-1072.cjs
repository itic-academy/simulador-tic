const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1072.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const contratacion='https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk';
const sociedad='https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const mapa={
 5681:{a1:[11],a2:[],urls:[contratacion],desc:'ITIC Academy, bloque 05 Contratación, Presupuestos, Convenios, Subvenciones y Compra TIC, versión 2026.2, §§ 3.1 (tipos de contrato) y 7.2 (acuerdos marco como racionalización). El índice del programa oficial A1 lo mapea al tema 11; el bloque de academia declara que no tiene equivalente específico A2. La distinción jurídica se comprueba con los arts. 12–18 y 218–226 LCSP.'},
 5682:{a1:[11],a2:[],urls:[contratacion],desc:'ITIC Academy, bloque 05, versión 2026.2, § 2.4 (órganos que intervienen): separa la Mesa, que asiste y propone, del órgano de contratación, que decide; el contenido corresponde al tema A1-11 y no tiene epígrafe específico A2 según el mapa curricular de la academia. La atribución del nombramiento se verifica en el art. 326.4 LCSP.'},
 5683:{a1:[13],a2:[],urls:[contratacion],desc:'ITIC Academy, bloque 05, versión 2026.2, § 13 (subvenciones públicas), con cobertura curricular del tema A1-13 y sin equivalente específico A2 en su mapa. El PDF consultado aborda el marco general de la Ley 38/2003; no se localizó en él el art. 36.3 de la Ley 5/2008 de Castilla y León. Esa regla autonómica se verifica directamente en BOE y no se atribuye a la academia.'},
 5684:{a1:[14],a2:['I-4'],urls:[sociedad],desc:'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2: su índice sitúa la Agenda 2030/ODS en A1-14 y A2-O4 (tema oficial A2-I.4); incluye la fecha de aplicación de los objetivos. La fecha exacta se confirma en el párrafo 21 de la Agenda de Naciones Unidas.'},
 5685:{a1:[16],a2:['I-5'],urls:[sociedad],desc:'ITIC Academy, bloque 06, versión 2026.2, apartado de políticas de igualdad: cubre la LO 3/2007 y los planes de igualdad en la AGE, con correspondencia A1-16/A2-O5 (tema oficial A2-I.5). La regla temporal y la evaluación anual se contrastan con el art. 64 BOE.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/'),marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} El material docente acredita cobertura; la conclusión sobre el reactivo se apoya en las fuentes normativas indicadas en la revisión individual.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const urls=new Set([contratacion,sociedad]);q.revision.fuentes=q.revision.fuentes.filter(f=>!urls.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5681–5685.');
