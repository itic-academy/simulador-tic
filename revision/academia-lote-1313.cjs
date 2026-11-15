const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-1313.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const drive={web:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',crypto:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',security:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk',gis:'https://drive.google.com/file/d/1RMeoTk_pDMBXS4TRc2URS5940kaOmb4X/view?usp=drivesdk',ai:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk'};
const academy={
6886:[['web','ITIC Academy, bloque 30, Tecnologías de sistemas de información (2026): cubre XML y estándares web en A1-77/A2-II.9; no se localizó contenido específico de juego de caracteres, que se verifica directamente en W3C.'],[]],
6887:[['crypto','ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma (2026): incluye cifrado simétrico/asimétrico en A1-79/A2-IV.12; se documenta IDEA como contenido histórico con RFC del IETF.'],[]],
6888:[['crypto','ITIC Academy, bloque 36, Seguridad, criptografía, identificación y firma, y bloque 48, Seguridad en redes y nivel de aplicación: claves, firma y criptografía (A1-79/80/81 y A2-I.6/IV.12). El flujo de firma+cifrado se contrasta con NIST.'],['security']],
6889:[['gis','ITIC Academy, bloque 33, E-learning y SIG (A1-74) incluye conceptos y formatos de datos geográficos; el tema 56 A1 abarca tratamiento multimedia. La distinción de modos lossless/lossy se resuelve con DICOM, Library of Congress y GDAL, no se atribuye a Academy.'],[]],
6890:[['ai','ITIC Academy, bloque 32, Inteligencia artificial y ciencia de datos: cubre A1-70 y áreas de aplicación de IA; el programa A2 incluye fundamentos de IA en III.5. No se encontró una explicación académica específica de DTW; se contrasta con el artículo Sakoe-Chiba.'],[]]
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const item of log.cambios){const q=bank.preguntas.find(x=>x.id===item.id),[entry,additional]=academy[item.id];assert.ok(q&&entry,`Falta Academy ${item.id}`);const note=`${marker} ${entry[1]} Correspondencia oficial: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. La documentación académica se usa como cotejo curricular, no como sustituto de las referencias primarias.`;q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();for(const key of [entry[0],...additional]){const url=drive[key];if(!q.revision.fuentes.some(x=>x.url===url))q.revision.fuentes.push({url,referencia:`Cotejo temático ITIC Academy: ${key}.`});}item.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
// Mantiene reproducible el arreglo curricular del ID 6872 incluido en este lote.
console.log('Cotejo Academy aplicado a 6886–6890.');
