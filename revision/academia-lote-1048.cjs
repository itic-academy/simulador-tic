const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1048.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const url='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const descriptions={
  5561:'bloque 38, análisis/diseño orientado a objetos y dominio de solución; cotejo curricular A1-89/A1-93/A2-III-9.',
  5562:'bloque 38, prototipado y construcción de sistemas; correspondencia curricular A1-94/A2-III-3.',
  5563:'bloque 38, MÉTRICA v3 y análisis estructurado/modelos paralelos; correspondencia A1-95/A2-III-2.',
  5564:'bloque 38, análisis estructurado y modelos E/R; correspondencia A1-89/A1-95/A2-II-5.',
  5565:'bloque 38, herramientas de desarrollo y control de versiones; correspondencia A1-100/A1-102/A2-IV-4.'
};
for(const c of log.cambios){
  const q=bank.preguntas.find(x=>x.id===c.id),desc=descriptions[c.id],topics=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
  const note=`Cotejo curricular con Drive: ${desc} Temas oficiales asociados: ${topics}. La correspondencia curricular no sustituye fuentes técnicas.`;
  q.clasificacion.bloque_academia=desc;q.clasificacion.nota=note;q.comentarios=`${q.comentarios||''} ${note}`.trim();q.revision.observaciones+=` ${note}`;
  q.revision.fuentes.push({url,referencia:`ITIC Academy 2026, ${desc}`});c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive agregado al lote 1048.');
