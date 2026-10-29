const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-577.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const law={url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',label:'ITIC Academy, bloque 03 Actuación administrativa y Administración digital, edición 2026'};
const procurement={url:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',label:'ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC, edición 2026'};
const mappings={
 3201:{A1:['A1-7'],A2:['A2-I-1'],docs:[law],detail:'el bloque 03 expone expresamente el art. 81.2 CE y la mayoría absoluta del Congreso en votación final del conjunto.'},
 3202:{A1:['A1-11'],A2:[],docs:[procurement],detail:'el bloque 05 aborda el perfil de contratante y el régimen de transparencia/publicidad de la LCSP; el momento de inicio de difusión se confirma literalmente en el art. 63.7.'},
 3203:{A1:['A1-11'],A2:[],docs:[procurement],detail:'el apartado 4.5 estudia los criterios de adjudicación del art. 145 y distingue características generales de la empresa (solvencia) de la cualificación del personal adscrito, que solo se puede valorar bajo los requisitos legales.'},
 3204:{A1:['A1-13','A1-25'],A2:['A2-I-4'],docs:[procurement],detail:'el bloque 05 incluye BDNS/SNPSAP, subvenciones y sus obligaciones de publicidad; el encaje con transparencia se contrasta también con Ley 19/2013 y el tema oficial A2-I-4.'},
 3205:{A1:['A1-11','A1-13'],A2:['A2-I-8'],docs:[procurement],detail:'el bloque 05 cubre medio propio, encargos, requisitos de control y límites; la extensión estatutaria específica de ISDEFE se confirma en la resolución oficial del BOE, no se atribuye al apunte académico.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
assert.equal(log.cambios.length,5);
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mappings[c.id];assert.ok(q?.revision&&m,`Falta cotejo ${c.id}`);
 for(const id of [...m.A1,...m.A2])assert.ok(official.has(id),`Tema no oficial ${id}`);
 const academy=`${m.docs.map(d=>d.label).join('; ')}; ${m.detail}`;
 const callout='Correspondencia cotejada con revision/temario-oficial.json y anexos I/IX de las convocatorias GSI A1/A2 de 2025 (BOE-A-2025-25938 y BOE-A-2025-26262). Academy se usa como apoyo curricular, no como fuente de autoridad para interpretar legislación.';
 q.clasificacion={A1:m.A1,A2:m.A2,bloque_academia:`${academy} ${m.docs.map(d=>d.url).join(' ')}`,estado:'revisada',nota:`${q.revision.estado}. ${callout}`};
 q.revision.observaciones+=` Cotejo académico y oficial: ${academy} ${callout}`;
 for(const d of m.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.label}; alcance indicado en bloque_academia.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de Drive y temas oficiales guardados para IDs 3201–3205.');
