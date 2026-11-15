const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1324.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={inter:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',ens:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk'};
const notes={
 6941:['inter','ITIC Academy, bloque Interoperabilidad de sistemas (45–46), versión 2026.2, 14-08-2026: secciones 11 y 12 cubren NTI de documentos electrónicos, copiado auténtico y conversión. El bloque sirve para cotejar cobertura curricular; el objeto exacto se verifica en la resolución BOE.'],
 6942:['inter','ITIC Academy, bloque Interoperabilidad de sistemas (45–46), versión 2026.2, 14-08-2026: §11.3 trata metadatos mínimos del documento electrónico. Se aplica la numeración del programa oficial A2 I.9; los rótulos internos O9/O10 de la academia no son la codificación oficial.'],
 6943:['ens','ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2, 26-08-2026: desarrolla el RD 311/2022 y añade auditoría ENS en la cobertura A2 T11. El enunciado se actualizó a la norma vigente; artículo 31 del BOE determina la respuesta.'],
 6944:['ens','ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2, 26-08-2026: temas A1 48/127 y A2 O9/T11/T13, con CCN-CERT, SAT, herramientas de seguridad e incidentes. La función concreta de SAT-SARA/SAT-INET se contrasta con la fuente primaria CCN-CERT.'],
 6945:['ens','ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2, 26-08-2026: el resumen ejecutivo distingue conformidad básica por autoevaluación de certificación auditada para media/alta. La conclusión se verifica con el artículo 38 del RD 311/2022.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,`Falta pregunta o nota ${c.id}`);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
 const note=`${marker} ${entry[1]} Correspondencia oficial: ${codes}. La academia se emplea para cotejar cobertura, no como sustituto de la norma o fuente primaria.`;
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:`Cotejo curricular ITIC Academy: ${entry[1]}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy aplicado a las preguntas 6941–6945.');
