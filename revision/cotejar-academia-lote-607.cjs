const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const bp=path.join(__dirname,'..','preguntas_preparatic.json'),lp=path.join(__dirname,'cambios-lote-607.json');
const bank=JSON.parse(fs.readFileSync(bp,'utf8')),log=JSON.parse(fs.readFileSync(lp,'utf8'));
const docs={
 general:{url:'https://drive.google.com/file/d/14iahY0cgkiV8RESN81b8pHdD4K3UbSOj/view?usp=drivesdk',title:'ITIC Academy, bloque 05 «Contratación, Presupuestos y Compra TIC», versión 2026.2'},
 economy:{url:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',title:'ITIC Academy, bloque 06 «Economía, sociedad, empleo y transformación digital», versión 2026'},
 admin:{url:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',title:'ITIC Academy, bloque 03 «Actuación Administrativa», versión 2026'},
 digital:{url:'https://drive.google.com/file/d/1alTzv7f2Katg4EdxJ72SYkLm6UScCCho/view?usp=drivesdk',title:'ITIC Academy, bloque 10 «Gobernanza TIC y Administración Digital», versión 2026'}
};
const details={
 3351:{docs:[docs.general],detail:'el bloque incluye el programa A1 tema 13 (subvenciones públicas y procedimiento) y el marco de la Ley 38/2003. La lista de principios del artículo 8.3 se comprobó directamente en el texto consolidado del BOE.'},
 3352:{docs:[docs.general,docs.economy],detail:'el bloque 5 cubre presupuestos y gasto; el bloque 6 trata la política fiscal nacional y las magnitudes déficit/deuda. Se reformuló el enunciado para medir el saldo cuando los gastos exceden a los ingresos, y se cotejó la definición presupuestaria con IGAE y la estabilidad con la LO 2/2012.'},
 3353:{docs:[docs.economy],detail:'el bloque desarrolla el temario A1-16/A2-I-5 de políticas de igualdad y contra la violencia de género. No se encontró allí el desglose histórico exacto del RDL 9/2018; las medidas se comprobaron en el propio BOE y se distinguieron de la reforma posterior del RDL 6/2019.'},
 3354:{docs:[docs.economy],detail:'el bloque cubre igualdad y no discriminación, incluido acoso sexual y por razón de sexo en el tema A1-16/A2-I-5. La redacción vigente del artículo 48.1 y su reforma por LO 10/2022 se comprobaron directamente en el BOE.'},
 3355:{docs:[docs.admin,docs.digital],detail:'el bloque 3 incluye el procedimiento de notificaciones electrónicas, comparecencia en sede y DEHú; el bloque 10 desarrolla los servicios de administración digital y la DEHú. Los efectos por acceso al primero de ambos sistemas y el canal estatal se contrastaron literalmente con los arts. 42.1 y 44.5 del RD 203/2021.'}
};
const official=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'temario-oficial.json'),'utf8')).programas.flatMap(p=>p.temas.map(t=>t.id)));
const calls='Clasificación validada contra los programas oficiales publicados en BOE (A1 BOE-A-2025-25938, anexo I; A2 BOE-A-2025-26262, anexo IX) y revision/temario-oficial.json.';
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=details[c.id];assert.ok(q&&r&&q.revision);
 const A1=c.actualizada.clasificacion.A1,A2=c.actualizada.clasificacion.A2;for(const id of [...A1,...A2])assert.ok(official.has(id),`Tema oficial no vigente: ${id}`);
 const academic=r.docs.map(d=>`${d.title}; ${r.detail} ${d.url}`).join(' | ');
 q.clasificacion={...q.clasificacion,A1,A2,bloque_academia:academic,estado:'revisada',nota:`${q.revision.estado}. ${A2.length?'El tema A2 se asigna solo cuando el programa oficial lo cubre expresamente.':'El programa oficial A2 no contiene epígrafe específico de subvenciones, política fiscal o contratación pública; no se fuerza equivalencia.'} ${calls}`};
 q.revision.observaciones+=` Cotejo ITIC Academy: ${r.docs.map(d=>`${d.title}; ${r.detail} ${d.url}`).join(' ')} ${calls}`;
 for(const d of r.docs)q.revision.fuentes.push({url:d.url,referencia:`${d.title}; cotejo curricular: ${r.detail} Material académico auxiliar; no sustituye a la fuente normativa primaria.`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bp,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(lp,JSON.stringify(log,null,2)+'\n');
console.log('Cotejados los cinco ítems del lote 607 con materiales ITIC Academy 2026 y los programas BOE A1/A2.');
