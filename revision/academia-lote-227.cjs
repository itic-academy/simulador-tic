const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-227.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const refs={
  1451:{url:'https://drive.google.com/file/d/1-xmHgvxArWY8GroFD1eSdyPrAQjkBpzo/view?usp=drivesdk',label:'ITIC Academy, bloque 09 Organización y Gestión de los Sistemas de Información, versión 2026.3 (01-10-2026): modelo de Nolan incluido en la revisión de organización y gestión; cotejo temático, sin atribuirle rango de autoridad académica ni presentar la hipótesis como ley universal.'},
  1452:{url:'https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk',label:'ITIC Academy, bloque 38 Análisis, Diseño y Construcción de Sistemas de Información, versión 2026.1 (18-09-2026): A1-97/A2-III-6, construcción, CI/CD, DevOps e infraestructura como código.'},
  1453:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',label:'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2 (26-08-2026): análisis de riesgos y medidas de seguridad/adecuación al ENS.'},
  1454:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, bloque 17 Adquisición de Sistemas, Alternativas y Rentabilidad de las Inversiones, versión 2026.2 (02-10-2026): §3.2, tabla de técnicas para asignar pesos, Delphi y consulta iterativa a expertos.'},
  1455:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, bloque 17 Adquisición de Sistemas, Alternativas y Rentabilidad de las Inversiones, versión 2026.2 (02-10-2026): §3.3, normalización de puntuaciones antes de agregar.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=refs[c.id];if(!q?.revision||!r)throw new Error(`Falta revisión o cotejo ${c.id}`);
 const ids=[...q.clasificacion.A1,...q.clasificacion.A2];
 const note=`Cotejo temático con ITIC Academy: ${r.label} Correspondencia programática oficial: ${ids.join('/')||'sin epígrafe específico'}. Las fuentes primarias citadas en el registro fundamentan la revisión.`;
 q.clasificacion.bloque_academia=`${r.label} Correspondencia: ${ids.join('/')||'sin epígrafe específico'}.`;
 q.clasificacion.nota=note;q.revision.observaciones=`${q.revision.observaciones} ${note}`;q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:r.url,referencia:`ITIC Academy, ${r.label}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo temático de ITIC Academy añadido a los IDs 1451–1455.');
