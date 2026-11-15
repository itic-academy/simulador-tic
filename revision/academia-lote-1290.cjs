const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1290.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
  networks:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
  os:'https://drive.google.com/file/d/1-6ZS4MZmc7BjkT6tCk_LmWAgB3pIzZE3/view?usp=drivesdk',
  cloud:'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',
  wireless:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
  law:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk'
};
const map={
  6771:{a1:[113],a2:['IV-10'],urls:[docs.networks],desc:'ITIC Academy, bloque 42, redes y tecnologías de transporte: cotejo de MPLS; la anchura del campo se valida con IETF RFC 3032.'},
  6772:{a1:[79],a2:['II-2','II-13'],urls:[docs.os],desc:'ITIC Academy, bloque 27, sistemas operativos Windows/Linux: cotejo de administración y protección de volúmenes; la función BitLocker se contrasta con Microsoft Learn.'},
  6773:{a1:[55],a2:['II-1'],urls:[docs.cloud],desc:'ITIC Academy, bloque 25, Cloud Computing, edición 2026: cotejo de modelos IaaS/PaaS/SaaS y aplicaciones cloud; la definición se contrasta con NIST SP 800-145.'},
  6774:{a1:[114],a2:['IV-11'],urls:[docs.wireless],desc:'ITIC Academy, bloque 46, redes inalámbricas, edición 2026: cotejo de SSID e IEEE 802.11; las propiedades y unidades del campo se contrastan con las especificaciones técnicas.'},
  6775:{a1:[7,8],a2:['I-8'],urls:[docs.law],desc:'ITIC Academy, bloque 03, Actuación Administrativa, edición 2026: cotejo de actos administrativos y Ley 39/2015; la denominación jurídica se comprueba en el artículo 37 del BOE.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trim=value=>{const raw=(value||'').trim(),i=raw.indexOf(marker);return(i<0?raw:raw.slice(0,i)).trim().replace(/^Bloque de academia pendiente de cotejo\. Una lista vacía no implica exclusión del programa\.?\s*/,'').trim()};
for(const change of log.cambios){
 const q=bank.preguntas.find(x=>x.id===change.id),m=map[change.id];assert.ok(q&&m,'Falta ID '+change.id);
 q.clasificacion.A1=m.a1.map(n=>'A1-'+n);q.clasificacion.A2=m.a2.map(n=>'A2-'+n);q.clasificacion.bloque_academia=m.desc;
 const topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=marker+' '+m.desc+' Correspondencia oficial: '+topics+'. El cotejo académico acredita cobertura curricular; las afirmaciones específicas se contrastan con fuentes técnicas o jurídicas primarias.';
 q.clasificacion.nota=(trim(q.clasificacion.nota)+' '+note).trim();q.comentarios=(trim(q.comentarios)+' '+note).trim();q.revision.observaciones=(trim(q.revision.observaciones)+' '+note).trim();
 const urls=new Set(m.urls);q.revision.fuentes=q.revision.fuentes.filter(s=>!urls.has(s.url));for(const url of m.urls)q.revision.fuentes.push({url:url,referencia:'ITIC Academy/Drive: '+m.desc});
 change.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular aplicado a los IDs 6771–6775.');
