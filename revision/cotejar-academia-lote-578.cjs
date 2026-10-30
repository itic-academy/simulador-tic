const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-578.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const economy={url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',label:'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2 (01/10/2026)'};
const leadership={url:'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk',label:'ITIC Academy, bloque 07 Dirección Pública, Empleo y Transparencia, edición 2026'};
const mappings={
 3206:{A1:['A1-18','A1-19','A1-51'],A2:[],docs:[economy],detail:'el índice del bloque vincula DESI/Década Digital con los temas A1-18, A1-19 y A1-51; su materia cubre impacto de las TIC y planes de digitalización. La lista de cuatro dimensiones del reactivo se limita expresamente al DESI histórico hasta 2022 y se verifica en la Comisión Europea.'},
 3207:{A1:['A1-17'],A2:[],docs:[economy],detail:'el bloque desarrolla el tema 17, mercado de trabajo y magnitudes, incluida la EPA; se cotejan definición, edad y semana de referencia con las definiciones del INE.'},
 3208:{A1:['A1-16'],A2:['A2-I-5'],docs:[economy],detail:'el bloque cubre políticas de igualdad y cita LO 3/2007 dentro del tema A1-16 y del epígrafe A2 sobre igualdad y no discriminación. El órgano legitimado y la acción se verifican literalmente en el art. 74 consolidado del BOE.'},
 3209:{A1:['A1-17'],A2:[],docs:[economy],detail:'el apartado de mercado de trabajo trata las magnitudes de la EPA y separa definiciones estables de cifras fechadas. El valor histórico del 27,16 % y su trimestre se comprueban en la nota de prensa INE de 25/04/2013.'},
 3210:{A1:['A1-21'],A2:[],docs:[leadership],detail:'el bloque presenta teorías y estilos de liderazgo, competencias y gestión de personas; no formula una lista exhaustiva ni una regla binaria de «técnicas de buen líder», por lo que no resuelve la falta de criterio del reactivo.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.docs.map(d=>d.label).join('; ')}; ${m.detail}`;
 const callout='Correspondencia cotejada con revision/temario-oficial.json y anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). Academy se usa para el encaje curricular; las definiciones, vigencia y respuesta se verifican con la fuente oficial indicada en cada registro.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.docs.map(d=>d.url).join(' ')}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 for(const d of m.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; alcance y límites indicados en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive y temas oficiales guardados para IDs 3206–3210.');
