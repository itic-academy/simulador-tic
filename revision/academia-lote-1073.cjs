const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),bank=JSON.parse(fs.readFileSync(path.join(root,'preguntas_preparatic.json'),'utf8'));
const logPath=path.join(__dirname,'cambios-lote-1073.json'),log=JSON.parse(fs.readFileSync(logPath,'utf8'));
const sociedad='https://drive.google.com/file/d/1uZ17alMtMUTSxIg6IxRdfmA9DHhzPVKE/view?usp=drivesdk';
const administracion='https://drive.google.com/file/d/1VhLN803FteKuJ9zVjQSomuig_1x9fBSP/view?usp=drivesdk';
const proteccion='https://drive.google.com/file/d/1uS8S8axBSb22s9Dbv2mTsFaHUUVlowiM/view?usp=drivesdk';
const mapa={
 5686:{a1:[18],a2:['I-6'],urls:[sociedad],desc:'ITIC Academy, bloque 06 Economía, Sociedad, Empleo y Transformación Digital, versión 2026.2: cubre impacto social de las TIC, transformación digital y sociedad de la información, con correspondencia A1-18/A2-O6 (oficial A2-I.6). El DESI 2022 no aparece como unidad específica en el material; se registra como marco histórico y se verifica en el archivo de indicadores de la Comisión Europea.'},
 5687:{a1:[24],a2:[],urls:[administracion],desc:'ITIC Academy, bloque 03 Actuación Administrativa y Administración Digital 2026.2, § 7.6: indica expresamente que las incompatibilidades del personal se rigen por la Ley 53/1984; se coteja con el contenido de empleo público A1-24. No se localizó un epígrafe A2 específico de esta ley en la convocatoria oficial.'},
 5688:{a1:[27],a2:['I-7'],urls:[proteccion],desc:'ITIC Academy, bloque 08 Protección de Datos 2026, apartados sobre categorías especiales RGPD, cobertura A1-27/A1-82 y A2-O7 (tema oficial A2-I.7). El alcance exacto de la lista del art. 9.1 se contrasta con el texto del RGPD en el DOUE.'},
 5689:{a1:[27],a2:['I-7'],urls:[proteccion],desc:'ITIC Academy, bloque 08 Protección de Datos 2026, apartados sobre responsable, encargado y corresponsabilidad en el RGPD; cobertura A1-27/A2-O7 (tema oficial A2-I.7). La definición literal procede del art. 4.7 del Reglamento.'},
 5690:{a1:[34],a2:['II-12'],urls:[],desc:'El programa oficial GSI A2 tema II.12 incluye centros de contacto, CRM, arquitectura multicanal e IVR; A1-34 cubre organización de centros de sistemas y atención a usuarios. Las búsquedas por Contact Center/CRM/IVR en el temario ITIC Academy de Drive no localizaron un módulo docente específico para A2-II.12; no se atribuye la materia a un documento no hallado. La distinción funcional se apoya en documentación técnica Cisco.'}
};
for(const c of log.cambios){
 const q=bank.preguntas.find(x=>x.id===c.id),m=mapa[c.id];assert.ok(q&&m,`Falta pregunta o mapeo ${c.id}`);
 q.clasificacion.A1=m.a1.map(n=>`A1-${n}`);q.clasificacion.A2=m.a2.map(n=>`A2-${n}`);
 const tags=[...q.clasificacion.A1,...q.clasificacion.A2].join('/'),marker='Cotejo curricular ITIC Academy:';
 const trimPrior=v=>{const i=(v||'').indexOf(marker);return i<0?(v||'').trim():v.slice(0,i).trim();};
 q.clasificacion.bloque_academia=m.desc;
 const note=`${marker} ${m.desc}${tags?` Temas oficiales asociados: ${tags}.`:''} La academia se usa para cotejo de cobertura; la respuesta se fundamenta en la fuente primaria normativa o técnica citada en la revisión individual.`;
 q.clasificacion.nota=`${trimPrior(q.clasificacion.nota)} ${note}`.trim();q.comentarios=`${trimPrior(q.comentarios)} ${note}`.trim();q.revision.observaciones=`${trimPrior(q.revision.observaciones)} ${note}`.trim();
 const urls=new Set([sociedad,administracion,proteccion]);q.revision.fuentes=q.revision.fuentes.filter(f=>!urls.has(f.url));
 for(const url of m.urls)q.revision.fuentes.push({url,referencia:`ITIC Academy: ${m.desc}`});
 c.actualizada=structuredClone(q);
}
fs.writeFileSync(path.join(root,'preguntas_preparatic.json'),JSON.stringify(bank,null,2)+'\n');
fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
console.log('Cotejo curricular A1/A2 actualizado para IDs 5686–5690.');
