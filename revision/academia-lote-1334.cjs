const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1334.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={ue:'https://drive.google.com/file/d/1KTz7CNz88u_4zyVLC2oYQBnmJRHIG7J7/view?usp=drivesdk',admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',seguridad:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',age:'https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk',presupuesto:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk'};
const notes={
 6991:['ue','ITIC Academy, bloque 02 Unión Europea, versión 2026.2 (01/10/2026): estudia las instituciones de la Unión y el Consejo Europeo, correspondiente a A1 tema 5; cotejo curricular.'],
 6992:['admin','ITIC Academy, bloque 03 Actuación administrativa y Administración digital, actualización 2026: Leyes 39/2015 y 40/2015 y procedimiento administrativo; A1 tema 8/A2 I.8; cotejo curricular.'],
 6993:['seguridad','ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, versión 2026: cotejo contextual. Las búsquedas del material accesible no localizaron un bloque dedicado expresamente a la Ley 25/2007, por lo que la correspondencia se limita al ámbito de datos personales y seguridad; la respuesta se basa en la ley vigente.'],
 6994:['age','ITIC Academy, bloque 01 Constitución, organización del Estado y AGE, actualización 2026: órganos centrales y organización de la AGE, correspondiente a A1 tema 4; cotejo curricular.'],
 6995:['presupuesto','ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC, actualización 2026: presupuestos y estructura/clasificación del gasto, correspondiente a A1 tema 12; cotejo curricular.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin equivalencia A2 directa';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. El cotejo académico contextualiza la cobertura, no sustituye las fuentes primarias citadas.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:'Cotejo curricular ITIC Academy: '+entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 6991–6995.');
