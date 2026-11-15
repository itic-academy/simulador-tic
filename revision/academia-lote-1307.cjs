const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1307.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const b1='https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk';
const b3='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const b5='https://drive.google.com/file/d/14iahY0cgkiV8RESN81b8pHdD4K3UbSOj/view?usp=drivesdk';
const docs={
6856:{text:'ITIC Academy, bloque 01, Constitución/organización del Estado (edición 2026): cubre A1-1 y A2 O2, incluido el Defensor del Pueblo. La afirmación legal se coteja con el art. 54 CE y los arts. 1 y 12 de la LO 3/1981.',url:b1},
6857:{text:'ITIC Academy, bloque 01, Constitución/organización del Estado (edición 2026): cubre A1-2 y A2 O2, con Tribunal Constitucional y Defensor del Pueblo. Los efectos y legitimaciones concretas se verifican con los arts. 162–164 CE y la LOTC.',url:b1},
6858:{text:'La tabla oficial de ITIC Academy 2026 remite a A1-5 (Unión Europea), aunque el bloque 01 consultado no desarrolla este tema y no se localizó un apunte académico específico de la adhesión de Croacia. El hecho cronológico se coteja directamente con la lista de Estados miembros y la página de ampliación de la UE.',url:null},
6859:{text:'ITIC Academy, bloque 03, Actuación Administrativa y Administración Digital (versión 2026.2): cubre A1-8 y A2 O8 y trata la Ley 39/2015/procedimiento administrativo. La formulación vigente del art. 77.1 se comprueba en el BOE consolidado.',url:b3},
6860:{text:'ITIC Academy, bloque 05, Contratación, Presupuestos y Compra TIC (versión 2026.2): cubre A1-11 y desarrolla la Ley 9/2017. El propio mapa académico señala que no existe equivalente específico en A2; el contenido legal se comprueba en el art. 2.1 consolidado del BOE.',url:b5}
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim()};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),d=docs[c.id];assert.ok(q&&d,'Falta ID '+c.id);
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 const note=marker+' '+d.text+' Correspondencia oficial: '+topics+'. Los materiales académicos sirven de cotejo curricular; la respuesta se sostiene en la legislación o fuente institucional citada.';
 q.clasificacion.bloque_academia=d.text;
 q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
 q.comentarios=(trim(q.comentarios)+' '+note).trim();
 q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 if(d.url){q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==d.url);q.revision.fuentes.push({url:d.url,referencia:d.text});}
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6856–6860.');
