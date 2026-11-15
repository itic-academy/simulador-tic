const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1328.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const docs={crypto:'https://drive.google.com/file/d/1ijxn_uwd6ZDkbj3oNBpmxjuqee4SeseN/view?usp=drivesdk',admin:'https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk',privacy:'https://drive.google.com/file/d/11T-TKuGJGXeEKwwODM-FlF8pML3QMh_t/view?usp=drivesdk',dev:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk'};
const notes={
 6961:['crypto','ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma (A1 79–81), versión 2026.1, 17-09-2026: cubre AES y algoritmos legados; se cotejó con NIST. El programa oficial A2 consultado no tiene epígrafe específico de cifrado.'],
 6962:['admin','ITIC Academy, bloque 03 Actuación administrativa y Administración digital (A1 7/8/22; A2 I.8), versión 2026.2, 01-10-2026: incluye la administración electrónica y el RD 203/2021 consolidado; se contrastó la regla precisa con el BOE.'],
 6963:['crypto','ITIC Academy, bloque 36 Seguridad, Criptografía, Identificación y Firma (A1 80–81; correspondencia curricular con A2 I.6/I.9), versión 2026.1, 17-09-2026: cubre eIDAS, certificados y prestadores; se verificó la reforma vigente directamente en BOE y EUR-Lex.'],
 6964:['privacy','ITIC Academy, bloque 8 Protección de Datos (A1 27/82; A2 I.7), versión 2026.1, 19-08-2026: cubre obligaciones, registro de actividades y DPD; se acotó el registro al contenido normativo del art. 30 RGPD.'],
 6965:['dev','ITIC Academy, bloque 38 Análisis, diseño y construcción de sistemas de información (A1 86/88–94; A2 III.1/D3/D6/D9), versión 2026.1, 18-09-2026: su apertura aborda ciclo de vida y marco de ingeniería de software. Se actualizó la edición ISO con el catálogo oficial.']
};
const marker='Cotejo curricular ITIC Academy:';
const strip=v=>{const s=(v||'').trim(),i=s.indexOf(marker);return i<0?s:s.slice(0,i).trim()};
for(const c of log.cambios){const q=bank.preguntas.find(x=>x.id===c.id),entry=notes[c.id];assert.ok(q&&entry,'Falta pregunta o nota '+c.id);
 const codes=[...q.clasificacion.A1,...q.clasificacion.A2].join('/')||'sin epígrafe A2 específico';
 const note=marker+' '+entry[1]+' Correspondencia oficial: '+codes+'. Se usa como cotejo académico; la respuesta se verifica en las fuentes primarias enlazadas en la ficha.';
 q.clasificacion.bloque_academia=entry[1];q.clasificacion.nota=(strip(q.clasificacion.nota)+' '+note).trim();q.comentarios=(strip(q.comentarios)+' '+note).trim();q.revision.observaciones=(strip(q.revision.observaciones)+' '+note).trim();
 if(!q.revision.fuentes.some(x=>x.url===docs[entry[0]]))q.revision.fuentes.push({url:docs[entry[0]],referencia:'Cotejo curricular ITIC Academy: '+entry[1]});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo Academy aplicado a las preguntas 6961–6965.');
