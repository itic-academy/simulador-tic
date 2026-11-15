const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-1314.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const academyUrl={block30:'https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk',block32:'https://drive.google.com/file/d/1DGX9XaBUaMhlIyYdzcACLHMC1hqIyyIM/view?usp=drivesdk',block38:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk'};
const academy={
6891:['block30','ITIC Academy, bloque 30, Tecnologías de sistemas de información (2026), apartados 12–13: incluye blockchain, consenso y forks dentro de A1-85.'],
6892:['block32','ITIC Academy, bloque 32, Inteligencia Artificial y Ciencia de Datos (2026): A2 recoge TAD/estructuras de datos y estrategias de diseño de algoritmos (epígrafe D5, equivalente a III.5 en el temario oficial).'],
6893:['block38','ITIC Academy, bloque 38, Análisis, diseño y construcción (2026): cubre RUP/proceso unificado, iteraciones, arquitectura, casos de uso y verificación de calidad.'],
6894:['block38','ITIC Academy, bloque 38, Análisis, diseño y construcción (2026): secciones de CASE, análisis estructurado y modelado/diseño; los productos de la pregunta se documentan como históricos.'],
6895:['block38','ITIC Academy, bloque 38, Análisis, diseño y construcción (2026), §5.4: trata expresamente cohesión y acoplamiento y sus taxonomías clásicas.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const item of log.cambios){const q=bank.preguntas.find(x=>x.id===item.id),[key,desc]=academy[item.id];assert.ok(q&&desc,`Falta cotejo ${item.id}`);const source={url:academyUrl[key],referencia:`Cotejo curricular: ${desc}`};const note=`${marker} ${desc} Correspondencia oficial: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe directo para esta materia'}. Se usa el material de academia como cotejo curricular; la conclusión técnica se comprueba con fuentes primarias.`;q.clasificacion.bloque_academia=desc;q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();if(!q.revision.fuentes.some(x=>x.url===source.url))q.revision.fuentes.push(source);item.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy aplicado a 6891–6895.');
