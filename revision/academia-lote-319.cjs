const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-319.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 db:{url:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',label:'ITIC Academy, bloque 29 Bases de datos, SQL y modelado, A1-63/64/89 y A2-II-5, versión 2026.1'},
 tech:{url:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',label:'ITIC Academy, bloque 30 Tecnologías de sistemas de información, A1-65/66/67/68 y A2-D10/D11/D12, versión 2026.1'}
};
const mapping={
 1911:{doc:['db'],detail:'el bloque cubre SGBD, SQL y utilidades de administración. Navicat no se nombra expresamente en el documento, por lo que el vínculo es temático y no una fuente sobre el producto.',topics:['A1-63','A2-II-5'],note:'Cotejo temático con bases de datos y herramientas de administración; el detalle de motores y funciones de Navicat se verifica con documentación del fabricante.'},
 1912:{doc:['db'],detail:'el epígrafe 7.2 trata COMMIT, ROLLBACK, SAVEPOINT y WAL dentro de transacciones.',topics:['A1-63','A2-II-5'],note:'Cotejo específico con el apartado académico sobre control de transacciones; la semántica de ROLLBACK se valida con documentación primaria del motor.'},
 1913:{doc:['db'],detail:'el bloque desarrolla el modelo E/R e incluye explícitamente el concepto de entidad débil y su dependencia de identificación.',topics:['A1-63','A2-II-5'],note:'Cotejo académico con el apartado de modelado E/R; las definiciones regular/débil se contrastan con Elmasri y Navathe.'},
 1914:{doc:['tech'],detail:'el apartado 3.1 distingue servidor web, proxy inverso y servidor de aplicaciones; D10 trata Java EE/Jakarta EE.',topics:['A1-57','A1-119','A2-II-6','A2-III-10'],note:'Cotejo específico con servidor web/proxy/servidor de aplicaciones y arquitectura Java EE/Jakarta EE. La distinción de NGINX, Liberty, GlassFish y Tomcat se verifica en los sitios oficiales de cada proyecto.'},
 1915:{doc:['tech'],detail:'el bloque cubre el entorno .NET (A1-66 y D11); la documentación consultada no desarrolla MEF específicamente.',topics:['A1-66','A2-III-11'],note:'Cotejo curricular de la plataforma .NET, sin atribuir al temario una explicación de MEF que no aparece en el material; la definición se contrasta con Microsoft Learn.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=mapping[c.id];assert.ok(q?.revision&&r,`Falta cotejo ${c.id}`);
 for(const id of [...q.clasificacion.A1,...q.clasificacion.A2,...r.topics])assert.ok(official.has(id),id);
 const selections=r.doc.map(k=>docs[k]);assert.ok(selections.every(Boolean));
 q.clasificacion.bloque_academia=`${selections.map(d=>d.label).join('; ')}; ${r.detail}`;
 q.clasificacion.nota=`${r.note} Correspondencia comprobada en revision/temario-oficial.json y convocatorias BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2); el cotejo curricular acredita encaje temático, no sustituye las fuentes primarias.`;
 q.revision.observaciones+=` ${q.clasificacion.nota}`;q.comentarios=q.revision.observaciones;
 for(const d of selections)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; cotejo de contenido y alcance.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive, temario oficial y convocatorias actualizado para IDs 1911–1915.');
