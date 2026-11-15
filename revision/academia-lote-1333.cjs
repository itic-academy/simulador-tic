const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1333.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 identidades:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
 organizacion:'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',
 videoconf:'https://drive.google.com/file/d/1TQCcsTrdpowIxSNiTOts2RvjpJ3AGeVn/view?usp=drivesdk',
 contratos:'https://drive.google.com/file/d/1yES3Mqsnk5LotPBx4HKU7pCiPfVD5ciZ/view?usp=drivesdk',
 economia:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk'
};
const notes={
 6986:['identidades','ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, actualización 2026: acceso remoto, gestión de identidades y single sign-on, correspondiente a A1 tema 131; cotejo curricular.'],
 6987:['organizacion','ITIC Academy, bloque 09 Organización y gestión de los sistemas de información, actualización 2026: cotejo contextual de continuidad organizativa y operación de SI. El material no establece una jerarquía universal entre BCP/DRP; esa relación se comprueba en NIST SP 800-34.'],
 6988:['videoconf','ITIC Academy, bloque 50 Videoconferencia, SSO y trabajo colaborativo, versión 2026: sistemas y protocolos, correspondiente a A1 tema 130/A2 C14; cotejo curricular.'],
 6989:['contratos','ITIC Academy, bloque 05 Contratación, Presupuestos y Compra TIC, actualización 2026: Ley 9/2017 y principios comunes, correspondiente a A1 tema 11; cotejo curricular.'],
 6990:['economia','ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, actualización a 01/10/2026: mercado de trabajo y magnitudes; cotejo curricular con el tema A1-17.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin equivalencia A2 directa';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. El cotejo académico contextualiza la cobertura, no sustituye a las fuentes primarias citadas en la ficha.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:'Cotejo curricular ITIC Academy: '+entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 6986–6990.');
