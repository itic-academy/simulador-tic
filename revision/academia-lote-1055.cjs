const fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1055.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const project='https://drive.google.com/file/d/1DMz3yKo5YBTwNecdydOqWB9CxkyrQZ10/view?usp=drivesdk';
const design='https://drive.google.com/file/d/1UiTG2T4TSlmpyXgU6v5KVP1Z1ERmyGzN/view?usp=drivesdk';
const si='https://drive.google.com/file/d/1skUPcsGKh1eClZx6ixj2anHUVzEqy9qm/view?usp=drivesdk';
const hardware='https://drive.google.com/file/d/12heek9CTZHiGHjtWvLjdjOE7vIQdlYFm/view?usp=drivesdk';
const map={
 5596:{url:project,a1:[35],a2:['III-2'],desc:'material ITIC Academy Gantt/PERT, técnicas de planificación y precedencias; correspondencia curricular con dirección/seguimiento A1-35 y planificación de proyectos A2-III.2. La convención de la matriz se contrasta con la publicación del INAP.'},
 5597:{url:design,a1:[44],a2:['III-14'],desc:'bloque Análisis, diseño y construcción de sistemas de información (2026), diseño de interfaces; correspondencia general con diseño universal/usabilidad. El listado de los siete principios se comprueba directamente en el Center for Universal Design; no se atribuye a la academia la acuñación de la lista.'},
 5598:{url:design,a1:[44],a2:['III-14'],desc:'bloque Análisis, diseño y construcción de sistemas de información (2026), diseño de interfaces/UX; correspondencia curricular. La edición ISO y su estado se verifican en el catálogo primario de ISO.'},
 5599:{url:hardware,a1:[53],a2:['II-13','IV-6'],desc:'bloque Hardware v2 2026, servidores y centros de proceso de datos (A1 52/53/54) y planificación física/protección del CPD (A2 IV.6); encaje del control físico, cotejado con la guía gubernamental de seguridad de centros de datos.'},
 5600:{url:hardware,a1:[54],a2:['IV-3'],desc:'bloque Hardware v2 2026, § “Chipset (bridges)”, arquitectura de ordenadores, buses y bridges; corresponde a dispositivos PC/microinformática A1-54 y, por proximidad de hardware, mantenimiento de equipos A2-IV.3. La distribución concreta se comprueba con la hoja técnica de Intel.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=map[c.id];if(!q||!m)throw Error(`Falta pregunta/mapeo: ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');
 const note=`Cotejo curricular de ITIC Academy: ${m.desc} Temas oficiales asociados: ${tags}. La academia orienta la cobertura y clasificación; la verificación se fundamenta en los estándares y documentos primarios citados.`;
 const marker='Cotejo curricular de ITIC Academy:';
 const trimPrior=value=>{const i=(value||'').indexOf(marker);return i<0?(value||'').trim():value.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;q.clasificacion.nota=note;
 q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();
 q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 q.revision.fuentes=q.revision.fuentes.filter(f=>f.url!==m.url);
 q.revision.fuentes.push({url:m.url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(root+'/preguntas_preparatic.json',JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular Drive agregado a las cinco preguntas del lote 1055.');
