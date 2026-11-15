const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bankPath=path.join(root,'preguntas_preparatic.json'),logPath=path.join(__dirname,'cambios-lote-1316.json');
const bank=JSON.parse(fs.readFileSync(bankPath,'utf8')),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={redes:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',wifi:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk'};
const academy={
6901:['redes','ITIC Academy, bloque Redes (actualización 2026.1), §§1.2, 4.6 y tests: el bloque explica OSI/TCP-IP, LAN, bucles y redundancia. La formulación se coteja con la cobertura, y el término BPDU con fuente técnica primaria.'],
6902:['redes','ITIC Academy, bloque Redes (actualización 2026.1), §1.2 y tema OSI/TCP-IP: cobertura de arquitectura y protocolos. La academia no se usa como autoridad para declarar equivalencias históricas discutibles; el ítem queda acotado y se coteja con normas ITU/IETF.'],
6903:['redes','ITIC Academy, bloque Redes (actualización 2026.1), §1.2: presenta OSI como modelo de siete capas y lo contrasta con TCP/IP.'],
6904:['wifi','ITIC Academy, bloque 46, Comunicaciones móviles/IEEE 802.11 (actualización 2026): cubre características técnicas, bandas y evolución de Wi-Fi. El material se emplea como cotejo temático; la banda de 802.11a se verifica en IEEE.'],
6905:['redes','ITIC Academy, bloque Redes (actualización 2026.1), §§1.2 y 9.2: incluye modelos de referencia, IPv4 y direccionamiento. El cálculo concreto de subred se verifica con RFC/IETF.']
};
const marker='Cotejo curricular ITIC Academy:';const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const item of log.cambios){const q=bank.preguntas.find(x=>x.id===item.id),[key,desc]=academy[item.id];assert.ok(q&&desc,`Falta cotejo ${item.id}`);const note=`${marker} ${desc} Correspondencia oficial: ${[...q.clasificacion.A1,...q.clasificacion.A2].join('/')}. El material académico acredita cobertura y terminología; las respuestas se contrastan con normas y estándares primarios.`;q.clasificacion.bloque_academia=desc;q.clasificacion.nota=`${strip(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${strip(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${strip(q.revision.observaciones)} ${note}`.trim();const url=urls[key];if(!q.revision.fuentes.some(x=>x.url===url))q.revision.fuentes.push({url,referencia:`Cotejo curricular ITIC Academy: ${desc}`});item.actualizada=structuredClone(q)}
fs.writeFileSync(bankPath,JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');console.log('Cotejo Academy aplicado a 6901–6905.');
