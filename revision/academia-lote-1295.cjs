const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1295.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  6796:['https://drive.google.com/file/d/1lZqyfGQmLTVsrhls2-XXsfbB_pygV_CN/view?usp=drivesdk','ITIC Academy, bloque 01, Constitución, Estado y AGE (2026): cotejo de la organización constitucional y del Poder Judicial; la respuesta concreta se comprueba en el artículo 585 LOPJ.'],
  6797:['https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk','ITIC Academy, bloque 50, sistemas de videoconferencia: cotejo del contenido curricular; la mayor sensibilidad temporal de VTC se verifica en ITU-T Y.1541.'],
  6798:['https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk','ITIC Academy, bloque 22, Seguridad, ENS y ciberseguridad (2026.2): cotejo del marco de continuidad y seguridad; para los componentes del plan se usa NIST SP 800-34 Rev. 1.'],
  6799:['https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk','ITIC Academy, bloque 42, redes: cotejo de VLAN y conmutación; la enumeración de modos se limita a la documentación oficial de Cisco IOS XE.'],
  6800:['https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk','ITIC Academy, bloque 06, Economía, Sociedad, Empleo y Transformación Digital (2026): incluye discapacidad e igualdad/no discriminación; la competencia y naturaleza de OADIS se verifican en la norma BOE consolidada y modificadora.']
};
const marker='Cotejo curricular ITIC Academy:';
const trim=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return(i<0?s:s.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim()};
for(const change of log.cambios){
  const q=bank.preguntas.find(x=>x.id===change.id),doc=docs[change.id];assert.ok(q&&doc,'Falta ID '+change.id);
  const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
  const note=marker+' '+doc[1]+' Correspondencia oficial: '+(topics||'sin epígrafe específico para la característica concreta').trim()+'. El cotejo académico sirve como mapa de cobertura y no sustituye las fuentes primarias.';
  q.clasificacion.bloque_academia=doc[1];q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();
  q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
  q.revision.fuentes=q.revision.fuentes.filter(s=>s.url!==doc[0]);q.revision.fuentes.push({url:doc[0],referencia:doc[1]});
  change.actualizada=structuredClone(q);
}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6796–6800.');
