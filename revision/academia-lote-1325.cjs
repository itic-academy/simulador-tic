const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1325.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={inter:'https://drive.google.com/file/d/1zdx_PRBfKM9tRy61Boz_yPekU-D-b_6S/view?usp=drivesdk',normal:'https://drive.google.com/file/d/1HKwUIuFhm-wVG0e8kZfFm1R8qI1rGS2G/view?usp=drivesdk',mobile:'https://drive.google.com/file/d/1xwthhXbCj-TsATaIDQSI21MsALa-a-FA/view?usp=drivesdk',cloud:'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',arch:'https://drive.google.com/file/d/1Cnnzu7ZhGCn86GNkO9iabjZPNjmaIzHJ/view?usp=drivesdk'};
const notes={
 6946:['inter','ITIC Academy, bloque Interoperabilidad de sistemas (A1 45–46), versión 2026.2: cubre SIR, servicios comunes y soluciones de intercambio registral. Se coteja la transición curricular hacia REG-AGE/GEISER/SIR; el dato sobre ARE/AGRE se conserva como historia de la aplicación antigua y se apoya en la documentación administrativa de REC.'],
 6947:['normal','ITIC Academy, bloque Organismos de normalización (A1 50), versión 2026.1: trata UNE, AENOR, ISO, IEC, CEN/CENELEC y ETSI. Se comprobó la separación institucional de 2017 para no perpetuar el rótulo histórico de AENOR como organismo español de normalización.'],
 6948:['mobile','ITIC Academy, bloque Hardware, servidores y dispositivos móviles (A1 54), versión 2026.1, 31-08-2026: incluye BYOD/CYOD/COPE/COBO y MDM/MAM/EMM/UEM. La pregunta delimita BYOA a «Bring Your Own Apps» y diferencia dispositivo, aplicaciones y red; no se trata el acrónimo como norma cerrada.'],
 6949:['cloud','ITIC Academy, bloque Cloud Computing (A1 55/A2 T1), versión 2026.1, 19-08-2026: adopta NIST SP 800-145 y repasa sus tres modelos de servicio y modelos de despliegue. La respuesta sigue la publicación NIST.'],
 6950:['arch','ITIC Academy, bloque Arquitectura SOA y requisitos no funcionales (A1 58/A2 T6), versión 2026 V2: cubre tipologías cliente-servidor, multicapa y sus ventajas/inconvenientes. Se acotó el patrón de dos capas con la distinción entre cliente pesado y capas físicas.' ]
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,`Falta pregunta o nota ${c.id}`);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
 const note=`${marker} ${entry[1]} Correspondencia oficial: ${codes}. La academia sirve para cotejar cobertura, no como sustituto de las fuentes primarias.`;
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:`Cotejo curricular ITIC Academy: ${entry[1]}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy aplicado a las preguntas 6946–6950.');
