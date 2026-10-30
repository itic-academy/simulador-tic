const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-580.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const management={url:'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk',label:'ITIC Academy, bloque 07 Dirección Pública, Empleo, Transparencia y Unidad de Mercado, actualización 2026'};
const privacy={url:'https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk',label:'ITIC Academy, bloque 08 Protección de datos, actualización 2026'};
const mappings={
 3216:{A1:['A1-25'],A2:['A2-I-4'],docs:[management],detail:'el bloque recoge el tema A1-25 y el derecho de acceso de la Ley 19/2013; la modalidad preferente y la excepción se contrastan con el art. 22.1 consolidado.'},
 3217:{A1:['A1-25'],A2:['A2-I-4'],docs:[management],detail:'el bloque cubre el procedimiento y los plazos de acceso a información pública; el plazo principal y su posible ampliación se verifican en el art. 20.1.'},
 3218:{A1:['A1-25'],A2:['A2-I-4'],docs:[management],detail:'el temario A1-25 incluye expresamente el Portal de Transparencia, la OTAI y las unidades de información; las competencias vigentes se verifican en el portal oficial, su aviso legal y los RD 1118/2024 y 210/2024.'},
 3219:{A1:['A1-26'],A2:[],docs:[management],detail:'el bloque incluye expresamente A1-26, garantía de unidad de mercado, y desarrolla la Ley 20/2013; se contrasta la redacción vigente del art. 14.2 y el cambio de la Ley 18/2022.'},
 3220:{A1:['A1-27'],A2:['A2-I-7'],docs:[privacy],detail:'el bloque cubre el A1-27 y el A2-I-7, autoridades de protección de datos y AEPD; el Estatuto vigente y la derogación del RD 428/1993 se cotejan con el RD 389/2021.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.docs.map(d=>d.label).join('; ')}; ${m.detail}`;
 const callout='Correspondencia cotejada con revision/temario-oficial.json y anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). Academy se usa para el encaje curricular; el contenido normativo se verifica con la fuente primaria indicada en el registro.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.docs.map(d=>d.url).join(' ')}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 for(const d of m.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; apartado y encaje curricular indicados en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive, convocatorias y temario oficial añadido al lote 580.');
