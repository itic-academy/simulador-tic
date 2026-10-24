const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-226.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const sourceUrl='https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk';
const source='ITIC Academy, bloque 08 Protección de Datos, versión 2026.3 (01-10-2026): autoridades de control (8.1–8.2), consentimiento (3.3–3.4), categorías especiales (2.4) y brechas de seguridad (6.4–6.5). Cotejo programático y temático; la respuesta legal se fundamenta en RGPD/LOPDGDD.';
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id); if(!q?.revision)throw new Error(`Falta revisión ${c.id}`);
 const note=`Cotejo temático: ${source} Correspondencia oficial A1-27/A2-I-7.`;
 q.clasificacion.A1=['A1-27'];q.clasificacion.A2=['A2-I-7'];q.clasificacion.bloque_academia=`${source} A1-27/A2-I-7.`;q.clasificacion.nota=note;
 q.revision.observaciones=`${q.revision.observaciones} ${note}`;q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:sourceUrl,referencia:`ITIC Academy, ${source}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo con ITIC Academy añadido a los IDs 1446–1450.');
