const fs=require('node:fs');
const path=require('node:path');
const root=path.join(__dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-228.json');
const log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const refs={
  1456:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, bloque 17 Adquisición de Sistemas, Alternativas y Rentabilidad de las Inversiones, versión 2026.2 (02-10-2026), §7.2 métodos estáticos y recapitulación sobre pay-back simple y descontado.'},
  1457:{url:'https://drive.google.com/file/d/17A2kewcUQkmIrI3N0MHp8fq8WT2Nv9P3/view?usp=drivesdk',label:'ITIC Academy, bloque 17 Adquisición de Sistemas, Alternativas y Rentabilidad de las Inversiones, versión 2026.2 (02-10-2026), §§2.1–2.2: EVS 5, análisis coste/beneficio, plazo de recuperación y VAN.'},
  1458:{url:'https://docs.google.com/document/d/1idLNt7OqjLIr_pxoBcGeW2vi9Kldm8Z1/edit?usp=drivesdk',label:'ITIC Academy, Tema 043, Ley de Propiedad Intelectual, versión 2, apartado «Obras compuestas», que transcribe y explica el artículo 9 del TRLPI.'},
  1459:{url:'https://drive.google.com/file/d/17UpEFvYfjQ4iUrx8UNNTJIFcj5xO4vlz/view?usp=drivesdk',label:'ITIC Academy, bloque 40 Gestión Documental, versión 2026.1 (23-09-2026), §3: documento, expediente y metadatos; la NTI define los metadatos mínimos de intercambio.'},
  1460:{url:'https://drive.google.com/file/d/18tJzWuBHyd4FbkzQIE5fIbSCRdlrt_1U/view?usp=drivesdk',label:'ITIC Academy, bloque 22 Seguridad, ENS y Ciberseguridad, versión 2026.2 (26-08-2026), §§6.1–6.2, protección física por capas y seguridad de instalaciones; bloque 48 Seguridad en redes y nivel de aplicación, actualización 2026, §10.1 seguridad física y del entorno.'}
};
const map={1456:'A1-42/A2-II-15',1457:'A1-40/A1-42/A2-II-15',1458:'A1-43/A2-II-14',1459:'A1-46/A2-I-9/A2-II-16',1460:'A1-48/A2-II-11/A2-II-13'};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),r=refs[c.id];if(!q?.revision||!r)throw new Error(`Falta revisión o cotejo ${c.id}`);
 const ids=map[c.id].split('/');
 const note=`Cotejo temático con ITIC Academy: ${r.label} Correspondencia programática contrastada con los anexos de las convocatorias oficiales BOE-A-2025-25938 (A1) y BOE-A-2025-26262 (A2): ${ids.join('/')}. El material académico contextualiza el tema; la conclusión se apoya en las fuentes primarias registradas.`;
 q.clasificacion.A1=ids.filter(x=>x.startsWith('A1-'));q.clasificacion.A2=ids.filter(x=>x.startsWith('A2-'));
 q.clasificacion.bloque_academia=`${r.label} Correspondencia oficial: ${ids.join('/')}.`;
 q.clasificacion.nota=note;q.revision.observaciones=`${q.revision.observaciones} ${note}`;q.comentarios=q.revision.observaciones;
 q.revision.fuentes.push({url:r.url,referencia:`ITIC Academy, ${r.label}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo de academia y programas oficiales añadido a los IDs 1456–1460.');
