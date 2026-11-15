const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1332.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={
 redes:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
 correo:'https://drive.google.com/file/d/1nHGBMG4P3il5v4hZ1-RKdHmGzUPiwqnA/view?usp=drivesdk',
 inalambricas:'https://drive.google.com/file/d/18FstfKb36qYtXt3fBySXcZ1D5ZeeUWSu/view?usp=drivesdk',
 seguridad:'https://drive.google.com/file/d/1fmk-QAA8Lz6ATA2WxXzF5_Z2N-W5oh82/view?usp=drivesdk'
};
const notes={
 6981:['redes','ITIC Academy, bloque 42 Redes, versión 2026.1 (29/09/2026): VLAN aparece en A1 tema 118 y redes locales en A2 C6; cotejo curricular.'],
 6982:['redes','ITIC Academy, bloque 42 Redes, versión 2026.1 (29/09/2026): A1 tema 121 sobre CATV/red de cable y A2 C5 sobre medios guiados; la actualización incluye DOCSIS 4.0; cotejo curricular.'],
 6983:['correo','ITIC Academy, bloque 45 Correo, mensajería y directorios, versión 2026.1 (17/08/2026): corresponde a A1 tema 122 y trata SMTP/RFC 5321 y X.400; cotejo curricular.'],
 6984:['inalambricas','ITIC Academy, bloque 46 Redes inalámbricas y comunicaciones móviles, versión 2026.1 (30/09/2026): A1 temas 114/123 y A2 C9/C13; incluye antenas, radiocomunicación y generaciones móviles; cotejo curricular.'],
 6985:['seguridad','ITIC Academy, bloque 48 Seguridad en redes y nivel de aplicación, versión 2026.1 (30/09/2026): A1 tema 125 y A2 C10/T13; incluye seguridad perimetral y cortafuegos; cotejo curricular.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin equivalencia A2 directa';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. El cotejo curricular contextualiza el temario y no sustituye las fuentes primarias citadas en la ficha.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:'Cotejo curricular ITIC Academy: '+entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo ITIC Academy aplicado a las preguntas 6981–6985.');
