const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1259.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const files={block05:'1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ',block02:'1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7',block06:'1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE'};
const map={
 6616:{a1:[11],a2:[],file:files.block05,desc:'bloque 05 Contratación, Presupuestos y Compra TIC, edición 2026: cubre contratación pública/contratos de servicios; el temario A2 no contiene un epígrafe equivalente. La instrucción concreta de 2012 se valida con su texto reproducido en documentación oficial.'},
 6617:{a1:[12],a2:[],file:files.block05,desc:'bloque 05 Contratación, Presupuestos y Compra TIC, edición 2026: incluye los Presupuestos Generales del Estado, ejecución y control del gasto y anticipos de caja fija; el programa A2 no incluye tema equivalente.'},
 6618:{a1:[5],a2:[],file:files.block02,desc:'bloque 02 Unión Europea, edición 2026.2: cobertura curricular de tratados, derecho y políticas/actuaciones de la UE. No se afirma que el documento sea la fuente del período o de la base jurídica de Horizonte Europa; se contrastan con Reglamento (UE) 2021/695 y Comisión.'},
 6619:{a1:[51],a2:['I-6'],file:files.block06,desc:'bloque 06 Economía, Sociedad, Empleo y Transformación Digital, edición 2026: cobertura general de transformación digital/Agenda Digital y sociedad de la información; en la búsqueda no se halló una exposición teórica específica de Smart Rural 21, cuyo estado histórico se contrasta con fuentes UE.'},
 6620:{a1:[14],a2:['I-4'],file:files.block06,desc:'bloque 06 Economía, Sociedad, Empleo y Transformación Digital, edición 2026: trata explícitamente la Estrategia Española de Economía Circular 2030 y la Agenda 2030; el texto curricular menciona ambos ámbitos.'}
};
const strip=s=>{const x=s||'',needle='Cotejo curricular de ITIC Academy:';const i=x.indexOf(needle);return i<0?x.trim():x.slice(0,i).trim();};
for(const c of log.cambios){const m=map[c.id],q=bank.preguntas.find(x=>x.id===c.id);if(!m||!q)throw Error(`Falta ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 equivalente';
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${topics}. La academia orienta la cobertura, no sustituye las fuentes primarias.`;
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 const url=`https://drive.google.com/file/d/${m.file}/view?usp=drivesdk`;
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==url);q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular ITIC Academy añadido/precisado para 6616–6620.');
