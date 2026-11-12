const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1075.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const urls={
 internet:'https://drive.google.com/file/d/12Yp-woyL0LxoCD7MZhhQgd6Yf2UIVggH/view?usp=drivesdk',
 digital:'https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk',
 cloud:'https://drive.google.com/file/d/16Er3cneQ-Vik3zSjYq6zQUOfSKK4vxVu/view?usp=drivesdk',
 database:'https://drive.google.com/file/d/1-wKuG48GY5sRyLdbCrJU5gWxyILwNiqJ/view?usp=drivesdk',
 elearning:'https://drive.google.com/file/d/15iokZokiVzk3qpTTQvMpDN0W27PL8tbv/view?usp=drivesdk'
};
const mapa={
 5696:{a1:[109],a2:['IV-13'],urls:[urls.internet],desc:'ITIC Academy, bloque 42 Redes, versión 2026: incluye red Internet y servicios básicos (A1-109). El documento aporta contexto sobre infraestructura y servicios, no establece un órgano único de gobernanza; la misión de ISOC y el papel normalizador del IETF se cotejan en sus fuentes institucionales.'},
 5697:{a1:[18],a2:['I-6'],urls:[urls.digital],desc:'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2: cotejo curricular con impacto de TIC/sociedad de la información y transformación digital (A1-18/A2-I.6). HPC se conserva como una iniciativa citada en las orientaciones históricas 2019–2024 de la Comisión, no se atribuye como contenido literal de la unidad docente.'},
 5698:{a1:[55],a2:['II-1'],urls:[urls.cloud],desc:'ITIC Academy, bloque 25 Cloud Computing, versión 2026: cubre IaaS/PaaS/SaaS y responsabilidad compartida según NIST SP 800-145, para A1-55/A2-II.1.'},
 5699:{a1:[63,64],a2:['II-5','III-4'],urls:[urls.database],desc:'ITIC Academy, bloque 29 Bases de Datos, SQL y Modelado de Datos, versión 2026: cubre SGBD, SQL, transacciones/concurrencia y diseño, en A1-63/A1-64/A2-II.5/A2-III.4. Las cuatro propiedades de ACID se contrastan con PostgreSQL.'},
 5700:{a1:[73],a2:[],urls:[urls.elearning],desc:'ITIC Academy, bloque 33 E-Learning y Sistemas de Información Geográfica, versión 2026.1: incluye plataformas LMS/LCMS, e-learning y SCORM para A1-73; el mapa de la academia indica que el epígrafe no tiene correspondencia específica en A2.'}
};
const marker='Cotejo curricular ITIC Academy:';
const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/');q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:' Sin tema A2 específico equivalente.'} La academia se usa para cotejar cobertura; las respuestas se fundamentan en las fuentes técnicas primarias citadas en la revisión individual.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const related=new Set(Object.values(urls));q.revision.fuentes=q.revision.fuentes.filter(f=>!related.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5696–5700.');
