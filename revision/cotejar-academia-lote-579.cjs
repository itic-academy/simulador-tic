const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-579.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const digital={url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 Actuación administrativa y Administración digital, actualización 2026'};
const management={url:'https://drive.google.com/file/d/11xq0o8TLESDT7J2PLC_MVbZHGoqWmGa2/view?usp=drivesdk',label:'ITIC Academy, bloque 07 Dirección Pública, Empleo, Transparencia y Unidad de Mercado, actualización 2026'};
const mappings={
 3211:{A1:['A1-22'],A2:['A2-I-6'],docs:[digital],detail:'el §6.2 se dedica a la LSSI-CE y Ley 56/2007 dentro del bloque sobre administración digital; el texto y los supuestos excluidos se comprueban en el art. 5.1 BOE.'},
 3212:{A1:['A1-24'],A2:['A2-I-8'],docs:[management],detail:'el bloque cubre el tema A1-24 y el TREBEP, incluyendo la sección de retribuciones complementarias; la formulación se valida con el tenor del art. 24.d.'},
 3213:{A1:['A1-24'],A2:['A2-I-8'],docs:[management],detail:'el bloque desarrolla el acceso, clases de personal y el TREBEP para A1-24; los requisitos generales y las excepciones de nacionalidad se contrastan con los arts. 56 y 57 del texto consolidado.'},
 3214:{A1:['A1-25'],A2:['A2-I-4'],docs:[management],detail:'el bloque trata la Ley 19/2013, transparencia y buen gobierno; también distingue los altos cargos regulados por la Ley 3/2015. El título, objeto y principios se verifican directamente en el BOE.'},
 3215:{A1:['A1-25'],A2:['A2-I-4'],docs:[management],detail:'el bloque cubre íntegramente transparencia y buen gobierno de la Ley 19/2013 y cita su régimen sancionador; la atribución concreta se comprueba en el art. 31.4.a, diferenciándola de la facultad del CTBG de instar el procedimiento.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.docs.map(d=>d.label).join('; ')}; ${m.detail}`;
 const callout='Correspondencia cotejada con revision/temario-oficial.json y anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). Academy se usa como apoyo curricular; el texto jurídico aplicable y la respuesta se verifican con las fuentes oficiales indicadas en cada registro.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.docs.map(d=>d.url).join(' ')}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 for(const d of m.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; apartado y alcance indicados en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive y temas oficiales guardados para IDs 3211–3215.');
