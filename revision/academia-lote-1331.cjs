const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1331.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const doc='https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk';
const notes={
 6976:'El bloque 42 Redes (actualización 2026) incluye el modelo OSI y corresponde a A1 111/A2 II.8; cotejo curricular.',
 6977:'El bloque 42 Redes (actualización 2026) cubre redes de acceso de fibra GPON/FTTH y medios guiados; correspondencia A1 112/A2 IV.7; cotejo curricular.',
 6978:'El bloque 42 Redes (actualización 2026) cubre redes de transporte y agregación, incluidas SDH/SONET y ATM; correspondencia A1 113; cotejo curricular.',
 6979:'El bloque 42 Redes (actualización 2026) cubre conceptos de telecomunicaciones, modulación y medios; correspondencia A1 108/A2 IV.7; cotejo curricular.',
 6980:'El bloque 42 Redes (actualización 2026) incluye redes IP y transición/convivencia IPv4-IPv6; correspondencia A1 115/A2 II.8; cotejo curricular.'
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id);assert.ok(q&&notes[c.id],'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 directamente equivalente';
 const note=marker+' ITIC Academy, bloque 42 Redes, actualización 2026: '+notes[c.id]+' Correspondencia oficial: '+codes+'. El cotejo curricular no sustituye a las recomendaciones ITU-T/IETF enlazadas en la ficha.';
 q.clasificacion.bloque_academia='Bloque 42 Redes (actualización 2026)';q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===doc))q.revision.fuentes.push({url:doc,referencia:'Cotejo curricular ITIC Academy, bloque 42 Redes, actualización 2026: '+notes[c.id]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy aplicado a las preguntas 6976–6980.');
